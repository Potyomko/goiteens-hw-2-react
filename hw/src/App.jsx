import './App.css';
import user from './user.json';
import { Profile } from './components/Profile';
import transactions from './transactions.json';
import { TransactionHistory } from './components/TransactionHistory';

const {username, tag, location, avatar, stats} = user;

export function App() {
    return (
        <>
            <Profile
            username = {username}
            tag = {tag}
            location = {location}
            avatar = {avatar}
            stats = {stats}
            />
            <TransactionHistory items={transactions}/>
        </>
    )
}