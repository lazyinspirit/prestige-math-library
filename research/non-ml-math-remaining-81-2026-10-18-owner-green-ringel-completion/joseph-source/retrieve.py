"""Retain actual public retrievals; no authorization or paywall bypass."""
from pathlib import Path
import requests, hashlib, json, datetime
root=Path(__file__).parent
queries=[
 ('crossref-joseph.json','https://api.crossref.org/works/10.1007/978-3-642-78400-2'),
 ('joseph-author-home.html','https://www.wisdom.weizmann.ac.il/~joseph/'),
 ('joseph-old-author-home.html','https://www.wisdom.weizmann.ac.il/~/joseph/'),
 ('springer-pdf-response.html','https://link.springer.com/content/pdf/10.1007/978-3-642-78400-2.pdf'),
 ('edinburgh-books-index.html','https://www.maths.ed.ac.uk/~v1ranick/books/'),
 ('edinburgh-papers-index.html','https://www.maths.ed.ac.uk/~v1ranick/papers/'),
 ('google-joseph-book.html','https://books.google.com/books?vid=ISBN9783642784002'),
 ('google-section-4.1.17-search.json','https://books.google.com/books?id=keHnCAAAQBAJ&jscmd=SearchWithinVolume2&q=4.1.17&hl=en'),
 ('google-section-3.2.9-search.json','https://books.google.com/books?id=keHnCAAAQBAJ&jscmd=SearchWithinVolume2&q=3.2.9&hl=en'),
 ('google-PA105-metadata.json','https://books.google.com/books?id=keHnCAAAQBAJ&pg=PA105&jscmd=click3'),
 ('google-PA106-metadata.json','https://books.google.com/books?id=keHnCAAAQBAJ&pg=PA106&jscmd=click3'),
 ('google-PA75-metadata.json','https://books.google.com/books?id=keHnCAAAQBAJ&pg=PA75&jscmd=click3'),
 ('google-PA76-metadata.json','https://books.google.com/books?id=keHnCAAAQBAJ&pg=PA76&jscmd=click3'),
]
rows=[]
for name,url in queries:
 row={'requested_url':url,'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat()}
 try:
  r=requests.get(url,timeout=25);(root/name).write_bytes(r.content)
  row.update(file=name,http_status=r.status_code,final_url=r.url,content_type=r.headers.get('Content-Type'),bytes=len(r.content),sha256=hashlib.sha256(r.content).hexdigest(),is_pdf=r.content.startswith(b'%PDF-'))
 except Exception as e:row['error']=str(e)
 rows.append(row)
(root/'retrievals.json').write_text(json.dumps({'full_joseph_sections_retrieved':False,'requests':rows},indent=2)+'\n')
print(json.dumps({'requests':len(rows),'pdf_responses':sum(x.get('is_pdf',False)for x in rows),'errors':[x for x in rows if 'error'in x]}))
