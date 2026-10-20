# Batch 77 — Adversarial bandits and importance-weighted feedback

Run: `machine-learning-all-101-2026-10-19` · role: beta · batch: 77.

## Scope and controlling plan

- Own only A page `adversarial-bandits-and-importance-weighted-feedback`, B page `adversarial-bandits-and-importance-weighted-feedback-examples`, their three planned A items, three B examples, two local prerequisite lemmas, and Batch 77 evidence.
- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the complete ML-69 plan section, the controlling ML-69 description in `research/plan-spec.json`, the beta-scaffold brief, current owner direction, Batch 77 page scaffold, and the current dependency-level input.
- The plan description and ML-69 section agree on the oblivious reward model, loss-based estimator, Exp3 probabilities, learning-rate schedule, expected regret bound, examples, and warnings. The page `requires` entry names ML-66 only, while the ML-69 `Requires` prose also names ML-65. Preserve the page requirement as assigned; declare the exact ML-65 protocol, adversary, and regret item dependencies in the relevant carriers. This makes the ML-65 item edges explicit without changing the shared plan or the page inventory.
- The scheduling input is `1d686fe8e9d0c0983909ff0c6ac8d5781f279c08ce6b0f6f718c860efbcd2da7`: Batch 77 is level 2 and lists Batch 74. The actual item dependencies also reach Batch 73 through ML-65 definitions; Batch 73 is already a prerequisite of the Batch 74 Hedge page, and the maximum batch level remains 2. The shared dependency-level artifact is not edited; recompute/check it after this manifest change and record any stale-input result for the owner.

## Inventory and item dependency levels

The inventory and dependencies were added to the Batch 77 scaffold manifest before writing item carriers. Published suppliers do not increase levels. Batch 73 items have levels 0 (`def-online-decision-protocol`), 1 (`def-adversary-and-feedback-model`), and 2 (`def-static-dynamic-and-strongly-adaptive-regret`); Batch 74 supplies `alg-hedge` at level 2.

| Item | Page | Level | In-run supplier levels |
|---|---|---:|---|
| `lem-exp-negative-argument-second-order-upper-bound` | A | 0 | none |
| `def-bandit-importance-weighted-estimator` | A | 2 | protocol 0; adversary/feedback 1 |
| `lem-bandit-importance-weighted-estimator-has-conditional-moments` | A | 3 | estimator 2 |
| `alg-exp3` | A | 3 | estimator 2; Hedge 2 |
| `thm-exp3-expected-regret` | A | 4 | Exp3 3; regret definition 2; estimator 2 |
| `ex-rare-arm-importance-weighted-estimator` | B | 4 | moment lemma 3; estimator 2 |
| `ex-deterministic-rewards-importance-weighted-feedback` | B | 4 | moment lemma 3; estimator 2 |
| `ex-exp3-and-full-information-hedge-differ` | B | 4 | Exp3 3; Hedge 2 |

No dependency cycle is present. After drafting the estimator interface, the conditional moment identities were treated as an intermediate result rather than an unproved property of a definition. The inventory was amended before writing that carrier to add `lem-bandit-importance-weighted-estimator-has-conditional-moments` at level 3. Authoring order: local exponential lemma, estimator definition, conditional-moment lemma, Exp3 algorithm, the two estimator examples, the Exp3/Hedge comparison, then the regret theorem.

Post-authoring scoped recomputation using the project's exported `dependencyLevels` and `computeBatchDependencyLevels` functions over the actual Batch 73, 74, and 77 manifests returned no item-level errors and the eight levels listed above. It gives the direct batch graph `73: []`, `74: [73]`, `77: [73,74]`, with Batch 77 still at level 2. The original scheduling artifact lists only `[74]` because it predates authored item dependencies; shared artifact reconciliation remains with the owner. The required full-run `batch-dependency-levels check` is blocked by an unrelated invalid YAML escape in `items/thm-policy-gradient-theorem.md:39` (`\gamma` in a double-quoted locator); the parser reports line 38, column 146. This source is outside Batch 77 and was left untouched.

## Prerequisite inspection and mathematical decisions

- Read the current Batch 73 definitions `def-online-decision-protocol`, `def-adversary-and-feedback-model`, and `def-static-dynamic-and-strongly-adaptive-regret`. Their exact interfaces establish past-history choice before feedback, distinguish oblivious and non-anticipating from current-action-reactive environments, and define fixed-comparator expected regret. This is interface inspection, not independent review.
- Read the actual Batch 74 `alg-hedge` definition and the Hedge page frontmatter. The algorithm supplies normalized exponential weights, measurable categorical draws, and the full-information weight update. Do not use `thm-hedge-static-regret` in the Exp3 proof: its bounded-loss theorem does not cover importance-weighted estimates.
- Read the published conditional-expectation, filtration, expectation, exponential, and real mean-value suppliers cited by the new items. The local lemma proves the needed inequality rather than importing an unstated Taylor remainder.
- The Exp3 proof uses the estimator `\widehat X_{t,i}=1-\widehat Y_{t,i}`. Its values are bounded above by 1 but can be arbitrarily negative; the argument uses `\exp(z)\le1+z+z^2/2` for `z\le0` and the weighted quadratic loss estimate. It does not apply bounded-loss Hedge to those estimates.
- The adaptive extension is stated only for reward vectors measurable from the history before the current action, with expected fixed-arm regret `max_i E[sum_t (x_{t,i}-X_t)]` (maximum outside expectation). It does not assert an expected in-hindsight maximum bound or policy regret under counterfactual current-action-reactive rewards.
- Lattimore–Szepesvári call past-history-dependent rewards “reactive or non-oblivious” in §11.5 Note 4. The library's current definition reserves “reactive” for rewards chosen after observing the current action. Use the local timing terminology and state the comparator convention explicitly.

## Sources read and result disposition

- Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*, https://tor-lattimore.com/downloads/book/book.pdf: Chapter 11 §§11.1–11.4, PDF pp. 157–166 / printed pp. 148–157, for the oblivious protocol, expected-regret definition, loss-based estimator's conditional moments, Exp3 update, potential calculation, and Theorem 11.2; §11.5 Note 4, PDF pp. 167–168 / printed pp. 158–159, for past-history dependence and the policy-regret caveat. The full source text and complete relevant calculations were inspected. The source's proof is used as a route, but every proof step is supplied locally.
- Peter Auer, Nicolò Cesa-Bianchi, Yoav Freund, and Robert Schapire, “The Nonstochastic Multiarmed Bandit Problem,” https://homepages.math.uic.edu/~lreyzin/papers/auer02.pdf: §3, PDF pp. 3–7 / SIAM printed pp. 50–55, for the alternative importance-weighted reward estimator and a complete exponential-potential expected-regret proof. This treatment uses a uniform-exploration mixture and a different bound; it cross-checks the importance-weighted and potential method only. Its mixture algorithm and theorem constants are out of scope and are not imported.
- Retrieval through the browser's full-text PDF views succeeded for both sources. `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-77.coverage.json --stamp` returned `3/3 source(s) fetch-verified (3 newly stamped)` and `3/3 source(s) resolved (0 documented drops)`; the exact URL stamps are in the coverage file.

## Per-item authoring checkpoints

### `lem-exp-negative-argument-second-order-upper-bound`

- Claim and convention: for every real `z <= 0`, `exp(z) <= 1 + z + z^2/2`; equality at `z=0` is explicit. No axiom is used.
- Argument: with `g(t)=1+t-exp(t)`, the derivative and monotonicity of the exponential imply `g'(t)>=0` on the nonpositive axis. The mean value theorem makes `g` nondecreasing, so `g(t)<=g(0)=0` there. Applying the same theorem to `f(t)=1+t+t^2/2-exp(t)`, with `f'=g`, gives `f(z)>=f(0)=0`.
- Dependencies: `def-real-exponential-function-and-e`, `thm-derivative-of-exponential`, `thm-exponential-is-strictly-increasing`, and `lem-mean-value-theorem-on-closed-interval`; all are published and their relevant statements/proofs were inspected.
- Source: Lattimore–Szepesvári, *Bandit Algorithms*, §11.4, Eq. (11.14) and Theorem 11.2 proof, https://tor-lattimore.com/downloads/book/book.pdf, PDF pp. 164–165 / printed pp. 155–156. The source states the inequality; the carrier supplies the full local derivative/MVT proof.
- Validation: Final scoped checks passed for this item; batch results and remaining run-wide blockers are recorded below.

### `def-bandit-importance-weighted-estimator`

- Claim and conventions: finite arms and horizon; $x_t\in[0,1]^k$ and strictly positive $P_t\in\Delta_k$ are determined before the current draw; observe only $X_t=x_{t,A_t}$; set $Y_t=1-X_t$, $\widehat Y_{t,i}=\mathbf1\{A_t=i\}Y_t/P_{t,i}$, and $\widehat X_{t,i}=1-\widehat Y_{t,i}$. A fixed sequence is oblivious; a deterministic past-history sequence is non-anticipating.
- Dependencies: the online protocol, adversary/feedback timing, random elements, filtration, conditional expectation, and expectation definitions. The two in-run item suppliers are Batch 73 `def-online-decision-protocol` (level 0) and `def-adversary-and-feedback-model` (level 1), giving item level 2.
- Source locators: Lattimore–Szepesvári, *Bandit Algorithms*, §§11.1–11.2, PDF pp. 157–161 / printed pp. 148–152, Eqs. (11.3)–(11.6); Auer et al., “The Nonstochastic Multiarmed Bandit Problem,” §3, PDF pp. 3–5 / printed pp. 50–52. Both source passages were inspected in full. The conditional moment identities are not asserted as part of the definition; their proof is supplied by `lem-bandit-importance-weighted-estimator-has-conditional-moments`.
- Validation: Final scoped checks passed for this item; batch results and remaining run-wide blockers are recorded below.

### `lem-bandit-importance-weighted-estimator-has-conditional-moments`

- Claim and conventions: conditional on a pre-action history, the loss estimator has mean $y_{t,i}$, second moment $y_{t,i}^2/P_{t,i}$, and variance $y_{t,i}^2(1-P_{t,i})/P_{t,i}$ for $P_{t,i}>0$.
- Argument: at that history, the estimator has only two possible values: $y_{t,i}/P_{t,i}$ with probability $P_{t,i}$ and zero otherwise. Direct finite conditional sums give the first two moments; centering those two values gives the displayed variance.
- Dependencies: the estimator definition (in-run level 2), filtration, conditional expectation, and expectation definitions. This gives item level 3. No choice axiom is used.
- Source locators: Lattimore–Szepesvári, *Bandit Algorithms*, §11.2, Eqs. (11.4)–(11.5), PDF pp. 159–160 / printed pp. 150–151; Auer et al., §3 proof of Theorem 3.1, Eq. (11), PDF p. 7 / printed p. 55. Both conditional calculations were inspected; Auer's exploration mixture is not imported.
- Validation: Final scoped checks passed for this item; batch results and remaining run-wide blockers are recorded below.

### `alg-exp3`

- Claim and conventions: for known finite horizon $n$, $k>1$ arms, and $\eta>0$, initialize estimated cumulative rewards at zero, sample proportionally to $\exp(\eta\widehat S_{t-1,i})$, observe only the played reward, use $\widehat X_{t,i}=1-\mathbf1\{A_t=i\}(1-X_t)/P_{t,i}$, and accumulate estimates. All arithmetic is over exact real numbers; no probability-space construction is claimed.
- Well-definedness: by induction, cumulative estimates are finite; positive exponential weights give a positive finite denominator and strictly positive action probabilities; the observed estimate and update are then finite.
- Dependencies: the estimator definition, ML-66 `alg-hedge` exponential-weight notation, the exponential definition/positivity, and measurable finite-valued random elements. The only in-run suppliers are the estimator at level 2 and Batch 74 `alg-hedge` at level 2, giving level 3.
- Source locators: Lattimore–Szepesvári, *Bandit Algorithms*, §11.3, Algorithm 9 and Eq. (11.7), PDF pp. 160–161 / printed pp. 151–152; Auer et al., §3, Figure 1, PDF p. 5 / printed p. 52. The Auer version adds uniform exploration; only its exponential-weight architecture is context, not the algorithm or bound used here.
- Validation: Final scoped checks passed for this item; batch results and remaining run-wide blockers are recorded below.

### `ex-rare-arm-importance-weighted-estimator`

- Claim and conventions: with deterministic rewards $(0,1)$ and sampling probabilities $(1/10,9/10)$, the first arm's loss estimate is 10 with probability $1/10$ and zero otherwise; its mean is 1, second moment 10, variance 9, and reward estimate can be $-9$.
- Argument: compute the two estimator values from the definition, then apply the conditional-moment lemma at $y=1$, $p=1/10$ and subtract the conditional mean from the reward estimate.
- Dependencies: estimator definition and its conditional-moment lemma (in-run levels 2 and 3), giving level 4. No result about algorithm performance is used.
- Source locator: Lattimore–Szepesvári, *Bandit Algorithms*, §11.2, PDF pp. 159–161 / printed pp. 150–152. The estimator/moment conventions are sourced there; the finite numerical witness is calculated locally.
- Validation: Final scoped checks passed for this item; batch results and remaining run-wide blockers are recorded below.

### `ex-deterministic-rewards-importance-weighted-feedback`

- Claim and conventions: for deterministic rewards $(1,0)$ and probabilities $(3/4,1/4)$, arm 2's loss estimate is 4 with probability $1/4$ and zero otherwise; its mean, second moment, and variance are 1, 4, and 3. Its reward estimate can equal $-3$.
- Argument: compute the two outcomes from the estimator definition, then substitute $y=1$, $p=1/4$ in the conditional-moment lemma; subtract the loss estimate from 1 for the reward estimate.
- Dependencies: estimator definition and conditional-moment lemma (in-run levels 2 and 3), giving level 4. No theorem about Exp3 performance is used.
- Source locator: Lattimore–Szepesvári, *Bandit Algorithms*, §11.2, PDF pp. 159–161 / printed pp. 150–152. The exact finite parameter choice and arithmetic are local.
- Validation: Final scoped checks passed for this item; batch results and remaining run-wide blockers are recorded below.

### `ex-exp3-and-full-information-hedge-differ`

- Claim and conventions: for one round, rewards $(1,0)$ and $\eta>0$, full-information Hedge moves from $(1/2,1/2)$ to $(e^\eta/(e^\eta+1),1/(e^\eta+1))$. Exp3 stays uniform after drawing arm 1 and moves to $(e^\eta/(e^\eta+e^{-\eta}),e^{-\eta}/(e^\eta+e^{-\eta}))$ after drawing arm 2; both differ from full-information Hedge.
- Argument: compute the two Exp3 estimator outcomes and the full-information Hedge loss update; strict increase of the exponential proves the resulting distributions differ in each action branch.
- Dependencies: `alg-exp3` (level 3), Batch 74 `alg-hedge` (level 2), and the estimator/exponential interfaces, giving level 4. No regret theorem is used.
- Source locator: Lattimore–Szepesvári, *Bandit Algorithms*, §11.3, Algorithm 9 and Eq. (11.7), PDF pp. 160–161 / printed pp. 151–152. The full-information update itself is checked against the actual Batch 74 alg-hedge supplier.
- Validation: Final scoped checks passed for this item; batch results and remaining run-wide blockers are recorded below.

### `thm-exp3-expected-regret`

- Claim and conventions: for an oblivious $[0,1]$ reward sequence and $\eta=\sqrt{2\log(k)/(nk)}$, Exp3 has expected fixed-arm regret at most $\sqrt{2nk\log k}$. The pre-action deterministic past-adaptive extension is also stated with $\max_i$ outside expectation; no high-probability, expected in-hindsight maximum, or current-action-reactive policy-regret claim is made.
- Argument: the locally proved nonpositive-axis exponential inequality bounds the exponential weight ratio by expected weighted estimated reward plus $\eta^2V_t/2$. Telescope the potential against each arm; the conditional moments bound $\mathbb E[V_t\mid\mathcal F_{t-1}]\le k$; conditional unbiasedness and the pathwise identity $\sum_iP_{t,i}\widehat X_{t,i}=X_t$ identify the expected arm gap. Tuning balances $\log k/\eta$ and $\eta nk/2$.
- Dependencies: Exp3, estimator and its conditional-moment lemma, local exponential lemma, exact ML-65 protocol/adversary/regret definitions, conditional expectation/filtration/expectation facts, and exponential/logarithm facts. The largest in-run item level is Exp3 and the moment lemma at level 3, so the item level is 4. No choice axiom is used; histories at finite horizon have finitely many action outcomes.
- Sources: Lattimore–Szepesvári, *Bandit Algorithms*, §§11.1–11.4, Theorem 11.2 and complete potential proof, https://tor-lattimore.com/downloads/book/book.pdf, PDF pp. 157–166 / printed pp. 148–157; §11.5 Note 4, PDF pp. 167–168 / printed pp. 158–159. Auer et al., “The Nonstochastic Multiarmed Bandit Problem,” §3, complete Theorem 3.1 proof, https://homepages.math.uic.edu/~lreyzin/papers/auer02.pdf, PDF pp. 5–7 / printed pp. 52–55. Auer's algorithm includes a uniform-exploration mixture, so its algorithm and constants are not imported. Lattimore–Szepesvári use “reactive” for past-history-dependent vectors in Note 4; the theorem uses this library's non-anticipating terminology and explicitly defines the expected comparator.
- Validation: Final scoped checks passed for this item; batch results and remaining run-wide blockers are recorded below.

## Pages

- A page frontmatter lists the five A items in dependency order; B page frontmatter lists the three example items in `examples`. Both page bodies are empty, with no summary text and no authored `page_layout` flag.
- Page-level requirements remain the assigned `hedge-and-online-gradient-descent` page for A and the A page for B. The A page's item edges separately name the ML-65 protocol/adversary/regret suppliers required by the controlling description.

## Final checks and readiness

- Final scoped checks: proof-layout on all eight assigned items passed (8 items, 22 steps, 0 defects); precheck passed for the six proof-bearing items (6 checked, 0 failures); rendercheck passed for eight items and two pages (10 files, 0 errors/warnings); content-policy passed for the Batch 77 manifest (8 items, 0 errors/warnings); strict proof-contract passed for all six proof-bearing items (6 checked, 0 errors/warnings); focused depcheck passed for all eight items and two pages (0 errors/warnings); source-fetch-check --stamp passed (3/3 source occurrences fetch-verified and resolved).
- The post-authoring scoped dependency recomputation found no item-level errors and the expected levels 0, 2, 3, 3, 4, 4, 4, 4. Its batch graph is 73: [], 74: [73], 77: [73,74], so Batch 77 remains level 2. The shared dependency artifact still lists only [74] for 77 and must be reconciled by the owner after authors drain. The full batch dependency check remains blocked by the out-of-scope malformed YAML escape at items/thm-policy-gradient-theorem.md:39 (parser line 38, column 146).
- Ordinary step1-decisions check recomputed 1,037 run items and found 771 current-ready; all eight Batch 77 items and all four item suppliers (def-online-decision-protocol, def-adversary-and-feedback-model, def-static-dynamic-and-strongly-adaptive-regret, alg-hedge) are absent from unresolved work. The run-wide check exits 1 because 266 other items and 44 empty scaffold pages remain unresolved; this is not a Batch 77 blocker. Eight non-owner ready records were written with their direct dependency IDs and current hashes.
- Current autopilot status is 64/101 batches covered, with missing assignment IDs including 6, 10, 40, 41, 42, 45, 49, 52 and 29 more; no worker is in flight. Stage 1 remains held by the pre-existing owner repair/recertification blocker recorded at research/machine-learning-all-101-2026-10-19-step1-blockers.json. Batch 77 did not edit owner state or shared plans.
- Plan comparison: the ML-69 plan and plan-spec agree on the mathematical scope. The page-level requires field lists Batch 74, while ML-69 Requires prose also names ML-65; the three direct ML-65 item edges are explicit in carriers and the cross-batch record. This is recorded, not changed in the shared plan.
- No proof uses an additional axiom or imports the bounded-loss Hedge regret theorem. Both pages remain frontmatter-only with empty bodies. Readiness records are Step 1 records, not independent mathematical approval.
