# Step 3a scope review — pair `interior-and-boundary-sobolev-elliptic-regularity`

- Run: `frontier-39-analysis-30` (stage `3a-scope`), dispatch label
  `step3a-pair-interior-and-boundary-sobolev-elliptic-regularity-7b3d9a9801371393`
- Role: alpha scope reviewer (not owner, not item author).
- A page: `interior-and-boundary-sobolev-elliptic-regularity` (batch 12,
  order 458.033, category `pde`, `requires` =
  [`fredholm-elliptic-problems-and-the-elliptic-spectrum`]; 29 items:
  2 definitions, 13 lemmas, 7 theorems, 5 corollaries, 2 remarks).
- B page: `interior-and-boundary-sobolev-elliptic-regularity-examples`
  (batch 12, order 458.034, `requires` = the A page; 10 items: 4 examples,
  6 counterexamples).
- Decision: **`sufficient`**, recorded with
  `node tools/step3-decisions.mjs record-scope`.
- Date: 2026-10-04 (UTC; 2026-10-05 local).

This review decides scope only. It is not an item approval, not a proof
judgment, and not an owner record. No scaffold, manifest, coverage, item,
design, plan or engine artifact was edited; the only writes are this report
and the scope receipt `research/frontier-39-analysis-30-step3a-review-interior-and-boundary-sobolev-elliptic-regularity.json`.

## 1. Intended subject and role in the library

Controlling prose design: `research/plan-pde-track.md` PDE-18, lines
1761–1800 (A/B ids and `requires` 1763–1765; the 17 designed A items
1769–1785; the six-row B companion 1787–1794; sources/proof architecture and
well-definedness 1796–1816); the PDE-18 additions table lines 3677–3695; the
source-audit row line 3395; the track index row line 54. The design builds
"difference quotients, interior and boundary $H^2$ and higher regularity"
for **second-order divergence-form elliptic equations in Sobolev ($H^s$)
scale**, with the boundary theory restricted to the Dirichlet problem
(zero trace, then compatible data by lifting).

Recorded design substitutions, all already owner-resolved or batch-recorded
(not scope reductions):

- the `cor-smooth-coefficients-and-boundary-make-elliptic-eigenfunctions-smooth`
  row was relocated from PDE-17 to PDE-18 by the owner resolution
  (`research/frontier-39-analysis-30-step1-owner-resolution.md` L10–L16);
  it appears exactly once in the run, on this pair (A28), with its ID,
  statement and proof route preserved;
- A25's designed contradiction/compactness route is realised through the
  batch-11 Fredholm supplier, the same claim
  (`research/frontier-39-analysis-30-batch-12.notes.md`, "Design, plan, and
  source conflicts" item 5);
- the difference-quotient converse is proved by duality representation rather
  than weak compactness (notes, conflict 6) — same claim, choice-lighter
  route.

Intended role: PDE-18 is the Sobolev-regularity base of the elliptic track.
In-run consumers are already scaffolded and declare this page's items at item
level: batch 14 (`weak-elliptic-maximum-principles-and-holder-regularity`,
PDE-20) uses `def-local-weak-solution-for-a-divergence-form-operator`; batch 15
(`the-direct-method-and-euler-lagrange-equations`, PDE-21) uses
`cor-smooth-weak-dirichlet-solutions-are-classical`; batch 18
(`analytic-semigroups-and-linear-evolution-equations`, PDE-24) uses
`thm-global-h-two-dirichlet-regularity`,
`thm-higher-order-boundary-regularity-for-dirichlet-problems` and
`rem-regularity-estimates-do-not-create-boundary-compatibility` (scan of all
30 batch manifests for deps and `[[...]]` citations naming batch-12 ids).
All three consumer pages have larger plan orders (458.037/458.039/…), so the
supplier-before-consumer direction holds; no consumer requires a claim this
pair does not plan to prove.

## 2. Design-to-manifest mapping

I extracted the PDE-18 design ids and the additions-table rows and diffed
them against `research/frontier-39-analysis-30-batch-12.pages.json`.
**All 17 designed A claims are present, in design order, with matching
kinds**: `def-first-difference-quotient` (1),
`lem-difference-quotient-integration-by-parts` (2),
`thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one`
(5), `rem-the-p-one-difference-quotient-converse-leads-to-bv-not-w-one-one`
(6), `thm-caccioppoli-inequality-for-weak-elliptic-solutions` (8),
`lem-tangential-difference-quotient-test-function` (10),
`thm-interior-h-two-regularity-for-divergence-form-equations` (15),
`thm-interior-h-k-plus-two-elliptic-regularity` (17),
`cor-smooth-data-give-smooth-interior-solutions` (18),
`lem-c-two-boundary-flattening-transforms-uniform-ellipticity` (20),
`lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary` (21),
`lem-normal-second-derivative-recovered-from-the-elliptic-equation` (22),
`thm-global-h-two-dirichlet-regularity` (24),
`cor-global-h-two-estimate-without-the-ltwo-term-under-uniqueness` (25),
`thm-higher-order-boundary-regularity-for-dirichlet-problems` (26),
`cor-smooth-weak-dirichlet-solutions-are-classical` (27),
`rem-regularity-estimates-do-not-create-boundary-compatibility` (29).

**All nine PDE-18 A additions of the plan's additions table are present**:
`lem-cutoff-difference-quotient-commutator-estimate` (3),
`cor-scaled-caccioppoli-inequality-on-concentric-balls` (9),
`lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative`
(4), `thm-interior-h-two-estimate-for-constant-coefficient-elliptic-equations`
(13), `lem-nested-domain-induction-for-interior-elliptic-derivatives` (16),
`lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates`
(12), `lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts`
(19), `lem-finite-boundary-and-interior-partition-glues-local-h-two-estimates`
(23), `lem-weak-equation-for-a-first-derivative-includes-coefficient-commutators`
(14); plus the relocated corollary (A28). **Two recorded local
prerequisites** complete the page: `def-local-weak-solution-for-a-divergence-form-operator`
(7, the interior/local notion the design's proofs need and no PDE-16/17 item
supplies) and `lem-localisation-identity-for-a-divergence-form-weak-solution`
(11). 29 items in total, far below the page cap.

B page: the six designed rows are B1–B6; the four additions of the PDE-18
table are B7–B10. The notes' differentiations are real and visible in the
statements: B2 is a Lipschitz (continuous) coefficient with an $H^2$ solution
whose classical second derivative jumps; B7 is a bounded *discontinuous*
coefficient with an $H^1$ solution outside $H^2$ (sharpness of the
$W^{1,\infty}$ hypothesis); B4 states the $H^2$ failure at a reentrant sector,
B8 computes the exact threshold $s<1+\pi/\omega$; B3 (punctured disc,
interior smoothness does not give $H^2$ to the boundary) and B4 are
neighbouring but distinct design-mandated counterexamples on different
geometries. B9 shows the two-derivative gain is optimal and B10 separates
compatibility from coefficient/domain smoothness.

Scope verdict on the inventory: the pair covers the whole designed
arc — difference-quotient foundations and both directions of the $W^{1,p}$
characterisation with the $p=1$ endpoint recorded (A1–A6, A10), local weak
solutions and Caccioppoli estimates (A7–A9, A11), interior $H^2$ and
$H^{k+2}$ with the correct coefficient regimes and the constant-coefficient
core (A12–A18), boundary flattening/chart invariance/tangential estimates/
normal-derivative recovery/gluing, global $H^2$, the kernel-free estimate
under injectivity, higher-order boundary regularity and the classical and
eigenfunction corollaries (A19–A28), and the explicit compatibility scope
boundary of the estimates (A29, B10). No designed claim is missing, none is
weakened, and no un-designed claim displaces a designed one.

## 3. Source coverage

`research/frontier-39-analysis-30-batch-12.coverage.json` (2 pages, 53
harvested headings: 36 `included`, 7 `inline`, 4 `deferred`, 6
`out-of-scope` with written reasons) rests on four full-text treatments:
[H] Hunter's 242-page notes, [L] Laugesen's 158-page notes, [T] Teschl's
392-page manuscript, [Si] Simon's 118-page scan. I re-verified all four
fetch stamps: the repository copies `laugesen.pdf` (764,005 bytes, sha256
`6aec033c5bc5a0c6…`) and `simon.pdf` (940,975 bytes, sha256
`e1f1b2f51d2558aa…`) match the recorded stamps byte-for-byte, and fresh
downloads of Hunter (1,597,256 bytes, sha256 `0dbade1806f7a1ea…`) and Teschl
(2,912,992 bytes, sha256 `cea9939acea1858e…`) reproduce the other two stamps.

I then re-read the load-bearing locators in the fetched texts and confirmed
the claims the manifest attributes to them:

- [H] Thm 4.27 (printed p. 112) interior $H^2$ with `‖u‖_{H²(Ω')} ≤ C(‖f‖ +
  ‖u‖)`; Thm 4.28 (p. 114) $H^{k+2}_{loc}$; Thm 4.30 (pp. 114–116) bounded
  $C^2$ domain, $u ∈ H^1_0$ ⇒ $u ∈ H^2$; Thm 4.31 and Cor 4.32 (p. 116)
  $C^{k+2}$ boundary ⇒ $H^{k+2}$, smooth data ⇒ classical; Def 4.51 and
  Prop 4.52 (pp. 124–125) difference quotients, weak commutation, $L^p$–$L^{p'}$
  integration by parts and product rule; Thm 4.53 (pp. 125–126) part (1)
  $1\le p<\infty$ and part (2) **$1<p<\infty$** only, matching A5's split and
  A6's recorded $p=1$ boundary.
- [L] Thm 5.6 (p. 108) interior $H^2$ with the $L^2$ term; Prop 5.7
  (pp. 110–111) difference-quotient bounds; Thms 5.8–5.9 (pp. 111–112)
  higher and infinite interior regularity; Thm 5.10 and the note after it
  (pp. 112–113) boundary $H^2$, the zero-eigenvalue example $L=-d^2/dx^2-1$,
  $\sin x$ (B5's source), and the removal of `‖u‖_{L²}` when no eigenvalue
  vanishes (A25); Thm 5.11 (p. 113) infinite boundary regularity; §5.3 1-D
  exercises (pp. 113–114) for B2/B9.
- [T] Lemma 10.16 ($A^{ij}\in W^{1,\infty}$, printed pp. 240–241), Cor 10.17
  ($W^{k+1,\infty}$ coefficients, p. 241), Lemma 10.18 (bounded $C^{1,1}$
  boundary, p. 242), Cor 10.19 ($C^{k+1,1}$ boundary, p. 243), Example 10.1
  (reentrant sector, $u\in H^1\setminus H^2$ for $\beta>\pi$, p. 242);
  (10.63) $D(\bar L)=H^2\cap H^1_0$ is disposed `deferred` to PDE-23 as
  recorded. The manifest's boundary hypotheses ($C^2$, $C^{k+2}$) are
  *stronger* than Teschl's ($C^{1,1}$, $C^{k+1,1}$) and match Hunter's, a
  deliberate, recorded choice (notes, "Known limits", item ii).
- [Si] Lecture 5 Lemma 6 interpolation and Lemma 7 (difference-quotient
  convergence), Lecture 6 Lemma 1 (Caccioppoli energy estimate) and Theorem 1
  (local $H^{m+k}$ regularity), Lectures 8–9 (half-space boundary lemma and
  Dirichlet boundary regularity) are present in the scan at the recorded
  lecture boundaries; Simon's Lecture 9 Theorem 2 (Neumann/oblique) is
  disposed `out-of-scope` consistently with the pair's Dirichlet-only
  boundary scope.

Disposition soundness: Hunter §4.13 (Schauder, $L^p$, De Giorgi–Nash–Moser,
Perron, degree, heat flow) is `out-of-scope` to PDE-19/PDE-20; Rellich
compactness to PDE-15; the operator-domain identification and its powers to
PDE-23/PDE-24; Neumann/oblique boundaries to other pages. Those boundaries
are the design's declared boundaries (design text and the notes' conflict 1);
no omitted row is needed to prove a planned claim on this pair.

Fresh checks re-run against the current tree (read-only):
`node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-12.pages.json`
→ 39 item(s), 0 errors;
`node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-12.coverage.json --require-destination`
→ 2 page(s), 53 harvested result(s), 0 errors/warnings;
`node tools/source-fetch-check.mjs --coverage …`
→ 8/8 fetch-verified.

## 4. Prerequisite and dependency audit

Closure check over the current scaffold and published library: the 39 items
declare 83 distinct dependency ids (44 **published** item files with
`status: published`; 39 in-run scaffold drafts) and cite 59 distinct
`[[…]]` targets in their statements and strategies (19 published, 40
in-run); **every one resolves, with zero unresolved in either set**. The
published refs include `def-bounded-c-k-domain-and-boundary-charts`,
`thm-kernel-of-the-trace-is-w-one-p-zero`,
`cex-step-function-has-no-locally-integrable-weak-derivative`,
`ex-log-modulus-is-harmonic-on-the-punctured-plane`,
`def-bounded-variation-and-total-variation`; the in-run refs come from this
run's scaffold drafts (batches 4, 9, 10, 11, …). There is **no dependency id
and no cited id that is absent from both**; the only statement references
outside the citing item's own `deps` array are the two recorded forward
pointers of A29 to B3/B4 (`forward_refs`, `fwdcheck` green).

I read the statements of the load-bearing in-run suppliers and confirmed they
state the required claims: batch 11's
`thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems`,
`cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem`
(bounded $L^2\to H^1_0$ solution map, exactly what A25 consumes),
`def-symmetric-elliptic-weak-eigenpair` (A28) and
`lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`
(A15); batch 10's `def-uniformly-elliptic-divergence-form-operator`,
`def-weak-dirichlet-solution-for-a-divergence-form-operator`,
`lem-elliptic-form-is-well-defined-and-bounded`,
`thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem` (B1,
B6) and `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting` (A29,
B10); batch 4's `def-sobolev-conjugate-exponent`,
`thm-higher-order-sobolev-embedding` and
`thm-morrey-inequality-for-p-greater-than-n` (A18, A27, A28, B6). No
prerequisite page is required by the manifest that is missing from the plan's
reading order: the single declared page requirement
`fredholm-elliptic-problems-and-the-elliptic-spectrum` is the earlier batch-11
draft (order 458.031) and does not require this page (no cycle).

Two dependency findings, **neither an absent prerequisite** (both are present
in the current scaffold), recorded for the owner and Step 4:

1. **Undeclared transitive edges (splice finding, already recorded by the
   builder).** The batch consumes 45 unique item-level edges into
   `lax-milgram-and-weak-elliptic-solutions` (batch 10) and
   `sobolev-poincare-and-morrey-inequalities` (batch 4) that the plan-spec
   licenses only transitively (458.033 → 458.031 → 458.029 → 458.025);
   `splice-plan --verify` reports them run-wide. Step 4 must either add the
   direct `requires` edges or accept the transitive licence; the supplier
   *claims* are present and were checked above (notes, conflict 1 and
   attempt-3 audit).
2. **Choice-label propagation to reconcile at authoring.** B6
   (`ex-bootstrapping-a-smooth-poisson-problem`) declares
   `def-axiom-of-choice` and consumes the AC-carrying embeddings and
   batch-10 existence theorem, yet its statement does not state the AC
   assumption, while A18/A25/A27/A28 do state it; A29 and B10 cite the
   AC-carrying `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting`
   contextually without declaring AC. These are statement-level authoring
   questions for Step 3b (the notes flag the same items as residual
   uncertainty 2); they do not create a scope omission because the suppliers
   exist and the dependence is already declared in the `deps` arrays.

## 5. Flagged uncertainty and author notes (not scope blockers)

- **Half-space orientation convention.** The published
  `def-bounded-c-k-domain-and-boundary-charts` flattens $\Omega$ to the
  *lower* half-space $\{t<0\}$, while A19–A23's model lemmas are stated on the
  *upper* half-space $H=\{x_n>0\}$. The published trace item
  (`thm-lp-trace-operator-on-a-bounded-c-one-domain`) already resolves the
  same mismatch by "reflecting $t\mapsto -t$" before applying its half-space
  estimate. The author should insert the same explicit reflection (or state
  the half-space lemmas for $\{x_n<0\}$); no new claim or item is needed, and
  the scope decision does not depend on which wording is chosen.
- **A22's "strong solution" qualifier.** A22 recovers $D_nD_nu$ and displays
  the formula "on every open subset where $u$ is a strong solution". The
  intended content is the standard pointwise identity once
  $u\in H^2_{\mathrm{loc}}$ makes the weak equation an a.e. identity (the
  step A15 states for the interior case); the author should make the
  qualification precise.
- Proof-level limits handed to Step 3 by the builder and left standing:
  trace-free boundary route (closure stability instead of the trace
  characterisation), $C^{k+2}$/ $W^{k+1,\infty}$ hypotheses in A26 (Teschl's
  $C^{k+1,1}$ variant is weaker and not claimed), A23's gluing stated with
  explicit local-bound hypotheses, non-sharp interpolation constants, and
  the $p=1$ remark strengthened by a two-line witness. These concern proofs,
  not the planned scope.
- B3/B4 are neighbouring singular-boundary counterexamples; both are
  design-mandated and they refute different statements, and B8 quantifies
  B4. No pair merger or enrichment is indicated by any overlap.

## 6. Decision

**`sufficient`.** The planned definitions, results and examples cover the
intended subject as designed and sourced: every designed claim is present
with its role, the additions match the plan's table, the four backing texts
were read in full and their stamps independently reproduced here, the key
locators support the attributed claims, and the 39 items' prerequisite
closure resolves entirely to published items or in-run scaffold drafts with
zero absent claims. The recorded splice finding (45 transitive item edges),
the choice-label reconciliation for B6/A29/B10, and the convention/proof
notes above do not omit anything from the planned scope; they are handed to
the Step 3 authors and Step 4 splice without changing pair membership or
inventory.

Recorded with:
`node tools/step3-decisions.mjs record-scope --run frontier-39-analysis-30 --page interior-and-boundary-sobolev-elliptic-regularity --decision sufficient --reason "…"`.
