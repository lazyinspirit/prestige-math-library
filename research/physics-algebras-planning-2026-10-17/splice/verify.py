"""Focused placement verification; no mathematical acceptance is asserted."""
import json,re,hashlib,collections
from pathlib import Path
S=Path(__file__).resolve().parent;D=S.parent;R=S.parents[2]
H=lambda b:hashlib.sha256(b).hexdigest()
a=json.loads((D/'proposed-pages.json').read_text());b=json.loads((S/'placed-pages.json').read_text());receipt=json.loads((S/'receipt.json').read_text());issues=[]
def check(v,msg):
 if not v:issues.append(msg)
check(len(b['proposed_pages'])==100,'page count')
by={p['id']:p for p in b['proposed_pages']};check(len(by)==100,'unique IDs')
counts=collections.Counter()
for old,p in zip(a['proposed_pages'],b['proposed_pages']):
 check(old=={k:v for k,v in p.items() if k not in ('category','path')},'contract changed '+p['id'])
 path=R/p['path'];text=path.read_text()
 check(text.startswith('---\npage: '+p['id']+'\n'),'page identity '+p['id'])
 check('\nstatus: draft\nitems: []\nexamples: []\n' in text,'draft arrays '+p['id'])
 other=p.get('paired_examples_page',p.get('paired_A_page'))
 check(by[other]['category']==p['category'],'split pair '+p['id'])
 check(p['id'] in [by[other].get('paired_A_page'),by[other].get('paired_examples_page')],'nonreciprocal pair '+p['id'])
 check(len(list((R/'library').glob('*/'+p['id']+'.md')))==1,'duplicate home '+p['id'])
 if p['page_type']=='A':counts[p['category']]+=1
 for target in re.findall(r'\]\(([^)]+)\)',text):
  if not target.startswith(('http:','https:','#')):check((path.parent/target.split('#')[0]).exists(),'missing page link '+target)
for file,expected in json.loads((D/'audit/final-receipt.json').read_text())['sha256'].items():
 check(H((D/file).read_bytes())==expected,'original audit input changed '+file)
oldplan=json.loads((S/'before/research/plan-spec.json').read_text());plan=json.loads((R/'research/plan-spec.json').read_text());check(plan['pages'][:len(oldplan['pages'])]==oldplan['pages'],'prior plan entries changed');check(len(plan['pages'])==len(oldplan['pages'])+100,'plan addition count')
check(all(plan[k]==v for k,v in oldplan.items() if k!='pages'),'prior plan metadata changed')
for rel in receipt['before']:
 if rel.endswith('_pathway.md'):
  old=(S/'before'/rel).read_text();cur=(R/rel).read_text();end=old.index('\n---',4)
  check(cur.startswith(old[:end]),'prior pathway parts changed '+rel)
  check(old[end:] in cur,'prior pathway body changed '+rel)
check(counts['quantum-algebra-and-representation-theory']==14,'new quantum pair count');check(counts['hall-algebras-and-tensor-categories']==11,'new Hall pair count');check(sum(counts.values())==50,'pair count')
result={'scope':'100 draft prose pages, their additive plan entries, pathways, and immutable research inputs','page_count':100,'pair_count':50,'category_pair_counts':dict(counts),'original_audit_inputs_unchanged':True if not any('audit input' in i for i in issues) else False,'prior_canonical_plan_entries_unchanged':oldplan['pages']==plan['pages'][:len(oldplan['pages'])],'issues':issues,'mathematical_acceptance':False}
(S/'verification.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result,indent=2));assert not issues
