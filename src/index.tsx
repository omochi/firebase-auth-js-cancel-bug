import { ReactElement, StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { initializeApp, FirebaseApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import firebaseJson from "../firebase.json";

let count = 0;

export function App(props: { firebase: FirebaseApp }): ReactElement {
    useEffect(() => {
        console.log("on mount");

        const auth = getAuth(props.firebase);

        const cancel = auth.onAuthStateChanged((user) => {
            count += 1;
            console.log("onAuthStateChanged", count);
        });

        return () => {
            console.log("on unmount");
            cancel();
        }
    }, []);

    return <div>
        hello world
    </div>
}

function main() {
    const firebase = initializeApp(firebaseJson);
    console.log(firebaseJson, firebase);

    const props = {
        firebase
    };

    const root = createRoot(document.getElementById("root")!!);
    root.render(
        <StrictMode>
            <App { ...props }/>
        </StrictMode>
    )
}

main()
