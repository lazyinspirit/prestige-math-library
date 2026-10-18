---
id: ex-layered-periodic-effective-tensor
kind: example
title: "Layered medium: harmonic normal and arithmetic tangential means"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - thm-periodic-effective-tensor-symmetric-elliptic
  - def-periodic-cell-correctors-and-effective-tensor
  - lem-periodic-cell-corrector-wellposedness
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---
## Example

Let $d\ge2$, $0<\rho<1$, and let $a(y)=a_1$ for $0<y_1<\rho$ and $a(y)=a_2$ for $\rho<y_1<1$, extended periodically, where $a_1,a_2>0$. Then
$$A^*=\operatorname{diag}\left(\left(\frac\rho{a_1}+\frac{1-\rho}{a_2}\right)^{-1},\ \rho a_1+(1-\rho)a_2,\ldots,\rho a_1+(1-\rho)a_2\right).$$

## Facts & Assumptions

**Given:** A scalar periodic coefficient layered only in the first coordinate, with positive phase values and phase fraction $\rho$.

[F1] [[def-periodic-cell-correctors-and-effective-tensor]]: columns of $A^*$ are averaged corrector fluxes.

[F2] [[lem-periodic-cell-corrector-wellposedness]]: the mean-zero cell correctors are unique.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: iterated integration of the layered coefficient and smooth periodic test derivatives is valid.

## Proof



1.1 Set $c=(\rho/a_1+(1-\rho)/a_2)^{-1}$. The function $h(y_1)=c/a(y_1)-1$ has mean zero. Its primitive $\widetilde\chi_1(t)=\int_0^t h(s)ds$ is periodic because the integral of $h$ over one period is zero; subtract its mean to obtain $\chi_1\in V_\#$. Then $a(e_1+\nabla\chi_1)=ce_1$, whose divergence is zero, so it satisfies the cell equation. Uniqueness [F2] identifies it as the first corrector; its mean flux is $ce_1$. [F2, F1, algebra]

2.1 For each $j\ge2$, $\chi_j=0$ solves the cell equation: for smooth periodic $v$, iterated integration [F3] in $y_j$ gives $\int_Ya(y_1)\partial_jv=0$ by equality of the opposite-face values, and density extends the identity to $V_\#$. Its mean flux is $\int_Ya(y_1)e_j=(\rho a_1+(1-\rho)a_2)e_j$. These columns yield the displayed diagonal matrix. [F3, F1, F2, step 1.1, algebra] ∎
