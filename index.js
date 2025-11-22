const figlet = require("figlet")
const { applyColor, colorMap, gradientText, rainbowText } = require("./function.js")

const styles = Object.keys(colorMap).filter(s => s !== "reset")

function chainable(text) {
    let current = text
    const handler = new Proxy({}, {
        get(_, prop) {
            if (styles.includes(prop)) {
                current = applyColor(current, prop)
                return handler
            }
            if (prop === "toString") return () => current
            return handler
        }
    })
    return handler
}

function figletRender(text, font = "Standard") {
    return new Promise((resolve, reject) => {
        figlet.text(text, { font }, (err, out) =>
            err ? reject(err) : resolve(out)
        )
    })
}

const Clrful = {
    color: (t, s) => applyColor(t, s),
    gradient: (t, c) => gradientText(t, c),
    rainbow: (t) => rainbowText(t),
    figlet: async (text, font = "Standard") => {
        const art = await figletRender(text, font)
        return chainable(art)
    },
    ...styles.reduce((acc, s) => {
        acc[s] = (t) => applyColor(t, s)
        return acc
    }, {})
}

module.exports = Clrful
module.exports.default = Clrful
