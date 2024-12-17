import styles from "./page.module.scss";
import Hero from "@/components/three/scenes/Hero";

export default function Home() {
    return (
        <>
            <div className={styles.hero}>
                <Hero/>
            </div>
        </>
    );
}
