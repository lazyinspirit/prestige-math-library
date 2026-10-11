---
id: prop-kronecker-coefficient-is-a-three-character-inner-product
kind: proposition
title: The Kronecker coefficient is a three-character inner product
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-kronecker-coefficient-and-internal-tensor-product,
       lem-complex-specht-modules-are-self-dual,
       thm-characters-of-direct-sums-tensor-products-and-duals,
       cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product,
       def-standard-inner-product-on-complex-class-functions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Igor Pak and Greta Panova, Bounds on the Kronecker coefficients, arXiv:1406.2988v2 (2014)"
      url: "https://arxiv.org/pdf/1406.2988"
      locator: "§2.3, printed pp. 3–4: the triple character formula and full S_3 symmetry; (2.3) is the two-partition conjugation identity."
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I, §7, printed p. 115: the triple character average immediately before (7.9)."
---

## Statement

For all partitions $\lambda,\mu,\nu\vdash n$,
$$g(\lambda,\mu,\nu)=\bigl\langle\chi^\lambda\chi^\mu,\chi^\nu\bigr\rangle=\frac1{n!}\sum_{\sigma\in S_n}\chi^\lambda(\sigma)\chi^\mu(\sigma)\chi^\nu(\sigma),$$
where $\chi^\lambda\chi^\mu$ is the pointwise product of class functions and the
sum uses the real-valuedness of the irreducible characters, so that no
conjugation appears on the third factor.

## Facts & Assumptions

**Given:** An integer $n\ge0$ and partitions $\lambda,\mu,\nu\vdash n$; the Specht characters $\chi^\lambda,\chi^\mu,\chi^\nu$ and the $S_n$-module $S^\lambda\otimes_{\mathbb C}S^\mu$.

[F1] $g(\lambda,\mu,\nu)$ is the multiplicity of $S^\nu$ in the completely reducible module $S^\lambda\otimes_{\mathbb C}S^\mu$ ([[def-kronecker-coefficient-and-internal-tensor-product]]).

[F2] For finite-dimensional complex representations $V,W$ of a finite group, $\chi_{V\otimes W}(g)=\chi_V(g)\chi_W(g)$ for every $g$ ([[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[F3] If $V$ is a finite-dimensional complex representation of a finite group $G$ with irreducible decomposition $V\cong\bigoplus_jm_jV_j$ and characters $\chi_j$, then $m_j=\langle\chi_V,\chi_j\rangle_G$ ([[cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]]).

[F4] The standard inner product of class functions on $S_n$ is $\langle\varphi,\psi\rangle=\frac1{n!}\sum_{\sigma\in S_n}\varphi(\sigma)\overline{\psi(\sigma)}$ ([[def-standard-inner-product-on-complex-class-functions]]).

[F5] Every Specht character is real-valued: $\chi^\nu(\sigma)=\overline{\chi^\nu(\sigma)}$ for every $\sigma\in S_n$ ([[lem-complex-specht-modules-are-self-dual]]).

## Proof

**Proof technique:** direct.

1.1 For every $\sigma\in S_n$ the tensor-product character is $\chi_{S^\lambda\otimes_{\mathbb C}S^\mu}(\sigma)=\chi^\lambda(\sigma)\chi^\mu(\sigma)$ by [F2], so the character of $S^\lambda\otimes_{\mathbb C}S^\mu$ is the pointwise product $\chi^\lambda\chi^\mu$. [F2, given]

2.1 By [F1] the module $S^\lambda\otimes_{\mathbb C}S^\mu$ is completely reducible with irreducible decomposition $\bigoplus_{\nu\vdash n}g(\lambda,\mu,\nu)S^\nu$; applying [F3] to this decomposition and using step 1.1 gives $g(\lambda,\mu,\nu)=\langle\chi^\lambda\chi^\mu,\chi^\nu\rangle$. [F1, F3, step 1.1]

3.1 By definition [F4] the inner product is $\langle\chi^\lambda\chi^\mu,\chi^\nu\rangle=\frac1{n!}\sum_{\sigma\in S_n}\chi^\lambda(\sigma)\chi^\mu(\sigma)\overline{\chi^\nu(\sigma)}$; by real-valuedness [F5] the factor $\overline{\chi^\nu(\sigma)}$ equals $\chi^\nu(\sigma)$, so the average of the plain triple product is displayed. Combining with step 2.1 gives $g(\lambda,\mu,\nu)=\frac1{n!}\sum_{\sigma\in S_n}\chi^\lambda(\sigma)\chi^\mu(\sigma)\chi^\nu(\sigma)$. [F4, F5, step 2.1, algebra] ∎

No form of the Axiom of Choice is used: this is finite-dimensional complex character theory of a finite group.
