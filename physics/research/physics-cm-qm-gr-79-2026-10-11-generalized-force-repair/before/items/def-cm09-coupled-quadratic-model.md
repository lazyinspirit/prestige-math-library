---
id: def-cm09-coupled-quadratic-model
kind: definition
title: "The coupled quadratic oscillator model: mass metric, stiffness, generalized force, modal vocabulary and the small-oscillation model at a mechanical equilibrium"
status: draft
origin: session
domain: physics
dependency_level: 14
deps: [def-cm07-generalized-coordinates-and-forces, def-cm07-action-and-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm04-one-dimensional-models-and-equilibria, post-cm04-harmonic-model, def-cm01-configuration, def-cm-mechanical-vector-field-and-energy-in-a-chart, def-cm-oscillator-model-and-phase-system, def-cm01-units, def-hessian-and-euclidean-critical-point, cor-hessian-is-symmetric, thm-cm-quadratic-mode-decomposition, def-matrix-product-and-identity-matrix, def-euclidean-inner-product, def-ck-euclidean-maps-and-diffeomorphisms, def-vector-valued-functions-limits-and-continuity, def-interval]
dependency_roles:
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  post-cm04-harmonic-model: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-hessian-and-euclidean-critical-point: mathematical-premise
  cor-hessian-is-symmetric: mathematical-premise
  thm-cm-quadratic-mode-decomposition: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-vector-valued-functions-limits-and-continuity: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The restricted model class used on this page: a constant mass metric matrix M (symmetric positive definite) and a constant symmetric stiffness matrix K in a chart of n coordinate directions, with an optional prescribed generalized force J(t), and the model equation M q'' + K q = J(t); together with the quadratic kinetic and potential energies, the phase system, the modal vocabulary of the decoupling transform, and the small-oscillation model assigned to a mechanical equilibrium q_0 of a chart mechanical system, whose mass metric is M(q_0) and whose stiffness is the potential Hessian D^2 U(q_0). The item declares vocabulary, domains, regularity and dimensions only; it asserts no existence, uniqueness, conservation, stability, resonance or approximation statement, adopts no force law of nature, records no measured value, and states no empirical applicability. In particular the mass metric and the stiffness are model parameters of the declared chart, not measured quantities, and the quadratic model is an idealization whose accuracy near an equilibrium is quantified only by the approximation theorems of this page."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 6, Sections 6.1-6.2, Eqs. (6.1)-(6.21), chapter pages 1-6 (PDF pages 125-130): coupled oscillators, the eigenproblem of a chain of masses, normal modes and the anticrossing of mode frequencies"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.6, Eqs. (2.113)-(2.129), printed pages 38-45 (PDF pages 44-51): equilibria, linearization about an equilibrium, the quadratic matrices T_ij and V_ij of a Lagrangian system and the reality of the generalised eigenvalues"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 3, Sections 3.1-3.2, printed pages 52-59 (PDF pages 55-62): the quadratic natural Lagrangian, the generalized symmetric eigenproblem and the decoupled normal modes"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Data of a coupled quadratic model.** A **coupled quadratic model** (a
**quadratic oscillator model**) is declared by the following data: an integer
$n\ge1$, the number of **degrees of freedom**; a **mass metric matrix**
$M\in M_{n}(\mathbb R)$, symmetric and positive definite, that is
$M=M^{\mathsf T}$ and $v^{\mathsf T}Mv>0$ for every nonzero
$v\in\mathbb R^{n}$ ([[def-matrix-product-and-identity-matrix]],
[[def-euclidean-inner-product]]); a **stiffness matrix**
$K\in M_{n}(\mathbb R)$, symmetric, $K=K^{\mathsf T}$; and, when the model is
read as forced, an interval $I_{0}\subseteq\mathbb R$ with nonempty interior
([[def-interval]]) together with a continuous **generalized force**
$J:I_{0}\to\mathbb R^{n}$ ([[def-vector-valued-functions-limits-and-continuity]]).
The coordinates $q_{1},\dots,q_{n}$ of $\mathbb R^{n}$ are read in the chart
in which the model is declared and carry declared dimensions
$\gamma_{1},\dots,\gamma_{n}$ and units, and time is read in seconds and mass
in kilograms ([[def-cm01-units]]). The data carry the dimensions

$$[M_{ij}]=\mu\ell^{2}\gamma_{i}^{-1}\gamma_{j}^{-1},\qquad [K_{ij}]=\mu\ell^{2}\gamma_{i}^{-1}\gamma_{j}^{-1}\tau^{-2},\qquad [J_{i}]=\mu\ell^{2}\tau^{-2}\gamma_{i}^{-1},$$

so that $\tfrac12v^{\mathsf T}Mv$, $\tfrac12q^{\mathsf T}Kq$ and the pairing
$J\cdot\delta q$ of the generalized force with a coordinate variation all have
the energy dimension $\mu\ell^{2}\tau^{-2}$; if the coordinate $q_{i}$ is
length-valued, $\gamma_{i}=\ell$, the entry $J_{i}$ has the force dimension
$\mu\ell\tau^{-2}$. This is the dimension bookkeeping of a generalized
coordinate description in the sense of
[[def-cm07-generalized-coordinates-and-forces]], whose kinetic metric and
generalized forces are the framework objects the data present; the matrices
$M$ and $K$ are model parameters, not measured quantities.

**(b) Model equation, motions and phase system.** The equation of the model
with data $(M,K,J)$ is

$$M\,q''(t)+K\,q(t)=J(t)\qquad(t\in I_{0}).$$

A **motion** of the model is a curve $q:J\to\mathbb R^{n}$ of class $C^{2}$
([[def-ck-euclidean-maps-and-diffeomorphisms]]) on an interval
$J\subseteq I_{0}$ with nonempty interior ([[def-interval]]) satisfying the
equation for every $t\in J$. A **datum** at $t_{0}\in I_{0}$ is a pair
$(q_{0},v_{0})\in\mathbb R^{n}\times\mathbb R^{n}$. The **phase system** of
the model is the first-order linear system $z'=A z+b(t)$ on
$I_{0}\times\mathbb R^{2n}$ with $z=(q,v)$ and

$$A=\begin{pmatrix}0&I_{n}\\-M^{-1}K&0\end{pmatrix},\qquad b(t)=\begin{pmatrix}0\\M^{-1}J(t)\end{pmatrix},$$

where $M^{-1}$ is the inverse of $M$. By the product rule and invertibility of
$M$, a $C^{1}$ curve $t\mapsto(q(t),v(t))$ solves the phase system if and only
if $q$ is a motion of the model and $v=q'$. The model is **free** when
$J\equiv0$ and **forced, with generalized force $J$,** otherwise; the read of
$J$ as a prescribed external generalized force is the modelling status of
[[post-cm02-force-superposition]] and
[[def-cm03-potential-and-mechanical-energy]] for the external contributions
of a force model.

**(c) Quadratic energies and the mass metric.** The **kinetic energy**, the
**potential energy of the stiffness** and the **mechanical energy** of the
model are

$$T(v):=\tfrac12\,v^{\mathsf T}Mv,\qquad U_{K}(q):=\tfrac12\,q^{\mathsf T}Kq,\qquad E(q,v):=T(v)+U_{K}(q),$$

all of energy dimension. $U_{K}$ is defined for every symmetric $K$; the name
records that $K$ is the matrix through which the model enters, and when $K$ is
indefinite $U_{K}$ is not non-negative, the model is not presented by a
potential with a local minimum at the origin, and no stability vocabulary is
attached to it by this item. The quadratic form $v\mapsto v^{\mathsf T}Mv$ is
positive definite and is called the **mass metric** of the model; the word
"metric" records only this positive-definiteness, and no distance on
configuration space is defined here.

**(d) Small-oscillation model at an equilibrium.** Let a mechanical system in
a chart be given by a $C^{2}$ field $q\mapsto G_{\mathrm{kin}}(q)$ of
symmetric positive definite matrices on an open set $\Omega\subseteq\mathbb
R^{n}$ and a $C^{2}$ potential $U:\Omega\to\mathbb R$
([[def-cm-mechanical-vector-field-and-energy-in-a-chart]]), and let
$q_{0}\in\Omega$ be a **mechanical equilibrium**, $\nabla U(q_{0})=0$. Its
**small-oscillation model at $q_{0}$** is the coupled quadratic model with
degrees of freedom $n$, mass metric matrix $M:=G_{\mathrm{kin}}(q_{0})$,
**stiffness matrix** $K_{0}:=D^{2}U(q_{0})$ — the Hessian of the potential
([[def-hessian-and-euclidean-critical-point]], symmetric by
[[cor-hessian-is-symmetric]]) — and zero generalized force, read in the
displacement coordinates $\xi:=q-q_{0}$. When the chart arises from the
generalized-coordinate dictionary of
[[def-cm07-generalized-coordinates-and-forces]], the matrix
$G_{\mathrm{kin}}(q_{0})=DX(q_{0})^{\mathsf T}\mathsf M\,DX(q_{0})$ is the
value at $q_{0}$ of that dictionary's kinetic metric. This clause assigns
model data to the equilibrium; the identification of the assigned model with
the derivative of the mechanical field, and every statement about its motions,
are separate results and are not asserted here.

**(e) Modal vocabulary of the decoupling data.** By
[[thm-cm-quadratic-mode-decomposition]] applied to the symmetric positive
definite $M$ and the symmetric matrix $K$ there are a symmetric positive
definite square root $M^{1/2}$, its inverse $M^{-1/2}$, an orthogonal matrix
$O$ with $O^{\mathsf T}=O^{-1}$, and a diagonal matrix
$\Lambda=\operatorname{diag}(\lambda_{1},\dots,\lambda_{n})$ with
$M^{-1/2}KM^{-1/2}=O\Lambda O^{\mathsf T}$. The **modal coordinates** of the
model are $z:=O^{\mathsf T}M^{1/2}q$, a linear bijection of $\mathbb R^{n}$,
and the **modal vectors** are the columns $u_{i}:=M^{-1/2}Oe_{i}$; the numbers
$\lambda_{1},\dots,\lambda_{n}$ are the **modal stiffnesses**. The identities
$Ku_{i}=\lambda_{i}Mu_{i}$ and $u_{i}^{\mathsf T}Mu_{j}=\delta_{ij}$ are part
of the modal theorem and are used by name on this page. An index $i$ (or the
mode it labels) is **oscillatory** when $\lambda_{i}>0$, with **mode
frequency** $\omega_{i}:=\sqrt{\lambda_{i}}>0$ (the nonnegative square root;
dimension $\tau^{-1}$, read in radians per second under the angle convention
of [[def-cm01-units]]); it is a **zero mode** when $\lambda_{i}=0$; and it is
an **unstable (exponential) direction** when $\lambda_{i}<0$. Two distinct
indices $i\ne j$ are **degenerate** when $\lambda_{i}=\lambda_{j}$; for a real
number $\lambda$ the set $E_{\lambda}:=\{u\in\mathbb R^{n}:(K-\lambda M)u=0\}$
is the **modal eigenspace** of $\lambda$, a linear subspace whose dimension is
the number of indices with $\lambda_{i}=\lambda$. The model is **oscillatory**
when $K$ is non-negative, $q^{\mathsf T}Kq\ge0$ for all $q$; then every modal
stiffness is $\ge0$, the zero modes are the indices with $\lambda_{i}=0$, and
the eigenvalue $0$ has multiplicity $\dim\ker K$.

**(f) Status.** This item introduces objects, vocabulary, domains, regularity
and dimensions for the restricted model class of this page and assigns its
small-oscillation model to a mechanical equilibrium. It contains no
existence, uniqueness, conservation, stability, resonance, degeneracy or
approximation assertion; those are proved on this page as separate items. It
adopts no force law of nature and records no measured value. Every later
statement of this page names the data $(M,K,J)$ or the mechanical data
$(G_{\mathrm{kin}},U,q_{0})$ it uses, and the one-dimensional instance is
recorded in the remarks.

## Remarks

- **The one-dimensional instance.** For $n=1$ the data are $M=m>0$,
$K=k\in\mathbb R$ and $J=f$, and the equation is $m\,x''+k\,x=f(t)$, which is
exactly the forced scalar model $m\,x''+0\cdot x'+k\,x=f$ of
[[def-cm-oscillator-model-and-phase-system]] with $c=0$; with $k>0$ and a
constant, a vanishing or a sinusoidal generalized force it is the one-
dimensional oscillator model of [[def-cm04-one-dimensional-models-and-equilibria]]
clause (f). The small-oscillation model at a strict minimum of a scalar
potential $U$ is the harmonic model with spring constant $U''(x_{*})$, the
quadratic approximation used by [[post-cm04-harmonic-model]]; the accuracy of
that approximation in time and amplitude is not part of the present item.

- **Why "mass metric" and not "mass matrix".** The matrix $M$ is the value of
the chart's kinetic metric at the equilibrium, and the quadratic form it
defines is the velocity dependence of the kinetic energy. In the
Cartesian-particle case $G_{\mathrm{kin}}=\mathsf M$ is the constant mass
operator of [[def-cm01-configuration]] and the name reduces to the familiar
one. With arbitrary coordinate dimensions the entries of $M$ are not masses
in kilograms; only the pairing $v^{\mathsf T}Mv$ and the products with
coordinate variations have the stated invariant dimensions.

- **The dimension of the generalized force.** A generalized force is defined
by its pairing with coordinate variations, $J\cdot\delta q$, which must
carry the energy dimension; hence its entries carry energy per unit
coordinate, $\mu\ell^{2}\tau^{-2}\gamma_{i}^{-1}$ as recorded in clause (a).
For a length-valued coordinate this is the force dimension
$\mu\ell\tau^{-2}$, while for a dimensionless angle coordinate it is the
torque dimension $\mu\ell^{2}\tau^{-2}$. The generalized force of
[[def-cm07-generalized-coordinates-and-forces]] is the same framework
object; where the printed dimension line of that item's clause (c) omits the
factor of length, the pairing convention recorded here is the one used by
the model of this page.

- **Prescribed generalized force.** In clause (b) the generalized force is
declared as a function of time alone, in the same modelling status as the
external drive of [[post-cm04-sinusoidal-drive-model]]: a source that reacts
to the motion, or whose own dynamics matters, is not represented by the
model. The forcing theorems of this page are statements about such
prescribed data.
