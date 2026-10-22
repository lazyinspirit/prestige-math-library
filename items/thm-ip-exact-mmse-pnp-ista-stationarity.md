---
id: thm-ip-exact-mmse-pnp-ista-stationarity
kind: theorem
title: "Exact-MMSE PnP-ISTA has monotone objective and vanishing gradient"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - lem-ip-tweedie-mmse-jacobian-and-prox-potential
  - alg-ip-pnp-ista-with-denoiser
  - lem-l-smoothness-descent-inequality
  - def-lipschitz-holder-contraction
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: "The local stationarity proof uses no choice axiom. It treats the analytic posterior-mean map as an exact plug-in map; it imports neither the AC-dependent Hilbert posterior-mean proposition nor a trained-network guarantee."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xiaojian Xu, Yu Sun, Jiaming Liu, Brendt Wohlberg, and Ulugbek S. Kamilov, Provable Convergence of Plug-and-Play Priors with MMSE Denoisers, IEEE Signal Processing Letters 27 (2020), arXiv:2005.07685"
      url: "https://arxiv.org/pdf/2005.07685"
      locator: "§2, Assumptions 1–3 and Theorem 1; Appendix A.2, complete majorization and summable-residual proof."
    - title: "Rémi Gribonval and Mila Nikolova, On Bayesian Estimation and Proximity Operators, Applied and Computational Harmonic Analysis 50 (2021), 49–72, arXiv:1807.04021"
      url: "https://arxiv.org/pdf/1807.04021"
      locator: "§2.5.1 and Appendix A.4, Gaussian posterior mean as a global proximity selection."
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, Foundations and Trends in Optimization 1(3) (2014)"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
      locator: "§4.2.1, equations (4.7)–(4.8), smooth quadratic majorizer for proximal-gradient descent; convex penalty assumptions do not cover h_{σ,γ}."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $n\ge1$, let $\sigma>0$, and let $\mu$ be a Borel probability measure on $\mathbb R^n$ that is not concentrated on any affine hyperplane. Use the analytic Gaussian posterior-mean map $D_\sigma$ and potential $h_{\sigma,\gamma}$ constructed from $\mu$ in the local lemma. This map is used as the exact MMSE plug-in map; no fitted parameter or training guarantee is assumed. Let $g:\mathbb R^n\to\mathbb R$ be $C^1$ and suppose
$$\|\nabla g(u)-\nabla g(v)\|_2\le L\|u-v\|_2\quad(u,v\in\mathbb R^n)$$
for some $L>0$. Suppose the extended-real objective $f=g+h_{\sigma,\gamma}$ has finite infimum in $\mathbb R$, fix $0<\gamma\le1/L$, and run
$$x_t=D_\sigma\!\left(x_{t-1}-\gamma\nabla g(x_{t-1})\right)\quad(t\ge1)$$
from any $x_0\in\mathbb R^n$. Then $x_t\in X_\sigma$ and $f(x_t)$ is finite for every $t\ge1$; $f(x_t)\le f(x_{t-1})$ in extended-real order for $t\ge1$; the finite sequence $(f(x_t))_{t\ge1}$ converges; and $\|\nabla f(x_t)\|_2\to0$, where $\nabla f$ is the ordinary gradient of its restriction to the open set $X_\sigma$. This is a stationarity conclusion only: it asserts no global minimizer, objective rate, iterate convergence, posterior sampling, or trained-network guarantee.

## Statement references

[[lem-ip-tweedie-mmse-jacobian-and-prox-potential]]

[[alg-ip-pnp-ista-with-denoiser]]

[[lem-l-smoothness-descent-inequality]]

## Facts & Assumptions

**Given:** The integer $n\ge1$, the Borel probability prior $\mu$ on $\mathbb R^n$ not concentrated on any affine hyperplane, $\sigma>0$, the exact MMSE denoiser and potential constructed from $\mu$, a $C^1$ function $g$ with the displayed $L$-Lipschitz-gradient bound, a finite infimum for $f=g+h_{\sigma,\gamma}$, $L>0$, $0<\gamma\le1/L$, and an arbitrary initial point $x_0$.

[F1] [[lem-ip-tweedie-mmse-jacobian-and-prox-potential]]: $D_\sigma$ maps $\mathbb R^n$ into the open set $X_\sigma$, $h_{\sigma,\gamma}$ is smooth on $X_\sigma$ and $+\infty$ off it, and $D_\sigma(z)$ is the unique global minimizer of $\frac12\|x-z\|_2^2+\gamma h_{\sigma,\gamma}(x)$.

[F2] [[alg-ip-pnp-ista-with-denoiser]]: a PnP-ISTA update takes $z_t=x_{t-1}-\gamma\nabla g(x_{t-1})$ and sets $x_t=\widetilde D_\sigma(z_t)$.

[F3] [[lem-l-smoothness-descent-inequality]]: if $g$ is $C^1$ with $L$-Lipschitz gradient, then $g(y)\le g(x)+\langle\nabla g(x),y-x\rangle+\frac L2\|y-x\|_2^2$ for all $x,y$.

[F4] [[def-lipschitz-holder-contraction]]: an $L$-Lipschitz map satisfies $\|T(x)-T(y)\|_2\le L\|x-y\|_2$ for all points in its domain.

[F5] [[def-euclidean-inner-product]]: the Euclidean gradient and norm use $\langle x,y\rangle=\sum_{k<n}x_ky_k$ and $\|x\|_2=\sqrt{\langle x,x\rangle}$.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm satisfies the triangle inequality and positive homogeneity.

## Proof

1.1 For a point $s\in\mathbb R^n$, define the extended-real quadratic model $\mu_s(x)=g(s)+\langle\nabla g(s),x-s\rangle+\frac1{2\gamma}\|x-s\|_2^2+h_{\sigma,\gamma}(x)$. By [F3] and $\gamma\le1/L$, its smooth part majorizes $g(x)$ and is tight at $x=s$. Adding $h_{\sigma,\gamma}$ preserves the majorization; when $h_{\sigma,\gamma}(x)=+\infty$ both objective values are $+\infty$. Thus $\mu_s(x)\ge f(x)$ for every $x$, and $\mu_s(s)=f(s)$ in extended-real order. [given, F3, F5, algebra]

1.2 For $t\ge2$ put $s=x_{t-1}\in X_\sigma$ and define $r_t(x)=g(s)+\langle\nabla g(s),x-s\rangle+\frac1{2\gamma}\|x-s\|_2^2-g(x)$. By [F3], $r_t(x)\ge0$ for every $x$, $r_t(s)=0$, and $\nabla r_t(s)=0$. Its gradient is $\nabla r_t(x)=\nabla g(s)+(x-s)/\gamma-\nabla g(x)$, so the triangle inequality and positive homogeneity [F6], the Lipschitz bound [F4], and the hypothesis on $\nabla g$ give $\|\nabla r_t(x)-\nabla r_t(y)\|_2\le(1/\gamma+L)\|x-y\|_2\le(2/\gamma)\|x-y\|_2$. On $X_\sigma$, $\mu_s-f=r_t$. [F3, F4, F5, F6, given, algebra]

2.1 Completing the square gives $\mu_s(x)=\frac1{2\gamma}\|x-(s-\gamma\nabla g(s))\|_2^2+h_{\sigma,\gamma}(x)+g(s)-\frac\gamma2\|\nabla g(s)\|_2^2$. By [F1] and the exact update in [F2] with $\widetilde D_\sigma=D_\sigma$, $x_t$ is the unique global minimizer of $\mu_{x_{t-1}}$. Hence $f(x_t)\le\mu_{x_{t-1}}(x_t)\le\mu_{x_{t-1}}(x_{t-1})=f(x_{t-1})$. Also $x_t\in X_\sigma$ for $t\ge1$, where $h_{\sigma,\gamma}$ is finite, so $f(x_t)$ is finite. [F1, F2, F5, step 1.1, given, algebra]

3.1 The sequence $(f(x_t))_{t\ge1}$ is finite, nonincreasing by step 2.1, and bounded below by $\inf f\in\mathbb R$. It therefore converges: if $\ell=\inf_{t\ge1}f(x_t)$, then for every $\varepsilon>0$ some $N$ has $f(x_N)<\ell+\varepsilon$, and every $t\ge N$ has $\ell\le f(x_t)\le f(x_N)$. [given, step 2.1]

3.2 Because $x_t$ minimizes $\mu_s$, step 2.1 and the identity in step 1.2 yield $0\le r_t(x_t)=\mu_s(x_t)-f(x_t)\le f(x_{t-1})-f(x_t)$. Summing from $t=2$ to $N$ gives $\sum_{t=2}^N r_t(x_t)\le f(x_1)-f(x_N)\le f(x_1)-\inf f$. The nonnegative summands therefore tend to zero. [F1, step 2.1, step 1.2, given, algebra]

4.1 Apply [F3] to $r_t$ with gradient Lipschitz constant $2/\gamma$ and point $x_t$, taking $u_t=x_t-\frac\gamma2\nabla r_t(x_t)$. Then $0\le r_t(u_t)\le r_t(x_t)-\frac\gamma4\|\nabla r_t(x_t)\|_2^2$. Step 3.2 implies $\|\nabla r_t(x_t)\|_2^2\le4r_t(x_t)/\gamma\to0$. [F3, step 1.2, step 3.2, algebra]

5.1 For $t\ge2$, $x_t$ is a global minimizer of $\mu_s$ and belongs to the open set $X_\sigma$, where $\mu_s$ is differentiable. For every direction $v$, the global minimum gives nonnegative directional difference quotients along $v$ and $-v$ for small positive increments; taking limits gives $\langle\nabla\mu_s(x_t),v\rangle=0$. Thus $\nabla\mu_s(x_t)=0$. Since $r_t=\mu_s-f$ on $X_\sigma$, $\nabla r_t(x_t)=-\nabla f(x_t)$; step 4.1 now proves $\|\nabla f(x_t)\|_2\to0$. [F1, F5, step 1.2, step 4.1, choose] ∎
