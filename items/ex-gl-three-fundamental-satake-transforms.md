---
id: ex-gl-three-fundamental-satake-transforms
kind: example
title: The fundamental GL(3) Satake transforms
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

For $n=3$, the characteristic functions of the three fundamental double cosets have transforms
$$
\mathcal S(1_{K\operatorname{diag}(\varpi,1,1)K})=q(X_1+X_2+X_3),
$$
$$
\mathcal S(1_{K\operatorname{diag}(\varpi,\varpi,1)K})=q(X_1X_2+X_1X_3+X_2X_3),
$$
$$
\mathcal S(1_{\varpi IK})=X_1X_2X_3.
$$
For a normalized unramified principal series with nonzero tuple $(\alpha_1,\alpha_2,\alpha_3)$, the corresponding Hecke eigenvalues are $q(\alpha_1+\alpha_2+\alpha_3)$, $q(\alpha_1\alpha_2+\alpha_1\alpha_3+\alpha_2\alpha_3)$, and $\alpha_1\alpha_2\alpha_3$. Its representation-side spherical factor is $\prod_{i=1}^3(1-\alpha_iq^{-s})^{-1}$ as a rational function of $q^{-s}$. Assume the Axiom of Choice as in the spherical Hecke construction.

## Example references

[[def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln]]

[[lem-minuscule-gln-hecke-transforms-and-triangularity]]

[[thm-satake-isomorphism-and-unramified-classification-for-gln]]

[[thm-unramified-principal-series-hecke-character-for-gln]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** $n=3$ and the nonzero tuple in the Example.

[A1] AC is assumed for the Haar-existence and normalization context of the spherical Hecke construction. [[def-axiom-of-choice]]

[F1] The local convention is [[def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln]].

[F2] The fundamental transform is $\mathcal S(h_r)=q^{r(n-r)/2}e_r$. [[lem-minuscule-gln-hecke-transforms-and-triangularity]]

[F3] Spherical tuple classification and evaluation on principal-series fixed vectors are proved in [[thm-satake-isomorphism-and-unramified-classification-for-gln]] and [[thm-unramified-principal-series-hecke-character-for-gln]].

## Verification

**Given:** $n=3$ and the nonzero tuple.

1.1 For $r=1,2,3$, the exponents $r(3-r)/2$ are respectively $1,1,0$. The elementary symmetric polynomials are respectively $X_1+X_2+X_3$, $X_1X_2+X_1X_3+X_2X_3$, and $X_1X_2X_3$. Substitution into [F2] gives exactly the three displayed transforms. [A1, F1, F2, algebra]

2.1 By [F3], the corresponding Hecke eigencharacter evaluates each transform at the specified tuple, giving the three stated eigenvalues. The tuple matrix is diagonal with entries $\alpha_i$, and the determinant identity $\det(I_3-q^{-s}\operatorname{diag}(\alpha_1,\alpha_2,\alpha_3))=\prod_{i=1}^3(1-\alpha_iq^{-s})$ proves the claimed spherical factor. [F3, step 1.1, algebra] ∎
