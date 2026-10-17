---
id: ex-geometric-brownian-milstein-update
kind: example
title: "Geometric Brownian motion and the Milstein update"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-milstein-scheme-and-iterated-integrals
  - def-continuous-brownian-ito-process
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
sources:
  references:
    - title: "Desmond J. Higham, An Algorithmic Introduction to Numerical Simulation of Stochastic Differential Equations, SIAM Review 43 (2001), Sections 4 and 6"
      url: "https://people.fjfi.cvut.cz/vybirja2/Seminar/Higham-NumSimulOfSDE.pdf"
    - title: "Kloeden and Platen, Numerical Solution of Stochastic Differential Equations, Section 10.3, printed pp. 345-351"
      url: "https://stevencjxie8.com/files/refs/ref7.pdf"
---

## Example

For $\mu,\nu,x_0\in\mathbb R$, consider the geometric Brownian SDE
$$dX_t=\mu X_t\,dt+\nu X_t\,dW_t,\qquad X_0=x_0.$$
A solution is $X_t=x_0\exp((\mu-\nu^2/2)t+\nu W_t)$. On a grid step of length $h$, the scalar Milstein update is
$$Y_{n+1}=Y_n\left(1+\mu h+\nu\Delta W_n+\frac12\nu^2((\Delta W_n)^2-h)\right).$$
This example verifies the exact-solution form and the update algebra; it makes no global rate claim under the bounded-coefficient hypotheses of the strong-order theorem.

## Facts & Assumptions

**Given:** AC; a filtered probability space whose filtration satisfies the usual conditions; and a standard Brownian motion $W$ adapted to that filtration such that $W_t-W_s$ is independent of $\mathcal F_s$ and has law $N(0,t-s)$ for every $0\le s<t$ (for example, the usual augmentation of the natural filtration of $W$), as required by [[def-continuous-brownian-ito-process]]; real constants $\mu,\nu,x_0$; and a finite interval.

[F1] [[def-milstein-scheme-and-iterated-integrals]]: the scalar update is $Y_{n+1}=Y_n+b(Y_n)h+\sigma(Y_n)\Delta W_n+\frac12\sigma(Y_n)\sigma'(Y_n)((\Delta W_n)^2-h)$.

[F2] [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]: for a smooth function of a Brownian It\^o process, the drift includes one half of the Hessian applied to the instantaneous covariance.

[A1] [[def-axiom-of-choice]]: AC is inherited from the Brownian and It\^o interface [F2].

## Verification

**Given:** The assumptions above.

1.1 Define $G(t,w)=x_0e^{(\mu-\nu^2/2)t+\nu w}$. Its derivatives are $G_t=(\mu-\nu^2/2)G$, $G_w=\nu G$, and $G_{ww}=\nu^2G$. It\^o's formula [F2] therefore gives $dG(t,W_t)=(\mu-\nu^2/2)Gdt+\frac12\nu^2Gdt+\nu GdW_t=\mu Gdt+\nu GdW_t$, with $G(0,W_0)=x_0$. Thus the displayed process solves the SDE, including $x_0=0$. [F2, A1, given]

2.1 For $b(x)=\mu x$ and $\sigma(x)=\nu x$, $\sigma'(x)=\nu$ and $\sigma(x)\sigma'(x)=\nu^2x$. Substituting these coefficients into [F1] and factoring $Y_n$ gives the displayed Milstein update. If $\nu=0$, its correction vanishes and it reduces to the deterministic Euler step. [F1, given, algebra] ∎
