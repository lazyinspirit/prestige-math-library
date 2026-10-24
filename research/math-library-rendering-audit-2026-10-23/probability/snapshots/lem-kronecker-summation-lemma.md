---
id: lem-kronecker-summation-lemma
title: "Kronecker summation lemma"
kind: lemma
status: published
origin: pipeline
deps: ["lem-abel-summation-by-parts", "thm-series-cauchy-criterion"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 2.5.9 and full proof, pp. 85\u201386"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
proof_strategy: "Apply Abel summation to convergent partial sums t_n of x_n/b_n. Put b_0=t_0=0. The weights (b_k-b_{k-1})/b_n are nonnegative and sum to one; split at a fixed index to show their average of t_{k-1} tends to lim t_n."
---

## Statement

Let $(x_n)_{n\ge1}$ be real and let $0<b_n$ be deterministic, nondecreasing, and tend to infinity. If $\sum_{n\ge1}x_n/b_n$ converges in $\mathbb R$, then
$$\frac1{b_n}\sum_{k=1}^nx_k\longrightarrow0.$$
Repeated values of $b_n$ are allowed.

## Facts & Assumptions

[F1] [[lem-abel-summation-by-parts]]: Let $(a_k)$ and $(b_k)$ be sequences of reals and let $A_n \;:=\; \sum_{k<n} a_k \qquad (n \in \mathbb{N})$ be the partial sums of $\sum a_k$ (def-series, def-finite-sum), so that $A_0 = 0$ and $a_k = A_{k+1} - A_k$ for every $k$. Then for every natural number $n \ge 1$ $\sum_{k<n} a_k b_k \;=\; A_n\, b_{n-1} \;-\; \sum_{k<n-1} A_{k+1}\,(b_{k+1} - b_k) .$ Both sides are finite sums in the sense of def-finite-sum; at $n = 1$ the right-hand sum is empty and the identity reads $a_0 b_0 = A_1 b_0$. **The hypothesis $n \ge 1$ is what makes the statement legitimate**, not merely convenient: the index $n-1$ occurs on the right, and $n-1$ is a natural number exactly when $n \ge 1$. At $n = 0$ there is nothing to state, both the left-hand side and $A_0$ being $0$.

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Put $t_0=b_0=0$ and $t_n=\sum_{k=1}^nx_k/b_k\to t$. Abel summation, shifted from its zero-based indices, gives $b_n^{-1}\sum_{k=1}^nx_k=t_n-\sum_{k=1}^n(b_k-b_{k-1})t_{k-1}/b_n$. One can verify the same identity by substituting $x_k=b_k(t_k-t_{k-1})$ and telescoping; for $n=1$ it reads $x_1/b_1=t_1$. [F1, given, algebra]

2.1 The weights $w_{n,k}=(b_k-b_{k-1})/b_n$ are nonnegative and sum to one. For $\varepsilon>0$, take $M$ such that $|t_j-t|<\varepsilon$ for $j\ge M$. With $K=\max_{0\le j<M}|t_j-t|$, the weighted average differs from $t$ by at most $K b_M/b_n+\varepsilon$ for $n>M$. The first term tends to zero; no division by $K$ is required, even if it vanishes. Repeated normalizers merely give zero weights. [step 1.1, given, algebra]

3.1 As $\varepsilon$ is arbitrary the weighted average tends to $t$. Subtracting it from $t_n\to t$ in the finite identity proves the assertion, including the zero sequence. [step 1.1, step 2.1, algebra] ∎
