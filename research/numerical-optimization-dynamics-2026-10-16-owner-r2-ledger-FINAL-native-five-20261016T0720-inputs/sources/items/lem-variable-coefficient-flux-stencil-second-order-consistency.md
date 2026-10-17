---
id: lem-variable-coefficient-flux-stencil-second-order-consistency
kind: lemma
title: Second-order consistency of the variable-coefficient flux stencil
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-rectangular-grid-and-dirichlet-flux-stencil]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, Numerical Solution of PDEs, complete lecture notes"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§3.2 and §4.1(a), PDF pp. 15–31: central-difference Taylor remainder, residual definition, and the constant-coefficient C4 error argument."
    - title: "Benjamin Seibold, MIT 18.336 Lecture 5: Finite Difference Approximation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/32dc4472b2967f90761db3677eade13e_MIT18_336S09_lec5.pdf"
      locator: "Complete PDF, pp. 1–7: Taylor matching for finite-difference stencils and boundary consistency."
    - title: "Benjamin Seibold, MIT 18.336 Lecture 6: General Linear Second Order Equation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c395389a94e1177997aa6364b24852d8_MIT18_336S09_lec6.pdf"
      locator: "Complete PDF, pp. 1–4: variable-conductivity flux form, expanded form, and the local-truncation/global-error identity."
verification:
  precheck: pass
---

## Statement

Let $\Omega=(0,L_x)\times(0,L_y)$, $a\in C^3(\overline\Omega)$ with $a(x,y)\ge a_0>0$, and $u\in C^4(\overline\Omega)$. Set $f=-\partial_x(a\partial_xu)-\partial_y(a\partial_yu)$. For $r=0,1,2,3$ and $s=1,2,3,4$, define $A_r^x=\|\partial_x^ra\|_{L^\infty(\Omega)}$ and $U_s^x=\|\partial_x^su\|_{L^\infty(\Omega)}$, where $\partial_x^0a=a$. Define
$$
C_x=\frac{A_0^xU_4^x}{24}+\frac{A_1^xU_3^x}{12}+\frac{A_2^xU_2^x}{16}+\frac{A_3^xU_1^x}{48}+L_x\left(\frac{A_1^xU_4^x}{48}+\frac{A_2^xU_3^x}{48}+\frac{A_3^xU_2^x}{96}\right)+L_x^2\left(\frac{A_2^xU_4^x}{192}+\frac{A_3^xU_3^x}{288}\right)+L_x^3\frac{A_3^xU_4^x}{1152}.
$$
For $r=0,1,2,3$ and $s=1,2,3,4$, also set $A_r^y=\|\partial_y^ra\|_{L^\infty(\Omega)}$ and $U_s^y=\|\partial_y^su\|_{L^\infty(\Omega)}$; define $C_y$ by the same displayed expression with $x,L_x,A_r^x,U_s^x$ replaced by $y,L_y,A_r^y,U_s^y$. If $u^*_{ij}=u(x_i,y_j)$ and $f_{h,ij}=f(x_i,y_j)$, then for every interior node,
$$
\left|(A_h^au^*)_{ij}-f_{h,ij}\right|\le 2C_xh_x^2+2C_yh_y^2,
$$
where $A_h^a$ is the exact-midpoint flux stencil of [[def-rectangular-grid-and-dirichlet-flux-stencil]]. The estimate includes every interior row next to the boundary; the Dirichlet boundary samples themselves are imposed exactly.

## Facts & Assumptions

**Given:** The rectangle $\Omega$, $a\in C^3(\overline\Omega)$ with $a\ge a_0>0$, $u\in C^4(\overline\Omega)$, the pointwise equation $f=-\partial_x(a\partial_xu)-\partial_y(a\partial_yu)$, and the rectangular grids of [[def-rectangular-grid-and-dirichlet-flux-stencil]].

[F1] [[def-rectangular-grid-and-dirichlet-flux-stencil]]: $A_h^a$ is the negative difference of adjacent midpoint face fluxes in each coordinate direction, divided by that coordinate's mesh spacing; its face values are sampled at the exact face midpoints.

[A1] The coordinate derivatives $\partial_x^ra$ for $0\le r\le3$ and $\partial_x^su$ for $1\le s\le4$ are continuous and bounded on $\overline\Omega$; the analogous $y$ derivatives are also continuous and bounded.

## Proof

1.1 Fix an interior node $(x_i,y_j)$ and write $x=x_i$, $h=h_x$, $A_r=A_r^x$, and $U_s=U_s^x$. Taylor's theorem with bounded third derivative for $a$ and bounded fourth derivative for $u$ gives $a(x\pm h/2,y_j)=a\pm ha_x/2+h^2a_{xx}/8+R_a^\pm$ with $|R_a^\pm|\le A_3h^3/48$, and $D_+u=u_x+hu_{xx}/2+h^2u_{xxx}/6+R_u^+$, $D_-u=u_x-hu_{xx}/2+h^2u_{xxx}/6+R_u^-$ with $|R_u^\pm|\le U_4h^3/24$, where $D_+u=(u(x+h,y_j)-u(x,y_j))/h$ and $D_-u=(u(x,y_j)-u(x-h,y_j))/h$. [given, A1, F1, algebra]

2.1 Multiplying the coefficient and difference expansions yields, with $F_\pm=a(x\pm h/2,y_j)D_\pm u$, $F_\pm=au_x\pm h(au_{xx}+a_xu_x)/2+h^2(au_{xxx}/6+a_xu_{xx}/4+a_{xx}u_x/8)+R_F^\pm$. The absolute values of the discarded products are bounded by $h^3(A_0U_4/24+A_1U_3/12+A_2U_2/16+A_3U_1/48)+h^4(A_1U_4/48+A_2U_3/48+A_3U_2/96)+h^5(A_2U_4/192+A_3U_3/288)+h^6A_3U_4/1152$. Since $h\le L_x$, this is at most $C_xh^3$ for the stated $C_x$. [given, A1, step 1.1, algebra]

3.1 The coefficient of $h^2$ in step 2.1 is the same for $F_+$ and $F_-$, so it cancels on subtraction. Thus $|(F_+-F_-)/h-\partial_x(a\partial_xu)(x_i,y_j)|\le(|R_F^+|+|R_F^-|)/h\le2C_xh_x^2$, because $\partial_x(a\partial_xu)=a_xu_x+au_{xx}$. Interchanging $x$ and $y$ proves the corresponding vertical-flux bound $2C_yh_y^2$. [given, step 2.1, algebra]

4.1 By [F1], $A_h^au^*$ is the negative sum of the two discrete flux divergences. The continuous right-hand side $f$ is the negative sum of the matching derivatives. Subtracting these expressions and applying the horizontal and vertical bounds from step 3.1 gives $|(A_h^au^*)_{ij}-f_{h,ij}|\le2C_xh_x^2+2C_yh_y^2$ at every interior node, including nodes whose stencil touches a boundary value. [F1, given, step 3.1, algebra] ∎
