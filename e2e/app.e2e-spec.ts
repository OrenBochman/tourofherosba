import { AngularFoundationPage } from './app.po';

describe('angular-foundation App', () => {
  let page: AngularFoundationPage;

  beforeEach(() => {
    page = new AngularFoundationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
