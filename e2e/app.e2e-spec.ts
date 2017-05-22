import { PilotProjectPage } from './app.po';

describe('pilot-project App', () => {
  let page: PilotProjectPage;

  beforeEach(() => {
    page = new PilotProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
