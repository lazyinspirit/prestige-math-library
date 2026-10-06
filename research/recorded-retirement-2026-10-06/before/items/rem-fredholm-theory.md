---
id: rem-fredholm-theory
kind: remark
title: "Fredholm operators, the index, and the Fredholm alternative"
status: draft
origin: session
proved_here: false
deps: [rem-compact-operators]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "index theory for compact perturbations"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Fredholm operator (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fredholm_operator"
    - title: "Fredholm theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fredholm_theory"
    - title: "Fredholm alternative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fredholm_alternative"
pipeline_run: null
---

## Statement

A bounded operator $T \colon X \to Y$ between Banach spaces is **Fredholm** if $\ker T$ is
finite-dimensional and the range of $T$ has finite codimension; the range is then automatically
closed. The **index** is
$$\operatorname{ind} T = \dim \ker T - \operatorname{codim} \operatorname{ran} T \in \mathbb{Z}.$$

Three facts. **Atkinson's theorem**: $T$ is Fredholm if and only if it is invertible modulo the
compact operators, that is, invertible in the Calkin algebra $B(X)/K(X)$. The index is locally
constant in the operator norm, additive under composition, and unchanged by adding a compact
operator. **Fredholm alternative**: if $K$ is compact and $\lambda \neq 0$, then $\lambda I - K$ is
Fredholm of index $0$, so it is injective if and only if it is surjective, and the equation
$\lambda x - Kx = y$ is solvable for all $y$ exactly when the homogeneous equation has only the
trivial solution.

## Remarks

**Not proved in this library.** Recorded with a citation.

**What would prove it.** The Riesz theory of [[rem-compact-operators]] for the alternative;
Atkinson's theorem by constructing a parametrix from a splitting of $X$ along the finite-dimensional
kernel and cokernel; and the stability of the index by a perturbation argument in the Calkin
algebra.

**Why it matters here.** The index is the first example in this library's plan of a genuinely
topological invariant attached to an analytic object: it cannot change continuously because it is an
integer, so it is constant on connected components of the Fredholm operators. That single
observation is the seed of index theory, and it is also the practical reason existence and
uniqueness are equivalent for a large class of integral equations.
