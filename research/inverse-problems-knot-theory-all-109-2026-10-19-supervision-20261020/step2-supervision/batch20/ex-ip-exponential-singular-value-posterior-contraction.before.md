---
id: ex-ip-exponential-singular-value-posterior-contraction
kind: example
title: "Exponential singular-value decay and an exponentially weighted truth class"
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
  - thm-natural-logarithm-laws
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
  - thm-exponential-limits-and-range
  - thm-exponential-addition-formula
  - cor-exponential-reciprocal-and-positivity
  - thm-geometric-series
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the sequence model and used by the compactness and nuclear trace-class criteria. AC constructs the Hilbert Gaussian prior and is assumed by the conjugate posterior theorem. The threshold split and geometric bounds use no additional choice principle."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions"
      url: "https://arxiv.org/pdf/1707.01706"
      locator: "§3 and Table 1, PDF pp. 5–6, for exponential singular-value and source-axis regimes in the minimax setting; the posterior rate here is proved locally."
    - title: "Iain M. Johnstone, Gaussian estimation: Sequence and wavelet models, 2013 draft"
      url: "https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf"
      locator: "§2.3, equations (2.19)–(2.20) and product-prior discussion (2.16), printed pp. 26–29, for coordinatewise Gaussian posterior mean and variance."
---

## Example

Assume AC and Countable Choice. Fix $\alpha,\beta,p,L>0$. For each $0<\epsilon<1/e^{\alpha+p}$, use the centered Gaussian Borel prior on $\ell^2$ with independent coordinates $\theta_j\sim N(0,e^{-2\alpha j})$, independent of the observation noise. Under the fixed-truth law, observe $Y_j=e^{-pj}\theta^\dagger_j+\epsilon\xi_j$ with independent $N(0,1)$ noise and a fixed truth $\theta^\dagger$ in the exponential ellipsoid $\{\theta\in\ell^2:\sum_{j\ge1}e^{2\beta j}(\theta_j)^2\le L^2\}$. Then the posterior contracts in the $\ell^2$ norm at rate $r_\epsilon=\epsilon^{\min(\alpha,\beta)/(\alpha+p)}$, meaning that for every $M_\epsilon\to\infty$ the expected posterior mass outside radius $M_\epsilon r_\epsilon$ tends to zero as $\epsilon\downarrow0$.

## Example references

[[def-ip-gaussian-sequence-inverse-model|The sequence inverse experiment uses positive singular values and product-Borel observations.]]

[[def-ip-posterior-contraction-rate|The rate means expected posterior tail convergence for every diverging multiplier under the fixed-truth data law.]]

[[thm-ip-conjugate-gaussian-sequence-contraction|The exact posterior moment formula supplies the bias, sampling variance, and posterior variance terms.]]

[Ding and Mathé, *Minimax rates for statistical inverse problems under general source conditions*, §3 and Table 1](https://arxiv.org/pdf/1707.01706)

[Johnstone, *Gaussian estimation: Sequence and wavelet models*, §2.3](https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf)

## Facts & Assumptions

**Given:** AC and Countable Choice; $\alpha,\beta,p,L>0$; $0<\epsilon<1/e^{\alpha+p}$; the exponential ellipsoid and independent Gaussian prior in the Example; and the exact posterior moment formula for the coordinate model.

[A1] AC is the declared assumption for the Gaussian product posterior construction. [[def-axiom-of-choice]]

[A2] Countable Choice is inherited from the compact-SVD sequence model. [[def-countable-choice]]

[F1] The posterior coordinate mean and variance are $\lambda_jY_j/s_j$ and $v_j$, and the expected posterior squared error is the displayed nonnegative sum; posterior tail mass is bounded by that sum divided by the squared radius. [[thm-ip-conjugate-gaussian-sequence-contraction]]

[F2] A rate is established when expected posterior mass outside every diverging multiple tends to zero under the fixed-truth law. [[def-ip-posterior-contraction-rate]]

[F3] The Gaussian sequence inverse model has $\theta^\dagger\in\ell^2$, positive singular values, product-Borel observations, and independent standard-normal noise coordinates. [[def-ip-gaussian-sequence-inverse-model]]

[F4] For positive bases, real powers obey $a^x=\exp(x\log a)$ and the exponent laws; the natural logarithm is the inverse of the exponential and $\log 1=0$, so $\log e=1$ and $\exp(0)=1$. [[def-real-power]], [[thm-real-power-laws]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]]

[F5] The exponential is positive, strictly increasing, tends to infinity at infinity, and obeys $\exp(x+y)=\exp(x)\exp(y)$. [[def-real-exponential-function-and-e]], [[thm-exponential-is-strictly-increasing]], [[thm-exponential-limits-and-range]], [[thm-exponential-addition-formula]], [[cor-exponential-reciprocal-and-positivity]]

[F6] If $0<r<1$, the geometric series $\sum_{k\ge0}r^k$ converges to $(1-r)^{-1}$. [[thm-geometric-series]]

[F7] The standard coordinate vectors make $H=\ell^2$ a real Hilbert space. The set of finite-support sequences with rational coordinates is countable and dense: truncate any square-summable sequence so the tail norm is arbitrarily small, then approximate the finitely many retained coordinates by rationals. Hence $H$ is separable. For the diagonal covariance, positivity and self-adjointness follow from $\langle\Gamma x,x\rangle=\sum_j\tau_j^2x_j^2\ge0$ and $\langle\Gamma x,y\rangle=\langle x,\Gamma y\rangle$. Finite-rank truncations converge in operator norm, so $\Gamma$ is compact; its diagonal rank-one expansion has nuclear sum $\sum_j\tau_j^2<\infty$, so it is trace class. [[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]], [[def-separable-space]], [[lem-finite-rank-operators-are-compact]], [[thm-norm-limit-of-compact-operators-is-compact]], [[lem-nuclear-series-characterizes-trace-norm]]

[F8] A positive self-adjoint trace-class covariance on a separable real Hilbert space defines a Borel centered Hilbert-valued Gaussian random element with that covariance. [[lem-positive-trace-class-covariance-defines-hilbert-gaussian]]

[F9] A finite vector is multivariate normal when all its linear projections are normal. [[def-multivariate-normal-law]]

[F10] Finite jointly Gaussian blocks with zero cross-covariance are independent, including for singular covariance matrices. [[lem-uncorrelated-jointly-gaussian-blocks-are-independent]]

[F11] The notation $N(m,\sigma^2)$ denotes the law of a normal variable with mean $m$ and variance $\sigma^2$. [[def-standard-normal-and-normal-laws]]

[F12] For positive bases, $a>1$ makes $x\mapsto a^x$ increasing, $0<a<1$ makes it decreasing, and for $t>0$ the map $a\mapsto a^t$ is increasing while $a\mapsto a^{-t}$ is decreasing, since $a^{-t}=1/a^t$. For $0<\epsilon<1$, $\log\epsilon<0$, so $u\ge v$ implies $\epsilon^u\le\epsilon^v$. Finally, for $\eta>0$ and any $M>0$, if $0<\epsilon<\exp(-M/\eta)$ then $\eta\log\epsilon<-M$, so $\epsilon^\eta<\exp(-M)$; the latter tends to zero as $M\to\infty$. These follow from [F4] and [F5]: $a^x=\exp(x\log a)$, $\log$ and $\exp$ are strictly increasing, $\log1=0$, and $\exp(x)\to0$ as $x\to-\infty$. [[def-real-power]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-exponential-is-strictly-increasing]], [[thm-exponential-limits-and-range]], [[cor-exponential-reciprocal-and-positivity]]

**Given:** The hypotheses of the Example and facts [A1], [F1]–[F12].

## Verification

**Given:** The hypotheses of the Example and facts [A1], [A2], [F1]–[F12].

1.1 Let $H=\ell^2$ with standard basis $(e_j)$ and set $\tau_j^2=e^{-2\alpha j}$. Since $e=\exp(1)$, real-power definition and logarithm inversion give $e^{-2\alpha}=\exp(-2\alpha)$; strict increase, positivity and $\exp(0)=1$ imply $0<e^{-2\alpha}<1$. By the exponent laws, $\tau_j^2=(e^{-2\alpha})^j$, so [F6] gives $\sum_j\tau_j^2<\infty$. Define $\Gamma e_j=\tau_j^2e_j$. It is positive and self-adjoint; its truncations $\Gamma_N$ have finite rank, and $\|\Gamma-\Gamma_N\|\le\sup_{j>N}\tau_j^2\le\sum_{j>N}\tau_j^2\to0$, so [F7] makes $\Gamma$ compact. The expansion $\Gamma x=\sum_j\langle x,\tau_j^2e_j\rangle e_j$ has nuclear sum $\sum_j\tau_j^2<\infty$, so [F7] also makes it trace class. By [F8] there is a Borel centered Gaussian random element $G$ in $H$ with covariance $\Gamma$. For each finite coordinate vector, every linear projection is centered normal by [F8], hence it is jointly Gaussian by [F9]; its covariance matrix is diagonal with entries $\tau_j^2$. Repeatedly applying [F10] to the first coordinate and the remaining block proves that the coordinates are independent, and [F11] identifies their laws as $N(0,\tau_j^2)$. Thus the law of $G$ is the stated prior on $\ell^2$. [A1, A2, F4, F5, F6, F7, F8, F9, F10, F11, given, construct, algebra]

1.2 Put $q=\alpha+p$. For sufficiently small $\epsilon$, let $J$ be the largest positive integer with $e^{qJ}\le1/\epsilon$. Since $q>0$, the exponential is increasing and unbounded, so $J$ exists and $J\to\infty$ as $\epsilon\downarrow0$. Maximality gives $e^{qJ}\le1/\epsilon<e^q e^{qJ}$, hence $e^{-q}/\epsilon<e^{qJ}\le1/\epsilon$. The posterior variance satisfies $v_j\le\min\{e^{-2\alpha j},\epsilon^2e^{2pj}\}$. Reversing the finite geometric sum for $j\le J$ and summing the tail gives $\sum_{j\ge1}v_j\le C_{\alpha,p}(\epsilon^2e^{2pJ}+e^{-2\alpha J})\le C'_{\alpha,p}\epsilon^{2\alpha/q}$. For the first term, $e^{2pJ}=(e^{qJ})^{2p/q}\le\epsilon^{-2p/q}$ by positive-power order; for the second, $e^{qJ}>e^{-q}/\epsilon$ gives $e^{-2\alpha J}<e^{2\alpha}\epsilon^{2\alpha/q}$ by exponent order. [F4, F5, F6, F12, given, construct, algebra]

2.1 Write $b_j=1-\lambda_j=\epsilon^2/(\epsilon^2+e^{-2qj})\le\min\{1,\epsilon^2e^{2qj}\}$. The truth ellipsoid implies $\sum_jb_j^2(\theta_j^\dagger)^2\le L^2\sup_j b_j^2e^{-2\beta j}$. For $j\le J$, this is bounded coordinatewise by $\epsilon^4e^{(4q-2\beta)j}$; its maximum is at $J$ if $\beta\le2q$, and then is at most $\epsilon^4(e^{qJ})^{4-2\beta/q}\le\epsilon^{2\beta/q}$. If $\beta>2q$, the exponent is negative and the maximum is at $j=1$, bounded by a constant times $\epsilon^4$. For $j>J$, the source weight gives $b_j^2e^{-2\beta j}\le e^{-2\beta J}=(e^{qJ})^{-2\beta/q}\le e^{2\beta}\epsilon^{2\beta/q}$. Thus the squared-bias term is at most $C_{\alpha,\beta,p,L}\epsilon^{\min\{2\beta/q,4\}}$. The exponent-order comparisons use $e>1$, [F12], and $0<\epsilon<1$. [F3, F4, F5, F12, given, step 1.2, algebra]

3.1 Since $v_js_j^2/\epsilon^2=\lambda_j\le1$, one has $v_j^2s_j^2/\epsilon^2=v_j\lambda_j\le v_j$. Combining [F1] with steps 1.2–2.1 gives $S_\epsilon(\theta^\dagger)\le C_{\alpha,\beta,p,L}\epsilon^{2\min\{\alpha,\beta\}/q}$. To see the exponent comparison, put $\delta=\min\{2\beta/q,4\}$. If $\beta\le\alpha$, then $\delta=2\beta/q\le2\alpha/q$. If $\beta>\alpha$, then $\delta>2\alpha/q$, because $2\beta/q>2\alpha/q$ and $4>2\alpha/q$ (as $\alpha<q$). Since $0<\epsilon<e^{-q}<1$, [F12] shows that the sum of the bias bound $O(\epsilon^\delta)$ and variance bound $O(\epsilon^{2\alpha/q})$ is $O(\epsilon^{2\min\{\alpha,\beta\}/q})$. Set $\eta=\min\{\alpha,\beta\}/q>0$. Then [F12] gives $r_\epsilon=\epsilon^\eta\to0$ as $\epsilon\downarrow0$. [F1] bounds the expected posterior tail outside $M_\epsilon r_\epsilon$ by $C/M_\epsilon^2\to0$ for every $M_\epsilon\to\infty$. By [F2], this is the claimed posterior contraction rate. [A1, A2, F1, F2, F4, F12, given, step 1.2, step 2.1, algebra] ∎
