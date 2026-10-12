// Oryantasyon içeriği: öğrenci tipleri, adımlar ve "Yaşar'ı Tanı" bölümleri.
// Kaynak: ilkkayit.yasar.edu.tr, yasar.edu.tr/ogrenci, oim.yasar.edu.tr, international.yasar.edu.tr
// verified: true  -> resmi sayfada doğrulandı
// verified: false -> çıkarım, birimle teyit edilmeli

export const STUDENT_TYPES = [
  { id: 'YKS', label: 'YKS Kaydı', description: 'ÖSYM YKS ile yerleşen öğrenciler' },
  { id: 'EK', label: 'YKS Ek Kontenjan', description: 'Ek yerleştirme ile yerleşen öğrenciler' },
  { id: 'YG', label: 'Yatay Geçiş', description: 'Başka bir programdan veya üniversiteden geçiş yapan öğrenciler' },
  { id: 'DG', label: 'Dikey Geçiş', description: 'DGS ile ön lisanstan lisansa geçen öğrenciler' },
  { id: 'LU', label: 'Lisansüstü', description: 'Yüksek lisans, doktora ve bütünleşik yüksek lisans öğrencileri' },
  { id: 'YU', label: 'Yabancı Uyruklu', description: 'Uluslararası öğrenciler' },
];

export const TERMS = [
  { id: 'GUZ', label: 'Güz' },
  { id: 'BAHAR', label: 'Bahar' },
];

// Profil soruları. `types` verilmişse soru yalnızca o tiplere sorulur.
export const PROFILE_FLAGS = [
  { id: 'tamBurslu', label: 'Tam burslu muyum?' },
  { id: 'hazirlik', label: 'İngilizce hazırlık sınıfına yerleştim (veya muaf olamadım)' },
  { id: 'edevletYok', label: 'e-Devlet üzerinden kayıt yapamıyorum', types: ['YKS', 'EK', 'DG'] },
  { id: 'geciciKayit', label: 'Lise mezuniyetim henüz kesinleşmedi (geçici kayıt)', types: ['YKS', 'EK'] },
  { id: 'yurtDisindan', label: 'Yurt dışındaki bir üniversiteden geliyorum', types: ['YG'] },
  { id: 'yurt', label: 'Yurtta kalmak istiyorum' },
  { id: 'engel', label: 'Engelli öğrenci desteğine ihtiyacım var' },
];

export const CATEGORIES = [
  { id: 'kayit', label: 'Kayıt' },
  { id: 'hesap', label: 'Hesaplar ve Kimlik' },
  { id: 'akademik', label: 'Akademik Başlangıç' },
  { id: 'kampus', label: 'Kampüs Yaşamı' },
  { id: 'kapanis', label: 'Kapanış' },
];

const L = {
  bilgiFormu: { label: 'Öğrenci Bilgi Formu', url: 'https://obs.yasar.edu.tr/oibs/ogrsis/ogr_on_Kayit_op.aspx' },
  odeme: { label: 'Ödeme sistemi', url: 'https://odeme.yasar.edu.tr/login/new-student' },
  ucretler: { label: 'Ücretler ve ödeme şekilleri', url: 'https://ilkkayit.yasar.edu.tr/ogrenim-ucretleri-ve-odeme-sekilleri-2/' },
  edevlet: { label: 'e-Devlet üniversite kaydı', url: 'https://www.turkiye.gov.tr/yok-universite-ekayit' },
  belgeliKayit: { label: 'Ek yerleştirme / belgeli kayıt formu', url: 'https://oimform.yasar.edu.tr/ek-yerlestirme-kayit-belgeleri/' },
  belgeler: { label: 'Kayıt için gerekli belgeler', url: 'https://ilkkayit.yasar.edu.tr/kayit-icin-gerekli-belgeler/' },
  oimDestek: { label: 'ÖİM Destek (belge yükleme)', url: 'https://oimdestek.yasar.edu.tr/' },
  kayitSorgu: { label: 'Kayıt sorgulama', url: 'https://pwd.yasar.edu.tr/ilk-kayit-sorgulama.php' },
  yatayGecis: { label: 'Yatay geçiş', url: 'https://oim.yasar.edu.tr/yatay-gecis-2/' },
  dikeyGecis: { label: 'Dikey geçiş', url: 'https://oim.yasar.edu.tr/dikey-gecis/' },
  luKayit: { label: 'Lisansüstü kesin kayıt formu', url: 'https://oimform.yasar.edu.tr/lisansustu-ogrenci-kayit-formu/' },
  lisansustu: { label: 'Lisansüstü işlemler', url: 'https://oim.yasar.edu.tr/lisansustu/' },
  lee: { label: 'Lisansüstü Eğitim Enstitüsü', url: 'https://lee.yasar.edu.tr/' },
  apply: { label: 'Uluslararası başvuru', url: 'https://apply.yasar.edu.tr/' },
  intl: { label: 'Uluslararası Ofis', url: 'https://international.yasar.edu.tr/' },
  intlContact: { label: 'Uluslararası Ofis iletişim', url: 'https://international.yasar.edu.tr/contact/' },
  ikamet: { label: 'İkamet izni sunumu', url: 'https://international.yasar.edu.tr/wp-content/uploads/2026/02/Short-Term-Residence-Permit-Orientation.pdf' },
  intlOryantasyon: { label: 'Uluslararası oryantasyon sunumu', url: 'https://international.yasar.edu.tr/wp-content/uploads/2026/02/ORIENTATION-PRESENTATION.pdf' },
  housing: { label: 'Konaklama', url: 'https://international.yasar.edu.tr/housing/' },
  yasarId: { label: 'Yaşar ID', url: 'https://bim.yasar.edu.tr/ogrenci/yasar-id/' },
  sifre: { label: 'Şifre alma', url: 'https://pwd.yasar.edu.tr/forgot-password.php' },
  obs: { label: 'OBS', url: 'https://obs.yasar.edu.tr/' },
  eposta: { label: 'Öğrenci e-postası', url: 'https://bim.yasar.edu.tr/ogrenci/ogrenci-e-posta/' },
  office: { label: 'Office 365', url: 'https://bim.yasar.edu.tr/hizmetler/office-365/' },
  eduroam: { label: 'Eduroam', url: 'https://eduroam.yasar.edu.tr/' },
  moodle: { label: 'Çevrimiçi eğitim (Moodle)', url: 'https://online.yasar.edu.tr' },
  kimlikKarti: { label: 'Öğrenci kimlik kartları', url: 'https://oim.yasar.edu.tr/en/student-ids/' },
  hazirlik: { label: 'Hazırlık sınıfı', url: 'https://ilkkayit.yasar.edu.tr/hazirlik-sinifi/' },
  ydy: { label: 'Yabancı Diller Yüksekokulu', url: 'https://ydy.yasar.edu.tr/' },
  hazirlikIslem: { label: 'Hazırlık işlemleri', url: 'https://oim.yasar.edu.tr/hazirlik/' },
  dersKayit: { label: 'Ders kayıtları', url: 'https://oim.yasar.edu.tr/ders-kayitlari/' },
  takvim: { label: 'Akademik takvim', url: 'https://oim.yasar.edu.tr/wp-content/uploads/2026/04/2026-2027-Akademik-Takvim.pdf' },
  elKitabi: { label: 'Öğrenci El Kitabı', url: 'https://www.yasar.edu.tr/wp-content/uploads/2025/07/Ogrenci-El-Kitabi-2025-Revizyon-12-08.07.2025.pdf' },
  ufnd: { label: 'Kurumsal temel dersler', url: 'https://e.yasar.edu.tr/ufnd/' },
  yokDersler: { label: 'YÖK zorunlu dersleri', url: 'https://e.yasar.edu.tr/yok-zorunlu-dersler' },
  ikinciDil: { label: 'İkinci yabancı dil', url: 'https://ydy.yasar.edu.tr/modern-diller-programi/' },
  kroki: { label: 'Kampüs krokisi', url: 'https://www.yasar.edu.tr/wp-content/uploads/2025/12/Kampus-Kroki-2025_TR-scaled.jpg' },
  kutuphane: { label: 'Kütüphane', url: 'https://library.yasar.edu.tr' },
  uzaktan: { label: 'Uzaktan erişim', url: 'https://library.yasar.edu.tr/uzaktan_erisim/' },
  yurt: { label: 'Öğrenci yurdu', url: 'https://yurt.yasar.edu.tr/' },
  saglik: { label: 'Sağlık birimi', url: 'https://sks.yasar.edu.tr/saglik/' },
  pdb: { label: 'Psikolojik Danışma Birimi', url: 'https://sks.yasar.edu.tr/pdb/' },
  eob: { label: 'Engelli Öğrenci Birimi', url: 'https://eob.yasar.edu.tr' },
  topluluklar: { label: 'Öğrenci toplulukları', url: 'https://sks.yasar.edu.tr/topluluklar/' },
  spor: { label: 'Spor', url: 'https://sks.yasar.edu.tr/spor/' },
  konsey: { label: 'Öğrenci konseyi', url: 'https://ogrencikonseyi.yasar.edu.tr' },
  randevu: { label: 'Randevu sistemi', url: 'https://randevu.yasar.edu.tr/' },
  oim: { label: 'Öğrenci İşleri', url: 'https://oim.yasar.edu.tr' },
  kariyer: { label: 'Kariyer Merkezi', url: 'https://kariyermerkezi.yasar.edu.tr/' },
  erasmus: { label: 'Erasmus', url: 'https://erasmus.yasar.edu.tr/' },
};

const ALL = ['YKS', 'EK', 'YG', 'DG', 'LU', 'YU'];
const LISANS = ['YKS', 'EK', 'YG', 'DG', 'YU'];

// Adım alanları:
//  id, category, title, description, links
//  types:     hangi öğrenci tiplerine uygulanır
//  showIf:    (profil) => boolean, ek koşul (isteğe bağlı)
//  requires:  önkoşul adım id'leri (uygulanmayan önkoşullar yok sayılır)
//  required:  zorunlu mu
//  approval:  sonucu kurum onayına bağlı mı ("Onay bekliyor" durumu)
//  verified:  resmi sayfada doğrulandı mı
export const STEPS = [
  // --- Kayıt: YKS ve Ek Kontenjan ---
  {
    id: 'yks-bilgi-formu', category: 'kayit', types: ['YKS', 'EK', 'DG'], required: true, verified: true,
    title: 'Öğrenci Bilgi Formu ile öğrenci numaranı al',
    description: 'Formu doldur; öğrenci numaran formun sol üst köşesinde çıkar. Numarayı not al, çıktısını alıp imzala ve kayıtta yanında getir. Ödeme ve e-Devlet kaydından önce zorunludur.',
    links: [L.bilgiFormu],
  },
  {
    id: 'yks-odeme', category: 'kayit', types: ['YKS', 'EK', 'DG'], required: true, verified: true,
    showIf: (p) => !p.flags.tamBurslu,
    requires: ['yks-bilgi-formu'],
    title: 'Eğitim ücretini öde',
    description: 'Öğrenci numaranla ödeme sisteminden ödemeni yap. Tam burslu öğrenciler bu adımı atlar.',
    links: [L.odeme, L.ucretler],
  },
  {
    id: 'yks-edevlet', category: 'kayit', types: ['YKS', 'EK', 'DG'], required: true, verified: true,
    showIf: (p) => !p.flags.edevletYok,
    requires: ['yks-bilgi-formu', 'yks-odeme'],
    title: 'e-Devlet üzerinden kaydını tamamla',
    description: 'e-Devlet ile kayıt olanlardan ayrıca belge istenmez.',
    links: [L.edevlet],
  },
  {
    id: 'yks-belgeli-kayit', category: 'kayit', types: ['YKS', 'EK', 'DG'], required: true, verified: true,
    showIf: (p) => p.flags.edevletYok,
    requires: ['yks-bilgi-formu', 'yks-odeme'],
    title: 'Belgelerle kayıt formunu doldur',
    description: 'e-Devlet kaydı yapamayanlar için. Belgeler: lise diploması veya mezuniyet belgesi, imzalı Öğrenci Bilgi Formu, kimlik fotokopisi, ÖSYM yerleşme belgesi, askerlik belgesi (e-Devlet), ödeme dekontu.',
    links: [L.belgeliKayit, L.belgeler],
  },
  {
    id: 'dg-belgeler', category: 'kayit', types: ['DG'], required: true, verified: true,
    requires: ['yks-bilgi-formu'],
    title: 'Transkript ve ders içeriklerini hazırla',
    description: 'Ön lisans not dökümü ve aldığın derslerin içerikleri muafiyet için gerekir. Muafiyet işlemleri için belgelerin aslı istenir.',
    links: [L.dikeyGecis],
  },
  {
    id: 'yks-gecici-belge', category: 'kayit', types: ['YKS', 'EK'], required: true, verified: true,
    showIf: (p) => p.flags.geciciKayit,
    requires: ['yks-edevlet', 'yks-belgeli-kayit'],
    title: 'Mezuniyet belgeni ÖİM Destek\'e yükle',
    description: 'Geçici kayıt yaptıranlar, en erken mezun olabilecekleri tarihi gösteren resmi onaylı belgeyi son tarihe kadar PDF olarak yüklemelidir. Yüklenmezse kayıt silinir.',
    links: [L.oimDestek],
  },
  {
    id: 'yks-sorgu', category: 'kayit', types: ['YKS', 'EK', 'DG'], required: true, verified: true,
    requires: ['yks-edevlet', 'yks-belgeli-kayit', 'yks-gecici-belge'],
    title: 'Kaydını kontrol et',
    description: 'Tüm adımlar bittikten sonra kaydının tamamlandığını sorgulama sayfasından kontrol et.',
    links: [L.kayitSorgu],
  },
  {
    id: 'dg-intibak', category: 'kayit', types: ['DG'], required: true, verified: true, approval: true,
    requires: ['yks-sorgu', 'dg-belgeler'],
    title: 'Muafiyet ve intibak kararını takip et',
    description: 'Başlayacağın sınıf, ders muafiyetleri ve intibak Fakülte/MYO Yönetim Kurulu tarafından belirlenir. Karar açıklanınca bu adımı tamamla.',
    links: [L.dikeyGecis],
  },

  // --- Kayıt: Yatay Geçiş ---
  {
    id: 'yg-kabul-formu', category: 'kayit', types: ['YG'], required: true, verified: true,
    title: 'Kayıt Kabul Formu\'nu doldur',
    description: 'Birden fazla bölümde kabul aldıysan yalnızca birini seç. Öğrenci numaran sonuç ekranında görünür.',
    links: [L.yatayGecis],
  },
  {
    id: 'yg-belgeler', category: 'kayit', types: ['YG'], required: true, verified: true,
    requires: ['yg-kabul-formu'],
    title: 'Kayıt belgelerini yükle',
    description: 'Kimlik kartı (ön ve arka yüz), vesikalık fotoğraf ve intibak yapılacak dersin varsa transkript.',
    links: [L.yatayGecis],
  },
  {
    id: 'yg-yurtdisi-belgeler', category: 'kayit', types: ['YG'], required: true, verified: true,
    showIf: (p) => p.flags.yurtDisindan,
    requires: ['yg-kabul-formu'],
    title: 'Yurt dışı belgelerini tamamla',
    description: 'YÖK tanınırlık belgesi (KKTC hariç), transkript, ders içerikleri ve öğrenci belgesi. Türkçe ve İngilizce dışındaki belgeler için yeminli tercüme ve apostil gerekir.',
    links: [L.yatayGecis],
  },
  {
    id: 'yg-bilgi-formu', category: 'kayit', types: ['YG'], required: true, verified: true,
    requires: ['yg-belgeler', 'yg-yurtdisi-belgeler'],
    title: 'Ön Kayıt Bilgi Formu\'nu doldur',
    description: 'Bu form doldurulmazsa kayıt tamamlanamaz.',
    links: [L.bilgiFormu],
  },
  {
    id: 'yg-odeme', category: 'kayit', types: ['YG'], required: true, verified: true,
    showIf: (p) => !p.flags.tamBurslu,
    requires: ['yg-bilgi-formu'],
    title: 'Eğitim ücretini öde',
    description: 'Öğrenci numaranla ödeme sayfasından ödemeni yap.',
    links: [L.odeme, L.ucretler],
  },
  {
    id: 'yg-eski-kayit', category: 'kayit', types: ['YG'], required: true, verified: true,
    requires: ['yg-kabul-formu'],
    title: 'Önceki üniversitedeki kaydını sildir',
    description: 'Yeni kaydın için önceki kaydının silinmiş ve bunun YÖKSİS\'e yansımış olması gerekir.',
    links: [],
  },
  {
    id: 'yg-intibak', category: 'kayit', types: ['YG'], required: true, verified: true, approval: true,
    requires: ['yg-odeme', 'yg-eski-kayit'],
    title: 'İntibak ve ders muafiyeti kararını takip et',
    description: 'Yatay geçiş komisyonu muaf sayılacak dersleri, intibak edeceğin yarıyılı ve alacağın dersleri belirler.',
    links: [L.yatayGecis],
  },

  // --- Kayıt: Lisansüstü ---
  {
    id: 'lu-belgeler', category: 'kayit', types: ['LU'], required: true, verified: true,
    title: 'Kesin kayıt formuna belgelerini yükle',
    description: 'Diploma veya mezuniyet belgesi, transkript, kimlik, vesikalık, ALES ve YDS sonuçları, askerlik durum belgesi. Varsa GRE/GMAT, yurt dışı diploma için YÖK denklik belgesi, eğitim dili belgesi ve protokol indirimi belgesi.',
    links: [L.luKayit, L.lisansustu],
  },
  {
    id: 'lu-numara', category: 'kayit', types: ['LU'], required: true, verified: true, approval: true,
    requires: ['lu-belgeler'],
    title: 'Öğrenci numarası e-postasını bekle',
    description: 'Belgelerin eksiksizse öğrenci numaran yükleme sırasına göre verilir ve sana e-posta gelir.',
    links: [],
  },
  {
    id: 'lu-bilgi-formu', category: 'kayit', types: ['LU'], required: true, verified: true,
    requires: ['lu-numara'],
    title: 'Ön Kayıt Bilgi Formu\'nu doldur',
    description: 'Bu form doldurulmazsa kayıt tamamlanamaz.',
    links: [L.bilgiFormu],
  },
  {
    id: 'lu-odeme', category: 'kayit', types: ['LU'], required: true, verified: true,
    showIf: (p) => !p.flags.tamBurslu,
    requires: ['lu-bilgi-formu'],
    title: 'Ücreti öde',
    description: 'Ödeme sayfasında "Yeni Öğrenci" sekmesinden öğrenci numaranla öde.',
    links: [L.odeme],
  },
  {
    id: 'lu-danisman', category: 'akademik', types: ['LU'], required: true, verified: false, approval: true,
    requires: ['obs-giris'],
    title: 'Danışmanını ve bilimsel hazırlık durumunu öğren',
    description: 'Danışman ataması ve varsa bilimsel hazırlık dersleri için enstitü ile iletişime geç.',
    links: [L.lee],
  },

  // --- Kayıt: Yabancı Uyruklu ---
  {
    id: 'yu-kabul', category: 'kayit', types: ['YU'], required: true, verified: true,
    title: 'Kabul işlemlerini tamamla',
    description: 'Başvuru ve kabul uluslararası başvuru sistemi üzerinden yürür.',
    links: [L.apply, L.intl],
  },
  {
    id: 'yu-kesin-kayit', category: 'kayit', types: ['YU'], required: true, verified: false,
    requires: ['yu-kabul'],
    title: 'Kesin kayıt belgelerini teslim et',
    description: 'Pasaport, tercümeli diploma ve transkript, denklik veya tanıma belgesi, vesikalık. Güncel listeyi Uluslararası Ofis\'ten teyit et.',
    links: [L.intlContact],
  },
  {
    id: 'yu-odeme', category: 'kayit', types: ['YU'], required: true, verified: false,
    showIf: (p) => !p.flags.tamBurslu,
    requires: ['yu-kesin-kayit'],
    title: 'Ücreti öde',
    description: 'Öğrenci numaranla ödeme sisteminden öde.',
    links: [L.odeme],
  },
  {
    id: 'yu-ikamet', category: 'kayit', types: ['YU'], required: true, verified: true,
    requires: ['yu-kesin-kayit'],
    title: 'Öğrenci ikamet izni başvurusu yap',
    description: 'Kısa dönemli öğrenci ikamet izni sürecini Uluslararası Ofis\'in sunumundan takip et.',
    links: [L.ikamet],
  },
  {
    id: 'yu-sigorta', category: 'kayit', types: ['YU'], required: true, verified: false,
    requires: ['yu-kesin-kayit'],
    title: 'Sağlık sigortanı yaptır',
    description: 'İkamet izni için sağlık sigortası gerekir. Seçenekleri Uluslararası Ofis\'e danış.',
    links: [L.intlContact],
  },
  {
    id: 'yu-oryantasyon', category: 'kampus', types: ['YU'], required: false, verified: true,
    title: 'Uluslararası öğrenci oryantasyonunu izle',
    description: 'Oryantasyon sunumu çevrimiçi olarak da yayınlanır.',
    links: [L.intlOryantasyon, L.housing],
  },

  // --- Hesaplar ve kimlik (ortak) ---
  {
    id: 'yasar-id', category: 'hesap', types: ALL, required: true, verified: true,
    // Her tipin kayıt akışının son adımları; uygulanmayanlar yok sayılır.
    requires: ['yks-sorgu', 'yg-bilgi-formu', 'yg-odeme', 'lu-bilgi-formu', 'lu-odeme', 'yu-kesin-kayit', 'yu-odeme'],
    title: 'Yaşar ID şifreni al',
    description: 'Kullanıcı adın öğrenci numarandır. Şifreni "Şifremi Unuttum" ile al (e-Devlet kaydından en erken 1 saat sonra). Şifre ikinci e-posta adresine veya SMS ile gelir. Bu tek hesap OBS, e-posta, Office 365, kütüphane, Wi-Fi ve çevrimiçi eğitime açılır.',
    links: [L.sifre, L.yasarId],
  },
  {
    id: 'obs-giris', category: 'hesap', types: ALL, required: true, verified: true,
    requires: ['yasar-id'],
    title: 'OBS\'ye ilk kez giriş yap',
    description: 'Öğrenci Bilgi Sistemi\'ne gir ve iletişim bilgilerini doğrula.',
    links: [L.obs],
  },
  {
    id: 'eposta', category: 'hesap', types: ALL, required: false, verified: true,
    requires: ['yasar-id'],
    title: 'Öğrenci e-postanı ve Office 365\'i aç',
    description: 'Üniversite duyuruları öğrenci e-postana gelir.',
    links: [L.eposta, L.office],
  },
  {
    id: 'wifi', category: 'hesap', types: ALL, required: false, verified: true,
    requires: ['yasar-id'],
    title: 'Kampüs Wi-Fi / Eduroam\'a bağlan',
    description: 'Yaşar ID bilgilerinle bağlanırsın.',
    links: [L.eduroam],
  },
  {
    id: 'moodle', category: 'hesap', types: ALL, required: false, verified: true,
    requires: ['yasar-id'],
    title: 'Çevrimiçi eğitim sistemine (Moodle) giriş yap',
    description: 'Ders materyalleri ve ödevler burada paylaşılır.',
    links: [L.moodle],
  },
  {
    id: 'kimlik-karti', category: 'hesap', types: ALL, required: true, verified: true,
    requires: ['obs-giris'],
    title: 'Öğrenci kimlik kartını teslim al',
    description: 'Kimlik kartları Öğrenci İşleri Müdürlüğü tarafından verilir. Kayıp veya hasar durumunda başvuru formu kullanılır.',
    links: [L.kimlikKarti],
  },

  // --- Akademik ---
  {
    id: 'flat', category: 'akademik', types: LISANS, required: true, verified: true,
    title: 'İngilizce Yeterlik Sınavına (FLAT) gir veya muafiyet belgeni teslim et',
    description: 'MYO ve Gastronomi dışında hazırlık zorunludur. Muafiyet için FLAT\'ta gereken puanı al ya da kayıt haftasında dış sınav belgesinin aslını YDY\'ye teslim et (ör. YDS 65, IELTS 5.5, TOEFL iBT 78, PTE 67).',
    links: [L.hazirlik, L.ydy],
  },
  {
    id: 'duzey', category: 'akademik', types: LISANS, required: true, verified: true,
    showIf: (p) => p.flags.hazirlik,
    requires: ['flat'],
    title: 'Düzey Belirleme Sınavına gir',
    description: 'Hazırlık sınıfına kayıtlı öğrenciler seviyelerine göre (A1-C1) kurlara yerleşir.',
    links: [L.hazirlikIslem, L.ydy],
  },
  {
    id: 'takvim', category: 'akademik', types: ALL, required: false, verified: true,
    title: 'Akademik takvimi incele',
    description: 'Ders kayıt, ekle-çıkar ve sınav dönemlerini takvimden takip et.',
    links: [L.takvim],
  },
  {
    id: 'ders-kaydi', category: 'akademik', types: ALL, required: true, verified: true,
    showIf: (p) => !p.flags.hazirlik,
    requires: ['obs-giris', 'flat', 'yg-intibak', 'dg-intibak', 'lu-danisman'],
    title: 'Ders kaydını yap ve danışman onayı al',
    description: 'Ders kayıt haftasında OBS\'den derslerini seç; seçimin akademik danışmanın onayıyla kesinleşir. Ekle-çıkar haftasında son düzenlemeleri yapabilirsin.',
    links: [L.dersKayit, L.obs],
  },
  {
    id: 'el-kitabi', category: 'akademik', types: LISANS, required: false, verified: true,
    title: 'Öğrenci El Kitabı\'nı oku',
    description: 'Yönetmelikler, devam zorunluluğu ve sınav kuralları burada özetlenir.',
    links: [L.elKitabi],
  },
  {
    id: 'zorunlu-dersler', category: 'akademik', types: ['YKS', 'EK', 'YG', 'DG'], required: false, verified: true,
    title: 'Zorunlu dersleri öğren',
    description: 'Kurumsal temel dersler, YÖK zorunlu dersleri ve ikinci yabancı dil. Geçişle gelenlerde intibak kararına göre değişir.',
    links: [L.ufnd, L.yokDersler, L.ikinciDil],
  },

  // --- Kampüs yaşamı ---
  {
    id: 'kampus', category: 'kampus', types: ALL, required: false, verified: true,
    title: 'Kampüsü tanı',
    description: 'Kampüs krokisine bak; fakülteni, Öğrenci İşleri\'ni, kütüphaneyi ve yemekhaneyi bul.',
    links: [L.kroki],
  },
  {
    id: 'kutuphane', category: 'kampus', types: ALL, required: false, verified: true,
    title: 'Kütüphaneyi ve uzaktan erişimi keşfet',
    description: 'Veritabanlarına kampüs dışından da Yaşar ID ile erişebilirsin.',
    links: [L.kutuphane, L.uzaktan],
  },
  {
    id: 'yurt', category: 'kampus', types: ALL, required: false, verified: true,
    showIf: (p) => p.flags.yurt,
    title: 'Yurt başvurusu yap',
    description: 'Kız ve erkek öğrenci yurtları için başvuru formları ayrıdır.',
    links: [L.yurt],
  },
  {
    id: 'saglik', category: 'kampus', types: ALL, required: false, verified: true,
    title: 'Sağlık birimini ve Psikolojik Danışma Birimi\'ni öğren',
    description: 'Nerede olduklarını ve nasıl randevu alındığını öğren.',
    links: [L.saglik, L.pdb],
  },
  {
    id: 'eob', category: 'kampus', types: ALL, required: false, verified: true,
    showIf: (p) => p.flags.engel,
    title: 'Engelli Öğrenci Birimi ile tanış',
    description: 'Derslerde ve sınavlarda ihtiyaç duyacağın düzenlemeler için birimle iletişime geç.',
    links: [L.eob],
  },
  {
    id: 'topluluklar', category: 'kampus', types: ALL, required: false, verified: true,
    title: 'Öğrenci topluluklarına ve spora göz at',
    description: 'İlgini çeken bir topluluk veya spor etkinliği seç.',
    links: [L.topluluklar, L.spor, L.konsey],
  },
  {
    id: 'ulasim', category: 'kampus', types: ALL, required: false, verified: false,
    title: 'Kampüse ulaşımını planla',
    description: 'Selçuk Yaşar Kampüsü Bornova\'dadır. Toplu taşıma ve öğrenci kartı indirimini araştır.',
    links: [],
  },

  // --- Kapanış ---
  {
    id: 'iletisim', category: 'kapanis', types: ALL, required: false, verified: true,
    title: 'Randevu sistemini ve önemli iletişim bilgilerini kaydet',
    description: 'Öğrenci İşleri: (0232) 570 70 70, hafta içi 08:30-17:00.',
    links: [L.randevu, L.oim],
  },
  {
    id: 'kariyer', category: 'kapanis', types: ALL, required: false, verified: true,
    title: 'Kariyer Merkezi ve Erasmus\'u tanı',
    description: 'Staj, iş ve yurt dışı değişim fırsatlarını erkenden öğren.',
    links: [L.kariyer, L.erasmus],
  },
];

// "Yaşar'ı Tanı" bölümleri
export const INFO_SECTIONS = [
  {
    id: 'kampus',
    title: 'Kampüs',
    body: 'Yaşar Üniversitesi, İzmir Bornova\'daki Selçuk Yaşar Kampüsü\'nde eğitim verir. Adres: Üniversite Caddesi No:37-39, Ağaçlı Yol, Bornova, İzmir.',
    links: [L.kroki],
  },
  {
    id: 'sistemler',
    title: 'Dijital sistemler',
    body: 'Tek bir Yaşar ID ile OBS, öğrenci e-postası, Office 365, Moodle, kütüphane veritabanları ve kampüs Wi-Fi\'ye girersin. Kullanıcı adın öğrenci numarandır.',
    links: [L.yasarId, L.obs, L.moodle, L.eposta, L.eduroam],
  },
  {
    id: 'birimler',
    title: 'Sana yardımcı olacak birimler',
    body: 'Öğrenci İşleri kayıt, belge ve kimlik kartı işlerini yürütür. Yabancı Diller Yüksekokulu hazırlık ve İngilizce sınavlarını, SKS sağlık, spor ve toplulukları, Uluslararası Ofis yabancı öğrencileri ve Erasmus\'u yönetir.',
    links: [L.oim, L.ydy, { label: 'SKS', url: 'https://sks.yasar.edu.tr/' }, L.intl, L.kariyer],
  },
  {
    id: 'yasam',
    title: 'Kampüs yaşamı',
    body: 'Öğrenci toplulukları, spor tesisleri, öğrenci konseyi, yurtlar, sağlık birimi ve psikolojik danışmanlık kampüste seni bekliyor.',
    links: [L.topluluklar, L.spor, L.yurt, L.saglik, L.pdb, { label: 'Yemek listesi', url: 'https://www.yasar.edu.tr/yemek-liste.pdf' }],
  },
  {
    id: 'akademik',
    title: 'Akademik hayat',
    body: 'Ders seçimin akademik danışmanının onayıyla kesinleşir. Teorik derslerin en az %70\'ine, uygulamalı derslerin en az %80\'ine devam etmen gerekir.',
    links: [L.takvim, L.elKitabi, { label: 'AKTS ders kataloğu', url: 'https://obs.yasar.edu.tr/oibs/bologna/index.aspx?lang=tr' }],
  },
];

// Küçük bilgi yarışması: her soru resmi sayfalardan doğrulanmış bir bilgiye dayanır.
export const QUIZ = [
  {
    q: 'Yaşar ID kullanıcı adın nedir?',
    options: ['T.C. kimlik numaran', 'Öğrenci numaran', 'E-posta adresin'],
    answer: 1,
  },
  {
    q: 'Öğrenci kimlik kartını hangi birim verir?',
    options: ['Öğrenci İşleri Müdürlüğü', 'Kütüphane', 'Bölüm sekreterliği'],
    answer: 0,
  },
  {
    q: 'Ders seçimin kimin onayıyla kesinleşir?',
    options: ['Bölüm başkanı', 'Öğrenci İşleri', 'Akademik danışmanın'],
    answer: 2,
  },
  {
    q: 'Teorik derslerde dönem sonu sınavına girebilmek için en az ne kadar devam gerekir?',
    options: ['%50', '%70', '%90'],
    answer: 1,
  },
  {
    q: 'Hangi programlarda İngilizce hazırlık zorunlu değildir?',
    options: ['Meslek Yüksekokulu ve Gastronomi', 'Mühendislik', 'Hukuk'],
    answer: 0,
  },
];
