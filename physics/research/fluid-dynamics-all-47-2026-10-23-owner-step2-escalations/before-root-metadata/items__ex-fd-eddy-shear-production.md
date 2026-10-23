---
id: ex-fd-eddy-shear-production
kind: example
title: Adopted simple shear production
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - def-countable-choice
  - pthm-fd-eddy-closure-resolved-dissipation
dependency_roles:
  def-countable-choice: mathematical-premise
  pthm-fd-eddy-closure-resolved-dissipation: physical-result
physical_scope: >-
  Pointwise simple-shear state of the adopted three-dimensional LES closure.
  This is an exact model calculation, not a measured flow or a solution-
  existence claim.
empirical_premises: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
---
## Example

Let $I\subset\mathbb R$ be an open time interval measured in s, $L>0$ m, and $0<\ell<L/2$. At a point $(x_0,t_0)\in\mathbb T_L^3\times I$ of a smooth periodic incompressible three-dimensional resolved velocity field $\overline u_\ell$ (position in m and velocity in m s$^{-1}$), use $(\nabla\overline u_\ell)_{ij}=\partial_j\overline u_{\ell,i}$ and define $D_\ell=(\nabla\overline u_\ell+(\nabla\overline u_\ell)^T)/2$. Suppose the gradient is

$$\nabla\overline u_\ell(x_0,t_0)=\begin{pmatrix}0&S&0\\0&0&0\\0&0&0\end{pmatrix},$$

where $S\in\mathbb R$ is the local shear rate in s$^{-1}$. Let $I_3$ denote the $3\times3$ identity matrix and define $A:B=\sum_{i,j=1}^3A_{ij}B_{ij}$ for real $3\times3$ matrices. Let $k_0=k(x_0,t_0)\ge0$ m$^2$ s$^{-2}$ and $\nu_0=\nu_t(x_0,t_0)\ge0$ m$^2$ s$^{-1}$, and use $\tau_{\ell}^{\rm model}=2kI_3/3-2\nu_tD_\ell$ and $\Pi_{\ell}^{\rm model}=-\tau_{\ell}^{\rm model}:\nabla\overline u_\ell$. Then the modeled transfer at $(x_0,t_0)$ is $\nu_0S^2$ m$^2$ s$^{-3}$. This is a pointwise calculation in the adopted closure model; it asserts no measured value, finite-time evolution, or sign for exact filtered transfer.

## Example references

[[def-countable-choice|Axiom of Countable Choice]]

[[pthm-fd-eddy-closure-resolved-dissipation|resolved dissipation of the adopted eddy-viscosity closure]]

## Facts & Assumptions

**Given:** The pointwise gradient, $S\in\mathbb R$ in s$^{-1}$, and the nonnegative model values $k_0$ and $\nu_0$ with the units stated in the Example.

[A1] Adopted closure formula from [[pthm-fd-eddy-closure-resolved-dissipation]]: $\Pi_{\ell}^{\rm model}=2\nu_t|D_\ell|_F^2$ for a smooth divergence-free resolved field.

[A2] Countable Choice is carried by the referenced periodic-filter model: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

## Verification

1.1 Symmetrizing the given gradient gives $D_\ell(x_0,t_0)=\begin{pmatrix}0&S/2&0\\S/2&0&0\\0&0&0\end{pmatrix}$. Therefore $|D_\ell(x_0,t_0)|_F^2=(S/2)^2+(S/2)^2=S^2/2$. [given, algebra]

2.1 Apply [A1] at $(x_0,t_0)$, retaining the Countable Choice premise [A2], and substitute $\nu_t(x_0,t_0)=\nu_0$ and step 1.1: $\Pi_{\ell}^{\rm model}(x_0,t_0)=2\nu_0(S^2/2)=\nu_0S^2\ge0$. Since $[\nu_0S^2]=({\rm m^2\,s^{-1}})({\rm s^{-2}})={\rm m^2\,s^{-3}}$, the units agree. If $S=0$ or $\nu_0=0$, the value is exactly zero. This is an exact model calculation, not an observation. [A1, A2, step 1.1, algebra] ∎
