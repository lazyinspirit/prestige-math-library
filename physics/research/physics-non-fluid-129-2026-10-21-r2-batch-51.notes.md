# Batch 51 notes — finite reduced dynamics, memory and quantum trajectories

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: `51`  
Owner scope: `nrqmx-finite-open-dynamics` and `nrqmx-finite-open-dynamics-examples`

## Plan and scope reconciliation

Read the complete assigned task, the track design section at line 359, its linked prose scaffold, `plan-spec.json`, the item inventory, the run dependency-levels evidence, and the workspace instructions. The plan row and detailed design agree on the A/B page identities, order, title, category, library, three prerequisite pages, finite-dimensional scope, and assigned results. `plan-spec.json` has an empty pre-authoring item list by design; it does not conflict with the six planned A claims and two B examples in the inventory. The optional run-local authoring-direction file is absent. No shared plan, published content, engine state, or owner verdict was changed.

The design keeps exact finite unitary reductions separate from a selected time-homogeneous GKSL approximation; excludes initially correlated preparations and unsupported reservoir limits; and treats finite-bath recurrence and jump branches as conditional model results. Those qualifications remain explicit in the postulate, proofs, examples, and physical scopes. The literature's norm-continuous semigroup convention is not imposed on the exact reduced family: its unitary assignment has no continuity assumption. That source result is recorded as an inline distinction in the coverage file.

## Inventory, dependencies, and levels

Two A-page definitions were added before their consumers: `def-nrqmx-finite-channel-families` fixes the semigroup and CP-divisibility predicates without a universal “Markovian” claim; `def-nrqmx-finite-jump-trajectories` defines the finite ordered branches, units, and componentwise Riemann weights. Both definitions have complete interfaces and current supplier records. The planned postulate, three A theorems, and both B examples are retained.

The scoped dependency graph is acyclic. Levels were recomputed from the final item dependencies: the two definitions and postulate are level 0; the three A theorems are level 1; the two B examples are level 2. The in-run suppliers of each item and their exact arguments are recorded in the batch manifest and `coverage.json` source-resolution map. Page `nrqmx-finite-open-dynamics` has the only in-run page prerequisite, batch-50 page `nrqmx-measurement-compatibility`; its current A-item records are owner `ready` with matching dependency hashes. This is authored prerequisite readiness only, not independent proof acceptance. The other two A-page prerequisites are published external pages.

The current full-run batch graph recomputation contains 129 batches and returns batch 51 at level 1 with `requires: ["50"]` and input hash `398315fdae42e03051675ea10cfe80958c6206296c1c5780979f300f871e8418`. The shared `batch-dependency-levels.json` still has its previous input hash, so its strict `check` reports stale scheduling evidence. That shared file is owner-managed and was left untouched. The run-wide item-level check also reports empty inventories in unrelated batches; the scoped 8-item calculation passes with the levels above.

## Prerequisite inspection and mathematical repairs

The current batch-50 A-page carriers were inspected, and `loadStep1Record`/`step1Decision` confirmed all eight current owner-ready hashes. The finite reduction proof also depends on the published `thm-qc-partial-trace-characterization-and-basis-independence`: after diagonalizing the environment state, the proof changes the environment basis in the partial trace. Its actual finite-dimensional statement and complete proof were inspected and added as a direct dependency.

The jump expansion proof now supplies its calculus inputs explicitly. It defines the no-jump and jump superoperators, derives variation of constants entrywise, proves the finite iterated remainder identity, and bounds it using the trace ideal, operator norm, simplex volumes, and a factorial tail. The Riemann integral and endpoint steps cite the exact Darboux, continuous-integrability, Newton–Leibniz, and monomial derivative suppliers. The proof handles `t=0`, `r=0`, positive branch states, nonnegative branch weights, trace preservation, and uniform trace-norm convergence. It does not identify branches with detector records.

The amplitude-damping proof avoids an unstated scalar ODE uniqueness premise: it computes the GKSL generator on the four qubit matrix units and sums the finite-dimensional exponential series, with an explicit published real/complex exponential convention for the population factor. The B jump-law example obtains finite-horizon jump mass from the normalized branch ensemble, then uses the real-exponential limit to establish total mass one for positive rate. It is a conditional ensemble calculation, not an observation.

All direct mathematical suppliers were checked at their current statement, hypotheses, proof status, conventions, and axiom strength. In particular, the partial-trace theorem applies to the finite basis change; the Choi–Kraus and GKSL theorems have the finite-map and finite-matrix hypotheses used here; and the Riemann/FTC suppliers are used only for continuous finite-dimensional component functions. No missing proof, unsupported input, cycle, or unresolved prerequisite remains in this batch.

## Full-text source reading and harvest

The source URLs, exact locators, fetch attempts/stamps, supported items, and per-result dispositions are in `physics-non-fluid-129-2026-10-21-r2-batch-51.coverage.json`. Three independent full-text treatments were read for their complete relevant ranges:

- John Watrous, *The Theory of Quantum Information*, Chapter 2, §2.1.3 (equations 2.29–2.34, printed pp. 67–69) and the complete proof of Theorem 2.22, §2.2.2 (printed pp. 82–84).
- Lin Lin and Nathan Wiebe, *Quantum Algorithms for Scientific Computation*, Chapter 21, §21.1 (equations 21.1–21.5, Example 21.1, complete Theorem 21.2 proof, and Proposition 21.3 proof sketch, printed pp. 307–311).
- Ángel Rivas, Susana Huelga, and Martin Plenio, *Quantum Non-Markovianity: Characterization, Quantification and Detection*, the full review with the relevant introduction, §3.2 Definitions 3.1–3.2, and Theorem 3.1 inspected.

The source harvest records 12 source results plus the eight-item canonical page inventory (20 checked results total). Watrous’s three relevant results are already published. Lin–Wiebe’s generator is inline, the norm-continuity qualification is retained as an inline scope distinction, Example 21.1 is out of scope; Theorem 21.2 and Proposition 21.3 are already published. Rivas et al.’s overview is inline, positive divisibility and the time-dependent generator characterization are out of scope, and CP-divisibility Definition 3.2 is included in the local definition. No selected source retrieval failed or was dropped. `source-fetch-check` verifies all 3/3 full-text fetch stamps.

## Final artifact and check record

The A/B pages, manifest, coverage, proof contracts, cross-batch dependency array, item dependency map, and batch notes are mutually aligned. The cross-batch file contains one verified in-run page edge from the A page to `nrqmx-measurement-compatibility`; the two external prerequisite pages are not in-run batch edges. All eight items have non-owner Step 1 `ready` records with explicit direct dependencies and current hashes. Readiness records attest authored inputs and placement; they are not proof approval.

Scoped checks on the final authored files:

- `content-policy.mjs` manifest-only/authored: 8 items, 0 errors, 0 warnings.
- `proof-contract.mjs --strict`: 8/8 contracts, 0 errors, 0 warnings.
- `coverage-checklist.mjs --require-destination`: 1 A page, 20 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs`: 3/3 source fetch stamps verified, 0 drops.
- `proof-layout.mjs` on all eight items: 18 steps, 0 defects.
- `precheck.mts` on all eight items: 6 checked, 0 failing; the postulate passes its nonproof structure check.
- `depcheck.mjs --items-file`: 8 selected items; prerequisite cycle checks pass over the 687-item/494-page dependency context.
- `rendercheck.mjs` on the eight items and two pages: 10 files, no rendering or frontmatter errors.
- Scoped item dependency-level calculation: 8 items, 0 errors, levels 0/1/2 as listed above.
- `batch-dependency-levels.mjs check` reports a stale stored input hash after the final manifest edit; the owner must refresh the shared scheduling artifact at the join. Its current recomputed batch-51 row remains level 1 and requires batch 50.
- The run-wide item-level check is blocked by empty scaffold inventories in other batches; it reports no defect in this batch's scoped calculation.
