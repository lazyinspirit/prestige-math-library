# Step 3a reader report — batch 78

Run: `machine-learning-all-101-2026-10-19`  
Role: reader (`reader-78`)

## Opened inventory

Assigned pages:

- A page: `contextual-expert-bandits` at `library/machine-learning/contextual-expert-bandits.md`.
- B page: `contextual-expert-bandits-examples` at `library/machine-learning/contextual-expert-bandits-examples.md`.

Assigned items, read in dependency order:

- `def-contextual-bandit-protocol`
- `alg-exp4`
- `lem-exp4-updates-are-well-defined`
- `lem-exp4-unbiased-expert-reward-estimates`
- `lem-exp4-weighted-estimated-loss-second-moment`
- `lem-exp4-potential-inequality`
- `thm-exp4-expected-regret`
- `ex-exp4-finite-two-expert-set`
- `ex-exp4-duplicated-experts-change-prior-mass`
- `ex-exp4-context-specific-expert-class`

The A-page prerequisite `adversarial-bandits-and-importance-weighted-feedback` was also opened. Direct and proof-relevant item suppliers inspected were `def-online-decision-protocol`, `def-adversary-and-feedback-model`, `def-static-dynamic-and-strongly-adaptive-regret`, `def-random-element-and-real-random-variable`, `def-filtration-and-filtered-probability-space`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `alg-hedge`, `def-bandit-importance-weighted-estimator`, `lem-bandit-importance-weighted-estimator-has-conditional-moments`, `def-conditional-expectation-given-a-sigma-algebra`, `def-real-exponential-function-and-e`, `lem-exponential-series-has-infinite-radius`, `cor-exponential-reciprocal-and-positivity`, `lem-of-square-positive`, `lem-of-inverse-positive`, `lem-of-sign-rules`, `thm-induction-principle`, `lem-exp-negative-argument-second-order-upper-bound`, `thm-derivative-of-exponential`, `thm-exponential-is-strictly-increasing`, `thm-exponential-addition-formula`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `thm-logarithm-derivative-and-integral`, `lem-mean-value-theorem-on-closed-interval`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, and `lem-nonnegative-square-root-exists-and-unique`.

I read the batch manifest, reader brief, current proof contracts, dependency-input record, source-evidence record, and current autopilot status. The source-evidence record is not a verdict: I checked current carriers and supplier statements directly. The Exp4 citation was checked against Lattimore and Szepesvári, *Bandit Algorithms*, Chapter 18 §§18.2–18.4 (Algorithm 11, Lemma 18.2, and Theorem 18.1, PDF pp. 226–240 / printed pp. 217–231), and Auer et al., *The Nonstochastic Multiarmed Bandit Problem*, §7 (Figure 5 and Theorem 7.1 proof, PDF pp. 17–20 / printed pp. 65–68). The latter uses uniform exploration and a uniform expert; the reviewed claims do not import those hypotheses or constants.

## Item review and edits

No assigned item or page prose was edited. No material mathematical defect in the assigned item/page carriers was found.

- `def-contextual-bandit-protocol`: the fixed oblivious instance, timing, filtration, feedback, and expected best-fixed-expert regret are stated with the required domains. Bounded rewards and finite horizon make the regret integrable.
- `alg-exp4`: the inputs, update sequence, zero-probability quotient branch, and outputs are specified. Its separate well-definedness result covers the zero-support case.
- `lem-exp4-updates-are-well-defined`: the induction establishes the expert simplex invariant, zero-support implication, finite estimates, nonnegative estimated losses, positive normalizer, and finite completion.
- `lem-exp4-unbiased-expert-reward-estimates`: the moment formula is applied only on positive support; zero-support expert coefficients vanish, yielding the stated expert reward mean.
- `lem-exp4-weighted-estimated-loss-second-moment`: only one arm loss estimate can be nonzero per action; the finite conditional calculation and mixture identity yield the bound by `k`.
- `lem-exp4-potential-inequality`: the local logarithm inequality and nonpositive-axis exponential bound give the pathwise potential estimate for finite nonnegative estimated losses.
- `thm-exp4-expected-regret`: conditional unbiasedness, the second-moment bound, and the potential estimate yield `log(M)/eta + eta*n*k/2`; the stated learning rate gives `sqrt(2*n*k*log(M))` under the deterministic oblivious hypotheses.
- `ex-exp4-finite-two-expert-set`: first-round probabilities, expected reward, exact regret, and theorem-bound specialization are correct.
- `ex-exp4-duplicated-experts-change-prior-mass`: the duplicated rows produce the stated initial mass and identical updates; the tuned rate and specialized theorem bound are correct.
- `ex-exp4-context-specific-expert-class`: there are exactly `k^c` maps, each induces an admissible advice row, and the logarithm identity gives the claimed bound without a stochastic generalization claim.

## Page verdicts

- `contextual-expert-bandits`: pass. The A page is compact frontmatter only, has the seven assigned A items, and retains its prerequisite edge to the opened adversarial-bandits page. It has no summary or body prose.
- `contextual-expert-bandits-examples`: pass. The B page is compact frontmatter only, inventories the three assigned examples, and requires the A page. It has no summary or body prose.

## Defects not editable in this assignment

- `alg-hedge`, an in-run supplier from batch 74 to assigned consumer `alg-exp4`: Definition line 38 states and informally proves that exponential factors and all normalizers are positive and finite. The algorithm instructions require well-definedness and other algorithmic properties in a separate proved result, with `justified_by` identifying the well-definedness result; `alg-hedge` has `justified_by: []`. The statement is mathematically true, but its placement does not follow the required algorithm form. The exact current source hash is `f498b5cf89f99e3c544f876c833acd9c8de5f3fe78703d67faa16bbb447fc318`.
- `lem-exp4-unbiased-expert-reward-estimates` proof-contract metadata: `research/machine-learning-all-101-2026-10-19-batch-78.proof-contracts.json:113` says the degenerate-case evidence is in steps 1.1 and 1.2. The current proof has step 1.1 at item line 62 for zero support and step 2.1 at line 64 for positive support; no step 1.2 exists. The contract pointer needs correction. I did not edit the contract because no assigned item repair required a contract update.

## Workflow blockers and coverage limits

- `batch-78.dependency-inputs.json` records a scoped batch graph requiring batches 73, 74, and 77, while its current artifact lists only batch 77; its full-run dependency-level check exits 1 and calls for owner reconciliation. This owner-controlled planning artifact was not changed.
- `batch-78.source-evidence.json` lists nine items and seven proof-bearing items, omitting the assigned `lem-exp4-updates-are-well-defined`; the current manifest has ten assigned items and eight proof-bearing items. I reviewed the omitted carrier directly. Its recorded checks therefore do not cover the complete assigned inventory.
- The live autopilot status also reports the unrelated `3a-collect` blocker for batch 57 (collector failed three times). Neither issue prevented this substantive batch-78 review.
- No separate rendered evidence bundle was present under the run's `.autopilot` state directory. I reviewed all assigned current item and page carriers and the direct suppliers listed above, but did not recursively audit every proof in the foundational published dependency tree.

No reflow, precheck, or proof-layout command was needed because no item was changed.
