import pymupdf
import urllib.request,re,pathlib,hashlib,json,datetime,concurrent.futures,subprocess
root=pathlib.Path(__file__).parent
base='https://ocw.mit.edu/courses/8-07-electromagnetism-ii-fall-2012/'
for n,u in [('lecture-notes',base+'pages/lecture-notes/'),('calendar',base+'pages/calendar/'),('syllabus',base+'pages/syllabus/')]:
 data=urllib.request.urlopen(u).read();(root/'sources'/f'{n}.html').write_bytes(data)
def one(i):
 u=base+f'resources/mit8_07f12_ln{i}/';s=urllib.request.urlopen(u).read().decode()
 links=re.findall(r'href="([^"]+\.pdf)"',s);url=next(x for x in links if 'ocw.mit.edu' in x or x.startswith('/'))
 if url.startswith('/'):url='https://ocw.mit.edu'+url
 data=urllib.request.urlopen(url).read();p=root/'sources'/f'lecture-{i:02}.pdf';p.write_bytes(data)
 doc=pymupdf.open(p);(root/'text'/f'lecture-{i:02}.txt').write_text('\f'.join(page.get_text(sort=True) for page in doc))
 return {'lecture':i,'resource_url':u,'url':url,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'retrieved_utc':datetime.datetime.now(datetime.timezone.utc).isoformat(),'version':'MIT 8.07 Fall 2012'}
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as ex:rows=list(ex.map(one,range(1,18)))
(root/'metadata.json').write_text(json.dumps(rows,indent=2));print(json.dumps(rows,indent=2))
