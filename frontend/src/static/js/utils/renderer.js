import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LayoutProvider } from './contexts/LayoutContext';
import { UserProvider } from './contexts/UserContext';

const AppProviders = ({ children }) => (
  <LayoutProvider>
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  </LayoutProvider>
);

import { PageHeader, PageFooter, PageSidebar } from '../components/page-layout';

export function renderPage(idSelector, PageComponent) {
  const appHeader = document.getElementById('app-header');
  const appSidebar = document.getElementById('app-sidebar');
  const appFooter = document.getElementById('app-footer');
  const appContent = idSelector ? document.getElementById(idSelector) : undefined;

  if (appContent && PageComponent) {
    ReactDOM.render(
      <AppProviders>
        {appHeader ? ReactDOM.createPortal(<PageHeader />, appHeader) : null}
        {appSidebar ? ReactDOM.createPortal(<PageSidebar />, appSidebar) : null}
        <PageComponent />
        {appFooter ? ReactDOM.createPortal(<PageFooter />, appFooter) : null}
      </AppProviders>,
      appContent
    );
  } else if (appHeader && appSidebar) {
    ReactDOM.render(
      <AppProviders>
        {ReactDOM.createPortal(<PageHeader />, appHeader)}
        <PageSidebar />
        {ReactDOM.createPortal(<PageFooter />, appFooter)}
      </AppProviders>,
      appSidebar
    );
  } else if (appHeader) {
    ReactDOM.render(
      <LayoutProvider>
        <ThemeProvider>
          <UserProvider>
            <PageHeader />
            <PageFooter />
          </UserProvider>
        </ThemeProvider>
      </LayoutProvider>,
      appSidebar
    );
  } else if (appSidebar) {
    ReactDOM.render(
      <AppProviders>
        <PageSidebar />
      </AppProviders>,
      appSidebar
    );
  }
}

export function renderEmbedPage(idSelector, PageComponent) {
  const appContent = idSelector ? document.getElementById(idSelector) : undefined;

  if (appContent && PageComponent) {
    ReactDOM.render(<PageComponent />, appContent);
  }
}
