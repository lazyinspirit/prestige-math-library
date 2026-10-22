from pathlib import Path
import json,hashlib,datetime,copy
b=Path(__file__).parent;old='def-ip-pnp-ista-with-denoiser';new='alg-ip-pnp-ista-with-denoiser';sha=lambda x:hashlib.sha256(x).hexdigest()
q=json.loads((b/'proposed-owner-request.json').read_bytes());inv=json.loads((b/'inventory.json').read_bytes());e=q['entry'];sb=Path(e['before_source_file']).read_bytes();sc=Path(e['current_source_file']).read_bytes()
assert sha(sb)==e['before_raw_sha256']==inv['source']['before_raw_sha256'];assert sha(sc)==e['after_raw_sha256']==inv['source']['after_raw_sha256']
assert sc==sb.replace(('id: '+old+'\nkind: definition\n').encode(),('id: '+new+'\nkind: algorithm\naliases: ['+old+']\n').encode(),1)
assert sc.split(b'---\n',2)[2]==sb.split(b'---\n',2)[2]
definition=sb.decode().split('## Definition\n',1)[1].split('\n## Definition references',1)[0].strip()
# Independent structural transform: map exact identity values and dictionary
# keys; only the original-ID record may change kind. Citation refreshes are
# explicitly recognized via the original source identity, not arbitrary quotes.
def transform(v):
 if isinstance(v,list):return [transform(x) for x in v]
 if isinstance(v,dict):
  r={(new if k==old else k):transform(x) for k,x in v.items()}
  if v.get('id')==old:assert v.get('kind')=='definition';r['kind']='algorithm'
  if v.get('source')==old and 'quote' in v:r['quote']=definition
  return r
 return new if v==old else v
checks=[];mismatches=[]
for c,bind in zip(q['carriers'],inv['carrier_bindings']):
 assert c['path']==bind['path'];before=Path(c['before_file']).read_bytes();after=Path(c['current_file']).read_bytes();assert sha(before)==bind['before_sha256'];assert sha(after)==bind['after_sha256']
 if c['path'].endswith('.md'):assert after==before.replace(old.encode(),new.encode());how='exact literal identity substitution, all other bytes identical'
 else:
  original=json.loads(before);candidate=json.loads(after);assert candidate==transform(original),c['path'];how='complete parsed JSON equals bounded independent semantic identity/kind/unchanged-Definition citation transform; every other key/value preserved'
  if c['path'].endswith('-batch-49.proof-contracts.json'):
   own=b.parent/'pnp-classification-escalation/candidate'/c['path'];assert candidate==json.loads(own.read_bytes())
  if 'proof-contracts' in c['path']:
   for k,v in candidate['contracts'].items():
    for n,row in enumerate(v.get('citations',[])):
     if row.get('source')==new:assert row['source_section']=='Definition';assert row['quote']==definition
 live=Path(c['path']).read_bytes();current=live==before
 checks.append({'path':c['path'],'check':how,'before_sha256':sha(before),'after_sha256':sha(after),'live_before_matches':current,'live_raw_sha256':sha(live)})
 if not current:mismatches.append({'path':c['path'],'expected_before_sha256':sha(before),'observed_live_sha256':sha(live)})
assert len(checks)==9
first=b.parent/'pnp-classification-escalation/FIRST-report.json';prior=json.loads(first.read_bytes())
assert sha(sb)==next(x['raw_sha256'] for x in prior['bindings'] if x['source']=='items/'+old+'.md')
assert sha(sc)==next(x['candidate_raw_sha256'] for x in prior['bindings'] if x['source']=='items/'+old+'.md')
r={'version':1,'kind':'independent-full-carrier-archived-candidate-semantic-review','run':q['run'],'reviewer_identity':'/root/pnp_classification_scope','reviewed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'archived_semantic_candidate_accepted':True,'current_application_accepted':False,'accepted':False,'current_review_granted':False,'native_execution_coverage_adopted':False,'before_source_sha256':sha(sb),'after_source_sha256':sha(sc),'carrier_bindings':inv['carrier_bindings'],'checks':checks,'live_preimage_mismatches':mismatches,'root_math_review':{'file':str(first),'raw_sha256':sha(first.read_bytes())},'inventory_sha256':sha((b/'inventory.json').read_bytes()),'reading_limits':'Read full protocol document, inventory and proposed owner request. Read all source/carrier bytes and parsed all four complete JSON before/candidate pairs; independently checked every semantic field against bounded transform. Complete source/proofs and affected-consumer mathematical dispositions remain those in the preserved FIRST. No unrelated merged-contract proofs or external papers reviewed. This finite metadata comparison is not native review, certification, judgment, gate approval or acceptance of changed live merged metadata.','findings':['Supplier source is precisely prior accepted candidate with whole body unchanged; four consumers and A-page are exactly prior accepted literal identity substitutions.','Batch49 manifest and plan change exactly original item ID/kind and four consumer deps. Batch and merged contracts retarget scope/key/citations and exact-identity mirrors; template_review stamps and all unrelated data are preserved.','Batch49 refreshes the two stale F2 quotes. Merged contract refreshes three stale quotes, including its independently stale AWGN F3 mirror, to the complete unchanged Definition. No proof or mathematical premise changes.','Observed live merged-contract difference is outside this migration: lem-upsilon-nu-minus-four-ball-bound added adjudication_repair_note and changed boundaries/1/evidence and derivations/0/claim. Root must preserve that genuine concurrent work.'],'required_before_full_acceptance':'At genuine109-complete paused/drained hold, refresh merged-contract preimage and apply identical bounded transform to refreshed candidate; refresh inventory/request raw bindings; obtain final independent comparison and exact nine-row FULL-carrier-acceptance.json. Do not apply stale merged candidate.'}
p=b/'ARCHIVED-full-carrier-review.json'
with p.open('x') as f:json.dump(r,f,indent=2,ensure_ascii=False);f.write('\n')
print(json.dumps({'review':str(p),'archived_semantics_accepted':True,'current_application_accepted':False,'mismatches':mismatches},indent=2))
