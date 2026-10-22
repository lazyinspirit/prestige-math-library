from pathlib import Path
import requests,fitz,json,hashlib,datetime,concurrent.futures
run='physics-non-fluid-129-2026-10-21-r2';b=Path('research')/(run+'-owner-url-recovery');cache=b/'active-fulltexts';cache.mkdir(exist_ok=True);sources={}
for n in [47,49,52,54,75]:
 d=json.load(open(f'research/{run}-batch-{n}.coverage.json'))
 for p in d['pages']:
  for s in p.get('sources',[]):sources.setdefault(s['url'],[]).append({'batch':n,'page':p['page'],'title':s['title'],'prior_fetch':s.get('fetch_verified')})
def fetch(kv):
 u,refs=kv;key=hashlib.sha256(u.encode()).hexdigest()[:16];p=cache/(key+'.pdf')
 try:
  r=requests.get(u,timeout=45);r.raise_for_status();assert r.content.startswith(b'%PDF'),('notPDF',r.headers.get('content-type'),r.content[:60]);p.write_bytes(r.content);d=fitz.open(p);title=d[0].get_text();(cache/(key+'-title.txt')).write_text(title)
  return {'url':u,'final_url':r.url,'status':r.status_code,'path':str(p),'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'bytes':len(r.content),'sha256':hashlib.sha256(r.content).hexdigest(),'pages':len(d),'title_excerpt':title[:250],'same_hash_as_prior':all(hashlib.sha256(r.content).hexdigest().startswith(x['prior_fetch'].get('sha256_16','INVALID')) for x in refs),'references':refs}
 except Exception as e:return {'url':u,'error':str(e),'references':refs}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:rows=list(ex.map(fetch,sources.items()))
(b/'actual-active-fulltext-receipts.json').write_text(json.dumps(rows,indent=2)+'\n');print(json.dumps([{'url':x['url'],'bytes':x.get('bytes'),'pages':x.get('pages'),'same_prior_hash':x.get('same_hash_as_prior'),'error':x.get('error')} for x in rows],indent=2))
