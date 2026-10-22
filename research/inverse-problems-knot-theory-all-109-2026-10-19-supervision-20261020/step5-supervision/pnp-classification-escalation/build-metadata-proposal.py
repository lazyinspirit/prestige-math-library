from pathlib import Path
import json,hashlib,copy
base=Path(__file__).parent;run='inverse-problems-knot-theory-all-109-2026-10-19';old='def-ip-pnp-ista-with-denoiser';new='alg-ip-pnp-ista-with-denoiser';sha=lambda b:hashlib.sha256(b).hexdigest()
def save(p,b):
 p.parent.mkdir(parents=True,exist_ok=True)
 with p.open('xb') as f:f.write(b)
definition=(base/'preimages/items'/f'{old}.md').read_text().split('## Definition\n',1)[1].split('\n## Definition references',1)[0].strip()
p=Path('research')/f'{run}-batch-49.proof-contracts.json';before=p.read_bytes();j=json.loads(before);edits=[]
# Exact targeted edits; never rewrite template_review hashes or historical provenance.
s=j['scope'];n=s.index(old);edits.append({'pointer':f'/scope/{n}','before':old,'after':new});s[n]=new
j['contracts'][new]=j['contracts'].pop(old);edits.append({'operation':'rename-key','pointer':'/contracts','before':old,'after':new})
for k,c in j['contracts'].items():
 for n,x in enumerate(c.get('citations',[])):
  if x.get('source')==old:
   edits.append({'pointer':f'/contracts/{k}/citations/{n}/source','before':old,'after':new});x['source']=new
   if x['quote'] not in definition:
    edits.append({'pointer':f'/contracts/{k}/citations/{n}/quote','before':x['quote'],'after':definition,'reason':'Stale pre-qualification F2 quote must bind unchanged complete current Definition.'});x['quote']=definition
for n,x in enumerate(j.get('supplier_reconciliation',[])):
 for i,v in enumerate(x.get('affected_claims',[])):
  if v==old:edits.append({'pointer':f'/supplier_reconciliation/{n}/affected_claims/{i}','before':old,'after':new});x['affected_claims'][i]=new
b=(json.dumps(j,indent=2,ensure_ascii=False)+'\n').encode();cp=base/'candidate'/p;save(cp,b)
record={'version':1,'kind':'unapplied-targeted-current-contract-reconciliation','run':run,'source':str(p),'required_before_raw_sha256':sha(before),'preimage':str(base/'preimages'/p),'candidate':str(cp),'candidate_raw_sha256':sha(b),'edits':edits,'guards':'Only root may apply under authenticated frozen identity adapter after comparing before raw SHA256. Exact JSON semantic edits above; original template_review hashes and all historical provenance retained. No native evidence, acceptance or coverage is supplied.','limits':'Current source identity/quote proposal only; root separately owns complete plan, manifest and merged-contract reconciliation and current certification.'}
assert before==(base/'preimages'/p).read_bytes(),'Metadata changed since FIRST capture'
# Prove every old quote and row field outside listed exact edits survives by undoing.
u=copy.deepcopy(j)
for e in reversed(edits):
 if e.get('operation')=='rename-key':u['contracts'][old]=u['contracts'].pop(new);continue
 parts=e['pointer'].strip('/').split('/');v=u
 for k in parts[:-1]:v=v[int(k)] if isinstance(v,list) else v[k]
 key=parts[-1];v[int(key) if isinstance(v,list) else key]=e['before']
assert u==json.loads(before)
save(base/'guarded-contract-proposal.json',(json.dumps(record,indent=2,ensure_ascii=False)+'\n').encode())
print(json.dumps({'file':str(base/'guarded-contract-proposal.json'),'edits':len(edits),'stale_quote_refreshes':sum(e['pointer'].endswith('/quote') for e in edits)},indent=2))
