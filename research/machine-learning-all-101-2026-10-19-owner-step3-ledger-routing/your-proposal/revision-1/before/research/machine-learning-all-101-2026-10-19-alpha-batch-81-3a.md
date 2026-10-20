# Batch 81 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`. Group: `batch-81`. Scope: batch 81 only.

## Disposition

Completed all seven routed finding obligations and all fifteen HIGH/CRITICAL risk reviews, using the generated dependency order. All seven findings are `confirmed_fatal` citation inaccuracies: a separate accurate source does not make an incorrect locator accurate. The reader’s nonfatal severity and refuter’s fatal severity were treated as evidence; the local mathematical procedures and proofs remain sound.

Seven distinct source-locator defects were repaired across six draft items, including three discovered during independent source review. Each has one closed ledger row with `caught_at_stage: "3a-adjudicate"` and `repair_confidence: 1`. Duplicate reader/refuter findings share one row. No Statement, Definition, proof, dependency, title, page inventory, published status or mathematical content contract changed. Source locator corrections require no consumer-interface repairs. Manifest fields remain valid and unchanged. No proof rewrite invalidates a judge record.

## Exact routed decisions

| Obligation | Carrier | Verdict | Closed defect |
| --- | --- | --- | --- |
| `reader:81:2` | `alg-sarsa-on-policy-control` | `confirmed_fatal` | `ml101-b81-sarsa-yang-locator` |
| `refuter:81:2` | `alg-sarsa-on-policy-control` | `confirmed_fatal` | `ml101-b81-sarsa-yang-locator` |
| `reader:81:1` | `alg-td-zero-prediction` | `confirmed_fatal` | `ml101-b81-td0-yang-locator` |
| `refuter:81:3` | `alg-td-zero-prediction` | `confirmed_fatal` | `ml101-b81-td0-yang-locator` |
| `reader:81:3` | `alg-monte-carlo-policy-evaluation` | `confirmed_fatal` | `ml101-b81-mc-yang-locator` |
| `refuter:81:1` | `alg-monte-carlo-policy-evaluation` | `confirmed_fatal` | `ml101-b81-mc-yang-locator` |
| `refuter:81:4` | `ex-weighted-importance-sampling-finite-sample-bias` | `confirmed_fatal` | `ml101-b81-weighted-yang-locator` |

No touched/page obligations or foreign-refuter gate obligations were routed. The pre/post inventories and per-item source hashes agree for all seventeen items; before Alpha edits every current source raw hash matched the post snapshot. Reader repairs therefore supply no carrier delta to accept, amend or revert. The finding artifacts also retain older `observed_sha256` values; this report does not claim to have reconstructed those full historical preimages or to know their unrelated deltas. The inaccurate locators described by each finding were independently present in the current carriers before repair.

## Independent mathematical review

Read current carriers, actual cited supplier statements, the reader report/findings, refuter artifact and scope. Reviewed the written arguments and hypotheses rather than inheriting their prior acceptance. Source-by-source prerequisite uses, boundaries and exact conventions are recorded below and in each contract’s `risk_review`.

### `lem-bounded-square-summable-martingale-difference-series-converges`

Reviewed steps 1.1–4.1 and current cited statements: predictable bounded weights give square-integrable orthogonal increments; dominated convergence controls square tails; first-crossing events prove the maximal inequality without optional stopping; summable event bounds give pathwise Cauchy convergence. C=0 and K=0 are covered, and AC is explicitly inherited only through conditional-expectation existence. No diagram or statement-link defect.

### `def-optimal-action-value-bellman-operator`

Reviewed Definition and verification 1.1–3.1 against finite-MDP, natural-successor, finite maximum and finite sum suppliers. Nonempty finite action sets admit enumerations and unique attained real maximum values; finite reward-transition sums define every coordinate. Nonempty S excludes vacuous maximum ambiguities; gamma=0 is admitted. Definition is uninterrupted; no diagram needed.

### `lem-asynchronous-finite-dimensional-contraction-stochastic-approximation`

Reviewed steps 1.1–4.1 against the bounded-MDS series lemma and exact filtration/limsup suppliers. Each predictable coordinate weight has deterministic square-sum bound; infinite visits preserve local step sums. Adding the convergent-noise tail gives a convex averaging recurrence; the product bound tends to zero even with zero or unit steps. Bounded iterates make all limsups finite; finitely many coordinates permit commuting maximum and limsup, yielding E<=qE and E=0, including q=0. AC inherited explicitly. No delay or unbounded-noise theorem is claimed.

### `lem-finite-mdp-policy-action-state-reward-path-law`

Reviewed steps 1.1–4.1 and exact current finite-set, kernel, product-sigma, Ionescu–Tulcea and reward-state-chain supplier statements. The union over states uses disjoint state tags; finite discrete kernel is countably additive, normalized and measurable; history projection supplies kernels for Ionescu–Tulcea under AC. Feasible cylinder atoms factor, including m=0; finite action sums yield the marginal and uniqueness identifies its law. Consistency of adjacent state records holds with probability one. No diagram or uninterrupted-statement defect.

### `ex-q-learning-constant-stepsize-can-fail-to-converge`

Reviewed full witness and steps 1.1–2.1 against the current path law, Bellman operator, Q-learning definition and continuity-from-above statement. At gamma=0 and alpha=1, Q_{n+1}=R_{n+1}; Bellman value is zero. Conditional fair signs give every finite block mass 2^{-length}; each eventual-constant event has zero probability, and the countable union does too. A convergent sign sequence must be eventually constant. Explicit AC path-law assumption retained; no diagram needed.

### `ex-tabular-insufficient-exploration-leaves-q-values-unknown`

Reviewed two-step proof and current Q-learning/Bellman definitions. Never selecting b leaves its initialized value -1 by induction regardless of the allowed step sizes at a. Gamma=0 removes future rewards, yielding exact optimal values 1 and 0; the claimed failure is of identification of b rather than a stronger failure of the visited coordinate. No source-link or diagram defect.

### `alg-sarsa-on-policy-control`

Reviewed the complete defining procedure against finite-MDP, discounted-return, episodic-error and Ionescu–Tulcea suppliers. The action is sampled at the next state using the pre-update table and retained as the next executed action; terminal successors omit the continuation and next action. Step sizes use available past information. Zero budgets/terminal starts perform no update; finite budgets terminate almost surely by the actual-rule properness premise, while infinite budgets promise prefix outputs only. AC and measurable history kernels supply the sampling law. Corrected the independently verified Yang source locator to §2.1.3.2, equations (2.31)–(2.32). Definition unchanged and uninterrupted; no diagram needed. Also checked the linked Sutton–Barto PDF (an earlier draft despite its title): Sarsa is equation (6.5), Figure 6.9, printed p.155, not equation (6.7). Corrected that locator to match the actual linked edition.

### `alg-td-zero-prediction`

Reviewed complete defining procedure and current finite-MDP, return, policy-Bellman, policy-value, episodic and Ionescu–Tulcea supplier statements. Stationary pi supplies actions, history-measurable step sizes are chosen before observing the next transition, and terminal values stay zero. Zero budget and terminal starts perform no update. Almost-sure properness gives finite-budget completion; infinite budgets output successive tables without convergence assertion. AC supports the measurable history/restart kernels. Corrected Yang locator to §2.1.1.2, equations (2.6)–(2.7), as currently displayed; the reader’s older equation (2.17) numbering is not copied. Definition unchanged; no diagram needed.

### `lem-finite-episode-policy-importance-ratio-is-unbiased`

Reviewed steps 1.1–4.1 and exact path-law, support, bounded-return and monotone-convergence suppliers. Target support gives absolute continuity on finite stopped episodes; shared environment factors cancel on behavior-positive atoms, including zero target factors. Finite trajectories are counted by length up to their first terminal hit. Almost-sure termination under both policies makes the disjoint union total; monotone convergence proves weighted absolute integrability for bounded G before signed subtraction. T=0 has unit empty ratio. Conditioning is on a positive-probability pre-action first-visit history, whose prefix probability factors from the stationary suffix. This avoids conditioning on the already selected action. No claim of finite variance is made; no diagram needed.

### `lem-optimal-action-value-is-attained-by-greedy-policy`

Reviewed all seven numbered steps against current Bellman fixed-point, policy-value, bounded-return, kernel, conditional-expectation, finite-set and limit supplier statements. Finite attained action maxima construct a greedy stationary policy; AC is explicit for selection/path laws. The conditional Bellman upper bound applies to arbitrary adapted continuations and telescopes after the prescribed first action. Uniform bounds justify dominated convergence, including gamma=0 and zero rewards. The explicit finite-history kernel law proves existence and admissibility of a greedy continuation; equality of its policy value with V* then attains the upper bound. Supremum is therefore nonempty, finite and attained. No diagram or statement-link defect. Checked Brown §2.2 in the actual PDF: policy and discounted-value discussion is on PDF pp.5–6 and the greedy optimal-policy formula is on PDF p.7 (printed p.5). Corrected the source page range from PDF pp.4–6 to pp.5–7.

### `alg-monte-carlo-policy-evaluation`

Reviewed the complete definition against current MDP/return/episodic and unbiased-importance-ratio suppliers, Yang §§2.1.1.1 and 2.1.4.1, and linked Sutton–Barto §5.5 printed pp.128–129. On-policy first visits use the sample-average recurrence; off-policy sums track weighted return, total weight and visit count separately. Zero counts or total weights produce no estimate, terminal values are zero, and only a positive denominator is divided by. Both policies are proper from every state with target support; first-visit mean statement conditions on the pre-action history. Independent finite episodes and explicit AC cover sampling; zero and infinite budgets have specified outputs. Weighted estimator is expressly allowed finite-sample bias and no convergence assertion is made. Corrected the wrong Yang MC section without changing the Definition. No diagram needed.

### `thm-tabular-q-learning-convergence-under-robbins-monro-conditions`

Reviewed steps 1.1–3.1 and all current supplier statements, including complete locally reviewed asynchronous-SA and greedy-optimality proofs. Step 1.1 constructs H’s fixed point from V*, proves gamma contraction directly by the maximum inequality, and identifies its optimal meaning using admissible greedy continuations. The deterministic bound C=max(||Q0||,M/(1-gamma)) is invariant under convex coordinate updates; the reward alphabet is nonempty because nonempty S/actions and normalized MDP masses rule out empty R. Adaptedness and the exact conditional joint observation law give bounded MDS noise |xi|<=2C. Deterministic per-pair Robbins–Monro schedules and infinite visitation match the SA lemma exactly. Gamma=0 and zero reward are valid; gamma=1 excluded; no unjustified GLIE or fixed-step extension. No diagram or statement-link defect.

### `ex-importance-sampling-needs-target-support`

Reviewed steps 1.1–2.1 against current MDP, episodic-support and MC-estimator definitions. Formal use outside the support-admissible algorithm is explicitly disclosed. Behavior always sees zero-return action a with observed ratio zero; target sees reward one through b, absent from behavior support. Every positive sample count gives ordinary estimate zero, target value one. No division by an unobserved zero denominator occurs. AC path-law premise retained; no diagram needed.

### `ex-ordinary-importance-sampling-infinite-variance`

Reviewed steps 1.1–3.1 against all actual suppliers, including exact geometric-series, continuity-from-above and monotone-convergence statements. Both policies terminate since P(N>=n)=p_a^n ->0; support is full. Recomputed Vpi=(1/2)/(1-9/20)=10/11, ratio (5/9)5^n, weighted return (5/9)(9/2)^n, and behavior second moment (5/18)sum(81/40)^n=infinity. Large-X tail comparison proves variance infinite despite finite mean. Sutton–Barto linked Example 5.5 pp.131–132 uses loops, not a two-step episode; corrected that inaccurate description, explicitly identifying this as a locally proved discounted variant. No Statement/proof change or diagram needed.

### `ex-weighted-importance-sampling-finite-sample-bias`

Reviewed steps 1.1–2.1 against MDP, episodic, MC-estimator and expectation suppliers. Weights are 3 and 1/3, both strictly positive, so one-sample self-normalization cancels to observed reward. Behavior mean 1/4, target value 3/4 and bias -1/2 are exact, with gamma=0 and finite termination. Read Yang §2.1.4.1 in full: it supplies support/ratios/ordinary IS but does not define weighted IS. Corrected this locator’s advertised scope while retaining the source and pointing to the already cited Sutton–Barto §5.5, printed p.129, for weighted IS and finite-sample bias. Example unchanged, uninterrupted and needs no diagram.

## Source evidence and repairs

The [Yang chapter](https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html) was checked at §§2.1.1.1, 2.1.1.2, 2.1.2, 2.1.3.2 and 2.1.4.1–2.1.4.3. Corrected MC to §2.1.1.1; TD to §2.1.1.2, current equations (2.6)–(2.7); Sarsa to §2.1.3.2, equations (2.31)–(2.32). The weighted-bias example now describes §2.1.4.1’s actual support/ratio/ordinary-IS scope and retains the separate weighted-estimator citation. The reader’s older TD equation numbering was not copied.

The actual [linked Sutton–Barto PDF](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf) is an earlier draft: Sarsa is equation (6.5), Figure 6.9, printed p.155. Corrected its equation locator. Read §5.5, printed pp.128–132: weighted normalization and finite-sample bias are on p.129; Example 5.5 and Figure 5.8 use looping trajectories, so corrected the infinite-variance example’s inaccurate “two-step” source description and identified its locally proved discounted variant. Also checked the optimal-value equations on printed pp.75–76 and TD equation (6.2) on p.144.

Checked [Tsitsiklis](https://www.mit.edu/~jnt/Papers/J052-94-jnt-q.pdf), §§2–3 (Assumptions 1–5, Theorem 3, Lemma 1) and §7’s Q-learning reduction. The current proofs establish the narrower bounded-noise/no-delay cases locally; no external theorem replaces them. Checked the official [Brown CS-96-08 report](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf), §§2.1–2.2: finite transition/expected-reward dynamics, discounted policies/value equations, and greedy optimal policy. Its greedy formula is on PDF p.7; corrected the greedy lemma’s advertised range from PDF pp.4–6 to printed pp.3–5 / PDF pp.5–7.

Additional closed rows outside the seven duplicate finding obligations:

- `ml101-b81-sarsa-sutton-equation`.
- `ml101-b81-infinite-variance-source-description`.
- `ml101-b81-greedy-brown-pages`.

Updated the batch source-evidence artifact with focused Alpha reading scope; preserved historical author evidence. Updated the frontier dependency ledger for owned consumers. No published supplier defect, affected outside consumer or proposed withdrawal was identified. No published content was edited and no published-consumer ledger change was needed. No scoped diagram is present or mathematically required. Statements/Definitions/Examples are already uninterrupted, with references after their complete sections; no link-moving edit was needed. Page-only obligations were empty and no page was edited.

## Local validation

- Initial `risk-report` without `--require-reviewed`: 17 items routed; 15 HIGH/CRITICAL, no tool errors. All 15 now have specific completed risk reviews. Final `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-81.proof-contracts.json --require-reviewed`: 0 errors.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-81.proof-contracts.json --strict`: final 17/17 checked, 0 errors, 0 warnings. Initial check exposed three stale supplier quote mirrors (greedy F6/F11 and Q-learning F3); refreshed only those quote strings after independently checking the actual current Statements. These mechanical mismatches created no defect rows.
- Explicit-path reflow on all six changed items: unchanged. After the last edit/formatter, ran one batched `node tools/proof-layout.mjs` over all six changed item paths: 6 items, 12 steps, 0 defects.
- Explicit-path precheck over the six changed items (in two invocations): three algorithms correctly not applicable; three proof-bearing items passed, zero failures.
- Explicit-path rendercheck over the same six items (in two invocations): zero errors or warnings.
- Ledger append serialized through the standard append tool and refreshed its generated view. Isolated validation of the seven actual appended rows: 7 checked, 0 errors. Structured coverage check: exactly seven owed decisions, correct reader/flagged routes, each mapped to exactly one closed ledger row; all fifteen required risk reviews complete.

## Owner alerts and handoff

No unresolved batch-81 mathematical escalation. The run-wide `defect-ledger validate --run machine-learning-all-101-2026-10-19` invocation failed on 10 schema errors outside this dispatch: batch-11 rows `ml101-b11-3a-sign-tail-source-locator` and `ml101-b11-3a-posterior-odds-source-locator` have invalid locations and evidence without paths; `ml101-b11-3a-dimension-radius-borel-hypothesis` and `ml101-b11-3a-natural-robust-borel-hypothesis` have invalid subclass/location fields; batch-75 rows `machine-learning-all-101-2026-10-19-3a-b75-entropy-lemma-chain-citation` and `machine-learning-all-101-2026-10-19-3a-b75-entropy-example-chain-citation` have invalid `proof` locations. Routed to the owner here; no outside rows repaired. These are mechanical failures, not new mathematical defect rows.

The live autopilot status was read from `.autopilot/machine-learning-all-101-2026-10-19` and current Git log, with no scheduling/control intervention. The engine owns decision hashes, gate battery and transitions. No judging, stamping, self-certification, publication or commit was performed. Next action: engine collection of this report/decisions and owner resolution of outside ledger schema errors before its applicable run-wide checks.
