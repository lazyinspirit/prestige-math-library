# Online and Reinforcement Learning rendering audit — lane 10

**Scope:** frozen assignment-10 titles and complete ItemBodies, plus every receipt-listed PNG opened individually with `tools.view_image(detail="original")`. All review stayed local. Source SHA256 values match the frozen assignment for all 26 items.

## Findings

No confirmed LaTeX/TikZ rendering defects or mathematical/semantic diagram defects found. The 42 receipt tiles were individually viewed at original resolution. Split-item tiles overlap by 100 px where recorded; adjacent tiles and full source were used to distinguish page-boundary crops from actual clipping. No candidate issue depended on an overlap/crop artifact.

## Item and tile coverage

Every item below was reviewed against its frozen title and complete ItemBody. Tile paths, receipt hashes, original-resolution per-tile view attestations, and per-item diagram checks are recorded in [lane-10.json](lane-10.json).

| ID | Frozen title | Tiles opened | Diagram/render check |
|---|---|---:|---|
| `alg-exp3` | Exp3 with importance-weighted loss feedback | 1 | No embedded diagram or visible rendering defect. |
| `alg-online-gradient-descent` | Projected online gradient descent | 2 | No embedded diagram or visible rendering defect. |
| `alg-td-zero-prediction` | Tabular TD(0) policy prediction | 2 | No embedded diagram or visible rendering defect. |
| `cex-zero-reference-support-breaks-dpo-log-ratio` | Zero reference support makes the DPO reward ratio undefined | 1 | No embedded diagram or visible rendering defect. |
| `def-centered-subgaussian-reward` | Centered 1-sub-Gaussian reward | 1 | No embedded diagram or visible rendering defect. |
| `def-finite-markov-decision-process` | Finite Markov decision process with joint reward-transition law | 2 | No embedded diagram or visible rendering defect. |
| `def-offline-reinforcement-learning-dataset` | Finite-horizon offline reinforcement-learning dataset and coverage | 1 | No embedded diagram or visible rendering defect. |
| `def-subexponential-uniform-boundary` | One-sided sub-exponential uniform boundary | 1 | No embedded diagram or visible rendering defect. |
| `ex-deterministic-rewards-importance-weighted-feedback` | Deterministic rewards can give a negative estimated reward | 1 | No embedded diagram or visible rendering defect. |
| `ex-expected-discounted-cost-does-not-imply-pathwise-safety` | A small expected cost can coexist with frequent finite-horizon violations | 1 | No embedded diagram or visible rendering defect. |
| `ex-matched-observation-mrps-have-distinct-bellman-errors` | At discount one-half, identical observable laws hide different Bellman-error minima | 2 | No embedded diagram or visible rendering defect. |
| `ex-one-state-diameter-convention` | One-state MDP and normalized diameter | 1 | No embedded diagram or visible rendering defect. |
| `ex-pomdp-observation-aliasing-preserves-belief` | An observation with identical state likelihoods leaves the belief unchanged | 1 | No embedded diagram or visible rendering defect. |
| `ex-repeated-dependent-copies-no-sampling-gain` | Repeated dependent copies do not increase success probability | 1 | No embedded diagram or visible rendering defect. |
| `ex-value-iteration-attains-error-rate` | A one-state value-iteration model attains the Bellman error bound | 2 | Embedded TikZ self-loop legible; labels agree; no clipping. |
| `lem-bandit-importance-weighted-estimator-has-conditional-moments` | Conditional moments of the bandit importance-weighted estimator | 1 | No embedded diagram or visible rendering defect. |
| `lem-dagger-mixture-occupancy` | Expert mixing changes finite-horizon state occupancy by at most the mixing mass | 2 | No embedded diagram or visible rendering defect. |
| `lem-finite-action-average-tv-controlled-by-kl` | Finite-action average total variation is bounded by average KL | 2 | No embedded diagram or visible rendering defect. |
| `lem-finite-response-likelihood-ratio-change-of-measure` | Finite response likelihood ratios change measure by cancellation | 1 | No embedded diagram or visible rendering defect. |
| `lem-mdp-performance-difference-identity-with-arbitrary-baseline` | Performance-difference identity for an arbitrary bounded baseline | 2 | No embedded diagram or visible rendering defect. |
| `lem-psd-matrix-has-unique-psd-square-root` | A positive-semidefinite matrix has a unique positive-semidefinite square root | 2 | No embedded diagram or visible rendering defect. |
| `rem-ensemble-disagreement-is-not-calibrated-uncertainty` | Ensemble disagreement is not calibrated uncertainty by definition | 1 | No embedded diagram or visible rendering defect. |
| `thm-dagger-no-regret-reduction` | DAgger no-regret reduction under strongly convex surrogate losses | 3 | No embedded diagram or visible rendering defect. |
| `thm-finite-mdp-policy-induces-reward-state-chain` | A finite MDP and stationary policy generate a reward-state Markov chain | 2 | No embedded diagram or visible rendering defect. |
| `thm-pac-mdp-value-functions` | Well-defined discounted values and optimal Bellman fixed points | 4 | No embedded diagram or visible rendering defect. |
| `thm-ucb-gap-dependent-regret` | Gap-dependent expected regret of UCB | 2 | No embedded diagram or visible rendering defect. |

## Existing diagram checks

- `ex-value-iteration-attains-error-rate` has one TikZ diagram (receipt reports `tikz_count: 1`). At tile `ex-value-iteration-attains-error-rate--02.png`, opened standalone at original resolution, the small state node, action rectangle, self-loop and transition label are all visible. The rendering is small but not clipped; source remarks at `items/ex-value-iteration-attains-error-rate.md:87-91` confirm the intended mapping: state circle, sole action rectangle, return arrow for deterministic reward-1 self-transition.

- All other assigned receipts report `tikz_count: 0`; no diagram render failures are recorded. The figures suggested below are editorial candidates based on source structures, not confirmed omissions or defects.

## Diagram candidates

Candidates are uncertain/editorial. Each is supported by the cited source lines and gives a concrete map to draw or inspect.

### Finite Markov decision process with joint reward-transition law — `state-action transition/reward diagram`

**Source:** [items/def-finite-markov-decision-process.md](../../../items/def-finite-markov-decision-process.md) lines 46-54.

**Claim to depict/check:** The next-state and reward are sampled jointly and may be dependent; the state-transition and expected-reward marginals are derived from that same joint mass.

**Concrete map:** State circles, action boxes, and outgoing edges labelled (next state, reward; joint probability); optionally annotate the two marginals derived from those edge labels.

### Finite-horizon offline reinforcement-learning dataset and coverage — `trajectory and support diagram`

**Source:** [items/def-offline-reinforcement-learning-dataset.md](../../../items/def-offline-reinforcement-learning-dataset.md) lines 44-50, 68.

**Claim to depict/check:** A finite trajectory atom mass factors into policy action probabilities and shared next-state/reward probabilities; the target trajectory law is absolutely continuous with respect to the behavior law under the stated reachable state-action support condition.

**Concrete map:** A horizon-H chain s_t → a_t → (r_{t+1},s_{t+1}), with per-step behavior/target action-probability factors and a visual indication that behavior support contains all target-reachable actions.

### A small expected cost can coexist with frequent finite-horizon violations — `finite-horizon risk tree`

**Source:** [items/ex-expected-discounted-cost-does-not-imply-pathwise-safety.md](../../../items/ex-expected-discounted-cost-does-not-imply-pathwise-safety.md) lines 31, 41-55.

**Claim to depict/check:** The one-state safe/risky CMDP is expected-cost feasible while the probability of at least one risky action in seven decisions exceeds one-half.

**Concrete map:** One state with safe/risky self-loop actions (risky probability 1/10), plus a seven-step branch/event depiction for no risky draw versus at least one risky draw; label the separate discounted expectation and event probability.

### At discount one-half, identical observable laws hide different Bellman-error minima — `paired Markov reward process graphs`

**Source:** [items/ex-matched-observation-mrps-have-distinct-bellman-errors.md](../../../items/ex-matched-observation-mrps-have-distinct-bellman-errors.md) lines 37-41.

**Claim to depict/check:** Two reward-labelled MRPs have identical stationary feature/reward sequence laws but different state-weighted Bellman-error minimizers and minima.

**Concrete map:** Side-by-side state transition graphs labelled with transition probabilities, rewards, stationary weights and shared feature labels; visually distinguish latent states B and B′ while showing their feature aliasing.

### An observation with identical state likelihoods leaves the belief unchanged — `belief update diagram`

**Source:** [items/ex-pomdp-observation-aliasing-preserves-belief.md](../../../items/ex-pomdp-observation-aliasing-preserves-belief.md) lines 29-48.

**Claim to depict/check:** With identity hidden-state transition and equal likelihood 1 for the sole observation in both states, the prior (2/3,1/3) is predicted unchanged and Bayes-updated to itself.

**Concrete map:** Two hidden-state nodes with identity transitions and equal observation-emission labels, alongside prior → predicted belief → observation x → posterior, all labelled (2/3,1/3).

### DAgger no-regret reduction under strongly convex surrogate losses — `proof-dependency flow diagram`

**Source:** [items/thm-dagger-no-regret-reduction.md](../../../items/thm-dagger-no-regret-reduction.md) lines 42-48, 72-80, 90-115.

**Claim to depict/check:** The reduction combines FTL regret, expert/learner occupancy shift, and expert-surrogate task-cost control to obtain a learned-policy task-cost bound.

**Concrete map:** Flow from mixed rollout policy to state occupancy/loss, FTL average regret, occupancy shift bound, learner own-occupancy surrogate loss, then task-cost increase bound; label the separate terms and assumptions.

### A finite MDP and stationary policy generate a reward-state Markov chain — `lifted reward-state Markov chain`

**Source:** [items/thm-finite-mdp-policy-induces-reward-state-chain.md](../../../items/thm-finite-mdp-policy-induces-reward-state-chain.md) lines 46-50, 82-88.

**Claim to depict/check:** A stationary policy and the MDP joint reward-transition law induce a homogeneous kernel on E=S×(R∪{0}), with initial coordinate (s,0).

**Concrete map:** A state/reward pair node (s,η) transitioning to (s′,ρ); annotate the transition probability as the policy mixture over action and joint next-state/reward masses.

### Well-defined discounted values and optimal Bellman fixed points — `Bellman backup map`

**Source:** [items/thm-pac-mdp-value-functions.md](../../../items/thm-pac-mdp-value-functions.md) lines 48-56.

**Claim to depict/check:** For each state, action values are expected immediate reward plus discounted next-state value, and the optimal value is their maximum, attained by a greedy stationary policy.

**Concrete map:** A compact state→action→next-state backup with reward and transition labels, followed by Q*(s,a) values feeding a max node V*(s).

## Item-body observations

No TeX token loss, broken delimiters, malformed fractions/subscripts, missing glyphs, or visible equation overflow was confirmed in the inspected tiles. The small white square markers near some lower-right edges recur as page/UI markers and are not treated as mathematical content or clipping. Long pages were reviewed through their overlapping original-size tiles; tail-only tiles show the continuation at the page boundary, with no evidence of omitted body content in the tile set.
