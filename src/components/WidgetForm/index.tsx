import { CloseButton } from "../CloseButton"

import BugSvg from '../../assets/bug.svg'
import IdeaSvg from '../../assets/idea.svg'
import ThoughtSvg from '../../assets/thought.svg'
import { useState } from "react"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"

export const feedbackOptions = {
    BUG: {
        title: 'Problema',
        img: BugSvg
    },
    IDEA: {
        title: 'Ideia',
        img: IdeaSvg
    },
    OTHER: {
        title: 'Outro',
        img: ThoughtSvg
    }
}

export type FeedbackType = keyof typeof feedbackOptions

export const WidgetForm = () => {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex items-center flex-col shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>

            {!feedbackType ? (
                <FeedbackTypeStep onclick={setFeedbackType} />
            ) : (
                <h1>Hello World</h1>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a href="https://github.com/YaGRRusso" className="underline underline-offset-2">Yago Russo</a>
            </footer>
        </div>
    )
}