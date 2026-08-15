---
id: prop-generalised-eigenspaces-and-algebraic-multiplicity
kind: proposition
title: "Split characteristic polynomials decompose into generalised eigenspaces of the algebraic multiplicities"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-primary-component-and-generalised-eigenspace, cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial, thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors, thm-nilpotent-endomorphism-characterisations, prop-characteristic-polynomial-factors-over-an-invariant-subspace]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

[L2] When the minimal polynomial splits, $V$ is the direct sum of its invariant generalised eigenspaces, and the restriction to the $\lambda$-summand has minimal polynomial $(x-\lambda)^{e_\lambda}$ ([[cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial]]).

[L3] A nilpotent endomorphism on an $m$-dimensional space has characteristic polynomial $x^m$, and its minimal-polynomial exponent is its nilpotency index ([[thm-nilpotent-endomorphism-characterisations]]).

[L4] Characteristic polynomials multiply across an invariant subspace and its quotient ([[prop-characteristic-polynomial-factors-over-an-invariant-subspace]]).

## Proof

**Proof technique:** direct.

1.1 Fact [L1] makes $\mu_T$ split over $F$, so [L2] gives the displayed invariant direct sum and the stated restricted minimal polynomials. [L1, L2]

2.1 On $G_\lambda$, $N_\lambda=T|_{G_\lambda}-\lambda I$ has minimal polynomial $x^{e_\lambda}$; [L3] therefore makes it nilpotent of index $e_\lambda$ and gives $\chi_{N_\lambda}=x^{\dim G_\lambda}$. Translating the scalar variable yields $\chi_{T|_{G_\lambda}}=(x-\lambda)^{\dim G_\lambda}$. [step 1.1, L3, algebra]

3.1 Repeated use of [L4] on the invariant direct sum multiplies these restricted characteristic polynomials to obtain $\chi_T=\prod_\lambda(x-\lambda)^{\dim G_\lambda}$, so the exponent is exactly the algebraic multiplicity. The empty product gives the zero-space case. [step 1.1, step 2.1, L4] ∎
