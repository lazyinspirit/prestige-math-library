from pathlib import Path
import json,re,hashlib,datetime,shlex
R='numerical-optimization-dynamics-2026-10-16';B=Path('research/'+R+'-owner-step2-b72-continuation');N=Path('research/'+R+'-scope-review/batch-72');state=json.loads((N/'state.json').read_text());p=state['prepared'];report=json.loads((N/'repair-1.json').read_text());roots=[];norm=lambda a:[' '.join(x.split()) for x in a]
for id,old in p['before_interfaces'].items():
 if old:
  text=Path('items/'+id+'.md').read_text();new=['## '+n+'\n\n'+b.strip() for n,b in re.findall(r'^## (Statement|Definition)\s*\n([\s\S]*?)(?=^## |\Z)',text,re.M)]
  if norm(old)!=norm(new):roots.append(id)
g={}
for f in Path('items').glob('*.md'):
 h=f.read_text().split('---',2)[1];m=re.search(r'^deps:\s*\n((?:[ \t]+.*\n)*)',h,re.M)
 if m:d=re.findall(r'^\s+-\s+(\S+)',m[1],re.M)
 else:
  m=re.search(r'^deps:\s*\[(.*?)\]',h,re.M|re.S);d=[x.strip() for x in m[1].split(',')] if m else []
 g[f.stem]=d
c=set(roots)
while True:
 n=c|{k for k,v in g.items() if set(v)&c}
 if n==c:break
 c=n
owed={x['id'] for x in p['consumer_scope']};union=c|owed|set(p['inventory']['items']);omitted=sorted(owed-{x['id'] for x in report['consumer_checks']});rows=[]
for id in sorted(union):
 q=Path('items/'+id+'.md');rows.append({'id':id,'path':str(q),'current_sha256':hashlib.sha256(q.read_bytes()).hexdigest(),'in_native_owed_consumer_scope':id in owed,'in_current_changed_interface_cone':id in c,'in_assigned_batch_inventory':id in p['inventory']['items'],'current_deps':g[id]})
(B/'cone.json').write_text(json.dumps({'status':'PREPARED_NOT_DISPATCHED','run':R,'native_original_session_uuid':'01a143e1-3fab-7793-bdfc-cf6f9ff755f2','native_session_home':str(N/'scope-repairer-session'),'native_hold_reason':state['reason'],'changed_statement_definition_subjects':roots,'native_owed_consumer_scope_verbatim':p['consumer_scope'],'native_omissions':omitted,'current_cone_count':len(c),'native_owed_count':len(owed),'complete_union_count':len(union),'complete_union':rows,'native_history_immutable':[str(N/'review-0.json'),str(N/'repair-1.json'),str(N/'state.json')],'owner_already_applied_foreign_example_receipt':'research/'+R+'-owner-step2-b70/applied-r1/foreign72-application.json','binding_note':'Intake SHA256 is a source-change guard only, not proof-read or recertification evidence. Original same reviewer must perform actual current full-source reading and bind final inputs.'},indent=2)+'\n')
for path in [N/'review-0.json',N/'repair-1.json',N/'state.json',N/'repair-1.task.md']:
 q=B/'intake'/path.name;q.parent.mkdir(exist_ok=True);q.write_bytes(path.read_bytes())
items='\n'.join(str(i+1)+'. `'+id+'`' for i,id in enumerate(sorted(union)))
brief=f'''# Original72 same-reviewer consumer completion, owner cycle 2

Resume exact original72 UUID `01a143e1-3fab-7793-bdfc-cf6f9ff755f2` and original session home `{N/'scope-repairer-session'}`. Root alone launches this continuation. Retain the original supplier reviewer/repairer and its entire native history; do not create or reset engine rounds, counters, reports or acceptances. This is the second focused owner completion cycle for the current held omission, not a fresh replacement review.

Read CLAUDE.md fully and applicable README.md, SCHEMA.md and WORKFLOW.md. Read this brief, research.task.md and cone.json fully. Read actual native review-0.json, repair-1.json and state.json including every prepared.before_interfaces and consumer_scope entry; intake copies preserve the original context. Native repair-1 accepted its own sources, but owner intake held it for omitted consumers. The exact four missing consumer_checks IDs are: {', '.join('`'+x+'`' for x in omitted)}. They are obligations to inspect actual uses, never a reason to add blanket accept rows.

Canonical source is READ-ONLY in this continuation. Do not edit any item or page, including the already owner-repaired foreign example. Write NEW research evidence/proposals only below `{B/'cycle2-evidence'}`. Preserve all existing native reports/state, manifests/contracts/coverage/ledgers, stamps, levels, hashes, runtime and controls. Do not dispatch or run validators, formatters, gates or tests. Root owns all canonical application, metadata, acceptance and recertification. If a genuine additional source correction is necessary, report a full-before/exact-proposed NEW research artifact and its actual consumer impact; do not apply it.

You remain the same supplier reviewer responsible for the Statement/Definition changes. Inspect every complete actual current supplier Statement/Definition and entire proof, then every complete actual consumer Statement/Definition/proof and its concrete actual use. Reconcile original before_interfaces, all27 historically owed consumer IDs, the current24-item changed-interface cone, and all21 assigned inventory IDs. Their union is exactly30 unique IDs at intake (cone.json supplies every original path and the current deps, not a substitute for reading):

{items}

Report consumer_checks covering the entire30-ID union with a concrete source-specific rationale for each, including the four omitted IDs. Preserve historical original edges even when the current declaration is gone; state whether a use is logical, contextual only, removed, or remains a genuine gap, based on actual sources. Independently trace current item deps, aliases and body references for any newly affected consumers. If one is found, inspect it and append it rather than silently excluding it. Check both current trust-region-and-cubic-regularization-methods A/B page carriers and affected Riemannian/GN-LM page summaries as actually relevant. Do not invent outside logical uses from contextual mentions.

Focus on the actual changed guarantees: Cauchy formula retained while procedure-property prose moved; dogleg Newton/root/feasibility properties proved by the expanded lemma; truncated-CG unique positive boundary root, feasible return and Krylov membership; trust-region positive ratio denominator and accepted decrease; exact ARC minimizer preserved while checked inexact cubic conditions/TC.s/Cauchy decrease are added; domain-exit before evaluating outside U; exact/inexact complexity and unsuccessful-trial hypotheses matched. Read actual sufficient conditions in the current suppliers, not a source-note summary. The original raw-PR/Wolfe issues belong to other batches and are not grounds to rewrite their scope.

The foreign example `ex-trust-region-newton-cauchy-truncated-cg` now includes a root-approved explicit deterministic K2 solver-input paragraph (M>=2,m=2,zero forcing,N>=1,positive E/Z) added after your native72 writer drained. It PRESERVES your new lem-truncated-cg-iterates-are-krylov-vectors dependency and F4 root/feasibility citation. Read its actual final source and the receipt `{Path('research/'+R+'-owner-step2-b70/applied-r1/foreign72-application.json')}`. Root-authorized scoped precheck canonicalized its line/label grouping: current independent Cauchy arithmetic precedes the unit-Wolfe arithmetic; no mathematical claim was dropped. Do not restore an older example snapshot.

The actual current merged84 LM method may also have a separate original-owner source writer. Your continuation is read-only: read the actual current LM source and final recorded84 proof/status conditions, and preserve any newer owner repair. Before concluding, compare actual final source inputs against what you inspected; if a source changed, reread its affected interface and report any unresolved concurrency honestly. Do not claim an old snapshot is current. No external source-fetch or full-text-reading assertion may be invented.

Write NEW evidence (full precise current source paths/bindings, actual per-ID supplier-use disposition, all omissions and newly found aliases/references, page dispositions, genuine gaps) below cycle2-evidence. Return the requested batch-scope-review JSON to the separate root result artifact, NOT native repair-1.json. reviewed_items must enumerate the full union actually inspected; reviewed_pages must enumerate pages actually inspected; consumer_checks must contain all original27 owed IDs and all30 union IDs with honest actual disposition. An accept decision means this owner completion has no unresolved mathematical/use gap, not native engine acceptance or final gate coverage. Max two focused cycles: do not start a third repair/review cycle or alter engine counters.
'''
(B/'research.brief.md').write_text(brief);(B/'research.task.md').write_text('Follow the full research.brief.md and cone.json. Resume original72 identity for source-read-only completion of all30 current/owed inventory consumers including the four exact omissions. Root launches; do not apply source or metadata.\n')
args=['node','tools/dispatch.mjs','--role','scope-repairer','--brief',str(B/'research.brief.md'),'--task',str(B/'research.task.md'),'--label','owner-step2-b72-original-consumer-completion-cycle2','--run',R,'--covers','72','--profile','gpt-6.1-sol-medium','--session-home',str(N/'scope-repairer-session'),'--resume-session','01a143e1-3fab-7793-bdfc-cf6f9ff755f2','--output-schema','briefs/schemas/batch-scope-review.json','--result-artifact',str(B/'cycle2-research.result.json'),'--timeout','14400','--attempt','1','--json']
(B/'root-launch.sh').write_text('#!/usr/bin/env bash\nset -euo pipefail\ncd '+shlex.quote(str(Path.cwd()))+'\n'+shlex.join(args)+'\n');(B/'root-launch.sh').chmod(0o755)
(B/'completion.json').write_text(json.dumps({'status':'READY_FOR_ROOT_LAUNCH_NOT_DISPATCHED','original_uuid':'01a143e1-3fab-7793-bdfc-cf6f9ff755f2','original_home':str(N/'scope-repairer-session'),'counts':{'original_owed':len(owed),'omitted':len(omitted),'current_changed_interface_cone':len(c),'complete_union':len(union)},'native_omissions':omitted,'canonical_write_allowlist':[],'command':str(B/'root-launch.sh'),'evidence':'cone.json','native_reports_unchanged':True},indent=2)+'\n');print('Original72 same-session read-only continuation prepared: 30 union, 27 owed, 4 omissions; not dispatched.')
