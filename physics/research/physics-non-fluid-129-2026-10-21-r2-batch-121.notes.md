# Batch 121 — Hadamard subtraction and semiclassical model contracts

## Scope and plan comparison

The assigned design at research/plan-thermodynamics-and-general-relativity-frontier-expansion-track.md L281 and the current research/plan-spec.json agree on the A/B page IDs, titles, order, category, library and page requirements:

- A tgrx-renormalized-stress requires tgrx-hawking-approximation and gr-fx12-covariant-phase-space.
- B tgrx-renormalized-stress-examples requires the A page and tgr-phs04.

The plan's empty item arrays are unpopulated scaffolds; the detailed design inventory specifies three A items and one B example. Following the instruction to create missing definitions before use, an additional A definition, def-tgrx-curvature-squared-variation-tensors, now supplies the curvature-variation tensors before the postulate. No page-level conflict was found. The Hadamard contract adds a direct mathematical edge to def-qftx-wavefront-hadamard for its exact microlocal definition. The new variation definition uses def-gr-curvature-tensor-and-derived-tensors and def-gr-fx-covariant-field-variations; the postulate depends on the new local definition and the Einstein-tensor definition.

No physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md exists.

## Inventory and dependency levels

Authored item dependencies and computed in-run levels:

| Item | Direct dependencies | Level |
|---|---|---:|
| def-tgrx-curvature-squared-variation-tensors | GR curvature definition, GR field-variation definition | 1 |
| def-tgrx-hadamard-stress-contract | def-qftx-wavefront-hadamard, post-tgrx-free-collapse-scattering | 4 |
| post-tgrx-semiclassical-equation | contract definition, collapse postulate, GR curvature definition, local curvature-variation definition | 5 |
| pthm-tgrx-state-difference-stress | contract definition | 5 |
| ex-tgrx-quasistatic-is-not-backreaction | semiclassical postulate, lem-tgr-emitter-quasistatic-bounds, imported def-countable-choice | 6 |

The current scoped item-level recomputation gives exactly levels 1, 4, 5, 5 and 6 above, with no assigned-item errors. The full item checker reports 31 unrelated empty scaffold inventories in other batches and no errors for these five items.

The current pure batch-level recomputation gives direct supplier batches 40, 58, and 120 at levels 0, 0, and 1, so batch 121 computes to level 2. Batch 58 is the direct item-level Hadamard-definition supplier. The stored run-wide snapshot is stale: its batch-121 row lists only 40 and 120. The `check` command reports this stale snapshot after the new batch-58 edge; the shared snapshot was left untouched for the owner to refresh.

tgr-phs04, def-gr-curvature-tensor-and-derived-tensors, and lem-tgr-emitter-quasistatic-bounds are external context, not suppliers owned by this run. Their statements and relevant proofs were inspected. In particular, the published curvature definition's full tensoriality and algebraic-symmetry proofs were read; the ODE lemma's complete proof was read and its bound remains confined to the ideal scalar ODE.

## Supplier readiness and exact unresolved input

Current readiness was checked with loadStep1Record and step1Decision:

- def-gr-fx-covariant-field-variations is current and ready; its exact finite-dimensional smooth-field-family definition was inspected.
- def-qftx-wavefront-hadamard has a historical ready row, but current step1Decision returns “Item or dependency changed; record current readiness”. Its exact current mathematical definition exists and was inspected. This is a fresh stale-readiness gap, not a draft-status or proof-approval objection.
- post-tgrx-free-collapse-scattering has a current escalated Step 1 row explaining that the Hadamard premise required qftx-microlocal-products beyond the plan. The current plan and batch-120 manifest now both include that page, but no refreshed supplier readiness record exists. The carrier itself is present and its postulate statement and exact QFT definition were inspected; the postulate has no deductive proof obligation.

The B example also carries the exact imported mathematical assumption def-countable-choice from its ODE lemma; its definition was read and left unchanged. The old ODE supplies only its stationary metric family and scalar mass bookkeeping, not a coupled metric/state solution or residual estimate. The contract and its consumers are fully authored conditionally. Final local Step 1 records mark def-tgrx-curvature-squared-variation-tensors ready; def-tgrx-hadamard-stress-contract, post-tgrx-semiclassical-equation, pthm-tgrx-state-difference-stress, and ex-tgrx-quasistatic-is-not-backreaction are escalated until the owner refreshes the stale Hadamard-definition readiness and resolves or replaces the supplier's old escalation record. The example proof uses the ODE lemma's proved scalar formula and bounds only; it does not treat the lemma's final no-error-bound scope sentence as a proved theorem. The example escalation was retained unchanged after this proof clarification because its supplier blocker is unchanged; no escalation was overwritten. No supplier is represented as proved by its label or by a successful format check.

## Source reading and disposition

Three independent authoritative full texts were inspected for the A page, including two complete lecture-note sets. All source locators, supported items, and per-result dispositions are recorded in physics-non-fluid-129-2026-10-21-r2-batch-121.coverage.json.

- Hollands–Wald, https://arxiv.org/pdf/1401.2026: complete review retrieved; §2, PDF pp. 13–15, and §3.1, PDF pp. 38–45. Supports the state-independent Hadamard singular part, smooth remainder, local covariant stress observables, and curvature ambiguity. Its complete prior fetch stamp was reused.
- Jacobson, https://arxiv.org/pdf/gr-qc/0308048: complete 59-page lecture-note PDF; §4.5, PDF pp. 16–17, equations (4.29)–(4.30). Supports the coincidence-limit divergence, finite difference for common short-distance behavior, and local conserved curvature ambiguity. The notes explicitly give only brief renormalization comments; the proofs here are local. Its complete prior fetch stamp was reused.
- Ford, https://arxiv.org/pdf/gr-qc/9707062: complete 44-page lecture-note PDF; §3, PDF pp. 19–21, equations (3.6)–(3.12), and §5.1, PDF pp. 32–33. Supports the Hadamard input, curvature-squared variations, semiclassical equation structure and limitations. Ford uses signature (+---) and a different curvature convention; no component signs or formulas were copied.

The theorem proof is independent of the literature statements: it subtracts the two definitions under one shared prescription and uses only the contract's smooth-remainder hypothesis. The B example proves the ODE/field-equation interface limitation by comparing the exact scalar inputs in the proved ODE inequality with the independent metric/state inputs in the residual definition; its source record is context only. No retrieval failed, so no source_resolution failure object or alternative proof was required.

## Proof and scope dispositions

def-tgrx-hadamard-stress-contract treats the field algebra, parametrix, finite-order operator, scale and conserving local correction as supplied inputs. It does not claim existence of the prescription. post-tgrx-semiclassical-equation specifies the domain and both Green identities for its supplied retarded operator; it uses the locally defined curvature variation tensors and labels their couplings alpha_ct and beta_ct to distinguish them from the old ODE coefficient alpha. It asserts no solution existence, uniqueness, stability, order reduction, or physical applicability. pthm-tgrx-state-difference-stress proves cancellation for two states using one common prescription, not absolute renormalization-scheme independence. ex-tgrx-quasistatic-is-not-backreaction carries AC_omega from the exact ODE lemma, defines its residual on a candidate metric/state pair not presumed to solve the adopted equation, and shows that the scalar diagnostic supplies no residual estimate; it does not claim a large residual or instability.

Cross-batch interface rows are in physics-non-fluid-129-2026-10-21-r2-batch-121.cross-batch-dependencies.json. verified records only the scoped interface check. The stale/escalated Hadamard prerequisite rows remain open.

## Checks

Final scoped checks after the last item edits:

- `source-fetch-check --stamp`: 4/4 sources fetch-verified, 0 newly stamped; 4/4 resolved, 0 documented drops.
- `precheck.mts` on the five items: 3 proof-bearing/nonproof-structure items checked, 0 failing. The two definitions are not proof-structure items.
- Strict `proof-contract.mjs`: 0 errors, 0 warnings, 5/5 items checked.
- `content-policy.mjs` on the batch manifest: 5 items, 0 errors, 0 warnings.
- A/B page-carrier `requires` fields match their manifest requirements exactly.
- Focused `depcheck.mjs`: five items and both pages, 0 errors, 0 warnings.
- `rendercheck.mjs`: 7 carriers checked, 0 errors, 0 warnings.
- `proof-layout.mjs` on the five changed items: 5 items, 7 steps, 0 defects.
- All four batch JSON files parse successfully.
- The batch cross-dependency array matches all six declared in-run cross-batch edges, with no missing, extra, or malformed rows. A run-wide frontier-ledger collection currently aborts on an unrelated invalid review/consumer ownership row in `physics-non-fluid-129-2026-10-21-r2-batch-105.cross-batch-dependencies.json`; batch 105 was left untouched.
- The full item-level checker finds only the 31 unrelated empty scaffold inventories; the five assigned levels compute to 1, 4, 5, 5, and 6.
- The full batch-level `check` reports a stale shared snapshot. Current recomputation yields batch 121 at level 2 with `requires: [40, 58, 120]`; the stored row omits 58. No run-wide snapshot was changed.
