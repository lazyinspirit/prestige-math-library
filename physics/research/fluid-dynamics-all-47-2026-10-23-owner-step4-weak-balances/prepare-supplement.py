"""Create a separate unapplied scientific supplement; no production writes."""
from pathlib import Path
import datetime, difflib, hashlib, json, re, yaml

ROOT = Path.cwd()
OUT = ROOT / 'research/fluid-dynamics-all-47-2026-10-23-owner-step4-weak-balances/supplement-1'
OUT.mkdir(parents=True, exist_ok=True)
RUN = 'fluid-dynamics-all-47-2026-10-23'
sha = lambda b: hashlib.sha256(b).hexdigest()
fm = lambda t: re.split(r'(?m)^---\s*$', t, maxsplit=2)[1]
def save(rel, data):
    p=OUT/rel; p.parent.mkdir(parents=True,exist_ok=True)
    p.write_bytes(data.encode() if isinstance(data,str) else data)
    return {'path':str(p.relative_to(ROOT)), 'sha256':sha(p.read_bytes())}
def para(t, start):
    rows=[p for p in t.split('\n\n') if p.startswith(start)]
    assert len(rows)==1,(start,len(rows))
    return rows[0]

read_ids = [
 'def-fd-periodic-solenoidal-spaces','def-fd-weak-time-continuity',
 'lem-fd-finite-mode-compactness','lem-fd-negative-space-nonlinear-bound',
 'def-fd-periodic-leray-hopf','def-fd-lax-pattern','cex-fd-shock-point-values',
 'def-fd-conservation-system','def-fd-piecewise-traces',
 'lem-fd-locally-integrable-functions-define-distributions',
 'def-fd-bounded-solenoidal-spaces','lem-fd-bounded-solenoidal-basis',
 'thm-fd-periodic-global-weak-existence','prop-fd-pressure-reconstruction',
 'thm-fd-weak-smooth-uniqueness','pthm-fd-periodic-weak-continuation',
 'rem-fd-weak-regularity-status','rem-fd-thermal-coupling',
 'pthm-fd-smooth-consistency','post-fd-periodic-newtonian',
 'lem-fd-no-slip-lsix','thm-fd-bounded-global-weak-existence',
 'thm-fd-convex-scalar-riemann','ex-fd-burgers-shock','ex-fd-burgers-fan',
 'cex-fd-expansion-shock','thm-fd-rankine-hugoniot','prop-fd-entropy-jump',
 'prop-fd-viscous-entropy-passage','def-distributional-derivative'
]
texts={i:(ROOT/'items'/f'{i}.md').read_text() for i in read_ids}
inputs={}
for i,t in texts.items():
    p=ROOT/'items'/f'{i}.md'; raw=p.read_bytes()
    inputs[str(p.relative_to(ROOT))]=sha(raw)
    save('observed/'+p.name,raw)
pages=['library/fluid-dynamics-mathematics/fd-w01.md','library/fluid-dynamics-mathematics/fd-w03.md','library/fluid-dynamics-mathematics/fd-w03-examples.md']
for path in pages:
    raw=(ROOT/path).read_bytes();inputs[path]=sha(raw);save('observed-pages/'+Path(path).name,raw)
edits={}
def add(i,a,b):
    assert texts[i].count(a)==1,(i,a[:60],texts[i].count(a))
    edits.setdefault(i,[]).append((a,b))

i='def-fd-weak-time-continuity'
a=para(texts[i],'[F1]')
add(i,a,a.replace('have the stated real Hilbert structures.','have the stated real Hilbert coefficient structures, with convergence of finite Fourier truncations in their respective weighted norms.'))
a=para(texts[i],'3.1 ')
b=r'''3.1 Under the Countable Choice convention in [F1], the periodic targets are separable. Consider finite vector Fourier arrays with coefficients in $\mathbb Q+i\mathbb Q$, support in $\{|k|_\infty\le N\}$ for an integer $N$, and conjugate symmetry; their associated real polynomials form a countable family. For $H$ and $V$, apply $P_k$ to each coefficient. This preserves conjugate symmetry and gives finite solenoidal arrays; $P_0=I$ retains the mean mode. Given a target field, first truncate its coefficient series in its target norm, then approximate the finitely many coefficients by rational real and imaginary coordinates with the opposite modes paired by conjugation. Since $P_k$ is a contraction and fixes the target solenoidal coefficients, the projected rational approximants converge in the $H$ or $V$ norm. For the real $H^{-r}$ space, omit the projections: its definition as the weighted completion of finite conjugate-symmetric arrays gives the same density argument. Complex targets use the corresponding unpaired rational complex arrays. Thus every periodic target named here is separable; [F2] supplies the bounded-domain targets under its own Axiom of Choice hypothesis. Finally, $L^p_{\rm loc}$ is exactly the conjunction of the Bochner-class conditions over finite intervals. No stronger assumption on the abstract spaces in the Definition is needed. [given, F1, F2, step 2.1, algebra] ∎'''
add(i,a,b)

i='lem-fd-finite-mode-compactness'
a='Set $z=0$ on the exceptional null set; the truncations then converge to this representative in $V$ almost everywhere, so it is strongly measurable. Since $\\sup_t\\|z(t)\\|_H\\le A$ and $\\int_0^T\\|\\nabla z\\|_2^2dt\\le B$, this representative lies in $L^2(0,T;V)$ and has the asserted gradient bound.'
b=r'''Keep the actual map $z:[0,T]\to H$ defined by its limiting coefficients at every time. Define a separate $V$-valued representative $\widetilde z(t)=z(t)$ where the gradient square sum is finite and $\widetilde z(t)=0$ on the exceptional null set. The continuous finite-dimensional maps $\Pi_Mz$ converge to $\widetilde z$ in $V$ almost everywhere, so $\widetilde z$ is strongly measurable. Its $V$ norm is integrable in square because the integrated $H$ norm is at most $TA^2$ and the integrated gradient square sum is at most $B$. Thus $\widetilde z$ defines a class in $L^2(0,T;V)$ whose $H$-valued class is represented by the unchanged weakly continuous map $z$. The asserted pointwise $H$ bound and every limiting Fourier coefficient continue to refer to that unchanged map; only the Bochner representative has been assigned zero on the exceptional set.'''
add(i,a,b)

i='lem-fd-negative-space-nonlinear-bound'
a='For the Fourier projection $P$ and divergence convention of\nPeriodic solenoidal Fourier spaces, the distribution $P\\operatorname{div}(a\\otimes a)$ belongs to $H^{-r}$ and satisfies'
b=r'''Use the Fourier multipliers $P_k$, negative-space norm and divergence convention of Periodic solenoidal Fourier spaces. Identify an $H^{-r}$ coefficient sequence $c=(c_k)$ with the periodic distribution
$$\langle T_c,\varphi\rangle=\sum_{k\in\mathbb Z^d}c_k\cdot\widehat\varphi(-k)\qquad(\varphi\in C^\infty(\mathbb T_L^d;\mathbb C^d)),$$
using the bilinear pairing and normalized measure. On $H^{-r}$ define $P$ by $(Pc)_k=P_kc_k$; this is the extension of the $L^2$ projection under this distribution identification. Then $\operatorname{div}(a\otimes a)$ and $P\operatorname{div}(a\otimes a)$ belong to $H^{-r}$, and the projected distribution satisfies'''
add(i,a,b)
a=para(texts[i],'1.1 ')
b=r'''1.1 Put $w_k=(1+L^2|\kappa_k|^2)^r$. For any sequence $c$ with $\sum_kw_k^{-1}|c_k|^2<\infty$, Cauchy–Schwarz gives $|\sum_kc_k\cdot\widehat\varphi(-k)|\le\|c\|_{H^{-r}}(\sum_kw_k|\widehat\varphi(-k)|^2)^{1/2}$. Repeated integration by parts bounds the last factor by a constant times $p_M(\varphi)$ for an integer $M>r+d/2$, because smooth Fourier coefficients decay as $(1+|k|)^{-M}$. Thus the displayed pairing is absolutely convergent and continuous, so defines a periodic distribution; testing on one character recovers each $c_k$, proving injectivity. It agrees with the regular distribution of an $L^2$ field by Fourier truncation and Parseval. Since $\|P_k\|\le1$, coefficient multiplication by $P_k$ is a contraction on $H^{-r}$, preserves real conjugate symmetry, and agrees on $L^2$ with the supplied projection. Now $a_i a_j\in L^1$ and Cauchy–Schwarz gives $|\widehat{a_i a_j}(k)|\le\|a_i\|_2\|a_j\|_2$, hence the Euclidean tensor norm of this coefficient is at most $C_d\|a\|_2^2$. The unprojected divergence coefficient is $b_k=i\sum_j\kappa_{k,j}\widehat{a_{\cdot}a_j}(k)$ and has size at most $C_d|\kappa_k|\|a\|_2^2$. [given, F1, F2, F3, algebra]'''
add(i,a,b)
a=para(texts[i],'2.1 ')
b=a.replace('The square of the resulting negative norm is bounded by','The square of the unprojected negative norm is bounded by').replace('Taking square roots proves the bound and that the coefficients define an element of $H^{-r}$.','Therefore $b$ defines an element of $H^{-r}$. Its distribution agrees with the original divergence: rectangular Fourier sums of a smooth test converge with their first derivatives uniformly, so integration against the $L^1$ tensor passes to that limit and gives precisely the coefficient pairing of step 1.1. The extension $P$ defined there applies to this distribution and is a contraction; taking square roots proves the stated projected bound.')
add(i,a,b)

i='def-fd-periodic-leray-hopf'
add(i,'deps: [ def-fd-weak-time-continuity, def-distributional-derivative ]','deps: [ def-fd-periodic-solenoidal-spaces, def-fd-weak-time-continuity, def-distributional-derivative ]')
add(i,'dependency_roles:\n','dependency_roles:\n  def-fd-periodic-solenoidal-spaces: mathematical-premise\n')
add(i,'## Definition references\n','## Definition references\n\n[[def-fd-periodic-solenoidal-spaces|Periodic solenoidal Fourier spaces]]\n')

i='def-fd-conservation-system'
a='For an initial-value problem on $(0,T)\\times\\Omega$, $T>0$, let $U_0:\\Omega\\to\\mathcal O$ be measurable and locally integrable. A test function up to the initial boundary'
b=r'''For an initial-value problem on $(0,T)\times\Omega$, $T>0$, let $U_0:\Omega\to\mathcal O$ be measurable and locally integrable. Additionally require local integrability of the positive-time fields up to the initial boundary: for every compact $K\subseteq[0,T)\times\Omega$ in the relative topology,
$$\int_{K\cap((0,T)\times\Omega)}\left(|U|+\sum_{j=1}^d|F_j(U)|\right)\,dt\,dx<\infty.$$
This condition uses only positive-time values and assigns no values or strong trace to $U$ at $t=0$. A test function up to the initial boundary'''
add(i,a,b)
add(i,'The integral identity is required only when the displayed integrands are locally integrable on the test support.','The stated integrability up to the initial boundary makes every signed integral in this identity finite, including for tests nonzero at $t=0$.')
a='With initial data, add $\\int_\\Omega\\eta(U_0)\\psi(0,x)\\,dx$ and require $\\eta(U_0)\\in L^1_{\\mathrm{loc}}$.'
b=r'''For the initial entropy inequality, also require $\eta(U_0)\in L^1_{\mathrm{loc}}(\Omega)$ and, for every compact $K\subseteq[0,T)\times\Omega$ in the relative topology,
$$\int_{K\cap((0,T)\times\Omega)}\left(|\eta(U)|+\sum_{j=1}^d|q_j(U)|\right)\,dt\,dx<\infty.$$
Then use every nonnegative smooth test compactly supported up to $t=0$ in the class already defined, adding $\int_\Omega\eta(U_0)\psi(0,x)\,dx$ to the displayed weak integral. Every term is finite. Interior local integrability alone does not supply this initial-boundary condition; the initial datum remains separately prescribed and no strong trace is asserted.'''
add(i,a,b)

i='prop-fd-viscous-entropy-passage'
a='Moreover, the absolute value of the right-hand side in step 2.1'
b=r'''For a test supported up to $t=0$, the same convergence holds on its entire support: first restrict to $t\ge\delta>0$ and apply interior $L^1_{\mathrm{loc}}$ convergence, then bound the omitted strip $0<t<\delta$ by its measure times the uniform bounds of the compositions on $[-M,M]$, and let $\delta\downarrow0$. These uniform range bounds also give local integrability of every state, flux and entropy composition up to the initial boundary as required by [F1]. Moreover, the absolute value of the right-hand side in step 2.1'''
add(i,a,b)

proposals=[]
for i,rs in edits.items():
    old=texts[i];new=old
    for a,b in rs:
        assert new.count(a)==1;new=new.replace(a,b)
    # All changes remain unapplied. Frontmatter changes only in the declared dep repair.
    if i!='def-fd-periodic-leray-hopf':assert fm(old)==fm(new)
    before=save('before/'+i+'.md',old)
    candidate=save('candidate/'+i+'.md',new)
    patch=save('patches/'+i+'.patch',''.join(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile='a/items/'+i+'.md',tofile='b/items/'+i+'.md')))
    proposals.append({'id':i,'source':'items/'+i+'.md','before':before,'candidate':candidate,'patch':patch,'edits':[{'before_excerpt':a,'after_excerpt':b,'expected_matches':1} for a,b in rs],'public_interface_changed':i in ['lem-fd-negative-space-nonlinear-bound','def-fd-conservation-system'],'scope_preserved':True})

findings={
 'lem-fd-finite-mode-compactness':{'disposition':'confirmed-proof-defect','reason':'The actual Fourier-defined weakly continuous map cannot be reassigned at exceptional times. Use a distinct V-valued representative of its unchanged a.e. class; all pointwise coefficient and continuity conclusions survive.'},
 'lem-fd-negative-space-nonlinear-bound':{'disposition':'confirmed-missing-extension','reason':'The supplier defines P only on L2. The draft constructs its coefficient contraction on H^{-r}, the continuous distribution embedding, and the distributional identification of the L1-product divergence before projecting it. Both the input and output negative-space bounds are proved at the original r>d/2+1; no state or dimension restriction is added.'},
 'def-fd-weak-time-continuity':{'disposition':'confirmed-proof-gap','reason':'Periodic separability was asserted without proof. The draft proves it using countable finite rational Fourier arrays, paired conjugation for real fields and coefficient projections for H,V; negative spaces use their weighted completion. The abstract Definition and the bounded branch with its own AC hypothesis are unchanged.'},
 'def-fd-periodic-leray-hopf':{'disposition':'confirmed-undeclared-direct-prerequisite','reason':'The Definition already explicitly invokes the periodic-space interface, which is present transitively through weak-time continuity. Declare its direct mathematical dependency and exact reference. No solution clause or public Definition changes.'},
 'def-fd-lax-pattern':{'disposition':'false-positive-no-repair','reason':'The item itself explicitly defines U_t+partial_x F(U)=0 with C1 flux on an arbitrary open state domain, and defines strict hyperbolicity and the finite endpoint Jacobian inequalities there. Those pointwise constructions require no convexity. The supplier supplies conservation-system notation; its separate convex-domain entropy convention is neither restated nor used here. Narrowing the domain to convex sets would discard sound scope. For example, O=(-2,-1) union (1,2), m=1, F(v)=v^2/2, U_L=3/2, U_R=-3/2 and s=0 satisfy the exact stated definition on a nonconvex O. The sole direct consumer uses O=R, so even its stronger state-domain condition is met.'},
 'cex-fd-shock-point-values':{'disposition':'false-positive-no-repair','reason':'The exact Statement says let I subset R and Omega subset R^d be open; I is already open, and Q=I x Omega is open. The trace supplier also allows any open I. Regular-distribution definitions apply on any open Q. If the conservation-system introductory interval convention is needed, restrict to each connected time component, which is an open interval, and use locality; a compact test support has positive distance from the complement of I and bounded time projection, so meets only finitely many such components. The null hyperplane argument and equal a.e. fields do not require time connectedness. A real nontrivial witness is a Burgers shock with states 1 and 0, speed 1/2, and an assigned state 3 on its plane: traces and residual remain unchanged.'},
 'def-fd-conservation-system':{'disposition':'confirmed-initial-entropy-integrability-gap','reason':'Interior L1loc allows divergence near zero and does not make signed initial-boundary entropy integrals finite. The draft explicitly requires positive-time state/flux and entropy compositions to be locally integrable on all compact sets of [0,T) x Omega, while keeping tests nonzero at zero and separately prescribed initial densities. Interior formulations, all signs, convexity and distribution conventions remain unchanged.'}
}
save('findings.json',json.dumps(findings,indent=2)+'\n')
judge=[json.loads(l) for l in (ROOT/'research'/(RUN+'-judge.jsonl')).read_text().splitlines() if l.strip()]
save('observed/judge-findings.json',json.dumps([r for r in judge if r.get('id') in findings],indent=2)+'\n')

notes={
 'thm-fd-periodic-global-weak-existence':'F4 is used for fixed-mode nonlinear coefficient bounds in 2.2; those follow directly from the same L1 coefficient estimate. Galerkin fields in 1.1 are smooth, where the extended P agrees with the original L2 projection. F3 and 2.2/3.2 use the actual coefficient-defined weakly continuous map, now retained unchanged by the compactness draft. All global, initial and restart claims are preserved.',
 'prop-fd-pressure-reconstruction':'1.1 constructs pressure coefficients directly from L1 u tensor u; 2.1 is a frequency identity. The local H^{-r} extension is consistent with those coefficients and adds no pressure regularity. Existence and weak identities used in F1 are preserved.',
 'thm-fd-weak-smooth-uniqueness':'F1/F5 and all three proof steps use the same weakly continuous representative, weak identity and all-time energy inequality. Neither the nonlinearity estimate nor initial entropy convention occurs in the comparison. All Countable/Dependent Choice qualifications remain.',
 'pthm-fd-periodic-weak-continuation':'F3 applies the unchanged global existence theorem at d=3 and nu=mu/rho0; F2 and 3.1 use exactly its original initial/restart energy clauses. No physical postulate, SI scaling or applicability condition changes.',
 'rem-fd-weak-regularity-status':'The compactness/existence hypotheses and lack of unrestricted regularity/uniqueness remain exactly as summarized in F1-F3 and 1.1-2.1. The proof-only representative correction does not alter those hypotheses.',
 'rem-fd-thermal-coupling':'The mechanical branch still supplies velocity and kinetic dissipation only; the thermal branch remains separately postulated, with no temperature inference or coupled energy law introduced by the mathematical repairs.',
 'pthm-fd-smooth-consistency':'Uses only the unchanged periodic weak existence/weak-smooth conclusions, with existing Countable and Dependent Choice and unit-torus rescaling. No new pressure, thermal, empirical or global-regularity claim follows.',
 'post-fd-periodic-newtonian':'The mathematical Leray-Hopf class has identical weak identity, representative and energy clauses. Declaring an already named direct supplier adds no physical postulate or empirical claim.',
 'def-fd-periodic-leray-hopf':'Its pointwise weakly continuous map versus Bochner equivalence classes distinction is preserved. The added periodic separability proof validates the existing target convention; direct periodic-space dependency is separately proposed.',
 'lem-fd-finite-mode-compactness':'F2 uses the unchanged strong-measurability convention and pointwise Cw definition. Periodic H and V are now explicitly proved separable, and the separate V representative fixes the exceptional-time defect.',
 'lem-fd-no-slip-lsix':'F7 uses only the unchanged abstract separable-Hilbert Bochner convention; bounded V and V* separability come from its own basis/Riesz suppliers under AC. Periodic separability does not change that branch.',
 'thm-fd-bounded-global-weak-existence':'F5 and 2.1 use actual-map weak continuity and strong-measurability conventions. Its bounded spaces have independent AC basis/separability suppliers in F2. The periodic proof addition changes no used hypothesis or conclusion.',
 'def-fd-piecewise-traces':'Its entire Definition uses local side C1 extensions, interface traces and a state domain; no initial-value weak or entropy test occurs. Open time sets and all side hypotheses remain valid.',
 'def-fd-lax-pattern':'Its entire Definition uses C1 fluxes, endpoint Jacobians and Rankine-Hugoniot algebra only, with no initial-value tests or entropy compositions. Its arbitrary open state-domain generalization is self-contained and preserved.',
 'cex-fd-shock-point-values':'Its entire Statement and 1.1-3.1 concern interior regular distributions on open Q and null-hyperplane reassignment. It uses no test meeting an initial boundary, so no new initial integrability premise is required.',
 'thm-fd-rankine-hugoniot':'F2 and proof 1.1-3.1 use compactly supported interior tests in open I x Omega; residual and plane measure definitions do not involve prescribed t=0 data. Initial integrability clarification leaves every assertion unchanged.',
 'prop-fd-entropy-jump':'F1 and proof 1.1-3.1 concern the interior entropy residual and its sign. No initial term occurs; the original C1 side extensions and locally integrable compositions remain sufficient.',
 'prop-fd-viscous-entropy-passage':'Uniform finite range bounds every state/flux/entropy composition on initial-boundary compact supports. Proof 3.1 derives the initial-data bound and convergence; the draft adds the explicit thin-time-strip argument for passing to tests nonzero at zero. Public Statement is unchanged.',
 'thm-fd-convex-scalar-riemann':'The shock, fan and constant profiles take values in the compact interval joining a,b. Continuous state, flux and entropy compositions are bounded there, and hence integrable on compact supports up to zero. Initial data have the same finite range. Proof 3.1/4.2/5.1/6.1 already performs the required initial-strip arguments. Lax use F4/1.2 is the scalar endpoint inequality on O=R.',
 'ex-fd-burgers-shock':'The profile and data take only a,b off null sets. Every smooth entropy and compatible flux is bounded on [b,a], giving all initial-boundary integrals; F1/F4 and 1.1 retain the exact scalar Riemann and initial formulations.',
 'ex-fd-burgers-fan':'The profile and data lie in [a,b], so all state/flux/entropy compositions are bounded on compact initial supports. The explicit strong local trace estimate and the Riemann supplier remain unchanged.',
 'cex-fd-expansion-shock':'The two-state profile and initial data are bounded, so state/flux and polynomial entropy compositions are integrable up to zero. Proof 1.1 explicitly includes the initial cutoff and 1.2 proves the positive residual. Fan comparison and nonuniqueness limitations are unchanged.'
}
all_texts={p.stem:p.read_text() for p in (ROOT/'items').glob('*.md')}
interface_targets=['lem-fd-negative-space-nonlinear-bound','def-fd-conservation-system']
other_targets=['lem-fd-finite-mode-compactness','def-fd-weak-time-continuity','def-fd-periodic-leray-hopf','def-fd-lax-pattern','cex-fd-shock-point-values']
reviews=[]
for target in interface_targets+other_targets:
    reached={target};edge_rows={}
    while True:
        fresh=[]
        for j,t in all_texts.items():
            if j in reached or not any(q in t for q in reached):continue
            d=yaml.safe_load(fm(t)); logical=set(d.get('deps') or [])|set(d.get('justified_by') or [])
            hits=logical & reached
            if hits:fresh.append(j);edge_rows[j]=sorted(hits)
        if not fresh:break
        reached.update(fresh)
    for j in sorted(reached-{target}):
        if target not in interface_targets and j not in notes:continue
        assert j in notes,(target,j)
        assert j in texts,j
        reviews.append({'supplier':target,'consumer':j,'via':edge_rows[j],'source':'items/'+j+'.md','raw_sha256':inputs['items/'+j+'.md'],'disposition':'proof-repair-proposed' if j in edits else 'unaffected','review':notes[j]})
    # All actual item mentions outside the logical closure are examined explicitly.
    for j,t in all_texts.items():
        if j==target or j in reached:continue
        if target in t:
            assert j in notes,(target,'reference-only',j)
            reviews.append({'supplier':target,'consumer':j,'use_kind':'reference-only','source':'items/'+j+'.md','raw_sha256':inputs['items/'+j+'.md'],'disposition':'unaffected','review':notes[j]})
    for path in pages:
        if target in (ROOT/path).read_text():
            reviews.append({'supplier':target,'consumer':path,'use_kind':'page-placement','raw_sha256':inputs[path],'disposition':'unaffected','review':'Entire frontmatter-only placement page read; inventory occurrence adds no mathematical assertion.'})

save('consumer-use-matrix.json',json.dumps({'selection':'Exact current logical/discharge closure for both changed public interfaces; proof-only suppliers checked at actual relevant uses. Target carriers have no aliases. No interface-changed consumer omitted.','reviews':reviews},indent=2)+'\n')
report={'version':1,'run':RUN,'author':'/root/fluid_step4_weak_balances','mode':'unapplied-draft-only','native_review':False,'native_adjudication':False,'recertification':False,'cycle':1,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'findings':'findings.json','proposals':proposals,'consumer_review':'consumer-use-matrix.json','inputs':inputs,'reading_limits':'Complete current target carriers, local suppliers and consumers listed in observed/ were read. All ten conservation-system consumers and all seven negative-space consumers were read completely. The existing imported derivative Definition was read; other imported theorem full texts and external literature were not reread. No source retrieval, whole-item acceptance, gate, native judgment/adjudication, stamp or recertification is claimed. The independent initial jump proposal remains immutable and is not superseded.','remaining_owner_work':'Native Step 5 independently verifies each conclusion/proposal, owns all actual source and contract repairs, declares direct dependencies as appropriate and binds genuine current contexts. Root owns metadata/graph/adoption/rehashing and native gate preparation; drafts authorize none of those transitions.'}
save('supplement-proposal.json',json.dumps(report,indent=2)+'\n')
print(json.dumps({'directory':str(OUT.relative_to(ROOT)),'drafts':len(proposals),'consumer_rows':len(reviews),'findings':len(findings),'read_local_carriers':len(texts),'live_writes':False}))
