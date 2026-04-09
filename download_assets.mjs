import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, 'stitch_assets');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const downloads = [
  {
    name: 'login',
    html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2JkMmUxOWNmN2Y2YjQwOTVhNzY2NjJmMmY4MjYzY2Y0EgsSBxDm9tqjxhgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzU0NjQwMTg3MzcxNzgwMDA0NQ&filename=&opi=89354086',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujcFXsfe-PNtUlMx0k9BIPTCPxLvAvXEMrjSa7a2iozttCBbmWSbSNbKYBA1RmfaB-WFuZedLwv6RKENosebDgtHeCWanMpwXT4bLiQLbfiFoGdqyIYwRTjbx9lj-d8Zf8_naczI9cEXglOfjWAs5PiwbRqZ4y80n9rYbbQofpUAsiTcmR3VD3oQgz2dEUt5XF0EMAIiyA2jQGAEWHgjGSsFanCBulaOY3X4FQayaZlWF93XeCQlJGuJosD'
  },
  {
    name: 'dashboard',
    html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzk3MDJhYTBmZDA3ZTQ3YTRiYTg5MGE5OTE1NDA1YjRhEgsSBxDm9tqjxhgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzU0NjQwMTg3MzcxNzgwMDA0NQ&filename=&opi=89354086',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uj_ahC5tZ2js5Ud0Gwr5T8S5U25y9T5tmkz4UrjLkkRzGiIvfNZ5uutSlvYHghV8F_LYlTwBlJTmHcYXki_b8uGGzmfAmXuGeLraXALs6L4gseOdmxzRv1hbnLahm0BGHt5wHnh3GTnRC7XXsW5jp_xzh74JLsk_3EmZr80WWQryUEVTdH0_tMtjAW4yb2uSsINmHms6QM4ZdNYMZTtl4GwAc4OzPT4a-AWTynx7Icxo72snB3ltRrcG2bM'
  },
  {
    name: 'sign_up',
    html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2E2ODc5YTZhNTE3MjQyMzViYjg3OGNiZGNkNWQ4MDM0EgsSBxDm9tqjxhgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzU0NjQwMTg3MzcxNzgwMDA0NQ&filename=&opi=89354086',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ui3ALP7AF-S-dZpULVkkcAf3YORh7vLK0Q-KlUnPPnPzroLY2HXWlFvjs4u1EGDLBvfM0UtQC-buVZ2JmY8CSUH4eCxul7Ss46GkVJX2bEOkQCVpJVOIef8fzOt3Kd18JTfFXxAf7EyMDgnJ6iEQmQYG75me1e2bx_BWI7hJfDFl5pTwfFiwYd4sCX70UZbAIBBWGa31ffgwrfCAifzgSyqE6DF0pv1rS9THyl_YNWUTrxpTxRq07RPaavW'
  },
  {
    name: 'conversations',
    html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzMxMjgyZGVhOTgxMjQ0NzY5ZjY4OGJmMDcwNjZkYTY3EgsSBxDm9tqjxhgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzU0NjQwMTg3MzcxNzgwMDA0NQ&filename=&opi=89354086',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uho8qzZyll7D06LcuRhUtRxJXc509vDsuttoLQATGmI-coRWgm8VR897JReRhXRDqGjzsPXvIRnOdiEJBkdwPdmfy4tPo9cYtpTvqR4vYbPtgDBgv1zIUvDKH-ba8SnlLnGO-u4rLH3njkhS24aMdJyUGUW7ogc05UzLmYmbyBqHrASXAom_HV28zm4dN9piackDweMc3iZcG4E73aHY_JCpHdZdMBeAL5kEQXNlgLabU-53Go_B12vpyph'
  },
  {
    name: 'leads',
    html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzQwZjFkZTA0MWUxYjQyMDA5OGIyOTc2ODEwNDZmOTA3EgsSBxDm9tqjxhgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzU0NjQwMTg3MzcxNzgwMDA0NQ&filename=&opi=89354086',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uiDOx1cjwSiGu1BrSO2OjKt55AsnCPa2ZN03XhSDLjyrAKqxAJYZNC0E3lLFO8j1YcBleqoc3uzh6zh-Mhs94idHrud3a7W-4MB4B6UGwPc_K1T2D1mLxE4SY5J_UHaE3EjQhByNzy5fD7js8RwaAohQeaFJc5XMB-7BRKloMP0ibX4NQTpTEhsRNeOC8HeMzv9QNhhmW2tj7Dvafpwlgsxc2p2lKV9R0fTQDJmvjoTNfM2evPAioCfxc0'
  },
  {
    name: 'automations',
    html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzFiYjc5ZjBiOThlYTQ0NTZiZTI1ZWQwMDM1NmI4YTIxEgsSBxDm9tqjxhgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzU0NjQwMTg3MzcxNzgwMDA0NQ&filename=&opi=89354086',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uiDFCRA2Y7o-_8-a24GZRonQl-gtoyATdyZlu96UJL-32XoU53aZ19UgP7G2cZ8hJ_xVniZ-DvSxGZtqXckMqbdgLWCmHeY-Mw4oJrxYy4msa4KhCivBMiu9Vx-By36oWgSQm6H_t6EbFq-84QUZ1PrEl5mVM1e__EILvqJO_U41PlIAuft4ZxkOu3aEi9-1EOtpzIbzn_iIRKa9P1hgyvUKm5-tMeM6y6ZF_YA3vr_fYn-wm31VqeoxRrf'
  },
  {
    name: 'billing',
    html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2VhY2M3NWFjOGE0YjQwNTY4NjE1NzQ5YmZhZTdjMjEyEgsSBxDm9tqjxhgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzU0NjQwMTg3MzcxNzgwMDA0NQ&filename=&opi=89354086',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujW4tTncj0rIv_IwZxDhKKTET85q5BDWQzU1pi293rOzGSfObIcAEZWjIGTQ9TaVnt2W49HvTKHaEHAkjSpvFXsxVs4tNNMBeeseuB14BdP9g7fsGL6X3G_ANAFbbTk6uISoS994Vzu8htXKptn38yqtJ12qSeJEhi0Gc6FjG86nltKBHQpD-vPsbrNcvoactDeroj3dBTXG1r4GVVe3zp0V5YHd3PptWj4t8OOAqWaS7VbnngBObKa2nAn'
  },
  {
    name: 'settings',
    html: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2NiNDhhNDQ1NGE3OTQ0ZmE5Zjk4M2U1YjZhOWI1NDg4EgsSBxDm9tqjxhgYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzU0NjQwMTg3MzcxNzgwMDA0NQ&filename=&opi=89354086',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ugNRb8HECNg7TLpVRuGlUhJUJm_9o4MfpdDOfWXONPbkQjgIMePa1Bo8_R23JdSofibk7bts1qEWzsGbLh5osyNmqyTv2F1F2HxxPEygYseLLG6MA9HA1I_jUEWMtkzHBwdxLjLKt_lJUiUWYwjVDp5YyVfeDfBqwRlV3W8hLknjCinpgcA8RtoVUWgdB8iABsLHLnjUX8yBqetlCVdsaE0CBP8hJicFVhzVJlvykEfVkpJP328GaXn9sU'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      // Check for redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }

      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const item of downloads) {
    console.log(`Downloading ${item.name}...`);
    try {
      await downloadFile(item.html, path.join(targetDir, `${item.name}.html`));
      await downloadFile(item.image, path.join(targetDir, `${item.name}.webp`)); // assumption image is webp or png, saving as webp here, let's keep suffix simple
    } catch (e) {
      console.error(`Failed on ${item.name}:`, e);
    }
  }
  console.log('Done!');
}
run();
