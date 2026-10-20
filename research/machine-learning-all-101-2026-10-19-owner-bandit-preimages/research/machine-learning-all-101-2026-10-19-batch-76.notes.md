# Batch 76 authoring notes

Run: `machine-learning-all-101-2026-10-19` · pair: `stochastic-finite-armed-bandits` · role: beta.

## Controlling plan and scope

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the exact Batch 76 dispatch and task, the current owner direction, the complete ML-68 design in `research/plan-machine-learning-track.md`, its matching `research/plan-spec.json` row, the current supplier reconciliation, the Batch 76 scaffold manifest, and `research/machine-learning-all-101-2026-10-19-batch-dependency-levels.json`.

The current owner direction preserves all approved claims and requires ordinary full-run readiness recording. The ML-68 design and matching `plan-spec` row agree on both page IDs, title, category, order, all six A-page requirements, the eight proposed interface items, source model, theorem constants, expected-regret qualification, examples, and the fixed-prefix proof route. The plan-spec description additionally points to the current supplier reconciliation; that reconciliation contains no ML-68-specific change. No mathematical or page-metadata conflict was found. The plan and shared run artifacts were not edited.

The source model uses a jointly independent finite table of per-arm reward stacks. A learner chooses from past observed history and independent private randomness, then receives the next unused reward from the selected arm. The table-law/conditional-mean compatibility is an explicit local lemma before any use of the online regret-decomposition supplier. All tail bounds are applied at deterministic table prefixes and then union-bounded; no fixed-sample bound is applied at a random pull count. The regret results are expectations, not high-probability guarantees. No Axiom of Choice is used: all products and sums are finite, and arm maximizers use the least-index tie rule.

## Live run and scheduling evidence

`autopilot status` initially observed 29/101 batches; the latest recomputation at 2026-10-18T22:11:05.471Z shows the run still `running` at `1-scaffold`, 46/101 covered, no active worker, and the existing owner-repair blocker in `research/machine-learning-all-101-2026-10-19-step1-blockers.json`. Git HEAD at verification was `50139bdcb6` (“Defer compact construction artifact scans until author drain”), preceded by workflow-driver changes `dd17c1fe56` and `33652e72f0`; active coverage and blockers were taken from the recomputed run status. Batch 76 authoring continued independently of batch 73; no engine transition or owner file was changed.

The dispatch scheduling input is `44f42432081c28231e03f4e1409845c58bae572cf93e7edcf5814a4490b232af`, while the current dependency-level artifact's embedded `input_sha256` is `4c693476eaf104b5816a67b6ddafcf6f499863f314d6b6c8ab7c9cce2209a13a`. These hashes differ, so `scheduling_hash_conflict` is recorded. The dispatch and dependency-level artifact agree that batch 76 is level 1 and requires batch 73; no shared scheduling artifact was changed.

## Item inventory and dependency levels

The initial 13-item inventory was extended by two locally proved A-page prerequisites after the heavy-tail example audit found that countable expectation and the two normalizing series needed explicit interfaces. The current manifest is the controlling 15-item inventory. Suppliers precede consumers; the level is zero without in-run suppliers and otherwise one plus their maximum level.

| Item | Direct in-run suppliers | Level |
|---|---|---:|
| `def-centered-subgaussian-reward` | — | 0 |
| `lem-zeta-two-and-three-converge` | — | 0 |
| `lem-countably-valued-expectation-is-weighted-series` | — | 0 |
| `lem-independent-subgaussian-prefix-tail` | `def-centered-subgaussian-reward` | 1 |
| `def-stochastic-bandit-and-pseudo-regret` | `def-online-decision-protocol` (batch 73), `def-adversary-and-feedback-model` (batch 73), `def-static-dynamic-and-strongly-adaptive-regret` (batch 73) | 3 |
| `alg-explore-then-commit` | `def-stochastic-bandit-and-pseudo-regret` | 4 |
| `alg-upper-confidence-bound-bandit` | `def-stochastic-bandit-and-pseudo-regret` | 4 |
| `lem-bandit-reward-table-has-fixed-conditional-laws` | `def-stochastic-bandit-and-pseudo-regret`, `def-adversary-and-feedback-model` (batch 73) | 4 |
| `lem-ucb-suboptimal-arm-expected-pulls` | `def-stochastic-bandit-and-pseudo-regret`, `def-centered-subgaussian-reward`, `alg-upper-confidence-bound-bandit`, `lem-independent-subgaussian-prefix-tail` | 5 |
| `thm-explore-then-commit-expected-regret` | `def-stochastic-bandit-and-pseudo-regret`, `def-centered-subgaussian-reward`, `alg-explore-then-commit`, `lem-bandit-reward-table-has-fixed-conditional-laws`, `def-adversary-and-feedback-model` (batch 73), `lem-independent-subgaussian-prefix-tail`, `lem-finite-arm-regret-decomposes-into-expected-action-counts` (batch 73) | 5 |
| `thm-ucb-gap-dependent-regret` | `def-stochastic-bandit-and-pseudo-regret`, `def-centered-subgaussian-reward`, `alg-upper-confidence-bound-bandit`, `lem-bandit-reward-table-has-fixed-conditional-laws`, `lem-ucb-suboptimal-arm-expected-pulls`, `lem-finite-arm-regret-decomposes-into-expected-action-counts` (batch 73) | 6 |
| `thm-ucb-gap-free-regret` | `def-stochastic-bandit-and-pseudo-regret`, `def-centered-subgaussian-reward`, `alg-upper-confidence-bound-bandit`, `lem-bandit-reward-table-has-fixed-conditional-laws`, `lem-ucb-suboptimal-arm-expected-pulls`, `lem-finite-arm-regret-decomposes-into-expected-action-counts` (batch 73) | 6 |
| `ex-two-arm-deterministic-gap` | `def-stochastic-bandit-and-pseudo-regret`, `def-centered-subgaussian-reward`, `alg-explore-then-commit`, `thm-explore-then-commit-expected-regret` | 6 |
| `ex-tied-optimal-bandit-arms` | `def-stochastic-bandit-and-pseudo-regret` | 4 |
| `ex-heavy-tailed-reward-law-outside-subgaussian-model` | `def-stochastic-bandit-and-pseudo-regret`, `def-centered-subgaussian-reward`, `lem-zeta-two-and-three-converge`, `lem-countably-valued-expectation-is-weighted-series` | 4 |

`dependency-inputs.json` records all 15 item levels, the five published required pages, and the in-run batch-73 page. `cross-batch-dependencies.json` records nine open rows: one page edge and eight exact item edges. The actual batch-73 draft supplier bodies and proofs were inspected in full, but ordinary full-run Step-1 readiness/currency remains unauthenticated; keep every cross-batch row `open` until the normal snapshot verifies it.

## Supplier inspection

- Batch 73 current draft `def-online-decision-protocol` gives action-before-feedback timing. `def-adversary-and-feedback-model` defines fixed finite arm laws, finite first moments, and the conditional reward-law/conditional-mean identity. `def-static-dynamic-and-strongly-adaptive-regret` distinguishes pseudo-regret, realized reward regret, and expected regret.
- Batch 73 current draft `lem-finite-arm-regret-decomposes-into-expected-action-counts` states and proves $$E[R_n^{\rm rew}]=E[\bar R_n]=\sum_i(\mu^*-\mu_i)E[T_i(n)]$$ assuming its explicit eventwise conditional-mean identity. Its proof uses only finite partitions and sums, expectation linearity, and indicator expectations. The local reward-table lemma proves this premise for the table model.
- Published probability suppliers inspected include `def-independent-random-elements`, `thm-independent-random-elements-have-product-joint-law`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `cor-markov-inequality-for-random-variables`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `cor-additivity-of-the-nonnegative-lebesgue-integral`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, and `cor-expectation-of-an-indicator-is-probability`. The product-law proof is finite and uses no choice axiom; Tonelli applies because all factors are probability measures.
- The real-analysis suppliers inspected include the power-series definition and absolute convergence of `exp`, its addition formula, continuity and positivity, the factorial and canonical-natural positivity interfaces, the natural-log inverse definition, and the natural-log product/quotient laws. This fixes the exact natural-log convention in the UCB indices and constants. The final heavy-tail audit also inspected the weighted-Dirac measure construction, law/change-of-variables result, Archimedean bound, and nonnegative-series partial-sum theorem.
- All five external required page carriers were checked current and `published`. The required in-run online-protocol page is `draft`; the owner direction permits it as context but readiness is still a separate full-run check.

## Source reading and fetch evidence

- Lattimore–Szepesvári, *Bandit Algorithms*, full author-provided PDF: `https://tor-lattimore.com/downloads/book/book.pdf`. Read §4.1 p.65; §§4.4–4.5 pp.69–72; §5.3 pp.86–87; §6.1 pp.100–103 and exercises pp.105–110; §7.1 pp.111–118, the fixed-prefix warning p.112, and Exercise 7.1 pp.120–121. The book explicitly leaves the independent-sub-Gaussian sum step to Exercise 5.7 and the ETC difference-tail step to Exercise 6.1; both are local proof obligations. Its UCB proof unions over deterministic sample prefixes and its Exercise 7.1 warns against a fixed-sample bound at a random sample count.
- Bubeck–Cesa-Bianchi, *Regret Analysis of Stochastic and Nonstochastic Multi-armed Bandit Problems*, full monograph: `https://arxiv.org/pdf/1204.5721`. Read Chapter 2 §§2.1–2.2, PDF pp.11–15, including Equation (2.2), Theorem 2.1 and the complete proof. It supplies an independent general-MGF UCB treatment with a different confidence schedule and constants; those are not substituted for the assigned fixed-confidence theorem.
- A second candidate, Prashanth L. A., *CS6046: Multi-armed Bandits* (`https://cse.iitm.ac.in/~prashla/cs6046/cs6046-notes.pdf`), was fetched and PDF pp.1–7 inspected, then dropped from the active sources because the cover explicitly says “Rough draft. Do not distribute.” The two complete public treatments above supply the source requirement. Its successful fetch stamp and disposition remain in `batch-76.coverage.json`.
- `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-76.coverage.json --stamp` succeeded for all four active sources: 4/4 fetch-verified, two newly stamped, 4/4 resolved, and no retrieval failures or recovery retries. The bandit pair's two independent full texts remain Lattimore–Szepesvári and Bubeck–Cesa-Bianchi; Semmes and Hunter provide the exact results used by the two local prerequisites.

## Current completion state

The final manifest contains 15 items: 12 on the A page (including the two locally proved prerequisites) and three examples on the B page. All carriers, proof contracts, dependency/source evidence, and both frontmatter-only pages are complete. The page bodies are empty; `page_layout` remains for the engine's mechanical pass. Four items have current `ready` records and eleven remain escalated for unauthenticated Batch 73 suppliers. The final checks and owner obligations are recorded at the end of this file.

The item checkpoint blocks below preserve their contemporaneous “Next” and “Validation” notes. The final completion state supersedes those historical notes.

## Item checkpoint: `def-centered-subgaussian-reward`

- **Claim/convention:** an integrable real reward with finite mean $\mu$ is 1-sub-Gaussian exactly when $E[\exp(\lambda(X-\mu))]\le\exp(\lambda^2/2)$ for every real $\lambda$; the expectation is the nonnegative Lebesgue integral and the bound entails finiteness. This is the mean-centred, exact MGF interface required by ML-68.
- **Carrier/dependencies:** `items/def-centered-subgaussian-reward.md`; direct dependencies are `def-random-element-and-real-random-variable`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, and `def-real-exponential-function-and-e`; in-run level 0.
- **Source evidence:** Lattimore–Szepesvári, Definition 5.2 PDF p. 86 / printed p. 77 and non-centred convention PDF p. 88 / printed p. 79; Bubeck–Cesa-Bianchi, Equation (2.2), Chapter 2 §2.2 PDF p. 13 / printed p. 10. Both full texts were fetched and inspected. Source-fetch stamp is recorded in the batch coverage file.
- **Decision/uncertainty:** no proof is applicable. No axiom is used. The definition intentionally does not assume bounded rewards; the bounded-only Hoeffding results are not suppliers.
- **Validation:** no carrier-scoped precheck/render check has yet been run; no readiness record has been written.
- **Next:** prove the independent deterministic-prefix tail lemma from this exact MGF condition before authoring its consumers.

## Item checkpoint: `lem-independent-subgaussian-prefix-tail`

- **Claim/convention:** for a finite family of mutually independent integrable real rewards with the exact centered 1-sub-Gaussian MGF bound, both tails of the centered sum of a deterministic prefix of length $q$ are bounded by $\exp(-t^2/(2q))$ for every $t\ge0$.
- **Carrier/dependencies:** `items/lem-independent-subgaussian-prefix-tail.md`; direct dependencies are `def-centered-subgaussian-reward`, `def-independent-random-elements`, `thm-independent-random-elements-have-product-joint-law`, expectation, Tonelli, nonnegative-integral homogeneity, Markov, and the exponential addition/positivity/strict-monotonicity results. The in-run level is 1.
- **Source evidence:** Lattimore–Szepesvári §5.3 Theorem 5.3/Corollary 5.5, PDF pp. 86–87 / printed pp. 77–78; their independent-sum Lemma 5.4 is explicitly Exercise 5.7. Bubeck–Cesa-Bianchi §2.2 independently gives the general MGF Chernoff argument. The item supplies the finite-product/Tonelli argument locally and does not import the exercise as a proof.
- **Argument/axioms:** product joint law factors the MGF integral; repeated two-factor Tonelli and positive homogeneity give the product of the one-dimensional MGFs; Markov and the optimizing parameter $t/q$ give each tail. This is finite-product and choice-free.
- **Validation:** no final precheck, renderer, or proof-layout result is recorded yet; no readiness record has been written.
- **Next:** define the finite reward-stack model and then prove its conditional-law identity before using the batch-73 regret-decomposition lemma.

## Item checkpoint: `def-stochastic-bandit-and-pseudo-regret`

- **Claim/convention:** for fixed finite horizon $n$ and arm count $k$, the model is a finite independent reward-stack table with per-arm probability laws and finite first moments, plus independent private learner randomness and non-anticipating arm choices. It defines pull counts, gaps, pseudo-regret, realized reward regret, and expected reward regret. All required integrability is stated explicitly; the model itself does not assert regret bounds or a sub-Gaussian assumption.
- **Carrier/dependencies:** `items/def-stochastic-bandit-and-pseudo-regret.md`; direct dependencies are the online protocol/adversary/regret definitions from batch 73 and the published random-element, law, expectation, expectation-linearity, and independence definitions. In-run level 3.
- **Source evidence:** Lattimore–Szepesvári §4.1 and §§4.4–4.6, PDF pp. 65 and 69–74 / printed pp. 56 and 60–65; Bubeck–Cesa-Bianchi Chapter 2, PDF pp. 11–12 / printed pp. 8–9. The Lattimore book distinguishes the random-table and reward-stack constructions and leaves their equivalence to Exercise 4.4; the local conditional-law item below proves the required stack interface rather than assuming that exercise.
- **Decision/uncertainty:** all maximizations are over finite nonempty $[k]$, so no choice axiom is used. The expected reward/pseudo-regret equality is not asserted here; it will be derived only after the stack conditional-law lemma and the batch-73 decomposition supplier are available.
- **Validation:** no carrier-scoped precheck/render check or proof contract has yet been run/written; no readiness record has been written.
- **Next:** prove the conditional distribution and conditional-mean identities for every non-anticipating policy on this reward-stack table.

## Item checkpoint: `alg-explore-then-commit`

- **Claim/interface:** for integers $n,k,m\ge1$ with $mk\le n$, pull arms in a fixed round-robin order exactly $m$ times each, choose the least-index maximizer of their empirical means, and commit for all remaining rounds. The $mk=n$ endpoint is allowed and has no commit rounds.
- **Carrier/dependencies:** `items/alg-explore-then-commit.md`; direct dependency `def-stochastic-bandit-and-pseudo-regret`; in-run level 4.
- **Source evidence:** Lattimore–Szepesvári, Chapter 6 §6.1, Algorithm 1, PDF p. 101 / printed p. 92. The deterministic tie rule fixes the source's arbitrary tie convention without changing its regret argument.
- **Decision/axioms:** deterministic finite argmax, so no choice axiom; no property theorem is claimed in the algorithm item.
- **Validation:** no final precheck/render check or proof contract is recorded yet; no readiness record has been written.
- **Next:** author UCB's finite-horizon procedure, then prove the associated fixed-prefix pull-count bound.

## Item checkpoint: `alg-upper-confidence-bound-bandit`

- **Claim/interface:** for $1\le k\le n$ and $\delta\in(0,1)$, initialize by sampling every arm once; then choose the least-index maximizer of empirical mean plus $\sqrt{2\log(1/\delta)/T_i}$, assigning $+\infty$ to any unobserved arm. The horizon and tie convention are explicit.
- **Carrier/dependencies:** `items/alg-upper-confidence-bound-bandit.md`; direct dependencies are the bandit model and the natural-logarithm definition/laws; in-run level 4.
- **Source evidence:** Lattimore–Szepesvári, Chapter 7 §7.1, Algorithm 3, PDF p. 112 / printed p. 103. The algorithm is defined independently of any regret theorem.
- **Decision/axioms:** finite least-index maximization; no choice axiom.
- **Validation:** no final precheck/render check or proof contract is recorded yet; no readiness record has been written.
- **Next:** use deterministic table prefixes and the fixed-prefix tail lemma to prove `lem-ucb-suboptimal-arm-expected-pulls`.

## Item checkpoint: `lem-ucb-suboptimal-arm-expected-pulls`

- **Claim/convention:** with $n\ge\max(k,2)$, $\delta=n^{-2}$, and 1-sub-Gaussian reward stacks, every suboptimal arm $i$ satisfies $E[T_i(n)]\le3+16\log(n)/\Delta_i^2$. The proof uses a deterministic threshold $u_i=\lceil16\log(n)/\Delta_i^2\rceil$ and a good event covering every deterministic prefix length.
- **Carrier/dependencies:** `items/lem-ucb-suboptimal-arm-expected-pulls.md`; direct in-run dependencies are the bandit model, UCB algorithm, and deterministic-prefix tail lemma; level 5.
- **Source evidence:** Lattimore–Szepesvári Theorem 7.1 proof, PDF pp. 114–117 / printed pp. 105–108, and its random-prefix warning on p.112 / printed p.103; Bubeck–Cesa-Bianchi Theorem 2.1 proof, Chapter 2 §2.2, PDF pp.14–15 / printed pp.11–12. The proof explicitly union-bounds over fixed prefix lengths $s=1,\ldots,n$; no fixed-$n$ concentration inequality is applied to a random pull count.
- **Axioms/uncertainty:** no choice axiom is used. For an arm whose threshold is at least $n$, the deterministic bound $T_i(n)\le n$ handles the boundary. The direct UCB result remains an expected-count statement, not a probability guarantee.
- **Validation:** no final precheck/render check or proof contract is recorded yet; no readiness record has been written.
- **Next:** prove the ETC theorem from deterministic exploration, the finite-prefix difference tail, the table-law lemma, and the batch-73 expected-action-count decomposition.

## Item checkpoint: `lem-bandit-reward-table-has-fixed-conditional-laws`

- **Claim/convention:** for every round, arm, prior-history event contained in the chosen-arm event, and Borel reward set, the next unused stack entry has the fixed arm law; integrating its first moment gives the conditional-mean identity required by the online regret-decomposition supplier.
- **Carrier/dependencies:** `items/lem-bandit-reward-table-has-fixed-conditional-laws.md`; direct dependencies are the bandit table definition, online fixed-law model interface, finite independence/product joint law, measurable-function preservation of independence, finite-product expectation factorization, indicator expectation, and expectation linearity. In-run level 4.
- **Argument:** partition by each finite past action string. On each string, the past reveals only the corresponding initial stack entries; the next unused entry is a distinct independent coordinate. Product-law factorization gives the Borel-set identity; measurable-function preservation of independence and finite-product expectation factorization give the conditional-mean identity. The source's Exercise 4.4 is not treated as a proof; this local argument supplies the precise finite-horizon claim.
- **Source evidence:** Lattimore–Szepesvári §4.6, PDF p. 74 / printed p. 65, which presents independent stacks and explicitly leaves the random-table/stack equivalence to Exercise 4.4. No additional source is needed for the local finite-product argument.
- **Axioms/uncertainty:** no choice axiom is used. The batch-73 `def-adversary-and-feedback-model` body is read, but its ordinary full-run readiness remains unauthenticated; the cross-batch row stays open.
- **Validation:** no final precheck/render check or proof contract is recorded yet; no readiness record has been written.
- **Next:** write ETC and UCB procedures, then prove the UCB expected pull-count lemma before either UCB regret theorem.

## Item checkpoint: `thm-explore-then-commit-expected-regret`

- **Claim/convention:** for $mk\le n$ and independent 1-sub-Gaussian reward stacks, ETC's expected reward regret is bounded by $m\sum_i\Delta_i+(n-mk)\sum_i\Delta_i e^{-m\Delta_i^2/4}$. This is expectation-only, not a high-probability statement.
- **Carrier/dependencies:** `items/thm-explore-then-commit-expected-regret.md`; direct in-run dependencies are the bandit definition, ETC algorithm, table conditional-law lemma, feedback-model interface, and fixed-prefix tail lemma; batch 73 also supplies `lem-finite-arm-regret-decomposes-into-expected-action-counts`; level 5.
- **Argument:** use the table-law lemma to discharge the decomposition supplier's conditional-mean hypothesis; count $m$ exploration pulls per arm and the committed pulls; if a suboptimal arm is committed, its deterministic $m$-sample prefix exceeds the fixed optimal-arm prefix. Their centered difference contains $2m$ independent 1-sub-Gaussian terms, so the proved prefix lemma gives the $e^{-m\Delta_i^2/4}$ term. This supplies Lattimore–Szepesvári Exercise 6.1's omitted fixed-prefix argument locally.
- **Source evidence:** Lattimore–Szepesvári Theorem 6.1 and proof, Chapter 6 §6.1, PDF pp. 101–102 / printed pp. 92–93. The exact statement, initialization, regret decomposition, event comparison, and constant $1/4$ were checked against the full proof.
- **Axioms/uncertainty:** no choice axiom is used. Actual batch-73 supplier readiness remains an owner/full-run reconciliation obligation; the cross-batch rows remain open.
- **Validation:** no final precheck/render check or proof contract is recorded yet; no readiness record has been written.
- **Next:** prove the UCB gap-dependent and gap-free expected-regret bounds from the completed pull-count lemma, while retaining the fixed-prefix union argument.

## Item checkpoints: UCB expected-regret theorems

### `thm-ucb-gap-dependent-regret`

- **Claim/convention:** for $n\ge\max(k,2)$, 1-sub-Gaussian rewards, and $\delta=n^{-2}$, expected reward regret is at most $3\sum_i\Delta_i+\sum_{\Delta_i>0}16\log(n)/\Delta_i$; this is expectation-only.
- **Carrier/dependencies:** `items/thm-ucb-gap-dependent-regret.md`; local dependencies include the model, UCB procedure, conditional-law lemma, and UCB expected-pull lemma; batch 73 supplies the regret-decomposition lemma. In-run level 6.
- **Argument/source:** verify the decomposition premise by the local table-law result, then sum the per-arm pull bound. Lattimore–Szepesvári Theorem 7.1 and full proof, PDF pp. 114–117 / printed pp. 105–108; Bubeck–Cesa-Bianchi Theorem 2.1 supplies an independent general-MGF comparison with a different confidence schedule/constants.
- **Axioms/uncertainty:** no choice axiom. Batch-73 readiness remains open and is not claimed.
- **Validation:** final precheck, render, proof-layout, proof-contract, and readiness checks remain pending.

### `thm-ucb-gap-free-regret`

- **Claim/convention:** under the same $n,k,\delta$ and 1-sub-Gaussian assumptions, $R_n\le\sqrt{8nk\log n}+3\sum_i\Delta_i$ in expectation.
- **Carrier/dependencies:** `items/thm-ucb-gap-free-regret.md`; local dependencies include the model, UCB procedure, conditional-law lemma, and per-arm pull bound; batch 73 supplies regret decomposition. In-run level 6.
- **Argument/source:** split arms at $\varepsilon=\sqrt{16k\log(n)/n}$, use $\sum_iT_i(n)=n$ for small gaps, and the proved per-arm bound for large gaps. Lattimore–Szepesvári Theorem 7.2 and complete proof, PDF p. 117 / printed p. 108.
- **Axioms/uncertainty:** no choice axiom; no high-probability claim; batch-73 readiness remains open.
- **Validation:** final precheck, render, proof-layout, proof-contract, and readiness checks remain pending.

## Item checkpoints: B-page examples

### `ex-tied-optimal-bandit-arms`

- **Claim/convention:** a two-arm deterministic table with both means zero has zero pseudo-regret and zero realized reward regret for every policy; ties among optimal arms create no gap.
- **Carrier/dependencies:** `items/ex-tied-optimal-bandit-arms.md`; direct dependency `def-stochastic-bandit-and-pseudo-regret`; in-run level 4.
- **Argument/source:** the means and gaps are computed directly from the point-mass reward table; the regret sums vanish term by term. This is a generated finite example, not an imported theorem.
- **Axioms/uncertainty:** none; all arms and data are finite and deterministic.
- **Validation:** no final example verification precheck or proof contract is recorded yet; no readiness record has been written.
- **Next:** show a finite-mean polynomial-tail reward law whose centered MGF fails the 1-sub-Gaussian condition.

### `ex-heavy-tailed-reward-law-outside-subgaussian-model`

- **Claim/convention:** on positive integers, the law $P(X=j)=1/(\zeta_3j^3)$ has mean $\zeta_2/\zeta_3<\infty$ but an infinite MGF at every positive parameter, so it is outside the centered 1-sub-Gaussian class.
- **Carrier/dependencies:** `items/ex-heavy-tailed-reward-law-outside-subgaussian-model.md`; direct in-run suppliers are the finite bandit model and the new local `lem-zeta-two-and-three-converge` and `lem-countably-valued-expectation-is-weighted-series`; direct published prerequisites are listed in the final dependency table; level 4.
- **Argument/source:** the zeta lemma uses Cauchy condensation and geometric series; the expectation lemma uses finite simple truncations, indicator expectations, finite linearity, and monotone convergence. The probability law is a normalized countable weighted sum of Dirac measures. The exponential-series fourth-order term gives a linear-in-$j$ lower bound, forcing the MGF series to diverge; positive scalar homogeneity transfers this to the centered MGF. Lattimore–Szepesvári §5.3 PDF pp. 86–88 / printed pp. 77–79 supports the MGF boundary; the construction and all measure/series arguments are proved locally.
- **Axioms/uncertainty:** no choice axiom. The example is a finite-mean reward-law counterexample, not a regret guarantee for heavy-tailed data.
- **Validation:** strict proof contract, statement-first, and final proof-layout checks pass. Its earlier Step-1 escalation remains unchanged as required; it still blocks on unauthenticated batch-73 suppliers. That record predates the local lemmas and current direct-dependency list, which are now fully recorded in the carrier, manifest, contracts, and this note.
- **Next:** owner/full-run supplier reconciliation; no further local proof work remains.

### `ex-two-arm-deterministic-gap`

- **Claim/convention:** for deterministic rewards $1$ and $1-\Delta$ with $n\ge2m+1$, ETC commits to the better arm; its exact regret is $m\Delta$, and the general expected-regret bound specializes to $m\Delta+(n-2m)\Delta e^{-m\Delta^2/4}$.
- **Carrier/dependencies:** `items/ex-two-arm-deterministic-gap.md`; direct in-run dependencies are the bandit definition, centered sub-Gaussian definition, exponential positivity, ETC algorithm, and ETC regret theorem; level 6.
- **Argument/source:** deterministic sample means equal their population means, so the empirical maximizer is arm 1; only the $m$ exploration pulls of arm 2 incur a gap. The theorem substitution is nonnegative and checked locally.
- **Axioms/uncertainty:** no choice axiom; strict gap $0<\Delta<1$ removes empirical tie ambiguity.
- **Validation:** no final example verification precheck or proof contract is recorded yet; no readiness record has been written.
- **Next:** write the frontmatter-only A/B pages and proof contracts, then run the scoped format, dependency, and proof-layout checks.


## Final authoring checkpoint — 2026-10-19

### Local prerequisite proofs added during final audit

`lem-zeta-two-and-three-converge` (level 0; dependencies: `thm-cauchy-condensation`, `thm-geometric-series`, `def-integer-power`, `def-canonical-natural`, `lem-of-naturals-positive`) proves convergence of exactly $\zeta_2$ and $\zeta_3$ by condensation to geometric ratios $1/2$ and $1/4$. Its supplier passages are the published statements in [thm-cauchy-condensation](items/thm-cauchy-condensation.md#statement) and [thm-geometric-series](items/thm-geometric-series.md#statement); the external full-text source is [Semmes, Elements of Analysis](https://math.rice.edu/~semmes/math331.pdf), Chapter 3 §3.9, Theorem 3.9.1 and §3.9.3, PDF pp. 65–66 / printed pp. 54–55. The local proof supplies the special-case convergence and lower bound. It is placed before the heavy-tail example, its contract maps all three steps, and its Step-1 record is `ready`.

`lem-countably-valued-expectation-is-weighted-series` (level 0; dependencies: `def-probability-measure`, the expectation and integrability definitions, expectation linearity and indicator corollaries, `thm-monotone-convergence-for-the-integral`, and `def-nonnegative-extended-series`) proves the extended expectation formula by increasing finite simple truncations. Its supplier passages are the published MCT [statement and proof](items/thm-monotone-convergence-for-the-integral.md), expectation [definition](items/def-expectation-of-a-nonnegative-or-integrable-random-variable.md), integrability [definition](items/def-integrable-real-and-complex-functions-and-their-integrals.md), and indicator/linearity statements (see its dependencies). If the weighted series is finite, it proves integrability. The external full-text source is [Hunter, Measure Theory Notes](https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf), Chapter 4 §4.2, Theorem 4.6, PDF pp. 2–3 / printed pp. 41–42; its complete monotone-convergence proof supplies the integral limit step. Its contract maps all four steps, and its Step-1 record is `ready`.

### Claims, dependencies, and placement

All 15 items are authored in `items/` and are listed in the matching page manifests. The A page contains 12 items, including two proved local prerequisites; the B page has the three examples. Item statements preserve the ML-68 scope and conventions: finite independent reward stacks with finite first moments, independent private randomness, non-anticipating policies, natural logarithms, deterministic-prefix concentration only, and expected-regret conclusions only. No Axiom of Choice is used. Exact claims, hypotheses, proof arguments, examples, and source locators are documented in the item checkpoints above.

The ETC theorem now directly declares `def-adversary-and-feedback-model`, because its `[F2]` premise explicitly cites that supplier. The dependency and cross-batch input records were updated; this does not change its level (5). The UCB gap-dependent and gap-free proof steps explicitly cite `[A1]` when applying `[F4]`, and their contracts record the use.

| Item | Level | Direct dependencies |
|---|---:|---|
| `def-centered-subgaussian-reward` | 0 | `def-random-element-and-real-random-variable`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-real-exponential-function-and-e` |
| `lem-zeta-two-and-three-converge` | 0 | `thm-cauchy-condensation`, `thm-geometric-series`, `def-integer-power`, `def-canonical-natural`, `lem-of-naturals-positive` |
| `lem-countably-valued-expectation-is-weighted-series` | 0 | `def-probability-measure`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-integrable-real-and-complex-functions-and-their-integrals`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `cor-expectation-of-an-indicator-is-probability`, `thm-monotone-convergence-for-the-integral`, `def-nonnegative-extended-series` |
| `lem-independent-subgaussian-prefix-tail` | 1 | `def-centered-subgaussian-reward`, `def-independent-random-elements`, `thm-independent-random-elements-have-product-joint-law`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `cor-markov-inequality-for-random-variables`, `thm-exponential-addition-formula`, `cor-exponential-reciprocal-and-positivity`, `thm-exponential-is-strictly-increasing` |
| `def-stochastic-bandit-and-pseudo-regret` | 3 | `def-online-decision-protocol`, `def-adversary-and-feedback-model`, `def-static-dynamic-and-strongly-adaptive-regret`, `def-random-element-and-real-random-variable`, `def-law-or-distribution-of-a-random-element`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `def-independent-random-elements` |
| `alg-explore-then-commit` | 4 | `def-stochastic-bandit-and-pseudo-regret` |
| `alg-upper-confidence-bound-bandit` | 4 | `def-stochastic-bandit-and-pseudo-regret`, `def-natural-logarithm`, `thm-natural-logarithm-laws` |
| `lem-bandit-reward-table-has-fixed-conditional-laws` | 4 | `def-stochastic-bandit-and-pseudo-regret`, `def-adversary-and-feedback-model`, `def-independent-random-elements`, `thm-independent-random-elements-have-product-joint-law`, `lem-measurable-functions-preserve-independence`, `thm-expectation-of-products-of-independent-random-variables`, `cor-expectation-of-an-indicator-is-probability`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `def-expectation-of-a-nonnegative-or-integrable-random-variable` |
| `lem-ucb-suboptimal-arm-expected-pulls` | 5 | `def-stochastic-bandit-and-pseudo-regret`, `def-centered-subgaussian-reward`, `alg-upper-confidence-bound-bandit`, `lem-independent-subgaussian-prefix-tail`, `def-natural-logarithm`, `thm-natural-logarithm-laws` |
| `thm-explore-then-commit-expected-regret` | 5 | `def-stochastic-bandit-and-pseudo-regret`, `def-centered-subgaussian-reward`, `alg-explore-then-commit`, `lem-bandit-reward-table-has-fixed-conditional-laws`, `def-adversary-and-feedback-model`, `lem-independent-subgaussian-prefix-tail`, `lem-finite-arm-regret-decomposes-into-expected-action-counts` |
| `thm-ucb-gap-dependent-regret` | 6 | `def-stochastic-bandit-and-pseudo-regret`, `def-centered-subgaussian-reward`, `alg-upper-confidence-bound-bandit`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `lem-bandit-reward-table-has-fixed-conditional-laws`, `lem-ucb-suboptimal-arm-expected-pulls`, `lem-finite-arm-regret-decomposes-into-expected-action-counts` |
| `thm-ucb-gap-free-regret` | 6 | `def-stochastic-bandit-and-pseudo-regret`, `def-centered-subgaussian-reward`, `alg-upper-confidence-bound-bandit`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `lem-bandit-reward-table-has-fixed-conditional-laws`, `lem-ucb-suboptimal-arm-expected-pulls`, `lem-finite-arm-regret-decomposes-into-expected-action-counts` |
| `ex-two-arm-deterministic-gap` | 6 | `def-stochastic-bandit-and-pseudo-regret`, `def-centered-subgaussian-reward`, `cor-exponential-reciprocal-and-positivity`, `alg-explore-then-commit`, `thm-explore-then-commit-expected-regret` |
| `ex-tied-optimal-bandit-arms` | 4 | `def-stochastic-bandit-and-pseudo-regret` |
| `ex-heavy-tailed-reward-law-outside-subgaussian-model` | 4 | `def-stochastic-bandit-and-pseudo-regret`, `def-centered-subgaussian-reward`, `def-real-exponential-function-and-e`, `lem-exponential-series-has-infinite-radius`, `thm-exponential-is-strictly-increasing`, `cor-exponential-reciprocal-and-positivity`, `thm-exponential-addition-formula`, `def-series`, `def-integer-power`, `def-factorial-and-falling-factorial`, `def-canonical-natural`, `lem-of-naturals-positive`, `thm-nonnegative-series-bounded-partial-sums`, `thm-of-archimedean`, `def-probability-measure`, `def-dirac-measure`, `prop-dirac-measure-is-a-probability-measure`, `def-nonnegative-weighted-sum-of-measures`, `thm-nonnegative-weighted-sums-of-measures`, `def-random-element-and-real-random-variable`, `def-law-or-distribution-of-a-random-element`, `lem-law-of-a-random-element-is-a-probability-measure`, `thm-change-of-variables-for-expectation`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `lem-zeta-two-and-three-converge`, `lem-countably-valued-expectation-is-weighted-series` |

`dependency-inputs.json` and `cross-batch-dependencies.json` agree with all eight direct cross-batch item edges and the one page edge. All nine rows remain `open`. The direct item edge added during final contract reconciliation is `thm-explore-then-commit-expected-regret` → `def-adversary-and-feedback-model`.

### Sources and evidence

The A page is supported by the full Lattimore–Szepesvári, *Bandit Algorithms* PDF (`https://tor-lattimore.com/downloads/book/book.pdf`): §§4.1, 4.4–4.6, 5.3, 6.1, 7.1, and the fixed-prefix caution/exercise as itemized above and in the coverage file. The independent Bubeck–Cesa-Bianchi monograph (`https://arxiv.org/pdf/1204.5721`) was read through Chapter 2 §§2.1–2.2, including Equation (2.2), Theorem 2.1, and its complete proof; its different schedule/constants are not substituted for the assigned UCB claims.

`node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-76.coverage.json --stamp` reported 4/4 active sources fetch-verified and 4/4 resolved; the final rerun stamped zero new sources. Stamps: Lattimore–Szepesvári, 5,400,750 bytes, SHA16 `b71acb03034d73ca`, 597 pages; Bubeck–Cesa-Bianchi, 891,341 bytes, SHA16 `52e871fa30c9aaa2`, 130 pages; Semmes, 464,319 bytes, SHA16 `18f75171d1435d33`, 161 pages; Hunter, 251,626 bytes, SHA16 `c27138615c562be2`, 15 pages. No retrieval failed, so no recovery retries were needed. The fetched CS6046 note was inspected only through PDF pp. 1–7 and recorded under `retrieved_not_used`: its cover says “Rough draft. Do not distribute.” The candidate was not used; the two bandit books support the assigned track, and the two added lecture-note sources support only the local prerequisite lemmas.

`batch-76.source-evidence.json` preserves fetch commands/results, locators, supported items, read extent, and source limitations. Added local-proof sources: Semmes, `https://math.rice.edu/~semmes/math331.pdf`, Theorem 3.9.1 and §3.9.3, PDF pp. 65–66 / printed pp. 54–55 (SHA16 `18f75171d1435d33`, 464,319 bytes, 161 pages); Hunter, `https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf`, Theorem 4.6, PDF pp. 2–3 / printed pp. 41–42 (SHA16 `c27138615c562be2`, 251,626 bytes, 15 pages). `batch-76.coverage.json` records each harvested result's disposition. The proof contracts carry 90 exact excerpts copied from current supplier sections. `coverage.json` and `source-evidence.json` separately record the two local prerequisite proofs and their direct dependencies; they are not attributed to the bandit books. No bandit-specific registered finite-smoke check applies; `finite_smoke` is empty for these entries, and the deterministic examples are verified by their complete item arguments.

### Final scoped checks and decisions

- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-76.proof-contracts.json --strict`: pass, 15/15, zero errors and warnings; 37 numbered proof steps are mapped with inputs and claims.
- `node tools/tsx-run.mjs tools/precheck.mts <15 assigned item paths> --json`: pass, 11 proof-bearing items checked, zero failures; four definitions/algorithms are not applicable.
- `node tools/proof-layout.mjs <15 assigned item paths>`: pass, 15 items, 37 steps, zero defects.
- `node tools/content-policy.mjs research/machine-learning-all-101-2026-10-19-batch-76.pages.json --json`: pass, 15 items, zero errors or warnings.
- `node tools/depcheck.mjs --items-file /tmp/prestige-batch-76-item-ids.json --json`: pass, 15 selected items, 591 prerequisite items and 120 pages in the checked closure, zero errors or warnings.
- The statement-first parser on all 15 carriers: pass, zero defects. Statements/descriptions are uninterrupted by links; references are in immediate matching reference sections.
- The batch-local dependency recomputation and carrier/manifest/page-inventory check: pass, 15/15 levels and inventories consistent. A/B pages are frontmatter-only with empty bodies; the engine-owned `page_layout: compact-v1` flag is not authored here.
- `node tools/item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19`: exit 1 because it reports empty scaffold inventories on other run pages; it emitted no Batch 76 item-level error. The assigned batch's recomputed levels all pass.
- `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-76.coverage.json --stamp`: pass, 4/4 fetch-verified and resolved, zero newly stamped on the final rerun.
- `step1-decisions.mjs record` wrote four `ready` records (`def-centered-subgaussian-reward`, both local prerequisite lemmas, and `lem-independent-subgaussian-prefix-tail`) and eleven `escalated` records. Each record includes its direct dependency IDs. The escalations identify the exact transitive Batch 73 suppliers; their current bodies were inspected, but ordinary full-run Step-1 readiness/currency is not authenticated. The pre-existing heavy-tail escalation was preserved without overwrite after its direct prerequisites were expanded; this is documented above. No `--owner` option was used.

### Outstanding owner reconciliation

The unresolved in-run supplier IDs are `def-online-decision-protocol`, `def-adversary-and-feedback-model`, `def-static-dynamic-and-strongly-adaptive-regret`, and, for expected-regret conclusions, `lem-finite-arm-regret-decomposes-into-expected-action-counts`. The three definitions affect the finite bandit model and every consumer of its policy timing, fixed arm laws, and regret conventions. The conditional-law lemma, UCB pull count, both UCB regret theorems, the ETC theorem, tied-arm example, heavy-tail example, and two-arm example remain escalated through that model; the regret-decomposition lemma additionally affects the ETC and UCB regret theorems and the two-arm example through ETC. Keep all nine ledger rows open until the normal full-run supplier snapshot authenticates them.

The dispatch scheduling hash `44f42432081c28231e03f4e1409845c58bae572cf93e7edcf5814a4490b232af` still differs from the dependency artifact input hash `4c693476eaf104b5816a67b6ddafcf6f499863f314d6b6c8ab7c9cce2209a13a`; both inputs agree on batch 76 level 1 and prerequisite batch 73. This conflict is recorded for owner reconciliation. The live run remains held at `1-scaffold` by the existing owner repair/recertification blocker; the latest disk recomputation is 46/101 batches covered. The run-wide dependency command reports empty scaffold inventories on other pages, while the Batch 76 graph passes locally. No shared plan, engine state, verdict, published item, or other pair was changed.

**Next action:** owner/full-run reconciliation of the listed Batch 73 supplier readiness and the existing scaffold blocker, plus reconciliation of the two scheduling hashes. Batch 76 authoring is complete; the eleven escalated items remain unready pending those checks.
