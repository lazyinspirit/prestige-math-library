import json,re,hashlib
from pathlib import Path
base=Path('research/physics-td-qft-rpm-62-2026-10-14-owner-drift-td'); plan=json.load(open('research/plan-spec.json')); rows=json.load(open(base/'proposed-plan-rows.json'))['rows']; by={p['id']:p for p in plan['pages']+rows}
add={'td-math-nonsmooth-equilibrium':['convex-and-semicontinuous-functions-on-rn'],'td-math-mixture-dynamics-and-shells':['brownian-motion-construction-and-continuity','the-ito-integral-with-respect-to-brownian-motion','the-ergodic-theorems-of-von-neumann-and-birkhoff'],'td-math-spatial-measure-and-information':['infinite-product-measures-and-kolmogorov-extension','martingale-inequalities-and-convergence','the-ergodic-theorems-of-von-neumann-and-birkhoff','modes-of-convergence-for-random-variables','conditional-distributions-and-regular-conditional-probability']}
updates=[]
for id,edges in add.items():
 p=by[id];before=p['requires'][:];p['requires']=sorted(set(before+edges),key=lambda x:by[x]['order']);updates.append({'id':id,'before_requires':before,'requires':p['requires'],'added':edges})
def inherits(id,seed,seen=None):
 if id==seed:return True
 seen=set() if seen is None else seen
 if id in seen:return False
 seen.add(id);return any(inherits(d,seed,seen) for d in by[id]['requires'])
seeds=list(add);affected=[p for p in plan['pages'] if p['id'].startswith('td-') and any(inherits(p['id'],s) for s in seeds)]
for p in affected:
 if p['id'] not in add:updates.append({'id':p['id'],'before_requires':p['requires'][:],'requires':p['requires'][:],'added':[],'note':'No direct-edge change; upstream E1/E2/E3 closure repaired.'})
report=Path('research/physics-td-qft-rpm-62-2026-10-14-alpha-step1-drift.md').read_text();sections=dict(re.findall(r'### ([a-z0-9-]+)\n\n(.*?)(?=\n### |\Z)',report,re.S))
qual={
 'td-math-nonsmooth-equilibrium':'The M2 Hessian criterion applies only to C² functions on open convex sets; semidefinite Hessians alone supply neither strictness nor attainment. Concavity uses the criterion for -S and stability retains its constrained-slice hypotheses.',
 'td-math-mixture-dynamics-and-shells':'L16 retains an explicit Brownian filtration satisfying standing hypothesis (H), predictable square-integrable integrands and the deterministic-Gaussian integral scope. Published Brownian/Itô interfaces assume AC; record that inherited assumption explicitly, rather than weakening it to Countable Choice. L17 retains finite-measure invariant-region and ergodicity/time-map hypotheses; recurrence and averages do not prove physical thermalization.',
 'td-math-spatial-measure-and-information':'L21/L22 retain AC, standard-Borel coordinates/targets, consistent finite-dimensional laws, uniformly integrable martingales, probability spaces and the specified L² mean-convergence hypotheses. The regular-conditional-distribution supplier is now a direct requirement as well, avoiding an accidental dependency on the unrelated Itô branch.',
 'td-phases-and-limits':'The regular phase-rule contract remains conditional on its stated interior full-rank hypotheses.',
 'td-finite-statistical-bridge':'Draft NRQM examples remain context only and are not logical suppliers. The selected NRQM model contracts retain actual draft status.',
 'td-irreversible-boundaries':'The unitary-entropy design still excludes thermalization and finite-trial certainty.',
 'td-stochastic-protocols':'The physical bath relation remains an adopted model assumption; no general Langevin law follows from the linear OU construction.',
 'td-continuum-heat-model':'Exact local heat-kernel root suppliers currently have no library page home; no fictitious page order is assigned to those items.',
 'td-math-interacting-ensemble-geometry':'Continuum results remain restricted to the scaffold’s exact stability, regularity and ensemble hypotheses.',
 'td-interacting-equilibrium-preparations':'Model and sampling postulates remain conditional.'}
frags=[]
for p in affected:
 id=p['id']
 if p['kind']!='A':continue
 inherited=['E'+str(i+1) for i,s in enumerate(seeds) if inherits(id,s)]
 edges=add.get(id,[])
 if edges:body='Added read-only published prerequisite context: '+', '.join(f'{x} (order {by[x]["order"]})' for x in edges)+'. '
 else:body='The declared prerequisite chain now includes the earlier published supplier context resolving '+', '.join(inherited)+'. '
 body+='These source pages retain their canonical mathematical identities and published status. '+qual.get(id,'The local research arguments retain their original scope and hypotheses.')+'\n\nVERDICT: drift-applied — '+', '.join(inherited)+' page-metadata holds and their propagated holds are resolved; this is prerequisite repair only, not proof acceptance.'
 frags.append({'page':id,'old_section_sha256':hashlib.sha256(sections[id].encode()).hexdigest(),'replacement':f'### {id}\n\n'+body+'\n'})
owner='## Owner holds\n\nE1, E2 and E3 are resolved as prerequisite metadata defects by adding the existing published mathematical source pages and their published context closure, together with exact backward requires edges. The named source pages now have valid strictly earlier plan orders. The inherited holds on thermodynamics consumers are cleared. No local or imported item has been edited, no source proof has been newly certified, and no new A/B build pair has been introduced. All existing source, choice, regularity, measure, filtration and empirical qualifications remain authoring/review obligations.\n'
payload={'version':1,'run':'physics-td-qft-rpm-62-2026-10-14','apply_condition':'Apply only after integrating every proposed P row and the exact requires updates; root refreshes manifests and runs native validation.','requires_updates':updates,'owner_holds_replacement':owner,'page_sections':frags,'resolved_holds':['E1','E2','E3'],'affected_pages':[p['id'] for p in affected],'scope':'metadata only; unchanged companion B requires inherit repaired A closure'}
json.dump(payload,open(base/'report-fragments.json','w'),indent=2);open(base/'report-fragments.json','a').write('\n')
plan['pages']+=rows;json.dump(plan,open(base/'proposed-plan-overlay.json','w'),indent=2)
json.dump([p['id'] for p in affected],open(base/'scoped-pages.json','w'),indent=2)
print('Requires records:',len(updates),'A report sections:',len(frags),'new context rows:',len(rows))
