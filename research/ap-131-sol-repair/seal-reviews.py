from pathlib import Path
import json,re,yaml,hashlib
b=Path(__file__).parent;latest={}
for p in sorted(b.glob('agent-*-receipts.jsonl')):
 for l in p.read_text().splitlines():
  r=json.loads(l);decision=r.get('decision')
  if not decision and r.get('disposition'):decision='accept' if r['disposition']=='unaffected' else 'repair' if r['disposition'].startswith('repaired') else None
  if decision:latest[r['id']]=(p,r,decision)
# Separate new-item receipts use a singular filename.
for p in b.glob('agent-*-new-item-receipt.jsonl'):
 for l in p.read_text().splitlines():
  r=json.loads(l);latest[r['id']]=(p,r,r.get('decision','author'))
bindings=[]
for id,(p,r,decision) in latest.items():
 q=Path('items')/(id+'.md');t=q.read_text();before=hashlib.sha256(t.encode()).hexdigest();assert before==r['current_sha256'],id
 m=re.match(r'^---\n(.*?)\n---',t,re.S);fm=m[1];meta=yaml.safe_load(fm);ver=dict(meta.get('verification') or {});ver.pop('audited',None);ver.pop('judge',None);ver.pop('verified',None)
 if decision=='defer' or meta.get('proved_here') is False:
  # Withdraw obsolete passes; an unresolved proof receives no verification pass.
  if meta.get('proved_here') is False:
   ver['precheck']='n/a'
   ver['sources_checked']={'date':'2026-09-24','scope':'Cited statement and missing local prerequisite examined; no proof-completion verdict. See '+str(p),'by':p.name.split('-receipts')[0]+' (owner-delegated GPT-6-Sol xhigh)'}
  else:
   ver['review_pending']={'date':'2026-09-24','reason':str(r.get('unresolved') or r.get('evidence')),'evidence':str(p)}

 else:
  ver['verified']={'model':'gpt-6-sol','verdict':'locally-reviewed','date':'2026-09-24','scope':'Bounded mathematical '+decision+' review recorded in '+str(p)+'. Local checks and any separate second-reader evidence are recorded in the run report; this is not an independent judge verdict or whole-library certification.','delegated_by':'user'}
 lines=fm.splitlines();out=[];j=0
 while j<len(lines):
  if re.match(r'^verification:',lines[j]):
   j+=1
   while j<len(lines) and (not lines[j].strip() or lines[j].startswith((' ','\t'))):j+=1
  else:out.append(lines[j]);j+=1
 newfm='\n'.join(out).rstrip()+'\n'+yaml.safe_dump({'verification':ver},sort_keys=False,allow_unicode=True).rstrip()
 new='---\n'+newfm+'\n---'+t[m.end():];check=yaml.safe_load(re.match(r'^---\n(.*?)\n---',new,re.S)[1]);assert check['id']==id and check.get('status')=='published',id
 # Apart from deliberate proof-status and verification updates, preserve every key/value.
 for k,v in meta.items():
  if k not in ['verification','proved_here']:assert check[k]==v,(id,k)
 q.write_text(new);after=hashlib.sha256(new.encode()).hexdigest();bindings.append({'id':id,'decision':decision,'receipt':str(p),'reviewed_sha256':before,'published_sha256':after,'changes':'verification record only' if decision!='defer' else 'withdraw stale proof passes; record unresolved prerequisite/source review'})
(b/'publication-review-bindings.json').write_text(json.dumps(bindings,indent=2)+'\n');print('Bound',len(bindings),'reviewed items to publication metadata; no judge stamps issued.')
