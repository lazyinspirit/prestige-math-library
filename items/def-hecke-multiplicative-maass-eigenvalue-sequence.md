---
id: def-hecke-multiplicative-maass-eigenvalue-sequence
kind: definition
title: "Hecke-multiplicative Maass eigenvalue sequence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-hecke-operator-on-weight-zero-maass-forms
  - def-weight-zero-maass-form-on-gamma0n
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "K. Soundararajan, Quantum Unique Ergodicity for the modular surface"
      url: "https://arxiv.org/pdf/0901.4060v1"
      locator: "§1, definition of Hecke-multiplicative functions, printed p. 2."
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§4.2, formula (4.10), printed pp. 28–29."
---

## Definition

For a nonzero weight-zero Maass cusp form $u$ for $SL_2(\mathbb Z)$ that is an eigenfunction of every full-level Hecke operator
$$T_nf(z)=n^{-1/2}\sum_{ad=n}\sum_{b\bmod d}f((az+b)/d),$$
write $T_nu=\lambda_u(n)u$ and set $f_u(n)=\lambda_u(n)$ for every integer $n\ge1$; the finite-sum normalization has $T_1=I$, so $f_u(1)=1$. A sequence $f:\mathbb N\to\mathbb C$ is Hecke-multiplicative when $f(1)=1$ and $f(m)f(n)=\sum_{d\mid\gcd(m,n)}f(mn/d^2)$ for all positive integers $m,n$. The term “Hecke-multiplicative Maass eigenvalue sequence” refers to $f_u$ when it satisfies this identity; the operator relation proving that property is a separate theorem.

## Definition references

[K. Soundararajan, Quantum Unique Ergodicity for the modular surface, §1, printed p. 2.](https://arxiv.org/pdf/0901.4060v1)

[A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, §4.2, formula (4.10), printed pp. 28–29.](https://arxiv.org/pdf/1202.0189v1)

[[def-hecke-operator-on-weight-zero-maass-forms]]

[[def-weight-zero-maass-form-on-gamma0n]]
