---
id: ex-ip-scalar-mmse-exact-denoiser
kind: example
title: "Exact scalar MMSE denoiser for a two-point prior"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - lem-ip-tweedie-mmse-jacobian-and-prox-potential
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - def-probability-measure
  - thm-exponential-addition-formula
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: "The explicit finite prior, posterior weights, and potential identity use no choice axiom. The AC-dependent Hilbert posterior-mean proposition is not used; the local lemma supplies the exact pointwise identity."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Xiaojian Xu, Yu Sun, Jiaming Liu, Brendt Wohlberg, and Ulugbek S. Kamilov, Provable Convergence of Plug-and-Play Priors with MMSE Denoisers, IEEE Signal Processing Letters 27 (2020), arXiv:2005.07685"
      url: "https://arxiv.org/pdf/2005.07685"
      locator: "Appendix A.1, equation (7) and equations (9)–(12); the finite two-point posterior weights are computed locally."
    - title: "Rémi Gribonval and Mila Nikolova, On Bayesian Estimation and Proximity Operators, Applied and Computational Harmonic Analysis 50 (2021), 49–72, arXiv:1807.04021"
      url: "https://arxiv.org/pdf/1807.04021"
      locator: "§2.5.1 and Appendix A.4, Gaussian likelihood and posterior-mean proximity representation."
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, Foundations and Trends in Optimization 1(3) (2014)"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
      locator: "§1.1, pp. 124–125, proximal minimization notation; the nonconvex identity is supplied by the local lemma."
---

## Example

Let $a,\sigma,\gamma>0$ and let the scalar prior put mass $1/2$ at each of $-a$ and $a$. Under the Gaussian likelihood kernel $\rho_\sigma(z-u)=\exp(-(z-u)^2/(2\sigma^2))$, its exact posterior-mean map is
$$D_\sigma(z)=a\tanh\!\left(\frac{az}{\sigma^2}\right),\qquad \tanh(s)=\frac{\exp(s)-\exp(-s)}{\exp(s)+\exp(-s)}.$$
The normalizing constant of the Gaussian likelihood cancels in the posterior. For every $z$, $D_\sigma(z)$ uniquely minimizes the posterior squared-error risk and, with the potential $h_{\sigma,\gamma}$ constructed from this prior, is the unique global minimizer of $x\mapsto (x-z)^2/2+\gamma h_{\sigma,\gamma}(x)$.

## Example references

[[lem-ip-tweedie-mmse-jacobian-and-prox-potential]]

## Facts & Assumptions

**Given:** $a,\sigma,\gamma>0$, the two-point prior and Gaussian likelihood in the Example, and the definitions of a Dirac probability measure and the exact posterior-mean map.

[F1] [[def-dirac-measure]]: $\delta_{x_0}(E)=1$ when $x_0\in E$ and $0$ otherwise.

[F2] [[prop-dirac-measure-is-a-probability-measure]]: each Dirac set function is a probability measure.

[F3] [[thm-exponential-addition-formula]]: $\exp(x+y)=\exp(x)\exp(y)$ for all real $x,y$.

[F4] [[lem-ip-tweedie-mmse-jacobian-and-prox-potential]]: if a Borel probability measure on $\mathbb R$ is not concentrated on an affine hyperplane, then for the Gaussian likelihood kernel its posterior-mean map uniquely minimizes posterior squared-error risk and the constructed $h_{\sigma,\gamma}$ makes that map the unique global minimizer of $\frac12|x-z|^2+\gamma h_{\sigma,\gamma}(x)$.

## Verification

**Given:** The hypotheses and definitions in the Example.

1.1 By [F1]–[F2], $\mu=\frac12\delta_{-a}+\frac12\delta_a$ is a probability measure: for pairwise-disjoint Borel sets each of the two atoms occurs in at most one set, and $\mu(\mathbb R)=1$. Since $a>0$, its two atoms are distinct and each has positive mass; every affine hyperplane in $\mathbb R$ is a singleton, so $\mu$ is not concentrated on any affine hyperplane. The posterior weights at $a$ and $-a$ are proportional to $\rho_\sigma(z-a)$ and $\rho_\sigma(z+a)$, hence $D_\sigma(z)=a\frac{\rho_\sigma(z-a)-\rho_\sigma(z+a)}{\rho_\sigma(z-a)+\rho_\sigma(z+a)}$. [F1, F2, given, algebra]

2.1 Factoring $\exp(-(z^2+a^2)/(2\sigma^2))$ from numerator and denominator and using [F3] yields $D_\sigma(z)=a(\exp(az/\sigma^2)-\exp(-az/\sigma^2))/(\exp(az/\sigma^2)+\exp(-az/\sigma^2))$, which is the stated hyperbolic-tangent formula. [F3, step 1.1, algebra]

3.1 Fact [F4] applies to this nondegenerate two-point prior, so the posterior mean is the unique squared-error minimizer and the lemma's $h_{\sigma,\gamma}$ makes $D_\sigma(z)$ the unique global minimizer of the displayed proximal objective for every $z$. [F4, given, step 2.1] ∎
