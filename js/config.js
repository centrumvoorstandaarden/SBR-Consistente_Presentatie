var respecConfig = {
  //voor specStatus mogelijkheden zie https://github.com/centrumvoorstandaarden/respec/wiki/specStatus
  specStatus: "WV",
  //voor specType mogelijkheden zie https://github.com/centrumvoorstandaarden/respec/wiki/specType
  specType: "HR",

  // licentie. Kiezen uit:
  license: 'cc-by-nd',
  // logos: [], // Geef een lege array op als er geen Geonovum logo moet staan
  doJsonLd: true,
  editors: [{
    name: "Aad Bergman",
    company: "Logius",
    companyURL: "http://www.logius.nl/",
  },
  {
    name: "Erwin Kaats.",
    company: "Logius",
    companyURL: "http://www.logius.nl/",
  },
  ],
  authors: [{
    name: "SBR Expertgroep Jaarverantwoording",
    url: "https://sbr-nl.nl",
  }
  ],
  // shortName = korte naam voor in de url van het document, gebruik alleen letters, cijfers en eventueel '-'
  shortName: "sbr-cp",
  // url van de github repository waar je in werkt
  github: "https://github.com/centrumvoorstandaarden/SBR-Consistente_Presentatie",
  // url van de issue lijst in de github repository waar je in werkt
  nl_github: {
    revision: "https://github.com/centrumvoorstandaarden/SBR-Consistente_Presentatie/commits",
  },
  nl_markdownSplitH1sections: false,
  nl_organisationName: "Logius",
  nl_organisationPrefix: "LS-",
  nl_markdownTableClass: "simple",
  nl_markdownEmbedImageInFigure: true,
  nl_organisationStylesURL: "https://publicatie.centrumvoorstandaarden.nl/respec/style/",
  nl_organisationPublishURL: "https://publicatie.centrumvoorstandaarden.nl/",
  nl_logo: {
    src: "https://publicatie.centrumvoorstandaarden.nl/respec/style/logos/figure-logius.svg",
    alt: "Logius",
    id: "Logius",
    height: 77,
    width: 44,
    url: "https://www.logius.nl/standaarden",
  },
  localBiblio: {
    NEN3610: {
      href: "http://www.nen.nl/web/Normshop/Norm/NEN-36102011-nl.htm",
      title:
        "Basismodel Geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
      authors: [""],
      date: "Maart 2011",
      publisher: "Nederlands Normalisatie-instituut",
    },
  },
};
