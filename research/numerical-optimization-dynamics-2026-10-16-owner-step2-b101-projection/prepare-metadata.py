from pathlib import Path
import json,re,yaml,difflib,datetime
r='numerical-optimization-dynamics-2026-10-16';base=Path('research')/(r+'-owner-step2-b101-projection');m=base/'metadata';m.mkdir(exist_ok=True);guards={};changes={};fields=[]
def read(p):
 p=Path(p);s=p.read_text();guards[str(p)]=s;return s
def section(s,t):
 a=re.search(r'^## '+re.escape(t)+r'\s*\n(.*?)(?=^## |\Z)',s,re.M|re.S);assert a,t;return a[1].strip()
def steps(s):
 out=[]
 for a in re.finditer(r'^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |^## |\Z)',s,re.M|re.S):
  body=a[2].strip();tag=re.search(r'\s+\[([^\n]*)\](?: ∎)?$',body);assert tag,a[1];out.append((a[1],body[:tag.start()],tag[1].split(', ')))
 return out
for n in ['101']:
 p=Path('research')/(r+'-batch-'+n+'.pages.json');s=read(p);j=json.loads(s)
 for page in j:
  for row in page['items']:
   text=read('items/'+row['id']+'.md');fm=yaml.safe_load(text.split('---',2)[1]);title=next(t for t in ['Statement','Definition','Example','Counterexample','Statement refuted'] if re.search(r'^## '+t+r'\s*$',text,re.M))
   for key,value in [('statement',section(text,title)),('deps',fm.get('deps',[]))]:
    if key in row and row[key]!=value:fields.append({'path':str(p),'id':row['id'],'field':key});row[key]=value
 if json.loads(s)!=j:changes[str(p)]=json.dumps(j,indent=2,ensure_ascii=False)+'\n'
for p in sorted(Path('research').glob(r+'-batch-*.proof-contracts.json')):
 s=p.read_text();j=json.loads(s);own=p.name in [r+'-batch-101.proof-contracts.json']
 if not own:continue
 read(p)
 for ident,c in j['contracts'].items():
  ss=steps(read('items/'+ident+'.md')) if own else []
  if ss:
   old={x.get('step'):x for x in c.get('derivations',[])};new=[]
   for label,claim,inputs in ss:
    row=dict(old.get(label,{}));row.update(id='step-'+label.replace('.','-'),step=label,claim=claim,inputs=inputs);new.append(row)
   if c.get('derivations')!=new:fields.append({'path':str(p),'id':ident,'field':'derivations'});c['derivations']=new
  for cite in c.get('citations',[]):
   if not own and cite.get('source')!='alg-composite-simpson-rule':continue
   src=Path('items')/(cite['source']+'.md')
   if src.exists():
    q=section(read(src),cite['source_section'])
    if cite.get('quote')!=q:fields.append({'path':str(p),'id':ident,'field':'citations.quote','source':cite['source']});cite['quote']=q
   if ss and cite.get('fact'):
    uses=[label for label,_,inputs in ss if cite['fact'] in inputs]
    if cite.get('uses')!=uses:fields.append({'path':str(p),'id':ident,'field':'citations.uses','fact':cite['fact']});cite['uses']=uses
 if json.loads(s)!=j:changes[str(p)]=json.dumps(j,indent=2,ensure_ascii=False)+'\n'
for rel,s in guards.items():
 d=m/'before'/rel;d.parent.mkdir(parents=True,exist_ok=True);d.write_text(s)
for rel,s in changes.items():
 d=m/'proposed'/rel;d.parent.mkdir(parents=True,exist_ok=True);d.write_text(s)
(m/'changes.json').write_text(json.dumps(list(changes),indent=2)+'\n');(m/'field-diff.json').write_text(json.dumps(fields,indent=2)+'\n')
(m/'proposal.diff').write_text(''.join(''.join(difflib.unified_diff(guards[p].splitlines(True),s.splitlines(True),fromfile=p,tofile=p+' (proposed)')) for p,s in changes.items()))
(m/'root-mirrors.py').write_text('''#!/usr/bin/env python3
"""ROOT ONLY frozen metadata preview/default; --apply after root review and writer drain."""
from pathlib import Path
import json,sys
base=Path(__file__).resolve().parent
root=base.parents[2]
assert len(sys.argv)==1 or sys.argv[1:]==['--apply']
for p in (base/'before').rglob('*'):
 if p.is_file():
  rel=p.relative_to(base/'before');assert (root/rel).read_bytes()==p.read_bytes(),'Changed guarded input '+str(rel)
if sys.argv[1:]==['--apply']:
 for rel in json.loads((base/'changes.json').read_text()):(root/rel).write_bytes((base/'proposed'/rel).read_bytes())
 print('Applied exact root-reviewed metadata mirrors only.')
else:print((base/'proposal.diff').read_text(),end='')
''')
print(json.dumps({'metadata_changed_files':len(changes),'changed_fields':len(fields),'guards':len(guards)}))
