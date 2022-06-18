import { CloseButton } from "./CloseButton";
import ideaImageUrl from "../assets/idea.png";
import problemImageUrl from "../assets/problem.png";
import otherImageUrl from "../assets/other.png";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = { 

    BUG: {
        title: 'Problema',
        image: {
            source: problemImageUrl,
            alt: 'Exclamação',
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada',
        },
    },

    OTHER: {
        title: 'Outro',
        image: {
            source: otherImageUrl,
            alt: 'Três pontos',
        },
    } ,
}

export type feedbackType = keyof typeof feedbackTypes;

export function Widgetform() {
    const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null)

function handleRestartFeedback() {
    setFeedbackType(null);
}

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            

            {!feedbackType ? (
              <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
            <FeedbackContentStep feedbackType={feedbackType} 
            feedbackType={feedbackType}
            onFeedbackRestartRequested={handleRestartFeedback}
            />
            )
}
   

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" href="https://br.linkedin.com/in/emillykamile" target="_Blank">Emilly Kamile.</a>
            </footer>
        </div>
    );
}