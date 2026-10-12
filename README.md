# Yaşar Üniversitesi Öğrenci Oryantasyon Sistemi

Yaşar Üniversitesi'ne yeni katılan öğrencilerin üniversiteyi tanıması ve kayıt sonrası yapması gerekenleri adım adım tamamlaması için web uygulaması.

## Özellikler

- **Profil:** Öğrenci giriş türünü (YKS, YKS Ek Kontenjan, Yatay Geçiş, Dikey Geçiş, Lisansüstü, Yabancı Uyruklu), dönemini ve durumunu (tam burslu, hazırlık, e-Devlet ile kayıt yapamama vb.) seçer.
- **Adımlarım:** Profile göre süzülmüş adım listesi. Adımlar tarihe değil önkoşullara göre açılır; kurum kararı gereken adımlar (intibak, öğrenci numarası) "Onay bekliyor" durumundan geçer. Her adımda resmi sayfa bağlantıları vardır.
- **Yaşar'ı Tanı:** Kampüs, dijital sistemler, birimler, kampüs yaşamı ve akademik hayat özeti.
- **Bilgi Yarışması:** Oryantasyonda öğrenilenleri pekiştiren kısa sorular.

İlerleme tarayıcıda (`localStorage`) saklanır; sunucu veya veritabanı gerekmez.

## Çalıştırma

Node.js 18+ gerekir, başka bağımlılık yoktur.

```bash
npm start   # http://localhost:8080
npm test    # adım akışı testleri
```

## Yayın (GitHub Pages)

`main` dalına her gönderimde testler çalışır ve uygulama GitHub Pages'e yayınlanır (`.github/workflows/pages.yml`). İlk kurulumda depo ayarlarında **Settings → Pages → Build and deployment → Source** alanını **GitHub Actions** yapmak gerekir.

## Yapı

| Dosya | İçerik |
|---|---|
| `js/data.js` | Öğrenci tipleri, adımlar, "Yaşar'ı Tanı" bölümleri ve yarışma soruları |
| `js/engine.js` | Adım akışı mantığı (uygulanabilirlik, kilitleme, onay, geri alma) |
| `js/app.js` | Arayüz |
| `docs/adimlar.md` | Adımların kaynaklarıyla birlikte açıklaması |

Yeni bir adım eklemek için `js/data.js` içindeki `STEPS` listesine bir kayıt eklemek yeterlidir. `verified: false` olan adımlar arayüzde "Teyit edilmeli" olarak işaretlenir.
