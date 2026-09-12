---
id: "lem-integral-homology-of-a-wedge-of-higher-spheres-has-its-cell-basis"
kind: "lemma"
title: "Integral homology of a wedge of higher spheres has its cell basis"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis","lem-cw-quotient-induces-relative-singular-homology-isomorphisms","thm-long-exact-sequence-of-a-pair-in-singular-homology","def-hurewicz-homomorphism","cor-homology-of-spheres","prop-zero-th-singular-homology-is-free-on-path-components","def-singular-simplex-and-singular-chain-group-with-coefficients","lem-compact-cw-images-have-finite-cell-support-without-choice","thm-heine-borel-rn","thm-compactness-agrees-with-metric-compactness"]
sources:
  references:
    - title: Hatcher, Algebraic Topology, Example 2.23 and wedge homology; finite
        splitting supplied explicitly from the pair sequence
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $n\ge2$ and let $W=\bigvee_{j\in J}S^n_j$ be the CW wedge of a set of copies of an oriented sphere, with inclusions $\iota_j$, common vertex $b$, and projections $p_j$ collapsing the other summands. The empty wedge means a point. With integral coefficients,
$$H_0(W)=\mathbb Z,\qquad H_i(W)=0\quad(0<i\ne n),$$
and the map
$$\Psi:\bigoplus_{j\in J}\mathbb Z\longrightarrow H_n(W),\qquad (a_j)\longmapsto\sum_j a_j(\iota_j)_*[S^n_j]$$
is an isomorphism. Its inverse sends $z$ to the finitely supported vector whose $j$th coefficient is determined by $(p_j)_*z=a_j[S^n_j]$. These statements require no choice principle.

## Facts & Assumptions

[F1] [[lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis]] supplies this wedge's CW structure, its continuous collapsing projections and path connectedness. Its proof also constructs the finite-support integer direct sum and its universal property. No homotopy-to-homology comparison theorem is used here.

[F2] [[lem-cw-quotient-induces-relative-singular-homology-isomorphisms]] identifies the homology of a nonempty CW pair with homology relative to the quotient point by the actual quotient map.

[F3] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] gives the exact sequence with its inclusion and quotient maps.

[F4] For a path-connected based space $(V,v)$, the pair exact sequence [F3], vanishing positive homology of the point, and the $H_0$ isomorphism supplied by [F5] show directly that $H_i(V)\to H_i(V,\{v\})$ is an isomorphism for every $i\ge1$.

[F5] [[cor-homology-of-spheres]] gives the oriented integral sphere groups. [[prop-zero-th-singular-homology-is-free-on-path-components]] identifies $H_0$ for a path-connected nonempty space with $\mathbb Z$.

[F6] [[def-singular-simplex-and-singular-chain-group-with-coefficients]] makes integral singular chains finite formal sums. [[lem-compact-cw-images-have-finite-cell-support-without-choice]] bounds a compact image by a finite subcomplex. A standard simplex is closed and bounded in a finite-dimensional Euclidean space, hence compact by [[thm-heine-borel-rn]] and [[thm-compactness-agrees-with-metric-compactness]].

## Proof

**Given:** The spheres, their supplied orientations, and the CW wedge in the statement. All chain and homology groups in this proof have coefficients $\mathbb Z$.

1.1 For a finite set $J$ and $j\in J$, put $U=\bigvee_{k\in J\setminus\{j\}}S^n_k$, retaining $b$ when this set is empty. This is a nonempty CW subcomplex by [F1]. Collapsing the last sphere gives a continuous retraction $r:W\to U$, since its characteristic-disk restrictions are the identity on the remaining disks and constant on the last. The quotient $W/U$ is canonically $S^n_j$: its one remaining characteristic disk has its entire boundary collapsed, and the map-out test is precisely that of this sphere. Under this identification the quotient map is $p_j$. Write $k:U\hookrightarrow W$, $s=\iota_j$, and $j_S:H_i(S^n_j)\to H_i(S^n_j,\{b\})$. For $i>0$, [F2] and [F4] make $t=j_S^{-1}(p_j)_*:H_i(W,U)\to H_i(S^n_j)$ an isomorphism. If $j_W:H_i(W)\to H_i(W,U)$ is the pair map, naturality on singular chains gives $t j_W=(p_j)_*$, since both sides postcompose with $p_j$. [F1, F2, F3, F4, given]

1.2 For any set $J$, every integral singular chain $c$ in $W$ is supported in a finite subwedge. Indeed [F6] writes $c$ as a finite sum of singular simplices. Their domains are compact by [F6], so each image lies in a finite CW subcomplex. The union of the finitely many resulting cell sets, enlarged by $b$, is a finite subwedge of this particular CW structure. Only finitely many witnesses are needed for this one chain. Inclusions of subspaces induce injective singular chain maps: distinct maps into the subspace remain distinct after its set-theoretic inclusion, so their finite formal sums stay distinct. Consequently a chain supported in a subwedge is a cycle there exactly when it is a cycle in $W$, and a displayed boundary equation between supported chains also holds in the subwedge. [F1, F6, given]

2.1 For $i>0$, $k_*$ is injective because $r_*k_*=1$. Also $(p_j)_*s_*=1$. Exactness of [F3] and step 1.1 give $\ker(p_j)_*=\operatorname{im}k_*$. For any $z\in H_i(W)$, $z-s_*(p_j)_*z$ is in that kernel, so is uniquely $k_*x$. Applying $r_*$ gives $x=r_*z$, since $rs:S^n_j\to U$ is constant and is zero on positive homology: it factors through a point, whose positive homology vanishes as used in [F4]. Therefore $$z=k_*r_*z+s_*(p_j)_*z.$$ Conversely $r_*k_*=1$, $(p_j)_*s_*=1$, and both cross composites are zero by the same constant-map argument. Thus $(k_*,s_*)$ gives an isomorphism $H_i(U)\oplus H_i(S^n_j)\to H_i(W)$ with inverse $(r_*,(p_j)_*)$. This also proves the splitting in degree one without assuming anything about a negative-degree group. [F3, F4, step 1.1]

3.1 Induction on the finite cardinality of $J$ now proves that the positive homology of a finite wedge is the direct sum of the homology of its sphere summands, with inclusions as the forward map and the collapsing projections as inverse. The initial empty wedge is a point and has zero positive homology. Each induction step is precisely step 2.1. In positive degree $i\ne n$, all summand groups vanish by [F5]; in degree $n$, each is the copy of $\mathbb Z$ specified by its supplied orientation. Hence the formulas in the statement hold for finite $J$, including a singleton. There is no choice of an ordering over all finite subsets: induction proves the unique maps specified by the coordinate formulas. [F1, F4, F5, step 2.1]


4.1 For arbitrary $J$, every class $z\in H_i(W)$ with $i>0$ has a finite cycle representative in a finite subwedge by step 1.2. If $i\ne n$, step 3.1 makes it a boundary in that subwedge and hence in $W$. If $i=n$, step 3.1 expresses it as a finite sum of the sphere orientation classes, proving surjectivity of $\Psi$. This map is well defined by finite sums in the abelian homology group and the finite-support group construction [F1]. If a finite vector $a$ maps to zero, represent its finite sum by orientation cycles in those finitely many spheres. Its image is the boundary of one finite chain in $W$. Step 1.2 puts that chain in a finite subwedge; enlarge it by the finite support of $a$. The chain boundary equation holds already there, so step 3.1 forces every coefficient of $a$ to be zero. This proves injectivity. [F1, F5, F6, step 1.2, step 3.1]

5.1 A cycle for $z\in H_n(W)$ is supported in a finite subwedge $W_{J_0}$ by step 1.2. For $j\notin J_0$, $p_j$ is constant there, so $(p_j)_*z=0$ in positive degree. For $j\in J_0$, the finite computation of step 3.1 identifies its coefficient with exactly $(p_j)_*z=a_j[S^n_j]$. This proves the asserted inverse and finite support; the coefficients depend only on $z$ because induced homology maps are well defined. Finally $W$ is nonempty and path connected by [F1], including the stipulated empty wedge, so [F5] gives $H_0(W)=\mathbb Z$. Thus degree zero is one shared component, not a sum over $J$. Zero vectors and zero cycles were included in the finite argument, and no first-degree exception is hidden: $H_1(W)=0$ since $n\ge2$. Every arbitrary-index passage used a single finite chain or bounding chain, and orientations were supplied, so no AC was used. [F1, F4, F5, step 1.2, step 3.1, step 4.1] ∎
