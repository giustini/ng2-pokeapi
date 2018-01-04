import { NgxPokeapiPage } from './app.po';

describe('ngx-pokeapi App', () => {
  let page: NgxPokeapiPage;

  beforeEach(() => {
    page = new NgxPokeapiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
