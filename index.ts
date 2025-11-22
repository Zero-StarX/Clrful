import figlet from "figlet"
import { applyColor, colorMap, gradientText, rainbowText } from "./function.js"

const styles = Object.keys(colorMap).filter(s => s !== "reset")

function chainable(text: string) {
    let current = text

    const handler = new Proxy(
        {},
        {
            get(_, prop: string) {
                if (styles.includes(prop)) {
                    current = applyColor(current, prop)
                    return handler
                }
                if (prop === "toString") return () => current
                return handler
            }
        }
    )

    return handler
}

async function figletRender(text: string, font: string) {
    return new Promise<string>((resolve, reject) =>
        figlet.text(text, { font }, (err, out) =>
            err ? reject(err) : resolve(out)
        )
    )
}

export const Clrful = {
    color: (text: string, style: string) => applyColor(text, style),
    gradient: (text: string, colors: string[]) => gradientText(text, colors),
    rainbow: (text: string) => rainbowText(text),

    figlet: async (text: string, font: string = "Standard") => {
        const art = await figletRender(text, font)
        return chainable(art)
    },

    ...styles.reduce((acc, s) => {
        acc[s] = (t: string) => applyColor(t, s)
        return acc
    }, {} as Record<string, (t: string) => string>)
}

export default Clrful
