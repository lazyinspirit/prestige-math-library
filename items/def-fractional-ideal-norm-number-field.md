---
id: def-fractional-ideal-norm-number-field
kind: definition
title: "Norm of a fractional ideal of a number field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - cor-norm-of-a-prime-ideal
  - def-absolute-norm-of-an-ideal
  - def-fractional-ideal
  - def-number-field
  - def-prime-ideal-valuations-on-fractional-ideals
  - def-ring-of-integers-of-a-number-field
  - thm-ideal-norm-is-multiplicative
  - thm-number-field-integral-ideal-factorisation-in-zf
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph H. Silverman, The Theory of Height Functions"
      url: "https://unina2.on-line.it/sebina/repository/catalogazione/documenti/Cornell%2C%20Silverman%20-%20Arithmetic%20Geometry.pdf"
verification: {}
proof_strategy: direct
---

## Definition

Let $K$ be a number field, let $\mathcal O_K$ be its ring of integers, and let $\mathfrak a$ be a nonzero fractional ideal. Write its unique finite prime-ideal factorization as $\mathfrak a=\prod_{\mathfrak p}\mathfrak p^{n_{\mathfrak p}}$, where each $n_{\mathfrak p}\in\mathbb Z$ and all but finitely many are zero. Define the absolute ideal norm by
$$
N_K(\mathfrak a)=\prod_{\mathfrak p}(N_K\mathfrak p)^{n_{\mathfrak p}}\in\mathbb Q_{>0},
$$
using the ordinary absolute norm for integral prime ideals. This extends the integral ideal norm and is multiplicative on nonzero fractional ideals.

## Definition references

[[def-fractional-ideal]]

[[thm-number-field-integral-ideal-factorisation-in-zf]]

[[def-absolute-norm-of-an-ideal]]

[[cor-norm-of-a-prime-ideal]]

## Facts & Assumptions

**Given:** A number field $K$ and a nonzero fractional ideal $\mathfrak a\subset K$.

[F1] For a number field $K$, its ring of integers is $\mathcal O_K$; every nonzero fractional ideal of this ring has a unique factorization as a finite product of nonzero prime ideals with integer exponents. ([[def-number-field]], [[def-ring-of-integers-of-a-number-field]], [[def-fractional-ideal]], [[def-prime-ideal-valuations-on-fractional-ideals]], [[thm-number-field-integral-ideal-factorisation-in-zf]])

[F2] The norm of an integral ideal is multiplicative, and a prime ideal has the absolute norm specified by its residue-field size. ([[def-absolute-norm-of-an-ideal]], [[cor-norm-of-a-prime-ideal]], [[thm-ideal-norm-is-multiplicative]])

## Proof

1.1 Choose $0\ne d\in\mathcal O_K$ with $d\mathfrak a$ integral, and factor $d\mathfrak a=\prod_{\mathfrak p}\mathfrak p^{u_{\mathfrak p}}$ and $(d)=\prod_{\mathfrak p}\mathfrak p^{v_{\mathfrak p}}$ by [F1]. Then $\mathfrak a=\prod_{\mathfrak p}\mathfrak p^{u_{\mathfrak p}-v_{\mathfrak p}}$, a finite product with integer exponents. If another denominator $e$ is used, the two factorizations become factorizations of the same integral ideal $(de)\mathfrak a$ after multiplying by $(e)$ and $(d)$; uniqueness of integral factorization makes the exponent differences equal. Thus the displayed finite product is independent of the denominator and factorization and lies in $\mathbb Q_{>0}$. [given, F1, construct]

1.2 If $\mathfrak a$ is integral, its exponents are nonnegative; repeated application of multiplicativity in [F2] gives its existing integral norm as $\prod_{\mathfrak p}(N_K\mathfrak p)^{n_{\mathfrak p}}$. Thus the extension agrees with the integral norm. [given, F1, F2, algebra]

2.1 For nonzero fractional ideals $\mathfrak a,\mathfrak b$, uniqueness in [F1] gives $v_{\mathfrak p}(\mathfrak a\mathfrak b)=v_{\mathfrak p}(\mathfrak a)+v_{\mathfrak p}(\mathfrak b)$ for every prime ideal. Substitution into the finite product gives $N_K(\mathfrak a\mathfrak b)=N_K(\mathfrak a)N_K(\mathfrak b)$. [given, F1, step 1.1, algebra] ∎
