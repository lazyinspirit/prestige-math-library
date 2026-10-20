---
id: lem-isotropic-gaussian-kl-formula
kind: lemma
title: Reverse KL between isotropic Gaussian laws
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-kullback-leibler-divergence
  - def-multivariate-normal-law
  - def-natural-logarithm
  - thm-nondegenerate-multivariate-normal-law-has-density
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the Gaussian-density and library KL interfaces. The density-ratio computation itself uses no further choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Ho, Ajay Jain, and Pieter Abbeel, Denoising Diffusion Probabilistic Models (2020)"
      url: "https://arxiv.org/pdf/2006.11239"
    - title: "Simon J. D. Prince, Understanding Deep Learning, Chapter 18: Diffusion models (2026), pp. 363–387"
      url: "https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html"
---

## Statement

Assume AC. Let $d\ge1$, $m,n\in\mathbb R^d$, and $v,w>0$. If $Q=N_d(m,vI_d)$ and $P=N_d(n,wI_d)$, then
$$D_{\mathrm{KL}}(Q\|P)=\frac d2\left(\frac vw-1+\log\frac wv\right)+\frac{\|m-n\|_2^2}{2w},$$
where the KL divergence is directional, its first argument is absolutely continuous with respect to its second, and $\log$ is the natural logarithm.

## Statement references

Gaussian density formula: [[thm-nondegenerate-multivariate-normal-law-has-density]].

Directional KL convention: [[def-kullback-leibler-divergence]].

Natural logarithm: [[def-natural-logarithm]].

Gaussian reverse-KL terms in diffusion objectives: [Ho, Jain, and Abbeel, §3.2](https://arxiv.org/pdf/2006.11239).

Gaussian reverse-process loss: [Prince, Chapter 18, “The reverse process and the tractable conditional”](https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html).

## Facts & Assumptions

**Given:** AC, $Q=N_d(m,vI_d)$ and $P=N_d(n,wI_d)$ with $d\ge1$ and $v,w>0$.

[A1] AC is assumed by the Gaussian-density supplier and the library KL definition. [[def-axiom-of-choice]].

[F1] A positive-definite multivariate normal law has its displayed Lebesgue density. [[thm-nondegenerate-multivariate-normal-law-has-density]].

[F2] A multivariate normal law has its specified mean and covariance. [[def-multivariate-normal-law]].

[F3] For probability measures $Q\ll P$, the library divergence is the expectation under $Q$ of the log Radon–Nikodym density ratio. [[def-kullback-leibler-divergence]].

[F4] Expectation of an integrable random variable is its integral with respect to its probability law. [[def-expectation-of-a-nonnegative-or-integrable-random-variable]].

## Proof

**Proof technique:** expand the Gaussian log-density ratio and integrate its quadratic terms.

**Given:** The hypotheses in the Statement.

1.1 By [F1], both Lebesgue densities are strictly positive, so $Q\ll P$. Expanding their Gaussian density formulas gives the log-density ratio $\log\frac{dQ}{dP}(x)=\frac d2\log\frac wv-\frac{\|x-m\|_2^2}{2v}+\frac{\|x-n\|_2^2}{2w}$. All terms are integrable under $Q$ because its covariance is finite. [A1, F1, F3, given]

2.1 Under $Q$, [F2] gives $\mathbb E_Q\|X-m\|_2^2=dv$, and expansion of $X-n=(X-m)+(m-n)$ gives $\mathbb E_Q\|X-n\|_2^2=dv+\|m-n\|_2^2$ because $\mathbb E_Q(X-m)=0$. Integrating the ratio in step 1.1 and applying the AC-dependent convention [F3] and expectation definition [F4] yields $D_{\mathrm{KL}}(Q\|P)=\frac d2\log\frac wv-\frac d2+\frac{dv+\|m-n\|_2^2}{2w}$, which is the stated formula. [A1, F2, F3, F4, step 1.1, algebra] ∎

## Proof references

Expectation and covariance convention: [[def-multivariate-normal-law]].

Natural logarithm: [[def-natural-logarithm]].
