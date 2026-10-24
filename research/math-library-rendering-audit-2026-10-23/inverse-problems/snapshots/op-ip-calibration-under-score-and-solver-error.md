---
id: op-ip-calibration-under-score-and-solver-error
kind: open-problem
title: Coverage error under score, forward-solver, and finite-time error
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  sources_checked:
    date: "2026-10-22"
    scope: "Formulation and unresolved status reviewed in the completed delegated build; source-reading limits and evidence remain recorded in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    by: "gpt-6.1-sol delegated native review; publication authorized by owner"
  precheck: n/a
axiom_use: No choice axiom is used in the finite-dimensional model; the Gaussian laws and numerical procedure are specified inputs.
sources:
  references:
    - title: B. T. Knapik, A. W. van der Vaart, and J. H. van Zanten, Bayesian inverse problems with Gaussian priors, Annals of Statistics 39 (2011)
      url: https://arxiv.org/pdf/1103.2692
      locator: "§§1–4, especially Theorem 4.2: exact Gaussian posterior credible balls and truth/prior-dependent frequentist coverage in the Gaussian sequence inverse model."
    - title: B. Szabó, A. W. van der Vaart, and J. H. van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets, Annals of Statistics 43 (2015)
      url: https://arxiv.org/pdf/1310.4489v5
      locator: "§§1 and 3: Theorem 3.1 gives a constructed truth for which empirical-Bayes credible-set coverage tends to zero along a subsequence; Theorem 3.6 gives coverage over polished-tail truths; Theorem 3.9 controls credible-set radius on self-similar classes."
    - title: Evarist Giné and Richard Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, Cambridge University Press (2016)
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
      locator: "§6.4 and §8.3: honest confidence sets, adaptation constraints, and self-similarity restrictions."
    - title: Dominik Narnhofer, Andreas Habring, Martin Holler, and Thomas Pock, Posterior-Variance-Based Error Quantification for Inverse Problems in Imaging, SIAM Journal on Imaging Sciences 17 (2024)
      url: https://arxiv.org/pdf/2212.12499v2
      locator: "§§1–3, especially Proposition 3.5: finite-sample conformal error-quantile coverage with approximate point estimates and variance estimates; this is not coverage of a Bayesian posterior credible ball."
forward_refs:
  - ex-ip-integrated-score-error-misses-euler-grid-times
---

## Open problem

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

## Open problem references

[Knapik, van der Vaart, and van Zanten, full paper](https://arxiv.org/pdf/1103.2692)

[Szabó, van der Vaart, and van Zanten, full paper](https://arxiv.org/pdf/1310.4489v5)

[Giné and Nickl, full textbook](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

[Narnhofer et al., full paper](https://arxiv.org/pdf/2212.12499v2)

## Status

As of 2026-10-19, the full original minimax question is not resolved by this review. A specific obstruction is now proved: with $d=n=R=\sigma=T=1$, $\beta=1$, $\gamma=1/4$, and zero numerical-operator and integrated score errors, changing the score only at the deterministic Euler grid times can make empirical-ball coverage at truth zero tend to zero along $M=K\to\infty$. The required uniform boundary-margin condition still holds, and the exact credible-ball baseline error is strictly smaller than $3/4$. Every valid bound therefore has a positive limiting additional-error term along this admissible scalar path; zero integrated score error and a refined solver grid do not by themselves imply vanishing additional coverage error.

This is a partial answer, not a solution of the full parameter-dependent minimax problem. The original question asks for a sharp function and the regimes in which it vanishes; it does not require it to vanish along every path on which the listed approximation parameters tend to zero. Constant upper bounds exist because every coverage probability lies in $[0,1]$. The proved scalar obstruction does not determine the optimal bound across all original dimensions, sample sizes, credibility levels, margins and error parameters, or characterize every possible vanishing regime. Those parts of the unchanged original formulation remain unanswered here.

The cited Gaussian inverse-sequence papers address exact credible-set coverage and prior/truth dependence. Narnhofer et al.'s conformal error-quantile coverage concerns a different set and does not supply the requested Bayesian credible-ball perturbation bound. No global novelty claim or formulation-specific solution is inferred from the absence of that joint result in these sources.


## References

[[ex-ip-integrated-score-error-misses-euler-grid-times|A scalar zero-integrated-error obstruction to uniform decay along a refined Euler grid.]]

