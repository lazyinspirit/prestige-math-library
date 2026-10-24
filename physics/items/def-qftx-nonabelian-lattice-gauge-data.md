---
id: def-qftx-nonabelian-lattice-gauge-data
kind: definition
title: Finite non-Abelian lattice gauge data
status: draft
origin: session
dependency_level: 1
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega; inherited only through the supplied Lie(G) construction in the non-Abelian gauge datum."
deps:
  - def-countable-choice
  - def-qftx-nonabelian-gauge-data
  - def-differential-of-a-smooth-map
  - def-lie-group
  - def-topological-manifold-without-boundary
  - def-borel-sigma-algebra
  - lem-borel-product-of-second-countable-spaces
  - def-measure
  - def-measure-space
  - def-probability-measure
  - def-left-right-and-bi-invariant-borel-measure-on-a-lie-group
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-tdmath-measure-integral
  - def-measure-with-density
  - def-complex-l-two-inner-product
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-nonabelian-gauge-data: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  def-lie-group: mathematical-premise
  def-topological-manifold-without-boundary: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  lem-borel-product-of-second-countable-spaces: mathematical-premise
  def-measure: mathematical-premise
  def-measure-space: mathematical-premise
  def-probability-measure: mathematical-premise
  def-left-right-and-bi-invariant-borel-measure-on-a-lie-group: mathematical-premise
  def-product-sigma-algebra-and-finite-product-sigma-algebras: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  def-tdmath-measure-integral: mathematical-premise
  def-measure-with-density: mathematical-premise
  def-complex-l-two-inner-product: mathematical-premise
  thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz: mathematical-premise
justified_by:
  - lem-qftx-lattice-data-well-defined
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "H. B. Meyer, Lattice QCD: A Brief Introduction, in Lattice QCD for Nuclear Physics, Lecture Notes in Physics 889"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf"
      locator: "§§1.2.3–1.2.4, printed pp. 11–14, for link variables, endpoint gauge transformations, traced loops and plaquette action."
    - title: "Robert Lohmayer, Eigenvalue Distributions of Wilson Loops"
      url: "https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf"
      locator: "§§3.5.2–3.5.5 and §4.1, printed pp. 44–51 and 59–61, for finite lattice variables, Wilson loops and two-dimensional plaquette factorization; the finite data are specified locally."
verification:
  precheck: pending
---

## Definition

Assume the axiom of countable choice $\mathrm{AC}_\omega$. Fix the compact noncommutative finite-dimensional real Lie group $G$ supplied by the earlier non-Abelian gauge-data definition. Its Lie algebra is $\mathfrak g=T_eG$, with bracket induced by left-invariant smooth vector fields. Fix also a finite-dimensional complex vector space $W$, a positive-definite Hermitian form $h$ on $W$, and a specified smooth group homomorphism $\rho:G\to U(W,h)$, where $U(W,h)$ is the group of invertible complex-linear maps preserving $h$. Thus multiplication and inversion on $G$ are smooth, $G$ is compact in its manifold topology, and every $\rho(g)$ preserves $h$. Every finite power $G^S$ below has the product smooth-manifold structure, with charts given by products of charts of $G$; for $S=\varnothing$, set $G^S=\{()\}$ with its one-point smooth structure. No connection, principal bundle sector, action functional, or continuum theory is part of the lattice data below.

A **finite oriented lattice two-complex** is a finite set $\mathcal V$ of vertices, a finite set $\mathcal E^+$ containing one chosen orientation of each edge, an endpoint map $s,t:\mathcal E^+\to\mathcal V$, and a finite set $\mathcal F$ of faces. Each face $p\in\mathcal F$ is supplied with a based closed edge word $(e_1,\ldots,e_k)$ in the oriented edges $\mathcal E^+\sqcup\overline{\mathcal E^+}$, where the endpoint of each edge is the starting point of the next and the last endpoint is the first starting point. For the reverse orientation $\bar e$ of $e\in\mathcal E^+$, set $s(\bar e)=t(e)$ and $t(\bar e)=s(e)$.

A **link configuration** is a tuple $U=(U_e)_{e\in\mathcal E^+}\in G^{\mathcal E^+}$, with $U_{\bar e}:=U_e^{-1}$. The **holonomy of a face** $p=(e_1,\ldots,e_k)$ is the ordered product $U_p:=U_{e_1}\cdots U_{e_k}$ in traversal order, with the first traversed edge on the left. The vertex gauge group is $G^{\mathcal V}$ with coordinatewise multiplication; write $\mathbf e=(e)_{v\in\mathcal V}$ for its identity tuple. It acts by

$$
(h\cdot U)_e=h_{s(e)}U_eh_{t(e)}^{-1},\qquad h=(h_v)_{v\in\mathcal V}\in G^{\mathcal V}.
$$

Choose a normalized bi-invariant finite Radon Borel probability measure $\mu_G$ on $G$; explicitly, $\mu_G(G)=1$ and $\mu_G(gA)=\mu_G(Ag)=\mu_G(A)$ for every $g\in G$ and Borel $A\subseteq G$. The link measure is the finite product $\mu_G^{\mathcal E^+}$; for $\mathcal E^+=\varnothing$, this is the unit point mass on $G^{\varnothing}=\{()\}$. Empty sums are zero. For each face choose a continuous dimensionless function $\Phi_p:G\to\mathbb R$ satisfying $\Phi_p(gzg^{-1})=\Phi_p(z)$ and $\Phi_p(z^{-1})=\Phi_p(z)$. Define the dimensionless lattice action and its normalized expectation by

$$
S_\Lambda(U):=\sum_{p\in\mathcal F}\Phi_p(U_p),\qquad Z_\Lambda:=\int_{G^{\mathcal E^+}}e^{-S_\Lambda(U)}\,d\mu_G^{\mathcal E^+}(U),\qquad \langle O\rangle_\Lambda:=Z_\Lambda^{-1}\int_{G^{\mathcal E^+}}O(U)e^{-S_\Lambda(U)}\,d\mu_G^{\mathcal E^+}(U)
$$

for bounded measurable $O:G^{\mathcal E^+}\to\mathbb C$. The finite-volume **Gauss sector** is the closed subspace of $L^2(G^{\mathcal E^+},\mathbb P_\Lambda)$ consisting of measurable functions with finite integral of $|f|^2$, modulo equality $\mathbb P_\Lambda$-almost everywhere, whose equivalence classes are invariant under each element of $G^{\mathcal V}$. Here $\mathbb P_\Lambda$ is the normalized probability with density $Z_\Lambda^{-1}e^{-S_\Lambda}$ relative to product link measure. For $v\in\mathcal V$ and $X\in\mathfrak g$, let $X^{(v)}$ be the tangent vector at the identity of $G^{\mathcal V}$ with component $X$ at $v$ and zero at other vertices. If $\alpha(h,U)=h\cdot U$, define the infinitesimal **Gauss generator** on $C^\infty(G^{\mathcal E^+})$ by

$$
(D_{v,X}f)(U):=df_U\!\left(d\alpha_{(\mathbf e,U)}(X^{(v)},0)\right).
$$

The full Gauss sector uses invariance under every vertex gauge transformation; the infinitesimal equations $D_{v,X}f=0$ alone are not asserted to impose invariance under disconnected components of $G$. Link variables and the action are dimensionless. This finite mathematical regulator makes no continuum-limit or empirical claim.

## Definition references

[[def-qftx-nonabelian-gauge-data|Compact group, Lie algebra, and unitary representation input]]

[[def-countable-choice|Countable-choice assumption carried by the supplied Lie algebra construction]]

[[def-differential-of-a-smooth-map|Differential as the tangent map of the smooth gauge action]]

[[def-lie-group|Finite-dimensional real Lie group structure]]

[[def-topological-manifold-without-boundary|Hausdorff and second-countable manifold topology]]

[[def-borel-sigma-algebra|Borel sigma-algebra on the compact group]]

[[lem-borel-product-of-second-countable-spaces|Borel sigma-algebra on finite products of the second-countable Lie group]]

[[def-left-right-and-bi-invariant-borel-measure-on-a-lie-group|Normalized bi-invariant Borel probability measure]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras|Finite product sigma-algebra]]

[[def-product-measure-on-sigma-finite-spaces|Product measure on sigma-finite measure spaces]]

[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique|Existence, rectangle formula, and uniqueness of the finite product measure]]

[[def-tdmath-measure-integral|Measure integral and integrability conventions]]

[[def-measure-with-density|Measure defined by a nonnegative density]]

[[def-complex-l-two-inner-product|Complex $L^2$ pairing and norm convention]]

[[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz|Well-definedness and norm properties of complex $L^2$]]

[Meyer, §§1.2.3–1.2.4 and §1.4.1.1, printed pp. 11–14 and 22–24](https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf)

[Lohmayer, §§3.5.2–3.5.5 and §§4.1–4.2, printed pp. 44–51 and 59–63](https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf)
