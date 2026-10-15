---
id: thm-abc-rejection-target-is-tolerance-conditioned-posterior
kind: theorem
title: ABC rejection returns the tolerance-conditioned posterior
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-abc-rejection
  - def-approximate-bayesian-computation
  - def-identically-distributed-and-iid-random-variables
  - thm-geometric-series
justified_by: []
proof_strategy: direct
axiom_use: "None. The theorem assumes the IID proposal-simulator sequence supplied to the algorithm; all probability calculations use finite-dimensional independence and a geometric series."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Jarno Lintusaari, Michael U. Gutmann, Ritabrata Dutta, Samuel Kaski, and Jukka Corander, Fundamentals and Recent Developments in Approximate Bayesian Computation"
      url: https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf
    - title: "Aki Honkela, Computational Statistics I, Chapter 9"
      url: https://www.cs.helsinki.fi/u/ahonkela/teaching/compstats1/book/further-monte-carlo-techniques-and-approximate-bayesian-computation-abc.html
---

## Statement

Use the model and notation of [[def-approximate-bayesian-computation]] and the procedure [[alg-abc-rejection]]. Let $B=B_\epsilon(s_0)$ and $p=M(\Theta\times B)>0$. Suppose the proposals and simulator outputs form an IID sequence $(\Theta_j,Y_j)_{j\ge1}$ with the prior-simulator joint law. Then the first accepted index
$$N:=\inf\{j\ge1:S(Y_j)\in B\}$$
is finite almost surely, and the accepted parameter has law
$$\mathbb P(\Theta_N\in A)=\frac{M(A\times B)}{p}=\Pi_\epsilon(A\mid s_0)\qquad(A\in\mathcal T).$$
Thus the accepted parameter has exactly the tolerance-conditioned target law. This statement does not identify that target with the full-data posterior or assert an expected proposal count.

## Facts & Assumptions

**Given:** A proper prior-simulator model, $s_0$, $\epsilon\ge0$, $p=M(\Theta\times B_\epsilon(s_0))>0$, and an IID sequence of proposal-simulator pairs with the model's prior-simulator joint law.

[F1] The summary-predictive law $M$ is the law of $(\theta,S(Y))$, and the indicator ABC target is $M(A\times B)/M(\Theta\times B)$ when the denominator is positive. [[def-approximate-bayesian-computation]]

[F2] ABC rejection draws independent prior-simulator pairs and accepts precisely when the simulated summary lies in $B_\epsilon(s_0)$. [[alg-abc-rejection]]

[F3] IID means identically distributed and mutually independent, not merely pairwise independent. [[def-identically-distributed-and-iid-random-variables]]

[F4] If $0\le r<1$, then $\sum_{k=0}^{\infty}r^k=1/(1-r)$. [[thm-geometric-series]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For each $j$, let $E_j=\{S(Y_j)\in B\}$. By [F1] and [F2], $\mathbb P(E_j)=p$ and, for every $A\in\mathcal T$, $\mathbb P(\Theta_j\in A,\ E_j)=M(A\times B)$. [given, F1, F2]

2.1 By [F3], for each $k\ge1$, $\mathbb P(N=k)=\mathbb P(E_1^c\cap\cdots\cap E_{k-1}^c\cap E_k)=(1-p)^{k-1}p.$ Since $0\le1-p<1$, summing these disjoint events and applying [F4] gives $\mathbb P(N<\infty)=\sum_{k=1}^{\infty}(1-p)^{k-1}p=p\frac{1}{1-(1-p)}=1.$ Thus the algorithm terminates almost surely. [given, F3, F4, step 1.1, algebra]

3.1 For any $A\in\mathcal T$, partition the accepted-output event by the first accepted index. Independence in [F3] and step 1.1 give $\mathbb P(\Theta_N\in A)=\sum_{k=1}^{\infty}(1-p)^{k-1}M(A\times B)=\frac{M(A\times B)}{p}.$ By [F1] this is $\Pi_\epsilon(A\mid s_0)$, proving the asserted law. [given, F1, F3, step 1.1, F4, algebra] ∎
