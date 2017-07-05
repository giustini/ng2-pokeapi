import { Ng2PokeapiPage } from './app.po';

describe('ng2-pokeapi App', () => {
  let page: Ng2PokeapiPage;

  beforeEach(() => {
    page = new Ng2PokeapiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
