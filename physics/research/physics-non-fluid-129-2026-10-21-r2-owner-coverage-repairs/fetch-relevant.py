from pathlib import Path
import requests,concurrent.futures,hashlib,json,fitz,datetime
b=Path('research/physics-non-fluid-129-2026-10-21-r2-owner-coverage-repairs/sources');b.mkdir(exist_ok=True)
urls={'aretakis-I':'https://arxiv.org/pdf/1110.2007','aretakis-II':'https://arxiv.org/pdf/1110.2009','reall-extreme':'https://hep.physics.uoc.gr/Erasmus-IP-2013/files/lectures/Reall/Reall.pdf','taylor':'https://www.ma.imperial.ac.uk/~mtaylor5/HarvardLectures.pdf','egno':'https://math.mit.edu/~etingof/egnobookfinal.pdf','kallenberg':'https://ndl.ethernet.edu.et/bitstream/123456789/32878/1/Olav%20kallenberg_1997.pdf','grimmett-review':'https://arxiv.org/pdf/math/0205237','duminil-lecture':'https://www.ihes.fr/~duminil/publi/Courspeccot2.pdf','ford':'https://arxiv.org/pdf/gr-qc/9707062','watrous':'https://jhwatrous.github.io/TQI.pdf','wall':'https://arxiv.org/pdf/1105.3445'}
def get(k,u):
 p=b/(k+'.pdf')
 try:
  if not p.exists():
   r=requests.get(u,timeout=45);r.raise_for_status();assert r.content.startswith(b'%PDF'),(k,r.content[:50]);p.write_bytes(r.content)
  doc=fitz.open(p);(b/(k+'.txt')).write_text('\n'.join('\n[PDF PAGE '+str(i+1)+']\n'+page.get_text() for i,page in enumerate(doc)))
  return {'name':k,'url':u,'path':str(p),'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'bytes':p.stat().st_size,'pages':len(doc),'at':datetime.datetime.now(datetime.timezone.utc).isoformat()}
 except Exception as e:return {'name':k,'url':u,'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:rows=list(ex.map(lambda kv:get(*kv),urls.items()))
(b/'fetch-receipts.json').write_text(json.dumps(rows,indent=2)+'\n');print(json.dumps(rows,indent=2))
