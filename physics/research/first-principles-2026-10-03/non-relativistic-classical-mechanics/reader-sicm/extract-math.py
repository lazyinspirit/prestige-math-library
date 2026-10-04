from html.parser import HTMLParser
from pathlib import Path
class Parser(HTMLParser):
 def __init__(self):super().__init__();self.stack=[];self.math=[];self.loc=''
 def handle_starttag(self,t,a):
  a=dict(a)
  if a.get('id','').startswith('disp_'):self.loc=a['id']
  if t=='math' or self.stack:self.stack.append([t,[],a])
 def handle_data(self,d):
  if self.stack:self.stack[-1][1].append(d)
 def handle_endtag(self,t):
  if self.stack and self.stack[-1][0]==t:
   n=self.stack.pop()
   if self.stack:self.stack[-1][1].append(n)
   else:self.math.append((self.loc,n))
def render(n):
 if isinstance(n,str):return n
 t,c,a=n;v=[render(x) for x in c];s=''.join(v)
 if t=='mfrac':return '('+v[0]+')/('+v[1]+')'
 if t=='msqrt':return 'sqrt('+s+')'
 if t=='mroot':return 'root('+','.join(v)+')'
 if t=='msup':return v[0]+'^('+v[1]+')'
 if t=='msub':return v[0]+'_('+v[1]+')'
 if t=='msubsup':return v[0]+'_('+v[1]+')^('+v[2]+')'
 if t in ('mover','munder','munderover'):return t+'('+','.join(v)+')'
 if t=='mtr':return '['+', '.join(v)+']'
 if t=='mtable':return '['+'; '.join(v)+']'
 return s
root=Path(__file__).resolve().parent
(root/'math').mkdir(exist_ok=True)
for p in sorted((root/'source/official-html').glob('chapter*.html')):
 x=Parser();x.feed(p.read_text()); rows=[]
 for i,(loc,n) in enumerate(x.math):rows.append(f'{i+1} {loc} {render(n)}')
 (root/'math'/p.with_suffix('.txt').name).write_text('\n'.join(rows)+'\n')
 print(p.name,len(rows),sum(map(len,rows)))
