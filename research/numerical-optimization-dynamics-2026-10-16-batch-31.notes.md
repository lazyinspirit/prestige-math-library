# Batch 31 authoring notes — Tau leaping and reaction diffusion model error

## Authority and conflict record

- The binding authority is `research/numerical-optimization-dynamics-2026-10-16-owner-authoring-direction.md`, followed by T17 in `research/plan-numerical-dynamics-track.md` and its incorporated contract. The generated beta-31 assignment and `plan-spec.json` agree on both page IDs, titles, order, category, and the two page requirements: `poisson-and-cox-point-process-models` and `stochastic-reaction-jump-simulation-and-coupling`. The plan-spec T17 `items: []` is a planning placeholder; the authored inventory is in the batch-31 manifest.
- The T17 contract allows either globally extended bounded-smooth hypotheses or a finite stopped model. This batch uses the finite-state/invariant-set branch: exact-chain admissible transitions remain in finite $E$, a Poisson leap that leaves $E$ enters the declared invalid-state branch, and its probability is bounded separately. No result is claimed for unbounded rates, naive extinction handling, or a functional diffusion limit.
- The design prose says to reuse generic MLMC and the canonical `multilevel-monte-carlo` page, while the task and plan-spec page-level `requires` list only the Poisson/Cox and T16 pages. The MLMC corollary directly declares the exact published hierarchy, estimator-MSE, and rate-theorem item IDs and verifies their hypotheses. The assigned page-level `requires` list remains unchanged; this routing difference is recorded for owner reconciliation.
- The assignment and generated beta-31 dependency-order task bind the scheduling input to `ca41fcdd6d4a40fbd61e4921a8bfdd410bd704a05c937a5f709843ed28d2e97d`. The current on-disk `research/numerical-optimization-dynamics-2026-10-16-batch-dependency-levels.json` reports `input_sha256` `22c514fa7759023bc6de92383b0b8c1ea68d3c3e0cb41acf873772f6454acd2b`; its batch-31 row still says level 1 and prerequisite batch 10. This is a scheduling-input hash discrepancy for the owner to reconcile before aggregate scheduling certification. No shared schedule artifact or engine state was edited.

## Inventory and item levels

The A page has 11 items and the B page has 5, below the 100-item page cap. Item levels are computed from actual in-run item dependencies across batches 10 and 31; external published dependencies do not raise an in-run level. The manifest is sorted supplier-first:

- Level 0: `lem-shared-minimum-poisson-count-coupling`.
- Level 1: `alg-explicit-poisson-tau-leaping`, `def-density-scaled-jump-and-chemical-langevin-generators`, `ex-minimum-intensity-coupling-reduces-one-step-variance`.
- Level 2: `lem-poisson-tau-leap-moment-and-covariance-identities`, `ex-chemical-langevin-near-empty-poisson-birth`, `ex-poisson-tau-leap-negative-population-pure-death`.
- Level 3: `thm-minimum-intensity-tau-leap-level-variance`.
- Level 4: `alg-critical-reaction-binomial-guarded-tau-leaping`, `lem-bounded-rate-reaction-generator-dynkin-identity`, `lem-poisson-tau-leap-one-step-weak-defect`.
- Level 5: `thm-density-scaled-chemical-langevin-model-error`, `thm-poisson-tau-leap-weak-order-one-with-exit-bound`, `ex-binomial-guard-prevents-invalid-counts-but-changes-noise`, `ex-stiff-reversible-explicit-leap-mean-amplification`.
- Level 6: `cor-mlmc-complexity-for-poisson-tau-leaping`.

The exact direct `deps` and titles are mirrored from item frontmatter into `research/numerical-optimization-dynamics-2026-10-16-batch-31.pages.json`. The local shared-count lemma is proved before the level-coupling theorem. The weak-defect and stopped Dynkin lemmas explicitly import the finite-state exactness/choice interfaces, so they are level 4; the stopped density and global weak estimates are level 5; the MLMC application is level 6. No dependency cycle was found in the batch-10 plus batch-31 graph.

## Supplier inspection and mathematical checks

- T16's actual bodies for `def-reaction-network-propensity-system-and-generator`, `lem-competing-exponential-race-for-reaction-channels`, `alg-gillespie-direct-method-for-reaction-networks`, and `thm-finite-state-gillespie-and-next-reaction-exactness` were inspected. They specify marked channel transitions (including zero-increment events), the fixed-state exponential race, finite-budget direct simulation, and the finite-state CTMC law under Countable Choice and Dependent Choice with expected count at most $\Lambda T$. The bounded-rate Dynkin proof uses the finite-jump consequence of the exactness theorem. The critical hybrid imports the exactness theorem only for the first-event SSA prefix.
- T16's `alg-minimum-intensity-coupling-for-reaction-networks` is a dominating-thinning event-time path coupling. T17's fixed-step frozen-rate Poisson count coupling is separately proved in `lem-shared-minimum-poisson-count-coupling`; the two couplings are not identified. The level-variance proof states its independent residual counts, half-step conditioning, integer-lattice distance bound, and recurrence explicitly.
- The current published Poisson/Cox bodies for `def-scalar-poisson-count-law`, `lem-poisson-count-law-normalization-and-moments`, `def-poisson-and-cox-point-process`, and `thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law` were inspected. The carriers use the finite-parameter scalar law and factorial moments; the near-empty CLE example uses the finite-intensity point-process theorem for the exact Poisson terminal marginal.
- The current published MLMC bodies for `def-mlmc-hierarchy-and-coupled-corrections`, `lem-mlmc-estimator-moments-and-mse`, and `thm-mlmc-complexity-under-rate-assumptions` were inspected. The application has $\alpha=1$, $\beta=1$, and cost $O(h_\ell^{-1})$; the generic theorem requires $\alpha\ge1/2$, $\beta>0$, and the geometric hierarchy. The base correction has variance at most $\|g\|_\infty^2=O(h_0)$ for fixed $T>0$, and its one-step cost is $O(R)=O(h_0^{-1})$ after adjusting constants.
- The density-scaled comparison assumes the stopped CLE backward solution, its boundary values, and its third spatial derivative bound; these are not derived from the generator Taylor expansion. The proof gives the $V^{-2}$ remainder and adds the jump/diffusion exit terms separately. It makes no time-discretization or path-space-limit claim.
- The examples keep their distinct failure modes explicit: a pure-death leap can overdraw; explicit means can amplify in a stiff reversible model; a CLE Gaussian can have negative support near an empty population; the binomial guard avoids overdraw while changing the count variance. The guarded binomial algorithm has a finite budget and explicit inconclusive statuses, and no Poisson weak-order or MLMC theorem is transferred to it.

## Source reading and retrieval history

Six full-text sources support the A-page coverage: Gillespie (2001), Li (2007), Li's Lecture 21, Anderson–Higham (2012), Anderson–Higham–Sun (2014), and Giles (2008). The papers/notes were inspected in full for the cited sections and proofs; exact URLs, locators, supported items, harvested-result dispositions, and retrieval history are in `research/numerical-optimization-dynamics-2026-10-16-batch-31.coverage.json`. The original Oxford Giles endpoint exhausted the initial attempt plus five recovery retries; the old endpoint is documented as dropped, while a complete Peking-hosted mirror was retrieved and read. The endpoint drop does not drop Giles's mathematical coverage. The stamped source check currently records 6/7 source entries fetch-verified and one documented endpoint drop.

## Live run context

The read-only autopilot status on 2026-10-16 reported the run `running`, with Step 1 scaffold at 25/107 pairs and a separate owner-repair/recertification blocker in `research/numerical-optimization-dynamics-2026-10-16-step1-blockers.json`; no work was in flight. Batch 31 continued independently under the assignment. No autopilot state, shared plan, verdict, or other pair's files were edited.

## Scoped checks and readiness

Final results after the last item edit:

- Batch-10 plus batch-31 item-dependency calculation: 32 items, zero errors or cycles, maximum level 6. Batch-31 `manifest-deps`: 16 items, zero missing dependency arrays or errors. Batch-31 has 16 items across 2 pages.
- `author-check-31.json`: pass. Its precheck, rendercheck, content-policy and strict proof-contract stages each exited 0. Explicit `proof-layout` pass: 16 items, 40 steps, zero defects. A separate strict proof-contract run passes 16/16 with zero warnings.
- Citation-fidelity checked 66 source quotes across the 16 contracts: zero missing quotes and zero widening candidates.
- Focused `depcheck`: 16 assigned items; 1,062 closure items and 212 pages checked, zero errors or warnings. Focused `fwdcheck`: zero errors or warnings. Focused `extcheck`: zero recorded-not-proved or external-reference defects.
- Coverage checklist: one A page, 40 harvested results, zero errors or warnings. `source-fetch-check --stamp`: 6/7 source records fetch-verified; the seventh is the documented old Giles endpoint drop, and all 7/7 records are resolved. The complete mirror carries the source coverage.
- The batch-31 cross-batch input uses the current review-row schema and records 19 verified edges: the T16 page prerequisite and 18 direct T16 item dependencies. A focused graph comparison found 19/19 expected edges with no extras, and every supplied excerpt was found verbatim in its current supplier body. Each row states the matched consumer hypothesis and the author-side/no-approval limitation.
- `step1-decisions.mjs record` marked all 16 items `ready` with their direct examined dependency IDs; the focused readiness check reports 16/16 closed and zero work rows. These are authoring records, not independent proof approval.
- The required run-wide dependency-level check is still nonzero outside batch 31: it reports 116 empty scaffold inventories and 17 item-level label mismatches, with no cycles and no T17-related errors. Examples of the other mismatches are `def-explicit-runge-kutta-tableau-and-stage-map` and `alg-rkc1-chebyshev`; those foreign batches were left unchanged.
- The dispatch's current scheduling input hash `ca41fcdd…d2e97d` differs from the on-disk dependency-level artifact's `input_sha256` `22c514fa…acd2b`; the batch-31 row itself remains level 1 with prerequisite batch 10. The owner should reconcile this before aggregate scheduling certification.

All assigned carriers remain drafts. No other pair, published content, shared plan, live engine state or verdict was edited.
