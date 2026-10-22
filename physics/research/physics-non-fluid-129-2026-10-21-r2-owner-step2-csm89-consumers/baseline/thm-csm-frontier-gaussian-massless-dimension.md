---
id: thm-csm-frontier-gaussian-massless-dimension
kind: theorem
title: Dimension threshold for the infinite-lattice massless Gaussian Green integral
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-csm-frontier-gaussian-lattice
  - lem-csm-frontier-sine-comparison
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-nonnegative-lebesgue-integral
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-continuous-preimages-of-borel-sets-are-borel
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - thm-monotone-convergence-for-the-integral
  - thm-geometric-series
  - thm-sine-cosine-signs-monotonicity-and-ranges
dependency_roles:
  def-csm-frontier-gaussian-lattice: mathematical-premise
  lem-csm-frontier-sine-comparison: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  cor-additivity-of-the-nonnegative-lebesgue-integral: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-geometric-series: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Statistical Field Theory, complete Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/sft/sft.pdf
      locator: §2.2.2, printed pp. 44–46 / PDF pp. 45–47, Fourier representation of the lattice Gaussian Green function and its low-momentum denominator.
    - title: Sacha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems (A Concrete Mathematical Introduction), complete book PDF
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 8, §§8.2–8.4, printed pp. 385–395, discrete Green kernels and dimension-dependent finiteness.
verification:
  precheck: pending
---

## Statement

For integer $d\ge1$, coupling $\kappa>0$, and $k=(k_1,\ldots,k_d)\in[-\pi,\pi]^d$, put

$$D_d(k):=4\sum_{j=1}^d\sin^2(k_j/2).$$

For $x\in\mathbb Z^d$, define the massless infinite-lattice Green integral when it is finite by

$$G_{d,\kappa}(x):=(2\pi)^{-d}\int_{[-\pi,\pi]^d}\frac{\cos(k\cdot x)}{\kappa D_d(k)}\,d\lambda_d(k),$$

where the integrand is assigned value $0$ at $k=0$, which does not affect the Lebesgue integral. If $d>2$, this integral is absolutely finite for every fixed $x\in\mathbb Z^d$. If $1\le d\le2$, the diagonal integral with $x=0$ is $+\infty$. Thus the dimension threshold concerns this free Gaussian Fourier integral; it does not assert an interacting critical exponent or a continuum scaling limit.

## Statement references

[[def-csm-frontier-gaussian-lattice]]

## Facts & Assumptions

**Given:** An integer $d\ge1$, $\kappa>0$, $x\in\mathbb Z^d$, the cube $[-\pi,\pi]^d$ with Euclidean Lebesgue measure, and $D_d$ as in the Statement.

[F1] For $|u|\le\pi/2$, $2|u|/\pi\le|\sin u|\le|u|$ ([[lem-csm-frontier-sine-comparison]]).

[F2] A box $\prod_{j=1}^d[a_j,b_j]$ has Lebesgue measure $\prod_j(b_j-a_j)$, and Lebesgue measure is complete and countably additive ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F3] The nonnegative Lebesgue integral is monotone and additive for finite sums; increasing nonnegative measurable functions pass to their limit under the integral ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[thm-monotone-convergence-for-the-integral]]).

[F4] A continuous real function is Borel measurable, and a geometric series with ratio in $(0,1)$ has finite sum ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-geometric-series]]).

[F5] $|\cos t|\le1$ for every real $t$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

## Proof

1.1 For $k\ne0$, apply [F1] to $u=k_j/2$ in each coordinate and square the bounds. Summing yields
$$\frac{4}{\pi^2}|k|_2^2\le D_d(k)\le |k|_2^2,$$
where $|k|_2^2=\sum_jk_j^2$. The denominator is positive off the origin, so its reciprocal is continuous on the cube with the origin removed. Extending it by the stated value at the closed singleton $\{0\}$ makes it Borel measurable: each open-set preimage is the union of a Borel subset of that complement and, when applicable, the singleton. The cosine numerator is continuous, so all nonnegative comparison integrands below are measurable by [F4]. [given, F1, F4, algebra]

2.1 For $j\ge0$, let $Q_j=[-2^{-j},2^{-j}]^d\setminus[-2^{-(j+1)},2^{-(j+1)}]^d$. The sets are pairwise disjoint, are contained in $[-1,1]^d$, and by [F2] have measure $(2^d-1)2^{-jd}$. On $Q_j$, $|k|_2\ge\|k\|_\infty>2^{-(j+1)}$, so step 1.1 gives $(\kappa D_d(k))^{-1}\le (\pi^2/(4\kappa))2^{2j+2}$. Hence
$$\int_{Q_j}(\kappa D_d(k))^{-1}\,d\lambda_d(k)\le \frac{\pi^2}{\kappa}(2^d-1)2^{(2-d)j}.$$
For $d>2$, these upper bounds sum to a finite geometric series by [F4]. On the remaining part of $[-\pi,\pi]^d$ outside $[-1,1]^d$, $|k|_2\ge1$, so step 1.1 bounds $(\kappa D_d)^{-1}$ by $\pi^2/(4\kappa)$; that part has finite measure by [F2]. Countable additivity and monotone convergence in [F3] therefore show that $(\kappa D_d)^{-1}$ is integrable on the whole cube. [given, F2, F3, F4, step 1.1, algebra]

2.2 For $1\le d\le2$, step 1.1 gives $(\kappa D_d(k))^{-1}\ge(\kappa|k|_2^2)^{-1}$ on every $Q_j$. There $|k|_2\le\sqrt d\,2^{-j}$, and hence
$$\int_{Q_j}(\kappa D_d(k))^{-1}\,d\lambda_d(k)\ge \frac{1}{\kappa d}(2^d-1)2^{(2-d)j}.$$
The right side is bounded below by the positive constant $(2^d-1)/(\kappa d)$ for all $j\ge0$ when $d\le2$. Since the $Q_j$ are disjoint, finite additivity in [F3] shows that the integral over their first $M+1$ layers is at least $(M+1)(2^d-1)/(\kappa d)$; letting $M\to\infty$ and using monotonicity gives $\int(\kappa D_d)^{-1}=+\infty$. [given, F3, step 1.1, algebra]

3.1 If $d>2$, then $|\cos(k\cdot x)|(\kappa D_d(k))^{-1}\le(\kappa D_d(k))^{-1}$ away from the origin by [F5], and step 2.1 proves absolute integrability; multiplication by the finite constant $(2\pi)^{-d}$ preserves it. If $x=0$ and $d\le2$, the cosine is $1$, so step 2.2 gives the stated infinite diagonal integral. [given, F5, step 2.1, step 2.2, algebra] ∎
