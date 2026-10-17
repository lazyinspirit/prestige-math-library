---
id: thm-likelihood-ratio-gradient-identity-on-fixed-support
kind: theorem
title: "The likelihood-ratio score gradient is unbiased on fixed support"
status: published
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
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-continuous-implies-integrable
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-integration-against-a-density
  - thm-linearity-of-the-lebesgue-integral-on-l-one
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

Gradients are Euclidean column vectors, and vector expectations are taken coordinatewise.

Assume the Axiom of Choice. Let $\Theta\subseteq\mathbb R^d$ be open, fix $\theta_0\in\Theta$, let $\nu$ be a fixed sigma-finite positive measure on a measurable space $(\mathcal X,\mathcal A)$, and let $p_\eta$ be normalized densities of probability laws $P_\eta$ relative to $\nu$. Suppose there are an open ball $U\subseteq\Theta$ about $\theta_0$, a measurable set $S\in\mathcal A$, and one $\nu$-null set $N$ such that, for every $\eta\in U$ and every $x\notin N$, $p_\eta(x)>0$ exactly when $x\in S$, and $\eta\mapsto p_\eta(x)$ is continuously differentiable. Assume the coordinate derivatives are measurable, let $H:\mathcal X\to\mathbb R$ be measurable, and suppose $\int |H|p_\eta\,d\nu<\infty$ for each $\eta\in U$. Finally assume there is $G\in L^1(\nu)$ such that
$|H(x)|\sup_{\eta\in U}\|\nabla_\eta p_\eta(x)\|_2\le G(x)\quad\text{for }\nu\text{-almost every }x.$
If also
$\mathbb E_{\theta_0}\!\left[H(X)^2\|S_{\theta_0}(X)\|_2^2\right]<\infty,$
where $S_{\theta_0}=\nabla_\theta\log p_{\theta_0}$ is the score of [[def-score-and-fisher-information]], then $J(\theta)=\mathbb E_\theta H(X)$ is Fréchet differentiable at $\theta_0$ and
$\nabla J(\theta_0)=\mathbb E_{\theta_0}[H(X)S_{\theta_0}(X)].$
The score estimator is unbiased and has finite coordinate variances. The fixed-support hypothesis is a sufficient condition here.

## Facts & Assumptions

**Given:** AC, the fixed dominating measure and common support, the normalized density family, payoff $H$, differentiability and measurable derivatives, the common integrable envelope, and the weighted second-moment hypothesis.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. AC is assumed by the canonical family of score representatives in [F1].

[F1] [[def-score-and-fisher-information]]: for a dominated differentiable density family, on $\{p_\theta>0\}$ the score is $S_\theta=\nabla_\theta\log p_\theta$; it is set to zero where $p_\theta=0$. The definition does not itself give a common exceptional null set, which is imposed separately in the Statement.

[F2] [[def-likelihood-density]]: each selected density $p_\theta$ represents the law $P_\theta$ relative to the fixed dominating measure.

[F3] [[thm-chain-rule-for-total-derivatives]]: differentiating $t\mapsto p_{\theta_0+th}(x)$ gives $D_\theta p_{\theta_0+th}(x)[h]$. Gradients are column vectors represented using the Euclidean inner product of [[def-euclidean-inner-product]], so this is $\langle\nabla_\theta p_{\theta_0+th}(x),h\rangle$.

[F4] [[thm-ftc-second-part]] and [[thm-continuous-implies-integrable]]: a continuously differentiable scalar function on a compact interval has an integrable derivative and equals its initial value plus the integral of that derivative.

[F5] [[thm-dominated-convergence]]: almost-everywhere convergence dominated by one $L^1(\nu)$ function permits passage of the limit through the $\nu$-integral.

[F6] [[def-moments-variance-and-covariance]] and [[lem-variance-and-covariance-identities-for-random-variables]]: a square-integrable real random variable has variance $\mathbb E[X^2]-(\mathbb E X)^2\le\mathbb E[X^2]$.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$.

[F8] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] and [[thm-integration-against-a-density]]: expectation of an integrable signed random variable is the difference of the expectations of its positive and negative parts, and each nonnegative part integrates against its density.

[F9] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the Lebesgue integral is linear on integrable functions, including each coordinate of an integrable vector-valued integrand.

## Proof

1.1 Fix nonzero $h\in\mathbb R^d$ with $\theta_0+h\in U$. For $x\notin N$, [F3] and [F4] applied to $t\mapsto p_{\theta_0+th}(x)$ give $p_{\theta_0+h}(x)-p_{\theta_0}(x)=\int_0^1\langle\nabla p_{\theta_0+th}(x),h\rangle\,dt.$ With $R_h(x):=H(x)\bigl(p_{\theta_0+h}(x)-p_{\theta_0}(x)-\langle\nabla_\theta p_{\theta_0}(x),h\rangle\bigr)$, subtracting the derivative at $t=0$ and applying [F7] gives $\frac{|R_h(x)|}{\|h\|_2}\le |H(x)|\sup_{0\le t\le1}\|\nabla p_{\theta_0+th}(x)-\nabla p_{\theta_0}(x)\|_2.$ [given, F3, F4, F7]

2.1 The right side of step 1.1 has a measurable version: outside $N$, continuity in $t$ makes its supremum equal to the supremum over rational $t\in[0,1]$; set it to zero on $N$. This weighted supremum is bounded almost everywhere by $2G(x)$ by the envelope in the Statement and tends to zero for $\nu$-almost every $x$ as $h\to0$. Thus [F5] shows $\int |R_h|\,d\nu/\|h\|_2\to0$ along every sequence of nonzero $h\to0$. The envelope makes each coordinate of $H\nabla p_{\theta_0}$ integrable, and the hypotheses make $Hp_\eta$ integrable. By [F9], for $h\ne0$, $J(\theta_0+h)-J(\theta_0)-\left\langle\int_{\mathcal X}H\nabla p_{\theta_0}\,d\nu,h\right\rangle=\int_{\mathcal X}R_h\,d\nu$. Therefore the Fréchet derivative is $\nabla J(\theta_0)=\int_{\mathcal X}H(x)\nabla p_{\theta_0}(x)\,d\nu(x)$. [given, F5, F8, F9, step 1.1, algebra]

3.1 On the common support $S$, $p_{\theta_0}>0$ and [F1] gives $\nabla p_{\theta_0}=p_{\theta_0}S_{\theta_0}$. Off $S$, the density is identically zero on $U$, so its derivative is zero almost everywhere. For each coordinate put $\varphi_j(x):=H(x)S_{\theta_0,j}(x)$. The weighted second-moment hypothesis makes $\varphi_j$ square-integrable under $P_{\theta_0}$, hence integrable since $2|\varphi_j|\le1+\varphi_j^2$ on a probability space. Its positive and negative parts are measurable and nonnegative; by [F2] and [F8], $\mathbb E_{\theta_0}[\varphi_j]=\mathbb E_{\theta_0}[\varphi_j^+]-\mathbb E_{\theta_0}[\varphi_j^-]=\int\varphi_j^+p_{\theta_0}\,d\nu-\int\varphi_j^-p_{\theta_0}\,d\nu=\int\varphi_jp_{\theta_0}\,d\nu.$ This explicitly extends the nonnegative density rule to the signed integrand. Substitution in step 2.1 therefore gives $\nabla J(\theta_0)=\mathbb E_{\theta_0}[H(X)S_{\theta_0}(X)].$ [A1, F1, F2, F8, step 2.1, algebra]

4.1 The weighted second-moment assumption makes each coordinate $H(X)S_{\theta_0,j}(X)$ square-integrable. [F6] gives finite variance, while step 3.1 gives its expectation as the corresponding objective derivative. [given, F6, step 3.1] ∎

