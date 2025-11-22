declare interface ClrfulChain {
    toString(): string
    [key: string]: any
}

declare interface ClrfulType {
    color(text: string, style: string): string
    gradient(text: string, colors: string[]): string
    rainbow(text: string): string
    figlet(text: string, font?: string): Promise<ClrfulChain>

    [color: string]: any
}

declare const Clrful: ClrfulType
export = Clrful
