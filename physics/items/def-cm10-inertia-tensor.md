---
id: def-cm10-inertia-tensor
kind: definition
title: "Inertia matrix, spatial inertia tensor, inertia tensor about a point and moment of inertia about an axis of a rigid-material model"
status: draft
origin: session
domain: physics
dependency_level: 8
deps: [post-cm10-rigid-material, def-cm10-rigid-body-configuration, def-cm-mass-distribution-and-inertia-matrix, lem-cm-mass-moments-are-finite, def-countable-choice, lem-cm-inertia-matrix-properties, def-cm-inertia-tensor-about-a-point, def-cm-special-orthogonal-group, def-euclidean-inner-product, def-matrix-space, def-matrix-product-and-identity-matrix, def-cross-product-in-r3, def-cm01-units]
dependency_roles:
  post-cm10-rigid-material: formulation-prerequisite
  def-cm10-rigid-body-configuration: formulation-prerequisite
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  lem-cm-mass-moments-are-finite: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-cm-inertia-matrix-properties: mathematical-premise
  def-cm-inertia-tensor-about-a-point: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The inertia data of the rigid-material model branch of [[post-cm10-rigid-material]]: the body inertia matrix of the reference mass distribution about the centre of mass, its spatial version along a motion, the inertia tensor of the model about an arbitrary spatial point, and the moment of inertia about an axis, with the dimension $\\mu\\ell^{2}$ read in kilogram metres squared. The item states the mathematical properties it uses (symmetry, positivity and the nondegeneracy criterion) through their cited mathematical suppliers. No measured inertia is asserted and no rotational dynamics is introduced."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.2, Eqs. (3.17)-(3.23), printed pages 50-52 (PDF pages 56-58): the inertia tensor of a discrete and of a continuous mass distribution, its symmetry and positivity, and principal axes"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.2, Eqs. (4.14)-(4.28), chapter pages 3-6 (PDF pages 57-60): the rotational kinetic energy and the inertia tensor as a symmetric matrix, principal axes, and the parallel-axis relation"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Sections 2.3-2.6, Eq. (2.41) and Eq. (2.51): moments of inertia, the inertia tensor, principal moments and vector angular momentum"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 2 Sections 2.2-2.3, printed pages 33-40 (PDF pages 36-43): the inertia tensor, the principal axes and the parallel-axis derivation"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: n/a
---

## Definition

Adopt the model of [[post-cm10-rigid-material]]: the reference mass
distribution $\nu$, its total mass $m=\nu(\mathbb R^3)$ and its centred
reference coordinates $\int\rho\,d\nu(\rho)=0$. Assume the Axiom of Countable
Choice $\mathrm{AC}_\omega$, used only through
[[lem-cm-mass-moments-are-finite]] to make the polynomial moments of $\nu$ of
degree at most two finite real numbers. Fix an inertial frame and a motion
$x(t,\rho)=c(t)+R(t)\rho$ with configuration path $(c,R)$ of class $C^2$
([[def-cm10-rigid-body-configuration]]).

**(a) Body inertia matrix.** The **body inertia matrix** of the model is the
inertia matrix of the reference mass distribution,
$$I:=I(\nu)=\int\bigl(\lVert\rho\rVert_2^{2}I_3-\rho\rho^{\mathsf T}\bigr)\,d\nu(\rho)\in M_3(\mathbb R),$$
with entries $I_{jk}=\int(\lVert\rho\rVert_2^{2}\delta_{jk}-\rho_j\rho_k)\,d\nu$
as in [[def-cm-mass-distribution-and-inertia-matrix]]; the matrix is expressed
in the standard basis of the reference coordinates. Its entries are finite
real numbers, it is symmetric, and for every $\omega\in\mathbb R^3$,
$$\omega^{\mathsf T}I\omega=\int\lVert\omega\times\rho\rVert_2^{2}\,d\nu(\rho)\ \ge 0$$
by [[lem-cm-inertia-matrix-properties]] clauses 1-2; hence $I$ is symmetric
and its quadratic form is positive semidefinite. The dimension is
$[I]=\mu\ell^{2}$ ([[def-cm01-units]]), read in kilogram metres squared. The
model is **nondegenerate** when no line through the origin carries the whole
mass, that is $\nu\bigl(\mathbb R^3\setminus\mathbb R\omega\bigr)>0$ for every
$\omega\neq0$, and **degenerate** otherwise; the connection between this
criterion and the strict positivity and invertibility of $I$ is proved in the
principal-axes theorem of this page.

**(b) Spatial inertia tensor at the centre of mass.** The **spatial inertia
tensor** of the model at time $t$ is
$$I(t):=R(t)\,I\,R(t)^{\mathsf T}\in M_3(\mathbb R),$$
the matrix of the same quadratic form in the frame's spatial coordinates: for
every $n\in\mathbb R^3$,
$n^{\mathsf T}I(t)n=(R(t)^{\mathsf T}n)^{\mathsf T}I(R(t)^{\mathsf T}n)$. Its
entries are $C^2$ functions of $t$, since $R$ is of class $C^2$ and $I$ is
constant; the matrix rotates with the body and returns to $I$ in the
body-fixed frame, where $R=I_3$.

**(c) Inertia tensor about a spatial point.** For a spatial point
$p\in\mathbb R^3$ let
$$a(t,p):=R(t)^{\mathsf T}\bigl(p-c(t)\bigr)\in\mathbb R^3$$
be the **reference coordinate of $p$**, that is the label of the material
point of the reference placement that is placed at $p$ at time $t$. The
**inertia tensor of the model about $p$** at time $t$ is
$$I(t,p):=R(t)\,I_\nu\bigl(a(t,p)\bigr)\,R(t)^{\mathsf T}\in M_3(\mathbb R),$$
where
$$I_\nu(a)=\int\bigl(\lVert\rho-a\rVert_2^{2}I_3-(\rho-a)(\rho-a)^{\mathsf T}\bigr)\,d\nu(\rho)$$
is the inertia tensor of the mass distribution about the point $a$ of the
reference coordinates ([[def-cm-inertia-tensor-about-a-point]]). Since the
label of a spatial point is uniquely determined by the placement, this is
well defined; for the centre of mass, $a(t,c(t))=0$ and
$I(t,c(t))=I(t)$. The dimension is again $\mu\ell^{2}$, read in kilogram
metres squared.

**(d) Moment of inertia about an axis.** Let $\ell$ be a spatial line at time
$t$, given by a point $p\in\mathbb R^3$ and a unit direction $n\in\mathbb R^3$
($\lVert n\rVert_2=1$). The **moment of inertia of the model about $\ell$** is
$$\Theta_\ell(t):=n^{\mathsf T}I(t,p)n .$$
Its invariance under the choices entering the description of the line and
its identification with the integral defining the physical moment of inertia
about the line are statements, not conventions; they are proved in clause
(c) of the principal-axes theorem of this page. For a **body-fixed
axis**, that is a line through the centre of mass whose direction in
reference coordinates is a constant unit vector $n_0$, the moment is
$$n_0^{\mathsf T}I n_0=\int\lVert n_0\times\rho\rVert_2^{2}\,d\nu(\rho),$$
by clause (a), and is independent of time, because $I$ and $n_0$ are model
data.

**(e) What is constant and what moves.** The body inertia matrix $I$ is
determined by the model's reference mass distribution alone and does not
depend on the time, the frame or the motion; the spatial inertia tensor
$I(t)$ depends on the motion through the orientation $R(t)$; the inertia
tensor $I(t,p)$ about a spatial point depends on the motion through both the
orientation and the position of $p$. Principal axes and principal moments of
$I$ are the subject of the principal-axes theorem of this page.

## Remarks

- **The physical reading of $\Theta_\ell$.** The number $n^{\mathsf T}I(t,p)n$
  is what a consumer reads as the rotational inertia of the body about the
  line $\ell$; the identity with the integral of the squared distance from
  the line is the content of the principal-axes theorem of this page, and is
  not assumed here.

- **Degenerate shapes.** If $\nu$ is supported on a line through the origin,
  then $I$ has a zero eigenvalue, is not invertible, and the relation between
  angular velocity and angular momentum is not injective; the criterion is
  proved in [[pthm-cm10-principal-axes]] clause (d) below, and the companion
  page exhibits a two-point-mass body of this kind. The model branch admits
  such shapes; a consumer that inverts $I$ must state the nondegeneracy
  hypothesis.

- **No measured inertia.** The matrix $I$ is model data computed from $\nu$;
  the item asserts no measured moment of inertia and no claim that any body
  has a given inertia tensor.
