---
id: alg-ip-filtered-backprojection-complete-data
kind: algorithm
title: Complete-data filtered backprojection
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
aliases: []
deps:
  - def-ip-2d-radon-transform
  - thm-ip-fourier-slice-identity
  - thm-ip-radon-normal-operator
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Mikko Salo, RICAM lecture notes v1, §2.1: Radon transform in R²"
      url: "https://users.jyu.fi/~salomi/lecturenotes/RICAM_notes_v1.pdf"
      locator: "§2.1, pp. 4–7: the full-data filtered-backprojection identity."
    - title: "Frank Natterer, X-ray Tomography, in Inverse Problems and Imaging"
      url: "https://www.researchgate.net/publication/profile/Frank-Natterer/publication/226521751_X-ray_Tomography/links/02e7e525392792a0a3000000/X-ray-Tomography.pdf"
      locator: "§3.1, pp. 26–28: filtering and backprojection steps and their finite-sampling context."
---

## Definition

Assume Countable Choice and let $\mu$ be the polar surface measure on $S^1$, with $\mu(E)=2\lambda_2(\{r\theta:\theta\in E,\ 0<r\le1\})$ for Borel $E\subseteq S^1$. The **complete-data filtered-backprojection procedure** takes as input the exact full sinogram $g=Rf$ of some $f\in C_c^\infty(\mathbb R^2;\mathbb C)$; all oriented normals $\theta\in S^1$ and all offsets $s\in\mathbb R$ are supplied. It returns the function $f_{\mathrm{FBP}}:\mathbb R^2\to\mathbb C$ defined by
$$f_{\mathrm{FBP}}(x)=\frac1{4\pi}\int_{S^1}q(\theta,x\cdot\theta)\,d\mu(\theta),$$
where the filter output is
$$q(\theta,s)=\int_{\mathbb R}2\pi|\sigma|\,\widehat{g(\theta,\cdot)}(\sigma)e^{2\pi i s\sigma}\,d\sigma.$$
The exact instructions are: (1) for each $\theta$, take the one-dimensional Fourier transform of $g(\theta,\cdot)$ with the negative-sign $2\pi$ convention; (2) multiply that transform by the declared ramp filter $2\pi|\sigma|$ and take its inverse Fourier integral to form $q(\theta,\cdot)$; (3) evaluate $q(\theta,\cdot)$ at $s=x\cdot\theta$ and integrate over the full polar surface measure in $\theta$; (4) divide by $4\pi$. For this input class the slice identity and Schwartz decay make the filter integral absolutely convergent and the backprojection integral well defined. This definition specifies the continuous full-data procedure; it gives no guarantee for finitely sampled, truncated, or noisy measurements. Exact recovery on the stated class is proved by the normal-operator theorem.

## Definition references

[[def-ip-2d-radon-transform]]

[[thm-ip-fourier-slice-identity]]

[[thm-ip-radon-normal-operator]]

[Mikko Salo, RICAM lecture notes v1, §2.1](https://users.jyu.fi/~salomi/lecturenotes/RICAM_notes_v1.pdf)

[Frank Natterer, “X-ray Tomography,” §3.1](https://www.researchgate.net/publication/profile/Frank-Natterer/publication/226521751_X-ray_Tomography/links/02e7e525392792a0a3000000/X-ray-Tomography.pdf)
