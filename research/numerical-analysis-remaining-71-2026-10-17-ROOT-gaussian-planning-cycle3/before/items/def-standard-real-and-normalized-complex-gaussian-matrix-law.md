---
id: def-standard-real-and-normalized-complex-gaussian-matrix-law
kind: definition
title: Standard real and normalized complex Gaussian matrix laws
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-countable-choice, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, §10.1"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §§11.1, 11.4"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Countable Choice so that the repository's Lebesgue measure
on each finite-dimensional real coordinate space is a measure. A **standard
real Gaussian scalar** has Lebesgue density
$$\varphi_R(x)=(2\pi)^{-1/2}e^{-x^2/2}.$$
A **normalized complex Gaussian scalar** is $z=(x+iy)/\sqrt2$ for independent
standard real Gaussian scalars $x,y$; its density on $\mathbb C\simeq\mathbb
R^2$ is $\varphi_C(z)=\pi^{-1}e^{-|z|^2}$ and $\mathbb E|z|^2=1$.

For $F=\mathbb R$ or $\mathbb C$, an **iid standard Gaussian matrix** in
$F^{a\times b}$ has independent entries with the corresponding scalar law.
All its expectations are finite-dimensional Lebesgue integrals against the
product density. Independence means this product-density factorization.
The normalized complex convention is fixed throughout; it is not the
unnormalized law $x+iy$.
