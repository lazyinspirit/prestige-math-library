---
id: cex-smooth-does-not-imply-real-analytic-for-general-pde
kind: counterexample
title: A smooth nonanalytic solution of a first-order PDE
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
proof_strategy: direct
deps: [def-the-standard-flat-function, thm-the-standard-flat-function-is-smooth-and-flat-at-zero, def-real-analytic-germ-in-several-variables]
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Giacomo Ageno, Part III: Analysis of Partial Differential Equations"
      url: "https://giacomoageno.github.io/LectureNotesAPDE.pdf"
      locator: "§2.4.1, printed p. 28: any C2 solution of the Laplace equation is automatically smooth and in fact real analytic, and this promotion 'doesn't happen in general'; the standard flat function supplies the smooth non-analytic witness"
---

## Statement refuted

For $n\ge3$ let $\beta$ be the standard flat function and $u(x)=\beta(x_1)$ on $\mathbb R^n$. Then $u\in C^\infty$ and solves the first-order PDE $\partial_{x_2}u=0$, but $u$ is not real analytic at the origin: every Taylor coefficient there is zero, whereas $u(x)>0$ for points with $x_1>0$ arbitrarily near the origin. Thus smoothness alone does not imply the harmonic analyticity conclusion for general PDE.

## Facts & Assumptions

**Given:** an integer $n\ge3$, the standard flat function $\beta$ and $u(x)=\beta(x_1)$ on $\mathbb R^n$.

[F1] The standard flat function is $\beta(t)=\exp(-1/t)$ for $t>0$ and $\beta(t)=0$ for $t\le0$ ([[def-the-standard-flat-function]]).

[F2] The standard flat function $\beta$ is smooth on $\mathbb R$, and $\beta^{(m)}(0)=0$ for every $m\in\mathbb N_0$ ([[thm-the-standard-flat-function-is-smooth-and-flat-at-zero]]).

[F3] A real analytic germ at $a\in\mathbb R^n$ is represented on a neighbourhood of $a$ by an absolutely convergent series $f(x)=\sum_\alpha c_\alpha(x-a)^\alpha$ with $c_\alpha=D^\alpha f(a)/\alpha!$; a function that is not representable by its Taylor series on any neighbourhood of $a$ is not real analytic there ([[def-real-analytic-germ-in-several-variables]]).

## Counterexample

**Proof technique:** direct.

1.1 Smoothness. The map $x\mapsto x_1$ is linear, hence smooth, and $\beta$ is smooth by [F2]; the composition $u=\beta\circ(x\mapsto x_1)$ is therefore smooth on $\mathbb R^n$, with $\partial_{x_2}u(x)=\beta'(x_1)\cdot0=0$ and more generally $D^\alpha u(x)=\beta^{(|\alpha|)}(x_1)$ if $\alpha=\alpha_1e_1$ and $D^\alpha u(x)=0$ whenever $\alpha$ has a nonzero entry outside the first coordinate. [given, F1, F2, algebra]

2.1 A first-order PDE. Since $u(x)$ depends on $x$ only through the first coordinate, $\partial_{x_2}u\equiv0$ on $\mathbb R^n$; thus $u$ solves the first-order linear equation $\partial_{x_2}u=0$, which is not the Laplace equation. [given, step 1.1, algebra]

2.2 Vanishing Taylor coefficients. Let $\alpha$ be any multi-index. If $\alpha_1=|\alpha|$ then $D^\alpha u(0)=\beta^{(|\alpha|)}(0)=0$ by [F2]; otherwise $D^\alpha u\equiv0$ by step 1.1 and again $D^\alpha u(0)=0$. Hence every coefficient $c_\alpha=D^\alpha u(0)/\alpha!$ of the Taylor expansion of $u$ at the origin vanishes, so the only candidate series is the zero series. [step 1.1, F2, F3, algebra]

3.1 Failure of the representation. For every $\delta>0$ and every $0<x_1<\delta$ we have $u(x_1e_1)=\beta(x_1)=\exp(-1/x_1)>0$ by [F1], while the candidate series of step 2.2 sums to $0$; hence no neighbourhood of the origin carries a power-series representation of $u$. By [F3], $u$ is not real analytic at the origin. [step 2.2, F1, F3, algebra]

4.1 Steps 1.1, 2.1 and 3.1 exhibit a $C^\infty$ function that solves a PDE and is not real analytic at a point, so smoothness of a solution does not imply real analyticity for general partial differential equations; the harmonic conclusion of the companion page uses the Laplace equation, not smoothness alone. [step 1.1, step 2.1, step 3.1, F2] ∎
