---
id: def-cm09-coupled-quadratic-model
kind: definition
title: "The coupled quadratic oscillator model: mass metric, stiffness, generalized force, modal vocabulary and the small-oscillation model at a mechanical equilibrium"
status: published
origin: session
domain: physics
dependency_level: 14
deps: [def-cm07-generalized-coordinates-and-forces, def-cm07-action-and-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm04-one-dimensional-models-and-equilibria, post-cm04-harmonic-model, def-cm01-configuration, def-cm-mechanical-vector-field-and-energy-in-a-chart, def-cm-oscillator-model-and-phase-system, def-cm01-units, def-hessian-and-euclidean-critical-point, cor-hessian-is-symmetric, thm-cm-quadratic-mode-decomposition, def-matrix-product-and-identity-matrix, def-euclidean-inner-product, def-ck-euclidean-maps-and-diffeomorphisms, def-vector-valued-functions-limits-and-continuity, def-interval, def-vector-valued-derivative-and-integral, lem-cm-positive-definite-matrix-square-roots, cor-real-spectral-theorem-for-self-adjoint-endomorphisms]
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
  def-vector-valued-derivative-and-integral: mathematical-premise
  lem-cm-positive-definite-matrix-square-roots: mathematical-premise
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
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
$K\in M_{n}(\mathbb R)$, symmetric, $K=K^{\mathsf T}$; and an interval $I_{0}\subseteq\mathbb R$ with nonempty interior
([[def-interval]]) together with a continuous **generalized force**
$J:I_{0}\to\mathbb R^{n}$ ([[def-vector-valued-functions-limits-and-continuity]]).
When no force or time interval is prescribed, take $I_0:=\mathbb R$ and
$J(t):=0$ for every $t\in\mathbb R$; in particular this is the convention
for the small-oscillation model in clause (d).
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

**Fixed-unit numerical convention.** Choose a positive coordinate unit $s_i$ of dimension $\gamma_i$ for each direction, a time unit $t_*>0$ and an energy unit $e_*>0$, held fixed throughout a model calculation. Matrix products, square roots, eigenvectors, derivatives and Euclidean norms below act on numerical coefficients in these units, not on arrays of unlike physical quantities. Explicitly, if $Q_i$, $\mathsf M_{ij}$, $\mathsf K_{ij}$ and $\mathsf J_i$ denote the dimensional data, the symbols in the algebra are
$$q_i=Q_i/s_i,\qquad t=t_{\mathrm{phys}}/t_*,\qquad M_{ij}=\mathsf M_{ij}s_is_j/(e_*t_*^2),\qquad K_{ij}=\mathsf K_{ij}s_is_j/e_*,\qquad J_i=\mathsf J_i s_i/e_*.$$
Then $Mq''+Kq=J$ is exactly the physical equation in these coefficients, $Q_i=s_iq_i$, $\dot Q_i=(s_i/t_*)q_i'$, and the physical energy is $e_*E$. This is an invertible choice of units, imposing no restriction on the dimensions $\gamma_i$. For a variable metric and potential the same convention means $U(q)=U_{\mathrm{phys}}(s_1q_1,\ldots,s_nq_n)/e_*$ and $M_{ij}(q)=\mathsf M_{ij}(s_1q_1,\ldots,s_nq_n)s_is_j/(e_*t_*^2)$. Congruence by the positive diagonal coordinate-scale matrix and multiplication by positive constants preserve symmetry, definiteness and critical-point type.

**(b) Model equation, motions and phase system.** On any interval with
nonempty interior, $C^r$ for $r=1,2$ means that the first $r$ derivatives
exist and are continuous on that interval, using the domain-relative
derivative of [[def-vector-valued-derivative-and-integral]] at included
endpoints; on open intervals this agrees with
[[def-ck-euclidean-maps-and-diffeomorphisms]]. The equation of the model
with data $(M,K,J)$ is

$$M\,q''(t)+K\,q(t)=J(t)\qquad(t\in I_{0}).$$

A **motion** of the model is a curve $q:J\to\mathbb R^{n}$ of class $C^{2}$
on an interval
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

whose physical readings are $e_*$ times the displayed numerical quantities, all of energy dimension. $U_{K}$ is defined for every symmetric $K$; the name
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

**(e) Modal vocabulary of the decoupling data.** All the following matrix operations use the fixed-unit numerical convention. By clauses 1-3 of [[lem-cm-positive-definite-matrix-square-roots]], $M^{1/2}$ and its inverse $M^{-1/2}$ exist and are symmetric positive definite. For every symmetric $K$, without a sign restriction, $S:=M^{-1/2}KM^{-1/2}$ is symmetric, since $S^{\mathsf T}=M^{-1/2}K^{\mathsf T}M^{-1/2}=S$. The [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] therefore supplies an orthogonal $O$ and real diagonal $\Lambda=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$ with $S=O\Lambda O^{\mathsf T}$. This construction includes negative eigenvalues; the restricted non-negative-$K$ result [[thm-cm-quadratic-mode-decomposition]] is used only in that restricted case. Define **modal coordinates** $z:=O^{\mathsf T}M^{1/2}q$ and **modal vectors** $u_i:=M^{-1/2}Oe_i$, the columns of the inverse transform $q=M^{-1/2}Oz$. The **modal stiffnesses** are the real numbers $\lambda_i$. Direct multiplication gives $Ku_i=\lambda_iMu_i$ and $u_i^{\mathsf T}Mu_j=\delta_{ij}$. For the modal units here and in items using this convention, extend the dimension group of [[def-cm01-units]] clause (a) from $\mathbb Z^3$ to $D_{1/2}:=(\tfrac12\mathbb Z)^3$, with the same componentwise addition and negation for products and inverses. The inclusion $\mathbb Z^3\hookrightarrow D_{1/2}$ preserves every earlier dimension assignment. For $d=(a,b,c)\in D_{1/2}$ write its reference unit as $u_d:=\mathrm m^a\mathrm s^b\mathrm{kg}^c$; a quantity of dimension $d$ is a real multiple $x u_d$, and unit multiplication is $u_du_{d'}=u_{d+d'}$. Products, quotients, sums of equal dimension and derivatives retain the rules of [[def-cm01-units]] clause (b). For a positive quantity $X=xu_d$ with $x>0$ and $d\in\mathbb Z^3$, define $\sqrt X:=\sqrt x\,u_{d/2}$, using the positive real square root; this construction has dimension $d/2$ and square $X$. Only integer-dimensional positive quantities are square-rooted by this convention.

In physical units put $a_*:=\sqrt{e_*}\,t_*$, of dimension $\mu^{1/2}\ell$ and SI unit $\mathrm{kg}^{1/2}\mathrm m$. A modal coordinate has unit $a_*$; the $j$-th component of a mass-normalized modal vector has unit $s_j/a_*$, and the physical coordinate is the sum of the physical modal-vector components times their modal amplitudes. The matrix entries of $O$ and its orthonormal eigenvectors are dimensionless numerical coefficients. The physical modal stiffness is $\lambda_i/t_*^2$; an oscillatory or hyperbolic coefficient has unit $a_*$, while the slope coefficient in a zero-mode family $a_i+b_it$ has unit $a_*/t_*$. The physical frequency is $\sqrt{\lambda_i}/t_*$ when $\lambda_i>0$.

An index is **oscillatory** when $\lambda_i>0$, with numerical frequency $\omega_i:=\sqrt{\lambda_i}$; it is a **zero mode** when $\lambda_i=0$, and an **unstable (exponential) direction** when $\lambda_i<0$. Distinct indices are **degenerate** when their stiffnesses agree. For real $\lambda$ define the **modal eigenspace** $E_\lambda:=\ker(K-\lambda M)$. Its dimension is the multiplicity of $\lambda$, because $q\mapsto M^{1/2}q$ bijects it with the $\lambda$-eigenspace of $S$. The model is **oscillatory** when $K$ is non-negative. Indeed $x^{\mathsf T}Sx=(M^{-1/2}x)^{\mathsf T}K(M^{-1/2}x)$, so $K\ge0$ exactly when every $\lambda_i\ge0$; positive definiteness likewise corresponds to all $\lambda_i>0$. The zero-mode multiplicity is $\dim\ker K$. Frequencies are read in radians per unit time under [[def-cm01-units]].

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
[[def-cm-oscillator-model-and-phase-system]] with $c=0$. To identify this
with the physical scalar class of
[[def-cm04-one-dimensional-models-and-equilibria]] clause (f), require a
length-valued position or displacement coordinate, $\gamma_1=\ell$, read
in a fixed inertial frame, take configuration domain $Q=\mathbb R$, and
restrict to an open time interval. Reconstructing dimensional data from
clause (a), the scalar $\mathsf M$ is then a mass in kilograms,
$\mathsf K$ a stiffness in newtons per metre, and $\mathsf J$ a force in
newtons; the numerical SI coefficients correspond to that definition's
$(m,0,k,f)$. In particular this includes $k>0$ and constant, vanishing or
sinusoidal force. With this same length-coordinate identification, at a
scalar strict minimum the small-oscillation stiffness is $U''(x_*)\ge0$;
the free model is the harmonic model of [[post-cm04-harmonic-model]] when
$U''(x_*)>0$, and the free zero-stiffness model when $U''(x_*)=0$.
For an angular coordinate the dimensional $\mathsf M$ and $\mathsf J$
instead have the units of rotational inertia and torque; the mathematical
scalar equation still applies, but the physical mass-and-force
identification requires a separately declared change to a length coordinate. An isolated strict minimum can have zero Hessian (for example $U(x)=x^4$); the accuracy of
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
object, with the energy-per-coordinate dimension recorded in clause (c)
of that definition.

- **Prescribed generalized force.** In clause (b) the generalized force is
declared as a function of time alone, in the same modelling status as the
external drive of [[post-cm04-sinusoidal-drive-model]]: a source that reacts
to the motion, or whose own dynamics matters, is not represented by the
model. The forcing theorems of this page are statements about such
prescribed data.
