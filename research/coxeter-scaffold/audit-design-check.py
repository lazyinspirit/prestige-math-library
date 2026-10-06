#!/usr/bin/env python3
"""Scoped draft scaffold graph/contract guards; never proof certification."""
import json,pathlib,hashlib,subprocess,yaml,runpy
BASE=pathlib.Path(__file__).resolve().parent;ROOT=BASE.parents[1]
def read(path):return json.loads(path.read_text())
inv=read(BASE/'inventory.json'); pages=read(BASE/'pages.json')['pages'];up=read(ROOT/'research/hopf-hecke-scaffold/inventory.json');definitions=read(BASE/'definition-justifications.json')['definitions'];errors=[]
local={q['id']:(p,q) for p in inv['pages'] for q in p['items']};upstream={q['id']:(p,q) for p in up['pages'] for q in p['items']};allc={**upstream,**local};positions={q['id']:(pi,qi) for pi,p in enumerate(inv['pages']) for qi,q in enumerate(p['items'])};pageids={p['id']:i for i,p in enumerate(pages)}
def closure(k,seen=None):
 seen=set() if seen is None else seen
 for d in allc[k][1]['depends_on']:
  if d in allc and d not in seen:seen.add(d);closure(d,seen)
 return seen
for k,(p,q) in local.items():
 if (ROOT/'items'/f'{k}.md').exists():errors.append('ID collision '+k)
 for d in q['depends_on']:
  if d not in allc and not (ROOT/'items'/f'{d}.md').exists():errors.append('missing supplier '+d)
  if d in positions and positions[d]>=positions[k]:errors.append('later local dependency '+k+' -> '+d)
 for j in q.get('justified_by',[]):
  if j not in local or k not in closure(j):errors.append('justifier lacks definition dependency '+k)
  if j in closure(k):errors.append('ordinary justification cycle '+k)
vis={}
def visit(k):
 if vis.get(k)==1:errors.append('combined contract cycle '+k);return
 if vis.get(k)==2:return
 vis[k]=1
 for d in allc[k][1]['depends_on']:
  if d in allc:visit(d)
 vis[k]=2
for k in allc:visit(k)
files=[]
for p in pages:
 f=ROOT/'library/coxeter-groups'/f"{p['id']}.md";files.append(f);s=f.read_text();m=yaml.safe_load(s.split('---',2)[1])
 if m['status']!='draft' or m['items'] or m['examples']:errors.append('native nonempty/non-draft '+p['id'])
 if m['page']!=p['id']:errors.append('native ID mismatch '+p['id'])
 for r in p['requires']:
  if r in pageids and pageids[r]>=pageids[p['id']]:errors.append('later page dependency '+p['id']+' -> '+r)
  if r in pageids and pages[pageids[r]]['kind']=='B':errors.append('B prerequisite '+r)
  if '[['+r+']]' not in s:errors.append('native prerequisite missing '+p['id']+' -> '+r)
 if p['kind']=='A':
  for q in next(i for i in inv['pages'] if i['page']==p['id'])['items']:
   if q['contract'].replace('\\|','|') not in s:errors.append('native contract drift '+q['id'])
 else:
  if p['requires']!=[p['companion']]:errors.append('B not leaf companion '+p['id'])
for d in definitions:
 q=local[d['id']][1]
 if d['justified_by']!=q['justified_by'] or d['justification_contracts']!=[local[j][1]['contract'] for j in q['justified_by']]:errors.append('definition receipt drift '+d['id'])
used={d for p,q in local.values() for d in q['depends_on'] if d not in allc};existing=[]
for k in sorted(used):
 f=ROOT/'items'/f'{k}.md';m=yaml.safe_load(f.read_text().split('---',2)[1]);homes=[]
 for p in (ROOT/'library').glob('*/*.md'):
  if p.name.startswith('_'):continue
  s=p.read_text().split('---',2)
  if len(s)>2 and k in s[1]:homes.append(str(p.relative_to(ROOT)))
 if not homes:errors.append('unhomed supplier '+k)
 existing.append({'id':k,'status':m.get('status'),'homes':homes,'sha256':hashlib.sha256(f.read_bytes()).hexdigest()})
command=['node','tools/rendercheck.mjs',*[str(f.relative_to(ROOT)) for f in files],'--json'];r=subprocess.run(command,cwd=ROOT,text=True,capture_output=True)
if r.returncode:errors.append('rendercheck failed')
# Independently reproduce and compare the complete exact exceptional certificate data.
p=BASE/'math-checks/finite-degree-poincare.py';ns=runpy.run_path(str(p),run_name='independent_audit_import');records=[ns['run'](case) for case in ns['CASES']];expected=read(p.with_name('finite-degree-poincare-certificates.json'))['cases'];certificate_ok=json.loads(json.dumps(records))==expected
if not certificate_ok:errors.append('finite certificate drift')
result={'version':1,'scope':'independent-prose-design-structural-check-not-item-proof-audit','local_contracts':len(local),'upstream_contracts':len(upstream),'definitions':len(definitions),'new_pairs':len(pages)//2,'new_pages':len(pages),'external_supplier_count':len(existing),'external_suppliers':existing,'contract_edges':[{'consumer':k,'supplier':d} for k,(p,q) in local.items() for d in q['depends_on']],'justification_edges':[{'definition':k,'justifier':j} for k,(p,q) in local.items() for j in q.get('justified_by',[])],'rendercheck':{'command':command,'exit_code':r.returncode,'stdout':r.stdout,'stderr':r.stderr},'exact_finite_certificate_comparison':certificate_ok,'errors':errors}
(BASE/'audit-checks.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:result[k] for k in ['local_contracts','upstream_contracts','definitions','new_pairs','new_pages','external_supplier_count','exact_finite_certificate_comparison','errors']},indent=2));print(r.stdout);raise SystemExit(bool(errors))
