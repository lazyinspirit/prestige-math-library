---
id: alg-contrastive-divergence-k
kind: algorithm
title: Contrastive divergence with k transitions
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-energy-based-density-and-partition-function, def-measure-kernel-and-probability-kernel, def-composition-of-probability-kernels, lem-kernel-composition-is-well-defined-and-associative, thm-measurability-of-integration-against-a-kernel, def-measure-with-density, def-probability-measure, def-nonnegative-lebesgue-integral, def-integrable-real-and-complex-functions-and-their-integrals]
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Geoffrey Hinton, A Practical Guide to Training Restricted Boltzmann Machines, Version 1, Sections 2–3"
      url: "https://www.cs.toronto.edu/~hinton/absps/guideTR.pdf"
    - title: "Kevin P. Murphy, Probabilistic Machine Learning: Advanced Topics, Chapter 24, Sections 24.1–24.2.2"
      url: "https://github.com/probml/pml2-book/releases/download/2025-dec-10/book2.pdf"
---

## Definition

Let $(\mathcal X,\mathcal A,\mu)$ be a measure space, let $r$ be a positive
integer and $\theta\in\mathbb R^r$,
and let $E_\theta:\mathcal X\to\mathbb R$ be measurable in $x$ and continuously
differentiable in $\theta$. Define the energy model $P_\theta$ relative to $\mu$
only when
$$0<Z_\theta:=\int_\mathcal X e^{-E_\theta(x)}\,d\mu(x)<\infty,$$
with density $e^{-E_\theta}/Z_\theta$. Let $Q_0$ be a data probability
measure on $(\mathcal X,\mathcal A)$ and let $K_\theta$ be a probability kernel
from $\mathcal X$ to itself which leaves $P_\theta$ invariant, meaning
$$\int_\mathcal X K_\theta(x,A)\,P_\theta(dx)=P_\theta(A)\qquad(A\in\mathcal A).$$
Let $\{*\}$ carry its full sigma-algebra, let $G_{0,\theta}(*,A):=Q_0(A)$,
and recursively compose the probability kernel $G_{j,\theta}$ from $\{*\}$ to
$\mathcal X$ with $K_\theta$ to obtain $G_{j+1,\theta}$. Define
$Q_{j,\theta}(A):=G_{j,\theta}(*,A)$; thus $Q_{0,\theta}=Q_0$ and
$$Q_{j+1,\theta}(A)=\int_\mathcal X K_\theta(x,A)\,Q_{j,\theta}(dx),\qquad A\in\mathcal A.$$
Finite probability-kernel composition makes each $Q_{j,\theta}$ a probability
measure. For an integer $k\ge1$, $Q_{k,\theta}$ is the $k$-step reconstruction law.

If $Q_0$ and $Q_{k,\theta}$ have specified nonnegative measurable densities
$r_{0,\theta}$ and $r_{k,\theta}$ relative to $P_\theta$, meaning
$Q_{j,\theta}(A)=\int_A r_{j,\theta}\,dP_\theta$ for every $A\in\mathcal A$
for $j\in\{0,k\}$, and
$$\int|r_{j,\theta}\log r_{j,\theta}|\,dP_\theta<\infty\qquad(j\in\{0,k\}),$$
define their finite contrastive-divergence objective by
$$\operatorname{CD}_k(\theta):=\int r_{0,\theta}\log r_{0,\theta}\,dP_\theta-\int r_{k,\theta}\log r_{k,\theta}\,dP_\theta,$$
where $0\log0:=0$ and $\log$ is the natural logarithm. On a finite state
space where $P_\theta$ has positive mass at every state, write
$p_\theta(x):=P_\theta(\{x\})$ and $q_{j,\theta}(x):=Q_{j,\theta}(\{x\})$.
Then $r_{j,\theta}(x)=q_{j,\theta}(x)/p_\theta(x)$ and the objective equals
$$\sum_{x:q_{0,\theta}(x)>0}q_{0,\theta}(x)\log\frac{q_{0,\theta}(x)}{p_\theta(x)}-\sum_{x:q_{k,\theta}(x)>0}q_{k,\theta}(x)\log\frac{q_{k,\theta}(x)}{p_\theta(x)},$$
since each finite-space integral is the sum of the integrand times the point
mass and $p_\theta r_{j,\theta}=q_{j,\theta}$.

For a positive integer $m$, the procedure takes independent data draws
$x^1,\ldots,x^m$ with common law $Q_0$, a transition sampler for $K_\theta$,
and a learning rate $\eta>0$; the
reconstruction chains are drawn independently conditional on their starts. Its
output is the updated parameter from the **stop-gradient CD-$k$ update**:

1. For each $i$, set $x^{i,0}=x^i$ and draw $x^{i,j+1}$ from
   $K_\theta(x^{i,j},\cdot)$ for $j=0,\ldots,k-1$.
2. Form
   $$\widehat g_k=\frac1m\sum_{i=1}^m\left(\nabla_\theta E_\theta(x^i)-\nabla_\theta E_\theta(x^{i,k})\right).$$
3. Update $\theta\leftarrow\theta-\eta\widehat g_k$.

When $\nabla_\theta E_\theta$ is integrable under $Q_0$ and $Q_{k,\theta}$,
the associated **population CD-$k$ direction** is
$$g_k(\theta):=\int\nabla_\theta E_\theta\,dQ_0-\int\nabla_\theta E_\theta\,dQ_{k,\theta}.$$
The procedure makes no claim that the chain has mixed in $k$ steps. The
parameter derivative of $Q_{k,\theta}$ is not stopped in the scalar objective's
definition; the update above deliberately omits that derivative.

## Definition references

[[def-energy-based-density-and-partition-function]] defines the normalized energy law used as the chain target.

[[def-measure-kernel-and-probability-kernel]] defines the probability transition kernels.

[[def-composition-of-probability-kernels]] defines their iterated composition.

[[lem-kernel-composition-is-well-defined-and-associative]] establishes that finite compositions remain probability kernels.

[[def-measure-with-density]] defines a measure from a nonnegative density.

[[def-probability-measure]] defines the data and model laws.

[[def-nonnegative-lebesgue-integral]] defines the nonnegative integrals.

[[def-integrable-real-and-complex-functions-and-their-integrals]] defines integrability of the relative-entropy terms and parameter gradients.
