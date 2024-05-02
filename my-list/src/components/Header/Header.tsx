import styles from "./styles.module.scss";
import { StartCards } from "../StatsCard/StatsCard";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.conteiner}>
                <div>
                    <h1>MyTodo</h1>

                    <span>Bem Vindo!</span>
                </div>
                <div>
                    <StartCards title="Total de Tarefas" value={5}/>
                    <StartCards title="Tarefas Pendentes" value={4} />
                    <StartCards title="Tarefas concluídas" value={1}/>
                </div>

            </div>
            
        </header>
    );
}