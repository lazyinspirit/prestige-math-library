---
id: "def-wasserstein-two-space-and-couplings"
kind: definition
title: "The Euclidean quadratic Wasserstein space"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-borel-probability-law-on-a-polish-space", "def-probability-measure", "def-expectation-of-a-nonnegative-or-integrable-random-variable", "def-product-sigma-algebra-and-finite-product-sigma-algebras", "lem-borel-product-of-second-countable-spaces", "def-polish-space", "def-product-measure-on-sigma-finite-spaces", "thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique", "thm-tonelli-theorem-for-sigma-finite-product-spaces"]
justified_by: ["prop-existence-and-lower-semicontinuity-of-optimal-couplings"]
proof_strategy: direct
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
sources:
  references:
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §§5.1–5.3, PDF pp. 161–178"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport, Appendix A.1, PDF pp. 12–13"
      url: "https://arxiv.org/pdf/1805.09545"
verification:
  precheck: n/a
---
## Definition

For an integer $d\ge1$, let $\mathbb R^d$ have its Euclidean norm and Borel sigma-algebra. Define $\mathcal P_2(\mathbb R^d)$ to be the Borel probability measures $\mu$ with $\int |x|^2\,d\mu(x)<\infty$. A coupling of $\mu,\nu\in\mathcal P_2(\mathbb R^d)$ is a Borel probability measure $\pi$ on $\mathbb R^d\times\mathbb R^d$ whose first and second coordinate marginals are $\mu$ and $\nu$; write $\Gamma(\mu,\nu)$ for the set of couplings. Define
$$W_2(\mu,\nu)=\left(\inf_{\pi\in\Gamma(\mu,\nu)}\int_{\mathbb R^d\times\mathbb R^d}|x-y|^2\,d\pi(x,y)\right)^{1/2}.$$

## Definition references

[[def-borel-probability-law-on-a-polish-space|def borel probability law on a polish space]]

[[def-probability-measure|def probability measure]]

[[def-expectation-of-a-nonnegative-or-integrable-random-variable|def expectation of a nonnegative or integrable random variable]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras|def product sigma algebra and finite product sigma algebras]]

[[lem-borel-product-of-second-countable-spaces|lem borel product of second countable spaces]]

[[def-polish-space|def polish space]]

[Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §§5.1–5.3, PDF pp. 161–178](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)

[Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport, Appendix A.1, PDF pp. 12–13](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** An integer $d\ge1$ and $\mu,\nu\in\mathcal P_2(\mathbb R^d)$.

[F1] The product of two probability measures exists, is a probability, and has the two given marginals. [[def-product-measure-on-sigma-finite-spaces]] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F2] For a nonnegative function on a product probability space, Tonelli identifies its integral with either iterated integral; $|x-y|^2\le2|x|^2+2|y|^2$. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]

## Proof
1.1 The product law $\mu\otimes\nu$ is a Borel probability on $\mathbb R^d\times\mathbb R^d$ with marginals $\mu,\nu$ by [F1], so it belongs to $\Gamma(\mu,\nu)$. Thus the coupling set in the definition is nonempty. [given, F1]

2.1 By the inequality in [F2] and the finite second moments of $\mu,\nu$, Tonelli gives $\int|x-y|^2d(\mu\otimes\nu)\le2\int|x|^2d\mu+2\int|y|^2d\nu<\infty.$ All coupling costs are nonnegative, so their infimum is finite and nonnegative; its square root in the displayed definition is therefore a finite real number. [given, F1, F2, step 1.1] ∎
