---
id: def-gr-fx-trapped-surface-and-black-region
kind: definition
title: "Trapping and the asymptotic black-hole region"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
physical_scope: "Pure Lorentzian-geometric definitions. No field equation, cosmic-censorship assumption, event-horizon existence, or empirical claim is asserted."
deps:
  - def-gr-fx-null-screen-geometry
  - def-gr-causal-curves-and-reachability
  - def-gr-smooth-lorentzian-objects
  - def-lorentz-form-and-inertia
  - def-absolutely-continuous-function
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - def-differential-of-a-smooth-map
  - def-pullback-of-a-covariant-tensor-field
  - def-derivation-at-a-point-and-tangent-space
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-interval
  - prop-chain-rule-for-smooth-half-space-maps
  - cor-mean-value-theorem
  - def-smooth-function-on-a-relatively-open-subset-of-a-half-space
  - def-topological-manifold-with-boundary
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
  - def-interior-closure-boundary-top
dependency_roles:
  def-gr-fx-null-screen-geometry: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-absolutely-continuous-function: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  def-pullback-of-a-covariant-tensor-field: mathematical-premise
  def-derivation-at-a-point-and-tangent-space: mathematical-premise
  def-diffeomorphism-and-local-diffeomorphism-of-manifolds: mathematical-premise
  def-interval: mathematical-premise
  prop-chain-rule-for-smooth-half-space-maps: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-smooth-function-on-a-relatively-open-subset-of-a-half-space: mathematical-premise
  def-topological-manifold-with-boundary: mathematical-premise
  def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary: mathematical-premise
  def-interior-closure-boundary-top: mathematical-premise
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "José Luis Jaramillo, Juan Antonio Valiente Kroon, and Éric Gourgoulhon, From Geometry to Numerics: Interdisciplinary Aspects in Mathematical and Numerical Relativity, arXiv:0712.2332v2 (2008), §§2.1–2.2 and 6.2.2, full 72-page PDF."
      url: "https://arxiv.org/pdf/0712.2332"
    - title: "Edward Witten, Light Rays, Singularities, and All That, Clay Mathematics Institute lecture notes, arXiv:1901.03928v6 (2023), §§5.5–5.6 and 6.2, latest v6 PDF (107 pages)."
      url: "https://arxiv.org/pdf/1901.03928v6"
    - title: "José M. M. Senovilla and David Garfinkle, The 1965 Penrose singularity theorem, Classical and Quantum Gravity 32 (2015), 124008, arXiv:1410.5226v2, §4.2."
      url: "https://arxiv.org/pdf/1410.5226"
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Let $(M,g,N)$ be a smooth time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$. Let $S\subset M$ be a nonempty smooth embedded two-manifold, compact without boundary, whose induced metric $q$ is positive definite. At each point its normal plane $(T_pS)^\perp$ is a Lorentzian two-plane with two future null rays. On any open patch carrying a smooth ordered pair of future null normals $\ell,k$ with $g(\ell,k)=-2$, define
$$\chi_\ell(X,Y)=g(\nabla_X\ell,Y),\qquad \theta_\ell=\operatorname{tr}_q\chi_\ell,\qquad \chi_k(X,Y)=g(\nabla_Xk,Y),\qquad \theta_k=\operatorname{tr}_q\chi_k$$
for tangent vectors $X,Y$ to $S$. These are the null second fundamental forms and their expansions. A **future trapped surface** is such an $S$ for which, on every local patch and for both future null normal rays, the corresponding expansion is strictly negative at every point. Positive rescaling of a null normal multiplies its expansion by the same positive factor, so the sign condition is independent of its affine normalization and of a local interchange of the two rays.

When a specified conformal completion is supplied, write it as $(\overline M,\overline g,\overline N,\Omega,j,\mathscr I^+)$. Here $\overline M$ is a smooth four-dimensional manifold with boundary in the senses of [[def-topological-manifold-with-boundary]] and [[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]. At each point $\overline g$ is a symmetric bilinear form on the tangent space, its components extend smoothly in every boundary chart, and its pointwise inertia is $(3,1,0)$ in the convention of [[def-lorentz-form-and-inertia]]. The vector field $\overline N$ likewise has components that extend smoothly in every boundary chart; it satisfies $\overline g(\overline N,\overline N)<0$ everywhere and $\overline g(\overline N,j_*N)<0$ on the interior. The map $j:M\to\overline M^\circ$ is a diffeomorphism onto the interior. The function $\Omega:\overline M\to\mathbb R$ is smooth in the boundary-chart sense, positive on $j(M)$, and zero with nonzero differential on the designated smooth three-dimensional boundary subset $\mathscr I^+\subseteq\partial\overline M$. On $j(M)$ the metric satisfies $\overline g|_{j(M)}=\Omega^2(j^{-1})^*g$, where pullback is as in [[def-pullback-of-a-covariant-tensor-field]]. The restriction of $\overline g$ to $T\mathscr I^+$ has a one-dimensional kernel at every point; this null line is the generator direction, and its future ray is the one whose vectors $v$ satisfy $\overline g(v,\overline N)<0$. Thus the designated boundary is null and future-oriented; no completeness of its generators is assumed.

A curve $\gamma:[0,1]\to\overline M$ is **locally absolutely continuous** when it is continuous and, around each parameter value, its coordinate functions in a boundary or interior chart are absolutely continuous on every compact subinterval of that chart neighborhood, in the sense of [[def-absolutely-continuous-function]]. Boundary charts take values in relatively open subsets of the closed half-space. To compare two charts around a parameter value, shrink its parameter neighborhood so the coordinate image lies in a compact convex subset of a local-extension domain of the transition map. Its derivative is bounded there, so the mean-value estimate ([[cor-mean-value-theorem]]) makes the transition Lipschitz. Applying that bound to the finite disjoint-interval condition for absolute continuity shows that the transformed coordinate functions remain absolutely continuous; the argument in both directions proves chart independence. At an interior parameter value where the coordinate derivatives exist, $\dot\gamma(t)$ is the tangent vector with those components; the chain rule for the chart transitions ([[prop-chain-rule-for-smooth-half-space-maps]]) makes it independent of chart. A **future causal curve in $\overline M$** is a locally absolutely continuous curve for which, for almost every $t\in(0,1)$, this derivative exists and satisfies $\overline g(\dot\gamma,\dot\gamma)\le0$ and $\overline g(\dot\gamma,\overline N)<0$. These inequalities make the derivative nonzero and select the future direction. On the interior, $\overline g(j_*v,j_*v)=\Omega^2g(v,v)$ for every tangent vector $v$, so causal character is unchanged, and the specified orientation condition makes the future cone agree with that of $N$ ([[def-gr-smooth-lorentzian-objects]]). Define $\overline J^-_{\overline g,\overline N}(\mathscr I^+):=\{x\in\overline M:\text{there are }y\in\mathscr I^+\text{ and a future causal curve in }\overline M\text{ from }x\text{ to }y\}$. The **black region relative to this completion** and its **event horizon** are, respectively,
$$\mathcal B_{\mathscr I^+}:=\{p\in M:j(p)\notin\overline J^-_{\overline g,\overline N}(\mathscr I^+)\},\qquad \mathcal H_{\mathscr I^+}:=\partial_M\mathcal B_{\mathscr I^+}.$$ 
If no such completion is supplied, these two sets are undefined; their existence is not a consequence of the definition of a trapped surface.

Given in addition a designated smooth future null normal ray field $[\ell_{\mathrm{out}}]$ on $S$, called the **outward direction**, $S$ is **marginally outer trapped** relative to this choice when $\theta_{\ell_{\mathrm{out}}}=0$ everywhere. If the outward label comes from a side of an embedded spacelike hypersurface or from an asymptotic end, that side or end is part of the supplied data; it is not inferred from $S$ alone. The zero condition is invariant under positive rescaling of the chosen ray.

## Definition references

[[def-gr-fx-null-screen-geometry]]

[[def-gr-causal-curves-and-reachability]]

[[def-gr-smooth-lorentzian-objects]]

[[def-lorentz-form-and-inertia]]

[[def-absolutely-continuous-function]]

[[def-c-r-and-smooth-maps-between-smooth-manifolds]]

[[def-differential-of-a-smooth-map]]

[[def-pullback-of-a-covariant-tensor-field]]

[[def-derivation-at-a-point-and-tangent-space]]

[[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]

[[def-interval]]

[[prop-chain-rule-for-smooth-half-space-maps]]

[[cor-mean-value-theorem]]

[[def-smooth-function-on-a-relatively-open-subset-of-a-half-space]]

[[def-topological-manifold-with-boundary]]

[[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]

[[def-interior-closure-boundary-top]]

## Conventions and scope

The screen geometry supplier fixes the null second fundamental form and expansion and proves their boost law: under $\ell\mapsto e^f\ell$, one has $\theta_\ell\mapsto e^f\theta_\ell$. Thus the two inequalities in the trapped-surface definition are local, branch-independent conditions. The event horizon is a global boundary in a specified completion; it is not identified with a trapped surface or a marginally outer trapped surface. In the SI geometric convention $x^0=ct$ with dimensionless metric and affine parameter in metres, the expansion has units $\mathrm m^{-1}$, as in the screen geometry supplier.
