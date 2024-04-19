export async function searchVacansies(url) {
    const vacansies = await fetch(url, {
      headers: {
        'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp'
      }
    }).then(res => res.json());
    console.log('vacansies:',vacansies)
    
  
    
    return vacansies.objects;
  }
  export async function searchIndustry() {
    const industry = await fetch(`https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/`, {
      headers: {
        'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp'
      }
    }).then(res => res.json());
    console.log('catalogues:',industry)
    
    return industry;
  }
  