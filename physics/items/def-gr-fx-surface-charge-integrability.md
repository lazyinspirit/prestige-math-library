---
id: def-gr-fx-surface-charge-integrability
kind: definition
title: Integrability of a covariant surface-charge variation
status: published
origin: pipeline
domain: mathematics
dependency_level: 4
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-gr-fx-admissible-phase-reduction
  - lem-gr-fx-star-shaped-poincare-homotopy
  - def-hamiltonian-vector-field-and-hamiltonian-function
  - def-pullback-of-a-differential-form
  - thm-the-exterior-derivative-commutes-with-pullback
dependency_roles:
  def-gr-fx-admissible-phase-reduction: mathematical-premise
  lem-gr-fx-star-shaped-poincare-homotopy: mathematical-premise
  def-hamiltonian-vector-field-and-hamiltonian-function: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  thm-the-exterior-derivative-commutes-with-pullback: mathematical-premise
sources:
  references:
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §1.4.2, Integrability condition"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §3"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, §§2.3–2.4"
      url: "https://arxiv.org/pdf/1906.08616"
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

Let $(\mathcal S,\Omega)$ be exactly a finite-dimensional smooth solution
manifold with its smooth closed two-form as specified in
[[def-gr-fx-admissible-phase-reduction]]. Let $M$ be the spacetime and
$\pi:E\to M$ the chosen field bundle. For a fixed smooth spacetime vector
field $\xi$ with local flow $\Phi_t$, suppose a smooth local lift
$\widetilde\Phi_t$ to fibre-preserving local diffeomorphisms of $E$ over
$\Phi_t$ is specified, with the local flow composition law. Define its action
on a field section by
$$ (A_t\phi)(x):=\widetilde\Phi_{-t}\bigl(\phi(\Phi_t(x))\bigr). $$
Assume the joint local action $(t,p)\mapsto A_t(p)$ is smooth, preserves the
selected solution manifold and boundary conditions, and induces maps
$A_t:\mathcal S\to\mathcal S$. For
$p\in\mathcal S$, define the induced phase-space vector field by
$$X_\xi(p):=\left.\frac{d}{dt}\right|_{t=0}A_t(p)\in T_p\mathcal S.$$
In particular, the association $\xi\mapsto X_\xi$ is specified by the
lifted action and its preservation hypotheses; it is not inferred merely
from the name of a diffeomorphism generator. Define the one-form
$\alpha_\xi$ on $\mathcal S$ by
$$ (\alpha_\xi)_p(v):=\Omega_p(X_\xi(p),v),\qquad v\in T_p\mathcal S.$$
It is **integrable on $\mathcal S$** when there is a globally defined smooth
function $H_\xi:\mathcal S\to\mathbb R$ with
$d_{\mathcal S}H_\xi=\alpha_\xi$, using the convention
$\iota_{X_\xi}\Omega=d_{\mathcal S}H_\xi$. For a smooth map $f:P\to\mathcal S$
from a finite-dimensional smooth parameter manifold and a chart
$\chi:U\to V\subseteq\mathbb R^m$ with $V$ open and star-shaped, if the
pulled-back one-form $f^*\alpha_\xi$ is closed on $U$, then its coordinate
representative $(\chi^{-1})^*(f^*\alpha_\xi)$ has a local primitive on $V$.
Here $m\ge1$; if $m=0$, every one-form on the chart is zero and is locally
exact.
Global integrability on $\mathcal S$ is the stronger exactness condition.

## Definition references

[Advanced Lectures on General Relativity, §1.4.2](https://arxiv.org/pdf/1801.07064)

[Hamiltonian vector field and Hamiltonian function](https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf)

[[def-gr-fx-admissible-phase-reduction]]

[[lem-gr-fx-star-shaped-poincare-homotopy]]

[[def-hamiltonian-vector-field-and-hamiltonian-function]]

[[def-pullback-of-a-differential-form]]

[[thm-the-exterior-derivative-commutes-with-pullback]]

## Remarks

A diffeomorphism direction is null exactly when
$\iota_{X_\xi}\Omega=0$. If an admissible boundary charge has nonzero
variation, that direction is not null and survives a reduction that quotients
only by null directions. Neither covariance nor on-shell closure alone
guarantees integrability. The potential ambiguity can change boundary terms
in $\Omega$, so integrability must be checked after the boundary conditions
and the choice of $\mu$ and $Y$ in the potential ambiguity are specified.
