# Step 3a reader report — batch 99

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Assigned batch: `99`

## Opened inventory

Assigned pages:

- `library/machine-learning/verifiable-generation-and-test-time-sampling.md`
- `library/machine-learning/verifiable-generation-and-test-time-sampling-examples.md`

Assigned items, read in supplier-before-consumer order:

- `def-verifier-and-generation-protocol`
- `alg-budgeted-verifier-guided-generation`
- `lem-budgeted-verifier-generation-termination-and-calls`
- `thm-independent-generation-success-and-verifier-error`
- `lem-finite-response-likelihood-ratio-change-of-measure`
- `alg-finite-group-relative-policy-update`
- `lem-finite-group-relative-update-termination-and-calls`
- `lem-finite-response-score-gradient-identities`
- `thm-group-centered-score-estimator-factor`
- `rem-reasoning-training-evidence-and-evaluation-targets`
- `ex-equal-group-rewards-zero-advantages`
- `ex-perfect-and-false-positive-verifiers`
- `ex-repeated-dependent-copies-no-sampling-gain`
- `ex-pass-at-one-oracle-pass-n-verifier-selected-accuracy`

Dependency items opened for the assigned claims:

- `def-differentiable-stochastic-policy`, `def-probability-measure`, `def-measure`, `def-measure-space`, `def-finite-sum`, `def-independent-random-elements`, `def-independent-sigma-algebras-and-events`
- `def-total-derivative-in-euclidean-space`, `def-jacobian-matrix-and-gradient`, `thm-algebra-of-total-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-logarithm-derivative-and-integral`, `def-natural-logarithm`, `thm-of-square-roots`, `lem-of-sign-rules`, `lem-finite-sum-laws`
- `def-field`, `def-ordered-field`, `lem-of-add-order`, `lem-of-naturals-positive`, `lem-of-inverse-positive`
- `def-expectation-on-a-finite-probability-space`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `def-axiom-of-choice`, `def-absolutely-continuous-with-respect-to-a-positive-measure`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-offline-reinforcement-learning-dataset`, `lem-finite-horizon-trajectory-ratio-is-radon-nikodym-derivative`

Page prerequisites opened:

- `library/mathematical-statistics/dominated-experiments-likelihood-and-sufficiency.md`
- `library/machine-learning/offline-reinforcement-learning-and-off-policy-evaluation.md`
- `library/machine-learning/policy-gradients-reinforce-and-actor-critic.md`

The task contracts, coverage record, cross-batch dependency record, and current run status were consulted as evidence. The run status reported batch 99 still owed its reader pass. No author decision was used as a verdict.

## Mathematical and source review

The finite rejection search and best-of-$N$ procedures match their definitions. The call-count lemma follows from their finite loops and supplied terminating operations. The independent-success formula, false-acceptance union bound, and adaptive conditional-success bound preserve their separate hypotheses. The finite likelihood-ratio identity follows by pointwise cancellation on the finite response set. The score-mean and reward-gradient identities follow by differentiating finite normalized sums. The group-centered coefficient and leave-one-out identity follow from the score identities and independence; the group update itself makes no unbiasedness or convergence claim. The examples' probabilities and verifier outcomes check out.

The offline remark repeats the trajectory-ratio supplier's AC, common fixed initial state and transition/reward law, full-horizon coverage, and integrability conditions. Its warning about clipping and self-normalization does not claim the unmodified change-of-measure identity for those altered weights.

I checked the relevant primary-source passages:

- DeepSeek-AI, [*DeepSeek-R1*, arXiv v1](https://arxiv.org/pdf/2501.12948v1): §2.2.1, equations (1)–(3), for the group objective and normalized advantages; §2.2.2 for rule-based correctness rewards; §2.3.3 for sampling multiple responses and retaining correct ones; §3, evaluation setup, for the finite-sample pass@1 average. The library gives its finite protocol and proofs locally.
- Sutton and Barto, [*Reinforcement Learning: An Introduction*, second-edition draft](https://web.stanford.edu/class/psych209/Readings/SuttonBartoRL.pdf): §5.5, equation (5.3), for cancellation of shared transition factors in trajectory ratios; Chapter 13 §§13.2–13.4 for policy-gradient score terms and action-independent baseline cancellation. The assigned finite-response identities are proved locally.
- Schulman et al., [*Proximal Policy Optimization Algorithms*, arXiv v1](https://arxiv.org/pdf/1707.06347v1): §§2.2–2.3, equations (5) and (7), for the KL-penalty and clipped-surrogate context. The assigned algorithm specifies its own finite forward KL and does not assert PPO's convergence.

No TikZ, tikzcd, or other diagrams occur in the assigned items, and no diagram is needed to state or prove these finite calculations.

## Repairs and evidence

- `lem-finite-group-relative-update-termination-and-calls`, proof step 1.1: the original text asserted that the finite mean of squared deviations was nonnegative without establishing finite-sum positivity. I added the recursive-sum induction, ordered-field addition, and positivity of $1/G$ before invoking the square-root theorem. The proof contract now records those sources and the repaired derivation.
- `thm-independent-generation-success-and-verifier-error`, proof step 1.2: the original conditional bound passed to the aggregate finite-history inequality without explaining why the weighted inequalities remain ordered. I made the nonnegative history weighting, finite partition, finite-addition order preservation, and induction explicit; the contract records the repaired recurrence.
- `thm-group-centered-score-estimator-factor`, proof step 1.2: the original proof cited finite-sum distributivity without showing the pair-sum factorization. I added the two finite-index inductions using the recursive sum and field distributivity; the contract records this derivation.
- `ex-pass-at-one-oracle-pass-n-verifier-selected-accuracy`, Example and proof step 1.1: the description did not specify the rejection-search budget used in the conditional accuracy calculation. I stated that the same two candidates are used with budget $N=2$. I also made the product-law normalization and marginal calculation explicit by induction. The proof contract was updated.

None of the four changed items contained a `verification.judge` record. Reflow left each item unchanged; precheck passed each item. The required final proof-layout command reported `4 items, 15 steps, 0 defects`.

## Page verdicts

- `verifiable-generation-and-test-time-sampling`: pass. Its draft frontmatter is the complete page; the body is empty, `page_layout: compact-v1` is present, and its item inventory matches the assigned A-page list.
- `verifiable-generation-and-test-time-sampling-examples`: pass. Its draft frontmatter is the complete page; the body is empty, `page_layout: compact-v1` is present, and its examples inventory matches the assigned B-page list.

## Uneditable findings and blocker

No mathematical, citation, or statement defect remained uneditable in the reviewed dependency context. No item is proposed for withdrawal.

Workflow follow-up remains outside this reader's authority: the cross-batch record still marks the page-level disposition for `policy-gradients-reinforce-and-actor-critic` and the batch-84 interface review of `def-differentiable-stochastic-policy` as open. I inspected the current policy definition and found it supports the assigned use, but this batch-99 reader pass does not create or certify the native batch-84 review or page disposition.
