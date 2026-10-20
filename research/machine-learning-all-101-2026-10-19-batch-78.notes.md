# Batch 78 — Contextual expert bandits

Run: `machine-learning-all-101-2026-10-19` · role: beta · batch: 78.

## Scope and controlling plan

- Own only A page `contextual-expert-bandits`, B page `contextual-expert-bandits-examples`, the six A items, three B examples, and Batch 78 evidence.
- The generated task points to ML-70 at line 484, but the current track design begins at line 503. The plan spec's ML-70 description and the complete current ML-70 section agree on the mathematical scope, hypotheses, theorem constant, examples, warnings, and proof route. This is a stale locator, not a mathematical conflict.
- The page scaffold and plan-spec `requires` field name only `adversarial-bandits-and-importance-weighted-feedback`. ML-70's `Requires` prose also names ML-65 (online protocol/regret), ML-66 (exponential-weight notation), and ML-69 (importance-weighted estimator). Preserve the assigned page requirement and declare the exact direct item edges in the authored carriers and cross-batch sidecar. Do not edit the shared plan.
- Preserve the fixed, oblivious reward/advice scope and expected regret against the best fixed expert. Do not add stochastic generalization, high-probability Exp4-IX, or current-action-reactive expert guarantees. The local proof uses Exp4 with `gamma = 0`; it does not use the bounded-loss Hedge regret theorem.

## Inventory and dependency levels

The current batch page manifest was populated before item carriers were written. Levels count all in-run item suppliers, including suppliers in other batches; published library items do not increase a level.

| Item | Page | Level | In-run supplier levels |
|---|---|---:|---|
| `def-contextual-bandit-protocol` | A | 3 | `def-online-decision-protocol` 0; `def-adversary-and-feedback-model` 1; `def-static-dynamic-and-strongly-adaptive-regret` 2 |
| `alg-exp4` | A | 4 | `def-contextual-bandit-protocol` 3; `alg-hedge` 2; `def-bandit-importance-weighted-estimator` 2 |
| `lem-exp4-unbiased-expert-reward-estimates` | A | 5 | `alg-exp4` 4; `lem-bandit-importance-weighted-estimator-has-conditional-moments` 3 |
| `lem-exp4-weighted-estimated-loss-second-moment` | A | 5 | `alg-exp4` 4; `lem-bandit-importance-weighted-estimator-has-conditional-moments` 3 |
| `lem-exp4-potential-inequality` | A | 5 | `alg-exp4` 4; `lem-exp-negative-argument-second-order-upper-bound` 0 |
| `thm-exp4-expected-regret` | A | 6 | `alg-exp4` 4; three local lemmas 5 |
| `ex-exp4-finite-two-expert-set` | B | 7 | `thm-exp4-expected-regret` 6; `alg-exp4` 4 |
| `ex-exp4-duplicated-experts-change-prior-mass` | B | 7 | `thm-exp4-expected-regret` 6; `alg-exp4` 4 |
| `ex-exp4-context-specific-expert-class` | B | 7 | `thm-exp4-expected-regret` 6; `alg-exp4` 4 |

The maximum upstream in-run batch level is Batch 77 at level 2, so Batch 78 remains level 3. The dispatch-time scheduling input is `fd344689bd1fc2065e67ed095d3deb702bb4d3ac76bf0fedb6b05ab35200b4fc`. Item edges also point directly to ML-65/ML-66 suppliers in Batches 73/74; the authored cross-batch dependency input will report these direct edges without changing the shared scheduling artifact.

Post-authoring recomputation used the repository's `dependencyLevels` and `computeBatchDependencyLevels` functions on the current full manifests. All nine assigned item levels matched the manifest and produced zero assigned-item errors. The scoped batch graph is `73: []`, `74: [73]`, `77: [73,74]`, `78: [73,74,77]`, with levels `0,1,2,3`. The full manifest scan surfaced 19 item-level errors outside Batch 78; no assigned item was among them. The shared artifact remains untouched and retains the dispatch-time direct requirement `[77]`.

The required read-only `node tools/batch-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` exited 1 with `Stale batch dependency levels for machine-learning-all-101-2026-10-19; recompute before authoring`. This is the dispatch-time artifact versus authored direct-item-edge difference above; the batch remains level 3. The shared derived artifact is owner-controlled and was not rewritten.

The scoped `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-78.proof-contracts.json --strict --json` check passed: 7 proof-bearing items checked, 0 errors, 0 warnings.

## Readiness and final scoped checks

- The ordinary `step1-decisions.mjs record` accepted all nine final items as `ready` with `owner: false`; the records are the corresponding `research/<run>-step1-<item-id>.json` files. Each binds the manifest's direct dependencies. No `--owner` option was used.
- After recording, `node tools/step1-decisions.mjs check --run machine-learning-all-101-2026-10-19` reported 1,207 items, 1,015 current-ready, `closed: false`, and no work rows for the nine assigned items or any direct in-run suppliers. The whole run remains open because of unrelated frontier work.
- Final scoped checks: precheck 7/7 proof-bearing items passed; proof-layout 9 items / 19 steps / 0 defects; rendercheck 11 files / 0 errors / 0 warnings; content-policy 9 assigned items / 0 errors / 0 warnings; strict proof-contract 7 items / 0 errors / 0 warnings; depcheck 9 assigned items and 2 pages / 0 errors / 0 warnings. The initial source-fetch check passed 3/3 occurrences and resolved 3/3 with no drops; the final recheck also passed 3/3, with 0 newly stamped and 0 drops.
- The first precheck pass exposed the native phase-layer rule and inline-tag requirement: dependent steps must advance to the next layer and each proof step's trailing tags must stay on the same paragraph line. Those authoring-format issues were corrected; the final explicit precheck passed.
- `research/machine-learning-all-101-2026-10-19-batch-78.source-evidence.json` records the complete source dispositions, per-item claims/arguments/dependencies, source locators, check outputs, and actual ready-record hashes. `research/machine-learning-all-101-2026-10-19-batch-78.coverage.json` carries the successful fetch stamps.
- Final native `autopilot status` shows Step 1 at 79/101 coverage, no workers in flight, and the pre-existing owner repair/recertification blocker at `1-scaffold`. No engine state, shared plan, verdict, or other pair was edited.

## Supplier inspection and mathematical decisions

- Read current definitions/proofs for ML-65 `def-online-decision-protocol`, `def-adversary-and-feedback-model`, and `def-static-dynamic-and-strongly-adaptive-regret`; ML-66 `alg-hedge`; and Batch 77 `def-bandit-importance-weighted-estimator`, `lem-bandit-importance-weighted-estimator-has-conditional-moments`, and `lem-exp-negative-argument-second-order-upper-bound`.
- The final full-run readiness snapshot from `node tools/step1-decisions.mjs check --run machine-learning-all-101-2026-10-19` reports 1,207 items, 1,015 current-ready, and `closed: false`; none of the seven inspected supplier IDs is in its `work` list. Thus these actual supplier records are current-ready even though the unrelated full run is not closed. Final active status was independently checked with the native autopilot `status` command; Step 1 remains held at 79/101 coverage with a pre-existing owner repair/recertification blocker and no workers in flight.
- The actual Batch 77 estimator definition and moment lemma assume `P_{t,i} > 0` for every arm. Exp4 with `gamma = 0` can have `P_{t,i} = 0`. The new algorithm uses the planned zero-quotient convention, proves all expert weights remain positive, and handles zero-probability arms locally: `P_{t,i}=0` forces every `E(t)_{m,i}=0`, so the unsupported coordinate contributes to no expert estimate. No componentwise unbiasedness claim is made for an unsupported arm.
- The main theorem uses deterministic finite advice and reward sequences fixed before learner randomization, so the best expert is nonrandom. All action histories are finite. The local expected-regret proof uses finite conditional sums and does not invoke the tower-property theorem, whose supplier requires AC. No choice axiom is used.
- The local potential lemma supplies the missing proof of Lattimore–Szepesvári Lemma 18.2 (its proof is Exercise 18.2). It applies `exp(-u) <= 1-u+u^2/2` to nonnegative estimated losses, then gives the logarithm bound `log z <= z-1` directly by the mean value theorem on both `z >= 1` and `0 < z < 1`.

## Sources read and result disposition

- Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*, author-hosted full PDF: https://tor-lattimore.com/downloads/book/book.pdf. Read the complete relevant §18.2 framework, §18.3 Algorithm 11, §18.4 Theorem 18.1 proof and estimator second-moment calculation, and the contextual finite-map example in §18.4 (PDF pp. 233–246 / printed pp. 224–237; exact local loci are recorded in Batch 78 coverage). The source states Theorem 18.1 and Lemma 18.2 but leaves the latter proof as Exercise 18.2; the A-page lemma supplies a complete proof. Its `gamma > 0` Exp4-IX branch and Exercise 18.3 are out of scope.
- Peter Auer, Nicolò Cesa-Bianchi, Yoav Freund, and Robert Schapire, “The Nonstochastic Multiarmed Bandit Problem,” full SIAM PDF: https://homepages.math.uic.edu/~lreyzin/papers/auer02.pdf. Read the complete §7 expert protocol, Exp4 algorithm, Theorem 7.1 proof (PDF pp. 17–19 / printed pp. 65–67). This is an independent historical treatment of expert advice and importance-weighted feedback, but it uses a uniform-exploration mixture and a uniform-expert assumption; those algorithm and theorem claims are out of scope and are not imported.
- Both full-text PDFs were available and inspected; no retrieval failure occurred. The initial `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-78.coverage.json --stamp` exited 0: 3/3 source occurrences fetch-verified (3 newly stamped), 3/3 resolved, 0 documented drops. A final rerun exited 0: 3/3 fetch-verified, 0 newly stamped, 3/3 resolved, 0 drops. No source-resolution recovery entry was needed.

## Per-item authoring checkpoints

The following per-item entries are authoring-time checkpoints. Their earlier “pending” check notes and “next” actions were superseded by the final scoped checks and completed batch recorded above.

### `def-contextual-bandit-protocol`

- Claim/conventions: finite `k > 1` actions, `M > 1` experts and horizon `n >= 1`; each expert gives a probability vector before the action; the reward/advice sequences are oblivious; define the best-fixed-expert reward regret and finite pre-action history.
- Dependencies: ML-65 online protocol, adversary timing and expected-regret definition, plus published random-element, filtration and expectation definitions; level 3.
- Source: Lattimore–Szepesvári §§18.2.1–18.2.2, PDF pp. 226–228 / printed pp. 217–219; Auer et al. §7, PDF p. 17 / printed p. 65. The latter's exploration variant is context only.
- Status: authored at `items/def-contextual-bandit-protocol.md`; no proof phase applies. Dependencies and level 3 match the batch manifest. Scoped YAML/render/content checks remain pending; next author `alg-exp4`.

### `alg-exp4`

- Claim/conventions: initialize uniform expert mass; mix advice as `P_t = Q_t E(t)`; sample one action; estimate rewards with the zero-quotient convention; update by normalized `exp(eta * estimated expert reward)`.
- Dependencies: local protocol, ML-66 `alg-hedge` notation, and Batch 77 importance-weighted-estimator convention; level 4. The zero-probability extension is local and separately justified.
- Source: Lattimore–Szepesvári §18.3, Algorithm 11, PDF pp. 229–230 / printed pp. 228–229; Auer et al. §7, Figure 5 and proof, PDF pp. 18–19 / printed pp. 66–67 (exploration variant not imported).
- Status: authored at `items/alg-exp4.md`; normalized mixture, zero-quotient support rule, estimated rewards, and exact exponential update are stated. By induction, $Q_t$ remains strictly positive, so unsupported actions have zero advice mass for every expert. Dependencies and level 4 match the manifest. Next prove expert-estimate unbiasedness and the weighted second-moment bound.

### `lem-exp4-unbiased-expert-reward-estimates`

- Claim/conventions: each expert's estimated reward is conditionally unbiased; unsupported actions have zero advice mass for every expert.
- Dependencies: `alg-exp4`, Batch 77 estimator definition and conditional-moment lemma, conditional expectation/expectation definitions; level 5.
- Source: Lattimore–Szepesvári §18.4, Eq. (18.10), PDF pp. 238–239 / printed pp. 229–230; Auer et al. §7 conditional unbiasedness in the Theorem 7.1 proof. Both sources' positive sampling assumptions are handled explicitly at zero support.
- Status: authored at `items/lem-exp4-unbiased-expert-reward-estimates.md`. The two-step proof uses the positive-probability moment lemma only on supported arms; strict positivity of every expert weight forces zero advice mass on unsupported arms. It does not claim an unsupported action's individual estimate is unbiased. No choice axiom is used. Dependencies and level 5 match the manifest; proof-contract and scoped format checks remain pending. Next prove the weighted second-moment bound.

### `lem-exp4-weighted-estimated-loss-second-moment`

- Claim/conventions: conditional expectation of the expert-weighted squared estimated losses is at most `k`, including zero-probability coordinates.
- Dependencies: `alg-exp4`, Batch 77 estimator/moment suppliers, conditional expectation/expectation definitions; level 5.
- Source: Lattimore–Szepesvári §18.4, Eq. (18.12) and following `P_t = Q_t E(t)` calculation, PDF pp. 239–240 / printed pp. 230–231; Auer et al. §7 second-moment part of the Theorem 7.1 proof, with its exploration mixture excluded.
- Status: authored at `items/lem-exp4-weighted-estimated-loss-second-moment.md`. The finite conditional calculation uses the batch-77 second-moment identity on supported arms, the fact that only one arm estimate is nonzero per action, and `P_t=Q_tE(t)`; zero-probability coordinates contribute zero. The bound is at most `k`, including reward endpoints. No choice axiom is used. Dependencies and level 5 match the manifest; proof-contract and scoped format checks remain pending. Next prove the potential inequality.

### `lem-exp4-potential-inequality`

- Claim/conventions: for every fixed expert, cumulative estimated reward advantage over the current mixture is at most `log(M)/eta` plus `eta/2` times the cumulative expert-weighted squared estimated loss.
- Dependencies: `alg-exp4`, Batch 77 nonpositive-axis exponential inequality, natural-log laws/derivative, and mean value theorem; level 5.
- Source: Lattimore–Szepesvári §18.4, Lemma 18.2 and its Exercise 18.2 pointer, PDF pp. 238–239 / printed pp. 229–230; the proof is authored locally.
- Status: authored at `items/lem-exp4-potential-inequality.md`. The local proof derives `log(s) <= s-1` on all `s>0` by the mean value theorem, applies the nonpositive exponential bound to `-eta * estimated loss`, telescopes the normalized weights, and compares to any fixed expert. It completes the source's Exercise 18.2 rather than importing an omitted proof. No choice axiom is used. Dependencies and level 5 match the manifest; proof-contract and scoped format checks remain pending. Next prove the expected-regret theorem after the second-moment lemma.

### `thm-exp4-expected-regret`

- Claim/conventions: under the stated oblivious fixed finite reward/advice model, `eta = sqrt(2 log(M)/(n k))` yields expected regret at most `sqrt(2 n k log M)`.
- Dependencies: the protocol/regret definitions, Exp4, all three local lemmas, expectation linearity and natural-log/square-root definitions; level 6.
- Source: Lattimore–Szepesvári §18.4, Theorem 18.1, PDF pp. 238–240 / printed pp. 229–231. Its proof is fully reconstructed from the local potential and second-moment lemmas.
- Status: authored at `items/thm-exp4-expected-regret.md`; the proof fixes a nonrandom best expert, identifies expected true and estimated reward gaps by finite conditional sums, applies the local potential inequality, bounds its quadratic term by `nk`, and tunes the learning rate. It avoids the AC-requiring tower-property supplier and uses no choice axiom. Dependencies and level 6 match the manifest; proof-contract and scoped format checks remain pending. Next author the B examples in level order.

### `ex-exp4-finite-two-expert-set`

- Claim/conventions: a one-round, two-action, two-expert deterministic instance has expected reward `1/2`, best expert reward `1`, and expected regret `1/2`.
- Dependencies: contextual protocol, algorithm and expected-regret theorem; level 7.
- Source: Lattimore–Szepesvári §§18.2.1–18.4, PDF pp. 226–240 / printed pp. 217–231; finite values are calculated locally.
- Status: authored at `items/ex-exp4-finite-two-expert-set.md`; direct finite calculation gives $P_1=(1/2,1/2)$, learner expected reward $1/2$, comparator reward $1$, and regret $1/2$; the theorem specialization is $\sqrt{4\log2}$. Dependencies and level 7 match the manifest. Proof-contract and scoped format checks remain pending. Next author the duplicated-expert example.

### `ex-exp4-duplicated-experts-change-prior-mass`

- Claim/conventions: two duplicate deterministic experts among three experts receive equal updates, while their combined initial mass makes the first action distribution `(2/3, 1/3)`.
- Dependencies: contextual protocol, algorithm and expected-regret theorem; level 7.
- Source: Lattimore–Szepesvári §18.3 Algorithm 11 and §18.4 Theorem 18.1, PDF pp. 229–240 / printed pp. 228–231; finite calculations are local.
- Status: authored at `items/ex-exp4-duplicated-experts-change-prior-mass.md`. With rows $(1,0),(1,0),(0,1)$, the initial mixture is $(2/3,1/3)$; deleting one duplicate gives $(1/2,1/2)$. Identical rows keep equal weights. At the theorem's tuned rate $\eta=\sqrt{\log3/n}$, the regret bound specializes to $\sqrt{4n\log3}$. Dependencies and level 7 match the manifest. Proof-contract and scoped format checks remain pending. Next author the context-specific expert-class example.

### `ex-exp4-context-specific-expert-class`

- Claim/conventions: all deterministic maps from a finite context set of size `c` to `k` actions form `M = k^c` experts and give the stated `sqrt(2 n k c log k)` bound; no cross-context sharing or generalization claim is made.
- Dependencies: contextual protocol, algorithm, expected-regret theorem and logarithm product law; level 7.
- Source: Lattimore–Szepesvári §18.4 finite-context example, PDF pp. 240 / printed p. 231; all arithmetic is verified locally.
- Status: authored at `items/ex-exp4-context-specific-expert-class.md`. Counting all maps on $c$ contexts gives $M=k^c$ one-hot advice rows; with the theorem's tuned rate, the bound is $\sqrt{2nkc\log k}$. The example claims only finite-sequence regret and no statistical generalization. Dependencies and level 7 match the manifest. All assigned item carriers are now written; next author the two frontmatter-only pages and evidence ledgers.

## Page checkpoint

- Authored `library/machine-learning/contextual-expert-bandits.md` with the six A-page items and the assigned `requires` edge to Batch 77; authored `library/machine-learning/contextual-expert-bandits-examples.md` with the three B examples and its same-pair A-page requirement.
- Both page bodies are empty and contain YAML frontmatter only. No summary text or `page_layout` flag was authored; the native engine owns the compact-layout flag.
