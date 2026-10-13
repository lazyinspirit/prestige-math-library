---
id: def-cm06-nonholonomic-model
kind: definition
title: "Velocity-constraint (nonholonomic) models of the force branch: constant-rank constraint laws, the d'Alembert reaction and holonomic equivalence"
status: published
origin: session
domain: physics
dependency_level: 9
deps: [post-cm02-force-superposition, def-cm01-configuration, def-cm01-velocity-acceleration, def-cm01-units, def-cm-nonholonomic-velocity-constraint-law, cex-cm-dalembert-and-vakonomic-evolutions-differ, prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets, lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple, cor-matrix-rank-nullity, def-linear-map, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-vector-valued-derivative-and-integral, thm-chain-rule-for-total-derivatives, def-euclidean-inner-product, def-invertible-matrix-and-general-linear-group, def-interval]
dependency_roles:
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-nonholonomic-velocity-constraint-law: mathematical-premise
  cex-cm-dalembert-and-vakonomic-evolutions-differ: mathematical-premise
  prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets: mathematical-premise
  lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple: mathematical-premise
  cor-matrix-rank-nullity: mathematical-premise
  def-linear-map: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Definition of the velocity-constraint branch of the force model: a declared constant-rank affine velocity law, its admissible velocities and Chetaev virtual displacements at frozen time and configuration, kinematically admissible curve families, the adopted d'Alembert ideal-reaction law and its multiplier representation, the equation of the branch, the classification of global and local holonomic equivalence and locally nonholonomic models, and the exclusion of rank changes, contact changes, impacts, friction and driving. The item defines a model class; it asserts no measured value and does not claim that any particular mechanism is described by it."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.3.2 'Non-Holonomic Constraints', Eq. (2.41), printed pages 20-21 (PDF pages 26-27): the specific coin rolling without slipping down a slope, with coordinates (x,y,theta,phi) and constraints xdot=R phidot sin(theta), ydot=R phidot cos(theta), which Tong identifies as non-holonomic"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 1.10.3: a nonholonomic constraint distribution as a constant-rank subbundle, the d'Alembert ideal reaction, and the explicit distinction from the augmented-action (vakonomic) formulation"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Sections 1.4-1.5 and 2.2, printed pages 19-25 and 33-36: velocity constraints A(q,t)qdot+b(q,t)=0 of constant row rank, admissible virtual vectors obeying A delta q=0, and the warning that stationary action with an inserted velocity constraint is a different problem"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "J. Cortes, M. de Leon, D. Martin de Diego and S. Martinez, Geometric description of vakonomic and nonholonomic dynamics. Comparison of solutions (SIAM J. Control Optim., author PDF), Sections 2 and 5: the d'Alembert (Chetaev) equations for linear constraints and the separate vakonomic problem, with the non-integrability discussion"
      url: "http://terrano.ucsd.edu/jorge/publications/data/2003_CoLeMaMa-sicon.pdf"
verification:
  precheck: pass
---

## Definition

Adopt the force branch of [[post-cm02-force-superposition]]: $N\ge1$ labels
with masses $m_{1},\dots,m_{N}>0$, a nondegenerate open time window
$I_{0}\subseteq\mathbb R$, an open configuration domain $Q\subseteq\mathbb R^{3N}$
and a force map $F$ with the standing regularity
([[def-cm01-configuration]], [[def-cm01-units]]). Fix one inertial frame with
adapted coordinates $(t,x)$ and write $x=(x_{1},\dots,x_{N})\in\mathbb R^{3N}$
with coordinate velocity $w=x'$ ([[def-cm01-velocity-acceleration]],
[[def-vector-valued-derivative-and-integral]]).

**(a) Velocity-constraint datum.** A **velocity-constraint datum** on this
data is a quadruple $(O_{v},k',A,b)$ with:

1. an **ambient set** $O_{v}\subseteq I_{0}\times Q$, open and nonempty;
2. an integer $k'$ with $1\le k'\le 3N-1$;
3. maps $A:O_{v}\to M_{k'\times 3N}(\mathbb R)$ and
   $b:O_{v}\to\mathbb R^{k'}$ of class $C^{2}$
   ([[def-ck-euclidean-maps-and-diffeomorphisms]]), of declared dimensions
   chosen so that every row satisfies $[A_{\alpha j}w_{j}]=[b_{\alpha}]$ —
   the output of each row of the law below is a single declared quantity;
4. the **constant-rank hypothesis**: $A(t,x)$ has rank $k'$ for every
   $(t,x)\in O_{v}$, equivalently the linear map
   $A(t,x):\mathbb R^{3N}\to\mathbb R^{k'}$ is surjective
   ([[def-linear-map]], [[cor-matrix-rank-nullity]]).

The **constraint law** of the datum is
$$A(t,x)\,w+b(t,x)=0 .$$

**(b) Admissible velocities, virtual displacements, admissible curves.** For
$(t,x)\in O_{v}$ the **admissible velocities** are the vectors
$v\in\mathbb R^{3N}$ with $A(t,x)v+b(t,x)=0$. They form the nonempty affine
subspace $v_{0}+\ker A(t,x)$ (nonempty because $A(t,x)$ is surjective), with
direction the linear space
$$V(t,x):=\ker A(t,x)\subseteq\mathbb R^{3N},\qquad \dim V(t,x)=3N-k'$$
by rank-nullity ([[cor-matrix-rank-nullity]]). The elements of $V(t,x)$ are
the **virtual displacements** of the datum at $(t,x)$: the admissible
velocity differences at frozen time and configuration, in the Chetaev
prescription of [[def-cm-nonholonomic-velocity-constraint-law]]. A
**kinematically admissible curve family** is a map $x:J\to Q$ of class $C^{2}$
on an interval $J\subseteq I_{0}$ with nonempty interior ([[def-interval]])
such that $(t,x(t))\in O_{v}$ and
$A(t,x(t))x'(t)+b(t,x(t))=0$ for every $t\in J$; its velocity at each time is
admissible by definition.

**(c) d'Alembert velocity-constraint model.** A **velocity-constraint model**
consists of the force-branch data, a velocity-constraint datum $(O_{v},k',A,b)$
and the declaration that the labels' motion satisfies the constraint law
while a reaction field acts: a **motion** of the model is a kinematically
admissible curve family $x:J\to Q$ together with a continuous reaction field
$R:J\to\mathbb R^{3N}$ of force dimension satisfying
$$\mathsf M\,x''(t)=F\bigl(t,x(t),x'(t)\bigr)+R(t)\qquad(t\in J),$$
with $\mathsf M$ the mass operator of [[def-cm01-configuration]] clause (d).
The model is a **d'Alembert model** when, in addition, the reaction is
**ideal**: along every motion,
$$R(t)\cdot\delta=0\qquad\text{for every }\delta\in V\bigl(t,x(t)\bigr)=\ker A\bigl(t,x(t)\bigr),$$
the pairing being the Euclidean inner product ([[def-euclidean-inner-product]]).
This is the **adopted idealization** of the mechanism that realizes the
velocity constraint — the analogue for velocity constraints of the ideal
reaction law of the holonomic branch — and it is not a consequence of the
constraint being imposed. By the multiplier lemma
([[lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple]]),
applied at each time to the surjective $A(t,x(t))$, the ideal condition holds
at time $t$ if and only if there is a unique $\mu(t)\in\mathbb R^{k'}$ with
$$R(t)=A\bigl(t,x(t)\bigr)^{\mathsf T}\mu(t);$$
the representation is a mathematical consequence of the condition and the
rank hypothesis, while the ideal condition itself is the adopted part. The
equation of the d'Alembert model in multiplier form is therefore
$\mathsf Mx''=F+A^{\mathsf T}\mu$ along an ideal motion.

**(d) Holonomic equivalence and nonholonomic models.** The datum is
**holonomic-equivalent** on $O_{v}$ when there exist a $C^{2}$ map
$\Phi:O_{v}\to\mathbb R^{k'}$ with $\Phi_{x}$ of rank $k'$ on $O_{v}$ and a
$C^{2}$ map $\varrho:O_{v}\to GL(k',\mathbb R)$
([[def-invertible-matrix-and-general-linear-group]],
[[def-jacobian-matrix-and-gradient]]) with
$$A(t,x)=\varrho(t,x)\,\Phi_{x}(t,x),\qquad b(t,x)=\varrho(t,x)\,\Phi_{t}(t,x)\qquad\text{on }O_{v};$$
for a physical datum, each component $\Phi_{\beta}$ has a declared dimension
$\phi_{\beta}$. With $[x_j]=\ell$ and $[t]=\tau$, assign
$[\varrho_{\alpha\beta}]=[b_{\alpha}]\tau/\phi_{\beta}$; then every term
in the two matrix products has the declared dimension of the corresponding
entry of $A$ or $b$. These component assignments are part of the model's
declaration.
The datum is **locally holonomic-equivalent at a point** when such a pair exists on some open neighbourhood of that point, and **locally nonholonomic there** when no such neighbourhood and pair exists, as in [[def-cm01-configuration]] clause (e). A **nonholonomic model** in this local sense specifies a point (or region of points) with this failure. Absence of one pair on the whole domain $O_v$ alone is insufficient, since a global obstruction need not be local nonintegrability. In
the holonomic-equivalent case the law is the differentiated family of
position constraints $\Phi(t,x)=\text{constant}$: for a $C^{1}$ curve with
$(t,x(t))\in O_{v}$, the chain rule
([[thm-chain-rule-for-total-derivatives]]) gives
$$\frac{d}{dt}\Phi\bigl(t,x(t)\bigr)=\Phi_{t}+\Phi_{x}x'=\varrho^{-1}\bigl(b+Ax'\bigr),$$
so the constraint law holds exactly when $\Phi(t,x(t))$ is constant; a
holonomic-equivalent model is thus one whose constraint is equivalent to a
family of $k'$ independent position constraints with regular differentials,
presented through the nowhere-vanishing factor $\varrho$. For $k'=1$ the
factorization $A=\varrho\Phi_x$, $b=\varrho\Phi_t$ says that the one-form
$b\,dt+A\cdot dx$ is $\varrho\,d\Phi$: in this single-row case, local
nonholonomicity means that no such integrating factor and regular potential
exist on any neighbourhood of the specified point. For $k'>1$, local
nonholonomicity is defined by failure of the matrix factorization above, not
by a single one-form criterion. In a separate reduced two-coordinate model
$q=(s,\theta)\in\mathbb R^{2}$ of a disk rolling along a straight line (not
the $3N$-coordinate datum of clauses (a)-(c)), let $[s]=[a]=\ell$,
$[\theta]=1$ and $a>0$. Its no-slip law $s'-a\theta'=0$ is
holonomic-equivalent with $A=(1,-a)$, $b=0$,
$\Phi(s,\theta)=s-a\theta$ of dimension $\ell$, and dimensionless
$\varrho=1$; the velocity constraint $z'=xy'$ of
[[def-cm-nonholonomic-velocity-constraint-law]] is not: an integrating factor
would make the distribution $\ker A$ tangent to the level sets of $\Phi$, and
[[prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets]] proves
that this distribution is not tangent to the level sets of any $C^{2}$
function with nonvanishing differential. Tong's cited example is a specific
coin of radius $R>0$ rolling without slipping down a slope, with generalized
coordinates $(x,y,\theta,\phi)$ and velocity constraints
$$x'=R\phi'\sin\theta,\qquad y'=R\phi'\cos\theta,$$
where $x,y,R$ have length dimension and $\theta,\phi$ are angles in radians,
which he identifies as non-holonomic (Section 2.3.2, Eq. (2.41)). This is a
source-reported classification of that rolling-coin model; this item does not
prove it or classify all three-dimensional rolling models.

**(e) Status and scope.** The d'Alembert law of clause (c) is a prescription
for the reaction at frozen time and configuration, adopted as the physical
idealization of the mechanism; it is **not** identified with the vakonomic
(stationary augmented action) prescription of
[[def-cm-nonholonomic-velocity-constraint-law]]. For the sample model $z'=xy'$
with unit mass, zero applied force and initial data
$(x,y,z)(0)=(0,0,0)$, $(x',y',z')(0)=(1,1,0)$,
[[cex-cm-dalembert-and-vakonomic-evolutions-differ]] proves that there is a
unique maximal d'Alembert motion on $\mathbb R$ with those data. Every
other d'Alembert motion through the datum is its restriction; neither the
maximal motion nor any such restriction is vakonomic. Thus the d'Alembert
solution set is not a subset of the vakonomic solution set for that datum,
and the two sets are unequal; this does not assert that a vakonomic motion
with those data exists. The closing remark of this page records the
distinction and its scope. The framework excludes from
this branch: points where the rank of $A$ drops (the multiplier system
degenerates there, and no continuation is asserted); unilateral constraints
and contact changes (a skate leaving the ground, a wheel beginning to slip),
which require their own mode-change models; impacts; dry friction along
admissible directions, which must be declared as a separate force
contribution; and active drives, whose driving is an additional force of the
model. Whether a concrete mechanism is described by this class, and whether
its reaction can supply the computed multiplier, are application-level
statements recorded with the apparatus; the definition asserts no measured
value.

## Remarks

- **Position versus velocity constraints.** A holonomic model constrains
  configurations and its constraint locus is a submanifold of position space;
  a velocity-constraint model constrains velocities, its configuration
  remains in the open set $Q$, and its virtual displacements are the frozen
  kernel of $A$. A holonomic model can be written as a velocity-constraint
  model by differentiating its constraint, but not conversely; the
  classification of clause (d) is the precise sense of the converse
  obstruction.

- **The multiplier is not measured.** As in the holonomic branch, only the
  reaction $R=A^{\mathsf T}\mu$ enters the equation, and $\mu$ is tied to the
  declared rows of the law: replacing $(A,b)$ by $(\varrho A,\varrho b)$ with
  an invertible $\varrho$ leaves the admissible velocities and the reaction
  unchanged and changes $\mu$ to $\varrho^{-\mathsf T}\mu$.

- **Rolling is several models.** Planar straight rolling, no-slip rolling
  whose contact can supply the required friction, slip with kinetic friction,
  and prescribed motion of the contact are different models with different
  predictions; the planar ideal no-slip case is holonomic-equivalent. Tong's
  rolling-coin-on-a-slope example is a specific source-reported nonholonomic
  model; no classification of all three-dimensional rolling models is
  asserted here, and rank or contact changes are outside this definition. The companion page compares the
  planar ideal no-slip and frictionless sliding models explicitly.
