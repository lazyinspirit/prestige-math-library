---
id: def-ip-2d-radon-transform
kind: definition
title: The Euclidean Radon transform on R²
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
aliases: []
deps: [def-fourier-transform-on-an-lca-group]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Mikko Salo, RICAM lecture notes v1, §2.1: Radon transform in R²"
      url: "https://users.jyu.fi/~salomi/lecturenotes/RICAM_notes_v1.pdf"
      locator: "§2.1, pp. 4–7: line parameterization, Fourier convention, and full-angle backprojection."
    - title: "Frank Natterer, X-ray Tomography, in Inverse Problems and Imaging"
      url: "https://www.researchgate.net/publication/profile/Frank-Natterer/publication/226521751_X-ray_Tomography/links/02e7e525392792a0a3000000/X-ray-Tomography.pdf"
      locator: "§2.1, pp. 18–20: Radon transform, Fourier slice theorem, and inversion; §3.1, pp. 26–28: filtered-backprojection discretization."
---

## Definition

Write $C_c^\infty(\mathbb R^2;\mathbb C)$ for the complex-valued smooth functions of compact support on the Euclidean plane. For $u\in C_c^\infty(\mathbb R^n;\mathbb C)$, $n=1$ or $2$, use the compact-support Riemann Fourier transform
$$\widehat u(\xi)=\int_{\mathbb R^n}u(x)e^{-2\pi i x\cdot\xi}\,dx.$$
For $\theta=(\theta_1,\theta_2)\in S^1:=\{x\in\mathbb R^2:|x|=1\}$ put $\theta^\perp=(-\theta_2,\theta_1)$. The line with normal $\theta$ and signed offset $s$ is $\{x\in\mathbb R^2:x\cdot\theta=s\}$. Its **Euclidean Radon transform** is
$$Rf(\theta,s):=\int_{\mathbb R}f(s\theta+t\theta^\perp)\,dt,\qquad f\in C_c^\infty(\mathbb R^2;\mathbb C),\ (\theta,s)\in S^1\times\mathbb R.$$
The line integral is a compact-support Riemann integral.
The full data set uses every oriented normal $\theta\in S^1$ and every $s\in\mathbb R$; the same unoriented line is represented by $(\theta,s)$ and $(-\theta,-s)$.
For a one-dimensional function $h\in C_c^\infty(\mathbb R;\mathbb C)$, define
$$|D_s|h(s):=\int_{\mathbb R}2\pi|\sigma|\,\widehat h(\sigma)e^{2\pi i s\sigma}\,d\sigma.$$
For $f\in C_c^\infty(\mathbb R^2;\mathbb C)$ define the Riesz potential notation used here by
$$|D|^{-1}f(x):=\int_{\mathbb R^2}e^{2\pi i x\cdot\xi}\frac{\widehat f(\xi)}{2\pi|\xi|}\,d\xi.$$
The quotient in the last integral is assigned value $0$ at $\xi=0$. These integrals are absolutely convergent on the stated classes: compact-support integration by parts gives rapid decay of $\widehat f$ and $\widehat h$, while $\widehat f$ is bounded near $0$ and $|\xi|^{-1}$ is locally integrable in two dimensions. Here the multiplier for $|D_s|$ is $2\pi|\sigma|$, corresponding to the $e^{-2\pi i s\sigma}$ Fourier convention.

## Definition references

[[def-fourier-transform-on-an-lca-group]]

[Mikko Salo, RICAM lecture notes v1, §2.1](https://users.jyu.fi/~salomi/lecturenotes/RICAM_notes_v1.pdf)

[Frank Natterer, “X-ray Tomography,” §§2.1–2.2](https://www.researchgate.net/publication/profile/Frank-Natterer/publication/226521751_X-ray_Tomography/links/02e7e525392792a0a3000000/X-ray-Tomography.pdf)
