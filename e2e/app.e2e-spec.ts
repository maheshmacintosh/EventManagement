import { EventManagementPage } from './app.po';

describe('event-management App', () => {
  let page: EventManagementPage;

  beforeEach(() => {
    page = new EventManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
