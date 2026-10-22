---
id: prop-qftx-frobenius-positive-reflection
kind: proposition
title: "Positive weights give a compatible finite reflection form"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps: [def-qftx-frobenius-semisimple-model]
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-qftx-frobenius-semisimple-model: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "The algebraic closed theory inherits AC_omega only through its surface normal-form classification input; the finite-dimensional positivity calculation uses no choice."
proof_strategy: direct
sources:
  references:
    - title: "Joachim Kock, Frobenius algebras and 2D topological quantum field theories (short version)"
      url: "https://ncatlab.org/nlab/files/Kock-FrobAlgTQFT-short.pdf"
      locator: "§§1.3.5–1.3.20 and 3.1.12–3.1.13 (PDF pp. 14–20, 34–36), for the closed Frobenius sewing data; the reflection-form positivity check is local."
    - title: "Joachim Kock, Frobenius Algebras and 2D Topological Quantum Field Theories (Cambridge book excerpt)"
      url: "https://assets.cambridge.org/97805218/32670/excerpt/9780521832670_excerpt.pdf"
      locator: "Excerpt pp. 1–7, for the closed TQFT/Frobenius correspondence; no positivity condition is asserted in the excerpt."
    - title: "Aaron D. Lauda and Hendryk Pfeiffer, Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras, arXiv:math/0510664v3"
      url: "https://arxiv.org/pdf/math/0510664v3"
      locator: "§4, PDF pp. 39–42, for the closed-sector classification as a commutative Frobenius algebra; reflection positivity is not part of that classification."
verification:
  precheck: pass
---

## Statement

For the semisimple closed model determined by the stated idempotent data, define $a^*=\sum_i\overline{a_i}e_i$ when $a=\sum_i a_i e_i$, and set $h(a,b)=\epsilon(a^*b)$. The form $h$ is a Hermitian positive-definite inner product exactly when every weight $w_i$ is a positive real number. The algebraic closed oriented TQFT exists for every nonzero complex weight; positivity is an additional condition for this specified Hilbert-space interpretation.

## Statement references

[[def-qftx-frobenius-semisimple-model]]

## Facts & Assumptions

**Given:** The semisimple model and its idempotent basis from [[def-qftx-frobenius-semisimple-model]]. The involution is conjugate-linear, fixes each $e_i$, and positivity means $h(a,a)>0$ for every $a\ne0$, with $h$ also satisfying Hermitian symmetry.

[F1] [[def-qftx-frobenius-semisimple-model]]: $A=\bigoplus_i\mathbb C e_i$, $e_ie_j=\delta_{ij}e_i$, and $\epsilon(e_i)=w_i$.

[F2] [[def-qftx-frobenius-semisimple-model]]: every nonzero complex weight gives the stated algebraic closed oriented TQFT through the closed classification; no positivity hypothesis occurs there.

## Proof

1.1 If $a=\sum_i a_i e_i$ and $b=\sum_i b_i e_i$, then $a^*b=\sum_i\overline{a_i}b_i e_i$, so $h(a,b)=\sum_i w_i\overline{a_i}b_i$. [given, F1, algebra]

2.1 If every $w_i$ is positive real, the formula in step 1.1 is Hermitian and $h(a,a)=\sum_i w_i|a_i|^2>0$ for each nonzero $a$, because at least one coefficient is nonzero. [given, step 1.1, algebra]

2.2 Conversely, if $h$ is Hermitian and positive definite, then $w_i=h(e_i,e_i)$ is real by Hermitian symmetry and strictly positive by positive definiteness for every nonzero basis vector $e_i$. Thus all weights are positive real, proving the equivalence. [given, F1, step 1.1, algebra]

3.1 The classification used in [F2] assumes only the nonzero Frobenius weights, so the algebraic closed theory remains defined when the extra positivity condition fails; this separates the categorical model from the specified Hilbert-space interpretation. [given, F2, step 2.2] ∎

## Reflection form

For the basis $(e_i)$, the associated sesquilinear form has diagonal matrix $\operatorname{diag}(w_1,\ldots,w_r)$. Positivity is a property of this explicit matrix and does not follow from the existence of the oriented closed TQFT.
