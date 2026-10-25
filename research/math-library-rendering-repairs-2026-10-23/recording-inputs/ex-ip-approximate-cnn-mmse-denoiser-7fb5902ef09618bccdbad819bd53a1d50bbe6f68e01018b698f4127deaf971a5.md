---
id: ex-ip-approximate-cnn-mmse-denoiser
kind: example
title: "A biased one-pixel CNN approximates but is not the exact MMSE denoiser"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - lem-ip-tweedie-mmse-jacobian-and-prox-potential
  - alg-ip-pnp-ista-with-denoiser
  - thm-ip-exact-mmse-pnp-ista-stationarity
  - rem-ip-arbitrary-denoiser-has-no-inherited-objective
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - def-probability-measure
  - thm-exponential-addition-formula
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: "The explicit finite prior and biased scalar map use no choice axiom. The AC-dependent Hilbert posterior-mean proposition is not used; the local lemma supplies the exact pointwise identity."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Xiaojian Xu, Yu Sun, Jiaming Liu, Brendt Wohlberg, and Ulugbek S. Kamilov, Provable Convergence of Plug-and-Play Priors with MMSE Denoisers, IEEE Signal Processing Letters 27 (2020), arXiv:2005.07685"
      url: "https://arxiv.org/pdf/2005.07685"
      locator: "§1 and §3, pp. 1–4, exact versus approximate MMSE denoisers and the DnCNN experiment; this one-pixel network is a local mathematical example."
    - title: "Rémi Gribonval and Mila Nikolova, On Bayesian Estimation and Proximity Operators, Applied and Computational Harmonic Analysis 50 (2021), 49–72, arXiv:1807.04021"
      url: "https://arxiv.org/pdf/1807.04021"
      locator: "§1.3 and §2.5.1, exact posterior-mean denoiser and its prior-specific proximity penalty."
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, Foundations and Trends in Optimization 1(3) (2014)"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
      locator: "§4.2, proximal-gradient update; the exact-MMSE stationarity conclusion requires the local theorem's stricter denoiser hypothesis."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Let $a,\sigma>0$ and use the scalar two-point prior assigning mass $1/2$ to each of $-a$ and $a$, whose exact Gaussian posterior-mean map is $D_\sigma(z)=a\tanh(az/\sigma^2)$, where $\tanh(s)=(\exp(s)-\exp(-s))/(\exp(s)+\exp(-s))$. For any tolerance $\eta>0$, choose $b$ with $0<|b|<\eta$ and define the one-pixel convolutional neural network (CNN) map
$$\widetilde D_\sigma(z)=a\tanh(az/\sigma^2)+b.$$
This map is implemented by a $1\times1$ convolution, a $\tanh$ activation, output scaling, and an output bias $b$. It satisfies $\sup_{z\in\mathbb R}|\widetilde D_\sigma(z)-D_\sigma(z)|=|b|<\eta$, while $\widetilde D_\sigma(0)\ne D_\sigma(0)$. It is approximate and does not meet the exact-denoiser hypothesis of the stationarity theorem; this example makes no claim that it lacks some other objective.

## Example references

[[lem-ip-tweedie-mmse-jacobian-and-prox-potential]]

[[alg-ip-pnp-ista-with-denoiser]]

[[thm-ip-exact-mmse-pnp-ista-stationarity]]

[[rem-ip-arbitrary-denoiser-has-no-inherited-objective]]

## Network diagram

For this one-channel, one-pixel input, a $1\times1$ convolution with weight $w$ is scalar multiplication $z\mapsto wz$. The architecture applies weight $a/\sigma^2$, then $\tanh$, then output scaling by $a$ and bias addition by $b$. The arrows depict function composition, and the sequence computes exactly $\widetilde D_\sigma(z)=a\tanh(az/\sigma^2)+b$.

```tikz
\begin{tikzpicture}[x=1.45cm,y=0.8cm,>=stealth]
  \node (input) at (0,0) {$z$};
  \node[draw,rounded corners,minimum width=2.3cm,minimum height=0.9cm] (conv) at (2,0) {$1\times1$ conv: $a/\sigma^2$};
  \node[draw,rounded corners,minimum width=1.4cm,minimum height=0.9cm] (act) at (4.5,0) {$\tanh$};
  \node[draw,rounded corners,minimum width=2cm,minimum height=0.9cm] (out) at (7,0) {scale $a$, bias $b$};
  \node (result) at (9.2,0) {$\widetilde D_\sigma(z)$};
  \draw[->] (input) -- (conv);
  \draw[->] (conv) -- node[above] {$az/\sigma^2$} (act);
  \draw[->] (act) -- node[above] {$\tanh(az/\sigma^2)$} (out);
  \draw[->] (out) -- (result);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** $a,\sigma,\eta>0$, a nonzero bias $b$ with $|b|<\eta$, and the finite two-point prior and Gaussian likelihood in the Example.

[F1] [[def-dirac-measure]]: $\delta_{x_0}(E)=1$ when $x_0\in E$ and $0$ otherwise.

[F2] [[prop-dirac-measure-is-a-probability-measure]]: each Dirac set function is a probability measure.

[F3] [[thm-exponential-addition-formula]]: $\exp(x+y)=\exp(x)\exp(y)$ for all real $x,y$.

[F4] [[lem-ip-tweedie-mmse-jacobian-and-prox-potential]]: for a Borel probability measure not concentrated on an affine hyperplane, the Gaussian posterior-mean map is defined by the normalized likelihood integral and uniquely minimizes posterior squared-error risk.

[F5] [[thm-ip-exact-mmse-pnp-ista-stationarity]]: the stationarity conclusion assumes the plug-in map is exactly the analytic posterior-mean map $D_\sigma$.

## Verification

**Given:** The prior, noise parameter, tolerance, bias, and network map in the Example.

1.1 By [F1]–[F2], $\mu=\frac12\delta_{-a}+\frac12\delta_a$ is a Borel probability. Because $a>0$, the atoms are distinct, each has positive mass, and every affine hyperplane in $\mathbb R$ is a singleton, so $\mu$ is not concentrated on any affine hyperplane. Its posterior mean is $D_\sigma(z)=a\frac{\rho_\sigma(z-a)-\rho_\sigma(z+a)}{\rho_\sigma(z-a)+\rho_\sigma(z+a)}=a\tanh(az/\sigma^2)$, where the second equality follows by factoring the common Gaussian term and using [F3]. [F1, F2, F3, F4, given, algebra]

2.1 For every $z$, $|\widetilde D_\sigma(z)-D_\sigma(z)|=|b|<\eta$, so the uniform error is $|b|$. At $z=0$, $D_\sigma(0)=0$ while $\widetilde D_\sigma(0)=b\ne0$; hence the network is not the exact MMSE map and [F5] does not apply. No conclusion about a different objective follows. [F4, F5, given, algebra] ∎
