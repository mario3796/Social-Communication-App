import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { PostsPage } from '../posts/posts';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  Home=HomePage;
  Search=SearchPage;
  Posts=PostsPage;

}
