---
id: ex-delta-form-frobenius-polynomial
kind: example
title: "The weight-12 discriminant form and its Frobenius polynomial"
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
      locator: "Chapter 4, discriminant q-expansion and product, printed pp. 54–57; Chapter 5, Hecke eigenform coefficient formula, pp. 73–75."
    - title: "Pierre Deligne, Formes modulaires et représentations ℓ-adiques"
      url: "https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf"
      locator: "§§3.1, 4.8–4.9 and Theorem 4.9, arithmetic/geometric Frobenius polynomial."
---

## Example

Assume AC, DC, and Countable Choice. Let $\Delta(z)=(E_4(z)^3-E_6(z)^2)/1728=\sum_{n\ge1}\tau(n)e^{2\pi inz}$ be the normalized weight-12 level-one discriminant eigenform, with $\tau(1)=1$ and $\tau(2)=-24$. For every prime $\ell\ne2$, the attached two-dimensional representation $\rho_{\Delta,\ell}$ is unramified at $2$ and has arithmetic Frobenius polynomial

$$\det\!\left(XI-\rho_{\Delta,\ell}(\operatorname{Frob}^{\mathrm{arith}}_2)\right)=X^2+24X+2^{11}=X^2+24X+2048.$$

## Example references

[[def-modular-discriminant-and-j-invariant]]

[[ex-level-one-discriminant-as-hecke-eigenform]]

[[thm-delignes-galois-representation-has-eigenform-frobenius-polynomial]]

[Milne, *Modular Functions and Modular Forms*, Chapters 4–5](https://www.jmilne.org/math/CourseNotes/MF.pdf)

[Deligne, *Formes modulaires et représentations ℓ-adiques*, §§3.1, 4.8–4.9](https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf)

## Facts & Assumptions

**Given:** AC, DC, Countable Choice, the normalized discriminant eigenform $\Delta$, and a prime $\ell\ne2$.

[A1] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets has a choice function; it is assumed by the global Galois-group convention.

[A2] [[def-dependent-choice]]: DC asserts dependent choices along an everywhere-extendible relation; it is retained as declared by the local-Galois dependency closure.

[A3] [[def-countable-choice]]: Countable Choice asserts that every countable family of nonempty sets has a choice function; it is retained as declared by the local completion and Frobenius conventions.

[F1] [[def-modular-discriminant-and-j-invariant]]: $\Delta$ is a nonzero level-one cusp form of weight $12$ with $q$-expansion $q-24q^2+O(q^3)$.

[L1] [[ex-level-one-discriminant-as-hecke-eigenform]]: the normalized level-one discriminant satisfies $T_n\Delta=\tau(n)\Delta$ for every integer $n\ge1$.

[F2] [[thm-delignes-galois-representation-has-eigenform-frobenius-polynomial]]: for an eigenform of weight $k$, the arithmetic polynomial at $p\nmid N\ell$ is $X^2-a_pX+\chi(p)p^{k-1}$, subject to its still-held modular-cohomological representation construction and Eichler–Shimura congruence inputs; the local decomposition and residue bridges are now supplied.

## Verification

1.1 The coefficient of $q$ in $\Delta$ is $\tau(1)=1$, and the coefficient of $q^2$ in the displayed expansion in [F1] is $\tau(2)=-24$. By [L1], the normalized level-one Hecke eigenvalue at $2$ is therefore $a_2=-24$. [F1, L1, given, algebra]

2.1 Here $N=1$, $k=12$, and $\chi$ is trivial. Since $2\nmid N\ell$, [F2] gives $X^2-a_2X+\chi(2)2^{12-1}=X^2-(-24)X+2^{11}=X^2+24X+2048$. This is the stated polynomial. [A1, A2, A3, F2, step 1.1, algebra] ∎
