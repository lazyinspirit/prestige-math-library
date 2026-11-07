---
dependency_level: 1
id: lem-prime-power-removal-for-fixed-tuple-divisor-weights
kind: lemma
title: "Global prime-power removal for fixed-tuple divisor-square weights"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-von-mangoldt-function
  - lem-divisor-function-subpower-bound
justified_by: []
proof_strategy: direct
axiom_use: "Finite arithmetic, Riemann integrals and absolutely convergent numerical series; no choice axiom is added."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Maynard, Small gaps between primes (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
      locator: "Section5, prime-coordinate restriction and progression expansion; this adaptation removes full von Mangoldt proper powers globally."
    - title: "H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory II, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
      locator: "Sections22.1–22.2, printed pp.323–341; source-backed local adaptation, not an imported theorem."
---

## Statement

Fix distinct integer shifts $h_1,\ldots,h_k$, a coordinate $j$, and $\varepsilon>0$. For a sufficiently large integer $N$ let $1\le R<N/2$ and let $\lambda_d$ be a finite real array supported on positive tuples with $\prod_i d_i<R$. Put $\lambda_{\max}=\max_d|\lambda_d|$ (zero for an empty array),
$$w(n)=\left(\sum_{d_i\mid n+h_i\ \forall i}\lambda_d\right)^2,\qquad w_j(n)=\left(\sum_{d_i\mid n+h_i\ \forall i,\ d_j=1}\lambda_d\right)^2.$$
For any subset $\mathcal N\subset[N,2N)\cap\mathbb Z$, set
$$S_j=\sum_{n\in\mathcal N}1_{\mathbb P}(n+h_j)w(n),\quad T_j=\sum_{n\in\mathcal N}1_{\mathbb P}(n+h_j)\log(n+h_j)w(n),\quad V_j=\sum_{n\in\mathcal N}\Lambda(n+h_j)w_j(n).$$
Then
$$0\le V_j-T_j\ll_{k,H,\varepsilon}\lambda_{\max}^2N^{1/2+\varepsilon}(\log N)^2, \qquad |T_j-(\log N)S_j|\ll_H S_j.$$
The error is global over $n$, before summing arithmetic-progressions or moduli.

## Facts & Assumptions

**Given:** The fixed tuple, coordinate, coefficient array and subset in the Statement.

[F1] [[def-von-mangoldt-function]] gives $\Lambda(p^a)=\log p$ and zero otherwise; a positive prime exceeds one.

[F2] [[lem-divisor-function-subpower-bound]] gives $\tau_2(u)\ll_\delta u^\delta$ for every fixed $\delta>0$ and all positive integers $u$.

## Proof

1.1 For large $N$ every $n+h_i$ under consideration is in $[N/2,3N]$. If $n+h_j$ is prime, every supported divisor $d_j<R<N/2$ dividing it equals one. Thus $w_j(n)=w(n)$ on this prime event. The prime part of $V_j$ is exactly $T_j$, and all remaining nonzero terms are proper prime powers with nonnegative weights. [F1, given, algebra]

2.1 For any $n$ the number of divisor tuples in either inner sum is at most $\prod_i\tau_2(n+h_i)$. Apply [F2] with $\delta=\varepsilon/(2k)$ and square to obtain [F1, F2, step 1.1, algebra]
$$w_j(n)\le\lambda_{\max}^2\prod_i\tau_2(n+h_i)^2 \ll_{k,H,\varepsilon}\lambda_{\max}^2N^\varepsilon.$$
Every proper power $p^a\le3N$ has $2\le a\le\log(3N)/\log2$. For each $a$ there are at most $(3N)^{1/a}\le\sqrt{3N}$ possible bases, so the number of powers is $O(\sqrt N\log N)$, even when repetitions are counted. Each has $\Lambda\le\log(3N)$. Sum this bound once over all $n$, using step 1.1, to prove the first error estimate. No modulus factor appears. [F1, F2, step 1.1, algebra]

3.1 For $N/2\le n+h_j\le3N$, $|\log(n+h_j)-\log N|\le\max(\log2,\log3)$. Multiply this by the nonnegative prime weight and sum to obtain the second bound. Empty arrays or subsets give zero throughout, and the bounds also hold when $S_j=0$. [given, step 1.1, algebra] ∎
