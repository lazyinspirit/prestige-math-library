---
id: thm-gaussian-smoothing-reversal-on-truncated-time-interval
kind: theorem
title: Reverse Gaussian smoothing on a truncated time interval
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 5
deps:
- def-axiom-of-choice
- def-bayes-reversed-gaussian-smoothing-kernels
- def-ito-sde-and-strong-solution
- lem-elliptic-local-martingale-brownian-representation
- lem-reversed-smoothing-generator-and-martingale
- thm-gaussian-mixture-score-and-global-lipschitz-bound
- thm-gaussian-smoothing-endpoint-weak-limit
- thm-global-strong-well-posedness-for-lipschitz-ito-sdes
- lem-continuous-local-martingale-quadratic-variation
- thm-gaussian-smoothing-density-and-forward-equation
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
  - title: B. D. O. Anderson, Reverse-time diffusion equation models, Sections 3–4
    url: https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf
  - title: 'M. Raginsky, Stochastic Differential Equations: A Systems-Theoretic Approach,
      Section 7.2'
    url: https://maxim.ece.illinois.edu/teaching/spring23/SDE_book.pdf
---

## Statement

Assume AC. Fix $d\ge1$, $T>0$, a Borel probability measure $\mu$ supported in $\overline B(0,R)$ for a finite $R$, and $g\in C^1([0,T])$ with $0<g_{\min}\le g(t)\le g_{\max}<\infty$. Let $W$ be standard $d$-dimensional Brownian motion with increments independent of the past, let $X_0\sim\mu$ be independent of future Brownian increments, and set
$$X_t=X_0+\int_0^t g(r)dW_r,\qquad v(t)=\int_0^t g(r)^2dr,\qquad p_t(x)=\int\phi_{v(t)}(x-z)\mu(dz)\quad(t>0).$$
For $0<\epsilon<T$, set $Y_u=X_{T-u}$ on $0\le u\le T-\epsilon$. Then there is a standard $d$-dimensional Brownian motion $B$ in the usual augmentation of the natural reversed filtration such that
$$dY_u=g(T-u)^2\nabla\log p_{T-u}(Y_u)\,du+g(T-u)\,dB_u,\qquad 0\le u<T-\epsilon.$$
The reverse drift is globally Lipschitz in the state on this truncated interval, with constant at most $g_{\max}^2(1/v(\epsilon)+R^2/v(\epsilon)^2)$ when $\operatorname{supp}\mu\subseteq\overline B(0,R)$, and has linear growth. The endpoint coupling satisfies
$$\mathbb E|Y_{T-\epsilon}-X_0|^2=dv(\epsilon),\qquad W_2(\operatorname{Law}(Y_{T-\epsilon}),\mu)\le\sqrt{dv(\epsilon)},$$
where $W_2$ is the infimum of root mean-square cost over probability couplings with finite second moments. Consequently $Y_{T-\epsilon}=X_\epsilon$ converges to $X_0$ in $L^2$ and its law converges weakly to $\mu$ as $\epsilon\downarrow0$. No score or density regularity at $t=0$ is asserted.

## Statement references

[Gaussian smoothing density and forward equation](../../items/thm-gaussian-smoothing-density-and-forward-equation.md): supplies the positive-time density and heat equation for arbitrary compactly supported Borel initial law.

[Gaussian mixture score and global Lipschitz bound](../../items/thm-gaussian-mixture-score-and-global-lipschitz-bound.md): supplies the score identity, state-Lipschitz constant, and linear-growth bound on $[\epsilon,T]$.

[Gaussian smoothing endpoint weak limit](../../items/thm-gaussian-smoothing-endpoint-weak-limit.md): supplies the exact $L^2$, weak, and $W_2$ endpoint coupling estimate without a score claim at zero.

## Facts & Assumptions

**Given:** AC and the compact-support, Brownian, and noise hypotheses in the Statement.

[A1] AC is required by the supplied density, score, SDE, local-martingale, and Brownian reconstruction interfaces. [[def-axiom-of-choice]]

[F1] On every $[\epsilon,T]$, $p_t$ is positive and smooth and solves $\partial_t p_t=\tfrac12g(t)^2\Delta p_t$; the Gaussian reverse kernels have the Bayes normalization and composition identities. [[thm-gaussian-smoothing-density-and-forward-equation]] [[def-bayes-reversed-gaussian-smoothing-kernels]]

[F2] The reverse generator on compact tests is $\widetilde L_u\varphi=g(T-u)^2(\nabla\log p_{T-u}\cdot\nabla\varphi+\tfrac12\Delta\varphi)$, and the compensated test process is a martingale. [[lem-reversed-smoothing-generator-and-martingale]]

[F3] The score is globally Lipschitz and has linear growth uniformly on $[\epsilon,T]$, with derivative bound $1/v(\epsilon)+R^2/v(\epsilon)^2$. [[thm-gaussian-mixture-score-and-global-lipschitz-bound]]

[F4] For a continuous semimartingale, coordinate and coordinate-product martingale tests identify the bracket via the proved product formula; the resulting bracket $\int g(T-u)^2I_ddu$ can be inverted to construct Brownian motion. Bounded stopping preserves the continuous martingale identities used in the localization. [[lem-continuous-local-martingale-quadratic-variation]] [[lem-elliptic-local-martingale-brownian-representation]]

[F5] With $X_0$ compactly supported, $X_\epsilon$ has finite second moment and the coupling $(X_\epsilon,X_0)$ gives $E|X_\epsilon-X_0|^2=dv(\epsilon)$ and $W_2(\operatorname{Law}(X_\epsilon),\mu)\le\sqrt{dv(\epsilon)}$, hence weak convergence. [[thm-gaussian-smoothing-endpoint-weak-limit]]

[F6] Under globally Lipschitz state coefficients and linear growth on a complete usual filtered Brownian space, the SDE has a unique strong solution; solutions driven by the same initial value and Brownian motion are pathwise unique. [[def-ito-sde-and-strong-solution]] [[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]

## Proof

**Given:** the hypotheses in the Statement, AC, and any fixed $0<\epsilon<T$.

1.1 By [F1], the reversed Gaussian kernels are normalized and compose, and [F2] gives the reverse martingale problem for $Y_u=X_{T-u}$ on $0\le u\le T-\epsilon$. In particular the reverse generator has drift $\beta_u(x)=g(T-u)^2\nabla\log p_{T-u}(x)$ and diffusion matrix $a_u(x)=g(T-u)^2I_d$. [F1, F2]

2.1 First pass to the usual augmentation of the reversed filtration and normalize the continuous processes on their common null exceptional set in its initial sigma-algebra. The continuous compact-test martingales in [F2] remain martingales there: on the finite horizon each is a conditional expectation of its integrable terminal value, hence uniformly integrable; passing its event identities along times decreasing to a fixed time gives the right-continuous extension, and completion adds only null-event identities. All stopping and product-formula uses below are on these normalized representatives. Fix $R_1$ and stop when $|Y|$ reaches $R_1$. Compactly supported cutoffs equal to $x_i$ and $x_ix_j$ on that ball turn the identities in [F2] into coordinate and coordinate-product martingales. Subtracting the finite-variation drift gives continuous local martingales $M^i$. The product formula in [F4] makes $Y_iY_j-Y_i(0)Y_j(0)-\int(\beta_iY_j+\beta_jY_i)dr-[M_i,M_j]$ a local martingale. The coordinate-product identity makes the same expression with $\int g(T-r)^2\delta_{ij}dr$ in place of $[M_i,M_j]$ a local martingale. Their difference is a continuous finite-variation local martingale, hence constant by [F4]; it starts at zero. Thus $[M]_u=\int_0^u g(T-r)^2I_d dr$. Letting $R_1\uparrow\infty$ is valid because $Y$ has continuous paths on the compact time interval. [F2, F4, step 1.1]

3.1 The process $\sigma_r=g(T-r)I_d$ is invertible with bounded inverse. Apply the inverse-diffusion construction in [F4] to define $B_u=\int_0^u g(T-r)^{-1}dM_r$. Its bracket is $uI_d$, so vector Lévy characterization makes $B$ Brownian in the usual augmented reversed filtration in which step 2.1 was carried out. The decomposition of $M$ gives the displayed reverse SDE. [F4, A1, step 2.1]

4.1 By [F3], $\beta_u$ is globally Lipschitz in $x$ uniformly on the truncated interval, with constant at most $g_{\max}^2(1/v(\epsilon)+R^2/v(\epsilon)^2)$; its linear-growth bound follows by multiplying the supplied score bound by $g_{\max}^2$. The diffusion coefficient $g(T-u)I_d$ is deterministic and bounded. The initial value $Y_0=X_T$ has finite second moment since $X_0$ is bounded and the Gaussian increment has finite second moment. Thus [F6] gives a unique strong solution for the same initial value and Brownian motion $B$ on the usual augmented reversed filtration. Pathwise uniqueness identifies this solution with the weak solution $Y$ from step 3.1. [F3, F6, step 3.1]

5.1 Since $Y_{T-\epsilon}=X_\epsilon$, the endpoint coupling statement [F5] gives the exact mean-square error and $W_2$ bound. Because $v(\epsilon)\le g_{\max}^2\epsilon\to0$, the coupling proves $L^2$ convergence to $X_0$; the same supplier gives weak convergence of the laws to $\mu$. No part of this step evaluates a score at zero. [F5, step 4.1] ∎
