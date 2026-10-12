# Batch 1 notes — `cm-math-geometry` / `cm-math-geometry-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-1, covers 1.
Step 1 complete initial authoring only; no readiness record is independent
mathematical approval (Step 3 review follows).

## Scope built

- A page `cm-math-geometry` (order 81, category
  `non-relativistic-classical-mechanics-mathematics`, `library: mathematics`),
  17 locally authored mathematical items: 9 definitions, 8 proved lemmas.
  No item depends on a physical item; every `deps` entry is annotated
  `mathematical-premise`.
- B page `cm-math-geometry-examples` (order 82), 6 leaf items: 5 examples
  (each with a numbered verification) and 1 counterexample. Nothing outside the
  pair depends on them.
- Page `requires`, order, kind, category, library, companion and titles are
  unchanged from the plan record; the only edits to the manifest are the two
  `items` arrays, the `dependency_level` labels and — during the repair log
  below — the `justified_by` declaration of `def-cm-affine-time-space`.
- Dependency levels use in-run dependencies only: D1 group and the
  affine-time/SO(3) definitions are level 0; each lemma is level 1 except
  `lem-cm-adapted-charts-and-galilean-transformations` (level 2, through
  `lem-cm-adapted-coordinates-exist-and-are-unique`) and the two examples that
  consume level-2 suppliers (`ex-cm-galilean-boost-coordinate-change` level 3,
  `ex-cm-stroboscopic-map-of-the-plane-oscillator` level 2).
  `node tools/physics-support/item-dependency-levels.mjs check --run
  physics-cm-qm-gr-79-2026-10-11` reports no finding for any of these 23 items
  (the remaining errors in that run belong to batches that have not been
  authored yet: empty scaffold inventories).
- No page split was needed: 17 + 6 items are far below the 100-item cap.

## Design vs plan-spec, and how the design's local sections were delivered

- `research/plan-spec.json` and the generated batch manifest agree with
  `research/plan-non-relativistic-classical-mechanics-track.md` L18 and with the
  source audit (`research/scaffold-audit-2026-10-11/classical-mechanics/`) on
  page id, title, orders 81/82, category, library, companion, and the `requires`
  list. No page-edge or order conflict to record.
- Granularity: the design assigns the local sections `D1`, `M1`, `E1` to this
  page without item ids. They are delivered as follows.
  - `D1` ("explicit stability, dynamics and continuum definitions") is authored
    as `def-cm-equilibrium-and-lyapunov-stability`,
    `def-cm-orbital-and-linear-stability`,
    `def-cm-hyperbolic-equilibrium-and-limit-cycles`,
    `def-cm-stroboscopic-map` (with its proved iterate lemma
    `lem-cm-stroboscopic-iterate-identity`),
    `def-cm-constrained-configuration-and-mass-metric` (with
    `lem-cm-mass-metric-positivity`), `def-cm-material-region-and-density`, and
    `def-cm-traction-and-stress`.
  - `M1` ("affine time, Euclidean slices, curves and Galilean transformations")
    is authored as `def-cm-affine-time-space`,
    `lem-cm-adapted-coordinates-exist-and-are-unique`,
    `lem-cm-adapted-charts-and-galilean-transformations`, and
    `lem-cm-moving-frame-acceleration-identity`.
  - `E1` ("basic geometry, curves, differential forms and local primitives:
    manifold/tangent/form interfaces, the regular SO(3) level and stabilizer,
    the local radial primitive, and the punctured-plane counterexample") is
    delivered as follows. The claim-wise audit of the current canonical root
    library found that the manifold, tangent/curve-velocity and differential-form
    interfaces, the closed-one-form primitive and the punctured-plane
    counterexample are already **published root items**
    (`def-derivation-at-a-point-and-tangent-space`,
    `thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors`,
    `thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure`,
    `thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure`,
    `thm-local-coordinate-formula-for-the-exterior-derivative`,
    `thm-the-exterior-derivative-squares-to-zero`,
    `thm-the-exterior-derivative-commutes-with-pullback`,
    `thm-poincare-lemma-for-differential-forms-on-star-shaped-domains`,
    `thm-poincare-lemma-for-star-shaped-domains`,
    `cex-the-closed-angular-form-on-the-punctured-plane-is-not-exact`).
    Under SCHEMA's "shared mathematics uses imported canonical IDs; never
    re-author an imported item", these claims are **used by reference** rather
    than duplicated. The genuinely local E1 content — the regular-`SO(3)` level,
    its dimension, tangent space, compactness, matrix-group structure and the
    trivial-stabilizer/configuration count — is authored as
    `def-cm-special-orthogonal-group`, `lem-cm-so3-is-a-matrix-group`,
    `lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold` and
    `lem-cm-rigid-labeling-stabilizer`, and the radial primitive and the
    counterexample are exercised/recorded on the B page
    (`ex-cm-closed-one-form-radial-primitive`, which cites the published
    counterexample without using it as a premise). This is a deliberate
    interpretation of the design, recorded here for the Step-2 reviewer; it
    preserves every approved E1 claim (each is available as a published
    supplier) while obeying the no-re-authoring rule.
- The `E1` local supplier list in the design names
  `thm-a-regular-level-set-is-an-embedded-submanifold`;
  `lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold` uses that
  theorem and its companion tangent-space proposition
  `prop-tangent-space-of-a-regular-level-set-is-the-kernel`, both homed on the
  required page `rank-theorems-and-embedded-submanifolds`. An earlier draft of
  that lemma depended on the published **example**
  `ex-orthogonal-group-is-a-regular-level-set`, which lives only on an
  examples/B page; `depcheck` correctly rejected that as a
  `b-leaf-content` edge, and the lemma was rewritten to depend only on
  A-page suppliers. This is recorded as a dependency-repair decision.
- The design's `E1` "regular SO(3) level and stabilizer" wording says the
  determinant condition "selects an open-and-closed component". The authored
  lemma proves the open-and-closed property (which is what the later consumers
  use) and deliberately does **not** assert connectedness of `SO(3)`, since no
  proof of connectedness is required or supplied by this page. The weakening of
  the word "component" to "open-and-closed subset" is recorded as a
  scope-honesty adjustment, not a loss of a used claim.
- The design's `D1` text places "the reduced potential `V_eff` in a regular
  heavy-top chart" and constitutive elasticity/fluid laws here; both are
  functions/claims of other local sections (`E9` on the rotation pages, `E14` on
  the continuum page) and are therefore not re-authored on this page. Consumers
  reach them through their own pages.

## Supplier policy and external inputs

- All external mathematical suppliers of this batch are currently published
  canonical root items except one inspected draft: the special-relativity-run
  item `def-affine-space-and-displacement` (status `draft`, domain mathematics).
  The owner direction of 2026-10-11 permits draft EM/SR suppliers after
  inspection. It was inspected (definition of a free transitive action,
  displacement uniqueness, and its recorded consequences). It is nevertheless
  **not** used as a dependency, because its page `sr-spacetime-primitives` is
  order 209, later in reading order than this page, and load-bearing forward
  references are barred for definitions and lemmas. Instead,
  `def-cm-affine-time-space` restates the affine-space structure inline (action
  axioms + uniqueness of displacement) so that the item is self-contained; the
  general affine-space development remains with its canonical home for that
  collection's consumers. This is recorded as a conflict between the two owner
  texts resolved in favour of the dependency-order rule.
- Transitive check: every published dependency of every authored item was read at
  the level of its Statement/Definition (and its Facts where used). No dependency
  is a planned supplier, no dependency is `provenance.statement: ai-generated`,
  and no mathematical item depends on a physical item.
- Cross-batch dependencies: none. The batch's input file
  `research/physics-cm-qm-gr-79-2026-10-11-batch-1.cross-batch-dependencies.json`
  is the empty array, and the unified ledger was refreshed.
- Pre-existing items with `cm-` ids from earlier work are present in `items/`
  (`thm-cm-center-of-mass-and-kinetic-splitting`,
  `thm-cm-work-energy-balance`, `thm-cm-momentum-and-angular-momentum-balance`,
  `thm-cm-compact-continuation-for-locally-lipschitz-odes`,
  `cor-cm-finite-time-breakdown-requires-escape`,
  `cor-cm-linearization-error-bounds`, `lem-cm-derivative-of-pairings-of-curves`,
  `lem-cm-piecewise-c1-jump-derivative`,
  `lem-cm-uniform-second-order-remainder-bound`, the `*-cm-math-evidence-*`
  items, `def-cm-measurement-model` and relatives, and
  `rem-cm-inference-and-uncertainty-scope`). None of them overlaps an id or a
  claim minted here; the balances/dynamics/evidence batches should reuse them
  rather than re-mint them. Two pre-existing Cohen–Macaulay items whose ids
  contain `cm-` (`lem-cm-local-codimension-...`,
  `lem-cm-projective-curve-...`) are unrelated and are not touched.

## Sources (A page)

Six treatments were read over the exact load-bearing ranges and are recorded,
with all harvested headings disposed, in
`research/physics-cm-qm-gr-79-2026-10-11-batch-1.coverage.json`; all six carry
`source-fetch-check --stamp` full-text stamps (6/6 fetch-verified, 0 documented
drops):

1. G. Teschl, *Ordinary Differential Equations and Dynamical Systems* (AMS GSM
   140), author preliminary version, §§6.4-6.6 pp. 196-201 and §§9.1-9.2
   pp. 253-258, §12.1-12.2 pp. 315-319; book/primary.
2. D. Tong, *Classical Dynamics* (Cambridge, January 2015), §3.1-§3.1.2
   pp. 45-49, §3.2 pp. 50-53, §3.5 pp. 62-65; lecture notes/primary.
3. D. Tong, *Dynamics and Relativity* (Cambridge, March 2013), §1.2.1 pp. 5-7,
   §6.1-§6.2 pp. 93-95, §4.2.2 p. 53; lecture notes/primary.
4. J. M. Lee, *Introduction to Smooth Manifolds* (2003), Theorems 8.8/8.10 and
   Examples 8.33/8.35 pp. 181-196, Theorem 17.14 p. 447; book/primary.
5. R. Abeyaratne, *Continuum Mechanics* (MIT lecture notes, 1988 rev. 2020),
   §1.8 pp. 12-14, §§4.2-4.3 pp. 104-110, §4.5; lecture notes/primary.
6. MIT OCW 12.005, Lecture 3 (Cauchy tetrahedron and Cauchy's formula); course
   notes/secondary.

All URLs were fetched in full (bodies, not abstracts or landing pages) and
stamped. The only coverage-checklist advisory is
`coverage-low-yield` (9 of 31 harvested results scaffolded): most declines are
deferred to owner pages that own those results (`cm-math-continuum`,
`cm-math-chaos`, `cm-math-central`, `cm10-rigid-body-configuration-and-inertia`)
or are explicitly outside the mathematical scope of this pair (Lorentz
transformations, Lie-theory closure, force interpretations, path-ordered
exponentials). Each decline carries its own reason in the coverage file.

## Local closure decisions worth surfacing to reviewers

- `def-cm-orbital-and-linear-stability` defines linear stability by boundedness
  of every solution of the linearized system, without a matrix-exponential
  supplier; the definition is satisfied only via solutions in the sense of the
  published ODE definition.
- `def-cm-stroboscopic-map` is defined through the published maximal-solution
  theorem; `lem-cm-stroboscopic-iterate-identity` proves the iterate identity and
  the equilibrium fixed-point property with the gluing lemma
  `lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps`.
- `def-cm-material-region-and-density` deliberately makes boundary regularity a
  declared hypothesis of consuming statements rather than part of the word
  "material region"; the continuum page owns the regular-boundary development.
  This preserves D1's "declared C1 boundary" intent without pretending the
  vocabulary item proves a regularity theorem.
- `def-cm-traction-and-stress` records the traction sign convention and states
  that existence/uniqueness of a representing stress matrix is a theorem under
  Cauchy's hypothesis, not a definitional consequence; the conditional argument
  is deferred to `cm-math-continuum`.
- The collision-boundary convention of the D1 text ("Calling stable and unstable
  sets differentiable manifolds requires a stable-manifold theorem; E12 does not
  assert it") is preserved verbatim in the remarks of
  `def-cm-hyperbolic-equilibrium-and-limit-cycles`; no stable-manifold result is
  assumed anywhere in the batch.

## Checks actually run (all on the final carriers)

- `precheck.mts` on all 23 item files: `14 checked, 0 failing — all clean`
  (the 14 proof-bearing items pass the normative phase/step check; the 9
  definition items carry no proof section). The two items edited in the
  repair log below are definitions, so this count is unaffected by the repair.
- `proof-layout.mjs` on the changed item paths: `0 defects`.
- `rendercheck.mjs` on the 23 items, the two page files and `_category.md`:
  all clean (KaTeX, YAML, wikilink/math nesting).
- `depcheck.mjs` (whole repository): `0` errors, and `0` findings attributable
  to these 23 items after the repair log below. The first post-authoring run
  returned exactly two warnings attributable to this pair — `cited-not-in-deps`
  on `def-cm-affine-time-space` (its well-definedness citation of
  `lem-cm-adapted-coordinates-exist-and-are-unique` was undeclared) and on
  `def-cm-hyperbolic-equilibrium-and-limit-cycles` (a non-load-bearing
  cross-reference inside the Definition). Both were repaired; the final run
  shows no finding for any of the 23. The two `published-unaudited` findings
  whose ids contain `cm-` are the pre-existing Cohen–Macaulay items named above.
- `content-policy.mjs` (full mode) on the batch manifest: `23 scoped item(s),
  0 error(s), 0 warning(s)`. The pre-authoring `--manifest-only` mint check now
  reports `batch-item-already-exists` for the authored items; that mode asks
  "may these ids be minted here?" before authoring and is not the post-authoring
  gate.
- `physics-check.mjs --run` for the whole run cannot complete because its
  scoped import verification aborts on other batches' pre-authoring empty
  inventories; run against an overlay root whose only current manifest is this
  batch's (`--root <overlay> --run ...`) it returns
  `physics-content: 0 error(s), 23 items checked` (domains, dependency roles,
  body requirements and the scoped import check).
- `coverage-checklist.mjs`: `1 page, 31 harvested results, 0 errors, 1 warning`
  (the low-yield advisory above).
- `source-fetch-check.mjs` check mode: `6/6 source(s) fetch-verified`.
- `manifest-deps.mjs` on the batch manifest: `23 item(s), 0 error(s)`.
- `proof-contract.mjs --strict` on the batch proof contracts: `14/14 items
  checked, 0 error(s)`; `proof-contract-coverage.mjs` cannot complete yet
  because unrelated frontier batches still have empty inventories
  (`Empty or invalid frontier page inventory cm-math-numerical`).
- `fwdcheck.mjs`: 0 findings attributable to these 23 items (the two rounds of
  forward-reference findings were repaired by removing the later-page
  dependencies). `extcheck.mjs`: 0 findings.
- `item-dependency-levels.mjs check`: no finding for these 23 items; the run's
  remaining errors in that tool are other batches' empty scaffold inventories.
- `validate-plan.mjs research/plan-spec.json` (page level, no `--run`): exit 0
  — declared page order is acyclic and consistent; 80 pages carry item lists,
  498 planned pages do not yet.
- `validate-plan.mjs research/plan-spec.json --run
  physics-cm-qm-gr-79-2026-10-11`: **FAIL, exit 1** — run-wide 138
  `undeclared-prereq`, 29 `prefix` and 5 `b-leaf` findings; the `prefix` and
  `b-leaf` findings are other batches' items, and **29 `undeclared-prereq`
  findings are on this pair's two pages** (21 on `cm-math-geometry`, 8 on
  `cm-math-geometry-examples`, over 24 distinct declared P pages). A
  batch-scoped replay (temporary overlay root whose only current manifest is
  this batch's, `--repo` pointed at the overlay) reproduces exactly those 29
  findings and no other class; the escalation section below carries the exact
  edges. No plan or manifest `requires` field was edited by this worker.
- `physics-imports.mjs verifyMathematicsImports` (whole run): the local
  snapshot hash/classification stage and the originals stage pass, then the
  scope stage throws on other batches' pre-authoring empty inventories (first
  failure `Invalid or empty current page in
  physics-cm-qm-gr-79-2026-10-11-batch-10.pages.json`). Run against an overlay
  root whose only current manifest is this batch's, the same function returns
  `pass` for all 28 422 receipt files: no snapshot drift, and no identity,
  home, alias or policy change reachable from this batch's items.
- `manifest-integrity.mjs --run`: `158 page(s) owed, 158 in the manifests`,
  `no scope drift`.
- Readiness records: one per item, recorded after the final carrier edits
  (see the `*-step1-*.json` records). Five were re-recorded after the repair
  log below — the two edited items plus the three items whose transitive
  dependency closure contains `def-cm-affine-time-space` — and a batch-scoped
  `step1-decisions check` (overlay root carrying only this batch's manifest
  and records) reports `23/23 ready, closed`. The four items in that
  closure were re-recorded once more after the manifest was regenerated from
  the item files (semantically identical bytes; the generated key order is
  what the input-hash binding sees). The run-wide invocation of that
  checker currently aborts on a sibling batch's frontmatter defect
  (`items/def-cm-covariance-matrix-of-a-random-vector.md`, `cm-math-evidence`,
  untracked and modified during this same window; YAML "nested mappings are
  not allowed in compact mappings" at its Durrett reference) — a run-level
  blocker outside this batch, reported here and not repaired by this worker.

## Post-check repairs after the first verification pass

Two `depcheck` `cited-not-in-deps` warnings on this pair were repaired; neither
touches a statement, hypothesis or proof step, and no approved claim changed.

1. `def-cm-affine-time-space` cited
   `[[lem-cm-adapted-coordinates-exist-and-are-unique]]` in its Definition for
   the well-definedness of the adapted-coordinate notation, while neither
   `deps` nor `justified_by` declared it. The lemma depends on the definition
   (`deps` includes `def-cm-affine-time-space`), so this is the sanctioned
   well-definedness discharge: `justified_by:
   [lem-cm-adapted-coordinates-exist-and-are-unique]` was added to the item and
   mirrored in the batch manifest, following SCHEMA's `justified_by` rule and
   the in-run precedent `def-gr-smooth-covariant-two-tensor-field`. It is not
   added to `deps`: `depcheck` forbids an id in both fields, and the discharge
   direction is forward.
2. `def-cm-hyperbolic-equilibrium-and-limit-cycles` cited
   `[[def-cm-orbital-and-linear-stability]]` inside its Definition only to say
   that stability of a limit cycle is a *separate* property excluded from the
   definition. That is not a prerequisite, so the Definition sentence now ends
   "... is a separate property and is not part of the definition", and the
   cross-reference with its wikilink moved to an orientation-only Remarks
   bullet. Definitional content is unchanged.

The batch manifest was then regenerated from the authored items with the
scaffolding helper (`/tmp/gen-manifest.mjs`; semantically identical to the
repair edit and now carrying `justified_by` in generated form), and the
proof-contract file was regenerated byte-identically (`/tmp/gen-contracts.mjs`;
both edited items are definitions and carry no contract). Both items were
re-checked (rendercheck, proof-layout, precheck as applicable) and the five
affected readiness records were re-recorded: the two edited items and the three
items whose transitive dependency closure bites on `def-cm-affine-time-space`.
`itemHash` binds supplier-closure bytes, so this is the complete invalidated
set (verified against the checker's work list).

## Plan-context escalation (owner action): incomplete `requires` closure

`validate-plan --run` rule 15 requires every page home reached by a current
page's item `deps` to lie in the closure of that page's declared `requires`
("either add it or drop the dependency"). The 23 authored items reach 24
published supplier home pages outside that closure: 21 pages from the A page's
items (5 of them also from the B page) plus 3 pages reached only from the B
page (signature 21 A + 8 B; union 24). Every one of the 24 is a declared
`kind: P` page in `research/plan-spec.json` with order strictly below 81
(largest 80.9917, `eigenvalues-eigenvectors-and-the-characteristic-polynomial`),
and none of them declares `requires` itself, so adding them is a backward edge:
it satisfies `prereq-order` and cannot create a `requires-cycle`. Dropping the
deps is not an option — each is load-bearing in a statement, definition or
proof recorded in the item bodies and proof contracts.

This is a plan-metadata declaration gap, not an item defect: every supplier is
a published canonical root item, read at the level of the claim used, and each
use is recorded in the readiness evidence, proof contracts and coverage file.
The Step-1 drift review for this page returned `no-drift` and explicitly left
"item-level dependency detail" to authoring and its ordinary checks, which is
where the gap surfaced. The engine treats `undeclared-prereq` as an
owner/edge decision (see the `planGate` comment in
`tools/physics-autopilot/stages/mathlib.mts` and its splice-refusal routing
test). No plan, manifest `requires` field, engine state or verdict was edited
by this worker.

Precedent: run `physics-em-sr-40-2026-10-08` batch 16 raised the identical
class of escalation in its notes (10 pages) and left plan and `requires`
untouched; after owner/operator reconciliation the plan-spec `requires` for
that page lists those pages and the run manifest was re-synced to the plan,
with its items left `ready`. Same disposition is requested here.

Exact edges to declare (missing home page — plan order — flagged on — supplier
items used — consumer items in this batch):

| missing home page | order | flagged | supplier items used | consumers |
|---|---|---|---|---|
| `compactness-in-metric-spaces` | 7 | A | `thm-heine-borel-rn`, `def-metric-compactness` | `lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold` |
| `dual-spaces-bilinear-forms-and-inertia` | 16 | A | `def-bilinear-symmetric-skew-and-alternating-forms`, `def-definiteness-inertia-and-signature-data-over-the-reals` | `def-cm-constrained-configuration-and-mass-metric`, `lem-cm-mass-metric-positivity` |
| `line-integrals-and-the-gradient-theorem` | 32 | B | `thm-poincare-lemma-for-star-shaped-domains`, `def-closed-and-exact-c1-vector-fields`, `def-star-shaped-open-subset-of-rn` | `ex-cm-closed-one-form-radial-primitive` |
| `linear-independence-bases-and-dimension` | 34 | A | `thm-unique-coordinates-with-respect-to-an-ordered-basis` | `lem-cm-rigid-labeling-stabilizer` |
| `picard-lindelof-and-first-order-odes` | 43 | A/B | `def-first-order-ode-initial-value-problem-and-solution`, `def-maximal-ode-solution`, `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, `lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps` | `def-cm-equilibrium-and-lyapunov-stability`, `def-cm-orbital-and-linear-stability`, `def-cm-stroboscopic-map`, `lem-cm-stroboscopic-iterate-identity`, `ex-cm-stroboscopic-map-of-the-plane-oscillator` |
| `the-derivative-and-mean-value-theorems` | 65 | A/B | `thm-algebra-of-derivatives`, `lem-derivative-of-a-power` | `lem-cm-moving-frame-acceleration-identity`, `ex-cm-closed-one-form-radial-primitive` |
| `the-fundamental-theorems-of-calculus` | 68 | B | `thm-newton-leibniz-with-interior-derivative` | `ex-cm-closed-one-form-radial-primitive` |
| `the-inverse-function-theorem-completed` | 71 | A | `thm-ck-euclidean-maps-closed-under-algebra-and-composition`, `def-ck-euclidean-maps-and-diffeomorphisms` | `lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold` |
| `the-lebesgue-integral-and-the-convergence-theorems` | 72 | A | `def-integral-over-a-measurable-set`, `def-integrable-real-and-complex-functions-and-their-integrals` | `def-cm-material-region-and-density` |
| `vector-spaces-and-subspaces` | 79 | A | `def-matrix-space`, `def-vector-space` | `def-cm-traction-and-stress`, `def-cm-special-orthogonal-group`, `lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold`, `def-cm-affine-time-space` |
| `determinants-of-matrices-over-a-commutative-ring` | 80.1707 | A/B | `def-determinant-of-a-square-matrix`, `thm-determinant-multiplicative`, `cor-determinant-is-a-polynomial-in-the-matrix-entries` | `def-cm-special-orthogonal-group`, `lem-cm-so3-is-a-matrix-group`, `lem-cm-rigid-labeling-stabilizer`, `cex-cm-collinear-labeling-admits-a-nontrivial-rotation`, `lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold` |
| `exterior-powers-orientation-and-hodge-duality` | 80.1951 | A | `def-orientation-of-a-finite-dimensional-real-vector-space` | `def-cm-affine-time-space`, `lem-cm-adapted-charts-and-galilean-transformations` |
| `inner-product-spaces-and-orthogonality` | 80.3902 | A | `def-inner-product-space`, `def-orthogonal-vectors-sets-and-orthonormal-bases` | `lem-cm-mass-metric-positivity`, `def-cm-affine-time-space`, `lem-cm-rigid-labeling-stabilizer`, `lem-cm-adapted-coordinates-exist-and-are-unique`, `lem-cm-adapted-charts-and-galilean-transformations` |
| `lebesgue-measure-on-euclidean-space` | 80.4024 | A | `def-lebesgue-measure-and-the-lebesgue-sigma-algebra` | `def-cm-material-region-and-density` |
| `linear-maps-rank-nullity-and-quotient-spaces` | 80.4390 | A | `def-linear-map`, `def-kernel-and-image-of-a-linear-map` | `def-cm-affine-time-space`, `lem-cm-adapted-coordinates-exist-and-are-unique` |
| `matrices-and-the-matrix-of-a-linear-map` | 80.4634 | A/B | `def-matrix-product-and-identity-matrix`, `prop-transpose-laws`, `def-transpose-of-a-matrix`, `thm-matrix-multiplication-laws`, `def-invertible-matrix-and-general-linear-group`, `cor-general-linear-group-is-a-group` | `def-cm-constrained-configuration-and-mass-metric`, `def-cm-traction-and-stress`, `lem-cm-moving-frame-acceleration-identity`, `def-cm-special-orthogonal-group`, `lem-cm-so3-is-a-matrix-group`, `lem-cm-rigid-labeling-stabilizer`, `cex-cm-collinear-labeling-admits-a-nontrivial-rotation` |
| `metric-spaces` | 80.4878 | A | `def-metric-ball`, `thm-metric-continuity-characterisations`, `thm-metric-hausdorff-separation` | `def-cm-equilibrium-and-lyapunov-stability`, `lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold` |
| `monotone-sequences-and-cauchy-completeness` | 80.5366 | A | `def-interval` | `def-cm-stroboscopic-map` |
| `separation-axioms` | 80.6707 | A | `thm-t1-iff-singletons-are-closed` | `lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold` |
| `sine-cosine-and-the-definition-of-pi` | 80.7073 | B | `def-sine-and-cosine-by-power-series`, `thm-sine-and-cosine-derivatives` | `ex-cm-rotating-frame-identity`, `ex-cm-mass-metric-on-a-sphere`, `ex-cm-stroboscopic-map-of-the-plane-oscillator` |
| `smooth-manifolds-and-smooth-maps` | 80.7195 | A | `def-smooth-manifold`, `prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure` | `def-cm-constrained-configuration-and-mass-metric`, `lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold` |
| `tangent-cotangent-and-the-differential` | 80.7927 | A | `def-derivation-at-a-point-and-tangent-space`, `def-differential-of-a-smooth-map` | `def-cm-constrained-configuration-and-mass-metric` |
| `the-topology-of-euclidean-space` | 80.9268 | A/B | `def-euclidean-spheres-and-closed-balls` | `def-cm-traction-and-stress`, `ex-cm-mass-metric-on-a-sphere` |
| `eigenvalues-eigenvectors-and-the-characteristic-polynomial` | 80.9917 | A | `def-eigenvalue-eigenvector-eigenspace-and-spectrum` | `def-cm-hyperbolic-equilibrium-and-limit-cycles` |

Two equivalent placements of the edges:

1. Add all 24 pages to `cm-math-geometry.requires`; the B page's
   `requires: [cm-math-geometry]` then closes over them as well.
2. Minimal per-page: add the 21 A-reached pages to
   `cm-math-geometry.requires` and the three B-only pages
   (`line-integrals-and-the-gradient-theorem`,
   `the-fundamental-theorems-of-calculus`,
   `sine-cosine-and-the-definition-of-pi`) to
   `cm-math-geometry-examples.requires`.

Either way the edge edit belongs in the shared plan, and this batch's manifest
must then be re-synced to the plan (`splice-plan.mjs --run
physics-cm-qm-gr-79-2026-10-11 --batch 1 --update`), because the Step-3 splice
refuses any manifest/plan `requires` disagreement. If the native flow instead
expects the scaffolder to write these into the manifest `requires`, the table
above is ready to apply verbatim (with the plan edit still required first).

Run level: the same class fires on eight further authored pages of this run
(109 additional findings: `qm-math-composites` 41, `cm-math-balances` 17,
`gr-framework-and-geometry` 16, `cm-math-evidence` 15,
`cm-math-evidence-examples` 9, `gr-framework-and-geometry-examples` 6,
`cm-math-balances-examples` 5), so the reconciliation is also needed at run
scope for the other batches' owners.

## Escalations

One plan-context escalation is raised (section immediately above): the plan's
`requires` closure for this pair's two pages must gain 24 declared supplier
home pages before the run's plan gate can pass. No item is escalated: every
item carrier is complete, every prerequisite used is a published supplier that
was read, and no promised claim was dropped, so all 23 readiness records stay
`ready` with this page-level finding open for owner/operator reconciliation
(the disposition of the precedent run cited above). The one further
owner-facing judgement is the E1 interpretation recorded above (published
interfaces used by reference; local SO(3) content authored), which the Step-2
scope reviewer should accept or escalate.
