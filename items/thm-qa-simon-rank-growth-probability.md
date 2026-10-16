---
id: thm-qa-simon-rank-growth-probability
kind: theorem
title: "Simon rank growth probability"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - def-qa-simon-rank-process
  - thm-qa-simon-hadamard-sampling-law
  - def-finite-probability-space-and-event
  - def-finite-real-random-variable-and-distribution
  - def-expectation-on-a-finite-probability-space
  - thm-geometric-series
  - def-qa-binary-field-f2
  - def-qa-binary-vector-space
  - thm-qa-binary-field-f2-is-a-field
  - def-linear-independence
  - lem-span-is-the-set-of-linear-combinations
  - def-linear-combination-and-span
  - def-linear-basis
  - def-dimension
  - lem-qa-simon-annihilator-subspace-basis
justified_by: []
proof_strategy: direct
axiom_use: "No Choice is used; finite-dimensional spans and finite-prefix expectations suffice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6, 2026)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 3 §§3.1-3.3, PDF pp.35-39: Simon promise, one-sample derivation, uniform s-perp law, rank growth, expected queries and classical lower-bound proof."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
      locator: "§6.1, PDF pp.11-13 and §6.5, PDF pp.27-33: independent Simon sample derivation and finite-abelian HSP context."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 6, PDF pp.33-37: Simon as a finite-abelian hidden-subgroup instance and Fourier sampling context."
---
## Statement

Let $d=n-1$ and consider a finite history with $k<d$ accepted rows in the Simon rank process. These rows are independent by the acceptance rule, so the current rank is $k$. The next independent sample increases the rank with probability

$$p_k=1-2^{k-d}\ge\frac12.$$

Writing $q_k=2^{k-d}$, for each fixed rank-$k$ history and every $r\in\mathbb N$, let $A_{k,r}$ be the event, in the finite continuation experiment of the next $r$ fresh samples, that all $r$ fail to raise rank. For $M\ge1$, let $W_{k,M}$ on the finite $M$-sample continuation experiment be the number of samples up to the first rank increase, capped at $M$, with value $M$ if no increase occurs in that prefix. Then

$$\Pr(A_{k,r})=q_k^r,$$

and the expected truncated waiting count is

$$\mathbb E[W_{k,M}]=\sum_{j=0}^{M-1}q_k^j\le\frac1{p_k}\le2.$$

All probabilities and expectations here are over finite continuation experiments; no probability measure on infinite sample histories is assumed.

## Facts & Assumptions
**Given:** A fixed Simon oracle, $d=n-1$, and a finite history with $k<d$ accepted rows.

[F1] [[def-qa-simon-rank-process]]: the accepted rows span $V_k\subseteq s^\perp$, and fresh independent Simon samples are taken until rank $d$.

[F2] [[thm-qa-simon-hadamard-sampling-law]]: a fresh sample is uniform on $s^\perp$.

[F3] [[lem-qa-simon-annihilator-subspace-basis]]: $s^\perp$ has dimension $d$ and $2^d$ elements.

[F4] [[def-qa-binary-vector-space]] and [[def-qa-binary-field-f2]]: coefficient lists are in $\mathbb F_2^k$, with each coordinate chosen from $\{0,1\}$.

[F5] [[thm-qa-binary-field-f2-is-a-field]]: $\mathbb F_2$ is a field.

[F6] [[def-linear-independence]]: an accepted list is independent when its only zero linear combination has all coefficients zero.

[F7] [[def-linear-combination-and-span]] and [[lem-span-is-the-set-of-linear-combinations]]: the span consists exactly of finite linear combinations of the accepted rows.

[F8] [[def-linear-basis]] and [[def-dimension]]: a basis is an independent spanning set, and the dimension is the size of a finite basis.

[F9] [[def-finite-probability-space-and-event]]: every finite-prefix outcome space has nonnegative weights summing to one.

[F10] [[def-finite-real-random-variable-and-distribution]]: a real random variable on a finite probability space is a function on that finite outcome set.

[F11] [[def-expectation-on-a-finite-probability-space]]: expectation is the finite sum of value times outcome weight.

[F12] [[thm-geometric-series]]: if $0\le q<1$, then $\sum_{j=0}^\infty q^j=1/(1-q)$.

## Proof

1.1 By [F1], each accepted row was outside the span of its predecessors. In a zero linear combination, if the last nonzero coefficient were $1$, that row would be a combination of its predecessors, contradicting acceptance; since the only nonzero scalar is $1$, this proves inductively that the accepted list is independent by [F6]. It spans $V_k$ by [F7], hence is a basis by [F8]. The coefficient map from $\mathbb F_2^k$ to $V_k$ is injective by independence and surjective by span; [F4] gives $2^k$ possible coefficient lists, so $|V_k|=2^k$. [given, F1, F4, F5, F6, F7, F8, algebra]

2.1 By [F2]–[F3], samples are uniform on the $2^d$ elements of $s^\perp$, and [F1] gives $V_k\subseteq s^\perp$. Exactly $2^k$ lie in $V_k$ by step 1.1, so the probability the next sample is accepted is $(2^d-2^k)/2^d=1-2^{k-d}=p_k$, while the failure probability is $q_k=2^{k-d}\le1/2$. [given, F1, F2, F3, step 1.1, algebra]

3.1 Condition on any rank-$k$ history and use the finite $r$-sample continuation experiment. Let $A_{k,r}$ be the event that every one of those $r$ samples lies in the current span $V_k$. On this event the span remains $V_k$ throughout; by freshness, each conditional failure probability is $q_k$, so multiplying the finite conditional probabilities gives $\Pr(A_{k,r})=q_k^r$. For $r=0$, $A_{k,0}$ is the whole one-outcome empty continuation and has probability $1=q_k^0$. [given, F1, step 2.1, algebra]

4.1 For each finite horizon $M$, the explicitly defined $W_{k,M}$ is a function on the finite experiment by [F9]–[F10]. For every $0\le j<M$, the event $\{W_{k,M}>j\}$ is the event $A_{k,j}$ after projection to its first $j$ samples, so $W_{k,M}=\sum_{j=0}^{M-1}\mathbf1_{A_{k,j}}$. The expectation definition [F11] and step 3.1 give $\mathbb E[W_{k,M}]=\sum_{j=0}^{M-1}q_k^j$. Since $0\le q_k\le1/2$, [F12] bounds these partial sums by $1/(1-q_k)=1/p_k\le2$. [given, F9, F10, F11, F12, step 3.1, algebra] ∎

