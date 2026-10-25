---
id: ex-sgd-biased-direction-violates-alignment
kind: example
title: "A biased SGD direction can fail positive alignment"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-stochastic-gradient-descent
  - thm-stochastic-direction-expected-average-stationarity
  - thm-induction-principle
  - def-probability-measure
  - def-measure
  - def-axiom-of-choice
  - def-derivative
  - def-euclidean-inner-product
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct

---

## Example

For comparison with the expected-average stationarity theorem, assume AC. Let $\Omega=\{\omega\}$, $\mathcal F=\{\varnothing,\Omega\}$, $P(\varnothing)=0$, $P(\Omega)=1$, and $\mathcal F_t=\mathcal F$ for each $t$. Let $f(x)=x^2/2$ on $\mathbb R$, choose $x_0\ne0$ and a constant stepsize $\alpha>0$, and use the deterministic direction $G_t=-x_t$ in the SGD update. The recurrence is deterministic and needs no choice principle: $x_{t+1}=(1+\alpha)x_t$, so $f(x_1)=(1+\alpha)^2f(x_0)>f(x_0)$. At every iterate, the conditional mean direction is $-\nabla f(x_t)$ and its inner product with the gradient is $-x_t^2<0$; consequently no positive alignment constant $\mu$ can satisfy the theorem's condition $\langle\nabla f(x_t),\mathbb E[G_t\mid\mathcal F_t]\rangle\ge\mu\|\nabla f(x_t)\|_2^2$.

## Example references

[[alg-stochastic-gradient-descent|Stochastic-gradient-descent procedure]]: fixes the update used in the example.

[[thm-stochastic-direction-expected-average-stationarity|Expected-average stationarity theorem]]: its positive-alignment hypothesis is the condition this direction violates.

## Facts & Assumptions

**Given:** The one-dimensional objective, deterministic initial point and direction, and positive constant stepsize in the Example.

[A1] [[def-axiom-of-choice]]: AC is assumed for the conditional-expectation theorem comparison; the deterministic recurrence itself uses no choice.

[F1] [[alg-stochastic-gradient-descent]]: the unconstrained update is $x_{t+1}=x_t-\alpha G_t$.

[F2] [[thm-stochastic-direction-expected-average-stationarity]]: the expected-average theorem requires $\langle\nabla f(x_t),\mathbb E[G_t\mid\mathcal F_t]\rangle\ge\mu\|\nabla f(x_t)\|_2^2$ for a constant $\mu>0$.

[F3] [[def-derivative]] and [[def-euclidean-inner-product]]: in one real dimension, the gradient of $x^2/2$ is $x$ and the inner product is multiplication.

[F4] [[thm-induction-principle]]: a property true at the initial natural index and inherited by each successor holds at every index.

[F5] [[def-probability-measure]] and [[def-measure]]: a probability measure has total mass one and is countably additive on disjoint measurable sequences.

## Verification

1.1 The singleton measure has total mass one and is countably additive because at most one set in any disjoint sequence can be nonempty [F5]. By [F3], $\nabla f(x)=x$ and $f(x)=x^2/2$. The deterministic direction has conditional mean $-x_t$ and conditional variance zero on the trivial filtration. For any finite horizon, apply [F1] with $y_s=x_{s-1}$, $H_s=-y_s=G_{s-1}$ for $s\ge1$, and $\mathcal H_s=\mathcal F$ for $s\ge0$. Its positive-time update $y_{s+1}=y_s-\alpha H_s$ becomes $x_{t+1}=x_t-\alpha(-x_t)=(1+\alpha)x_t$ for $t=s-1\ge0$. [F1, F3, F5, given, algebra]

2.1 The recurrence in step 1.1 and $1+\alpha>0$ give $x_t=(1+\alpha)^t x_0\ne0$ for every $t\ge0$ by [F4]. In particular, $f(x_1)=(1+\alpha)^2x_0^2/2>x_0^2/2=f(x_0)$, so this direction can increase the objective in one step. [F4, step 1.1, given, induction, algebra]

3.1 For every $t$, step 2.1 gives $x_t\ne0$, so $\nabla f(x_t)\,\mathbb E[G_t\mid\mathcal F_t]=x_t(-x_t)=-x_t^2<0$, whereas $\mu|\nabla f(x_t)|^2=\mu x_t^2>0$ for every $\mu>0$. Therefore the local positive-alignment hypothesis [F2] fails at every iterate, despite the direction norm equaling the gradient norm and the variance being zero. This comparison invokes the theorem only in its AC branch [A1]; the displayed deterministic calculation does not use AC. [A1, F2, step 1.1, step 2.1, given, algebra] ∎

