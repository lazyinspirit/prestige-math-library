---
id: ex-harmonic-taylor-series-on-a-ball
kind: example
title: A finite harmonic Taylor series and its Cauchy bound
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, thm-harmonic-functions-are-real-analytic]
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.2, printed pp. 23–25, Taylor expansions of harmonic functions"
---

## Example

Assume Countable Choice and $n\ge2$. Use one-based coordinate labels $x_j:=x_{j-1}^{\mathrm{can}}$ for $1\le j\le n$. The polynomial $u(x)=x_1^2-x_2^2$ is harmonic on every Euclidean ball, its Taylor expansion about any point $a$ terminates at degree two and agrees with $u$ everywhere, and its derivatives satisfy the factorial Cauchy estimates on every compactly contained ball.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge2$, a point $a\in\mathbb R^n$, and radii $0<r<R$ with $\overline{B_R(a)}\subset\mathbb R^n$.

[F1] Harmonic functions are real analytic, with Taylor coefficients $D^\alpha u(a)/\alpha!$; if $\overline{B_{2r}(a)}$ lies in the domain and $M=\sup_{B_{2r}(a)}|u|$, then $|D^\alpha u(a)|\le M C_n^{|\alpha|}|\alpha|!r^{-|\alpha|}$ ([[thm-harmonic-functions-are-real-analytic]]).

[F2] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Verification

**Proof technique:** direct.

1.1 Work under [F2]. Write $u(x)=x_1^2-x_2^2$ for $x\in\mathbb R^n$. Its coordinate partials are $\partial_1u=2x_1$, $\partial_2u=-2x_2$ and $\partial_iu=0$ for $i\ge3$, so the second coordinate partials are $\partial_1\partial_1u=2$, $\partial_2\partial_2u=-2$ and all others vanish; hence $\Delta u=2-2=0$, and $u$ is harmonic on every Euclidean ball. [given, F2, algebra]

2.1 Expand $u$ about $a$: writing $h=x-a$, $u(a+h)=(a_1+h_1)^2-(a_2+h_2)^2=u(a)+2(a_1h_1-a_2h_2)+\bigl(h_1^2-h_2^2\bigr)$, and there is no term of degree three or higher. Hence $D^\alpha u(a)=0$ for $|\alpha|\ge3$, the Taylor series terminates at degree two, and it equals $u$ at every point (the finite sum is the expansion above), in agreement with the general real-analytic representation of [F1]. [step 1.1, F1, algebra]

3.1 Factorial Cauchy bound. For $r>0$ let $M:=\sup_{B_{2r}(a)}|u|<\infty$; the polynomial is harmonic on all of $\mathbb R^n$ by step 1.1, so [F1] gives $|D^\alpha u(a)|\le M C_n^{|\alpha|}|\alpha|!r^{-|\alpha|}$ for every multi-index. For $|\alpha|\ge3$ the derivative is actually zero. The finite expansion of step 2.1 checks the normalization $D^\alpha u(a)/\alpha!$ directly: its $h_1^2$ coefficient is $1=D^{(2,0,\dots)}u(a)/2!$. [F1, step 1.1, step 2.1, algebra] ∎
