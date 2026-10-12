---
id: def-cm07-generalized-coordinates-and-forces
kind: definition
title: "Generalized-coordinate maps of the model, the substituted Lagrangian, the kinetic metric and generalized forces"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [def-cm07-action-and-mechanical-lagrangian, def-cm06-holonomic-constraint-model, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-euclidean-submersions-and-immersions, def-ck-euclidean-maps-and-diffeomorphisms, thm-euclidean-inverse-function-theorem, thm-higher-regularity-of-local-inverses, def-jacobian-matrix-and-gradient, def-transpose-of-a-matrix, def-matrix-product-and-identity-matrix, def-linear-map, def-euclidean-inner-product, def-interval]
dependency_roles:
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm06-holonomic-constraint-model: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-euclidean-submersions-and-immersions: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-higher-regularity-of-local-inverses: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The dictionary from the model's Cartesian description to generalized coordinates: a C^3 configuration map that is an immersion; when the coordinate count is 3N, an everywhere-invertible Jacobian gives local coordinate charts, while a global chart onto the image additionally requires injectivity; for a regular holonomic-constraint locus the parametrization is a surjective immersion and may cover a configuration more than once. The item also defines the substituted Lagrangian and kinetic metric, generalized forces as Jacobian-transpose multiples, and the declared Lagrange equations with residual generalized forces. It defines objects and a model class only; it asserts no equivalence with the constrained equation of motion, which is the reduction theorem of this page, and no empirical claim."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.3 'Constraints and Generalised Coordinates', printed pages 17-22 (PDF pages 23-28): generalised coordinates, the kinetic energy as a quadratic form and generalised forces"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 6.3-6.4: Lagrange equations from d'Alembert's principle with generalized forces"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Sections 2.1-2.2, chapter pages 1-4: generalized coordinates constrained to define a configuration, and Lagrange equations with constraint forces"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Definition

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with
masses $m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$ and $C^{2}$ potential
$U:I_{0}\times Q\to\mathbb R$ ([[def-cm03-potential-and-mechanical-energy]]).
Dimensions are read by [[def-cm01-units]]; gradients and Jacobians are those of
[[def-jacobian-matrix-and-gradient]], transposes those of
[[def-transpose-of-a-matrix]], and $C^{r}$ classes those of
[[def-ck-euclidean-maps-and-diffeomorphisms]].

**(a) Generalized-coordinate map.** Let $r\ge1$ and let
$\Omega\subseteq\mathbb R^{r}$ be open and nonempty. A **generalized-coordinate
map of the model** is a map $X:\Omega\to Q$ of class $C^{3}$ whose derivative
$DX(q)$ is injective for every $q\in\Omega$
([[def-euclidean-submersions-and-immersions]]: an immersion); the coordinates
$q=(q_{1},\dots,q_{r})$ each carry a declared dimension $\gamma_{i}$ and unit
fixed as part of the model declaration. When $r=3N$, $DX(q)$ is invertible at
every point. The inverse-function theorem and its higher-regularity result
([[thm-euclidean-inverse-function-theorem]],
[[thm-higher-regularity-of-local-inverses]]) make $X$ a local $C^{3}$
diffeomorphism at each point. This local property does not imply that $X$ is
globally one-to-one: call $X$ a global coordinate chart onto $X(\Omega)$ only
when it is also injective. The other intended case is $r=3N-k$ for an integer
$k$ with $1\le k\le3N-1$, where $X$ may be a surjective immersion of a regular
holonomic-constraint locus as in clause (d); injectivity is not required there.
The **admissible coordinate curves** are the $C^{2}$ maps $q:J\to\Omega$ on an
interval $J\subseteq I_{0}$ with nonempty interior ([[def-interval]]); each such
curve induces the configuration curve $x:=X\circ q:J\to Q$.

**(b) Substituted Lagrangian and kinetic metric.** For a generalized-coordinate
map $X$ define

$$\widetilde L:I_{0}\times\Omega\times\mathbb R^{r}\longrightarrow\mathbb R,\qquad \widetilde L(t,q,v):=L\bigl(t,X(q),DX(q)v\bigr)=\tfrac12\,v^{\mathsf T}G(q)v-\widetilde U(t,q),$$

with the **kinetic metric** and the substituted potential

$$G(q):=DX(q)^{\mathsf T}\mathsf M\,DX(q),\qquad \widetilde U(t,q):=U\bigl(t,X(q)\bigr).$$

$G(q)$ is symmetric and positive definite, because $DX(q)$ is injective and
$\mathsf M$ is symmetric positive definite
([[def-matrix-product-and-identity-matrix]], [[def-linear-map]],
[[def-euclidean-inner-product]]); its entry
$G_{ij}$ has dimension $\mu\ell^{2}\gamma_{i}^{-1}\gamma_{j}^{-1}$ and the
quadratic quantity $\frac12v^{\mathsf T}G(q)v$ has dimension
$\mu\ell^{2}\tau^{-2}$ for every choice of coordinate dimensions.
$\widetilde L$ is of class $C^{2}$; the **substituted action** of an admissible
coordinate curve $q:[a,b]\to\Omega$ with $[a,b]\subseteq I_{0}$ is
$\widetilde S(q):=\int_{a}^{b}\widetilde L(t,q(t),q'(t))dt$ whenever the
chart conventions of [[def-cm07-action-and-mechanical-lagrangian]] apply to
$\widetilde L$, and the **Lagrange operator** of $\widetilde L$ is

$$\Lambda(\widetilde L)(q)(t):=\frac{d}{dt}\Bigl(\frac{\partial\widetilde L}{\partial v}\bigl(t,q(t),q'(t)\bigr)\Bigr)-\frac{\partial\widetilde L}{\partial q}\bigl(t,q(t),q'(t)\bigr)\in\mathbb R^{r}.$$

**(c) Generalized forces.** Let $f:I_{0}\times Q\times\mathbb R^{3N}\to\mathbb R^{3N}$
be a force field of the model's standing regularity
([[post-cm02-force-superposition]] clause (iii)) — for instance the residual
force $d$ of the presentation, or the model's full force map $F$. Its
**generalized force** in the coordinates $X$ is

$$Q_{f}(t,q,v):=DX(q)^{\mathsf T}f\bigl(t,X(q),DX(q)v\bigr)\in\mathbb R^{r};$$

its $i$-th component has the dimension of energy per unit of the coordinate
$q_{i}$, namely $\mu\ell^{2}\tau^{-2}\gamma_{i}^{-1}$: the Jacobian factor
$\partial X_{a}/\partial q_{i}$ carries the dimension $\ell\gamma_{i}^{-1}$ and
the force $f_{a}$ the dimension $\mu\ell\tau^{-2}$. Thus $Q_{f}\cdot\delta q$
has energy dimension; for a length-valued coordinate $Q_{f,i}$ has force
dimension, and for a dimensionless angle it has torque dimension
$\mu\ell^{2}\tau^{-2}$. For the presentation
$(U,d)$ write $Q^{\mathrm{res}}:=Q_{d}$ for the generalized force of the
residual part; when $d\equiv0$ one has $Q^{\mathrm{res}}\equiv0$.

**(d) Constraint parametrizations.** Let a regular holonomic-constraint datum
$(O,k,g_{c})$ of [[def-cm06-holonomic-constraint-model]] be given, where
$g_{c}:=G$ is the constraint map called $G$ in that definition; this separate
notation distinguishes it from the kinetic matrix $G(q)$ in clause (b). Let
$\mathcal C\subseteq\mathbb R^{3N}$ be its time-independent configuration
locus, so $\Sigma=\{(t,x)\in O:x\in\mathcal C\}$ (the scleronomic case).
A **parametrization of the constrained configurations** is a
generalized-coordinate map $X:\Omega\to Q$ with $r=3N-k$,
$X(\Omega)=\mathcal C\cap Q$, and $(t,X(q))\in O$ for all
$(t,q)\in I_{0}\times\Omega$. Thus $X$ covers every constrained configuration,
but a configuration may have more than one coordinate representative; a
covering or other surjective immersion is allowed. Injectivity is an optional
additional condition for applications that require unique coordinates. Each
admissible coordinate curve induces a constrained curve family with permitted
velocity; the reduction theorem of this page also identifies the virtual
displacements with the image of $DX$.

**(e) Declared Lagrange equations.** With the data of clauses (a)-(c), the
model with presentation $(U,d)$ **declares as its Lagrange equations in the
coordinates $X$**

$$\Lambda(\widetilde L)(q)(t)=Q^{\mathrm{res}}\bigl(t,q(t),q'(t)\bigr)\qquad(t\in J),$$

posed for $C^{2}$ admissible coordinate curves $q:J\to\Omega$. These equations
are part of the coordinate description: for $d\equiv0$ they reduce to the
Euler-Lagrange equation $\Lambda(\widetilde L)(q)=0$ of the substituted
Lagrangian, and for a chart they are the coordinate form of the model's
equation of motion, as the covariance theorem of this page records. Whether
the same equations describe an ideal constrained motion for a
parametrization of clause (d) is a separate statement, proved as the reduction
theorem of this page; it is not part of this definition.

**(f) Status.** This item defines the dictionary between the Cartesian and the
generalized-coordinate descriptions: the coordinate map, the substituted
Lagrangian, the kinetic metric, generalized forces and the declared Lagrange
equations. It adopts no force law beyond the model's presentation, asserts no
solution existence and makes no empirical claim; the equivalence of the
declared equations with the model's Cartesian equation (for charts) and with
the ideal constrained equation (for parametrizations) is proved on this page.

## Remarks

- **Coordinate dimensions.** The kinetic metric is the coordinate expression of
  the fixed mass operator: with length-valued coordinates it has the dimension
  of mass, with dimensionless angle coordinates the angular-angular entries have
  dimension $\mu\ell^{2}$, and mixed entries have the dimensions
  $\mu\ell^{2}\gamma_i^{-1}\gamma_j^{-1}$ recorded in clause (b). The physically
  meaningful objects are the quadratic form $v^{\mathsf T}G(q)v$ and the
  generalized forces paired with the coordinate variations, both of which have
  the dimensions displayed.

- **The residual split enters the forces, not the Lagrangian.** The substituted
  Lagrangian is built from $U$ alone; the residual force $d$ of the
  presentation appears only through $Q^{\mathrm{res}}$. A presentation with a
  different split of the same total force changes $Q^{\mathrm{res}}$ and $L$
  correspondingly, and the declared equations are unchanged, as they must be
  for the total force map to be the model's datum.
