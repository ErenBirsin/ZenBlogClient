# 📝 Zen Blog Client

Zen Blog, modern ve kullanıcı dostu bir blog platformu için geliştirilmiş Angular tabanlı frontend uygulamasıdır. Admin paneli ve kullanıcı arayüzü ile tam özellikli bir blog yönetim sistemi sunar.

## 🎯 Proje Özellikleri

### Kullanıcı Arayüzü
- **Ana Sayfa**: Son blog yazıları ve kategorilere göre düzenlenmiş içerikler
- **Blog Detay Sayfası**: Yazıların detaylı görüntülenmesi ve yorum sistemi
- **Kategori Görünümü**: Kategorilere göre blog filtreleme
- **Hakkımızda Sayfası**: Şirket ve ekip bilgileri
- **İletişim Sayfası**: Kullanıcılardan mesaj alma formu
- **Login Sistemi**: JWT token tabanlı kimlik doğrulama

### Admin Paneli
- **Blog Yönetimi**: Blog yazılarını ekleme, düzenleme ve silme
- **Kategori Yönetimi**: Kategorileri oluşturma ve düzenleme
- **Yorum Yönetimi**: Blog yorumlarını görüntüleme ve yönetme
- **Mesaj Yönetimi**: İletişim formundan gelen mesajları görüntüleme
- **Sosyal Medya Yönetimi**: Sosyal medya linklerini düzenleme
- **İletişim Bilgileri Yönetimi**: İletişim bilgilerini güncelleme
- **Hakkımızda Yönetimi**: Hakkımızda içeriğini düzenleme

## 🛠️ Teknolojiler

- **Angular**
- **TypeScript**
- **Bootstrap**
- **JWT Authentication** (@auth0/angular-jwt)
- **RxJS**
- **Swiper** (Slider/Carousel)
- **AOS** (Animasyon kütüphanesi)
- **SweetAlert2** (Güzel bildirimler)
- **AlertifyJS**
- **Font Awesome**

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── _admin-components/      # Admin panel bileşenleri
│   │   ├── blog/
│   │   ├── category/
│   │   ├── comment/
│   │   ├── message/
│   │   ├── contact-info/
│   │   ├── social/
│   │   └── about/
│   ├── _main-components/        # Kullanıcı arayüzü bileşenleri
│   │   ├── home/
│   │   ├── blogdetails/
│   │   ├── login/
│   │   ├── contact-main/
│   │   └── about/
│   ├── _layouts/                # Layout bileşenleri
│   │   ├── admin-layout/
│   │   └── main-layout/
│   ├── _services/               # API servisleri
│   ├── _models/                 # TypeScript modelleri
│   ├── _guards/                 # Route guard'ları
│   └── _interceptors/           # HTTP interceptor'ları
├── assets/                      # Statik dosyalar (resimler, CSS, JS)
└── main.ts                      # Uygulama giriş noktası
```

## 🔐 Güvenlik

- JWT token tabanlı kimlik doğrulama
- Route guard'lar ile admin paneli koruması
- HTTP interceptor ile token yönetimi

## 🌐 API Entegrasyonu

Backend API ile iletişim için servisler `src/app/_services/` klasöründe bulunur. Tüm API çağrıları bu servisler üzerinden yapılır. Backend tarafı .NET ile geliştirilmiştir.

## 📸 Ekran Görüntüleri

