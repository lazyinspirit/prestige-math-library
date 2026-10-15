---
id: thm-linear-functional-bvm-and-credible-coverage
kind: theorem
title: Linear-functional BvM limit and credible-interval calibration
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
axiom_use: "Countable choice is inherited only from the supplied L2 product-prior construction in the weak BvM theorem; the scalar mapping and coverage argument add no choice use."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, Theorem 3 and §2.3.1"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §§7.3.4–7.3.5"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Use the product-prior white-noise model and supplied posterior kernel of [[thm-weak-nonparametric-bernstein-von-mises-for-product-priors]], including its wavelet-basis, coefficient-density, truth, and countable-choice hypotheses. Let $g\in H^s_2$ for some $s>1/2$, with $g\ne0$, and put $\sigma_g=\|g\|_2$. Let $Q_n$ be the posterior law of $L_g(f)$ and let
$$C_{n,\alpha}=\left[q_{\alpha/2}(Q_n),q_{1-\alpha/2}(Q_n)\right],\qquad 0<\alpha<1.$$
Then
$$\beta_{BL,\mathbb R}\!\left(Q_n\circ[u\mapsto\sqrt n(u-L_g(X^{(n)}))]^{-1},N(0,\sigma_g^2)\right)\longrightarrow0$$
in $P_{f_0}^{(n)}$-probability. The interval $C_{n,\alpha}$ is posterior credible at level $1-\alpha$, and its frequentist coverage satisfies
$$P_{f_0}^{(n)}\{L_g(f_0)\in C_{n,\alpha}\}\longrightarrow1-\alpha.$$

## Facts & Assumptions

**Given:** The white-noise experiment, product prior, posterior kernel, basis, density and truth assumptions of [[thm-weak-nonparametric-bernstein-von-mises-for-product-priors]], together with $g\ne0$, $g\in H^s_2$, $s>1/2$, and $0<\alpha<1$.

[F1] [[thm-weak-nonparametric-bernstein-von-mises-for-product-priors]]: for every $\delta>1/2$, the posterior law of $\sqrt n(f-X^{(n)})$ converges in bounded-Lipschitz distance in $H(\delta)$ to the canonical white-noise law $N$ in $P_{f_0}^{(n)}$-probability. Its product-prior assumptions include countable choice only for the $L^2$ prior construction.

[F2] [[lem-smooth-functional-extends-to-negative-sobolev-space]]: $L_g$ is a continuous linear functional on $H(\delta)$ and agrees with $f\mapsto\langle f,g\rangle_{L^2}$ on $L^2$.

[F3] [[lem-white-noise-is-borel-gaussian-on-negative-sobolev-space]]: the canonical law $N$ is centered Gaussian on $H(\delta)$; for the coefficient pairing $L_g$, its variance is $\sum_{l,k}|g_{lk}|^2=\|g\|_2^2$.

[F4] [[lem-random-posterior-quantiles-stabilize-under-bvm]]: bounded-Lipschitz convergence in probability to a law with continuous CDF locally strictly increasing at an interior quantile implies convergence in probability of that posterior quantile.

[F5] [[thm-central-posterior-quantile-interval-is-credible]]: the equal-tailed interval between posterior quantiles $q_{\alpha/2}$ and $q_{1-\alpha/2}$ is graph-measurable and has posterior mass at least $1-\alpha$.

[F6] [[def-standard-normal-and-normal-laws]]: $N(0,1)$ is defined by its continuous positive density, and $N(0,\sigma^2)$ for $\sigma>0$ is its image under $x\mapsto\sigma x$; change of variables gives a continuous strictly positive density and hence a continuous strictly increasing CDF.

[A1] [[def-countable-choice]]: countable choice is inherited through [F1] for the $L^2$ product-prior construction; no additional choice is used below.

## Proof




1.1 Fix $\delta>1/2$. For every bounded $1$-Lipschitz function $h:\mathbb R\to\mathbb R$, the composition $h\circ L_g$ is bounded by $1$ and has Lipschitz constant at most $\|L_g\|_{H(\delta)^*}$. Rescaling by $c_g=\max(1,\|L_g\|_{H(\delta)^*})$ makes it an admissible bounded-Lipschitz test on $H(\delta)$. Hence the scalar pushforward distance is at most $c_g$ times the distance in [F1]. The pushforward of $N$ is $N(0,\sigma_g^2)$ by [F3], proving the asserted scalar BvM limit. [A1, F1, F2, F3, algebra]

2.1 Translate the posterior law of $L_g(f)$ by $L_g(X^{(n)})$ and scale by $\sqrt n$. By [F4] and the continuous strictly increasing normal CDF from [F6], the two quantiles of this scaled law converge in probability to $\sigma_g z_{\alpha/2}$ and $\sigma_g z_{1-\alpha/2}$, where $z_u$ is the $u$-quantile of $N(0,1)$. Since the affine map is increasing, these are exactly the scaled endpoints of $C_{n,\alpha}-L_g(X^{(n)})$. The interval is credible by [F5]. [F4, F5, F6, step 1.1, algebra]

3.1 Under the true white-noise law, $\sqrt n\{L_g(X^{(n)})-L_g(f_0)\}=L_g(W)$ has exactly the centered normal law $N(0,\sigma_g^2)$ by [F3]. On the event that both random scaled endpoints in step 2.1 lie within $\varepsilon$ of their limits, the event $L_g(f_0)\in C_{n,\alpha}$ is bounded between the corresponding deterministic normal-interval events with endpoints enlarged or contracted by $\varepsilon$. This sandwich uses no independence between the endpoints and the observation. The endpoint event has probability tending to one, and [F6] makes the normal mass of shrinking neighborhoods of the two endpoints tend to zero. [F3, F6, step 2.1, algebra]

4.1 Letting $n\to\infty$ and then $\varepsilon\downarrow0$ in the sandwich of step 3.1 gives limiting coverage $\Phi(z_{1-\alpha/2})-\Phi(z_{\alpha/2})=1-\alpha$ by the definition of the normal quantiles and CDF in [F6]. [F6, step 3.1, algebra] ∎
