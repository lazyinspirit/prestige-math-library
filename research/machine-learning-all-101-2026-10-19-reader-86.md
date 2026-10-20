# Step 3a reader report — batch 86

## Scope and opened inventory

Reviewed the current batch-86 manifest and both assigned pages:

- A page **model-based-planning-dyna-and-model-exploitation**, with 14 assigned items: **def-learned-mdp-model**, **def-finite-stochastic-shortest-path-problem**, **def-finite-horizon-mdp-return**, **alg-real-time-dynamic-programming**, **lem-finite-policy-kernel-tv-propagation**, **thm-finite-stochastic-shortest-path-value-exists**, **rem-ensemble-disagreement-is-not-calibrated-uncertainty**, **alg-dyna-q**, **alg-model-predictive-control**, **thm-single-policy-finite-horizon-simulation-bound**, **lem-asynchronous-value-iteration-for-stochastic-shortest-path**, **thm-rtdp-recurrently-backed-state-convergence**, **cex-rtdp-optimal-relevant-state-convergence-fails**, and **def-model-exploitation**.
- B page **model-based-planning-dyna-and-model-exploitation-examples**, with **ex-model-accurate-on-behavior-support**, **ex-short-versus-long-model-rollouts**, and **ex-model-exploitation-off-support**.

The current manifest and current proof-contract scope each contain 17 items. The batch notes’ inventory table says 16 and omits **thm-rtdp-recurrently-backed-state-convergence**; I used the manifest and opened that carrier as assigned.

Opened the cross-batch suppliers in dependency order: **def-finite-markov-decision-process** (batch 80), **def-optimal-action-value-bellman-operator** (batch 81), and **alg-q-learning** (batch 81). Q-learning depends on the Bellman-operator definition, and Dyna-Q depends on Q-learning. No defect requiring an in-run dependency finding was found.

Opened the direct published suppliers needed for the assigned arguments: **def-measure-kernel-and-probability-kernel**, **def-countable**, **def-cartesian-product**, **def-sum-over-a-finite-index-set**, **def-max-min**, **lem-finite-set-has-max**, **lem-of-abs-value**, **lem-of-triangle-inequality**, **lem-triangle-inequality-finite**, **lem-finite-sum-laws**, **thm-sum-rule**, **thm-the-characterising-property-of-ordered-pairs**, **lem-nat-nonzero-is-successor**, **def-axiom-of-choice**, **def-total-variation-distance-for-probability-laws**, **lem-total-variation-half-l1-formula-on-a-countable-space**, **lem-total-variation-coupling-and-kernel-contraction**, **thm-ionescu-tulcea-construction-of-a-markov-chain**, **thm-monotone-convergence**, and **thm-tower-property-of-conditional-expectation**.

Also read the current batch-86 dependency-input bundle, proof contracts, source-evidence record, and notes. The notes and readiness records were treated as navigation and evidence only; judgments below come from the current carrier contents and their stated suppliers.

## Repairs and evidence

- **def-finite-stochastic-shortest-path-problem**: made the goal convention explicit: each goal’s available action set is exactly the singleton dummy action, with joint mass one on reward zero and return to that same goal. This matches the properness recursion, the absorbing-goal policy trajectories, and the Bellman boundary condition used by the assigned results.
- **thm-finite-stochastic-shortest-path-value-exists**: replaced the unproved “Markov property” block contraction and implicit survival monotonicity in Proof 2.1 with the finite substochastic transition matrix on nonglobal states. The definition’s recurrence now yields \(q_n=Q^n\mathbf1\), hence nonincreasing survival probabilities and \(q_{(k+1)N}\le \rho^kq_N\le\rho^{k+1}\). This justifies the geometric cost bound for the proper policy. Proofs 4.1 and 5.1 now state the survival monotonicity used to establish properness and the lower bound for arbitrary history-dependent policies.
- **alg-model-predictive-control**: specified that each tie-breaking list is an ordering of every action in \(A(s)\), each appearing exactly once. The old input could omit a maximizing action, leaving the “first listed maximizer” undefined.
- Checked the direct consumers of the MPC definition: **def-model-exploitation** uses only the learned-model return optimization concept, so its definition remains sound. **ex-model-exploitation-off-support** now supplies the complete one-state action list explicitly; its unique learned maximizer and true-return comparison are unchanged. Updated the consumer’s F2 wording and the contract’s exact supplier excerpt.
- **thm-rtdp-recurrently-backed-state-convergence**: made the positive-cost survival bound explicit for eventual minimizing stationary policies. Split the extra \(f_0\le Tf_0\) argument into dependency-ordered proof steps: the table is a monotone subsolution with \(\bar f\le T\bar f\); equality at a state propagates through every globally optimal action’s positive-probability successors; and a finite-prefix telescoping Bellman-slack identity shows that every action used by any optimal policy has zero slack. Summability of non-goal probabilities removes the terminal term and proves the claim for optimal-relevant states not backed infinitely often. The precheck’s canonical layer order is now reflected in steps 6.2, 7.2, and 8.1.
- Updated **research/machine-learning-all-101-2026-10-19-batch-86.proof-contracts.json** for the revised SSP definition excerpt, proof-step claims and inputs, RTDP fact-use map, and MPC consumer excerpt. No changed item contained a stale **verification.judge** record.

The cited RTDP source was opened directly. Barto, Bradtke, and Singh, Theorem 3, claims almost-sure convergence on every state reachable under an optimal policy from designated starts under the listed properness, positive-cost, initialization, and start conditions; Appendix A claims the recurrent set must contain all such states. The assigned five-state counterexample is correct: the branch through \(x\) remains uniquely greedy at every finite capped trial, while the tied optimal branch through \(y,z\) is never visited, so \(z\)’s estimate remains \(0\) although \(f^*(z)=1\). The source citation is accurate, and the counterexample remains present. The source is [Barto, Bradtke, and Singh, Theorem 3 and Appendix A](https://ai.dmi.unibas.ch/research/reading_group/barto-etal-ai1995.pdf), PDF pp. 104–105 and 132–133.

Other contextual citations were checked at the cited locations: Dyna-Q and experienced-pair planning at Sutton–Barto §8.2, Figure 8.4, printed pp. 200–202; model error and optimistic exploitation at §8.3, printed pp. 203–205; and model exploitation and ensemble uncertainty qualifications at Levine et al. §5.1, PDF pp. 25–26, and §5.3, PDF pp. 27–28. [Sutton and Barto](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf), [Levine et al.](https://arxiv.org/pdf/2005.01643).

## Uneditable findings

None. No defect was found in the two batch-80/81 supplier carriers or in the published dependency statements/proofs opened for these claims. The RTDP counterexample is an assigned item and its repaired local theorem does not rely on the refuted external theorem.

## Page verdicts

- **model-based-planning-dyna-and-model-exploitation**: pass. Its draft frontmatter inventory matches the 14 assigned A items; **page_layout: compact-v1** is present and the Markdown body is empty.
- **model-based-planning-dyna-and-model-exploitation-examples**: pass. Its draft frontmatter lists the three assigned examples, requires the A page, retains **page_layout: compact-v1**, and has an empty body.

No page prose was edited and no summary was created.

## Checks and blocker

For all five changed items, reflow returned **unchanged** with exit code 0. Precheck passed for **def-finite-stochastic-shortest-path-problem**, **thm-finite-stochastic-shortest-path-value-exists**, **thm-rtdp-recurrently-backed-state-convergence**, and **ex-model-exploitation-off-support**; the algorithm has no phase proof and was not applicable (0 checked, 0 failing). The batch proof-contract check passed in strict mode for all 17 items with 0 errors and 0 warnings. Final proof-layout check: 5 changed items, 22 numbered steps, 0 defects.

At the latest live autopilot status check (2026-10-19 13:28:05 UTC), the run remained active with 93/101 reads covered and nothing in flight. The run-wide **3a-collect** blocker is **collect-57** failed three times; it is outside batch 86. No batch-86 mathematical blocker remains.

Coverage limit: this review opened every assigned carrier and the direct published suppliers needed by its arguments, but it did not audit every unrelated transitive dependency of those published suppliers.
