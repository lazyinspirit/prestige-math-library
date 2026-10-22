---
id: op-ip-honest-coverage-over-ill-posed-truth-classes
kind: open-problem
title: Exact adaptive credible coverage in mildly ill-posed Gaussian sequence models
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-credible-set-and-frequency-coverage
  - def-ip-posterior-contraction-rate
  - def-adaptive-empirical-bayes-gaussian-sequence-procedure
  - lem-gaussian-sequence-empirical-bayes-posterior-formula
  - def-countable-choice
  - def-axiom-of-choice
  - def-gaussian-sequence-hyperrectangle-class
  - def-polished-tail-class-for-gaussian-sequence
  - thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails
  - cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
axiom_use: Countable Choice is inherited from the sequence inverse model; AC supplies the countable Gaussian product prior and posterior construction. No stronger choice principle is asserted.
sources:
  references:
    - title: "Botond Szabó, A. W. van der Vaart, and J. H. van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets, Annals of Statistics 43(4) (2015)"
      url: https://arxiv.org/pdf/1310.4489v5
      locator: "§2, mildly ill-posed Gaussian sequence model and empirical-Bayes posterior; §3, Theorems 3.1, 3.6 and 3.13; §§5, 7 and 9, proofs of the cited coverage, radius and sparse-gap results."
    - title: "Judith Rousseau and Botond Szabó, Asymptotic frequentist coverage properties of Bayesian credible sets for sieve priors"
      url: https://arxiv.org/pdf/1609.05067
      locator: "§1 and §2, limitations of adaptive honest confidence sets and general polished-tail assumptions for sieve-posterior credible balls."
    - title: "Kolyan Ray, Adaptive Bernstein–von Mises theorems in Gaussian white noise"
      url: https://arxiv.org/pdf/1407.3397
      locator: "§§2.1 and 3.1, direct white-noise empirical-Bayes posterior; §4.1, exact coverage and diameter of full-parameter confidence sets under self-similarity."
    - title: "B. T. Knapik, B. T. Szabó, A. W. van der Vaart, and J. H. van Zanten, Bayes procedures for adaptive inference in inverse problems for the white noise model"
      url: https://arxiv.org/pdf/1209.3628
      locator: "§§1–2.3, mildly ill-posed inverse sequence model and adaptive global ℓ² contraction rates; §2.3 distinguishes global-parameter results from linear-functional questions."
    - title: "Evarist Giné and Richard Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, Cambridge University Press (2016)"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
      locator: "§6.4 and §8.3, confidence-set coverage, adaptive size limitations, and self-similarity restrictions."
---

## Open problem

Assume AC and Countable Choice. Fix $p>0$, $C\ge1$, $0<\beta_-<\beta_+<A<\infty$, $R\ge1$, $L_0\ge1$, an integer $N_0\ge1$, $\rho\ge2$, $m\in(0,R]$, and $0<\gamma<1$. Let a known positive singular-value sequence satisfy $C^{-2}i^{-2p}\le\kappa_i^2\le C^2i^{-2p}$, and observe $X_i=\kappa_i\theta_i+n^{-1/2}\xi_i$ for $i\ge1$, where the fixed truth $\theta=(\theta_i)\in\ell^2(\mathbb N,\mathbb R)$ and the $\xi_i$ are independent $N(0,1)$ variables. For $\alpha>0$, use the product prior $\Pi_\alpha=\bigotimes_{i\ge1}N(0,i^{-1-2\alpha})$ and its product Gaussian posterior with coordinate mean $n\kappa_iX_i/(i^{1+2\alpha}+n\kappa_i^2)$ and variance $(i^{1+2\alpha}+n\kappa_i^2)^{-1}$. Select $\widehat\alpha_n$ as a Borel global maximizer over $[0,A]$ of the marginal log-likelihood score
$$\ell_n(\alpha;X)=-\frac12\sum_{i\ge1}\left[\log\left(1+\frac{n\kappa_i^2}{i^{1+2\alpha}}\right)-\frac{n^2\kappa_i^2X_i^2}{i^{1+2\alpha}+n\kappa_i^2}\right],$$
assuming the score series is finite on a Borel data domain of probability one for the truths below and is upper semicontinuous in $\alpha$ there. The $\widehat\alpha_n=0$ branch uses the whole space $\ell^2$ and asserts no posterior probability on $\ell^2$.

For $\theta\in\ell^2$, write $\|\theta\|_2=(\sum_{i\ge1}\theta_i^2)^{1/2}$. For $B\subseteq\ell^2$, define $\operatorname{diam}_{\ell^2}(B)=\sup_{u,v\in B}\|u-v\|_2$, with $\operatorname{diam}_{\ell^2}(\varnothing)=0$.

For $\beta\in[\beta_-,\beta_+]$, let $\Theta_\beta(R)=\{\theta\in\ell^2:\sum_{i\ge1}i^{2\beta}\theta_i^2\le R^2\}$ and let $\Theta_{\mathrm{pt}}(L_0,N_0,\rho)$ consist of those $\theta\in\ell^2$ satisfying $\sum_{i=N}^{\infty}\theta_i^2\le L_0\sum_{i=N}^{\lfloor\rho N\rfloor}\theta_i^2$ for every integer $N\ge N_0$. Put $\mathcal G_\beta=\Theta_\beta(R)\cap\Theta_{\mathrm{pt}}(L_0,N_0,\rho)\cap\{\theta:\theta_1=0,\ \|\theta\|_2\ge m\}$ and assume the fixed constants make each $\mathcal G_\beta$ nonempty. Does there exist a single graph-measurable data-indexed set rule $C_{n,\gamma}(X)\subseteq\ell^2$, depending only on the known model and class constants and not on $\theta$ or $\beta$, such that on $\widehat\alpha_n>0$ it has posterior mass $\Pi_{\widehat\alpha_n}(C_{n,\gamma}(X)\mid X)\ge1-\gamma$, its uniform frequentist coverage satisfies
$$\sup_{\beta\in[\beta_-,\beta_+]}\sup_{\theta\in\mathcal G_\beta}\left|P_\theta^{(n)}\{\theta\in C_{n,\gamma}(X)\}-(1-\gamma)\right|\longrightarrow0,$$
and its $\ell^2$-diameter has the no-log rate $n^{-\beta/(1+2\beta+2p)}$ uniformly in the following sense: for every $\eta>0$ there is $K_\eta<\infty$ such that
$$\limsup_{n\to\infty}\sup_{\beta\in[\beta_-,\beta_+]}\sup_{\theta\in\mathcal G_\beta}P_\theta^{(n)}\left\{\operatorname{diam}_{\ell^2}(C_{n,\gamma}(X))>K_\eta n^{-\beta/(1+2\beta+2p)}\right\}\le\eta?$$

## Open problem references

[[def-ip-credible-set-and-frequency-coverage|Credibility requires a graph-measurable set rule with posterior mass at least the level, while coverage is fixed-truth sampling probability.]]

[[def-ip-posterior-contraction-rate|Expected posterior tail mass outside diverging multiples of a radius defines the contraction-rate convention used here.]]

[[def-axiom-of-choice|Every family of nonempty sets has a choice function.]]

[[def-countable-choice|Every countable family of nonempty sets has a choice function.]]

[[def-adaptive-empirical-bayes-gaussian-sequence-procedure|The procedure fixes the mildly ill-posed sequence model, prior family, marginal-likelihood selector, and zero-selector convention.]]

[[lem-gaussian-sequence-empirical-bayes-posterior-formula|For fixed positive $\alpha$, the product prior is supported on $\ell^2$ and the posterior has the stated coordinate Gaussian laws almost surely.]]

[[def-gaussian-sequence-hyperrectangle-class|The parameter space is the real square-summable sequence space, and the hyperrectangle uses a coordinatewise weighted bound.]]

[[def-polished-tail-class-for-gaussian-sequence|The polished-tail condition controls each tail by its finite block energy.]]

[[thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails|The inverse-sequence polished-tail result proves coverage tending to one after radius inflation under its stated first-coordinate and selector hypotheses.]]

[[cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage|The sparse-gap construction gives subsequence undercoverage in a coordinatewise hyperrectangle under its exact inflation bound; its truth lies outside the polished-tail Sobolev class used here.]]

[Szabó, van der Vaart, and van Zanten, §§2–3, 5, and 9](https://arxiv.org/pdf/1310.4489v5)

[Rousseau and Szabó, §§1–2](https://arxiv.org/pdf/1609.05067)

[Ray, §§2.1, 3.1, and 4.1](https://arxiv.org/pdf/1407.3397)

[Knapik, Szabó, van der Vaart, and van Zanten, §§1–2.3](https://arxiv.org/pdf/1209.3628)

[Szabó, van der Vaart, and van Zanten, Theorem 3.13 and §7: Sobolev radius bound used in the status correction](https://arxiv.org/pdf/1310.4489v5)

[Giné and Nickl, §§6.4 and 8.3](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

## Status

Status corrected on 2026-10-22: the unrestricted set-rule question above has an affirmative construction and must not be treated as unresolved. Every allowed truth lies in $H=\{u\in\ell^2:u_1=0\}$, whereas every positive-selector posterior gives $H$ mass zero. Starting with a sufficiently inflated empirical-Bayes ball, retain the ball when $\sqrt nX_1\le\Phi^{-1}(1-\gamma)$ and remove $H$ otherwise, where $\Phi$ is the standard normal distribution function. Keep the whole-space zero-selector branch. Posterior credibility is preserved, diameter cannot increase, and the selector and Sobolev radius bounds give uniform exact coverage and the stated no-log diameter rate. The nonzero-norm restriction does not prevent this construction. This is a consequence of the unrestricted formulation, not a solution attributed to the cited papers. Reclassification of this carrier as a proved construction requires owner integration; the original question is retained verbatim pending that change.

Separately, the sparse-gap counterexample concerns a coordinatewise hyperrectangle, not a containing truth class for $\mathcal G_\beta$. Its truth fails the polished-tail condition and has infinite $\beta$-Sobolev energy: each of its infinitely many disjoint blocks $N_j<i\le2N_j$ contributes $M\sum_{N_j<i\le2N_j}i^{-1}$, bounded away from zero. Thus its undercoverage does not refute coverage on $\mathcal G_\beta$.

## References

[[thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails|Polished-tail coverage after inflation in the inverse sequence model.]]

[[cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage|Sparse-gap undercoverage within a hyperrectangle under the stated rate and inflation conditions.]]

[Ray, §4.1](https://arxiv.org/pdf/1407.3397)

[Knapik, Szabó, van der Vaart, and van Zanten, §§1–2.3](https://arxiv.org/pdf/1209.3628)
