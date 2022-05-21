import React from 'react';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import * as styles from '../styles/AboutApp.module.scss';

export default function About() {
	return (
		<Layout>
			<Helmet>
				<title>Textige - o aplikacji</title>
				<link rel="shortcut icon" href="./favicon.ico" />
			</Helmet>
			<div className={styles.main}>
				<div>
					<img
						src="https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-03-image-14.jpg"
						alt="o aplikacji"
						className={styles.zdj}
					/>{' '}
					<br />
					<div className={styles.text}>
						<span className={styles.naglowek}>O aplikacji</span> <br />
						<ul className={styles.lista}>
							<li> Szukasz lepszego sposobu komunikacji z innymi?</li>
							<li>Masz już dość cenzury na portalach społecznościowych?</li>
						</ul>
						Jeśli Twoje odpowiedzi na te pytania są twierdzące to posiadamy dla ciebie idealną odpowiedź -
						Textige! Jest to nowoczesna aplikacja pozwalająca jej użytkownikom na bezproblemowy kontakt z
						wybraną osobą. Została ona stworzona przez znaną profesjonalną grupę programistyczną B&P Coders.
						W Textige wiemy że człowiek jest istotą funkcjonującą w społeczeństwie, a podstawowym środkiem
						do osiągnięcia przez jednostkę tego celu jest sprawne porozumiewanie się.
					</div>
				</div>
			</div>

			<fieldset class="DeveloperIcons-module--main--3kNhn" className={styles.ikony}>
				<legend>Grupa B&P Coders</legend>
				<a href="https://github.com/piotreknow02">
					<div class="DeveloperIcons-module--devicon--oSX4s" title="piotreknow02">
						<img src="https://avatars.githubusercontent.com/u/65082017" alt="piotreknow02" />
					</div>
				</a>
				<a href="https://github.com/OreoPL-Studio">
					<div class="DeveloperIcons-module--devicon--oSX4s" title="OreoPL-Studio">
						<img src="https://avatars.githubusercontent.com/u/81591050" alt="OreoPL-Studio" />
					</div>
				</a>
				<a href="https://github.com/bart016">
					<div class="DeveloperIcons-module--devicon--oSX4s" title="bart016">
						<img src="https://avatars.githubusercontent.com/u/81752668" alt="bart016" />
					</div>
				</a>{' '}
				<a href="https://github.com/n00sek">
					<div class="DeveloperIcons-module--devicon--oSX4s" title="n00sek">
						<img src="https://avatars.githubusercontent.com/u/74304320" alt="n00sek" />
					</div>
				</a>
			</fieldset>
			<div className={styles.zakonczenie}>Textige - wejdź na wyższy poziom komunikacji 💻</div>
		</Layout>
	);
}
