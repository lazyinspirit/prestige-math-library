# Batch 36 authoring notes — Linear multistep methods and Dahlquist equivalence

Run `numerical-optimization-dynamics-2026-10-16`, batch `36`, role `beta`.

## Controlling design and conflicts

- The assigned legacy location `research/plan-numerical-analysis-track.md` §NA-16 (L228) describes the constant-step Dahlquist scope and examples only. It predates the repaired combined plan and is incomplete for this run.
- The controlling design is `research/plan-numerical-dynamics-track.md` §NA-16 (L457) together with its incorporated mathematical-contract appendix (L1317–1323). This is the route named by the owner-authoring direction and by the matching `research/plan-spec.json` record (`scaffold: research/plan-numerical-dynamics-track.md`). The plan-spec entry retains the approved NA-16 amendment and the same page IDs and page requirements; it does not create a conflicting mathematical scope.
- The binding amendment adds variable-step BDF2 from quadratic interpolation, a separate nonuniform-grid convergence proof with lower and strict upper ratio bounds and accurate starts, actual-node Adams weights, and one-pass PECE. It explicitly forbids importing constant-step root-condition conclusions into variable grids. All four additions were retained and proved locally; no P-NUM-ODE theorem or result was used as a prerequisite.
- The declared `stationary-iterations-and-relaxation` page remains a required page-level context from batch 18. Its actual draft body and batch-18 evidence were inspected; no batch-36 logical claim uses it. The other declared page requirements were checked against their actual supplier items and are recorded in `batch-36.cross-batch-dependencies.json`.

## Inventory, dependencies, and item levels

Item levels below are recomputed from in-run item dependencies only. Dependencies outside batch 36 do not raise an item's level. The complete `deps` arrays, statements, source records, and per-item labels are in `batch-36.pages.json`.

| Level | Item | In-run suppliers |
|---:|---|---|
| 0 | `def-linear-multistep-method-consistency-order-and-root-condition` | — |
| 0 | `lem-variable-step-adams-lagrange-weights` | — |
| 1 | `alg-adams-pece-one-correction` | `def-linear-multistep-method-consistency-order-and-root-condition`; `lem-variable-step-adams-lagrange-weights` |
| 1 | `lem-companion-powers-bounded-under-root-condition` | `def-linear-multistep-method-consistency-order-and-root-condition` |
| 1 | `lem-linear-multistep-order-conditions-from-taylor` | `def-linear-multistep-method-consistency-order-and-root-condition` |
| 1 | `lem-variable-step-bdf2-interpolation-and-local-defect` | `def-linear-multistep-method-consistency-order-and-root-condition` |
| 2 | `alg-variable-step-bdf2-with-selected-implicit-branch` | `def-linear-multistep-method-consistency-order-and-root-condition`; `lem-variable-step-bdf2-interpolation-and-local-defect` |
| 2 | `thm-dahlquist-equivalence-for-linear-multistep-methods` | `def-linear-multistep-method-consistency-order-and-root-condition`; `lem-linear-multistep-order-conditions-from-taylor`; `lem-companion-powers-bounded-under-root-condition` |
| 2 | `cex-repeated-unit-root-causes-linear-parasitic-growth` | `def-linear-multistep-method-consistency-order-and-root-condition`; `lem-linear-multistep-order-conditions-from-taylor` |
| 2 | `ex-one-pass-pece-differs-from-implicit-adams-stability` | `alg-adams-pece-one-correction`; `lem-variable-step-adams-lagrange-weights` |
| 2 | `ex-repeated-interior-root-preserves-bounded-powers` | `def-linear-multistep-method-consistency-order-and-root-condition`; `lem-companion-powers-bounded-under-root-condition`; `lem-linear-multistep-order-conditions-from-taylor` |
| 2 | `ex-simple-unit-circle-roots-give-bounded-oscillation` | `def-linear-multistep-method-consistency-order-and-root-condition`; `lem-linear-multistep-order-conditions-from-taylor`; `lem-companion-powers-bounded-under-root-condition` |
| 3 | `lem-variable-step-bdf2-increment-ratio-recurrence` | `alg-variable-step-bdf2-with-selected-implicit-branch`; `lem-variable-step-bdf2-interpolation-and-local-defect` |
| 3 | `ex-uniform-step-bdf2-satisfies-dahlquist-conditions` | `def-linear-multistep-method-consistency-order-and-root-condition`; `lem-linear-multistep-order-conditions-from-taylor`; `alg-variable-step-bdf2-with-selected-implicit-branch`; `thm-dahlquist-equivalence-for-linear-multistep-methods` |
| 4 | `thm-variable-step-bdf2-order-two-under-ratio-bound` | `alg-variable-step-bdf2-with-selected-implicit-branch`; `lem-variable-step-bdf2-interpolation-and-local-defect`; `lem-variable-step-bdf2-increment-ratio-recurrence` |
| 4 | `cex-unrestricted-variable-step-ratios-amplify-bdf2-starter-error` | `alg-variable-step-bdf2-with-selected-implicit-branch`; `lem-variable-step-bdf2-increment-ratio-recurrence` |

The assigned batch-level dependency remains level 2 with prerequisite batch 18. This is distinct from the item levels above. The dispatch supplied scheduling input `cd9fe01da8dcbe3ff6a540a1485d702ae31df66e19a4a5ace4f8444eb6c687a3`; the shared dependency-level artifact currently embeds `ae8957b82a8ad2c9895cb3092af32195034be1b16610dd6fc6881d1df25039e0` while still listing batch 36 at level 2 with `requires: ["18"]`. The shared artifact was left untouched for owner/engine reconciliation.

An earlier filesystem-based run status recomputation showed the run at `1-scaffold` with its existing owner-held blocker. This batch did not change that blocker or any engine state.

## Supplier checks

- `def-first-order-ode-initial-value-problem-and-solution`: its open time-state domain and solution convention support the local IVP notation. No existence or uniqueness theorem is imported.
- `thm-multivariable-taylor-formula-with-lagrange-remainder`: its open-convex-domain and smoothness hypotheses support the stated one-dimensional Taylor expansions on the compact node interval.
- Complex supplier items `def-complex-numbers-and-arithmetic`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-complex-exponential-addition-and-real-extension`, and `thm-quarter-turn-values-and-shift-formulas` support only the exact unit-root identities in the simple-unit-circle example.
- The local companion proof also uses the inspected FTA, algebraic-closure, Jordan-form, block-characteristic-polynomial, and companion-recurrence items named in its `deps`. Their statements and proof interfaces were checked; the proof supplies the repeated-root power and parasitic-mode arguments locally.
- No prerequisite is unavailable or unresolved. The page-level stationary-iteration context is not treated as an item supplier.

## Source reading and harvest

Five complete sources are recorded with URLs, locators, supported items, full-text scopes, harvested-result dispositions, and retrieval history in `batch-36.source-coverage.json` and mirrored page coverage. Read ranges and limits:

- Hairer–Wanner course notes, complete §§III.6–III.8, PDF pp. 15–19 / printed pp. 71–75: constant-step order, root condition, and Dahlquist argument. The source's incomplete repeated-root treatment is completed locally.
- Driscoll–Braun, complete §6.6 and complete §6.8 author-source sections: recurrence/order definitions, Adams interpolation, zero-stability, and Dahlquist scope. The source's omitted repeated-root proof and theorem statement are not substituted for local proofs.
- Hairer–Nørsett–Wanner, complete §III.5, printed pp. 397–409 / PDF pp. 408–420, and the PECE implementation passage §III.7, printed pp. 423–424 / PDF pp. 434–435: actual-node Adams, variable-step BDF2, ratio stability, convergence setup, and predictor-evaluate-correct-evaluate order.
- Söderlind–Wang–Zhang, complete BIT §4, PDF pp. 12–13, equations (4.1)–(4.6): the BDF2 increment recurrence and sharp individual-ratio threshold. The nonuniform-grid convergence proof remains local.

`source-fetch-check --stamp` returned 5/5 fetch-verified and newly stamped, with zero documented drops. No source retrieval failed, so there are no `source_resolution` failure records. The harvest contains 45 results; every result has an explicit disposition and item-level support. `coverage-checklist` reports zero errors and warnings.

## Scope and proof decisions

- The fixed-step Dahlquist theorem uses companion powers and separate consistency/root-condition necessity tests; the zero-RHS parasitic modes do not rely on an implicit branch remaining inside the sufficiency tube.
- Variable-step BDF2 states both ratio bounds, uses accurate (O(H^2)) starts, proves the forced increment estimate, and requires the selected root in a compact state set. The unrestricted-ratio counterexample uses a concrete mesh family and branch balls containing every computed value.
- Adams coefficients use the actual nodes. PECE explicitly evaluates the predicted endpoint, corrects once, evaluates the corrected endpoint for the next step, and makes no inherited convergence/stability claim.
- No additional axioms or choice principles are used. The A page has 10 items and the B page 6, below the 100-item cap.

## Scoped validation results

- Batch-local `dependencyLevels` recomputation: 16 items, maximum level 4, zero cycles/inventory errors. Levels match the manifest.
- `proof-layout`: 15 proof-bearing items, 64 steps, 0 defects.
- `precheck`: 15/15 pass, 0 failing.
- `proof-contract --strict`: 16/16 items checked, 0 errors, 0 warnings; 40 exact supplier excerpts and 64 mapped derivation steps are recorded.
- `rendercheck`: 18/18 files (16 items and 2 pages), 0 errors, 0 warnings.
- Focused `depcheck`: 0 errors, 0 warnings; 725-item prerequisite closure and 81-page cycle context checked.
- `content-policy`: 16/16 items, 0 errors, 0 warnings.
- `manifest-deps`: 16 items, 0 missing dependency arrays, 0 errors.
- `coverage-checklist`: 45 harvested results, 0 errors, 0 warnings.
- `source-fetch-check --stamp`: 5/5 sources fetch-verified, 0 documented drops; the final confirming run made 0 new stamps.
- `step1-decisions record`: 16/16 items marked `ready` with their full examined dependency arrays and evidence; no prior escalation was overwritten and `--owner` was not used.
- No unresolved mathematical prerequisite, retrieval failure, or pair-specific owner escalation remains. No published content, shared plan, shared dependency-level artifact, verdict, or engine state was edited.
