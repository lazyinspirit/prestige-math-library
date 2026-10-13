---
id: def-cm01-configuration
kind: definition
title: "Configuration domain of $N$ labeled particles: open admissible sets, regular holonomic constraints and the mass operator"
status: draft
origin: session
domain: physics
dependency_level: 6
deps: [post-cm01-worldlines, def-cm01-units, def-cm-constrained-configuration-and-mass-metric, thm-a-regular-level-set-is-an-embedded-submanifold, def-regular-and-critical-points-and-values, def-embedded-submanifold-and-slice-chart]
dependency_roles:
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-constrained-configuration-and-mass-metric: mathematical-premise
  thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
  def-regular-and-critical-points-and-values: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Definition of the configuration stage of the framework: for $N$ labeled particles of the model, the admissible position tuples in one inertial frame as an open set or as the regular zero set of holonomic constraint functions, the collision exclusion of a singular force model, the degree-of-freedom count, the mass operator assembled from the fixed masses, and constant-rank affine velocity constraints with an explicit local nonintegrability criterion. The item defines vocabulary only; it adopts no force law, no equation of motion and no constitutive assumption, and it asserts no measured value."
sources:
  references:
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 1.1 'Configuration Spaces', extracted chapter pages 1-2: the configuration of a system of point particles, the configuration space, its dimension as the number of degrees of freedom, and the worked example that two particles at fixed distance have a five-dimensional configuration space"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.1, printed pages 10-13 (PDF pages 16-19): constraints and generalized coordinates, and Section 3.1, printed pages 46-48: configuration space of a mechanical system"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "J. M. Lee, Introduction to Smooth Manifolds (2003 first edition), Level Sets, printed pages 104-105: the regular level set theorem (used here through its established statement)"
      url: "https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf"
verification:
  precheck: n/a
---

## Definition

Let $N\ge1$ particle labels with fixed masses $m_{1},\dots,m_{N}>0$ be given as
in [[post-cm01-worldlines]], and fix one inertial frame of the model with
spatial coordinates $x_{i}\in\mathbb R^{3}$ for each label $i$. Identify the
space of all position tuples with $\mathbb R^{3N}=(\mathbb R^{3})^{N}$ and
write its points as $x=(x_{1},\dots,x_{N})$; each component $x_{i}$ has
dimension $\ell$ ([[def-cm01-units]]).

**(a) Unconstrained branch.** The **unconstrained configuration domain** is an
open set $Q\subseteq\mathbb R^{3N}$, chosen as part of the model. A tuple
$x\in Q$ is an **admissible configuration**: an assignment of one position to
each label at one time. A **singular-force exclusion** is the removal of the
**collision set**

$$\Delta:=\Bigl\{x\in\mathbb R^{3N}:\ \text{there are }i\ne j\text{ with }x_{i}=x_{j}\Bigr\}$$

from the domain, which is done when the model's force law is not defined at
coincident positions: $\Delta$ is closed (it is the union of the finitely many
closed sets $\{x_{i}=x_{j}\}$, each the zero set of the continuous map
$x\mapsto x_{i}-x_{j}$), so $Q:=\mathbb R^{3N}\setminus\Delta$ is open and is a
legitimate configuration domain. Whether the exclusion is part of the model is
a modelling decision recorded with the force law; the framework itself only
requires $Q$ to be open and stated.

**(b) Holonomic constraint branch.** Let $O\subseteq\mathbb R^{3N}$ be an open
**ambient set**, let $k\in\mathbb N$ with $1\le k\le3N-1$, and let

$$G=(G_{1},\dots,G_{k}):O\longrightarrow\mathbb R^{k}$$

be a smooth map, each component carrying a declared dimension and unit fixed
by the model (a component can always be rescaled by a nonzero constant without
changing its zero set, and the rescaling is part of the declaration). Assume:

1. **Nonempty level set:** $G^{-1}(0)\ne\varnothing$;
2. **Rank condition:** the differential $DG(x):\mathbb R^{3N}\to\mathbb R^{k}$
   is surjective, equivalently has rank $k$, at every $x\in G^{-1}(0)$.

Then $0$ is a regular value of $G$ in the sense of
[[def-regular-and-critical-points-and-values]], and the **constrained
configuration space** is $Q:=G^{-1}(0)$. By
[[thm-a-regular-level-set-is-an-embedded-submanifold]] — applied to the smooth
map $G$ from the open subset $O$ of $\mathbb R^{3N}$ to $\mathbb R^{k}$, whose
regular value $0$ has nonempty fibre — $Q$ is an embedded submanifold of
$\mathbb R^{3N}$ of dimension $3N-k$ ([[def-embedded-submanifold-and-slice-chart]]).
The **degrees of freedom** of this branch of the model is the number
$$\dim Q=3N-k.$$ In the sense of [[def-cm-constrained-configuration-and-mass-metric]], $Q$ together with the inclusion $X:Q\hookrightarrow\mathbb R^{3N}$ is then a particle configuration, and the mass metric of that definition is available with the masses $m_{i}$; the configuration is constrained to $Q$ for all times in this branch.

**(c) Time-dependent holonomic constraints.** If the constraint map depends on
time,

$$G:\mathbb R\times O\longrightarrow\mathbb R^{k},\qquad (t,x)\longmapsto G(t,x),$$

with $G$ smooth and $D_{x}G(t_{0},x)$ of rank $k$ at every $x$ of the nonempty
set $G(t_{0},\cdot)^{-1}(0)$, then for each fixed $t_{0}\in\mathbb R$ the
**instantaneous configuration space** $Q_{t_{0}}:=G(t_{0},\cdot)^{-1}(0)$ is an
embedded submanifold of dimension $3N-k$ by the same theorem applied to
$G(t_{0},\cdot)$. The family $\{Q_{t_{0}}\}$ varies with $t_{0}$; a curve
$t\mapsto q(t)$ with $G(t,q(t))=0$ is not thereby a curve in one fixed
manifold, and the kinematic treatment of such constraints (velocities, the
reaction forces that maintain them and the distinction between rheonomic and
scleronomic constraints) belongs to the framework's constraint development and
is not part of this definition.

**(d) Mass operator.** In the ambient coordinates define the **mass operator**
$\mathsf M:\mathbb R^{3N}\to\mathbb R^{3N}$ by block multiplication,

$$\mathsf M(x_{1},\dots,x_{N}):=(m_{1}x_{1},\dots,m_{N}x_{N});$$

its matrix in the standard basis is block diagonal with blocks $m_{i}I_{3}$,
the **mass matrix** of [[def-cm-constrained-configuration-and-mass-metric]].
Its dimension is $\mu$: it multiplies positions of dimension $\ell$ by masses
of dimension $\mu$. On the constrained branch, for the inclusion
$X:Q\hookrightarrow\mathbb R^{3N}$ and tangent vectors $h,z\in T_qQ$,
the mass metric of that item is
$$\mathcal G_q(h,z):=\langle dX_q(h),\mathsf M\,dX_q(z)\rangle_{3N}=\sum_{i=1}^{N}m_i\,h_i\cdot z_i,$$
where $h_i,z_i\in\mathbb R^3$ are the blocks of $dX_q(h),dX_q(z)$ under
the canonical Euclidean tangent identification specified in that supplier.
It restricts the mass-weighted ambient bilinear form to $T_qQ$, rather than
the unweighted Euclidean inner product.

**(e) Velocity constraints are a different object.** A **velocity-map
constraint** on the open ambient set $O$ is a pair of smooth maps
$$A:\mathbb R\times O\to\mathbb R^{k'\times3N},\qquad b:\mathbb R\times O\to\mathbb R^{k'},\qquad 1\le k'\le3N,$$
with $A(t,x)$ of constant rank $k'$ everywhere in the declared domain,
imposing $A(t,x(t))\dot x(t)+b(t,x(t))=0$ on a $C^1$ curve $x:J\to O$, where $J\subseteq\mathbb R$ is a nondegenerate open interval, the parameter $t$ is frame time, and $\dot x(t):=x'(t)$ is the componentwise derivative in the convention of [[def-cm01-units]]. Equivalently $A(t,x)$ is a linear map
$\mathbb R^{3N}\to\mathbb R^{k'}$. Each row's output unit is declared, and
its corresponding component of $b$ has that same unit. The allowed velocities
at $(t,x)$ form the affine set $\{v:A(t,x)v+b(t,x)=0\}$; its differences form
$\ker A(t,x)$.

The law is **locally holonomic-equivalent at $(t_0,x_0)$** if on some open
neighbourhood $V\subseteq\mathbb R\times O$ of that point there are a $C^2$
map $g:V\to\mathbb R^{k'}$ with $D_xg$ of rank $k'$ and a $C^2$ matrix map
$C:V\to\mathbb R^{k'\times k'}$ with $\det C\ne0$ such that
$$A=C\,D_xg,\qquad b=C\,\partial_tg\qquad\text{on }V.$$
Thus the velocity law is locally the derivative of the regular positional
constraints $g(t,x)=\text{constant}$. It is **locally nonholonomic at the
specified point** when no such neighbourhood and pair $(g,C)$ exists; a
nonholonomic model in this local sense declares a point (or a region of
points) with this failure. For a homogeneous time-independent law this
rules out such a regular-level-set representation throughout a neighbourhood.
It need not rule out an individual embedded submanifold $S\subseteq O$ with
$T_xS=\ker A(x)$ for every $x\in S$, using the ambient tangent identification
of [[def-cm-constrained-configuration-and-mass-metric]]; for an affine
time-dependent law the criterion also includes the drift $b$.
Absence of a single global pair alone does not establish local
nonintegrability. The rank of $A$ counts instantaneous velocity restrictions,
not the dimension of a positional configuration manifold; accessibility
requires its own definition. Rank changes require a separate model.

## Remarks

- **The definition is a stage, not a law.** Nothing here says how $x$ varies
  with time; the equation of motion, the force law and the reaction forces of
  the constrained branch are adopted later in the framework, each with its own
  hypotheses. The dimension count of clause (b) is a statement about
  $G^{-1}(0)$ as a set, proved from the established regular-level theorem; it
  presupposes exactly the nonemptiness and rank hypotheses displayed there.

- **Choice of coordinates.** The definition uses the redundant particle
  positions $x\in\mathbb R^{3N}$ as coordinates, not a set of generalized
  coordinates of $Q$; describing a constrained configuration by $3N-k$
  coordinates requires charts of the embedded submanifold, and the
  transformation between such charts is part of the differential geometry of
  $Q$. The distinction between the redundant description and a chart is not
  erased by the count $\dim Q$.

- **Dimensions of constraint components.** The dimension of a constraint
  component is part of the model's declaration, exactly as the unit of a
  physical quantity is: a constraint expressed in metres and the same
  constraint multiplied by a second quantity have different components and
  the same zero set. The rescaling freedom is recorded so that a model can
  choose convenient units, and it changes no physical content of the
  constraint.
