---
id: def-qa-simon-random-instance-distribution
kind: definition
title: "Random Simon-oracle distribution for a classical lower bound"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-simon-promise
  - def-finite-probability-space-and-event
justified_by: []
proof_strategy: direct
axiom_use: "No Choice is used; the finite injection set is enumerated and assigned uniform weights."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
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
## Definition

Fix $n\ge1$ and $m\ge n-1$, and put $L=2^m$ and $C=2^{n-1}$. Choose $s$ uniformly from the $2^n-1$ nonzero binary masks. Let $\mathcal C_s$ be the set of address pairs $\{x,x\oplus s\}$. Conditional on $s$, choose uniformly an injection $\lambda:\mathcal C_s\to\{0,1\}^m$ and define the total oracle $f_{s,\lambda}(x)=\lambda(\{x,x\oplus s\})$.

The sample space consists of all pairs $(s,\lambda)$ with equal weight. There are $C$ cosets and $L\ge C$ labels, so each $s$ admits exactly $L(L-1)\cdots(L-C+1)$ injections; this number does not depend on $s$. Thus the marginal on $s$ is uniform and the conditional label assignment is uniform without replacement.

## Facts & Assumptions
**Given:** Integers $n\ge1$, $m\ge n-1$, and the hidden-XOR-period promise.

[F1] [[def-qa-simon-promise]]: a valid Simon function is total and satisfies $f(x)=f(y)$ exactly when $y=x$ or $y=x\oplus s$ for its unique nonzero mask.

[F2] [[def-finite-probability-space-and-event]]: a finite probability space is a finite outcome set with nonnegative weights summing to one.

## Verification

1.1 For every nonzero $s$, the map $x\mapsto x\oplus s$ is a fixed-point-free involution, so its $2^n$ addresses split into $C=2^{n-1}$ two-element cosets. Since $m\ge n-1$, $L=2^m\ge C$, and the number of injections from a $C$-element set into an $L$-element set is $L(L-1)\cdots(L-C+1)>0$, the sample space is finite and nonempty. [given, F1, algebra]

2.1 Give every pair $(s,\lambda)$ weight $1/((2^n-1)L(L-1)\cdots(L-C+1))$. There are exactly the denominator's many pairs, so the weights are nonnegative and sum to one by [F2]. Because the number of injections is constant for each $s$, the induced hidden mask is uniform and, conditional on it, every injection is equally likely. [given, F2, step 1.1, algebra]

3.1 If $x\oplus s=y$, the two addresses lie in the same coset and receive the same label. Conversely, if $f_{s,\lambda}(x)=f_{s,\lambda}(y)$, injectivity of $\lambda$ gives equal cosets, hence $y=x$ or $y=x\oplus s$. Since $s\ne0$, this is exactly the Simon promise with unique hidden mask $s$. [given, F1, step 1.1, algebra] ∎

