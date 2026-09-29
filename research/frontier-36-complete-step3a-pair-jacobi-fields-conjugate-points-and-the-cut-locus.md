# Step 3a scope review — jacobi-fields-conjugate-points-and-the-cut-locus

- Run: `frontier-36-complete` (batch 14), role alpha, label
  `step3a-pair-jacobi-fields-conjugate-points-and-the-cut-locus-23f1ab13666f82c1`.
- A page: `jacobi-fields-conjugate-points-and-the-cut-locus` (order 485,
  differential-geometry, 44 items = 38 designed A rows + 6 designed `fs-` rows,
  under the 100-item A-page cap).
- B page: `jacobi-fields-conjugate-points-and-the-cut-locus-examples`
  (order 486, 12 examples/counterexamples); companion pointers agree A↔B and
  the B page requires only its A page.
- Decision: **sufficient** (recorded with `tools/step3-decisions.mjs
  record-scope` as a non-owner review bound to the current pair scope hash).
  Scope only: no item approval, no owner record, no scaffold, plan, manifest,
  prose or page edit.

## Evidence read

- `research/frontier-36-complete-batch-14.pages.json` (A 44 + B 12 items, each
  with `deps`, `statement`, `dependency_level`), `...-batch-14.coverage.json`
  (1 page, 3 sources, 49 harvested rows + 4 canonical rows),
  `...-batch-14.notes.md` (Step-1 harvest, route substitutions, dependency and
  AC audit, checks), `...-batch-14.cross-batch-dependencies.json` = `[]`.
- Prose design: `research/plan-differential-geometry-track.md` DG-22,
  lines 5707–5933 — A inventory 5722–5849, `fs-` list 5851–5864, B list
  5866–5885, sources 5887–5906, proof strategy and traps 5907–5934; page-table
  row 440 and the DG-22 subject row 64 ("Jacobi fields, conjugate points,
  index form, injectivity radius, and cut locus"); DG conventions §5 item 27
  (lines ~9655–9659: variation fields = ODE solutions, `dexp` rescaling,
  multiplicity = kernel dimension, cut time may precede conjugacy, "off the
  cut locus" names the distance-smoothness domain).
- Plan and records: `research/plan-spec.json` rows 485/486 (empty item arrays;
  A→B page edge) and row 487 `riemannian-comparison-theorems` which requires
  this A page; `research/frontier-36-complete-scope-ledger.json` (pair present,
  batch 14); `research/frontier-36-complete-drift-evidence.json` page entry
  (declared requires = manifest requires); `research/frontier-36-complete-step1-drift-review-original.md`
  verdict `no-drift` for this page; `research/frontier-36-complete-owner-authoring-direction.md`
  (no DG-22 amendment); `research/frontier-36-complete-operator-record.md`
  (no batch-14 owner intervention).
- Published carriers: `items/def-injectivity-radius-at-a-point-and-of-a-manifold.md`
  and `items/cex-a-complete-manifold-with-zero-global-injectivity-radius.md`
  for item 30, plus the published DG-8/DG-19/DG-20/DG-21 and measure items the
  scaffold consumes (`lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`,
  `thm-hopf-rinow`, `thm-existence-of-normal-neighborhoods`, `thm-gauss-lemma`,
  `thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth`,
  `thm-algebraic-symmetries-of-the-riemann-tensor`,
  `thm-tonelli-theorem-for-sigma-finite-product-spaces`,
  `lem-lipschitz-images-of-lebesgue-null-sets-are-lebesgue-null`,
  `prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density`,
  `prop-a-countable-chart-cover-detects-manifold-null-sets`,
  `thm-polar-coordinates-formula-for-lebesgue-measure`, etc.).
- Step-1 readiness: all 56 pair items have
  `research/frontier-36-complete-step1-<id>.json` with `decision: ready`
  (56/56; owner plan-overlay repair preceded those receipts).
- Independent checks run for this review: `coverage-checklist.mjs` → 1 page,
  53 harvested results, 0 errors, 0 warnings; `manifest-deps.mjs` → 56 items,
  0 errors; `source-fetch-check.mjs --coverage ...` → 3/3 fetch-verified
  (0 drops); `source-backing.mjs --require-verified` → 22/22 authored results
  backed; a dependency traversal of all 56 items → 1,267 distinct IDs
  (1,211 external), 0 missing, 0 non-`published`, no recorded-result
  supplier; `step3-decisions.mjs check --phase scope` lists this page as
  "current scope review required" (no owner decision exists).
- Sources re-fetched for this review (bodies byte-size-identical to the
  Step-1 stamps) and read at the cited ranges: Lee (1,346,335 B), Ch. 10
  printed pp. 173–190 — numbered results 10.1–10.15 and the Morse-index
  orientation paragraph; Datar (1,206,685 B), Lectures 21–23, printed
  pp. 153–176 — 21.1.2–21.2.6, 22.1.1–22.3.2, 23.1.1–23.3.4, including the
  complete Lemma 23.2.2 characterization and Lemma 23.2.1 cut-locus/distance
  regularity; Eschenburg (338,541 B), §2 Definition 2.1/Remark 2.2/Riccati
  (2.5)–(2.7) and §5 the `cut(v)` definition and continuity assertion,
  Examples 5.1–5.2, Lemma 5.3 and Remark 5.4 (Theorem 5.5 Bishop–Gromov
  noted as deferred).

## Scope against the prose design

Every designed row is present with the design's meaning:

- A items 1–10 (variations, commutation, Jacobi equation, ODE existence and
  uniqueness, the 2n-dimensional space, variation existence, tangential and
  Killing fields, Wronskian), 11–15 (differential of `exp`, conjugate points
  and multiplicity, critical values of `exp`, isolated instants,
  reparametrization invariance), 16–23 (second variation, index form,
  integration by parts, null solutions, index lemma, local minimality before
  conjugacy, nonminimization past the first conjugate point, degeneration at a
  conjugate endpoint), 24–31 (cut time, initial-interval minimality, cut
  point/locus, first-cut characterization, positivity and continuity,
  cut time ≤ first conjugate time, injectivity radius = inf cut times, `exp_p`
  a diffeomorphism on the tangent cut domain onto `M \ ({p} ∪ Cut(p))`),
  32–37 (distance smooth off `p` and `Cut(p)`, gradient, Hessian via radial
  Jacobi fields, closedness, Riemannian nullity, polar integration discarding
  the cut locus), and 38 (`rem-the-morse-index-theorem-for-geodesics` kept as
  a deferral remark). The six `fs-` rows are exactly the design's list.
- B page: all 12 designed leaves are present with the designed content —
  Euclidean `J = A + tB`; constant-curvature sine/linear/hyperbolic-sine
  fields; antipodal conjugacy with multiplicity `n−1`; no conjugate points for
  `K ≤ 0`; rotational Killing fields; sphere, circle and rectangular-torus
  cut loci (torus tangent cut domain = open Dirichlet rectangle with corner
  branching); the non-conjugate circle cut point with two minimizers; the
  sphere conjugate point with infinitely many minimizers; Euclidean distance
  Hessian; constant-curvature index form.
- The manifest runs `thm-characterization-of-a-cut-point` (designed 28) before
  `thm-cut-time-is-positive-and-continuous` (designed 27). This is an internal
  proof-order correction that the design's own continuity strategy requires
  ("both semicontinuity directions ... using ... the first-cut
  characterization"); scope content is unchanged.
- The design's conventions (§5 item 27) are honoured: items 4/7 (variation ↔
  ODE), 11 (`dexp` rescaling), 12/13 (multiplicity = kernel dimension), 28/29
  (cut time may precede conjugacy), 31/32 ("off the cut locus" = distance
  smoothness domain). Completeness, dimension 0/1 and infinite-cut-time
  conventions are stated in the item statements. The design's subject-level
  claims (Jacobi fields, conjugate points, index form, injectivity radius, cut
  locus) are covered without dropping, weakening or moving a designed row.

## Source coverage

The three sources were re-verified and re-read (see above). The named results
the coverage claims exist in the fetched text, and the disposition of each
harvested row is honest:

- 49 harvested rows: `included`/`inline` rows map to concrete item IDs covering
  the whole inventory; the 4 canonical rows (index lemma in full
  fixed-endpoint form, continuous cut-time graph and Fubini nullity route,
  polar integration outside the cut locus, finite rectangular-torus Dirichlet
  cell) map to `thm-index-lemma`,
  `thm-cut-locus-of-a-point-has-riemannian-volume-zero`,
  `cor-polar-integration-may-discard-the-cut-locus` and the torus B example.
- Route substitutions, both prescribed or justified: Datar Corollary 23.3.2's
  Rademacher + Sard proof is replaced by the design's radial cut-time
  graph/Tonelli/Lipschitz-null argument (design lines 5840–5844 explicitly
  forbid invoking Rademacher), and Eschenburg's externally-cited continuity of
  `cut(v)` is proved locally (design lines 5823–5827). Both preserve the
  claims; the coverage records the substitution, not a dropped result.
- `deferred` rows have destinations that exist in the plan: Lee Proposition
  10.9 → `riemannian-comparison-theorems` (see observation 2 below), Eschenburg
  Theorem 5.5 (Bishop–Gromov) → `riemannian-comparison-theorems` (whose design
  contains the volume-comparison items that cite this pair's nullity and polar
  results).
- `already-published` rows honestly point at existing published items (Datar
  Definition 23.3.3 → `def-injectivity-radius-at-a-point-and-of-a-manifold`;
  Example 23.3.4 → `cex-a-complete-manifold-with-zero-global-injectivity-radius`).
- `out-of-scope` rows (Datar Corollary 21.1.3 second variation of length,
  Datar Proposition 23.3.1 directional-differentiability refinement, Lee
  Proposition 10.10 local uniqueness of constant-curvature metrics) lie outside
  this pair's designed subject and no consumer I found needs them.

## Role in the library

- In-run: the only consumer is the B companion page. No other batch page
  requires either page and no other batch item lists a pair item as a
  dependency.
- Planned: `riemannian-comparison-theorems` (order 487, not part of this run)
  requires this A page and uses exactly the planned interfaces: radial Jacobi
  fields and the Wronskian identity (items 3, 5, 10), the index form and
  nonnegativity for minimizers in Bonnet's conjugate-radius theorem (items
  17, 22), the Hessian of the distance via radial Jacobi fields (item 34) for
  Hessian/Laplacian comparison, and cut-locus nullity plus polar integration
  (items 36, 37) for Bishop–Gromov. Nothing a consumer needs is missing.
- Published library: no published item or page consumes these IDs; the
  published corpus has no Jacobi/cut-locus module, and
  `research/published-consumer-supplier-ledger.md` carries no entry for this
  pair. The pair introduces the material; it repairs no published debt.

## Dependency and prerequisite status

All 56 Step-1 records are `ready`. The page declares the reduced edge
`riemann-curvature-and-riemannian-submanifolds`; the design's DG-8/DG-19/DG-20
and Radon/Fubini inputs are reached through item-level dependencies, all of
which are published (my 1,267-ID closure traversal found 0 missing and 0
non-published suppliers). `manifest-deps`, coverage and source checks pass as
listed above; drift review recorded `no-drift`; cross-batch dependencies are
empty.

## Uncertainty and observations for the owner

1. **Route substitutions.** The two proof-route substitutions above are
   recorded in the design and the Step-1 notes; they keep every designed claim
   and were confirmed in the re-read sources. No scope action is needed;
   item-level fidelity remains a Step 3b/5a duty.
2. **Coverage-record precision.** Lee Proposition 10.9 (the explicit
   constant-curvature metric in normal coordinates) is disposed
   `deferred → riemannian-comparison-theorems`, but the DG-23 design list I
   read does not obviously contain that explicit metric formula (it has
   model-space radial area/volume and the radial volume Jacobian). The DG-23
   author should confirm the destination before that page is built. The row is
   not part of this pair's designed inventory, so this does not affect the
   scope decision.
3. **Classical corollaries not itemized** (each follows from planned items, no
   consumer needs them): the cut locus of `p` is nonempty when `M` is compact;
   `inj(p) > 0` at every point of a complete manifold (item 27 positivity +
   continuity on the compact `S_pM`, with item 30; the *global* injectivity
   radius may vanish, as the published example shows);
   `q ∈ Cut(p) ⟺ p ∈ Cut(q)` (Eschenburg §5). Optional enrichment only.
4. **Conscious deferrals.** The Morse index theorem (remark item 38; items
   20–23 are the finite-variation consequences used here) and all
   comparison-theorem content (DG-23) are explicit design decisions, not
   omissions; no in-run consumer requires them.
5. **Out-of-scope refinements.** The rows in observation 2 of the source
   section could be reconsidered by the owner for future pages, but none is
   needed by this pair or its planned consumer.
6. Proof correctness, statement-by-statement source fidelity and dependency
   minimality were not judged here; those belong to Step 3b and Step 5.

## Scope decision

The planned definitions, results and examples cover the pair's intended
subject at the design's breadth — Jacobi fields as ODE solutions and as
variation fields, the differential of the exponential map, conjugate points
with multiplicity, the second variation/index form with the index lemma and
loss of minimization past the first conjugate point, cut time/cut point/cut
locus with the two-mechanism characterization, injectivity radius, distance
regularity off the cut locus, closedness and Riemannian nullity of the cut
locus, and polar integration discarding it — together with the companion
example page, with all 56 Step-1 records `ready`, every declared prerequisite
published (clean 1,267-ID closure) and all three sources re-verified.
Recorded: **sufficient**.
