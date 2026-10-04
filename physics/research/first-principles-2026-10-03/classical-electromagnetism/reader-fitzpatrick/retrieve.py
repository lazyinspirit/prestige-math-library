from pathlib import Path
import requests,concurrent.futures,hashlib,json,datetime,re
from html.parser import HTMLParser
ROOT=Path(__file__).resolve().parent
BASE='https://farside.ph.utexas.edu/teaching/em/lectures/'
class Extract(HTMLParser):
 def __init__(self): super().__init__(convert_charrefs=True); self.out=[]; self.skip=False
 def handle_starttag(self,t,a):
  a=dict(a)
  if t=='img' and a.get('alt'): self.out.append(' '+a['alt']+' ')
  if t in ['p','br','h1','h2','h3','li','div']: self.out.append('\n')
 def handle_data(self,d): self.out.append(d)
def get(name):
 url=BASE+name if name!='course.html' else 'https://farside.ph.utexas.edu/teaching/em/em.html'
 r=requests.get(url,timeout=45); r.raise_for_status(); data=r.content
 (ROOT/'html').mkdir(exist_ok=True); (ROOT/'html'/name).write_bytes(data)
 e=Extract(); e.feed(data.decode(r.encoding or 'latin1')); text=''.join(e.out)
 # Preserve substantive body including images' exact LaTeX alt, remove navigation before its marked end.
 raw=data.decode(r.encoding or 'latin1')
 if '<!--End of Navigation Panel-->' in raw:
  raw=raw.split('<!--End of Navigation Panel-->')[1].split('<!--Navigation Panel-->')[0]
  e=Extract(); e.feed(raw); text=''.join(e.out)
 text=re.sub(r'\n[ \t]*\n(?:[ \t]*\n)+','\n\n',text)
 (ROOT/'text').mkdir(exist_ok=True); (ROOT/'text'/name.replace('.html','.txt')).write_text(text)
 return {'file':'html/'+name,'url':url,'retrieved_utc':datetime.datetime.now(datetime.timezone.utc).isoformat(),'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'text_chars':len(text)}
names=['lectures.html','course.html']+[f'node{i}.html' for i in range(1,135)]
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as ex:
 records=list(ex.map(get,names))
(ROOT/'source-manifest.json').write_text(json.dumps({'title':'Classical Electromagnetism: An intermediate level course','author':'Richard Fitzpatrick','institution':'The University of Texas at Austin','document_date':'2006-02-02','course_landing_modified':'2014-08-24','format':'Complete author-hosted HTML lecture notes; not print book edition','retrieval_records':records},indent=2))
print('Retrieved',len(records),'HTML files, bytes',sum(r['bytes'] for r in records),'text chars',sum(r['text_chars'] for r in records))
