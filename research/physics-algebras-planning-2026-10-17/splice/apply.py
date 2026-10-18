"""Owner-requested additive prose splice; refuses existing page IDs or changed inputs."""
import json, hashlib, os, re
from pathlib import Path
from collections import Counter
R=Path(__file__).resolve().parents[3]
D=R/'research/physics-algebras-planning-2026-10-17'
S=D/'splice'
H=lambda b:hashlib.sha256(b).hexdigest()
original=(D/'proposed-pages.json').read_bytes()
p=json.loads(original)
groups={
'abstract-algebra': '''algebraic-representation-and-tensor-symmetry-map heisenberg-and-algebraic-weyl-algebras jordan-spin-factor-and-alternative-algebras''',
'lie-theory': '''lie-superalgebras-and-super-representation-theory gauge-groups-and-representation-theory-interfaces''',
'differential-geometry': '''spin-geometry-dirac-and-index-theory poisson-algebras-and-hamiltonian-representations formal-deformation-quantization-and-hochschild-control''',
'homological-algebra': '''dg-and-homological-algebra-foundations a-infinity-l-infinity-and-deformation-complexes bv-brst-and-homological-physics-interfaces''',
'algebraic-topology': 'real-clifford-modules-ko-and-abs-orientations',
'representation-theory': '''regular-weyl-representations-and-stone-von-neumann unitary-poincare-representations-and-little-groups''',
'functional-analysis': 'operator-algebraic-states-and-gns-representations',
'quantum-groups-and-crystal-bases': '''yangians-quantum-affine-and-transfer-matrices quantum-groups-at-roots-of-unity-and-tilting-quotients''',
'hopf-hecke-algebras': '''hopf-hecke-and-quantum-symmetry-interfaces quasi-hopf-weak-hopf-and-relative-tensor-products affine-hecke-algebras-beyond-type-a double-affine-hecke-algebras-and-macdonald-theory''',
'hecke-algebras-and-categorification': 'unequal-parameter-hecke-cells-and-representations',
'category-o-and-geometric-representation-theory': '''category-o-klr-and-hecke-categorification-route beilinson-bernstein-localization-and-category-o rational-cherednik-algebras-and-category-o''',
'quantum-algebra-and-representation-theory': '''temperley-lieb-diagram-algebra-and-catalan-basis temperley-lieb-cellularity-and-representation-theory temperley-lieb-semisimplicity-and-generic-structure temperley-lieb-root-of-unity-and-modular-representation-theory temperley-lieb-jones-wenzl-traces-and-quotients temperley-lieb-towers-and-physics-models brauer-bmw-and-partition-diagram-algebras clifford-universal-algebras-and-pbw real-complex-clifford-classification-and-graded-products pin-spin-and-clifford-module-representations car-algebras-majorana-generators-and-clifford-comparison affine-current-algebras-virasoro-and-sugawara vertex-algebra-state-field-foundations vertex-modules-rational-and-logarithmic-regimes''',
'hall-algebras-and-tensor-categories': '''finitary-ringel-hall-algebras green-hall-bialgebras-and-quantum-group-realizations derived-hall-algebras hall-algebra-modules-and-geometric-actions motivic-hall-algebras-and-integration cohomological-hall-algebras-and-quiver-correspondences hall-stability-dt-bps-and-wall-crossing noninvertible-symmetries-and-anyonic-chains modular-categories-verlinde-and-tqft higher-categorical-symmetry-and-defect-algebras frobenius-algebras-and-two-dimensional-sewing'''
}
titles={c:c.replace('-',' ').title() for c in groups}
titles.update({'quantum-algebra-and-representation-theory':'Quantum Algebra and Representation Theory','hall-algebras-and-tensor-categories':'Hall Algebras and Tensor Categories','hopf-hecke-algebras':'Hopf Algebras & Hecke Algebras','category-o-and-geometric-representation-theory':'Category O and Geometric Representation Theory'})
homes={a:c for c,ids in groups.items() for a in ids.split()}
assert len(homes)==50
assert set(homes)=={x['id'] for x in p['proposed_pages'] if x['page_type']=='A'}
planpath=R/'research/plan-spec.json'; planbytes=planpath.read_bytes(); plan=json.loads(planbytes)
assert not set(homes)&{x['id'] for x in plan['pages']}
preimages={}; outputs={}; new=[]
def put(path,text):
 rel=str(path.relative_to(R))
 if path.exists():preimages[rel]=path.read_bytes()
 outputs[rel]=text.encode()
def link(path,base,label=None):
 path=Path(path)
 if not path.is_absolute():path=R/path
 return '['+(label or path.stem)+']('+os.path.relpath(path,base)+')'
for x in p['proposed_pages']:
 a=x['id'] if x['page_type']=='A' else x['paired_A_page']; c=homes[a]
 assert not list((R/'library').glob('*/'+x['id']+'.md')),x['id']
 x['category']=c;x['path']='library/'+c+'/'+x['id']+'.md'
 new.append(x['path'])
# Keep the independently audited research inventory and receipt immutable.
p['original_category']=p.pop('category');p['categories']=[{'id':c,'title':titles[c],'pair_count':len(ids.split()),'new':c in list(groups)[-2:]} for c,ids in groups.items()]
p['controls']['no_native_items_or_pages_created']=False
p['controls']['draft_prose_pages_created']=100
p['controls']['no_mathematical_items_created']=True
p['audit_status']='placement revision of independently reviewed research; no new mathematical acceptance'
p['placement_revision']={'original_inventory_sha256':H(original),'original_inventory':'../proposed-pages.json','date':'2026-10-17','authorized_by':'owner request to splice into recommended existing and new categories'}
put(S/'placed-pages.json',json.dumps(p,indent=2,ensure_ascii=False)+'\n')
for x in p['proposed_pages']:
 path=R/x['path'];base=path.parent
 companion=x.get('paired_examples_page',x.get('paired_A_page'))
 body=[x['delta_justification'], 'This is a draft prose scaffold. Its proposed definitions, calculations, and proofs remain authoring obligations. The source inventory records scope and provenance; it does not certify a completed proof.', 'Companion: [['+companion+']].']
 req=x['requires_proposed_pages']
 if req:body+=['## Reading prerequisites','Proposed reading order: '+', '.join('[['+i+']]' for i in req)+'. These links describe planning order; item dependencies must be checked against the eventual complete arguments.']
 if x.get('existing_prerequisite_pages'):
  body+=['## Existing library route']
  for q in x['existing_prerequisite_pages']:body+=['- '+link(q['path'],base)+': '+q['checked_scope']+' '+q['limits']]
 body+=['## Scope and local proof obligations']
 if not x['proposed_claims']:body+=['This synthesis page introduces no new mathematical items. Reuse the canonical suppliers below within their stated hypotheses.']
 for i,q in enumerate(x['proposed_claims'],1):
  body+=['### '+str(i)+'. '+q['claim'],q['status']+'.','Required supplier: '+q['smallest_missing_supplier']+'.','Local obligation: '+q['proof_obligation'],'Consumer: '+q['consumer_claim']]
 if x['existing_supplier_items']:
  body+=['## Canonical suppliers and reuse boundaries']
  for q in x['existing_supplier_items']:
   body+=['- '+link(q['path'],base,q['id'])+': '+q['checked_scope']+'. '+q['limits']]
 body+=['## Conventions, diagrams, and sources','Apply the '+link(D/'definition-and-diagram-contracts.md',base,'definition and diagram contracts')+' and '+link(D/'prerequisites.md',base,'prerequisite and repair holds')+' before treating any proposed result as a supplier. All diagrammatic operations require defined domains, codomains, orientations, coefficients, and algebraic verification. Existing carriers keep their canonical identities and placements. Physics-only mathematical carriers require the supported same-ID resolver route specified in those contracts; links here do not establish that route.']
 for s in x['source_evidence']:body+=['- '+link(D/s,base)]
 body+=['Full page contract: '+link(S/'placed-pages.json',base,'placement inventory')+' (entry `'+x['id']+'`). The original '+link(D/'proposed-pages.json',base,'audited research inventory')+' and its historical audit receipt remain unchanged.']
 fm='---\npage: '+x['id']+'\ntitle: '+json.dumps(x['title'],ensure_ascii=False)+'\nstatus: draft\nitems: []\nexamples: []\n---\n\n'
 put(path,fm+'\n\n'.join(body)+'\n')
# Add canonical page declarations without changing prior plan entries or orders.
order=max(x['order'] for x in plan['pages'])
existing={x['id'] for x in plan['pages']}
track='research/plan-physics-algebras-track.md'
for n,x in enumerate(p['proposed_pages'],1):
 req=list(x['requires_proposed_pages'])
 # Only declared canonical prerequisite pages become reading-order edges.
 for q in x.get('existing_prerequisite_pages',[]):
  qid=Path(q['path']).stem
  if qid in existing and qid not in req:req.append(qid)
 plan['pages'].append({'id':x['id'],'title':x['title'],'kind':x['page_type'],'category':x['category'],'label':'PA-'+str((n+1)//2).zfill(2)+'-'+x['page_type'],'companion':x.get('paired_examples_page',x.get('paired_A_page')),'requires':req,'items':[],'scaffold':track,'order':order+n})
put(planpath,json.dumps(plan,indent=2,ensure_ascii=False)+'\n')
# Existing pathways receive an additive draft extension, leaving prior parts intact.
for c,ids in groups.items():
 path=R/'library'/c/'_pathway.md'
 aa=[x for x in p['proposed_pages'] if x['page_type']=='A' and x['category']==c]
 isnew=c in list(groups)[-2:]
 if path.exists():
  text=path.read_text();end=text.index('\n---',4)
  part='algebra-and-physics-extensions'
  extra='\n  - part: '+part+'\n    title: Algebra and representation interfaces\n    pages: '+json.dumps([x['id'] for x in aa])
  text=text[:end]+extra+text[end:]+'\n## '+part+'\n\nThese draft extensions connect the existing foundations to algebraic structures and representation problems motivated by theoretical physics. Each companion supplies the planned examples and boundary cases; exact hypotheses, local proof obligations, and reuse holds remain in its page contract.\n'
  put(path,text)
 elif isnew:
  parts={}
  for x in aa:parts.setdefault(x['part'],[]).append(x['id'])
  names={2:'Clifford algebras and modules',3:'Clifford and CAR comparison',4:'Current and vertex algebras',5:'Hall constructions and their representations',6:'Diagram algebras and representation theory',9:'Tensor categories, defects, and sewing'}
  text='---\ncategory: '+c+'\nstatus: draft\nparts:\n'
  for part,ids2 in parts.items():text+='  - part: branch-'+str(part)+'\n    title: '+names[part]+'\n    pages: '+json.dumps(ids2)+'\n'
  text+='---\n'
  for part,ids2 in parts.items():text+='\n## branch-'+str(part)+'\n\n'+names[part]+' form this draft branch. Follow the page-specific prerequisites, including routes into existing categories. The examples accompany their theory pages. All local proof obligations and unresolved supplier holds remain in force.\n'
  put(path,text)
# Two substantial category overviews; no new omnibus category.
overviews={
'quantum-algebra-and-representation-theory':'''This collection studies algebras through their modules, tensor constructions, and explicit presentations, with three connected branches. The Clifford branch begins with a tensor-algebra quotient and a fixed quadratic-form convention, then proposes basis, classification, graded-product, and Pin and Spin module results. Its comparison with canonical anticommutation relations distinguishes finite algebraic constructions from analytic completions. Spin geometry and real K-theory applications retain their homes in Differential Geometry and Algebraic Topology.

The diagram branch starts with Temperley–Lieb diagrams and a Catalan basis before cellular modules, semisimplicity, specialization, Jones–Wenzl elements, and quotient traces. Brauer, BMW, and partition algebras provide related centralizer problems. A diagram's composition and evaluation must be algebraically defined, and generic, root-of-unity, and positive-characteristic statements have separate contracts. The current and vertex branch connects affine currents and Virasoro operators to state-field identities and module theories, distinguishing rational from logarithmic regimes.

Readers enter through Abstract Algebra, Lie Theory, Representation Theory, and the existing monoidal and Hopf–Hecke foundations. Those categories keep their canonical suppliers; this category supplies proposed extensions and comparison routes. All fourteen theory/example pairs remain draft prose scaffolds with empty item lists. Source evidence, conventions, prerequisite holds, and unfinished local proofs are recorded in the linked track.''',
'hall-algebras-and-tensor-categories':'''This collection connects counting and geometric constructions of algebras with tensor categories and their representations. Seven draft theory/example pairs distinguish finitary Ringel–Hall multiplication, Green's compatibility and quantum-group realizations, derived Hall constructions, representations and geometric actions, motivic integration, cohomological Hall correspondences, and stability with Donaldson–Thomas and BPS wall crossing. These constructions have different inputs, coefficient systems, finiteness conditions, and completion requirements. They are not interchangeable definitions of one algebra. Representations of the input category must also be distinguished from modules over its Hall algebra.

Four further pairs address tensor categories, noninvertible symmetry and anyonic chains, modular data and topological field theory, higher categorical defects, and Frobenius sewing in dimension two. Existing categorical traces, braidings, Hopf structures, and Frobenius foundations retain their canonical homes. Any unresolved supplier repair remains a hold before a proposed consumer can use it; a physics interpretation supplies context rather than a mathematical premise.

Readers need the relevant existing group, module, homological, quantum-group, and monoidal-category foundations. The pages give separate reading routes rather than assume that familiarity with one branch supplies every prerequisite of another. All eleven pairs remain draft prose scaffolds. Full local proofs and explicit diagram equations must be supplied before their proposed results can enter an accepted dependency chain.'''
}
for c,text in overviews.items():put(R/'library'/c/'_category.md','---\nname: '+c+'\ntitle: '+json.dumps(titles[c])+'\nstatus: draft\n---\n\n'+text+'\n\nTrack and source contracts: `'+track+'`.\n')
rows=['# Physics-motivated algebras — distributed prose scaffold','Owner-requested splice, 2026-10-17. Fifty A/B pairs (100 draft pages): 25 pairs in eleven existing categories, 14 in Quantum Algebra and Representation Theory, and 11 in Hall Algebras and Tensor Categories. No mathematical item is minted or copied. All proofs, prerequisite holds, and resolver limitations remain as recorded in the independently audited research inventory. This is placement of prose scaffolds, not native authoring acceptance.','The original research and audit receipt remain immutable. The [placed inventory](physics-algebras-planning-2026-10-17/splice/placed-pages.json) adds destinations to every original contract. The [original scaffold](physics-algebras-planning-2026-10-17/prose-scaffold.md), [definition contracts](physics-algebras-planning-2026-10-17/definition-and-diagram-contracts.md), [prerequisite holds](physics-algebras-planning-2026-10-17/prerequisites.md), and [source index](physics-algebras-planning-2026-10-17/source-index.md) supply the full design. Their single-category language is historical; this track governs the distributed placement.','## Canonical pairs','| Pair | A page | B page | Canonical category |\n|---|---|---|---|']
for i,x in enumerate([q for q in p['proposed_pages'] if q['page_type']=='A'],1):rows+=['| PA-'+str(i).zfill(2)+' | `'+x['id']+'` | `'+x['paired_examples_page']+'` | `'+x['category']+'` |']
rows+=['## Editorial and build boundary','Existing canonical items are navigational links, never additional page placements. Empty item arrays deliberately preserve unfinished proof obligations. Page prerequisites record a reading route, not accepted item dependencies. Reuse-only pages remain synthesis pages and must not be mistaken for native item-authoring batches. Established results awaiting local proofs remain authoring obligations, while genuinely unresolved claims require dated open-problem treatment. No workflow run is started or advanced by this splice.','Existing pathways with metadata receive an additive draft extension. Existing categories without pathways retain their prior metadata state; the canonical plan and page links still place their additions. New categories have draft overviews and pathways.']
put(R/track,'\n\n'.join(rows)+'\n')
put(S/'pages.json',json.dumps([x['id'] for x in p['proposed_pages']],indent=2)+'\n')
# Preserve exact shared-file preimages, including preexisting foreign edits.
for rel,b in preimages.items():
 dest=S/'before'/rel;assert not dest.exists();dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(b)
for rel,b in outputs.items():
 path=R/rel
 if rel in preimages:assert path.read_bytes()==preimages[rel],rel
 else:assert not path.exists(),rel
for rel,b in outputs.items():
 path=R/rel;path.parent.mkdir(parents=True,exist_ok=True);path.write_bytes(b)
receipt={'kind':'owner-requested-draft-prose-placement','date':'2026-10-17','pair_count':50,'page_count':100,'existing_category_pairs':25,'new_categories':{c:len(groups[c].split()) for c in list(groups)[-2:]},'original_inventory_sha256':H(original),'before':{rel:H(b) for rel,b in preimages.items()},'written':{rel:H(b) for rel,b in outputs.items()},'no_item_changes':True,'native_execution_or_acceptance':False}
(S/'receipt.json').write_text(json.dumps(receipt,indent=2)+'\n')
print(json.dumps({'written':len(outputs),'pages':100,'pairs':50,'categories':13}))
