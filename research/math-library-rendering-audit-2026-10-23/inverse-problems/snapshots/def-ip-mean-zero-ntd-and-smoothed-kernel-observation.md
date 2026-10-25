---
id: def-ip-mean-zero-ntd-and-smoothed-kernel-observation
kind: definition
title: Mean-zero NtD map and smoothed kernel observation
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-ip-calderon-admissible-conductivity-class
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-ip-boundary-spectral-counting-and-sobolev-scale
  - lem-ip-mean-zero-neumann-problem-wellposedness
  - lem-surface-integral-is-independent-of-c-one-boundary-charts
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "Definition 1 and §2.3, mean-zero NtD map and the dimension-dependent smoothing exponent, printed pp. 9–11."
    - title: "Pedro Caro, Andoni García and Juan Manuel Reyes, Stability of the Calderón problem for less regular conductivities"
      url: "https://arxiv.org/pdf/1205.2487"
      locator: "§1 defines the weak Dirichlet-to-Neumann map on trace spaces and states its C^{1,ε} stability theorem; it does not state the Neumann-to-Dirichlet convention defined here."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Definition

Assume the Axiom of Choice and Countable Choice. Let $d\ge2$, let $\Omega\subset(0,1)^d$ be nonempty, bounded, connected and $C^\infty$, fix an open domain $\Omega'\Subset\Omega$ and real parameters $m>0$, $M\ge\max\{1,m\}$, $R>0$ and $0<\alpha<1$ defining $X_d(R)$, and let $\gamma\in X_d(R)$ be a real conductivity. Write $M=\partial\Omega$, let $dS$ be surface measure, and set
$$L^2_0(M)=\left\{f\in L^2(M):\int_M f\,dS=0\right\},\qquad P_0f=f-|M|^{-1}\int_Mf\,dS.$$
The mean-zero Neumann-to-Dirichlet operator $\mathscr R_\gamma:L^2_0(M)\to L^2_0(M)$ sends $f$ to the mean-zero boundary trace of the weak solution of $\nabla\cdot(\gamma\nabla u)=0$ with outward conormal flux $f$, as defined by the weak Neumann problem. Let $-\Delta_M$ be the nonnegative Laplace–Beltrami operator on the compact boundary manifold, with eigenpairs $(e_j,\lambda_j)$ on $L^2_0(M)$ from its spectral resolution. For $\tau=1/2$ when $d=2$ and any fixed $\tau>0$ when $d\ge3$, put
$$r_d:=\frac{d-1}{2}-1+\tau,\qquad C_M^{r_d/2}e_j=(1+\lambda_j)^{-r_d/2}e_j.$$
The smoothed observation is the bounded operator $A_\gamma:=\mathscr R_\gamma C_M^{r_d/2}:L^2_0(M)\to L^2_0(M)$. Its extension to all of $L^2(M)$ is $\widetilde A_\gamma f=\iota_0A_\gamma(P_0f)$, where $\iota_0:L^2_0(M)\hookrightarrow L^2(M)$ is inclusion. Thus its integral kernel, when it exists in $L^2(M\times M)$, is fixed to have zero mean in each variable. No assertion of a kernel's existence or Hilbert–Schmidt regularity is part of this definition.

## Definition references

[[def-ip-calderon-admissible-conductivity-class|The dimension-dependent conductivity class.]]

[[lem-ip-mean-zero-neumann-problem-wellposedness|Existence and uniqueness of the weak mean-zero Neumann solution.]]

[[lem-ip-boundary-spectral-counting-and-sobolev-scale|The boundary spectral resolution and Sobolev scale.]]

[[def-surface-integral-on-a-compact-c-one-hypersurface|The boundary surface measure and its mean.]]

[[def-ip-calderon-weak-dn-map-for-bounded-conductivities|The weak energy-form Dirichlet-to-Neumann convention.]]

[[lem-ip-calderon-rough-dn-map-wellposedness|Well-posedness and quotient conventions for the weak DN map.]]


