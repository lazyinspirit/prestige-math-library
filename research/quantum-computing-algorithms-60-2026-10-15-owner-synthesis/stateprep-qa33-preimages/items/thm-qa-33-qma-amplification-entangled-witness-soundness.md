---
id: thm-qa-33-qma-amplification-entangled-witness-soundness
kind: theorem
title: Parallel QMA amplification remains sound for entangled witnesses
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - alg-qa-33-qma-parallel-majority-amplification
  - def-qa-33-qma-promise-class
  - lem-qa-33-witness-acceptance-effect
  - def-qc-povm-and-outcome-law
  - thm-qc-povm-probabilities-normalize
  - def-qc-tensor-map
  - def-qc-tensor-register-and-permutation
  - lem-chernoff-bound-for-independent-bernoulli-trials
  - def-natural-logarithm
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses finite tensor products, finite POVMs, and a choice-free operator moment bound.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity"
      url: https://arxiv.org/pdf/0804.3401
      locator: §V.3, weak error reduction, PDF pp. 21–23
    - title: "Dorit Aharonov and Tomer Naveh, Quantum NP: A Survey"
      url: https://arxiv.org/pdf/quant-ph/0210077
      locator: §2, QMA amplification discussion, PDF pp. 4–7
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 14, §14.1, PDF pp. 116–117
---

## Statement

Let a QMA verifier have completeness $c$ and soundness $s$ with $0\le s<c\le1$, and put $\gamma=c-s$. For $0<\delta<1$, choose an integer

$$r\ge 2\gamma^{-2}\ln(1/\delta).$$

Then the parallel verifier of [[alg-qa-33-qma-parallel-majority-amplification]] has completeness at least $1-\delta$ and soundness at most $\delta$. On a NO input its soundness bound holds for every joint $r$-block witness state, including entangled states. The repetition uses $r$ witness blocks and $r$ verifier copies, so it preserves polynomial size when $\gamma^{-1}$ and $\ln(1/\delta)$ are polynomially bounded.

## Facts & Assumptions

**Given:** A finite verifier, a YES or NO promise input, $r\ge1$ copies, $0\le s<c\le1$, $\gamma=c-s$, and $\delta\in(0,1)$.

[F1] [[lem-qa-33-witness-acceptance-effect]]: a verifier's accept operator is an effect $E_x$ and its acceptance probability on witness $\rho$ is $\operatorname{Tr}(E_x\rho)$.

[F2] [[def-qc-tensor-map]]: tensor maps act factorwise on elementary tensors, and the ordered tensor registers retain the stated factor order ([[def-qc-tensor-register-and-permutation]]).

[F3] [[lem-chernoff-bound-for-independent-bernoulli-trials]]: for independent Bernoulli trials with sum $S$ and mean $\mu$, each one-sided additive tail at deviation $t\ge0$ is at most $\exp(-2t^2/r)$; its proof also establishes $\mathbb E e^{u(X-p)}\le e^{u^2/8}$ for a single Bernoulli$(p)$ variable and every real $u$.

[F4] [[def-qa-33-qma-promise-class]]: on a YES input some witness has acceptance at least $c$, while on a NO input every witness state has acceptance at most $s$.

[F5] [[def-natural-logarithm]]: $\ln$ is the inverse of the positive real exponential on $(0,\infty)$.

[F6] [[alg-qa-33-qma-parallel-majority-amplification]]: the verifier runs $r$ copies on distinct witness blocks and accepts when the number of accepts is at least $\lceil r(c+s)/2\rceil$.

[F7] [[def-qc-povm-and-outcome-law]]: the joint finite measurement is represented by tensor-product effects whose weights are obtained by the Born trace rule.

[F8] [[thm-qc-povm-probabilities-normalize]]: the joint POVM outcome weights are nonnegative and sum to one.

## Proof

1.1 Put $\tau=(c+s)/2=s+\gamma/2$. By [F6], the midpoint test accepts at $\lceil r\tau\rceil$. On a YES input, choose a witness $\rho$ with acceptance $p\ge c$ and give the product witness $\rho^{\otimes r}$. Each copy acts on a distinct tensor block, so its accept bit is an independent Bernoulli$(p)$ variable by the product rule in [F2] and the finite POVM law. If the midpoint test rejects, then $S<\lceil r\tau\rceil$, hence $S<r\tau$ and $S-rp\le-r\gamma/2$. The lower-tail inequality in [F3] bounds this event by $\exp(-r\gamma^2/2)$. [given, F1, F2, F3, F4, F6, algebra]

1.2 Fix a NO input and any joint witness density $\sigma$ on the $r$ blocks. Let $A_j=I\otimes\cdots\otimes E_x\otimes\cdots\otimes I$ be the accept effect of test $j$. For a unit vector $v$ on all blocks, its reduced state on block $j$ is a density operator, so [F1] and [F4] give $\langle A_jv,v\rangle\le s$; positivity of the effect gives $0\le A_j\le sI$. Distinct $A_j$ act on distinct tensor factors, so they commute. [given, F1, F2, F4, algebra]

1.3 By [F7]–[F8], the joint POVM of the $r$ terminal bits has, for each bit string $b\in\{0,1\}^r$, effect $\bigotimes_j B_{j,b_j}$, where $B_{j,1}=A_j$ and $B_{j,0}=I-A_j$. Summing these finite outcomes with weight $e^{t|b|}$ and distributing the tensor products gives $\mathbb E_\sigma e^{tS}=\operatorname{Tr}\!\left(\sigma\prod_{j=1}^r\bigl(I+(e^t-1)A_j\bigr)\right).$ For $t>0$, each factor is positive and at most $(1-s+se^t)I$. The factors commute, so diagonalizing each single-block effect in its own tensor factor shows the product is at most $(1-s+se^t)^rI$. [given, F1, F2, F7, F8, algebra]

2.1 Apply the single-Bernoulli moment bound in [F3] with parameter $s$: $e^{-ts}(1-s+se^t)\le e^{t^2/8}$. Thus $\mathbb E_\sigma e^{t(S-rs)}\le e^{rt^2/8}$. Since $S\ge\lceil r\tau\rceil$ implies $S-rs\ge r\gamma/2$, the finite-sum Markov bound gives $\Pr_\sigma(S\ge\lceil r\tau\rceil)\le\exp(-tr\gamma/2+rt^2/8).$ Taking $t=2\gamma$ makes this at most $e^{-r\gamma^2/2}$. No independence assumption is used for $\sigma$. [F3, step 1.3, algebra]

3.1 The choice $r\ge2\gamma^{-2}\ln(1/\delta)$ gives $e^{-r\gamma^2/2}\le\delta$ on both promise sides by [F5]. The threshold is the exact integer rule in [F6], and repeating a polynomial-size full-list verifier $r$ times gives polynomial gate count, witness width, and generator time whenever $r$ is polynomially bounded. [given, F5, F6, step 1.1, step 2.1, algebra] ∎
