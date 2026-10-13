---
id: def-cm-nonholonomic-velocity-constraint-law
kind: definition
title: "The velocity constraint $z'=xy'$: virtual displacements, the d'Alembert law and the vakonomic law"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-time-dependent-lagrangian-and-action, def-ck-euclidean-maps-and-diffeomorphisms, def-vector-valued-derivative-and-integral, def-interval, def-euclidean-inner-product, def-darboux-integral, thm-continuous-implies-integrable, def-abs-value]
dependency_roles:
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-abs-value: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "J. Cortes, M. de Leon, D. Martin de Diego and S. Martinez, Geometric description of vakonomic and nonholonomic dynamics. Comparison of solutions (SIAM J. Control Optim., author PDF), Section 2 (Definition 2.1 of the vakonomic problem) and Section 5 (Chetaev/d'Alembert equations (5.1))"
      url: "http://terrano.ucsd.edu/jorge/publications/data/2003_CoLeMaMa-sicon.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 5.7 (Constrained Variational Systems) and Section 6.9 (Applications involving Non-holonomic Constraints)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---

## Definition

Work in $\mathbb R^3$ with coordinates $(x,y,z)$ on configuration space and velocities
$(x',y',z')$; inner products and norms are those of [[def-euclidean-inner-product]]. All intervals
used as motion domains below are open intervals of $\mathbb R$ ([[def-interval]]), and a map on such an interval is said to be
$C^r$ when all its components are ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

**The constraint and its virtual displacements.** The **constraint law** is

$$z'=xy' .$$

A configuration $q=(x,y,z)$ is written without a subscript, and its velocity is
$v=(x',y',z')$. The **allowed velocities** at $q$ and the **virtual displacements** at $q$ are
both the same linear subspace

$$D(q):=\bigl\{w=(w_x,w_y,w_z)\in\mathbb R^3:w_z=xw_y\bigr\}=\operatorname{span}\bigl\{(1,0,0),(0,1,x)\bigr\}\subseteq\mathbb R^3 .$$

Thus a virtual displacement $\delta=(\delta x,\delta y,\delta z)$ obeys $\delta z=x\,\delta y$;
this is the Chetaev prescription for the linear velocity constraint $z'-xy'=0$, in which the
virtual displacements are computed from the constraint function frozen at the current
configuration.

**Sample Lagrangian and zero applied force.** The adopted Lagrangian is

$$L_0(q,v):=\tfrac12|v|^2=\tfrac12\bigl(x'^2+y'^2+z'^2\bigr),$$

of class $C^\infty$ on $\mathbb R^3\times\mathbb R^3$; no applied force is introduced. Since
$L_0$ is a special case of a Lagrangian chart as in [[def-cm-time-dependent-lagrangian-and-action]]
(with $n=3$, $U=\mathbb R^3$ and $O=\mathbb R\times\mathbb R^3\times\mathbb R^3$), the words
stationary, action and Euler--Lagrange expression below have the meanings fixed there whenever
they are used.

**d'Alembert motions.** A $C^2$ curve $q:I\to\mathbb R^3$ is a **d'Alembert motion** of the
constraint $z'=xy'$ when

1. $z'(t)=x(t)y'(t)$ for every $t\in I$, and
2. $q''(t)\cdot\delta=0$ for every $\delta\in D(q(t))$ and every $t\in I$.

Clause 2 is the ideal-reaction (d'Alembert) condition for unit mass and zero applied force:
the acceleration has no component along any admissible virtual displacement, so the constraint
force performs no virtual work.

**The augmented functional and the vakonomic law.** Let $a<b$ be reals with $[a,b]\subseteq I_0$
for some open interval $I_0$. For a $C^2$ curve $q:I_0\to\mathbb R^3$ and a $C^2$ function
$\eta:I_0\to\mathbb R$ put

$$\Phi(q,\eta):=\int_a^b\Bigl[\tfrac12|q'(t)|^2+\eta(t)\bigl(z'(t)-x(t)y'(t)\bigr)\Bigr]dt .$$

The integrand is continuous because $q,q'$ and $\eta$ are continuous, so $\Phi(q,\eta)$ is a
well-defined real number ([[def-vector-valued-derivative-and-integral]],
[[def-darboux-integral]], [[thm-continuous-implies-integrable]]). An **admissible pair
variation** of a pair $(q,\eta)$ is a pair of $C^2$ maps $(\xi,\zeta)$ on $I_0$ with
$\xi(a)=\xi(b)=0$, and the pair $(q,\eta)$ is a **vakonomic stationary pair** when the
ordinary two-sided directional derivative

$$\frac{d}{ds}\Big|_{s=0}\Phi(q+s\xi,\eta+s\zeta)$$

exists and equals $0$ for every admissible pair variation $(\xi,\zeta)$ with
$\xi(a)=\xi(b)=0$. A $C^2$ curve $q:I_0\to\mathbb R^3$ is a **vakonomic motion** of the
constraint when there is a $C^2$ function $\eta$ on $I_0$ such that $(q,\eta)$ is a vakonomic
stationary pair on every $[a,b]\subseteq I_0$ with $a<b$, using the same multiplier $\eta$
throughout $I_0$. The functional and its endpoint conditions are taken on each such subinterval.

**Scope.** Both laws are *prescriptions* for the same constraint, and the definition deliberately
does not identify them: the d'Alembert law is a differential condition on the acceleration along
the constraint distribution, while the vakonomic law arises from stationarity of the augmented
functional over curves and multipliers. For this constraint the two prescriptions give different
motions from the same initial data; that is the content of
[[cex-cm-dalembert-and-vakonomic-evolutions-differ]]. The constraint law $z'=xy'$ is not
equivalent to any condition $G(q)=\text{const}$ for a $C^2$ function $G$ with nonvanishing
differential, as proved in [[prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets]];
this is the sense in which the constraint is non-holonomic.

## Remarks

- The two spanning fields of $D$ are $A:=\partial_x$ and $B:=\partial_y+x\partial_z$, in the
  sense that at each $q$ the vectors $A$ and $B$ evaluated at $q$ span $D(q)$. The
  non-integrability computation of [[prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets]]
  uses exactly these two fields.

- The stationary-pair definition quantifies over all $C^2$ multipliers $\eta$ and all
  $C^2$ variations, with no condition on $\eta$ at the endpoints; this is the standard
  augmented-Lagrangian formulation of the vakonomic equations, recorded here as a definition and
  not as a statement about which of the two laws describes any physical system.
