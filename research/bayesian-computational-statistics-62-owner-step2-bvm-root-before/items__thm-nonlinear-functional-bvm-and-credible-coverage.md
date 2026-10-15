---
id: thm-nonlinear-functional-bvm-and-credible-coverage
kind: theorem
title: Nonlinear-functional BvM limit under fast L2 contraction
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-sobolev-linear-functional-for-white-noise
  - lem-smooth-functional-extends-to-negative-sobolev-space
  - lem-random-posterior-quantiles-stabilize-under-bvm
  - thm-weak-nonparametric-bernstein-von-mises-for-product-priors
  - lem-white-noise-is-borel-gaussian-on-negative-sobolev-space
  - thm-central-posterior-quantile-interval-is-credible
  - def-standard-normal-and-normal-laws
  - def-countable-choice
axiom_use: "Countable choice is inherited only from the supplied L2 product-prior construction in the weak BvM theorem; the local Taylor and coverage arguments add no choice use."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, Theorem 4 and §2.3.2"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §§7.3.4–7.3.5"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Use the white-noise experiment, product prior, and supplied posterior kernel of [[thm-weak-nonparametric-bernstein-von-mises-for-product-priors]], with all its stated basis, coefficient-density, truth, and countable-choice hypotheses. Let $\Psi:L^2([0,1])\to\mathbb R$ be Borel measurable. Suppose $f_0\in L^2$, and for some $g\in H^s_2$, $s>1/2$, $g\ne0$, $C<\infty$, and $\rho>0$,
$$|\Psi(f_0+h)-\Psi(f_0)-\langle h,g\rangle_{L^2}|\le C\|h\|_2^2\quad\text{whenever }\|h\|_2\le\rho.$$
Assume the posterior contracts in $L^2$ at a deterministic radius $r_n=o(n^{-1/2})$, meaning $\Pi_n(\|f-f_0\|_2>r_n\mid X^{(n)})=o_{P_{f_0}^{(n)}}(1)$. Define the efficient center
$$\theta_n^*:=\Psi(f_0)+L_g(X^{(n)}-f_0),$$
where the last pairing is the continuous $H(\delta)$ extension from [[lem-smooth-functional-extends-to-negative-sobolev-space]]. Then the posterior law of $\sqrt n\{\Psi(f)-\theta_n^*\}$ converges in bounded-Lipschitz distance to $N(0,\|g\|_2^2)$ in $P_{f_0}^{(n)}$-probability. The equal-tailed posterior interval for $\Psi(f)$ at level $1-\alpha$ is credible and has frequentist coverage tending to $1-\alpha$.

The radius assumption is the stronger convention required by this plan. It implies the source's squared-radius condition: with $s_n=r_n^2$, one has $s_n=o(n^{-1/2})$ and posterior mass inside $\|f-f_0\|_2^2\le s_n$ tends to one.

## Facts & Assumptions

**Given:** The product-prior weak BvM model of [F1], the Borel functional $\Psi$, the stated local quadratic expansion with nonzero Riesz representer $g$, the posterior $L^2$ radius $r_n=o(n^{-1/2})$, and $0<\alpha<1$.

[F1] [[thm-weak-nonparametric-bernstein-von-mises-for-product-priors]]: the posterior law of $\sqrt n(f-X^{(n)})$ converges in bounded-Lipschitz distance on $H(\delta)$ to the canonical white-noise law for every $\delta>1/2$.

[F2] [[lem-smooth-functional-extends-to-negative-sobolev-space]]: $L_g$ extends continuously from $L^2$ to $H(\delta)$.

[F3] [[lem-white-noise-is-borel-gaussian-on-negative-sobolev-space]]: $L_g(W)$ is exactly $N(0,\|g\|_2^2)$ under the true white-noise law.

[F4] [[lem-random-posterior-quantiles-stabilize-under-bvm]]: scalar bounded-Lipschitz convergence to a CDF continuous on $\mathbb R$ and locally strictly increasing at the target quantile implies quantile convergence.

[F5] [[thm-central-posterior-quantile-interval-is-credible]]: equal-tailed posterior quantiles define a measurable credible interval of posterior mass at least $1-\alpha$.

[F6] [[lem-density-normal-laws-and-square-summable-gaussian-series]]: Under countable choice, in its density convention, $N(0,1)$ is defined by its continuous positive density, and $N(0,\sigma^2)$ for $\sigma>0$ is its image under $x\mapsto\sigma x$; change of variables gives a continuous strictly positive density and hence a continuous strictly increasing CDF.


[A1] [[def-countable-choice]]: countable choice supplies the $L^2$ prior construction in [F1] and the density normal-law interface [F6]; no full choice is used below.

## Proof




1.1 On the posterior event $\|f-f_0\|_2\le r_n\le\rho$, write $R(f)=\Psi(f)-\Psi(f_0)-L_g(f-f_0)$. The expansion gives $\sqrt n|R(f)|\le C\sqrt n r_n^2\to0$. Outside the event, posterior mass is $o_{P_{f_0}^{(n)}}(1)$ by assumption. Hence for every $\varepsilon>0$, $\Pi_n(\sqrt n|R(f)|>\varepsilon\mid X^{(n)})\to0$ in $P_{f_0}^{(n)}$-probability. [given, algebra]

2.1 For posterior draws, $\sqrt n\{\Psi(f)-\theta_n^*\}=\sqrt n L_g(f-X^{(n)})+\sqrt nR(f)$. For $c_g=\max(1,\|L_g\|)$, composing a bounded $1$-Lipschitz scalar test with $L_g$ and dividing by $c_g$ gives an admissible bounded-Lipschitz test on $H(\delta)$. Thus the first term has bounded-Lipschitz distance to the pushforward limit at most $c_g$ times the distance in [F1]; by [F3] that limit is $N(0,\|g\|_2^2)$. For any bounded $1$-Lipschitz test function, replacing the first term by its sum with the remainder changes its posterior integral by at most $\varepsilon+2\Pi_n(\sqrt n|R(f)|>\varepsilon\mid X^{(n)})$. Step 1.1 and then $\varepsilon\downarrow0$ prove the asserted scalar BvM limit. [A1, F1, F2, F3, step 1.1, algebra]

3.1 Apply [F4] to the centered and scaled posterior law in step 2.1. By [F6], its $\alpha/2$ and $1-\alpha/2$ quantiles converge in probability to $\|g\|_2z_{\alpha/2}$ and $\|g\|_2z_{1-\alpha/2}$. Translating and rescaling these quantiles gives the equal-tailed posterior interval for $\Psi(f)$; its credibility follows from [F5]. [F4, F5, F6, step 2.1, algebra]

4.1 Under the true experiment, $\sqrt n\{\theta_n^*-\Psi(f_0)\}=L_g(W)$ has exactly the law $N(0,\|g\|_2^2)$ by [F3]. The random centered interval endpoints in step 3.1 converge in probability to the corresponding normal quantiles. For any fixed $\varepsilon>0$, on the event that both endpoints are within $\varepsilon$ of their limits, coverage is bounded by deterministic normal-interval probabilities with endpoints enlarged or contracted by $\varepsilon$. This argument requires no independence between the endpoints and $L_g(W)$. By [F6], the mass of shrinking endpoint neighborhoods vanishes; letting $n\to\infty$ and then $\varepsilon\downarrow0$ gives coverage $1-\alpha$. [F3, F6, step 3.1, algebra] ∎
