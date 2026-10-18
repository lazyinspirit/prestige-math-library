from pathlib import Path
import json,yaml,re,subprocess,hashlib,datetime
run='non-ml-math-remaining-81-2026-10-18';r=Path('research')/(run+'-owner-root-unity-tilting-completion');inv=json.loads((r/'construction/integrated-item-inventory.json').read_text());ids=inv['ids'];patterns=r/'construction/consumer-search.patterns';patterns.write_text('\n'.join(ids)+'\n');res=subprocess.run(['rg','-l','-F','-f',str(patterns),'items','library'],text=True,capture_output=True);assert res.returncode in (0,1);paths=res.stdout.splitlines();records=[];metas={}
for path in paths:
 p=Path(path);s=p.read_text();fm=yaml.safe_load(s.split('---',2)[1])if s.startswith('---\n')else{};refs=[i for i in ids if i in s];deps=fm.get('deps',[])or[];key=fm.get('id')
 if key:metas[key]={'path':path,'deps':deps,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()}
 records.append({'path':path,'id':key or fm.get('page'),'references':refs,'logical_dependencies_on_scope':sorted(set(deps)&set(ids)),'raw_sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
seeds={'def-root-of-unity-quantum-group-forms','def-root-of-unity-tilting-and-negligible-quotient-interface'};seen=set(seeds);waves=[]
while True:
 new=sorted(i for i,m in metas.items()if i not in seen and set(m['deps'])&seen)
 if not new:break
 waves.append(new);seen.update(new)
external=[x for x in records if x['path'].startswith('items/')and x['id']not in ids];logic=[x for x in external if x['logical_dependencies_on_scope']]
# All such mathematical consumers must be read and repaired by this owner before final handoff.
assert not logic,logic
review={
 'forms-interface':'The same integrating owner read the full two repaired definitions and all original rank-one proofs/examples. The simple-root-power candidate is explicitly rank-one u only where no nonsimple roots exist. Original rank-one statements remain applicable. New Frobenius and full-category consumers use actual Lusztig or ordinary-image forms and their exact root-order branches.',
 'toral-interface':'Full T_{i,c,t} characters are present in both actual category/Weyl definitions. Each new downstream proof was read in full by this integrating owner; formal labels are retained in small-u restriction and character comparisons.',
 'frobenius':'All four suppliers were read; quantum Lucas negative indices, higher divided Serre, toral polynomial quotient, classical separation and exact algebra kernel checked. No Hopf-coinvariant premise is used.',
 'category-and-trace':'The full four category suppliers and the negligible-ideal proof were read. Inverse-K coproduct, R=D^-1 Theta^-1 and negative pivot agree; the fundamental rank-one convention calculation is recorded separately. Partial trace proves tensor closure; no tensor-End factorization is used.',
 'weyl-and-tilting':'All thirteen lane carriers were read in full. Actual free highest lattices, based saturation, finite weight-projectives, Ext criterion, universal extensions, qdim signs, closed simplicity, explicit E8 displacements, outside summand and both fusion formulas checked.',
 'pbw-and-strong-linkage':'The same owner constructed and read all three final braid/PBW/small-image carriers, then read both actual strong-linkage and closest-pair carriers in full. The strong constructor consumed the actual small-image Statement/Proof. Formal graded socles, exact parabolic induction, signed-character transfer and downward-chain exclusion match their exact suppliers.',
 'external-textual-consumer':'The newly appearing def-temperley-lieb-rank-one-lusztig-tilting-category references the old interface only in a Remark explicitly saying it is not a logical supplier; deps exclude 68. Read actual file. Its separate type-1/R concerns were sent to root and its own owner; no live external file was edited.'}
d={'created_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':ids,'changed_original_interfaces':sorted(seeds),'actual_search_command':['rg','-l','-F','-f',str(patterns),'items','library'],'textual_matches':records,'direct_and_indirect_interface_consumer_waves':waves,'all_affected_interface_consumers':sorted(seen-seeds),'external_logical_consumers':logic,'external_textual_consumers':external,'same_owner_actual_checks':review,'all_scope_carriers_full_text_read_by_integrating_owner':True,'external_or_published_edits':False,'live_guard':'Native consumers outside 68 were guarded; no outside draft/published carrier or live writer file was changed.'}
(r/'construction/consumer-inventory-and-checks.json').write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n');print(json.dumps({'textual_matches':len(records),'external_logical':len(logic),'external_textual':[x['id']for x in external],'interface_consumers':len(seen-seeds)}))
