---
id: ex-three-dimensional-radial-wave-reduces-to-one-dimension
kind: example
title: "A radial three-dimensional wave reduces to one dimension"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
proof_strategy: direct
deps: [def-wave-equation-cauchy-data-and-wave-speed, lem-odd-dimensional-wave-kernels-obey-the-radial-recursion, lem-general-solution-of-the-one-dimensional-wave-equation, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, cor-primitives-of-a-continuous-function, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-clairaut-schwarz-mixed-partials, thm-continuous-partial-derivatives-imply-total-differentiability]
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
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.3, Problem 6, printed p. 51: spherical waves and the substitution $v=ru$"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed p. 172, Example 7.1: radial initial conditions reduce the three-dimensional problem"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1, printed p. 211: the one-dimensional travelling-wave solution; the radial reduction is proved here and is the subject of Ivrii §2.3, Problem 6"
---


## Example

Let $c>0$ and let $u(x,t)=v(|x|,t)$ be a $C^2$ radially symmetric function on $(\mathbb R^3\setminus\{0\})\times\mathbb R$ satisfying $u_{tt}=c^2\Delta u$ there. Then, with $r=|x|$ and $w(r,t):=r\,v(r,t)$,
$$w_{tt}=c^2w_{rr}\qquad(r>0),$$
so $w$ solves the one-dimensional wave equation on the half-line. Conversely, if $w\in C^3([0,\infty)\times\mathbb R)$ satisfies $w_{tt}=c^2w_{rr}$ on $(0,\infty)\times\mathbb R$ and $w(0,t)=0$ for all $t$, then $v:=w/r$ extends to a $C^2$ radial solution of the three-dimensional equation with $v(0,t)=\partial_rw(0,t)$. This is why radial three-dimensional data can be propagated by the one-dimensional formula, with the boundary condition $w(0,t)=0$ encoding continuity at the origin.

## Facts & Assumptions

**Given:** a speed $c>0$; a radial $C^2$ solution $u(x,t)=v(|x|,t)$ on $(\mathbb R^3\setminus\{0\})\times\mathbb R$ in the forward direction; and, in the converse direction, a function $w\in C^3([0,\infty)\times\mathbb R)$ with $w_{tt}=c^2w_{rr}$ on $r>0$ and $w(0,t)=0$ for all $t$.

[F1] The chain rule computes the iterated partial derivatives of a composition ([[thm-chain-rule-for-total-derivatives]]). The required total differentiability follows from continuous coordinate partial derivatives ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[F2] Sums, products, quotients of differentiable functions are differentiable with the usual rules ([[thm-algebra-of-derivatives]]); the one-dimensional wave operator and the radial three-dimensional wave operator are the operators named in [[def-wave-equation-cauchy-data-and-wave-speed]].

## Verification

1.1 Forward direction. For a radial function $u(x,t)=v(r,t)$, $r=|x|$, the chain rule gives $\partial_ju=v_r\,x_j/r$ and $\partial_j^2u=v_{rr}x_j^2/r^2+v_r(1/r-x_j^2/r^3)$ for each $j$, so $\Delta u=\sum_{j=1}^3\partial_j^2u=v_{rr}+\frac2rv_r=\frac1r\partial_r^2(rv)=\frac1rw_{rr}$ by the product rule. Therefore $0=u_{tt}-c^2\Delta u=\frac1r\bigl(w_{tt}-c^2w_{rr}\bigr)$ and, since $r>0$, the one-dimensional equation $w_{tt}=c^2w_{rr}$ follows. [F1, F2, algebra]

1.2 Converse direction, regularity at the origin. Suppose $w\in C^3([0,\infty)\times\mathbb R)$ solves $w_{tt}=c^2w_{rr}$ on $r>0$ and $w(0,t)=0$ for all $t$. By [[cor-primitives-of-a-continuous-function]] and $w(0,t)=0$, $w(r,t)=r\int_0^1w_r(sr,t)\,ds$, hence $v(r,t):=w(r,t)/r=\int_0^1w_r(sr,t)\,ds$; as $w\in C^3$, [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]] applied locally to each derivative permits differentiation under the integral and shows that $v\in C^2([0,\infty)\times\mathbb R)$ with $v(0,t)=w_r(0,t)$ and $\partial_rv(0,t)=\frac12w_{rr}(0,t)=0$, the last equality because $w_{rr}(0,t)=c^{-2}w_{tt}(0,t)$ by continuity of the equation up to $r=0$ and $w(0,\cdot)\equiv0$. [F1, F2, algebra]

1.3 The equation extends to the origin. For $r>0$ the product rule gives $v_r=\frac1rw_r-\frac1{r^2}w$, $v_{rr}=\frac1rw_{rr}-\frac2{r^2}w_r+\frac2{r^3}w$ and $v_{tt}=\frac1rw_{tt}=\frac{c^2}{r}w_{rr}$, so the radial three-dimensional Laplacian of $v$ is $v_{rr}+\frac2rv_r=\frac1rw_{rr}=c^{-2}v_{tt}$. For the limits at $r\downarrow0$, the integral formulas and $w_{rr}(sr,t)=\int_0^{sr}w_{rrr}(a,t)da$, since $w_{rr}(0,t)=0$, give $v_{rr}(r,t)=\int_0^1s^2w_{rrr}(sr,t)\,ds\to\frac13w_{rrr}(0,t)$ and $v_r(r,t)=\int_0^1sw_{rr}(sr,t)\,ds=\frac{r}{3}w_{rrr}(0,t)+o(r)$, so that $\frac2rv_r(r,t)\to\frac23w_{rrr}(0,t)$; hence $\bigl(v_{rr}+\frac2rv_r\bigr)(r,t)\to w_{rrr}(0,t)$. On the other hand, differentiating $w_{tt}=c^2w_{rr}$ in $r$ and letting $r\downarrow0$ gives $v_{tt}(0,t)=w_{rtt}(0,t)=c^2w_{rrr}(0,t)$. These limits are uniform for $t$ in compact intervals by continuity of the derivatives of $w$. For $r>0$, $u_{ij}=(v_{rr}-v_r/r)x_ix_j/r^2+(v_r/r)\delta_{ij}$, and both $v_{rr}$ and $v_r/r$ tend to $w_{rrr}(0,t)/3$, so $u_{ij}$ extends continuously with this value times $\delta_{ij}$. The gradient is $v_r x/r$ and is differentiable at $x=0$ by the same limits. Also $v_r(0,t)=0$ implies $v_{rt}(0,t)=0$; hence $u_{it}=v_{rt}x_i/r\to0$, agreeing with the derivative in $t$ of $u_i(0,t)=0$. Together with the integral formula for $v_{tt}$, this proves $u(x,t):=v(|x|,t)$ is $C^2$ on $\mathbb R^3\times\mathbb R$ and satisfies $u_{tt}=c^2\Delta u$ at every point, including the origin, where both sides equal $c^2w_{rrr}(0,t)$. [F1, F2, algebra]

2.1 Both directions are proved: a radial three-dimensional solution corresponds to a one-dimensional solution $w=rv$ on the half-line, and a one-dimensional solution vanishing at $r=0$ gives back a $C^2$ radial three-dimensional solution, so radial three-dimensional data may be propagated by the one-dimensional formula. [given] ∎ 