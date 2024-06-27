import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import { Button, Form, Input, Variant } from "design-system-toshyro";
import '../assets/tailwind.css';

function App() {
  const [infos, setInfos] = useState<any>();

  useEffect(() => {
    const fetchLogin = async () => {
      try {
        const result: any = await new Promise((resolve) =>
          chrome.storage.local.get('login', (data) => resolve(data))
        );
        if (result.login) {
          setInfos(result.login);
        }
      } catch (error) {
        console.error("Failed to fetch login data from chrome.storage.local", error);
      }
    };
  
    fetchLogin();
  }, []);

  function handleLogin({ email, password }) {
    fetch("https://cs-invest-2.vercel.app/api/user/auth", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(data => data.json())
      .then(json => {
        if(json.message) {
          alert("Email ou Senha inválido.");
          return;
        }
        chrome.storage.local.set({ login: json }, () => {
          setInfos(json);
        });
      })
  }

  function handleSignOut() {
    setInfos(null);
    chrome.storage.local.remove('login');
  }
  
  function Dashboard() {
    return (
      <div className={"flex h-screen flex-1 flex-col justify-center px-6 py-18 dark:bg-gradient-to-bl from-slate-800 to-slate-900"}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col gap-4">
          <h3 className={"text-center text-xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white"}>
            Bem-vindo {infos.name}
          </h3>
          <div className="flex w-full items-center justify-center">
            <button onClick={handleSignOut} className="whitespace-no-wrap rounded-md text-base font-semibold px-[26px] h-[40px] flex items-center justify-center border border-red-500 text-red-500 hover:bg-red-500 hover:text-white">Sair</button>
          </div>
        </div>
      </div>
    )
  }
  
  function LoginForm() {
    return (
      <div className={"flex h-screen flex-1 flex-col justify-center px-6 py-18 dark:bg-gradient-to-bl from-slate-800 to-slate-900"}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className={"text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white"}>
            Acesse sua conta
          </h2>
        </div>
  
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex flex-col gap-10">
          <Form className="space-y-6 dark:bg-opacity-0">
            <>
              <Input label={"Email"}
                name={"email"}
                type={"email"}
                className={"text-slate-200 border-slate-700"}
                validation={{ required: "Este campo é obrigatório." }} />
  
              <Input label={"Senha"}
                name={"password"}
                type={"password"}
                className={"text-slate-200 border-slate-700"}
                validation={{ required: "Este campo é obrigatório." }} />
  
              <Button type="button"
                onSubmit={handleLogin}
                className={"border-0"}
                full>
                Entrar
              </Button>
            </>
          </Form>
        </div>
      </div>
    )
  }

  if (infos) return <Dashboard />
  return <LoginForm />
}

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
