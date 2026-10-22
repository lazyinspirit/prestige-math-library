---
id: prop-gr-fx-oriented-time-oriented-orthonormal-frame-bundle
kind: proposition
title: Oriented time-oriented orthonormal frame bundle
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-smooth-lorentzian-objects
  - def-gr-local-frame-and-tetrad-fields
  - def-countable-choice
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-oriented-real-vector-bundle-and-oriented-frame-bundle
  - def-frame-bundle-and-associated-vector-bundle
  - def-smooth-principal-g-bundle
  - def-rpm-h-poincare-charge-space
  - thm-gr-local-lorentz-tetrad-existence
  - lem-gr-tetrad-change-of-basis-is-lorentz
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-local-frame-and-tetrad-fields: mathematical-premise
  def-countable-choice: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-oriented-real-vector-bundle-and-oriented-frame-bundle: mathematical-premise
  def-frame-bundle-and-associated-vector-bundle: mathematical-premise
  def-smooth-principal-g-bundle: mathematical-premise
  def-rpm-h-poincare-charge-space: mathematical-premise
  thm-gr-local-lorentz-tetrad-existence: mathematical-premise
  lem-gr-tetrad-change-of-basis-is-lorentz: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3, tetrads and non-coordinate bases, printed pp. 88–95 (PDF pp. 95–102)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Equations (3.114)–(3.126), printed pp. 88–91; local tetrads and pointwise Lorentz changes."
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §3.1.2 and §3.4.2"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "§3.1.2, tetrads at a point, and §3.4.2, orthonormal-frame connection conventions."
verification:
  precheck: pass
physical_scope: null
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,g,N,o)$ be an oriented,
time-oriented smooth Lorentzian four-manifold of signature $(-,+,+,+)$.
Define $P^+_g(M)$ to have fiber over $p\in M$ the linear isometries
$u:(\mathbb R^4,\eta)\to(T_pM,g_p)$ that preserve the chosen orientation and
send the standard future cone to the future cone selected by $N$. With the
right action $u\cdot A:=u\circ A$, $A\in SO^+(1,3)$, this is a smooth right
principal $SO^+(1,3)$-bundle. Its fibers consist exactly of positively
oriented future-directed orthonormal tetrads. The conclusion is local
triviality; it asserts no global section.

## Statement references

[[def-gr-smooth-lorentzian-objects]]

[[def-gr-local-frame-and-tetrad-fields]]

[[def-oriented-smooth-manifold-and-oriented-chart]]

[[def-smooth-principal-g-bundle]]

[[thm-gr-local-lorentz-tetrad-existence]]

[[lem-gr-tetrad-change-of-basis-is-lorentz]]

## Facts & Assumptions

**Given:** The oriented and time-oriented Lorentzian four-manifold and
$\mathrm{AC}_\omega$ convention in the Statement.

[A1] Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] [[thm-gr-local-lorentz-tetrad-existence]]: around every point there is an open neighborhood with a smooth future-directed orthonormal tetrad.

[F2] [[def-oriented-smooth-manifold-and-oriented-chart]]: an orientation is a smooth choice of orientation ray in each determinant line.

[F3] [[lem-gr-tetrad-change-of-basis-is-lorentz]]: two future-directed tetrads at one point differ by a unique Lorentz matrix with $\Lambda^{\mathsf T}\eta\Lambda=\eta$, $\det\Lambda=\pm1$, and $\Lambda^0{}_0>0$.

[F4] [[def-rpm-h-poincare-charge-space]]: under $\mathrm{AC}_\omega$, $SO^+(1,3)$ is a six-dimensional matrix Lie group, open in the Lorentz matrix submanifold of $GL(4,\mathbb R)$; its topology inherits a countable base from that Euclidean matrix space.

[F5] [[def-smooth-principal-g-bundle]]: a smooth right principal bundle has equivariant local product diffeomorphisms to $U\times G$.

[F6] [[def-gr-smooth-lorentzian-objects]]: $M$ is a Hausdorff second-countable smooth four-manifold; the matrix Lie group $SO^+(1,3)$ inherits a countable basis from its finite-dimensional matrix topology.

## Proof

1.1 For each point $p$, use [F1] to choose a neighborhood $U$ and a smooth future-directed tetrad $E$ there. Take any coordinate chart around $p$. Relative to its coordinate determinant frame, the smooth orientation ray [F2] has locally constant sign; shrink around $p$ to keep that sign fixed, and reverse one coordinate if the sign is negative. This gives a local oriented coordinate frame. In it, the determinant of the component matrix of $E$ is a smooth nonzero real function; shrink $U$ to a connected neighborhood of $p$, so its sign is constant. If that sign is negative, replace $E_1$ by $-E_1$. This preserves orthonormality and the future direction of $E_0$ and makes $E$ positively oriented by [F2]. Thus positively oriented future tetrads exist locally. [given, A1, F1, F2, algebra]

1.2 Let $u,v$ lie in a common fiber of $P^+_g(M)$. Since $u$ is an isomorphism, $A:=u^{-1}v$ is the unique real matrix with $v=u\circ A$. The isometry condition gives $A^{\mathsf T}\eta A=\eta$. Positivity of the two frame orientations gives $\det A>0$, while the Lorentz identity gives $\det A=\pm1$, hence $\det A=1$. Because $u(e_0)$ and $v(e_0)$ are future timelike, $A e_0$ is future timelike; and the invertible Lorentz map $A$ is a homeomorphism of the timelike set. It therefore maps each connected component onto a component, and the image of $e_0$ shows that it preserves the future component. Thus $A\in SO^+(1,3)$. This proves that the right action is transitive on each fiber; uniqueness of $A$ proves freeness. [given, F3, algebra]

2.1 For a local positively oriented future tetrad section $E$ on $U$, define $\Psi_E:U\times SO^+(1,3)\to(P^+_g(M))|_U$ by $\Psi_E(p,A)=E(p)\circ A$. Step 1.2 makes this map bijective. Its set-theoretic inverse sends a frame $u$ over $p$ to $(p,E(p)^{-1}\circ u)$. We construct the topology and smooth structure using these bijections, rather than assuming smoothness of functions on the total space. [step 1.1, step 1.2, F4, algebra]

3.1 If $E'$ is another such section on an overlap, write $E'(p)=E(p)\circ A(p)$. Its coefficients are $A^I{}_J(p)=e^I_p(E'_J(p))$, hence are smooth functions of the base point: both $e$ and $E'$ are smooth fields on $M$. Thus $A$ is a smooth map into the embedded matrix Lie group [F4], and step 1.2 places every value in $SO^+(1,3)$. The transition between the charts is $(p,B)\mapsto(p,A(p)B)$, which is smooth; its inverse $(p,B)\mapsto(p,A(p)^{-1}B)$ is smooth because inversion is smooth in the Lie group of [F4]. Declare a subset of the total space open exactly when its preimage under every $\Psi_E$ is open. The overlap maps just computed are diffeomorphisms on open product domains, so each $\Psi_E$ is a homeomorphism onto an open subset; combined with base and group coordinate charts, they give a compatible smooth atlas. In this atlas the right action is $(p,B,C)\mapsto(p,BC)$, hence smooth, and the projection is the product projection. [step 1.2, step 2.1, F4, algebra]

4.1 The charts of step 2.1 and smooth transitions from step 3.1 give $P^+_g(M)$ local products $U\times SO^+(1,3)$. Different base points separate by the Hausdorff base [F6], and distinct frames over one point separate in the Hausdorff matrix group [F4], so the total space is Hausdorff. For second countability, let $\mathcal B$ be a countable base of $M$; for each $B\in\mathcal B$ contained in at least one local-section neighborhood, use [A1] to select one pair consisting of such a neighborhood and a positively oriented future tetrad on it. The selected countable family of neighborhoods covers $M$, and countable bases of each selected $U\times SO^+(1,3)$ give a countable base of the total space by [F4,F6]. Thus the local charts define a smooth manifold structure. Freeness and fiberwise transitivity were proved in step 1.2; by [F5], this is a smooth right principal $SO^+(1,3)$-bundle. The construction supplies local sections only, so no global tetrad is asserted. [A1, step 1.2, step 2.1, step 3.1, F4, F5, F6] ∎