import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../_services/about-service';
import { AboutDto } from '../../_models/aboutDto';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {
  about: AboutDto;
  images: string[] = [];
  contentList: string[] = [];

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.getAbout();

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  getAbout() {
    // Backend'den ilk about'ı alıyoruz (genellikle tek bir about olur)
    this.aboutService.getAll().subscribe({
      next: result => {
        if (result.data && result.data.length > 0) {
          this.about = result.data[0];
          this.parseImages();
          this.parseContentToList();
        }
      },
      error: error => console.error('Error loading about:', error)
    });
  }

  parseImages() {
    if (this.about?.images) {
      try {
        this.images = JSON.parse(this.about.images);
      } catch {
        this.images = this.about.images.split(',').map(img => img.trim());
      }
    }
  }

  parseContentToList() {
    if (!this.about?.content) {
      this.contentList = [];
      return;
    }


    if (this.about.content.includes('<li>')) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(this.about.content, 'text/html');
      const listItems = doc.querySelectorAll('li');
      this.contentList = Array.from(listItems).map(li => li.textContent || '');
    } else {
      // Eğer sadece text ise, satırlara böl
      this.contentList = this.about.content.split('\n').filter(line => line.trim());
    }
  }
}

