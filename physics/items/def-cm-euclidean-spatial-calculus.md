---
id: def-cm-euclidean-spatial-calculus
kind: definition
title: "Euclidean spatial calculus: gradient, divergence and material derivative"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-total-derivative-in-euclidean-space, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, thm-gradient-represents-directional-derivatives-and-steepest-ascent, thm-chain-rule-for-total-derivatives, def-euclidean-linear-map, def-euclidean-inner-product, def-trace-of-a-square-matrix, def-matrix-space, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  thm-gradient-represents-directional-derivatives-and-steepest-ascent: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-euclidean-linear-map: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-trace-of-a-square-matrix: mathematical-premise
  def-matrix-space: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Sections 1.3–1.6 (Eulerian and Lagrangian descriptions of physical quantities, spatial and time derivatives, motion of a body) and Section 3.3 (velocity gradient, stretching and spin tensors)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 8.3 (the continuum velocity field, the material derivative and the continuity equation)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
---

## Definition

We use one-based component labels: for $x\in\mathbb R^3$, $x_i:=x(i-1)$ for $1\le i\le3$, and $e_i$ denotes the imported standard unit vector at index $i-1$. Thus $\partial_i$ here is the imported partial derivative $\partial_{i-1}$, and an entry labelled $(i,j)$ of a $3\times3$ matrix is its imported entry $(i-1,j-1)$. All component formulas below use this relabelling; the underlying maps, matrices, inner product and trace are unchanged.

Throughout, $\mathbb R^3$ carries its standard ordered orthonormal basis $e_1,e_2,e_3$, its Euclidean inner product $\langle\cdot,\cdot\rangle_2$ ([[def-euclidean-inner-product]]).

Let $O\subseteq\mathbb R^3$ be open, let $a\in O$ and let $v:O\to\mathbb R^3$ be of class $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), so that the total derivative $Dv(a):\mathbb R^3\to\mathbb R^3$ is a linear map ([[def-total-derivative-in-euclidean-space]], [[def-euclidean-linear-map]]) whose matrix in the standard bases is $\bigl(\partial_jv_i(a)\bigr)_{1\le i,j\le3}$ ([[def-jacobian-matrix-and-gradient]], [[thm-total-derivative-computes-directional-and-partial-derivatives]]). The **divergence** of $v$ at $a$ is

$$\operatorname{div}v(a):=\operatorname{tr}\bigl(Dv(a)\bigr)=\sum_{i=1}^{3}\partial_iv_i(a),$$

the trace of the total derivative ([[def-trace-of-a-square-matrix]]), read in the standard basis of $M_3(\mathbb R)$ ([[def-matrix-space]]).

For a $C^1$ scalar field $f:O\to\mathbb R$ and $a\in O$, the **gradient** $\nabla f(a)\in\mathbb R^3$ is the vector of partial derivatives of [[def-jacobian-matrix-and-gradient]]; it is the unique vector with $Df(a)h=\langle\nabla f(a),h\rangle_2$ for every $h\in\mathbb R^3$ ([[def-directional-and-partial-derivatives]], [[thm-gradient-represents-directional-derivatives-and-steepest-ascent]]). We write $\langle\nabla f(a),v(a)\rangle_2=:\nabla f(a)\cdot v(a)$.

Let $I\subseteq\mathbb R$ be a nonempty open interval and let $u:I\times O\to\mathbb R^3$ and $f:I\times O\to\mathbb R$ be $C^1$. For $(t,x)\in I\times O$ write $D_x f(t,x):\mathbb R^3\to\mathbb R$ for the total derivative of $y\mapsto f(t,y)$ at fixed $t$, and $\nabla_xf(t,x)$ for its gradient. The derivative $Df(t,x)$ of the full map on $I\times O$ acts on $\mathbb R\times\mathbb R^3$; it is distinct from $D_x f$. Define the partial time derivative $\partial_tf(t,x):=\frac{d}{ds}\big|_{s=t}f(s,x)$ and the **material derivative** of $f$ along $u$

$$D_tf(t,x):=\partial_tf(t,x)+D_xf(t,x)\bigl(u(t,x)\bigr)=\partial_tf(t,x)+\nabla_x f(t,x)\cdot u(t,x).$$

Spatial derivatives $Du$, $Dw$, $\nabla f$ and $\operatorname{div}u$ of time-dependent fields always mean $D_xu$, $D_xw$, $\nabla_x f$ and spatial divergence at fixed time; a stationary field $u(x)$ is included by setting $u(t,x)=u(x)$. The same definitions apply on any open spacetime domain, by restriction to a product neighborhood of each point.

For a $C^1$ vector field $w:I\times O\to\mathbb R^3$ the material derivative $D_tw$ is defined componentwise, and $\operatorname{div}w(t,x)$ means the divergence of $x\mapsto w(t,x)$ at $x$ at each fixed $t$.

## Remarks

- All objects above are defined in the single fixed ordered orthonormal basis $(e_1,e_2,e_3)$; gradients and divergences are not attached to any physical frame, unit system or observer. Coordinates are pure numbers here. A physical reading (length units, time units, a chosen inertial chart) is additional structure supplied by a consuming model, never by this definition.

- The divergence is the trace of the total derivative, not a sum of partial derivatives read in an arbitrary coordinate system; the two agree in the standard orthonormal coordinates used here, and both expressions are recorded so that no later item may silently use a different convention. The gradient likewise depends on the chosen Euclidean inner product.

- The chain rule ([[thm-chain-rule-for-total-derivatives]]) gives, for a $C^1$ curve $\gamma:J\to O$ with $\gamma'(t)=u(t,\gamma(t))$, the identity $\frac{d}{dt}f\bigl(t,\gamma(t)\bigr)=D_tf\bigl(t,\gamma(t)\bigr)$ whenever $f$ is $C^1$; this is the sense in which $D_t$ differentiates along the flow of $u$ and is used by the transport theorem of this collection.

- Integrals and derivatives of fields are taken where they are defined: the material derivative requires $f$ to be $C^1$ on a neighbourhood of the point in question, and no extension of $u$ or $f$ is implicit. Boundary behaviour is never assumed from this definition alone.
