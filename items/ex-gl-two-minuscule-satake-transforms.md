---
id: ex-gl-two-minuscule-satake-transforms
kind: example
title: The two fundamental GL(2) Hecke transforms
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln
- lem-minuscule-gln-hecke-transforms-and-triangularity
- thm-satake-isomorphism-and-unramified-classification-for-gln
- thm-unramified-principal-series-hecke-character-for-gln
- def-axiom-of-choice
sources:
  references:
  - title: Masao Oi, Introduction to the Local Langlands Correspondence, §§8.2, 11.1–11.2
    url: https://masaooi.github.io/LLC.pdf
  - title: W. Casselman, Introduction to the Theory of Admissible Representations of p-adic Reductive Groups (1995 draft), §§2.1–2.2
    url: https://www.math.ubc.ca/~cass/research/pdf/p-adic-book.pdf
proof_strategy: direct
---
## Example

In rank two, let $h_1=1_{K\operatorname{diag}(\varpi,1)K}$ and $h_2=1_{\varpi IK}$. With the normalized Satake transform,
$$
\mathcal S(h_1)=q^{1/2}(X_1+X_2),\qquad\mathcal S(h_2)=X_1X_2.
$$
For the spherical irreducible subquotient of a normalized unramified principal series with tuple $(\alpha_1,\alpha_2)$, the normalized operator $q^{-1/2}h_1$ acts by $\alpha_1+\alpha_2$ and $h_2$ acts by $\alpha_1\alpha_2$. Its representation-side spherical factor is $(1-\alpha_1q^{-s})^{-1}(1-\alpha_2q^{-s})^{-1}$. Assume the Axiom of Choice as in the spherical Hecke construction.

## Example references

[[def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln]]

[[lem-minuscule-gln-hecke-transforms-and-triangularity]]

[[thm-satake-isomorphism-and-unramified-classification-for-gln]]

[[thm-unramified-principal-series-hecke-character-for-gln]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** $n=2$ and the stated normalized principal series.

[A1] AC is assumed for the Haar-existence and normalization context of the spherical Hecke construction. [[def-axiom-of-choice]]

[F1] The transform normalization is that of [[def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln]].

[F2] The minuscule formula is $\mathcal S(h_r)=q^{r(n-r)/2}e_r$. [[lem-minuscule-gln-hecke-transforms-and-triangularity]]

[F3] Spherical representations are classified by their tuples, and the principal-series Hecke character is evaluation of the transform. [[thm-satake-isomorphism-and-unramified-classification-for-gln]], [[thm-unramified-principal-series-hecke-character-for-gln]]

## Verification

**Given:** $n=2$ and the stated normalized principal series.

1.1 For $r=1$, the exponent $r(n-r)/2$ is $1/2$ and $e_1=X_1+X_2$. For $r=2$, that exponent is zero and $e_2=X_1X_2$. Substitution into [F2] gives both displayed transforms. In the direct coset count, the words $(1,0)$ and $(0,1)$ contribute respectively $q$ and one upper-unipotent cosets; their modulus factors $q^{-1/2}$ and $q^{1/2}$ give the equal coefficient $q^{1/2}$. [A1, F1, F2, algebra]

2.1 By [F3], the two polynomials evaluate at $(\alpha_1,\alpha_2)$. Multiplying the first Hecke operator by $q^{-1/2}$ cancels its transform's scalar factor, yielding $\alpha_1+\alpha_2$; the central operator yields $\alpha_1\alpha_2$. The tuple determinant is $(1-\alpha_1q^{-s})(1-\alpha_2q^{-s})$, whose reciprocal is the stated spherical factor. [F3, step 1.1, algebra] ∎
