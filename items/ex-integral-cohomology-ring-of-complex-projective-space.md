---
id: "ex-integral-cohomology-ring-of-complex-projective-space"
kind: "example"
title: "Integral cohomology ring of complex projective space"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-cellular-homology-computes-singular-homology","def-oriented-cellular-chain-group","prop-cellular-maps-induce-cellular-chain-maps","thm-topological-universal-coefficient-short-exact-sequence-for-cohomology","thm-long-exact-sequence-of-a-pair-in-singular-cohomology","thm-naturality-of-the-singular-cohomology-pair-sequence","thm-homotopic-maps-induce-equal-maps-in-singular-cohomology","thm-excision-for-singular-cohomology","lem-local-coordinate-cup-products-generate-top-relative-cohomology","prop-relative-cup-products-are-natural-and-compatible-with-connectors","prop-cup-product-is-natural-unital-and-associative","def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Theorem 3.19, complete finite-dimensional proof pp220–221;
        complex signs and CW construction supplied explicitly
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Example

Assume AC. For every integer $n\ge0$,
$$H^*(\mathbb {CP}^n;\mathbb Z)\cong\mathbb Z[u]/(u^{n+1}),\qquad |u|=2.$$
For $n\ge1$, normalize $u$ by evaluation $+1$ on the standard $\mathbb {CP}^1$ with its complex orientation. For $n=0$ set $u=0$. Standard inclusions $\mathbb {CP}^m\hookrightarrow\mathbb {CP}^n$ pull $u$ back to its namesake. Moreover $u^k$ evaluates to $+1$ on the standard complex-oriented $\mathbb {CP}^k$ for $0\le k\le n$. AC is inherited only from UCT and the local relative cup-product supplier.

## Facts & Assumptions

[F1] [[thm-cellular-homology-computes-singular-homology]] gives the natural cellular comparison. [[def-oriented-cellular-chain-group]] selects the relative cell generator by its oriented characteristic disk, and [[prop-cellular-maps-induce-cellular-chain-maps]] identifies skeletal inclusion maps with their singular maps.

[F2] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] gives natural evaluation for absolute and relative groups under AC.

[F3] [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] and [[thm-naturality-of-the-singular-cohomology-pair-sequence]] give exactness and the commuting pair maps.

[F4] [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]] gives the cohomology maps of the explicit homotopies below.

[F5] [[thm-excision-for-singular-cohomology]] applies when the removed closed set is contained in the open relative subspace.

[F6] [[lem-local-coordinate-cup-products-generate-top-relative-cohomology]] proves that the positive local generators for ordered real coordinate factors multiply to the positive top generator.

[F7] [[prop-relative-cup-products-are-natural-and-compatible-with-connectors]] gives naturality for the open-complement products, including their images in absolute groups. [[prop-cup-product-is-natural-unital-and-associative]] gives the unit, associativity and restriction of powers.

[F8] [[def-axiom-of-choice]] supplies the cycle projections in [F2] and the relative additive splittings and UCT projections in [F6].

## Verification

**Given:** Write $P^r=\mathbb {CP}^r$, the space of nonzero vectors in $\mathbb C^{r+1}$ modulo nonzero complex scaling, with its quotient topology. Equivalently it is the unit sphere modulo scalar phases. Coefficients are integral throughout. Order the real coordinates of $\mathbb C^r$ as real part then imaginary part in each successive complex coordinate.

1.1 These two quotient descriptions agree: normalization $z\mapsto z/\|z\|$ is continuous and a nonzero scaling changes the normalized vector by a unit phase; inclusion of the sphere provides the inverse on quotients. The sphere quotient is compact and Hausdorff. For Hausdorffness, the map $z\mapsto zz^*$ from the unit sphere to the finite-dimensional Hausdorff space of complex matrices has exactly the phase orbits as fibres: equality of these rank-one matrices implies equality of their images, hence $w=\lambda z$, and the unit norms give $|\lambda|=1$. The induced map of the quotient onto its matrix image is a continuous bijection from a compact space to a Hausdorff space and is a homeomorphism (images of closed sets are compact and therefore closed). Each affine chart $U_k=\{z_k\ne0\}$ is open and has coordinates $z_l/z_k$, $l\ne k$, with inverse the line represented by $z_k=1$. The quotient map is open because saturation is a union of translates by phases, so these ratios descend continuously; the displayed inverse is also continuous. Coordinate subspaces are closed by their coordinate-zero inverse images in the sphere. [given]

2.1 Attach a $2r$-disk to $P^{r-1}$ by the map $$D^{2r}\longrightarrow P^r,\qquad w\longmapsto[w_0:\cdots:w_{r-1}:\sqrt{1-\|w\|^2}].$$ The boundary lands in $P^{r-1}$. Every line outside $P^{r-1}$ has a unique unit representative whose last coordinate is positive real, so the disk interior maps bijectively onto its complement. The induced attachment-quotient map is a continuous bijection from a compact space to the Hausdorff $P^r$ of step 1.1, hence a homeomorphism. Starting with $P^0=*$ constructs a finite CW complex with one cell in each dimension $0,2,\ldots,2r$. On the open cell its affine coordinates are $w/\sqrt{1-\|w\|^2}$. This radial map preserves the ordered real orientation: its derivative has positive tangential eigenvalue $(1-\|w\|^2)^{-1/2}$ and positive radial eigenvalue $(1-\|w\|^2)^{-3/2}$, including the identity derivative at zero. Orient each characteristic disk accordingly. [step 1.1]

2.2 For $i,j\ge1$, $i+j=n$, let $E=P^i$ use coordinates $z_0,\ldots,z_i$ and $F=P^j$ use $z_i,\ldots,z_n$; their intersection is $p=[e_i]$. Set $V=P^n\setminus F$, $W=P^n\setminus E$. Scaling coordinates $z_i,\ldots,z_n$ by $t$, with $t$ decreasing from $1$ to $0$, retracts $V$ onto the coordinate $P^{i-1}$ using $z_0,\ldots,z_{i-1}$. It also retracts $E\setminus p$ onto that subspace. Throughout, the first $i$ coordinates are not all zero, so the formula is defined, commutes with complex scaling, and fixes the retract. The affine charts of step 1.1 verify joint continuity. Interchanging the two coordinate blocks gives the corresponding retractions for $W$ and $F\setminus p$. Scaling only $z_i$ to zero retracts $P^n\setminus p$ onto its coordinate hyperplane $P^{n-1}$. The latter formula is defined because a point other than $p$ has a nonzero coordinate other than $z_i$. [step 1.1, given]

3.1 No two occupied cellular dimensions are adjacent, so every differential is zero, its source or target being zero. By [F1], $H_{2k}(P^n)=\mathbb Z$ for $0\le k\le n$, every other group is zero, and the generator is the image of the positive top cell of the standard $P^k$. Standard inclusions preserve these generators, because their maps on those relative characteristic disks are identities. All groups are free, so every Ext term in [F2] vanishes: use the identity augmentation as a length-zero free resolution for $\mathbb Z$, and the zero resolution for zero. Evaluation therefore gives $H^{2k}(P^n)=\mathbb Z a_{n,k}$, with $a_{n,k}$ evaluating to $+1$ on that generator, and zero other degrees. Restrictions preserve $a_{n,k}$ whenever the target dimension is at least $k$. These are actual singular cohomology classes, obtained by evaluation, not cellular cochains substituted into a singular product. [F1, F2, step 2.1]

4.1 A coordinate permutation on $P^r$ acts as the identity in cohomology. To prove this, realize an adjacent interchange in two coordinates by first using the real rotation matrix with columns $(\cos t,\sin t)$ and $(-\sin t,\cos t)$ for $0\le t\le\pi/2$, then multiplying the one column with the extra minus sign by a phase varying from $1$ to $-1$. These are complex invertible matrices and give a continuous path from the identity to the interchange. Finite compositions handle every permutation; projectivizing the path gives a homotopy, so [F4] applies. If a coordinate $P^k$ is placed in $P^n$ in any chosen coordinate order, an ambient permutation takes that inclusion to the standard one. Consequently its restriction also sends $a_{n,k}$ to the normalized top generator of the ordered $P^k$. A permutation of complex coordinates preserves their real orientation: each interchange switches two blocks of length two and has real determinant $+1$. The rotations and phase multiplications above likewise have positive real determinant, the latter being $|\lambda|^2=1$ on its block. [F4, step 3.1]

4.2 First consider the top class of $P^r$ at the point $[e_r]$ of its standard open top cell. The map $H^{2r}(P^r,P^{r-1})\to H^{2r}(P^r)$ is an isomorphism by [F3] and step 3.1. Its characteristic-disk pullback evaluates to $+1$ on the positive disk by [F1], [F2] and the definition of $a_{r,r}$. [F1, F2, F3, step 3.1]

5.1 By [F4], the first retract in step 2.2 gives $H^{2i-1}(V)=H^{2i}(V)=0$, using step 3.1 and step 4.1. The pair sequence [F3] therefore makes $H^{2i}(P^n,V)\to H^{2i}(P^n)$ an isomorphism. The same is true for $H^{2i}(E,E\setminus p)\to H^{2i}(E)$. Their natural square and the absolute restriction isomorphism from step 4.1 imply that $H^{2i}(P^n,V)\to H^{2i}(E,E\setminus p)$ is an isomorphism. The symmetric conclusions hold in degree $2j$ for $F,W$. Finally the punctured-space retract in step 2.2 gives $H^{2n-1}(P^n\setminus p)=H^{2n}(P^n\setminus p)=0$, so $H^{2n}(P^n,P^n\setminus p)\to H^{2n}(P^n)$ is an isomorphism as well. All the odd-degree vanishings used here hold for $i=1$ or $j=1$, where the retract is a point. [F3, F4, step 3.1, step 4.1, step 2.2]

5.2 Shrinking to a centered smaller disk in its interior retains that positive relative generator: the radial annulus retracts to its boundary, and excision [F5] identifies the resulting punctured-disk groups; the positive radial parameter has positive scaling. The affine map in step 2.1 is radial with positive scale and takes the center to zero, so the corresponding local class is exactly the cube-normalized positive generator used in [F6]. This proves positivity at $[e_r]$. [F5, F6, step 2.1, step 4.2]

6.1 Identify $U_i$ with $\mathbb C^i\times\mathbb C^j$ by its ordered ratios. The intersections $E\cap U_i,F\cap U_i$ are its coordinate planes, and $V\cap U_i=(\mathbb C^i\setminus0)\times\mathbb C^j$, $W\cap U_i=\mathbb C^i\times(\mathbb C^j\setminus0)$. Excision [F5] makes $H^{2i}(E,E\setminus p)\to H^{2i}(\mathbb C^i,\mathbb C^i\setminus0)$ an isomorphism: the removed hyperplane is closed and avoids $p$, hence is contained in the open punctured space. Restricting $(U_i,V\cap U_i)$ to the first coordinate plane also induces an isomorphism. Indeed contraction of the unused coordinate gives homotopy equivalences on ambient spaces and subspaces. For a nonempty contractible ambient space and nonempty relative subspace, [F3] identifies relative degree zero with zero, degree one with the subspace's $H^0$ modulo constants, and degree $k\ge2$ with subspace $H^{k-1}$. By [F4] and naturality these identifications prove the asserted relative isomorphism. In the square with the map proved in step 5.1, these two isomorphisms force $H^{2i}(P^n,V)\to H^{2i}(U_i,V\cap U_i)$ to be an isomorphism too. Repeat with $j$. Finally excision of the closed hyperplane $P^n\setminus U_i$ gives the isomorphism from $H^{2n}(P^n,P^n\setminus p)$ to $H^{2n}(U_i,U_i\setminus p)$. [F3, F4, F5, step 1.1, step 2.2, step 5.1]

6.2 Move any coordinate point $[e_l]$ to $[e_r]$ by a coordinate permutation. Its global pullback fixes $a_{r,r}$ by step 4.1. On the local ratio coordinates it merely permutes the remaining complex coordinates, which preserves their real orientation by step 4.1. Naturality of the pair maps therefore proves the same positivity at $[e_l]$. Apply this to $E,F$ at $p$ and to $P^n$ at $p$. In all three cases the ordered complex coordinates induce exactly the ordered real orientations used in [F6]; swapping complex blocks introduces sign $(-1)^{(2i)(2j)}=+1$. [F3, F6, step 2.2, step 4.1, step 5.2]

7.1 Lift $a_{n,i}$ and $a_{n,j}$ uniquely through the two relative-to-absolute isomorphisms of step 5.1. By step 6.1 their local restrictions are coordinate relative generators, and step 6.2 makes them positive. The local cup product is the positive top generator by [F6], with real factor dimensions $2i,2j$. The complements $V,W$ are open, their union is $P^n\setminus p$, and their local intersections are open. Thus [F7] makes both restriction of this relative product and its passage to the absolute product commute. The top comparison isomorphisms in step 5.1 and step 6.1, with positivity from step 6.2, give $$a_{n,i}a_{n,j}=a_{n,n}.$$ In particular this is a primitive generator, not merely a nonzero integer multiple. [F6, F7, step 5.1, step 6.1, step 6.2]

8.1 For $n=0$ there is only $H^0=\mathbb Z$, and $u=0$. For $n=1$, choose $u=a_{1,1}$; its square is zero by step 3.1, so the ring is $\mathbb Z[u]/(u^2)$. Inductively for $n\ge2$ set $u=a_{n,1}$. Restriction to $P^{n-1}$ is an isomorphism through degree $2n-2$ and preserves the normalized classes by step 3.1. Naturality in [F7] and the induction hypothesis show $u^k=a_{n,k}$ for $k<n$. Step 7.1 with $i=n-1,j=1$ gives $u^n=a_{n,n}$. Higher powers vanish by step 3.1. The polynomial evaluation map is therefore onto, and its kernel is exactly $(u^{n+1})$: each degree up to $2n$ has the independent infinite-order generator $u^k$, so all its coefficients must vanish for an evaluated polynomial to be zero. The constant class is the unit in [F7]. Standard restrictions preserve $u$ for positive-dimensional targets by its normalization and the degree-two restriction isomorphism, and send it to zero for the point target. They preserve every power and its positive evaluation. [F7, step 3.1, step 7.1]

9.1 The case $k=0$ evaluates the constant unit as $+1$ on the positive point. The cases $n=0,1$ and identity or point restrictions were checked in step 8.1; no $P^{-1}$ is used. There are no empty projective spaces under the stated $n\ge0$ hypothesis. Zero inputs and all products above dimension vanish, and singular degeneracies remain included by the actual relative cochain suppliers. Step 2.2 verifies the deformation endpoints and nonzero vector domains; step 6.2 fixes the orientation signs rather than suppressing an integer unit ambiguity. AC is precisely [F8]'s inherited UCT projections and relative additive splittings, with no choice needed for the finite coordinate constructions. [F8, step 2.2, step 6.2, step 8.1] ∎
