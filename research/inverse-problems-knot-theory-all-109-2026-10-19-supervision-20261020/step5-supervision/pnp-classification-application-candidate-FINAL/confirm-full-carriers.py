from pathlib import Path
import json,hashlib,datetime
b=Path(__file__).parent;old='def-ip-pnp-ista-with-denoiser';new='alg-ip-pnp-ista-with-denoiser';sha=lambda x:hashlib.sha256(x).hexdigest()
invraw=(b/'inventory.json').read_bytes();assert sha(invraw)=='a1d9ce550b6c55d742b84a7cfd6856938253f208fd0ba30f100c98808a9cb9e5';inv=json.loads(invraw);q=json.loads((b/'proposed-owner-request.json').read_bytes());earlier=b.parent/'pnp-classification-application-candidate';first=b.parent/'pnp-classification-escalation/FIRST-report.json'
assert q['home_page']=='plug-and-play-mmse-regularization';assert q['independent_review']==str((b/'FULL-carrier-acceptance.json').relative_to(Path.cwd()))
e=q['entry'];sb=Path(e['before_source_file']).read_bytes();sc=Path(e['current_source_file']).read_bytes();assert sha(sb)==e['before_raw_sha256']==inv['source']['before_raw_sha256'];assert sha(sc)==e['after_raw_sha256']==inv['source']['after_raw_sha256'];assert Path('items/'+old+'.md').read_bytes()==sb
assert sc==sb.replace(('id: '+old+'\nkind: definition\n').encode(),('id: '+new+'\nkind: algorithm\naliases: ['+old+']\n').encode(),1);assert sc.split(b'---\n',2)[2]==sb.split(b'---\n',2)[2]
definition=sb.decode().split('## Definition\n',1)[1].split('\n## Definition references',1)[0].strip()
def tr(v):
 if isinstance(v,list):return [tr(x) for x in v]
 if isinstance(v,dict):
  z={(new if k==old else k):tr(x) for k,x in v.items()}
  if v.get('id')==old:assert v['kind']=='definition';z['kind']='algorithm'
  if v.get('source')==old and 'quote' in v:z['quote']=definition
  return z
 return new if v==old else v
assert len(inv['carrier_bindings'])==len(q['carriers'])==9
checks=[]
for c,h in zip(q['carriers'],inv['carrier_bindings']):
 assert c['path']==h['path'];a=Path(c['before_file']).read_bytes();z=Path(c['current_file']).read_bytes();assert sha(a)==h['before_sha256'];assert sha(z)==h['after_sha256'];assert Path(c['path']).read_bytes()==a,c['path']
 if c['path'].endswith('.md'):assert z==a.replace(old.encode(),new.encode())
 else:
  ja=json.loads(a);jz=json.loads(z);assert jz==tr(ja),c['path']
  if c['path'].endswith('-proof-contracts.json') and '-batch-' not in c['path']:
   key='lem-upsilon-nu-minus-four-ball-bound';assert jz['contracts'][key]==ja['contracts'][key]
   assert sha(a)=='36f45da45241eb35033fee32c6ca56772c243e560f6df96e335d7611a57e6cb6'
  else:
   assert a==(earlier/'before'/c['path']).read_bytes();assert z==(earlier/'candidate'/c['path']).read_bytes()
 checks.append(c['path'])
assert sc==(earlier/'candidate/items'/f'{new}.md').read_bytes()
r={'accepted':True,'reviewer_identity':'/root/pnp_classification_scope','current_review_granted':False,'native_execution_coverage_adopted':False,'before_source_sha256':sha(sb),'after_source_sha256':sha(sc),'carrier_bindings':inv['carrier_bindings'],'run':q['run'],'reviewed_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'review_scope':'Final exact-binding confirmation of same FIRST finite identity-only classification migration; complete supplier and all nine before/candidate carrier bytes checked independently. No new mathematical repair/review cycle.','review_file':str(first.relative_to(Path.cwd())),'review_sha256':sha(first.read_bytes()),'prior_archived_full_review':str((earlier/'ARCHIVED-full-carrier-review.json').relative_to(Path.cwd())),'inventory_sha256':sha(invraw),'source_and_nine_live_before_guards_match_at_confirmation':True,'reading_limits':'Original full mathematical/source reading limits and four consumer dispositions remain exactly those in preserved FIRST-report.json. Fully parsed all four JSON before/after pairs and checked complete structures independently against exact identity/kind plus full unchanged Definition citation replacement; four item and page candidates match exact literal substitutions. Eight earlier carrier candidates are byte-identical; refreshed merged pair preserves every unrelated field, specifically all native Upsilon repairs. Native runtime hold is reported by author/root and is not independently certified by this mathematical acceptance; root recorder must authenticate it and recheck live guards. No unrelated supplier proof, source paper, native owner review, judgment, certification or gate credit is claimed.','findings':['Supplier body including Definition, role-only caveats, choice premises, TikZ and source references is byte-identical; only id/kind and old-ID alias change.','All nine exact inventory before/after raw bindings authenticated in inventory order; all live preimages still match at confirmation.','Batch49 and plan preserve all claims, premise lists and dependency levels; only original item identity/kind and its consumer identity edges change.','Batch49 contracts refresh two stale F2 quotes; merged contracts refresh these plus its stale AWGN F3 quote to exact whole unchanged Definition. All other current/history/template fields preserved.','Refreshed merged contract retains lem-upsilon-nu-minus-four-ball-bound native adjudication_repair_note, boundary evidence and derivation claim byte-equivalent as parsed fields.'],'application_performed':False,'remaining':'Root applies only exact accepted candidates under current live-before guards, authenticates paused/drained hold and immutable native history, and records transition. Genuine new native current review/certification/Sol judgment and ordinary gates remain owed.'}
with (b/'FULL-carrier-acceptance.json').open('x') as f:json.dump(r,f,indent=2,ensure_ascii=False);f.write('\n')
print(json.dumps({'acceptance':str(b/'FULL-carrier-acceptance.json'),'sha256':sha((b/'FULL-carrier-acceptance.json').read_bytes()),'carriers':len(checks),'accepted':True},indent=2))
