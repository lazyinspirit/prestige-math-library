---
id: def-qsmx-summable-interaction-norm
kind: definition
title: Weighted interactions and gapped finite-volume paths
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
deps:
  - def-qsm-bounded-finite-range-interaction
  - def-qsm-local-spin-algebras
dependency_roles:
  def-qsm-bounded-finite-range-interaction: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "S. Bachmann, S. Michalakis, B. Nachtergaele, and R. Sims, Automorphic Equivalence within Gapped Phases of Quantum Lattice Systems, §§4.1–4.3"
      url: "https://arxiv.org/pdf/1102.0842"
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§3.3–4.1"
      url: "https://arxiv.org/pdf/1311.2717"
---

## Definition

Fix $d\ge1$, the site set $\Gamma=\mathbb Z^d$, its max-coordinate metric $d_\infty$, and the local spin algebras $\mathcal A_\Lambda$ of the uniformly finite-dimensional spin system. A finite interaction is a family $\Phi(Z)=\Phi(Z)^*\in\mathcal A_Z$ indexed by finite nonempty $Z\subset\Gamma$. For a finite $\Lambda\subset\Gamma$, define

$$H_\Lambda^\Phi:=\sum_{\varnothing\ne Z\subseteq\Lambda}\Phi(Z),\qquad \tau_t^{\Lambda,\Phi}(A):=e^{itH_\Lambda^\Phi/\hbar}Ae^{-itH_\Lambda^\Phi/\hbar},$$

where $\hbar>0$, $A$ is embedded in a common finite local algebra, and the finite sum is a self-adjoint matrix. When a path $\Phi_s$, $s\in[0,1]$, is used, each $\Phi_s(Z)$ is $C^1$ in matrix norm and the derivative is taken term by term.

For $r\ge0$ put $F(r)=(1+r)^{-d-1}$. The admissible weights used here are

$$F_a(r):=e^{-ar}F(r)\quad(a>0),\qquad F_\rho(r):=(1+r)^{-\rho}\quad(\rho>d).$$

For an admissible weight $G$, define the weighted interaction norm

$$\|\Phi\|_G:=\sup_{x,y\in\Gamma}\frac{1}{G(d_\infty(x,y))} \sum_{\substack{Z\subset\Gamma\ {\rm finite,\ nonempty}\\x,y\in Z}}\|\Phi(Z)\|.$$

The derivative norm of a path is

$$\|\partial\Phi\|_G:=\sup_{s\in[0,1]}\sup_{x,y\in\Gamma} \frac{1}{G(d_\infty(x,y))} \sum_{Z\ni x,y}|Z|\,\|\partial_s\Phi_s(Z)\|.$$

A finite-volume spectral band is a nonempty selected subset $\Sigma_\Lambda(s)\subseteq\sigma(H_\Lambda^{\Phi_s})$ together with the orthogonal projection onto the sum of its eigenspaces. It may be specified by an interval $I_\Lambda(s)$ with smoothly varying endpoints, in which case $\Sigma_\Lambda(s)=\sigma(H_\Lambda^{\Phi_s})\cap I_\Lambda(s)$. The band is uniformly isolated with gap $\gamma>0$ along a specified finite-volume exhaustion when

$$\operatorname{dist}\!\left(\Sigma_\Lambda(s),\sigma(H_\Lambda^{\Phi_s})\setminus\Sigma_\Lambda(s)\right)\ge\gamma$$

for every volume in that exhaustion and every $s\in[0,1]$. For spectral-flow arguments, the selected eigenvalues must also form a locally fixed spectral cluster: for each $s_0$, a contour in the resolvent set encloses exactly the selected eigenvalues for all $s$ in a neighborhood of $s_0$. In finite dimension this implies that its projection is $C^1$ when the Hamiltonian path is $C^1$. This cluster condition holds, for example, for the first $r_\Lambda$ eigenvalues counted with multiplicity when the integer $r_\Lambda$ is fixed along the path and the gap after them stays open. Uniform distance between the selected and unselected spectra alone does not prevent an interval from changing membership discontinuously. A ground band is such a band containing the lowest eigenvalue or a finite-volume cluster of lowest eigenvalues; no uniqueness is implicit.

For physical units, take interaction terms and Hamiltonians in joules, time in seconds, and $\hbar$ in joule-seconds. The path parameter $s$, lattice distance, and admissible weights are dimensionless; the interaction norm therefore has energy units and the derivative norm has energy units per dimensionless path parameter.

## Statement references

[[def-qsm-local-spin-algebras]]

[[def-qsm-bounded-finite-range-interaction]]

