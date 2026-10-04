from pathlib import Path
from html.parser import HTMLParser
class Extract(HTMLParser):
 def __init__(self): super().__init__(); self.s=[]; self.skip=0
 def handle_starttag(self,t,a):
  if t in ('style','script'): self.skip+=1
  if t in ('p','div','h1','h2','h3','h4','pre','li','br'): self.s.append('\n')
  if t=='img': self.s.append('[IMAGE '+dict(a).get('src','')+' '+dict(a).get('alt','')+']')
 def handle_endtag(self,t):
  if t in ('style','script'): self.skip-=1
  if t in ('p','div','h1','h2','h3','h4','pre','li'): self.s.append('\n')
 def handle_data(self,d):
  if not self.skip: self.s.append(d)
root=Path(__file__).resolve().parent
(root/'text').mkdir(exist_ok=True)
for p in sorted((root/'source/official-html').glob('*.html')):
 x=Extract();x.feed(p.read_text());s='\n'.join(v.strip() for v in ''.join(x.s).splitlines() if v.strip());(root/'text'/p.with_suffix('.txt').name).write_text(s)
