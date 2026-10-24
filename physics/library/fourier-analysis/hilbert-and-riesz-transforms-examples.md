---
page: hilbert-and-riesz-transforms-examples
title: "Hilbert and Riesz Transforms — Examples"
status: published
items: []
examples:
  - ex-hilbert-transform-of-an-interval-indicator
  - cex-hilbert-transform-is-not-strong-type-one-one
  - cex-hilbert-transform-does-not-map-linfinity-to-linfinity
  - ex-hilbert-transform-of-the-poisson-kernel
  - ex-riesz-transforms-square-to-minus-the-identity-in-sum
---

These examples compute the transforms and mark the endpoint obstructions that
the companion page's strict-range theorems leave open. All of them assume
Countable Choice.

The interval indicator $1_{(0,1)}$ has symmetric principal value
$\pi^{-1}\log|x/(x-1)|$ away from the two endpoints, obtained by the exact
logarithmic antiderivative of $1/(x-y)$ on the two sides of the interval and
identified with the $L^2$ multiplier extension through smooth approximations.
That single computation powers both endpoint counterexamples: the transform is
not integrable, because its $1/|x|$ tail at infinity has divergent integral, so
there is no bounded strong-type $(1,1)$ extension compatible with the $L^2$
transform; and it is essentially unbounded near $0$ and $1$, so there is no
bounded action on $L^\infty$ agreeing with the $L^2$ transform on the
intersection. Neither argument refutes a weak $(1,1)$ estimate or a BMO bound.

The positive examples compute the line Poisson kernel: the transform of
$P_a(x)=a/[\pi(a^2+x^2)]$ is the conjugate Poisson kernel
$Q_a(x)=x/[\pi(a^2+x^2)]$, which is established pointwise and in $L^2$ from
the locally proved Fourier transform $\widehat{P_a}(\xi)=e^{-2\pi a|\xi|}$.
Finally, the finite sum of Riesz squares is evaluated on $L^2(\mathbb R^n)$,
where $\sum_{j=1}^nR_j^2=-I$ reduces to the elementary trigonometric identity
$\sum_j\xi_j^2/|\xi|^2=1$ for $\xi\ne0$; the assigned value at $\xi=0$ has no
effect on an $L^2$ statement.
