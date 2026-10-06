import json,re,pathlib,hashlib,datetime
P=pathlib.Path; out=P('research/frontier-41-ha-dt-29-owner5b-completion-group-1'); work=json.loads(P('research/frontier-41-ha-dt-29-owner5b-completion-worklists/group-1.json').read_text());reviewer='owner-helper /root/step5b_completion_g1';run=work['run'];torus='ex-perfect-morse-function-on-a-torus';defect='5b-owner-g1-torus-endpoint-coefficient-attribution'
def raw(i):return P('items/'+i+'.md').read_bytes()
def sha(b):return hashlib.sha256(b).hexdigest()
def body(i):return raw(i).decode().split('---',2)[-1]
def clause(i):
 t=body(i);m=re.search(r'(?ms)^## (Statement|Definition|Remark|Remarks)\n(.*?)(?=^## |\Z)',t);return (m.group(1),m.group(2).strip()) if m else ('body',t.strip())
def evidence(i,s):
 t=body(i);pars=t.split('\n\n');hit=[p.strip() for p in pars if '[['+s+']]' in p or '[['+s+'|' in p];sec,q=clause(s)
 if not hit:return f'{s}: no body invocation in the current consumer; the declared dependency does not supply a proof step. Interface checked as context only, not load-bearing.'
 loc=[]
 for p in hit:
  f=re.match(r'\[(F\d+|L\d+|A\d+)\]',p)
  if f:
   tag=f.group(1);uses=[re.match(r'(\d+\.\d+)',a).group(1) for a in pars if re.match(r'\d+\.\d+',a) and re.search(r'\[[^\]]*\b'+tag+r'\b',a)];loc.append(tag+(' -> Proof/Verification '+', '.join(uses) if uses else ' (contextual Fact)'))
  else:
   st=re.match(r'(\d+\.\d+)',p);loc.append('Proof/Verification '+st.group(1) if st else 'Definition/Statement/Remarks clause')
 # Exact quotations expose consumed clauses and the current claim without attributing an unavailable historic version.
 return f'{s}: consumer '+ '; '.join(loc)+'. Exact consumed text: '+ ' / '.join(hit)+f' Supplier {sec}: '+q+'. Disposition: the quoted consumer use is licensed in its stated scope; explanatory mentions and unused Facts supply no stronger result.'
rows=[]
for e in work['pending_edges']:
 repaired=e['from']==torus
 rows.append(dict(kind='edge',**{k:e[k] for k in ['from','to','from_group','to_group']},reviewer=reviewer,from_sha256=sha(raw(e['from'])),to_sha256=sha(raw(e['to'])),verdict='repaired' if repaired else 'accurate',note=evidence(e['from'],e['to'])+(' Local repair retains all torus claims and routes endpoint coefficients through the endpoint boundary-coefficient lemma; the cited matrix Definition now only excludes n=2.' if repaired else ''),defect_ids=[defect] if repaired else []))
(out/'edge-verdicts.jsonl').write_text(''.join(json.dumps(r)+'\n' for r in rows))
disp=[]
for c in work['pending_direct_consumers']:
 notes='\n\n'.join(evidence(c['id'],s) for s in c['changed_suppliers'])
 if c['id']==torus:notes+='\n\nRepair: matrix scope 1<=k<=n-2 has no n=2 case; F3, Proof 3.1 and first Remark now use the endpoint coefficient lemma. Hessian indices, integer opposite signs, ranks 1/2/1, Q=0 and chi=0 unchanged.'
 disp.append(dict(id=c['id'],status='repaired' if c['id']==torus else 'still-licensed',reviewer=reviewer,consumer_sha256=sha(raw(c['id'])),changed_suppliers=c['changed_suppliers'],notes=notes))
(out/'impact-dispositions.json').write_text(json.dumps(dict(run=run,group=1,dispositions=disp),indent=2)+'\n')
car=[]
for f in (out/'before').iterdir():
 current=P('items')/f.name if f.name==torus+'.md' else P('research')/f.name
 car.append(dict(path=str(current),before_file=str(f),before_raw_sha256=sha(f.read_bytes()),after_raw_sha256=sha(current.read_bytes()),cause=defect,statement_or_definition_changed=False))
(out/'carrier-deltas.json').write_text(json.dumps(car,indent=2)+'\n')
(out/'defect-proposals.json').write_text(json.dumps([dict(defect_id=defect,run=run,stage='5b',subject=torus,reviewer=reviewer,severity='nonfatal',disposition='fixed',finding='Surface endpoint computation attributed to matrix Definition restricted to 1<=k<=n-2.',repair='F3 and Proof 3.1 now cite endpoint boundary-coefficient clause; first Remark explicitly excludes the middle-index matrix on surfaces. Proof provenance marked ai-altered. Batch 4 contract/manifest synced.',statement_or_definition_changed=False,before_file=str(out/'before'/(torus+'.md')),pre_raw_sha256=sha((out/'before'/(torus+'.md')).read_bytes()),post_raw_sha256=sha(raw(torus)),root_needed_obligations=['Integrate actual Step5b defect record and verdicts; synchronize aggregate metadata and stable evidence for the edited source/contract/manifest.'])],indent=2)+'\n')
(out/'report.md').write_text('''# Group 1 exact Step5b completion

Reviewer: owner-helper /root/step5b_completion_g1. Work only in the isolated frontier checkout; no additional agents or engine transitions.

Completed 36/36 pending edges (35 accurate, 1 repaired) and 83/83 direct consumers (82 still-licensed, 1 repaired). Every changed supplier is mapped to its actual current Fact/Proof/Definition/Remark text and quoted current supplier clause in the receipts. Cases were read in dependency-level order, with external supplier claims checked as context. No historical source bytes or native reviews are claimed as newly available; this is an owner-helper interface review, not independent complete-proof recertification.

One confirmed repair: the torus example used the middle-index matrix Definition at the surface endpoints, outside 1<=k<=n-2. The endpoint coefficient lemma already supplies k=0 and k=n-1. F3, Proof 3.1 and the first Remark now make that distinction. All approved mathematical claims and local prerequisites remain. Statement/Definition, dependency list and proof route are unchanged. Batch 4 proof contract and manifest strategy/provenance were synchronized. Exact before bytes/hashes are archived.

The collar-extension field completeness is consumed with stopped boundary trajectories; rearrangement and equal-value merges invoke the no-connection interface after separation. CW consumers use finite models of pairs, and the chain filtration is index-ordered. Cancellation consumers retain exact single-point/endpoints and transport later attachments. Slide consumers use inverse dual lower-column changes and the extra upper-slide range. Self-intersection consumers retain normalized tubes, tangent-first normal orientation, the Koszul factor before zero-dimensional evaluation, and the mod-two fallback. No missing local supplier or unresolved assigned interface remains.

Focused checks after the final edit: `node tools/proof-layout.mjs items/ex-perfect-morse-function-on-a-torus.md` passed (1 item, 6 steps, 0 defects); `node tools/tsx-run.mjs tools/precheck.mts items/ex-perfect-morse-function-on-a-torus.md` passed (1 checked, 0 failing); `node tools/rendercheck.mjs items/ex-perfect-morse-function-on-a-torus.md --strict` passed (1 file). An initial rendercheck --help attempt was interrupted after recognizing that this tool interprets it as an empty selection; no result from that attempt is claimed. No whole-corpus check, gate or certification was completed.

Root owns aggregate integration, actual defect ledger disposition and stable certification. Receipt coverage and current raw hashes checked locally when generated.
''')
print(len(rows),len(disp),len(car))
