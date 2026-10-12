---
id: thm-gr-local-geometric-development
kind: theorem
title: "Local geometric development of constrained initial data: existence on a neighbourhood of the initial surface, with the surface Cauchy on its domain of dependence"
status: draft
origin: session
domain: mathematics
dependency_level: 23
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-harmonic-gauge-and-reduced-equations, lem-gr-harmonic-initial-data-construction, thm-gr-reduced-einstein-local-existence, thm-gr-harmonic-constraint-propagation, thm-gr-constraint-equations-in-normal-frame, thm-gr-local-geometric-uniqueness, def-gr-spacelike-initial-data-and-constraints, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-conditions-and-global-hyperbolicity, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, lem-gr-local-cauchy-neighborhood, thm-gr-cauchy-surface-implies-globally-hyperbolic, lem-gr-globally-hyperbolic-causal-structure, def-embedded-submanifold-and-slice-chart, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  lem-gr-harmonic-initial-data-construction: mathematical-premise
  thm-gr-reduced-einstein-local-existence: mathematical-premise
  thm-gr-harmonic-constraint-propagation: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  thm-gr-local-geometric-uniqueness: mathematical-premise
  def-gr-spacelike-initial-data-and-constraints: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  lem-gr-local-cauchy-neighborhood: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.1 (Local Existence Theorems for the Einstein Equations): harmonic-map gauge, the reduced initial data constructed from (h,chi), the propagation of the gauge by the homogeneous wave system for the gauge residual Delta^alpha, and the local existence theorem"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.2 (Uniqueness): geometric uniqueness up to diffeomorphism, proved by putting two developments into the same harmonic-map gauge and invoking the uniqueness theorem for the reduced symmetric hyperbolic system"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Let $\Sigma$ be a smooth three-manifold, let $h$ be a smooth Riemannian metric
and $K$ a smooth symmetric covariant $2$-tensor on $\Sigma$
([[def-gr-spacelike-initial-data-and-constraints]]). Let a **matter sector** be
specified as follows: a finite list of tensor fields $\psi$ on a spacetime
carrying $\Sigma$, a smooth stress-energy construction $T(g,\psi)$ and a system
of equations $E(g,\psi)=0$ such that, in every chart, the combined system for
$(\psi,g)$ with the metric variables of
[[lem-gr-reduced-einstein-principal-part]] clause (b) attached is a first-order
quasilinear symmetric hyperbolic system coupled only through zeroth-order terms
in the first derivatives of the metric, and such that $\nabla^aT_{ab}=0$ is a
consequence of $E(g,\psi)=0$ on-shell. Suppose smooth initial data $\psi_0$ on
$\Sigma$ are given so that the constraint equations
$$S_h+(\operatorname{tr}_hK)^2-|K|_h^2=2\Lambda+2\kappa\,T(n,n),\qquad \operatorname{div}_hK(Y)-\nabla^h_Y\operatorname{tr}_hK=\kappa\,T(n,Y)$$
hold on $\Sigma$ for the normal vector $n$ and the stress tensor determined by
$(h,K,\psi_0)$ ([[thm-gr-constraint-equations-in-normal-frame]]). Then:

**(a)** every $p\in\Sigma$ has an open neighborhood $O_p$ in $\Sigma$ such that
there are an open neighborhood $W_p$ of $O_p$ in a smooth four-manifold, a smooth
Lorentzian metric $g$ and matter fields $\psi$ on $W_p$ solving the field
equations $G+\Lambda g=\kappa T(g,\psi)$ and the matter equations, with
$O_p$ a spacelike embedded hypersurface of induced metric $h$ and second
fundamental form $K$;

**(b)** the local solutions of (a) glue: over a neighborhood $W$ of $\Sigma$
there are $g,\psi$ solving the equations, with $\Sigma$ spacelike of data
$(h,K)$, and $\Sigma$ lies in the interior of its domain of dependence in $W$,
so that $D(\Sigma)\cap W$ is an open globally hyperbolic neighborhood of
$\Sigma$ with $\Sigma$ as a Cauchy hypersurface and $(g,\psi)$ restricts to a
globally hyperbolic development of the data;

**(c)** any two developments as in (a)--(b) of the same data are related near
$\Sigma$ by a data-fixing time-orientation-preserving isometry
([[thm-gr-local-geometric-uniqueness]]).

## Facts & Assumptions
**Given:** the surface data $(h,K,\psi_0)$ satisfying the constraints, and the matter sector with its symmetric hyperbolic reduction and on-shell conservation.

[L1] On each coordinate ball of $\Sigma$, the harmonic initial-data construction produces a smooth metric germ with induced data $(h,K)$ and vanishing gauge vector, for a background metric $\bar g=-ds^2+h_0$ ([[lem-gr-harmonic-initial-data-construction]]).

[L2] The reduced equation is locally solvable from these reduced data, and a reduced solution whose constraint residuals vanish and whose gauge vector vanishes is a solution of the field equation ([[thm-gr-reduced-einstein-local-existence]], [[thm-gr-harmonic-constraint-propagation]]); the constraint residuals vanish initially because the constraint equations of the theorem hold and the reductions of the matter sector are compatible ([[thm-gr-constraint-equations-in-normal-frame]]).

[L3] Local geometric uniqueness identifies overlapping local solutions up to data-fixing isometries ([[thm-gr-local-geometric-uniqueness]]).

[L4] Local causal structure: in a product neighborhood with a temporal coordinate $s$ whose level sets are spacelike and acausal near $\Sigma$, the domain of dependence is open, every point of it is interior, and it is a Cauchy surface there; local Cauchy neighborhoods exist in conically bounded product charts ([[lem-gr-local-cauchy-neighborhood]], [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]); a set that meets every inextendible causal curve exactly once makes the manifold globally hyperbolic with compact causal diamonds ([[thm-gr-cauchy-surface-implies-globally-hyperbolic]], [[lem-gr-globally-hyperbolic-causal-structure]], [[def-gr-causal-conditions-and-global-hyperbolicity]]).

[L5] Spacelike embeddings and slice charts: $\Sigma$ is embedded with a slice chart and the normal-coordinate neighborhood is a product ([[def-embedded-submanifold-and-slice-chart]], [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]], [[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]]).



## Proof

**Proof technique:** direct.

1.1 (Local existence (a).) Fix $p\in\Sigma$ and a coordinate ball $O_p$ around $p$ small enough that a normal-coordinate product neighborhood of $O_p$ exists. By [L1] build the harmonic initial data for the metric variables on $O_p$, and extend the matter data $\psi_0$ to a smooth germ with the prescribed normal derivative; by [L2] the reduced system coupled to the matter reduction has a smooth solution on a product neighborhood of $O_p$; the gauge vector and the constraint residuals vanish on $O_p$, so by [L2] the solution satisfies the field equation and the matter equations there, and by construction the induced metric and second fundamental form of $O_p$ are $(h,K)$. This gives (a). [L1, L2, L5, algebra]

2.1 (Gluing (b), first part). For two coordinate balls $O_1,O_2$ with nonempty overlap, restrict both solutions to the overlap; both have induced data $(h,K)$ and satisfy the field and matter equations, so by [L3] there is a data-fixing isometry between neighborhoods of the overlap; in particular the metric and matter fields agree after applying the isometry, and since the isometry fixes the surface pointwise on the overlap it is the identity there; hence the two local solutions coincide on the overlap. Therefore the local solutions glue to a smooth solution $(g,\psi)$ on a neighborhood $W$ of $\Sigma$ with the stated properties. [step 1.1, L3]

3.1 (The surface is Cauchy on its domain of dependence (b), second part). Shrink $W$ to a product neighborhood $(-\epsilon,\epsilon)\times\Sigma$ of the normal coordinate $s$ in which the level sets of $s$ are spacelike. At $s=0$, $\Sigma$ is acausal (a causal curve from a point of $\Sigma$ to a different point of $\Sigma$ would have a nonpositive tangent at an interior minimum of $s$, contradicting its causal character). In a conically bounded product chart, [L4] gives local Cauchy neighborhoods around each point of $\Sigma$; since every inextendible causal curve through a nearby point enters the local cone region and meets the base patch, the domain of dependence of $\Sigma$ contains the open sets $\{|s|<\epsilon_p,\ d(x,\Sigma\text{-point})<\lambda(\epsilon_p-|s|)\}$ over finitely many charts covering a compact piece; hence every point of $\Sigma$ is interior to $D(\Sigma)\cap W$, and $D(\Sigma)\cap W$ is open. Every inextendible causal curve in $D(\Sigma)\cap W$ meets $\Sigma$ exactly once by the definition of the domain of dependence and acausality, so $\Sigma$ is a Cauchy hypersurface for that open neighborhood; by [L4] $D(\Sigma)\cap W$ is then globally hyperbolic with compact causal diamonds. [step 2.1, L4, L5, algebra]

4.1 (Uniqueness (c).) This is exactly [L3]. [L3] ∎



## Remarks

- **Role.** This is E2's main conclusion. Concrete matter sectors instantiate the abstract matter hypothesis in E3: the scalar, barotropic-fluid and geodesic-dust reductions each verify the symmetric-hyperbolic form and on-shell conservation.
- **Scope.** The construction gives a neighborhood of every point of $\Sigma$ with possibly position-dependent time width; no uniform slab for noncompact $\Sigma$ and no global maximality are asserted (the latter is GR15's scope).
