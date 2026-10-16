---
id: thm-qa-promise-preserving-query-reduction-composition
kind: theorem
title: "Promise-preserving reduction composes with a query solver"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-task-and-promise-domain
  - def-qa-input-encoding-and-size
  - def-promise-preserving-reduction
  - def-qa-quantum-query-algorithm
  - def-qa-classical-query-algorithm
  - def-qa-exact-promise-correctness
  - def-qa-bounded-error-promise-correctness
  - def-qa-quantum-query-complexity
  - def-qa-classical-query-complexity
  - def-qa-nonoracle-gate-cost
  - def-qa-classical-bit-cost
  - def-qc-controlled-unitary-access
  - thm-qc-reversible-xor-oracle-unitary
justified_by: []
proof_strategy: induction
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Statement

For decision tasks, let $S=(Y_S,N_S)$ and $T=(Y_T,N_T)$ be promise problems and let $r$ be a promise-preserving total many-one reduction from $S$ to $T$ in the sense of [[def-promise-preserving-reduction]]. For search tasks, let $(D_S,R_S)$ and $(D_T,R_T)$ be source and target search tasks, and suppose a total instance map $r:\{0,1\}^*\to\{0,1\}^*$ sends $D_S$ into $D_T$ and a total witness map $L:\{0,1\}^*\times\{0,1\}^*\to\{0,1\}^*$ satisfies
$$(r(z),w)\in R_T\ \Longrightarrow\ (z,L(z,w))\in R_S\qquad (z\in D_S).$$
In the search case, assume additionally that both $r$ and $L$ are computable; no time bound is required.

Let $T,s\in\mathbb N$ be fixed nonnegative integers. Let $A$ be a classical or quantum query solver for the target task that makes at most $T$ target-oracle calls on every branch and is exact or has bounded error at least $2/3$ on every target-promised instance. Suppose that for every source-promised $z$, its access contract either directly supplies the target oracle selected by $r(z)$ at one source query per target invocation or supplies an exact simulation of each target query using at most $s$ source queries on every branch. If $A$ uses controlled oracle calls, that exact block operation must also be explicitly supplied and its charge included in the same cost bound ([[def-qc-controlled-unitary-access]]). An inverse call to the standard XOR oracle has the same action as one ordinary query by [[thm-qc-reversible-xor-oracle-unitary]]. In the quantum case, exact simulation means equality of the full query action on the query and algorithm workspace registers, with identity on unrelated registers.

Then the composed source solver has the same per-instance correctness guarantee as $A$. Its worst-case source query cost is at most $T$ in the direct-access case and at most $sT$ in the simulated-access case. Computing the reduction map, preparing the target solver's input, computing the search witness lift, and performing any simulation gates or classical work are charged separately under the declared bit and gate models. In the search case this theorem requires computability but claims no efficiency bound for either map. A promise-preserving map alone does not supply the target query oracle or its simulation.

## Facts & Assumptions

**Given:** The decision or search tasks and maps in the Statement, a target query solver $A$, and the declared direct-access or exact-simulation condition.

[F1] [[def-promise-preserving-reduction]]: a decision many-one reduction is total and polynomial-time, maps every source yes-instance into the target yes-set and every source no-instance into the target no-set, and has no obligation outside the source promise.

[F2] [[def-qa-task-and-promise-domain]]: a decision task requires the correct side on its promise pair, while a search task requires an output witness satisfying its relation on each promised input; neither task imposes correctness off its promise.

[F3] [[def-qa-quantum-query-algorithm]]: a quantum query algorithm has at most its declared number of target-oracle calls on each measurement branch.

[F4] [[def-qa-classical-query-algorithm]]: a classical query algorithm may choose each address adaptively from the input, earlier replies, and random bits.

[F5] [[def-qa-exact-promise-correctness]]: exact decision/search correctness has probability one on every promised instance under the normalized output law.

[F6] [[def-qa-bounded-error-promise-correctness]]: bounded-error decision/search correctness has probability at least $2/3$ on every promised instance, not on average over inputs.

[F7] [[def-qa-quantum-query-complexity]]: quantum query cost is the worst-case number of designated calls over promised inputs and branches.

[F8] [[def-qa-classical-query-complexity]]: classical query cost is the worst-case number of calls over promised inputs and random tapes.

[F9] [[def-qa-nonoracle-gate-cost]]: elementary gates outside black-box calls are charged in a separate coordinate.

[F10] [[def-qa-classical-bit-cost]]: Turing transitions, including reduction computation and processing reply bits, are a separate classical bit-cost coordinate.

[F11] [[def-qa-input-encoding-and-size]]: every instance has an injective binary encoding and input size $n$ is its encoded length.

[F12] [[def-qc-controlled-unitary-access]]: controlled access is the explicitly granted block operator $\operatorname{diag}(I,U)$ and is not inferred from an ordinary call.

[F13] [[thm-qc-reversible-xor-oracle-unitary]]: for every total Boolean function, the coherent XOR oracle is involutive, so $U_f^\dagger=U_f$.

[A1] For each source-promised $z$, direct access exposes the exact target query selected by $r(z)$, or each replacement circuit/procedure implements the same complete target query action and uses at most $s$ source queries on every branch.

[A2] For a search task, the total maps $r$ and $L$ are computable as in the Statement, and $L$ maps every valid target witness at $r(z)$ to a valid source witness at $z$.

## Proof

1.1 In the decision case, $z\in Y_S$ implies $r(z)\in Y_T$, and $z\in N_S$ implies $r(z)\in N_T$, by [F1]. Thus every source-promised input is transformed to a target-promised input. [given, F1]

1.2 In the search case, $z\in D_S$ implies $r(z)\in D_T$ by the Statement's instance-map hypothesis. Therefore the target solver's correctness guarantee applies to $r(z)$. [given, F2]

1.3 On a source-promised input $z$, compute the target instance $r(z)$ before running $A$. In the decision case this computation terminates by the polynomial-time reduction in [F1]; in the search case it terminates by [A2]. Prepare the target solver's input from this result, with that preparation charged separately. The resulting input and initial registers are those of $A$ on $r(z)$, so the empty-query prefixes agree. [given, F1, A2, F3, F4, base]

1.4 Assume the first $j$ target-query actions have produced the same classical history and, in the quantum case, the same state on all query and workspace registers. The between-query operations and their measurement branches are then identical. At the next call, direct access supplies the same action; exact simulation [A1] supplies the same full action. If it is controlled, [F12] fixes its block action and [A1] supplies that variant. If it is an inverse XOR query, [F13] identifies it with the ordinary query already supplied by [A1]. Hence the executions agree through query $j+1$. [given, A1, F3, F4, F12, F13, ih]

2.1 Steps 1.3–1.4 prove agreement after every one of the finite, at most $T$, query calls; any final nonquery operations and output predicate are then the same. Therefore the output laws agree. [step 1.3, step 1.4, discharge-induction: step 1.4]

3.1 By steps 1.1–1.2, the target solver is applied only to promised target instances; by step 2.1 the output law is unchanged. Hence its exact success probability one or bounded-error success probability at least $2/3$ transfers to each source input. In the search case, every successful target witness is mapped to a source witness by [A2]; in the decision case, the output bit remains the correct side. [F2, F5, F6, A2, step 1.1, step 1.2, step 2.1]

3.2 On any branch with $k\le T$ target calls, direct access uses $k\le T$ source calls. If every simulated target call uses at most $s$ source calls on each branch, the composed branch uses at most $\sum_{j=1}^{k}s=sk\le sT$ source calls. Taking the worst case over promised inputs and branches yields the stated query-cost bounds. [given, A1, F3, F4, F7, F8, step 2.1, algebra]

4.1 The call counts in step 3.2 do not include the work to compute $r$ or $L$ on binary encodings [F11], prepare the target solver's input, transform states, execute simulation gates, process replies, or write outputs. Those operations contribute to the separate coordinates in [F9]–[F10]; the reduction map alone cannot certify a free target oracle. [F9, F10, F11, step 1.3, step 3.2] ∎
