import React, { useEffect } from 'react';
import { LinksConsumer, SiteConsumer } from '../utils/contexts/';
import { Page } from './Page';
import { Flag } from '../components/flags/flag';
import { useTheme } from '../utils/hooks';
import { Logo } from '../components/page-layout/PageHeader/Logo';
import { PlaylistIds, VideoIds } from '../fixtures/video-map';

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

  const searchParams = new URLSearchParams(document.location.search)
  const baseParam = searchParams.get('base');
  const keys = Object.keys(VideoIds.it);
  type VideoKey = keyof typeof VideoIds.it;

  const baseUrlIt = baseParam && Object.prototype.hasOwnProperty.call(VideoIds.it, baseParam) ? "/view?m=" + VideoIds.it[baseParam as VideoKey] + "&pl=" : '/playlist/';
  const baseUrlEn = baseParam && Object.prototype.hasOwnProperty.call(VideoIds.en, baseParam) ? "/view?m=" + VideoIds.en[baseParam as VideoKey] + "&pl=" : '/playlist/';
  const baseUrlFr = baseParam && Object.prototype.hasOwnProperty.call(VideoIds.fr, baseParam) ? "/view?m=" + VideoIds.fr[baseParam as VideoKey] + "&pl=" : '/playlist/';
  const baseUrlDe = baseParam && Object.prototype.hasOwnProperty.call(VideoIds.de, baseParam) ? "/view?m=" + VideoIds.de[baseParam as VideoKey] + "&pl=" : '/playlist/';

  return (
    <Page id={id}>
      <LinksConsumer>
        {(links) => (
          <div className="language-selection-wrapper">
            <h1>Seleziona la lingua</h1>
            <div className="flags">
              <Flag src="./static/images/flags/it.svg" alt={"IT"} title="Italian" href={baseUrlIt + PlaylistIds.it}></Flag>
              <Flag src="./static/images/flags/en.svg" alt={"EN"} title="English" href={baseUrlEn + PlaylistIds.en}></Flag>
              <Flag src="./static/images/flags/fr.svg" alt={"FR"} title="Français" href={baseUrlFr + PlaylistIds.fr}></Flag>
              <Flag src="./static/images/flags/de.svg" alt={"DE"} title="Deutsch" href={baseUrlDe + PlaylistIds.de}></Flag>
            </div>
          </div>
        )}
      </LinksConsumer>
    </Page>
  );
};
