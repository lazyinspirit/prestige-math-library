---
id: thm-qa-shor-factoring-cost
kind: theorem
title: "Separate Shor factoring bit, gate, and query costs"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - alg-qa-shor-factoring
  - thm-qa-modular-order-finding-cost
  - thm-qa-modular-arithmetic-cost
  - def-qa-shor-cost-accounting
  - lem-qa-shor-perfect-power-precheck
  - thm-qa-shor-residue-sampler-correct-and-cost
  - def-countable-choice
  - def-dependent-choice
  - def-qa-classical-bit-cost
  - def-qc-circuit-cost-model
  - alg-qa-modular-order-finding
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice and dependent choice are used only for the expected-cost rejection sampler."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
      locator: "§4, order finding, and §5, ‘Prime factorization’, PDF pp. 16–19."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 5, §§5.1–5.2, period finding and factoring, PDF pp. 49–56."
---
## Statement

Let $N\ge4$, $n=\lceil\log_2N\rceil$, and let $\delta=u/v\in(0,1)$ be a reduced rational encoded in binary, with $B$ the bit length of $v$. Let $T$ be the attempt cap in [[alg-qa-shor-factoring]], and put $Q=2^{2n+3}$. For the arithmetic, control, sampler and post-processing work after the declared circuits are supplied, under the explicit reversible-arithmetic branch and ideal exact-angle QFT branch of [[def-qa-shor-cost-accounting]], the procedure uses

- $O(n^4T)=O(n^4(1+\ln(1/\delta)))$ quantum gates;
- $O(n^2T)$ controlled modular-multiplier calls and zero external black-box queries;
- $O(n^5+n^4T+B^3)$ expected classical bit operations, including sampler bits and exact computation of $T$.

For the same order-finding control flow with only bare controlled access to $U_x$, one phase-estimation sample costs $Q-1$ controlled-$U_x$ queries, so the outer algorithm uses $O(nT(Q-1))$ such queries. No polynomial-in-$n$ query bound, finite-alphabet compilation, uniform-family gate claim, or circuit-description generation-time bound is asserted.

## Facts & Assumptions

**Given:** The algorithm [[alg-qa-shor-factoring]] on binary input $N,\delta$, with its declared outer cap $T$ and phase width $m=2n+3$.

[F1] For $m=2n+3$, $Q=2^m$, and internal failure target $2^{-b}$, the order finder uses $t=4(n+1)b$ independent samples. Its cost theorem gives $O(n^2b)$ controlled modular-multiplier calls, $O(n^4b)$ gates and $O(n^4b)$ classical bit transitions in the explicit-arithmetic/ideal-QFT model; with bare controlled-$U_x$ access, one sample costs $Q-1$ queries ([[alg-qa-modular-order-finding]], [[thm-qa-modular-order-finding-cost]]).

[F2] A known controlled modular multiplication uses $O(n^2)$ gates, and the repeated-squaring constants and inverses can be computed in $O(n^3)$ classical bit transitions ([[thm-qa-modular-arithmetic-cost]]).

[F3] The ideal exact-angle inverse QFT has $O(m^2)$ gates, while the named cost convention keeps this ideal count separate from the explicit arithmetic circuits, multiplier calls, bare-unitary queries and classical bit operations; it asserts no finite gate alphabet or uniform family ([[def-qa-shor-cost-accounting]]).

[F4] The even/perfect-power preprocessing takes $O(n^5)$ schoolbook bit operations ([[lem-qa-shor-perfect-power-precheck]]).

[F5] For $h=\lceil\log_2(N-1)\rceil$, one rejection-sampler call halts almost surely, returns a uniform element of $\{1,\ldots,N-1\}$, and uses at most $2h$ expected random bits and $O(h)$ expected total bit transitions ([[thm-qa-shor-residue-sampler-correct-and-cost]]).

[F6] Classical bit cost counts machine transitions, including random-bit generation, arithmetic, comparisons, preprocessing and output writing ([[def-qa-classical-bit-cost]]).

[A1] The current Step 1 record for [[def-qc-circuit-cost-model]] is `escalated` with the reason that the QC09 cost interfaces require reconciliation. Its actual definition and the actual QA08 cost-carrier bodies were inspected, but that owner escalation remains unresolved and is not treated as supplier acceptance.

## Proof

1.1 The Shor algorithm fixes $b=2$, so [F1] gives $O(n^2)$ multiplier calls, $O(n^4)$ gates and $O(n^4)$ classical bit transitions for each order-finding invocation. There are at most $T$ such invocations, so their totals are $O(n^2T)$ calls, $O(n^4T)$ gates and $O(n^4T)$ bit transitions. The definition of $T$ gives $T=O(1+\ln(1/\delta))$ because $-\ln(5/8)$ is a positive constant. [given, F1, algebra]

1.2 In the bare controlled-$U_x$ branch, one phase sample applies controlled powers $U_x^{2^j}$ for $j=0,\ldots,m-1$. Repeating the bare call $2^j$ times implements the $j$th power, so one sample uses $\sum_{j=0}^{m-1}2^j=2^m-1=Q-1$ queries. For fixed $b=2$, [F1] gives $t=8(n+1)=O(n)$ samples per order call. At most $T$ calls therefore use $O(nT(Q-1))$ queries. [given, F1, algebra]

1.3 The perfect-power check costs $O(n^5)$ by [F4]. Each order call costs $O(n^4)$ classical bit transitions by [F1]. The outer verification adds at most $O(n^3)$ transitions per attempt: binary modular exponentiation uses $O(n)$ products of $n$-bit integers. Schoolbook multiplication takes $O(n^2)$ transitions, and binary long division has at most $n$ quotient positions, each requiring an $O(n)$-bit comparison/subtraction, so product remainders also take $O(n^2)$ transitions. The Euclidean gcd algorithm has $O(n)$ remainder steps because in each pair of successive divisions the positive remainder at least halves; each division takes $O(n^2)$ transitions by the same long-division count. Divisor comparisons and remainder checks fit this bound. By [F5], each sampler call uses $O(n)$ expected total transitions. Thus all these per-attempt work is $O(n^4T)$ in total. [F1, F4, F5, F6, algebra]

1.4 The exact cap is computed by increasing $t$ until $5^t v\le8^t u$. Since $v<2^B$ and $u\ge1$, $\delta>2^{-B}$; also $(5/8)^{2B}=(25/64)^B<2^{-B}$. Hence $T\le2B$. Throughout this loop, the exact powers have $O(B)$ bits, and each of at most $2B$ multiply/compare iterations costs $O(B^2)$ schoolbook bit transitions. Computing $T$ therefore costs $O(B^3)$. [given, F6, algebra]

2.1 In the explicit-arithmetic branch, each multiplier call is charged to the supplied reversible circuit; it is not a black-box query. [F2] supplies its $O(n^2)$ gate count and [F3] supplies the separate ideal QFT count. The resulting gate count is the $O(n^4T)$ bound in step 1.1; the cost-interface readiness hold is exactly [A1]. [F1, F2, F3, A1, step 1.1, algebra]

3.1 Combining steps 1.3 and 1.4 gives $O(n^5+n^4T+B^3)$ expected classical bit operations. [step 1.3, step 1.4, algebra] ∎

## Remarks

This cost result remains escalated because [[def-qc-circuit-cost-model]] has an existing owner escalation. The two QA08 cost bodies are present and their claims are quoted in the batch proof contract; the escalation is preserved for owner reconciliation.
