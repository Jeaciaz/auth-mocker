import React, { useState } from 'react';
import classNames from 'classnames'
import style from './app.module.css';
import SignIn from "./components/sign-in/sign-in";
import logo from './assets/img-logo.png';
import iconSignIn from './assets/icon-sign-in.svg';
import iconCreateAccount from './assets/icon-create-account.svg';
import iconForgotPassword from './assets/icon-forgot-password.svg';
import CreateAccount from "./components/create-account/create-account";
import ForgotPassword from "./components/forgot-password/forgot-password";

const tabList = [
    {
        text: 'Sign in',
        icon: iconSignIn,
        component: SignIn
    },
    {
        text: 'Create account',
        icon: iconCreateAccount,
        component: CreateAccount
    },
    {
        text: 'Forgot password',
        icon: iconForgotPassword,
        component: ForgotPassword
    }
]

function App() {
    const [activeTab, setActiveTab] = useState(tabList[0]);

    const TabContent = activeTab.component

    return (
        <section className={style.page}>
            <div className={style.container}>
                <aside className={style.sidebar}>
                    <img className={style.logo} src={logo} alt="%APPNAME% Logo"/>
                    <h1 className={style.title}>%APPNAME%</h1>
                    <ul className={style.tabs} role="tablist">
                        { tabList.map((tab) => (
                            <li key={tab.text}>
                                <button onClick={() => setActiveTab(tab)} className={classNames(style.tab, activeTab === tab && style.active)} tabIndex={0} role="tab" aria-selected={activeTab === tab}>
                                    <img className={style.tabIcon} src={tab.icon} alt={`${tab.text} icon`} />
                                    <span>{tab.text}</span>
                                </button>
                            </li>
                        ))
                        }
                    </ul>
                </aside>
                <main className={style.main}>
                    <TabContent />
                </main>
            </div>
        </section>
    );
}

export default App;
