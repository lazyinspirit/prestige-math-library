---
id: prop-generalised-eigenspaces-and-algebraic-multiplicity
kind: proposition
title: "Split characteristic polynomials decompose into generalised eigenspaces of the algebraic multiplicities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-primary-component-and-generalised-eigenspace, cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial, thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors, thm-primary-decomposition-for-an-endomorphism, thm-nilpotent-endomorphism-characterisations, prop-characteristic-polynomial-factors-over-an-invariant-subspace]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Section 8A"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $T$ be an endomorphism of a finite-dimensional $F$-vector space whose characteristic polynomial splits over $F$. If $e_\lambda$ is the exponent of $x-\lambda$ in $\mu_T$, then
$$V=\bigoplus_{\lambda}G_\lambda,\qquad G_\lambda:=\ker(T-\lambda I)^{e_\lambda},$$
where $\lambda$ ranges over the eigenvalues. Each $G_\lambda$ is $T$-invariant, $N_\lambda:=(T-\lambda I)|_{G_\lambda}$ is nilpotent of index $e_\lambda$, and
$$\chi_{T|_{G_\lambda}}=(x-\lambda)^{\dim G_\lambda}.$$
Consequently $\dim G_\lambda$ is the algebraic multiplicity of $\lambda$ in $\chi_T$. For $V=0$, the sum and eigenvalue set are empty.

## Facts & Assumptions

**Given:** A finite-dimensional endomorphism $T$ whose characteristic polynomial splits over $F$.

[L1] The minimal and characteristic polynomials have the same monic irreducible factors ([[thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors]]).

[L2] If $\mu_T=\prod_{i<r}(x-\lambda_i)^{e_i}$ splits with distinct $\lambda_i$ and $e_i\ge1$, then $V=\bigoplus_{i<r}G_{\lambda_i}^{(e_i)}(T)$, and for every $k\ge e_i$, $\ker(T-\lambda_iI)^k=G_{\lambda_i}^{(e_i)}(T)$ ([[cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial]]).

[L3] Writing $\mu_T=\prod_{i<r}q_i^{e_i}$ with the $q_i$ distinct monic irreducibles, the subspaces $V_i:=\ker q_i(T)^{e_i}$ are $T$-invariant, $V=\bigoplus_{i<r}V_i$, and the minimal polynomial of $T|_{V_i}$ is exactly $q_i^{e_i}$ ([[thm-primary-decomposition-for-an-endomorphism]]).

[L4] Characteristic polynomials multiply across an invariant subspace and its quotient ([[prop-characteristic-polynomial-factors-over-an-invariant-subspace]]).

[L5] For an endomorphism of a **nonzero** $m$-dimensional space, nilpotency is equivalent to $\mu_N=x^s$ for some $1\le s\le m$ and to $\chi_N=x^m$, and in that case $s$ is the nilpotency index ([[thm-nilpotent-endomorphism-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 Fact [L1] makes $\mu_T$ split over $F$, so its distinct monic irreducible factors are the $x-\lambda$ with $\lambda$ an eigenvalue and $G_\lambda=\ker(T-\lambda I)^{e_\lambda}$. Fact [L2] gives the displayed invariant direct sum, and [L3] applied to the same factorisation gives that each $T|_{G_\lambda}$ has minimal polynomial exactly $(x-\lambda)^{e_\lambda}$. [L1, L2, L3]

2.1 Fix an eigenvalue $\lambda$. Since $\lambda$ is an eigenvalue, $\ker(T-\lambda I)\ne 0$, and $\ker(T-\lambda I)\subseteq G_\lambda$ because $e_\lambda\ge1$; hence $G_\lambda$ is nonzero and [L5] applies to it. On $G_\lambda$, $N_\lambda=T|_{G_\lambda}-\lambda I$ has minimal polynomial $x^{e_\lambda}$ by step 1.1, so [L5] makes $N_\lambda$ nilpotent of index $e_\lambda$ and gives $\chi_{N_\lambda}=x^{\dim G_\lambda}$. Translating the scalar variable yields $\chi_{T|_{G_\lambda}}=(x-\lambda)^{\dim G_\lambda}$. [step 1.1, L5, algebra]

3.1 Repeated use of [L4] on the invariant direct sum multiplies these restricted characteristic polynomials to obtain $\chi_T=\prod_\lambda(x-\lambda)^{\dim G_\lambda}$, so the exponent is exactly the algebraic multiplicity. The empty product gives the zero-space case. [step 1.1, step 2.1, L4] ∎
