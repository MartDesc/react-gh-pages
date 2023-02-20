import { Breadcrumb, Collapse } from 'antd';
import topic1 from '../../assets/img/topic-1.jpg';
import TitleSectionKit from '../../components/title-section-kit/title-section-kit';
import './about-epilepsy.scss';
import { fr } from './i18n/fr';

export default function AboutEpilepsy() {
  return (
    <div className="max-viewport-width margin-page">
      <TitleSectionKit
        imgTopic={topic1}
        title={"En savoir plus sur l'épilepsie"}></TitleSectionKit>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Accueil</Breadcrumb.Item>
        <Breadcrumb.Item>Trousse</Breadcrumb.Item>
        <Breadcrumb.Item>{"En savoir plus sur l'épilepsie"}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="white-background content-container">
        <Collapse ghost>
          <Collapse.Panel header={fr.category1.title} key="1">
            <p>{fr.category1.content.p1}</p>
          </Collapse.Panel>
          <Collapse.Panel header={fr.category2.title} key="2">
            <p>{fr.category2.content.p1}</p>
          </Collapse.Panel>
          <Collapse.Panel header={fr.category3.title} key="3">
            <p>{fr.category3.content.p1}</p>
            <ul>
              <li>{fr.category3.content.bullets.b1}</li>
              <li>{fr.category3.content.bullets.b2}</li>
            </ul>
          </Collapse.Panel>
          <Collapse.Panel
            header="Est-ce qu’il existe différents types d’épilepsie?"
            key="3">
            <p>{'text'}</p>
          </Collapse.Panel>
        </Collapse>
      </div>
    </div>
  );
}
