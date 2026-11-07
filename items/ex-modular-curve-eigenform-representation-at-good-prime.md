---
id: ex-modular-curve-eigenform-representation-at-good-prime
kind: example
title: "Read off the attached representation’s polynomial at a good prime"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - def-normalized-cuspidal-eigenform-over-gl2
  - def-modular-discriminant-and-j-invariant
  - lem-jacobi-product-formula-for-the-discriminant
  - ex-level-one-discriminant-as-hecke-eigenform
  - thm-delignes-galois-representation-has-eigenform-frobenius-polynomial
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 4, Jacobi product for the discriminant, printed pp. 56–57; Chapter 5, Hecke eigenform coefficients, pp. 73–75."
    - title: "Pierre Deligne, Formes modulaires et représentations ℓ-adiques"
      url: "https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf"
      locator: "§§3.1, 4.8–4.9 and Theorem 4.9, arithmetic/geometric Frobenius polynomial."
---

## Example

Assume AC, DC, and Countable Choice. Let $\Delta(z)=q\prod_{n\ge1}(1-q^n)^{24}=\sum_{n\ge1}\tau(n)q^n$ be the normalized level-one weight-12 cuspidal eigenform, where $q=e^{2\pi iz}$. At the good prime $p=3$, for every prime $\ell\ne3$, the attached representation is unramified and has arithmetic Frobenius polynomial

$$\det\!\left(XI-\rho_{\Delta,\ell}(\operatorname{Frob}^{\mathrm{arith}}_3)\right)=X^2-252X+3^{11}=X^2-252X+177147.$$

## Example references

[[def-modular-discriminant-and-j-invariant]]

[[lem-jacobi-product-formula-for-the-discriminant]]

[[ex-level-one-discriminant-as-hecke-eigenform]]

[[thm-delignes-galois-representation-has-eigenform-frobenius-polynomial]]

[Milne, *Modular Functions and Modular Forms*, Chapters 4–5](https://www.jmilne.org/math/CourseNotes/MF.pdf)

[Deligne, *Formes modulaires et représentations ℓ-adiques*, §§3.1, 4.8–4.9](https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf)

## Facts & Assumptions

**Given:** AC, DC, Countable Choice, the normalized discriminant eigenform $\Delta$, and a prime $\ell\ne3$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; AC is assumed by the global Galois-group convention.

[A2] [[def-dependent-choice]]: DC is retained as declared by the local-Galois dependency closure.

[A3] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; Countable Choice is retained as declared by the local completion and Frobenius conventions.

[F1] [[lem-jacobi-product-formula-for-the-discriminant]]: $\Delta=q\prod_{n\ge1}(1-q^n)^{24}$, with integral Fourier coefficients.

[L1] [[ex-level-one-discriminant-as-hecke-eigenform]]: $\Delta$ is a simultaneous normalized level-one Hecke eigenform with eigenvalues $\tau(n)$ for every integer $n\ge1$.

[F2] [[thm-delignes-galois-representation-has-eigenform-frobenius-polynomial]]: the arithmetic polynomial at a good prime $p\nmid N\ell$ is $X^2-a_pX+\chi(p)p^{k-1}$, subject to its still-held modular-cohomological representation construction and Eichler–Shimura congruence inputs; the local decomposition and residue bridges are now supplied.

## Verification

1.1 The coefficient of $q^2$ in $\prod_{n\ge1}(1-q^n)^{24}$ is $276-24=252$: the $q^2$ coefficient of $(1-q)^{24}$ is $\binom{24}{2}=276$, the $q^2$ coefficient of $(1-q^2)^{24}$ is $-24$, and factors with $n\ge3$ contribute no terms of degree at most two. Thus [F1] gives $\tau(3)=252$. By [L1], this is the Hecke eigenvalue $a_3$. [F1, L1, given, algebra]

2.1 Here $N=1$, $k=12$, $\chi$ is trivial, and $3\nmid N\ell$. Applying [F2] gives $X^2-a_3X+\chi(3)3^{11}=X^2-252X+177147$, as stated. [A1, A2, A3, F2, step 1.1, algebra] ∎
