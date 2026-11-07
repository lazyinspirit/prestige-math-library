---
id: def-generalized-bernoulli-number
kind: definition
title: "Generalized Bernoulli numbers of Dirichlet characters"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-bernoulli-numbers-by-their-generating-function
  - def-dirichlet-character-modulo-q
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions"
      url: "https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf"
      locator: "§§2.1 and 5.1, printed pp. 105–106 and 139–144"
    - title: "H. Knospe, Special values of p-adic L-functions and Iwasawa λ-invariants of Dirichlet characters"
      url: "https://link.springer.com/content/pdf/10.1007/s40993-026-00762-x.pdf"
      locator: "§1, printed pp. 1–2"
    - title: "H. Knospe, Special values of p-adic L-functions and Iwasawa lambda-invariants of Dirichlet characters, arXiv:2401.06100v3"
      url: "https://arxiv.org/pdf/2401.06100"
      locator: "§1 and formula (1.1), arXiv v3, printed pp. 1–2"
verification: {}
---

## Definition

Define the Bernoulli polynomials by
$$\frac{t e^{Xt}}{e^t-1}=\sum_{n\ge0}B_n(X)\frac{t^n}{n!}$$
as a formal power series at $t=0$. If $\chi$ is a Dirichlet character modulo $f\ge1$, its $n$th **generalized Bernoulli number** is
$$B_{n,\chi}=f^{n-1}\sum_{a=1}^{f}\chi(a)B_n(a/f)\qquad(n\ge1).$$
The convention $B_1=-1/2$ for the Bernoulli number gives $B_1(1)=1/2$ in this formula when $f=1$.

## Definition references

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, §2.1 and §5.1, pp. 105–106 and 139–144](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

[H. Knospe, *Special Values of p-adic L-functions and Iwasawa λ-invariants*, §1, printed pp. 1–2](https://link.springer.com/content/pdf/10.1007/s40993-026-00762-x.pdf)

## Facts & Assumptions

**Given:** A Dirichlet character $\chi$ modulo $f$ and the Bernoulli generating series.

[F1] The Bernoulli numbers are the coefficients of $t/(e^t-1)$ with $B_1=-1/2$. [[def-bernoulli-numbers-by-their-generating-function]]

[F2] A Dirichlet character modulo $f$ is a periodic multiplicative function, zero on nonunits modulo $f$. [[def-dirichlet-character-modulo-q]]

## Proof

1.1 The generating function for $B_n(X)$ is the product of $e^{Xt}$ and the series defining the Bernoulli numbers, so it determines each polynomial coefficient uniquely over $\mathbb Q$.[F1, algebra]

1.2 The finite sum in the displayed formula is therefore defined for each character value, and multiplication by the integer $f^{n-1}$ gives an algebraic number in the character value field. When $f=1$, the sole term is $B_n(1)$, so the stated endpoint convention follows directly.[F1, F2, step 1.1, algebra] ∎