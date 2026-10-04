import requests,bs4,pathlib,json,hashlib,datetime,concurrent.futures
P=pathlib.Path(__file__).parent; B='https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_(Likharev)'
def fetch(u):
 r=requests.get(u,timeout=30);r.raise_for_status();s=bs4.BeautifulSoup(r.text,'html.parser');return r,s
r,s=fetch(B);cats=sorted(set(a['href'] for a in s.select('a[href]') if a['href'].startswith(B+'/') and a['href'].count('/')==B.count('/')+1))
urls=[]
for c in cats:
 r,s=fetch(c);links=sorted(set(a['href'] for a in s.select('a[href]') if a['href'].startswith(c+'/') and a['href'].count('/')==c.count('/')+1));urls+=links or [c]
def leaf(pair):
 i,u=pair;r,s=fetch(u);e=s.select_one('.mt-content-container');t=e.get_text('\n',strip=True) if e else 'MISSING';name=f'{i:02d}';(P/'raw'/f'{name}.html').write_bytes(r.content);(P/'raw'/f'{name}.txt').write_text(t);return {'id':name,'url':u,'title':s.title.get_text(),'utc':datetime.datetime.now(datetime.timezone.utc).isoformat(),'bytes':len(r.content),'sha256':hashlib.sha256(r.content).hexdigest(),'text_chars':len(t)}
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as ex: rows=list(ex.map(leaf,enumerate(urls)))
(P/'manifest.json').write_text(json.dumps(rows,indent=2)+'\n');print('\n'.join(f"{r['id']} {r['text_chars']} {r['url'].rsplit('/',1)[-1]}" for r in rows))
