# Batch 6 notes — `cm-math-canonical` / `cm-math-canonical-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, batch 6, covers 6: the pair
`cm-math-canonical` (A, order 91) and `cm-math-canonical-examples` (B, order 92),
category `non-relativistic-classical-mechanics-mathematics`, library
`mathematics`. Every item here is mathematics (`domain: mathematics`, only
mathematical dependencies); nothing on either page asserts a physical
interpretation, unit convention or empirical fact. Content authored
2026-10-11; this file records inventory, conflicts, repairs and check results,
not approvals.

## Inventory and levels

- A page `cm-math-canonical`, 18 items; B page `cm-math-canonical-examples`, 4 items.
- Engine batch graph (`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`):
  batch 6 has `dependency_level: 3`, `requires: [3, 4]` (batch 3 = `cm-math-dynamics`,
  batch 4 = `cm-math-variations`).
- A-page items and `dependency_level` (one plus the maximum level of the in-run `deps`;
  published and other out-of-run suppliers do not raise a level):
  `def-cm-phase-domain-and-standard-symplectic-two-form` (0),
  `lem-cm-standard-symplectic-form-is-closed-and-nondegenerate` (1),
  `prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart` (2),
  `prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity` (3),
  `cor-cm-hamiltonian-flow-preserves-phase-volume` (4),
  `prop-cm-canonical-map-tests-and-hamiltonian-transport` (3),
  `def-cm-generating-function-of-the-first-and-second-kind` (4),
  `prop-cm-generating-functions-yield-canonical-maps` (5),
  `prop-cm-canonical-map-locally-has-a-generating-function` (6),
  `prop-cm-time-dependent-generating-function` (6),
  `prop-cm-cylinder-shift-has-no-global-generating-function` (6),
  `def-cm-hamilton-jacobi-equation-and-complete-integral` (3),
  `thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral` (4),
  `rem-cm-scope-of-canonical-methods` (7),
  `lem-cm-closed-two-form-radial-primitive` (0),
  `thm-cm-liouville-arnold-action-angle-repaired` (1),
  `cor-cm-action-angle-radian-scaling` (4),
  `rem-cm-scope-of-complete-integrability-and-action-angle` (5).
- B-page items and levels: `ex-cm-free-particle-hamilton-jacobi-complete-integral` (5),
  `ex-cm-linear-shear-generating-function` (6), `ex-cm-cylinder-shift-obstruction-checks` (7),
  `ex-cm-flow-derivative-of-the-isotropic-oscillator` (4).
- Levels were recomputed after every dependency change during authoring and after the final
  citation repairs; all 22 labels agree with the engine's computation
  (`item-dependency-levels.mjs`, no finding names either page).
- Cross-batch in-run suppliers reviewed in
  `research/physics-cm-qm-gr-79-2026-10-11-batch-6.cross-batch-dependencies.json` (all
  `verified`): page edge `cm-math-canonical -> cm-math-variations` (batch 4); item edges
  `prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity ->
  {thm-cm-smooth-dependence-and-the-variational-equation, def-cm-local-flow-of-an-autonomous-system}`
  and
  `cor-cm-hamiltonian-flow-preserves-phase-volume ->
  {cor-cm-flow-domain-open-and-flow-is-c1, def-cm-local-flow-of-an-autonomous-system,
  lem-cm-local-flow-composition-law}`, all to batch 3. The unified ledger
  `research/physics-cm-qm-gr-79-2026-10-11-cross-batch-dependencies.json` carries the derived
  batch-6 rows with no unreviewed edge and no orphaned review from this batch's input.

## Files written by this batch

- `items/` carriers for the 22 ids above; page carriers
  `library/non-relativistic-classical-mechanics-mathematics/cm-math-canonical.md` and
  `...-examples.md`.
- `research/physics-cm-qm-gr-79-2026-10-11-batch-6.pages.json` (manifest: kind, domain, title,
  reference, design_state, `dependency_level`, `deps`, `dependency_roles`, provenance, sources for
  every item; page `requires` extended as recorded below).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-6.coverage.json` (8 full-text sources,
  35 harvested contents: 24 `included`, 7 `inline`, 3 `out-of-scope`, 1 `deferred`; every entry has
  a disposition and a destination item, support text, or written reason; all 8 fetch-verified).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-6.proof-contracts.json` (strict contract,
  17/17 proof-bearing items, boundary worksheets, citation excerpts from the current suppliers).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-6.cross-batch-dependencies.json` (1 page edge +
  5 item edges, all `verified`).
- `research/physics-cm-qm-gr-79-2026-10-11-step1-<id>.json` readiness records for all 22 items,
  recorded after the final carrier and manifest edits; `step1-decisions.mjs check` reports no
  outstanding row for any batch-6 item or page.

## Design versus plan

1. **Reserved sections delivered.** The design (`research/plan-non-relativistic-classical-mechanics-track.md`,
   section "Cm Math Canonical", L140; `research/first-principles-2026-10-03/.../proposed-inventory.json`
   page `CM-Math-Canonical`, budgets A 80 / B 30, `section_count_not_item_count: true`) reserves local
   proved sections `E7` (symplectic calculus, canonical maps and Hamilton-Jacobi), `E21` (local repair of
   the action-angle two-form primitive) and `E18` (exact integrability supplier use). All three are
   delivered: `E7` by the definition, lemma, Hamiltonian-field, flow-derivative, volume, canonical-map,
   generating-function, cylinder and Hamilton-Jacobi items plus the four B examples; `E21` by
   `lem-cm-closed-two-form-radial-primitive`; `E18` by `thm-cm-liouville-arnold-action-angle-repaired`
   with the published commuting-flow, lattice, torus, Cartan, submersion and inverse-function suppliers
   the design's audit expects. The design's warnings (locality of generating functions, no global
   Hamilton-Jacobi claim across caustics, flow statements only on the actual flow domain) are carried by
   `rem-cm-scope-of-canonical-methods` and `rem-cm-scope-of-complete-integrability-and-action-angle`.
2. **Plan `requires` versus manifest closure (plan-registry gap class).** The plan-spec entry for
   `cm-math-canonical` lists five prerequisites (`cm-math-variations`,
   `hamiltonian-mechanics-and-completely-integrable-systems`,
   `product-measures-and-the-fubini-tonelli-theorems`,
   `the-exterior-derivative-and-cartan-calculus`, `vector-fields-flows-and-lie-derivatives`). The final
   item graphs depend on items homed on eight further declared plan-spec pages, so the manifest and page
   carrier extend the list: `tensor-fields-exterior-algebra-and-differential-forms`,
   `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory`, `sigma-algebras-and-borel-sets`,
   `line-integrals-and-the-gradient-theorem`, `the-de-rham-complex-homotopy-and-mayer-vietoris`,
   `subspaces-products-and-quotients`, `orthonormal-bases-parseval-and-fourier-series` and
   `partitions-of-unity-and-paracompactness` (host of `lem-algebra-of-continuous-real-maps-on-a-space`).
   Every added target is declared in `plan-spec.json` with order below 91, so the plan declares the pages
   and only the batch-level `requires` lists are extended; no shared plan or engine state was edited.
   `validate-plan` reports no `undeclared-prereq` or `requires-resolve` finding for either batch-6 page.
   It keeps the pre-existing `[redundant-prereq]` warning that the plan's own list for
   `cm-math-canonical` reaches `hamiltonian-mechanics-and-completely-integrable-systems` through
   `cm-math-variations`; the batch mirrors the plan list, and any plan-side de-duplication is
   owner-held.
3. **E7 bracket identities: design proof route versus delivered route (recorded conflict).** The E7
   design prose sketches a local expansion proof of bilinearity, the derivation rule and the Jacobi
   identity from the coordinate bracket. This batch instead delivers those claims through the published
   canonical root items (`prop-coordinate-formula-for-the-poisson-bracket`,
   `prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry`,
   `thm-poisson-bracket-satisfies-the-jacobi-identity`), referenced from
   `rem-cm-scope-of-canonical-methods`, following the physics policy that external mathematical premises
   ordinarily use currently published canonical root-library items with published recursive support.
   The claim set is unchanged (no claim is dropped); the proof route differs from the design prose and is
   recorded here for the reviewing steps. In the same division of labour, the tautological one-form, the
   canonical cotangent two-form, Hamiltonian vector fields, the cotangent Hamilton equations, the flow
   symplectic-preservation theorem and the Liouville volume theorem are used by reference, not
   re-authored.
4. **Design supplier list versus actual consumption.** The design names a small published-supplier list;
   the items additionally consume ordinary published canonical mathematics (determinant calculus,
   intermediate value theorem, metric-continuity characterisations, Borel preimages, Heine-Borel,
   matrix-product identities, elementary analysis), all declared in each item's `deps` and manifest
   `dependency_roles`. No reserved supplier is bypassed and no published/imported item is edited. The
   design's `thm-liouville-arnold-action-angle-theorem` is deliberately **not** consumed as a premise;
   the next section records why.
5. **Convention reconciliation, not conflict.** The design's E7 prose gives the circle-shift period
   integral as `2 pi a`; the page uses the period-one angle convention of
   `def-action-and-angle-coordinates` (so the loop integral in the normalised `theta in R/Z`
   coordinate is `a`), and `cor-cm-action-angle-radian-scaling` converts period-one to radian
   coordinates with `omega` preserved. The E18 prose's own note ("period-one conventions differ from
   E8's radian angle") is the design's instruction for exactly this reconciliation.

## Published defect recorded for the canonical ledger

- **Item:** `thm-liouville-arnold-action-angle-theorem` (published; audited 2026-09-14; judge
  `gpt-5.6-terra` pass; root-library item, imported read-only).
- **Evidence:** its step 5.2 states "Its pullback `tau = sigma^* omega` is closed. On the ball [F4]
  gives `tau = d alpha`." Fact [F4] of that item cites `thm-cartans-magic-formula` and
  `thm-poincare-lemma-for-star-shaped-domains`. The latter item's statement is the **one-form/vector
  field** lemma ("every closed `C^1` field `F: U -> R^n` is exact"), so a closed **two-form** is
  supplied by a one-form primitive; the actual two-form lemma
  `thm-poincare-lemma-for-differential-forms-on-star-shaped-domains` exists but is not the cited
  supplier and is not in that item's `deps`. The direct supplier use is therefore inadequate as
  cited.
- **Planned supplier / repair strategy:** `lem-cm-closed-two-form-radial-primitive` (local, complete,
  with coefficient verification and the published two-form Poincare lemma as an alternative route)
  repairs the missing implication at `k = 2`; `thm-cm-liouville-arnold-action-angle-repaired` re-proves
  the same theorem locally with that primitive, consuming only sound published suppliers and not
  consuming the defective published item. The published item and every imported item remain untouched.
- **Consumers:** the local repaired theorem is consumed by `cor-cm-action-angle-radian-scaling` and the
  two scope remarks; any other consumer of the published theorem should re-point step 5.2 to a
  two-form Poincare lemma or to the local repaired item. Repair of the published original is outside
  this workspace's write scope and is left to the mathematics-workspace owner.

## Mathematical review and repairs made during authoring

All 22 carriers were read in full at their final bytes and every numbered argument re-derived by hand
(the LA construction including the period-lattice argument and the Lagrangian-section step; the
Hamiltonian flow variational computation; the generating-function pullback computations in both
kinds; the HJ characteristics, constants, converse and canonical labels; the cylinder lift argument;
all four B computations). Final-pass repairs, each made because the previous citation or wording did
not actually carry the claim:

1. `prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity`: the determinant step had cited
   `cor-square-matrix-invertible-iff-determinant-is-a-unit` for the sign-rigidity argument, which that
   corollary (pure commutative algebra) does not provide. [F4] now derives continuity of `det Y` from
   the polynomial expansion and the algebra of continuous functions, and a new [F5] proves the
   `(det Y)^2 = 1, det Y(0) = 1 => det Y = 1` rigidity with the intermediate value theorem; the
   determinant of `Y^T J Y` is expanded with multiplicativity and transpose. The Hessian notation is
   now tied to `def-hessian-and-euclidean-critical-point`.
2. `prop-cm-canonical-map-tests-and-hamiltonian-transport`: the implication
   `M^T J M = J => (det M)^2 = 1` now cites determinant multiplicativity, determinant transpose and
   `det J != 0`; the equivalence with `M J M^T = J` is derived in [F3] by the inversion argument.
3. `cor-cm-action-angle-radian-scaling`: the Hamilton-equation clause now cites
   `prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart` applied in the radian chart
   (the chain rule alone cannot supply the equations), with the chain-rule expression retained only as
   a consistency check.
4. `prop-cm-canonical-map-locally-has-a-generating-function`: the statement previously mentioned an
   unused neighbourhood `W'`; it now asserts exactly the ball `W''` with `F(W) = W''` that the inverse
   function theorem and the proof construct, and the determinant hypothesis cites
   `def-determinant-of-a-square-matrix`.
5. `prop-cm-time-dependent-generating-function`: the statement's second clause now records exactly the
   proved one-form identity
   `p dq - H dt = P dQ - K dt + dS` with `K = H + S_t` (the unproved "makes C_t evolve Hamilton's
   equations" gloss was removed), matching the E7 design text including its boundary-data caveat.
6. `prop-cm-cylinder-shift-has-no-global-generating-function`: the global non-existence argument now
   spells out that the lifted relation `Q = theta` reads `S_P - theta in Z`, that this integer-valued
   continuous difference is constant by the intermediate value theorem, and only then derives
   `c' = -a` and the periodicity contradiction; the FTC fact is stated in its general interval form.
7. `ex-cm-cylinder-shift-obstruction-checks`: the specialisation's global-failure sentence had claimed
   a global generating function "would produce `W` with `dW = d theta_C`", a reduction that is not
   justified; it now follows the proposition's actual lift/periodicity argument.
8. `thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral`: the step
   `det S_{alpha q} = det S_{q alpha}` now cites mixed-partial symmetry and determinant transpose.
9. `lem-cm-closed-two-form-radial-primitive`: differentiation under the integral sign in the
   coefficient verification is now applied to the one-variable slices `s -> x + s e_k`, matching the
   one-parameter Leibniz rule of the cited supplier.

After these repairs the batch was re-synced (manifest `deps`/`dependency_roles` copied from the item
frontmatter), levels recomputed, proof contracts regenerated and every check below re-run on the
final bytes.

## Sources and limitations

- Eight sources, all fetched with full text and stamped by `source-fetch-check.mjs`
  (8/8 fetch-verified, 8/8 resolved, 0 drops):
  Cline, *Variational Principles in Classical Mechanics* (Ch. 15, Sections 15.1-15.8);
  Tong, *Classical Dynamics* (Ch. 4, printed pp. 80-133, Sections 4.1-4.8);
  Cannas da Silva, *Lectures on Symplectic Geometry*, rev. 2006 (Lectures 1-2, 18, pp. 108-111);
  Meinrenken, *Symplectic Geometry* (Ch. 6, Sections 6.1-6.3, pp. 66-75);
  Lee, *Introduction to Smooth Manifolds* 2nd ed. (Thm 17.14, pp. 441-447);
  Hitchin, *Differentiable Manifolds* (Poincare lemma and radial contraction).
  Every A-page topic has at least two independent treatments: canonical/symplectic layer
  (Cannas da Silva + Tong + Cline), canonical maps and generating functions (Tong + Cline),
  Hamilton-Jacobi (Tong + Cline), action-angle/Liouville-Arnold (Cannas da Silva + Meinrenken +
  Tong), two-form primitive (Lee + Hitchin).
- Honest limitations: the local arguments are independent conditional mathematics checked against the
  cited treatments, not copied from them; the source conventions differ (Cannas da Silva uses
  `omega = sum d theta_i ^ dI_i` with the period conventions of Lecture 18; the page fixes period-one
  as in the root definition and records the conversion in `cor-cm-action-angle-radian-scaling`). The
  local generation argument in the repaired LA theorem is reconstructed from the standard
  inverse-function contradiction; its correctness was checked by hand against the two sources, and
  the theorem is local over a shrunken ball, makes no claim about singular fibres, noncompact or
  disconnected fibres, or global charts, and carries `AC_omega` exactly where used. Nothing here is a
  physical or empirical claim; physical units and model postulates belong to the consuming
  classical-mechanics pages.
- No source was dropped for this batch, so `source_resolution` is not applicable.

## Check results (commands actually run; outputs current at final bytes)

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts <22 item paths>`: all
  unchanged after the final edits.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts <22 item paths>`:
  17 checked (the five non-proof carriers are definitions/remarks), 0 failing — all clean.
- `node tools/physics-support/rendercheck.mjs <22 items + 2 page carriers>`: OK — 24 files, no
  wikilink inside math, no unbalanced delimiters, all math parses under KaTeX, all frontmatter parses.
- `node tools/physics-support/proof-layout.mjs <22 item paths>`: 22 items, 62 steps, 0 defects.
- `node tools/physics-support/manifest-deps.mjs <batch manifest>`: 22 items, 0 normalized, 0 errors.
  Whole run (25 nonempty manifests): 515 items, 0 errors.
- `node tools/physics-support/depcheck.mjs --items-file <22 ids> --json`: 0 errors, 0 warnings
  (27 610 items scanned, 1 387 prerequisite-cycle checks for the scope).
- `node tools/physics-support/proof-contract.mjs <batch contracts> --strict`: 0 errors, 0 warnings,
  17/17 items checked (re-generated from the final carriers with
  `regen-contract-entries.mjs`).
- `node tools/physics-support/coverage-checklist.mjs <batch coverage> --require-destination`:
  2 pages, 35 harvested results, 0 errors, 0 warnings.
  `node tools/physics-support/source-fetch-check.mjs --coverage <batch coverage>`: 8/8 fetch-verified,
  8/8 resolved.
- `node tools/physics-support/content-policy.mjs <batch manifest>`: 22 items, 0 errors, 0 warnings.
  Whole run (25 nonempty manifests): 515 items, 0 errors, 0 warnings.
- `node tools/physics-support/audit-manifest.mjs <25 nonempty manifests>`: 5 877 relationships over
  515 items in 25 batches, 0 defects.
- `node tools/physics-support/fwdcheck.mjs` (corpus): 0 open forward references.
  `node tools/physics-support/extcheck.mjs`: OK, 0 recorded-not-proved and none resting on them.
- `node tools/physics-support/validate-plan.mjs research/plan-spec.json --run ...`: no
  `undeclared-prereq` or `requires-resolve` finding for `cm-math-canonical` or
  `cm-math-canonical-examples`; the only batch-6 row is the inherited `[redundant-prereq]` warning
  recorded above. The remaining findings belong to other run pages (for example
  `gr-curvature-and-tides`); the run still exits FAIL while other batches are unauthorized.
- `node tools/physics-support/item-dependency-levels.mjs check --run ...`: no finding names any
  batch-6 item or page; the command exits 1 only for other batches' empty scaffold inventories.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run ...`: refreshed and
  deduplicated; all 6 derived batch-6 edges carry a `verified` review row and this batch's input file
  contributes no orphaned review. `--require-reviewed` still reports the run-level incomplete review
  (other batches have not supplied their inputs).
- `node tools/physics-support/citation-faithfulness-screen.mjs --items-file <22 ids>`: 17 candidate
  rows, all read. The operator-level gaps it exposed (the determinant operator and the Hessian
  notation in three items, and determinant transpose in the HJ theorem) were repaired and are now
  covered; the remaining candidates are bound-variable or notation differences (`tau`, `theta`,
  `alpha`, `Phi`, `sum`, `wedge`, `times`, `circ`) and the spelling `\mathrm{Hess}` versus the root
  definition's `H_f`, with no scope inflation, dropped hypothesis or direction change found.
- `node tools/physics-support/step1-decisions.mjs check --run ...`: 0 outstanding rows for any
  batch-6 item or page; all 22 records `ready` with hashes current at the final manifest and carrier
  bytes. The run-level remainder (55 of 515 items, plus empty inventories) is other batches' work.

## Unresolved findings owned elsewhere

- The published defect in `thm-liouville-arnold-action-angle-theorem` step 5.2 is recorded above for
  the canonical ledger; repairing the published original is outside this workspace's write scope and
  is owner-held.
- Run-level checks still name other batches while they are authored concurrently in the same
  workspace: `item-dependency-levels` and `validate-plan` (empty inventories and other pages'
  findings), `proof-contract-coverage --run` (reports `Empty or invalid frontier page inventory
  cm-math-numerical`), and `step1-decisions` (other batches' missing records). None of them names a
  batch-6 item, page, evidence file or edge, and none blocks this batch's handoff.
- No escalation is open for this batch; no unmet prerequisite, no page-capacity issue (18 + 4 items
  against the 100-item page cap) and no scope reduction was taken.
