# 🌈 Clrful — Advanced Terminal Styling for Node.js

**Clrful** adalah library Node.js untuk memberikan warna ANSI, efek **gradient**, **rainbow**, dan teks ASCII menggunakan **Figlet**.  
Library ini mendukung **ESM** dan **CommonJS**, memungkinkan penggunaan fleksibel pada proyek apa pun seperti bot WhatsApp, Telegram, CLI tools, panel, dan lainnya.

## 📦 Instalasi

```
npm install clrful
```

## 📥 Import Library

🔹 **ESM**
```
import Clrful from "clrful"

console.log(Clrful.red("Hello ESM"))
console.log(Clrful.rainbow("Rainbow Text"))
```
🔹 **CommonJS**
```
const Clrful = require("clrful")

console.log(Clrful.green("Hello CommonJS"))
console.log(Clrful.gradient("Gradient", ["red", "blue", "yellow"]))
```

## 📝 Deskripsi
Clrful adalah library yang dirancang untuk memberikan tampilan terminal yang lebih hidup dan menarik dengan:
- Warna ANSI Lengkap
- Gradient (multi warna)
- Rainbow Effect
- Figlet ASCII Art dengan warna chain
- Support ESM + CJS tanpa konfigurasi tambahan
- Tanpa TypeScript namun tetap memiliki type definitions (.d.ts)
- Ringan, cepat, dan kompatibel dengan semua lingkungan Node.js

**Cocok digunakan untuk:**
- CLI Tools
- WhatsApp Bot (Baileys)
- Telegram Bot
- Panel / Console Output
- Logger Custom

## 🔥 Contoh Penggunaan
**1. Rainbow Text**
```
console.log(Clrful.rainbow("Hello World"))
```
**2. Gradient Text**
```
console.log(Clrful.gradient("Gradient Text", ["red", "blue", "yellow"]))
```
**3. Warna ANSI**
```
console.log(Clrful.red("Red Text"))
console.log(Clrful.bgBlue("Background Blue"))
console.log(Clrful.brightGreen("Bright Green"))
```
**4. Figlet + Chain Warna**
```
const art = await Clrful.figlet("CLR", "Standard")
console.log(art.brightGreen.toString())
```

## 🐛 Report Bug
Jika kamu menemukan bug atau ingin request fitur baru:
👉 GitHub Issues:
https://github.com/Zero-StarX/Clrful/issues
Atau bisa langsung open PR di repository tersebut.

## ⭐ Terima Kasih
Gunakan Clrful untuk membuat tampilan CLI kamu lebih hidup dan profesional!
