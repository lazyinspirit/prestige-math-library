from pathlib import Path
from html.parser import HTMLParser
import requests, concurrent.futures, hashlib, datetime,json
r=Path(__file__).parent
class P(HTMLParser):
 def handle_starttag(self,t,a):
  a=dict(a)
  if t=='img' and a.get('src'): names.add(a['src'])
names=set()
for f in (r/'html').glob('*.html'): P().feed(f.read_text(errors='replace'))
(r/'assets').mkdir(exist_ok=True)
def get(n):
 url='https://farside.ph.utexas.edu/teaching/em/lectures/'+n
 for attempt in range(3):
  try:
   resp=requests.get(url,timeout=45);resp.raise_for_status();data=resp.content;(r/'assets'/n).write_bytes(data)
   return {'file':'assets/'+n,'url':url,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'retrieved_utc':datetime.datetime.now(datetime.timezone.utc).isoformat()}
  except Exception as e: error=str(e)
 return {'url':url,'error':error}
with concurrent.futures.ThreadPoolExecutor(max_workers=12) as ex: records=list(ex.map(get,sorted(names)))
(r/'assets-manifest.json').write_text(json.dumps(records,indent=2));print('assets',len(records),'errors',sum('error' in x for x in records))
