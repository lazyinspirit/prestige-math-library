---
id: ex-biased-simulator-gradient-stationarity-floor
kind: example
title: "A biased simulator gradient has limiting squared gradient $b^2$"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - thm-stochastic-gradient-biased-noise-floor
  - lem-geometric-sequence-null
  - def-axiom-of-choice
  - def-euclidean-inner-product
  - thm-induction-principle
  - def-derivative
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
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

Let the probability space be the one-point space $\Omega=\{\omega_0\}$ with $P(\{\omega_0\})=1$ and the trivial filtration $\mathcal F_k=\{\varnothing,\Omega\}$ for every $k$. Let $f(x)=x^2/2$, so $f_{\inf}=0$ and $\nabla f(x)=x$. A deterministic simulator returns the biased gradient $G_k=x_k+b$ for fixed $b\in\mathbb R$. Starting at $x_0=0$ with constant step $\alpha=1/4$, compute the iterates and their average squared true gradient.

## Facts & Assumptions

**Given:** The one-dimensional objective, biased oracle, initial value, and stepsize in the Example.

[A1] [[def-axiom-of-choice]]: AC is used by the conditional-expectation formulation of the bias-floor theorem.

[F1] [[def-stochastic-gradient-oracle-and-unconstrained-update]]: the unconstrained update is $x_{k+1}=x_k-\alpha G_k$.

[F2] [[thm-stochastic-gradient-biased-noise-floor]]: for an $L$-smooth objective and steps $\alpha\le1/(4L)$, bounded bias $\beta$ and variance $\sigma^2$ give an asymptotic average squared-gradient bound $(5/2)\beta^2+L\alpha\sigma^2$.

[F3] [[lem-geometric-sequence-null]]: if $|q|<1$, then $q^k\to0$.

[F4] [[def-euclidean-inner-product]]: in dimension one, $\|x\|_2^2=x^2$.

[F5] [[thm-induction-principle]]: a formula true at $k=0$ and preserved by the recurrence holds for every natural index.

[F6] [[def-derivative]]: $f'(x)$ is the limit of $(f(x+h)-f(x))/h$ as $h\to0$ when that limit exists.

[F7] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation preserves real constants, so $\mathbb E[c\mid\mathcal F_k]=c$ for every $c\in\mathbb R$.

[F8] [[def-conditional-variance]]: conditional variance is the conditional expectation of the squared deviation from the conditional mean.


## Verification

1.1 With $q=3/4$, [F1] gives $x_{k+1}=qx_k-b/4$. [F5] applies to $x_k=-b(1-q^k)$: it holds at $k=0$, and substitution gives $qx_k-b/4=-b\bigl(q(1-q^k)+(1-q)\bigr)=-b(1-q^{k+1})$. Thus [F3] implies $x_k\to-b$ and $\|\nabla f(x_k)\|_2^2=x_k^2\to b^2$. [F1, F3, F4, F5, given, algebra, induction]

2.1 The difference quotient $(f(x+h)-f(x))/h=x+h/2$ tends to $x$, so [F6] gives $\nabla f(x)=x$. For all $x,y$, $|\nabla f(x)-\nabla f(y)|=|x-y|=\|x-y\|_2$ by [F4], and the stated objective satisfies $f(x)\ge0$. The recurrence in step 1.1 makes each $x_k$ deterministic; [F7] then gives conditional mean $x_k+b=\nabla f(x_k)+b$, and [F8] gives conditional variance $0$. Also $x_0=0$ is square-integrable. For every $N\ge1$, $\frac1N\sum_{k=0}^{N-1}x_k^2=b^2\left(1-\frac{2(1-q^N)}{N(1-q)}+\frac{1-q^{2N}}{N(1-q^2)}\right)\longrightarrow b^2.$ The two fractions tend to zero because their numerators are bounded and their denominators grow linearly in $N$. With $L=1$, $\beta=|b|$, $\sigma=0$, and $\alpha=1/4=1/(4L)$, [F2] applies and gives the (valid, though nonsharp) upper limit $(5/2)b^2$, while the exact average tends to $b^2$. [A1, F2, F4, F6, F7, F8, step 1.1, given, algebra] ∎

