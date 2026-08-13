# Independent reader 4 findings — `frontier-12`, step 6

Read-only audit of batch 5. Findings below describe the live disk after rereading the three assigned items that changed concurrently during this audit.

## Fatal findings

### `lem-random-graph-short-cycle-expectation`

- **Location:** Fact [L4] and proof step 1.1.
- **What is wrong:** [L4] says that $n^{\underline r}$ is the number of ordered lists of $r$ distinct vertices, but cites `def-factorial-and-falling-factorial`. That Definition only defines the numerical falling factorial recursively and proves its algebraic boundary values; it does not state the counting interpretation. The exact on-disk result that does is `thm-number-of-injections`. In addition, [L2] cites `def-graph-distance-and-girth`, whose Definition says that girth is the minimum cycle length but does not define an undirected cycle. Thus neither cited Fact licenses the two load-bearing assertions in step 1.1: that there are $n^{\underline r}$ ordered distinct-vertex lists and that every undirected $r$-cycle is represented by exactly $2r$ of them. `def-graph-walk-trail-path-and-cycle` supplies the relevant cycle definition.
- **Evidence:** `def-factorial-and-falling-factorial` states only $n^{\underline0}=1$, the recursion $n^{\underline{\sigma(k)}}=n^{\underline k}(n-k)$, and algebraic consequences. By contrast, `thm-number-of-injections` states $|\operatorname{Inj}(B,A)|=n^{\underline k}$. The displayed expectation formula depends on the count in step 1.1.
- **Severity:** **fatal** — inaccurate dependency citation at the central enumeration step.

## Nonfatal findings

### `lem-finite-probability-basic-laws`

- **Location:** Fact [L2] and proof step 1.2.
- **What is wrong:** `lem-finite-sum-laws` states monotonicity and splitting for initial-segment sums of sequences. Step 1.2 applies a disjoint-union split directly to sums over the arbitrary finite sets $A$ and $B\setminus A$. The result is true, but the proof omits the reindexing/enumeration bridge; `lem-finite-sum-reindexing-and-fubini`, clause 2, states the needed finite-set disjoint-union identity exactly.
- **Evidence:** The cited Statement has $\sum_{k<n}$ and splits at an initial index $m$; it does not itself state $\sum_{u\in S\sqcup T}a_u=\sum_{s\in S}a_s+\sum_{t\in T}a_t$.
- **Severity:** **nonfatal** — a competent reader can supply the finite reindexing in under 30 seconds.

### `thm-event-independence-and-indicator-independence`

- **Location:** proof step 1.2, reverse implication (and the pairwise specialization in step 3.1).
- **What is wrong:** The random-variable independence Definition quantifies only over attained values $x_j\in X_j(\Omega)$. Step 1.2 specializes to the value $1$ for every selected indicator. If some $A_j=\varnothing$, then $1\notin\mathbf1_{A_j}(\Omega)$, so that specialization is not licensed by [L3]. The conclusion is still immediate in that case because both sides of the event-intersection identity are zero, but the proof does not split it off.
- **Evidence:** `def-independence-of-finite-random-variables` explicitly restricts selections to $x_j\in X_j(\Omega)$; `def-indicator-random-variable` gives range $\{0\}$ when $A_j=\varnothing$.
- **Severity:** **nonfatal** — one short empty-event case closes the gap.

### `thm-expectation-of-products-of-independent-random-variables`

- **Location:** proof step 1.1.
- **What is wrong:** [L1] is the scalar formula that groups expectation by the attained values of one real random variable. Step 1.1 instead groups by the full joint-value vector $(x_i)_{i\in I}$. That refinement requires a finite partition/reindexing argument over the joint fibres; it is not the proposition stated by [L1].
- **Evidence:** `lem-expectation-by-distribution` states only $\mathbb E[X]=\sum_{x\in X(\Omega)}x\mathbb P(X=x)$. Different joint vectors may have the same product, so applying it to $\prod_iX_i$ does not literally produce the sum claimed in step 1.1.
- **Severity:** **nonfatal** — finite fibre regrouping supplies the missing bridge in under 30 seconds.

### `cor-variance-adds-for-pairwise-independent-random-variables`

- **Location:** Fact [L1] and proof step 1.1.
- **What is wrong:** [L1] restates `thm-expectation-of-products-of-independent-random-variables` as a theorem for “two independent random variables,” whereas the cited Statement assumes a finite **mutually** independent family. From pairwise independence of the given family, the two-variable joint-value identity is available, and a two-member family is mutually independent after adding the tautological singleton identities, but that bridge is absent.
- **Evidence:** The cited theorem's hypothesis is “finite mutually independent family”; the present Given is only pairwise independence.
- **Severity:** **nonfatal** — the two-member mutual-independence check is a sub-30-second bridge.

### `lem-variance-and-covariance-identities`

- **Location:** proof step 1.3.
- **What is wrong:** The conclusion that a zero finite sum of nonnegative weighted squares forces every positive-weight square to vanish is not stated by [L2], which only supplies the variance/covariance definitions (and nonnegativity of variance in its source prose). The exact zero-sum clause appears in `lem-finite-sum-laws`, which is not a dependency here.
- **Evidence:** Step 1.3 needs “$\sum a_k=0$ with all $a_k\ge0$ implies every $a_k=0$”; `lem-finite-sum-laws`, Statement 4, states that implication.
- **Severity:** **nonfatal** — elementary finite-sum order reasoning closes it immediately.

### `lem-cauchy-schwarz-for-finite-random-variables`

- **Location:** proof step 1.1.
- **What is wrong:** [L2] gives nonnegativity of the expectation and [L3] gives the weighted-sum formula, but neither cited Fact states that a zero finite sum of nonnegative summands forces every summand to be zero. That implication is used to conclude $X=0$ on every positive-weight outcome.
- **Evidence:** The required clause is again `lem-finite-sum-laws`, Statement 4; it is absent from this item's dependencies.
- **Severity:** **nonfatal** — a sub-30-second finite-sum bridge.

### `thm-finite-second-moment-lower-bound`

- **Location:** proof step 1.2.
- **What is wrong:** The same zero-sum implication is used without a supporting Fact: from $\mathbb E[X^2]=0$ the proof concludes that every positive-weight outcome has $X=0$. [L3] gives only the weighted-sum definition.
- **Evidence:** `lem-finite-sum-laws`, Statement 4, supplies the omitted implication and is not a dependency.
- **Severity:** **nonfatal** — a sub-30-second finite-sum bridge.

### `cor-relative-variance-positive-probability-bound`

- **Location:** proof step 3.1.
- **What is wrong:** “Taking complements” uses $\mathbb P(A^c)=1-\mathbb P(A)$, but the sole dependency is Chebyshev's inequality and [L1] does not state the complement law.
- **Evidence:** The exact complement identity is in `lem-finite-probability-basic-laws`, which is absent from `deps`.
- **Severity:** **nonfatal** — one standard probability-law citation closes it.

### `lem-local-lemma-conditional-probability-bound`

- **Location:** proof steps 2.2 and 3.1.
- **What is wrong:** Step 2.2 uses monotonicity inside a conditional probability,
  $$\mathbb P(A_i\cap C_1\mid C_2)\le\mathbb P(A_i\mid C_2),$$
  and step 3.1 infers positivity of every prefix conditioning event because it contains the positive event $C_1\cap C_2$. Neither monotonicity inference is supplied by [L1]–[L3]. They follow by applying ordinary event-probability monotonicity and dividing by the positive conditioning probability.
- **Evidence:** The needed ordinary monotonicity is in `lem-finite-probability-basic-laws`, which is not in this item's dependencies.
- **Severity:** **nonfatal** — both are immediate monotonicity bridges.

### `thm-erdos-high-girth-and-high-chromatic-number`

- **Location:** proof step 5.1.
- **What is wrong:** The proof asserts that a $k$-colouring has a colour class of size at least $|V(H)|/k$, but no Fact or cited dependency supplies this finite pigeonhole inference.
- **Evidence:** [L1] defines proper colouring and its fibres; it does not state the largest-fibre bound. The contradiction with $\alpha(H)<n/(2k)$ depends on that bound.
- **Severity:** **nonfatal** — the finite pigeonhole argument is under 30 seconds.

### `ex-diagonal-ramsey-lower-bound-by-the-union-bound`

- **Location:** verification step 1.1.
- **What is wrong:** [L2] gives probability $2^{-\binom k2}$ for each prescribed all-red or all-blue pattern, but step 1.1 claims their union has probability exactly twice that value without citing finite additivity. The two events are disjoint for $k\ge3$. The later proof only needs an upper bound, so it could also say “at most” and appeal to [L3].
- **Evidence:** `thm-finite-additivity-of-probability` is not a dependency; [L3] contains only the union bound, complement law, and positive-probability principle.
- **Severity:** **nonfatal** — disjoint additivity or weakening equality to an upper bound is immediate.

## Proof-contract-only findings

### `thm-szele-many-hamilton-paths-in-a-tournament`

- **Location:** `research/frontier-12-batch-5.proof-contracts.json`, citation contract for [L2].
- **What is wrong:** The live item now cites `def-directed-walk-trail-path-cycle-and-strong-connectivity`, but the contract still names and quotes `def-hamilton-path-cycle-and-hamilton-connected`.
- **Evidence:** `proof-contract.mjs --strict` reports `citation-source-not-in-fact`, `citation-undeclared-dependency`, and `citation-fact-uncontracted` for this item.
- **Severity:** **nonfatal** — stale contract after a concurrent content repair, but it currently blocks the strict contract gate.

### `thm-erdos-high-girth-and-high-chromatic-number`

- **Location:** proof contract citation for [L3] to `lem-random-graph-independence-number-bound`.
- **What is wrong:** The quoted source Statement is stale after the source's $s=1$ boundary sentence was corrected.
- **Evidence:** `proof-contract.mjs --strict` reports `citation-quote-mismatch` for this citation.
- **Severity:** **nonfatal** — contract synchronization defect.

### `ex-high-girth-high-chromatic-parameter-ledger`

- **Location:** proof contract citation for [L2] to `lem-random-graph-independence-number-bound`.
- **What is wrong:** The quoted source Statement is likewise stale.
- **Evidence:** `proof-contract.mjs --strict` reports `citation-quote-mismatch` for this citation.
- **Severity:** **nonfatal** — contract synchronization defect.

### `ex-second-moment-bound-for-a-nonempty-random-subset`

- **Location:** proof-contract boundary row `one`.
- **What is wrong:** Its evidence still quotes the old step 3.1 assertion that at $p=1$ “the exact probability and both relevant bounds equal $1$.” The live proof correctly says the Markov upper bound is $np=n$ and is vacuous for $n\ge2$.
- **Evidence:** The contract evidence is no longer true of the live step even though the mechanical strict checker does not flag this semantic mismatch.
- **Severity:** **nonfatal** — stale boundary evidence.

### `ex-loaded-die-and-conditional-probability`

- **Location:** proof-contract boundary row `degenerate`.
- **What is wrong:** The row marks the degenerate/constant-object case as checked using step 3.1, but that step only multiplies $9/11$ by $11/20$ to verify the multiplication rule. No degenerate or constant case is present in the Example.
- **Severity:** **nonfatal** — false boundary classification in the contract.

### `ex-bayes-theorem-for-two-urns`

- **Location:** proof-contract boundary row `nonempty-choice`.
- **What is wrong:** The row cites step 3.1's Bayes arithmetic as evidence for a nonempty-choice/witness boundary. That step neither makes nor discharges such a choice; this boundary should be `not_applicable` or supported by the actual positive-denominator check in step 1.1.
- **Severity:** **nonfatal** — false boundary evidence.

### `cor-symmetric-lovasz-local-lemma`

- **Location:** proof-contract boundary row `nonempty-choice`.
- **What is wrong:** The theorem concludes only that the avoidance event has positive probability. The row calls step 3.1 (“the cases ... are exhaustive”) a witness-existence check, but that step neither selects an outcome nor invokes positive probability to obtain one. No nonempty-choice claim occurs in the Statement.
- **Severity:** **nonfatal** — false boundary classification and evidence.

### `thm-hypergraph-two-colouring-by-local-lemma`

- **Location:** proof-contract boundary row `nonempty-choice`.
- **What is wrong:** The row cites only step 2.1, which obtains positive probability for the avoidance event. The actual witness step is 3.1, where [L5] turns positive probability into a colouring. The contract therefore marks the right boundary but names evidence that stops before doing the required work.
- **Severity:** **nonfatal** — false boundary evidence.

## Coverage

I read all 82 assigned items in full: all 37 items on `finite-probability-spaces-and-random-variables`, all 11 on its examples page, all 28 on `finite-probability-and-the-probabilistic-method`, and all 6 on its examples page. I read every numbered proof/verification/counterexample step, every direct Fact citation and its cited Definition or Statement on disk, all four page files, the batch notes, and all 65 proof contracts. I also reread the live forms of `thm-szele-many-hamilton-paths-in-a-tournament`, `lem-random-graph-independence-number-bound`, and `ex-second-moment-bound-for-a-nonempty-random-subset` after concurrent repairs. Nothing was sampled, and nothing in the assigned scope was unavailable.
