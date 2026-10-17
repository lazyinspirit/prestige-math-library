# Batch 7 authoring notes — One-step ODE consistency and local error

## Authority and design reconciliation

- The run-local `research/numerical-optimization-dynamics-2026-10-16-owner-authoring-direction.md` controls this dispatch. It directs authors to the repaired category plans and their exact mathematical-contract appendices.
- The controlling pair section is `research/plan-numerical-dynamics-track.md`, P-NUM-ODE-01 at lines 49–73, with the binding local ODE contract at line 1307. It owns the one-step map/local-defect/order/stability definitions, the Euler local defect and step-stability proof, the scalar linear example, and a nonsmooth local-order-loss example. It explicitly leaves global error propagation to P-NUM-ODE-02 and method-specific Runge–Kutta conditions to the later RK pair.
- The generated task's `research/plan-machine-learning-track.md` line 513 and `research/plan-numerical-analysis-prerequisites.md` line 5 repeat the earlier generic intake proposal. That proposal names Chen/Papamakarios application discussions and a generic Taylor-remainder route. The current category plan and owner direction take precedence: they specify Hairer–Nørsett–Wanner as the matching numerical-ODE treatment and give the sharper componentwise time-along-flow remainder. We followed that route, so the A theorem does not depend on the Taylor item; the scalar Euler example does use the exact published Taylor supplier.
- The current `research/plan-spec.json` row agrees on page IDs, category, order 2298, and the three page prerequisites. Its empty `items` array is the pre-authoring placeholder now filled by the assigned manifest. Its copied description retains the older source/proof summary; the binding P-NUM-ODE-01 contract in the category plan resolves that conflict. The page requirement list remains unchanged.
- The A page retains `mixed-partials-taylor-and-extrema`, `picard-lindelof-and-first-order-odes`, and `the-total-derivative` as declared page context. The theorem's actual logical suppliers are listed in its item `deps`; it uses a locally complete integral remainder instead of citing the Taylor theorem for the C1 claim. No global-error, log-density, RK tableau-order, or adaptive-controller claim was added.

## Inventory and dependencies

The assigned manifest records five items: one A definition, one A intermediate lemma, one A theorem, and two B examples. Item levels are 0 for the definition and time-along-solution lemma, 1 for the theorem and midpoint example, and 2 for the Euler example. The run's batch-level scheduling record remains batch 7 at level 0 with no prerequisite batches.

- `def-one-step-ode-method-local-defect-order-and-stability` depends on the published first-order IVP/solution definition and Euclidean norm definition.
- `lem-time-along-ode-solution-derivative-bound` isolates the componentwise derivative of `f_i(s,y(s))`; it depends on the actual IVP solution definition, continuous-partials/Jacobian theorem, continuity consequence, and total chain rule.
- `thm-forward-euler-one-step-consistency-and-local-error` depends on the local definition and that local lemma, the maximal-IVP and Volterra interfaces, continuous-partials/continuity, the convex-fiber mean-value estimate, the scalar mean value theorem, and the Euclidean norm definition. Its in-run suppliers are the A definition and intermediate lemma.
- `ex-forward-euler-local-error-for-scalar-linear-ode` depends on the A definition and theorem and the published multivariable Taylor remainder used at order one for the scalar exponential.
- `ex-explicit-midpoint-local-order-drop-at-nonsmooth-time-kink` depends on the A definition and verifies the counterexample directly.

The supplier bodies were read. The maximal ODE theorem requires a continuous state-locally-Lipschitz field; continuous first partials give continuity and, by the supplied mean-value inequality on each open convex state fiber, the needed local state-Lipschitz property. The theorem assumes a solution exists through the fixed interval and uses the checked hypotheses to establish uniqueness. The Volterra supplier gives the integral identity from every starting time on the solution interval. The local lemma applies the total chain rule to the C1 path `s ↦ (s,y(s))`. All cited arguments are choice-free; no choice axiom is added.

The theorem's Taylor-item supplier from the mixed-partials page was inspected but is not a logical dependency: the local componentwise bound is proved by the local chain-rule lemma, the IVP integral identity, and the scalar mean value theorem. The scalar example names the exact Taylor item in its own `deps`.

There are no logical dependencies on another in-run batch. `research/numerical-optimization-dynamics-2026-10-16-batch-7.cross-batch-dependencies.json` is therefore `[]`. The future pages named as coverage destinations are deferred source results, not theorem prerequisites.

## Source reading and coverage

Three independent full-text treatments were read for the A page, including a book chapter and complete lecture/textbook sections. URLs, precise locators, harvested result dispositions, and fetch stamps are in `research/numerical-optimization-dynamics-2026-10-16-batch-7.coverage.json` and `.source-coverage.json`.

- Hairer, Nørsett, and Wanner, *Solving Ordinary Differential Equations I*, Chapter III §§III.2–III.5, PDF pages 4–11 / printed pages 60–67. The first browser-open attempt timed out; after searching alternatives, direct retrieval of the same official source returned HTTP 200 and the complete 2,199,218-byte PDF. The complete planned pages were read from rendered page images; text extraction lost some glyphs, so it was not treated as reading evidence.
- MIT OCW 18.330, Chapter 5, §5.2.1–§5.2.2, PDF pages 4–8. The complete relevant sections were read; the one-step local-error convention and the distinct absolute-linear-stability discussion were recorded separately.
- Driscoll and Braun, *Fundamentals of Numerical Computation*, §6.2.1–§6.2.2. The complete local-error definition and adjacent global-error proof were read. Its truncation-error convention is scaled by `h` and has opposite defect sign; our definition uses the unscaled method-minus-exact defect.

The full Hairer locator crosses into the later global-error, adaptive, and multistep pair scopes. All harvested results have dispositions and deferred rows name their planned destination. The required coverage check passed with zero errors and one advisory low-yield warning: 8/28 results are scaffolded on this pair because the rest belong to the named later pairs or are explicitly illustrative/out of scope. This warning is retained for Alpha's later review, not converted into mathematical acceptance. The source fetch stamp succeeded for all 3/3 sources.

## Current authoring state

The A/B item and page carriers remain drafts. Final scoped validations and per-item Step 1 readiness decisions are recorded below; readiness is not independent mathematical approval.

## Final scoped validation and readiness

Final checks after the carrier and contract edits:

- `precheck.mts`: 4 proof-bearing items checked, 0 failed.
- `rendercheck.mjs`: 7 assigned item/page files checked, 0 errors and 0 warnings.
- Focused `depcheck.mjs`: 0 errors and 0 warnings; dependency closure includes 525 items and 52 pages.
- `content-policy.mjs`: all 5 items, 0 errors and 0 warnings.
- `manifest-deps.mjs`: 5 items, 0 normalized and 0 errors.
- Strict proof contracts: 5/5 items, 0 errors and 0 warnings.
- `proof-layout.mjs`: 5 items, 14 proof steps, 0 defects.
- Scoped dependency-level recomputation: 5 items, no errors; levels are 0 for the definition and intermediate lemma, 1 for the Euler theorem and midpoint example, and 2 for the scalar Euler example.
- Coverage checklist: 1 A page, 28 harvested results, 0 errors, and the documented advisory low-yield warning (8/28 scaffolded; the rest have explicit deferred or out-of-scope dispositions).
- `source-fetch-check --stamp` and final check: all 3/3 sources fetch-verified and resolved; 0 documented drops.

The run-wide dependency-level command has 159 errors outside this assignment: 158 empty scaffold inventories and a dependency cycle in batch 29, `alg-pseudo-arclength-continuation-with-certified-local-corrector` → `thm-pseudo-arclength-local-newton-correction` → the algorithm. Batch 7's scoped calculation passes and has no cross-batch supplier. No foreign page or item was edited; the batch 29 cycle is for owner reconciliation.

All five assigned items have hash-bound `ready` Step 1 records (`owner: false`). These records mark authoring readiness and do not constitute independent mathematical approval:

| Item | Level | Current input hash |
|---|---:|---|
| `def-one-step-ode-method-local-defect-order-and-stability` | 0 | `0d8086fedadff7b3da9148a11b9f23cf0f0412bdc9d835fa94aea47323cc62c2` |
| `lem-time-along-ode-solution-derivative-bound` | 0 | `167c988c086b070c9a1666a40c21c871c2fac36f1a4a0dee649940c9aa4c5746` |
| `thm-forward-euler-one-step-consistency-and-local-error` | 1 | `5e6e754c81dee3ba6849ba8c26e044627c8189d8aba65a63a0184e424a635f28` |
| `ex-explicit-midpoint-local-order-drop-at-nonsmooth-time-kink` | 1 | `2cf3b35bf03928eda8e6f3c1d68b25513050f48687078e978ad6734bcfe84f1b` |
| `ex-forward-euler-local-error-for-scalar-linear-ode` | 2 | `cca9cd23785ab59e5e4f3575f92f8647490de6a92e46d2120eb11d739f2e9cb3` |
