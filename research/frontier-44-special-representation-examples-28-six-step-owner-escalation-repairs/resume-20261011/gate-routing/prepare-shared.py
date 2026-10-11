import json,pathlib,hashlib,copy,collections
R=pathlib.Path('.');run='frontier-44-special-representation-examples-28-six-step';base=R/'research'/f'{run}-owner-escalation-repairs';B=base/'resume-20261011/gate-routing';H=lambda x:hashlib.sha256(json.dumps(x,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()).hexdigest();raw=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest();ref=lambda p:{'path':str(p),'sha256':raw(p)};iv=json.load(open(B/'native-carrier-inventory.json'))['rows'];active={r['defect_id']:r for r in json.load(open(B/'active-ledger.json'))['rows']};q=json.load(open(base/'resume-20261011/qschur/gate1/routing-deltas.proposed.json'));rows=[]
# Actual native Hodge source9.1 has already corrected the original8.1 ascent/descent citation.
old=active['f44six-b21-hodge-citation'];new=copy.deepcopy(old);newid='f44six-b21-hodge-citation-owner-fixed-20261011';new.update(defect_id=newid,supersedes=[old['defect_id']],disposition='fixed',repair='Current complete producer proof9.1 explicitly uses the positive-parameter descent case of F3, with S(xprime) from7.1 and hL(xprime) from8.1. This is precisely the missing input identified by original reader21:4 and refuter21:4, now actually present; preserve original nonfatal-recorded history and immutable observations. This local closure does not imply a whole Hodge audit.',adjudication_ref=[{'path':f'research/{run}-alpha-batch-21-3a-decisions.json','obligation':o} for o in ['reader:21:4','refuter:21:4']]);new.setdefault('evidence',[]).extend([{'path':str(B/'hodge-citation-grounding.md'),'note':'Actual current9.1 and exact F3 positive descent supplier checked; no new source edit.'},{'path':'items/thm-hodge-riemann-for-indecomposable-soergel-bimodules.md','note':'Actual S(xprime), hL(xprime), positive descent branch in9.1.'}]);rows.append(new);active[newid]=new
replacements={x['obligation']:x for x in q['decision_replacements']}
for r in iv:
 if r['decision']['obligation'] in ['reader:21:4','refuter:21:4']:r['decision']['defect_ids']=[newid]
 if r['decision']['obligation'] in replacements:
  patch=replacements[r['decision']['obligation']];r['decision']=patch.get('after',patch.get('replacement',r['decision']))
for x in q['new_ledger_rows']:active[x['defect_id']]=x
geometry=json.load(open(base/'resume-20261011/gate-soergel-routing/proposal.json'))['shared_evidence_additions'];external_ids={e['defect_id'] for e in geometry};families=collections.defaultdict(list)
for r in iv:
 for did in r['decision'].get('defect_ids',[]):families[did].append(r)
ids=[s.split()[0] for s in json.load(open(B/'error-partition.json'))['ledger-double-owned']]
ids += [newid,'f44-six-step-3a-batch32-page-refinement-native-observation-closed-20261011']+[x['defect_id'] for x in q['sharing_handoff']]
entries=[];fields=[];held=[]
for did in dict.fromkeys(ids):
 if did in external_ids or did==old['defect_id']:continue
 row=active.get(did);family=families.get(did,[])
 if not row or len(family)<2:held.append({'defect_id':did,'reason':'No complete active native same-row family yet; retain original diagnostics.'});continue
 if any(r['decision']['id']!=row['subject'] for r in family):held.append({'defect_id':did,'reason':'Cross-subject causal context is not a shared same-subject physical defect. Typed own-subject decisions belong to delegated reconciliation; no ownerSharedDefect bypass.'});continue
 if row['disposition'] not in ['fixed','narrowed','dropped']:held.append({'defect_id':did,'reason':'No real completed fixed/narrowed/dropped repair; do not manufacture closure.'});continue
 subject=row['subject'];p=R/'items'/(subject+'.md')
 if not p.exists():
  p=next((R/'library'/page['category']/(subject+'.md') for f in (R/'research').glob(run+'-batch-*.pages.json') for page in json.load(open(f)) if page['id']==subject),None)
 if not p or not p.exists():held.append({'defect_id':did,'reason':'Current source missing.'});continue
 refs=[ref(p)];seen={str(p)}
 for r in family:
  for ep in [r['decision_file'].replace('-3a-decisions.json','-3a.md')]+[e.get('path') for e in row.get('evidence',[]) if isinstance(e,dict)]:
   if isinstance(ep,str) and ep.startswith('research/') and pathlib.Path(ep).is_file() and ep not in seen:refs.append(ref(ep));seen.add(ep)
 if did==newid:refs.append(ref(B/'hodge-citation-grounding.md'))
 entry={'id':subject,'defect_id':did,'ledger_row_sha256':H(row),'current_path':str(p),'current_raw_sha256':raw(p),'reason':'The exact immutable observations in this family refer to the same subject and the single physical defect already recorded by this actual closed native/owner ledger row. This proposal binds those original targets to the existing current supplier repair and retained native/owner evidence; it creates no observation, source reading, review round, worker acceptance or additional defect. Original claim evidence is retained verbatim below for root review.','evidence':refs,'obligations':[{'obligation':r['decision']['obligation'],'target_sha256':H(r['target'])} for r in family],'original_physical_repair_evidence':row.get('evidence',[]),'decision_evidence':[{'obligation':r['decision']['obligation'],'evidence':r['decision'].get('evidence')} for r in family]};entries.append(entry)
 anchor=family[0]['decision']['obligation']
 for r in family:
  d=r['decision'];add={}
  if d.get('repair_confidence')!=1:add['repair_confidence']=1
  if d['obligation']!=anchor:
   add['same_defect_as']=anchor;add['same_defect_evidence']='Exact same subject and closed physical ledger defect '+did+'; immutable target hashes and actual current supplier repair evidence are bound in the root owner shared-defects record. Binary repair_confidence1 means the existing completed constructed repair, not a rounded epistemic probability or independent audit.'
  if add:fields.append({'path':r['decision_file'],'obligation':d['obligation'],'id':d['id'],'before_decision_sha256':H(d),'add_fields':add,'native_source_observation_fields_unchanged':True,'requires_actual_closed_row':did})
packet={'version':1,'run':run,'shared_evidence_additions':entries,'external_shared_evidence_packet':ref(base/'resume-20261011/gate-soergel-routing/proposal.json'),'external_shared_evidence_key':'shared_evidence_additions','external_shared_evidence_count':len(geometry),'decision_field_additions':fields,'new_ledger_rows':rows,'hodge_decision_defect_ref_replacements':[{'path':f'research/{run}-alpha-batch-21-3a-decisions.json','obligation':o,'before_defect_ids':[old['defect_id']],'after_defect_ids':[newid]} for o in ['reader:21:4','refuter:21:4']],'held':held,'requires_root_current_hash_refresh':True,'existing_shared_entries_retained':True,'no_live_changes':True};(B/'shared-families.proposed.json').write_text(json.dumps(packet,indent=2)+'\n');print(len(entries),'own sharing entries +',len(geometry),'external; fields',len(fields),'held',len(held))
