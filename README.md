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


<img width="2826" height="1576" alt="Anasayfa - 2" src="https://github.com/user-attachments/assets/a29cfbe2-6414-4e42-a9a8-9ced5ef0e851" />
<img width="2846" height="1568" alt="Anasayfa - 1 " src="https://github.com/user-attachments/assets/f931522e-ac73-43d9-b7b1-967218b4426c" />
<img width="2836" height="1580" alt="About -3 " src="https://github.com/user-attachments/assets/71d21e25-c917-479c-8d72-ab37f59cce6f" />
<img width="2850" height="1584" alt="Contact - 4 " src="https://github.com/user-attachments/assets/78ba2610-bd2c-4ee6-96de-b6cc18ba4538" />
<img width="2846" height="1574" alt="Login - 4" src="https://github.com/user-attachments/assets/9fa468b0-8696-48d3-b4d5-e06039637df3" />
<img width="2870" height="1578" alt="Admin Blogs - 2 " src="https://github.com/user-attachments/assets/99410c28-0722-4d6b-87f5-361aa6937cdc" />
<img width="2880" height="912" alt="Admin Category - 1" src="https://github.com/user-attachments/assets/c4b545ce-2a60-488a-8f7c-afb5656e775d" />
<img width="2880" height="1018" alt="Admin Comments - 3" src="https://github.com/user-attachments/assets/ddd94c67-21f4-47f8-85a9-c846c1eeaf79" />
<img width="2878" height="892" alt="Admin Social Networks - 4 " src="https://github.com/user-attachments/assets/c860be0c-c48c-4322-bcf6-7326eaa5b050" />
<img width="2874" height="1584" alt="Admin Messages" src="https://github.com/user-attachments/assets/461e24b1-f40f-4efe-b1f6-67adc5259522" />
<img width="2880" height="834" alt="Admin About - 5" src="https://github.com/user-attachments/assets/b9ebd339-b9ad-4909-9f0f-7ad1322cec68" />

