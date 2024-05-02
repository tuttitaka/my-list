import styles from "./styles.module.css";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div>
                <h1>MyTodo</h1>

                <span>Bem Vindo!</span>
            </div>
            <div>

            </div>
        </header>
    );
}