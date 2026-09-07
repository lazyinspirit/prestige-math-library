# frontier-33 batch 4 — scaffold evidence and obligations

Scope: only this batch's pages.json, coverage.json and notes.md. Read CLAUDE.md,
README.md, SCHEMA.md, beta-4 task, beta-batch task and FR-5 design in full.
No published content or workflow state changed.

Design/spec: manifest matches current spec orders 288.14018 / 288.1402 and
requires lacunary-fourier-series-and-sidon-sets-examples / own A page. FR-5
instead names FR-1, functional-analysis uniform boundedness and measure
convergence; preserve spec and refer this difference to drift. FR-5 states no
numeric order. Period-one torus, Haar mass one, negative-sign coefficients,
symmetric sums N >= 0 follow the published FR-1 definitions. Laugesen uses
period 2*pi and normalized measure; rescale t = 2*pi*x.

Reading completed: browser opened the complete 176-page Laugesen PDF,
647-page Grafakos PDF, and 53-page Lacey PDF. Exact ranges, source headings,
and dispositions are in coverage.json and the harvest discussion below.
Bounded text passages were read through their specified endpoints; screenshot
retrieval failed for Grafakos, but full-PDF extracted text was readable.

Local curl fails DNS (exit 6), and Node fetch fails EAI_AGAIN. These are
execution-network failures, not evidence that the browser-readable URLs are
actually dead. No source-fetch stamp has been fabricated. All three original
URLs are retained because the same full texts were available through browsing;
replacing sources to evade a DNS failure would not repair liveness.

Read exact published dependency statements, including the period-one Fourier
conventions, Dirichlet convolution formula, kernel formulas, Fejer positivity
and uniform/Lp convergence, operator norm, real C(K) completeness, uniform
boundedness and Baire dichotomy, Chebyshev, Dini, Riesz–Fischer, and Tonelli.
Uniform boundedness/dichotomy assume DC; Fejer Lp convergence and Dini assume
countable choice. Downstream local claims preserve those hypotheses.

All 14 scaffold records are complete and checkpointed below. Remaining
obligations are the mechanical source-fetch/liveness blocker and other-batch
whole-run policy failures, detailed in the final validator snapshot. No
mathematical authoring, independent review, or exact-hash approval is claimed.

## Completed scaffold: def-carleson-maximal-partial-sum-operator

For f in L1(T), define Cf(x)=sup over integers N>=0 of |S_N f(x)| in [0,infinity]. Each S_N is a continuous polynomial depending only on the L1 class; hence C is measurable and sublinear.

Dependencies: def-period-one-fourier-coefficients-partial-sums-and-convolution.
Sources: https://arxiv.org/pdf/0903.3845 — ch. 8, pp. 51–52, Theorem 8.7 discussion.
Strategy/conventions: Define the countable supremum; measurability and sublinearity follow directly from finite Fourier sums. Use period one and normalized Haar measure.
Scaffold complete; mathematical authoring and proof checks belong to step 5. Validator results below.

## Completed scaffold: lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant

For every N>=0 and every prescribed x0 in T, both the functional f -> S_N f(x0) on C(T) and S_N:C(T)->C(T) have norm integral_T |D_N|. This holds for real or complex continuous functions. These norms are unbounded as N tends to infinity; more precisely they are at least c log(N+1) for some absolute c>0 and N>=1.

Dependencies: lem-fourier-partial-sums-are-dirichlet-convolutions, def-dirichlet-and-fejer-kernels, def-operator-norm, lem-closed-form-and-size-bounds-for-the-dirichlet-kernel.
Sources: https://arxiv.org/pdf/0903.3845 — ch. 8, Theorem 8.2 proof pp. 48–49; ch. 9, Example 9.3 pp. 54–55; https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf — §3.4.3, Proposition 3.4.6 proof, p. 211, harmonic-sum lower estimate.
Strategy/conventions: Upper bound by the convolution integral. For the lower bound use the real continuous test f_delta(u)=D_N(x0-u)/max(delta,|D_N(x0-u)|). Its norm is at most one and the integral differs from integral |D_N| by at most delta. No discontinuous sign function is admitted as a continuous test. Include the necessary lower-bound calculation inline: for m=0,...,N-1 integrate over [(m+1/6)/(2N+1),(m+5/6)/(2N+1)] where |sin((2N+1)pi t)|>=1/2 and sin(pi t)<=pi t. Sum the resulting logarithms, bounded below by a constant times sum_{m=0}^{N-1}1/(m+1). This is explicitly reused mathematical content because the published Lebesgue-constant item is B-homed and unavailable as a logical target; do not mint a second growth theorem.
Scaffold complete; mathematical authoring and proof checks belong to step 5. Validator results below.

## Completed scaffold: cex-continuous-function-with-divergent-fourier-series-at-a-point

Assume DC. For every x0 in T there exists a real continuous periodic f with sup_N |S_N f(x0)|=infinity.

Dependencies: lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant, thm-uniform-boundedness-principle, thm-c-k-complete-in-the-sup-metric, thm-dini-pointwise-convergence-criterion-for-fourier-series.
Sources: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf — §3.4.3, Proposition 3.4.6(a), pp. 210–211.
Strategy/conventions: Work on the closed subspace {f in C([0,1],R): f(0)=f(1)}; completeness follows from the published real C(K) theorem and preservation of endpoint equality under uniform limits. Apply uniform boundedness contrapositively to the evaluation functionals from the norm lemma. Carry DC explicitly. This is the single canonical du Bois-Reymond witness. Include the harvested localization observation: a function vanishing near x0 satisfies the published Dini criterion with s=0, so the divergent witness cannot do so.
Scaffold complete; mathematical authoring and proof checks belong to step 5. Validator results below.

## Completed scaffold: lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence

Assume countable choice. Fix 1<=p<infinity. If a finite A satisfies m{Cg>lambda} <= A lambda^(-p) ||g||_p^p for every g in Lp(T) and lambda>0, then S_N f -> f almost everywhere for every f in Lp(T).

Dependencies: def-carleson-maximal-partial-sum-operator, thm-fejer-convergence-in-lp, thm-chebyshev-markov-inequality-for-the-integral.
Sources: https://arxiv.org/pdf/0903.3845 — Theorem 6.4 and Remark 6.5, p. 37 (specialized to Fourier sums and p=q).
Strategy/conventions: Take the explicit polynomial approximants Q_j=sigma_j f, which tend to f in Lp. Orthogonality of finite characters gives S_N Q_j=Q_j for large N. Thus limsup_N |S_N f-f| <= C(f-Q_j)+|f-Q_j|. Bound the measure where this exceeds 2 lambda by (A+1)lambda^(-p)||f-Q_j||_p^p, let j grow, then take lambda=1/m. Include measurability of the limsup and countable null union inline.
Scaffold complete; mathematical authoring and proof checks belong to step 5. Validator results below.

## Completed scaffold: rem-kolmogorov-block-polynomials-have-large-partial-sum-maxima

For each integer M>=1 there are a nonnegative trigonometric polynomial g_M with ||g_M||_1=1 and a measurable A_M with m(A_M)>1-2^(-M), such that inf over x in A_M of sup_{N>=1}|S_N g_M(x)|>2^M.

Dependencies: def-carleson-maximal-partial-sum-operator.
Sources: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf — §4.2.1, Lemmas 4.2.2–4.2.4, pp. 255–259, especially (4.2.6).
Strategy/conventions: Record the exact integer version of Grafakos Lemma 4.2.4; nonnegativity is supplied by its Fejer-smoothed positive measure construction. The word block does not assert disjoint frequency support. Explain the source’s Kronecker alignment and probability-measure lemmas as unproved construction costs, not available local facts.
Recorded-not-proved: Read the Kronecker proof, atomic probability measures and finite-maximal truncation followed by Fejer smoothing. This requires its rational-independence construction and uniform phase approximation; the design explicitly withholds this multi-lemma proof. No fabricated short proof or logical edge to an unproved lemma is planned.
Scaffold complete; mathematical authoring and proof checks belong to step 5. Validator results below.

## Completed scaffold: rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere

There exists f in L1(T) for which sup_{N>=0}|S_N f(x)|=infinity for almost every x. In particular the Fourier series diverges almost everywhere.

Dependencies: def-carleson-maximal-partial-sum-operator.
Sources: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf — §4.2.1, Theorem 4.2.1 and (4.2.7)–(4.2.13), pp. 255–261.
Strategy/conventions: Record the almost-everywhere assertion proved by Grafakos (4.2.13); do not replace it by everywhere divergence. Describe the weighted sum of polynomials and separate early-term and tail control as source architecture, not a local proof.
External mentions (not deps): rem-kolmogorov-block-polynomials-have-large-partial-sum-maxima.
Recorded-not-proved: Read the full summation construction through (4.2.13). It depends on the unsupplied polynomial lemma. The design explicitly keeps the entire Kolmogorov theorem external, so the polynomial lemma is an external mention, never a deps edge.
Scaffold complete; mathematical authoring and proof checks belong to step 5. Validator results below.

## Completed scaffold: rem-carleson-hunt-almost-everywhere-convergence

For each 1<p<infinity there is a finite C_p such that ||Cf||_p <= C_p||f||_p for every f in Lp(T). Consequently S_N f(x)->f(x) almost everywhere. Carleson established p=2 and Hunt the full open range.

Dependencies: def-carleson-maximal-partial-sum-operator.
Sources: https://arxiv.org/pdf/0903.3845 — ch. 8, Theorem 8.7 and omitted-proof discussion, pp. 51–52.
Strategy/conventions: State both the maximal estimate and convergence consequence; p=1 is excluded. This is recorded literature, with no local time-frequency proof. Do not mistake sup_N ||S_N f||_p for ||sup_N |S_N f|||_p.
Recorded-not-proved: The dense-polynomial closure is isolated locally in the weak-bound lemma. It cannot supply the missing maximal estimate. Read Lacey §3’s size, density and tree machinery and §7’s opening; FR-5 explicitly keeps the deep estimate external.
Scaffold complete; mathematical authoring and proof checks belong to step 5. Validator results below.

## Completed scaffold: cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one

Assume countable choice and fix 1<p<infinity. Under the explicit hypothesis that ||Cg||_p<=C_p||g||_p for all g in Lp(T), every f in Lp(T) has S_N f->f almost everywhere.

Dependencies: lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence, thm-chebyshev-markov-inequality-for-the-integral.
Sources: https://arxiv.org/pdf/0903.3845 — ch. 8, p. 52, closure route after Theorem 8.7.
Strategy/conventions: Apply Chebyshev to |Cg|^p to obtain the weak estimate with A=C_p^p, then apply the proved weak-bound lemma. State the estimate as a hypothesis; the external Carleson–Hunt record is a bibliographic mention only, not a discharged local assumption.
External mentions (not deps): rem-carleson-hunt-almost-everywhere-convergence.
Scaffold complete; mathematical authoring and proof checks belong to step 5. Validator results below.

## Completed scaffold: rem-proof-cost-of-the-carleson-hunt-theorem

In the Lacey–Thiele route, a time-frequency decomposition leads to trees and separate density, size and tree estimates; balancing the scales gives a summable series. The Lp extension uses exceptional-set control. These mechanisms have not been proved on this page.

Dependencies: [].
Sources: https://arxiv.org/pdf/math/0307008 — §3 before §3.1, pp. 11–14; §7 opening and §7.2 opening through (7.9), pp. 24–26.
Strategy/conventions: Give a sourced proof roadmap only. Specify one proof route, not a claim that all possible proofs must have this architecture. Lacey uses a real-line model; no real-line-to-torus transference theorem is claimed locally.
External mentions (not deps): rem-carleson-hunt-almost-everywhere-convergence.
Scaffold complete; mathematical authoring and proof checks belong to step 5. Validator results below.

## Completed scaffold: rem-the-lone-endpoint-is-excluded-from-carleson-hunt

Assume countable choice. The recorded Kolmogorov result rules out almost-everywhere convergence for all L1 functions and, by the proved conditional maximal principle, rules out a weak (1,1) Carleson bound. Strong (1,1) would imply weak (1,1). This paragraph is an interpretation of the recorded theorem, not an independently proved endpoint theorem.

Dependencies: lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence, thm-chebyshev-markov-inequality-for-the-integral.
Sources: https://arxiv.org/pdf/0903.3845 — ch. 8, Theorems 8.1 and 8.7 endpoint discussion, pp. 47 and 51–52.
Strategy/conventions: Keep the dependence on the unproved existence statement visible in prose and external_refs. Compare pointwise failure for continuous functions with almost-everywhere failure in L1 without conflating them.
External mentions (not deps): rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere, rem-carleson-hunt-almost-everywhere-convergence.
Scaffold complete; mathematical authoring and proof checks belong to step 5. Validator results below.

## Completed scaffold: ex-fourier-partial-sum-operators-and-uniform-boundedness

Assume DC. In the real Banach space C(T), the set {f: sup_N |S_N f(0)|=infinity} is a dense G_delta.

Dependencies: lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant, thm-banach-steinhaus-dichotomy, thm-c-k-complete-in-the-sup-metric.
Sources: https://arxiv.org/pdf/0903.3845 — ch. 8, Theorem 8.2 pp. 48–49, with published Banach–Steinhaus dichotomy.
Strategy/conventions: Apply the published Baire dichotomy to T_N f=S_N f(0). Explain the closed periodic subspace as for the A-page witness and display the set as intersection_m union_N {f:|T_N f|>m}. Do not replace residuality in function space by a claim about almost every point of the torus. The unbounded functional norms are now part of the preceding norm lemma, so no B-page dependency is used.
Scaffold complete; mathematical authoring and proof checks belong to step 5. Validator results below.

## Completed scaffold: cex-continuous-fourier-series-need-not-converge-everywhere

Assume DC. There is a real continuous periodic f whose Fejer means converge uniformly to f but whose ordinary Fourier sums are unbounded at zero.

Dependencies: cex-continuous-function-with-divergent-fourier-series-at-a-point, thm-fejer-uniform-convergence-for-continuous-periodic-functions.
Sources: https://arxiv.org/pdf/0903.3845 — ch. 8, Theorem 8.2 pp. 48–49; published FR-1 Fejer theorem.
Strategy/conventions: Use the single A-page witness and apply the published uniform Fejer theorem. Refute the inference from uniform Cesaro convergence to ordinary pointwise convergence. Do not repeat the A-page existence claim under a second theorem label.
Scaffold complete; mathematical authoring and proof checks belong to step 5. Validator results below.

## Completed scaffold: rem-lone-fourier-series-can-diverge-almost-everywhere

For the recorded Kolmogorov witness, its L1 membership is compatible with almost-everywhere divergence. Comparing the two recorded theorems shows that this witness cannot belong to any Lp(T) with p>1. No formula or local verification of that witness is supplied.

Dependencies: [].
Sources: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf — §4.2.1, Theorem 4.2.1 pp. 255–261; Laugesen Theorem 8.7 pp. 51–52.
Strategy/conventions: Interpret the same external witness rather than minting a duplicate unproved counterexample. The exclusion from each Lp is a comparison of external assertions, explicitly labeled as such.
External mentions (not deps): rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere, rem-carleson-hunt-almost-everywhere-convergence.
Scaffold complete; mathematical authoring and proof checks belong to step 5. Validator results below.

## Completed scaffold: cex-carleson-maximal-operator-is-not-strong-type-one-one

For every A>0 there is a nonnegative trigonometric polynomial f with ||f||_1=1 and ||Cf||_1>A. Thus no uniform strong (1,1) estimate exists.

Dependencies: def-carleson-maximal-partial-sum-operator, lem-fejer-kernel-is-a-positive-approximate-identity, thm-fejer-uniform-convergence-for-continuous-periodic-functions, lem-fourier-partial-sums-are-dirichlet-convolutions, lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant, thm-riesz-fischer-completeness-of-l-p, thm-uniform-boundedness-principle, thm-tonelli-theorem-for-sigma-finite-product-spaces.
Sources: https://arxiv.org/pdf/0903.3845 — ch. 9, Example 9.4, p. 55.
Strategy/conventions: Choose N with ||D_N||_1>A+1. For f=F_K, finite Fourier sums give S_N F_K=F_K*D_N=sigma_K D_N -> D_N uniformly as K grows. Hence ||C F_K||_1>=||S_N F_K||_1>A for large K while ||F_K||_1=1. This supplies a local endpoint counterexample without using Kolmogorov as a hidden logical prerequisite. As an inline consequence under DC, ||S_N:L1->L1||>=||D_N||_1 is unbounded, so Riesz–Fischer completeness and uniform boundedness give an integrable h with sup_N||S_N h||_1=infinity. Check each S_N is bounded by the convolution integral and Tonelli. This norm consequence is distinct from a.e. divergence.
Scaffold complete; mathematical authoring and proof checks belong to step 5. Validator results below.

## Harvest and boundary reconciliation

Completed full Laugesen chapter 8 pp. 47–52, Theorem 6.4 proof p. 37,
Norm Estimates/Examples 9.3–9.4 pp. 54–55; Grafakos §3.4.3 pp. 210–211 and
§4.2.1 pp. 255–261 through (4.2.13). The design's “§4.2.1 pp. 255–270”
overruns the actual subsection: §4.2.2 starts on p. 261. Its heading and
Theorem 4.2.5 statement were read for the specific out-of-scope disposition;
no claim to have read its proof. Do not remove the one-dimensional lemmas.

Lacey full PDF https://arxiv.org/pdf/math/0307008 has 53 pages. Read contents,
§1 pp. 2–4, §3 before §3.1 pp. 11–14, §7 opening/§7.1 pp. 24–26 and
§7.2 opening through (7.9), p. 26. This is a proof-architecture harvest,
not a claim of reading or supplying the complete Carleson proof. Each named
result in those exact ranges has a coverage row. Browser verification is
separate from the still-required byte/hash source-fetch stamp.

SCHEMA reconciliation: FR-5 explicitly says Kolmogorov/block/Carleson–Hunt
proofs are not supplied. SCHEMA requires recorded-not-proved items to have
remark kind. Use unused rem- counterparts of the design's lem-/thm- names,
with proved_here:false, not-supplied proof provenance, structured external
records and precheck:n/a. No deep mathematical statement was dropped.
The convergence corollary proves the implication from an EXPLICIT maximal
hypothesis; it cannot silently use an external remark as a logical axiom.
The unconditional theorem remains in the Carleson–Hunt literature record.

No duplicate continuous-existence theorem: retain the exact reserved
cex-continuous-function-with-divergent-fourier-series-at-a-point on A.
The B counterexample adds uniform Fejer convergence, explicitly refuting
Cesaro-to-ordinary convergence. The B Kolmogorov leaf becomes a remark
interpreting membership at the endpoint and the two recorded theorems,
not a second unproved witness theorem. Strong (1,1) failure receives the
independent, fully local Fejer-kernel test proof from Laugesen Example 9.4.

Inline obligations from harvest: the block remark must spell out rational
independence/phase-approximation (G Lemma 4.2.2) and the atomic probability
measure maximal lower bound (4.2.3), explicitly as unproved source machinery.
G's text calls the rational linear span a “field extension”; only its
countability/linear-span property is used, so do not repeat the erroneous
terminology. No disjoint-frequency assertion is supplied by Lemma 4.2.4.
The continuous witness discussion includes the immediate Dini localization
observation: vanishing near its bad point is impossible. The published
Dini criterion is an explicit dependency for that observation. The strong-L1 leaf
includes the contextual uniform-boundedness consequence: under DC some
integrable function has unbounded L1 norms of its partial sums (source 9.4).
This is not Kolmogorov a.e. divergence. Completeness of L1, uniform boundedness and Tonelli are explicit
dependencies for this short inline consequence; retain its DC qualification.

Size: 10 A items, 4 B items. No split required; no size-driven deletion.
Manifest inline dependency alignment is complete. Required gate outcomes
are recorded below; mathematical authoring remains assigned to step 5.

## Validator-driven dependency repair

Preliminary overlay validate-plan found exactly three errors, all B-leaf uses
of thm-lebesgue-constants-grow-logarithmically. It is published but homed on
`dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples`.
Published-home repair is outside batch authorization. The norm lemma now
includes its own elementary harmonic-sum lower estimate, supported by the
read G Proposition 3.4.6 proof and the published closed kernel formula.
This overlap is deliberate and disclosed: it is the short calculation needed
by the distinct functional/operator-norm statement, not a newly minted copy
of the growth theorem. All three downstream edges now use that A-page lemma.
No mathematics was removed to clear the gate.

Read the full statements of thm-c-k-complete-in-the-sup-metric,
thm-riesz-fischer-completeness-of-l-p, and the published symmetric Dini
criterion. Dini’s countable choice is covered by the witness’s DC hypothesis.
The strong-L1 leaf also carries completeness, uniform boundedness and Tonelli
for the inline norm-divergence consequence, explicitly under DC.

Coverage warning: 14/40 included rows is below the heuristic 40% ratio.
Most remaining rows are inline proof-cost components in the three required
literature records, or already-published convergence criteria. This accurately
reflects the design boundary; do not relabel rows or pad to silence it.

## Final validator snapshot

### coverage — exit 0

```text
coverage-checklist: 1 page(s), 40 harvested result(s), 0 error(s), 1 warning(s)
WARN coverage-low-yield [divergence-and-almost-everywhere-convergence-of-fourier-series]: frontier-33-batch-4.coverage.json: divergence-and-almost-everywhere-convergence-of-fourier-series: 14/40 harvested results scaffolded; confirm the declines with Alpha
```

### batch content policy — exit 0

```text
content-policy: 14 scoped item(s), 0 error(s), 0 warning(s)
```

### whole-run content policy — exit 1

```text
content-policy: 647 scoped item(s), 9 error(s), 0 warning(s)
ERROR batch-dependency-missing [def-compactly-supported-differential-form]: def-compactly-supported-differential-form depends on def-compactness-open-cover, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-kernel-range-annihilator-identities]: thm-kernel-range-annihilator-identities depends on def-weak-star-topology, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-kernel-range-annihilator-identities]: thm-kernel-range-annihilator-identities depends on thm-bipolar-closure-for-linear-subspaces, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-localization-of-a-category-at-a-class-of-morphisms]: def-localization-of-a-category-at-a-class-of-morphisms depends on def-functor, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms]: lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms depends on def-flat-module, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-regular-local-rings-are-domains-and-cohen-macaulay]: thm-regular-local-rings-are-domains-and-cohen-macaulay depends on def-cohen-macaulay-module-and-ring, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-polynomial-local-regularity-fibre-step]: lem-polynomial-local-regularity-fibre-step depends on thm-euclidean-domain-implies-pid, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-normal-noetherian-ring]: def-normal-noetherian-ring depends on def-integrally-closed-domain, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-total-ring-of-fractions]: def-total-ring-of-fractions depends on def-localisation-of-a-commutative-ring, which is neither declared by this batch nor an item on disk
```

### validate-plan current spec — exit 0

```text
plan: 1360 pages (675 A + 675 B + 5 already published), 14200 new items, 15190 existing ids available
item lists written for 844/1355 planned pages — the rest are validated at PAGE level only
681 warning(s):
OK — declared page order is acyclic and consistent; no item-level cycles, forward
NOTE: 511 planned page(s) carry no item list yet (marked * above). Their reading
```

### validate-plan owned overlay — exit 0

```text
plan: 1360 pages (675 A + 675 B + 5 already published), 14214 new items, 15190 existing ids available
item lists written for 846/1355 planned pages — the rest are validated at PAGE level only
681 warning(s):
OK — declared page order is acyclic and consistent; no item-level cycles, forward
NOTE: 509 planned page(s) carry no item list yet (marked * above). Their reading
```

### source-fetch gate — exit 1

```text
source-fetch-check: 0/3 source(s) fetch-verified, 3 FAILED
ERROR fetch-check-unstamped: divergence-and-almost-everywhere-convergence-of-fourier-series: https://arxiv.org/pdf/0903.3845
ERROR fetch-check-unstamped: divergence-and-almost-everywhere-convergence-of-fourier-series: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
ERROR fetch-check-unstamped: divergence-and-almost-everywhere-convergence-of-fourier-series: https://arxiv.org/pdf/math/0307008
```

Owned manifest SHA-256: `5629dd65ba5f326638936aceeb80648917672510042f6218a97ac54720189cbb`

Coverage SHA-256: `9ef78d141de88d3d029198856f5ff63478c5e5e36c37f2ea401c4dba06b3d5eb`

## URL recovery/liveness evidence and remaining work

Ran `node tools/source-fetch-check.mjs --coverage
research/frontier-33-batch-4.coverage.json --stamp --timeout-sec 10`:
exit 1; all three URLs failed EAI_AGAIN; 0/3 stamps, none written.

Ran `node tools/url-sweep.mjs --coverage
research/frontier-33-batch-4.coverage.json --out /dev/stdout --recover
--fail-on-dead --timeout-ms 1000`: exit 1; 0/3 live, 3 failed,
0 recovered, 0 suspect. Output timestamp 2026-09-06T19:05:13.718Z.

| Exact URL | Local failure | Recovery outcome |
|---|---|---|
| https://arxiv.org/pdf/0903.3845 | curl (6), could not resolve arxiv.org | No archive result obtainable |
| https://arxiv.org/pdf/math/0307008 | curl (6), could not resolve arxiv.org | No archive result obtainable |
| https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf | curl (6), could not resolve www.math.stonybrook.edu | No archive result obtainable |

The tool's generic “re-sourcing is justified” message cannot establish that
these documents are unavailable: its DNS transport failed, while browser
full-text access succeeded. Consequently there is no source replacement and
no original_url migration. Coverage preserves every harvested result.

Readiness: NOT READY under the required validators. Owned content-policy and
owned-overlay validate-plan pass. Coverage passes with the explained warning.
Whole-run policy has nine errors in other owners' files at the recorded
snapshot; do not repair them here. Source-fetch and URL liveness require a
working local network transport before stamps can be established. Next action
for the driver is to rerun the exact source-fetch stamp and URL recovery checks
when that transport is available, then whole-run content policy after the
other batches repair their listed unresolved IDs. No permission request,
workflow-state edit, plan splice, or published-content edit was made.

## Step-3 fix pass

### Review finding ID: none assigned

Disposition: confirmed already applied; no new finding number has been
invented. The group-A review's sole batch-4 correction says that
`rem-the-lone-endpoint-is-excluded-from-carleson-hunt` must begin “Assume
countable choice.” The current manifest carries that exact qualification and
retains the two closure dependencies
`lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence` and
`thm-chebyshev-markov-inequality-for-the-integral`. Thus it matches the
conditional maximal-principle record rather than silently treating the
countable-null-union step as choice-free.

Evidence: Laugesen, *Harmonic Analysis Lecture Notes*,
https://arxiv.org/pdf/0903.3845, Theorem 6.4 and Remark 6.5, p. 37, gives the
weak-maximal-to-a.e.-closure route; Theorems 8.1 and 8.7, pp. 47 and 51–52,
separate the Kolmogorov endpoint failure from the strict range
$1<p<\infty$. Lacey, *Carleson's Theorem: Proof, Complements, Variations*,
https://arxiv.org/pdf/math/0307008, Proposition 1.4, pp. 3–4, independently
uses the same limsup/maximal-approximation closure pattern. The corresponding
full PDF ranges were re-read in bounded chunks through the browser. The
Grafakos textbook source,
https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf,
Proposition 3.4.6(a), pp. 210–211, and §4.2.1, pp. 255–261, confirms the
separate continuous-point and integrable-a.e. divergence records. In
particular Lemma 4.2.4's Fejer smoothing proof supplies the recorded
nonnegative unit-$L^1$ polynomial block, without adding a logical edge to that
external construction.

Changed scaffold record: none in this pass. The qualifying text was already
present in `research/frontier-33-batch-4.pages.json`; its stable id, kind,
dependencies, sources, and external references remain unchanged. The review
returns batch 4 as `sufficient`, and it contains no additional finding id or
requested repair to apply or push back on. All 14 manifest objects retain an
explicit `deps` array.

### Source and validator receipt

The coverage ledger remains source-grounded and unchanged: its three direct
full-text URLs have retained fetch stamps (L: `b1ef00490b91e492`; G:
`38c219d3c9013a85`; LT: `7f51f7ef76f29fe3`). A normal
`source-fetch-check` revalidated these stored stamps as `3/3`.
`source-fetch-check --stamp --force --timeout-sec 30` then attempted a fresh
direct Node fetch of each URL and received `EAI_AGAIN` for all three hosts; it
made no stamp or harvest change. This is a local DNS-transport failure, not a
source failure: the same HTTPS full PDFs were live and read through the browser
in this pass. No source was removed, replaced, or re-attributed, and no
unverified archive provenance has been added.

- `coverage-checklist --require-destination`: exit 0; 40 harvested results,
  0 errors, with the already-reviewed 14/40 low-yield warning.
- `manifest-deps`: exit 0; 14 items and 0 missing dependency arrays.
- whole-run `content-policy --manifest-only` over batches 1–20: exit 0;
  923 scoped items, 0 errors, 0 warnings.
- `splice-plan --dry-run --run frontier-33 --batch 4`: exit 0; 2 pages and
  14 new items, with no reused or unresolved item.
- `validate-plan research/plan-spec.json`: exit 0; declared order acyclic and
  no item-cycle, forward-reference, B-page dependency, or unresolved-id error
  among the written item lists. Its repository-wide redundant-prerequisite
  notices are warnings outside this batch.

Next action: Step 5 may author the fixed, dependency-closed 10-item A page and
4-item B page. A later source-gate run may retry a forced direct fetch when the
local DNS resolver is available; no scaffold or source-repair action remains
for batch 4.

## Step-5 authoring

Read the exact batch inputs, group-a sufficient verdict and scaffold review, schema, proof-contract validator, FR-5 design and current dependency statements. The design/spec prerequisite discrepancy is retained for drift; the current spec governs. All 14 owned item files and the contract were initially absent. Browser full PDFs were accessible (Grafakos needed a retry); direct curl failed DNS and screenshots failed cache retrieval. Mathematical evidence below uses the readable full-PDF text, not the failed transports. No prior-run substitute, state change, publication, judge stamp or independent-review alteration is made.

### Authored `def-carleson-maximal-partial-sum-operator`

Claim: For f in L1(T), define Cf(x)=sup over integers N>=0 of |S_N f(x)| in [0,infinity]. Each S_N is a continuous polynomial depending only on the L1 class; hence C is measurable and sublinear.

Conventions: period-one torus; normalized Haar mass one; symmetric sums indexed by integers N >= 0.

Sources read: https://arxiv.org/pdf/0903.3845 — ch. 8, pp. 51–52, Theorem 8.7 discussion.

Dependencies: def-period-one-fourier-coefficients-partial-sums-and-convolution. External mentions: none.

Decision/provenance: Define the countable supremum; measurability and sublinearity follow directly from finite Fourier sums. Use period one and normalized Haar measure. Statement literature-derived; proof not-applicable. No generated statement or judge record.

Current state: draft written. Mathematical obligations in this item discharged locally or explicitly retained as recorded literature, as designated above. Focused validators pending; next action: finish remaining assigned artifacts, then run required checks.

### Authored `lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant`

Claim: For every N>=0 and every prescribed x0 in T, both the functional f -> S_N f(x0) on C(T) and S_N:C(T)->C(T) have norm integral_T |D_N|. This holds for real or complex continuous functions. These norms are unbounded as N tends to infinity; more precisely they are at least c log(N+1) for some absolute c>0 and N>=1.

Conventions: period-one torus; normalized Haar mass one; symmetric sums indexed by integers N >= 0.

Sources read: https://arxiv.org/pdf/0903.3845 — ch. 8, Theorem 8.2 proof pp. 48–49; ch. 9, Example 9.3 pp. 54–55; https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf — §3.4.3, Proposition 3.4.6 proof, p. 211, harmonic-sum lower estimate.

Dependencies: lem-fourier-partial-sums-are-dirichlet-convolutions, def-dirichlet-and-fejer-kernels, def-operator-norm, lem-closed-form-and-size-bounds-for-the-dirichlet-kernel. External mentions: none.

Decision/provenance: Upper bound by the convolution integral. For the lower bound use the real continuous test f_delta(u)=D_N(x0-u)/max(delta,|D_N(x0-u)|). Its norm is at most one and the integral differs from integral |D_N| by at most delta. No discontinuous sign function is admitted as a continuous test. Include the necessary lower-bound calculation inline: for m=0,...,N-1 integrate over [(m+1/6)/(2N+1),(m+5/6)/(2N+1)] where |sin((2N+1)pi t)|>=1/2 and sin(pi t)<=pi t. Sum the resulting logarithms, bounded below by a constant times sum_{m=0}^{N-1}1/(m+1). This is explicitly reused mathematical content because the published Lebesgue-constant item is B-homed and unavailable as a logical target; do not mint a second growth theorem. Statement literature-derived; proof ai-altered. No generated statement or judge record.

Current state: draft written; exact citation/step contract and item-specific boundary worksheet written. Mathematical obligations in this item discharged locally or explicitly retained as recorded literature, as designated above. Focused validators pending; next action: finish remaining assigned artifacts, then run required checks.

### Authored `cex-continuous-function-with-divergent-fourier-series-at-a-point`

Claim: Assume DC. For every x0 in T there exists a real continuous periodic f with sup_N |S_N f(x0)|=infinity.

Conventions: period-one torus; normalized Haar mass one; symmetric sums indexed by integers N >= 0.

Sources read: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf — §3.4.3, Proposition 3.4.6(a), pp. 210–211.

Dependencies: lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant, thm-uniform-boundedness-principle, thm-c-k-complete-in-the-sup-metric, thm-dini-pointwise-convergence-criterion-for-fourier-series. External mentions: none.

Decision/provenance: Work on the closed subspace {f in C([0,1],R): f(0)=f(1)}; completeness follows from the published real C(K) theorem and preservation of endpoint equality under uniform limits. Apply uniform boundedness contrapositively to the evaluation functionals from the norm lemma. Carry DC explicitly. This is the single canonical du Bois-Reymond witness. Include the harvested localization observation: a function vanishing near x0 satisfies the published Dini criterion with s=0, so the divergent witness cannot do so. Statement literature-derived; proof ai-altered. No generated statement or judge record.

Current state: draft written; exact citation/step contract and item-specific boundary worksheet written. Mathematical obligations in this item discharged locally or explicitly retained as recorded literature, as designated above. Focused validators pending; next action: finish remaining assigned artifacts, then run required checks.

### Authored `lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence`

Claim: Assume countable choice. Fix 1<=p<infinity. If a finite A satisfies m{Cg>lambda} <= A lambda^(-p) ||g||_p^p for every g in Lp(T) and lambda>0, then S_N f -> f almost everywhere for every f in Lp(T).

Conventions: period-one torus; normalized Haar mass one; symmetric sums indexed by integers N >= 0.

Sources read: https://arxiv.org/pdf/0903.3845 — Theorem 6.4 and Remark 6.5, p. 37 (specialized to Fourier sums and p=q).

Dependencies: def-carleson-maximal-partial-sum-operator, thm-fejer-convergence-in-lp, thm-chebyshev-markov-inequality-for-the-integral. External mentions: none.

Decision/provenance: Take the explicit polynomial approximants Q_j=sigma_j f, which tend to f in Lp. Orthogonality of finite characters gives S_N Q_j=Q_j for large N. Thus limsup_N |S_N f-f| <= C(f-Q_j)+|f-Q_j|. Bound the measure where this exceeds 2 lambda by (A+1)lambda^(-p)||f-Q_j||_p^p, let j grow, then take lambda=1/m. Include measurability of the limsup and countable null union inline. Statement literature-derived; proof ai-altered. No generated statement or judge record.

Current state: draft written; exact citation/step contract and item-specific boundary worksheet written. Mathematical obligations in this item discharged locally or explicitly retained as recorded literature, as designated above. Focused validators pending; next action: finish remaining assigned artifacts, then run required checks.

### Authored `rem-kolmogorov-block-polynomials-have-large-partial-sum-maxima`

Claim: For each integer M>=1 there are a nonnegative trigonometric polynomial g_M with ||g_M||_1=1 and a measurable A_M with m(A_M)>1-2^(-M), such that inf over x in A_M of sup_{N>=1}|S_N g_M(x)|>2^M.

Conventions: period-one torus; normalized Haar mass one; symmetric sums indexed by integers N >= 0.

Sources read: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf — §4.2.1, Lemmas 4.2.2–4.2.4, pp. 255–259, especially (4.2.6).

Dependencies: def-carleson-maximal-partial-sum-operator. External mentions: none.

Decision/provenance: Record the exact integer version of Grafakos Lemma 4.2.4; nonnegativity is supplied by its Fejer-smoothed positive measure construction. The word block does not assert disjoint frequency support. Explain the source’s Kronecker alignment and probability-measure lemmas as unproved construction costs, not available local facts. Statement literature-derived; proof not-supplied. No generated statement or judge record.

Current state: draft written. Mathematical obligations in this item discharged locally or explicitly retained as recorded literature, as designated above. Focused validators pending; next action: finish remaining assigned artifacts, then run required checks.

### Authored `rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere`

Claim: There exists f in L1(T) for which sup_{N>=0}|S_N f(x)|=infinity for almost every x. In particular the Fourier series diverges almost everywhere.

Conventions: period-one torus; normalized Haar mass one; symmetric sums indexed by integers N >= 0.

Sources read: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf — §4.2.1, Theorem 4.2.1 and (4.2.7)–(4.2.13), pp. 255–261.

Dependencies: def-carleson-maximal-partial-sum-operator. External mentions: rem-kolmogorov-block-polynomials-have-large-partial-sum-maxima.

Decision/provenance: Record the almost-everywhere assertion proved by Grafakos (4.2.13); do not replace it by everywhere divergence. Describe the weighted sum of polynomials and separate early-term and tail control as source architecture, not a local proof. Statement literature-derived; proof not-supplied. No generated statement or judge record.

Current state: draft written. Mathematical obligations in this item discharged locally or explicitly retained as recorded literature, as designated above. Focused validators pending; next action: finish remaining assigned artifacts, then run required checks.

### Authored `rem-carleson-hunt-almost-everywhere-convergence`

Claim: For each 1<p<infinity there is a finite C_p such that ||Cf||_p <= C_p||f||_p for every f in Lp(T). Consequently S_N f(x)->f(x) almost everywhere. Carleson established p=2 and Hunt the full open range.

Conventions: period-one torus; normalized Haar mass one; symmetric sums indexed by integers N >= 0.

Sources read: https://arxiv.org/pdf/0903.3845 — ch. 8, Theorem 8.7 and omitted-proof discussion, pp. 51–52.

Dependencies: def-carleson-maximal-partial-sum-operator. External mentions: none.

Decision/provenance: State both the maximal estimate and convergence consequence; p=1 is excluded. This is recorded literature, with no local time-frequency proof. Do not mistake sup_N ||S_N f||_p for ||sup_N |S_N f|||_p. Statement literature-derived; proof not-supplied. No generated statement or judge record.

Current state: draft written. Mathematical obligations in this item discharged locally or explicitly retained as recorded literature, as designated above. Focused validators pending; next action: finish remaining assigned artifacts, then run required checks.

### Authored `cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one`

Claim: Assume countable choice and fix 1<p<infinity. Under the explicit hypothesis that ||Cg||_p<=C_p||g||_p for all g in Lp(T), every f in Lp(T) has S_N f->f almost everywhere.

Conventions: period-one torus; normalized Haar mass one; symmetric sums indexed by integers N >= 0.

Sources read: https://arxiv.org/pdf/0903.3845 — ch. 8, p. 52, closure route after Theorem 8.7.

Dependencies: lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence, thm-chebyshev-markov-inequality-for-the-integral. External mentions: rem-carleson-hunt-almost-everywhere-convergence.

Decision/provenance: Apply Chebyshev to |Cg|^p to obtain the weak estimate with A=C_p^p, then apply the proved weak-bound lemma. State the estimate as a hypothesis; the external Carleson–Hunt record is a bibliographic mention only, not a discharged local assumption. Statement literature-derived; proof ai-altered. No generated statement or judge record.

Current state: draft written; exact citation/step contract and item-specific boundary worksheet written. Mathematical obligations in this item discharged locally or explicitly retained as recorded literature, as designated above. Focused validators pending; next action: finish remaining assigned artifacts, then run required checks.

### Authored `rem-proof-cost-of-the-carleson-hunt-theorem`

Claim: In the Lacey–Thiele route, a time-frequency decomposition leads to trees and separate density, size and tree estimates; balancing the scales gives a summable series. The Lp extension uses exceptional-set control. These mechanisms have not been proved on this page.

Conventions: period-one torus; normalized Haar mass one; symmetric sums indexed by integers N >= 0.

Sources read: https://arxiv.org/pdf/math/0307008 — §3 before §3.1, pp. 11–14; §7 opening and §7.2 opening through (7.9), pp. 24–26.

Dependencies: none. External mentions: rem-carleson-hunt-almost-everywhere-convergence.

Decision/provenance: Give a sourced proof roadmap only. Specify one proof route, not a claim that all possible proofs must have this architecture. Lacey uses a real-line model; no real-line-to-torus transference theorem is claimed locally. Statement literature-derived; proof not-applicable. No generated statement or judge record.

Current state: draft written. Mathematical obligations in this item discharged locally or explicitly retained as recorded literature, as designated above. Focused validators pending; next action: finish remaining assigned artifacts, then run required checks.

### Authored `rem-the-lone-endpoint-is-excluded-from-carleson-hunt`

Claim: Assume countable choice. The recorded Kolmogorov result rules out almost-everywhere convergence for all L1 functions and, by the proved conditional maximal principle, rules out a weak (1,1) Carleson bound. Strong (1,1) would imply weak (1,1). This paragraph is an interpretation of the recorded theorem, not an independently proved endpoint theorem.

Conventions: period-one torus; normalized Haar mass one; symmetric sums indexed by integers N >= 0.

Sources read: https://arxiv.org/pdf/0903.3845 — ch. 8, Theorems 8.1 and 8.7 endpoint discussion, pp. 47 and 51–52.

Dependencies: lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence, thm-chebyshev-markov-inequality-for-the-integral. External mentions: rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere, rem-carleson-hunt-almost-everywhere-convergence.

Decision/provenance: Keep the dependence on the unproved existence statement visible in prose and external_refs. Compare pointwise failure for continuous functions with almost-everywhere failure in L1 without conflating them. Statement literature-derived; proof not-applicable. No generated statement or judge record.

Current state: draft written. Mathematical obligations in this item discharged locally or explicitly retained as recorded literature, as designated above. Focused validators pending; next action: finish remaining assigned artifacts, then run required checks.

### Authored `ex-fourier-partial-sum-operators-and-uniform-boundedness`

Claim: Assume DC. In the real Banach space C(T), the set {f: sup_N |S_N f(0)|=infinity} is a dense G_delta.

Conventions: period-one torus; normalized Haar mass one; symmetric sums indexed by integers N >= 0.

Sources read: https://arxiv.org/pdf/0903.3845 — ch. 8, Theorem 8.2 pp. 48–49, with published Banach–Steinhaus dichotomy.

Dependencies: lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant, thm-banach-steinhaus-dichotomy, thm-c-k-complete-in-the-sup-metric. External mentions: none.

Decision/provenance: Apply the published Baire dichotomy to T_N f=S_N f(0). Explain the closed periodic subspace as for the A-page witness and display the set as intersection_m union_N {f:|T_N f|>m}. Do not replace residuality in function space by a claim about almost every point of the torus. The unbounded functional norms are now part of the preceding norm lemma, so no B-page dependency is used. Statement literature-derived; proof ai-altered. No generated statement or judge record.

Current state: draft written; exact citation/step contract and item-specific boundary worksheet written. Mathematical obligations in this item discharged locally or explicitly retained as recorded literature, as designated above. Focused validators pending; next action: finish remaining assigned artifacts, then run required checks.

### Authored `cex-continuous-fourier-series-need-not-converge-everywhere`

Claim: Assume DC. There is a real continuous periodic f whose Fejer means converge uniformly to f but whose ordinary Fourier sums are unbounded at zero.

Conventions: period-one torus; normalized Haar mass one; symmetric sums indexed by integers N >= 0.

Sources read: https://arxiv.org/pdf/0903.3845 — ch. 8, Theorem 8.2 pp. 48–49; published FR-1 Fejer theorem.

Dependencies: cex-continuous-function-with-divergent-fourier-series-at-a-point, thm-fejer-uniform-convergence-for-continuous-periodic-functions. External mentions: none.

Decision/provenance: Use the single A-page witness and apply the published uniform Fejer theorem. Refute the inference from uniform Cesaro convergence to ordinary pointwise convergence. Do not repeat the A-page existence claim under a second theorem label. Statement literature-derived; proof ai-altered. No generated statement or judge record.

Current state: draft written; exact citation/step contract and item-specific boundary worksheet written. Mathematical obligations in this item discharged locally or explicitly retained as recorded literature, as designated above. Focused validators pending; next action: finish remaining assigned artifacts, then run required checks.

### Authored `rem-lone-fourier-series-can-diverge-almost-everywhere`

Claim: For the recorded Kolmogorov witness, its L1 membership is compatible with almost-everywhere divergence. Comparing the two recorded theorems shows that this witness cannot belong to any Lp(T) with p>1. No formula or local verification of that witness is supplied.

Conventions: period-one torus; normalized Haar mass one; symmetric sums indexed by integers N >= 0.

Sources read: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf — §4.2.1, Theorem 4.2.1 and (4.2.13), pp. 255–261; https://arxiv.org/pdf/0903.3845 — ch. 8, Theorem 8.7 and omitted-proof discussion, pp. 51–52.

Dependencies: none. External mentions: rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere, rem-carleson-hunt-almost-everywhere-convergence.

Decision/provenance: Interpret the same external witness rather than minting a duplicate unproved counterexample. The exclusion from each Lp is a comparison of external assertions, explicitly labeled as such. Statement literature-derived; proof not-applicable. No generated statement or judge record.

Current state: draft written. Mathematical obligations in this item discharged locally or explicitly retained as recorded literature, as designated above. Focused validators pending; next action: finish remaining assigned artifacts, then run required checks.

### Authored `cex-carleson-maximal-operator-is-not-strong-type-one-one`

Claim: For every A>0 there is a nonnegative trigonometric polynomial f with ||f||_1=1 and ||Cf||_1>A. Thus no uniform strong (1,1) estimate exists.

Conventions: period-one torus; normalized Haar mass one; symmetric sums indexed by integers N >= 0.

Sources read: https://arxiv.org/pdf/0903.3845 — ch. 9, Example 9.4, p. 55.

Dependencies: def-carleson-maximal-partial-sum-operator, lem-fejer-kernel-is-a-positive-approximate-identity, thm-fejer-uniform-convergence-for-continuous-periodic-functions, lem-fourier-partial-sums-are-dirichlet-convolutions, lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant, thm-riesz-fischer-completeness-of-l-p, thm-uniform-boundedness-principle, thm-tonelli-theorem-for-sigma-finite-product-spaces. External mentions: none.

Decision/provenance: Choose N with ||D_N||_1>A+1. For f=F_K, finite Fourier sums give S_N F_K=F_K*D_N=sigma_K D_N -> D_N uniformly as K grows. Hence ||C F_K||_1>=||S_N F_K||_1>A for large K while ||F_K||_1=1. This supplies a local endpoint counterexample without using Kolmogorov as a hidden logical prerequisite. As an inline consequence under DC, ||S_N:L1->L1||>=||D_N||_1 is unbounded, so Riesz–Fischer completeness and uniform boundedness give an integrable h with sup_N||S_N h||_1=infinity. Check each S_N is bounded by the convolution integral and Tonelli. This norm consequence is distinct from a.e. divergence. Statement literature-derived; proof ai-altered. No generated statement or judge record.

Current state: draft written; exact citation/step contract and item-specific boundary worksheet written. Mathematical obligations in this item discharged locally or explicitly retained as recorded literature, as designated above. Focused validators pending; next action: finish remaining assigned artifacts, then run required checks.

### Page composition and source metadata

Both planned pages are written directly under `library/fourier-analysis/`, with the manifest order of all 10 A items and 4 B items preserved. All pages/items remain draft. The B endpoint interpretation now has separate exact Grafakos and Laugesen reference objects; this fixes a combined locator previously attached only to the Grafakos URL. No claim, id, dependency, plan or workflow state changed. No claims were narrowed or dropped. The A and B existence discussions reuse the same continuous witness. Seven proof-bearing items now have contracts; required validators are next.

### First validator pass and canonical repair

Content policy passed: 14 scoped items, zero errors/warnings. Strict proof contracts passed: 7/7, zero errors/warnings. Explicit-path precheck checked the seven proof bodies and requested canonical phase stratification for the norm lemma and strong-(1,1) counterexample; the other five passed. Applied the exact canonical row ordering/numbering and remapped citation uses, derivations and boundary evidence accordingly. No mathematical claim changed. `validate-plan` exited 2; its diagnostic is being inspected before the final report. Next action: rerun precheck/contracts and verify rendering.

### Final Step-5 validation receipt

All 14 assigned ids listed in the authoring checkpoints above are authored, along with both planned pages. Seven proof-bearing items have exact-source citation maps, every numbered proof row has a derivation entry, and all eight standard boundary axes have item-specific dispositions. The continuous-function arguments use the real periodic Banach subspace; the strong-(1,1) example uses Tonelli on the product-measurable integrand |h(u)| |D_N(x-u)| and retains DC only for its additional norm-divergence consequence.

- Explicit-path precheck: exit 0, **7 checked, 0 failing**. The definition and six remarks have no proof body. The canonical repairs described above are stored on disk.
- `node tools/validate-plan.mjs` initially exited 2 with its usage message because this version requires a plan argument. `node tools/validate-plan.mjs research/plan-spec.json` then exited 0: 1360 pages, 892 pages with item lists; no item cycles, forward references, B-page dependencies or unresolved ids in that scope. 685 warning(s): Repository-wide redundant prerequisite notices were not altered. The remaining 463 pages without item lists have only page-level validation.
- `node tools/content-policy.mjs research/frontier-33-batch-4.pages.json`: exit 0, **14 scoped items, 0 errors, 0 warnings**, rerun after the repairs.
- `node tools/proof-contract.mjs research/frontier-33-batch-4.proof-contracts.json --strict`: exit 0, **7/7 checked, 0 errors, 0 warnings**, after remapping the canonical proof rows.
- `node tools/rendercheck.mjs` with the 14 exact manifest item paths and both exact page paths: exit 0, **16 files**, all mathematical spans parsed by real KaTeX and all frontmatter parsed by the renderer YAML parser.
- Owned-scope assertions confirmed all 16 artifacts are `status: draft`, no judge records, exact page membership/order, and complete seven-item contract scope. Scoped `git diff --check` exited 0; because new untracked artifacts are not covered by that Git check, their YAML/math and identity checks are the separate checks above.

The explicit precheck invocation was:

```sh
node tools/tsx-run.mjs tools/precheck.mts items/def-carleson-maximal-partial-sum-operator.md items/lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant.md items/cex-continuous-function-with-divergent-fourier-series-at-a-point.md items/lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence.md items/rem-kolmogorov-block-polynomials-have-large-partial-sum-maxima.md items/rem-kolmogorov-lone-fourier-series-diverges-almost-everywhere.md items/rem-carleson-hunt-almost-everywhere-convergence.md items/cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one.md items/rem-proof-cost-of-the-carleson-hunt-theorem.md items/rem-the-lone-endpoint-is-excluded-from-carleson-hunt.md items/ex-fourier-partial-sum-operators-and-uniform-boundedness.md items/cex-continuous-fourier-series-need-not-converge-everywhere.md items/rem-lone-fourier-series-can-diverge-almost-everywhere.md items/cex-carleson-maximal-operator-is-not-strong-type-one-one.md
```

Narrowed/dropped claims: none. Stating the weak-bound constant as nonnegative is its usual convention, not a mathematical restriction: a negative constant cannot satisfy the universal estimate on the nonzero constant function. The literature records remain recorded-not-proved; their source construction descriptions are not logical dependencies or claims of a supplied proof. No finite-smoke computation is offered as mathematical evidence.

Blockers: none for assigned Step-5 authoring. Direct curl DNS and screenshot retrieval remained unavailable, but the relevant source arguments were read through browser full-PDF text: Laugesen Theorem 6.4, Theorem 8.2, Theorem 8.7 discussion and Examples 9.3–9.4; Grafakos Proposition 3.4.6 and §4.2.1 through (4.2.13); Lacey §3 through its scale summation and §7 through the exceptional-set split (7.9). Existing coverage/source-fetch records and independent reviews were preserved. No new fetch, review or publication stamp is claimed.

Next action: engine-owned review of the completed batch. No authoring obligation remains pending.

### Gate repair checkpoint

The three recorded Fourier results retain their Laugesen/Grafakos citations but now encode `sources.references` as block lists recognized by `extcheck`. The widening candidate on `ex-fourier-partial-sum-operators-and-uniform-boundedness` F1 was upheld item-specifically: `N>=0` scopes the norm identity, while the cited `N>=1` lower bound proves unboundedness of the family. Reflow was unchanged; extcheck, citation fidelity, rendering, strict contract, and the refreshed author receipt pass.
