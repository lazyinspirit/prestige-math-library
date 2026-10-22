from pathlib import Path
import hashlib,json
base=Path('physics'); ev=base/'research/physics-non-fluid-129-2026-10-21-r2-owner-step2-nrqm51-simplex'; ids=['def-nrqmx-finite-jump-trajectories','pthm-nrqmx-jump-unravelling-finite']; records=[]
for ident in ids:
 p=base/'items'/f'{ident}.md'; original=p.read_text(); archive=ev/'production-preimages'/p.name;archive.parent.mkdir(exist_ok=True);assert not archive.exists();archive.write_text(original)
 text=original
 if ident.startswith('def-'):
  a='Each continuous real coordinate is integrable on every nondegenerate compact interval by the continuous-implies-integrable result listed below.'
  b='The full recursion is well-defined for these arbitrary continuous integrands by [[lem-nrqmx-continuous-simplex-integrals]]: every inner integral is continuous in all remaining ordered parameters, so the next integral exists. That lemma also proves basis independence, linear-map commutation, the norm bound by the supremum times $t^n/n!$, and positivity for nonnegative real scalar integrands.'
  assert a in text;text=text.replace(a,b)
  text=text.replace('## Remarks','[[lem-nrqmx-continuous-simplex-integrals]]\n\n## Remarks')
 else:
  a='## Proof\n';b='[F11] [[lem-nrqmx-continuous-simplex-integrals]]: every continuous finite-dimensional integrand on the closed ordered simplex has the recursive componentwise Riemann integrals in [F2], with every partial integral continuous in the remaining parameters. These integrals commute with linear maps and finite sums, preserve nonnegativity for real scalar integrands, and have norm at most the supremum norm of the integrand times $t^n/n!$, including the stated zero-variable and zero-time conventions.\n\n## Proof\n';assert a in text;text=text.replace(a,b,1)
  a='substituting that identity for the final $\\mathcal T_{s_1}$ in the remainder adds the next ordered-simplex term and a remainder with one more nested time.'
  b='substituting that identity for the final $\\mathcal T_{s_1}$ in the remainder adds the next ordered-simplex term and a remainder with one more innermost time. Only finite linearity of the nested integrals is used; no integration order is exchanged.';assert a in text;text=text.replace(a,b)
  a='$Q_{N+1}(t)=\\int_{0<s_1<\\cdots<s_{N+1}<t}e^{(t-s_{N+1})\\mathcal N}\\mathcal J\\cdots\\mathcal J e^{s_1\\mathcal N}\\mathcal T_{s_1}\\,d\\mathbf s$. These repeated componentwise Riemann integrals exist because their finite-dimensional integrands are continuous. [F1, F2, F4, F5, F8, F9, algebra]'
  b='$Q_m(t)=\\int_{0<s_1<\\cdots<s_m<t}e^{(t-s_m)\\mathcal N}\\mathcal J e^{(s_m-s_{m-1})\\mathcal N}\\mathcal J\\cdots e^{(s_2-s_1)\\mathcal N}\\mathcal J\\mathcal T_{s_1}\\,d\\mathbf s$ for $m=N+1$. For $m=1$ the intermediate exponential factors are absent: $Q_1(t)=\\int_0^t e^{(t-s_1)\\mathcal N}\\mathcal J\\mathcal T_{s_1}\\,ds_1$, exactly the displayed variation-of-constants remainder. In particular there is no extra $e^{s_1\\mathcal N}$ before $\\mathcal T_{s_1}$. All these integrands are continuous in finite-dimensional coordinates on the closed ordered simplex; [F11] proves that every inner integral is continuous in its remaining parameters and hence the full repeated integral exists. The insertion of one further nested integral in the induction is therefore legitimate. [F1, F2, F4, F5, F8, F9, F11, algebra]'
  assert a in text;text=text.replace(a,b)
  a='Thus $\\|S_n(t)\\|_{1\\to1}'
  b='The continuous-integrand norm bound in [F11], applied in the finite-dimensional superoperator space with norm $\\|\\cdot\\|_{1\\to1}$, now bounds each integral by that volume times its pointwise norm bound. Thus $\\|S_n(t)\\|_{1\\to1}';assert a in text;text=text.replace(a,b)
  text=text.replace('[F2, F4, F5, F7, F8, F9, F10, step 1.1','[F2, F4, F5, F7, F8, F9, F10, F11, step 1.1')
  a='Trace-norm convergence from step 3.1 and [F5] allow taking traces term by term. Each integrated branch weight is nonnegative: its continuous trace integrand is nonnegative pointwise, so every Darboux lower sum, and therefore its integral, is nonnegative by [F8].'
  b='All label sums at fixed $n$ are finite, and [F11] allows moving those sums and the finite-dimensional linear trace through the nested integrals. Trace-norm convergence from step 3.1 and the trace bound in [F5] then allow taking the trace of the infinite series. Each integrated branch weight is nonnegative: its continuous real trace integrand is pointwise nonnegative, and [F11] preserves this at every successive integration. This branch-positivity and convergence argument has not assumed the complete positivity of the final ensemble map.';assert a in text;text=text.replace(a,b)
  text=text.replace('[F2, F4, F5, F6, F8, step 1.2','[F2, F4, F5, F6, F8, F11, step 1.2')
 assert text.split('---',2)[1]==original.split('---',2)[1];p.write_text(text);records.append({'path':str(p),'before_sha256':hashlib.sha256(original.encode()).hexdigest(),'after_sha256':hashlib.sha256(text.encode()).hexdigest(),'frontmatter_unchanged':True})
(ev/'source-changes.json').write_text(json.dumps(records,indent=2)+'\n')
