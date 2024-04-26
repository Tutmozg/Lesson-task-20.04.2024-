import styles from './App.module.css'
import List from './components/list/list'
import Block from './components/block/block'
import Text from './components/text/text'

function App() {
    return (
        <div className={styles['container']}>
            <h1>Text</h1>
            <List />
            <Block />
            <Text />
        </div>
    )
}

export default App