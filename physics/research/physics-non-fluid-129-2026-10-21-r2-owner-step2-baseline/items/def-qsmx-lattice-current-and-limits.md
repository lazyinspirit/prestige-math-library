---
id: def-qsmx-lattice-current-and-limits
kind: definition
title: Local charge current and finite-volume correlation conventions
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - thm-qsm-dt-finite-kubo
dependency_roles:
  thm-qsm-dt-finite-kubo: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "J. Sirker, Transport in one-dimensional integrable quantum systems, SciPost Physics Lecture Notes 17 (2020), §2, equations (2.1)–(2.4)"
      url: https://arxiv.org/pdf/1910.12155
      locator: "§2, PDF pp. 2–3, equations (2.1)–(2.4): lattice continuity equations and commutator-defined spin and energy currents."
    - title: "MIT OpenCourseWare 22.103, Microscopic Theory of Transport, Lecture 3: Diffusion and the Velocity Autocorrelation—Green-Kubo Relations"
      url: https://ocw.mit.edu/courses/22-103-microscopic-theory-of-transport-fall-2003/42a7a0ddcb94eb23f6c096ae04da0162_lec3.pdf
      locator: "Lecture 3, equations (3.1)–(3.8): stationary current correlations, time integration, and limit-qualified transport coefficients."
---

## Definition

Fix either a finite open chain with sites $\{1,\ldots,L\}$, $L\ge2$, or a periodic chain with sites $\mathbb Z/L\mathbb Z$, $L\ge3$, and denote its site set by $\Lambda_L$. Let $\mathcal H_L$ be a nonzero finite-dimensional complex Hilbert space. For each site $j$, let $q_j=q_j^*$ be a bounded charge observable, with physical unit $\mathsf Q$. For each oriented nearest-neighbor bond $(j,j+1)$, let $h_{j,j+1}=h_{j,j+1}^*$ be an energy operator in joules. Require $[h_{k,k+1},q_j]=0$ whenever $j\notin\{k,k+1\}$, and require local charge conservation $[h_{j,j+1},q_j+q_{j+1}]=0$. On an open chain set $H_L=\sum_{j=1}^{L-1}h_{j,j+1}$; on a ring set $H_L=\sum_{j\in\mathbb Z/L\mathbb Z}h_{j,j+1}$ with periodic indices. For an open chain define the absent boundary currents $j_{0,1}=j_{L,L+1}=0$. Use $\hbar>0$ in joule-seconds. These finite local data may be realized on a tensor-product spin space or on a finite fixed-particle site space, provided the stated commutation conditions hold.

The oriented bond current from $j$ to $j+1$ is
$$j_{j,j+1}:=\frac{i}{\hbar}[h_{j,j+1},q_{j+1}].$$
It has unit $\mathsf Q\,\mathrm{s}^{-1}$. The total current is the sum over existing bonds, $J_L:=\sum_{(j,j+1)}j_{j,j+1}$, and its Heisenberg evolution for $t\in\mathbb R$ is $J_L(t):=e^{iH_Lt/\hbar}J_Le^{-iH_Lt/\hbar}$. For finite inverse temperature $\beta>0$ in joules$^{-1}$, define $\rho_{\beta,L}:=e^{-\beta H_L}/\operatorname{Tr}(e^{-\beta H_L})$ and $\omega_{\beta,L}(A):=\operatorname{Tr}(\rho_{\beta,L}A)$. Write $J_L^\circ:=J_L-\omega_{\beta,L}(J_L)I$ and $J_L^\circ(t):=e^{iH_Lt/\hbar}J_L^\circ e^{-iH_Lt/\hbar}$. Define the real, connected, symmetrized correlation per site by
$$C_L(t):=\frac{1}{L}\operatorname{Re}\,\omega_{\beta,L}\!\left(J_L^\circ(t)J_L^\circ\right)=\frac{1}{2L}\omega_{\beta,L}\!\left(J_L^\circ(t)J_L^\circ+J_L^\circ J_L^\circ(t)\right).$$
The correlation has unit $\mathsf Q^2\,\mathrm{s}^{-2}$ per site.

This definition assigns no transport coefficient by itself. Any proposed finite-volume or thermodynamic transport quantity must additionally state its time cutoff, frequency regulator (for example $e^{-\eta t}$ with $\eta>0$ in seconds$^{-1}$), spatial normalization, and the exact order in which $L\to\infty$, the time cutoff tends to infinity, and any regulator is removed. Existence of those limits is not part of this definition.

## Definition references

[[thm-qsm-dt-finite-kubo]]

[Sirker, §2](https://arxiv.org/pdf/1910.12155)

[MIT OpenCourseWare 22.103, Lecture 3](https://ocw.mit.edu/courses/22-103-microscopic-theory-of-transport-fall-2003/42a7a0ddcb94eb23f6c096ae04da0162_lec3.pdf)

