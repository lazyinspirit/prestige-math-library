---
id: thm-likelihood-ratio-gradient-identity-on-fixed-support
kind: theorem
title: "The likelihood-ratio score gradient is unbiased on fixed support"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-simulation-gradient-objective-and-payoff-oracle
  - def-axiom-of-choice
  - def-score-and-fisher-information
  - def-likelihood-density
  - thm-dominated-convergence
  - thm-ftc-second-part
  - thm-chain-rule-for-total-derivatives
  - def-moments-variance-and-covariance
  - lem-variance-and-covariance-identities-for-random-variables
provenance:
  statement: literature-derived
  proof: ai-altered
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Paul Glasserman, Monte Carlo Methods in Financial Engineering, §7.3.1"
      url: "https://ai.stanford.edu/~bangpeng/download/book/Monte_Carlo_Methods_in_Financial_Engineering__--_by_Paul_Glasserman.pdf"
    - title: "Michael C. Fu, Stochastic Gradient Estimation, preprint of Handbook of Simulation Optimization, §3.1"
      url: "https://drum.lib.umd.edu/bitstreams/87a3c71b-9eca-4d5d-9287-e1e432f68a69/download"
---

## Statement

Assume the Axiom of Choice. Let $\Theta\subseteq\mathbb R^d$ be open, fix $\theta_0\in\Theta$, let $\nu$ be a fixed sigma-finite positive measure on a measurable space $(\mathcal X,\mathcal A)$, and let $p_\eta$ be normalized densities of probability laws $P_\eta$ relative to $\nu$. Suppose there are an open ball $U\subseteq\Theta$ about $\theta_0$, a measurable set $S\in\mathcal A$, and one $\nu$-null set $N$ such that, for every $\eta\in U$ and every $x\notin N$, $p_\eta(x)>0$ exactly when $x\in S$, and $\eta\mapsto p_\eta(x)$ is continuously differentiable. Assume the coordinate derivatives are measurable, let $H:\mathcal X\to\mathbb R$ be measurable, and suppose $\int |H|p_\eta\,d\nu<\infty$ for each $\eta\in U$. Finally assume there is $G\in L^1(\nu)$ such that
$|H(x)|\sup_{\eta\in U}\|\nabla_\eta p_\eta(x)\|_2\le G(x)\quad\text{for }\nu\text{-almost every }x.$
If also
$\mathbb E_{\theta_0}\!\left[H(X)^2\|S_{\theta_0}(X)\|_2^2\right]<\infty,$
where $S_{\theta_0}=\nabla_\theta\log p_{\theta_0}$ is the score of [[def-score-and-fisher-information]], then $J(\theta)=\mathbb E_\theta H(X)$ is Fréchet differentiable at $\theta_0$ and
$\nabla J(\theta_0)=\mathbb E_{\theta_0}[H(X)S_{\theta_0}(X)].$
The score estimator is unbiased and has finite coordinate variances. Fixed support is essential to this formula without a boundary correction.

## Facts & Assumptions

**Given:** AC, the fixed dominating measure and common support, the normalized density family, payoff $H$, differentiability and measurable derivatives, the common integrable envelope, and the weighted second-moment hypothesis.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. AC is assumed by the canonical family of score representatives in [F1].

[F1] [[def-score-and-fisher-information]]: for a dominated differentiable density family, on $\{p_\theta>0\}$ the score is $S_\theta=\nabla_\theta\log p_\theta$; it is set to zero where $p_\theta=0$. The definition does not itself give a common exceptional null set, which is imposed separately in the Statement.

[F2] [[def-likelihood-density]]: each selected density $p_\theta$ represents the law $P_\theta$ relative to the fixed dominating measure.

[F3] [[thm-chain-rule-for-total-derivatives]]: differentiating $t\mapsto p_{\theta_0+th}(x)$ gives $\nabla_\theta p_{\theta_0+th}(x)\cdot h$.

[F4] [[thm-ftc-second-part]]: a continuously differentiable scalar function on a compact interval equals its initial value plus the integral of its derivative.

[F5] [[thm-dominated-convergence]]: almost-everywhere convergence dominated by one $L^1(\nu)$ function permits passage of the limit through the $\nu$-integral.

[F6] [[def-moments-variance-and-covariance]] and [[lem-variance-and-covariance-identities-for-random-variables]]: a square-integrable real random variable has variance $\mathbb E[X^2]-(\mathbb E X)^2\le\mathbb E[X^2]$.

## Proof

1.1 Fix $h\in\mathbb R^d$ with $\theta_0+h\in U$. For $x\notin N$, [F3] and [F4] applied to $t\mapsto p_{\theta_0+th}(x)$ give the line-integral formula for its density increment. With $R_h(x):=H(x)\bigl(p_{\theta_0+h}(x)-p_{\theta_0}(x)-\nabla_\theta p_{\theta_0}(x)\cdot h\bigr),$ the integral identity gives $\frac{|R_h(x)|}{\|h\|_2}\le |H(x)|\sup_{0\le t\le1}\|\nabla p_{\theta_0+th}(x)-\nabla p_{\theta_0}(x)\|_2.$ [given, F3, F4]

2.1 The supremum on the right is measurable because the gradient is continuous in $t$ and the supremum over $[0,1]$ equals the supremum over rational $t$. It is bounded by $2G(x)$ by the envelope in the Statement and tends to zero for $\nu$-almost every $x$ as $h\to0$. Thus [F5] shows $\int |R_h|\,d\nu/\|h\|_2\to0$ along every sequence $h\to0$. Since $J(\eta)=\int Hp_\eta\,d\nu$, this is precisely the Fréchet derivative $\nabla J(\theta_0)=\int_{\mathcal X}H(x)\nabla p_{\theta_0}(x)\,d\nu(x).$ [given, F5, step 1.1, algebra]

3.1 On the common support $S$, $p_{\theta_0}>0$ and [F1] gives $\nabla p_{\theta_0}=p_{\theta_0}S_{\theta_0}$. Off $S$, the density is identically zero on $U$, so its derivative is zero almost everywhere. Substitution in step 2.1 and the density formula [F2] yield $\nabla J(\theta_0)=\int H(x)S_{\theta_0}(x)p_{\theta_0}(x)\,d\nu(x)=\mathbb E_{\theta_0}[H(X)S_{\theta_0}(X)].$ [A1, F1, F2, step 2.1, algebra]

4.1 The weighted second-moment assumption makes each coordinate $H(X)S_{\theta_0,j}(X)$ square-integrable. [F6] gives finite variance, while step 3.1 gives its expectation as the corresponding objective derivative. [given, F6, step 3.1] ∎
