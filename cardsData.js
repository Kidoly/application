const initialCards = [
  { id: 1, word: 'Abus de position dominante', definition: 'Comportement d’une ou de plusieurs entreprises profitant de leur position dominante sur le marché pour fausser le jeu de la concurrence.', favorite: false },
{ id: 2, word: 'Administrations publiques', definition: 'Organismes publics qui produisent des services non marchands. Elles comprennent les administrations centrales (État, Sécurité sociale) et les administrations locales (collectivités territoriales).', favorite: false },
{ id: 3, word: 'Agent économique', definition: 'Individu ou groupe d’individus constituant un centre de décision économique indépendant pour effectuer ses opérations économiques.', favorite: false },
{ id: 4, word: 'Allocation', definition: 'Rôle de l’État lorsqu’il intervient sur les marchés dans des situations de défaillances de marchés.', favorite: false },
{ id: 5, word: 'Asymétrie d’information', definition: 'Situation dans laquelle certains des participants à un échange disposent d’informations (pertinentes) que d’autres n’ont pas. ', favorite: false },
{ id: 6, word: 'Autorité administrative indépendante', definition: 'Institution chargée par l’État de réguler un secteur, sans être soumise à l’autorité du gouvernement, tout en disposant des pouvoirs nécessaires à l’accomplissement de sa mission.', favorite: false },
{ id: 7, word: 'Autorité de la concurrence', definition: 'Autorité administrative indépendante dont la mission est de veiller au fonctionnement et au maintien de la concurrence sur l’ensemble des marchés.', favorite: false },
{ id: 8, word: 'Avant-contrat', definition: 'Engagement contractuel d’une ou de plusieurs parties dont la finalité est de préparer la conclusion d’un contrat à venir.', favorite: false },
{ id: 9, word: 'Banque', definition: 'Organisme financier qui reçoit et gère les dépôts de ses clients, gère leurs moyens de paiement et leur accorde des crédits.', favorite: false },
{ id: 10, word: 'Banque centrale européenne (BCE)', definition: 'Institution monétaire de l’Union européenne qui mène la politique monétaire pour la zone euro.', favorite: false },
{ id: 11, word: 'Barrières à l’entrée', definition: 'Ensemble des contraintes structurelles ou stratégiques qui rendent difficile ou impossible l’implantation d’une entreprise sur un marché.', favorite: false },
{ id: 12, word: 'Brevet', definition: 'Titre de propriété industrielle délivré par l’Institut national de la propriété industrielle permettant de protéger une invention en conférant à son titulaire un monopole d’exploitation.', favorite: false },
{ id: 13, word: 'Budget de l’État', definition: 'Ensemble des documents, votés par le Parlement, qui prévoient et autorisent les recettes et les dépenses de l’État pour chaque année.', favorite: false },
{ id: 14, word: 'Capacité juridique', definition: 'Aptitude d’une personne à être titulaire de droits et à les exercer.', favorite: false },
{ id: 15, word: 'Chômage', definition: 'Situation des personnes privées de travail et à la recherche d’un emploi.', favorite: false },
{ id: 16, word: 'Clause', definition: 'Dispositions d’un contrat qui fixe divers points de droit entre les parties.', favorite: false },
{ id: 17, word: 'Clause de réserve de propriété', definition: 'Clause du contrat qui autorise le vendeur à récupérer le bien objet de la vente si l’acheteur n’a pas intégralement payé le prix selon les modalités fixées au contrat.', favorite: false },
{ id: 18, word: 'Clause pénale', definition: 'Clause du contrat qui détermine à l’avance la pénalité pécuniaire due par la partie qui n’exécuterait pas ses obligations.', favorite: false },
{ id: 19, word: 'Commission européenne', definition: 'Organe de l’Union européenne dont la mission consiste à proposer des règles européennes et à veiller à leur respect par les États membres.', favorite: false },
{ id: 20, word: 'Concurrence déloyale', definition: 'Pratique commerciale consistant à capter ou à tenter de capter la clientèle d’un concurrent par des procédés illicites (imitation, parasitisme, dénigrement et désorganisation).', favorite: false },
{ id: 21, word: 'Consentement', definition: 'Accord des volontés des parties à un contrat réalisé par la rencontre de l’offre et de l’acceptation.', favorite: false },
{ id: 22, word: 'Consommation', definition: 'Opération économique consistant à acquérir des biens ou des services destinés à être détruits immédiatement ou progressivement à travers leur utilisation.', favorite: false },
{ id: 23, word: 'Contenu du contrat', definition: 'Ensemble des engagements des parties constituant leurs obligations contractuelles.', favorite: false },
{ id: 24, word: 'Contrefaçon', definition: 'Délit pénal constitué par la violation d’un titre de propriété industrielle (brevet, marque). Il donne lieu à des sanctions pénales (amendes, peines d’emprisonnement) et des sanctions civiles (dommages-intérêts en réparation du préjudice subi).', favorite: false },
{ id: 25, word: 'Contrôle des concentrations', definition: 'Mécanisme soumettant les rapprochements d’entreprises (fusions, acquisitions) à l’autorisation préalable de la Commission européenne ou de l’Autorité de la concurrence, afin de vérifier que ce rapprochement ne soit pas de nature à diminuer la concurrence sur un marché.', favorite: false },
{ id: 26, word: 'Croissance', definition: 'Augmentation durable des richesses créées par l’activité économique. C’est un phénomène quantitatif qui se mesure avec l’évolution du PIB.', favorite: false },
{ id: 27, word: 'Défaillance de marché', definition: 'Dysfonctionnement d’un marché tel qu’une concurrence trop faible, l’existence d’externalités, de biens publics, ou la présence d’asymétrie d’information.', favorite: false },
{ id: 28, word: 'Déficit public', definition: 'Solde du budget de l’État lorsque les dépenses publiques sont supérieures aux recettes publiques.', favorite: false },
{ id: 29, word: 'Démarche entrepreneuriale', definition: 'Volonté d’une ou de plusieurs personnes de créer ou de reprendre une entreprise. ', favorite: false },
{ id: 30, word: 'Démarche managériale', definition: 'Capacité du manager à gérer de manière optimale les ressources de l’entreprise pour assurer sa pérennité.', favorite: false },
{ id: 31, word: 'Dette de l’État', definition: 'Ensemble des emprunts dus par l’État dont l’encours résulte de l’accumulation de ses déficits.', favorite: false },
{ id: 32, word: 'Développement', definition: 'Phénomène qualitatif qui désigne l’ensemble des changements des structures économiques, sociales, démographiques et culturelles d’un pays.', favorite: false },
{ id: 33, word: 'Développement durable', definition: 'Développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre à leurs propres besoins.', favorite: false },
{ id: 34, word: 'Dol', definition: 'Vice du consentement, constitué par des manœuvres ou par la ruse utilisée par une personne pour obtenir l’accord de l’autre partie à un contrat.', favorite: false },
{ id: 35, word: 'Dommage', definition: 'Préjudice matériel, corporel ou moral subi par une personne, trouvant son origine soit dans l’inexécution d’un contrat, soit dans des situations de responsabilité extracontractuelle.', favorite: false },
{ id: 36, word: 'Économie sociale et solidaire (ESS)', definition: 'Activité d’entreprises dont le mode de gestion est démocratique et participatif et dont les activités sont fondées sur un principe de solidarité et d’utilité sociale.', favorite: false },
{ id: 37, word: 'Effet obligatoire du contrat', definition: 'Principe selon lequel le contrat engage les parties et ne peut être remis en cause par la décision unilatérale de l’une d’entre elles.', favorite: false },
{ id: 38, word: 'Effet relatif du contrat', definition: 'Principe selon lequel le contrat n’a d’effet qu’entre les parties contractantes.', favorite: false },
{ id: 39, word: 'Ententes', definition: 'Accord explicite ou tacite passé entre des entreprises, illicite s’il a pour but ou pour effet de fausser le jeu de la concurrence.', favorite: false },
{ id: 40, word: 'Entreprise', definition: 'Unité économique produisant des biens ou des services pour les vendre sur un marché afin de réaliser des bénéfices.', favorite: false },
{ id: 41, word: 'Entreprise individuelle', definition: 'Forme juridique d’entreprise dans laquelle il n’y a pas de distinction de patrimoine entre le propriétaire de l’entreprise et l’entreprise. L’entrepreneur exerce son activité sans avoir créé de personne morale distincte.', favorite: false },
{ id: 42, word: 'Entreprise unipersonnelle à responsabilité limitée (EURL)', definition: 'Société à responsabilité limitée constituée d’un seul associé.', favorite: false },
{ id: 43, word: 'Erreur', definition: 'Vice du consentement qui affecte la validité du contrat si elle porte sur l’élément essentiel du contrat.', favorite: false },
{ id: 44, word: 'Externalité négative', definition: 'Situation où un agent subit les effets négatifs d’une activité économique sans être indemnisé.', favorite: false },
{ id: 45, word: 'Externalité positive', definition: 'Situation où un agent profite des effets positifs d’une activité économique sans en payer le prix.', favorite: false },
{ id: 46, word: 'Force majeure', definition: 'Événement échappant au contrôle du débiteur, imprévisible et irrésistible, excusant l’inexécution totale ou partielle d’un contrat ou exonérant de la responsabilité extracontractuelle.', favorite: false },
{ id: 47, word: 'Impôt sur le revenu', definition: 'Impôt direct d’État dont l’assiette est constituée par les revenus des contribuables personnes physiques.', favorite: false },
{ id: 48, word: 'Impôt sur les sociétés', definition: 'Impôt direct d’État dont l’assiette est constituée par les revenus des sociétés (plus généralement de toutes les personnes morales se livrant à une exploitation ou à des opérations à caractère lucratif).', favorite: false },
{ id: 49, word: 'Indicateur de développement humain (IDH)', definition: 'Outil de mesure du niveau de développement d’un pays. C’est un indicateur composite car il intègre plusieurs dimensions (la santé, l’éducation et le revenu)', favorite: false },
{ id: 50, word: 'Inflation', definition: 'Hausse générale et durable des prix dans l’économie.', favorite: false },
{ id: 51, word: 'Innovation', definition: 'Selon l’OCDE, une innovation est la mise en œuvre d’un produit (bien ou service) ou d’un procédé nouveau ou sensiblement amélioré, d’une nouvelle méthode de commercialisation ou d’une nouvelle méthode organisationnelle dans les pratiques de l’entreprise, l’organisation du lieu de travail ou les relations extérieures.', favorite: false },
{ id: 52, word: 'INPI', definition: 'L’Institut national de la propriété industrielle est un organe qui délivre les brevets et enregistre les marques en France.', favorite: false },
{ id: 53, word: 'Investissement', definition: 'Opération réalisée par un agent économique consistant à acquérir des biens de production durables (investissement matériel) ou à effectuer certaines dépenses ayant pour but de développer le potentiel de l’entreprise pour l’avenir (investissement immatériel). ', favorite: false },
{ id: 54, word: 'Liberté du commerce et de l’industrie', definition: 'Droit de valeur constitutionnelle en vertu duquel toute personne peut user des libertés d’entreprendre, d’exploiter et de concurrencer.', favorite: false },
{ id: 55, word: 'Macro-environnement', definition: 'Le macro-environnement concerne les facteurs globaux influençant les organisations (tendances démographiques, économiques, politiques, écologiques, sociales, technologiques, culturelles…).', favorite: false },
{ id: 56, word: 'Marque', definition: 'Signe distinctif permettant la différenciation d’un bien ou d’un service proposé par une entreprise.', favorite: false },
{ id: 57, word: 'Menaces', definition: 'Les menaces sont les problèmes, obstacles extérieurs, qui peuvent empêcher ou limiter le développement de l’activité de l’entreprise, et qu’il faut tenter de maîtriser.', favorite: false },
{ id: 58, word: 'Ménage', definition: 'Individu ou groupe d’individus, vivant habituellement sous le même toit, qu’il y ait entre eux un lien de parenté ou non.', favorite: false },
{ id: 59, word: 'Micro-entreprise', definition: 'Entreprise individuelle permettant l’exercice d’une activité commerciale, artisanale ou libérale sous une forme simplifiée offrant des avantages fiscaux et sociaux.', favorite: false },
{ id: 60, word: 'Monopole', definition: 'Situation dans laquelle une entreprise est seule, sur un marché, à proposer des biens ou des services. Elle n’est soumise à aucune concurrence.', favorite: false },
{ id: 61, word: 'Obligation de moyens', definition: 'Obligation contractuelle en vertu de laquelle le débiteur doit faire tout son possible pour atteindre le résultat attendu par son cocontractant.', favorite: false },
{ id: 62, word: 'Obligation de résultat', definition: 'Obligation contractuelle en vertu de laquelle le débiteur s’engage à atteindre un objectif déterminé.', favorite: false },
{ id: 63, word: 'Obligation de sécurité', definition: 'Obligation contractuelle en vertu de laquelle le débiteur est tenu d’exécuter son obligation en assurant la préservation de l’intégrité de son cocontractant.', favorite: false },
{ id: 64, word: 'Opportunités', definition: 'Les opportunités sont les possibilités extérieures positives, dont on peut éventuellement tirer parti.', favorite: false },
{ id: 65, word: 'Pacte de préférence', definition: 'Engagement d’une personne à proposer prioritairement au bénéficiaire désigné de traiter avec lui pour le cas où elle déciderait de contracter.', favorite: false },
{ id: 66, word: 'Politique budgétaire', definition: 'Ensemble des mesures prises par les pouvoirs publics pour réguler l’activité économique par l’utilisation du budget.', favorite: false },
{ id: 67, word: 'Politique conjoncturelle', definition: 'Action de l’État à court terme qui vise à réguler l’activité économique.', favorite: false },
{ id: 68, word: 'Politique de la demande', definition: 'Politique visant à relancer l’économie en soutenant la demande (consommation et investissement) par l’amélioration du pouvoir d’achat des ménages ou par des politiques de grands travaux.', favorite: false },
{ id: 69, word: 'Politique de l’offre', definition: 'Politique visant à relancer l’économie en permettant aux entreprises de produire mieux et moins cher et en facilitant leur activité. ', favorite: false },
{ id: 70, word: 'Politique de relance', definition: 'Politique conjoncturelle visant à soutenir l’activité économique.', favorite: false },
{ id: 71, word: 'Politique de rigueur', definition: 'Politique conjoncturelle visant à limiter les déficits publics et à réduire l’endettement de l’État, ou à lutter contre l’inflation.', favorite: false },
{ id: 72, word: 'Politique économique', definition: 'Ensemble des interventions de l’État sur l’activité économique d’un pays en vue d’atteindre certains objectifs.', favorite: false },
{ id: 73, word: 'Politique monétaire', definition: 'Action par laquelle les banques centrales agissent sur l’offre de monnaie et les conditions de financement de l’économie.', favorite: false },
{ id: 74, word: 'Politique structurelle', definition: 'Action de l’État à long terme qui cherche à modifier les structures de l’économie.', favorite: false },
{ id: 75, word: 'Pourparlers', definition: 'Phase préliminaire à la passation au contrat durant laquelle sont discutées les clauses qu’il pourrait contenir. Aucune partie n’est engagée à ce stade.', favorite: false },
{ id: 76, word: 'Pratiques anticoncurrentielles', definition: 'Action interdite d’une ou de plusieurs entreprises susceptibles de fausser le jeu de la concurrence sur un marché (entente et abus de position dominante).', favorite: false },
{ id: 77, word: 'Pratiques restrictives de concurrence', definition: 'Agissements d’entreprises illicites car contraires à la loyauté et à la transparence dans les relations commerciales. Ces pratiques commerciales fondées sur les rapports de force sur le marché créent un déséquilibre entre les partenaires économiques (clients ou fournisseurs).', favorite: false },
{ id: 78, word: 'Production marchande', definition: 'Production destinée à être vendue sur un marché au prix du marché.', favorite: false },
{ id: 79, word: 'Production non marchande', definition: 'Production proposée gratuitement ou à un « prix économiquement non significatif » (inférieur à 50 % du coût de production).', favorite: false },
{ id: 80, word: 'Produit intérieur brut (PIB)', definition: 'Le produit intérieur brut d’un pays représente la somme des valeurs ajoutées des agents participant aux activités de production du territoire.', favorite: false },
{ id: 81, word: 'Promesse bilatérale de contrat', definition: 'Engagement de deux personnes de passer un contrat, qui engage les deux parties concernées.', favorite: false },
{ id: 82, word: 'Promesse unilatérale de contrat', definition: 'Engagement d’une personne de passer un contrat, qui n’engage que la partie qui en est à l’origine.', favorite: false },
{ id: 83, word: 'Propriété industrielle', definition: 'Ensemble des règles de droit qui ont pour objet de protéger les inventions techniques (brevet) et les signes distinctifs des entreprises (marque).', favorite: false },
{ id: 84, word: 'Redistribution', definition: 'Mécanisme mis en œuvre par l’État qui permet de corriger les inégalités de revenus en opérant des prélèvements sur les revenus (impôts et cotisations sociales) puis à les redistribuer sous forme de prestations sociales.', favorite: false },
{ id: 85, word: 'Régulation', definition: 'Rôle de l’État pour stabiliser l’activité économique et résorber les déséquilibres tels que l’inflation et le chômage.', favorite: false },
{ id: 86, word: 'Responsabilité civile', definition: 'Obligation de réparer le préjudice résultant soit de l’inexécution d’un contrat (responsabilité contractuelle), soit de la violation du devoir général de ne causer aucun dommage à autrui (responsabilité extracontractuelle).', favorite: false },
{ id: 87, word: 'Responsabilité contractuelle', definition: 'Obligation de réparer un préjudice résultant de l’inexécution ou de l’exécution défectueuse d’un contrat par un contractant.', favorite: false },
{ id: 88, word: 'Responsabilité extracontractuelle', definition: 'Obligation de réparer un dommage résultant d’un fait volontaire ou involontaire.', favorite: false },
{ id: 89, word: 'Responsabilité pénale', definition: 'Obligation de supporter une peine en punition d’une infraction à l’ordre social.', favorite: false },
{ id: 90, word: 'Société à responsabilité limitée (SARL)', definition: 'Forme juridique d’entreprise sociétaire dans laquelle la responsabilité des associés est limitée à leurs apports et dont le capital est divisé en parts sociales qui ne sont pas librement négociables.', favorite: false },
{ id: 91, word: 'Société anonyme (SA)', definition: 'Forme juridique d’entreprise sociétaire dans laquelle la responsabilité des associés est limitée à leurs apports et dont le capital est divisé en actions qui sont librement négociables.', favorite: false },
{ id: 92, word: 'Société coopérative et participative (SCOP)', definition: 'Société de type SA ou SARL dont les salariés sont associés majoritaires et mettent un projet d’entreprise en commun tout en assumant un partage des risques et des décisions.', favorite: false },
{ id: 93, word: 'Société par actions simplifiée (SAS)', definition: 'Forme juridique d’entreprise sociétaire dans laquelle la responsabilité des associés est limitée à leurs apports, dont le capital est divisé en actions, et dont le fonctionnement est principalement organisé par les statuts.', favorite: false },
{ id: 94, word: 'Société par actions simplifiée unipersonnelle (SASU)', definition: 'Société par actions simplifiée constituée d’un seul associé.', favorite: false },
{ id: 95, word: 'Stratégie d’entreprise', definition: 'Choix par lesquels l’entreprise cherche à se créer un avantage sur le marché.', favorite: false },
{ id: 96, word: 'Valeur ajoutée', definition: 'Elle désigne la richesse créée par un agent économique. On la calcule en soustrayant à la valeur de la production les consommations intermédiaires nécessaires à celle-ci. ', favorite: false },
{ id: 97, word: 'Veille', definition: 'Ensemble des activités de collecte d’informations destinée à fournir aux décideurs les éléments dont ils ont besoin pour définir leurs stratégies.', favorite: false },
{ id: 98, word: 'Violence', definition: 'Vice du consentement constitué par une contrainte physique ou morale (chantage) exercée par une personne pour obtenir l’accord de l’autre partie à un contrat', favorite: false },
{ id: 99, word: 'Assurance chômage', definition: 'Allocation versée au salarié qui perd son emploi de façon involontaire, à condition qu’il ait travaillé suffisamment longtemps pour y avoir droit. Elle est financée par des cotisations versées en partie par les employeurs et en partie par l’État.', favorite: false },
{ id: 100, word: 'Automatisation', definition: 'Exécution des tâches par des machines sans intervention humaine.', favorite: false },
{ id: 101, word: 'B to B', definition: 'Désigne les activités commerciales entre entreprises.', favorite: false },
{ id: 102, word: 'B to C', definition: 'Correspond aux activités des entreprises destinées aux particuliers.', favorite: false },
{ id: 103, word: 'Base de données', definition: 'Ensemble d’informations organisées afin d’être facilement consultables, gérables et mises à jour.', favorite: false },
{ id: 104, word: 'Big Data', definition: 'Volume très important de données numériques. On parle également de « mégadonnées » ou de « données massives ».', favorite: false },
{ id: 105, word: 'Business model de plateforme', definition: 'Méthode utilisée par l’entreprise pour créer de la valeur en utilisant une mise en relation via Internet.', favorite: false },
{ id: 106, word: 'C to C', definition: 'Désigne les échanges effectués directement entre les consommateurs.', favorite: false },
{ id: 107, word: 'C to G', definition: 'Ensemble des procédures administratives ou des activités non commerciales réalisées par les services publics à destination des citoyens.', favorite: false },
{ id: 108, word: 'Chômage au sens du BIT', definition: 'Situation d’une personne en âge de travailler (15 ans ou plus) qui n’a pas travaillé durant une semaine de référence, est disponible pour prendre un emploi dans les deux semaines et a recherché activement un emploi dans le mois précédent ou en a trouvé un qui commence dans moins de trois mois.', favorite: false },
{ id: 109, word: 'Clause de confidentialité', definition: 'Clause d’un contrat de prestation de services numériques imposant à chaque partie de conserver confidentiels les informations et documents concernant l’autre partie, auxquels elle aurait pu avoir accès au cours de l’exécution du contrat.', favorite: false },
{ id: 110, word: 'Clause de responsabilité', definition: 'Clause d’un contrat d’hébergement Internet exonérant l’hébergeur de la responsabilité que le client accepte d’assumer en cas de publications illégales, de nature raciste, pornographique…, ou violant le droit d’auteur d’autrui.', favorite: false },
{ id: 111, word: 'Clause de réversibilité', definition: 'Clause d’un contrat de prestation de services numériques offrant au client la possibilité de reprendre ou de faire reprendre la fonction externalisée par tout prestataire de son choix ; en même temps, le prestataire s’engage à fournir une assistance pour faciliter le transfert des données ou bases de données exploitées.', favorite: false },
{ id: 112, word: 'Commission nationale de l’informatique et des libertés (CNIL)', definition: 'Autorité administrative indépendante chargée de veiller à la protection des libertés individuelles et des données personnelles, en particulier lors des usages informatiques de ces données.', favorite: false },
{ id: 113, word: 'Concurrence déloyale', definition: 'Pratique commerciale consistant à capter ou à tenter de capter la clientèle d’un concurrent par des moyens illicites.', favorite: false },
{ id: 114, word: 'Contrat de prestation de services numériques', definition: 'Contrat de prestation de services entre professionnels utilisé dans le domaine de l’informatique et du numérique. Ce type de contrat concerne des activités de conseil, d’hébergement de données, de développement de sites Internet…', favorite: false },
{ id: 115, word: 'Contrat de vente électronique', definition: 'Contrat de vente spécifique par lequel une personne propose à distance et par voie électronique la fourniture de biens, en général à des consommateurs.', favorite: false },
{ id: 116, word: 'Contrefaçon', definition: 'Atteinte au droit du propriétaire d’une marque commerciale (ou d’un autre monopole d’exploitation protégé) par imitation, reproduction, exploitation non autorisées. Elle engage la responsabilité de ses auteurs.', favorite: false },
{ id: 117, word: 'Délégué à la protection des données (DPO)', definition: 'Personne chargée, dans les structures exploitant des données personnelles, de coopérer avec la CNIL pour assurer le respect du droit. Le DPO informe les intéressés sur les obligations en matière de traitement des fichiers de données personnelles, contrôle le respect du RGPD et donne des conseils en cas de besoin.', favorite: false },
{ id: 118, word: 'Demande de travail', definition: 'Quantité de travail proposée par les travailleurs en échange d’une rémunération. Elle représente la population active à un moment donné.', favorite: false },
{ id: 119, word: 'Digital natives', definition: 'Première génération d’enfants nés dans l’ère du numérique (fin des années 1980-début des années 1990).', favorite: false },
{ id: 120, word: 'Digitalisation (de l’entreprise)', definition: 'Procédé par lequel l’entreprise numérise son offre afin d’offrir ses biens et/ou services « en ligne ».', favorite: false },
{ id: 121, word: 'Données personnelles', definition: 'Toutes les informations concernant une personne physique identifiée et identifiable.', favorite: false },
{ id: 122, word: 'Droit d’auteur', definition: 'Ensemble des prérogatives exclusives dont dispose un auteur ou ses ayants droit (société de production, héritiers) sur des œuvres de l’esprit originales. Le droit d’auteur est l’un des éléments essentiels de la propriété intellectuelle et de la propriété littéraire et artistique.', favorite: false },
{ id: 123, word: 'Droit de rétractation', definition: 'Droit reconnu au consommateur de revenir librement sur son engagement dans le cadre de contrats de consommation spécifiques, en particulier la vente électronique. La rétractation doit intervenir dans un délai de 14 jours à compter de la livraison du bien.', favorite: false },
{ id: 124, word: 'Droit moral (de l’auteur)', definition: 'Droit perpétuel, inaliénable et imprescriptible, attaché à la personne de l’auteur et transmissible à ses héritiers, composé de plusieurs prérogatives dont, en particulier, le droit de divulgation et le droit au respect de l’œuvre.', favorite: false },
{ id: 125, word: 'Droit patrimonial (de l’auteur)', definition: 'Droit exclusif de l’auteur d’exploiter son œuvre sous quelque forme que ce soit et d’en tirer un profit pécuniaire. Ce droit peut être cédé à des tiers ; il s’exerce durant toute la vie de l’auteur et bénéficie à ses héritiers durant 70 ans après sa mort. Le droit patrimonial comprend deux prérogatives principales  le droit de représentation et le droit de reproduction.', favorite: false },
{ id: 126, word: 'Droit sui generis (droit d’auteur)', definition: 'Droit qui assure essentiellement une protection de l’investissement consenti pour la création et la gestion d’une base de données. Il appartient au producteur de la base de données, personne qui prend l’initiative et le risque des investissements correspondants et qui peut ainsi lutter contre le pillage de cette base de données.', favorite: false },
{ id: 127, word: 'Économie collaborative', definition: 'Partage ou échange entre particuliers de biens ou services, avec échange monétaire ou sans échange monétaire, par l’intermédiaire d’une plateforme numérique de mise en relation.', favorite: false },
{ id: 128, word: 'Économie de l’usage', definition: 'Vente de l’usage d’un bien ou d’un service. On l’appelle aussi « économie de la fonctionnalité ».', favorite: false },
{ id: 129, word: 'Économie numérique', definition: 'Ensemble des activités qui utilisent l’exploitation des données numériques.', favorite: false },
{ id: 130, word: 'Écosystème', definition: 'Ensemble des liens d’une entreprise avec tous les partenaires de son environnement.', favorite: false },
{ id: 131, word: 'E-signature (ou signature électronique)', definition: 'Élément d’identification d’un acte juridique authentifiant le consentement du signataire. Elle consiste en l’usage d’un procédé fiable d’identification garantissant son lien avec l’acte auquel elle s’attache.', favorite: false },
{ id: 132, word: 'Externalité de réseau', definition: 'Satisfaction supplémentaire d’un individu à utiliser un réseau lorsque suffisamment de personnes l’utilisent.', favorite: false },
{ id: 133, word: 'Free to play', definition: 'Modèle économique qui consiste à proposer un service en accès gratuit au consommateur.', favorite: false },
{ id: 134, word: 'Freemium', definition: 'Stratégie commerciale consistant à proposer une offre gratuite et facile d’accès pour attirer les utilisateurs et les encourager à payer pour une offre plus complète.', favorite: false },
{ id: 135, word: 'Logiciel', definition: 'Programme informatique exécuté par un ordinateur et utilisant des données pour permettre à l’ordinateur d’assurer une tâche, une fonction.', favorite: false },
{ id: 136, word: 'Marché du travail', definition: 'Marché où se rencontrent l’offre et la demande de travail, aboutissant à la détermination du niveau d’emploi et des salaires théoriques. Au sens courant, il désigne la situation de l’emploi dans une économie.', favorite: false },
{ id: 137, word: 'Nom de domaine', definition: 'Adresse sur le Web qui permet d’accéder à un site. Le nom de domaine est protégé par sa réservation auprès d’un bureau d’enregistrement accrédité par l’Association française pour le nommage Internet en coopération (AFNIC).', favorite: false },
{ id: 138, word: 'Normes et standards', definition: 'Ensemble de recommandations développées et préconisées par un groupe représentatif d’utilisateurs (standards) ou par un organisme officiel (normes).', favorite: false },
{ id: 139, word: 'Offre de travail', definition: 'Nombre d’emplois offerts par les entreprises.', favorite: false },
{ id: 140, word: 'Place de marché', definition: 'Plateforme sur Internet qui met en relation des acheteurs et des vendeurs (appelée aussi « marketplace »).', favorite: false },
{ id: 141, word: 'Plateforme d’échange', definition: 'Lieu virtuel qui permet l’échange et le partage d’informations dans une logique collaborative.', favorite: false },
{ id: 142, word: 'Pôle emploi', definition: 'Établissement public à caractère administratif chargé de l’emploi en France. Sa mission est d’accompagner tous les demandeurs d’emploi dans leur recherche, d’assurer le versement des allocations aux demandeurs indemnisés (allocation chômage), d’aider les entreprises dans leurs recrutements et de recouvrer les cotisations.', favorite: false },
{ id: 143, word: 'Politique active de l’emploi', definition: 'Ensemble des mesures mises en place afin de favoriser l’intégration des personnes sur le marché du travail (ex. formations pour augmenter l’employabilité).', favorite: false },
{ id: 144, word: 'Politique passive de l’emploi', definition: 'Ensemble des mesures mises en place afin de limiter l’impact du chômage sur les demandeurs d’emploi (ex. allocations chômage).', favorite: false },
{ id: 145, word: 'Population active', definition: 'Ensemble des personnes occupant un emploi, salarié ou non, ainsi que celles recherchant un emploi (les chômeurs).', favorite: false },
{ id: 146, word: '« Privacy by default »', definition: 'Concept de protection de la vie privée qui impose aux entreprises, dès la conception de leurs biens ou services, de paramétrer par défaut leurs produits avec un haut niveau de protection des données personnelles avant toute utilisation de celles-ci.', favorite: false },
{ id: 147, word: '« Privacy by design »', definition: 'Concept de protection de la vie privée qui impose aux entreprises utilisant des données personnelles, dès la conception de leurs biens ou services, d’assurer des mesures préventives pour anticiper les risques d’exploitations abusives de ces données.', favorite: false },
{ id: 148, word: 'Pure player', definition: 'Entreprise exerçant son activité commerciale uniquement sur Internet.', favorite: false },
{ id: 149, word: 'Règle du double-clic', definition: 'Règle légale en matière de vente électronique, imposant que le client puisse vérifier sa commande et valider son achat par un premier clic sur l’ordinateur, puis qu’il confirme sa commande par un second clic avant de payer.', favorite: false },
{ id: 150, word: 'Règlement général sur la protection des données (RGPD)', definition: 'Règlement de l’Union européenne, entré en vigueur le 25 mai 2018, qui encadre la protection des données personnelles ; il est applicable à toutes les organisations (entreprises, administrations publiques, associations…) qui traitent des données à caractère personnel au sein de l’UE, ou des données personnelles de résidents de l’UE dans les autres parties du monde.', favorite: false },
{ id: 151, word: 'Responsabilisation (Accountability)', definition: 'Obligation pour les entreprises exploitant des données personnelles de prendre des mesures permettant de démontrer le respect des règles relatives à la protection de ces données.', favorite: false },
{ id: 152, word: 'Site Internet', definition: 'Ensemble de pages Web liées entre elles, contenant des fichiers, des documents, des images…', favorite: false },
{ id: 153, word: 'Taux d’activité', definition: 'Rapport entre la population active moyenne de l’année et la population totale moyenne de l’année. On peut le calculer par sexe ou par âge.', favorite: false },
{ id: 154, word: 'Taux de chômage', definition: 'Rapport entre le nombre de chômeurs et la population active. Il s’exprime en pourcentage.', favorite: false },
{ id: 155, word: 'Ubérisation', definition: 'Modèle économique basé sur l’émergence de plateformes digitales mobiles sur lesquelles clients et prestataires peuvent entrer en contact directement, gratuitement et en temps réel, et entrant en concurrence frontale avec les usages de l’économie classique.', favorite: false },
{ id: 156, word: 'Usurpation d’identité', definition: 'Infraction consistant à exploiter des données personnelles d’un tiers permettant de l’identifier et créant à son égard un trouble illicite ou une atteinte à son honneur ou à sa considération.', favorite: false },
{ id: 157, word: 'Vie privée', definition: 'Ensemble d’éléments de la vie des personnes dont le respect s’impose à tous et constitue un droit fondamental. Le respect de la vie privée signifie pour chacun la protection de son intimité, de son image, de son domicile, de ses choix de vie…', favorite: false },
{ id: 158, word: 'Yield management', definition: 'Méthode d’ajustement des prix en temps réel en fonction de la demande.', favorite: false },
];

export { initialCards };