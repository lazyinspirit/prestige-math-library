# Frontier 38 owner 30, batch 6: Step 1 construction notes

Owned pair: `fourier-restriction-and-the-stein-tomas-theorem` (A page, order
458.02617) and `fourier-restriction-and-the-stein-tomas-theorem-examples`
(B page, order 458.02618), both `fourier-analysis`. The binding
`research/frontier-38-owner-30-owner-authoring-direction.md` was read before
construction; its FR-14 clauses (the Knapp obstruction, the
`beta=(n-1)/(n+1)` temporal decay, the HLS order `a=1-beta=2/(n+1)`, and the
`n>=2` restriction) are followed exactly. No published item, shared plan,
engine state or verdict was edited.

## Design, plan, and conflicts

- The design is section FR-14 of `research/plan-fourier-analysis-track.md`
  (lines 964-1010). `research/plan-spec.json` carries the pair at order
  458.02617/.02618 with the five declared `requires` and **empty** `items`
  arrays, so the design section governs the inventory, as in the sibling
  batches of this run. No pair or page change is requested.
- Design/plan edge shadow, recorded not escalated: the page-level `requires`
  keeps `regular-surfaces-and-surface-integrals` (the published R^3 surface
  page), while the item-level closure needs the already-published general
  n-dimensional chart measure on `library/pde`'s
  `def-surface-integral-on-a-compact-c-one-hypersurface` /
  `lem-surface-integral-is-independent-of-c-one-boundary-charts` (graph
  density `sqrt(1+|Dh|^2)`) and the sphere-measure agreement
  `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`. The plan
  edge stays; the R^3 page is not an item dependency.
- Source-locator drift, recorded not escalated (a second complete locator is
  not at issue; every item is locally proved and the pair has a verified full
  treatment):
  - The design and the harvest table cite "Wo §2, The restriction problem,
    pp. 6-10". In the fetched editor-hosted edition, §2 is Schwartz space and
    the restriction problem is §7, printed pp. 41-49. The coverage locators
    use the fetched edition.
  - The design cites "Taob notes 8-9". Fetched in full, notes 8 is
    "Oscillatory integrals" (van der Corput, multidimensional stationary
    phase, spherical measure), which supports the local analytic items;
    notes 9 at the cited URL is "Fourier analysis on finite abelian groups"
    and contains no restriction or Strichartz material. The Strichartz
    interface is therefore sourced to Williams §11.4, which prints the
    estimate and its scaling. The notes-9 entries in the coverage record this
    mismatch.
- The design's numbering rows 6-11 contain duplicate integers; the item IDs
  are the stable identifiers and all fourteen A-page design IDs and all five
  B-page design IDs are preserved.

## Inventory

26 items: 21 on the A page and 5 on the B page.

- A page: 1 definition, 10 lemmas, 1 theorem (Knapp), 1 theorem
  (Stein-Tomas), 1 corollary, 2 recorded remarks
  (`proved_here: false` with `external_dependency`), plus the local
  prerequisites listed below. Kinds: 10 definitions/lemmas in the analytic
  and geometric local closure, 4 stationarity/cap lemmas, 3 operator and
  TT* lemmas, 1 fractional-integration lemma, 2 theorems, 1 corollary, 2
  remarks.
- B page: exactly the five designed leaves — 3 counterexamples, 1 example
  (with `generation.role: example`, so it is not a dependency target), and
  1 counterexample on Knapp sharpness.

New local prerequisite items (all necessary; none is a padded inventory
item):

- `lem-fourier-pairing-for-a-finite-measure-and-schwartz-data` (pairing and
  convolution identities with a finite measure; the core of (11.10) and of
  the TT* lemma);
- `lem-unit-sphere-is-lebesgue-null` (the polar formula evaluated at the
  sphere; needed for the pointwise-restriction counterexample);
- `lem-sphere-finite-graph-charts-and-surface-density` (the 2n hemisphere
  graph charts, the density `(1-|y|^2)^{-1/2}`, the Hessian determinant, and
  a finite subordinate partition — shared by the decay, cap and TT* items);
- `lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph`
  (`det S_nu = det D^2h/(1+|grad h|^2)^{(n+1)/2}`; converts the curvature
  hypothesis into the Hessian nondegeneracy used by stationary phase);
- `lem-localized-curved-patch-measure-transform-decay` (Williams
  Proposition 11.3, the localized-measure decay that feeds the slice bounds);
- `lem-spherical-cap-and-dual-slab-scales` (the cap measure and dual slab
  volume, used by both Knapp leaves);
- `lem-compact-curved-hypersurface-finite-graph-cover` (the finite curved
  graph cover carrying the compact-hypersurface corollary).

## Proof route (as scaffolded)

1. `def-fourier-restriction-and-adjoint-extension-operators` fixes `R_0` on
   Schwartz data and `E g = (g sigma)^vee`; `lem-...-are-dual` makes the two
   formulations equivalent with equal norms.
2. Stationarity: van der Corput in one dimension, then the multidimensional
   nondegenerate phase lemma with its lambda-derivative control; the sphere
   decay `|sigma-hat| <= C(1+|xi|)^{-(n-1)/2}` follows from the finite
   hemisphere partition, and the localized curved-patch version
   (Proposition 11.3) follows from the graph shape-operator computation plus
   the uniform-in-nu stationary-phase argument.
3. Knapp: cap measure `asymp delta^{n-1}`, dual slab volume
   `asymp delta^{-(n+1)}`, cap coherence on the dual tube, and the
   `delta -> 0` comparison, giving `p <= 2(n+1)/(n+3)` (equivalently
   `q >= 2(n+1)/(n-1)`); the B leaves compute the same two quantities.
4. Endpoint: TT* reduces the restriction estimate to
   `||f * sigma-check||_{p'} <~ ||f||_p`. Localizing sigma into curved graph
   patches, the slice operators satisfy the dispersive bound
   `||U(t)g||_inf <~ <t>^{-(n-1)/2}||g||_1` and the uniform Plancherel bound
   `||U(t)g||_2 <~ ||g||_2`; Riesz-Thorin interpolation gives
   `<t>^{-(n-1)(1/p-1/2)}`, and at `p = 2(n+1)/(n+3)` the decay is
   `beta = (n-1)/(n+1)`, so the one-dimensional HLS theorem of the published
   FR-13 page applies with order `1-beta = 2/(n+1)` to
   `s -> ||f(.,s)||_{L^p(R^{n-1})}`. Summing the finitely many patches
   gives both the sphere theorem and, with the curved graph cover, the
   compact-hypersurface corollary.
5. The two remarks are recorded orientations only (`proved_here: false`):
   the open restriction conjecture and the uncommissioned Strichartz
   interface.

## Choice principles

Every statement that consumes the published chart surface measure, the
polar sphere measure, Plancherel/Hausdorff-Young, the Riesz-Thorin core
lemma, the dense-extension theorem or the FR-13 HLS theorem carries
Countable Choice, matching the suppliers' own hypotheses; `def-countable-choice`
is declared in those items' `deps`. The exact uses are chart/partition
selection, the measurable-selection steps of the published measure
constructions, and the dense-core extension. No item uses full AC, and no
foundations item is reached.

## Cross-batch dependencies

None. Every dependency of the 26 items is either an item of this batch or a
**published** item on disk; the page-level `requires` edges are published
pages and are preserved in the manifest. The batch cross-batch input
(`frontier-38-owner-30-batch-6.cross-batch-dependencies.json`) is therefore an
empty array, which is valid for a consumer batch with no in-run edges.

## Readiness records

All 26 items are recorded `ready` in
`research/frontier-38-owner-30-step1-<id>.json` in dependency order; each
record names the examined dependency IDs and the source/route evidence. No
item is escalated and no published defect was found in the suppliers used.

## Checks actually run (results recorded honestly)

- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`:
  the batch's labels are exact (0 errors naming a batch-6 item; maximum
  level 6). The run-level command exits 1 only because other batches still
  have empty page shells while their Betas work.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-6.pages.json`:
  26 items, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-6.coverage.json
  --require-destination`: 2 pages, 53 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-6.coverage.json --stamp`:
  9/9 sources fetch-verified (Williams, Wolff, Tao notes 8, Tao notes 9,
  Datar, Hunter).
- `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-6.pages.json`
  and `fwdcheck`/`extcheck`: results in the run record; no forward
  reference or external-ref obligation arises (the two `proved_here: false`
  remarks are not dependency targets and nothing links them).

## Honest residual uncertainty (Step-3 matters, not scope blockers)

- I read the displayed statements, the complete proofs of Williams
  §§11.1-11.3, Wolff §7 (including the dyadic non-endpoint argument),
  Tao notes 8 §§3-4 and the cited Datar/Hunter passages; I did not re-derive
  every line of the n-dimensional graph shape-operator computation, which is
  scaffolded with its exact determinant formula and the published
  second-fundamental-form framework.
- The uniform-in-nu stationary-phase argument inside
  `lem-localized-curved-patch-measure-transform-decay` is the standard
  compactness argument (cover the support by balls on which the Gauss map is
  injective, split with a partition, and use that away from critical points
  `|grad phi|` is uniformly bounded below); the author must write those two
  uniformity steps out rather than cite them.
- The published FR-13 HLS theorem is used in one dimension with order
  `2/(n+1)`, which requires `n >= 2` and `1 < p < (n+1)/2`; both hold at
  `p = 2(n+1)/(n+3)` exactly for `n >= 2`, and the author must record that
  arithmetic.
- Page usage is 21/5 items against the 100-item cap, so no split is needed.

## Attempt-2 verification and repair (2026-10-03)

The first-pass artifacts were re-examined item by item against the design
section, the owner direction and the fetched source texts. Four genuine
defects were found and repaired in the manifest, coverage and readiness
records; nothing else was changed. All 26 items are recorded `ready` again
(19 re-recorded because their dependency closure changed; 26/26 closed).

**Defects repaired.**

1. `lem-van-der-corput-oscillatory-integral-estimate`. The k=1 clause as
   written --- `|phi'| >= lambda_1` alone --- is false: Tao notes 8, Example
   2.2 ("|phi'| >= c by itself is not enough", p. 4 of the fetched PDF)
   exhibits a phase with `|phi'| >= 1/2` whose integral stays comparable to
   the interval length while the claimed right-hand side tends to zero. The
   clause now carries the monotone-derivative hypothesis of Tao's Lemma 2.4
   (which is exactly the bounded-variation step in the proof), with explicit
   constants for the definite integral and the amplitude version; the
   higher-derivative clause is stated in Tao's Lemmas 2.5/(6) form and the
   Fresnel bound actually consumed by stationary phase is stated explicitly.
   Dependencies: the B-page example
   `ex-integration-by-parts-for-absolutely-continuous-functions` (depcheck
   `b-leaf-content`) was replaced by the published A-page
   `thm-integration-by-parts-for-absolutely-continuous-functions`, and
   `thm-riemann-stieltjes-integration-by-parts`,
   `cor-riemann-stieltjes-existence-bv-continuous` and
   `cor-riemann-stieltjes-integral-bound` were added for the monotone case
   (all three already inside the declared `requires` closure).
2. `lem-spherical-cap-and-dual-slab-scales`. The chart identity was wrong:
   in the graph chart `omega = (y, sqrt(1-|y|^2))` the cap
   `1 - omega·e_n <= delta^2` is `|y|^2 <= 2delta^2 - delta^4`, not
   `|y| <= delta`; and the chord diameter is `2 sin(theta)` with
   `cos(theta) = 1 - delta^2`, i.e. at most `2 sqrt(2) delta`, not `2 delta`.
   Both are corrected. The `delta^{n-1}` and `delta^{-(n+1)}` scales used by
   Knapp are unchanged, and
   `ex-knapp-cap-and-tube-volume-calculation` repeats the corrected identity.
3. B-page-only dependencies. `ex-principal-curvatures-of-a-round-sphere` was
   dropped from
   `lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph` and
   `lem-stationary-phase-decay-for-spherical-surface-measure`: the chart
   lemma already supplies `det D^2 h != 0`, which is the nondegeneracy the
   proofs use, and depcheck forbids a spine dependency on an item whose only
   home is a B/examples page. (The swap in 1 removes the other such edge.)
4. `lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase`. The
   declared Taylor/diagonalization route needed three published suppliers not
   previously declared: `thm-linear-change-of-variables-for-lebesgue-measure`,
   `thm-sylvesters-law-of-inertia` (diagonalize the invertible Hessian), and
   `thm-integration-by-parts-for-absolutely-continuous-functions`
   (one-dimensional IBP under Fubini for the nonstationary patches); all
   three are inside the declared `requires` closure. The strategy now
   records the `lambda^{-1/2}` splitting, the Fresnel small-ball bound and
   the `lambda`-derivative repetition.

Related statement hygiene:
`cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature` linked
`[[thm-stein-tomas-spherical-restriction-theorem]]` without a dependency;
its statement now lists the conclusions directly, matching its actual proof
route.

**Page-level edges for Step-4 adjudication (recorded, not escalated).**
Splicing the repaired manifest into a scratch copy of `plan-spec.json` and
running `validate-plan.mjs` now yields exactly five `undeclared-prereq`
findings, all genuine published A-page suppliers consumed by the item
closure and all outside the declared `requires` closure:

- `euclidean-surface-measure-divergence-and-green-identities` (pde):
  `def-surface-integral-on-a-compact-c-one-hypersurface`,
  `lem-surface-integral-is-independent-of-c-one-boundary-charts`,
  `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`, consumed
  by the definition of `R`/`E`, the chart-density lemma, the sphere decay,
  the cap scales and the compact-hypersurface corollary. This is the
  design/plan edge shadow already recorded above.
- `rank-theorems-and-embedded-submanifolds`:
  `def-embedded-submanifold-and-slice-chart` and
  `def-local-defining-map-for-an-embedded-submanifold`, consumed by the
  chart lemma, the shape-operator lemma and the compact graph cover.
- `riemann-curvature-and-riemannian-submanifolds`: `def-shape-operator`,
  `def-induced-connection-and-second-fundamental-form`,
  `def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface`
  and `thm-weingarten-equation-and-adjointness-of-the-shape-operator`,
  consumed by the shape-operator lemma and the compact graph cover.
- `riemannian-metrics-length-distance-and-volume`:
  `prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions`,
  consumed by the shape-operator lemma.
- `geodesics-the-exponential-map-completeness-and-hopf-rinow`:
  `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`,
  consumed by the localized patch decay and the compact graph cover.

The manifest `requires` deliberately keeps the plan's five declared pages
(the task text is explicit, and `splice-plan`'s documented adjudication path
owns a manifest/plan edge disagreement); the five findings above are the
backward edges the Step-4 Alpha adjudicates. The former
`riemann-curvature-and-riemannian-submanifolds-examples` and
`absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples`
edges disappeared with the repair of items 1 and 3.

**Checks actually run (results recorded honestly).**

- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-6.pages.json`:
  26 items, 0 errors; whole run (all 30 manifests): 546 items, 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`:
  0 errors naming any batch-6 item, 0 dependency cycles anywhere in the run
  ("empty scaffold inventory" errors remain only for other batches' shells);
  maximum batch-6 level 6, unchanged by the repairs (all added and removed
  dependencies are out-of-run).
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-6.coverage.json --require-destination`:
  2 pages, 55 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-6.pages.json`:
  26 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json --repo .`: OK on the
  current plan (1378 pages with item lists; no cycles, forward references,
  B-page dependencies or unresolved ids). The scratch-spliced copy yields
  the five findings listed above.
- `node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-6.coverage.json --stamp`:
  9/9 sources fetch-verified, 0 newly stamped; 9/9 resolved.
- `extcheck`/`fwdcheck`: corpus totals (22804 items, 0 open forward
  references); the 26 scaffold items are manifest-only in Step 1, so these
  item-level checks carry no batch-6 obligation yet. When authored, the two
  `proved_here: false` remarks must carry `sources.references`,
  `verification.precheck: n/a` and the build-batch `external_dependency`
  block.
- KaTeX parse check of all 483 math expressions in the 26 statements and
  strategies: 0 failures.

**Residual uncertainty (author/Step-3 matters, not scope blockers).** The
uniform-in-`nu` compactness steps inside
`lem-localized-curved-patch-measure-transform-decay` (cover the support by
balls where the Gauss map is injective or `|grad phi|` is bounded below,
then split with a partition) still have to be written out by the author, as
noted in the first-pass section. The corrected cap statements now match the
source computations exactly; no other statement was found to overclaim.

## Owner repair: Euclidean geometry closure, 2026-10-03

The Step-3b batch writer was terminal before edits: exact receipt
`research/frontier-38-owner-30-dispatch/alpha-high-step3b-pair-fourier-restriction-and-the-stein-tomas-theorem-06524d58e20bc173.result.json`
ended at 2026-10-02T20:01:55.585Z, `ok:true`, task completed. This repair
implements the standing local-prerequisite direction without reordering the pair.

Two necessary local A-page bridges were added:
`def-euclidean-hypersurface-normal-shape-operator-and-curvature` and
`lem-smooth-euclidean-hypersurface-graph-and-localization`. The former defines
the full smooth Euclidean embedded-hypersurface interface, tangent space,
unit normal, `Sν=-dν`, and determinant curvature. The latter proves coordinate
independence, normal smoothness, self-adjointness, exact agreement with the
usual Euclidean Weingarten operator and principal-curvature product, normal
reversal and rigid-motion invariance. It proves smooth graph charts by
bootstrapping the earlier C1 inverse/implicit theorems (page233), using the
polynomial adjugate inverse formula and induction on regularity; finite ambient
bumps provide compact localization. No later Riemannian supplier is imported.

The graph shape proof now differentiates orthogonality directly. It correctly
uses `(h_jk/b)ν` as the normal component of the vertical second derivative;
`e_n` is not generally normal. The compact cover and compact Stein–Tomas
corollary retain their original statements and hypotheses, including full
extrinsic Gaussian curvature and local orientation independence.

The localized decay proof now uses parameter neighbourhoods, finite spatial
localization on enlarged graph patches, persistent critical points, uniform
Taylor/gradient bounds and a finite direction cover. It permits a critical
point to enter or leave the amplitude support, by linearity with a fixed bump.
It asserts no globally constant critical-point count. The low-frequency bound
is pointwise `|check μ(x)| ≤ ∫|b|`, not an integral bound on `|check μ|`.
Its general clause now explicitly assumes `φ|S` has compact support in S.
The parent authorized this correctness repair because the commissioned claim
is for compact hypersurfaces; the old arbitrary nonclosed-surface extension
was false. A union of circles of radii 1/j with ambient φ=1 on the unit disk
already has infinite localized mass. Exact old/new clauses and interface
hashes are in `...-batch-6-geometry-repair-evidence.json`. Existing graph slice
consumers use the unchanged compact graph-amplitude clause; the compact
corollary satisfies the corrected localization hypothesis; the flat
counterexample remains valid. No consumer statement requires a further edit.

Recursive proof readiness exposed a same-batch stationary-phase proof defect:
sharp annulus integration by parts discarded boundary terms and asserted a
singular vector-field identity at the stationary point. Its statement is
unchanged. The replacement uses a smooth λ^(-1/2) cutoff and dyadic annuli;
N integrations produce λ^(-N)s^(d-2N), summed geometrically. The centered kth
parameter derivative has an amplitude vanishing to order 2k, giving
λ^(-N)s^(d+2k-2N) and the full promised λ^(-d/2-k) estimate. No boundary terms
are discarded. Unused Sylvester/Fresnel facts were removed from its proof.

The full batch remains 28 items (23 A,5 B), below the hard ceiling. Item IDs,
page placement, manifest, dependency levels, contracts and coverage are synced.
The recursive closure has 1835 items, with zero missing, unpublished outside
batch, or later-order prerequisites. Existing published proofs were treated
as suppliers; this is not a claim of reauditing all 1835 proofs. Exact maps
and current raw hashes are recorded. Datar's complete PDF and Lebl's full HTML
were retrieved and the named sections inspected; exact retrieval hashes and
locators are recorded. Datar Example8.2.2 is a metric example; the actual shape
operator and curvature definitions are on pp104 and106, now distinguished.

Final scoped checks are in `...-batch-6-geometry-repair-checks.json`:
precheck 6/6 clean; proof-layout 7 items/26 steps/zero defects; rendercheck 8
files clean; strict contracts 28/28 zero errors/warnings; manifest dependencies
28 items zero errors; coverage 63 results zero errors/warnings; content policy
28 items zero errors/warnings; full text sources 10/10; whole-run dependency
levels correct. Focused fwdcheck has no batch6 undeclared-forward finding but
retains the unrelated scheme-theory global stack-cycle. No owner decisions,
gate retries, publication, runtime state, or global plan were edited.

Next action for parent: review this stable local repair; reconcile the newly
necessary A-page inventory/scope and the corrected general clause in owner
scope carriers, refresh all invalidated decisions and certify in dependency
order after every authorized writer drains. Prior Step-3 decisions on changed
bytes are stale and have deliberately not been replaced by invented stamps.

### Bounded parent follow-up, stable final bytes

The local graph lemma's step2.1 now explicitly uses declared F2: apply the
finite real spectral theorem to the self-adjoint projection onto the normalized
gradient line, then reorder/sign-align its orthonormal eigenbasis. No new
supplier or changed interface is needed.

Stationary-phase Fubini's exact Statement has no Choice premise. Its operative
Tonelli, product-measure and monotone-convergence Statements were inspected;
none has a Choice premise. This is evidence about the consumed interfaces,
not an inference from arbitrary transitive axiom nodes. Separately, the old
F5 partition supplier explicitly assumed Countable Choice for countable
coordinate covers. Since every cover used here is finite over a compact set,
F5 now proves its finite partition directly by earlier Euclidean bumps and
normalization, and removes that countable-partition dependency. Step6.1 now
states that no additional Choice is invoked beyond the stated hypotheses of
the integration suppliers; it no longer calls the entire closure choice-free.
Unused Sylvester/linear-change prose was also removed. Both original Statements
are unchanged; consumer interfaces and their proofs remain valid.

Contracts and the affected manifest dependencies are synchronized. Final explicit
proof-layout on the graph bridge and stationary-phase paths checks 2 items,
11 steps, zero defects; precheck2/2 clean; rendercheck2 clean; strict batch
contracts28/28 zero errors/warnings; manifest28 zero errors. Before/after raw
hashes and exact operative-Choice findings are in the evidence follow-up.
