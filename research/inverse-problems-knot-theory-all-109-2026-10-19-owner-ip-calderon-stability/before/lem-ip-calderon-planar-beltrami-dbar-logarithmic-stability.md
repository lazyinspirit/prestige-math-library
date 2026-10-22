---
id: lem-ip-calderon-planar-beltrami-dbar-logarithmic-stability
kind: lemma
title: Planar BV logarithmic Calderón stability
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-ip-calderon-admissible-conductivity-class
  - def-ip-calderon-weak-dn-map-for-bounded-conductivities
  - lem-ip-bv-translation-modulus-for-conductivity
  - lem-ip-calderon-boundary-trace-quotient-identification
  - lem-ip-calderon-rough-dn-map-wellposedness
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Daniel Faraco and Martí Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Theorem 1.6, printed pp. 1–2; proof of Theorem 3.5 in Section 6.2, printed pp. 41–43, using the preceding Beltrami-CGO and scattering-transform sections."
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "Section 3.1, Theorem 3.2 and its dimension-two proof, printed pp. 13–14."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $\Omega\subset(0,1)^2$ be a nonempty bounded connected smooth domain, let $\Omega'\Subset\Omega$, and fix $m>0$, $M\ge\max\{1,m\}$ and $R>0$. For every $\gamma,\gamma_0\in X_2(R)$ there exist constants $C>0$, $\rho>0$ and $t_0\in(0,1)$, depending only on $\Omega,\Omega',m,M,R$, such that
$$\|\gamma-\gamma_0\|_{L^2(\Omega)}\le C\,\omega\!\left(\|\dot{\Lambda}_\gamma-\dot{\Lambda}_{\gamma_0}\|_{\mathcal L(\mathcal D(\Omega)/\mathbb C\mathbf1,(\mathcal D(\Omega)/\mathbb C\mathbf1)^*)}\right),$$
where $\mathcal D(\Omega)$ is the trace quotient and $\dot\Lambda_\gamma$ is the induced weak Dirichlet-to-Neumann map on the constant quotient, and
$$\omega(0):=0,\qquad \omega(t):=\left[\log\!\left(\frac1{\min\{t,t_0\}}\right)\right]^{-\rho}\quad(t>0).$$

## Statement references

[[def-ip-calderon-admissible-conductivity-class|The planar uniformly elliptic BV class with fixed background near the boundary.]]

[[def-ip-calderon-weak-dn-map-for-bounded-conductivities|The weak DN map and its constant quotient.]]

