---
id: lem-mod-two-cohomology-ring-of-infinite-real-projective-space
kind: lemma
title: Mod-two cohomology ring of infinite real projective space
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [lem-real-projective-space-cellular-homology-and-pinch-map, thm-cellular-homology-computes-singular-homology, prop-cellular-maps-induce-cellular-chain-maps, cor-cohomology-over-a-field-is-dual-to-homology-over-that-field, thm-long-exact-sequence-of-a-pair-in-singular-cohomology, thm-naturality-of-the-singular-cohomology-pair-sequence, thm-homotopic-maps-induce-equal-maps-in-singular-cohomology, thm-excision-for-singular-cohomology, lem-local-coordinate-cup-products-generate-top-relative-cohomology, prop-relative-cup-products-are-natural-and-compatible-with-connectors, prop-cup-product-is-natural-unital-and-associative, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Theorem 3.19 and its complete proof, printed pages 220--221
verification:
  audited: 2026-09-14
  precheck: pass
---

## Statement

Assume AC. Infinite real projective space has
$$H^*(\mathbb {RP}^{\infty};\mathbb F_2)\cong\mathbb F_2[a],\qquad |a|=1.$$

For every integer $n\geq0$, restriction along the standard skeletal inclusion
$i_n:\mathbb {RP}^n\hookrightarrow\mathbb {RP}^{\infty}$ is an isomorphism in
degrees at most $n$. For $n\geq1$ it sends $a$ to the unique nonzero
degree-one class on $\mathbb {RP}^n$; for $n=0$ it sends $a$ to zero.

## Facts & Assumptions

**Given:** The standard filtration
$\mathbb {RP}^0\subset\mathbb {RP}^1\subset\cdots\subset\mathbb {RP}^{\infty}$
and coefficients $\mathbb F_2$.

[F1] [[lem-real-projective-space-cellular-homology-and-pinch-map]] constructs
one cell in each dimension of each finite $\mathbb {RP}^m$ and computes
cellular incidence numbers zero or two; over $\mathbb F_2$ every finite-stage
cellular differential is zero.

[F2] [[thm-cellular-homology-computes-singular-homology]] applies to arbitrary,
possibly infinite-dimensional CW complexes and is natural for cellular maps.

[F3] [[prop-cellular-maps-induce-cellular-chain-maps]] identifies the maps on
cellular chains with the induced singular-homology maps.

[F4] Under AC, [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]]
identifies singular cohomology naturally with the full field dual of singular
homology.

[F5] [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] and
[[thm-naturality-of-the-singular-cohomology-pair-sequence]] give exact pair
sequences and their commuting restriction squares.

[F6] [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]] applies
to the explicit coordinate deformations below, and
[[thm-excision-for-singular-cohomology]] removes a closed set lying inside the
open relative subspace.

[F7] Under AC,
[[lem-local-coordinate-cup-products-generate-top-relative-cohomology]] says
that the two coordinate local generators in
$\mathbb R^i\times\mathbb R^j$, for $i,j\geq1$, have nonzero top relative cup
product.

[F8] [[prop-relative-cup-products-are-natural-and-compatible-with-connectors]]
transports these relative products, while pullback is a unital ring
homomorphism by
[[prop-cup-product-is-natural-unital-and-associative]].

[A1] [[def-axiom-of-choice]] is assumed exactly through [F4] and [F7].

## Proof

**Proof technique:** compute additive groups cellularly, prove the finite
projective-space products by a local relative-cup calculation, and then detect
the infinite powers on finite skeleta.

1.1 Mod-two singular homology is one-dimensional in every nonnegative degree, and $(i_n)_*$ is an isomorphism through degree $n$. Realize $\mathbb {RP}^{\infty}$ as the union of the projective spaces of lines in $\mathbb R^{m+1}$ under the coordinate inclusions. For each $j$, the lines whose last nonzero coordinate is the $j$th form an open $j$-cell: scale that coordinate to $1$ to identify it with $\mathbb R^j$. Its characteristic map is the quotient of the closed upper hemisphere in $S^j$, whose equator maps into $\mathbb {RP}^{j-1}$. Hence its closure is $\mathbb {RP}^j$, and these characteristic maps give the standard union its CW topology, one cell in every nonnegative degree. Restriction to the first $n+1$ coordinates is therefore the subcomplex consisting of the cells through dimension $n$. [given, F1, F2, F3]

These are the same upper-hemisphere characteristic maps used in [F1], so its
incidence calculation gives every infinite cellular differential as zero or
two. Modulo two all are zero, and cellular homology is one copy of
$\mathbb F_2$ in every degree. The cellular chain map for $i_n$ is the
identity on the common cells in degrees at most $n$, so it induces the
identity there. Facts [F2]--[F3] transfer both assertions to singular
homology.

2.1 The cohomology groups and restriction maps have the corresponding description. By [F4], $H^k(\mathbb {RP}^{\infty};\mathbb F_2)$ is the dual of the one-dimensional group in step 1.1, hence is $\mathbb F_2$ for every $k\geq0$. Naturality identifies $i_n^*$ with precomposition by $(i_n)_*$; since the latter is an isomorphism for $k\leq n$, so is the former. [F4, A1, step 1.1]

3.1 Set up complementary coordinate projective subspaces after fixing the additive generators. Fix $n\geq2$ and positive $r,s$ with $r+s=n$. Use homogeneous coordinates $x_0,\ldots,x_n$. Let $E\cong\mathbb {RP}^r$ use $x_0,\ldots,x_r$, let $F\cong\mathbb {RP}^s$ use $x_r,\ldots,x_n$, and put $p=E\cap F=[e_r]$, $V=\mathbb {RP}^n\setminus F$, and $W=\mathbb {RP}^n\setminus E$. Scaling $x_r,\ldots,x_n$ to zero retracts $V$ and $E\setminus\{p\}$ onto the same coordinate $\mathbb {RP}^{r-1}$; symmetrically $W$ and $F\setminus\{p\}$ retract onto $\mathbb {RP}^{s-1}$. Scaling only $x_r$ to zero retracts $\mathbb {RP}^n\setminus\{p\}$ onto a coordinate $\mathbb {RP}^{n-1}$. Each formula is well defined on projective classes, never sends a representative to zero on the stated domain, fixes its target, and depends continuously on the scaling parameter. [given, F6, step 2.1]

4.1 The following three relative-to-absolute maps are isomorphisms. $$H^r(\mathbb {RP}^n,V)\longrightarrow H^r(\mathbb {RP}^n),\qquad H^s(\mathbb {RP}^n,W)\longrightarrow H^s(\mathbb {RP}^n)$$ and $$H^n(\mathbb {RP}^n,\mathbb {RP}^n\setminus\{p\})\longrightarrow H^n(\mathbb {RP}^n)$$ For the first map, step 3.1 and [F6] identify the relevant groups of $V$ with those of $\mathbb {RP}^{r-1}$; step 1.1 and [F4] say that $H^{r-1}(\mathbb {RP}^n)\to H^{r-1}(V)$ is onto and $H^r(V)=0$. Exactness in [F5] gives the isomorphism. The second map is symmetric, and the last uses the punctured-space retraction in exactly the same two adjacent degrees. Naturality in [F5] and the restriction isomorphisms of step 2.1 further identify the first two relative groups with $H^r(E,E\setminus\{p\})$ and $H^s(F,F\setminus\{p\})$. [F4, F5, F6, step 1.1, step 2.1, step 3.1]

5.1 The two complementary-degree generators have nonzero top product. In the affine chart $x_r\ne0$, ratios identify a neighborhood of $p$ with $\mathbb R^r\times\mathbb R^s$ and identify $E,F$ with its coordinate planes. Excision in [F6], together with contraction of the unused coordinate factor, takes the two relative generators from step 4.1 to the two coordinate local generators. Their product is nonzero by [F7]. The complements $V,W$ are open and $V\cup W=\mathbb {RP}^n\setminus\{p\}$, so [F8] transports this relative product to the top relative group and then, through the last isomorphism of step 4.1, to a nonzero product in $H^n(\mathbb {RP}^n;\mathbb F_2)$. Thus the product of the unique nonzero classes in degrees $r$ and $s$ is the unique nonzero top class. [F6, F7, F8, step 4.1]

6.1 Every finite skeleton has the truncated polynomial ring on its degree-one class. For $n\geq1$, let $a_n$ be the unique nonzero class in $H^1(\mathbb {RP}^n;\mathbb F_2)$. The skeleton restriction carries $a_n$ to $a_{n-1}$ when $n>1$ by step 2.1. For $n=1$, $a_1$ is nonzero and $a_1^2=0$ for dimensional reasons. Inductively assume $1,a_{n-1},\ldots,a_{n-1}^{n-1}$ are the unique nonzero classes of the preceding skeleton. Naturality in [F8] makes $a_n^k$ restrict to $a_{n-1}^k$, hence makes it nonzero for $k<n$. Step 5.1 with $r=n-1,s=1$ then makes $a_n^n=a_n^{n-1}a_n$ nonzero. All higher powers vanish above dimension $n$. Hence $H^*(\mathbb {RP}^n;\mathbb F_2)=\mathbb F_2[a_n]/(a_n^{n+1})$, obtained here without citing a B-page example. [F8, step 1.1, step 2.1, step 5.1]

7.1 Finite-skeleton detection gives the infinite polynomial ring. Let $a$ be the unique nonzero element of $H^1(\mathbb {RP}^{\infty};\mathbb F_2)$. For $n\geq1$, step 2.1 makes $i_n^*$ an isomorphism in degree one, so it sends $a$ to $a_n$; for $n=0$ the target degree-one group is zero. For any $k\geq1$, choose $n\geq k$. Then [F8] and step 6.1 give $i_n^*(a^k)=a_n^k\ne0$. Thus $a^k$ is the unique nonzero class in degree $k$ from step 2.1. The degree-zero power is the unit. Polynomial evaluation is onto degreewise and injective because a polynomial has finitely many homogeneous terms in distinct degrees. [F8, step 2.1, step 6.1]

8.1 All boundary and choice cases are accounted for. The skeleton $n=0$ is a point and restriction sends $a$ to zero, while $a^0=1$ restricts to its unit. The case $k=0$ is included, there is no largest skeleton, and every fixed power is detected on any finite skeleton of dimension at least its degree. The spaces are nonempty; zero classes remain zero under restriction. Cellular chains use all characteristic cells, and the comparison in [F2] retains arbitrary singular simplices, including degenerate ones. The product calculation uses positive $r,s$ only, and the base $n=0,1$ cases were separate. AC is used only in field duality [F4] and the local relative-product supplier [F7]; the coordinate and finite-induction arguments make no new choices. No biconditional or converse is asserted. [F1, F2, F4, F5, F6, F7, F8, A1, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1] ∎