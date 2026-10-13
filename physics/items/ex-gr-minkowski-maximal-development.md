---
id: ex-gr-minkowski-maximal-development
kind: example
title: "The maximal development of the flat vacuum data is Minkowski spacetime"
status: published
origin: session
domain: mathematics
dependency_level: 41
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-high-regularity-selected-matter-development, thm-gr-constraint-equations-in-normal-frame, prop-coordinate-geodesic-equation, lem-gr-isometric-immersion-rigidity, lem-gr-maximal-geodesics-and-extension, thm-gr-local-geodesics-and-exponential-map, thm-gr-minkowski-cauchy-and-global-hyperbolicity, lem-gr-constant-component-chart-flatness, def-countable-choice, def-dependent-choice, thm-gr-smooth-maximal-globally-hyperbolic-development, def-gr-development-and-data-fixing-isometry, def-gr-spacelike-initial-data-and-constraints, thm-gr-vanishing-curvature-implies-locally-minkowski, lem-gr-data-fixing-immersion-is-embedding, def-gr-smooth-lorentzian-objects, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-curves-and-reachability]
dependency_roles:
  thm-gr-high-regularity-selected-matter-development: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  lem-gr-isometric-immersion-rigidity: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-gr-minkowski-cauchy-and-global-hyperbolicity: mathematical-premise
  lem-gr-constant-component-chart-flatness: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  thm-gr-smooth-maximal-globally-hyperbolic-development: mathematical-premise
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-spacelike-initial-data-and-constraints: mathematical-premise
  thm-gr-vanishing-curvature-implies-locally-minkowski: mathematical-premise
  lem-gr-data-fixing-immersion-is-embedding: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Theorem 2.8, whose flat vacuum instance is the example discussed here, printed pp. 12 and 20-24"
      url: "https://arxiv.org/pdf/1309.7591"
verification:
  precheck: n/a
---

## Example

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]) for the invoked general causal and maximal-development suppliers.

Take $\Sigma:=\mathbb R^3$, $h$ the Euclidean metric $\delta$, $K:=0$,
$\Lambda:=0$, $\kappa>0$ and the vacuum sector of
[[thm-gr-smooth-maximal-globally-hyperbolic-development]] (no matter fields,
$T=0$); the constraint equations reduce to $0=0$ and are satisfied. Then
the maximal development of these data is, up to a unique data-fixing
isometry, four-dimensional Minkowski spacetime
$(\mathbb R^4,\eta)=(\mathbb R^{1,3},\eta)$ with the standard initial
embedding $j:\Sigma\to\mathbb R^{1,3}$, $j(x)=(0,x)$, and time orientation
$N=\partial_t$.

## Facts & Assumptions

**Given:** Countable Choice and Dependent Choice; the flat vacuum initial data $\Sigma:=\mathbb R^3$, $h:=\delta$, $K:=0$, $\Lambda:=0$, $\kappa>0$ (no matter fields), and Minkowski spacetime $M:=(\mathbb R^{1,3},\eta)$ with the embedding $j(x)=(0,x)$ and time orientation $\partial_t$.

[L1] Under Countable Choice and Dependent Choice, the maximal-development theorem [[thm-gr-smooth-maximal-globally-hyperbolic-development]] requires connected smooth constrained complete data of one fixed admissible model, an existing development, and local existence and geometric uniqueness for that same model at every actual spacelike restart. Its conclusion gives a connected maximal development, an embedding of every development, and exactly one data-fixing isometry between maximal developments. For the present vacuum model, [[thm-gr-high-regularity-selected-matter-development]] branch 1 supplies local existence and uniqueness for any smooth vacuum constraint data. Data induced on a smooth spacelike restart of a vacuum solution satisfy these same constraints by [[thm-gr-constraint-equations-in-normal-frame]]. There are no matter variables, so initialization, matter reconstruction and conservation introduce no extra matter condition; the metric reduction is the supplied vacuum reduction. Step 1.1 below supplies the existing development. A data-fixing isometric immersion of developments is a development embedding by [[lem-gr-data-fixing-immersion-is-embedding]] clause (b).

[L2] The constant components of $\eta=-dt^2+\sum_{i=1}^3(dx^i)^2$ imply zero Christoffel symbols and curvature by [[lem-gr-constant-component-chart-flatness]] clauses (a)-(b). The geodesic equation of [[prop-coordinate-geodesic-equation]] therefore reduces to $\ddot x^a=0$: for any $p,v\in\mathbb R^4$, $s\mapsto p+sv$ is a geodesic for all $s\in\mathbb R$, and uniqueness in [[thm-gr-local-geodesics-and-exponential-map]] clause (a) makes it the maximal geodesic of those data. Local isometries preserve these geodesics by [[lem-gr-isometric-immersion-rigidity]] step 1.1. The slice $\{t=0\}$ is a Cauchy hypersurface by [[thm-gr-minkowski-cauchy-and-global-hyperbolicity]] clause (b), and maximal timelike geodesics of any development are inextendible by [[lem-gr-maximal-geodesics-and-extension]] clause (b).

## Verification
1.1 (Minkowski is a development of the data.) On $\mathbb R^{1,3}$ with $\eta=-dt^2+\delta$ the curvature vanishes, so the Einstein tensor vanishes and $G+\Lambda\eta=0=\kappa\cdot0$: the vacuum field equation holds by [L2]. The slice $\{t=0\}$ is a spacelike embedded hypersurface with induced metric $\delta$ and vanishing second fundamental form, since the unit normal $\partial_t$ is parallel; and every inextendible causal curve in $\mathbb R^{1,3}$ meets $\{t=0\}$ exactly once, by [[thm-gr-minkowski-cauchy-and-global-hyperbolicity]]: its time coordinate is strictly increasing and has range all of $\mathbb R$. Hence $(\mathbb R^{1,3},\eta,\partial_t,j)$ is a development of the data. [given, L2, algebra]

2.1 (Completeness makes the embedding onto.) The connected initial manifold $\mathbb R^3$, the vacuum constraints, the existing development of step 1.1 and the restart obligations checked in [L1] satisfy the maximal theorem. Let $Q$ be its connected maximal development, and let $\Phi:M\to Q$ be its data-fixing embedding of the Minkowski development from step 1.1. Fix $q\in Q$ and a maximal timelike geodesic through it. By [[lem-gr-maximal-geodesics-and-extension]] clause (b) this curve is inextendible and meets the initial Cauchy surface at some parameter $a$. At that crossing, $\Phi$ has invertible differential and fixes the initial embedding. Lift the crossing velocity to $M$. The Minkowski geodesic with that initial datum is the straight line, defined for every affine parameter by [[lem-gr-constant-component-chart-flatness]] and [[thm-gr-local-geodesics-and-exponential-map]]. Its $\Phi$-image is a geodesic of $Q$ with the same crossing value and velocity; uniqueness makes it agree with the original geodesic on its entire interval, in particular at $q$. Thus every $q$ lies in $\Phi(M)$, and the embedding is onto, hence a data-fixing isometry. Maximality and unique data-fixing isometry of $Q$ transfer to Minkowski. This proves the full claimed maximality, rather than inferring it solely from existence of an embedding. [step 1.1, L1, L2, algebra] ∎

## Remarks

The example verifies the abstract maximality statement on a case in which every object is explicit; it also shows that "maximal" does not mean "complete": the maximal development of the flat vacuum data is complete, but the maximal development of other data need not be ([[rem-gr-mghd-scope]]). The verification uses the cited uniqueness theorem for the universal property and the flatness of $\eta$ for the development axioms; no claim about observations is made. 