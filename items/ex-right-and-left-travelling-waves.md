---
id: ex-right-and-left-travelling-waves
kind: example
title: "Right- and left-travelling waves"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
proof_strategy: direct
deps: [thm-dalembert-formula, lem-general-solution-of-the-one-dimensional-wave-equation, lem-one-dimensional-wave-operator-factorisation, cor-primitives-of-a-continuous-function, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability]
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
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1, printed p. 211: $u=f(x-t)+g(x+t)$ as the d'Alembert solution"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.3.2, printed p. 47, (2.3.7): left- and right-moving components with speed $c$"
---


## Example

Fix $c>0$; no choice principle is needed in this example. Let $F,G\in C^2(\mathbb R)$ and put $u(x,t):=F(x-ct)+G(x+ct)$. Then $u$ is a $C^2$ solution of $u_{tt}=c^2u_{xx}$ on $\mathbb R^2$, with
$$u(x,0)=F(x)+G(x),\qquad u_t(x,0)=-cF'(x)+cG'(x).$$
Conversely every $C^2$ solution on a rectangle has this form ([[lem-general-solution-of-the-one-dimensional-wave-equation]]). Two checks: (i) for $F$ a compactly supported bump and $G=0$, the profile translates to the right at speed $c$ without changing shape; (ii) the data $(u_0,u_1)=(F+G,-cF'+cG')$ are exactly those fed into [[thm-dalembert-formula]], whose expression reproduces $u$.

## Facts & Assumptions

**Given:** a speed $c>0$, functions $F,G\in C^2(\mathbb R)$, and $u(x,t)=F(x-ct)+G(x+ct)$.

[F1] If $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]). The required total differentiability follows from continuous coordinate partial derivatives ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[F2] Sums, constant multiples of differentiable functions are differentiable with the usual rules ([[thm-algebra-of-derivatives]]).

[F3] Every $C^2$ solution of $u_{tt}=c^2u_{xx}$ on a nonempty open rectangle is a sum $F(x-ct)+G(x+ct)$ with $F,G\in C^2$ on the projections, and conversely ([[lem-general-solution-of-the-one-dimensional-wave-equation]]).

[F4] With data $u_0=F+G$, $u_1=-cF'+cG'$ the d'Alembert expression of [[thm-dalembert-formula]] equals $u$; the integrals of $F'$ and $G'$ are evaluated by the fundamental theorem of calculus ([[cor-primitives-of-a-continuous-function]]).

## Verification

1.1 Substitution. By [F1] and [F2], $u$ is $C^2$, $\partial_tu=-cF'(x-ct)+cG'(x+ct)$, $\partial_t^2u=c^2F''(x-ct)+c^2G''(x+ct)$ and $\partial_x^2u=F''(x-ct)+G''(x+ct)$, so $\partial_t^2u=c^2\partial_x^2u$ on $\mathbb R^2$; at $t=0$ the displayed data are read off directly. [F1, F2, algebra]

1.2 Check (i). If $G=0$ then $u(x,t)=F(x-ct)$; for each fixed $t$ the graph of $u(\cdot,t)$ is the graph of $F$ translated by $ct$, so the profile moves to the right at speed $c$ with its shape unchanged. [F2, algebra]

1.3 Check (ii). The d'Alembert expression with data $(u_0,u_1)=(F+G,-cF'+cG')$ is $\frac12\bigl(F(x-ct)+G(x-ct)+F(x+ct)+G(x+ct)\bigr)+\frac{1}{2c}\bigl[-c\bigl(F(x+ct)-F(x-ct)\bigr)+c\bigl(G(x+ct)-G(x-ct)\bigr)\bigr]$ by [F4], and the $F$-terms and $G$-terms collapse to $F(x-ct)+G(x+ct)=u(x,t)$. [F4, algebra]

2.1 By [F3] the converse holds on every nonempty open rectangle, so the sum of a right- and a left-moving profile is exactly the general one-dimensional solution, and the d'Alembert formula returns it from its data. [F3, given] ∎ 