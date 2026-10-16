---
id: thm-qa-projective-operator-closeness-bounds-output-distribution
kind: theorem
title: Projective operator closeness bounds output distributions
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps: [def-inner-product-space, def-orthogonal-vectors-sets-and-orthonormal-bases, def-linear-isometry-and-orthogonal-or-unitary-operator, def-finite-probability-space-and-event, thm-cauchy-schwarz-finite, def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-finite-dimensional-isometry-characterisations, lem-complex-conjugation-and-modulus-laws, thm-bessel-inequality-and-finite-parseval-identity, cor-inner-product-induces-a-norm]
axiom_use: "No choice axiom is used; the estimate holds uniformly for every unit phase and does not choose a minimizing phase."
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Statement

Let $\mathcal H$ be a nonzero finite-dimensional complex inner-product space ([[def-inner-product-space]]) with a fixed orthonormal computational basis $B$ ([[def-orthogonal-vectors-sets-and-orthonormal-bases]]), and let $U,V:\mathcal H\to\mathcal H$ be unitary operators, meaning invertible linear isometries ([[def-linear-isometry-and-orthogonal-or-unitary-operator]]). For a unit vector $\psi$, write $U\psi=\sum_{b\in B}\alpha_b|b\rangle$ and $V\psi=\sum_{b\in B}\beta_b|b\rangle$, and define their output laws by $p_U^\psi(b)=|\alpha_b|^2$ and $p_V^\psi(b)=|\beta_b|^2$. Unitarity and orthonormality make these finite probability laws ([[def-finite-probability-space-and-event]]). For laws $p,q$ on $B$, define total variation by $d_{\rm TV}(p,q):=\tfrac12\sum_{b\in B}|p(b)-q(b)|$. Define projective operator distance by $d_{\rm pr}(U,V):=\inf_{|\lambda|=1}\|U-\lambda V\|$, where $\|\cdot\|$ is the operator norm. If $d_{\rm pr}(U,V)\le\varepsilon$ for $\varepsilon\ge0$, then

$$d_{\rm TV}(p_U^\psi,p_V^\psi)\le\varepsilon.$$

The same bound therefore holds for every computational-basis output law of the two operators. The proof verifies directly that multiplying a vector by a unit scalar leaves these coordinate probabilities unchanged.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional complex inner-product space, an orthonormal computational basis $B$, unitary operators $U,V$, a unit input $\psi$, and $\varepsilon\ge0$.

[F1] A finite probability space is a finite outcome set with nonnegative weights summing to $1$ ([[def-finite-probability-space-and-event]]).

[F2] For finite real lists $a_k,b_k$, $|\sum_k a_kb_k|\le(\sum_k a_k^2)^{1/2}(\sum_k b_k^2)^{1/2}$ ([[thm-cauchy-schwarz-finite]]).

[F3] If $T$ has nonzero finite-dimensional domain, $\|T\|=\max_{\|v\|=1}\|Tv\|$ ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F4] Unitary endomorphisms preserve vector norms ([[thm-finite-dimensional-isometry-characterisations]]).

[F5] Complex modulus is multiplicative and satisfies $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F6] In an orthonormal basis, the squared norm is the sum of squared coordinate moduli ([[thm-bessel-inequality-and-finite-parseval-identity]]).

[F7] The norm induced by an inner product satisfies $\|\lambda v\|=|\lambda|\,\|v\|$ ([[cor-inner-product-induces-a-norm]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses above.

1.1 Fix any $\lambda$ with $|\lambda|=1$, and set $\alpha=U\psi$ and $\beta=\lambda V\psi$. By [F4], [F7] and $|\lambda|=1$, both vectors have norm $1$. Parseval [F6] makes their squared coordinate moduli nonnegative weights summing to $1$, so [F1] gives the output probability laws. For each $b\in B$, [F5] applied to $\alpha_b=(\alpha_b-\beta_b)+\beta_b$ and then to the reversed pair gives $\bigl||\alpha_b|-|\beta_b|\bigr|\le|\alpha_b-\beta_b|$. Factoring a difference of squares and applying [F2] gives $d_{\rm TV}(p_U^\psi,p_{\lambda V}^\psi)\le\tfrac12\|\alpha-\beta\|_2(\sum_b(|\alpha_b|+|\beta_b|)^2)^{1/2}$. Expanding the last squared sum and applying [F2] to the two nonnegative coordinate lists bounds its square root by $\|\alpha\|_2+\|\beta\|_2=2$, so the total variation is at most $\|\alpha-\beta\|_2$. [given, F1, F2, F4, F5, F6, F7, algebra]

2.1 If $\gamma_b$ is the $b$-th coordinate of $V\psi$, then $\beta_b=\lambda\gamma_b$ and $|\beta_b|^2=|\lambda|^2|\gamma_b|^2=|\gamma_b|^2$ by modulus multiplicativity in [F5]. Hence $p_{\lambda V}^\psi=p_V^\psi$. Also $\|\alpha-\beta\|_2=\|(U-\lambda V)\psi\|_2\le\|U-\lambda V\|$ by [F3] and $\|\psi\|_2=1$. Combining with step 1.1 gives $d_{\rm TV}(p_U^\psi,p_V^\psi)\le\|U-\lambda V\|$ for every unit scalar $\lambda$. [given, F3, F5, step 1.1]

3.1 Taking the infimum over all $|\lambda|=1$ in step 2.1 gives $d_{\rm TV}(p_U^\psi,p_V^\psi)\le d_{\rm pr}(U,V)\le\varepsilon$. No minimizing phase is required. [given, step 2.1, algebra] ∎

## Remarks

The proof uses no axiom of choice: the inequality holds for each phase separately, then for their infimum. Standalone phase invariance follows directly from modulus multiplicativity, so no quantum-specific global-phase theorem is required.
