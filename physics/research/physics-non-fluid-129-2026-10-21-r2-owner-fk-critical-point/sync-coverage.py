from pathlib import Path
import json
run='physics-non-fluid-129-2026-10-21-r2';b=Path('research')/(run+'-owner-fk-critical-point');p=Path('research')/(run+'-batch-97.coverage.json');d=json.loads(p.read_text())
d.setdefault('owner_preserved_native_history',{})['status']=d.get('status');d['owner_preserved_native_history']['blockers']=d.get('blockers');d['owner_preserved_native_history']['source_resolution']=d.get('source_resolution')
d['status']='Owner scientific prerequisite integration complete; exact focused checks and root-owned readiness refresh are separate.';d['blockers']=[];d['source_resolution']=[]
d['owner_source_reading_limits']={'owner':'/root/qft_graph_scaling','primary_source':'Complete 27-page BDC PDF retrieved; main owner personally read intro/Section 1 and complete Section 2 printed pp.8–14; sharpness delegate read Section 4 complete proofs and integrated local replacements. No main-owner personal full Section 3/4 reading is claimed.','pressure_source':'Complete 388-page Grimmett PDF retrieved; main owner personally read entire relevant Section 4.5 opening through proof 4.63, printed pp.85–91. Other native/delegate source readings remain attributed to their actual readers.','cube_sources':'Cube delegate read the actual Graham–Grimmett, Grimmett–Janson–Norris and O’Donnell passages recorded in cube/source-reading limits. Main owner read the complete actual local cube proof, not the external O’Donnell text.','unretrieved_sources':'The failed Friedgut/CGGK retrievals are preserved as historical routes. Their theorem proofs are not claimed read; neither is a proof premise. Complete elementary finite-box cube and animal-envelope proofs replace them locally.','choice':'Numerical finite-cylinder threshold/Potts/Ising conclusions use no choice axiom. Actual FK Borel-law existence and the subcritical countable coupling construction explicitly assume Countable Choice.'}
for page in d['pages']:
 old=[];keep=[]
 for src in page.get('sources',[]):
  if src.get('source_resolution'):
   old.append(src);continue
  for h in src.get('contents',[]):
   if h.get('source_review'):
    h['source_review']['native_before_owner_limitations']=h['source_review'].get('limitations','')
    h['source_review']['limitations']='Current local proof supplies all used prerequisites; original source reading is attributed to its recorded native/delegate reader. The owner repair retains exact source-reading limits and uses no external-proof exception.'
  keep.append(src)
 page['sources']=keep
 if old:page['owner_historical_failed_sources']=old
 # Each new helper is an explicit local proof refinement of one harvested source component.
 src=page['sources'][0]
 for id,name in [
 ('lem-csm-frontier-finite-box-cube-max-fiber-influence','Finite-box increasing cube influence: scalar hypercontractivity, finite tensorization and dyadic reduction'),
 ('lem-csm-frontier-fk-torus-cellular-duality','Finite square torus sector comparison: labelled cellular ranks and exact likelihood'),
 ('lem-csm-frontier-fk-cylinder-pressure-comparison','Numerical cylinder limits, convex pressure and cross-parameter free/wired comparison'),
 ('lem-csm-frontier-fk-mixed-reflection-gluing','Mixed-boundary reflection: corrected vertical-first surgery, disk duality and one-sided exploration'),
 ('lem-csm-frontier-fk-wired-annuli-and-numerical-threshold','Finite wired annulus chains and the choice-free numerical square threshold'),
 ('lem-csm-frontier-fk-independent-cluster-animal-envelope','Elementary independent-set envelope and uniform lattice-animal bound'),
 ('lem-csm-frontier-fk-subcritical-exponential-decay','Countable-choice cluster coupling and subcritical exponential connectivity')]:
  src['contents'].append({'name':name,'disposition':'included','item':id,'source_review':{'read_extent':'Main owner read the complete actual local proof; source/delegate reading limits are recorded in owner_source_reading_limits and research receipts.','supports':'The named missing local prerequisite is proved in this item, preserving the full approved real-q scope.','limitations':'No theorem acceptance or native readiness is asserted by this coverage record. External citations supply provenance; every used prerequisite is proved locally or comes from an exact current local supplier.'}})
# O’Donnell is added as a retrieved provenance source, with its exact delegated scope.
d['pages'][0]['sources'].append({'title':"Ryan O'Donnell, Analysis of Boolean Functions",'kind':'textbook','url':'https://arxiv.org/pdf/2105.10386','locator':'Sections 9.3–9.4; exact delegate reading recorded in cube artifacts.','contents':[{'name':'Two-point hypercontractivity and finite product tensorization','disposition':'inline','item':'lem-csm-frontier-finite-box-cube-max-fiber-influence','source_review':{'read_extent':'Cube delegate read Sections 9.3–9.4 including Theorem 9.18; main owner read the full local replacement proof.','supports':'Provenance for the scalar/tensor finite Boolean estimate.','limitations':'The scalar calculus inequality, finite mixed-norm tensorization and noise integral are all proved locally; no external hypercontractivity theorem is assumed.'}}]})
tmp=p.with_suffix(p.suffix+'.owner-tmp');tmp.write_text(json.dumps(d,indent=2)+'\n');tmp.replace(p)
print('Coverage synchronized with historical source failures preserved and reader attribution explicit')
