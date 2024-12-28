import styles from "./Header.module.scss";
import { LoginForm } from "./LoginForm";
import { Logo } from "./Logo";

interface HeaderProps {
    children?: React.ReactNode;
}

export const Header = ({}: HeaderProps) => {
    return (
        <header className={styles.header}>
            <Logo />
            <LoginForm />
        </header>
    );
};
