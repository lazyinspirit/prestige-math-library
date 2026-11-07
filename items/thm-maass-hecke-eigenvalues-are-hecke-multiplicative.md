---
id: thm-maass-hecke-eigenvalues-are-hecke-multiplicative
kind: theorem
title: "Maass Hecke eigenvalues are Hecke-multiplicative"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-hecke-multiplicative-maass-eigenvalue-sequence
  - thm-level-one-hecke-operator-product-formula
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "K. Soundararajan, Quantum Unique Ergodicity for the modular surface"
      url: "https://arxiv.org/pdf/0901.4060v1"
      locator: "§1, the Hecke-multiplicative definition and discussion before Theorem 3, printed p. 2."
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§4.2, formula (4.10), printed pp. 28–29."
---

## Statement

For every nonzero weight-zero Maass cusp form $u$ on $SL_2(\mathbb Z)$ that is a joint eigenfunction of all normalized Hecke operators, its eigenvalue sequence $f_u(n)=\lambda_u(n)$ satisfies
$$f_u(1)=1,\qquad f_u(m)f_u(n)=\sum_{d\mid\gcd(m,n)}f_u(mn/d^2)$$
for all positive integers $m,n$.

## Statement references

[K. Soundararajan, Quantum Unique Ergodicity for the modular surface, §1, printed p. 2.](https://arxiv.org/pdf/0901.4060v1)

[A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, §4.2, formula (4.10), printed pp. 28–29.](https://arxiv.org/pdf/1202.0189v1)

## Facts & Assumptions

**Given:** A nonzero common eigenfunction $u$ of the normalized level-one Hecke operators, with $T_nu=\lambda_u(n)u$.

[F1] The normalized eigenvalue sequence is $f_u(n)=\lambda_u(n)$, and $T_1=I$ ([[def-hecke-multiplicative-maass-eigenvalue-sequence]]).

[F2] The level-one Hecke operators satisfy $T_mT_n=\sum_{d\mid\gcd(m,n)}T_{mn/d^2}$ ([[thm-level-one-hecke-operator-product-formula]]).

## Proof

1.1 By [F1], $T_1u=u$, so $\lambda_u(1)=1$ because $u\ne0$. [F1, given, algebra]

1.2 Apply [F2] to $u$. The left side is $T_mT_nu=\lambda_u(m)\lambda_u(n)u$, while the right side is $\sum_{d\mid\gcd(m,n)}\lambda_u(mn/d^2)u$. Since $u\ne0$, equality of these scalar multiples gives the required identity. [F2, given, algebra] ∎
