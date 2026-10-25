---
id: ex-scalar-gaussian-diffusion-chain
kind: example
title: Two-step scalar Gaussian forward chain and posterior
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-forward-gaussian-diffusion-chain
  - def-multivariate-normal-law
  - thm-gaussian-forward-and-posterior-kernels
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the Gaussian-law and posterior suppliers; the finite arithmetic verification uses no further choice."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Jonathan Ho, Ajay Jain, and Pieter Abbeel, Denoising Diffusion Probabilistic Models (2020)"
      url: "https://arxiv.org/pdf/2006.11239"
    - title: "Simon J. D. Prince, Understanding Deep Learning, Chapter 18: Diffusion models (2026), pp. 363–387"
      url: "https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html"
---

## Example

Assume AC and take a one-dimensional chain with $T=2$, $\beta_1=\tfrac14$, $\beta_2=\tfrac12$, and fixed data value $x_0\in\mathbb R$. Then $\alpha_1=\tfrac34$, $\alpha_2=\tfrac12$, $\bar\alpha_1=\tfrac34$, and $\bar\alpha_2=\tfrac38$. The forward marginal at step two is $q(x_2\mid x_0)=N(\sqrt{3/8}\,x_0,5/8)$, and the posterior given $x_2,x_0$ is
$$q(x_1\mid x_2,x_0)=N\!\left(\frac{2\sqrt3}{5}x_0+\frac{\sqrt2}{5}x_2,\frac15\right).$$
At step one, $q(x_0\mid x_1,x_0)$ assigns probability one to every Borel set containing $x_0$ and zero to every Borel set not containing $x_0$, so it is not a Lebesgue density.

## Example references

Scalar specialization of the forward marginal and posterior formulas: [Ho, Jain, and Abbeel, Eqs. (4), (6), and (7)](https://arxiv.org/pdf/2006.11239).

Independent Gaussian-kernel derivation: [Prince, Chapter 18, “The diffusion kernel” and “The tractable conditional”](https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html).

## Facts & Assumptions

**Given:** AC, $T=2$, $\beta_1=\tfrac14$, $\beta_2=\tfrac12$, and fixed $x_0\in\mathbb R$.

[A1] AC is inherited from the Gaussian law and posterior interfaces. [[def-axiom-of-choice]].

[F1] The schedule definitions are $\alpha_t=1-\beta_t$ and $\bar\alpha_t=\prod_{s=1}^t\alpha_s$. [[def-forward-gaussian-diffusion-chain]].

[F2] The forward marginal and conditioned posterior have the exact formulas in the theorem. [[thm-gaussian-forward-and-posterior-kernels]].

[F3] A scalar $N(m,v)$ is a normal law with mean $m$ and variance $v$. [[def-multivariate-normal-law]].

## Verification

**Proof technique:** substitute the schedule values into the exact formulas.

**Given:** The hypotheses in the Example.

1.1 The schedule gives $\alpha_1=1-\tfrac14=\tfrac34$, $\alpha_2=1-\tfrac12=\tfrac12$, $\bar\alpha_1=\tfrac34$, and $\bar\alpha_2=\tfrac34\cdot\tfrac12=\tfrac38$. [A1, F1, given, algebra]

2.1 By [F2] and the scalar normal convention [F3], $q(x_2\mid x_0)$ has mean $\sqrt{3/8}\,x_0$ and variance $1-\tfrac38=\tfrac58$. [F2, F3, step 1.1, algebra]

2.2 The posterior variance is $\tilde\beta_2=\frac{(1/2)(1-3/4)}{1-3/8}=\frac{1/8}{5/8}=\tfrac15$. The $x_0$ coefficient is $\frac{\sqrt{3/4}(1/2)}{5/8}=\tfrac{2\sqrt3}{5}$, and the $x_2$ coefficient is $\frac{\sqrt{1/2}(1/4)}{5/8}=\tfrac{\sqrt2}{5}$. Substitution into [F2] gives the displayed posterior. [A1, F1, F2, F3, step 1.1, algebra]

3.1 Since the final conditioning includes the fixed value $x_0$, the conditional law of $x_0$ itself is concentrated at that value. It is therefore a point mass and has no Lebesgue density for the reconstruction term. [given, step 2.2, algebra] ∎

## Source notes

Gaussian marginal and posterior theorem: [[thm-gaussian-forward-and-posterior-kernels]].
