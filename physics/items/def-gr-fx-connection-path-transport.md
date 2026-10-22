---
id: def-gr-fx-connection-path-transport
kind: definition
title: Connection path transport
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-gr-fx-tetrad-spin-connection
  - def-gr-fx-thin-paths
  - prop-gr-fx-connection-path-transport-exists
  - def-gauge-group-of-a-smooth-principal-bundle
dependency_roles:
  def-gr-fx-tetrad-spin-connection: mathematical-premise
  def-gr-fx-thin-paths: mathematical-premise
  prop-gr-fx-connection-path-transport-exists: mathematical-premise
  def-gauge-group-of-a-smooth-principal-bundle: mathematical-premise
physical_scope: null
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §3.3 Parallel transport"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "§3.3, the transport ODE; §3.3.3, path dependence and curvature."
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, Chapter 3"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 3, tetrad connection matrices and covariant differentiation along curves."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Assume the $\mathrm{AC}_\omega$ convention for the local tetrad supplier. Let $(M,g,N)$ be a smooth time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$, let $U\subseteq M$ be nonempty and open, and let $E=(E_0,E_1,E_2,E_3)$ be a smooth future-directed orthonormal tetrad on $U$. Choose a smooth metric-compatible affine connection $\nabla$ on $TM|_U$. Its Lorentz-connection matrix $\omega=(\omega^I{}_J)$ in $E$ is specified by $\nabla_XE_J=\sum_I\omega^I{}_J(X)E_I$; the choice of $\nabla$ is part of the data.

A piecewise-smooth path $\gamma:[0,1]\to U$ is continuous and has a finite partition $0=t_0<\cdots<t_m=1$ on whose closed subintervals its restrictions are smooth up to the boundary. On each such piece let $A_{\gamma,j}(t)=\omega_{\gamma(t)}(\dot\gamma(t))$, using that piece's one-sided tangent at its endpoints. Each $A_{\gamma,j}:[t_{j-1},t_j]\to M_4(\mathbb R)$ is continuous. The piecewise matrix-ODE existence proposition gives a unique continuous piecewise-$C^1$ solution

$$\dot U_\gamma(t)=-A_{\gamma,j}(t)U_\gamma(t),\qquad U_\gamma(0)=I_4.$$

The equation holds in each piece's interior with the corresponding one-sided derivatives at its endpoints; uniqueness also makes the solution independent of subdivision. The endpoint matrix $U_\gamma(1)$ is the **connection path transport** in the chosen tetrad trivialization. It maps vector components at $\gamma(0)$ to components at $\gamma(1)$. A smooth local Lorentz frame change transforms this matrix by its endpoint frame matrices; it is a gauge transformation in the principal-bundle sense only if it extends to an automorphism over the identity.

## Definition references

[[def-gr-fx-thin-paths]]

[[def-gr-fx-tetrad-spin-connection]]

[[prop-gr-fx-connection-path-transport-exists]]

[[def-gauge-group-of-a-smooth-principal-bundle]]

## Remarks

This is transport of tangent-vector components in a local tetrad, not holonomy of a foliation or a claim that a global tetrad or spin structure exists. Reversing a path reverses its parameter; path ordering is fixed by the displayed left-multiplication ODE.
