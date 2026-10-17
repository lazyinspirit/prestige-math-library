---
id: ex-streaming-least-squares-single-sample-update
kind: example
title: "One streaming least-squares SGD update"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - def-filtration-and-filtered-probability-space
  - def-finite-probability-space-and-event
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-derivative
  - def-euclidean-inner-product
  - def-axiom-of-choice
  - def-conditional-variance
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $Y$ be equally likely to be $-1$ or $1$ on a filtered space with trivial $\mathcal F_0$ and $\mathcal F_1=\sigma(Y)$. Set $\ell(x,Y)=\frac12(x-Y)^2$ and define the streaming least-squares objective $f(x)=\mathbb E[\ell(x,Y)]$. From $x_0=0$, use the one-sample gradient $G_0=\partial_x\ell(x_0,Y)$ and step $\alpha_0=\frac12$. Compute the mean gradient, first iterate, and objective gap.

## Facts & Assumptions

**Given:** The two-point finite probability space, the loss and objective in the Example, initial point $x_0=0$, and step $\alpha_0=1/2$.

[A1] [[def-axiom-of-choice]]: AC is used for the canonical conditional-expectation interface.

[F1] [[def-finite-probability-space-and-event]]: each of the two outcomes $Y=-1,1$ has weight $1/2$.

[F2] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: on this finite space, expectation is the weighted finite sum.

[F3] [[def-stochastic-gradient-oracle-and-unconstrained-update]]: the sample gradient is the oracle value, and the SGD step is $x_1=x_0-\alpha_0G_0$.

[F4] [[def-euclidean-inner-product]]: on $\mathbb R$, $\|x\|_2^2=x^2$.

[F5] [[def-derivative]]: the derivative is the limit of the difference quotient.

[F6] [[def-conditional-variance]]: $\operatorname{Var}(G_0\mid\mathcal F_0)=\mathbb E[(G_0-\mathbb E[G_0\mid\mathcal F_0])^2\mid\mathcal F_0]$.

## Verification

1.1 By [F1]–[F2], $f(x)=\frac14(x+1)^2+\frac14(x-1)^2=\frac12(x^2+1).$ Its difference quotient at $x$ is $\bigl(f(x+h)-f(x)\bigr)/h=x+h/2$, so [F5] gives $\nabla f(x)=x$. Likewise $\bigl(\ell(h,Y)-\ell(0,Y)\bigr)/h=h/2-Y$, so $G_0=-Y$. Its conditional mean given the trivial $\mathcal F_0$ is zero, equal to $\nabla f(0)$, and [F6] with [F1]–[F2] gives conditional variance $\mathbb E[Y^2]=1$. [A1, F1, F2, F3, F5, F6, given, algebra]

2.1 The update in [F3] gives $x_1=Y/2$. Since $Y^2=1$, $f(x_1)=\frac12(1/4+1)=5/8$, whereas $f(0)=1/2$ is the minimum because $f(x)-f(0)=x^2/2\ge0$. Hence the realized objective gap after this one sample is exactly $1/8$. [F3, F4, step 1.1, algebra] ∎

