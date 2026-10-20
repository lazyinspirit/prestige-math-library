# Step 3a reader report — batch 77

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Review date: 2026-10-20

## Opened inventory

Assigned pages:

- `adversarial-bandits-and-importance-weighted-feedback` (A; draft; `page_layout: compact-v1`)
- `adversarial-bandits-and-importance-weighted-feedback-examples` (B; draft; `page_layout: compact-v1`)

Assigned items opened and reviewed (listed by dependency level):

- `lem-exp-negative-argument-second-order-upper-bound`
- `def-bandit-importance-weighted-estimator`
- `lem-bandit-importance-weighted-estimator-has-conditional-moments`
- `alg-exp3`
- `thm-exp3-expected-regret`
- `ex-rare-arm-importance-weighted-estimator`
- `ex-deterministic-rewards-importance-weighted-feedback`
- `ex-exp3-and-full-information-hedge-differ`

Direct item dependencies opened at the sections used by these claims:

- Current-run batch 73: `def-online-decision-protocol`, `def-adversary-and-feedback-model`, and `def-static-dynamic-and-strongly-adaptive-regret`.
- Current-run batch 74: `alg-hedge`.
- Published items: `def-real-exponential-function-and-e`, `thm-derivative-of-exponential`, `thm-exponential-is-strictly-increasing`, `lem-mean-value-theorem-on-closed-interval`, `def-random-element-and-real-random-variable`, `def-filtration-and-filtered-probability-space`, `def-conditional-expectation-given-a-sigma-algebra`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `cor-exponential-reciprocal-and-positivity`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `thm-exponential-addition-formula`, `lem-exponential-dominates-one-plus-x`, `def-natural-logarithm`, and `thm-natural-logarithm-laws`.

Page prerequisites opened to resolve the assigned page edges: `hedge-and-online-gradient-descent` and `outward-rounded-interval-and-ball-arithmetic`. The B page requires the assigned A page. The assigned pages contain frontmatter only. No TikZ or tikzcd diagrams occur in the assigned items or pages.

## Mathematical review and edits

- In `lem-exp-negative-argument-second-order-upper-bound`, proof step 2.1 applied the mean value theorem on `[z,0]` without restricting to `z<0`. At `z=0` that interval is degenerate, while the cited theorem requires `a<b`. The existing step 1.1 already proves equality at `z=0`; step 2.1 now explicitly handles only the remaining case `z<0`. The proof contract derivation and endpoint evidence were synchronized. The claim and its hypotheses did not change.
- Corrected source locators in `def-bandit-importance-weighted-estimator` and `lem-bandit-importance-weighted-estimator-has-conditional-moments` to the exact Auer page locations: the estimate and conditional-unbiasedness discussion is on SIAM p. 52, and the cited Eq. (11) calculation is on SIAM p. 55.
- Corrected `alg-exp3` and `ex-exp3-and-full-information-hedge-differ` locators for Lattimore–Szepesvári’s Eq. (11.7) and Algorithm 9 to printed pp. 152–153. The Exp3 example now also identifies §11.5 Note 3, which discusses full-information Hedge. Corrected `alg-exp3`’s Auer Figure 1 locator to SIAM p. 53.
- Corrected `thm-exp3-expected-regret`’s Auer Theorem 3.1 and complete-proof locator to SIAM pp. 53–55. The reference continues to mark Auer’s uniform-exploration variant and different bound as distinct from the theorem proved here.

The primary-source passages checked were [Lattimore and Szepesvári, *Bandit Algorithms*](https://tor-lattimore.com/downloads/book/book.pdf), Chapter 11 §§11.1–11.5: Eqs. (11.3)–(11.7), Eq. (11.14), the complete potential proof of Theorem 11.2, and Notes 3, 4, and 7; and [Auer, Cesa-Bianchi, Freund, and Schapire, *The Nonstochastic Multiarmed Bandit Problem*](https://homepages.math.uic.edu/~lreyzin/papers/auer02.pdf), §3, including Figure 1 and the complete proof of Theorem 3.1. The Auer proof uses its own uniform-exploration algorithm and is not used to establish the local regret bound. The local proof establishes the conditional moments and the past-adaptive expected fixed-arm extension directly from finite conditional sums.

The conditional-moment lemma’s finite-history argument is supported by the estimator definition: finite arms and horizon, deterministic pre-action rewards and sampling probabilities from finite histories, and strictly positive probabilities make all estimates finite. The Exp3 potential proof then bounds the per-round weighted squared loss by `k`, telescopes the positive finite weights, and takes the finite maximum over fixed arms. The three examples’ outcome probabilities, moments, variances, and update distributions check by direct substitution. Statements are uninterrupted by hyperlinks; references are in the immediately following reference sections.

## Page verdicts

| Page | Verdict |
| --- | --- |
| `adversarial-bandits-and-importance-weighted-feedback` | Pass. Its five item entries match the batch inventory; its body is empty; its required page IDs resolve. |
| `adversarial-bandits-and-importance-weighted-feedback-examples` | Pass. Its three example entries match the batch inventory; its body is empty; its required A-page ID resolves. |

## Validation

- Reflow and precheck ran for all six changed items: `lem-exp-negative-argument-second-order-upper-bound`, `def-bandit-importance-weighted-estimator`, `lem-bandit-importance-weighted-estimator-has-conditional-moments`, `alg-exp3`, `thm-exp3-expected-regret`, and `ex-exp3-and-full-information-hedge-differ`. All reflows reported unchanged; proof-bearing items passed precheck, and definition/algorithm items returned clean with no proof sections to check.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-77.proof-contracts.json --strict --json`: 6 proof-bearing items, 0 errors, 0 warnings.
- Final `node tools/proof-layout.mjs` on the six changed item paths: 6 items, 18 steps, 0 defects.
- No stale `verification.judge` record was present in the changed items.

## Uneditable defects and blockers

No specific uneditable defect arose from the directly used supplier material. There are no proposed withdrawals. No batch-77 blocker remains.

The latest recomputed autopilot status on disk reported batch 77 still missing from 3a-read and no dispatch in flight. It also reported an unrelated run-level blocker: `3a-collect` / `collect-57` had failed three times for batch 57. That blocker is outside this assignment.

## Coverage limit

This review covers every assigned carrier, the directly used item sections, the two listed page prerequisites, and the cited source passages above. It does not re-audit the full transitive proof closures of published suppliers or the mathematical content of unassigned prerequisite pages.
