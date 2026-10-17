# Batch 34 authoring notes — Gaussian and gamma product tools

Run: physics-remaining-80-2026-10-17. Owner: beta. Scope: only csm-exact-models and csm-exact-models-examples, all draft.

## Plan and design reconciliation

The current plan-spec entries match the updated track page IDs, titles, category, library, pair order (503/504), companions, and required pages. Their item arrays were intentionally empty before authoring. The 2026-10-17 owner direction supersedes the original ten-item reservation: the current assigned inventory has eleven A-page items, including lem-csm-examples-smooth-flow-jacobian, and five B examples.

The old Fluid Dynamics F01 prerequisite is not used. The owner amendment replaces it with the same-pair local mathematical M3J result and preserves the jointly C2 diffeomorphic-family hypotheses, initial identity, C1 velocity, divergence identity, divergence-free entropy case, periodic translation-torus convention, and the explicit nonexistence/nonergodicity caveats. No excluded Fluid Dynamics page or carrier is used.

Two dependency-map details were reconciled against actual arguments and current carriers:

- The research paired inventory listed M18 as a direct dependency of lem-csm-examples-gamma-gaussian-tools, but the complete M0 argument uses the controlled Gaussian-tail/differentiation result M17 only; M18 is used by the Ising-ring consumer. The authored M0 deps therefore omit unused M18. The local proof now derives the Gaussian normalization from the finite-positive, square-to-plane, and polar-coordinate suppliers; its previous direct thm-gaussian-integral edge was redundant and is removed. These source-inventory differences are recorded here; the shared research inventory is unchanged.
- The old ideal-gas contract named the nonproduction RP-G1 research interface. The current published def-rpm-mechanical-momentum-and-observer-energy carrier was read directly, along with its null-sector postulate and rest-space projection lemma. The item uses those exact current interfaces; the null energy relation E=c|p| is derived from the null condition and projection identity. The old research contract is not treated as a proved carrier.

## Inventory and dependency levels

The assigned inventory is the exact eleven A items and five B examples in the pair manifest and current CSM paired inventory. The batch graph records batch 34 at level 1, requiring batch 26 at level 0. Item levels use only in-run logical item suppliers:

| Item layer | dependency_level | Basis |
|---|---:|---|
| M0 Gaussian/gamma and M3J flow-Jacobian lemmas | 0 | No in-run item suppliers |
| M1 quadratic covariance, M2 spherical marginal, M3 fine entropy | 1 | Each uses a level-0 same-pair result |
| P0 preparation postulate | 3 | Uses M0 (0) and planned batch-26 post-csm-counting-and-physical-observables (2); its batch-26 chain is phase-space reference (0), statistical-state definition (1), counting postulate (2) |
| Harmonic, ideal-gas, Ising-ring and Tonks theorems | 4 | Each consumes P0 (3) and its same-pair mathematical supplier(s); Ising also has missing out-of-run M18 research input |
| Spherical-shell theorem | 5 | Consumes its level-1 marginal result and level-4 ideal-gas theorem, as well as P0 |
| Four B examples through Tonks | 5 | Each consumes its level-4 A theorem |
| Spherical-shell B example | 6 | Consumes the level-5 shell theorem |

The full-run batch graph is acyclic; no same-pair item cycle was found.

## Supplier review and unresolved inputs

- Published mathematical imports read in full at their actual Statements/Definitions and Proofs include the Gaussian integral chain, compact-Jordan change of variables, matrix-curve determinant derivative, Clairaut-Schwarz, total chain rule, trace cyclicity, mean value theorem, and intermediate value theorem. Their current local snapshots are listed in research/math-imports.json and remain read-only.
- The same-batch M3J proof uses the exact six published mathematical interfaces listed in its Facts and deps. It proves the flow identity locally; it does not assume ODE existence, Hamiltonian structure, or a fluid postulate.
- The batch-26 page manifest lists `post-csm-counting-and-physical-observables`, and its draft carrier file is present, but it has no current Step 1 readiness record. I inspected its exact Postulate and two declared dependencies. It supplies the operational species and factorial convention and names the positive action scale `a0`, but its formula describes “dimensionless canonical coordinates” while assigning `a0` units J s; it does not state the physical-coordinate SI normalization or identify `a0` with the downstream `h0`. This is an interface mismatch against the exact planned batch-26 use (operational species resolution, fixed positive action scale, factorial convention, and SI identifications). The batch-34 P0 and physical consumers remain complete conditional drafts; this actual supplier has not been used to certify the SI normalization, so those items remain escalated pending batch-26 reconciliation.
- The A-page carrier `library/classical-statistical-mechanics/csm-phase-ensembles.md` and its 20 listed item IDs match the batch-26 manifest. All six declared earlier page prerequisites now have library carriers. I inspected the page scope and relevant phase-space/reference and statistical-state definitions; the page edge is verified for carrier and placement. This does not approve its draft items. The separately reviewed counting postulate still has an unresolved action-scale/SI interface, so P0 remains escalated.
- The local M17 research proof is complete for the stated bounded-box, positive-mass, bounded-continuous-potential, compact-positive-beta Gaussian integral, including uniform polynomial-Gaussian tail and differentiation bounds. Its formal production item carrier is absent. M0 states and uses exactly that conditional interface for parameter differentiation; M0 and its transitive consumers remain escalated.
- The local M18 research proof is complete for the finite periodic nearest-neighbor Ising chain at finite positive beta and finite real coupling/field, with the transfer matrix, exact eigenvalues, strict eigenvalue gap, and compact-parameter derivative control. Its production item carrier is absent. The Ising theorem uses only this precise interface and the local finite-ring correlation calculation; it does not promote a general 1D no-transition claim. The theorem remains escalated.
- The current published RPM supplier defines a nonzero future-null mechanical momentum and observer energy; the inspected projection lemma proves the required positive rest metric and norm identity. This input is available. No empirical statement is inferred from it.

## Source research and retrieval

The A page has independent full-text treatments from David Tong's 191-page Statistical Physics lecture notes and Mehran Kardar's MIT 8.333 Lectures 13–14. Warwick's full 51-page notes independently treat the Tonks gas; Taylor's full 462-page analysis text treats the Gaussian integral and compact substitutions; NIST DLMF §5.2 supplies the gamma integral convention; Axler's full linear-algebra text supplies trace cyclicity.

research/physics-remaining-80-2026-10-17-batch-34.coverage.json records all seven harvested source records, locators, supported item IDs, and included, inline, or justified out-of-scope dispositions. node tools/physics-support/source-fetch-check.mjs --coverage research/physics-remaining-80-2026-10-17-batch-34.coverage.json --stamp returned 7/7 full-text sources verified, 7 newly stamped, zero failures. No retrieval recovery or source-resolution drop/escalation was needed. The inherited Tong source record is read only at its recorded sections; no whole-PDF reading claim is made.

## Same-run cross-batch dependencies

research/physics-remaining-80-2026-10-17-batch-34.cross-batch-dependencies.json records one VERIFIED page edge and one OPEN item edge. The csm-phase-ensembles page and all six earlier page carriers are present; the counting postulate is listed in its batch-26 manifest, but its action-scale/coordinate wording does not match the planned SI use and it has no readiness record. The conditional consumer arguments are complete and the remaining item-level mismatch is explicit.

## Final scoped checks

- The assigned item dependency closure was recomputed from current carrier metadata, including batch-26 manifest item objects: all 16 recorded levels match and no cycle exists. Batch 34 remains at batch level 1 over batch 26 level 0.
- The run-wide `item-dependency-levels.mjs check` reports 116 errors in other batches, including unfinished scaffold inventories and unrelated stale item labels; it reports no batch-34 item-level mismatch. The scoped calculation above is the relevant result for this assignment.
- `batch-dependency-levels.mjs check --run physics-remaining-80-2026-10-17` reports a stale hash after current page-manifest metadata was synchronized. A read-only recomputation still gives batch 26 level 0 and batch 34 level 1; the shared level artifact is left for owner refresh after writers drain.
- Scoped precheck: 16 items checked, 0 failing. Proof contracts: 16/16 checked, 0 errors, 0 warnings. Explicit proof layout: 16 items, 72 steps, 0 defects. Scoped renderer: all 18 item/page files passed KaTeX and frontmatter checks.
- `source-fetch-check` check mode: 7/7 source records verified. The earlier required `--stamp` pass recorded 7 newly stamped full-text sources. No retrieval failure or source-resolution drop/escalation occurred.
- Scoped dependency check: 2 unresolved dependencies, exactly the missing production carriers `research-thermo-M17-controlled-continuous-integral` and `research-thermo-M18-1D-Ising-transfer`; no other scoped dependency or cycle errors. These are recorded as conditional inputs, not supplied results.

## Final readiness disposition

The Step 1 CLI recorded 16 assigned items. Ready: `lem-csm-examples-smooth-flow-jacobian` and `thm-csm-examples-flow-fine-entropy`. Escalated: `lem-csm-examples-gamma-gaussian-tools`, `thm-csm-examples-quadratic-covariance`, `thm-csm-examples-spherical-marginal`, `post-csm-examples-ensemble-preparations`, `pthm-csm-harmonic-ensemble`, `pthm-csm-ideal-gas-ensemble`, `pthm-csm-ising-ring-correlation`, `pthm-csm-tonks-rod-ensemble`, `pthm-csm-spherical-shell-gas`, `ex-csm-harmonic-ensemble`, `ex-csm-ideal-gas-ensemble`, `ex-csm-ising-ring-correlation`, `ex-csm-tonks-rod-ensemble`, and `ex-csm-spherical-shell-gas`. Each escalation names its exact direct or transitive blocker in the corresponding `research/physics-remaining-80-2026-10-17-step1-<item-id>.json` record.

The run-wide Step 1 check sees 318 items, 84 ready, and remains open. This batch’s two ready records are current; its 14 escalations remain open pending the M17/M18 carriers and batch-26 action-scale/SI reconciliation. Step 1 completion is not independent proof approval.
