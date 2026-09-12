---
id: "lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis"
kind: "lemma"
title: "The first potentially nonzero homotopy group of a wedge of higher spheres has its cell basis"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex","prop-cubical-and-spherical-models-of-higher-homotopy-agree","thm-product-universal-property","thm-heine-borel-rn","thm-compactness-agrees-with-metric-compactness","thm-continuous-image-of-a-compact-space-is-compact","thm-compact-subset-of-a-hausdorff-space-is-closed","lem-high-relative-cells-do-not-change-lower-homotopy","thm-based-sphere-maps-are-classified-by-geometric-degree","thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one","lem-compact-cw-images-have-finite-cell-support-without-choice","def-free-abelian-group"]
sources:
  references:
    - title: Hatcher, Algebraic Topology, Example4.26 p363; finite sphere-product
        topology and finite-support proof supplied locally
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $n\ge2$, let $J$ be any set, and let $W=\bigvee_{j\in J}S^n_j$ have its CW wedge topology and common basepoint $b$. Write $\iota_j:S^n_j\to W$ for the inclusions and $p_j:W\to S^n_j$ for collapse of the other summands. Then $\pi_i(W,b)=0$ for $0<i<n$, and
$$\Phi:\bigoplus_{j\in J}\mathbb Z\longrightarrow\pi_n(W,b),\qquad (a_j)\longmapsto\sum_j a_j[\iota_j]$$
is an isomorphism. Its inverse sends a based sphere representative $u$ to the finitely supported vector $(\deg(p_ju))_{j\in J}$. The empty wedge is a point. All statements are choice-free.

## Facts & Assumptions

[F1] [[lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex]] constructs the CW wedge from a point and supplied disks with constant boundaries. The explicit quotient homeomorphism in [[prop-cubical-and-spherical-models-of-higher-homotopy-agree]] identifies a boundary-collapsed $n$-cube with the oriented based sphere and identifies its based classes and operations.

[F2] Only the choice-free coordinate-continuity clause of [[thm-product-universal-property]] is used; no arbitrary-product nonemptiness claim is used.

[F3] [[thm-heine-borel-rn]] and [[thm-compactness-agrees-with-metric-compactness]] make finite cubes compact. [[thm-continuous-image-of-a-compact-space-is-compact]] and [[thm-compact-subset-of-a-hausdorff-space-is-closed]] give the compact-to-Hausdorff closed-map argument.

[F4] [[lem-high-relative-cells-do-not-change-lower-homotopy]] gives homotopy isomorphisms below the first relative cell dimension minus one, and lower connectivity.

[F5] [[thm-based-sphere-maps-are-classified-by-geometric-degree]] gives the choice-free degree isomorphism on each sphere, sending the identity to one. [[thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one]] makes $\pi_n$ abelian for $n\ge2$.

[F6] [[lem-compact-cw-images-have-finite-cell-support-without-choice]] gives finite cell support for every individual compact-domain representative or homotopy. [[def-free-abelian-group]] specifies the universal mapping property of a free abelian group; its finite-support model is verified below.

## Proof

**Given:** $n,J$ and the standard based copies of the oriented sphere in the statement. Use the fixed based cubical quotient homeomorphism of [F1] on each copy.

1.1 Attach one $n$-cell for each $j\in J$ to a single vertex $b$, by its constant boundary map. The boundary support is the singleton vertex, so [F1] proves this is a CW complex. On each closed cell it is the quotient sphere described by [F1]; its map-out test agrees with the ordinary wedge identification of these spheres when $J$ is nonempty. When $J$ is empty retain the initial point. Each $p_j$ is continuous: on its own characteristic cube it is the sphere quotient, and on every other characteristic cube it is constant, so the map-out test applies. The same test makes the inclusions continuous. Since every relative cell over $\{b\}$ has dimension $n$, [F4] proves vanishing of $\pi_i(W,b)$ for $0<i<n$ and path-connectedness. [F1, F4, given]

1.2 Define $\bigoplus_J\mathbb Z$ concretely as the set of functions $a:J\to\mathbb Z$ for which $\{j:a(j)\ne0\}$ is finite. Pointwise addition and negation stay in this set, since a sum's support lies in the union of the two finite supports; they satisfy the abelian group laws coordinatewise. Let $e_j$ be one at $j$ and zero elsewhere. Every $a$ is the finite sum $\sum_j a(j)e_j$. For any abelian group $G$ and function $v:J\to G$, the formula $a\mapsto\sum_j a(j)v(j)$ is well defined: finite sums may be reordered and zeros inserted by the abelian laws. Using the union of two supports proves additivity. It sends $e_j$ to $v(j)$, and every homomorphism with these values must have this formula by the finite decomposition of $a$. Thus this model satisfies exactly the universal property in [F6], including empty $J$. No choice of an ordering for every finite subset is made; independence shows the value is uniquely specified. [F6, given, algebra]

2.1 First suppose $J$ is finite. Give $P=\prod_{j\in J}S^n_j$ its ordinary product topology. It is Hausdorff: two distinct tuples differ in some coordinate, and disjoint sphere neighborhoods in that coordinate have disjoint inverse images. For each subset $K\subseteq J$, the points with precisely the coordinates of $K$ outside their basepoints form a cell of dimension $n|K|$. Its characteristic map is the product of the fixed sphere quotient maps on the cube $I^{n|K|}$, with the other coordinates at their basepoints; it is continuous by [F2] and a homeomorphism on the cube interior onto that cell. Its boundary lies in the cells indexed by proper subsets of $K$, since at least one block is on its cube boundary. A cube is radially homeomorphic to a disk, preserving its boundary, so these are valid characteristic disks. There are finitely many cells. [F1, F2, step 1.1]

3.1 These cells have the CW weak topology of the actual ordinary product. Each characteristic image is compact by [F3], hence closed in $P$. Its map from its compact disk is a closed surjection onto its image: a closed disk subset is compact, and its image is closed in the Hausdorff target. Thus it is quotient. If a subset of $P$ has closed inverse image in every characteristic disk, its intersection with each characteristic image is closed there and hence closed in $P$. The finite union of these intersections is the whole subset, so it is closed in $P$. This proves the weak topology; closure finiteness is automatic for the finite cell family, and the boundary and interior conditions were proved in step 2.1. The union of the cells for $|K|\le1$ is the axes subcomplex, identified with $W$ by its identical sphere characteristic maps and weak topology. Every other cell has dimension at least $2n$. By [F4], the inclusion $W\hookrightarrow P$ therefore induces an isomorphism on $\pi_n$, since $n<2n-1$ exactly when $n>1$. This proves the product-CW assertion needed here directly, without using any published example as a prerequisite. [F1, F3, F4, step 2.1]

4.1 The coordinate map $\pi_n(P,b)\to\prod_{j\in J}\pi_n(S^n_j,b)$ is an isomorphism. To see this, a based cube in $P$ has continuous based coordinate cubes by [F2], and a homotopy projects to coordinate homotopies. Conversely, pair any finite list of coordinate representatives to get a continuous based product cube, and pair the finite coordinate homotopies to prove independence. The two constructions undo each other pointwise. They preserve the half-cube concatenation formulas in each coordinate, so the bijection is a homomorphism. Only finitely many representatives or homotopies have been selected. By [F5], degree identifies this finite product with $\mathbb Z^J$. Under the inclusion from step 3.1, $[\iota_j]$ has identity in coordinate $j$ and constants in the others, hence the $j$th integer unit vector. A finite product of copies of $\mathbb Z$ is its finite direct sum, proving both formulas in the statement for finite $J$. [F2, F5, F6, step 1.2, step 3.1]

5.1 For arbitrary $J$, the displayed map $\Phi$ is well defined: every input has finite support, and the finite sum is independent of its order because $\pi_n(W,b)$ is abelian by [F5]. Every based sphere representative can be pulled back to a based cube by [F1]. Its image is contained in a finite subcomplex by [F3, F6], necessarily a finite subwedge $W_{J_0}$ of this particular CW structure (enlarge by $b$ if necessary). The finite result in step 4.1 expresses its class as a finite sum of the corresponding inclusions. Therefore $\Phi$ is surjective. If a finite sum of these inclusions is null in $W$, represent that sum by finite concatenation of their cubes and take a based nullhomotopy. Its compact cube image lies in another finite subwedge by [F3, F6]. Enlarge its finite index set to include the support of the original sum. The sum is then null in that finite subwedge, where step 4.1 says all its coefficients are zero. Thus $\Phi$ is injective. [F1, F3, F5, F6, step 1.2, step 4.1]

6.1 For a representative $u$ with image in $W_{J_0}$ as in step 5.1, every $p_ju$ with $j\notin J_0$ is constant and has degree zero by [F5]. For $j\in J_0$, its degree is exactly the corresponding coefficient in the finite computation of step 4.1. Hence the vector of degrees is finitely supported and is the inverse to $\Phi$. Degree is invariant under based homotopy by [F5], so this formula is independent of $u$. The empty index set gives the trivial group of a point and the zero direct sum. A one-element index set recovers the sphere degree theorem. The restriction $n\ge2$ is essential in step 3.1's strict inequality and in the abelian sum; no analogous free-abelian assertion is made for wedges of circles. Zero coefficients, constant maps and degree zero are retained in steps 4.1–5.1. All infinite-index arguments use one compact image and its finite support, not a choice over all indices. This proves the claims without AC. [F1, F5, F6, step 3.1, step 4.1, step 5.1] ∎
