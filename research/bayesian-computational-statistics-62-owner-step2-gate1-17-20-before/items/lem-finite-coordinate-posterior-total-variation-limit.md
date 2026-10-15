---
id: lem-finite-coordinate-posterior-total-variation-limit
kind: lemma
title: Finite-coordinate posterior total-variation limit
status: draft
origin: pipeline
dependency_level: 2
deps:
  - lem-wavelet-product-prior-is-l2-valued
  - lem-product-prior-coordinate-posterior-law
  - def-countable-choice
  - thm-dominated-convergence
  - thm-finite-and-countable-subadditivity-of-measures
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, Theorem 7 and discussion, printed p. 2017"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, Theorem 7.3.18 and proof, printed pp. 593–594"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
    - title: "Ray, Adaptive Bernstein–von Mises theorems in Gaussian white noise, §7.1, printed pp. 23–24"
      url: https://arxiv.org/pdf/1407.3397
---

## Statement

Assume countable choice for the $L^2$ prior construction, with the full posterior kernel supplied as in [[lem-product-prior-coordinate-posterior-law]]. Fix a finite set $J$ of wavelet coordinates in the product white-noise model of [[lem-product-prior-coordinate-posterior-law]]. Suppose $\varphi$ is bounded and continuous at each normalized truth coefficient $r_j=\theta_{0,j}/\sigma_j$, with $\varphi(r_j)>0$. Let $\widetilde\Pi_{n,J}$ be the conditional posterior law of $\sqrt n(\theta_J-X_J)$ given the full data. If $J=\varnothing$, both laws are the unique probability on the zero-dimensional one-point space. For nonempty $J$, the posterior and Gaussian densities $p_{n,J}$ and $\phi_J$ on $\mathbb R^{|J|}$ satisfy

$$\int_{\mathbb R^{|J|}}|p_{n,J}(u\mid X)-\phi_J(u)|\,du\longrightarrow0$$

in probability under the true white-noise law. Consequently $d_{\rm TV}(\widetilde\Pi_{n,J},N_{|J|}(0,I))\to0$, where $d_{\rm TV}(\mu,\nu):=\sup_A|\mu(A)-\nu(A)|$ and $N_{|J|}(0,I)$ is the product of $|J|$ standard normal laws.

## Facts & Assumptions

[F1] [[lem-product-prior-coordinate-posterior-law]]: The posterior marginal on every finite coordinate set is the product of the coordinate Bayes densities.

[F2] [[thm-dominated-convergence]]: Pointwise convergence under an integrable dominating function gives convergence of the integrals.

[F3] [[thm-finite-and-countable-subadditivity-of-measures]]: The probability of a countable union of events is at most the sum of their probabilities.

[A1] [[def-countable-choice]]: Countable choice is used for the $L^2$ prior construction; the full posterior kernel is supplied as model input in [F1], and the finite-dimensional density limit is choice-free.

**Given:** Countable choice, a fixed finite coordinate set $J$, the coordinate prior densities and white-noise observations, boundedness of $\varphi$, and its continuity and strict positivity at each $r_j$.

## Proof

1.1 Fix one coordinate $j=(l,k)$ and write $r=\theta_{0,j}/\sigma_j$. Under the true law, $X_j/\sigma_j=r+Z_j/(\sqrt n\sigma_j)\to r$ in probability, and $b_n=(\sqrt n\sigma_j)^{-1}\to0$. By [F1], under [A1], the posterior density of $U_n=\sqrt n(\theta_j-X_j)$ is $p_n(u\mid X_j)=\frac{e^{-u^2/2}\varphi(X_j/\sigma_j+b_nu)}{c_n(X_j)},\qquad c_n(X_j)=\int_{\mathbb R}e^{-v^2/2}\varphi(X_j/\sigma_j+b_nv)\,dv.$ For any deterministic sequence $x_n/\sigma_j\to r$, boundedness of $\varphi$ and [F2] give $c_n(x_n)\to\varphi(r)\sqrt{2\pi}>0$. [A1, F1, F2, given, algebra]

2.1 Along such a deterministic sequence, $p_n(u\mid x_n)\to(2\pi)^{-1/2}e^{-u^2/2}$ pointwise and is eventually bounded by a constant multiple of $e^{-u^2/2}$. A second application of [F2] gives convergence in $L^1(du)$, hence convergence in total variation. Since $X_j/\sigma_j\to r$ in probability, if the total-variation convergence in probability failed, some subsequence would have error probability bounded below. Select a further subsequence for which $\mathbb P(|X_j/\sigma_j-r|>2^{-q})\le2^{-q}$ at its $q$th term; [F3] bounds each union of tail events by the corresponding geometric tail, which tends to zero, so the further subsequence converges almost surely to $r$, contradicting the deterministic conclusion. [F2, F3, step 1.1, choose, algebra]

3.1 For finite nonempty $J$, [F1] makes the scaled posterior and its Gaussian target product measures. Telescope the difference of their product densities one coordinate at a time. Integrating the absolute value of each term gives the $L^1$ distance of that coordinate pair, since every other coordinate density integrates to $1$. Thus the joint $L^1$ distance is at most the sum of the finitely many coordinate $L^1$ distances, which tends to zero in probability by step 2.1. For each measurable event $A$, the absolute difference of its probabilities is at most this $L^1$ distance, so the total-variation conclusion follows. [F1, step 2.1, algebra] ∎
