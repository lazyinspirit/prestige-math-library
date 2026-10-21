---
id: ex-ip-polynomial-singular-value-posterior-contraction
kind: example
title: "Polynomial singular-value decay and a power Gaussian prior"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-ip-gaussian-sequence-inverse-model
  - def-ip-posterior-contraction-rate
  - thm-ip-conjugate-gaussian-sequence-contraction
  - def-standard-normal-and-normal-laws
  - def-multivariate-normal-law
  - def-separable-space
  - lem-square-summable-sequences-form-a-hilbert-space
  - lem-finite-rank-operators-are-compact
  - lem-nuclear-series-characterizes-trace-norm
  - lem-positive-trace-class-covariance-defines-hilbert-gaussian
  - lem-uncorrelated-jointly-gaussian-blocks-are-independent
  - thm-norm-limit-of-compact-operators-is-compact
  - thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set
  - def-axiom-of-choice
  - def-countable-choice
  - def-real-power
  - thm-real-power-laws
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - thm-natural-logarithm-laws
  - thm-exponential-is-strictly-increasing
  - thm-exponential-limits-and-range
  - cor-exponential-reciprocal-and-positivity
  - thm-geometric-series
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the sequence model and used by the compactness and nuclear trace-class criteria. AC constructs the Hilbert Gaussian prior and is assumed by the conjugate posterior theorem. The dyadic cutoff and moment bounds use no additional choice principle."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "B. T. Knapik, A. W. van der Vaart, and J. H. van Zanten, Bayesian inverse problems with Gaussian priors, The Annals of Statistics 39 (2011), 2626–2657"
      url: "https://arxiv.org/pdf/1103.2692"
      locator: "Assumption 3.1, Theorem 4.1(i), and §7.1 proof, printed pp. 8–9 and 20–21, for polynomial singular-value decay, power prior variances, and the regularity dependence; the exact bound here is proved locally."
    - title: "Iain M. Johnstone, Gaussian estimation: Sequence and wavelet models, 2013 draft"
      url: "https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf"
      locator: "§2.3, equations (2.19)–(2.20) and product-prior discussion (2.16), printed pp. 26–29, for coordinatewise Gaussian posterior mean and variance."
---

## Example

Assume AC and Countable Choice. Fix $\alpha,\beta,p,L>0$. For each $0<\epsilon\le1$, use the centered Gaussian Borel prior on $\ell^2$ with independent coordinates $\theta_j\sim N(0,j^{-1-2\alpha})$, independent of the observation noise. Under the fixed-truth law, observe $Y_j=j^{-p}\theta^\dagger_j+\epsilon\xi_j$ with independent $N(0,1)$ noise and a fixed truth $\theta^\dagger$ in the power ellipsoid $\{\theta\in\ell^2:\sum_{j\ge1}j^{2\beta}(\theta_j)^2\le L^2\}$. Then the posterior contracts in the $\ell^2$ norm at rate $r_\epsilon=\epsilon^{2\min(\alpha,\beta)/(1+2\alpha+2p)}$, meaning that for every $M_\epsilon\to\infty$ the expected posterior mass outside radius $M_\epsilon r_\epsilon$ tends to zero as $\epsilon\downarrow0$.

## Example references

[[def-ip-gaussian-sequence-inverse-model|The sequence inverse experiment fixes the data-coordinate convention used in this example.]]

[[def-ip-posterior-contraction-rate|The rate means expected posterior tail convergence for every diverging multiplier under the fixed-truth data law.]]

[[thm-ip-conjugate-gaussian-sequence-contraction|The exact moment sum has squared bias, posterior-mean sampling variance, and posterior variance terms.]]

[Knapik, van der Vaart, and van Zanten, *Bayesian inverse problems with Gaussian priors*, §§3–4 and §7.1](https://arxiv.org/pdf/1103.2692)

[Johnstone, *Gaussian estimation: Sequence and wavelet models*, §2.3](https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf)

## Facts & Assumptions

**Given:** AC and Countable Choice; $\alpha,\beta,p,L>0$; $0<\epsilon\le1$; the power ellipsoid and Gaussian prior in the Example; and the exact posterior moment formula for the coordinate model.

[A1] AC is the declared assumption for the Gaussian product posterior construction. [[def-axiom-of-choice]]

[A2] Countable Choice is inherited from the compact-SVD sequence model. [[def-countable-choice]]

[F1] The posterior coordinate mean and variance are $\lambda_jY_j/s_j$ and $v_j$, and the expected posterior squared error is the displayed nonnegative sum; posterior tail mass is bounded by that sum divided by the squared radius. [[thm-ip-conjugate-gaussian-sequence-contraction]]

[F2] A rate is established when expected posterior mass outside every diverging multiple tends to zero under the fixed-truth law. [[def-ip-posterior-contraction-rate]]

[F3] The Gaussian sequence inverse model has $\theta^\dagger\in\ell^2$, positive singular values, product-Borel observations, and independent standard-normal noise coordinates. [[def-ip-gaussian-sequence-inverse-model]]

[F4] For positive bases, real powers satisfy $a^x=\exp(x\log a)$ and the ordinary exponent laws. [[def-real-power]], [[thm-real-power-laws]]

[F5] For every $q>0$, the geometric series $\sum_{k\ge0}2^{-2qk}$ converges and equals $(1-2^{-2q})^{-1}$. [[thm-geometric-series]]

[F6] The canonical real square-summable sequence space $H=\ell^2$ is complete, hence a real Hilbert space. Positive-index coordinates are identified with the $\mathbb N_0$-indexed sequence space by the isometry $(x_j)_{j\ge1}\mapsto(x_{n+1})_{n\ge0}$. [[lem-square-summable-sequences-form-a-hilbert-space]] The set of finite-support sequences with rational coordinates is countable and dense: truncate any square-summable sequence so the tail norm is arbitrarily small, then approximate the finitely many retained coordinates by rationals. Hence $H$ is separable. For the diagonal covariance, positivity and self-adjointness follow from $\langle\Gamma x,x\rangle=\sum_j\tau_j^2x_j^2\ge0$ and $\langle\Gamma x,y\rangle=\langle x,\Gamma y\rangle$. Finite-rank truncations converge in operator norm, so $\Gamma$ is compact; its diagonal rank-one expansion has nuclear sum $\sum_j\tau_j^2<\infty$, so it is trace class. [[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]], [[def-separable-space]], [[lem-finite-rank-operators-are-compact]], [[thm-norm-limit-of-compact-operators-is-compact]], [[lem-nuclear-series-characterizes-trace-norm]]

[F7] A positive self-adjoint trace-class covariance on a separable real Hilbert space defines a Borel centered Hilbert-valued Gaussian random element with that covariance. [[lem-positive-trace-class-covariance-defines-hilbert-gaussian]]

[F8] A finite vector is multivariate normal when all its linear projections are normal. [[def-multivariate-normal-law]]

[F9] Finite jointly Gaussian blocks with zero cross-covariance are independent, including for singular covariance matrices. [[lem-uncorrelated-jointly-gaussian-blocks-are-independent]]

[F10] The notation $N(m,\sigma^2)$ denotes the law of a normal variable with mean $m$ and variance $\sigma^2$. [[def-standard-normal-and-normal-laws]]

[F11] For positive bases, $a>1$ makes $x\mapsto a^x$ increasing, $0<a<1$ makes it decreasing, and for $t>0$ the map $a\mapsto a^t$ is increasing while $a\mapsto a^{-t}$ is decreasing, since $a^{-t}=1/a^t$. In particular, for $q>0$, $0<2^{-2q}<1$, because $\log2>\log1=0$ and $\exp$ is positive and increasing. For $0<\epsilon<1$, $\log\epsilon<0$, so $u\ge v$ implies $\epsilon^u\le\epsilon^v$. Finally, for $\eta>0$ and any $M>0$, if $0<\epsilon<\exp(-M/\eta)$ then $\eta\log\epsilon<-M$, so $\epsilon^\eta<\exp(-M)$; the latter tends to zero as $M\to\infty$. These facts use $a^x=\exp(x\log a)$, strict increase of $\log$ and $\exp$, $\log1=0$, positivity of $\exp$, and its limit at $-\infty$. [[def-real-power]], [[def-natural-logarithm]], [[def-real-exponential-function-and-e]], [[thm-natural-logarithm-laws]], [[thm-exponential-is-strictly-increasing]], [[thm-exponential-limits-and-range]], [[cor-exponential-reciprocal-and-positivity]]

**Given:** The hypotheses of the Example and facts [A1], [F1]–[F11].

## Verification

**Given:** The hypotheses of the Example and facts [A1], [A2], [F1]–[F11].

1.1 Let $H=\ell^2$ with standard basis $(e_j)$ and set $\tau_j^2=j^{-1-2\alpha}$. Each dyadic block $2^k\le j<2^{k+1}$ has at most $2^k$ terms, each at most $2^{-k(1+2\alpha)}$, so [F5] gives $\sum_j\tau_j^2\le\sum_{k\ge0}2^{-2\alpha k}<\infty$; here the geometric ratio satisfies $0<2^{-2\alpha}<1$ by [F11]. Define $\Gamma e_j=\tau_j^2e_j$. It is positive and self-adjoint; its truncations $\Gamma_N$ have finite rank, and $\|\Gamma-\Gamma_N\|\le\sup_{j>N}\tau_j^2\le\sum_{j>N}\tau_j^2\to0$, so [F6] makes $\Gamma$ compact. The expansion $\Gamma x=\sum_j\langle x,\tau_j^2e_j\rangle e_j$ has nuclear sum $\sum_j\tau_j^2<\infty$, so [F6] also makes it trace class. By [F7] there is a Borel centered Gaussian random element $G$ in $H$ with covariance $\Gamma$. For each finite coordinate vector, every linear projection is centered normal by [F7], hence it is jointly Gaussian by [F8]; its covariance matrix is diagonal with entries $\tau_j^2$. Repeatedly applying [F9] to the first coordinate and the remaining block proves that the coordinates are independent, and [F10] identifies their laws as $N(0,\tau_j^2)$. Thus the law of $G$ is the stated prior on $\ell^2$. [A1, A2, F4, F5, F6, F7, F8, F9, F10, F11, given, construct, algebra]

1.2 Put $d=1+2\alpha+2p$ and $J=\lceil\epsilon^{-2/d}\rceil$. Since $\epsilon^{-2/d}\ge1$, one has $\epsilon^{-2/d}\le J\le2\epsilon^{-2/d}$. The posterior variance satisfies $v_j\le\min\{j^{-1-2\alpha},\epsilon^2j^{2p}\}$. Therefore $\sum_{j\ge1}v_j\le\epsilon^2\sum_{j\le J}j^{2p}+\sum_{j>J}j^{-1-2\alpha}\le\epsilon^2J^{2p+1}+2J^{-2\alpha}\sum_{k\ge0}2^{-2\alpha k}\le C_{\alpha,p}\epsilon^{4\alpha/d}$. The finite sum has at most $J$ terms each at most $J^{2p}$; for the tail, the block $2^kJ<j\le2^{k+1}J$ has at most $2^{k+1}J$ terms, each at most $(2^kJ)^{-1-2\alpha}$. The conversions between powers of $J$ and $\epsilon$ use the positive-base power order in [F11]. [F3, F4, F5, F11, given, construct, algebra]

2.1 Write $b_j=1-\lambda_j=\epsilon^2/(\epsilon^2+j^{-d})\le\min\{1,\epsilon^2j^d\}$. The ellipsoid condition gives $\sum_jb_j^2(\theta_j^\dagger)^2\le L^2\sup_j b_j^2j^{-2\beta}$. For $j\le J$, this supremum is bounded by $\epsilon^4J^{2d-2\beta}$ when $\beta\le d$, and by $\epsilon^4$ when $\beta>d$. For $j>J$, it is at most $J^{-2\beta}$. The bounds on $J$ in step 1.2 give $\sum_jb_j^2(\theta_j^\dagger)^2\le C_{\alpha,\beta,p,L}\epsilon^{\min\{4\beta/d,4\}}$. This treats the equality case $\beta=d$ in the first branch. The power-order comparisons use $0<\epsilon\le1$ and the positive-base facts in [F11]. [F3, F4, F11, given, step 1.2, algebra]

3.1 Since $v_js_j^2/\epsilon^2=\lambda_j\le1$, one has $v_j^2s_j^2/\epsilon^2=v_j\lambda_j\le v_j$. The exact sum [F1] and steps 1.2–2.1 therefore give $S_\epsilon(\theta^\dagger)\le C_{\alpha,\beta,p,L}\epsilon^{4\min\{\alpha,\beta\}/d}$; here $4\alpha/d<4$. Put $\eta=2\min\{\alpha,\beta\}/d>0$. By [F11], $r_\epsilon=\epsilon^\eta\to0$, as required in the rate definition. Since $0<\epsilon\le1$, [F11] also permits the posterior-moment bound to be written as $S_\epsilon(\theta^\dagger)\le C r_\epsilon^2$. The expected posterior tail outside $M_\epsilon r_\epsilon$ is therefore at most $C/M_\epsilon^2\to0$ for every $M_\epsilon\to\infty$. By [F2], this is the stated contraction rate. [A1, A2, F1, F2, F4, F11, given, step 1.2, step 2.1, algebra] ∎
