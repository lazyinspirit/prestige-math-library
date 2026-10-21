---
id: ex-ip-integrated-score-error-misses-euler-grid-times
kind: example
title: Integrated score error can miss every Euler evaluation
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: No additional choice axiom is used; the laws, finite predictors and
  explicit constructions are supplied.
sources:
  references:
    - title: B. T. Knapik, A. W. van der Vaart, and J. H. van Zanten, Bayesian inverse
        problems with Gaussian priors, Annals of Statistics 39 (2011)
      url: https://arxiv.org/pdf/1103.2692
      locator: "§§1–4, especially Theorem 4.2: exact Gaussian posterior credible balls
        and truth/prior-dependent frequentist coverage in the Gaussian sequence
        inverse model."
    - title: B. Szabó, A. W. van der Vaart, and J. H. van Zanten, Frequentist coverage
        of adaptive nonparametric Bayesian credible sets, Annals of Statistics
        43 (2015)
      url: https://arxiv.org/pdf/1310.4489v5
      locator: "§§1 and 3, especially Theorems 3.6 and 3.9: honest coverage under
        polished-tail restrictions and counterexamples to unrestricted
        coverage."
    - title: Evarist Giné and Richard Nickl, Mathematical Foundations of
        Infinite-Dimensional Statistical Models, Cambridge University Press
        (2016)
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
      locator: "§6.4 and §8.3: honest confidence sets, adaptation constraints, and
        self-similarity restrictions."
    - title: Dominik Narnhofer, Andreas Habring, Martin Holler, and Thomas Pock,
        Posterior-Variance-Based Error Quantification for Inverse Problems in
        Imaging, SIAM Journal on Imaging Sciences 17 (2024)
      url: https://arxiv.org/pdf/2212.12499v2
      locator: "§§1–3, especially Proposition 3.5: finite-sample conformal
        error-quantile coverage with approximate point estimates and variance
        estimates; this is not coverage of a Bayesian posterior credible ball."
---

## Example

In the finite-dimensional Gaussian credible-ball question reproduced below, choose $d=n=1$, $R=1$, $\sigma=1$, $T=1$, $\beta(t)=1$, and $\gamma=1/4$, with arbitrary positive $p,s,a$. Take the numerical operator equal to the true operator, so $\delta_A=0$. For every integer $K\ge1$ there is a jointly Borel finite score field with integrated score error exactly zero, whose Euler terminal law is $N(1,K^{-1})$ for every observation. With $M=K$ independent terminal draws, the resulting empirical ball has frequentist coverage tending to zero at truth $\theta=0$, although the stated uniform boundary-margin condition holds with exponent $\kappa=1$. The exact credible-ball baseline satisfies $\delta^0_{1,1/4}<3/4$. Consequently no bound in that question can have $\Phi\to0$ uniformly over its original score class as $(\delta_A,\varepsilon_s,K^{-1},M^{-1/2})\to(0,0,0,0)$. The original formulation is retained verbatim under Original question.

## Example references

[Knapik, van der Vaart, and van Zanten, full paper](https://arxiv.org/pdf/1103.2692)

[Szabó, van der Vaart, and van Zanten, full paper](https://arxiv.org/pdf/1310.4489v5)

[Giné and Nickl, full textbook](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

[Narnhofer et al., full paper](https://arxiv.org/pdf/2212.12499v2)

## Original question

Fix integers $d,n\ge1$, parameters $p,s,a,R,\sigma>0$, a credibility error $\gamma\in(0,1)$, and a continuous schedule $\beta:[0,T]\to(0,\infty)$ with $T>0$. Let
$$\Theta_s(R)=\left\{\theta\in\mathbb R^d:\sum_{j=1}^d j^{2s}\theta_j^2\le R^2\right\},\qquad A_p=\operatorname{diag}(1^{-p},2^{-p},\ldots,d^{-p}).$$
Observe $Y_i=A_p\theta+\varepsilon_i$, $1\le i\le n$, with independent $\varepsilon_i\sim N(0,\sigma^2 I_d)$. Use the proper Gaussian prior $\Pi_0=N(0,\operatorname{diag}(j^{-1-2a})_{j=1}^d)$, and let $\Pi_n(\cdot\mid Y)$ be its exact posterior under the stated forward operator and noise law. Let $m_n(Y)$ be the posterior mean and let $r_{n,\gamma}(Y)$ be the unique radius for which the Euclidean ball
$$C_{n,\gamma}(Y)=\{u\in\mathbb R^d:\|u-m_n(Y)\|_2\le r_{n,\gamma}(Y)\}$$
has posterior probability $1-\gamma$. Define the exact frequentist coverage $c_{n,\gamma}(\theta)=P_{n,\theta}\{\theta\in C_{n,\gamma}(Y)\}$ and its baseline error $\delta^0_{n,\gamma}=\sup_{\theta\in\Theta_s(R)}|c_{n,\gamma}(\theta)-(1-\gamma)|$.

For a deterministic numerical matrix $\widehat A_n\in\mathbb R^{d\times d}$ with $\delta_A\ge0$ and $\|\widehat A_n-A_p\|_{\mathrm{op}}\le\delta_A$, let $\widehat\Pi_n(\cdot\mid Y)$ be the Gaussian posterior formed with $\widehat A_n$ and the same prior and noise variance. Write $\widehat p_{n,t}^Y$ for the density obtained by applying the forward variance-preserving diffusion $dX_t=-\tfrac12\beta(t)X_t\,dt+\sqrt{\beta(t)}\,dW_t$ to $X_0\sim\widehat\Pi_n(\cdot\mid Y)$, and set $\widehat s_{n,t}^Y=\nabla\log\widehat p_{n,t}^Y$. A jointly Borel learned score field $s_{n,t}^Y$ is required to satisfy
$$\sup_{\theta\in\Theta_s(R)}E_{Y\sim P_{n,\theta}}\left[\frac1T\int_0^T\int_{\mathbb R^d}\|s_{n,t}^Y(x)-\widehat s_{n,t}^Y(x)\|_2^2\widehat p_{n,t}^Y(x)\,dx\,dt\right]\le\varepsilon_s^2.$$
For $h=T/K$, define the reverse-time Euler chain by $Z_0\sim\widehat p_{n,T}^Y$ and, for $k=0,\ldots,K-1$,
$$Z_{k+1}=Z_k+h\left[\tfrac12\beta(T-kh)Z_k+\beta(T-kh)s_{n,T-kh}^Y(Z_k)\right]+\sqrt{h\beta(T-kh)}\,\zeta_k,$$
where the $\zeta_k$ are independent $N(0,I_d)$ vectors independent of $Z_0$ and the observations. Draw $M$ independent copies of this chain conditionally on $Y$ and denote their terminal values by $X^{(1)},\ldots,X^{(M)}$. Let $\bar X=M^{-1}\sum_iX^{(i)}$, let $\widehat r$ be the empirical $1-\gamma$ quantile of $\{\|X^{(i)}-\bar X\|_2\}_{i=1}^M$ (the smallest order statistic whose empirical cumulative mass is at least $1-\gamma$), and put $\widehat C_{n,K,M}(Y)=\{u:\|u-\bar X\|_2\le\widehat r\}$. Suppose the exact credible-ball boundary satisfies the uniform margin condition
$$\sup_{\theta\in\Theta_s(R)}P_{n,\theta}\left(\left|\|\theta-m_n(Y)\|_2-r_{n,\gamma}(Y)\right|\le u\right)\le C_{\mathrm{ac}}u^\kappa\quad(0<u\le u_0)$$
for fixed $C_{\mathrm{ac}},u_0>0$ and $\kappa>0$. Determine whether a minimax-sharp nonasymptotic function $\Phi$ exists uniformly over all such score fields and, if it does, find it as a function of $d,n,p,s,a,R,\sigma,T,\gamma,C_{\mathrm{ac}},u_0,\kappa,\delta_A,\varepsilon_s,K^{-1}$, and $M^{-1/2}$ such that
$$\sup_{\theta\in\Theta_s(R)}\left|P_{n,\theta,\mathrm{sampler}}\{\theta\in\widehat C_{n,K,M}(Y)\}-(1-\gamma)\right|\le\delta^0_{n,\gamma}+\Phi,$$
with matching lower bounds that identify when $\Phi\to0$. The probability includes observation noise and sampler randomness. The target concerns the additional coverage error introduced by the approximate forward operator, learned score, finite reverse discretization, and finite posterior sample; it does not assume that the exact Bayesian credible ball is already calibrated on every truth class.

## Facts & Assumptions

**Given:** The scalar parameter choices in the Example and the original score-error, Euler and empirical-ball definitions reproduced below it.

[A1] Write $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$ and $\Phi(x)=\int_{-\infty}^x\phi(z)\,dz$. A standard Gaussian has density $\phi$, mean zero, variance one and tail probability tending to zero at infinity.

[A2] Let $q=3/4$ and let $r>0$ solve $P\{|G|\le\sqrt2r\}=q$ for a standard Gaussian $G$. Continuity and strict positivity of $\phi$ give existence and uniqueness of $r$.

## Verification

**Given:** The scalar model and [A1]–[A2].

1.1 Completing the square in $e^{-u^2/2}e^{-(Y-u)^2/2}$ gives posterior $N(Y/2,1/2)$, so its exact credible interval is $[Y/2-r,Y/2+r]$. Under truth $\theta\in[-1,1]$, $Y=\theta+G$ and the exact coverage is $c(\theta)=P\{|\theta/2-G/2|\le r\}$. This is a continuous strictly positive function of $\theta$, and is at most one. By compactness of $[-1,1]$ it has a positive minimum $c_*>0$. Therefore $\delta^0_{1,1/4}\le\max\{q-c_*,1-q\}<q$. [A1, A2, algebra]

2.1 Put $h=1/K$ and let $\mathcal G_K=\{1-kh:0\le k<K\}$. Away from this finite set of times, use the exact noised-posterior score. At each $t\in\mathcal G_K$ set $s_t^Y(x)=(1-x)/h-x/2$. This finite-valued jointly Borel field has zero integrated score error: its discrepancy from the exact score is supported on the finite, Lebesgue-null set $\mathcal G_K$ in time. The noised posterior has mean $e^{-t/2}Y/2$ and variance $1-e^{-t}/2$: the integrating-factor solution of the linear forward equation is $e^{-t/2}X_0+e^{-t/2}\int_0^te^{u/2}\,dW_u$, whose independent Gaussian integral has variance $1-e^{-t}$ (use dyadic Brownian-increment sums and pass their Gaussian characteristic functions to the mean-square limit). Its exact score is therefore affine in $x$, so the inner Gaussian error integral is finite at every time. The zero-error conclusion holds for every observation and hence uniformly over all truths. [given, step 1.1, construct, algebra]

2.2 The variable $\theta/2-G/2$ has a density bounded by $2/\sqrt{2\pi}$ uniformly in $\theta$. The event $\bigl||\theta/2-G/2|-r\bigr|\le u$ is contained in two intervals of total length at most $4u$. Thus its probability is at most $8u/\sqrt{2\pi}$. The required margin holds, for example with $\kappa=1$, $u_0=1$ and $C_{\mathrm{ac}}=8/\sqrt{2\pi}$. [A1, step 1.1, algebra]

3.1 At every Euler step the deterministic update becomes $x+h(x/2+s_t^Y(x))=1$. Thus each new state is $1+\sqrt h\,\zeta_k$, independently of its input and of $Y$, and the terminal law is $N(1,h)$. For $M=K$, write the independent terminal draws as $1+K^{-1/2}G_i$. If $V_K=\max_{i\le K}|G_i|$, then the empirical center differs from one by at most $K^{-1/2}V_K$ and every empirical distance to that center is at most $2K^{-1/2}V_K$. Hence the empirical radius has that same upper bound. [A1, step 2.1, construct, algebra]

4.1 The Gaussian density gives $P\{|G|>v\}\le2e^{-v^2/2}$ for $v\ge1$: integrate $x\phi(x)/v$ on $[v,\infty)$ and use $1/(v\sqrt{2\pi})\le1$. The union bound then gives $P\{V_K>K^{1/4}\}\le2K e^{-\sqrt K/2}\to0$. On the complementary event the center is at least $1-K^{-1/4}$ and the radius at most $2K^{-1/4}$, so for all sufficiently large $K$ the empirical interval excludes truth zero. Its coverage therefore tends to zero, and its deviation from $q$ tends to $q>\delta^0_{1,1/4}$. Since both error norms are zero and $K^{-1},M^{-1/2}\to0$, a uniformly vanishing $\Phi$ would contradict this strict gap. [A1, step 1.1, step 2.2, step 3.1, algebra] ∎

## Scope of the resolution

This resolves the requested uniformly vanishing-error guarantee negatively under the original score hypothesis. Time-integrated error does not control pointwise values at a deterministic solver grid. A constant worst-case coverage bound remains possible; no impossibility of all numerical functions is asserted. No Bayesian calibration claim is imported from a conformal theorem.
