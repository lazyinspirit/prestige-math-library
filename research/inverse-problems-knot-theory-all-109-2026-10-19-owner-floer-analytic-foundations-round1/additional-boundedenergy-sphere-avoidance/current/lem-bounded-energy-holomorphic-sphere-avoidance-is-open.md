---
id: lem-bounded-energy-holomorphic-sphere-avoidance-is-open
kind: lemma
title: "Avoidance of a compact set by bounded-energy holomorphic spheres is open"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, thm-countable-choice-interior-gromov-bubble-tree-compactness, lem-soft-rescaling-captures-isolated-interior-energy-atoms]
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
      locator: "Proposition3.14 and Lemma3.17 use sphere avoidance near an integrable structure; actual marked-image compactness and bounded-energy openness are proved below"
---

## Statement

Assume Countable Choice. Let $(X,g)$ be a compact smooth manifold, $J_0$ a smooth almost complex structure, $K\subset X$ compact, and $E_0<\infty$. Suppose the image of every nonconstant $J_0$-holomorphic sphere is disjoint from $K$.

There are a $C^\infty$ neighborhood $\mathcal U$ of $J_0$ among smooth almost complex structures on $X$ and an open neighborhood $V$ of $K$ such that every nonconstant $J$-holomorphic map $u:\mathbb {CP}^1\to X$ with $J\in\mathcal U$ and energy $E_g(u)\le E_0$ has image disjoint from $V$. Neighborhoods can be restricted by any additional fixed auxiliary constraints on $J$ simply by intersection.

More precisely, if $J_n\to J_0$ smoothly, nonconstant $J_n$-holomorphic spheres have energies at most $E_0$, and $x_n$ belongs to their images with $x_n\to x$, then some nonconstant component of their finite bubble-tree limit passes through $x$. The component may be the base sphere. The energy bound is essential to this statement's scope; no avoidance neighborhood for all energies at once, index formula, disk reflection, or degeneration count is asserted.

## Statement references

[[def-countable-choice]]

[[thm-countable-choice-interior-gromov-bubble-tree-compactness]]

## Facts & Assumptions

**Given:** The compact target with fixed metric, the smooth autonomous structures, compact set, and one fixed finite energy bound. Energies and target distances always use this same metric.

[F1] [[thm-countable-choice-interior-gromov-bubble-tree-compactness]] gives actual compactness on the fixed sphere source for smooth coefficient convergence: a finite base-plus-sphere tree, smooth convergence on trimmed component cores, explicit nested affine rescalings, matched nodal values, energy identity, and connecting-annulus image diameter tending to zero in the successive core limits.

[F2] The complete proof of [[lem-soft-rescaling-captures-isolated-interior-energy-atoms]], step1.1, proves a uniform positive lower energy bound for every nonconstant autonomous sphere with the relevant compact coefficient bounds. It normalizes one nonzero derivative by an affine source change and applies the actual fixed-radius interior epsilon estimate. The same argument applies to the converging sequence of autonomous structures, as detailed below; it does not require those spheres to occur as bubbles first.

## Proof

1.1 First make the positive energy bound explicit for a smoothly convergent sequence $J_n$. All these structures and $J_0$ have common compact coefficient bounds. In a finite plane coordinate on a nonconstant sphere choose a point with nonzero derivative; such a point exists, since a smooth map with derivative zero everywhere is constant on the connected sphere, by integrating along finitely many coordinate paths. Move that point to zero by a sphere automorphism and dilate its complex coordinate so the derivative norm at zero is one. The energy on its unit disk is at most the total energy, by conformal invariance in real dimension two. The interior epsilon estimate used in [F2] supplies constants $\epsilon,C>0$ depending only on the common target bounds: if that disk energy is at most $\epsilon$, then $1=|du(0)|^2\le C E_g(u;B_1)$. If it is larger than $\epsilon$, it already has that positive lower bound. Thus every such nonconstant sphere has energy at least $h=\min(\epsilon,C^{-1})>0$, after decreasing constants to fit the fixed-radius version of that estimate. This holds uniformly for $J_n$ and $J_0$ and uses neither an index hypothesis nor a choice of parametrizations for an uncountable collection. [F2, given, construct, algebra]

2.1 Apply [F1] to a sequence as in the precise assertion, passing to a subsequence with energies converging. It gives a finite connected nodal tree whose root is the base sphere and whose other vertices are the sphere bubbles. Denote its component maps by $v_a$ and the compact set $A=\bigcup_a v_a(\mathbb {CP}^1)$. At least one component is nonconstant: otherwise the energy identity in [F1] would make the limiting total energy zero, contrary to the bound $h$ in step1.1. We verify the needed image conclusion, not just an energy conclusion. For every $\varepsilon>0$ choose small mutually disjoint node disks in each of the finitely many component spheres so that the images of their closures under $v_a$ have diameter less than $\varepsilon$ from their nodal values. Near infinity this means choosing the complementary disk outside a sufficiently large plane radius. Such choices exist by continuity at every filled node. In the actual rescaling coordinates of [F1], retain the compact cores outside these disks. They converge smoothly to the component cores. By shrinking the parent-node radii and enlarging the child-plane radii further, the finitely many connecting annuli have image diameter less than $\varepsilon$ for all sufficiently large sequence indices, by [F1]. These choices can be made simultaneously because there are finitely many edges. [F1, step 1.1, construct, algebra]

3.1 These cores and annuli cover the entire original source for large $n$. To see the coverage without an assumed abstract convergence topology, start with the base sphere minus its finite attachment disks. Every removed disk consists of the pulled-back root bubble core, its removed child disks, and the annulus connecting its large outer plane circle to the boundary of that base disk. The root rescaling has a center tending to the attachment point and scale tending to zero, so its large circle lies strictly inside that disk for large $n$. Repeat this decomposition inside each child disk. Siblings have distinct limiting centers, so all these child disks are disjoint for large $n$. The finite tree ends in leaves with no child disks, and their plane cores include all finite points inside their large outer circles. Thus the recursive finite decomposition has no remaining region. The connecting region need not have concentric boundary circles. If the parent node is $a$, its chosen disk has radius $r$, and the child center in that coordinate is $a_n\to a$, then for large $n$ this region is contained in $B_{2r}(a_n)\setminus B_{R\rho_n}(a_n)$, with the same child scale $\rho_n$. Apply the actual connecting-annulus estimate of [F1] to that larger concentric annulus, shrinking $2r$ and enlarging $R$ in its stated order. Its image-diameter bound also bounds the contained connecting region. Thus moving centers introduce no unestimated sliver. Each such annulus has an endpoint on a convergent component core; its endpoint value is within $\varepsilon$ of the corresponding nodal value, up to a quantity tending to zero. Its image diameter is less than $\varepsilon$. Smooth convergence on every compact core and this annulus estimate consequently give $$\limsup_n\sup_{y\in u_n(\mathbb {CP}^1)}\operatorname{dist}_g(y,A)\le2\varepsilon.$$ Conversely every component value away from its finitely many nodes is approximated by the smooth core convergence, and nodal values are approximated by continuity from such points. Compactness of the finite union $A$ then gives its uniform approximation by a finite net of those regular component values. Hence the compact images $u_n(\mathbb {CP}^1)$ converge to $A$ in Hausdorff distance as $\varepsilon\downarrow0$. In particular the limit $x$ of the stipulated image points belongs to $A$. [F1, step 2.1, construct, algebra]

4.1 If a component containing $x$ is nonconstant, the precise assertion follows. Otherwise take one such constant component, with value $x$, and follow the unique finite graph path to any nonconstant component, whose existence was proved in step2.1. Before the first nonconstant vertex along that path, every map is constant. Their matched nodal values in [F1] make all those constants equal to $x$; at the final edge that same value is a value of the first nonconstant component. All components solve the autonomous equation for $J_0$: the original families are independent of source point, so their rescaling limits freeze the same $J_0$. We have therefore found a nonconstant $J_0$ sphere through $x$, even if the moving marked point originally lay in a shrinking neck or on a constant ghost. This proves the precise assertion. [F1, step 2.1, step 3.1, construct]

5.1 If $K$ is empty choose $V=\varnothing$; if $E_0\le0$ every nonconstant sphere is excluded by its positive energy and the conclusion is also immediate. In the other cases suppose the claimed neighborhoods do not exist. Fix finite target charts and smooth norms on their compact subcharts; their $C^q$ seminorms define the usual smooth topology on sections of $\operatorname{End}(TX)$. For each positive integer $n$, failure for the neighborhood given by the first $n$ seminorms less than $1/n$ and for $V_n=\{y:\operatorname{dist}_g(y,K)<1/n\}$ gives a smooth almost complex structure $J_n$, a nonconstant sphere $u_n$ of energy at most $E_0$, and an image point $x_n\in V_n$. Countable Choice suffices to select these countably many witnesses. Then $J_n\to J_0$ smoothly. Compactness gives a subsequence $x_n\to x\in K$; for example finite target nets and nested subsequence extraction prove this sequential compactness under Countable Choice, and the distance bound and closedness of $K$ put the limit in $K$. Step4.1 gives a nonconstant $J_0$ sphere through $x$, contradicting the assumed avoidance of $K$. Thus the two neighborhoods exist. Intersecting $\mathcal U$ with any prescribed auxiliary subspace keeps its conclusion. The argument proves exactly bounded-energy openness from actual finite-tree compactness and marked-image tracking, and supplies none of the further claims excluded in the Statement. [step 1.1, step 2.1, step 3.1, step 4.1, construct, contradiction] ∎
