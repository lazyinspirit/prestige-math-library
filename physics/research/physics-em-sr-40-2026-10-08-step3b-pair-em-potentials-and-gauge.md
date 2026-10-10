# Step 3b authoring report — pair `em-potentials-and-gauge` / `em-potentials-and-gauge-examples`

- Run: `physics-em-sr-40-2026-10-08`; role: step3b pair auditor and item author (alpha-high).
- Batch: 31. A page: `em-potentials-and-gauge` (order 341, 5 items). B page: `em-potentials-and-gauge-examples` (order 342, 3 items).
- Owned IDs in dependency-level order (ties by page order and item ID):
  14. `pthm-em-spacetime-potentials` (A)
  15. `def-em-gauge-transformation` (A)
  15. `ex-em-topological-potential-obstructions` (B)
  16. `pthm-em-gauge-invariance` (A)
  17. `pthm-em-lorenz-gauge-wave-form` (A)
  17. `ex-em-pure-gauge-fields` (B)
  18. `pthm-em-gauge-reachability` (A)
  18. `ex-em-residual-lorenz-example` (B)
- Report status: HANDOFF. All eight item carriers exist; seven accepted and one escalated.

## Entry state (rechecked against current inputs)

- At task entry the batch-31 manifest scaffolds carried statements, strategies, dependencies, roles, sources and `physical_scope`. Carriers for `pthm-em-spacetime-potentials`, `def-em-gauge-transformation`, `ex-em-topological-potential-obstructions` and `pthm-em-gauge-invariance` were already present when this session began (timestamps 18:35-18:40 on 2026-10-09), written by a preceding worker on this pair. This session audited those four (statements against the manifest, hypotheses, supplier readings, precheck, proof-layout) and preserved them, then authored the remaining four items and closed the local gaps recorded below.
- Cross-batch suppliers and their current carriers:
  - `thm-em-elliptic-boundary-existence` (batch 18): carrier authored; Statement read (unique weak Dirichlet solution with smooth representative; Neumann solvability exactly under componentwise compatibility, unique modulo componentwise constants; AC and Countable Choice declared).
  - `lem-em-zero-boundary-coercivity` (batch 16): carrier authored during this session (2026-10-09 18:59); Statement read: the (2L)^2 squared bound and the nonsquared consequence on H_0^1, under AC.
  - `lem-em-parameter-dependent-smooth-poisson-boundary-solvers` (batch 16): carrier still absent; provisionally inspected at its batch-16 scaffold statement and quoted as the declared interface in fact F6 of `pthm-em-gauge-reachability`.
- Authored suppliers checked: `lem-em-joint-smooth-potentials`, `def-em-potential-gauge-and-field-conventions`, `lem-em-gauge-wave-reachability`, `def-em-fields`, `post-em-vacuum-maxwell`, `def-em-sources`, `def-em-complex-plane-wave`, `def-em-lab-geometry`, `def-em-si-conventions`, `thm-em-wave-cauchy-kirchhoff`.

## Checkpoint log

### 14. `pthm-em-spacetime-potentials` (A) — accepted

- Statement: star-shaped open `Omega`, interval `I` with at least two elements, jointly `C^k` fields, `k>=2`, with `div B = 0` and `curl E = -d_t B`; then jointly `C^k` `A` and `C^{k-1}` `varphi` with `B = curl A`, `E = -grad varphi - d_t A`; smooth clause and converse; explicit no-global/no-uniqueness/no-boundary disclaimers.
- Source locators: Landau-Lifshitz §16-§17; Tong §5.3.1; Griffiths §10.1.1 (all in the manifest source set; the executed statement is the in-run lemma).
- Supplier uses (all read): vector clause of `lem-em-joint-smooth-potentials` for `B`; scalar clause for `E + d_t A` with Clairaut and curl linearity; converse by `div curl = 0` and `curl grad = 0`.
- Checks: precheck PASS; proof-layout 0 defects; rendercheck OK; content-policy 0 errors; strict proof contract 0 errors; manifest-deps 0 errors; level 14 confirmed. Local gaps closed: the restriction convention for non-open `I` is stated and deps include its supplier.

### 15. `def-em-gauge-transformation` (A) — accepted

- Complete definition: representations, gauge functions/transforms with class drop `C^m -> C^{m-1}`, equivalence and smooth group action, Lorenz and Coulomb conditions, physical status and units; reachability explicitly excluded.
- Local repair: added the restriction-convention clause for non-open `I` and the dependency on `lem-em-joint-smooth-potentials`; added `def-divergence-and-curl-of-a-c1-vector-field`, which the definition uses and now declares.
- Checks: rendercheck OK; content-policy 0 errors; strict proof contract (definition boundary worksheet) 0 errors; nonproof structure PASS.

### 15. `ex-em-topological-potential-obstructions` (B) — accepted

- Complete inline verification: circulation `2 pi` of the curl-free punctured-axis field (no scalar potential), unit-sphere flux `4 pi` of `x/|x|^3` with patch Stokes and cancelling hemisphere chains (no global `C^1` vector potential), and simple connectivity of punctured space; all content proved from A-homed or published suppliers (B-leaf rule respected).
- Local repair: three supplier deps used by the inline arguments added to the manifest/item (`thm-sine-cosine-zero-sets-and-fundamental-period`, `cor-homotopy-relative-and-path-homotopy-are-equivalence-relations`, `thm-path-connected-implies-connected`).
- Checks: precheck PASS; proof-layout 0 defects; rendercheck OK; content-policy 0 errors; strict contract 0 errors; level 15 confirmed.

### 16. `pthm-em-gauge-invariance` (A) — accepted

- Complete proof: a `C^k` generator (`k>=2`) sends a `C^k` pair to a `C^{k-1}` pair with the same field pair; magnetic identity from `curl grad chi = 0`, electric identity from `partial_t partial_i chi = partial_i partial_t chi`.
- Local repair: restriction-convention clause for non-open `I` added, with dependency `lem-em-joint-smooth-potentials` and the fact note.
- Checks: precheck PASS; proof-layout 0 defects; rendercheck OK; content-policy 0 errors; strict contract 0 errors; level 16 confirmed.

### 17. `pthm-em-lorenz-gauge-wave-form` (A) — accepted

- Authored complete proof of the exact identities `div E = W varphi - d_t G`, `curl B - c^{-2} d_t E = W A + grad G`, the gauge shift `G(T_chi) = G - W chi`, the equivalence with the sourced Maxwell system, the decoupling inside `G = 0`, and the residual generators `W chi = 0`; `C^2` recorded as the exact standing regularity; no solvability claimed.
- Exact supplier uses: potential-pair definitions, Maxwell smooth branch with `rho, J` continuous, `cor-the-curl-of-a-curl-of-a-c2-field`, Laplacian, Clairaut, linearity of div/curl, `div curl = 0`, `curl grad = 0`, and the gauge-shift identity consumed by the example below.
- Local repairs: restriction-convention clause and dependency; source-free automatic identities explicitly proved in step 2.3.
- Checks: precheck PASS; proof-layout 0 defects; rendercheck OK; content-policy 0 errors; strict contract 0 errors; level 17 confirmed.

### 17. `ex-em-pure-gauge-fields` (B) — accepted

- Complete example: `T_chi(0,0) = (-d_t chi, grad chi)` has the zero field pair for every `C^2` generator; the constant instance `(beta, a)` includes the zero parameter branch; the witness `(0, e_1)` proves noninjectivity.
- Local repairs: restriction-convention clause and dependency `lem-em-joint-smooth-potentials`; the electric identity is obtained from gauge invariance of the zero pair (instead of an undeclared mixed-partials citation), and the curl identity from `thm-the-curl-of-a-gradient-vanishes`.
- Checks: precheck PASS; proof-layout 0 defects; rendercheck OK; content-policy 0 errors; strict contract 0 errors; level 17 confirmed.

### 18. `pthm-em-gauge-reachability` (A) — ESCALATED (open obligation)

- Authored complete conditional proof of the three branches:
  (a) the all-space slab Lorenz branch is `lem-em-gauge-wave-reachability` read for framework pairs, carrying `AC_omega`;
  (b) the bounded smooth-domain Coulomb branch applies `lem-em-parameter-dependent-smooth-poisson-boundary-solvers` to `F = eps_0 div A` (Dirichlet) or to the compatible correction `Fhat = F - c_j(t)/|Omega_j|` (Neumann), with `c_j` smooth and vanishing on `I`, then identifies generators through the first Green identity: spatially harmonic differences, zero in the Dirichlet case, componentwise constants in the Neumann case, removed by the zero mean;
  (c) the residual classification on star-shaped domains uses the corrected scalar radial witness `chi_0` of `lem-em-joint-smooth-potentials`, the radial constancy of `delta varphi + d_t chi_0`, and the time primitive of its common value; `W chi = 0` follows from the gauge-shift identity of the wave-form item. Degenerate and empty intervals are disposed of explicitly; the `AC`/`AC_omega` uses are stated (countable choice in (a) and (b) via the wave solver, the parameter solver and the Green identity; full choice in (b) via the elliptic/Sobolev suppliers).
- Open obligation: `lem-em-parameter-dependent-smooth-poisson-boundary-solvers` is not yet authored; fact F6 quotes its declared batch-16 interface, and the consuming steps are 2.1, 2.2 and 3.1. The related cross-batch rows (`lem-em-zero-boundary-coercivity`, `thm-em-elliptic-boundary-existence`) remain open in that consuming chain, and the three prerequisite page carriers (`em-boundary-and-spectral-prerequisites`, `em-wave-equation-prerequisites`, `em-causal-wave-kernel-prerequisites`) are not yet placed.
- Decision recorded with `record-item ... escalate`; the supplier link is carried in deps and the cross-batch ledger, so it must be reconciled by the owner once the carrier exists. After the receipt was written, one more item edit (the empty-interval vacuity clause in step 1.2) and sibling manifest updates changed the transitive dependency-closure hash, so the final check reports this row as requiring a current owner decision; that is the intended escalation state (only the owner resolves escalations), and the recorded reason text remains available in the receipt and in this report.
- Checks: precheck PASS; proof-layout 0 defects; rendercheck OK; content-policy 0 errors; strict contract 0 errors (with the open-obligation remark inside the item); level 18 confirmed.

### 18. `ex-em-residual-lorenz-example` (B) — accepted

- Complete example: `chi = cos(k.x - omega t)`, `omega = c|k| > 0`, satisfies `W chi = 0`; the gauge shift preserves `G` and the field pair; the transform of the zero pair is nonzero (proved by `d_t^2 chi(0,0) = -omega^2 != 0`) and still in Lorenz gauge; free-space scope only.
- Checks: precheck PASS; proof-layout 0 defects; rendercheck OK; content-policy 0 errors; strict contract 0 errors; level 18 confirmed.

## Registration, pages and contracts

- Authoring sequence in this session: the level-17 items (`pthm-em-lorenz-gauge-wave-form`, `ex-em-pure-gauge-fields`), then the level-18 example `ex-em-residual-lorenz-example` and finally the level-18 `pthm-em-gauge-reachability`, which was deliberately left last because its branch (b) carries the large unfinished-supplier obligation. The two level-18 items are mutually independent (neither appears in the other's dependencies), so no item is justified by a later item and the dependency-level order of consumers is respected.
- Manifest `research/physics-em-sr-40-2026-10-08-batch-31.pages.json`: deps and dependency_roles synced to the authored carriers for six items (all additions, no removals); levels 14/15/15/16/17/17/18/18 confirmed by `item-dependency-levels check --run` (473 items, 80 pages, no mismatch).
- Pages authored: `library/classical-electromagnetism/em-potentials-and-gauge.md` (items: the five A items) and `library/classical-electromagnetism/em-potentials-and-gauge-examples.md` (examples: the three B items), both `status: draft`.
- Proof contracts: `research/physics-em-sr-40-2026-10-08-batch-31.proof-contracts.json` created (version 1, level `physics-em-sr-40-2026-10-08`, scope = the eight IDs) with full citation quotes from the authored suppliers, per-step derivations, and the eight standard boundary dispositions per item; `proof-contract.mjs --strict` reports 0 errors, 0 warnings, 8/8 checked.
- Cross-batch ledger input: 25 of 30 rows set `verified` with concrete match/use evidence; 5 remain `open` (the parameter-solver row, the coercivity row whose consuming step passes through it, and the three page rows whose carriers are not yet placed); `frontier-dependency-ledger refresh --run` succeeded.
- Coverage `research/physics-em-sr-40-2026-10-08-batch-31.coverage.json`: status updated to authored-and-locally-checked with the open obligations named; sources unchanged (9/9 fetch-verified; 2 pages, 30 harvested results, 0 errors, 0 warnings).
- Step-3 decisions: 7 `accept` (confidence 1, examined dependency lists recorded) for all items except `pthm-em-gauge-reachability`, recorded `escalate` with the exact open obligation.

## Checks actually run (results)

- `precheck.mts` on all eight carriers: 7 checked, 0 failing (the definition has no proof body and is reported not-applicable rather than checked).
- `proof-layout.mjs` on the eight carriers in one command: 8 items, 55 steps, 0 defects.
- `rendercheck.mjs` on the eight items and two pages: all 10 files clean (wikilinks, math delimiters and KaTeX, frontmatter YAML).
- `content-policy.mjs` on batch 31: 8 scoped items, 0 errors, 0 warnings.
- `proof-contract.mjs --strict` on the batch-31 contract: 0 errors, 0 warnings, 8/8 items checked.
- `item-dependency-levels.mjs check --run`: 473 items, 80 pages, no level mismatch for the pair.
- `manifest-deps.mjs` on batch 31: 8 items, 0 errors.
- `coverage-checklist.mjs --require-destination`: 2 pages, 30 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs --coverage`: 9/9 fetch-verified and 9/9 resolved.
- `frontier-item-gate --tool validate-plan`: exit 0 for this pair's rows; the pair's only rows are the known owner-held `redundant-prereq` warnings. The run-wide command currently FAILs on other pages' `undeclared-prereq` rows (see below), none naming this pair.
- `frontier-item-gate --tool depcheck`: the only row naming one of this pair's items is the expected `dep-unresolved` for `lem-em-parameter-dependent-smooth-poisson-boundary-solvers` in `pthm-em-gauge-reachability`; other failures name other batches' in-flight items.
- `step3-decisions.mjs check --run --phase final`: the pair's scope is closed; seven items accepted, the reachability item remains the recorded escalation.

## Published concerns and cross-batch notes

- No confirmed defect in any supplier consumed by this pair. `lem-em-zero-boundary-coercivity` and `thm-em-elliptic-boundary-existence` were authored by their owning batches while this session ran, and their statements match the declared interfaces used through fact F6.
- Run-wide `validate-plan` currently reports `undeclared-prereq` rows on other pages (for example `em-elementary-mathematical-prerequisites`, `em-expanded-analysis-prerequisites`, `em-boundary-and-spectral-prerequisites`, `em-material-response`, `em-experiment-analysis-prerequisites`). None names `em-potentials-and-gauge` or its examples; they are reported for Step 4/owner reconciliation, not repaired here.
- Run-wide `depcheck` likewise reports unresolved links inside other batches' items (for example `thm-em-elliptic-boundary-existence`, `thm-em-spherical-multipole-basis`, `thm-em-wave-cauchy-kirchhoff`, `thm-em-waveguide-spectral-completeness`); these belong to the owning pairs and do not name this pair's items.

## Handoff

- Completed IDs: `pthm-em-spacetime-potentials`, `def-em-gauge-transformation`, `ex-em-topological-potential-obstructions`, `pthm-em-gauge-invariance`, `pthm-em-lorenz-gauge-wave-form`, `ex-em-pure-gauge-fields`, `ex-em-residual-lorenz-example` (accepted); `pthm-em-gauge-reachability` (authored, all local checks pass, decision escalated).
- Added suppliers: none added as new local items by this pair; `lem-em-zero-boundary-coercivity` was authored by its owning batch during this session. Added dependency declarations: `lem-em-joint-smooth-potentials` (to four items), `def-divergence-and-curl-of-a-c1-vector-field` (to the gauge definition), `cor-first-green-identity-on-a-bounded-c-one-domain` (to the reachability item), and three published topology/trigonometry suppliers (to the obstruction example).
- Open obligations: the parameter-solver carrier and the three prerequisite page carriers; the escalated decision for `pthm-em-gauge-reachability` must be reconciled by the owner once the supplier is authored and the steps 2.1/2.2/3.1 uses are verified. A final formatting recheck after the last item edit (the empty-interval vacuity clause in step 1.2) re-passed: precheck PASS, proof-layout 0 defects, rendercheck clean, strict contract 0 errors, content-policy 0 errors.

