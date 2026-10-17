---
id: thm-rational-bernoulli-rejection-law-and-cost
kind: theorem
title: "Rational Bernoulli rejection has exact law, geometric failure, and bounded expected bit cost"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - thm-geometric-series
  - alg-rational-bernoulli-rejection-from-fair-bits
  - thm-independent-fair-bit-streams-produce-uniforms
  - thm-monotone-convergence-for-the-integral
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter XV §1.2, random-bit examples"
      url: "https://luc.devroye.org/chapter_fifteen.pdf"
    - title: "J. Jung, Monte-Carlo Methods lecture notes, §4.1 rejection sampling"
      url: "https://jjung.perso.univ-pau.fr/Enseignements/AlgoAv/MonteCarlo.pdf"
---

## Statement

Consider [[alg-rational-bernoulli-rejection-from-fair-bits]] with $0<m<n$ and $k,N$ as in its Definition. One attempt accepts with probability $n/N>1/2$. With cap $M_{\max}<\infty$, failure probability is $(1-n/N)^{M_{\max}}<2^{-M_{\max}}$, and conditional on success the returned bit is Bernoulli with success probability $m/n$. With no cap, the algorithm terminates almost surely, returns an exact Bernoulli$(m/n)$ bit, and uses expected $N/n<2$ blocks and $kN/n<2k$ fair bits. The endpoint cases $m=0,n$ are deterministic and use zero bits.

## Facts & Assumptions

**Given:** Integers $0<m<n$, independent fair-bit blocks, and the procedure in [[alg-rational-bernoulli-rejection-from-fair-bits]].

[F1] Each fresh $k$-bit block is uniform on $\{0,\ldots,N-1\}$, and disjoint blocks are independent. [[thm-independent-fair-bit-streams-produce-uniforms]]

[F2] The procedure accepts exactly when the block integer lies in $\{0,\ldots,n-1\}$ and returns one exactly for $\{0,\ldots,m-1\}$. [[alg-rational-bernoulli-rejection-from-fair-bits]]

[F3] For nonnegative measurable $X_M\uparrow X$, monotone convergence gives $\mathbb E X=\lim_M\mathbb E X_M$. [[thm-monotone-convergence-for-the-integral]]

[F4] For real $|r|<1$, $\sum_{j=0}^\infty r^j=1/(1-r)$. [[thm-geometric-series]]

[A1] The countable fair-bit product supplying [F1] assumes Countable Choice and Dependent Choice; the rejection calculation is conditional on that source. [[def-countable-choice]], [[def-dependent-choice]]

## Proof

1.1 By minimality of $k$, $n\le N<2n$ for $n>1$. [F1] gives acceptance probability $a=n/N>1/2$ and rejection probability $r=1-a<1/2$. On one accepted block, the $n$ possible accepted integers have equal probability $1/N$, with $m$ of them returning $1$ and $n-m$ returning $0$. [given, F1, F2, A1, algebra]

2.1 By independence of attempts, the probability that the first accepted block occurs at attempt $j$ and returns $1$ is $r^{j-1}m/N$, while the probability that it occurs at attempt $j$ is $r^{j-1}n/N$. Summing over $1\le j\le M_{\max}$ gives success probability $1-r^{M_{\max}}$ and returned-one probability $(m/n)(1-r^{M_{\max}})$; dividing yields conditional success probability $m/n$. The no-acceptance event has probability $r^{M_{\max}}<2^{-M_{\max}}$. [F1, A1, step 1.1, algebra]

3.1 With no cap, $r^M\to0$, so the probability of never accepting is zero. Let $J$ be the first accepted attempt, setting $J=\infty$ on the null nontermination event. For each $M$, $J\wedge M=\sum_{j=0}^{M-1}\mathbf1_{\{J>j\}}$; these truncations increase to $J$, and independence gives $\mathbb P(J>j)=r^j$. By [F3] and the geometric identity [F4] with $0\le r<1/2$, $\mathbb E J=\sum_{j\ge0}r^j=(1-r)^{-1}=N/n<2$. Taking $M\to\infty$ in step 2.1 gives output-one probability $m/n$ and hence the exact Bernoulli$(m/n)$ law. Each attempt consumes $k$ bits, so the expected bit cost is $kN/n<2k$. The cases $m=0$ and $m=n$ use the explicit zero-bit branches in the algorithm. [F1, F2, F3, F4, A1, step 1.1, step 2.1, algebra] ∎
