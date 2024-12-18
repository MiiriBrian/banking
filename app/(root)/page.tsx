import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
    const loggedIn = {
     firstName: 'Brian', 
     lastName:"Gitau",
     email: 'miiri.brian@gmail.com'};

  return (
   <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
               <HeaderBox 
                    type = "greeting"
                    title = "Welcome"
                    user = {loggedIn?.firstName || 'Guest'}
                    subtext = "Access and manage your account and transactions."
               />

               <TotalBalanceBox
               accounts={[]}
               totalBanks={3}
               totalCurrentBalance= {6780055}
/>
               
            </header>

            RECENT TRANSACTIONS

        </div>

        <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 12023}, {currentBalance: 23223}]} 
        
        />
   </section>
  )
}

export default Home