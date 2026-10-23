from pathlib import Path
import hashlib,json,difflib,re
base=Path('research/fluid-dynamics-all-47-2026-10-23-owner-step4-kinetic')
ids=['prop-fd-maxwellian-moments','def-fd-conserving-bgk','thm-fd-homogeneous-bgk-limit','prop-fd-bgk-entropy-rate','ex-fd-bgk-initial-layer','thm-fd-controlled-euler-passage','post-fd-bgk-relaxation','pthm-fd-bgk-equilibration','pthm-fd-ideal-gas-euler-interface','rem-fd-kinetic-limit-status','texp-fd-bgk-preparation','def-fd-physical-kinetic-observables','pthm-fd-local-boltzmann-h-balance','pthm-fd-boltzmann-entropy']
sha=lambda b:hashlib.sha256(b).hexdigest()
for sub in ['before','proposed']:(base/sub).mkdir(exist_ok=True)
replacements=[];guards=[];patches=[]
cc='Adopt Countable Choice $\\mathrm{AC}_\\omega$, as in the kinetic-density framework. '
for id in ids:
 p=Path('items')/(id+'.md');before=p.read_text();s=before; edits=[]
 def replace(old,new,reason):
  global s
  assert s.count(old)==1,(id,old,s.count(old))
  s=s.replace(old,new,1);edits.append({'old':old,'new':new,'reason':reason})
 if id!='def-fd-physical-kinetic-observables':
  heading='Definition' if id.startswith('def-') else 'Postulate' if id.startswith('post-') else 'Remark' if id.startswith('rem-') else 'Example' if id.startswith('ex-') else 'Statement'
  old='## '+heading+'\n\n'
  replace(old,old+cc,'Expose the same inherited Countable Choice premise, not full Choice; all Gaussian conclusions and model qualifications are retained.')
 if id=='prop-fd-maxwellian-moments':
  replace('**Given:** $M_{n,u,T}', '**Given:** Countable Choice $\\mathrm{AC}_\\omega$ and $M_{n,u,T}', 'Bind F6 hypothesis explicitly in checkable assumptions.')
  replace('A nonnegative function whose improper Riemann integral converges has the same Lebesgue integral on each half-line.', 'Under Countable Choice, a nonnegative function Riemann integrable on compact truncations with finite improper integral has the same Lebesgue integral on each half-line.', 'State the exact imported F6 hypothesis including local Riemann integrability, met here by continuous Gaussian-polynomial functions.')
 if id=='ex-fd-bgk-initial-layer':
  replace('for every fixed positive reference density $f_{\\rm ref}$', 'for every fixed positive constant reference density $f_{\\rm ref}$', 'Clarify the actual scalar reference parameter used by the BGK supplier and the Gaussian logarithm bound.')
  replace('**Given:** $0<a^2<\\theta$,', '**Given:** Countable Choice $\\mathrm{AC}_\\omega$, a fixed positive constant $f_{\\rm ref}$ in the same units as $f_0$, $0<a^2<\\theta$,', 'Expose the exact reference used in the entropy estimate.')
 if id=='def-fd-physical-kinetic-observables':
  replace('Let $f_{\\rm ref}>0$ be a constant reference density with the same units as $f$. Where both', 'Let $f_{\\rm ref}>0$ be a constant reference density with the same units as $f$. Assign $f\\log(f/f_{\\rm ref})=0$ and $f|\\log(f/f_{\\rm ref})|=0$ wherever $f=0$; their velocity-weighted products are then zero there as well. These are the continuous extensions at zero. Where both', 'Make entropy integrands and all finiteness conditions well-defined on nonnegative densities, including zeros; do not impose strict positivity.')
 if id=='pthm-fd-local-boltzmann-h-balance':
  replace('belongs to the collision domain and that the weak collision tests $1$ and\n$\\ell(x,\\cdot,t)$ are measurable and absolutely convergent.', 'belongs to the collision domain $\\mathcal D_\\nu$ and that\n$1,\\ell(x,\\cdot,t)\\in\\mathcal S_{f(x,\\cdot,t)}$, with the measurability,\nabsolute convergence, and weak collision identity specified by the adopted\ncollision model for both tests.', 'Align explicitly with the declared test-space interface; the actual physical postulate already grants the identity for these absolutely convergent logarithmic/moment tests.')
  replace('$\\partial_t f+v\\cdot\\nabla_x f=Q_\\nu(f)$.', '$\\partial_t f+v\\cdot\\nabla_x f=Q_\\nu(f)$ as an equality for Lebesgue-almost every velocity at every fixed $(x,t)$. This sectionwise solution sense is an explicit hypothesis for the pointwise balance below.', 'The general physical postulate only requires a product-a.e. PDE, which does not by itself license substitution on every time-space section; preserve the intended pointwise conclusion with the necessary explicit solution sense.')
  replace('**Given:** The positive regular solution, the stated velocity envelopes, the adopted kinetic equation, and absolutely convergent collision tests $1$ and $\\ell$.', '**Given:** Countable Choice $\\mathrm{AC}_\\omega$, the positive regular solution, the stated velocity envelopes, the sectionwise kinetic equation, and tests $1,\\ell\\in\\mathcal S_f$ with absolutely convergent weak identities.', 'Bind exact hypotheses for the proof substitution and collision tests.')
  replace('[F1] [[post-fd-boltzmann-model]]: the adopted equation is $\\partial_t f+v\\cdot\\nabla_x f=Q_\\nu(f)$; its weak identity applies to compact smooth tests and to moment or logarithmic tests whose two sides converge absolutely, including $1$ and $\\ell$ under [A1].', '[F1] [[post-fd-boltzmann-model]]: the adopted equation $\\partial_t f+v\\cdot\\nabla_x f=Q_\\nu(f)$ holds almost everywhere in the product domain; the sectionwise equality in [A1] is an additional solution hypothesis here. The postulate grants its weak identity to compact smooth tests and to moment or logarithmic tests whose two sides converge absolutely, including $1$ and $\\ell$ under [A1].', 'Distinguish the actual physical postulate from this theorem’s extra sectionwise solution premise.')
  replace('Substitute the model equation [F1].', 'At the fixed $(x,t)$, substitute the sectionwise equation in [A1], which has the adopted model form [F1]; its velocity null set does not change the absolutely integrable velocity integrals.', 'Explain why the pointwise in time-space proof is justified by the clarified solution sense.')
 if id=='pthm-fd-boltzmann-entropy':
  replace('At every $(x,t)$ assume $f(x,\\cdot,t)$ belongs to the collision domain and the weak identity', 'At every $(x,t)$ assume $f(x,\\cdot,t)\\in\\mathcal D_\\nu$ and $1,\\ell(x,\\cdot,t)\\in\\mathcal S_{f(x,\\cdot,t)}$, with the measurability and absolute convergence specified by the collision model, and assume the weak identity', 'Carry the exact local-H and mathematical-global-H test-space hypotheses to the direct entropy consumer.')
  replace('Assume that $f$ solves $\\partial_t f+v\\cdot\\nabla_x f=Q_\\nu(f)$.', 'Assume that $f$ solves $\\partial_t f+v\\cdot\\nabla_x f=Q_\\nu(f)$ for Lebesgue-almost every velocity at every fixed $(x,t)$, the sectionwise solution sense used for the pointwise local balance.', 'Carry the necessary sectionwise PDE hypothesis from local-H, preserving both pointwise local and differentiable global conclusions.')
  replace('**Given:** The periodic-cell, positivity, regularity, absolute moment, logarithmic-test, entropy-flux, and differentiation-envelope hypotheses in the statement, together with $k_B>0$.', '**Given:** Countable Choice $\\mathrm{AC}_\\omega$, the periodic-cell, positivity, regularity, absolute moment, declared logarithmic-test, sectionwise-equation, entropy-flux, and differentiation-envelope hypotheses in the statement, together with $k_B>0$.', 'Expose the carried assumptions in checkable proof text.')
  replace('under the local envelope and collision-test assumptions in the Statement.', 'under the local envelope, declared collision-test, and sectionwise-equation assumptions in the Statement.', 'Quote the clarified local supplier interface exactly.')
 assert before!=s
 (base/'before'/(id+'.md')).write_text(before);(base/'proposed'/(id+'.md')).write_text(s)
 patches.append(''.join(difflib.unified_diff(before.splitlines(True),s.splitlines(True),fromfile='a/items/'+id+'.md',tofile='b/items/'+id+'.md')))
 guards.append({'id':id,'live_path':str(p),'before_path':str(base/'before'/(id+'.md')),'before_raw_sha256':sha(before.encode()),'proposed_path':str(base/'proposed'/(id+'.md')),'proposed_raw_sha256':sha(s.encode()),'frontmatter_unchanged':before.split('---',2)[1]==s.split('---',2)[1]})
 replacements.append({'id':id,'replacements':edits})
(base/'proposal.patch').write_text(''.join(patches))
(base/'guarded-replacements.json').write_text(json.dumps(replacements,indent=2)+'\n')
(base/'source-guards.json').write_text(json.dumps(guards,indent=2)+'\n')
judges=[json.loads(x)for x in Path('research/fluid-dynamics-all-47-2026-10-23-judge.jsonl').read_text().splitlines()]
(base/'actual-judge-observations.json').write_text(json.dumps([r for r in judges if r['id'] in ['ex-fd-bgk-initial-layer','prop-fd-maxwellian-moments','def-fd-physical-kinetic-observables','pthm-fd-local-boltzmann-h-balance']],indent=2)+'\n')
print(json.dumps({'proposed_carriers':len(guards),'frontmatter_unchanged':all(x['frontmatter_unchanged']for x in guards),'directory':str(base)}))
