import styles from "../home/home.module.css";
import styled from "styled-components";
import { tweets } from "../../utils/tweets";

const Feed = styled.div`
    max-width: 42rem ;
    width : 100% ;
`;

export default function Home() {
    return <main className={styles.feed}>
        <Feed className="w-2 border-x border-slate-300">
            <h2>Hello</h2>
        </Feed>
    </main>;
}

