---
id: def-cm-holonomic-constraint-and-ideal-reactions
kind: definition
title: "A regular holonomic constraint, its virtual displacements and the ideal-reaction law"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-euclidean-submersions-and-immersions, def-regular-critical-points-values-and-level-sets, def-tangent-space-to-a-regular-level-set, def-matrix-product-and-identity-matrix, def-invertible-matrix-and-general-linear-group, def-euclidean-inner-product, def-interval, def-vector-valued-derivative-and-integral]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-euclidean-submersions-and-immersions: mathematical-premise
  def-regular-critical-points-values-and-level-sets: mathematical-premise
  def-tangent-space-to-a-regular-level-set: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-interval: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 5.9 (Lagrange multipliers for Holonomic Constraints) and Section 6.8 (Applications to systems involving holonomic constraints)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.3 (constraints, generalised coordinates and Lagrange multipliers for holonomic constraints), printed pages 17-22"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Definition

Let $n\ge1$ and $k\ge1$, let $O\subseteq\mathbb R\times\mathbb R^n$ be open and nonempty, let
$G:O\to\mathbb R^k$ be of class $C^2$
([[def-ck-euclidean-maps-and-diffeomorphisms]]), and write $G_q(t,q)$ for the Jacobian matrix of
$q\mapsto G(t,q)$ ([[def-jacobian-matrix-and-gradient]]), a $k\times n$ matrix. The constraint

$$G(t,q)=0$$

is **regular** when

$$G_q(t,q)\ \text{has rank }k\ \text{for every }(t,q)\in O,$$

equivalently when $G_q$ is surjective at every point ([[def-euclidean-submersions-and-immersions]]).
Under this hypothesis each fibre $G(t,\cdot)^{-1}(0)$ is a regular level set and every point of it
is a regular point in the sense of [[def-regular-critical-points-values-and-level-sets]].

**Constraint set and admissible data.** Fix a symmetric positive definite matrix
$M\in M_n(\mathbb R)$ ([[def-invertible-matrix-and-general-linear-group]]) and a continuous map
$f:O\times\mathbb R^n\to\mathbb R^n$, the **given force**. A map $q:I\to\mathbb R^n$ on an open
interval $I\subseteq\mathbb R$ ([[def-interval]]) is a **constrained curve** when

$$(t,q(t))\in O,\qquad G\bigl(t,q(t)\bigr)=0\qquad(t\in I).$$

**Virtual displacements and permitted velocities.** For $(t,q)\in O$ the **virtual displacements**
at $(t,q)$ are the elements of the kernel

$$V(t,q):=\ker G_q(t,q)=\bigl\{\delta\in\mathbb R^n:G_q(t,q)\delta=0\bigr\}\subseteq\mathbb R^n,$$

the tangent space to the level set of $G(t,\cdot)$ at $q$ in the sense of
[[def-tangent-space-to-a-regular-level-set]]; a **permitted velocity** at $(t,q)$ is a vector
$v\in\mathbb R^n$ with

$$G_t(t,q)+G_q(t,q)v=0 .$$

For a $C^1$ constrained curve the differentiated constraint forces
$G_t(t,q(t))+G_q(t,q(t))q'(t)=0$, so its velocity is automatically permitted; the permitted
condition is stated separately because it is the correct initial condition for the first-order
system below.

**Ideal-constraint motions.** A $C^2$ constrained curve $q:I\to\mathbb R^n$ is an
**ideal-constraint motion** of the data $(G,M,f)$ when

1. $q'(t)$ is a permitted velocity at $(t,q(t))$ for every $t\in I$, and
2. there is a continuous map $\lambda:I\to\mathbb R^k$ with

$$Mq''(t)=f\bigl(t,q(t),q'(t)\bigr)+G_q\bigl(t,q(t)\bigr)^{\mathsf T}\lambda(t)\qquad(t\in I).$$

The vector field $R(t):=Mq''(t)-f(t,q(t),q'(t))$ is the **reaction** and
$R=G_q^{\mathsf T}\lambda$ is its **multiplier form**. Since
$G_q(t,q)^{\mathsf T}\lambda\cdot\delta=\lambda\cdot G_q(t,q)\delta=0$ for every
$\delta\in V(t,q)$, every ideal-constraint motion satisfies the **d'Alembert condition**

$$\bigl(Mq''(t)-f(t,q(t),q'(t))\bigr)\cdot\delta=0\qquad\text{for every }\delta\in V(t,q(t)),$$

i.e. the reaction performs no virtual work; the converse implication, that every curve satisfying
the d'Alembert condition is an ideal-constraint motion with a *unique* multiplier, together with
uniqueness of the resulting acceleration, is the content of
[[lem-cm-constraint-multipliers-and-accelerations]] and is not assumed here.

**Scope.** The definition is chartwise and time-dependent: the constraint may depend on $t$
(rheonomic case), its velocity condition is the fixed-time linearisation recorded above, and no
relation between the *variational* (vakonomic) treatment of the constraint and the present
d'Alembert law is asserted. The construction and long-time behaviour of solutions is the subject of
[[prop-cm-ideal-holonomic-system-in-a-time-dependent-chart]]. For a holonomic constraint written
in a chart, the multiplier $\lambda$ is not a measured quantity: only the reaction
$G_q^{\mathsf T}\lambda$ enters the equations of motion.

## Remarks

- The definition covers the classical examples: a planar pendulum is $n=2$, $k=1$,
  $G(q)=|q|^2-l^2$ on the chart $\{(x,y):y\ne0\}$ or on all of $\mathbb R^2$ with
  $G_q\ne0$ off the origin; a rolling disk in the plane with configuration $(x,\theta)$ is
  $G(q)=x-a\theta$, so that in that planar special case the constraint is holonomic, while
  general three-dimensional rolling is not reducible to a single level set. These examples are
  worked out on the companion page.

- The word *ideal* refers to the d'Alembert condition and not to any assertion that a real
  contact or joint enforces it; frictionless joints, no-slip rolling with sufficient static
  friction, and similar mechanisms are physical idealisations modelled by this law, and the
  empirical qualifications of such models belong to the consuming physics items, not here.
