---
id: cex-ip-pnp-iterative-awgn-error-model
kind: counterexample
title: "Gaussian measurement noise need not remain Gaussian at later PnP-ISTA inputs"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - alg-ip-pnp-ista-with-denoiser
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - lem-normal-location-scale-density
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: "Assume AC to use the library standard-normal probability law and positive-density normal-law suppliers. The recurrence and scalar support argument use no further choice."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Xiaojian Xu, Yu Sun, Jiaming Liu, Brendt Wohlberg, and Ulugbek S. Kamilov, Provable Convergence of Plug-and-Play Priors with MMSE Denoisers, IEEE Signal Processing Letters 27 (2020), arXiv:2005.07685"
      url: "https://arxiv.org/pdf/2005.07685"
      locator: "§3, pp. 3–4, discussion of the iterative-AWGN modeling limitation; the exact scalar witness is proved locally."
    - title: "Rémi Gribonval and Mila Nikolova, On Bayesian Estimation and Proximity Operators, Applied and Computational Harmonic Analysis 50 (2021), 49–72, arXiv:1807.04021"
      url: "https://arxiv.org/pdf/1807.04021"
      locator: "§1.3 and §2.5.1, distinctions between Gaussian likelihood, posterior mean, and denoiser-specific proximity representations."
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, Foundations and Trends in Optimization 1(3) (2014)"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
      locator: "§4.2, equation (4.6), gradient-step structure used in the scalar model."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement refuted

Assume the Axiom of Choice. Let $\varepsilon$ have the standard normal law, let $Y=\theta+\varepsilon$, and let $g(x)=(x-Y)^2/2$. For any noise parameter $\sigma>0$, deterministic map $\widetilde D_\sigma:\mathbb R\to\mathbb R$, step $\gamma>0$, and initialization $x_0\in\mathbb R$, define $z_t=x_{t-1}-\gamma(x_{t-1}-Y)$ and $x_t=\widetilde D_\sigma(z_t)$. The false claim is that Gaussian measurement noise forces $z_t-\theta$ to have a Gaussian law at every iteration $t\ge1$, for every such denoiser, step, and initialization.

## Statement references

[[alg-ip-pnp-ista-with-denoiser]]

[[def-standard-normal-and-normal-laws]]

## Facts & Assumptions

**Given:** AC, a standard normal random variable $\varepsilon$, $Y=\theta+\varepsilon$, the scalar least-squares function $g(x)=(x-Y)^2/2$, and the PnP-ISTA recurrence in the Statement.

[A1] [[def-axiom-of-choice]]: the Axiom of Choice is assumed.

[F1] [[def-standard-normal-and-normal-laws]]: under AC, $N(0,1)$ is the probability law with density $\phi(u)=\exp(-u^2/2)/\sqrt{2\pi}$, which is strictly positive for every real $u$.

[F2] [[lem-normal-location-scale-density]]: under AC, every positive-variance normal law has a strictly positive Lebesgue density on all of $\mathbb R$; a zero-variance normal law is a point mass.

[F3] [[alg-ip-pnp-ista-with-denoiser]]: the gradient step is $z_t=x_{t-1}-\gamma\nabla g(x_{t-1})$ and the next iterate is $x_t=\widetilde D_\sigma(z_t)$.

## Counterexample

**Given:** The probability model and recurrence in the Statement. Choose $\theta=0$, $x_0=0$, $\sigma=1$, $\gamma=1/2$, and the deterministic plug-in map $\widetilde D_1(z)=z^2$.

1.1 Since $\nabla g(x)=x-\varepsilon$, [F3] gives $z_1=\varepsilon/2$, $x_1=\varepsilon^2/4$, and $z_2=x_1-\frac12(x_1-\varepsilon)=\varepsilon^2/8+\varepsilon/2=(\varepsilon+2)^2/8-1/2$. Thus $z_2\ge-1/2$ almost surely. [F3, given, algebra]

2.1 The event $-1/2<\varepsilon<1/2$ has positive probability by [A1, F1] and gives $-7/32<z_2<9/32$. The event $-5/2<\varepsilon<-3/2$ also has positive probability and gives $-1/2\le z_2<-15/32$. These disjoint output intervals show that $z_2$ is not almost surely constant. [A1, F1, step 1.1, given, algebra]

3.1 A nondegenerate Gaussian law has positive probability below $-1/2$ by [A1, F2], whereas $z_2$ has none by step 1.1; a degenerate Gaussian is a point mass, whereas step 2.1 shows $z_2$ is not. Therefore $z_2$ is not Gaussian and the universal iterative-AWGN claim is false. [A1, F2, step 1.1, step 2.1] ∎
