# Step 3a reader report — batch 7

Run: `numerical-optimization-dynamics-2026-10-16`  
Date: 2026-10-17

## Opened inventory

- Assigned A page: `library/numerical-differential-equations-and-stochastic-dynamics/one-step-ode-consistency-and-local-error.md`.
- Assigned B page: `library/numerical-differential-equations-and-stochastic-dynamics/one-step-ode-consistency-and-local-error-examples.md`.
- Required pages: `library/real-analysis/mixed-partials-taylor-and-extrema.md`, `library/real-analysis/picard-lindelof-and-first-order-odes.md`, and `library/real-analysis/the-total-derivative.md`.
- Assigned items, read in supplier order: `def-one-step-ode-method-local-defect-order-and-stability`; `lem-time-along-ode-solution-derivative-bound`; `thm-forward-euler-one-step-consistency-and-local-error`; `ex-explicit-midpoint-local-order-drop-at-nonsmooth-time-kink`; `ex-forward-euler-local-error-for-scalar-linear-ode`.
- Opened item suppliers: `def-euclidean-inner-product`, `def-convex-subset-of-euclidean-space`, `def-first-order-ode-initial-value-problem-and-solution`, `def-interval`, `def-vector-valued-derivative-and-integral`, `def-total-derivative-in-euclidean-space`, `def-directional-and-partial-derivatives`, `def-locally-lipschitz-in-the-state-variable`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-continuous-partial-derivatives-imply-total-differentiability`, `thm-total-differentiability-gives-a-local-linear-bound-and-continuity`, `thm-chain-rule-for-total-derivatives`, `thm-mean-value-inequality`, `thm-mean-value-inequality-for-total-derivatives`, `cor-mean-value-theorem`, `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, `thm-picard-lindelof-local-existence-and-uniqueness`, `lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps`, and `thm-multivariable-taylor-formula-with-lagrange-remainder`.
- Read `research/numerical-optimization-dynamics-2026-10-16-batch-7.proof-contracts.json` against all five assigned items. The current manifest and contracts were treated as navigation and evidence, not as verdicts.

## Review and edit

- In `items/ex-forward-euler-local-error-for-scalar-linear-ode.md`, added `T>0` to the statement's fixed-horizon hypothesis. The proof already fixes `T>0`; the asymptotic claim on `[0,T-h]` otherwise lacked a nondegenerate horizon. Updated that item's `empty` boundary reason in the batch proof contract. The item has no `verification.judge` record to remove.
- Reflow: unchanged. Precheck: `PASS` (1 checked, 0 failing). Final proof layout: `1 items, 4 steps, 0 defects`.
- The midpoint witness arithmetic checks: the exact solution is `y(t)=t|t|/2`; the crossing step at `t=-h/2` has defect `-h^2/4`, and the remaining crossing-step calculation bounds all defects by `h^2/4`. The fixed compact-set conditions are verified in the item.
- The derivative-bound lemma's chain-rule calculation and component bounds check. The Euler theorem's integral remainder gives `|delta_{h,i}| <= B_i h^2/2`; summing squares gives the stated norm bound. The fiberwise mean-value estimate gives the `1+Lh` stability factor. The scalar Euler example's defect formula and uniform `Theta(h^2)` bounds check for `T>0`.
- No other assigned item or page prose was changed.

## Defects not edited

- Published dependency `thm-continuous-partial-derivatives-imply-total-differentiability`, Proof 1.1 and 3.1: its statement does not exclude `m=0`, which the library's Euclidean-space convention admits. The proof divides by `m` and uses `sqrt(m)`, so those steps do not cover that case. A separate `m=0` argument (or an explicit `m>=1` hypothesis) closes the gap. The assigned use in `lem-time-along-ode-solution-derivative-bound` has domain dimension `d+1>=2`, so this gap does not affect that instance. Routed as nonfatal.
- Published dependency `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, Proof 1.1: local existence at a graph point gives a solution through that graph point, but the set `I` is defined as the union of domains of solutions through the original initial data. To show `I` is open, apply local uniqueness to the solution through `(t,x(t))` and the existing solution near `t`, then glue the extension so it remains in the defining family. The cited overlap/gluing lemma supplies this short missing step. Routed as nonfatal for assigned consumer `thm-forward-euler-one-step-consistency-and-local-error`.

## Page verdicts

- A page: the assigned definition, derivative-bound lemma, Euler estimate, and summary are sound. Owner follow-up is needed for the published maximal-solution proof gap cited by the Euler theorem; the dimension-zero gap above does not affect the lemma's positive-dimensional use.
- B page: pass after the positive-horizon clarification. Both examples and the page summary are sound.

## Blocker

No blocker to this reader handoff. At the last native status recomputation, the run remained at `3a-read` with 2 of 107 batch results covered and no worker in flight; other batches remain outside this dispatch.

## Coverage note

All five assigned items, both assigned pages, the three required pages, the batch manifest, and its proof contracts were inspected. Direct suppliers and the additional Picard–Lindelöf/gluing sources needed to check the ODE existence citation were opened. I did not re-prove the full transitive dependency closure of every published supplier and did not search external sources because the local statements and calculations resolved the mathematical checks.
