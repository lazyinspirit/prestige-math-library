# Step 3b — pair `muckenhoupt-weights-and-weighted-estimates` (dispatch report)

Run `frontier-39-analysis-30`, role `alpha-high`, batch 8. A page
`muckenhoupt-weights-and-weighted-estimates` (order 458.02613, 31 items);
B page `muckenhoupt-weights-and-weighted-estimates-examples` (order 458.02614,
5 items). Owned, authored and checked by this dispatch only; sibling pairs of
batch 8 (if any) and all other batch files are preserved untouched.

**Status: complete 2026-10-05 — all 36 items authored, both pages and the batch proof contracts written, all pair-level checks run, and item decisions recorded (29 accept, 7 repaired); a refreshed `sufficient` scope receipt was recorded after the local repairs.**
All 36 owned IDs are missing on disk at entry (`items/<id>.md` absent); the
scaffold is `research/frontier-39-analysis-30-batch-8.pages.json` with its
coverage, notes and the 36 Step-1 readiness records. Step 3a scope review
`frontier-39-analysis-30-step3a-pair-muckenhoupt-weights-and-weighted-estimates.md`
is `sufficient`; drift verdict `no-drift`; no
`frontier-39-analysis-30-owner-authoring-direction.md` exists at entry.

## Owned IDs (authoring order, per dispatch)

Level 0: `def-axis-parallel-cube-averages-and-cube-maximal-functions`,
`def-weight-and-weighted-lp-space`,
`lem-annulus-far-field-estimates-for-the-maximal-function`,
`lem-maximal-dyadic-cubes-covering-a-proper-open-set`,
`lem-maximal-dyadic-subcubes-of-a-cube-at-a-height`.
Level 1: `lem-ball-and-cube-maximal-functions-are-comparable`.
Level 2: `def-muckenhoupt-a-p-and-a-one-weights`,
`lem-power-decay-weights-are-doubling`,
`lem-unweighted-good-lambda-local-estimate-for-maximal-truncations`.
Level 3: `lem-a-one-cube-average-and-maximal-function-forms-agree`.
Level 4: `lem-a-p-dual-weight-and-nesting-properties`,
`lem-a-p-weighted-average-comparison-and-density-to-mass`.
Level 5: `lem-a-p-distribution-decay-from-maximal-cubes`,
`lem-a-p-weights-are-doubling`, `lem-weighted-maximal-weak-bound-for-a-one`.
Level 6: `def-muckenhoupt-a-infinity-class`,
`def-weighted-maximal-function-relative-to-a-doubling-weight`,
`thm-reverse-holder-self-improvement-for-a-p-weights`,
`ex-power-weight-a-p-range` (B).
Level 7: `cor-a-p-classes-are-open-in-the-exponent`,
`lem-a-infinity-weights-satisfy-power-decay`,
`lem-weighted-maximal-function-is-weak-type-one-one`,
`cex-power-weight-fails-at-both-a-p-endpoints` (B),
`ex-a-one-power-weight-range` (B),
`ex-weighted-norm-of-an-interval-indicator` (B),
`rem-a-doubling-weight-need-not-be-a-p` (B).
Level 8: `lem-differentiation-of-l-one-functions-for-a-doubling-weight`,
`lem-kernel-tail-integrals-of-weighted-l-p-functions-are-finite`,
`lem-weighted-good-lambda-inequality-for-maximal-truncations`,
`thm-hardy-littlewood-maximal-operator-characterises-a-p`.
Level 9: `lem-reverse-holder-from-a-distribution-estimate`,
`thm-calderon-zygmund-operators-are-bounded-on-weighted-lp`.
Level 10: `cor-hilbert-and-riesz-transforms-are-bounded-on-weighted-lp`,
`lem-power-decay-implies-a-p-membership`,
`rem-weighted-endpoints-are-not-obtained-by-setting-p-equal-one`.
Level 11: `thm-a-infinity-power-decay-characterisation`.

## Open obligations at entry

1. All 36 item files absent; author each in the dispatch order above.
2. Both library pages absent (`library/fourier-analysis/<A>.md`, B page under
   the same category) — author after items.
3. Batch proof-contract file `research/frontier-39-analysis-30-batch-8.proof-contracts.json`
   absent — create with one contract row per proof-bearing item.
4. Item decisions absent — record after all authoring and checks.
5. Supplier status: every non-owned dependency of the 36 items is an already
   published item (62 distinct published suppliers, 0 unresolved, no in-run
   sibling supplier, cross-batch input `[]`). No unfinished supplier at entry;
   the four DC-declared items consume published Dependent-Choice machinery.
6. Batch-8 shared files (`pages.json`, `coverage.json`, `notes.md`,
   `cross-batch-dependencies.json`) belong to the Step-1 scaffold; sibling rows
   in shared batch files must be preserved if other pairs share batch 8.

## Checkpoints

### 1. def-axis-parallel-cube-averages-and-cube-maximal-functions (level 0)
Authored 2026-10-05. Claim/conventions: open axis-parallel cube
$Q(x,r)=\prod(x_i-r,x_i+r)$ (side $2r$, measure $(2r)^n$ by the box-measure
theorem), concentric dilates $\lambda Q=Q(x,\lambda r)$, averages
$\langle f\rangle_Q$, centred/uncentred cube maximal functions. Deps (manifest,
unchanged): the three box/dilation/measure conventions, the published ball
maximal functions and ball average, CC. Sources: Grafakos §7.1 printed p. 500
and §7.1.2 p. 507; Kinnunen p. 66. Checks: precheck n/a (definition),
proof-layout 0 defects, rendercheck OK. Open gaps: none.

### 2. def-weight-and-weighted-lp-space (level 0)
Authored 2026-10-05. Claim/conventions: weight = measurable
$[0,\infty]$-valued, $L^1_{\mathrm{loc}}$, $0<w<\infty$ a.e.; the $w$-measure
$w(E)=\int_Ew\,d\lambda$ is a locally finite regular Borel measure (indefinite
integral + $\mathbb R^n$ LCH $\sigma$-compact + regularity theorem);
$w$-null $=$ Lebesgue-null; $L^p(w)$ is the quotient of the measure-space $L^p$
construction for $w\lambda$, Banach under CC by Riesz-Fischer. Local repair:
added deps `def-complex-lp-and-euclidean-test-function-conventions` (the page
consumes $L^p(w)$ for complex-valued $f$, e.g. in the CZ theorem) and
`def-countable-choice` (Riesz-Fischer hypothesis); both published; manifest row
to be updated in the same sweep. Sources: Grafakos §7.1 pp. 499-500; Kinnunen
§4.1 pp. 65-66. Checks: proof-layout 0 defects, rendercheck OK, precheck n/a.
Open gaps: manifest dep/level sync (queued).

### 3. lem-annulus-far-field-estimates-for-the-maximal-function (level 0)
Authored 2026-10-05. Claim: for $\delta>0$,
$\int_{|t-z|\ge r}|f|\,|t-z|^{-n-\delta}\le C_{n,\delta}r^{-\delta}Mf(z)$ with
$C_{n,\delta}=2^{2n}(1-2^{-\delta})^{-1}$ (dyadic annuli, monotone convergence,
circumscribed cube). **Scaffold repair:** the scaffolded $\delta=0$ clause is
false — for $f=\mathbf 1_{B(0,R)}$, $z=0$, $r=1$ the integral is
$|\mathbb S^{n-1}|\log R\to\infty$ while $Mf(0)=1$; the item states the true
$\delta>0$ range and records the counterexample after the QED. Consumers use
only the kernel Hölder exponent $\delta\in(0,1]$. Deps: manifest list plus
`thm-lebesgue-measure-of-a-box-of-every-kind` (circumscribed-cube measure);
manifest sync queued. Checks: precheck PASS, proof-layout 0 defects,
rendercheck OK. Open gaps: manifest dep sync.

### 4. lem-maximal-dyadic-cubes-covering-a-proper-open-set (level 0)
Authored 2026-10-05. Claim (Whitney form): with
$\mathcal F=\{Q\ \text{dyadic}:5\sqrt nQ\subseteq\Omega\}$, maximal elements
exist, are pairwise disjoint, at most countable, cover $\Omega$; for a maximal
$Q$ with parent $P$: $P\subseteq3Q$, $5\sqrt nP\not\subseteq\Omega$, and some
$y\notin\Omega$ in that dilated parent satisfies $|x-y|\le6n\sqrt n\,\ell(Q)$
for all $x\in Q$. **Scaffold repair:** the scaffolded "dyadic cubes contained
in $\Omega$ maximal under inclusion" does not exist at all for
$\Omega=(0,\infty)^n$ (every cube has a larger ancestor inside $\Omega$); the
item records the counterexample and proves the adapted family instead. Deps: the
manifest list plus `thm-rational-points-and-boxes-in-rn`,
`lem-subset-of-countable`, `def-metric-ball`, `def-metric-topology`,
`lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`,
`thm-of-archimedean` (countability via the dyadic centre map; openness via the
norm comparison $d_2\le n\,d_\infty$). Checks: precheck PASS (after adopting
the canonical step numbering 1.1–4.1), proof-layout 0 defects, rendercheck OK.

### 5. lem-maximal-dyadic-subcubes-of-a-cube-at-a-height (level 0)
Authored 2026-10-05. Claim: subcubes of $Q_0$ via the affine image of
$(0,1]^n$; for $f\ge0$ in $L^1(Q_0)$ and $\alpha\ge\langle f\rangle_{Q_0}>0$
the maximal subcubes with $\langle f\rangle_R>\alpha$ are pairwise disjoint, at
most countable, cover $\{M_{d,Q_0}f>\alpha\}$, satisfy
$\langle f\rangle_R\le2^n\alpha$ and $\sum|R|\le\alpha^{-1}\int_{Q_0}f$
(intrinsic stopping-time proof; the volume bound supplies chain termination).
Deps: manifest list plus `thm-rational-points-and-boxes-in-rn`,
`lem-subset-of-countable` (countable grid). Checks: precheck PASS (canonical
numbering adopted), proof-layout 0 defects, rendercheck OK.

### 6. lem-ball-and-cube-maximal-functions-are-comparable (level 1)
Authored. Sandwich $Q(x,r/\sqrt n)\subseteq B(x,r)\subseteq Q(x,r)$ with
volume ratio $n^{n/2}$; pointwise comparisons $M^*\le C_nM_c^*$,
$M_c^*\le C_nM^*$, centred versions likewise, with
$C_n=\max\{2^n/v_n,v_nn^{n/2}/2^n\}$; A_p cube/ball characteristics differ by
at most $C_n^p$; boundedness equivalence. Deps: manifest list plus
`thm-indefinite-integral-of-a-nonnegative-function-is-a-measure` (monotonicity
of $\int_A|f|$). Checks: precheck PASS, proof-layout 0 defects, rendercheck OK.

### 7. def-muckenhoupt-a-p-and-a-one-weights (level 2)
Authored. Cube-based $[w]_{A_p}$; ball form differs by a dimensional power
(previous lemma); $A_1$ via $M^*w\le Cw$ a.e., equivalent cube/centred forms;
$[w]_{A_1}$ least constant; the two local-integrability consequences; strict
separation of the $p=1$ endpoint; translation/dilation/scalar invariance via
the $C^1$ change-of-variables theorem. Deps: manifest list plus
`cor-c-one-change-of-variables-for-l-one-functions`. Checks: precheck n/a,
proof-layout 0 steps, rendercheck OK.

### 8. lem-power-decay-weights-are-doubling (level 2)
Authored. Power decay with $C,\delta$ gives $w(E)\ge\alpha w(Q)$ for
$|E|\ge(1-\beta)|Q|$, $\beta=(2C)^{-1/\delta}$, $\alpha=1/2$; geometric cube
chain $l_{j+1}=(1-\beta)^{1/n}l_j$ from $4r$ into $B(x,r)$ gives doubling with
$C'=\alpha^{-(k-1)}$. Deps: manifest unchanged. Checks: precheck PASS,
proof-layout 0 defects, rendercheck OK.

### 9. lem-unweighted-good-lambda-local-estimate-for-maximal-truncations (level 2)
Authored. Whitney decomposition of $\Omega_\lambda$ (via the local Whitney
lemma), split $f=f_j^0+f_j^\infty$ at $Q_j^{**}=\Lambda^2Q_j$,
$\Lambda=24n\sqrt n$; weak $(1,1)$ handles $f_j^0$; the common-region Hölder
term via the annulus lemma, the two slivers via $Mf(x)\le\gamma\lambda$, and
the good-point comparison at $y_j$ via $R_j\le C_n\ell(Q_j)$; $\gamma_0$ small
gives $T^{**}f_j^\infty<2\lambda$ on $E_j$; summation over disjoint $Q_j$.
Hypothesis added honestly: the defining integrals converge
($\int_{|x-y|\ge\varepsilon}|f||x-y|^{-n}<\infty$), as the published definition
requires. Deps: manifest unchanged. Checks: precheck PASS, proof-layout 0
defects, rendercheck OK (multiline display joined; canonical numbering
1.1–4.1 adopted).

### 10. lem-a-one-cube-average-and-maximal-function-forms-agree (level 3)
Authored. (⇒) circumscribed ball of $Q$ gives
$\langle w\rangle_Q(\operatorname{ess\,inf}_Qw)^{-1}\le C_nC$; (⇐) outside the
countable union of null sets of rational cubes, any ball containing $x$ is
enclosed in a rational cube with comparable volume, giving
$Mw\le C_nC'w$ a.e.; uncentred forms included. Deps: manifest list plus
`def-weight-and-weighted-lp-space`. Checks: precheck PASS, proof-layout 0
defects, rendercheck OK.

### 11. lem-a-p-dual-weight-and-nesting-properties (level 4)
Authored. Duality via $p'-1=1/(p-1)$ and the exact identity
$[w^{-1/(p-1)}]_{A_{p'}}=[w]_{A_p}^{1/(p-1)}$; nesting via the power-mean
inequality $\langle g^\theta\rangle\le\langle g\rangle^\theta$ (Hölder), and
the $A_1$ case via $\langle w\rangle_Q\le c_n[w]_{A_1}\operatorname{ess\,inf}_Qw$.
Deps: manifest list plus `def-weight-and-weighted-lp-space`. Checks: precheck
PASS, proof-layout 0 defects, rendercheck OK.

### 12. lem-a-p-weighted-average-comparison-and-density-to-mass (level 4)
Authored. Hölder gives $\langle f\rangle_Q\le[w]_{A_p}^{1/p}(w(Q)^{-1}\int_Qf^pw)^{1/p}$
(p>1) and the analogous $c_n[w]_{A_1}$ bound at $p=1$; density-to-mass by
$f=\mathbf 1_E$; the $S$-form by complementation; local integrability of
$L^p(w)$ functions. Deps: manifest list plus `def-weight-and-weighted-lp-space`.
Checks: precheck PASS, proof-layout 0 defects, rendercheck OK.

### 13. lem-a-p-distribution-decay-from-maximal-cubes (level 5)
Authored. Geometric decay of the maximal-dyadic-subcube unions at heights
alpha_k=(2^n alpha^{-1})^k alpha_0: monotone inclusions, |U_{k+1}|<=alpha|U_k|,
w(U_{k+1})<=beta w(U_k) with beta=1-(1-alpha)^p/[w]_{A_p}, and w<=alpha_k a.e.
off U_k. Deps: manifest list (`lem-maximal-dyadic-subcubes-of-a-cube-at-a-height`,
`lem-a-p-weighted-average-comparison-and-density-to-mass`, countable additivity,
Countable Choice). Checks: precheck PASS, proof-layout 0 defects, rendercheck OK.
Decision accept.

### 14. lem-a-p-weights-are-doubling (level 5)
Authored. Cube dilates satisfy w(lambda Q)<=lambda^{np}[w]_{A_p}w(Q); balls
satisfy w(B(x,2r))<=(4 sqrt n)^{np}[w]_{A_p}w(B(x,r)). Deps: manifest list. One
missing cited supplier `def-muckenhoupt-a-p-and-a-one-weights` was detected by
depcheck and added to deps (file and manifest). Checks: precheck PASS,
proof-layout 0 defects, rendercheck OK. Decision accept.

### 15. lem-weighted-maximal-weak-bound-for-a-one (level 5)
Authored. w({Mf>lambda})<=5^n[w]_{A_1}lambda^{-1}||f||_{L^1(w)} for the centred
maximal function, with the factor 2^n for the uncentred form; Vitali covering of
level sets using A_1-regularity of w dlambda. Deps: manifest list; the cited
`def-weight-and-weighted-lp-space` was added to deps by depcheck repair.
Checks: precheck PASS, proof-layout 0 defects, rendercheck OK. Decision accept.

### 16. def-muckenhoupt-a-infinity-class (level 6)
Authored. A_infinity:=union_{1<=p<infinity} A_p, with the nesting consequence
and doubling recorded. Deps: manifest list. Its definitional "exactly when"
clause was recorded as a checked biconditional boundary in the proof contract
(boundary-audit flagged the initial not_applicable rows and they were corrected).
Checks: precheck n/a, proof-layout 0 steps, rendercheck OK. Decision accept.

### 17. def-weighted-maximal-function-relative-to-a-doubling-weight (level 6)
Authored. M^v and its cube form for a doubling weight, ball/cube comparability,
Borel measurability via continuous ball averages with the [thm-dominated-convergence]
repair-dep already recorded in the manifest. Deps: manifest list.
Checks: precheck n/a, proof-layout 0 steps, rendercheck OK. Decision accept.

### 18. thm-reverse-holder-self-improvement-for-a-p-weights (level 6)
Authored. Explicit beta, gamma=(1/2)(-log beta)/log(2^n/alpha) and constant C
with the normalised reverse Holder inequality; the theorem is the input to the
open-range corollary and to the A_infinity characterisation. Deps: manifest list;
`def-countable-choice` was added to deps after depcheck flagged the citation.
Checks: precheck PASS, proof-layout 0 defects, rendercheck OK. Decision accept.

### 19. ex-power-weight-a-p-range (level 6, B)
Authored. w=|x|^alpha is a weight iff alpha>-n, and w in A_p iff
-n<alpha<n(p-1), with the characteristic finite exactly in the open range.
Repair: the scaffold item depended on the B/examples-page item
`ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership`
(a forbidden load-bearing examples-page supplier) and contained a malformed
grouped wikilink into three targets; both were replaced by the local radial
computation using `thm-polar-coordinates-formula-for-lebesgue-measure`,
`thm-real-power-continuity-and-derivatives` and
`thm-comparison-test-for-improper-integrals`, and the duplicate
`thm-dominated-convergence` citation was removed. Checks: precheck PASS,
proof-layout 0 defects, rendercheck OK, depcheck clean. Decision repaired.

### 20. cor-a-p-classes-are-open-in-the-exponent (level 7)
Authored. The reverse Holder exponent of a witnessing A_p gives
p-epsilon=1+(p-1)/q<p with [w]_{A_{p-epsilon}}<=c^{p-1}[w]_{A_p}, hence
A_p=union_{1<r<p}A_r. Deps: manifest list; `def-countable-choice` added after
depcheck flagged the citation. Checks: precheck PASS, proof-layout 0 defects,
rendercheck OK. Decision accept.

### 21. lem-a-infinity-weights-satisfy-power-decay (level 7)
Authored. A reverse Holder pair (1+gamma,C_1) for a witnessing A_p yields power
decay with delta=gamma/(1+gamma) and C=C_1 via Holder. Schema repair: the
proof-like section heading was changed from `## Verification` to `## Proof`
(SCHEMA requires `## Proof` for a lemma); `def-countable-choice` was added to
deps after depcheck flagged the citation. Checks: precheck PASS, proof-layout
0 defects, rendercheck OK. Decision accept.

### 22. lem-weighted-maximal-function-is-weak-type-one-one (level 7)
Authored. v({M^v f>lambda})<=C(n,c_v)lambda^{-1}||f||_{L^1(v)} for doubling v,
with the Marcinkiewicz strong (q,q) consequence. Deps: manifest list plus
`def-weight-and-weighted-lp-space` (depcheck repair). Checks: precheck PASS,
proof-layout 0 defects, rendercheck OK. Decision accept.

### 23. cex-power-weight-fails-at-both-a-p-endpoints (level 7, B)
Authored. At alpha=n(p-1) the reciprocal-power integral diverges
logarithmically; at alpha=-n the weight is not locally integrable; hence the
admissible interval is open at both ends. Repair: the B/examples-page supplier
`ex-x-to-the-minus-a-...` was removed and replaced by the logarithmic
antiderivative `thm-logarithm-derivative-and-integral` with
`thm-real-power-continuity-and-derivatives` (depcheck clean afterwards).
Checks: precheck PASS, proof-layout 0 defects, rendercheck OK. Decision repaired.

### 24. ex-a-one-power-weight-range (level 7, B)
Authored. |x|^alpha lies in A_1 iff -n<alpha<=0, with the radial maximal
comparison for the closed subinterval and the failure at positive exponents and
non-local-integrability below -n. Deps: manifest list. Checks: precheck PASS,
proof-layout 0 defects, rendercheck OK. Decision accept.

### 25. ex-weighted-norm-of-an-interval-indicator (level 7, B)
Authored. On the line, ||1_{(0,r)}||_{L^p(w)}=(r^{alpha+1}/(alpha+1))^{1/p} for
-1<alpha<p-1, with the limiting behaviour and the divergence at alpha=-1.
Deps: manifest list. Checks: precheck PASS, proof-layout 0 defects,
rendercheck OK. Decision accept.

### 26. rem-a-doubling-weight-need-not-be-a-p (level 7, B)
Authored as a recorded, not-proved remark with `proved_here: false` and an
external source dependency (Grafakos Examples 7.1.6-7.1.7): doubling holds for
alpha>-n while A_p needs alpha<n(p-1). It is not a dependency target of any
item. Checks: precheck n/a, proof-layout 0 steps, rendercheck OK, extcheck still
exit 0 with the remark recognised as a cited remark. Decision accept.

### 27. lem-differentiation-of-l-one-functions-for-a-doubling-weight (level 8)
Authored (Dependent Choice). Lebesgue differentiation of L^1_loc(v) functions
for a doubling measure, along nicely shrinking ball/cube families; the
choice-carrying input for the reverse Holder lemma. Deps: manifest list.
Checks: precheck PASS, proof-layout 0 defects, rendercheck OK. Decision accept.

### 28. lem-kernel-tail-integrals-of-weighted-l-p-functions-are-finite (level 8)
Authored. Pointwise bound
int_{|y|>=eps}|k||f(x-y)|<=C(n,p,[w])A_1 w(Q(x,eps))^{-1/p}||f||_{L^p(w)} with
annular decomposition and power decay; consequence: truncations are defined
everywhere and Borel measurable. Repairs: the scaffold statement claimed
*continuous* functions of the centre, which the proof does not give and which is
false for general L^p(w) inputs; the item and manifest now state Borel
measurability. The canonical step numbering 1.1/1.2/2.1/3.1 was adopted and a
left-over forward self-reference in a step tag was corrected. Checks: precheck
PASS, proof-layout 0 defects, rendercheck OK. Decision repaired.

### 29. lem-weighted-good-lambda-inequality-for-maximal-truncations (level 8)
Authored. Power decay of A_infinity converts the unweighted local estimate into
w({T^{**}>2lambda} cap {Mf<=gamma lambda})<=C gamma^{delta'}w({T^{**}>lambda}),
and the same for T^*. Deps: manifest list. Checks: precheck PASS, proof-layout
0 defects, rendercheck OK. Decision accept.

### 30. thm-hardy-littlewood-maximal-operator-characterises-a-p (level 8)
Authored. M bounded on L^p(w) iff w in A_p for 1<p<infinity; sufficiency via
the dual weight and the weighted maximal function, necessity by testing balls.
Deps: manifest list plus `def-weight-and-weighted-lp-space` and
`def-axis-parallel-cube-averages-and-cube-maximal-functions` (depcheck repairs).
One duplicate citation (`def-maximal-truncated-singular-integral` inside [F1]
of `lem-unweighted-good-lambda-...`, an adjacent item) was removed during the
contract pass. Checks: precheck PASS, proof-layout 0 defects, rendercheck OK.
Decision accept.

### 31. lem-reverse-holder-from-a-distribution-estimate (level 9)
Authored (Dependent Choice). A density hypothesis on a doubling weight yields a
reverse Holder gain (h^q)^v averages bounded by the h-average, with the
stopping-time and layer-cake argument; supplier of the power-decay converse.
Checks: precheck PASS, proof-layout 0 defects, rendercheck OK. Decision accept.

### 32. thm-calderon-zygmund-operators-are-bounded-on-weighted-lp (level 9)
Rewritten after audit. The scaffolded extension step applied the dense-class
bound to the non-smooth truncations f_N = f 1_{|f|<=N} 1_{B(0,N)}, for which the
a priori finiteness of ||T^{**}f_N||_{L^p(w)} is not available; and the scaffolded
proof route used the operator T_delta^{(*)} which is defined nowhere in this
library. The item now proves: (1.1) for g in C_c^infinity the near-field
cancellation bound and far-field size bound give T^{**}g<=C_g(1+|x|)^{-n},
openness of level sets via the rational-parameter supremum, and finiteness of
||T^{**}g||_{L^p(w)} (p>1) and of the weak L^{1,infty}(w) norm (w in A_1) through
the maximal-function bounds applied to 1_{B(0,1)}; (2.1)-(3.1) layer-cake
splitting at 2 lambda with the weighted good-lambda inequality and absorption;
(3.2) the weak endpoint; (4.1) extension to f in L^p(w) by density of
C_c^infinity with the pointwise continuity of truncations provided by
`lem-kernel-tail-...` and Fatou; (5.1) the conditional dense-subspace clause.
Dependent Choice is now assumed (scaffold said Countable Choice) because the
published Radon-density theorem `thm-c-c-is-dense-in-l-p-for-radon-measures`
consumes DC; the statement and manifest record this. Checks: precheck PASS
after adopting the canonical numbering 1.1/2.1/2.2/3.1/4.1/5.1, proof-layout
0 defects, rendercheck OK. Decision repaired.

### 33. cor-hilbert-and-riesz-transforms-are-bounded-on-weighted-lp (level 10)
Authored. The Hilbert kernel 1/(pi x) (A_1=1/pi, A_2'=2/pi, A_3=0, B=1) and the
Riesz kernels c_n x_j/|x|^{n+1} (A_1=c_n, A_2'=c_n2^{n+1}(3n+4), A_3=0, B=1)
satisfy the weighted theorem's hypotheses, so the maximal truncations obey the
strong weighted bounds and the A_1 weak (1,1) bound; the truncations converge
a.e. on C_c^infinity (a Schwartz subclass) by the published convergence
corollary, so the weighted theorem's final clause gives the a.e. limit and the
bounded extension on L^p(w). Deps include the published convergence corollary,
the kernel estimate, the Hilbert/Riesz definitions and Dependent Choice.
Checks: precheck PASS after adopting canonical numbering 1.1/1.2/2.1,
proof-layout 0 defects, rendercheck OK. Decision accept.

### 34. lem-power-decay-implies-a-p-membership (level 10)
Authored (Dependent Choice). Power decay with C,delta gives the density
implication with alpha=1/2 and beta=1-min{1/2,(2C)^{-1/delta}}; the reverse
Holder lemma for the doubling weight w dlambda with h=w^{-1} yields q>1 and c,
and the exponent identity p=q/(q-1)=1+1/(q-1) converts the estimate into
[w]_{A_p}<=c^p. The normalisation was checked explicitly: the A_p product is
<w>_Q<w^{-gamma}>_Q^{1/gamma}, obtained from I^{1/q}<=c<w>^{-1} by multiplying
I^{1/gamma}<=c^p<w>^{-p} by <w>^p. Checks: precheck PASS, proof-layout
0 defects, rendercheck OK. Decision accept.

### 35. rem-weighted-endpoints-are-not-obtained-by-setting-p-equal-one (level 10)
Authored as a remark (no proof steps). Records three endpoint obstructions: the
undefined factor w^{-1/(p-1)} at p=1, the weak-type replacement for the maximal
function and for the CZ truncations, and the failure of strong (1,1) already for
w=1 via the published maximal counterexample. Checks: precheck n/a, proof-layout
0 steps, rendercheck OK. Decision accept.

### 36. thm-a-infinity-power-decay-characterisation (level 11)
Authored (Dependent Choice). Equivalence of A_infinity membership, power decay
and a reverse Holder inequality: (i)=>(ii) by the A_infinity power-decay lemma,
(ii)=>(i) by the newly proved converse lemma, (i)=>(iii) by reverse Holder
self-improvement and (iii)=>(ii) by Holder, giving the cycle. The Holder algebra
was corrected during authoring (int_Q w^{1+gamma}<=C^{1+gamma}w(Q)^{1+gamma}
|Q|^{-gamma}). Checks: precheck PASS after adopting the canonical numbering
1.1/1.2/1.3/1.4/2.1, proof-layout 0 defects, rendercheck OK. Decision accept.

## Final summary and handoff (2026-10-05)

**Completed IDs.** All 36 owned items are drafted on disk: the 31 A items of
`muckenhoupt-weights-and-weighted-estimates` and the 5 B items of
`muckenhoupt-weights-and-weighted-estimates-examples`, together with both
library pages (`library/fourier-analysis/muckenhoupt-weights-and-weighted-estimates.md`,
`...-examples.md`, both `status: draft`) and the batch proof contracts
`research/frontier-39-analysis-30-batch-8.proof-contracts.json` (36 entries,
scope = 36 IDs).

**Checks actually run (all with explicit paths, batch 8).**
- `node tools/tsx-run.mjs tools/precheck.mts <36 items>` → 29 checked, 0 failing
  (7 items are definitions/remarks with no numbered steps).
- `node tools/proof-layout.mjs <36 items>` → 36 items, 114 steps, 0 defects.
- `node tools/rendercheck.mjs <36 items + 2 pages>` → 38 files OK (KaTeX parse,
  no multiline displays, wikilinks outside math).
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-8.pages.json`
  → 36 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-8.pages.json`
  → 36 items, 0 errors; `node tools/audit-manifest.mjs ...` → 292 relationships,
  0 defects.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` →
  0 errors for this pair (the tool reports in-flight errors in other pairs,
  e.g. BMO and eigenvalue items, which are unrelated to batch 8).
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-8.coverage.json --require-destination`
  → 2 pages, 76 results, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-8.proof-contracts.json --strict`
  → 0 errors, 0 warnings, 36/36 items checked;
  `node tools/boundary-audit.mjs ... --fail-on-contradicted --fail-on-template`
  → exit 0 (no template clusters, no contradicted dispositions).
- `node tools/depcheck.mjs` → 0 lines for any of the 36 owned IDs (the repo-wide
  exit 1 and 946-error count belong to other in-flight pairs);
  `node tools/fwdcheck.mjs` → our items appear only as inherited annotations,
  no finding names one of them (exit 1 is repo-wide);
  `node tools/extcheck.mjs` → exit 0, the external remark is recognised as a
  cited remark with no proof.
- `node tools/step3-decisions.mjs record-item` → 36 receipts (29 accept, 7
  repaired), and a refreshed non-owner `sufficient` scope receipt was recorded
  after the local manifest repairs; `check --phase final` lists none of the 36
  owned items as outstanding work.

**Manifest and coverage sync.** `research/frontier-39-analysis-30-batch-8.pages.json`
rows were synced to the on-disk deps and dependency levels, and the statements of
the repaired items were updated to the true claims: the annulus lemma (delta>0
only, with the counterexample), the Whitney-type covering lemma (the
5-sqrt(n)-dilated family, since the scaffolded maximal-in-Ω family does not
exist), the weighted CZ theorem (Dependent Choice, and the dense-class proof
route), the unweighted good-lambda local estimate (explicit finiteness
hypothesis), the kernel-tail lemma (Borel measurability), and the A_p definition
(translation/dilation/scalar invariance). Coverage needed no row changes.

**Added suppliers.** No new published item was created outside the pair; every
non-owned dependency of the 36 items is an already published item (62 distinct
at Step 3a, plus the published convergence corollary and countability items
consumed by the new corollary). All wikilinks used in the final text are
declared in the item deps.

**Published concerns and cross-pair observations.** (1) The Step 3a observation
that four Kinnunen ch. 5 groups are deferred to
`bmo-john-nirenberg-and-h1-duality`, which does not harvest them, is unchanged
and still owner-routable; it is not a defect of this pair. (2) The scaffold for
this pair misdeclared Countable Choice in the weighted CZ theorem and used a
T_delta^{(*)} construction absent from the library; both are resolved here and
the choice ledger now records Dependent Choice in six items
(`lem-differentiation-...`, `lem-reverse-holder-...`,
`lem-power-decay-implies-...`, `thm-a-infinity-...`,
`thm-calderon-zygmund-...`, `cor-hilbert-and-riesz-...`) and Countable Choice
elsewhere. (3) The scaffold statements of
`lem-annulus-far-field-estimates-for-the-maximal-function` (delta=0 clause) and
`lem-maximal-dyadic-cubes-covering-a-proper-open-set` (maximal-in-Ω family) are
false as written; the items and manifest now carry the corrected claims, and
Step 4 should record the manifest statement amendments if the plan-spec mirrors
them.

**Open obligations.** None inside the pair: all items are fully authored, all
required Step-3 gates for batch 8 are green, supplier uses are reconciled, and
the decisions are recorded. Publication/commit remains an owner action, and the
two new pages are `status: draft`. The repo-wide depcheck/fwdcheck exits and the
other pairs' dependency-level errors are external to this dispatch and are left
to their owners.
