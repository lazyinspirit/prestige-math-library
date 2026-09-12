---
id: "ex-mod-two-cohomology-ring-of-real-projective-space"
kind: "example"
title: "Mod-two cohomology ring of real projective space"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-real-projective-space-cellular-homology-and-pinch-map","prop-cellular-maps-induce-cellular-chain-maps","cor-cohomology-over-a-field-is-dual-to-homology-over-that-field","thm-long-exact-sequence-of-a-pair-in-singular-cohomology","thm-naturality-of-the-singular-cohomology-pair-sequence","thm-homotopic-maps-induce-equal-maps-in-singular-cohomology","thm-excision-for-singular-cohomology","lem-local-coordinate-cup-products-generate-top-relative-cohomology","prop-relative-cup-products-are-natural-and-compatible-with-connectors","prop-cup-product-is-natural-unital-and-associative","def-axiom-of-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Theorem 3.19, complete finite-dimensional proof pp220–221
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Example

Assume AC. For each integer $n\ge0$,
$$H^*(\mathbb {RP}^n;\mathbb F_2)\cong\mathbb F_2[x]/(x^{n+1}),\qquad |x|=1.$$
For $n\ge1$, $x$ is the unique nonzero degree-one class. For $n=0$ the named class $x$ is zero. The standard inclusion $\mathbb {RP}^m\hookrightarrow\mathbb {RP}^n$, $0\le m\le n$, pulls $x$ back to the class with that name, and thus preserves all its powers. AC is inherited from field duality and the local relative product supplier.

## Facts & Assumptions

[F1] [[lem-real-projective-space-cellular-homology-and-pinch-map]] constructs the finite CW structure with one cell in every dimension up to $n$. Its proof, paragraph 3.2, reduces the integral cellular differentials modulo two, giving zero differentials in every dimension. [[prop-cellular-maps-induce-cellular-chain-maps]] identifies the actual skeletal maps with the singular homology maps.

[F2] [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]] gives natural evaluation duality over $\mathbb F_2$, under AC.

[F3] [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] and [[thm-naturality-of-the-singular-cohomology-pair-sequence]] give the exact sequence and its commuting restriction squares for every pair.

[F4] [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]] applies to the explicit deformations below.

[F5] [[thm-excision-for-singular-cohomology]] allows removal of a set whose closure lies in the interior of the relative subspace.

[F6] [[lem-local-coordinate-cup-products-generate-top-relative-cohomology]] proves that the two coordinate local generators in $\mathbb R^i\times\mathbb R^j$, $i,j\ge1$, have nonzero top relative cup product.

[F7] [[prop-relative-cup-products-are-natural-and-compatible-with-connectors]] gives relative cup naturality for the open complements used here, including passage to absolute cohomology. [[prop-cup-product-is-natural-unital-and-associative]] gives restriction of powers, associativity and the degree-zero unit.

[F8] [[def-axiom-of-choice]] names the assumed choice principle. Facts [F2] and [F6] state their own uses of that assumption; this definition itself supplies no cycle projection, basis extension, or splitting.

## Verification

**Given:** Write $P^r=\mathbb {RP}^r$, and use $\mathbb F_2$ coefficients throughout. Homogeneous coordinates are nonzero real vectors modulo nonzero real scaling, equivalently the antipodal quotient of the unit sphere. All cohomology groups below are singular groups.

1.1 By [F1], the mod-two cellular complex of $P^n$ consists of one copy of $\mathbb F_2$ in each degree $0,\ldots,n$ and zero differentials. A standard skeletal inclusion $P^m\to P^n$ sends each characteristic cell in dimensions at most $m$ to the same cell; its cellular map is therefore the identity in those dimensions. The natural comparison in [F1] gives $H_k(P^n)=\mathbb F_2$ for $0\le k\le n$, zero otherwise, and inclusion is an isomorphism for $k\le m$. By [F2], $H^k(P^n)$ has exactly the same dimensions, and restriction is an isomorphism for $k\le m$. This uses the field dual of mod-two homology, not the integral Hom term with its possible Ext contribution discarded. [F1, F2, given]

2.1 Coordinate projective subspaces are closed: their inverse images in the sphere are zero sets of specified coordinates, and the quotient topology tests closed sets by their inverse images. Coordinate permutations induce homeomorphisms, with inverse the opposite permutation, taking each such subspace to the corresponding standard skeleton. Thus step 1.1 also makes restriction to any coordinate $P^m$ an isomorphism in degrees at most $m$. The affine set $U_k=\{x_k\ne0\}$ is open and homeomorphic to $\mathbb R^n$ by ratios $x_l/x_k$, $l\ne k$. These functions descend continuously from the open inverse image in the sphere; the quotient map is open because saturation of an open set is its union with its antipodal image. The inverse assigns the line of the vector whose $k$th coordinate is one. These formulas establish both continuity directions. [step 1.1, given]

3.1 Fix $i,j\ge1$ with $i+j=n$. Let $E=P^i$ use coordinates $x_0,\ldots,x_i$, and let $F=P^j$ use $x_i,\ldots,x_n$. Then $E\cap F=\{p\}$, where $p=[e_i]$. Put $V=P^n\setminus F$ and $W=P^n\setminus E$. In $V$ the vector $(x_0,\ldots,x_{i-1})$ is nonzero. The formula $$[x_0:\cdots:x_n]\longmapsto[x_0:\cdots:x_{i-1}:t x_i:\cdots:t x_n],\qquad 1\ge t\ge0,$$ defines a strong deformation retraction of $V$ onto the coordinate $Q=P^{i-1}$: its vector is nonzero, it commutes with scaling, and it fixes $Q$. Continuity follows in the quotient charts of step 2.1, jointly with $t$. The same homotopy restricts to a retraction of $E\setminus p$ onto $Q$. Interchanging first and last coordinates gives the analogous retractions of $W$ and $F\setminus p$ onto a $P^{j-1}$. Scaling just coordinate $x_i$ to zero retracts $P^n\setminus p$ onto the coordinate hyperplane $P^{n-1}$ avoiding $p$. [step 2.1, given]

4.1 The map $H^i(P^n,V)\to H^i(P^n)$ is an isomorphism. Indeed [F4] and step 3.1 identify $H^*(V)$ with $H^*(Q)$, compatibly with restriction from $P^n$. Step 1.1 and step 2.1 give $H^i(V)=0$ and make $H^{i-1}(P^n)\to H^{i-1}(V)$ onto (in fact an isomorphism). Exactness in [F3] first makes the connector into $H^i(P^n,V)$ zero, then makes the displayed map injective and surjective. The same argument for $(E,E\setminus p)$ shows $H^i(E,E\setminus p)\to H^i(E)$ is an isomorphism. The absolute restriction $H^i(P^n)\to H^i(E)$ is an isomorphism by step 2.1. Its commuting square from [F3] therefore makes $$H^i(P^n,V)\longrightarrow H^i(E,E\setminus p)$$ an isomorphism. At $i=1$, the preceding groups are degree-zero constants on the nonempty $P^0$ retract; their restriction is still onto, so no reduced-degree convention has been omitted. [F3, F4, step 1.1, step 2.1, step 3.1]

5.1 In $U_i=\mathbb R^i\times\mathbb R^j$, the intersections with $E,F$ are the two coordinate planes. Thus $V\cap U_i=(\mathbb R^i\setminus0)\times\mathbb R^j$ and $W\cap U_i=\mathbb R^i\times(\mathbb R^j\setminus0)$. Excision [F5] makes $H^i(E,E\setminus p)\to H^i(\mathbb R^i,\mathbb R^i\setminus0)$ an isomorphism: remove the closed coordinate hyperplane $E\setminus U_i$, which avoids $p$ and lies inside the open set $E\setminus p$. Also restriction from the pair $(U_i,V\cap U_i)$ to its first coordinate plane is an isomorphism. To verify the latter assertion directly, contract the unused second coordinate. This is a homotopy equivalence on ambient spaces and on the relative subspaces by [F4]. Both ambient spaces are nonempty contractible. Their pair sequences [F3] identify relative degree one with $H^0$ of the subspace modulo constant functions, higher relative degree $k$ with $H^{k-1}$ of the subspace, and degree zero with zero. Naturality and the subspace isomorphisms therefore prove the assertion in all degrees, including $i=1$. The square formed by these two maps and the restriction of step 4.1 commutes by [F3]. Three of its sides are isomorphisms, so the fourth $$H^i(P^n,V)\longrightarrow H^i(U_i,V\cap U_i)$$ is an isomorphism as well. The same proof with $j,F,W$ gives the other factor isomorphism. [F3, F4, F5, step 2.1, step 3.1, step 4.1]

5.2 Apply the argument of step 4.1 to $(P^n,P^n\setminus p)$, using its $P^{n-1}$ retract from step 3.1. Since $H^{n-1}(P^n)\to H^{n-1}(P^{n-1})$ is onto and $H^n(P^{n-1})=0$, the map to absolute $H^n(P^n)$ is an isomorphism. Excision [F5], removing the closed hyperplane $P^n\setminus U_i$ inside the open punctured space, also gives an isomorphism $$H^n(P^n,P^n\setminus p)\longrightarrow H^n(U_i,U_i\setminus p).$$ [F3, F4, F5, step 1.1, step 2.1, step 3.1]

6.1 Take the nonzero classes $a\in H^i(P^n)$ and $b\in H^j(P^n)$. By step 4.1 they lift uniquely to relative classes for $V$ and $W$. By step 5.1 their local restrictions are generators of the two coordinate relative groups, identified by the coordinate projections. Their product is nonzero in $H^n(U_i,U_i\setminus p)$ by [F6]. The sets $V,W$ are open and $V\cup W=P^n\setminus p$, so [F7] applies both to restriction to $U_i$ and to passage to the absolute pair. Step 5.2 identifies both maps out of the top relative group as isomorphisms. Hence $ab\ne0$ in $H^n(P^n)$: otherwise the relative product, and then its local restriction, would be zero. This proves the top product for every $i,j\ge1$ with $i+j=n$. [F6, F7, step 4.1, step 5.1, step 5.2]

7.1 For $n=0$, $P^0$ is a point and its ring is $\mathbb F_2$, with $x=0$. For $n=1$, step 1.1 gives one nonzero degree-one class $x$ and no groups in degree two or higher, so the ring is $\mathbb F_2[x]/(x^2)$ by the unit in [F7]. Proceed by induction on $n\ge2$. Restriction carries the unique nonzero $x\in H^1(P^n)$ to its namesake in $P^{n-1}$ by step 1.1. Thus its powers $x^k$, $0\le k\le n-1$, restrict to the nonzero powers from the preceding dimension, by [F7], and so are nonzero. Step 6.1 applied to $i=n-1,j=1$ now gives $x^n\ne0$. All higher powers vanish by the group calculation of step 1.1. Each $x^k$ is the unique generator in its degree. Consequently the polynomial evaluation homomorphism is onto, and its kernel consists exactly of polynomials with no terms of degrees $0,\ldots,n$, namely the ideal $(x^{n+1})$. This proves the asserted graded ring isomorphism. [F7, step 1.1, step 6.1]

8.1 For $1\le m\le n$, degree-one restriction is the isomorphism in step 1.1, so it sends $x$ to $x$; for $m=0$ its target group is zero. Naturality and the unit in [F7] give every power and the constant term, including identity restriction at $m=n$. Zero inputs and powers above the truncation vanish by step 7.1. There are no empty projective spaces here, and the zero-dimensional point has been treated without introducing $P^{-1}$. All complement deformations were used only with $i,j\ge1$ and checked at $t=0,1$ in step 3.1; coincident or degenerate singular simplices are retained by the relative suppliers. The assumed AC is used only through [F2] and [F6], as their statements record; the coordinate formulas and finite induction introduce no further choice. [F2, F6, F7, F8, step 1.1, step 3.1, step 7.1] ∎
