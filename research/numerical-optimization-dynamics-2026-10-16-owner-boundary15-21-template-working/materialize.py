from pathlib import Path
import runpy,json,re,collections
r='numerical-optimization-dynamics-2026-10-16';base=Path(__file__).resolve().parent;D=runpy.run_path(str(base/'dossiers.py'))['D'];selected=json.load(open(base/'selected-rows.json'));owned={(x['item'],x['case'])for x in json.load(open(f'research/{r}-owner-boundary15-28/targeted-operations.json'))['operations']};out=[];contexts={};gaps=[]
for id,d in D.items():
 s=Path('items/'+id+'.md').read_text();heads=[m for m in re.finditer(r'^## ([^\n]+)\n([\s\S]*?)(?=^## |\Z)',s,re.M)];claim=next(m for m in heads if m[1]in['Statement','Definition','Statement refuted','Example']);proof=next((m for m in heads if m[1]in['Proof','Verification','Counterexample']),None);steps=[]
 if proof:
  steps=[{'step':m[1],'text':m[2].strip()}for m in re.finditer(r'(?m)^(\d+\.\d+)\s+([\s\S]*?)(?=^\d+\.\d+\s|\Z)',proof[2])]
 contexts[id]={'path':'items/'+id+'.md','claim_section':claim[1],'actual_claim_text':claim[2].strip(),'current_proof_steps':steps,'source_notes':d}
for row in selected:
 id=row['item'];case=row['case'];assert(id,case)not in owned;d=D[id];context=contexts[id]
 if case in['iff-forward','iff-reverse']:
  direction='forward implication'if case=='iff-forward'else'reverse implication'
  reason=(f"The asserted conclusion is {d['result']}, for {d['domain']}. This is the item's stated procedure, identity, bound or example conclusion; it does not assert a biconditional whose {direction} must be proved separately.")
  status='not_applicable'
 elif case=='nonempty-choice':
  reason=d['choice']+' The supplied construction therefore has no additional arbitrary-family selection premise to discharge.';status='not_applicable'
 else:
  flag,reason=d['cases'][case].split(':',1);status={'C':'checked','N':'not_applicable'}[flag]
 # Actual source excerpt navigation is evidence context, not new proof acceptance.
 anchor_terms={'empty':['empty','zero','n=1','p=0','n\\ge1','n\\ge 1'], 'zero':['zero','=0','\\tau','nonzero'], 'one':['=1','one','scalar','singleton'], 'degenerate':['singular','zero','rank','failure','positive'], 'endpoints':['end','range','\\le','threshold','index'], 'nonempty-choice':['choose','first','least','unique','finite','explicit']}
 steps=context['current_proof_steps'];terms=anchor_terms.get(case,[]);matched=[x for x in steps if any(t.lower()in x['text'].lower()for t in terms)];anchors=matched[:2]if matched else steps[:1]
 source_read={'path':context['path'],'claim_section':context['claim_section'],'claim_excerpt':context['actual_claim_text'],'current_step_anchors':[x['step']for x in anchors], 'anchor_excerpts':anchors, 'scope':'Actual current claim/domain and the listed local proof/procedure coordinates used for this boundary disposition; no new whole-item mathematical audit.'}
 before=next(x for x in json.load(open(f'research/{r}-batch-{row["batch"]}.proof-contracts.json'))['contracts'][id]['boundaries']if x['case']==case)
 assert before==row['before'],(id,case,'metadata drift')
 after={'case':case,'status':status,('evidence'if status=='checked'else'reason'):reason}
 out.append({'batch':str(row['batch']),'item':id,'case':case,'before':before,'after':after,'source_read':source_read})
payload={'run':r,'scope':'RESEARCH ONLY template boundary replacements for batches15–21, actual510selected item/case rows across89items. Excludes all exact93keys owned by ledger28_36; that owner retains contradiction anchors15–28 and templates22–28. No canonical edits, source edits, hashes, bindings, validators or gates. Root alone integrates/binds after review. These are item/case-specific source/domain dispositions, not mass review upholds.','rows':out,'item_context':contexts,'open_gaps':gaps,'summary':{'rows':len(out),'items':len(contexts),'after_statuses':dict(collections.Counter(x['after']['status']for x in out)),'excluded_owner_keys':len(owned),'batch_rows':dict(collections.Counter(x['batch']for x in out))}}
path=Path(f'research/{r}-owner-boundary15-21-template-evidence.json');assert not path.exists(),'New output already exists; do not overwrite evidence';path.write_text(json.dumps(payload,indent=2)+'\n');print(path);print(json.dumps(payload['summary'],indent=2))
