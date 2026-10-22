from pathlib import Path
import json,re,hashlib
out=Path(__file__).parent
results=json.loads((out/'round1-reviewed-proposals.json').read_text())['results']
sha=lambda s:hashlib.sha256(s.encode()).hexdigest()
def split(s):
 m=re.search(r'^## (Proof|Verification|Refutation|Counterexample)[ \t]*$',s,re.M); assert m
 a,b=s[:m.end()],s[m.end():];e=re.search(r'^## ',b,re.M)
 return a,b[:e.start()] if e else b,b[e.start():] if e else ''
def blocks(b):
 return [(m.group(1),m.group(2).strip()) for m in re.finditer(r'^\s*(\d+\.\d+)\s+(.+?)(?=\n\s*\n|\Z)',b,re.M|re.S)]
def core(t):return re.sub(r'\d+\.\d+', '#', re.sub(r'\s+',' ',t).strip())[:120]
allmaps=[]
for r in results:
 p=Path(r['file']);s=p.read_text();a,b,tail=split(s);old=blocks(b);new=blocks(r['proposed_proof'])
 assert len(old)==len(new),(p,len(old),len(new))
 mapping={};used=set();order=[]
 for number,txt in new:
  matches=[(num,t) for num,t in old if core(t)==core(txt)]
  assert len(matches)==1,(p,number,core(txt));num,t=matches[0];assert num not in used;used.add(num);mapping[num]=number;order.append((num,t))
 def refs(t):
  def f(m):return m.group(1)+re.sub(r'\d+\.\d+',lambda n:mapping[n.group()],m.group(2))
  return re.sub(r'(?i)(\bsteps?\s+)(\d+\.\d+(?:[–—-]\d+\.\d+)?)',f,t)
 proof='\n\n'.join(mapping[num]+' '+refs(t) for num,t in order)
 # Given prefix in Counterexample is retained verbatim.
 first=re.search(r'^\s*\d+\.\d+\s+',b,re.M);prefix=b[:first.start()].strip()
 body=('\n\n'+prefix+'\n\n' if prefix else '\n\n')+proof+'\n\n'
 p.write_text(a+body+refs(tail))
 allmaps.append({'id':r['item_id'],'mapping':mapping,'paragraphs':[{'oldStep':num,'newStep':mapping[num],'contentPrefix':core(t),'normalizedParagraphSha256BeforeRenumber':sha(re.sub(r'\s+',' ',t).strip())}for num,t in order]})
(out/'content-step-mappings.json').write_text(json.dumps(allmaps,indent=2)+'\n')
