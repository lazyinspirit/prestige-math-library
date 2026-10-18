"""Read-only internal proposal consistency check; not a native gate or proof review."""
from pathlib import Path
import json,re,collections,hashlib
BASE=Path(__file__).resolve().parent.parent
REPO=BASE.parent.parent
p=BASE/'proposed-pages.json'
o=json.loads(p.read_text());pages=o['proposed_pages']; by={x['id']:x for x in pages}; issues=[]
def issue(page,code,detail): issues.append({'page':page,'code':code,'detail':detail})
if len(by)!=len(pages): issue(None,'duplicate-page','IDs must be unique')
if o.get('page_count')!=len(pages): issue(None,'page-count','Declared count disagrees')
for x in pages:
 pid=x['id']
 if x.get('native_authoring_ready') or x.get('logical_dependencies_accepted'): issue(pid,'false-readiness','Planning-only required')
 for q in x.get('requires_proposed_pages',[]):
  if q not in by: issue(pid,'missing-proposed',q); continue
  if by[q]['page_type']!='A': issue(pid,'B-as-supplier',q)
  if by[q]['part']>x['part']: issue(pid,'part-inversion',q)
 if x['page_type']=='A':
  q=x.get('paired_examples_page')
  if q not in by or by[q]['page_type']!='B': issue(pid,'missing-B',str(q))
 for v in x.get('existing_supplier_items',[]):
  f=REPO/v['path']
  if not f.is_file(): issue(pid,'missing-item',v['path']);continue
  s=f.read_text();idmatch=re.search(r'^id:\s*(.+)$',s,re.M);status=re.search(r'^status:\s*(.+)$',s,re.M)
  actualid=idmatch.group(1).strip().strip('"\'') if idmatch else None
  actualstatus=status.group(1).strip().strip('"\'') if status else 'draft'
  if actualid!=v['id']: issue(pid,'item-identity',v['path'])
  if actualstatus!=v['status']: issue(pid,'status-drift',v['id']+': '+actualstatus)
  if v.get('dependency_eligible') and v['path'].startswith('physics/'):
   # Future same-ID route must be explicit; no current resolution implied.
   route=' '.join(str(v.get(k,'')) for k in ['limits','routing_obligation','dependency_route'])
   if not any(w in route.lower() for w in ['route','adopt','placement','resolv','blocked']): issue(pid,'cross-engine-route',v['id'])
 for v in x.get('existing_prerequisite_pages',[]):
  f=REPO/v['path']
  if not f.is_file(): issue(pid,'non-page-context',v['path'])
  elif not re.search(r'^page:\s*\S',f.read_text(),re.M): issue(pid,'not-page',v['path'])
  if v.get('dependency_eligible'): issue(pid,'page-as-logical-supplier',v['path'])
 for v in x.get('navigation_context',[]):
  if v.get('dependency_eligible'): issue(pid,'navigation-as-supplier',str(v))
  if v.get('status')=='published' and (REPO/v.get('path','')).is_dir(): issue(pid,'directory-status',v['path'])
state={};cycle=[]
def visit(k,stack):
 if state.get(k)==1: cycle.append(stack+[k]);return
 if state.get(k)==2:return
 state[k]=1
 for q in by[k].get('requires_proposed_pages',[]):
  if q in by:visit(q,stack+[k])
 state[k]=2
for k in by:visit(k,[])
for c in cycle:issue(None,'cycle',' -> '.join(c))
report={'kind':'internal-proposal-consistency-only','not_native_gate':True,'not_proof_or_source_certification':True,'input_sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'pages':len(pages),'A_pages':sum(x['page_type']=='A' for x in pages),'B_pages':sum(x['page_type']=='B' for x in pages),'unique_existing_supplier_items':len({v['path'] for x in pages for v in x.get('existing_supplier_items',[])}),'issues':issues}
(BASE/'audit'/'plan-consistency.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps({k:v for k,v in report.items() if k!='issues'},indent=2));print('issues:',len(issues))
for e in issues[:30]:print(e)
