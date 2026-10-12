---
id: def-cm-central-force-trajectory
kind: definition
title: "Central-force trajectories: the central-force equation, angular momentum, energy and the effective potential"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-interval, def-ck-euclidean-maps-and-diffeomorphisms, def-vector-valued-derivative-and-integral, def-euclidean-inner-product, def-cross-product-in-r3]
dependency_roles:
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §2.5.4, printed pp. 31-33, Eqs. (2.82)-(2.89): two-body reduction, the conserved $J=\\mu r^2\\dot\\phi$, the radial equation and the effective potential $V_{\\rm eff}(r)=V(r)+J^2/(2\\mu r^2)$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §3.4, Eqs. (3.44)-(3.65): motion in a central field, the first integral and the effective potential"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Definition

Let $\mu>0$ be a real number, let $J_0\subseteq(0,\infty)$ be an open interval,
let $U:J_0\to\mathbb R$ be of class $C^2$
([[def-ck-euclidean-maps-and-diffeomorphisms]]), let $I\subseteq\mathbb R$ be
an interval with at least two points ([[def-interval]]), and let
$r:I\to\mathbb R^3$ be twice differentiable with $|r(t)|\in J_0$ for every
$t\in I$ ([[def-vector-valued-derivative-and-integral]]). The curve $r$ is a
**central-force trajectory for** $(\mu,U)$ when

$$\mu\,r''(t)=-\frac{U'(|r(t)|)}{|r(t)|}\,r(t)\qquad(t\in I),$$

where $|x|:=\lVert x\rVert_2$ is the Euclidean norm
([[def-euclidean-inner-product]]) and $U'$ is the derivative of $U$ on the
open interval $J_0$.

**Attached objects.** The **angular momentum vector** of such a trajectory is
the curve $j:I\to\mathbb R^3$,

$$j(t):=\mu\,r(t)\times r'(t),$$

with $\times$ the cross product of $\mathbb R^3$ ([[def-cross-product-in-r3]]);
its **energy** is the function $E:I\to\mathbb R$,

$$E(t):=\tfrac12\mu\,\lVert r'(t)\rVert_2^2+U(|r(t)|);$$

and for every $J\ge0$ the **effective potential of momentum magnitude** $J$ is
the function $U^{\mathrm{eff}}_J:J_0\to\mathbb R$,

$$U^{\mathrm{eff}}_J(\rho):=U(\rho)+\frac{J^2}{2\mu\,\rho^2}.$$

**Why the objects are defined.** Since $\rho>0$ throughout $J_0$, the right-hand
side of the central-force equation is defined, the map
$\rho\mapsto J^2/(2\mu\rho^2)$ is $C^2$ on $(0,\infty)$ (a quotient of $C^2$
functions with nowhere vanishing denominator), and $U^{\mathrm{eff}}_J$ is
again $C^2$; in particular second derivatives of $U^{\mathrm{eff}}_J$ are
available. The vector $j(t)$ is defined for every $t\in I$ because $r$ is
differentiable there.

**Mathematical status.** The data $\mu$, $U$ and $J$ are real numbers and
functions; the equation and the attached objects are mathematical statements
about curves. Nothing here asserts that the equation describes a physical
interaction, and the names are conventional labels for the mathematical
objects only.
