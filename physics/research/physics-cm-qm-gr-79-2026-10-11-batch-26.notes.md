# Batch 26 notes — `cm10-rigid-body-configuration-and-inertia` / `…-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-26, covers 26.
Step 1 complete initial authoring only; a readiness record is not independent
mathematical approval (Step 2/3 review follows). Inputs read before
construction: `CLAUDE.md`, `SCHEMA.md`, `../PHYSICS-CONTENT-MODEL.md`,
`WORKFLOW.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`, the
design record `research/plan-non-relativistic-classical-mechanics-track.md`
L706 ("Rigid-body configuration and inertia"), `research/plan-spec.json`, the
first-principles inventory
`research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/proposed-inventory.json`,
the expansion proofs (`expansion-proofs.md` E1/E19/E25) and
`mathematical-prerequisites.md` M8, the scaffold supplier map
`research/scaffold-audit-2026-10-11/classical-mechanics/supplier-map.json`,
and the batch-dependency-levels file
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 26 is dependency level 5, requires batches 12, 16 and 19; batches
1, 2, 9, 12, 16, 17, 18 and 19 were complete with current carriers before
construction).

## Scope built

- A page `cm10-rigid-body-configuration-and-inertia` (order 131, category
  `non-relativistic-classical-mechanics`, `library: physics`), 8 items:
  1 postulate (`post-cm10-rigid-material`), 3 physics-domain definitions
  (`def-cm10-rigid-body-configuration`, `def-cm10-angular-velocity`,
  `def-cm10-inertia-tensor`), 3 physics theorems
  (`pthm-cm10-kinetic-splitting`, `pthm-cm10-principal-axes`,
  `pthm-cm10-frame-covariance`) and 1 remark (`rem-cm10-orientation-charts`).
- B page `cm10-rigid-body-configuration-and-inertia-examples` (order 132),
  4 leaf items: 3 examples (`ex-cm10-equilateral-triangle-rotational-inertia`,
  `ex-cm10-euler-angle-pole-and-orientation`,
  `ex-cm10-parallel-axis-shift-check`) and 1 counterexample
  (`cex-cm10-degenerate-line-mass-singular-inertia`). Nothing outside the pair
  depends on these four.
- Page carriers
  `library/non-relativistic-classical-mechanics/cm10-rigid-body-configuration-and-inertia.md`
  and `…-examples.md` are nonempty and carry the item lists, `requires` lists,
  order, kind, category, library and companion metadata. The category
  `_category.md` (created by batch 17) is unchanged. No `_pathway.md` is
  created here (closeout artifact).
- Design contract delivered (design `contract_text` to delivered items):
  `cm10-rigid-material(post)` → `post-cm10-rigid-material`;
  `cm10-so3-configuration(def)` → `def-cm10-rigid-body-configuration`;
  `cm10-angular-velocity(def)` → `def-cm10-angular-velocity`;
  `cm10-inertia(def)` → `def-cm10-inertia-tensor`;
  `cm10-kinetic-splitting(pthm)` → `pthm-cm10-kinetic-splitting`;
  `cm10-principal-axes(pthm)` → `pthm-cm10-principal-axes`;
  `cm10-orientation-charts(rem)` → `rem-cm10-orientation-charts`.
  Recorded additions relative to the design contract:
  `pthm-cm10-frame-covariance` (the design names E1/E25 and the orientation
  material, and post-cm01-worldlines fixes frame-change semantics; the
  transformation laws of the model's angular velocity, inertia data and
  inertial quantities are proved as a separate theorem rather than left as
  prose), `ex-cm10-parallel-axis-shift-check` (E19's content is the
  parallel-axis theorem of batch 12; the example instantiates it on the
  symmetric model of the B page) and the B-page checks that make the design's
  `B_and_sources` line explicit. The design's provisional ids (`cm10-*`) are
  placeholders; the delivered ids use the run's kind-prefix conventions, as
  in batches 17-19.

## Dependency graph, levels and construction order

Authored in prerequisite order; each item built once. Levels computed
mechanically by `tools/physics-support/item-dependency-levels.mjs` over the
run manifests (`dependency_level` in the batch manifest). A focused replay of
the tool over the current run reports declared = computed for all 12 items
and 0 findings for them; the run-wide invocation still lists other batches'
empty scaffold inventories (open run-level state, below). In-run suppliers by
batch, with level:

| item | level | in-run suppliers |
|---|---|---|
| `post-cm10-rigid-material` | 6 | 17: spacetime, frames, worldlines, units; 1: SO(3), stabilizer; 9: mass distribution, moments finiteness, rigid placement |
| `def-cm10-rigid-body-configuration` | 7 | `post-cm10-rigid-material`; 17: frames, units; 1: SO(3), group, compact submanifold, stabilizer, adapted charts; 9: mass distribution, rigid placement |
| `def-cm10-angular-velocity` | 8 | `post-cm10-rigid-material`, `def-cm10-rigid-body-configuration`; 17: units; 1: SO(3); 9: rigid placement, skew correspondence, matrix derivative rules |
| `def-cm10-inertia-tensor` | 8 | `post-cm10-rigid-material`, `def-cm10-rigid-body-configuration`; 17: units; 9: mass distribution, moments finiteness, inertia properties; 12: shifted tensor |
| `pthm-cm10-kinetic-splitting` | 9 | `post-cm10-rigid-material`, three definitions; 9: rigid kinetic-energy/angular-momentum theorem, mass distribution, moments finiteness; 17: units |
| `pthm-cm10-principal-axes` | 9 | `post-cm10-rigid-material`, `def-cm10-rigid-body-configuration`, `def-cm10-inertia-tensor`; 9: mass distribution, moments finiteness, inertia properties, principal-axes corollary; 12: shifted tensor, finiteness |
| `pthm-cm10-frame-covariance` | 10 | the three definitions and `pthm-cm10-kinetic-splitting`; 17: frames; 1 and 9: SO(3) group, adapted charts, skew correspondence, matrix derivative rules |
| `rem-cm10-orientation-charts` | 9 | `post-cm10-rigid-material`, two definitions; 1: SO(3), group, compact submanifold; 9: Euler-angle definition, coordinate rotations, Euler-angle rates; 16: quaternion cover, rotation-path angular velocity, quaternion lift |
| `ex-cm10-equilateral-triangle-rotational-inertia` | 10 | A: postulate, definitions, principal-axes theorem; 12: Dirac measures, nonnegative weighted sums and integral rules |
| `cex-cm10-degenerate-line-mass-singular-inertia` | 10 | A: postulate, definitions, kinetic splitting, principal axes; 12: Dirac-measure and integral rules; 9: inertia properties, coordinate rotations |
| `ex-cm10-euler-angle-pole-and-orientation` | 9 | A: configuration and angular-velocity definitions; 9: Euler-angle definition, coordinate rotations; matrix calculus imports |
| `ex-cm10-parallel-axis-shift-check` | 11 | A: postulate, definitions, principal axes, companion example; 12: parallel-axis theorem, shifted tensor |

Construction order: postulate → configuration → angular velocity → inertia →
kinetic splitting → principal axes → frame covariance → remark → triangle
example → line-mass counterexample → Euler-pole example → parallel-axis
example. Suppliers precede consumers at every edge; no cycle was created (the
cross-references from the definitions to the page's theorems are link-free
orientation mentions, and their wikilinks live only in `## Remarks`).

## Design versus plan-spec conflicts (recorded)

1. **Design row L706 vs plan-spec requires.** The design lists the local
   mathematical proof sections `E1`, `E19`, `E25`, `M8` and the earlier
   physical page `cm03`, while `research/plan-spec.json` requires only
   `cm-math-rotation-double-cover` (batch 16), `cm-math-verification`
   (batch 12) and `cm03` (batch 19). In the current run those local sections
   are authored on completed pages: E1 and the SO(3) manifold/stabilizer
   material on `cm-math-geometry` (batch 1), M8 on `cm-math-rigid` (batch 9),
   E19 on `cm-math-verification` (batch 12), E25 on
   `cm-math-rotation-double-cover` (batch 16). The delivered items consume
   batches 1 and 9 directly (as batches 17-19 do for their own suppliers);
   both lie inside the transitive closure of the plan's requires
   (`cm-math-verification` requires `cm-math-rigid`, which requires
   `cm-math-geometry`; `cm-math-rotation-double-cover` requires
   `cm-math-geometry` by way of `cm-math-dynamics`). `validate-plan --run`
   reports no undeclared prerequisite for the two cm10 pages. No plan file
   was edited.
2. **Design `B_and_sources` vs delivered B inventory.** The design names
   "symmetric bodies, degenerate line mass, Euler-angle pole vs physical
   orientation"; all three are delivered, and the parallel-axis check is
   recorded as an addition (E19's mathematical content is the parallel-axis
   theorem of batch 12, which would otherwise have no consumer on this pair).
3. **Scope transfer note (E25).** The plan's 2026-10-04 scope transfer moved
   E25 from `CM-Math-geometry` to `cm-math-rotation-double-cover`; the
   delivered `rem-cm10-orientation-charts` consumes the batch-16 quaternion
   items (`def-cm-quaternion-rotation-map-and-cover`,
   `thm-cm-quaternion-lift-exists-and-is-unique`,
   `lem-cm-body-angular-velocity-of-a-rotation-path`) under the countable
   choice hypothesis recorded there, and the Euler-pole example consumes the
   batch-9 Euler-angle definition. No stale E25 home was consumed.

## Supplier defect found during construction (owner escalation)

**Defective actual prerequisites; only their correct clauses are consumed.**

- `lem-cm-inertia-matrix-properties` (batch 9, page `cm-math-rigid`, status
  **draft**), clause 3 and step 4.1: the statement that the form is positive
  definite if and only if for every nonzero omega the set of rho with
  omega x rho = 0 is nu-null is false. The correct condition is that for every
  nonzero omega that set does not carry the full mass, i.e.
  nu(R^3 minus R omega) > 0. Explicit counterexample to the stated criterion:
  nu the equal-weight sum of the three vertices of an equilateral triangle
  about the origin (circumradius a, total mass 3m_0); then
  I = diag(3m_0a^2/2, 3m_0a^2/2, 3m_0a^2) is positive definite, while for
  omega = e_1 the set R e_1 contains the vertex (a,0,0) and has nu-measure
  m_0, so it is not nu-null. The criterion as written would declare the form
  not positive definite; direct computation and the spectral theorem show it
  is positive definite.
- `cor-cm-principal-axes-of-the-inertia-matrix` (batch 9, status **draft**),
  clause 3 and steps 4.1 and 5.1: the statement that I_j vanishes exactly
  when the set of rho with e_j x rho = 0 is nu-null is false; the correct
  criterion is I_j = 0 exactly when nu is supported on the line R e_j
  (equivalently nu(R^3 minus R e_j) = 0). Explicit counterexample:
  nu = delta_0, a point mass at the origin (a centred mass distribution of
  the branch); then I = 0, so every I_j = 0, while the set of rho with
  e_j x rho = 0 is R e_j, which has nu-measure 1 and is not nu-null. The
  step-5.1 argument of the corollary (nondegenerate implies all I_j > 0)
  reaches a true conclusion through the same inverted criterion, so its proof
  is inadequate even though the implication is true.
- **Impact.** Any consumer that states or uses the quoted criteria (including
  the planned CM11 family and any later use of the positivity clause)
  inherits the defect. Clause 1 (existence of the orthonormal eigenbasis),
  clause 2 (the quadratic identity and
  omega^T I omega = integral ||omega x rho||^2 dnu), clause 4 (positive
  definiteness implies invertibility) of the corollary, and clauses 1-2 of
  the lemma, are correct and are the parts used here.
- **Handling in this batch.** `pthm-cm10-principal-axes` uses only the
  correct clauses 1-2 of both suppliers and proves the correct vanishing and
  nondegeneracy criteria locally (steps 3.2, 4.1, 4.2 of the item) from the
  nonnegative-integral zero criterion; `def-cm10-inertia-tensor` states no
  positivity criterion and points to the theorem; the B-page counterexample
  illustrates the correct criterion. The defective clauses are not consumed
  anywhere in this pair.
- **Repair strategy for the canonical ledger.** Change the criterion in
  `lem-cm-inertia-matrix-properties` clause 3 and step 4.1 to the
  not-supported condition, and in
  `cor-cm-principal-axes-of-the-inertia-matrix` clause 3 and steps 4.1/5.1 to
  "supported on R e_j" (equivalently nu(R^3 minus R e_j) = 0), then trace
  direct and indirect consumers (the CM11 suppliers and any future consumers
  of the corollary's positivity clause). Both items are draft, not published,
  so no published-repair receipt is required; the repair belongs to the
  owning batch 9 and the owner's reconciliation. This note is the escalation
  record; batch 26 did not edit the batch-9 carriers (outside its write
  scope).

## Sources, harvest and fetch verification

- Coverage `research/physics-cm-qm-gr-79-2026-10-11-batch-26.coverage.json`
  records 9 source entries across the two pages with 40 dispositions
  (`included` with item ids, or `out-of-scope` with a reason): Tong,
  Classical Dynamics sections 3.1-3.2 and 3.5 (A and B); Likharev, Essential
  Graduate Physics CM Chapter 4 sections 4.1-4.3 and 4.2-4.5 (A and B); SICM
  Chapter 2 sections 2.1-2.7, 2.8.1 and 2.12 (A and B); Stewart, Advanced
  Classical Mechanics Chapter 2 sections 2.1-2.3 (A and B). Four independent
  treatments per page, including the Tong lecture notes, the Likharev
  monograph, the SICM textbook and the Stewart course notes; every page has a
  book/monograph or full lecture-note treatment.
- `source-fetch-check.mjs --stamp`: 9/9 sources newly fetch-verified (Tong
  PDF 1093743 bytes, 139 pp., sha256_16 b65ba2b0399df6b0; Likharev PDF
  3256232 bytes, 252 pp., sha256_16 714ecc2e0f7c0e86; SICM archive 4201563
  bytes, sha256_16 68bf53146fef6cd9; Stewart PDF 6408918 bytes, 199 pp.,
  sha256_16 1a73f42236201703). The hashes agree with the values recorded by
  the batch-9 harvest for the same documents. Check mode: 9/9
  fetch-verified, 0 documented drops, 0 source-resolution entries.
- The math suppliers consumed by the items are published canonical imports
  (read-only snapshots) or completed in-run draft items of batches 1, 2, 9,
  12, 16, 17, 18 and 19; their exact statements and used clauses are recorded
  in the proof contracts and in the cross-batch dependency input.

## Local closure, proof routes and recorded decisions

- **No new local prerequisite pair was needed.** All mathematical content is
  supplied by completed in-run pages and published imports; the physics layer
  is the postulate, the three definitions, the three theorems and the remark
  of this batch. The two cross-batch concerns found (supplier defect above;
  plan-spec requires annotation below) are recorded, not repaired here.
- `pthm-cm10-kinetic-splitting` applies
  `thm-cm-rigid-kinetic-energy-and-angular-momentum` to the model's centred
  measure, adds the total-momentum identity from the centring of nu and
  linearity of the integral, and carries the countable-choice assumption
  AC_omega used only for the finiteness of the integrals.
- `pthm-cm10-principal-axes` takes the eigenbasis and the quadratic identity
  from the correct clauses of the batch-9 suppliers and proves the correct
  vanishing and nondegeneracy criteria locally, the axis-moment identities by
  the shifted-tensor algebra and the extremal clause by expansion in the
  orthonormal basis. The stationary-point computation is confined to the
  Remarks (with its two derivative suppliers cited).
- `pthm-cm10-frame-covariance` proves the transformation laws by substituting
  the frame law of `post-cm01-frames` and
  `lem-cm-adapted-charts-and-galilean-transformations` into the configuration
  and differentiating with the chain rule; it is the only in-pair consumer of
  the splitting theorem.
- `rem-cm10-orientation-charts` records the chart/quaternion bookkeeping and
  consumes the batch-16 quaternion lift theorem under its stated countable
  choice hypothesis; it asserts no path-lifting, spin or measurement claim.
- The B-page items are complete verifications: the triangle example computes
  the finite-atomic integrals and checks the principal data and the
  threefold-symmetry invariance; the line-mass counterexample computes the
  singular inertia matrix and the invisible rotation; the Euler-pole example
  computes the pole non-injectivity, the rank deficit and the rate degeneracy
  against the regular path R_y; the parallel-axis example compares the
  shifted-point supplier with the direct finite sum.
- Every proof item is conditional on the model postulate and its stated
  hypotheses; no conservation law, force law or measured value is asserted,
  and the degenerate-shape caveats are carried into the theorem statements
  and the counterexample.

## Cross-batch dependencies

- `research/physics-cm-qm-gr-79-2026-10-11-batch-26.cross-batch-dependencies.json`
  carries 86 rows (83 item edges + 3 page edges), one per declared
  `(kind, consumer, supplier)` edge emitted by
  `frontier-dependency-ledger.mjs` for this batch, including the edges to
  batches 1, 2, 9, 12, 16, 17, 18 and 19, plus the three page edges
  (`cm10-…` → `cm-math-rotation-double-cover`, `cm-math-verification`,
  `cm03-momentum-work-and-energy-balances`). Every row records the supplier
  title/kind read and the consumer's fact/step use, status `verified`.
  `frontier-dependency-ledger.mjs refresh --run …` reports 0 orphaned rows
  for batch 26 and 0 batch-26 consumer edges without review.

## Checks actually run (on the final carriers)

- `precheck.mts` on all 12 items: **8 checked, 0 failing** (the postulate,
  three definitions and the remark have no phase body); the canonical
  citation-depth numbering was adopted after the first pass and re-run clean.
- `proof-layout.mjs` on the 12 items: **49 steps, 0 defects**.
- `rendercheck.mjs` on the 12 items and 2 page carriers: **14 files, clean**
  (KaTeX, YAML, wikilink/math nesting).
- `proof-contract.mjs --strict`: **12/12 items, 0 errors, 0 warnings**
  (110 citation contracts, 49 derivation entries, 8 boundary dispositions per
  proof-bearing item; postulate `physics_review` complete).
- `proof-contract-coverage.mjs` (overlay root, this batch's manifest only):
  **12 items, 7/7 supplied arguments covered.**
- `coverage-checklist.mjs`: **2 pages, 40 harvested results, 0 errors,
  0 warnings**.
- `source-fetch-check.mjs` check mode: **9/9 sources fetch-verified,
  0 drops**.
- `content-policy.mjs` (batch manifest): **12 scoped items, 0 errors,
  0 warnings**; `manifest-deps.mjs`: **12 items, 0 errors**;
  `manifest-integrity.mjs --run`: **158 pages owed, 158 in the manifests,
  no scope drift**.
- `physics-check.mjs` against an overlay root whose only current manifest is
  this batch's: the import verifier aborts on a pre-existing run-level
  mathematics-import drift (open finding 1); a direct scoped
  `validatePhysicsContent` replay on the 12 items and 2 pages reports
  **0 errors, 12 items checked**.
- `item-dependency-levels.mjs check --run …`: **0 findings for the 12 cm10
  items** (focused replay: declared = computed for every item); remaining run
  errors are other batches' empty scaffold inventories.
- `validate-plan.mjs research/plan-spec.json --run …`: no cm10 finding; the
  reported `undeclared-prereq` errors and reference warnings belong to other
  batches' pages (`cm04`, `cm18`, `qm-state-geometry`, GR pages).
- `depcheck.mjs` (whole repository): **0 findings attributable to this batch**
  (the three initial cm10 `cited-not-in-deps` warnings were repaired by
  link-free rewording in the definition bodies, with the wikilinks retained
  in `## Remarks`). `fwdcheck.mjs`: the 12 items are listed `inherited` by
  published suppliers' load-bearing forward edges, not produced here;
  0 cm10 errors or warnings. `extcheck.mjs`: 0 cm10 findings.
- `pathcheck.mjs`: no cm10 finding (the errors and warnings belong to
  unrelated mathematics categories).

## Notation repair applied before recording (2026-10-11)

While re-verifying the final carriers, a notation overload was found in the
frame-change passages of `post-cm10-rigid-material` clause (v),
`def-cm10-rigid-body-configuration` clause (d) and the statement and proof of
`pthm-cm10-frame-covariance`: primes denoted both the second-frame
description maps and the time derivatives of the first-frame paths (step 2.1
of the theorem, read with the clause-1 convention, was literally `d/dt'
R'(t') = Q R'(t'-b)`), and the letters $R$ and $v$ denoted both the
frame-change rotation and boost and the orientation path and material
velocity field. The repair changes no claim, dependency, clause or step
count: second-frame description quantities are now tilded
($\tilde x,\tilde c,\tilde R,\tilde\omega,\tilde\omega_{\mathrm s},\tilde I,
\tilde v,\tilde P,\tilde K,\tilde L_c$), the frame rotation and boost are
written $Q$ and $u$ with an explicit note that they are the parameters
written $R$ and $v$ in [[post-cm01-frames]], primes denote time derivatives
throughout, and the alternative configurations in clause (iii) of the
postulate and clause (c) of the definition are written $(\bar c,\bar R)$.
The three item statements in the batch manifest were re-synchronized with the
repaired statement sections, and the proof-contract derivations for the
theorem (all eight steps) and its zero-boundary evidence were updated to the
new text. Checks re-run after the repair: `precheck` 8 checked, 0 failing;
`proof-layout` 49 steps, 0 defects; `rendercheck` 14 files clean;
`proof-contract --strict` 12/12, 0 errors, 0 warnings; `content-policy` 12
items, 0/0; `manifest-deps` 0 errors; `coverage-checklist` and
`source-fetch-check` unchanged and clean; the focused
`item-dependency-levels` replay still gives declared = computed with 0 cm10
findings; `depcheck`, `fwdcheck`, `extcheck` and `citecheck` report no
cm10-attributable finding.

## Readiness records

All 12 items are recorded `ready` — never `--owner`, no escalation
overwritten — **after** the final item and page carriers, the notation
repair above and the manifest re-synchronization, with the complete carrier,
met prerequisites examined at statement/proof level, adequate page placement
and the current proof contract in place. Each record carries the item's exact
frontmatter `deps` array and the engine's item-hash binding computed on those
final inputs; `step1-decisions check --run` reports 0 remaining cm10 rows
(the run-level remainder belongs to other batches). See the
`research/physics-cm-qm-gr-79-2026-10-11-step1-cm10-…` records (12 files,
written 2026-10-11).

## Open findings for the owner (none attributable to batch 26 content)

1. **Mathematics-import drift (run-level blocker for `physics-check`).**
   `verifyMathematicsImports` aborts on `items/def-finite-sum.md`: the local
   snapshot hash is
   3fbdfd3af47db591becd127f1568c108038aac685915fedf8b20fee14148c943 but the
   current canonical root file hashes
   4cf40c8200c759cbf0a02f539ea6c9604ec4f2f5272ef01cb650d1b8def69bc7.
   Reconciliation and re-import are owner/operator actions on the read-only
   supplier tree; no batch-26 item consumes that import, and no edit was made
   to resolve it.
2. **Defective draft suppliers in batch 9** (full record above):
   `lem-cm-inertia-matrix-properties` clause 3/step 4.1 and
   `cor-cm-principal-axes-of-the-inertia-matrix` clause 3/steps 4.1/5.1 state
   inverted criteria. The correct criteria are proved locally in
   `pthm-cm10-principal-axes`, and no batch-26 item consumes the defective
   clauses, but the suppliers must be repaired before their later consumers
   (CM11 and any positivity-clause users) rely on them.
3. **Run-level empty scaffold inventories** of batches 10, 20-25 and 27+
   make the run-wide invocations of `physics-check`,
   `item-dependency-levels` and `proof-contract-coverage` abort before
   scoping; the batch-scoped overlay runs are clean. Recorded for the
   canonical ledger; not repaired here.
4. **Plan-spec requires annotation.** `research/plan-spec.json` for the A page
   lists three requires while the item closure also consumes completed
   batches 1, 2, 9, 17 and 18 through the declared page requires (conflict 1
   above). No plan file was edited; the delivered page carrier and manifest
   state the actual closure.
5. **Design B_and_sources completeness.** All three named B topics are
   delivered; the added parallel-axis check is the only consumer of E19's
   mathematical content on this pair. No promised claim was omitted or
   narrowed.

This handoff is Step-1 initial authoring evidence only; owner/operator
reconciliation and the full engine gate follow, and Steps 2-3 provide the
independent mathematical review.
