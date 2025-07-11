import React from 'react';
import { PageStore } from '../../../utils/stores/';
import { LinksConsumer, MemberConsumer, SiteConsumer } from '../../../utils/contexts/';
import { useLayout, useTheme } from '../../../utils/hooks/';
import { CircleIconButton } from '../../_shared';
import { Logo } from './Logo';

export function HeaderLeft() {
  const { logo } = useTheme();

  const { enabledSidebar, toggleMobileSearch, toggleSidebar } = useLayout();

  return (
    <SiteConsumer>
      {(site) => (
        <MemberConsumer>
          {(user) => (
            <LinksConsumer>
              {(links) => (
                <div className="page-header-left">
                  <div>
                    {!user.is.anonymous && enabledSidebar ? (
                      <div className="close-search-field">
                        <CircleIconButton onClick={toggleMobileSearch}>
                          <i className="material-icons">arrow_back</i>
                        </CircleIconButton>
                      </div>
                    ) : null}
                    {!user.is.anonymous && enabledSidebar ? (
                      <div className="toggle-sidebar">
                        <CircleIconButton onClick={toggleSidebar}>
                          <i className="material-icons">menu</i>
                        </CircleIconButton>
                      </div>
                    ) : null}
                    <Logo src={logo} href={links.home} title={site.title} />
                    {PageStore.get('config-contents').header.onLogoRight ? (
                      <div
                        className="on-logo-right"
                        dangerouslySetInnerHTML={{ __html: PageStore.get('config-contents').header.onLogoRight }}
                      ></div>
                    ) : null}
                  </div>
                </div>
              )}
            </LinksConsumer>
          )}
        </MemberConsumer>
      )}
    </SiteConsumer>
  );
}
