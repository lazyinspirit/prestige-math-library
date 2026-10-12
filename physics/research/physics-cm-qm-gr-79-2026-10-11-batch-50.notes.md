# Batch 50 notes — Qm Uncertainty And Compatibility

Run `physics-cm-qm-gr-79-2026-10-11`, role **beta**, batch **50**, covering
the pair `qm-uncertainty-and-compatibility` (A, order 179) and
`qm-uncertainty-and-compatibility-examples` (B, order 180), category
`non-relativistic-quantum-mechanics`, library `physics`. Both pages are
`status: draft`; this batch publishes nothing. Batch 50 is at dependency
level **9** and its computed in-run supplier is batch 48
(`qm-massive-particle-kinematics`, ready).

Read first: root `CLAUDE.md`, workspace `CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`, the
batch dependency levels
`research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 50: level 9, requires batch 48), the design section
`research/plan-non-relativistic-quantum-mechanics-track.md` L3105 (pair
`qm-uncertainty-and-compatibility`), the scaffold inventory
`research/first-principles-2026-10-03/non-relativistic-quantum-mechanics/scaffold/inventory.json`
and its `baseline-claim-coverage.json`, and `research/plan-spec.json`.

## Inventory

A page `qm-uncertainty-and-compatibility` (12 items; manifest
`dependency_level` in parentheses):

1. `def-nrqm-uncertainty-strong-spectral-commutation` (0) — mathematics
   definition of strong spectral commutation of two self-adjoint operators at
   the projection-valued-measure level, with its clause equivalences.
2. `lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound` (2) —
   mathematics lemma: the Schroedinger–Robertson (weak, refined and
   anticommutator) bounds and the equality case for symmetric operators.
3. `def-nrqm-uncertainty-preparation-spread` (9) — physics definition of the
   preparation variance and spread of an assigned sharp observable, the
   product of two spreads, their units, moment hypotheses and scope.
4. `lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators` (1) —
   mathematics lemma: bounded Borel functions of strongly commuting
   self-adjoint operators commute, preserve the domain of each operator, and
   compose.
5. `thm-nrqm-uncertainty-joint-pvm-criterion` (2) — mathematics theorem: the
   equivalence of strong spectral commutation, existence and uniqueness of a
   joint projection-valued measure, and the commuting bounded calculus.
6. `lem-nrqm-uncertainty-product-domain-commutator-identity` (5) — mathematics
   lemma: `D(Q_j P_j) ∩ D(P_j Q_j) = {f : x_j f, D_j f, x_j D_j f ∈ L²}` and
   the commutator identity `(Q_j P_j − P_j Q_j) f = iℏ f` there.
7. `lem-nrqm-uncertainty-approximation-by-product-domain-vectors` (6) —
   mathematics lemma: explicit smooth-cutoff approximation of any class in
   `D(Q_j) ∩ D(P_j)` by unit product-domain vectors with convergence of the
   vectors, the operators and their moments.
8. `pthm-nrqm-uncertainty-robertson-relation` (10) — physics theorem: the
   weak Robertson bound off the product domains, the Robertson form and its
   anticommutator refinement with the equality case, and the automatic
   bounded-observable clause, conditional on P1/P2.
9. `pthm-nrqm-uncertainty-position-momentum-relation` (11) — physics theorem:
   `ΔQ_j ΔP_j ≥ ℏ/2` on the full maximal domain `D(Q_j) ∩ D(P_j)`, the exact
   imaginary part `−ℏ/2` of the centered pairing, and the equality
   characterization.
10. `pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law` (9) —
    physics theorem: the compatibility criterion, the unique joint sharp
    observable and its Born joint law with marginals, and the
    order-independent repeatable ideal joint instrument, conditional on
    P1–P3.
11. `pthm-nrqm-uncertainty-position-momentum-incompatible` (10) — physics
    theorem `proof_strategy: contradiction`: the model's `E_{Q_j}` and
    `E_{P_j}` do not strongly commute, so the pair admits no joint sharp
    outcome law.
12. `rem-nrqm-uncertainty-scope-and-empirical-status` (12) — physics remark:
    adopted postulates, proved statements and excluded claims of the page.

B page `qm-uncertainty-and-compatibility-examples` (6 items):

13. `ex-nrqm-uncertainty-gaussian-minimum-spread` (12) — example: the exact
    Gaussian computation of the spin-zero model, its spreads `σ/√2` and
    `ℏ/(σ√2)` and the saturated product `ℏ/2` with the equality
    configuration.
14. `texp-nrqm-uncertainty-spin-half-incompatibility` (11) —
    thought-experiment: the finite internal-factor deduction
    `Σ_i (ΔS_i)² = 3ℏ²/4 − |⟨S⟩|² ≥ ℏ²/2`, explicit non-commuting spectral
    projections, and Robertson saturation in the `S_z` eigenstates.
15. `cex-nrqm-uncertainty-commutator-zero-on-a-core-is-not-spectral-compatibility`
    (5) — mathematics counterexample on `L²(0,1)`: a commutator identity on
    the common core `C_c^∞(0,1)` does not imply spectral compatibility.
16. `rem-nrqm-uncertainty-energy-time-caveat` (11) — physics remark: time is
    a parameter, not an assigned observable; only the conditional
    graph-domain timescale bound is available.
17. `rem-nrqm-uncertainty-error-disturbance-distinction` (11) — physics
    remark separating preparation spread, apparatus resolution/error and
    disturbance.
18. `rem-nrqm-uncertainty-examples-scope-limits` (13) — physics remark
    inventorying the B page and recording that it contains no experiment.

Seven items are pure mathematics (1, 2, 4, 5, 6, 7, 15) and carry only
mathematical prerequisites; eleven are physics items conditional on the
framework postulates. `def-nrqm-uncertainty-preparation-spread` is a physics
definition; `rem-nrqm-uncertainty-*` are non-proof-bearing remarks;
`cex-nrqm-uncertainty-commutator-zero-on-a-core-is-not-spectral-compatibility`
is a pure-mathematics counterexample with no physical premise.

## Key mathematical decisions

- **Compatibility is defined at the PVM level.** Strong spectral commutation
  (`def-nrqm-uncertainty-strong-spectral-commutation`) is defined by
  `E_A(Λ)E_B(Σ) = E_B(Σ)E_A(Λ)` for all Borel `Λ,Σ`, not by a commutator
  identity on a core. The counterexample item proves the two conditions are
  genuinely different: the periodic and antiperiodic momentum extensions on
  `L²(0,1)` share the core `C_c^∞(0,1)` with vanishing commutator there, yet
  `E_A({0})E_B({π}) ≠ E_B({π})E_A({0})`. This resolves the design's "[M,D,T]
  strong spectral commutation" clause with an exact PVM-level reading and a
  refutation of the naive core-to-PVM implication.
- **The position–momentum relation is proved without product-domain
  hypotheses.** `pthm-nrqm-uncertainty-position-momentum-relation` combines
  the product-domain commutator identity (6) with the cutoff approximation
  (7) to reach the full maximal domain `D(Q_j) ∩ D(P_j)`, and computes the
  exact imaginary part `−ℏ/2` of the centered pairing; equality holds exactly
  for linearly dependent centered vectors with vanishing real pairing.
- **The spin-half deduction is finite and explicit.** The identity
  `Σ_i (ΔS_i)² = 3ℏ²/4 − |⟨S⟩|²` and the projections
  `P_x^± = (1/2)(I ± σ_x)` give an explicit non-commutation witness
  `P_x⁺P_y⁺ − P_y⁺P_x⁺ = (i/2)σ_z`.
- **No energy–time inequality is asserted.** The energy–time item records
  that `t` is a curve parameter, quotes the conditional graph-domain
  timescale bound of batch 42 with its `f'(t₀) = 0` caveat and the
  Heisenberg-picture identification of `f'(t₀)` from batch 47, and claims no
  universal lifetime or duration.

## Design versus plan (conflicts and deviations)

The design section L3105 carries the reservation
`{order 08, a_inventory "preparation variances, weak/strong Robertson
hypotheses, strong spectral commutation, joint measurement scope [M,D,T], 32",
b_inventory "Gaussian bound, incompatible spin outcomes, energy–time caveat,
error/disturbance distinction [H,examples,R], 18", requires_physics
["NRQ-A03","NRQ-A06"]}` and the prose "Declared earlier prerequisites:
`qm-massive-particle-kinematics`". The plan controls conflicts; the following
were recorded:

1. **Reservation labels versus page IDs.** `NRQ-A06` is
   `qm-massive-particle-kinematics` (also the design's declared prerequisite
   and the plan-spec `requires` entry for order 179). `NRQ-A03` is
   `qm-observables-and-born-probabilities` (scaffold
   `baseline-claim-coverage.json`, `"id": "NRQ-A03"`). The A page reads
   NRQ-A03 content — the assigned-sharp-observable vocabulary, moment and
   variance results — and that page lies in the requires closure
   (`qm-massive-particle-kinematics → qm-autonomous-dynamics →
   qm-observables-and-born-probabilities`), so no direct `requires` entry is
   needed and `validate-plan` reports no finding for it.
2. **Budgets.** The design's budgets (A 32, B 18) are upper bounds; the
   current inventories are 12 A items and 6 B items, well under the hard
   100-item page cap. Some mathematical prerequisites that the reservation
   assumed as background (product-domain commutator, cutoff approximation,
   bounded Borel calculus of commuting operators) are proved on the same A
   page to keep the dependency closure local and auditable.
3. **`requires` extensions beyond plan-spec.** The plan-spec lists only
   `qm-massive-particle-kinematics` for A and only the A page for B. Batch 50
   extended the A page `requires` with `qm-measurement-and-instruments`
   (batch 46), because the measurement-scope items read the declared
   measurement/instrument vocabulary, the effects-do-not-determine-the-update
   result and the projective-outcome updates; and the B page `requires` with
   `qm-measurement-and-instruments` transitively (through A) plus the two
   published mathematics pages `the-heat-kernel-and-the-cauchy-problem` and
   `improper-and-parameter-dependent-multiple-integrals`, which the Gaussian
   example and the counterexample depend on. This follows the batch-48 B-page
   convention and is exactly what `validate-plan` requires for closure; after
   the edits `validate-plan` reports **0** findings naming either page.
4. **Design inventory terms.** "[M,D,T]" and "[H,examples,R]" are source
   tags; the corresponding harvested material is recorded in the coverage
   file with included/inline dispositions. The "joint measurement scope"
   phrase is realized as the conditional ideal-instrument clause of item 10
   plus the error/disturbance distinction remark (17), not as an approximate
   or unsharp joint-measurement theorem, which the design does not ask for
   and which the page explicitly does not claim.

## Source audit and repairs

Eleven source entries across six distinct works: D. Tong, *Quantum Mechanics*
(author-hosted lecture set); B. Zwiebach, MIT 8.05 Quantum Physics II, Chapters
2, 5 and 6; G. Teschl, *Mathematical Methods in Quantum Mechanics*, 1st
edition 2009; J. Binney and D. Skinner, *The Physics of Quantum Mechanics*;
H. Brezis, *Functional Analysis, Sobolev Spaces and PDE*; and the earlier
item-level references to the framework's own published/batch suppliers, which
are covered by the dependency verification below.

Every entry carries an exact locator (printed and PDF pages with the page
offset) and at least one named harvested result with a disposition
(`included` with an item ID or `inline` at a named item); all 11 entries are
fetch-verified with stamps and resolved, with 0 documented drops. Repairs
applied before readiness:

- The Brezis citation was corrected: the interval momentum material is
  §8.4 Example 7 (periodic boundary conditions), printed page 227 / PDF page
  242 (PDF page = printed page + 15); the inherited "§8.6" locator described
  the Dirichlet eigenfunction expansion (Theorem 8.22) and was wrong for the
  counterexample's use. The item and the coverage entry were patched to the
  verified locator.
- The MIT Chapter 2 URL was corrected to the verified file
  `a56c316e4ec548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf`, whose full text
  was fetched and inspected for Sections 3.3–3.5 (Pauli matrices and product
  identities).
- The B page carries a `coverage-low-yield` warning (5 of 13 harvested
  results scaffolded): the remaining harvested results are declines or
  inline readings, listed with destinations in the coverage file; the
  warning is left in place for Alpha/Step-2 confirmation rather than
  suppressed.

## Dependency verification

- The batch input
  `research/physics-cm-qm-gr-79-2026-10-11-batch-50.cross-batch-dependencies.json`
  records **85 rows** (83 item edges and 2 page edges), all `verified`, one
  per `(kind, consumer, supplier)`. Supplier batches: 35 (`qm-math-composites`),
  37 (`qm-math-orbital-and-spin`), 38 (`qm-math-intervals-and-contacts`), 42
  (`qm-math-magnetic-and-detection`), 43 (framework and quantities), 44
  (`qm-state-geometry`), 45 (`qm-observables-and-born-probabilities`), 46
  (`qm-measurement-and-instruments`), 47 (`qm-autonomous-dynamics`) and 48
  (`qm-massive-particle-kinematics`). Each row states the exact required
  clause, its hypotheses and the consuming fact and proof steps.
- A scoped re-implementation of the ledger collector over the current
  manifest and carrier frontmatter confirms the input covers **85/85**
  declared cross-batch edges for batch-50 consumers, with 0 malformed rows,
  0 orphan rows and 0 missing rows (script `/tmp/b50-ledger-scope-check.mjs`,
  run 2026-10-11).
- Actual transitive dependencies were read at the current carriers before
  the rows were written: clause-level checks of the weak-form Robertson
  clauses (a),(c); the covariance-refined clauses (a)–(d); compatible Lüders
  clauses (b)–(e); the finite-spin matrices clause (e); twisted-periodic
  momentum clauses (a)–(c); componentwise kinematics clauses (a)–(d); the
  CCR core, momentum representation, outcome laws and preparation moments;
  and the postulate readings P1–P7. Hypotheses, directions and conventions
  were checked (inner product linear in the first argument; `P_k = −iℏD_k`;
  `U = D_ℏ F₂` with the `(2πℏ)^{−1/2}` normalization; `E_A({λ})` the
  eigenspace projection). No missing, circular or forward dependency
  remains (`depcheck`, `fwdcheck` clean; `item-dependency-levels` reports no
  batch-50 line).
- `frontier-dependency-ledger.mjs refresh --run …` **failed** at the time of
  writing, before reaching batch 50, on the batch-39 and batch-40 input
  files (whichever the scan reaches first): see defect 1 below. The batch-50
  input itself validates row by row under the tool's rules
  (kind/status/evidence/consumer-ownership) as checked by the scoped run.

## Recorded defects outside this batch (not repaired here)

1. **Two cross-batch inputs block the run-wide ledger refresh.** The tool
   `tools/physics-support/frontier-dependency-ledger.mjs` accepts only the
   statuses `open`, `verified` or `removed` and otherwise throws
   `invalid review or consumer ownership`, so `refresh --run
   physics-cm-qm-gr-79-2026-10-11` fails for the whole run and no unified
   ledger can be regenerated. The offending inputs observed on 2026-10-11 are:
   - `research/physics-cm-qm-gr-79-2026-10-11-batch-39.cross-batch-dependencies.json`
     (mtime 2026-10-11 18:03:42 +1100): 1 page row
     `qm-math-coulomb → analyticity-liouville-and-morera` with status
     `prerequisite-context`.
   - `research/physics-cm-qm-gr-79-2026-10-11-batch-40.cross-batch-dependencies.json`
     (mtime 2026-10-11 17:54:37 +1100): 11 rows, statuses
     `prerequisite-context` (3 page rows for `qm-math-controlled-dynamics`)
     and `local-owning-premise-review` (8 item rows for
     `lem-nrqm-controlled-dynamics-cc-separable-spectral-calculus`).
   The refreshes attempted at 17:56, 18:02 and 18:04 all aborted on one of
   these files before reaching batch 50. Smallest repair by the owning
   writers: re-status those 12 rows to one of the accepted values (their
   evidence text can stand). Batch 50 did not edit either file; its own input
   is complete and valid, and a retry after those repairs is required before
   the Step-2 gate reads the unified ledger.
2. **Run-wide check aborts on empty frontier inventories.** `physics-check
   --run …` aborts with `Invalid or empty current page in
   physics-cm-qm-gr-79-2026-10-11-batch-30.pages.json`, and
   `proof-contract-coverage.mjs --run … --contracts …` aborts on the empty
   inventory `cm14-hamilton-jacobi-and-integrability`; both are other
   batches mid-construction and none of the aborted checks names a batch-50
   item. Recorded for the canonical ledger; no repair authority here.

## Checks run (exact results)

Item and page checks (final carriers, after the `requires` extension):

- `precheck.mts` on all 18 items: **12 checked, 0 failing** — all clean (the
  two definitions and the four remarks are not proof-bearing).
- `rendercheck.mjs` on all 18 items + 2 page carriers: **OK — 20 files**, no
  wikilink inside math, no nested or unbalanced delimiters, no multiline
  display block, every math span parses under KaTeX, every frontmatter block
  parses. Re-run on the two page carriers after the `requires` edit: OK.
- `proof-layout.mjs` on all 18 items: **18 items, 58 steps, 0 defects**.
- `depcheck.mjs --items-file` (18 items): **OK** — no missing, circular or
  forward dependency; page dependency depth 55 (A) / 56 (B), whose closures
  include `qm-massive-particle-kinematics`, `qm-measurement-and-instruments`
  and the two published mathematics pages.
- `fwdcheck.mjs --items-file`: OK — prerequisite/forward cycle checks
  passed (inherited forward markers of prerequisite cones, informational).
- `extcheck.mjs --items-file`: OK — 28289 items scanned, 0
  recorded-not-proved, 0 resting on them.
- `content-policy.mjs` (mathematics content policy, batch manifest): **18
  scoped items, 0 errors, 0 warnings**.
- Scoped `validatePhysicsContent` over the 18 items and 2 pages
  (`/tmp/scoped-physics-check.mjs`): **0 errors**.
- `manifest-deps.mjs` (batch manifest): **18 items, 0 normalized, 0 errors**.
- `item-dependency-levels.mjs check --run …`: 43 run-wide errors (other
  batches' empty scaffolds and one gr-batch level mismatch); **no batch-50
  line**, and frontmatter, manifest and computed levels agree
  (0, 2, 9, 1, 2, 5, 6, 10, 11, 9, 10, 12 / 12, 11, 5, 11, 11, 13).
- `proof-contract.mjs --strict` on the batch contract file: **12/12 items
  checked, 0 errors, 0 warnings** — every declared fact is contracted with
  an exact quote from the supplier's statement/definition section, every
  proof step has a derivation with stated inputs, and all eight standard
  boundary cases have a disposition per proof-bearing item.
- `citation-fidelity.mjs` (self-check): 105 citations over 12 authored
  items; every recorded quote occurs in its cited item; no widening
  candidates raised.
- `coverage-checklist.mjs --require-destination`: **2 pages, 28 harvested
  results, 0 errors, 1 warning** (`coverage-low-yield` on the B page:
  5/13 scaffolded; declines to be confirmed with Alpha).
- `source-fetch-check.mjs --coverage … --stamp`: **11/11 source entries
  fetch-verified (0 newly stamped); 11/11 resolved, 0 documented drops**.
- `manifest-integrity.mjs --run …`: **158 page(s) owed, 158 in the
  manifests, no scope drift** (run-wide).

Run-wide checks that fail only on other batches (recorded, not batch-50
defects):

- `validate-plan.mjs research/plan-spec.json --run …`: FAIL with 84
  `undeclared-prereq`/`redundant-prereq` findings run-wide; **0 name either
  batch-50 page** after the `requires` extension above.
- `proof-contract-coverage.mjs --run … --contracts …`: aborts on the empty
  frontier page inventory `cm14-hamilton-jacobi-and-integrability`.
- `physics-check.mjs --run …`: aborts on the empty
  `physics-cm-qm-gr-79-2026-10-11-batch-30.pages.json` before reaching
  content validation.
- `frontier-dependency-ledger.mjs refresh --run …`: aborts on the batch-40
  input (defect 1 above).

## Empirical qualifications and scope

Every item is conditional on its explicitly stated postulates and cited
mathematics. The pair records no experiment: there is no preparation
procedure, apparatus, calibration, sampling model, trial count, uncertainty
budget, histogram or measured value anywhere in it, and none is invented.
The physical statements are conditional consequences of P1 and P2 (with P5
and P6 used only to name the model's `Q_j`, `P_j` and internal factor); the
identification of a preparation or apparatus with the model's states and
instruments is a tested identification carrying uncertainty under P7, as the
scope remarks state. The spreads are properties of the pair
(preparation, assigned sharp observable) computed from the Born law; they are
not apparatus resolutions, measurement errors or disturbances. The `ℏ/2`
bounds are read in the declared units, and no claim is made that any
laboratory procedure attains them. No p-value, confidence level or other
statistical inference occurs on either page.

## Escalations

None held. No batch-50 claim is blocked; every consumed supplier was verified
at its current carrier, and the only unresolved run-wide obligation is the
batch-40 ledger-input defect recorded above, which lies outside this batch's
edit scope and is left for its owner.

## Readiness

All 18 items were recorded `ready` with
`node tools/physics-support/step1-decisions.mjs record --run physics-cm-qm-gr-79-2026-10-11 --item <ID> --decision ready --dependencies <declared deps> --reason <evidence summary>`
**after** the final item carriers, page carriers and the final manifest
regeneration (the manifest embeds each item's text, so ordering matters).
The dependency lists passed are the items' declared `deps`, including the
cross-batch and imported suppliers actually used. A subsequent `check --run`
reports **0** batch-50 items still open: every record is closed against the
current item text, dependency metadata and containing manifest, so no record
is stale at handoff.

Handoff artifacts: the carriers
`library/non-relativistic-quantum-mechanics/qm-uncertainty-and-compatibility.md`
and `...-examples.md`; the manifest
`research/physics-cm-qm-gr-79-2026-10-11-batch-50.pages.json`; the coverage
`research/physics-cm-qm-gr-79-2026-10-11-batch-50.coverage.json`; the proof
contracts
`research/physics-cm-qm-gr-79-2026-10-11-batch-50.proof-contracts.json`; the
cross-batch input
`research/physics-cm-qm-gr-79-2026-10-11-batch-50.cross-batch-dependencies.json`;
and these notes. Step 2/3 independent review follows; a readiness record is
not mathematical approval.
