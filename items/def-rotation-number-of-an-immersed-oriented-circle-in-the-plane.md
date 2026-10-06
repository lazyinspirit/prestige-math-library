---
id: def-rotation-number-of-an-immersed-oriented-circle-in-the-plane
kind: definition
title: "Rotation number of an immersed oriented circle in the plane"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-degree-of-a-circle-loop, cor-degree-descends-to-circle-loop-classes, thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree, def-immersion-submersion-and-constant-rank-map, def-tangent-bundle-as-a-disjoint-union, def-differential-of-a-smooth-map, cor-winding-number-classifies-loops-in-the-punctured-plane, thm-winding-number-equals-circle-degree, def-rotation-index-of-a-regular-closed-plane-curve, def-smooth-manifold]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Hassler Whitney, On regular closed curves in the plane, Compositio Mathematica 4 (1937)"
      url: https://www.numdam.org/item/CM_1937__4__276_0.pdf
      locator: "§1, pp. 276–279: rotation number of a regular closed curve and its invariance; the index is defined as the degree of the tangent map"
    - title: "John Francis, The h-Principle, Lecture 10: Classifying immersions of spheres, after Smale (notes by A. Beaudry)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/10eversing.pdf
      locator: "PDF pp. 1–2; the $n=1$ case and the winding-number classification of immersed circles"
dependency_level: 0
---

## Definition

Let $S^1$ be oriented and parametrised as $\mathbb R/2\pi\mathbb Z$ with the
positive orientation, let $\partial_\theta$ be the corresponding positively
oriented unit tangent vector field of $S^1$, and let $f:S^1\to\mathbb R^2$ be a
smooth immersion, that is, a regular closed curve
([[def-immersion-submersion-and-constant-rank-map]],
[[def-smooth-manifold]]). Writing $T\mathbb R^2\cong\mathbb R^2\times\mathbb R^2$
for the canonical identification, the differential
([[def-differential-of-a-smooth-map]], [[def-tangent-bundle-as-a-disjoint-union]])
gives for each $\theta$ the velocity vector $df_\theta(\partial_\theta)$, which
is nonzero because $f$ is an immersion.

The **normalised velocity**, or unit tangent, of $f$ is the map
$$\tau_f:S^1\longrightarrow S^1,\qquad \tau_f(\theta)=\frac{df_\theta(\partial_\theta)}{\lvert df_\theta(\partial_\theta)\rvert},$$
which is continuous because the velocity never vanishes and every nonzero
vector is a positive multiple of a unique unit vector.

The **rotation number** (also **rotation index**) of $f$ is
$$\operatorname{rot}(f):=\deg(\tau_f)\in\mathbb Z,$$
the degree of the unit tangent map. Concretely, after choosing the base point
$\theta_0=[0]$, identifying the unit circle with $\mathbb R/\mathbb Z$ by the
standard parametrisation and rotating the *target* circle by a constant so that
$\tau_f(\theta_0)$ corresponds to $[0]$, the class of $\tau_f$ is a based loop
in the sense of [[def-degree-of-a-circle-loop]], and its degree is the integer
$\operatorname{rot}(f)$; the constant rotation of the target plane changes
neither the winding number nor the degree, and the degree descends to based
loop classes ([[cor-degree-descends-to-circle-loop-classes]]), so the value is
independent of the choice of $\theta_0$ and of the lift used to compute it
([[thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree]]).

Equivalent formulations, all taking the same value:

- The velocity curve $t\mapsto f'(t)$ is a closed $C^1$, hence rectifiable,
  loop in $\mathbb C^\times=\mathbb R^2\setminus\{0\}$, and
  $\operatorname{rot}(f)$ is its **winding number about the origin**: the
  normalised velocity $t\mapsto f'(t)/\lvert f'(t)\rvert$ is exactly
  $\tau_f$, and after the constant nonzero complex multiplication
  $\gamma\mapsto\gamma/\gamma(t_0)$ of the target plane, which changes neither
  the winding number about $0$ nor the degree of the normalised loop,
  [[thm-winding-number-equals-circle-degree]] identifies $n(\gamma,0)$ with the
  degree of the normalised loop, while
  [[cor-winding-number-classifies-loops-in-the-punctured-plane]] identifies that
  winding number with the class in $\pi_1(\mathbb C^\times,1)\cong\mathbb Z$.
- $\operatorname{rot}(f)$ equals $\frac{1}{2\pi}$ times the **total signed
  turning angle** of the tangent, i.e. the rotation index of the regular closed
  plane curve $f$ in the sense of
  [[def-rotation-index-of-a-regular-closed-plane-curve]], where the tangent
  angle is lifted continuously and the corner jumps are zero for a smooth
  curve.

The normalisation is fixed by the round unit circle: the immersion
$\theta\mapsto(\cos\theta,\sin\theta)$ traversed once in the positive direction
has unit tangent $(-\sin\theta,\cos\theta)$ winding once positively, hence rotation number $+1$, and its reverse has
rotation number $-1$. Reversing the orientation of the domain negates the
rotation number, while a regular (orientation-preserving) reparametrisation
leaves it unchanged. Indeed, if $h$ is a positively oriented circle
diffeomorphism with increasing lift $H$ satisfying
$H(\theta+2\pi)=H(\theta)+2\pi$, then the chain rule gives
$\tau_{f\circ h}=\tau_f\circ h$: composing a tangent-angle lift with $H$
preserves its total increment. For the reversal $a(\theta)=-\theta$,
$\tau_{f\circ a}(\theta)=-\tau_f(-\theta)$, so an angle lift is
$\alpha(-\theta)+\pi$ when $\alpha$ lifts $\tau_f$; its total increment is
the negative of that of $\alpha$.

No convexity, simplicity, self-intersection restriction or properness is
imposed; $\operatorname{rot}$ is an invariant of the oriented immersed circle,
not of its image.
