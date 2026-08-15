---
id: lem-a-vector-realises-the-minimal-polynomial
kind: lemma
title: "Some vector has vector annihilator equal to the minimal polynomial"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-vector-annihilator-is-well-defined, thm-primary-decomposition-for-an-endomorphism, thm-minimal-polynomial-is-well-defined-and-controls-annihilators, def-cyclic-subspace-vector-and-vector-annihilator, thm-polynomial-ring-over-a-field-is-a-ufd]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Hoffman and R. Kunze, Linear Algebra, 2nd ed., Section 7.1"
      url: "https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf"
pipeline_run: null
---

## Statement

For every endomorphism $T$ of a finite-dimensional vector space $V$, there is $v\in V$ such that $m_{T,v}=\mu_T$. If $V=0$, take $v=0$ and both polynomials are $1$.

## Facts & Assumptions

**Given:** A finite-dimensional endomorphism $T$.

[L1] If $\mu_T=\prod_{i<r}q_i^{e_i}$ is its factorisation into distinct monic irreducible powers, then $V=\bigoplus_{i<r}V_i$ with $V_i=\ker q_i(T)^{e_i}$, and $T|_{V_i}$ has minimal polynomial exactly $q_i^{e_i}$ ([[thm-primary-decomposition-for-an-endomorphism]]).

[L2] The vector annihilator is a monic divisor of the operator's minimal polynomial and detects exactly the polynomials that annihilate the vector ([[prop-vector-annihilator-is-well-defined]]).

[L3] The ring $F[x]$ is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

## Proof

**Proof technique:** direct.

1.1 For each nonempty primary summand $V_i$ in [L1], choose $v_i\in V_i$ with $q_i(T)^{e_i-1}v_i\ne0$; such a vector exists because otherwise $q_i^{e_i-1}$ would annihilate $T|_{V_i}$, contrary to its exact minimal polynomial. [L1, choose]

2.1 By [L2], $m_{T,v_i}$ divides $q_i^{e_i}$; [L3] makes it a power of $q_i$, and step 1.1 rules out every exponent below $e_i$. Hence $m_{T,v_i}=q_i^{e_i}$. [step 1.1, L2, L3]

3.1 Put $v=\sum_{i<r}v_i$. Directness in [L1] gives $p(T)v=0$ exactly when $p(T)v_i=0$ for every $i$, which by step 2.1 is exactly when every $q_i^{e_i}$ divides $p$; pairwise coprimality and [L3] make this equivalent to $\mu_T\mid p$. Thus [L2] gives $m_{T,v}=\mu_T$. [step 2.1, L1, L2, L3, construct]

4.1 If $V=0$, [L1] is the empty direct sum and the published minimal-polynomial convention gives $\mu_T=1$; taking $v=0$ gives $m_{T,0}=1$ by [L2]. [L1, L2] ∎
