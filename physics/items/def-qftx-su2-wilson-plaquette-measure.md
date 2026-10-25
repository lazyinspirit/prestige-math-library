---
id: def-qftx-su2-wilson-plaquette-measure
kind: definition
title: Finite SU(2) Wilson plaquette measure
status: "published"
origin: session
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega through the finite lattice supplier and imported Lie-group example; no full Axiom of Choice is assumed."
deps:
  - def-countable-choice
  - def-qftx-nonabelian-lattice-gauge-data
  - ex-unitary-and-special-unitary-lie-groups
  - thm-heine-borel-rn
  - def-borel-sigma-algebra
  - def-measure
  - def-measure-space
  - def-probability-measure
  - def-polar-surface-measure-on-the-unit-sphere
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-tdmath-measure-integral
  - def-measure-with-density
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-nonabelian-lattice-gauge-data: mathematical-premise
  ex-unitary-and-special-unitary-lie-groups: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-measure: mathematical-premise
  def-measure-space: mathematical-premise
  def-probability-measure: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  def-product-sigma-algebra-and-finite-product-sigma-algebras: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  def-tdmath-measure-integral: mathematical-premise
  def-measure-with-density: mathematical-premise
justified_by:
  - lem-qftx-su2-one-plaquette-average
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "H. B. Meyer, Lattice QCD: A Brief Introduction, in Lattice QCD for Nuclear Physics, Lecture Notes in Physics 889"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf"
      locator: "§§1.2.4 and 1.4.1.1, printed pp. 13–14 and 22–24, for the Wilson plaquette action, Haar integration and strong-coupling conventions; the explicit SU(2) coordinate measure is defined locally."
    - title: "Robert Lohmayer, Eigenvalue Distributions of Wilson Loops"
      url: "https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf"
      locator: "§§4.1–4.2.2, printed pp. 59–64, for the two-dimensional plaquette measure and one-plaquette group integrals; the round SU(2) measure is established locally."
verification:
  precheck: pending
---

## Definition

Assume $\mathrm{AC}_\omega$. Use the matrix group $G_2=SU(2)=\{U\in M_2(\mathbb C):U^*U=I_2,\ \det U=1\}$ with matrix multiplication and the embedded smooth-manifold structure on $M_2(\mathbb C)\cong\mathbb R^8$ used for special unitary matrix groups. Its defining representation is the identity smooth homomorphism $\rho_2(U)=U$ on $W=\mathbb C^2$ with positive-definite Hermitian form $h(v,w)=v^*w$. In real coordinates every element has the form

$$
U(x)=\begin{pmatrix}x_0+ix_3&x_2+ix_1\\-x_2+ix_1&x_0-ix_3\end{pmatrix},\qquad x\in S^3:=\{x\in\mathbb R^4:\textstyle\sum_{j=0}^3x_j^2=1\}.
$$

Let $\sigma_3$ be the induced round surface-area measure on $S^3$, whose total area is $2\pi^2$, and let $\mu_2$ be the pushforward of $\sigma_3/(2\pi^2)$ under $x\mapsto U(x)$. In spherical coordinates $x_0=\cos\theta$, $(x_1,x_2,x_3)=\sin\theta\,n$, $0\leq\theta\leq\pi$, $n\in S^2$, its coordinate density is $d\mu_2=(2/\pi)\sin^2\theta\,d\theta\,d\omega_2(n)$, where $n=(\sin\varphi\cos\psi,\sin\varphi\sin\psi,\cos\varphi)$ and $d\omega_2=(1/(4\pi))\sin\varphi\,d\varphi\,d\psi$ for $0\leq\varphi\leq\pi$, $0\leq\psi<2\pi$. Define the real class function $\tau(U):=\tfrac12\operatorname{Tr}_2(U)=x_0$.

For each oriented face $p$, let $U_p$ be the product of its link matrices in boundary traversal order, using inverse matrices on reverse edges. For dimensionless $\beta\geq0$, define the pure-gauge Wilson plaquette action on any finite oriented lattice by

$$
S_\beta(U):=\beta\sum_{p}\bigl(1-\tau(U_p)\bigr),\qquad \beta=\frac{4}{g_0^2}
$$

when a dimensionless bare coupling $g_0>0$ is used. The finite link measure is the product of $\mu_2$ over positively oriented edges, and its normalized expectation is the finite product integral with density proportional to $e^{-S_\beta}$. The one-plaquette normalizing factor and one-plaquette probability are

$$
z_\beta:=\int_{G_2}e^{\beta\tau(U)}\,d\mu_2(U),\qquad d\nu_\beta(U):=z_\beta^{-1}e^{\beta\tau(U)}d\mu_2(U).
$$

Since $\tau(U)=x_0\in[-1,1]$, every $\beta\geq0$ gives $e^{-\beta}\leq z_\beta\leq e^\beta$; hence $z_\beta$ is finite and positive and $\nu_\beta$ is a normalized probability measure.

This defines only a finite-lattice mathematical measure; it does not define an infinite-volume or continuum expectation.

## Definition references

[[ex-unitary-and-special-unitary-lie-groups|Special unitary matrix group and its real Lie-group structure]]

[[thm-heine-borel-rn|Closed and bounded subsets of finite-dimensional real Euclidean space are compact]]

[[def-qftx-nonabelian-lattice-gauge-data|Finite lattice link variables and the Wilson plaquette setup]]

[[def-borel-sigma-algebra|Borel sigma-algebra for the matrix group]]

[[def-polar-surface-measure-on-the-unit-sphere|Euclidean round surface measure on the unit sphere]]

[[def-probability-measure|Normalized probability measure]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras|Finite product sigma-algebra]]

[[def-product-measure-on-sigma-finite-spaces|Finite link product measure]]

[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique|Finite product measure existence and rectangle formula]]

[[def-tdmath-measure-integral|One-plaquette integral]]

[[def-measure-with-density|One-plaquette probability from its density]]

[Meyer, §§1.2.3–1.2.4 and §1.4.1.1, printed pp. 11–14 and 22–24](https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf)

[Lohmayer, §§3.5.2–3.5.5 and §§4.1–4.2.2, printed pp. 44–51 and 59–64](https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf)
