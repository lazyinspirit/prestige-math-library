---
id: "prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise"
kind: "proposition"
title: "Every manifold is F2-orientable and orientability is componentwise"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-r-orientation-of-a-topological-manifold","thm-local-homology-detects-interior-points-boundary-points-and-dimension","thm-path-connected-implies-connected","def-connected-component-and-quasicomponent","def-axiom-of-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, §3.3
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Every topological manifold, with or without boundary, has a canonical $\mathbb F_2$-orientation. For any commutative unital ring $R$, restriction is a bijection between $R$-orientations of $M$ and supplied families of $R$-orientations of its connected components. These statements are choice-free, as is the assertion that a compact manifold has finitely many components.

Assuming AC for selecting one orientation from each nonempty component-orientation set, $M$ is $R$-orientable if and only if each connected component is $R$-orientable. No AC is needed for the canonical mod-two construction or for gluing a family already supplied.

## Facts & Assumptions

[F1] [[def-r-orientation-of-a-topological-manifold]] defines orientation as a continuous section of local module generators, over the interior for manifolds with boundary.

[F2] [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]] identifies each interior stalk as a free rank-one coefficient module and gives intrinsic interior charts.

[F3] [[thm-path-connected-implies-connected]] makes convex chart neighborhoods connected, since line segments give paths.

[F4] [[def-connected-component-and-quasicomponent]] defines the component through a point as the largest connected subset containing it.

[A1] [[def-axiom-of-choice]] is assumed only for the component-orientation selection in step 3.1.

## Proof

**Given:** A topological manifold $M$ and commutative unital $R$; orient the interior when a boundary is present.

1.1 Every point has an open neighborhood homeomorphic to a convex ball or half-ball, using a small ball in its chart. Line segments stay inside that model, so the neighborhood is path-connected, hence connected by [F3], and lies inside its point's component by [F4]. Taking the union of such neighborhoods over the points of a component proves it open. Components are disjoint and cover $M$: intersecting maximal connected sets have connected union (by the component definition), so coincide. Each component inherits the manifold structure, and its interior is its intersection with $\operatorname{int}M$, because chart-boundary membership is local. [F2, F3, F4, given]

1.2 Over $\mathbb F_2$, every interior stalk has precisely one nonzero element, its unique generator. Define the section to take this element. In any local module chart the section has constant coordinate $1\in\mathbb F_2$, so is continuous. Uniqueness of the fiber value makes this section canonical, without choosing any generators. It orients the interior and thus $M$ by [F1]. [F1, F2, given]

2.1 Any $R$-orientation restricts to one on each component. Conversely, given a family $(\mu_C)_C$ of component orientations, define $\mu_x=(\mu_C)_x$ for the unique component containing $x\in\operatorname{int}M$. This is a section of generators. It is continuous because its restriction to each of the open subsets $C\cap\operatorname{int}M$ is continuous: the inverse image of any open set in the total local system is the union of these open inverse images. Restriction and this union operation are inverse functions, proving the asserted bijection, including when the sets of orientations are empty. [F1, step 1.1]

2.2 If $M$ is compact, its open cover by components from step 1.1 has a finite subcover. Since components are nonempty and disjoint, any omitted component would contain a point not covered by that subcover. Thus the finite subcover lists all components. For empty $M$ this is the empty list. [step 1.1, given]

3.1 An orientation on $M$ implies orientability of every component by restriction in step 2.1, without AC. Conversely, suppose each component is $R$-orientable and assume [A1]. For each component $C$, let $S_C$ be the set of its continuous generator sections, a nonempty subset of the set of functions on its interior into the local system. AC applied to this set-indexed family yields $(\mu_C)_C$ with $\mu_C\in S_C$. Step 2.1 glues it to an orientation on $M$. This is the exact selection use of AC in the existence equivalence; the earlier bijection did not select a member of a product of nonempty sets. [A1, step 2.1]

4.1 For empty $M$ the empty section and empty family correspond. For $R=0$ the unique zero section is a generator section, as in [F1]. A zero-dimensional manifold has singleton components and the same gluing statement; a single component requires no family selection beyond its given existence. The construction in step 1.2 uses no sign choice since $1=-1$ over $\mathbb F_2$. Boundary points are not assigned local generators: orientation is on the interior exactly as stated in [F1]. There is no simplex nondegeneracy or numerical endpoint hypothesis in this proposition. [F1, step 1.2, step 2.1, step 2.2, step 3.1] ∎
