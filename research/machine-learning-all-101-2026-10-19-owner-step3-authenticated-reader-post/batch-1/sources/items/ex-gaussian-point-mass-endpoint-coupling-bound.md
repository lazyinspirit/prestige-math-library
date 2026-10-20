---
id: ex-gaussian-point-mass-endpoint-coupling-bound
kind: example
title: The Gaussian coupling bound is exact for a point mass
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
axiom_base: Full AC
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-gaussian-smoothed-data-law-and-transition-density
  - thm-gaussian-smoothing-endpoint-weak-limit
  - def-wasserstein-two-space-and-couplings
  - def-law-or-distribution-of-a-random-element
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
      locator: "Sections 3.2.2–3.2.3, printed pp. 87–91, deterministic Gaussian Itô increment context."
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: "https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §5.1.1, Gaussian kernel and convolution, printed pp. 127–131."
---

## Example

For $a\in\mathbb R^d$, $\delta_a$ denotes the probability measure concentrated at $a$. For $q>0$, write $\phi_q(z)=(2\pi q)^{-d/2}\exp(-|z|^2/(2q))$.

Fix an integer $d\ge1$, a horizon $T>0$, $0<\epsilon<T$, $a\in\mathbb R^d$, and $c>0$. Take $\mu=\delta_a$ and constant scalar noise $g(t)=c$, so $v(\epsilon)=c^2\epsilon$. Let $\mu_\epsilon$ be the Gaussian-smoothed law with density $\phi_{c^2\epsilon}(x-a)$. For Borel probability laws with finite second moments, define $W_2$ as the square root of the infimum of the quadratic cost over all Borel couplings. Then

$$W_2(\mu_\epsilon,\delta_a)=\sqrt{d}\,c\sqrt{\epsilon}.$$

The coupling bound from the endpoint theorem is therefore an equality in this case.

## Example references

[Lawler, *Stochastic Calculus: An Introduction with Applications*, Sections 3.2.2–3.2.3](https://www.math.uchicago.edu/~lawler/finbook.pdf)

[Hunter, *Notes on Partial Differential Equations*, Chapter 5, §5.1.1](https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf)

## Facts & Assumptions

**Given:** The point-mass initial law, constant positive noise, and quadratic Wasserstein distance.

[A1] The full Axiom of Choice is inherited from the smoothing and coupling interfaces. [[def-axiom-of-choice]]

[F1] For constant $g=c$, the positive-time smoothed law of $\delta_a$ has Gaussian density $\phi_{c^2\epsilon}(x-a)$. [[def-gaussian-smoothed-data-law-and-transition-density]]

[F2] The endpoint coupling estimate is $W_2(\mu_\epsilon,\mu)\le\sqrt{d\,v(\epsilon)}$. [[thm-gaussian-smoothing-endpoint-weak-limit]]

[F3] $W_2^2$ is the infimum of quadratic costs among Borel couplings, and its arguments must have finite second moments. [[def-wasserstein-two-space-and-couplings]]

[F4] A random element's law is its probability pushforward, and the Euclidean product Borel sigma-algebra is the product sigma-algebra. [[def-law-or-distribution-of-a-random-element]] [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]

## Proof

**Given:** The example's parameters and the coupling definition in [F3].

1.1 The density in [F1] is the product of $d$ one-dimensional normal densities translated by $a$. Each coordinate has mean $a_j$ and variance $c^2\epsilon$, so its second moment about $a$ is $d c^2\epsilon$; both laws therefore have finite second moments. [A1, F1, F3, given]

2.1 If $\pi$ is any coupling of $\mu_\epsilon$ and $\delta_a$, its second marginal assigns mass one to $\{a\}$, hence $\pi(\mathbb R^d\times\{a\})=1$. Its quadratic cost is therefore $\int|x-y|^2\,\pi(dx,dy)=\int|x-a|^2\,\mu_\epsilon(dx)=d c^2\epsilon.$ There is at least one coupling: the continuous map $x\mapsto(x,a)$ pushes $\mu_\epsilon$ forward to a Borel probability on $\mathbb R^d\times\mathbb R^d$ with marginals $\mu_\epsilon$ and $\delta_a$ by [F4]. Thus the infimum over all couplings equals this common cost. Taking the square root gives the stated equality. The endpoint bound [F2] has the same value because $v(\epsilon)=c^2\epsilon$. [F2, F3, F4, step 1.1, given] ∎
