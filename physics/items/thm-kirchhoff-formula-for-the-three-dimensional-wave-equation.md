---
id: thm-kirchhoff-formula-for-the-three-dimensional-wave-equation
kind: theorem
title: "Kirchhoff's formula in three dimensions"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
proof_strategy: direct
deps: [def-spherical-mean-of-space-dependent-data, lem-spherical-means-of-smooth-data-are-smooth, lem-euler-poisson-darboux-equation-for-spherical-means, lem-derivative-of-an-integral-with-moving-endpoints, def-laplacian-of-a-c2-function, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, lem-sphere-and-ball-measures-scale, def-countable-choice, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, cor-volume-of-the-unit-n-ball, thm-real-gamma-functional-equation, cor-real-gamma-one-half-is-root-pi, thm-clairaut-schwarz-mixed-partials, thm-continuous-partial-derivatives-imply-total-differentiability]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed pp. 168–169, Kirchhoff's formula (7.10) and Theorem 7.2 (proof read in full)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1.1–9.1.2, printed pp. 281–283, (9.1.4), (9.1.8)–(9.1.10)"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #12: Kirchhoff's Formula and Minkowskian Geometry (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/940561a138578640826f762b5a57bcad_MIT18_152F11_lec_12.pdf"
      locator: "§1, printed p. 1, Theorem 1.1 (Kirchhoff's formula, unit speed)"
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A (UC Berkeley, 19 March 2024)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "Chapter 7, printed pp. 103–108: d'Alembert's formula and the three-dimensional representation (different sign convention)"
---


## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $c>0$, $u_0\in C^3(\mathbb R^3)$, $u_1\in C^2(\mathbb R^3)$ and let $M$ be the spherical mean of [[def-spherical-mean-of-space-dependent-data]]. Then
$$u(x,t):=\frac{\partial}{\partial t}\bigl[t\,M_{u_0}(x,ct)\bigr]+t\,M_{u_1}(x,ct)$$
defines a $C^2$ function on $\mathbb R^3\times(0,\infty)$ solving $u_{tt}=c^2\Delta u$. Equivalently, for $t>0$,
$$u(x,t)=\frac{1}{4\pi c^2t^2}\int_{\partial B_{ct}(x)}\bigl(u_0(y)+\nabla u_0(y)\cdot(y-x)+t\,u_1(y)\bigr)\,dS(y),$$
the sphere integral being the unnormalised form of the mean because $\omega_2=4\pi$ ([[lem-sphere-and-ball-measures-scale]]). The formula uses the values of $u_0,u_1$ and the normal derivative of $u_0$ on $\partial B_{ct}(x)$; pointwise agreement of the two data only on that sphere need not give the same solution value.

## Facts & Assumptions

**Given:** Countable Choice, $c>0$, $u_0\in C^3(\mathbb R^3)$, $u_1\in C^2(\mathbb R^3)$, and the means $A(x,r):=M_{u_0}(x,r)$, $B(x,r):=M_{u_1}(x,r)$.

[F1] For $k\ge1$ and $h\in C^k(\mathbb R^3)$, the spherical mean $M_h$ is $C^k$ on $\mathbb R^3\times(0,\infty)$, every derivative being obtained by differentiating $h$ under the sphere integral ([[lem-spherical-means-of-smooth-data-are-smooth]]).

[F2] For $h\in C^2(\mathbb R^3)$ one has $\Delta_xM_h(x,r)=M_{rr}(x,r)+\frac2rM_r(x,r)$ for $r>0$ ([[lem-euler-poisson-darboux-equation-for-spherical-means]]).

[F3] If $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]). The required total differentiability follows from continuous coordinate partial derivatives ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[F4] Sums, products, constant multiples of differentiable functions are differentiable with the usual rules ([[thm-algebra-of-derivatives]]).

[F5] If $h$ is $C^2$ on an open set of $\mathbb R^m$, then $\partial_i\partial_jh=\partial_j\partial_ih$ ([[thm-clairaut-schwarz-mixed-partials]]).

[F6] $|\partial B_r^3|=\omega_2r^2$ with $\omega_2=3V_3$, and the map $\omega\mapsto a+R\omega$ multiplies surface measure by $R^2$: $\int_{S^2}h(\omega)\,d\sigma(\omega)=R^{-2}\int_{\partial B_R(a)}h((y-a)/R)\,dS(y)$ ([[lem-sphere-and-ball-measures-scale]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F7] $V_3=\pi^{3/2}/\Gamma(5/2)=4\pi/3$, so $\omega_2=3V_3=4\pi$ ([[cor-volume-of-the-unit-n-ball]], [[thm-real-gamma-functional-equation]], [[cor-real-gamma-one-half-is-root-pi]]).

## Proof

1.1 Time derivatives of the candidate. Write $r=ct$. By [F1] the means $A,B$ are $C^3$ respectively $C^2$ on $\mathbb R^3\times(0,\infty)$, so [F3] and [F4] give $u=A+ctA_r+tB$, $\partial_tu=2cA_r+c^2tA_{rr}+B+ctB_r$ and $\partial_t^2u=3c^2A_{rr}+c^3tA_{rrr}+2cB_r+c^2tB_{rr}$ on $\mathbb R^3\times(0,\infty)$, all derivatives being evaluated at $(x,ct)$. [F1, F3, F4, algebra]

1.2 Spatial derivatives. By [F2] applied to $u_0$ and to $u_1$, $\Delta_xA=A_{rr}+\frac2rA_r$ and $\Delta_xB=B_{rr}+\frac2rB_r$; since $A$ is $C^3$ and $\partial_r$ commutes with the $x$-derivatives by [F5], $\Delta_xA_r=\partial_r(\Delta_xA)=A_{rrr}+\frac2rA_{rr}-\frac2{r^2}A_r$. Hence $\Delta u=\Delta_xA+ct\Delta_xA_r+t\Delta_xB=\bigl(A_{rr}+\frac2rA_r\bigr)+ct\bigl(A_{rrr}+\frac2rA_{rr}-\frac2{r^2}A_r\bigr)+t\bigl(B_{rr}+\frac2rB_r\bigr)$ at $(x,ct)$. [F2, F5, F4, algebra]

1.3 The unnormalised form. Since $|S^2|=\omega_2=4\pi$ by [F6] and [F7], $M_{u_0}(x,r)=\frac{1}{4\pi}\int_{S^2}u_0(x+r\omega)\,d\sigma(\omega)=\frac{1}{4\pi r^2}\int_{\partial B_r(x)}u_0\,dS$, and likewise for $u_1$; also $\partial_rM_{u_0}(x,r)=\frac{1}{4\pi}\int_{S^2}\nabla u_0(x+r\omega)\cdot\omega\,d\sigma(\omega)=\frac{1}{4\pi r^2}\int_{\partial B_r(x)}\nabla u_0(y)\cdot\frac{y-x}{r}\,dS(y)$ by [F1], [F3] and the scaling in [F6]. Substituting $r=ct$ into $u=A+ctA_r+tB$ and collecting the common factor $\frac{1}{4\pi c^2t^2}$ gives $u(x,t)=\frac{1}{4\pi c^2t^2}\int_{\partial B_{ct}(x)}\bigl(u_0(y)+\nabla u_0(y)\cdot(y-x)+tu_1(y)\bigr)dS(y)$. [F1, F3, F6, F7, algebra]

2.1 Comparison. Multiplying step 1.2 by $c^2$ and substituting $r=ct$ gives $c^2\Delta u=c^2A_{rr}+(2c/t)A_r+c^3tA_{rrr}+2c^2A_{rr}-(2c/t)A_r+c^2tB_{rr}+2cB_r=3c^2A_{rr}+c^3tA_{rrr}+c^2tB_{rr}+2cB_r$. This equals $u_{tt}$ from step 1.1, proving the equation. The $C^3$ and $C^2$ regularity of $A$ and $B$ gives $u\in C^2$. [F4, step 1.1, step 1.2, algebra]

3.1 Both displays define the same $C^2$ solution. The unnormalised display uses the data values and the normal derivative of $u_0$ on the sphere, or equivalently the data on an open neighbourhood of that sphere. [step 2.1, step 1.3] ∎
