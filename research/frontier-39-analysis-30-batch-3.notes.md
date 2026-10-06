# Batch 3 Step 1 scaffold — Wave Energy, Finite Propagation and Huygens

Run `frontier-39-analysis-30` · pair `wave-energy-finite-propagation-and-huygens`
(A 458.017 / B 458.018, `pde`) · covers 3. Outputs:
`research/frontier-39-analysis-30-batch-3.pages.json` (19 A + 9 B items), this note,
`research/frontier-39-analysis-30-batch-3.coverage.json`,
`research/frontier-39-analysis-30-batch-3.cross-batch-dependencies.json`, and 28
readiness records `research/frontier-39-analysis-30-step1-<id>.json`.

## Scope and design/plan reconciliation

- **Controlling design.** `research/plan-pde-track.md` §PDE-10, lines 1238–1288: A rows
  1–14 and B rows 1–7 with their proof routes, the "Sources and proof architecture"
  block, the three hard proof obligations (which boundary term vanishes in each
  admissible setting; the cone-side normal and flux sign; failure of strong Huygens
  witnessed by strictly interior data) and the well-definedness note ("'depends on' is
  formalised by item 10"). The density-enrichment overlay §12.4 additions for PDE-10
  are at **lines 3537–3548** (the drift review cites 3513–3525; that range holds the
  PDE-9 additions in the current file, so the locator in the drift report is stale by
  ~24 lines — recorded as a locator drift, content unchanged).
- **Drift review.** `frontier-39-analysis-30-alpha-step1-drift.md` gives this page
  **no-drift** and adds binding guidance that the scaffold follows: keep the
  $c^2$-weighted gradient energy at speed $c$ (the enrichment formulas are unit-speed);
  the shrinking-ball energy identity supplies the cone-boundary sign locally; zero
  energy leaves a spatial constant until the displacement datum fixes it; no abstract
  semigroup or elliptic spectrum is used.
- **Plan-spec comparison.** `research/plan-spec.json` agrees on page ids, orders
  458.017/.018, category, companion and the page-level `requires`
  (`wave-equation-representation-formulas`); its item arrays are empty. There is no
  design-versus-plan item contradiction and the shared plan was not edited.
- **Realisation of every row.** Design A rows 1–14 and B rows 1–7 are each realised by
  an item with the design's stable ID and proof route. Overlay A rows
  `cor-time-reversed-energy-uniqueness-from-final-data` and
  `thm-energy-uniqueness-for-homogeneous-dirichlet-waves-on-bounded-domains` and
  overlay B rows `ex-plane-wave-shows-the-characteristic-speed-is-sharp` and
  `ex-zero-wave-energy-means-spatial-constant-before-data-fix-the-constant` are kept as
  items. The four remaining overlay rows duplicate the design rows and are realised
  inside them (no claim dropped, no duplicate items):
  `lem-local-energy-balance-for-the-forced-wave-equation` $\to$ design item 2
  `lem-local-wave-energy-conservation-law` (the unit-speed $\partial_te-\operatorname{div}(u_tDu)=fu_t$
  form is the case $c=1$ of the general-$(c,e,q)$ identity, stated there);
  `thm-forced-wave-energy-norm-estimate` $\to$ design item 5
  `thm-energy-continuous-dependence-for-the-forced-wave-equation` (whose statement
  contains the enrichment's displayed $E^{1/2}$ bound);
  `lem-backward-cone-energy-is-monotone-up-to-source-work` $\to$ design item 7
  `lem-energy-identity-on-a-truncated-wave-cone` (the differentiated shrinking-ball
  inequality is named in the statement as the equivalent form);
  `thm-finite-propagation-for-forced-waves` $\to$ design item 8
  `thm-finite-propagation-speed-for-the-wave-equation` (already the forced sharp form).
- **Three local prerequisites added** (same A page, all needed before their consumers):
  `lem-integral-of-a-divergence-of-an-l-one-c-one-field-vanishes`,
  `lem-truncated-wave-cone-geometry-and-frustum-presentation`,
  `lem-vanishing-gradient-and-time-derivative-imply-constancy-on-convex-sets`. Page
  inventories 19 (A) and 9 (B) are far below the 100-item cap.

## Recorded conflicts and deviations

1. **Huygens wording sharpened (design item 11).** The design says "the value depends
   only on data on the boundary sphere". Read as agreement of the bare restrictions,
   that is false, and the same informal shorthand appears in Teschl (printed p. 172:
   "depends only on the values of the initial data on $\partial B_t(x)$") and Speck
   Lecture 12 Remark 1.0.1. Explicit counterexample: $n=3$, $c=1$, radial
   $u_0(y)=(1-|y|)\psi(|y|)$ with $\psi$ smooth, $\psi\equiv1$ near $|y|=1$, and $u_1=0$;
   the data vanish on $\partial B_1(0)$, yet Kirchhoff gives
   $u(0,1)=u_0(1)+u_0'(1)=-\psi(1)=-1\neq0$. The scaffold therefore defines strong
   Huygens in the sharp germ/away-from-sphere form — equivalent to Ivrii's remark (e)
   ("does not depend on $g(y),h(y)$ with $|x-y|<ct$" for odd $n\ge3$) — with the
   caution stated in the definition and proved positively in the odd-dimensional
   theorem. Nothing in the design's proof route is weakened: the odd formula proves
   exactly the sharp statement.
2. **"Cauchy–Schwarz and Gronwall" (design item 5).** Realised as Cauchy–Schwarz plus
   the regularised division $\varphi_\epsilon=\sqrt{2E+\epsilon^2}$ that the overlay row
   itself names; Gronwall's inequality is the equivalent abstract form and is not
   needed. The sharp bound $\sqrt{2E(t)}\le\sqrt{2E(0)}+\int_0^t\|f\|_2$ implies the
   coarser constant displayed in the design.
3. **Unit-speed formulas.** All enrichment/overlay formulas written at unit speed are
   realised explicitly as the $c=1$ cases of general-speed statements, per the drift
   note; the energy keeps the $c^2$ gradient weight everywhere.
4. **MT-8/MT-11 interface.** The design's "Requires" prose names MT-8/MT-11 (measure
   and polar measure). No item cites those pages directly: the polar/surface machinery
   is consumed through the published PDE-2D surface-integral and divergence items and
   through the in-run batch-2 spherical-mean items, with $\mathrm{AC}_\omega$ declared
   where the conventions enter. No dependency was invented to match the prose.
5. **Weak-solution material.** Hunter §7.2–§7.5 (Galerkin weak-wave existence) and
   Ivrii's existence/stability remark are disposed `deferred` to
   `strongly-continuous-semigroups-and-hille-yosida` (PDE-23), matching the design's
   source ledger ("the full weak Galerkin existence proof is deferred").

## Cross-batch finding — in-run batch-2 supplier is defective as phrased

`thm-support-dichotomy-for-free-wave-fundamental-solutions` (batch 2 of this run,
order 458.015; **in-run draft, not published — manifest only, no item file**) clause (i)
states: "if two admissible data pairs agree on that sphere, their solutions agree at
$(x,t)$". That is false as literally stated. Evidence: for $n=3$, $c=1$, take
$u_0(y)=(1-|y|)\psi(|y|)$ with smooth $\psi\equiv1$ near $|y|=1$ and $u_1=0$; this is
admissible ($C^\infty$, compactly supported), vanishes on $S=\partial B_1(0)$, and
Kirchhoff's formula gives $u(0,1)=u_0(1)+1\cdot u_0'(1)=-\psi(1)=-1\ne0$, while the zero
data agree with it on $S$ and give $u\equiv0$. (The value does depend on the normal
derivative at the sphere; the functional is a first-order distribution supported on
$S$.) Correct statement options: kernel supported on the shell (data changes supported
at positive distance from $S$ do not change the value), or the quiet-interior/shell
form; batch 2's clause (ii) is correct. Repair strategy (for the owner/Alpha; not
performed by this scaffold): restate (i) as "if two admissible data pairs agree in a
neighbourhood of the sphere — equivalently their difference is supported away from it —
their solutions agree at $(x,t)$", or replace it by the shell-support statement. Batch
3 deliberately does **not** consume clause (i): `thm-strong-huygens-principle-in-odd-spatial-dimensions`
and `def-strong-huygens-principle` are proved from
`thm-odd-dimensional-wave-formula-by-spherical-means` directly (and the caution example
above is the same computation), so nothing in this batch inherits the defect, but the
batch-2 item should be repaired or the wording will mislead its own consumers.

## Item inventory and dependency audit

**A page — 19 items, levels 0–7.** Design rows with levels: energy definition 0;
local conservation 1; total conservation 2; Cauchy uniqueness 3; continuous
dependence 2; cones definition 0; truncated-cone energy identity 2; finite propagation
3; compact-support expansion 4; domain of dependence 4; Huygens definition 4; Huygens
odd 5; tails in 1/even dimensions 6; finite-propagation-is-not-Huygens remark 7.
Overlay rows: time-reversed uniqueness 4; Dirichlet uniqueness 3. Local prerequisites:
distance-free cone definition 0; divergence-integral lemma 0; frustum presentation 0;
constancy-on-convex-sets 0. **B page — 9 items, levels 1–8**, a leaf: travelling
packet 1; plane-wave sharpness 1; reflection 4; open-boundary counterexample 2;
global-integrability counterexample 2; spherical quiet tail 6; 2-D tail 7; zero-energy
constant 4; finite-speed-vs-Huygens counterexample 8. Levels were recomputed with
`tools/item-dependency-levels.mjs`'s own algorithm after every dependency change:
batch-2 suppliers raise a level by one, published out-of-run suppliers do not.

**Verified supplier interfaces (statements read, not inferred from membership).**
Published: `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`,
`thm-divergence-theorem-for-bounded-piecewise-c-one-domains`,
`def-bounded-piecewise-c-one-euclidean-domain`,
`def-bounded-c-one-domain-boundary-charts-and-outward-normal`,
`def-surface-integral-on-a-compact-c-one-hypersurface`,
`lem-surface-integral-is-independent-of-c-one-boundary-charts`,
`lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules`,
`def-laplacian-of-a-c2-function`, `thm-differentiation-under-the-integral-sign`,
`thm-differentiation-under-dominated-improper-multiple-integrals`,
`thm-dominated-convergence`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
`thm-linear-change-of-variables-for-lebesgue-measure`,
`cor-cauchy-schwarz-inequality-for-l-two`,
`cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`,
`lem-smooth-bump-between-concentric-euclidean-balls`, `thm-ftc-second-part`,
`cor-zero-derivative-implies-constant`, `def-support-and-compactly-supported-riemann-integral-in-rn`,
`def-convex-subset-of-euclidean-space`,
`lem-relative-compact-closed-sets-have-a-positive-distance-gap` (the positive gap between
the compact data support and a disjoint sphere in the shell form of Huygens),
`thm-gronwall-integral-inequality` (named as the
equivalent form), `def-countable-choice`. In-run batch 2 (draft, read from its current
manifest): `def-wave-equation-cauchy-data-and-wave-speed`,
`def-spherical-mean-of-space-dependent-data`,
`lem-spherical-means-of-smooth-data-are-smooth`, `thm-dalembert-formula`,
`thm-kirchhoff-formula-for-the-three-dimensional-wave-equation`,
`thm-poisson-formula-for-the-two-dimensional-wave-equation`,
`thm-odd-dimensional-wave-formula-by-spherical-means`,
`thm-even-dimensional-wave-formula-by-descent`,
`cor-time-reversal-invariance-of-the-homogeneous-wave-equation`. Hypotheses,
directions, conventions (speed $c$, sphere radius $ct$, normalisation
$\omega_{n-1}=nV_n$, $D_t=t^{-1}\partial_t$) and regularity classes were checked for
each use. Independent constant checks recorded during scaffolding: the null-side flux
$\ell=\frac{c}{2\sqrt{1+c^2}}\bigl((u_t-c\partial_ru)^2+c^2|D_{\rm tan}u|^2\bigr)\ge0$
by completing the square ((iv) of the geometry lemma gives $\nu_{\rm lat}=(\hat x,c)/\sqrt{1+c^2}$);
the even kernel value $K(0,t_0)=c^{-n}(n!!V_n)^{-1}(-1)^{k-1}(2k-3)!!\,t_0^{-(n-1)}\ne0$
from $D_t[t^\alpha]=\alpha t^{\alpha-2}$; and the $n=3$ caution value
$u(0,1)=u_0(1)+u_0'(1)$ re-derived from both the Kirchhoff formula and the radial
$v=ru$ d'Alembert reduction.

## Axiom of Countable Choice

$\mathrm{AC}_\omega$ (`def-countable-choice`) is declared in every item whose proof
uses the piecewise/C¹ divergence theorem, surface integration or the batch-2
sphere/ball-integral formulas. On the A page: the divergence-integral lemma, the
frustum-presentation lemma, total conservation, Cauchy uniqueness, continuous
dependence, the truncated-cone energy identity, finite propagation, compact-support
expansion, domain of dependence, the Huygens definition and odd theorem, the tails
theorem, the independence remark, time-reversed uniqueness and Dirichlet uniqueness
(15 of 19 items). On the B page: reflection, the three-dimensional quiet tail, the
two-dimensional tail, the finite-speed counterexample and the zero-energy example
(5 of 9 items). Choice-free items are the energy definition and local law, the
constancy lemma, the cone definition, and the B-page travelling-packet, plane-wave,
open-boundary and global-integrability items; these use only Lebesgue integration,
Fubini, linear change of variables, differentiation under the integral and the
fundamental theorem of calculus, none of which depends on `def-countable-choice` in
this library, so no AC dependency was claimed for them. No item reaches
`deferred-set-theory-beyond-choice`; no Recorded item is used.

## Sources, harvest and dispositions

Four independent treatments for the A page — Teschl (textbook) and Ivrii (textbook),
plus Hunter (lecture notes) and Speck Lectures 13–14 (course notes) — and three for the
B page (Teschl, Ivrii §§2.1–2.7, Speck Lecture 12). URLs and exact section/page
locators with the results read in full are in the coverage file; all seven source
entries are `fetch_verified` by `source-fetch-check --stamp` (7/7 newly stamped, no
drops, no recovery attempts needed). 48 harvested headings received dispositions:
23 `included`, 16 `inline` (formulas and identities established on the prerequisite
pair or absorbed into a proof), 2 `deferred` (Hunter's weak-wave Galerkin theory and
Ivrii's existence/stability remark, both to PDE-23), 6 `out-of-scope` with specific
reasons (pointwise decay bound, Klein–Gordon analogue, covariant energy–momentum
formalism, different equations, differentiability remark), and 1
`already-published` (`thm-gronwall-integral-inequality`). No source was dropped and no
`source_resolution` is needed. The observed low-yield warning was resolved by
splitting Teschl's Problem 7.15 row (a genuinely itemised result) rather than by
re-labelling anything.

## Checks run (exact results on disk)

- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` — exits 1
  **only** on `empty scaffold inventory` errors for other batches still in flight
  (littlewood-paley, fredholm, interior-and-boundary, schauder, weak-elliptic-maximum,
  direct-method, constrained-variational, semigroups, analytic-semigroups, Hamilton–Jacobi,
  scalar-conservation-laws, Borel–Weil). Re-running the tool's own
  `runPages`/`dependencyLevels` on batches 2+3 gives **0 errors** and every one of the
  28 batch-3 `dependency_level` labels equal to the computed level (maximum 8); no
  cycles, no forward edges, no missing in-run targets.
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-3.coverage.json`
  — 2 pages, 48 harvested results, **0 errors, 0 warnings** (with `--require-destination`,
  which the scaffold gate uses).
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-3.pages.json` —
  28 items, 0 missing deps, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
  — 525 scoped items, **1 error, none in batch 3**: `lem-positive-compactly-supported-transform-bump-on-the-dual`
  (another batch) depends on `thm-unique-left-haar-measure-up-to-scale`, which is
  neither declared by that batch nor on disk. Batch-3 alone is clean.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0; declared page order
  acyclic and consistent (NOTE: 247 planned pages still carry no item list, expected
  mid-scaffold).
- `node tools/extcheck.mjs --quiet` — exit 0; 40 pre-existing `unproved-on-published`
  warnings on unrelated published items, none on batch 3.
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-3.coverage.json`
  — 7/7 sources fetch-verified, 7/7 resolved, 0 documented drops.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30` —
  batch 3 supplies 24 reviewed edges (1 page + 23 item) and is registered as reviewed;
  0 unreviewed consumer-side edges, 0 orphaned reviews. The `--require-reviewed` form
  still fails because other batches have not written their inputs yet (stage-join
  condition, not a batch-3 finding).
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` — at the last
  check: 525 items, 525 ready, not closed only because 22 work entries are empty
  scaffolds of other in-flight batches (no items yet); **0 work entries for batch 3**,
  and all 28 batch-3 records match the current item and dependency hashes.

## Unresolved findings for owner/Alpha reconciliation

1. The batch-2 `thm-support-dichotomy-for-free-wave-fundamental-solutions` clause (i)
   defect above (repair wording; batch 3 does not depend on it).
2. The drift report's PDE-10 overlay locator (3513–3525) does not match the current
   file (3537–3548); content is present, only the line range is stale.
3. The whole-run `content-policy --manifest-only` error in another batch
   (`lem-positive-compactly-supported-transform-bump-on-the-dual` → missing
   `thm-unique-left-haar-measure-up-to-scale`) is outside batch 3 and remains with its
   own beta.
4. The remaining stage-1 scaffolding and all downstream gates await the other
   in-flight batches; none of the batch-3 artifacts depends on their completion.


## Owner follow-up after the recorded unresolved findings

The batch-2 item `thm-support-dichotomy-for-free-wave-fundamental-solutions` has been repaired by the owner: clause (i) now says the odd-dimensional evaluation kernels are supported on the sphere and that agreement on an open neighbourhood of the sphere suffices. The historical false pointwise-trace wording is retained above as evidence for the repair; it is no longer an open issue. Batch 3 still proves strong Huygens directly from the odd-dimensional formula and does not consume that batch-2 item. The batch-27 Haar dependency typo mentioned in the earlier status list was corrected separately.


## Owner scope repair integration

The total-energy theorem retains both homogeneous Dirichlet and homogeneous Neumann boundary cases with C^2 up-to-boundary regularity. The open-boundary counterexample now assumes F' is nonzero somewhere inside (0,1), which gives positive initial interval energy; compact support then makes that interval energy zero after the wave packet exits. The reflection example specifies compactly supported odd data. The Ivrii coverage is restricted to the homogeneous specialization. The current inventory remains 28 items, and the owner scope receipt follows the corrected manifest.

## Hunter §7.1 qualitative properties — owner scope integration

The B-page counterexample now records the three Hunter §7.1 properties as
separate witnesses: finite propagation is supplied by the energy theorem, a
compact one-dimensional traveling profile in $C_c^2\setminus C^3$ retains its
regularity defect under d'Alembert translation, and a two-dimensional Poisson
solution with nonnegative displacement and zero initial velocity takes a
strictly negative value at a later time. The Huygens witnesses remain: compact
velocity bumps in dimensions one and two produce a nonzero interior value while
vanishing near the observation sphere. The direct d'Alembert and Poisson formula
dependencies are again recorded as verified batch-2 edges for the B-page item.

B2's Hunter §7.1 row remains deferred to this B3 pair and is now covered by the
finite-speed theorem and these two additional witnesses. MIT Remark 1.0.1 is
coverage-split across the odd-dimensional Huygens theorem, the one/even tail
theorem, and the finite-propagation theorem. Its separate Remark 1.0.2 remains
out of scope: the traveling example establishes persistence of one $C^2$ defect
but does not prove the remark's general quantitative one-derivative-loss claim.

Current B3 coverage has 51 harvested rows (26 included, 16 inline, 2 deferred,
6 out of scope, 1 already published) across 8 fetch-verified source entries.
The B3 cross-batch input has 34 reviewed rows (1 page and 33 item edges),
including the direct d'Alembert and Poisson suppliers; the aggregate dependency
ledger was refreshed with no orphaned or unreviewed rows. Focused checks after
this integration: proof-layout reports 1 item, 6 steps, 0 defects; strict
proof-contract reports 0 errors; manifest-deps reports 28 items, 0 errors;
coverage-checklist reports 51 B3 rows and 63 B2 rows, both with 0 errors and
0 warnings; source-fetch-check resolves 8/8 B3 sources. The focused dependency
calculation gives all 28 B3 labels correctly, including level 8 for this
counterexample; the whole-run level check's remaining seven errors are stale
labels in B14, not B3.
