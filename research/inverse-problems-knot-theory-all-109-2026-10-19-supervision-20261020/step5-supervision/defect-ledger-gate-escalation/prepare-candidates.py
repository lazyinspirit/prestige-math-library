import json,glob,hashlib,datetime,pathlib,re
RUN='inverse-problems-knot-theory-all-109-2026-10-19'
OUT=pathlib.Path(__file__).parent
now=datetime.datetime.now(datetime.timezone.utc).isoformat()
def sha(p):return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def read(p):return json.loads(pathlib.Path(p).read_text())
def save(n,d): (OUT/n).write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
adjp='research/'+RUN+'-judge-adjudications.jsonl';ledger='research/defect-ledger.jsonl';before={p:sha(p)for p in [adjp,ledger,'research/DEFECT-LEDGER.md','research/'+RUN+'-step3-closure.json']}
adjs=[json.loads(l)for l in open(adjp)if l.strip()]
es=[json.loads(l)for l in open('.autopilot/'+RUN+'/events.jsonl')]
event=next(e for e in es if e.get('id')=='defect-ledger'and 'rawOutput'in e)
save('native-gate-event.json',event)
(OUT/'native-gate-raw-output.txt').write_text(event['rawOutput'])
rows=[];bindings=[]
for ai,a in enumerate(adjs):
 if a.get('outcome')!='confirmed_fatal':continue
 matches=[]
 for p in glob.glob('research/'+RUN+'-step5-v2/step5-v2-'+a['step5_phase']+'-r'+str(a['step5_round'])+'-u*.json'):
  d=read(p)
  for di,x in enumerate(d.get('decisions',[])):
   if all(x.get(k)==a.get(k)for k in ['id','model','context_sha256','outcome']):matches.append((p,d,di))
 assert len(matches)==1,(a,matches)
 p,d,di=matches[0];review=[(i,x)for i,x in enumerate(d['reviews'])if x['id']==a['id']];assert len(review)==1 and review[0][1]['disposition']=='repaired'
 ri,rev=review[0];updates=[(i,u)for i,u in enumerate(d.get('ledger_updates',[]))if u.get('id')==a['id']and u.get('ledger')=='canonical-defect-ledger']
 label=pathlib.Path(p).stem;rp='research/'+RUN+'-dispatch/alpha-adjudicate-'+label+'.result.json';res=read(rp);assert res['ok']and res['exit_code']==0
 collection='research/'+RUN+'-step5-v2/'+a['step5_phase']+'-'+str(a['step5_round'])+'-collected.json';co=read(collection);assert not co['errors']
 pack='research/'+RUN+'-step5-v2/'+a['step5_phase']+'-'+str(a['step5_round'])+'.json';pk=read(pack);assert pk['before'][a['id']]==a['item_sha256']
 for x in [p,rp,collection,pack]:before[x]=sha(x)
 # A broad exact taxonomy preserves the native defect_type rather than inventing a more specific diagnosis.
 # Native location proposal remains verbatim in supporting bindings.
 locs=[u.get('location')for _,u in updates if u.get('location')]
 text=' '.join(str(x)for x in locs).lower()
 location='facts-block'if 'fact'in text else 'proof-step'if any(x in text for x in ['proof','step','verification'])else 'definition'if 'definition'in text or a['id'].startswith(('def-','alg-'))else 'statement'
 ref={k:a[k]for k in ['id','model','context_sha256','item_sha256']};ref.update(path=adjp,index=ai)
 row={'defect_id':f"ipkt109-step5-historical-{a['step5_phase']}-r{a['step5_round']}-{a['id']}",'run':RUN,'at':now,'class':'accuracy','subclass':'other','subclass_note':'Historical native adjudication classified this confirmed defect as '+a['defect_type']+'; exact reason and original proposed taxonomy are preserved in the bound native report.','severity':'fatal','location':location,'subject':a['id'],'caught_at_stage':'5-adjudicate','caught_by_role':'final-adjudicator','disposition':'fixed','repair_cost':'repair+rejudge','adjudication_ref':[ref],'evidence':[{'path':p,'anchor':f'/decisions/{di}','note':'Native completed adjudication: '+a['reason']},{'path':p,'anchor':f'/reviews/{ri}','note':'The same genuine native report records disposition repaired and post_sha256 '+rev['post_sha256']+'. This historical record attributes the repair to that report; it supplies no new root proof review or current-source certification.'},{'path':rp,'note':'Actual successful native execution model '+res['model']+', provider_effort '+res['provider_effort']+', ended_at '+res['ended_at']+'. The model in adjudication_ref identifies the reviewed original verdict, not this adjudicator.'}],'prevention':{'kind':'none','ref':'Historical omission reconciled from existing native evidence; no prevention claim.'},'native_decision_at':a['at'],'recording_basis':'historical-native-decision-and-repaired-review','original_defect_type':a['defect_type']}
 rows.append(row)
 bindings.append({'defect_id':row['defect_id'],'adjudication_index':ai,'adjudication':a,'report':{'path':p,'sha256':sha(p),'decision_index':di,'review_index':ri},'native_review':rev,'native_ledger_proposals':[{'index':i,'proposal':u}for i,u in updates],'successful_result':{'path':rp,'sha256':sha(rp),'model':res['model'],'provider_effort':res['provider_effort'],'started_at':res['started_at'],'ended_at':res['ended_at']},'collection':{'path':collection,'sha256':sha(collection)},'pack':{'path':pack,'sha256':sha(pack),'before_sha256':pk['before'][a['id']]},'location_normalization':{'native_proposals':locs,'candidate':location,'scope':'broad section taxonomy only; original native loci retained above'}})
assert len(rows)==99
save('candidate-rows.json',rows);(OUT/'candidate-rows.jsonl').write_text(''.join(json.dumps(r,ensure_ascii=False)+'\n'for r in rows));save('candidate-evidence.json',{'version':1,'run':RUN,'recorded_at':now,'historical_only':True,'no_new_mathematical_review':True,'bindings':bindings});save('before-hashes.json',{'recorded_at':now,'files':before})
print('Prepared',len(rows),'candidate rows; no live ledger/source/code/runtime changed')
