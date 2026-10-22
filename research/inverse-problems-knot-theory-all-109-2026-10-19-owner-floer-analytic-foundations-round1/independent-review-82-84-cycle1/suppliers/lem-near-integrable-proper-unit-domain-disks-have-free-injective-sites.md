---
id: lem-near-integrable-proper-unit-domain-disks-have-free-injective-sites
kind: lemma
title: "Near-integrable proper unit-domain disks have free injective sites"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-balanced-attaching-cuts-admit-round-component-complex-models, lem-integrable-zero-one-domain-boundary-disks-have-dense-injective-points, lem-proper-unit-domain-boundary-disks-are-compact-modulo-node-fixing-affine-maps, thm-identity-theorem-holomorphic-functions, thm-euclidean-inverse-function-theorem]
dependency_level: 11
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
      locator: "Proposition3.14 uses persistence of a globally injective site near an integrable degree-one disk; the uniform proper-unit-domain argument is proved below"
---

## Statement

Assume Countable Choice. Fix the symmetric-product geometry, disjoint attaching circles and torus $L$ of the proper unit-domain disk compactness theorem, with at least two attaching-system complement components. Let $J_0=\operatorname{Sym}^m(j)$ be the standard integrable structure. Let $D\subset X$ be a compact protected neighborhood of the diagonal and the finitely many chosen component and marked divisors, disjoint from $L$. Let $A_1,\ldots,A_N$ be pairwise disjoint compact generator neighborhoods disjoint from $D$, each contained in a $J_0$-holomorphic chart which takes $L$ exactly to the real plane. Set
$$P=D\cup L\cup\bigcup_{a=1}^N A_a.$$
The working fixed generator charts may lie inside the interiors of the $A_a$. These chart hypotheses can be supplied by the balanced round-component construction.

Among the smooth autonomous nearly symmetric structures with this fixed geometry and equal to $J_0$ as full endomorphisms on $L$, $D$ and the $A_a$, there is a $C^\infty$ neighborhood of $J_0$ such that every actual smooth holomorphic disk of any proper unit component domain has a point $z\in\mathbb D$ satisfying
$$du(z)\ne0,\qquad u^{-1}(u(z))=\{z\}\text{ in }\overline{\mathbb D},\qquad u(z)\notin P.$$
Such points form a nonempty open source set. This holds without imposing a boundary node value; in particular it holds for every disk with any specified node value on $L$.

The result proves one free injective site for these actual nearby disks. It does not assert dense injective points for arbitrary perturbed disks, surjectivity of their linearizations, an index formula, a degeneration count or gluing.

## Statement references

[[def-countable-choice]]

[[lem-balanced-attaching-cuts-admit-round-component-complex-models]]

[[lem-integrable-zero-one-domain-boundary-disks-have-dense-injective-points]]

[[lem-proper-unit-domain-boundary-disks-are-compact-modulo-node-fixing-affine-maps]]

## Facts & Assumptions

**Given:** The compact protected spatial sets, exact integrable background charts, proper unit domains, and the class of structures with the exact full boundary and protected restrictions. The boundary torus is compact and totally real for all these structures.

[F1] [[lem-integrable-zero-one-domain-boundary-disks-have-dense-injective-points]] proves that each nonconstant standard integrable disk of such a unit domain has open dense globally unique interior immersion points, with uniqueness tested against the entire closed disk.

[F2] [[lem-proper-unit-domain-boundary-disks-are-compact-modulo-node-fixing-affine-maps]] proves actual global $C^\infty$ compactness after mark-fixing positive affine reparametrization for smoothly convergent structures and proper unit-domain disks. Its hypotheses include the fixed full restriction on $L$ and common nearly symmetric geometry. The fixed unit domain supplies its energy bound.

[F3] [[thm-identity-theorem-holomorphic-functions]] propagates a locally constant holomorphic map across the connected source by target charts and overlapping coordinate neighborhoods. [[thm-euclidean-inverse-function-theorem]] gives a local inverse for a coordinate projection of an immersed two-dimensional map.

## Proof

1.1 Every nonconstant standard integrable disk of a proper unit domain has a free image point outside $P$. Suppose otherwise. Since $D$ is disjoint from the compact union of $L$ and the $A_a$, their distance is positive. Connectedness and the boundary values in $L$ force the entire image into $L\cup\bigcup_a A_a$. If an interior point maps outside all the $A_a$, a source neighborhood maps into $L$ alone, because that union is closed. A holomorphic differential whose image is in the real plane $TL$ must be zero: its image is complex-linear and $TL\cap J_0 TL=0$. Thus the map is constant on that source neighborhood, and [F3] makes it constant everywhere, a contradiction. If no interior point maps outside the $A_a$, continuity puts the entire closed image in their union; their pairwise compact separation and connectedness put it in one $A_a$. In its holomorphic background chart, each coordinate is holomorphic and smooth on the closed disk with real boundary values. Write a coordinate as $a+ib$. Then $b$ is harmonic and zero on the boundary. The elementary Green identity gives $\int_{\mathbb D}|\nabla b|^2=0$: integrate $\operatorname{div}(b\nabla b)=|\nabla b|^2+b\Delta b$ and use $b=0$ on the edge. Explicitly, in polar coordinates integrate $\partial_r(r b b_r)+r^{-1}\partial_\theta(b b_\theta)$ over $dr\,d\theta$. The angular term integrates to zero by periodicity, the inner radial boundary term tends to zero by smoothness at the center, and the outer one is zero because $b=0$ on the unit circle. This proves the stated Green identity directly. Hence $b=0$ and the Cauchy–Riemann equations make $a$ constant. Every coordinate, and thus the disk, is constant, again a contradiction. This proves the free-image assertion and its open nonempty preimage. [F3, given, construct, contradiction]

2.1 By [F1], the open nonempty free preimage in step1.1 meets the open dense set of globally unique interior immersion points. Thus every nonconstant background unit-domain disk has a point satisfying all three conditions in the Statement. We record their precise stability under $C^1$ perturbation of the whole closed map, without assuming holomorphy of the perturbation. At such a point $z$ of a smooth map $u$, choose two real target coordinate components whose derivative on the source plane is invertible. Shrink to a convex source disk $W$ about $z$ on which that projected derivative is uniformly close to its value at $z$. The projection then has a lower Lipschitz bound: integrate its derivative along the segment between two points and bound the error from its invertible constant derivative. The same bound holds for every sufficiently $C^1$-close map, so those maps are immersed and injective on $W$. The compact set $\overline{\mathbb D}\setminus W$ has image disjoint from $u(z)$ by global uniqueness, with positive separation after fixing a smaller target neighborhood. Uniform $C^0$ closeness preserves this separation at the value of each perturbed map at $z$. Its positive distance from the closed protected set $P$ also persists. Consequently every sufficiently $C^1$-close map has that same point as a free globally unique interior immersion point. The same argument applied to nearby source points of one fixed map shows that its set of such points is open. [F1, F3, step 1.1, construct, algebra]

3.1 Suppose no smooth neighborhood in the Statement works. For each positive integer $n$ choose a structure $J_n$ in the fixed admissible subspace whose first $n$ coefficient seminorm differences from $J_0$ are less than $1/n$, and an actual proper unit-domain disk $u_n$ for $J_n$ with no such site. Countable Choice makes this selection. There are finitely many component domains, so retain a subsequence with one domain $A_i$. Fix one boundary source point $p$ and extract a subsequence with $u_n(p)\to x\in L$, using compactness of $L$ and finite-net sequential extraction under Countable Choice. Then [F2] gives positive affine maps $g_n$ fixing $p$ such that $u_n\circ g_n$ converges globally smoothly, including $p$, to a nonconstant standard integrable disk $u$ of that same domain. Step2.1 supplies a free injective site for $u$ and hence, by the actual $C^1$ stability just proved, for every sufficiently late $u_n\circ g_n$. Conformal reparametrization preserves immersion, global closed-source uniqueness and the target free-image condition, so $u_n$ itself has such a site. This contradicts its selection. Therefore the neighborhood exists simultaneously for every proper unit component domain and all node values on $L$. [F2, step 2.1, construct, contradiction]

4.1 The proof uses only background integrability for step1.1 and [F1]; the nearby maps need only the compactness hypotheses of [F2]. In particular it has not transported an unproved dense-injective property to perturbed structures. It proves the stated nonempty open free site by exact local stability and actual normalized global convergence. The further regularity, index, count and gluing claims excluded in the Statement remain independent obligations. [step 1.1, step 2.1, step 3.1, algebra] ∎
