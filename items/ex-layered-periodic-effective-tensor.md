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
  - lem-fehmm-one-dimensional-nonaligned-resonance-bound
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

[F4] [[lem-fehmm-one-dimensional-nonaligned-resonance-bound]]: at phase zero and ratio one, the one-dimensional periodic mean-zero cell solution has averaged flux $(\int_0^1a(t)^{-1}dt)^{-1}$.

## Proof



1.1 Set $c=(\rho/a_1+(1-\rho)/a_2)^{-1}$. Apply [F4] to the one-dimensional layered coefficient, with $\lambda=\min(a_1,a_2)$, $\Lambda=\max(a_1,a_2)$, phase zero and ratio one. Its mean-zero solution $w\in V_\#(0,1)$ satisfies $\int_0^1a(t)(1+w'(t))v'(t)dt=0$ for every $v\in V_\#(0,1)$ and has mean flux $c$. By the defining periodic closure, take smooth periodic $w_\ell\to w$ in $H^1(0,1)$ and subtract their means. Their lifts $W_\ell(y)=w_\ell(y_1)$ are smooth periodic, and iterated integration gives $\|W_\ell-W_k\|_{H^1(Y)}=\|w_\ell-w_k\|_{H^1(0,1)}$. Thus their $H^1$ limit is $\chi_1(y)=w(y_1)\in V_\#(Y)$, with gradient $w'(y_1)e_1$. For every smooth periodic $v(y)$, each slice $v(\cdot,y')$ is an admissible one-dimensional cell test after subtracting its mean, so iterated integration gives $\int_Ya(y_1)(1+w'(y_1))\partial_1v(y)dy=0$. Density extends this identity to $V_\#(Y)$; uniqueness [F2] identifies $\chi_1$ as the first corrector. Its mean flux is $ce_1$ by [F4] and iterated integration. [F2, F1, F3, F4, algebra]

2.1 For each $j\ge2$, $\chi_j=0$ solves the cell equation: for smooth periodic $v$, iterated integration [F3] in $y_j$ gives $\int_Ya(y_1)\partial_jv=0$ by equality of the opposite-face values, and density extends the identity to $V_\#$. Its mean flux is $\int_Ya(y_1)e_j=(\rho a_1+(1-\rho)a_2)e_j$. These columns yield the displayed diagonal matrix. [F3, F1, F2, step 1.1, algebra] ∎
