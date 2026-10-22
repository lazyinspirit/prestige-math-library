---
id: post-nrqmx-magnetic-model-extension
kind: postulate
domain: physics
library: physics
title: Unbounded vector potential and effective Pauli model
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - def-nrqmx-magnetic-form-data
  - lem-nrqmx-magnetic-form-closability
  - thm-nrqmx-closed-form-representation
dependency_roles:
  def-nrqmx-magnetic-form-data: formulation-prerequisite
  lem-nrqmx-magnetic-form-closability: mathematical-premise
  thm-nrqmx-closed-form-representation: mathematical-premise
physical_scope: "A nonrelativistic point-particle model with a static smooth external vector potential and locally integrable lower-bounded scalar potential on Euclidean R^d, d >= 1, in SI units. The planar field is the scalar perpendicular component and the three-dimensional field is the curl vector. The optional spin-half Pauli coupling is a three-dimensional effective model term only when its form is closable and semibounded; no measured g-factor or relativistic correction is asserted."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  sources_checked:
    date: 2026-10-22
    scope: Completed native formulation/status, source-evidence and applicability review; exact evidence and reading limits in research/physics-non-fluid-129-2026-10-21-r2-publication.json. No new retrieval, measurement or solution is claimed.
    by: owner-authorized native reviewers (gpt-6.1-sol)
sources:
  references:
    - title: "David Tong, Applications of Quantum Mechanics, §§1.1.1 and 1.5, minimal coupling and spin in a magnetic field"
      url: "https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf"
    - title: "V. P. Nair, Notes on Quantum Mechanics, §§11.2–11.3, spin magnetic moment and Pauli equation"
      url: "https://nair.ccny.cuny.edu/Notes-QM.pdf"
    - title: "Aram Harrow, MIT 8.06 Spring 2016 Lecture Notes, Chapter 4, §3.1, charged-particle Hamiltonian"
      url: "https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2016/6e02558ecf4b7af37d2cdff550fc0f71_MIT8_06S16_chap4.pdf"
---

## Postulate

Use SI units with mass $m>0$ in kilograms, charge $q\in\mathbb R$ in
coulombs, action constant $\hbar>0$ in joule-seconds, vector-potential
components $A_j$ in tesla-metres, and scalar potential-energy function $V$ in
joules. For each integer $d\ge1$, let $A\in C^\infty(\mathbb R^d;\mathbb R^d)$
be real and let $V\in L^1_{\mathrm{loc}}(\mathbb R^d;\mathbb R)$ be bounded
below. Adopt the general-dimensional minimal-coupling assignment whose core
form is
$$q_{A,V}[u]=\frac1{2m}\sum_{j=1}^d\|(-i\hbar\partial_j-qA_j)u\|_2^2+\int_{\mathbb R^d}V|u|^2,\qquad u\in C_c^\infty(\mathbb R^d;\mathbb C).$$
Use its closed form closure and the unique self-adjoint representing
Hamiltonian. For dimensional form norms use the fixed reference energy
$E_0=1\,\mathrm J$: apply the closed-form representation to
$q_{A,V}/E_0$ and multiply the representing operator by $E_0$.

The magnetic-field notation is dimension-specific. In $d=2$, with coordinates
$(x,y)$ and $A=(A_x,A_y)$, define the scalar perpendicular field
$$B_\perp(x,y)=\partial_xA_y(x,y)-\partial_yA_x(x,y),$$
in teslas. Thus $A=(0,Bx)$ gives $B_\perp=B$ for a constant signed scalar
$B$. In $d=3$, for coordinates $(x,y,z)$ and $A=(A_x,A_y,A_z)$, define the
field vector $\mathbf B:\mathbb R^3\to\mathbb R^3$ in teslas by
$$\mathbf B=(\partial_yA_z-\partial_zA_y,\ \partial_zA_x-\partial_xA_z,\ \partial_xA_y-\partial_yA_x)=\nabla\times A.$$
No magnetic-field object is assigned by this notation in $d=1$.

For an optional spin-half degree of freedom in three dimensions, define
$$\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad \sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad \sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad S_j=\frac{\hbar}{2}\sigma_j.$$
For a core spinor $u=(u_1,u_2)\in C_c^\infty(\mathbb R^3;\mathbb C^2)$,
define the spin-independent form
$$q^{(2)}_{A,V}[u]=q_{A,V}[u_1]+q_{A,V}[u_2].$$
For a declared dimensionless real coupling $g$, adopt the effective Pauli core
form
$$q^{\mathrm P}_{A,V,g}[u]=q^{(2)}_{A,V}[u]-\frac{gq}{2m}\int_{\mathbb R^3}u(x)^*(S\cdot\mathbf B(x))u(x)\,dx,$$
where $u^*$ is conjugate transpose and
$(S\cdot\mathbf B)(x)=\sum_{j=1}^3S_jB_j(x)$ for the three-dimensional
field vector just defined.
Include this term only in model instances where the resulting form is
closable and bounded below, and use its closed form closure and representing
Hamiltonian. No universal semiboundedness for arbitrary $A,V,g$ is asserted.

## Postulate references

[David Tong, *Applications of Quantum Mechanics*, §§1.1.1 and 1.5](https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf)

[V. P. Nair, *Notes on Quantum Mechanics*, §§11.2–11.3](https://nair.ccny.cuny.edu/Notes-QM.pdf)

[Aram Harrow, MIT 8.06 Lecture Notes, Chapter 4, §3.1](https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2016/6e02558ecf4b7af37d2cdff550fc0f71_MIT8_06S16_chap4.pdf)

## Scope and non-derivation

The core form data and the closability argument are given in
[[def-nrqmx-magnetic-form-data]] and
[[lem-nrqmx-magnetic-form-closability]]. The form-representation interface
[[thm-nrqmx-closed-form-representation]] specifies the unique self-adjoint
operator associated with the adopted closed form. The generic closability
supplier assumes Countable Choice and Dependent Choice; the representation
supplier assumes the Axiom of Choice and Countable Choice. These are the
mathematical hypotheses of the construction, not additional physical
postulates.

The mathematical identity in
[[pthm-nrqmx-pauli-square-identity]] is a formal-core identity. This postulate
does not identify $g$ with an electron measurement, derive the anomalous
magnetic moment, or use the Dirac or quantum-electrodynamic theories. The
linear Landau gauge is covered by the local closed-form construction; no
bounded-coefficient $H^2$ hypothesis is imposed.
