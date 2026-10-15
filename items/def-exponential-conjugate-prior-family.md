---
id: def-exponential-conjugate-prior-family
kind: definition
title: "Conjugate-form prior for an exponential family"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-exponential-family
  - def-finite-sigma-finite-and-semifinite-measures
  - def-measure-kernel-and-probability-kernel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-derivative-of-exponential
  - thm-logarithm-derivative-and-integral
  - cor-differentiable-implies-continuous
  - thm-measurability-of-integration-against-a-kernel
justified_by: []
proof_strategy: definition
axiom_use: "No choice axiom is used to define the density or its finite-positive normalizer."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §2.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families, 2020"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
---

## Definition

Let $(\Theta,\mathcal T,\rho)$ be a sigma-finite measure space. Let
$\eta:\Theta\to\Omega\subseteq H$ be measurable, where $\Omega$ has the
trace Borel sigma-algebra and is the parameter set in
[[def-exponential-family]]. Let $A$ be its log-partition function. For
$\chi\in\mathbb R^k$ and $\kappa\in\mathbb R$, define
$$Z(\chi,\kappa)=\int_\Theta \exp\{\eta(\theta)^T\chi-\kappa A(\eta(\theta))\}\,\rho(d\theta).$$
When $0<Z(\chi,\kappa)<\infty$, the **conjugate-form prior**
$\Pi_{\chi,\kappa}$ is the probability measure with density
$$\frac{\exp\{\eta(\theta)^T\chi-\kappa A(\eta(\theta))\}} {Z(\chi,\kappa)}$$
relative to $\rho$. If this finite-positive condition fails, this notation
does not designate a probability prior.

## Remarks

**Log-partition measurability.** The log-partition function is Borel on its
natural-parameter domain
$H=\{\eta:0<Z(\eta)<\infty\}$. On the product measurable space
$(\mathbb R^k\times\mathcal X,\mathcal B(\mathbb R^k)\otimes\mathcal A)$
([[def-product-sigma-algebra-and-finite-product-sigma-algebras]]), the
coordinate functions of $\xi$ and $T(x)$ are measurable. Finite sums and
products preserve measurability ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]),
and composition with the continuous exponential is measurable
([[thm-continuous-preimages-of-borel-sets-are-borel]],
[[thm-derivative-of-exponential]]); hence
$(\xi,x)\mapsto h(x)e^{\xi^TT(x)}$ is product-measurable. Regard $\mu$ as
the constant kernel $K(\xi,B)=\mu(B)$ from $\mathbb R^k$ to $\mathcal X$
([[def-measure-kernel-and-probability-kernel]]). Choose a measurable
exhaustion $X_m\uparrow\mathcal X$ with $\mu(X_m)<\infty$, supplied by
sigma-finiteness; then $K(\xi,X_m)=\mu(X_m)$ for every $\xi$, so this is a
uniformly sigma-finite kernel. The parameterized-integral measurability theorem
([[thm-measurability-of-integration-against-a-kernel]]) therefore makes
$Z(\xi)=\int h(x)e^{\xi^TT(x)}\,\mu(dx)$ a Borel map into $[0,\infty]$.
Consequently $H=\{\xi:0<Z(\xi)<\infty\}$ is Borel, and $A(\xi)=\log Z(\xi)$ is Borel on $H$
because logarithm is differentiable, hence continuous, on $(0,\infty)$
([[thm-logarithm-derivative-and-integral]],
[[cor-differentiable-implies-continuous]],
[[thm-continuous-preimages-of-borel-sets-are-borel]]). Thus $A\circ\eta$ and
$\theta\mapsto\exp\{\eta(\theta)^T\chi-\kappa A(\eta(\theta))\}$ are
measurable. Since $\rho$ is sigma-finite, the integral defining
$Z(\chi,\kappa)$ is a well-defined extended nonnegative integral; under its
stated finite-positive condition the displayed density is measurable and
normalizes to one.
