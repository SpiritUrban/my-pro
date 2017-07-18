import { MyproPage } from './app.po';

describe('mypro App', () => {
  let page: MyproPage;

  beforeEach(() => {
    page = new MyproPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
