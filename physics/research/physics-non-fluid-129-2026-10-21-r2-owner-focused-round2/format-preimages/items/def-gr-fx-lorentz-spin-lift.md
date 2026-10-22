---
id: def-gr-fx-lorentz-spin-lift
kind: definition
title: Lorentzian spin-lift interface
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-gr-fx-tetrad-spin-connection
  - prop-gr-fx-oriented-time-oriented-orthonormal-frame-bundle
  - prop-gr-fx-spin-double-cover
  - def-frame-bundle-and-associated-vector-bundle
  - def-smooth-principal-g-bundle
  - def-principal-connection-and-vertical-curvature
  - def-countable-choice
dependency_roles:
  def-gr-fx-tetrad-spin-connection: mathematical-premise
  prop-gr-fx-oriented-time-oriented-orthonormal-frame-bundle: mathematical-premise
  prop-gr-fx-spin-double-cover: mathematical-premise
  def-frame-bundle-and-associated-vector-bundle: mathematical-premise
  def-smooth-principal-g-bundle: mathematical-premise
  def-principal-connection-and-vertical-curvature: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "Blagoje Oblak, From the Lorentz Group to the Celestial Sphere, arXiv:1508.00920 (2015)"
      url: "https://arxiv.org/pdf/1508.00920"
      locator: "§2.3, PDF pp. 24–27; SL(2,C) as the double cover of the connected Lorentz group."
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3, tetrads and non-coordinate bases, printed pp. 88–95 (PDF pp. 95–102)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Equations (3.125)–(3.146), local Lorentz gauge transformations and connection forms."
verification:
  precheck: pass
physical_scope: null
---

## Definition

Assume $\mathrm{AC}_\omega$. Let $(M,g,N,o)$ be an oriented and
time-oriented smooth Lorentzian four-manifold, and let
$P^+_g(M)$ be its smooth oriented time-oriented orthonormal frame bundle from
[[prop-gr-fx-oriented-time-oriented-orthonormal-frame-bundle]]. Set
$\mathrm{Spin}^+(1,3):=SL(2,\mathbb C)$ and let
$\rho:SL(2,\mathbb C)\to SO^+(1,3)$ be the Hermitian-matrix covering
homomorphism of [[prop-gr-fx-spin-double-cover]]. A **Lorentzian spin
structure** is a smooth right principal $SL(2,\mathbb C)$-bundle
$\widetilde P\to M$ together with a smooth map $\lambda:\widetilde P\to
P^+_g(M)$ over the identity of $M$ such that

$$\lambda(ua)=\lambda(u)\rho(a)\qquad
(u\in\widetilde P,\ a\in SL(2,\mathbb C)),$$

and the restriction of $\lambda$ to each fiber is a surjective two-sheeted
covering map. The map is over the identity, meaning $\pi^+\circ\lambda=\widetilde\pi$; the square below displays this base condition and is not used as a proof.

```tikzcd
\begin{tikzcd}
\widetilde P \arrow[r,"\lambda"] \arrow[d,"\widetilde\pi"'] & P^+_g(M) \arrow[d,"\pi^+"] \\
M \arrow[r,"\mathrm{id}_M"'] & M
\end{tikzcd}
```

For any supplied smooth finite-dimensional complex representation
$\sigma:SL(2,\mathbb C)\to GL(V_\sigma)$, its **associated spinor bundle** is
$\widetilde P\times_\sigma V_\sigma$ with the usual associated-bundle
identification. In particular, the defining representation on $\mathbb C^2$
produces a rank-two complex spinor bundle.

A **lift of a Lorentz connection** is a supplied principal connection
$\widetilde H\subset T\widetilde P$ such that
$d\lambda_u(\widetilde H_u)=H^+_{\lambda(u)}$ at each $u\in\widetilde P$,
where $H^+$ is the supplied horizontal distribution of the frame connection.
It induces a covariant derivative on each associated spinor bundle by
horizontal differentiation: a section is represented by an equivariant map
$f:\widetilde P\to V_\sigma$ with $f(ua)=\sigma(a)^{-1}f(u)$, and its
derivative along a base vector field $X$ is represented by
$df_u(\widetilde X^H_u)$, where $\widetilde X^H$ is the horizontal lift. The local Clifford-compatibility
calculation is a separate proposition about a supplied Dirac representation.
A spin structure, a global spinor field, and a lifted connection are extra data: this definition asserts
neither existence nor uniqueness of a spin lift, global tetrad, or connection
lift. The matrix group and covering homomorphism are Lorentzian; the Euclidean
$\mathrm{Spin}(4)$ cover is not substituted.

## Definition references

[[def-gr-fx-tetrad-spin-connection]]

[[prop-gr-fx-oriented-time-oriented-orthonormal-frame-bundle]]

[[prop-gr-fx-spin-double-cover]]

[[def-frame-bundle-and-associated-vector-bundle]]

[[def-smooth-principal-g-bundle]]

[[def-principal-connection-and-vertical-curvature]]

[[def-countable-choice]]
