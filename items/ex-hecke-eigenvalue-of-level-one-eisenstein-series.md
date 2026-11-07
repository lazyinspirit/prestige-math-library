---
id: ex-hecke-eigenvalue-of-level-one-eisenstein-series
kind: example
title: "Hecke Eigenvalues of a Level-One Eisenstein Series"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-level-one-eisenstein-series
  - def-hecke-operator-on-congruence-forms
  - cor-dimension-of-level-one-modular-forms
  - thm-hecke-preserves-cuspidality-on-congruence-subgroups
  - thm-eisenstein-series-are-modular-forms
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 5, Proposition 5.16 and Corollary 5.17, printed pp. 73–75: Hecke coefficient formula; §5.5, Lemma 5.25, printed pp. 78–79: the level-one Eisenstein eigenform calculation."
    - title: "Peter Bruin and Sander Dahmen, Modular Forms (Spring 2020 lecture notes)"
      url: "https://vdeangel.xula.edu/ModularForms/PreTeXt/output/web/external/Bruin-Dahmen_ModularForms.pdf"
      locator: "Chapter 4 §4.5 and Theorem 4.8 in §4.6, printed pp. 60–61: the general Hecke coefficient formula and normalized eigenforms."
---

## Example

For $E_4(z)=1+240\sum_{r\ge1}\sigma_3(r)q^r$, where $q=e^{2\pi iz}$ and $\sigma_3(r)=\sum_{d\mid r,\ d>0}d^3$, the level-one Hecke operator satisfies $T_nE_4=\sigma_3(n)E_4$ for every integer $n\ge1$. Thus $E_4$ is a simultaneous Hecke eigenform with eigenvalue $\sigma_3(n)$ at $T_n$.

## Example references

[[def-level-one-eisenstein-series|the normalized level-one Eisenstein series]]

[[def-hecke-operator-on-congruence-forms|the normalized Hecke operators]]

[[cor-dimension-of-level-one-modular-forms|the dimension of the level-one modular-form space]]

[[thm-hecke-preserves-cuspidality-on-congruence-subgroups|Hecke preservation and the coefficient formula]]

[[thm-eisenstein-series-are-modular-forms|the modularity and Fourier coefficients of E4]]

## Facts & Assumptions

**Given:** The normalized level-one Eisenstein series $E_4$, the level-one modular-form space $M_4$, and the normalized Hecke operators $T_n$.

[F1] [[def-level-one-eisenstein-series]]: For even $k\ge4$, $E_k=G_k/(2\zeta(k))$ is the normalized lattice Eisenstein series with constant term $1$.

[F2] [[thm-eisenstein-series-are-modular-forms]]: $E_4\in M_4$ and $E_4=1+240\sum_{r\ge1}\sigma_3(r)q^r$, so its coefficient $a_r(E_4)$ is $240\sigma_3(r)$ for $r\ge1$.

[F3] [[cor-dimension-of-level-one-modular-forms]]: $M_4$ is one-dimensional.

[F4] [[thm-hecke-preserves-cuspidality-on-congruence-subgroups]]: $T_n$ maps $M_4$ into itself, and $a_1(T_nf)=a_n(f)$.

[F5] [[def-hecke-operator-on-congruence-forms]]: At level $N=1$, every $n\ge1$ is an allowed Hecke index and $T_1$ is the identity.

## Verification

1.1 The constant term of $E_4$ is $1$ by [F2], so $E_4\ne0$. Since $M_4$ is one-dimensional by [F3] and $T_n$ preserves $M_4$ by [F4], for each $n\ge1$ there is a scalar $\lambda_n$ such that $T_nE_4=\lambda_nE_4$. [given, F2, F3, F4, algebra]

2.1 Taking the coefficient of $q$ and using [F4] gives $\lambda_n a_1(E_4)=a_1(T_nE_4)=a_n(E_4)$. By [F2], $a_1(E_4)=240\sigma_3(1)=240$ and $a_n(E_4)=240\sigma_3(n)$, hence $\lambda_n=\sigma_3(n)$. This proves the stated eigenvalue for every $n$. [F2, F4, step 1.1, algebra] ∎
