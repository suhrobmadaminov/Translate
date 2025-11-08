# Polyglot Translator (Uz-En-Ru)

Modern, responsive web application that translates any given word or text between Uzbek, English, and Russian in real time using the MyMemory Translation API. It includes auto language detection, caching, offline fallbacks, history, favorites, statistics, download/export utilities, and a polished UI/UX with glassmorphism styling.

## ✨ Asosiy imkoniyatlar

- **Real-time tarjima**: Uz ↔ En ↔ Ru yo‘nalishlarida, bir vaqtning o‘zida bir nechta tilga natija.
- **Tilni aniqlash**: Matn kiritilishi bilan avtomatik tanish; offline/heuristik fallback mavjud.
- **Tarix va sevimlilar**: Oxirgi 20 ta tarjima `localStorage`ga saqlanadi, eksport JSON/TXT shaklida.
- **Offline korpus**: Internet bo‘lmasa mashhur 100 ta so‘z bo‘yicha zaxira tarjimalar.
- **Statistika paneli**: Kunlik/jami tarjimalar, eng ko‘p ishlatilgan til, API limiti hisoblagichi.
- **Responsive dizayn**: Desktop, tablet va mobil qurilmalarda to‘liq moslashuvchan.
- **Qo‘shimcha funksiyalar**: Nusxalash, ulashish, kategoriyalar, limitni yangilash tugmasi, vizual feedback.

## 📁 Tuzilma

```
Translate/
├── index.html      # Asosiy HTML sahifa
├── styles.css      # Glassmorphism asosidagi dizayn
├── app.js          # Tarjima logikasi, API chaqiruvlari, kesh, tarix, statistika
├── README.md       # Loyihaning hujjati (shu fayl)
└── requirements.txt# GitHub uchun bo‘sh placeholder
```

## 🚀 Ishga tushirish

1. Loyihani klonlang yoki ZIP ko‘rinishida yuklab oling.
2. `Translate/index.html` faylini brauzerda oching (yoki `http-server`, `Live Server`, `python -m http.server` kabi lokal serverdan foydalaning).
3. Internet ulangan bo‘lsa MyMemory API orqali live tarjima, ulanmagan bo‘lsa offline korpusdan foydalaniladi.

> **Eslatma:** Ba’zi brauzerlar `file://` rejimida `fetch` chaqiruvlarini bloklashi mumkin. Agar tarjima ishlamasa, loyihani lokal HTTP serverda ishga tushiring.

## ⚙️ MyMemory API cheklovlari

- Bepul rejada kuniga 500 so‘rov (IP manzil bo‘yicha) mavjud.
- Limitga yaqinlashganda avtomatik/qo‘lda so‘rovlar sonini kamaytirish tavsiya qilinadi.
- Statistika bo‘limida “Limitni yangilash” tugmasi mavjud bo‘lsa-da, haqiqiy limit MyMemory tomonidan UTC bo‘yicha kunlik yangilanadi.

## 🔄 Muqobil API yoki fallback

Ko‘proq so‘rov, barqarorlik yoki yuqori aniqlik kerak bo‘lsa:

1. Google Cloud Translation API, DeepL, Yandex va boshqa xizmatlardan API kalit oling.
2. `app.js` ichida MyMemory chaqiruvlari joyiga (yoki `catch` blokida fallback sifatida) shu servisni ulang.
3. Limit xatosi (`429`) kelganda avtomatik ravishda zaxira API’ga o‘tish uchun qo‘shimcha shartlardan foydalaning.

## 🧪 Tavsiya etilgan tekshiruvlar

- Har bir til kombinatsiyasi (Uz → En, Uz → Ru, En → Uz, En → Ru va hokazo) uchun namunaviy matnlar bilan sinovdan o‘tkazing.
- “Tilni aniqlash” rejimini yoqib/o‘chirib ko‘ring.
- Internetni vaqtincha o‘chirib, offline korpus ishlashini tekshiring.
- Tarixni tozalash, JSON/TXT yuklab olish, sevimlilarni qo‘shish/olib tashlash kabi funksiyalarni sinab ko‘ring.

## 📜 Litsenziya

Loyiha muallif tomonidan taqdim etilgan. Kerak bo‘lsa, o‘zingizga mos litsenziya qo‘shing (MIT/GPL va hokazo).

