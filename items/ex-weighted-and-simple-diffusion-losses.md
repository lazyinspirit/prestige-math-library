---
id: ex-weighted-and-simple-diffusion-losses
kind: example
title: Weighted ELBO term differs from the simple diffusion loss
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-forward-gaussian-diffusion-chain
  - thm-ddpm-elbo-decomposition
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the Gaussian objective interfaces; the scalar schedule and coefficient calculations use no additional choice."
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

Assume AC, take the one-dimensional schedule $T=2$, $\beta_1=\tfrac14$, $\beta_2=\tfrac12$, and set the reverse variance at step two to $\sigma_2^2=\tilde\beta_2$. For a fixed $x_0$, define the Borel predictor at step two by
$$\epsilon_\theta(x_2,2)=\frac{x_2-\sqrt{3/8}\,x_0}{\sqrt{5/8}}+1.$$
For the step-one decoder, define
$$\epsilon_\theta(x_1,1)=\frac{x_1-\sqrt{3/4}\,x_0}{\sqrt{1/4}}.$$
Along the forward chain, the step-two noise-prediction error is identically one, while the step-one decoder mean equals $x_0$. Thus the exact step-two ELBO contribution has coefficient $2$, whereas the step-two contribution to the uniform-time $L_{\mathrm{simple}}$ is $\tfrac12$.

## Example references

Exact Gaussian noise-prediction weight and the unweighted objective: [Ho, Jain, and Abbeel, Eqs. (12) and (14)](https://arxiv.org/pdf/2006.11239).

Pedagogical derivation of weighted and unweighted noise-prediction terms; its finite-horizon ELBO simplification approximates the terminal-prior term by zero: [Prince, Chapter 18, “The diffusion ELBO” and “Simplifying it”](https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html).

## Facts & Assumptions

**Given:** AC, $T=2$, $\beta_1=\tfrac14$, $\beta_2=\tfrac12$, $\sigma_2^2=\tilde\beta_2$, and fixed $x_0\in\mathbb R$.

[A1] AC is inherited from the Gaussian model and ELBO interfaces. [[def-axiom-of-choice]].

[F1] The finite schedule has $\alpha_t=1-\beta_t$ and $\bar\alpha_t=\prod_{s=1}^t\alpha_s$. [[def-forward-gaussian-diffusion-chain]].

[F2] For $t\ge2$, the exact negative-ELBO step term is $C_t+w_t\|\epsilon-\epsilon_\theta(x_t,t)\|_2^2$, with $w_t=\frac{\beta_t^2}{2\sigma_t^2\alpha_t(1-\bar\alpha_t)}$, while the simple objective is the uniform average over $t=1,\ldots,T$ of the unweighted squared noise-prediction error. [[thm-ddpm-elbo-decomposition]].

## Verification

**Proof technique:** compute the schedule, weighted coefficient, and two objective contributions exactly.

**Given:** The hypotheses in the Example.

1.1 The schedule is $\alpha_1=\tfrac34$, $\alpha_2=\tfrac12$, $\bar\alpha_1=\tfrac34$, and $\bar\alpha_2=\tfrac38$. Hence $1-\bar\alpha_2=\tfrac58$ and $\tilde\beta_2=\frac{(1/2)(1-3/4)}{1-3/8}=\tfrac15$. [F1, given, algebra]

1.2 For the forward sample $x_2=\sqrt{3/8}\,x_0+\sqrt{5/8}\,\epsilon$, the step-two predictor in the Example returns $\epsilon+1$, so the squared error is $1$ for every $\epsilon$. For $x_1=\sqrt{3/4}\,x_0+\sqrt{1/4}\,\epsilon$, the step-one predictor returns $\epsilon$, and its reverse mean is $\frac1{\sqrt{3/4}}\left(x_1-\frac{1/4}{\sqrt{1/4}}\epsilon\right)=x_0$. Therefore the reconstruction log-likelihood contribution is the fixed Gaussian density at its mean, independent of the step-two error. [A1, F1, given, algebra]

2.1 Substituting $\sigma_2^2=\tilde\beta_2=\tfrac15$ into [F2] gives $w_2=\frac{(1/2)^2}{2(1/5)(1/2)(5/8)}=2$ and $C_2=\frac12(1-1+\log 1)=0$. Thus the exact step-two ELBO contribution is $2$ times the expected squared noise error. [F2, step 1.1, algebra]

3.1 The uniform-time simple objective in [F2] has step-two contribution $\frac12\cdot1=\tfrac12$ (and step-one noise error zero), while the exact weighted negative-ELBO term at step two is $2$. Thus the two step-two objective contributions differ. [A1, F2, step 1.2, step 2.1, algebra] ∎

## Source notes

Exact weighted DDPM term: [[thm-ddpm-elbo-decomposition]].

Uniform-time simple-loss definition: [[thm-ddpm-elbo-decomposition]].
