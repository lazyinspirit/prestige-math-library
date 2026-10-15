---
id: lem-product-prior-coordinate-posterior-law
kind: lemma
title: The product-prior posterior factors by coordinates
status: draft
origin: pipeline
dependency_level: 1
deps:
  - lem-wavelet-product-prior-is-l2-valued
  - def-countable-choice
  - def-identically-distributed-and-iid-random-variables
  - thm-dynkin-pi-lambda
  - thm-rectangle-criterion-for-independent-random-elements
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, §3.1, printed pp. 2013–2014"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §7.3.3, printed pp. 583–585"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Assume countable choice for the $L^2$-valued prior construction. Let the wavelet product prior have independent coefficients $\theta_{lk}=\sigma_l\xi_{lk}$, where the $\xi_{lk}$ are IID with density $\varphi$. Observe the independent Gaussian sequence

$$X_{lk}=\theta_{0,lk}+n^{-1/2}Z_{lk},$$

where the $Z_{lk}$ have the standard normal density and are independent of the prior. Assume a data-indexed posterior kernel for the $L^2$-valued prior is supplied as part of this model. In the product white-noise model, for every finite set $J$ of coefficient indices its conditional law of $(\theta_j)_{j\in J}$ given the full data sequence $(X_j)$ is the product of the one-coordinate densities

$$p_{j,n}(t\mid X_j)=\frac{e^{-n(t-X_j)^2/2}\,\sigma_j^{-1}\varphi(t/\sigma_j)}{\int_{\mathbb R}e^{-n(s-X_j)^2/2}\,\sigma_j^{-1}\varphi(s/\sigma_j)\,ds},\qquad j\in J.$$

Here $j$ abbreviates a pair $(l,k)$ and $\sigma_j=\sigma_l$. For $J=\varnothing$, the formula denotes the unit law on the zero-dimensional one-point space. Each denominator is strictly positive and finite: the Gaussian factor is everywhere positive and at most $1$, while the prior density integrates to $1$.

## Facts & Assumptions

[F1] [[def-identically-distributed-and-iid-random-variables]]: The prior coefficients are mutually independent and have a common law; scaling by the fixed positive $\sigma_l$ preserves coordinate independence.

[F2] [[thm-rectangle-criterion-for-independent-random-elements]]: Independence of random elements is equivalent to factorization of probabilities on all finite measurable rectangles.

[F3] [[thm-dynkin-pi-lambda]]: If a lambda-system contains a generating pi-system, it contains the generated sigma-algebra.

[L1] [[lem-wavelet-product-prior-is-l2-valued]]: The wavelet prior coefficients define an $L^2$-valued random element under the stated scale and finite-second-moment conditions.

[A1] [[def-countable-choice]]: Countable choice is used only for the $L^2$-valued prior construction supplied by [L1]; the finite-coordinate factorization argument itself uses no choice axiom.

[A2] The full data-indexed posterior kernel on $L^2$ is supplied as part of the model. We use the version whose finite-coordinate marginals are the displayed densities; the proof verifies their conditional-law identities under the prior-predictive model. This item does not claim a general full-kernel existence theorem.

**Given:** Countable choice, the product prior, the independent Gaussian coordinate experiment, and the supplied posterior kernel [A2]. The coordinate marginal formula is verified below.

## Proof

1.1 For each coordinate $j$, the pair $(\theta_j,X_j)$ is a measurable function of the independent pair $(\xi_j,Z_j)$. Thus the coordinate pairs are independent: finite rectangle probabilities factor by [F1] and [F2]. Fix finite $J$. For any cylinder event $B$ depending on finitely many observations outside $J$, the random vector $(\theta_J,X_J)$ is independent of $B$ by that same factorization. The events in $\sigma(X_{J^c})$ for which this independence identity holds form a lambda-system containing the outside-coordinate cylinder pi-system; [F3] extends it to all outside-data events. Hence conditioning on $X_{J^c}$ adds no information about $\theta_J$ once $X_J$ is known. [F1, F2, F3]

2.1 For finite $J$, the joint prior density of $\theta_J$ is the product of $\sigma_j^{-1}\varphi(t_j/\sigma_j)$, and the likelihood of $X_J=x_J$ is proportional to $\prod_{j\in J}e^{-n(x_j-t_j)^2/2}$. Each one-dimensional normalizer is at most $1$ and is positive: the Gaussian factor is bounded by $1$, is strictly positive everywhere, and the prior density integrates to $1$. Thus the normalized product density is $\prod_{j\in J}p_{j,n}(t_j\mid x_j)$. Integrating it over rectangles in $\theta_J$ and $X_J$ verifies the conditional-law identity for these coordinates. The prior is a Borel probability on $L^2$ by [L1] under [A1], and [A2] supplies the full posterior kernel; step 1.1 extends the finite-coordinate identity to the full observation sequence. [A1, A2, F1, F2, step 1.1, L1, algebra]

3.1 The product of the one-coordinate conditional densities in step 2.1 is exactly the stated finite-dimensional posterior marginal, so the posterior factors by coordinates for every finite index set $J$. [step 2.1] ∎
