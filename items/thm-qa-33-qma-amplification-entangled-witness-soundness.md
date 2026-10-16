---
id: thm-qa-33-qma-amplification-entangled-witness-soundness
kind: theorem
title: Parallel QMA amplification remains sound for entangled witnesses
status: published
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
  - thm-complex-spectral-theorem-for-normal-endomorphisms
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

Then the parallel verifier of [[alg-qa-33-qma-parallel-majority-amplification]] has completeness at least $1-\delta$ and soundness at most $\delta$. On a NO input its soundness bound holds for every joint $r$-block witness state, including entangled states. The repetition uses $r$ witness blocks and $r$ verifier copies, so choosing the least integer $r$ satisfying the bound gives polynomial size when $\gamma^{-1}$ and $\ln(1/\delta)$ are polynomially bounded. The probability bounds hold for every larger $r$ as well.

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

[F9] [[thm-complex-spectral-theorem-for-normal-endomorphisms]] supplies an orthonormal eigenbasis for each finite-dimensional self-adjoint effect.

## Proof


1.1 Put $\tau=(c+s)/2=s+\gamma/2$. By [F6], the midpoint test accepts at $\lceil r\tau\rceil$. Its CNOT fanout prepares a separate register $|x\rangle$ for every verifier copy from the classical basis input, and the outputs are evaluated using the same predicate $\operatorname{Acc}_n(x,\cdot)$, so each block realizes the acceptance effect $E_x$ of [F1]. On a YES input, choose a witness $\rho$ with acceptance $p\ge c$ and give the product witness $\rho^{\otimes r}$. Each copy acts on a distinct input, witness and ancilla block, so its accept bit is an independent Bernoulli$(p)$ variable by the product rule in [F2] and the finite POVM law. If the midpoint test rejects, then $S<\lceil r\tau\rceil$, hence $S<r\tau$ and $S-rp\le-r\gamma/2$. The lower-tail inequality in [F3] bounds this event by $\exp(-r\gamma^2/2)$. [given, F1, F2, F3, F4, F6, algebra]

1.2 Fix a NO input and any joint witness density $\sigma$ on the $r$ blocks. By the exact basis-state fanout in [F6], every verifier copy starts with its own fixed $|x\rangle$ input and its own clean ancillas; hence its acceptance effect on its witness block is the same $E_x$ from [F1]. On one block, [F1] and [F4] give $\langle E_xv,v\rangle\le s$ for every unit witness vector $v$; as $E_x$ is an effect, this means $0\le E_x\le sI$. Let $A_j=I\otimes\cdots\otimes E_x\otimes\cdots\otimes I$ on the full $r$-block space. An eigenbasis of $E_x$ from [F9], tensored with the other block bases, shows $0\le A_j\le sI$. Distinct $A_j$ act on distinct tensor factors, so they commute by [F2]. [given, F1, F2, F4, F6, F9, algebra]

2.1 Define the full-space effects $B_{j,1}=A_j$ and $B_{j,0}=I-A_j$. The joint outcome $b\in\{0,1\}^r$ has effect $\prod_jB_{j,b_j}$ on this same space: equivalently it is $\bigotimes_j C_{b_j}$ for the one-block effects $C_1=E_x$, $C_0=I-E_x$. This product/tensor identity follows on elementary tensors by [F2]. The finite POVM trace rule and normalization [F7]–[F8] therefore give, for $t>0$, $\mathbb E_\sigma e^{tS}=\operatorname{Tr}\!\left(\sigma\sum_b e^{t|b|}\prod_j B_{j,b_j}\right)=\operatorname{Tr}\!\left(\sigma\prod_{j=1}^r\bigl(I+(e^t-1)A_j\bigr)\right)$. Each factor is positive and at most $(1-s+se^t)I$ by step 1.2. In the product of the single-block eigenbases from [F9], their product is diagonal with entries bounded by $(1-s+se^t)^r$, so the product is at most that scalar times identity. Taking its trace against the density $\sigma$ gives $\mathbb E_\sigma e^{tS}\le(1-s+se^t)^r$, without any tensor product of full-space effects. [given, F1, F2, F7, F8, F9, step 1.2, algebra]

3.1 Apply the single-Bernoulli moment bound in [F3] with parameter $s$: $e^{-ts}(1-s+se^t)\le e^{t^2/8}$. Thus $\mathbb E_\sigma e^{t(S-rs)}\le e^{rt^2/8}$. Since $S\ge\lceil r\tau\rceil$ implies $S-rs\ge r\gamma/2$, the finite-sum Markov bound gives $\Pr_\sigma(S\ge\lceil r\tau\rceil)\le\exp(-tr\gamma/2+rt^2/8).$ Taking $t=2\gamma$ makes this at most $e^{-r\gamma^2/2}$. No independence assumption is used for $\sigma$. [F3, step 2.1, algebra]

4.1 The choice $r\ge2\gamma^{-2}\ln(1/\delta)$ gives $e^{-r\gamma^2/2}\le\delta$ on both promise sides by [F5]. The threshold is the exact integer rule in [F6], and repeating a polynomial-size full-list verifier $r$ times gives polynomial gate count, witness width, and generator time whenever $r$ is polynomially bounded. For the least admissible integer, $r\le2\gamma^{-2}\ln(1/\delta)+1$, which is polynomial under the resource hypotheses of the Statement. [given, F5, F6, step 1.1, step 3.1, algebra] ∎

