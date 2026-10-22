---
id: def-gr-fx-connection-path-transport
kind: definition
title: Connection path transport
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-gr-fx-tetrad-spin-connection
  - prop-gr-fx-connection-path-transport-exists
  - def-gauge-group-of-a-smooth-principal-bundle
dependency_roles:
  def-gr-fx-tetrad-spin-connection: mathematical-premise
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
---

## Definition

Let $M$ be a smooth time-oriented Lorentzian four-manifold, $U\subseteq M$ a nonempty open set with a smooth tetrad, and $\omega$ its Lorentz-connection matrix from [[def-gr-fx-tetrad-spin-connection]]. Assume the supplier's $\mathrm{AC}_\omega$ convention. For a piecewise-smooth path $\gamma:[0,1]\to U$, let $A_\gamma(t)=\omega_{\gamma(t)}(\dot\gamma(t))$ on each smooth piece. By Proposition [[prop-gr-fx-connection-path-transport-exists]], there is a unique continuous piecewise-$C^1$ solution

$$\dot U_\gamma(t)=-A_\gamma(t)U_\gamma(t),\qquad U_\gamma(0)=I_4.$$

The endpoint matrix $U_\gamma(1)$ is the **connection path transport** in the chosen tetrad trivialization. It maps vector components at $\gamma(0)$ to components at $\gamma(1)$ under the convention of the supplier. A smooth local Lorentz frame change transforms this matrix by its endpoint frame matrices; it is a gauge transformation in the principal-bundle sense only if it extends to an automorphism over the identity as in [[def-gauge-group-of-a-smooth-principal-bundle]].

## Definition references

[[def-gr-fx-tetrad-spin-connection]]

[[prop-gr-fx-connection-path-transport-exists]]

[[def-gauge-group-of-a-smooth-principal-bundle]]

## Remarks

This is transport of tangent-vector components in a local tetrad, not holonomy of a foliation or a claim that a global tetrad or spin structure exists. Reversing a path reverses its parameter; path ordering is fixed by the displayed left-multiplication ODE.
