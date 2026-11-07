---
id: ex-level-one-discriminant-as-hecke-eigenform
kind: example
title: "The Level-One Discriminant as a Hecke Eigenform"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-modular-discriminant-and-j-invariant
  - def-hecke-operator-on-congruence-forms
  - cor-dimension-of-level-one-modular-forms
  - thm-hecke-preserves-cuspidality-on-congruence-subgroups
  - def-petersson-inner-product-on-congruence-forms
  - thm-hecke-adjoint-and-commuting-relations-congruence-forms
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 5, Proposition 5.16 and Corollary 5.17, printed pp. 73–75; Theorem 5.23, pp. 76–77: Hecke coefficient formula and Hermitian operators at level one."
    - title: "Peter Bruin and Sander Dahmen, Modular Forms (Spring 2020 lecture notes)"
      url: "https://vdeangel.xula.edu/ModularForms/PreTeXt/output/web/external/Bruin-Dahmen_ModularForms.pdf"
      locator: "Chapter 4 §§4.4–4.5 and Chapter 5 §5.2 through Proposition 5.9, printed pp. 58–61 and 70–74: Hecke coefficient formula and adjoint relation."
---

## Example

Let $\Delta$ be the normalized level-one modular discriminant of weight $12$, with Fourier expansion $\Delta(z)=\sum_{r\ge1}\tau(r)q^r=q-24q^2+O(q^3)$ and $q=e^{2\pi iz}$. For every integer $n\ge1$, the normalized level-one Hecke operator satisfies $T_n\Delta=\tau(n)\Delta$; in particular, $\Delta$ is a simultaneous Hecke eigenform, and every eigenvalue $\tau(n)$ is real.

## Example references

[[def-modular-discriminant-and-j-invariant|the level-one discriminant and its q-expansion]]

[[def-hecke-operator-on-congruence-forms|the normalized Hecke operators]]

[[cor-dimension-of-level-one-modular-forms|the dimension of the level-one cusp space]]

[[thm-hecke-preserves-cuspidality-on-congruence-subgroups|Hecke preservation and the coefficient formula]]

[[def-petersson-inner-product-on-congruence-forms|the Petersson inner product]]

[[thm-hecke-adjoint-and-commuting-relations-congruence-forms|Hecke commutation and adjointness]]

## Facts & Assumptions

**Given:** The level-one discriminant $\Delta$, the level-one spaces $M_k$ and $S_k$, and the normalized Hecke operators $T_n$.

[F1] [[def-modular-discriminant-and-j-invariant]]: $\Delta$ is a nonzero cusp form of weight $12$ and its Fourier expansion begins $q-24q^2+O(q^3)$, so its $q$-coefficient is $\tau(1)=1$.

[F2] [[cor-dimension-of-level-one-modular-forms]]: $\dim M_{12}=2$ and $\dim S_{12}=\dim M_{12}-1$.

[F3] [[thm-hecke-preserves-cuspidality-on-congruence-subgroups]]: $T_n$ maps $S_{12}$ into itself, and the coefficient of $q^1$ in $T_nf$ is the coefficient of $q^n$ in $f$.

[F4] [[thm-hecke-adjoint-and-commuting-relations-congruence-forms]]: for trivial character and level one every $T_n$ is self-adjoint for the Petersson inner product.

[F5] [[def-petersson-inner-product-on-congruence-forms]]: the Petersson inner product is positive definite on the cusp space, so a nonzero cusp form has strictly positive squared norm.

## Verification

1.1 By [F2], $\dim S_{12}=1$. By [F1], $\Delta\ne0$ and $\Delta\in S_{12}$. For each $n\ge1$, [F3] gives $T_n\Delta\in S_{12}$, so there is a scalar $\lambda_n\in\mathbb C$ with $T_n\Delta=\lambda_n\Delta$. [given, F1, F2, F3, algebra]

2.1 The coefficient of $q$ in $T_n\Delta$ is $\tau(n)$ by [F3], while the coefficient of $q$ in $\lambda_n\Delta$ is $\lambda_n\tau(1)=\lambda_n$ by [F1]. Hence $\lambda_n=\tau(n)$ for every $n\ge1$, proving the simultaneous eigenform assertion. [F1, F3, step 1.1, algebra]

3.1 Since $N=1$ and the character is trivial, [F4] makes $T_n$ self-adjoint, so $\langle T_n\Delta,\Delta\rangle_{1,12}=\langle\Delta,T_n\Delta\rangle_{1,12}$. The Hermitian property makes the right side the complex conjugate of the left, hence this inner product is real. By step 2.1 it equals $\tau(n)\langle\Delta,\Delta\rangle_{1,12}$; the norm is strictly positive by [F1] and [F5], so $\tau(n)\in\mathbb R$. [F1, F4, F5, step 2.1, algebra] ∎
