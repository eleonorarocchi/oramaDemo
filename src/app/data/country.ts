export type Country =
{
  name: {
    common: string
    official: string
    nativeName: {
      est: {
        official: string
        common: string
        [k: string]: unknown
      }
      [k: string]: unknown
    }
    [k: string]: unknown
  }
  tld: [] | [string]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: {
    EUR: {
      name: string
      symbol: string
      [k: string]: unknown
    }
    [k: string]: unknown
  }
  idd: {
    root: string
    suffixes: [] | [string]
    [k: string]: unknown
  }
  capital: [] | [string]
  altSpellings:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
  region: string
  subregion: string
  languages: {
    est: string
    [k: string]: unknown
  }
  translations: {
    ara: {
      official: string
      common: string
      [k: string]: unknown
    }
    bre: {
      official: string
      common: string
      [k: string]: unknown
    }
    ces: {
      official: string
      common: string
      [k: string]: unknown
    }
    cym: {
      official: string
      common: string
      [k: string]: unknown
    }
    deu: {
      official: string
      common: string
      [k: string]: unknown
    }
    est: {
      official: string
      common: string
      [k: string]: unknown
    }
    fin: {
      official: string
      common: string
      [k: string]: unknown
    }
    fra: {
      official: string
      common: string
      [k: string]: unknown
    }
    hrv: {
      official: string
      common: string
      [k: string]: unknown
    }
    hun: {
      official: string
      common: string
      [k: string]: unknown
    }
    ita: {
      official: string
      common: string
      [k: string]: unknown
    }
    jpn: {
      official: string
      common: string
      [k: string]: unknown
    }
    kor: {
      official: string
      common: string
      [k: string]: unknown
    }
    nld: {
      official: string
      common: string
      [k: string]: unknown
    }
    per: {
      official: string
      common: string
      [k: string]: unknown
    }
    pol: {
      official: string
      common: string
      [k: string]: unknown
    }
    por: {
      official: string
      common: string
      [k: string]: unknown
    }
    rus: {
      official: string
      common: string
      [k: string]: unknown
    }
    slk: {
      official: string
      common: string
      [k: string]: unknown
    }
    spa: {
      official: string
      common: string
      [k: string]: unknown
    }
    srp: {
      official: string
      common: string
      [k: string]: unknown
    }
    swe: {
      official: string
      common: string
      [k: string]: unknown
    }
    tur: {
      official: string
      common: string
      [k: string]: unknown
    }
    urd: {
      official: string
      common: string
      [k: string]: unknown
    }
    zho: {
      official: string
      common: string
      [k: string]: unknown
    }
    [k: string]: unknown
  }
  latlng: [] | [number] | [number, number]
  landlocked: boolean
  borders: [] | [string] | [string, string]
  area: number
  demonyms: {
    eng: {
      f: string
      m: string
      [k: string]: unknown
    }
    fra: {
      f: string
      m: string
      [k: string]: unknown
    }
    [k: string]: unknown
  }
  flag: string
  maps: {
    googleMaps: string
    openStreetMaps: string
    [k: string]: unknown
  }
  population: number
  gini: {
    "2018": number
    [k: string]: unknown
  }
  fifa: string
  car: {
    signs: [] | [string]
    side: string
    [k: string]: unknown
  }
  timezones: [] | [string]
  continents: [] | [string]
  flags: {
    png: string
    svg: string
    alt: string
    [k: string]: unknown
  }
  coatOfArms: {
    png: string
    svg: string
    [k: string]: unknown
  }
  startOfWeek: string
  capitalInfo: {
    latlng: [] | [number] | [number, number]
    [k: string]: unknown
  }
  postalCode: {
    format: string
    regex: string
    [k: string]: unknown
  }
  [k: string]: unknown
}
