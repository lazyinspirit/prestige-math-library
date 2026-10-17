#!/usr/bin/env python3
"""Read-only packet/source exactness. Writes only optional research reports; never runs apply utilities or validators."""
from pathlib import Path
import json,re,yaml,sys,datetime
ROOT=Path(__file__).resolve().parents[2]
RUN='numerical-optimization-dynamics-2026-10-16'
DEFAULT=['research/'+RUN+'-owner-step2-b80-simpson/metadata-r3','research/'+RUN+'-owner-step2-b88-final/metadata-r3','research/'+RUN+'-owner-step2-b101-projection/metadata-r3']
def section(text,title):
 m=re.search(r'^## '+re.escape(title)+r'\s*\n(.*?)(?=^## |\Z)',text,re.M|re.S)
 return m[1].strip() if m else None
def steps(text):
 out=[]
 for m in re.finditer(r'^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |^## |\Z)',text,re.M|re.S):
  body=m[2].strip()
  terminal=body[:-1].rstrip() if body.endswith('∎') else body
  opening=terminal.rfind('[')
  if opening<=0 or not terminal.endswith(']') or not terminal[opening-1].isspace():raise ValueError('Missing actual final bracket tag '+m[1])
  tag=terminal[opening+1:-1]
  if '[' in tag or ']' in tag or '\n' in tag:raise ValueError('Invalid nested final tag '+m[1])
  out.append((m[1],terminal[:opening].rstrip(),tag.split(', ')))
 return out
def verify(packet):
 b=ROOT/packet;own=re.search(r'-b(\d+)',packet)[1];issues=[];guards=[];checks=[];ops=[]
 for p in sorted((b/'before').rglob('*')):
  if not p.is_file():continue
  rel=p.relative_to(b/'before');current=ROOT/rel;same=current.exists() and current.read_bytes()==p.read_bytes();guards.append({'path':str(rel),'equal':same})
  if not same:issues.append({'kind':'guard-drift','path':str(rel)})
 for rel in json.loads((b/'changes.json').read_text()):
  before=json.loads((b/'before'/rel).read_text());after=json.loads((b/'proposed'/rel).read_text())
  if rel.endswith('.pages.json'):
   for page in after:
    oldpage=next(x for x in before if x['id']==page['id'])
    for row in page['items']:
     old=next(x for x in oldpage['items'] if x['id']==row['id']);src=(ROOT/'items'/(row['id']+'.md')).read_text();fm=yaml.safe_load(src.split('---',2)[1]);out={'id':row['id'],'kind':'manifest','deps_equal':row.get('deps',[])==fm.get('deps',[])}
     if 'statement' in row:
      title=next(t for t in ['Statement','Definition','Example','Counterexample','Statement refuted'] if section(src,t) is not None);out['statement_equal']=row['statement']==section(src,title)
     if not all(v for k,v in out.items() if k.endswith('_equal')):issues.append(out)
     checks.append(out)
     for key in sorted(set(old)|set(row)):
      if old.get(key)!=row.get(key):ops.append({'file':rel,'id':row['id'],'field':key,'operation':'literal-full-source-section' if key=='statement' else 'exact-source-frontmatter' if key=='deps' else 'unexpected','before':old.get(key) if key!='statement' else '(full before preserved)','after':row.get(key) if key!='statement' else '(full proposed preserved)'})
   continue
  assert rel.endswith('.proof-contracts.json'),rel
  for ident,c in after['contracts'].items():
   old=before['contracts'][ident];isown=(f'-batch-{own}.' in rel)
   if not isown and old==c:continue
   src=(ROOT/'items'/(ident+'.md')).read_text();ss=steps(src);expected={label:(claim,inputs) for label,claim,inputs in ss};ds=c.get('derivations',[])
   if isown and ss:
    ok=len(ds)==len(ss) and [(d['step'],d['claim'],d['inputs']) for d in ds]==ss
    checks.append({'id':ident,'kind':'full-proof-paragraphs-and-tags','steps':len(ss),'equal':ok})
    if not ok:issues.append({'id':ident,'kind':'proof-paragraph-or-tag-mismatch'})
   oldds={d.get('step'):d for d in old.get('derivations',[])}
   for d in ds:
    prior=oldds.get(d.get('step'),{})
    for k in sorted(set(prior)|set(d)):
     if prior.get(k)!=d.get(k):ops.append({'file':rel,'id':ident,'step':d.get('step'),'field':'derivations.'+k,'operation':'literal-full-proof-paragraph' if k=='claim' else 'literal-final-source-tag' if k=='inputs' else 'mechanical-step-id' if k=='id' else 'step-label','before':prior.get(k) if k!='claim' else '(full before preserved)','after':d.get(k) if k!='claim' else '(full proposed preserved)'})
   for i,cite in enumerate(c.get('citations',[])):
    prior=old.get('citations',[])[i] if i<len(old.get('citations',[])) else {}
    if not isown and cite==prior:continue
    supplier=(ROOT/'items'/(cite['source']+'.md'));actual=section(supplier.read_text(),cite['source_section']);ok=actual is not None and cite.get('quote')==actual
    out={'id':ident,'kind':'supplier-full-section','fact':cite.get('fact'),'source':cite['source'],'section':cite['source_section'],'equal':ok}
    if isown and ss and cite.get('fact'):
     uses=[label for label,_,tags in ss if cite['fact'] in tags];out['uses_equal']=cite.get('uses')==uses
    checks.append(out)
    if not ok or out.get('uses_equal') is False:issues.append(out)
    for k in sorted(set(prior)|set(cite)):
     if prior.get(k)!=cite.get(k):ops.append({'file':rel,'id':ident,'fact':cite.get('fact'),'field':'citations.'+k,'operation':'literal-full-supplier-section' if k=='quote' else 'derived-from-literal-final-tags' if k=='uses' else 'unexpected','before':prior.get(k) if k!='quote' else '(full before preserved)','after':cite.get(k) if k!='quote' else '(full proposed preserved)'})
   # Preserve all unrelated contract fields; no boundary/acceptance/audit inference.
   for k in set(old)|set(c):
    if k not in ['derivations','citations'] and old.get(k)!=c.get(k):issues.append({'kind':'unexpected-contract-field','id':ident,'field':k})
 return {'packet':packet,'ok':not issues,'raw_guards':guards,'source_exactness_checks':checks,'issues':issues,'operations':ops,'nonliteral_operations':[x for x in ops if x['operation'] not in ['literal-full-source-section','literal-full-proof-paragraph','literal-final-source-tag','literal-full-supplier-section']]}
args=sys.argv[1:];out=None
if '--output' in args:
 i=args.index('--output');out=args[i+1];del args[i:i+2]
packets=args or DEFAULT;reports=[verify(p) for p in packets]
report={'run':RUN,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'kind':'read-only-sourceexactness-not-math-audit','canonical_writes':False,'apply_utilities_executed':False,'packets':reports,'ok':all(x['ok'] for x in reports)}
if out:
 assert out.startswith('research/'+RUN+'-') and '..' not in out;dest=ROOT/out;assert not dest.exists(),'Preserve prior report; choose fresh output';dest.write_text(json.dumps(report,indent=2,ensure_ascii=False)+'\n')
print(json.dumps({'ok':report['ok'],'output':out,'packets':[{'packet':x['packet'],'ok':x['ok'],'guards':len(x['raw_guards']),'source_checks':len(x['source_exactness_checks']),'operations':len(x['operations']),'nonliteral_operations':len(x['nonliteral_operations']),'issues':x['issues']} for x in reports]},indent=2))
sys.exit(0 if report['ok'] else 1)
