# Batch 28 authoring notes — Global ODE and Log-density Integration Error

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `28` (beta; category `numerical-differential-equations-and-stochastic-dynamics`)  
Scheduling input SHA-256: `ca41fcdd6d4a40fbd61e4921a8bfdd410bd704a05c937a5f709843ed28d2e97d`  
Batch dependency level: `1`; prerequisite batch: `7`.

## Controlling direction and design reconciliation

The binding owner direction points this pair to the current dynamics category plan and its mathematical contract audit. The controlling text is P-NUM-ODE-02 in `research/plan-numerical-dynamics-track.md` (lines 63–73 and the binding consumed contract immediately below). It requires a fixed-grid global recurrence with explicit positive- and zero-stability-constant branches; a separate divergence-quadrature contribution; a C² Euler result; and no claim that state accuracy controls density or adjoint error. The current contract's Hairer–Wanner source locator and independently proved recurrence control older source-design text.

The assigned design copies at `research/plan-machine-learning-track.md` line 517 and `research/plan-numerical-analysis-prerequisites.md` line 9 are consistent on the pair's broad scope, but describe the sources as discussion-only and leave the recurrence as an authoring obligation. The current dynamics contract supplies the matching numerical-ODE source and binding proof route, so those older descriptions do not override it. `research/plan-spec.json` and the current scaffold manifest require both `picard-lindelof-and-first-order-odes` and `one-step-ode-consistency-and-local-error`; the P-NUM-ODE-02 prose names only the latter. The manifest/plan-spec page requirement controls placement. The actual required one-step interface is bound to the exact batch 7 item listed below; the Picard prerequisite's actual published suppliers were inspected and are cited by the flow-density item.

## Inventory, dependencies, and levels

Eight carriers were authored in ascending item dependency level. The manifest and frontmatter use these logical dependencies and levels (published suppliers do not raise an in-run level; the batch 7 definition is an in-run supplier at level zero):

| Level | Item | Dependencies |
|---:|---|---|
| 0 | `lem-discrete-one-step-error-recurrence-bound` | `def-finite-sum`; `def-integer-power`; `def-real-exponential-function-and-e`; `lem-exponential-dominates-one-plus-x`; `lem-finite-sum-laws`; `lem-power-monotone`; `thm-exponential-addition-formula`; `thm-exponential-is-strictly-increasing` |
| 0 | `thm-continuous-flow-log-density-equation` | `def-countable-choice`; `def-first-order-ode-initial-value-problem-and-solution`; `def-measure-with-density`; `def-natural-logarithm`; `def-determinant-of-a-square-matrix`; `cor-determinant-is-a-polynomial-in-the-matrix-entries`; `thm-algebra-of-continuous-functions`; `thm-algebra-of-derivatives`; `thm-leibniz-determinant-is-alternating-multilinear-and-normalized`; `thm-real-square-matrix-invertible-iff-determinant-nonzero`; `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`; `thm-c1-dependence-of-solutions-on-initial-data`; `thm-chain-rule-for-total-derivatives`; `thm-intermediate-value`; `thm-logarithm-derivative-and-integral` |
| 1 | `thm-global-error-from-one-step-defect-and-stability` | `def-euclidean-inner-product`; `def-first-order-ode-initial-value-problem-and-solution`; `def-real-exponential-function-and-e`; batch 7 `def-one-step-ode-method-local-defect-order-and-stability`; `thm-cauchy-schwarz-and-the-euclidean-norm`; `lem-discrete-one-step-error-recurrence-bound` |
| 2 | `thm-divergence-integral-error-with-separate-quadrature` | `thm-global-error-from-one-step-defect-and-stability` |
| 3 | `cor-global-log-density-error-from-state-and-quadrature` | `def-countable-choice`; `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`; `thm-continuous-flow-log-density-equation`; `thm-divergence-integral-error-with-separate-quadrature` |
| 4 | `thm-euler-global-state-and-log-density-error` | `def-countable-choice`; `def-first-order-ode-initial-value-problem-and-solution`; `def-real-exponential-function-and-e`; `cor-vector-valued-ftc-and-lipschitz-bound`; `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`; `thm-chain-rule-for-total-derivatives`; `thm-mean-value-inequality-for-total-derivatives`; `thm-norm-inequality-for-the-vector-valued-integral`; `thm-continuous-flow-log-density-equation`; `thm-global-error-from-one-step-defect-and-stability`; `cor-global-log-density-error-from-state-and-quadrature` |
| 5 | `ex-euler-linear-flow-exact-log-density-update` | `def-countable-choice`; `def-natural-logarithm`; `def-real-exponential-function-and-e`; `def-integer-power`; `cor-exponential-reciprocal-and-positivity`; `cor-mean-value-theorem`; `lem-power-monotone`; `thm-algebra-of-derivatives`; `thm-continuous-flow-log-density-equation`; `thm-derivative-of-exponential`; `thm-euler-global-state-and-log-density-error`; `thm-exponential-addition-formula`; `thm-exponential-is-strictly-increasing`; `thm-natural-logarithm-laws` |
| 5 | `ex-exact-state-with-inexact-log-density-quadrature` | `def-countable-choice`; `def-natural-logarithm`; `def-real-exponential-function-and-e`; `cor-exponential-reciprocal-and-positivity`; `cor-global-log-density-error-from-state-and-quadrature`; `thm-continuous-flow-log-density-equation`; `thm-algebra-of-derivatives`; `thm-chain-rule-for-total-derivatives`; `thm-derivative-of-exponential`; `lem-derivative-of-a-power`; `thm-euler-global-state-and-log-density-error`; `thm-natural-logarithm-laws` |

The A2 generic theorem consumes the exact one-step defect/stability definition rather than importing a method-specific Euler conclusion. The local Euler constants are derived in A6. The batch 7 item was initially absent at dispatch, so authoring proceeded from the controlling interface; by handoff its actual definition, along with the batch 7 time-along-solution lemma and Euler theorem, was present and inspected. The exact generic interface matches; batch 28's cross-batch input records this as an interface verification, not independent acceptance of batch 7.

## Mathematical scope and axiom branches

The recurrence lemma and global state proof are choice-free; the recurrence additionally cites the real-exponential inequality, addition and monotonicity properties, and finite-sum laws used in its explicit constants. The flow-density proof uses Countable Choice only through the library's nonnegative Lebesgue change-of-variables theorem. Its orientation sign uses the intermediate value theorem, and differentiating the logarithm uses the logarithm derivative theorem; these add no choice. The corollary and examples inherit precisely the density branch. No full axiom of choice is claimed. The Euler claim is first order, has an explicit state, state-sensitivity, and divergence-quadrature split, and makes no adjoint-gradient claim. Higher-order state methods require their own order and quadrature conditions.

The flow-density proof defines the transported density on all of `R^d` by zero extension outside the diffeomorphic image and verifies the pushforward identity for every Borel set. It proves the determinant differentiation identity from the finite Leibniz sum, the binary product rule, and column multilinearity/alternation; it does not assume a named Jacobi formula without proof. Invertibility of each flow derivative gives nonvanishing determinant through the published matrix criterion, and continuity of the determinant polynomial plus IVT fixes its positive sign. The Euler quadrature theorem explicitly requires all numerical states to belong to the compact state set where its sensitivity bound holds. A6 supplies a compact convex state set inside a bounded convex open time-state domain so the mean-value and tube assumptions are explicit.

## Source review and fetch evidence

The A page has two independent numerical-analysis treatments for global state error and two independent continuous-flow treatments for the density identity/update. The complete source records, locators, per-result dispositions, retrieval history, and stamps are in `research/numerical-optimization-dynamics-2026-10-16-batch-28.coverage.json`:

- Hairer–Wanner, *Introduction à l’Analyse Numérique*, Chapter III, §§III.2–III.5, PDF pp. 4–11 / printed pp. 60–67; full proof of Theorem III.3.1 read. Its fixed-grid propagation supports the recurrence/global error. Embedded adaptive estimates and multistep methods are recorded out of scope.
- Embree, *Lecture Notes on Numerical Analysis*, complete 236-page PDF opened; Lecture 33 p. 189 and Lecture 34 §5.3 pp. 190–192 read. It independently supports the Euler local defect, one-step recurrence, and finite geometric sum. Adaptive step selection is out of scope.
- Chen et al., *Neural Ordinary Differential Equations*, full arXiv v6 PDF opened; §4 Theorem 1 and complete Appendix A proof read. It supports the CNF density/Jacobian interface. Its adjoint material and unsupported numerical error conclusions are out of scope; the local proof states and proves its regularity assumptions.
- Papamakarios et al., *Normalizing Flows for Probabilistic Modeling and Inference*, full JMLR PDF opened; §§4.1–4.2.1 read. It independently supports the divergence sign and augmented update, but does not supply a generic global numerical error theorem.

The four fetch stamps were previously verified by `source-fetch-check --stamp`: `4/4 source(s) fetch-verified`, one full-text attempt per source, with no failed retrieval or dropped source. The Hairer stamp matches cached PDF SHA-256 prefix `71cc972bcacf4d24`; the complete hashes and page counts remain in the coverage file.

## Cross-batch and readiness status

Batch 7's current manifest now contains three items, including the exact definition `def-one-step-ode-method-local-defect-order-and-stability`. Its actual body defines the same exact-start defect up to an irrelevant sign under the norm, uniform `Ch^(p+1)` local order, and `(1+Lh)` input stability used in A2. That exact item and its actual dependencies were inspected. Batch 28 records verified page and item edges in `research/numerical-optimization-dynamics-2026-10-16-batch-28.cross-batch-dependencies.json`; this is not an approval or acceptance of the supplier batch.

All eight items have current `ready` records written with `owner:false`, exact dependency IDs, and item-specific evidence. The records are current against their item and dependency hashes; the scoped readiness verification reports `8/8 closed`. Batch 28's A2 supplier interface was available and checked, so no cross-pair prerequisite remains open for this pair. These readiness records are not proof reviews or publication approval.

## Scoped checks

Final scoped results:

- `node tools/manifest-deps.mjs research/numerical-optimization-dynamics-2026-10-16-batch-28.pages.json`: 8 items, 0 normalized, 0 errors.
- A direct comparison of every scoped manifest item `deps` array with its carrier frontmatter reports an exact match.
- Dependency levels checked on batches 7 and 28 together: 13 items, 0 errors. Batch 28 levels are exactly `0,0,1,2,3,4,5,5`, matching the manifest and carrier frontmatter.
- `node tools/proof-contract.mjs ...batch-28.proof-contracts.json --strict`: 8/8 items checked, 0 errors, 0 warnings.
- `node tools/proof-layout.mjs` on the eight explicit item paths: 8 items, 20 numbered steps, 0 defects.
- Scoped `author-check.mts` report: pass; precheck 8/8, rendercheck 10 files, content policy 8 items with 0 errors/warnings, strict proof contract pass.
- `node tools/source-fetch-check.mjs --coverage ...batch-28.coverage.json`: 4/4 sources fetch-verified and resolved, 0 documented drops. The prior `--stamp` run recorded one successful full-text fetch per source.
- Assigned JSON artifacts parse successfully. Scoped Step 1 record verification: 8/8 current and closed.

The all-run dependency-level command was also attempted, but remains blocked by unrelated run manifests with empty scaffold inventories (for example, `computed-fast-transforms-and-convolution` and `sparse-direct-elimination-and-ordering`). The scoped check including prerequisite batch 7 and assigned batch 28 passes. These are mechanical authoring checks only; they do not constitute independent mathematical approval.
