---
id: prop-qa-11-known-count-random-selection-bit-cost
kind: proposition
title: Classical bit cost of randomized known-count search
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
proof_strategy: direct
deps:
  - alg-qa-11-known-count-random-iteration-search
  - def-qa-classical-bit-cost
  - lem-ceiling-and-least-positive-integer-threshold
  - lem-of-square-monotone
  - thm-of-square-roots
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, §2
      url: https://arxiv.org/pdf/quant-ph/0005055
axiom_use: None; only finite sums, finite random choices, elementary real arithmetic, and natural-number induction are used; no choice principle is needed.
---

## Statement

For $0<t\le N/2$, the procedure [[alg-qa-11-known-count-random-iteration-search]] computes $K=\lceil\sqrt{N/t}\rceil$ by $O(n)$ binary-search predicate evaluations on integers with $O(n)$ bits, costing $O(n^3)$ deterministic bit operations by schoolbook arithmetic. Computing $b$ and drawing the nine $b$-bit iteration labels uses $O(n)$ further classical bit operations and random bits. The direct-sampling branch $t>N/2$ uses $O(n)$ classical bit operations in total for address and output bookkeeping across at most nine rounds; its address samples are obtained by quantum measurement, not by generating $9n$ classical fair bits. These bounds are for $n\ge1$; when $n=0$, only the direct branch occurs and its bookkeeping is constant. Quantum measurements, state preparation, gates, and oracle calls are separate costs.

## Facts & Assumptions

**Given:** The known-count randomized algorithm, $N=2^n$, exact integer $1\le t\le N$, and the classical bit-cost convention.

[F1] [[alg-qa-11-known-count-random-iteration-search]]: in the $t\le N/2$ branch, binary search finds the least $K\ge1$ with $tK^2\ge N$, then samples nine labels using $b$ fair bits.

[F2] [[thm-of-square-roots]]: the nonnegative square root of $N/t$ exists.

[F3] [[lem-ceiling-and-least-positive-integer-threshold]]: $K=\lceil\sqrt{N/t}\rceil$ is the least positive integer meeting $tK^2\ge N$.

[F4] [[def-qa-classical-bit-cost]]: classical bit work includes random-bit generation and address bookkeeping, while each oracle invocation is charged separately.

[F5] [[lem-of-square-monotone]]: square roots preserve order on nonnegative reals.

[F6] [[lem-of-square-monotone]]: squaring preserves order on nonnegative reals, so $P(m):tm^2\ge N$ is monotone for $m\ge0$ and $t>0$.

## Proof

1.1 Since $t\ge1$, $\sqrt{N/t}\le\sqrt N$ by [F5], hence $K\le\lceil\sqrt N\rceil\le2^{\lceil n/2\rceil}=\mathrm{hi}$. The predicate $P(m):tm^2\ge N$ is false at $\mathrm{lo}=0$, true at $\mathrm{hi}$, and monotone by [F6]. At each step with width $d=\mathrm{hi}-\mathrm{lo}>1$, the upper midpoint $\mathrm{lo}+\lceil d/2\rceil$ lies strictly between the endpoints; replacing the endpoint with the same predicate value preserves the invariant and leaves width at most $\lceil d/2\rceil$. Thus after $O(n)$ steps the width is one and $\mathrm{hi}$ is the least positive integer satisfying $P$, namely $K$ by [F3]. [given, F1, F2, F3, F5, F6, algebra]

2.1 The initial endpoint has $O(n)$ bits, so each midpoint does as well. A schoolbook square and multiplication compute $tm^2$ in $O(n^2)$ bit operations, and comparison with $N$ takes $O(n)$ more. The $O(n)$ predicate evaluations therefore cost $O(n^3)$. [step 1.1, F4, algebra]

2.2 The least $b\ge0$ with $2^b\ge K$ satisfies $b\le\lceil n/2\rceil$. The nine labels consume $9b=O(n)$ random bits and comparisons; forming or writing each at-most-$n$-bit address uses $O(n)$ more bookkeeping. Hence this work is within $O(n^3)$. [given, F1, step 1.1, F4, algebra]

3.1 If $t>N/2$, each of at most nine rounds measures the freshly prepared uniform quantum address. Handling these returned $n$-bit addresses and writing the result takes $O(n)$ classical bit operations in total; the state preparation and measurements are separate quantum operations, and no classical fair address bits are generated. For $n=0$, $N=t=1$ and the bookkeeping is constant. The bit-query invocations remain separately charged by [F4]. [given, F1, F4] ∎
