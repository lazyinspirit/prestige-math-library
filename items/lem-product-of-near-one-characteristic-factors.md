---
id: lem-product-of-near-one-characteristic-factors
kind: lemma
title: Products of near-one characteristic factors
deps: ["def-complex-exponential", "lem-complex-exponential-series-converges-everywhere", "thm-complex-exponential-addition-and-real-extension"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, proof of Theorem 3.4.10'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Aldous and Chewi, Probability Theory notes, proof of Theorem 5.3
      url: https://www.stat.berkeley.edu/users/aldous/205B/chewi_notes.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Let each row $(z_{n,k})_{1\le k\le k_n}$ be a finite family of complex numbers; empty rows are allowed with maximum zero. Suppose $\max_k|z_{n,k}-1|\to0$, $M:=\sup_n\sum_k|z_{n,k}-1|<\infty$, and $\sum_k|z_{n,k}-1|^2\to0$. Then $$\prod_k z_{n,k}-\exp\!\left(\sum_k(z_{n,k}-1)\right)\longrightarrow0.$$

## Facts & Assumptions

[F1] The exponential is its power series. [[def-complex-exponential]].

[F2] The series converges absolutely at every complex argument. [[lem-complex-exponential-series-converges-everywhere]].

[F3] Finite products of exponentials equal the exponential of their sum. [[thm-complex-exponential-addition-and-real-extension]].

## Proof

**Given:** Let each row $(z_{n,k})_{1\le k\le k_n}$ be a finite family of complex numbers; empty rows are allowed with maximum zero. Suppose $\max_k|z_{n,k}-1|\to0$, $M:=\sup_n\sum_k|z_{n,k}-1|<\infty$, and $\sum_k|z_{n,k}-1|^2\to0$. Then $$\prod_k z_{n,k}-\exp\!\left(\sum_k(z_{n,k}-1)\right)\longrightarrow0.$$

1.1 Put $w_{n,k}=z_{n,k}-1$. For $|w|\le1/2$, absolute convergence gives $|e^w-1-w|\le\sum_{j\ge2}|w|^j/j!\le |w|^2\sum_{j\ge2}(1/2)^{j-2}/2=|w|^2$. Also $|1+w|\le1+|w|\le e^{|w|}$ and $|e^w|\le\sum_{j\ge0}|w|^j/j!=e^{|w|}$. The real series is nonnegative term by term, which proves the middle inequality without a logarithm. [F1, F2, F3]

2.1 For arbitrary finite lists a,b of length r, subtracting successive mixed products gives $\prod_{k=1}^r a_k-\prod_{k=1}^r b_k=\sum_{j=1}^r(a_j-b_j)(\prod_{k<j}a_k)(\prod_{k>j}b_k)$. The cancellation follows by expanding each difference; for r=0 both products are one and the sum zero. Apply it with $a_k=1+w_{n,k}$ and $b_k=e^{w_{n,k}}$. For all sufficiently large n every modulus of w is at most 1/2. Each pair of partial products is bounded by $\exp(\sum_{k\ne j}|w_{n,k}|)\le e^M$, so the difference of the row products has modulus at most $e^M\sum_j|w_{n,j}|^2$. [step 1.1, algebra]

3.1 The bound tends to zero by hypothesis. Repeated exponential addition identifies the comparison product with $\exp(\sum_k w_{n,k})$, including empty and one-factor rows. If M=0 then all w vanish and equality is exact in every row. All products and telescoping sums are finite; no branch of logarithm or choice principle is used. [step 2.1, F3] ∎

