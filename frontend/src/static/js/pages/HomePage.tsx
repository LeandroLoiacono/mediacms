import React, { useEffect } from 'react';
import { LinksConsumer, SiteConsumer } from '../utils/contexts/';
import { Page } from './Page';
import { Flag } from '../components/flags/flag';
import { useLayout, useTheme } from '../utils/hooks';
import { Logo } from '../components/page-layout/PageHeader/Logo';

const EmptyMedia: React.FC = ({ }) => {
  const { logo } = useTheme();
  return (
    <SiteConsumer>
      {(site) => (
        <LinksConsumer>
          {(links) => (
            <div className="empty-media">
              <div className="welcome-title">Welcome to Meseo Archeologico Vereto!</div>
              <Logo src={logo} href={links.home} title={site.title} alt="Logo" />
            </div>
          )}
        </LinksConsumer>
      )}
    </SiteConsumer>
  );
};

interface HomePageProps {
  id?: string;
  latest_title: string;
  featured_title: string;
  recommended_title: string;
  latest_view_all_link: boolean;
  featured_view_all_link: boolean;
  recommended_view_all_link: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({
  id = 'home'
}) => {

  return (
    <Page id={id}>
      <LinksConsumer>
        {(links) => (
          <div className="language-selection-wrapper">
            <h1>Seleziona la lingua</h1>
            <div className="flags">
              <Flag src="./static/images/flags/it.svg" alt={"IT"} title="Italian" href={"/playlists/z6l4XwVRZ"}></Flag>
              <Flag src="./static/images/flags/en.svg" alt={"EN"} title="Italian" href={"/playlists/l6ny9U9Nc"}></Flag>
              <Flag src="./static/images/flags/fr.svg" alt={"FR"} title="Italian" href={"/playlists/VcA9cZmA7"}></Flag>
              <Flag src="./static/images/flags/de.svg" alt={"DE"} title="Italian" href={"/playlists/GAdwW1mSD"}></Flag>
            </div>
          </div>
        )}
      </LinksConsumer>
    </Page>
  );
};
