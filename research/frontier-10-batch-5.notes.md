# frontier-10 batch 5 — Beta scaffold notes

**Owner:** Beta-frontier-10-5  
**Step:** 2 scaffold complete, subject to the determinant prerequisite blocker below  
**Writable scope observed:** only the four `research/frontier-10-batch-5.*` artifacts

## Inventory and proposed page summaries

- `fubini-and-change-of-variables` (A, order 237): **25 items** — 3 definitions, 7 lemmas, 6 theorems, and 9 corollaries.
- `fubini-and-change-of-variables-examples` (B, order 238): **13 items** — 9 examples and 4 counterexamples.
- Total: **38 items**. The A page is below the owner's hard 60-item split threshold, so **no split is proposed**.

Proposed A-page summary, paragraph 1: This page proves the bounded Riemann version of Fubini's theorem without pretending that every section of an integrable function is integrable. It first compares product-grid Darboux sums with lower and upper section integrals, then obtains rectangular Fubini, repeated integration, Jordan-set Fubini, Cavalieri's principle, and integration over a planar region between continuous graphs.

Proposed A-page summary, paragraph 2: The second half builds the Riemann/Jordan change-of-variables machinery from the determinant upward: linear content scaling, local cube distortion, preservation of compact Jordan sets, and the change-of-variables theorem for compact Jordan sets, compactly supported integrands, and bounded open Jordan sets. It ends by reconciling the absolute-Jacobian formula with the library's oriented one-dimensional substitution theorem. No measure-theoretic theorem or catalogue page is used.

Proposed B-page summary, paragraph 1: The companion page tests exactly where Riemann Fubini is subtle: an integrable function can have a nonintegrable section, one existing iterated integral need not imply multiple integrability, and nonintegrable sections can occur for a dense content-zero set of parameters. A worked exponential integral and a shear example show the positive computational uses.

Proposed B-page summary, paragraph 2: Coordinate examples compute the Jacobians for parallelepipeds, polar, cylindrical, spherical, and hyperspherical coordinates on honest injectivity domains. Three counterexamples isolate the hypotheses of change of variables: the polar seam, the sign error caused by omitting the absolute value, and double-counting by a noninjective map.

## Canonical-coverage harvest

The machine receipt is `research/frontier-10-batch-5.coverage.json`. It records **46 source headings** from two independent full treatments. Of these, **45 are accepted** — 30 `included` and 15 `inline` — and **1 is declined**. Those accepted headings map to 27 distinct scaffolded items; repeated mappings are intentional because several source exercises are proof components of one library theorem. The other eleven scaffolded items are explicit proof machinery, well-definedness machinery, or direct hypothesis-testing examples/counterexamples rather than unharvested canonical results.

The only decline is Jiří Lebl, Exercise 10.2.6, the singular integrand
`(x^2-y^2)/(x^2+y^2)^2` with unequal iterated improper integrals. It is out of scope because its claimed iterated values are improper integrals at a planar singularity, whereas this page works only with bounded Riemann integrands on rectangles and Jordan sets. The result belongs to the already published `improper-integrals` topic; it is not declined for lack of a local lemma. This is the decline most likely to be challenged, and the distinction between improper and bounded Riemann integration is the defense.

No heading is marked `deferred`. In particular, the determinant and compact-neighborhood prerequisites are built or made explicit rather than used as reasons to drop change of variables.

## Source ledger and licensing

### Jiří Lebl, *Basic Analysis II: Introduction to Real Analysis, Volume II*

- PDF: <https://www.jirka.org/ra/realanal2.pdf>
- Current HTML checked alongside the PDF: <https://www.jirka.org/ra/html/sec_iteratedints.html>, <https://www.jirka.org/ra/html/sec_jordansets.html>, and <https://www.jirka.org/ra/html/sec_mvchangeofvars.html>
- Errata checked: <https://www.jirka.org/ra/errata2.html>
- Exact harvest: §10.2 in full; §10.5 Propositions 10.5.8–10.5.9 and Exercises 10.5.3 and 10.5.6; §10.7 in full.
- Role: textbook primary for the upper/lower-integral formulation of Riemann Fubini, exceptional sections, compact-Jordan change of variables, and compact/open-domain variants.
- Licensing: the text advertises a Creative Commons Attribution–Noncommercial–ShareAlike license. The scaffold nevertheless paraphrases mathematical content; step 5 should cite the URL and must not reproduce extended source prose.

### Anatole Leibman, *Multidimensional Real Analysis*

- PDF: <https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf>
- Exact harvest: §5.4 in full; §5.5 from Lemma 5.5.1 through Theorem 5.5.7, the compactness remark following it, and the four coordinate examples immediately following.
- Role: independent full lecture-note treatment for product and regional Fubini, Cavalieri, linear and nonlinear Jordan-volume scaling, and polar/cylindrical/spherical/hyperspherical coordinates.
- Licensing: no explicit reuse license was found in the material inspected. Treat it as citation-only: paraphrase results and proofs, give the URL, and copy no extended prose or figures.

No encyclopedia entry is used as primary backing. No external fallback is planned: every mathematical dependency is either published on disk, earlier in this page pair, or part of the exact upstream determinant interface proposed below.

## Source defects and convention reconciliation

1. **Lebl Proposition 10.5.8 is false as currently stated.** Its current HTML assumes only that `φ` is continuous on the bounded open region `U`; this permits an unbounded nonintegrable function such as `φ(x,y)=1/x` on `(0,1)^2`. The erratum added continuity but did not add boundedness or extendability. The scaffold repairs the theorem by requiring a continuous extension to the compact closure (equivalently, the proof may state bounded Riemann integrability on a bounding rectangle). This is an upstream-source defect, not a published-library defect.
2. Lebl writes `J_g` for the Jacobian determinant. The library already uses `Jf` for the Jacobian matrix. New text must call the matrix `Jg` and the scalar factor `det Jg` or the absolute Jacobian determinant; it must not overload `J_g`.
3. Lebl's and Leibman's “measure zero” language in these chapters is the finite-cover null/content-zero notion already published by this library, not Lebesgue measure. Authoring must normalize to `null` or `content zero` and never cite `deferred-measure-and-integration` as machinery.
4. Leibman sometimes says “Lebesgue measurable” while working entirely with bounded Jordan content and Riemann integration. Normalize those claims to **Jordan measurable**; no Lebesgue measurability claim is imported.
5. Leibman's compact-set “diffeomorphism” convention means a map that extends to a diffeomorphism of open neighborhoods. The library's statement must spell out the open domain, injectivity near the compact set, and invertibility of the derivative instead of defining differentiability on an arbitrary compact set.
6. The nonlinear theorem uses `|det Dg|`. In one dimension this is the unoriented image formula with `|g'|`; the published `thm-substitution` is oriented and uses `g'`. The final corollary must explain both increasing and decreasing cases rather than present the formulas as contradictory.
7. Lebl's current §10.2 HTML corrects the old Exercise 10.2.9 order typo recorded in the errata. The scaffold follows the corrected order.
8. Lebl's current proof of Theorem 10.7.2 contains the inverse-norm/minimum-Jacobian/Darboux-refinement corrections listed in the errata; the proof contract follows the corrected route.

## Structural blocker: determinant machinery is not yet authored

The assigned `requires` list names only `the-riemann-integral-in-rn-and-jordan-content` and `inverse-and-implicit-function-theorems`. That cannot license the canonical change-of-variables theorem: there is no determinant definition or determinant theorem among those pages, and no determinant item is published on disk. The algebra prose explicitly says that “the change of variables factor is a determinant,” but the present `plan-spec.json` leaves the relevant pages empty.

Step 3/4 must adjudicate and splice these two additional A-page prerequisites, both earlier than order 237:

- `gaussian-elimination-and-row-reduction` (order 80)
- `determinants-of-matrices-over-a-commutative-ring` (order 82)

They must expose, with these ids or with a recorded id substitution applied consistently to this batch, the following exact interfaces before step 5 authors this page:

- `def-determinant-of-a-square-matrix`: defines the determinant of a square matrix over a commutative ring and its absolute real value when specialized to real matrices.
- `thm-determinant-under-elementary-row-operations`: row swap changes sign, nonzero row scaling scales the determinant by that scalar, and row addition leaves it unchanged; it must cover singular matrices.
- `thm-determinant-multiplicative`: for square matrices of the same finite size, `det(AB)=det(A)det(B)`.
- `thm-invertible-matrices-factor-into-elementary-matrices`: every invertible finite square real matrix is a finite product of elementary matrices.

The first three belong on the determinant page; the factorization belongs on Gaussian elimination. This is not a request to defer or drop the linear and nonlinear change-of-variables results. It is the machinery the owner instructed us to build. Until those upstream items are in the spliced plan, the batch has unresolved planned dependencies and cannot honestly proceed to step 5. No existing published item was found unambiguously false.

## Proof and authoring obligations

- `def-sections-and-iterated-riemann-integrals` must define lower and upper section integrals even when a section is not integrable, then define an iterated integral only when the relevant ordinary section integrals exist except on an explicitly permitted content-zero set and the resulting function is integrable. Do not write an expression whose inner integral is undefined.
- Rectangular Fubini must state both orders and the exceptional-section clause. It must not assert that every section of a Riemann-integrable function is integrable.
- Jordan Fubini must prove independence of both bounding rectangles and make empty sections contribute zero.
- The continuous-graphs theorem must use a continuous extension to the closure, not mere continuity on an open region.
- The determinant definition must restrict to finite `n>=1`; no canonical embedding may be written applied to a natural number. Bare basis-inclusion notation is irrelevant here.
- The linear scaling proof must handle singular matrices separately. Factorization into elementary matrices applies only after invertibility is established.
- The near-identity cube lemma must explicitly prove the cube is a nonempty complete metric space using `thm-euclidean-space-complete` plus `thm-complete-subspace-iff-closed`; it must isolate zero radius and use a strict contraction constant below one.
- Image Jordan measurability needs compactness, local bi-Lipschitz control, the boundary inclusion `boundary(g(K)) subset g(boundary K)`, and null preservation. Neither openness nor global Lipschitz behavior may be assumed without proof.
- `lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set` is the reusable discharge of Lebl Exercise 10.5.6. It cites `lem-compactness-is-intrinsic` to convert the ambient open cover to the library's intrinsic compactness convention before taking a finite subcover.
- The compact-Jordan change-of-variables theorem must prove transformed integrability, not assume it; apply the one-sided estimate to the inverse, use chain rule plus determinant multiplicativity, and treat signed functions through positive/negative parts.
- `def-support-and-compactly-supported-riemann-integral-in-rn` defines the global notation using a nondegenerate rectangle containing the compact support, and `lem-compactly-supported-riemann-integral-is-well-defined` proves independence by passage to a common bounding rectangle. The compact-support corollary must cite both and must not silently read the global integral as an improper integral.
- The bounded-open corollary must state hypotheses strong enough to control the exhaustion remainders (bounded integrands and the relevant integrability/derivative control). Bounded source and image alone are not a substitute for those hypotheses.
- Coordinate formulas must restrict to seam-free compact boxes, positive radii, and (for spherical coordinates) angles away from the poles whenever the main injective theorem is invoked.

## Component provenance and rationale

`literature-derived` means the statement and proof route are directly represented in one or both harvested sources. `ai-altered` means the source theorem is repaired, adapted to the library's exact Jordan conventions, decomposed into prerequisite lemmas, or strengthened only by a direct corollary. No proof text is copied.

| item | statement | proof | rationale |
|---|---|---|---|
| `def-sections-and-iterated-riemann-integrals` | ai-altered | not-applicable | Lebl §10.2 notation adapted to lower/upper section integrals and library definitions. |
| `lem-product-grid-bounds-for-section-integrals` | literature-derived | literature-derived | Lebl Exercises 10.2.2–10.2.3, explicit Darboux regrouping. |
| `thm-riemann-fubini-on-product-rectangles` | literature-derived | literature-derived | Lebl Theorems 10.2.2–10.2.3 and Leibman 5.4.1. |
| `cor-repeated-riemann-integrals-on-rectangles` | literature-derived | literature-derived | Lebl untagged corollary after 10.2.3. |
| `cor-riemann-integral-of-a-product-function` | literature-derived | literature-derived | Lebl Exercise 10.2.5 and the coordinate-independent variant. |
| `cor-finite-section-support-forces-zero-integral` | literature-derived | literature-derived | Lebl Exercise 10.2.4. |
| `thm-jordan-fubini-by-sections` | literature-derived | literature-derived | Leibman Theorem 5.4.2, normalized to zero extensions. |
| `cor-cavalieri-principle-for-jordan-content` | literature-derived | literature-derived | Leibman Theorems 5.4.3–5.4.4. |
| `thm-fubini-over-a-region-between-continuous-graphs` | ai-altered | ai-altered | Repairs Lebl Proposition 10.5.8 by requiring extension to the closure. |
| `def-jacobian-determinant-of-a-c-one-map` | ai-altered | not-applicable | Dictionary between published Jacobian matrix and upstream determinant. |
| `lem-finite-jordan-cover-sum-bounds` | literature-derived | literature-derived | Leibman Lemma 5.5.1. |
| `thm-linear-images-scale-jordan-content-by-absolute-determinant` | literature-derived | literature-derived | Lebl Proposition 10.7.1 and Leibman Lemmas 5.5.2–5.5.4. |
| `cor-parallelepiped-content-is-the-absolute-determinant` | literature-derived | literature-derived | Leibman Lemma 5.5.4. |
| `lem-near-identity-c-one-maps-sandwich-cubes` | literature-derived | ai-altered | Leibman Lemma 5.5.5, with completeness and fixed-point obligations made explicit. |
| `lem-local-c-one-volume-distortion` | literature-derived | literature-derived | Leibman Lemma 5.5.6 and Lebl's corrected 10.7.2 proof. |
| `thm-injective-c-one-images-of-compact-jordan-sets-are-jordan` | literature-derived | ai-altered | Lebl Proposition 10.5.9, decomposed through local bi-Lipschitz control. |
| `lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set` | literature-derived | ai-altered | Lebl Exercise 10.5.6, stated as reusable machinery. |
| `lem-bounded-open-jordan-sets-have-compact-grid-exhaustions` | ai-altered | ai-altered | Lebl Exercise 10.7.6 proof prerequisite isolated as a lemma. |
| `thm-change-of-variables-for-compact-jordan-sets` | literature-derived | literature-derived | Lebl Theorem 10.7.2 and Leibman Theorem 5.5.7. |
| `cor-jordan-content-under-a-c-one-diffeomorphism` | literature-derived | literature-derived | Constant-one case of both sources' change-of-variables theorem. |
| `def-support-and-compactly-supported-riemann-integral-in-rn` | ai-altered | not-applicable | Makes Lebl Exercise 10.7.5's global notation explicit using bounded Riemann integrals only. |
| `lem-compactly-supported-riemann-integral-is-well-defined` | ai-altered | ai-altered | Required definition-justification item; reduces two bounding rectangles to the published Jordan-integral independence lemma. |
| `cor-change-of-variables-for-compactly-supported-functions` | literature-derived | ai-altered | Lebl Exercise 10.7.5, adapted to the library's bounded-rectangle integral. |
| `cor-change-of-variables-on-bounded-open-jordan-sets` | literature-derived | ai-altered | Lebl Exercise 10.7.6, with exhaustion hypotheses exposed. |
| `cor-one-dimensional-change-of-variables-with-absolute-derivative` | literature-derived | ai-altered | Lebl §10.7 introduction reconciled with published oriented substitution. |
| `ex-riemann-integrable-function-with-a-nonintegrable-section` | literature-derived | literature-derived | Lebl Example 10.2.1. |
| `cex-one-existing-iterated-integral-does-not-give-riemann-integrability` | literature-derived | ai-altered | Lebl Exercise 10.2.8 with all lower/upper sections computed. |
| `ex-riemann-integrable-function-with-dense-nonintegrable-sections` | literature-derived | literature-derived | Lebl Exercise 10.2.9. |
| `ex-fubini-computes-the-integral-of-x-exp-xy` | literature-derived | literature-derived | Lebl Exercise 10.2.1. |
| `ex-cavalieri-shear-preserves-jordan-content` | literature-derived | literature-derived | Leibman linear shear argument. |
| `ex-parallelepiped-content-from-a-matrix` | ai-altered | ai-altered | Concrete finite matrix chosen to exercise Leibman's determinant formula. |
| `ex-polar-change-of-variables-on-an-annular-sector` | literature-derived | literature-derived | Leibman polar-coordinate example, restricted to an injective compact sector. |
| `ex-cylindrical-coordinate-jacobian` | literature-derived | literature-derived | Leibman cylindrical-coordinate example. |
| `ex-spherical-coordinate-jacobian` | literature-derived | literature-derived | Leibman spherical-coordinate example. |
| `ex-hyperspherical-coordinate-jacobian` | literature-derived | ai-altered | Leibman general hyperspherical formula with induction made explicit. |
| `cex-polar-coordinates-are-not-globally-injective` | ai-generated | ai-generated | Direct seam/origin witnesses; statement and proof must be rechecked at step 5. |
| `cex-omitting-the-absolute-jacobian-reverses-sign` | ai-generated | ai-generated | Direct reflection witness; statement and proof must be rechecked at step 5. |
| `cex-noninjective-change-of-variables-double-counts` | ai-generated | ai-generated | Direct two-interval squaring witness; statement and proof must be rechecked at step 5. |

The three AI-generated counterexamples are leaves and may not become dependencies. Their step-5 counterexample-search obligation is concrete: recompute the displayed witnesses, endpoints, images, derivatives, and both integrals independently. The matrix example is `ai-altered`, not generated as a theorem; choose an explicitly triangular integer matrix so its direct base-times-height check is transparent.

## Published dependency audit

Every id below was opened from `items/<id>.md`, read on disk, and confirmed `status: published`. “Source-checked” means its exact published statement was compared with the harvested textbook/lecture-note route or with the authoritative reference recorded in that item's own source ledger. “Established-from-knowledge” is used only for stable foundational interfaces whose exact statement and boundary conventions were read directly.

### Source-checked

`cex-dirichlet-is-not-riemann-integrable`, `cor-exponential-reciprocal-and-positivity`, `cor-jordan-content-finite-additivity`, `cor-trigonometric-parity-and-pythagorean-identity`, `def-c-one-map-and-local-inverse`, `def-dirichlet-and-thomae-functions`, `def-invertible-euclidean-linear-map`, `def-jacobian-matrix-and-gradient`, `def-jordan-inner-and-outer-content`, `def-multidimensional-darboux-integral`, `def-multidimensional-darboux-sums`, `def-multidimensional-grid-partition`, `def-multidimensional-rectangle-and-volume`, `def-null-and-content-zero-in-rn`, `def-riemann-integral-over-a-jordan-set`, `ex-thomae-is-riemann-integrable-with-integral-zero`, `lem-derivative-of-a-power`, `lem-euclidean-linear-maps-have-matrices-and-are-bounded`, `lem-finite-cube-covers-admit-grid-control`, `lem-jordan-set-integral-well-defined`, `lem-p-norms-are-norms-and-induce-the-published-metrics`, `thm-banach-fixed-point`, `thm-chain-rule-for-total-derivatives`, `thm-complete-subspace-iff-closed`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `thm-continuous-injection-on-an-interval-is-strictly-monotone`, `thm-continuous-on-a-rectangle-is-riemann-integrable`, `thm-derivative-of-exponential`, `thm-euclidean-inverse-function-theorem`, `thm-ftc-second-part`, `thm-graphs-of-continuous-functions-have-content-zero`, `thm-heine-borel-rn`, `thm-jordan-boundary-criterion`, `thm-jordan-content-and-indicator-integrability`, `thm-lipschitz-images-of-null-sets-in-rn-are-null`, `thm-mean-value-inequality-for-total-derivatives`, `thm-multidimensional-integral-properties`, `thm-multidimensional-riemann-criterion`, `thm-sine-and-cosine-derivatives`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `thm-substitution`, `thm-total-derivative-computes-directional-and-partial-derivatives`.

### Established-from-knowledge after exact on-disk interface check

`def-metric-ball`, `def-metric-compactness`, `def-metric-continuity`, `def-metric-interior-closure-boundary`, `def-metric-topology`, `lem-compactness-is-intrinsic`, `lem-finite-sum-laws`, `thm-continuous-image-of-a-compact-space-is-compact`, `thm-euclidean-space-complete`, `thm-induction-principle`.

The four determinant ids listed in the blocker are **not** in this published audit: all four are absent from `items/` and are proposed planned-earlier dependencies. No published dependency is treated as trusted merely because the old prose scaffold described it.

## Applyable prose-scaffold amendments

These are proposals only; Beta did not edit either prose file.

1. In `research/plan-algebra-track.md`, under `## Why this track exists`, replace:

   > Downstream, the planned analysis pages that most need linear algebra had none beneath them: `rn-as-a-normed-space`, `the-total-derivative`, `inverse-and-implicit-function-theorems` and `fubini-and-change-of-variables`. The total derivative *is* a linear map and the change of variables factor *is* a determinant.

   with:

   > Downstream, the planned analysis pages that most need linear algebra had none beneath them: `rn-as-a-normed-space`, `the-total-derivative`, `inverse-and-implicit-function-theorems` and `fubini-and-change-of-variables`. The total derivative *is* a linear map and the change-of-variables factor *is* a determinant. Consequently the Fubini/change-of-variables page must require both Gaussian elimination and the determinant page, and those pages must expose elementary-matrix factorisation, determinant behavior under elementary row operations, and determinant multiplicativity before the analytic page is authored.

2. In `research/plan-complex-analysis-track.md`, immediately after the prerequisite-table row whose left cell is `175 / 177`, insert:

   > **frontier-10 RA-38 note.** The order-177 page is the Riemann/Jordan-content theory only: rectangular and regional Fubini plus compact-Jordan change of variables. Its determinant dependency is supplied by the earlier algebra track. It does not use the deferred measure catalogue. The several-complex-variables polydisc argument may cite its rectangular Riemann-Fubini theorem, but no Tonelli or measure-theoretic almost-everywhere theorem.

## Downstream impact and blockers

The complex-analysis prose names this page as support for iterated polydisc integrals and the several-complex-variables componentwise theory. The rectangular Riemann-Fubini item is therefore the intended stable downstream interface; downstream pages should not cite proof-decomposition lemmas.

**Blocker:** the determinant definition and three determinant/elementary-matrix theorems are not on disk and not currently declared by the assigned page. They require step-3 owner/orchestrator adjudication and step-4 plan splicing. Apart from that structural prerequisite and the gate-wrapper sandbox failure recorded below, no source, licensing, or other mathematical blocker was found. The requested split was evaluated and is unnecessary.

## Step-2 gate record

- `node tools/validate-plan.mjs research/plan-spec.json`: **PASS** — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids in the currently spliced item lists.
- `node tools/coverage-checklist.mjs research/frontier-10-batch-5.coverage.json`: **PASS** — 1 page, 46 harvested headings, 0 errors, 0 warnings.
- Direct `node tools/depsource.mjs research/plan-spec.json`: **PASS** — 0 unresolved dependencies in the currently spliced plan.
- `node tools/gates.mjs --step 2 --run frontier-10`: **ENVIRONMENTAL BLOCKER** — the wrapper attempted three nested `spawnSync /usr/bin/node` calls and each returned `EPERM` in the workspace sandbox. The underlying three commands were run directly without escalation; each passed. A non-escalated PTY retry was rejected before launch because the runtime could not spawn `codex-linux-sandbox`. No permission prompt was issued. This wrapper result cannot be made green from the allowed sandbox without changing a normative tool or requesting escalation, neither of which is authorized.
- Additional manifest-only diagnostic: the batch shape is valid, and the only seven reported dependency occurrences are references to the four deliberately proposed determinant interfaces. This is the structural blocker above, to be resolved by the step-3/4 splice.
