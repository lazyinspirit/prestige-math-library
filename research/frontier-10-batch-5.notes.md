# frontier-10 batch 5 — Step-5 authoring notes

**Owner:** Beta-frontier-10-5  
**Step:** 5 authoring complete for the settled 25-item A page and 13-item B page; final validation is recorded below
**Writable scope observed:** only the batch-5 item ids, the two batch-5 page files, and the three writable batch-5 authoring ledgers

## Inventory and authored page summaries

- `fubini-and-change-of-variables` (A, order 237): **25 items** — 3 definitions, 7 lemmas, 6 theorems, and 9 corollaries.
- `fubini-and-change-of-variables-examples` (B, order 238): **13 items** — 9 examples and 4 counterexamples.
- Total: **38 items**. The A page is below the owner's hard 60-item split threshold, so **no split is proposed**.

Authored A-page summary, paragraph 1 (51 words): Multidimensional Darboux integration and Jordan content provide rectangles, grids, null boundaries, and integration over Jordan sets. Euclidean differentiation supplies $C^1$ maps, Jacobian matrices, inverse functions, and derivative estimates; row reduction and determinants supply the algebraic volume factor. Together these declared prerequisites support finite section arguments and local linearization without measure theory.

Authored A-page summary, paragraph 2 (65 words): Lower and upper section integrals lead to rectangular and Jordan-set Fubini theorems, repeated integration, Cavalieri's principle, and graph-bounded regions. Determinants then control linear images and parallelepipeds. Near-identity cube estimates yield local volume distortion and preservation of compact Jordan sets, culminating in change of variables for compact Jordan sets, compactly supported functions, and bounded open Jordan sets, with the one-dimensional absolute-derivative formula reconciled with oriented substitution.

The B page has no proposed summary body. Its examples and counterexamples remain
machine-composed from the manifest, as required by `SCHEMA.md`.

## Canonical-coverage harvest

The machine receipt is `research/frontier-10-batch-5.coverage.json`. It records **46 source headings** from two independent full treatments. Of these, **45 are accepted** — 30 `included` and 15 `inline` — and **1 is declined**. Those accepted headings map to 27 distinct scaffolded items; repeated mappings are intentional because several source exercises are proof components of one library theorem. The other eleven scaffolded items are explicit proof machinery, well-definedness machinery, or direct hypothesis-testing examples/counterexamples rather than unharvested canonical results.

The only decline is Jiří Lebl, Exercise 10.2.6, the singular integrand
`(x^2-y^2)/(x^2+y^2)^2` with unequal iterated improper integrals. It is out of scope because its claimed iterated values are improper integrals at a planar singularity, whereas this page works only with bounded Riemann integrands on rectangles and Jordan sets. The result belongs to the already published `improper-integrals` topic; it is not declined for lack of a local lemma. This is the decline most likely to be challenged, and the distinction between improper and bounded Riemann integration is the defense.

No heading is marked `deferred`. In particular, the determinant and compact-neighborhood prerequisites are built or made explicit rather than used as reasons to drop change of variables.

The B5 repair adds no batch-5 item and removes none, so the harvest still has
46 headings, 30 `included`, 15 `inline`, and one `out-of-scope`. The two
upstream determinant interfaces requested below are batch-9 items rather than
batch-5 harvest dispositions. The batch-5 results they license are already
anchored in the receipt at Lebl Proposition 10.7.1 and Theorem 10.7.2 and at
Leibman Theorem 5.5.2 and Theorem 5.5.7. Thus no source heading is invented or
duplicated merely to record a cross-batch dependency repair.

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

## Step-3 B5 repair: determinant interfaces

The original four-interface blocker has been resolved on disk. I opened
`research/frontier-10-batch-9.pages.json` and verified these exact planned-earlier
interfaces, titles, kinds, and homes:

- `def-determinant-of-a-square-matrix` — **definition**, “For $n\ge1$, the
  determinant over a commutative ring by the Leibniz formula, and $|\det A|$
  for a real matrix,” on `determinants-of-matrices-over-a-commutative-ring`.
- `thm-determinant-under-elementary-row-operations` — **theorem**, “For every
  square matrix, including singular ones, a row swap negates the determinant,
  scaling a row by any scalar scales it, and row addition leaves it unchanged,”
  on the determinant page.
- `thm-determinant-multiplicative` — **theorem**, “For same-sized finite square
  matrices over a commutative ring, $\det(AB)=\det(A)\det(B)$,” on the
  determinant page.
- `thm-invertible-matrices-factor-into-elementary-matrices` — **theorem**,
  “Every invertible finite square real matrix is a finite product of elementary
  matrices,” on `gaussian-elimination-and-row-reduction`.

Alpha's B5 finding correctly identifies two further load-bearing clauses. They
belong to batch 9; batch 5 does not mint them. This note is the requested
cross-batch handoff, with collision checks returning no occurrence of either id
in `items/`, `research/plan-spec.json`, or any current frontier-10 batch
manifest:

1. `thm-real-square-matrix-invertible-iff-determinant-nonzero` — **theorem**,
   title: “A finite square real matrix is invertible if and only if its
   determinant is nonzero.” It belongs on
   `determinants-of-matrices-over-a-commutative-ring`. The proof route is row
   reduction: an invertible matrix reduces to the identity; a noninvertible one
   reduces to a matrix with a zero row; the already scaffolded row-operation and
   triangular-determinant laws preserve whether the determinant is zero. The
   result is stated over $\mathbb R$, not over an arbitrary commutative ring,
   where “nonzero” must be replaced by “a unit.”
2. `cor-determinant-is-a-polynomial-in-the-matrix-entries` — **corollary**,
   title: “For every fixed finite size at least one, the determinant of a real
   square matrix is a polynomial in its matrix entries.” It also belongs on the
   determinant page and follows directly from the finite Leibniz formula.

The second interface is deliberately algebraic. A theorem on the determinant
page cannot cite the library's metric-continuity definition or the
componentwise algebra of continuous maps, because `metric-spaces` and
`rn-as-a-normed-space` follow the determinant page in the current plan. They do,
however, precede `fubini-and-change-of-variables`. Batch 5 therefore derives
the analytic clause exactly where it is legal: `def-c-one-map-and-local-inverse`
makes every Jacobian-matrix entry continuous,
`cor-determinant-is-a-polynomial-in-the-matrix-entries` supplies the finite
polynomial expression, `thm-componentwise-limits-and-continuity` gives closure
under finite sums, products, and absolute value, and
`thm-continuous-functions-on-compact-jordan-sets-are-integrable` makes the
absolute Jacobian determinant Riemann integrable on the compact Jordan set.
This is an order-correct implementation of Alpha's “polynomial, hence
continuous” requirement, not a disagreement with the mathematical finding.

The sources are explicit. Margalit--Rabinoff, *Interactive Linear Algebra*,
§4.1.2, “Invertibility Property,” states the real invertibility criterion and
proves it by row reduction:
<https://textbooks.math.gatech.edu/ila/1553/determinants-definitions-properties.html>.
Massot's untagged polynomial-evaluation observation immediately after
Definition 6.4.1 records the polynomial nature of the Leibniz expression:
<https://www.imo.universite-paris-saclay.fr/~patrick.massot/enseignement/poly_alg/cha-algebres.html>.
Lebl's proof of Theorem 10.7.2 explicitly uses continuity of
$x\mapsto|\det g'(x)|$ on compact rectangles:
<https://www.jirka.org/ra/html/sec_mvchangeofvars.html>. Batch 9 already
harvested the first two determinant sources but currently marks the
invertibility criterion `deferred` and the polynomial observation
`out-of-scope`. Those dispositions must change when batch 9 adds the two
interfaces: both results are now required by B5, and each proof closes with
machinery already in batch 9.

The batch-5 manifest now cites the real invertibility criterion from
`thm-linear-images-scale-jordan-content-by-absolute-determinant`, and cites the
polynomial corollary plus the two published continuity/integrability interfaces
from `thm-change-of-variables-for-compact-jordan-sets`. The proof contracts give
each citation an exact use. No linear or nonlinear change-of-variables result is
dropped, no external fallback is used, and the A page remains below the
60-item ceiling. The only remaining coordination condition is that batch 9 add
and harvest these two requested ids before Step 4 splices the level. No existing
published item was found unambiguously false.

## Proof and authoring obligations

- `def-sections-and-iterated-riemann-integrals` must define lower and upper section integrals even when a section is not integrable, then define an iterated integral only when the relevant ordinary section integrals exist except on an explicitly permitted content-zero set and the resulting function is integrable. Do not write an expression whose inner integral is undefined.
- Rectangular Fubini must state both orders and the exceptional-section clause. It must not assert that every section of a Riemann-integrable function is integrable.
- Jordan Fubini must prove independence of both bounding rectangles and make empty sections contribute zero.
- The continuous-graphs theorem must use a continuous extension to the closure, not mere continuity on an open region.
- The determinant definition must restrict to finite `n>=1`; no canonical embedding may be written applied to a natural number. Bare basis-inclusion notation is irrelevant here.
- The linear scaling proof must handle singular matrices separately. It must cite
  `thm-real-square-matrix-invertible-iff-determinant-nonzero` for the equality
  $\det A=0$ in that branch; row reduction and the thin-slab cover establish
  zero image content. Factorization into elementary matrices applies only after
  invertibility is established and is separately cited.
- The near-identity cube lemma must explicitly prove the cube is a nonempty complete metric space using `thm-euclidean-space-complete` plus `thm-complete-subspace-iff-closed`; it must isolate zero radius and use a strict contraction constant below one.
- Image Jordan measurability needs compactness, local bi-Lipschitz control, the boundary inclusion `boundary(g(K)) subset g(boundary K)`, and null preservation. Neither openness nor global Lipschitz behavior may be assumed without proof.
- `lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set` is the reusable discharge of Lebl Exercise 10.5.6. It cites `lem-compactness-is-intrinsic` to convert the ambient open cover to the library's intrinsic compactness convention before taking a finite subcover.
- The compact-Jordan change-of-variables theorem must first establish that
  $x\mapsto|\det J_g(x)|$ is continuous and Riemann integrable, using the
  polynomial determinant interface, the $C^1$ entrywise-continuity definition,
  componentwise continuity algebra, and compact-Jordan integrability of
  continuous functions. It must then prove transformed integrability rather
  than assume it; apply the one-sided estimate to the inverse, use chain rule
  plus determinant multiplicativity, and treat signed functions through
  positive/negative parts.
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

`cor-exponential-reciprocal-and-positivity`, `cor-jordan-content-finite-additivity`, `cor-trigonometric-parity-and-pythagorean-identity`, `def-c-one-map-and-local-inverse`, `def-dirichlet-and-thomae-functions`, `def-invertible-euclidean-linear-map`, `def-jacobian-matrix-and-gradient`, `def-jordan-inner-and-outer-content`, `def-multidimensional-darboux-integral`, `def-multidimensional-darboux-sums`, `def-multidimensional-grid-partition`, `def-multidimensional-rectangle-and-volume`, `def-null-and-content-zero-in-rn`, `def-riemann-integral-over-a-jordan-set`, `fs-bounded-implies-riemann-integrable`, `lem-derivative-of-a-power`, `lem-euclidean-linear-maps-have-matrices-and-are-bounded`, `lem-finite-cube-covers-admit-grid-control`, `lem-jordan-set-integral-well-defined`, `lem-p-norms-are-norms-and-induce-the-published-metrics`, `thm-banach-fixed-point`, `thm-chain-rule-for-total-derivatives`, `thm-complete-subspace-iff-closed`, `thm-componentwise-limits-and-continuity`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `thm-continuous-injection-on-an-interval-is-strictly-monotone`, `thm-continuous-on-a-rectangle-is-riemann-integrable`, `thm-derivative-of-exponential`, `thm-euclidean-inverse-function-theorem`, `thm-ftc-second-part`, `thm-graphs-of-continuous-functions-have-content-zero`, `thm-heine-borel-rn`, `thm-jordan-boundary-criterion`, `thm-jordan-content-and-indicator-integrability`, `thm-lipschitz-images-of-null-sets-in-rn-are-null`, `thm-mean-value-inequality-for-total-derivatives`, `thm-multidimensional-integral-properties`, `thm-multidimensional-riemann-criterion`, `thm-sine-and-cosine-derivatives`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `thm-substitution`, `thm-total-derivative-computes-directional-and-partial-derivatives`.

For the newly direct `thm-componentwise-limits-and-continuity` edge, I opened
its full Statement and checked clauses 1 and 3 against Leibman's independent
continuity algebra and multivariable-polynomial discussion in §1.4 of
<https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf>. Its
`provenance.statement` is `ai-altered`, but the exact clause needed here is
source-checked and eligible.

### Established-from-knowledge after exact on-disk interface check

`def-metric-ball`, `def-metric-compactness`, `def-metric-continuity`, `def-metric-interior-closure-boundary`, `def-metric-topology`, `lem-compactness-is-intrinsic`, `lem-finite-sum-laws`, `thm-continuous-image-of-a-compact-space-is-compact`, `thm-euclidean-space-complete`, `thm-induction-principle`.

None of the six determinant interfaces in the Step-3 handoff is in this
published audit. The original four are absent from `items/` but present in
batch 9's planned-earlier manifest; the two Alpha additions are absent from
`items/`, `plan-spec.json`, and all current batch manifests and are requested
from batch 9 above. No planned dependency is treated as trusted merely because
the old prose scaffold described it.

## Applyable prose-scaffold amendments

These are proposals only; Beta did not edit either prose file.

1. In `research/plan-algebra-track.md`, under `## Why this track exists`, replace:

   > Downstream, the planned analysis pages that most need linear algebra had none beneath them: `rn-as-a-normed-space`, `the-total-derivative`, `inverse-and-implicit-function-theorems` and `fubini-and-change-of-variables`. The total derivative *is* a linear map and the change of variables factor *is* a determinant.

   with:

   > Downstream, the planned analysis pages that most need linear algebra had none beneath them: `rn-as-a-normed-space`, `the-total-derivative`, `inverse-and-implicit-function-theorems` and `fubini-and-change-of-variables`. The total derivative *is* a linear map and the change-of-variables factor *is* a determinant. Consequently the Fubini/change-of-variables page must require both Gaussian elimination and the determinant page. Before the analytic page is authored, those pages must expose elementary-matrix factorisation, determinant behavior under elementary row operations, determinant multiplicativity, the real criterion $A$ invertible if and only if $\det A\ne0$, and the finite Leibniz expression as a polynomial in the matrix entries.

2. In `research/plan-complex-analysis-track.md`, immediately after the prerequisite-table row whose left cell is `175 / 177`, insert:

   > **frontier-10 RA-38 note.** The order-177 page is the Riemann/Jordan-content theory only: rectangular and regional Fubini plus compact-Jordan change of variables. Its determinant dependency is supplied by the earlier algebra track. It does not use the deferred measure catalogue. The several-complex-variables polydisc argument may cite its rectangular Riemann-Fubini theorem, but no Tonelli or measure-theoretic almost-everywhere theorem.

## Downstream impact and blockers

The complex-analysis prose names this page as support for iterated polydisc integrals and the several-complex-variables componentwise theory. The rectangular Riemann-Fubini item is therefore the intended stable downstream interface; downstream pages should not cite proof-decomposition lemmas.

The original four determinant interfaces are now present in batch 9 and are
declared by this batch. The remaining cross-batch condition is the two-item
handoff in the Step-3 repair section: batch 9 must add them before Step 4, then
the orchestrator must splice the already declared determinant/Gaussian page
requirements. This is not a request to drop or delay any batch-5 theorem. Apart
from that in-flight handoff, no source, licensing, mathematical, or split
blocker was found.

## Step-3 repair gate record

- `node tools/validate-plan.mjs research/plan-spec.json --rehomed research/frontier-10-rehomed.json`: **PASS** — 176 pages; the plan order is acyclic and has no item-level cycle, forward reference, B-page dependency, or unresolved id in the currently spliced lists.
- `node tools/coverage-checklist.mjs research/frontier-10-batch-5.coverage.json`: **PASS** — 1 page, 46 harvested headings, 0 errors, 0 warnings.
- The required isolated command `node tools/content-policy.mjs research/frontier-10-batch-5.pages.json --manifest-only --rehomed research/frontier-10-rehomed.json`: **EXPECTED CROSS-BATCH BLOCKER** — 9 `batch-dependency-missing` occurrences and no other error or warning. Seven occurrences are the four original interfaces that now exist in batch 9 but are not visible when only batch 5's manifest is supplied. The other two are the new determinant-criterion and polynomial interfaces requested from batch 9 in this repair.
- Whole-run diagnostic `node tools/content-policy.mjs research/frontier-10-batch-*.pages.json --manifest-only --rehomed research/frontier-10-rehomed.json`: **EXPECTED TWO-ITEM HANDOFF BLOCKER** — 577 scoped items, exactly 2 errors, 0 warnings. The errors are solely the two requested batch-9 ids: `thm-real-square-matrix-invertible-iff-determinant-nonzero` and `cor-determinant-is-a-polynomial-in-the-matrix-entries`.

The isolated content-policy command cannot become green in this round: making
the original four interfaces visible requires the orchestrator's Step-4 splice,
and making the final two visible requires batch 9 to accept this handoff. Both
actions are explicitly outside batch 5's writable scope. No wrapper gate was
run, as directed.

## Step-4 B-leaf dependency repair

The three forbidden dependencies on published examples-page items are repaired
without adding, dropping, or retitling any batch-5 item. The coverage harvest is
unchanged because no item was added and every harvested disposition still names
the same scaffolded result.

1. `ex-riemann-integrable-function-with-a-nonintegrable-section` now depends on
   the A-page result `fs-bounded-implies-riemann-integrable` instead of
   `cex-dirichlet-is-not-riemann-integrable` (**route 1: cite the underlying
   result**). The false-statement item's Refutation, step 4.1, proves the exact
   fact used here: the Dirichlet restriction has lower Darboux integral zero,
   upper Darboux integral one, and is not Riemann integrable. The proof contract
   now quotes that clause and no longer names the published B-page witness.
2. `cex-one-existing-iterated-integral-does-not-give-riemann-integrability`
   no longer depends on `cex-dirichlet-is-not-riemann-integrable` (**route 3:
   drop an unused dependency**). Its contract already computes the unequal
   lower and upper integrals of every nonzero vertical section directly, then
   invokes the planned rectangular Fubini theorem contrapositively; no step used
   the published counterexample.
3. `ex-riemann-integrable-function-with-dense-nonintegrable-sections` no longer
   depends on `ex-thomae-is-riemann-integrable-with-integral-zero` (**route 3:
   drop an unused dependency**). Its contract constructs the rational-
   denominator height function itself, proves each rational-height section is
   Dirichlet-type and nonintegrable, and proves multiple integrability by the
   finite-small-denominator/uniform-tail Darboux estimate. The one-dimensional
   Thomae example supplied no proof input.

The companion page now declares `the-exponential-function` and
`sine-cosine-and-the-definition-of-pi` in `requires`, in addition to its own A
page. These are genuine page prerequisites: the exponential computation cites
`thm-derivative-of-exponential` and
`cor-exponential-reciprocal-and-positivity`, while the coordinate examples cite
the derivative, parity/Pythagorean, sign/range, and zero-set/period results for
sine and cosine. The sine/cosine page itself reaches the exponential page, so
declaring both may produce the instructed `redundant-prereq` warning; that
warning is intentionally retained rather than overriding the dispatch.

For this repair I reopened and checked the exact on-disk interfaces of
`cex-dirichlet-is-not-riemann-integrable` and
`ex-thomae-is-riemann-integrable-with-integral-zero` before removing their
edges, and `fs-bounded-implies-riemann-integrable` before selecting it as the
replacement. I also reopened the six published exponential/trigonometric
interfaces named above. All are `status: published`. The replacement and page-
requirement interfaces use the existing `source-checked` route recorded in the
published-dependency audit; the removed examples were inspected only to verify
that their facts were either replaced exactly or already proved locally.

## Step-5 authored-state reconciliation

All 38 manifest ids were authored without a drop, rename, merge, or split. The A page contains exactly 25 items and remains below the 60-item ceiling; the B page contains exactly 13 examples/counterexamples and has no authored summary body. Every item is `status: draft`, `origin: session`, and carries both statement and proof provenance. No applied natural-number inclusion notation occurs.

The on-disk component provenance now matches the item-by-item table above. The source-backed counterexample `cex-one-existing-iterated-integral-does-not-give-riemann-integrability` remains `literature-derived`/`ai-altered`. The three independently constructed witnesses `cex-polar-coordinates-are-not-globally-injective`, `cex-omitting-the-absolute-jacobian-reverses-sign`, and `cex-noninjective-change-of-variables-double-counts` are `ai-generated` for both components and carry `generation.role: counterexample`; their endpoints, images, derivatives, and integrals were recomputed directly. Definitions use `not-applicable` for proof provenance when they have no proof obligation. Every classification has its per-item rationale in the table.

Authoring made several dependency additions beyond the settled baseline, all to discharge facts actually used in the written proof. `cor-repeated-riemann-integrals-on-rectangles` adds `thm-heine-cantor-metric` so that successive section integrals are proved continuous by uniform continuity. The polar and cylindrical examples add `thm-sine-cosine-signs-monotonicity-and-ranges` to recover the angle on their seam-free boxes. The spherical and hyperspherical examples add the same monotonicity interface and `thm-sine-cosine-zero-sets-and-fundamental-period` to justify angle recovery and nonvanishing sine factors away from the poles. Finally, the singular branch of `thm-linear-images-scale-jordan-content-by-absolute-determinant` explicitly cites batch 9's Gaussian-elimination, invertible-matrix, row-reduction-product, and elementary-matrix-invertibility interfaces instead of hiding the zero-row reduction inside prose. These additions do not change any coverage disposition.

Two proof routes were corrected during authoring. In `ex-riemann-integrable-function-with-dense-nonintegrable-sections`, the rational exceptional heights are dense and therefore cannot be called content zero. The valid proof computes the lower and upper section envelopes as $0$ and Thomae's function, both with integral zero. In `thm-injective-c-one-images-of-compact-jordan-sets-are-jordan`, local Lipschitz control is converted to the published global null-preservation interface by composing each local restriction with coordinatewise clamping onto its closed cube.

The scalar Jacobian determinant is written as $\det Dg$, never by overloading the library's Jacobian-matrix notation. The ring/field split is also preserved: determinant algebra is cited at the commutative-ring level, while singularity is connected to determinant zero only through `thm-real-square-matrix-invertible-iff-determinant-nonzero`; the ring-level corollary says an invertible matrix has unit determinant.

### Boundary-case worksheet

- **Empty:** rectangular Fubini uses nondegenerate factor rectangles; empty Jordan sections contribute zero by definition; the compact-support definition explicitly gives the empty-support function integral zero.
- **Zero:** the zero function and zero section integrals are retained throughout; the near-identity lemma permits error constant zero but requires positive cube radius; singular linear maps have determinant and image content zero.
- **One:** the repeated-integral proof includes the one-coordinate base case, linear scaling and change of variables include dimension one, and hyperspherical coordinates start at dimension two with polar coordinates as the base.
- **Degenerate:** coincident graph boundaries give zero-length sections; singular matrices use the thin-slab branch; local and global diffeomorphism results explicitly require invertible derivatives; coordinate examples use positive radii and pole-free/seam-free boxes.
- **Endpoints:** graph regions include their continuous boundary values, every main compact theorem uses closed Jordan sets, and all coordinate examples verify the closed angular endpoints chosen inside one injective branch.
- **Nonempty choice:** Banach's theorem is applied to a nonempty closed cube, while every other selection is an explicit grid or a finite subcover supplied by compactness; no arbitrary choice from a varying family is used.
- **Equivalence, forward and reverse:** the compact-Jordan theorem proves transformed integrability rather than assuming it, then applies the same local estimate to the $C^1$ inverse and uses the chain rule plus determinant multiplicativity to obtain both implications.

### Harvest result

The authored result preserves the coverage receipt exactly: 46 harvested headings, with 30 `included`, 15 `inline`, one `out-of-scope`, and none deferred. The sole decline remains Lebl Exercise 10.2.6 because it concerns unequal improper integrals at a singularity rather than bounded Riemann/Jordan integration. Every `included` disposition names an item now present on one of the two authored pages.

### Cross-batch determinant checkpoint

At the first Step-5 authoring checkpoint, batch 9's seven required determinant item files were not yet on disk, although their exact ids were present in the adjudicated manifests. The batch-5 prose was therefore written only against the agreed interfaces and was not treated as finally source-checked until those files could be opened. The final validation record below supersedes this checkpoint.

### Current repair gate record

This record supersedes the earlier Step-3 blocker state above. The determinant
handoff is now visible across the current batch manifests.

- All three batch JSON artifacts parse. The replacement proof-contract quote is
  an exact normalized substring of the published Refutation clause it cites.
- `coverage-checklist.mjs` passes: 1 A page, 46 harvested headings, 0 errors and
  0 warnings.
- The required isolated `content-policy.mjs --manifest-only` invocation still
  reports the same 9 `batch-dependency-missing` errors for determinant items
  owned by batch 9; it reports no B-leaf, provenance, generation, notation, or
  other batch-5 policy defect. The whole-run manifest invocation sees the
  cross-batch owners and passes 583 scoped items with 0 errors and 0 warnings.
- Because this Beta may not edit `research/plan-spec.json`, I validated an
  in-memory copy in which every current `frontier-10-batch-*.pages.json` page
  replaces its stale spliced copy. `validate-plan.mjs` then reports no `b-leaf`
  error at all and no error naming either batch-5 page. Its only four remaining
  errors are unrelated `undeclared-prereq` edges into
  `incidence-algebras-and-mobius-inversion` from other pages. The orchestrator
  must re-splice the repaired batch artifacts before the literal plan-spec gate
  can reflect this state.
