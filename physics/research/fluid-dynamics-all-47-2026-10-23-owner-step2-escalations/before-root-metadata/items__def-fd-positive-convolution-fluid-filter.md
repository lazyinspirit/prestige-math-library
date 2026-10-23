---
id: def-fd-positive-convolution-fluid-filter
kind: definition
title: Positive periodic convolution filter and subfilter stress
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps:
  - def-countable-choice
  - def-fd-periodic-fourier-sobolev-spaces
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
justified_by:
  - lem-fd-periodic-filter-normalization-and-commutation
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "University of Washington, ME 544, Large-Eddy Simulation lecture notes, 8 May 2018"
      url: "https://courses.washington.edu/mengr544/handouts/hd-les.pdf"
    - title: "Gregory L. Eyink, The ‘Multifractal Model’ of Turbulence and A Priori Estimates in Large-Eddy Simulation, I. Subgrid Flux and Locality of Energy Transfer, arXiv:chao-dyn/9602018v1"
      url: "https://arxiv.org/pdf/chao-dyn/9602018"
---
## Definition

Assume the Axiom of Countable Choice for the normalized periodic torus convention used here. Let $d\in\{1,2,3\}$ and let $L>0$ be a period length. Put $\mathbb T_L^d=(\mathbb R/L\mathbb Z)^d$, with normalized Haar measure $d\mu_L=L^{-d}\,dx$; writing $y=x/L$ and $\xi=2\pi y$ identifies this normalized measure with normalized Haar measure on $\mathbb T^d=(\mathbb R/2\pi\mathbb Z)^d$, the periodic Fourier convention fixed in the referenced Fourier-Sobolev definition. Let $K:\mathbb R^d\to[0,\infty)$ be smooth, vanish outside a compact subset of $B_1(0)$, and satisfy $\int_{\mathbb R^d}K(s)\,ds=1$. For $0<\ell<L/2$, define the periodized kernel

$$G_\ell(r)=\sum_{n\in\mathbb Z^d}\ell^{-d}K\!\left(\frac{r+Ln}{\ell}\right),\qquad r\in\mathbb T_L^d.$$

For a field $q$ with finitely many real components, each smooth and $L$-periodic, define its filtered field by

$$\overline q_\ell(x)=\int_{\mathbb T_L^d}G_\ell(r)q(x-r)\,dx=L^d\int_{\mathbb T_L^d}G_\ell(r)q(x-r)\,d\mu_L(r).$$

Here $dx$ is the volume measure on one period cell. For any smooth periodic vector field $u:\mathbb T_L^d\to\mathbb R^d$, define the subfilter stress and transfer by

$$\tau_\ell=\overline{u\otimes u}_\ell-\overline u_\ell\otimes\overline u_\ell,\qquad \Pi_\ell=-\tau_\ell:\nabla\overline u_\ell,$$

where $(u\otimes v)_{ij}=u_i v_j$, $(\nabla v)_{ij}=\partial_jv_i$, and $A:B=\sum_{i,j}A_{ij}B_{ij}$. We call $\Pi_\ell$ the forward-transfer scalar by sign convention: $\tau_\ell:\nabla\overline u_\ell=-\Pi_\ell$, so $\Pi_\ell>0$ exactly when this stress-gradient contraction is negative. This convention does not assert an evolution equation, an energy balance, or a sign for $\Pi_\ell$. With length in metres and time in seconds, $x,L,\ell$ have units m, $u$ has units m s$^{-1}$, $G_\ell$ has units m$^{-d}$, $\tau_\ell$ has units m$^2$ s$^{-2}$, and $\Pi_\ell$ has units m$^2$ s$^{-3}$. The nonnegative-kernel hypothesis is part of this definition; no positivity or transfer-sign property is assigned to signed kernels or sharp spectral cutoffs.

## Definition references

[[def-fd-periodic-fourier-sobolev-spaces|normalized Fourier-Sobolev torus convention]]

[[def-countable-choice|Countable Choice axiom]]

[University of Washington, ME 544, *Large-Eddy Simulation* lecture notes, §2, printed pp. 5–6, filter definition and commutation conditions](https://courses.washington.edu/mengr544/handouts/hd-les.pdf)

[Gregory L. Eyink, *The ‘Multifractal Model’ of Turbulence and A Priori Estimates in Large-Eddy Simulation*, §1, printed pp. 2–3, filter and exact subscale stress](https://arxiv.org/pdf/chao-dyn/9602018)

