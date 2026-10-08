# Step 3a dispatch report — `beltrami-equation-and-measurable-riemann-mapping`

- Run: `frontier-43-complex-representation-15` (stage `3a-scope`, batch 13,
  orders 1620/1621, category `complex-analysis`).
- Dispatch reviewed:
  `step3a-pair-beltrami-equation-and-measurable-riemann-mapping-adf4c34b6b348325`
  (attempt 1, registered in `.autopilot/frontier-43-complex-representation-15/state.json`).
  An older task file `…-43a4b735f113aa21` exists (2026-10-07 05:19 UTC, generated
  for a superseded scope hash); it left no report, receipt, or state entry.
- Pair: A `beltrami-equation-and-measurable-riemann-mapping` (10 items: 2
  definitions, 5 lemmas, 2 theorems, 1 corollary) / B
  `beltrami-equation-and-measurable-riemann-mapping-examples` (5 items: 4
  examples, 1 counterexample). Companion pointers agree A↔B; B `requires` is A only.
- Reviewed scope: the batch-13 manifest as of 2026-10-07T17:08:54+11
  (`sha256 0d09e639a0b720607709a1abc1a9ae22ec7788fca4e0d53cd1cc9974b3892874`);
  current pair scope hash `c579f9cbc40787349a9371f8c15d623f3f27decb37b9d2c069e4abe4fbf9d4b3`.
- Role: alpha scope review of this pair only. No scaffold, item, manifest,
  coverage, plan, or owner record was edited; this report and the `record-scope`
  receipt are the only outputs.
- **Decision: `sufficient`** for the design's promised subject. Findings F1–F5
  in §6 are owner/author observations, not omissions of a design-promised topic;
  no pair merger or enrichment is required by this review.

## 1. Inputs read

| Artifact | Use |
|---|---|
| `...-batch-13.pages.json` | Full text of both pages: all 15 items (statements, strategies, kinds, deps, `dependency_level`, `axiom_use`, per-item `sources.references`) |
| `...-batch-13.coverage.json` | 4 fetch-stamped sources, all 35 harvested rows with dispositions |
| `...-batch-13.notes.md` | Scaffold record: 15/15 `ready`, added suppliers, choice record, harvest and check results |
| `...-batch-13.cross-batch-dependencies.json`, `...-cross-batch-dependencies.json` | All declared edges touching the pair (29 item + 1 page out, 7 item + 1 page in) |
| `...-scope-ledger.json`, `...-frontier-gate-pages.json` | Both pages owed and gate pages |
| `research/plan-complex-analysis-track.md` §CA-QC-2 (L4144–4207), `research/plan-spec.json` rows 1620/1621 | Binding prose design: 8 A rows + 5 B companion entries, `requires`, source route, declined Beurling route |
| `...-owner-authoring-direction.md` (Batch 13 and Batch 14 paragraphs) | Owner direction: preserve the regularity theorem in full, add the three local lemmas in order, keep the approximation/compactness existence route |
| `...-beltrami-step1-resolution.md` | Exact supplier interfaces, complete planned proof route, source-retrieval record |
| `...-alpha-step1-drift.md`, `...-drift-evidence.json`, 15 `...-step1-<item>.json` | Step-1 verdict (`drift-applied — add schauder-and-lp-elliptic-estimates`) and 15/15 `ready` item-readiness records |
| `...-batch-12.pages.json` (8 consumed items, full statements) | In-run supplier checks: analytic/geometric quasiconformality, composition/inverse, compactness, circular dilatation |
| `items/*.md` load-bearing supplier statements (spot reads) | Hypothesis match at the interfaces listed in §4 |
| Lyubich book.pdf, Bishop QC.pdf, Astala et al. paper, Hunter pde_notes.pdf | Independent re-download and re-reading of the claimed locators (§3) |

No separate page-prose file exists for either page yet (page prose is authored
in Step 3b/4), so the design comparison uses the plan text above.

## 2. Design ∶ scaffold comparison (scope only)

All eight design rows of CA-QC-2 are present with the same ids, kinds and
claims, in design order:

| design row (CA-QC-2) | manifest item |
|---|---|
| Beltrami coefficient as a tensor / measurable conformal structure (def) | `def-measurable-beltrami-coefficient` |
| $W^{1,2}_{\mathrm{loc}}$ weak solutions of $f_{\bar z}=\mu f_z$ (def) | `def-weak-solution-beltrami-equation` |
| MRMT on the sphere: existence, uniqueness up to Möbius, three-point normalization (thm) | `thm-measurable-riemann-mapping-sphere` |
| Local integrability of measurable conformal structures (cor) | `cor-local-integrability-beltrami-structures` |
| Fixed-support Cauchy transform / Hölder bound (lem) | `lem-local-holder-cauchy-transform-estimate` |
| Nondegenerate local Hölder Beltrami coordinates (lem) | `lem-nondegenerate-local-holder-beltrami-coordinates` |
| Weak solutions factor holomorphically in Hölder coordinates (lem) | `lem-weak-beltrami-factorization-in-holder-coordinates` |
| Hölder regularity and nonvanishing Jacobian of the normalized solution (thm) | `thm-holder-regularity-beltrami-solutions` |

Two additional A suppliers carry the design's approximation/compactness route
and are justified as closure work, not padding:
`lem-smooth-beltrami-coefficients-admit-quasiconformal-solutions` (global
solutions for smooth coefficients via the local charts and the published
uniformization theorem, Lyubich §14.2/§14.4) and
`lem-area-and-l2-derivative-bounds-for-quasiconformal-maps` (the uniform
$\int_B|Df|^2$ bound for the weak-limit passage, from the area inequality
$\int_E J_f\le|f(E)|$).

Statement-level checks found no narrowing of a promised claim: the strict bound
$\|\mu\|_\infty<1$, the Möbius-uniqueness and the exact three-point
normalization, the local-coordinate corollary, the fixed-support Hölder bound
with $\alpha$ never replaced by an ellipticity-limited exponent, the
nondegenerate Jacobian of the chart, the injectivity-free regularity lemma and
the exact-exponent $C^{k+1,\alpha}$ diffeomorphism theorem are all present.
The B page carries exactly the five design companion entries
(`ex-constant-coefficients-and-affine-solutions`, `ex-piecewise-affine-approximations`,
`ex-normalization-by-mobius-maps`, `ex-pullback-of-a-measurable-ellipse-field`,
`cex-uniqueness-of-beltrami-solutions-without-normalization`).

Metadata: orders, titles, category, companions and both `requires` arrays match
`plan-spec.json`; 10/5 items are far below the page cap; the maximum
`dependency_level` is 13 (`ex-normalization-by-mobius-maps`,
`ex-pullback-of-a-measurable-ellipse-field`) and
`item-dependency-levels check` reports no ordering error.

## 3. Source coverage

Current coverage-file dispositions: **2 included**, **16 inline**, **10
out-of-scope**, **2 deferred**, **5 already-published** (35 rows total):

- Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials* vol. I
  (15 rows): MRMT statement and §14.10.1 included; §14.1–§14.6, §13.7.2 inline
  or already-published; §14.7, §14.10.2, §14.10.3 out-of-scope; §14.8, §14.9
  deferred.
- Bishop, *Quasiconformal Mappings* (8 rows): Ch. 2 §1, Ch. 3 §§1, 2, 4, 6
  inline; Ch. 2 §2 and Ch. 3 §5 out-of-scope; Ch. 3 §3 already-published.
- Astala–Clop–Faraco–Jääskeläinen–Koski (8 rows): introduction, Theorem 1.1,
  Propositions 2.1–2.2, Corollary 2.3, Lemmas 2.5–2.8 and Lemma 3.1 inline;
  Theorems 1.2–1.3, Prop. 2.4 and the §3 endgame declined with reasons.
- Hunter, *Notes on Partial Differential Equations* (4 rows): Theorems 2.26–2.28
  already-published; §2.8 declined.

Independent verification performed by this review (not taken on trust):

- All four documents were re-downloaded on 2026-10-07 and reproduced their
  stamps byte- and sha256_16-exactly: Lyubich 35 507 640 B
  `291912b9e5206cf2`, 702 pp; Bishop 1 616 042 B `a28bc4e2e00841a1`, 164 pp;
  Astala et al. 445 822 B `7c51f46aa3d7006a`, 17 pp; Hunter 1 597 256 B
  `0dbade1806f7a1ea`, 242 pp.
- Locators re-read in the fetched full text: Lyubich printed pp. 195–198
  (MRMT statement, Theorems 14.1–14.4, §§14.1–14.7) and pp. 200–201
  (Theorem 14.11, $T\nu(z)=-\frac1\pi\int\nu(\zeta)/(\zeta-z)\,dm$,
  $\bar\partial v=\nu$, $c/z$ at infinity); Bishop printed pp. 85–88
  (Theorem 2.11 measurable MRMT by approximation + normalized compactness,
  Prop. 2.10), pp. 103–105 (Theorem 6.1: uniform convergence plus a.e.
  convergence of dilatations gives $\mu_f=\mu$), and Lemma 4.4
  ($\int_Q J_f\le|f(Q)|$ by a.e. differentiability, Lebesgue differentiation and
  Vitali covering); Astala et al. p. 1544 (linear case: $\alpha$-Hölder
  derivatives and nonvanishing Jacobian); Hunter Theorem 2.28 (the Hölder
  estimate $[\partial_{ij}u]_{0,\alpha}\le C[f]_{0,\alpha}$, $0<\alpha<1$).
- The `coverage-checklist --require-destination` warning
  "2/35 harvested results scaffolded" is confirmed as a consequence of the
  binding design, not a coverage defect: the page's core existence and
  regularity results are proved from the approximation/normalized-compactness
  route and the Newtonian/Hölder contraction supplied by other treatments, so
  most rows are inline supplies, deliberate declines (Beurling/singular-integral
  route, $p>2$ Gehring–Bojarski self-improvement, nonlinear Morrey–Campanato
  machinery, quantitative Jacobian lower bound, the geometric-definition chapter
  owned by batch 12) or valid deferrals. I confirm the declines listed above as
  consistent with the design and owner direction.
- The one candidate prerequisite not spelled out in the resolution — the
  product identification $\mu_n\partial h_n\rightharpoonup\mu\varphi$ in the
  Lyubich §14.5/Bishop Prop. 2.10 step — was checked against the fetched proof
  texts and needs no new supplier: the first difference term is weak convergence
  and the second is dominated by
  $\|\eta(\mu-\mu_n)\|_2\|\partial h_n\|_2\to0$ (dominated convergence plus a
  uniformly bounded Hilbert ball), all available from declared or published
  items.

## 4. Prerequisite audit (unmet-prerequisite duty)

- **Declared item deps.** The 15 items declare 81 distinct dependency ids; all
  resolve: 64 to published `items/<id>.md` files and 17 to in-run scaffold
  (8 on the batch-12 page `extremal-length-and-planar-quasiconformality`,
  9 on this pair itself). 0 missing; 0 resolving only to `plan-spec.json`.
- **Inline links.** 78 `[[…]]` occurrences in statements/strategies; 9 to
  in-pair items, 8 to other in-run items, 61 to published items; 0 unresolved.
- **Page requires.** `weak-and-weak-star-topologies`,
  `banach-alaoglu-goldstine-and-krein-milman`,
  `reflexivity-and-eberlein-smulian`, `weak-derivatives-and-sobolev-spaces`,
  `smooth-approximation-and-sobolev-extension`,
  `schauder-and-lp-elliptic-estimates` are published pages;
  `extremal-length-and-planar-quasiconformality` is the batch-12 in-run pair.
  `frontier-item-gate --tool validate-plan` exits 0 with `redundant-prereq`
  warnings only (see F2).
- **Step-1 readiness.** `step1-decisions check` reports 371/371 run items
  `ready`, closed (this pair included).
- **Load-bearing interfaces read at statement level and matched:**
  batch-12 `thm-normalized-quasiconformal-compactness` (equicontinuity,
  uniform compactness, closure/lower-semicontinuous dilatation),
  `thm-geometric-and-analytic-quasiconformality-equivalent`,
  `thm-composition-and-inverse-quasiconformal`,
  `thm-one-quasiconformal-is-conformal`,
  `lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality`
  (bounded circular dilatation gives a.e. differentiability, used by the
  area/L² lemma), and the two quasiconformality definitions; published
  `thm-holder-spaces-on-bounded-domains-are-banach-spaces` (states
  $C^{k,\alpha}_b(\Omega)$ Banach for **arbitrary open** $\Omega$, so it covers
  $\mathbb R^2$), `thm-newtonian-potential-for-holder-data-is-classical`,
  `lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials`,
  `thm-weyl-lemma-for-the-laplacian`,
  `thm-continuous-partials-and-cauchy-riemann-imply-holomorphic`,
  `lem-c-k-boundary-flattening-preserves-wkp-locally`,
  `cor-injective-holomorphic-derivative-nonzero`,
  `thm-euclidean-inverse-function-theorem`,
  `thm-uniformization-simply-connected-riemann-surfaces`,
  `thm-biholomorphic-self-maps-riemann-sphere-are-mobius`,
  `thm-three-point-transitivity-mobius-transformations`,
  `thm-stereographic-projection-riemann-sphere-homeomorphism`,
  `thm-banach-alaoglu`. No hypothesis mismatch was found at scope level.
- **Cross-batch consumers.** 36 item-level edges touch the pair: 29 consume
  batch-12 items (all reviewed in the ledger) and 7 are batch-14 consumers of
  `def-measurable-beltrami-coefficient`, `def-weak-solution-beltrami-equation`
  and `thm-measurable-riemann-mapping-sphere`
  (`thm-quasiconformal-welding-existence`,
  `lem-conformal-removability-is-quasiconformally-invariant`,
  `lem-positive-area-compact-sets-are-not-conformally-removable`). Both page
  edges (this page → batch 12; batch 14 → this page) carry reviews. The three
  interfaces those consumers need are exactly what the A page states.
- **Published consumers.** No published item or page references any of the 15
  new ids, so the pair creates no published-consumer repair obligation,
  matching the owner direction.
- **Result.** No prerequisite used by this pair was found absent from both the
  published library and the current scaffold. The findings F1–F5 below are
  bookkeeping/plan-declaration observations, not missing suppliers.

## 5. Intended role in the library

CA-QC-2 is the complex-analysis station for measurable conformal structures and
the measurable Riemann mapping theorem, and the source of the quasiconformal
coefficient interface consumed by the downstream welding/removability pair
(CA-QC-3, batch 14) and, later, by deformation theory. The pair delivers the
full local technical core on the same A page (local Hölder charts, weak
factorization, regularity/Jacobian) as directed by the owner, and the B page
illustrates the affine model, the approximation step, Möbius normalization, the
conformal pullback law and the necessity of normalization. The design's
Teichmüller/deformation boundary (§§14.7–14.9) is deliberately outside this
pair; §14.8's deferral destination is questionable — see F1.

## 6. Findings for the owner (not scope-insufficiency findings)

1. **F1 — deferred row §14.8 has a destination that does not cover it
   (confirmed; owner action recommended).** The coverage row "§14.8 Dependence
   on parameters (continuity and holomorphic dependence of normalized solutions
   on the coefficient)" is disposed `deferred` to
   `periods-jacobians-and-abel-jacobi-theory`. That page's binding design
   (CA-RS-3, `plan-complex-analysis-track.md` L4049–4078) covers period
   pairings, the Riemann bilinear relations, Jacobians and Abel–Jacobi theory;
   it contains no parameter-dependence/Beltrami deformation content, and no
   other page in this frontier does (CA-QC-3 explicitly excludes holomorphic
   motions and Teichmüller space). The CA-QC-2 design itself places §§14.7–14.9
   in "D(Teichmüller/deformation theory)", i.e. outside this pair, so this is
   not a scope gap of the pair; the deferral record should be re-disposed as
   `owner-decision`/out-of-frontier or re-targeted to a future
   deformation-theory pair. No item or statement change is requested.
2. **F2 — page `requires` completeness and redundancy (plan-level, already
   recorded by beta).** (a) `lem-smooth-beltrami-coefficients-admit-quasiconformal-solutions`
   declares the published `thm-uniformization-simply-connected-riemann-surfaces`
   (page `hyperbolic-riemann-surfaces-and-uniformization`, order 1616,
   published), which is not in order 1620's `requires`; availability and
   ordering are unaffected (published earlier page, item-level citation
   allowed), and the omission was already recorded in the batch-13 notes for
   the owner. (b) `validate-plan` exits 0 but flags redundant `requires`
   entries (e.g. `weak-and-weak-star-topologies` and
   `banach-alaoglu-goldstine-and-krein-milman` also reachable through
   `reflexivity-and-eberlein-smulian`, and `smooth-approximation-and-sobolev-extension`
   through `schauder-and-lp-elliptic-estimates`). Plan hygiene only; no
   scaffold action required.
3. **F3 — minor dependency hygiene in the new scaffold (author action
   recommended; no missing supplier).** `lem-local-holder-cauchy-transform-estimate`
   defines $Tq=-4\partial_zNq$, $Sq=\partial_zTq$ and uses the Wirtinger
   operators throughout, but declares no dep on (and has no link to) the
   published `def-wirtinger-derivatives`; the same pattern holds for
   `def-weak-solution-beltrami-equation` and `def-biholomorphic-map` (chart
   clause). Item-level citation of published items is permitted, so nothing is
   blocked; recommend adding these deps when the authors next touch the
   scaffold, so `depcheck` sees every actual interface.
4. **F4 — Bishop Ch. 3 §4 harvested row is broader than the declined §5
   (bookkeeping nuance).** The §4 row (disposition `inline`, item
   `lem-area-and-l2-derivative-bounds-for-quasiconformal-maps`) bundles
   Lemma 4.6, the reverse-Hölder-type $\operatorname{diam}(f(Q))^2$ lower bound,
   while §5 legally declines the Gehring/Bojarski $p>2$ self-improvement that
   uses it; the pair asserts no reverse-Hölder or $p>2$ claim. Recommend
   narrowing the row description to Theorems 4.1–4.2, Corollaries 4.3/4.5 and
   Lemma 4.4, or noting that Lemma 4.6 is read only as context. No item change.
5. **F5 — bookkeeping: batch-13 notes tally vs coverage file.** The notes
   summarize the 35 rows as 2 included / 13 inline / 12 already-published /
   2 deferred / 6 out-of-scope; the current coverage file (authoritative, and
   the file the checklist reads) records 2 / 16 / 5 / 2 / 10. The discrepancy
   is a note-level aggregate error with no disposition, item, or scope
   consequence; recording it here so the run record is consistent.

## 7. Checks run

| Check | Result |
|---|---|
| `node tools/manifest-integrity.mjs --run frontier-43-complex-representation-15` | 30 pages owed, 30 in the manifests; no scope drift |
| `node tools/manifest-deps.mjs research/…-batch-13.pages.json` | 15 items, 0 errors |
| `node tools/coverage-checklist.mjs research/…-batch-13.coverage.json --require-destination` | 1 page, 35 rows, 0 errors, 1 expected `coverage-low-yield` warning (confirmed above) |
| `node tools/source-fetch-check.mjs --coverage …-batch-13.coverage.json` | 4/4 fetch-verified, 4/4 resolved |
| Independent re-download of all four sources (this review) | 4/4 byte- and sha256_16-exact to the stamps |
| Locator re-reads (Lyubich §§14.1–14.6, 14.10.1; Bishop Thm 2.11/2.10, Thm 6.1, Lemma 4.4; Astala intro; Hunter Thm 2.28) | all present as claimed |
| `node tools/item-dependency-levels.mjs check --run …` | 371 items / 30 pages, max level 28, no errors |
| `node tools/step1-decisions.mjs check --run …` | 371/371 ready, closed |
| `node tools/frontier-item-gate.mjs --run … --tool validate-plan` | exit 0; acyclic/consistent, `redundant-prereq` warnings only |
| Custom dependency closure (this review) | 81 distinct deps; 64 published + 17 in-run; 0 missing |
| Custom wikilink resolution (this review) | 78 occurrences; 0 unresolved |
| Cross-batch ledger (this review) | 36 item edges + 2 page edges touching the pair; each reviewed |
| Published-consumer scan (this review) | 0 published references to the 15 new ids |

## 8. Scope decision

The planned definitions, results and examples cover the intended subject at
design strength: the measurable Beltrami coefficient and its tensor/ellipse-field
reading, weak solutions, the sphere MRMT with Möbius uniqueness and exact
three-point normalization, local integrability, the fixed-support Cauchy/Hölder
operator, the nondegenerate local Hölder chart, the injectivity-free weak
factorization, the exact-exponent regularity and nonvanishing-Jacobian
theorem, plus the two correctly justified suppliers for the
approximation/normalized-compactness existence route; the B page carries
exactly the five design examples/counterexamples. All prerequisite checks
resolve, source coverage is complete and independently re-verified, no
published consumer is affected, and no prerequisite is absent from both the
published library and the current scaffold. Findings F1–F5 are owner/author
observations, none omitting a design-promised topic, so the scope decision is
**`sufficient`**.

Receipt recorded with
`node tools/step3-decisions.mjs record-scope --run frontier-43-complex-representation-15
--page beltrami-equation-and-measurable-riemann-mapping --decision sufficient …`
(`research/frontier-43-complex-representation-15-step3a-review-beltrami-equation-and-measurable-riemann-mapping.json`).
Any scaffold addition applied for F1–F5 changes the scope hash and reopens the
pair's scope decision; the owner would then record `proceed` for the resulting
scope. No item approval, proof judgement, or owner record is made here.

## Appendix — inventory bound to this decision

A page, dependency-level order (10 items): `def-measurable-beltrami-coefficient`
(def), `lem-local-holder-cauchy-transform-estimate` (lem),
`def-weak-solution-beltrami-equation` (def),
`lem-nondegenerate-local-holder-beltrami-coordinates` (lem),
`lem-weak-beltrami-factorization-in-holder-coordinates` (lem),
`lem-area-and-l2-derivative-bounds-for-quasiconformal-maps` (lem),
`lem-smooth-beltrami-coefficients-admit-quasiconformal-solutions` (lem),
`thm-measurable-riemann-mapping-sphere` (thm),
`cor-local-integrability-beltrami-structures` (cor),
`thm-holder-regularity-beltrami-solutions` (thm).

B page (5 items): `ex-piecewise-affine-approximations`,
`ex-constant-coefficients-and-affine-solutions`,
`ex-normalization-by-mobius-maps`, `ex-pullback-of-a-measurable-ellipse-field`
(examples), `cex-uniqueness-of-beltrami-solutions-without-normalization`
(counterexample).
