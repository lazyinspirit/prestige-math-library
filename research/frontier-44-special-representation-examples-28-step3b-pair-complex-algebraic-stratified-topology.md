# Step 3b — pair `complex-algebraic-stratified-topology` (batch 37)

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-complex-algebraic-stratified-topology-d73e1dbe7428e55e`.
Owned A page: `complex-algebraic-stratified-topology` (order 1809, category
algebraic-geometry, 17 scaffold items). Owned B page:
`complex-algebraic-stratified-topology-examples` (order 1814, 1 scaffold item).
Batch 37 contains only this pair, so the shared batch-37 files carry no sibling
rows; sibling pairs of other batches are preserved untouched.

## Owned IDs and open obligations (entry checkpoint)

All eighteen item files, both library pages, the batch-37 proof contracts and
this report are owed at entry. Dependency-ordered authoring list (dispatch
order, ties by page order then item ID):

0. `lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs` (A)
0. `lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications` (A)
0. `lem-finite-cell-local-system-cohomology-is-finite-and-commutes-with-field-extension` (A)
0. `lem-finite-simplicial-maps-have-explicit-compatible-triangulated-mapping-cylinders` (A)
0. `lem-finite-simplicial-open-stars-have-explicit-conical-product-charts` (A)
0. `ex-a-noncompact-algebraic-line-needs-a-deleted-boundary-triangulation` (B)
1. `def-finite-complex-algebraic-whitney-stratification-and-control-data` (A)
2. `lem-generic-complex-algebraic-whitney-regularity` (A)
3. `thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications` (A)
8. `lem-relative-tubular-neighborhoods-preserve-a-chain-of-submersions` (A)
8. `lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts` (A)
9. `lem-whitney-stratifications-admit-compatible-control-data` (A)
10. `lem-compact-controlled-whitney-spaces-admit-commuting-radial-collars` (A)
10. `lem-controlled-stratified-submersions-have-continuous-local-trivializations` (A)
11. `lem-compact-semialgebraic-families-admit-compatible-finite-triangulations` (A)
11. `thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods` (A)
12. `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology` (A)
13. `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models` (A)

Open obligations at entry:

1. author all 18 item files in the dependency order above, rechecking every
   declared supplier against its current file (published or in-run draft);
2. create `library/algebraic-geometry/complex-algebraic-stratified-topology.md`
   and `…-examples.md`;
3. write `research/frontier-44-special-representation-examples-28-batch-37.proof-contracts.json`
   with exact cited excerpts, per-step inputs and boundary dispositions;
4. sync the batch-37 manifest dependencies/provenance to the authored items and
   refresh the cross-batch dependency inputs without touching sibling pairs;
5. run the explicit-path checks on the changed set (proof-layout before
   handoff, precheck, rendercheck, content-policy, depcheck/depsource,
   manifest-deps, item-dependency-levels, validate-plan, coverage-checklist,
   proof-contract --strict, boundary-audit, citation-fidelity) and record one
   `tools/step3-decisions.mjs record-item` decision per item;
6. flag any still-unfinished in-run supplier with exact supplier ID, consumer
   ID and consuming step, and keep that consumer's decision escalated until the
   supplier and proof use are verified. In-run prerequisite pairs to inspect:
   `analytic-constructible-sheaf-foundations` (batch 30),
   `constructible-incidence-and-cochain-models` (batch 36),
   `relative-smooth-triangulation-and-bundle-fitting` (batch 29).

Entry notes carried from the Step-3a report and batch notes: scope decision
`sufficient` (recorded 2026-10-10); the item-17 design carrier is superseded by
the repaired constructible-drafts carrier; the four triangulation items cite
R. M. Goresky, *Triangulation of stratified objects*, whose available copy has
no usable text layer, so their proofs are anchored in the text-verified Goresky
lecture notes (§8.10) wherever the citation is load-bearing.

## Checkpoint log

All checkpoints below record: file authored, statement source, dependency
repairs, checks run (`precheck`, `proof-layout`, `rendercheck` on the explicit
path) and the recorded item decision.

### Level 0 — `lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs`

- Authored with a 10-step proof: affine chart and Noether normalisation, the
  line avoiding `h(B)`, the curve component `C_0`, its finite normalisation,
  the smooth-point graph chart (Jacobian kernel, `dim ≤ edim`, regular local
  rings are domains, `X = Z` near the point, implicit-function-theorem chart),
  and the punctured-disk avoidance via finiteness of `C_0∖O`.
- Deps repaired: added the published regular-local-ring, tangent-space,
  dimension-bound and holomorphic-chart suppliers used by that chart step
  (superseding the draft's bare assertion that the implicit function theorem
  gives disk charts).
- Checks: precheck PASS (direct), proof-layout 10 steps / 0 defects, rendercheck
  OK. Decision `repaired` / `["dependency"]`.

### Level 0 — `lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications`

- Authored with the finite dimension-decreasing source partition and the
  target-round construction, including the analytic-submersion paragraph via
  locally standard smooth presentations and the holomorphic constant rank
  theorem.
- Deps repaired: added `def-ag-standard-smooth-algebra`,
  `def-smooth-morphism-classical`, the classical-variety definition and
  `thm-holomorphic-constant-rank-theorem`.
- Checks: precheck PASS, proof-layout 5 steps / 0 defects, rendercheck OK.
  Decision `repaired` / `["dependency"]`.

### Level 0 — `lem-finite-cell-local-system-cohomology-is-finite-and-commutes-with-field-extension`

- Authored with the cellular-complex finiteness and the termwise
  Hom-tensor comparison over the finitely generated free `k[π]`-modules,
  closing with flatness of the field extension.
- Deps repaired: added the cellular-chain complex definition, the
  chain-incidence theorem, the basis and flatness suppliers.
- Checks: precheck PASS, proof-layout 3 steps / 0 defects, rendercheck OK.
  Decision `repaired` / `["dependency"]`.

### Level 0 — `lem-finite-simplicial-maps-have-explicit-compatible-triangulated-mapping-cylinders`

- Authored with the hyperplane-arrangement cells, the join cells `A*C`, the
  coning triangulation, the explicit forward map `H` and the threshold inverse
  formulas, the two inverse identities, the piecewise-linear retraction and the
  subcomplex/retention clauses.
- Deps repaired: added the quotient-topology, continuity-pasting and
  min/max-continuity suppliers. The Goresky-1978 reference is retained with an
  explicit note that the available copy is an image scan (bibliographic
  identity verified; body not re-read), and the proof is carried by the
  explicit construction.
- Checks: precheck PASS, proof-layout 5 steps / 0 defects, rendercheck OK.
  Decision `repaired` / `["dependency"]`.

### Level 0 — `lem-finite-simplicial-open-stars-have-explicit-conical-product-charts`

- Authored with the cone model `c_{<1}(L)` as the compact-quotient
  homeomorphism to the Euclidean cone, the barycentric splitting, the
  simplex-interior correspondence, and the `D`-avoidance clause.
- Deps repaired: added the published star/link definition, compactness, product
  and continuity suppliers.
- Checks: precheck PASS, proof-layout 3 steps / 0 defects, rendercheck OK.
  Decision `repaired` / `["dependency"]`.

### Level 0 — `ex-a-noncompact-algebraic-line-needs-a-deleted-boundary-triangulation` (B page)

- Authored with the noncompactness argument, the octahedral boundary complex,
  radial normalisation to `S²`, the deleted vertex and the stereographic
  formulas.
- Deps repaired: added the continuity, homeomorphism and complex-plane
  dictionary suppliers. `provenance.statement` stays `ai-generated` with
  `generation.role: example`; the Goresky lecture-notes reference is retained.
- Checks: precheck PASS, proof-layout 3 steps / 0 defects, rendercheck OK.
  Decision `repaired` / `["dependency"]`.

### Level 1 — `def-finite-complex-algebraic-whitney-stratification-and-control-data`

- Authored from the current scaffold statement with clauses (a)–(e) verbatim
  and choice-free well-definedness remarks; declared dependency on the
  in-run batch-30 supplier `def-analytic-topology-and-finite-smooth-algebraic-stratifications`
  (authored, Step-5 review still owed in that batch).
- Checks: no phase proof (precheck not applicable), rendercheck OK,
  proof-layout 0 steps. Decision `accept` / `[]`.

### Level 2 — `lem-generic-complex-algebraic-whitney-regularity`

- Authored with the moving-secant incidence closure `Z`, generic fibre purity,
  the fixed-lower-point arc from the level-0 curve-arc lemma, the annihilator
  covector computation, and the reductions from moving points to Whitney (b)
  and from (b) to (a).
- Deps repaired: added the locally standard smooth presentation, implicit
  function and irreducibility facts consumed by the tangent-plane argument.
- Checks: precheck PASS, proof-layout 7 steps / 0 defects, rendercheck OK.
  Decision `repaired` / `["dependency"]`.

### Level 3 — `thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications`

- Authored with the closed-set replacement trick, the dimension-decreasing
  Whitney source partition compatible with fixed external upper strata, the
  target-round construction, termination and closure bookkeeping, the analytic
  submersion clause, and the properness/projective analyses.
- Deps repaired: routed the smooth charts and compactness claims through the
  suppliers actually used.
- Checks: precheck PASS, proof-layout 7 steps / 0 defects, rendercheck OK.
  Decision `repaired` / `["dependency"]`.

### Level 8 — `lem-relative-tubular-neighborhoods-preserve-a-chain-of-submersions`

- Authored with the adapted-chart quotient splitting, the time-one flow
  endpoint, the injective scaled domain and the displacement estimate
  separating the parameter points.
- Checks: precheck PASS, proof-layout 5 steps / 0 defects, rendercheck OK.
  Decision `accept` / `[]`.

### Level 8 — `lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts`

- Authored with the norm differential computation, the uniform lower-bound
  argument by contradiction and the explicit right inverse
  $A^*(AA^*)^{-1}$; the codimension-zero case is recorded in the last step.
- Checks: precheck PASS, proof-layout 5 steps / 0 defects, rendercheck OK.
  Decision `accept` / `[]`.

### Level 9 — `lem-whitney-stratifications-admit-compatible-control-data`

- Authored with the induction on stratum dimension, the incomparable-tube
  separation, the three-band controller construction and the squared-radius
  normalization.
- Checks: precheck PASS, proof-layout 6 steps / 0 defects, rendercheck OK.
  Decision `accept` / `[]`.

### Level 10 — `lem-compact-controlled-whitney-spaces-admit-commuting-radial-collars`

- Authored with the normalized radius rescaling, the stratumwise lift
  construction, compact trapping, the time-$\log(s/\rho_X)$ radial family and
  the decreasing correction induction making the collars commute.
- Checks: precheck PASS, proof-layout 8 steps / 0 defects, rendercheck OK.
  Decision `accept` / `[]`.

### Level 10 — `lem-controlled-stratified-submersions-have-continuous-local-trivializations`

- Authored with the minimum-norm lifts, the patched locally bounded fields,
  the per-stratum ODE flows with a fixed escape bound, joint continuity across
  strata and the proper whole-fibre trivialization from cut-off base fields.
- Tag repair during contract generation: the AC fact `A1` is now cited at the
  patching steps 2.1–4.1 where the countable-choice partition supplier is
  consumed (proof-contract strict initially flagged `A1` as uncontracted).
- Checks: precheck PASS, proof-layout 8 steps / 0 defects, rendercheck OK.
  Decision `accept` / `[]`.

### Level 11 — `lem-compact-semialgebraic-families-admit-compatible-finite-triangulations`

- Authored with the level-link closure analysis, the core/corner structure, the
  bundle charts from horizontal fields, the double induction over skeletons
  and the mapping-cylinder attachment of the final stratum cores.
- Checks: precheck PASS, proof-layout 26 steps / 0 defects, rendercheck OK.
  Decision `accept` / `[]`.

### Level 11 — `thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods`

- Authored with the local reduction at $y$, the proper stratified submersion
  $g=(\pi,r)$, the horizontal/radial flow trivialization, the apex extension
  and the link Whitney/frontier restrictions, closing with the algebraic
  ambient-extension construction for stratal submersions via partitions of
  unity.
- Checks: precheck PASS, proof-layout 6 steps / 0 defects, rendercheck OK.
  Decision `accept` / `[]`.

### Level 12 — `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`

- Authored from the repaired constructible-drafts carrier: projective closure
  and Hermitian-projector embedding, the finite compatible triangulation
  $(K,D)$, the incidence-model diagram representative, compact-support stars,
  local constancy along complex strata via the conical chart, and
  coefficient-extension compatibility.
- Open obligation: steps 2.1–5.1 use the in-run batch-36 supplier
  `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`,
  which is authored as a draft but has no recorded Step-3 decision (batch-36
  dispatch `step3b-pair-constructible-incidence-and-cochain-models-2772d341877c48a2`
  still in flight). Decision `escalate` / `["dependency"]`.
- Checks: precheck PASS, proof-layout 5 steps / 0 defects, rendercheck OK.

### Level 13 — `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`

- Authored from the constructible-drafts carrier: individual-operation use of
  the stratification/conical/triangulation suppliers, finite affine-open
  descent on separated finite-type varieties, and the internal-Hom
  localisation on the finite cover.
- Open obligation: steps 1.1–2.1 use the in-run batch-36 suppliers
  `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`
  (step 1.1, step 1.2, step 2.1) and
  `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`
  (step 1.2, step 2.1), both drafts without recorded Step-3 decisions.
  Decision `escalate` / `["dependency"]`.
- Checks: precheck PASS, proof-layout 3 steps / 0 defects, rendercheck OK.

## Flags for unfinished in-run suppliers (exact consumer/step pairs)

- Supplier `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`
  (page `constructible-incidence-and-cochain-models`, batch 36):
  - consumer `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`,
    steps 2.1, 3.1, 4.1, 5.1 (fact `[F4]`);
  - consumer `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`,
    steps 1.1, 1.2, 2.1 (fact `[F4]`).
- Supplier `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`
  (page `constructible-incidence-and-cochain-models`, batch 36):
  - consumer `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`,
    steps 1.2, 2.1 (fact `[F5]`).

The two consumer decisions stay `escalate` until those suppliers and the
actual proof uses are reconciled; both consumers were nevertheless fully
authored, checked and contracted, and their use of the draft statements is
recorded plainly in their Facts blocks and Remarks.

**Status at handoff.** While this pair was being written, both batch-36
suppliers recorded `repaired` / `["dependency"]` Step-3 receipts, but the
batch-36 dispatch
(`step3b-pair-constructible-incidence-and-cochain-models-2772d341877c48a2`)
has not ended, so their files can still change. The recorded quotes and uses
in the batch-37 proof contracts were re-verified against the suppliers'
current files at the end of this task (`citation-fidelity`: every quote
found; `proof-contract --strict`: 18/18 clean). Because an escalated receipt
can only be superseded by the owner, the two consumers' receipts still carry
the escalation (and its pre-sync hash); the owner reconciliation of the
completed suppliers against the uses listed here is the remaining step.

## Handoff

**Completed IDs (18/18 authored, 2 escalated):** all items of this pair are
written, checked and registered: 16 items closed with `accept`/`repaired`
decisions refreshed to the current inputs; the two level-12/13 consumers above
are `escalate` with `["dependency"]` pending the batch-36 suppliers.

**Added suppliers (dependency repairs), all published items except where
noted:** level-0/2/3 items added the published tangent-space,
regular-local-ring, Noether-normalisation, chart, dimension, continuity,
quotient-topology, compactness, cellular-chain, basis/flatness,
holomorphic-chart and constant-rank suppliers actually used by their proofs;
`lem-finite-cell-local-system-cohomology-…` also added the published
`def-based-cellular-chain-complex-of-a-universal-cover`, and
`lem-finite-simplicial-maps-…` added the published
`def-initial-and-final-topology`. The batch-37 manifest deps were synced to
the authored items for these seven items and the example. The B-page example
moved its `generation.role` block to top level as `content-policy` requires
and its decision was re-recorded with defects `["dependency","metadata"]`.

**Checks actually run (all on the explicit paths above):**

- `tools/precheck.mts` on all 18 items — 17 checked, 0 failing (the definition
  item has no phase body);
- `tools/proof-layout.mjs` on all 18 items in one command — 115 steps, 0
  defects;
- `tools/rendercheck.mjs` on all 18 items and on both library pages — OK;
- `tools/content-policy.mjs research/frontier-44-special-representation-examples-28-batch-37.pages.json`
  — 18 scoped items, 0 errors, 0 warnings;
- `tools/manifest-deps.mjs` on the batch-37 manifest — 18 items, 0 errors;
- `tools/depcheck.mjs --items-file /tmp/items37.json` — selected item/page and
  prerequisite-cycle checks passed;
- `tools/depsource.mjs research/plan-spec.json --run … --items-file …` — 0
  unresolved; 118 deps resolve to a published page and 33 to neither a
  published page nor an earlier planned page (draft or unplanned suppliers,
  including the in-flight batch-30/36 pages);
- `tools/item-dependency-levels.mjs check --run …` — 0 errors for this pair's
  items (the run-wide report still lists sibling batches that are mid-authoring);
- `tools/validate-plan.mjs research/plan-spec.json --run …` — 0 errors for
  this pair after adding the two `requires` entries below; 5 remaining
  `[undeclared-prereq]`/`[b-leaf]` errors belong to other in-flight pairs
  (`compact-support-sheaf-calculus-examples`, `logarithmic-hodge-complexes-and-smooth-open-weights`,
  `equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples`,
  `proper-hyperresolutions-and-mixed-hodge-restriction-images`);
- `tools/coverage-checklist.mjs research/frontier-44-special-representation-examples-28-batch-37.coverage.json`
  — 2 pages, 31 harvested results, 0 errors;
- `tools/proof-contract.mjs research/frontier-44-special-representation-examples-28-batch-37.proof-contracts.json --strict`
  — 18/18 items, 0 errors, 0 warnings (147 citations, 115 derivations, 144
  boundary rows);
- `tools/boundary-audit.mjs` on the same file — no template clusters, no
  contradicted dispositions;
- `tools/citation-fidelity.mjs` on the same file — every recorded quote found;
  no widening candidates;
- `tools/frontier-dependency-ledger.mjs refresh --run …` — refreshed and
  deduplicated.

**Recorded decisions:** 18 `tools/step3-decisions.mjs record-item` receipts
(16 closed, 2 escalated). The escalated pair cannot be re-recorded by an
agent once escalated, so their receipts carry the pre-sync hash; they remain
open for owner reconciliation by construction.

**Published concerns / Step-4 amendments:**

- The A page now declares `riemann-surfaces-branched-maps-and-differentials`
  and `simple-homotopy-whitehead-groups-and-torsion` in `requires` (run
  manifest and library page), because authored items depend on
  `lem-nonsingular-complex-algebraic-curve-holomorphic-charts` (item 1) and
  `def-based-cellular-chain-complex-of-a-universal-cover` (item 3). The
  plan-spec's `requires` for this page does not yet list them: a shared-plan
  amendment for Step 4, not edited here (shared file).
- The Goresky 1978 triangulation paper is an image scan with no text layer;
  its bibliographic identity is verified and the load-bearing triangulation
  route is anchored in the text-verified Goresky lecture notes and the
  explicit constructions of the in-run suppliers (recorded in the items'
  sources and in the batch notes). Confidence: no defect, but the citation
  should be read as identity-verified, body-unverified.
- `validate-plan` also emits `redundant-prereq` warnings for the A page: the
  scaffold's declared `requires` is not a transitive reduction (for instance
  `analytic-constructible-sheaf-foundations` is also reachable through
  `constructible-incidence-and-cochain-models`, and many algebraic-geometry
  pages share long chains). No requires entry was dropped, because the
  reduction is owner-held; this is a Step-4 reading-order note, not a defect
  of this pair.
- Items 17 and 18 depend on the two still-draft batch-36 supplier items; this
  is an open obligation, not a defect of this pair, and is the only reason
  those two decisions are escalated.

**Open obligations left in place:** the batch-36 supplier reconciliations for
the two escalated consumers; the Step-4 plan `requires` amendment above; the
independent Step 5–7 audit of this pair; the boundary rows in the batch-37
contract file remain subject to human read as candidates (no contradictions
found mechanically).
