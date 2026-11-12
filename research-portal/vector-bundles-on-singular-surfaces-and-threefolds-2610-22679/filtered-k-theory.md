---
title: Perfect K theory and motivic towers
description: Connect affine bundle classes to nonconnective perfect K theory,
  then develop tower exactness, products, coefficients and rational detection.
  Give the article's bundle-class, motivic-filtration and motivic-cohomology
  definitions their authoring homes after these suppliers.
status: published
dependency_level: 2
---

**Purpose:** Connect affine bundle classes to nonconnective perfect K theory, then develop tower exactness, products, coefficients and rational detection. Give the article's bundle-class, motivic-filtration and motivic-cohomology definitions their authoring homes after these suppliers.

## Derived finite coefficients and the Bockstein sequence

[Open item](item-lem-derived-coefficient-exact-sequence) · level 0


### Statement
Let $C$ be a cochain complex of abelian groups, let $n$ be a positive integer, and write $C/n$ for the mapping cone of multiplication by $n$ on $C$. Then $C/n$ represents the derived tensor product $C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$, and for every integer $m$ there is a natural short exact sequence
$$0\longrightarrow H^m(C)/nH^m(C)\longrightarrow H^m(C/n)\longrightarrow H^{m+1}(C)[n]\longrightarrow0,$$
where $H^{m+1}(C)[n]=\{a:n a=0\}$. In particular, if $H^m(C/p)=0$ for a prime $p$, multiplication by $p$ is injective on $H^{m+1}(C)$. For fixed $n$, the coefficient construction defines a functor on $D(\mathbb Z)$, and the displayed short exact sequence is natural for morphisms in $D(\mathbb Z)$. No boundedness of $C$ is assumed.

### Statement references

[math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:def-annihilator-and-torsion-of-a-module](https://alphabetamath.cc/item/def-annihilator-and-torsion-of-a-module)

### Facts & Assumptions

[F1] Cochains and the reindexing $A^i=A_{-i}$ are as in [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category). Use the homotopy category, its localization $Q:K(\mathbb Z)\to D(\mathbb Z)$, and its standing size convention from [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category). In its cochain cone convention, $\operatorname{Cone}(f)^m=B^m\oplus A^{m+1}$ with differential $(y,x)\mapsto(d_By+f(x),-d_Ax)$. Write $H^m(A)=\ker(d_A^m)/\operatorname{im}(d_A^{m-1})$; acyclic means these groups are all zero, and a quasi-isomorphism induces isomorphisms on these groups.

[F2] For an abelian group $M$, the notation $M[n]=\{a\in M:na=0\}$ is the annihilator subgroup for the fixed integer $n$, using [math:def-annihilator-and-torsion-of-a-module](https://alphabetamath.cc/item/def-annihilator-and-torsion-of-a-module). Also $M/nM$ is the quotient by the image of multiplication by $n$.

[F3] Reindexing [math:def-tensor-product-total-complex-of-chain-complexes](https://alphabetamath.cc/item/def-tensor-product-total-complex-of-chain-complexes) gives $\operatorname{Tot}(A\otimes B)^m=\bigoplus_{i+j=m}A^i\otimes_{\mathbb Z}B^j$ and $d(a\otimes b)=d_Aa\otimes b+(-1)^i a\otimes d_Bb$ for $a\in A^i$. Fix $P_n=[\mathbb Z\xrightarrow{n}\mathbb Z]$ in degrees $-1,0$, augmented to $\mathbb Z/n$ in degree zero. Define $T_n(A)=\operatorname{Tot}(A\otimes P_n)$ and $T_n(f)=f\otimes1$. Thus $T_n(A)^m=A^m\oplus A^{m+1}$ and $d(y,z)=(d_Ay+(-1)^{m+1}nz,d_Az)$. Each total degree has only two summands, even for unbounded $A$. For this fixed coefficient, the notation $A\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$ denotes the functor obtained by descending $QT_n$ to $D(\mathbb Z)$; the proof supplies this descent and verifies its K-flat computation interpretation. Here K-flat means that tensoring with an acyclic complex gives an acyclic total complex. Over $\mathbb Z$ the two tensor orders are identified by $a\otimes b\mapsto(-1)^{ij}b\otimes a$ for degrees $i,j$.

[F4] A functor that inverts the localized arrows factors through localization, and natural transformations between such functors descend as well, by [math:def-localization-of-a-category-at-a-class-of-morphisms](https://alphabetamath.cc/item/def-localization-of-a-category-at-a-class-of-morphisms).

[F5] A cochain map is a quasi-isomorphism exactly when its cone is acyclic, by cochain reindexing of [math:thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic](https://alphabetamath.cc/item/thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic).

### Proof

**Given:** A possibly unbounded cochain complex $C$ of abelian groups, a positive integer $n$, and an integer $m$, with the conventions in [F1]–[F5].

**Goal:** Construct the finite-coefficient functor on the derived category, identify its value with the cone, and prove the natural exact sequence and prime-torsion consequence.

1.1 The augmentation $P_n\to\mathbb Z/n$ is a quasi-isomorphism: multiplication by $n$ on $\mathbb Z$ is injective, with cokernel $\mathbb Z/n$. The differential in [F3] squares to zero, since its two terms involving $n d_Az$ have opposite signs. It also shows that $T_n$ preserves identities, compositions and cochain maps. For maps $f,g:A\to B$ with cochain homotopy $h^i:A^i\to B^{i-1}$, meaning $f-g=d_Bh+hd_A$, the operator $h\otimes1$ is a homotopy between $T_n(f)$ and $T_n(g)$: the mixed terms have signs $(-1)^{i-1}$ and $(-1)^i$ and cancel. Thus $T_n$ defines a functor on $K(\mathbb Z)$. The degree-$m$ map $\phi_A:\operatorname{Cone}(n:A\to A)\to T_n(A)$ given by $(y,x)\mapsto(y,(-1)^{m+1}x)$ is an invertible cochain map, by [F1] and [F3], and commutes with maps induced by cochain maps $A\to B$. If $A$ is acyclic and $(y,x)$ is a degree-$m$ cone cocycle, write $x=du$; then $d(y+nu)=0$, so write $y+nu=dv$. Consequently $(y,x)=d(v,-u)$, proving that $T_n(A)$ is acyclic. Hence $P_n$ is K-flat. For any cochain map $f:A\to B$, regrouping summands gives $\operatorname{Tot}(\operatorname{Cone}(f)\otimes P_n)\cong\operatorname{Cone}(T_n(f))$: send a target tensor to the target summand and a shifted-source tensor to the shifted-source summand without an extra sign. Indeed for $a\in A^{i+1}$ and $p\in P_n^j$ the latter summand has differential components $f(a)\otimes p$, $-d_Aa\otimes p$, and $(-1)^i a\otimes d_{P_n}p$ on both sides. By [F5], if $f$ is a quasi-isomorphism its cone is acyclic, so the preceding K-flatness calculation makes $\operatorname{Cone}(T_n(f))$ acyclic and $T_n(f)$ a quasi-isomorphism. Thus $QT_n$ inverts quasi-isomorphisms and descends by [F4] to a functor on $D(\mathbb Z)$; on a roof $C\xleftarrow{s}A\xrightarrow{f}B$ it acts as $Q(T_n(f))Q(T_n(s))^{-1}$. Localization makes this independent of the roof. This constructs the notation in [F3] for every unbounded $C$. It agrees with computation using a K-flat replacement of $C$ whenever one is supplied: for a quasi-isomorphism $R\to C$ with $R$ K-flat, both arrows $T_n(C)\leftarrow\operatorname{Tot}(R\otimes P_n)\to\operatorname{Tot}(R\otimes\mathbb Z/n)$ are quasi-isomorphisms. The first follows from the just-proved preservation; for the second, its cone is, by the same cone calculation and the graded tensor interchange in [F3], $\operatorname{Tot}(R\otimes\operatorname{Cone}(P_n\to\mathbb Z/n))$, which is acyclic by K-flatness and [F5]. No existence theorem for replacements is needed, because the explicit K-flat resolution of the coefficient already constructs the functor. The natural maps $\phi_C$ identify its values with $C/n$. [given, F1, F3, F4, F5, construct, algebra]

2.1 The inclusion $C\to\operatorname{Cone}(n)$ sends $y$ to $(y,0)$, and projection sends a cone cocycle $(y,x)$ to $[x]\in H^{m+1}(C)$. These induce well-defined cohomology maps: the cocycle equations are $dx=0$ and $dy=-nx$, while a cone boundary changes $x$ by a boundary. The kernel of the inclusion-induced map on $H^m(C)$ is $nH^m(C)$: if $(y,0)=d(v,u)$, then $du=0$ and $y=dv+nu$, and conversely $d(0,u)=(nu,0)$ for every cocycle $u$. If the projected class vanishes, write $x=du$ and subtract the boundary $d(0,-u)=(-nu,x)$; the resulting representative $(y+nu,0)$ comes from $H^m(C)$. Finally, the projection has image precisely $H^{m+1}(C)[n]$: the cocycle equation implies $n[x]=0$, and conversely if $nx=-dy$ for a cocycle $x$, the pair $(y,x)$ is a cone cocycle. This proves the displayed short exact sequence. These maps commute with every cochain map $C\to C'$. Cohomology itself descends from $K(\mathbb Z)$, since a homotopy changes the image of a cocycle by a boundary and quasi-isomorphisms induce cohomology isomorphisms. Its quotient and annihilator functors also invert quasi-isomorphisms; together with step 1.1 and [F4], this descends both maps of the exact sequence to $D(\mathbb Z)$. Naturality for inverses of quasi-isomorphisms, and hence for roofs, follows by inverting the vertical isomorphisms in the naturality squares. Exactness remains the same exactness of abelian groups on each representing complex. If $H^m(C/p)=0$, its surjection onto $H^{m+1}(C)[p]$ makes that subgroup zero, which is exactly injectivity of multiplication by $p$. [given, F1, F2, F4, step 1.1, algebra] ∎


## Detecting injectivity by rationalization

[Open item](item-lem-rational-injection-detection) · level 0



### Statement
For an abelian group $G$, the kernel of the natural homomorphism $G\to G\otimes_{\mathbb Z}\mathbb Q$, $g\mapsto g\otimes1$, is its torsion subgroup: the elements killed by some nonzero integer. Rationalization preserves short exact sequences of abelian groups. Consequently, if $G$ is torsion-free and $f\otimes_{\mathbb Z}\mathbb Q:G\otimes_{\mathbb Z}\mathbb Q\to H\otimes_{\mathbb Z}\mathbb Q$ is injective, then a homomorphism $f:G\to H$ is injective. If $f$ is also surjective, it is an isomorphism. No divisibility assumption on $G$ is made.

### Statement references
[math:def-annihilator-and-torsion-of-a-module](https://alphabetamath.cc/item/def-annihilator-and-torsion-of-a-module)

[math:def-exact-and-short-exact-sequences-of-modules](https://alphabetamath.cc/item/def-exact-and-short-exact-sequences-of-modules)

[math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)

[math:def-group](https://alphabetamath.cc/item/def-group)

[math:prop-abelian-groups-are-z-modules](https://alphabetamath.cc/item/prop-abelian-groups-are-z-modules)

[math:def-rationals](https://alphabetamath.cc/item/def-rationals)

[math:def-rat-operations](https://alphabetamath.cc/item/def-rat-operations)

[math:thm-rat-field](https://alphabetamath.cc/item/thm-rat-field)

[math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel)

[math:prop-elementary-tensor-formulas-descend-exactly-when-balanced](https://alphabetamath.cc/item/prop-elementary-tensor-formulas-descend-exactly-when-balanced)

[math:prop-functoriality-of-module-tensor-products](https://alphabetamath.cc/item/prop-functoriality-of-module-tensor-products)

### Facts & Assumptions

**Given:** Abelian groups, regarded as $\mathbb Z$-modules with integer multiplication as scalar action, and the homomorphisms in the statement. A homomorphism here preserves addition; its kernel is the set of elements sent to zero and its image is the set of its values. An isomorphism is a bijective homomorphism. When a right $\mathbb Z$-module is needed, use $mn:=nm$.

**Goal:** Prove the kernel formula and exactness of rationalization, and deduce the injectivity and isomorphism assertions.

[F1] The tensor product is generated by elementary tensors subject to additivity in each variable and the balancing relation $(ng)\otimes q=g\otimes(nq)$; every tensor is a finite sum of elementary tensors ([math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)).

[F2] Torsion means annihilation by a nonzero integer, and a group is torsion-free when only zero is torsion ([math:def-annihilator-and-torsion-of-a-module](https://alphabetamath.cc/item/def-annihilator-and-torsion-of-a-module)). A short exact sequence $0\to A\xrightarrow{i}B\xrightarrow{p}C\to0$ has $i$ injective, $p$ surjective and $\operatorname{im}i=\ker p$ ([math:def-exact-and-short-exact-sequences-of-modules](https://alphabetamath.cc/item/def-exact-and-short-exact-sequences-of-modules)).

[F3] Abelian groups are commutative groups ([math:def-group](https://alphabetamath.cc/item/def-group)). Every abelian group has its unique integer-action $\mathbb Z$-module structure, and group homomorphisms are precisely $\mathbb Z$-linear maps ([math:prop-abelian-groups-are-z-modules](https://alphabetamath.cc/item/prop-abelian-groups-are-z-modules)). Homomorphisms, isomorphisms, kernels and images have the module meanings specified in the Given ([math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel)).

[F4] A rational number is represented by $a/b$ with integers $a,b$ and $b\ne0$, and $a/b=c/d$ exactly when $ad=cb$ ([math:def-rationals](https://alphabetamath.cc/item/def-rationals)). Sums, products, negatives and reciprocals are given by the representative formulas ([math:def-rat-operations](https://alphabetamath.cc/item/def-rat-operations)), and these operations make $\mathbb Q$ a field, hence an additive abelian group ([math:thm-rat-field](https://alphabetamath.cc/item/thm-rat-field)). Thus [F3] makes $\mathbb Q$ a $\mathbb Z$-module; its integer action is repeated addition, equivalently multiplication by the corresponding integer rational. Replacing both numerator and denominator by their negatives permits positive denominators.

[F5] A pairing from a right and a left $\mathbb Z$-module into an abelian group is balanced when it is additive in each variable and sends $(nm,q)$ and $(m,nq)$ to the same value for every integer $n$. Such a pairing extends uniquely to a homomorphism out of the tensor product ([math:prop-elementary-tensor-formulas-descend-exactly-when-balanced](https://alphabetamath.cc/item/prop-elementary-tensor-formulas-descend-exactly-when-balanced)). For a homomorphism $u:M\to N$, write $u\otimes\mathbb Q$ for $u\otimes\operatorname{id}_{\mathbb Q}$; it sends $m\otimes q$ to $u(m)\otimes q$ and respects identities and compositions ([math:prop-functoriality-of-module-tensor-products](https://alphabetamath.cc/item/prop-functoriality-of-module-tensor-products)).

### Proof

1.1 For an abelian group $M$, form fractions $m/n$ with $m\in M$ and positive integer $n$, declaring $m/n=m'/n'$ exactly when some positive integer $k$ kills $n'm-nm'$. This is an equivalence relation: transitivity follows by multiplying the two annihilating equations by the other denominator and combining them. Addition $(m/n)+(m'/n')=(n'm+nm')/(nn')$ is independent of representatives by the same cross-multiplication, and gives an abelian group $L(M)$: zero is $0/1$, the inverse of $m/n$ is $(-m)/n$, and the associative and commutative laws follow by putting the summands over a common denominator. For $q=a/b\in\mathbb Q$, with $b>0$, the assignment $(m,q)\mapsto am/b$ is well-defined and balanced: equality of rational representatives gives an equal cross-product, and the fraction addition formula proves additivity. Thus [F5] gives a homomorphism $M\otimes\mathbb Q\to L(M)$. Conversely send $m/n$ to $m\otimes(1/n)$. If $k(n'm-nm')=0$, then balancing gives $m\otimes(1/n)-m'\otimes(1/n')=k(n'm-nm')\otimes(1/(knn'))=0$, so this map is well-defined and additive. The two maps are inverse on fractions and elementary tensors, hence are inverse isomorphisms. Under this identification the natural map sends $m$ to $m/1$. [F1, F3, F4, F5, construct, algebra]

2.1 By the fraction equivalence, $m/1=0/1$ exactly when some positive integer kills $m$. This is equivalent to being killed by a nonzero integer, so the kernel is precisely the torsion subgroup. [F2, step 1.1]

2.2 Let $0\to A\xrightarrow{i}B\xrightarrow{p}C\to0$ be short exact. For any homomorphism $u:M\to N$, define $L(u)(m/n):=u(m)/n$. This is well-defined because $u$ preserves the annihilating relation, and additive by the fraction addition formula. In particular this gives maps $L(i)$ and $L(p)$. If $i(a)/n=0$, then $i(ka)=0$ for some positive $k$, so $ka=0$ by injectivity of $i$ and $a/n=0$. Thus $L(i)$ is injective. Every $c/n$ has a preimage $b/n$ because $p$ is surjective. If $p(b)/n=0$, then $p(kb)=0$ for some positive $k$; exactness gives $a\in A$ with $i(a)=kb$, and $b/n=i(a)/(kn)$ lies in the image of $L(i)$. The reverse inclusion follows from $pi=0$. Hence the fraction sequence is short exact. For any homomorphism $u:M\to N$, the isomorphism $\phi_M:M\otimes\mathbb Q\to L(M)$ of step 1.1 satisfies $\phi_N\circ(u\otimes\mathbb Q)=L(u)\circ\phi_M$: both sides send $m\otimes(a/b)$ to $a u(m)/b$, and [F1] says elementary tensors generate. Thus these isomorphisms commute with $i$ and $p$, and tensoring the original sequence with $\mathbb Q$ is short exact. [F1, F2, F3, F5, step 1.1, algebra]

3.1 If $(f\otimes\mathbb Q)$ is injective and $f(g)=0$, naturality gives $(f\otimes\mathbb Q)(g\otimes1)=0$, so $g\otimes1=0$. If $G$ is torsion-free, steps 2.1 and [F2] give $g=0$; therefore $f$ is injective. If it is also surjective, its set-theoretic inverse is a homomorphism, since the preimages of sums are sums of preimages, and $f$ is an isomorphism. [F1, F2, F3, F5, step 2.1] ∎


## Cofinal tails and level invariance of stable groups

[Open item](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance) · level 0


### Statement
For a sequential prespectrum $E$ and integer $k$, write $G_k(E)$ for the sequential colimit of the groups $\pi_{n+k}(E_n)$, starting at any $N\geq0$ with $n+k\geq2$ for $n\geq N$ and using the sphere-first bonding maps of the published definition. Increasing $N$ gives a canonical isomorphism. A strict map of prespectra $f:E\to F$ inducing an isomorphism on every stage group of such a tail induces an isomorphism on $G_k$.

The same assertions hold for pointed simplicial prespectra with the following explicit convention, which also covers levels that are not Kan. Put $K=\Delta^1/\partial\Delta^1$ and fix the oriented identification $|K|=S^1$. A pointed simplicial prespectrum $X$ consists of pointed simplicial sets $X_n$ and pointed simplicial maps $s_n:K\wedge X_n\to X_{n+1}$; the smash product is the degreewise product with the union of its basepoint factors collapsed. Set $\pi_d^{\mathrm{simp}}(X_n):=\pi_d(|X_n|)$ and $G_k(X):=\operatorname{colim}_{n\geq N}\pi_{n+k}^{\mathrm{simp}}(X_n)$. The bonding map is suspension with $S^1$ first followed by $|s_n|$, using the natural identification $|K\wedge X_n|\cong S^1\wedge|X_n|$. A strict simplicial map $g:X\to X'$ means pointed maps $g_n$ satisfying $g_{n+1}s_n=s'_n(1_K\wedge g_n)$. For Kan levels the stage groups agree naturally with ordinary Kan homotopy groups; their ordered suspension maps are read through this comparison. Thus no Kan hypothesis is required for the realization convention, and the usual Kan case is retained.

More generally, both conclusions hold for any sequential system of groups with specified bonding homomorphisms, and any compatible family of stage-group isomorphisms.

### Statement references

[math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum)

[math:def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra](https://alphabetamath.cc/item/def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra)

[math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)

### Facts & Assumptions
**Given:** $k$, a tail cutoff $N$, the specified groups and bonding homomorphisms, and, for level invariance, compatible stage isomorphisms. Write $b_{n,m}$ for the composite of bonding maps from stage $n$ to stage $m\geq n$, with $b_{n,n}$ the identity.

**Goal:** Prove cutoff independence and level invariance for the topological, simplicial and abstract group systems.

[F1] [math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum) supplies the topological stage groups, sphere-first bonding homomorphisms and colimit: representatives $(n,x)$ and $(m,y)$ agree precisely when $b_{n,r}x=b_{m,r}y$ for some $r\geq n,m$, and multiplication is performed at a common stage. The same representative construction defines the colimit of any specified sequential group system.

[F2] [math:def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra](https://alphabetamath.cc/item/def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra) supplies the equation $f_{n+1}\sigma_n=\tau_n(1_{S^1}\wedge f_n)$ for strict topological maps. [math:prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant](https://alphabetamath.cc/item/prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant) supplies the induced homomorphisms and their compatibility with composition.

[F3] [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration) supplies simplicial sets, simplices, boundaries, degreewise products and simplicial homotopies. The pointed objects and strict simplicial maps used here are defined explicitly in the Statement.

[F4] The realization and Kan-comparison premises are imported at the exact locators in External input. [math:prop-relative-cw-inclusions-are-cofibrations](https://alphabetamath.cc/item/prop-relative-cw-inclusions-are-cofibrations) makes the chosen vertex inclusion in a realized CW complex a cofibration. A realized CW complex is Hausdorff, and its weak topology makes it compactly generated: if a subset has closed inverse image under every map from a compact Hausdorff space, it has closed inverse image on every characteristic disk and hence is closed. With the based compactly generated convention of [math:def-compactly-generated-based-space-and-well-pointed-object](https://alphabetamath.cc/item/def-compactly-generated-based-space-and-well-pointed-object), these realizations are well-pointed spaces to which [F1] applies.

### External input
The first source record supplies realization, its colimit preservation and its cell structure. The second supplies preservation of products with the finite simplicial circle. Combining products and quotients gives the natural ordered identification $|K\wedge Z|\cong S^1\wedge|Z|$ for every pointed simplicial set $Z$. The last two source records supply the natural comparison of Kan homotopy groups with realization groups: apply the unit $Z\to\operatorname{Sing}|Z|$ and then the singular sphere-class comparison. These are imported premises; the colimit argument below is local.

### Proof
1.1 By [F3] and [F4], realizing a simplicial prespectrum gives a topological prespectrum with the stated sphere-first structure maps, so [F1] gives well-defined bonding homomorphisms for its stage groups; the Kan comparison has the meaning specified in External input. Now work with any of the given sequential group systems. For $N'\geq N$, send the class of $(n,x)$ to the class of $(m,b_{n,m}x)$ with $m=\max(n,N')$. Eventual equality makes this independent of the representative: advance two equal representatives to a common stage at least $N'$. It is a homomorphism because multiplication is computed at a common stage. Composing in either order with inclusion of the tail fixes every representative after advancement, so these maps are inverse. Successive cutoffs compose by the same rule, giving the claimed canonical isomorphisms. [F1, F3, F4, given]

2.1 For topological strict maps, the equation in [F2] and the sphere-first bonding formula in [F1] give $u_{n+1}b_n=b'_nu_n$, where $u_n=(f_n)_*$. For simplicial strict maps, realization of the stated equation and naturality of the ordered smash identification give the same compatibility, with $u_n=(|g_n|)_*$; functoriality in [F2] applies. For any such compatible family, $(n,x)\mapsto(n,u_nx)$ preserves eventual equality and multiplication and hence induces a colimit homomorphism. When every $u_n$ is an isomorphism, its inverses obey $u_{n+1}^{-1}b'_n=b_nu_n^{-1}$ and induce the inverse colimit homomorphism. No inverse map of spaces is required. Step 1.1 makes this independent of the chosen common tail. All assertions follow. [F1, F2, F3, F4, step 1.1, given] ∎


## External singular realization comparison

[Open item](item-thm-author-e0b0bf18ed2b-singular-realization-input) · level 0


### Statement
A based topological space is a pair $(X,x_0)$, and a based map is a continuous map preserving the chosen point; these form the category $\mathrm{Top}_*$. A pointed simplicial set is a functor $K:\Delta^{\mathrm{op}}\to\mathrm{Set}$ with distinguished elements $*_n\in K_n$ preserved by every structure map. Its morphisms are natural transformations preserving these elements; their category is $\mathrm{sSet}_*$. Here $\Delta$ has objects $[n]=\{0<\cdots<n\}$ and nondecreasing maps.

Write $\Delta^n_{\mathrm{top}}$ for the standard topological simplex. For a based space $X$, define $\operatorname{Sing}_nX$ to be the set of continuous maps $\sigma:\Delta^n_{\mathrm{top}}\to X$. For $\alpha:[m]\to[n]$, let $\alpha_*:\Delta^m_{\mathrm{top}}\to\Delta^n_{\mathrm{top}}$ have $j$th coordinate $\sum_{\alpha(i)=j}t_i$; the singular structure map sends $\sigma$ to $\sigma\circ\alpha_*$. Thus $d_i\sigma=\sigma\circ\delta_i$, where $\delta_i$ inserts a zero coordinate, and $s_i\sigma=\sigma\circ q_i$, where $q_i$ adds the adjacent coordinates $i,i+1$. The distinguished simplex in every degree is the constant map at $x_0$. A based map $f:X\to Y$ induces $\operatorname{Sing}f$ by postcomposition.

For a pointed simplicial set $K$, define $|K|$ as the quotient of the topological disjoint union $\coprod_{n\geq0}\coprod_{a\in K_n}\Delta^n_{\mathrm{top}}$ by the equivalence relation generated by $(K(\alpha)a,t)\sim(a,\alpha_*t)$, for all $\alpha:[m]\to[n]$, $a\in K_n$ and $t\in\Delta^m_{\mathrm{top}}$, with the quotient topology. Its basepoint is $[ *_0,(1)]$; all $[ *_n,t]$ represent this same point. A pointed simplicial map $u:K\to L$ induces $|u|[a,t]=[u_n(a),t]$.

For every based topological space $X$, evaluation $\epsilon_X:|\operatorname{Sing}X|\to X$, given by $\epsilon_X[\sigma,t]=\sigma(t)$, is a natural based weak homotopy equivalence. Here a weak homotopy equivalence means a continuous map inducing a bijection on path components and isomorphisms $\pi_r(Y,y)\to\pi_r(Z,f(y))$ for every source point $y$ and every $r\geq1$; homotopy groups use based cubes and homotopies fixed on their boundary. Realization is left adjoint to the singular complex in the pointed categories: naturally in $K$ and $X$, the correspondence $u\mapsto\epsilon_X\circ|u|$ is a bijection from $\mathrm{sSet}_*(K,\operatorname{Sing}X)$ to $\mathrm{Top}_*(|K|,X)$. Its inverse sends $g$ to the map $a\mapsto(t\mapsto g[a,t])$. The unit is $a\mapsto(t\mapsto[a,t])$ and the counit is evaluation, with the usual triangle identities. No connectivity or well-pointedness hypothesis is required.

### Statement references
[math:def-singular-simplex-and-singular-chain-group-with-coefficients](https://alphabetamath.cc/item/def-singular-simplex-and-singular-chain-group-with-coefficients)

[math:def-standard-topological-simplex-and-its-affine-face-maps](https://alphabetamath.cc/item/def-standard-topological-simplex-and-its-affine-face-maps)

[math:def-simplicial-object-and-simplicial-commutative-ring](https://alphabetamath.cc/item/def-simplicial-object-and-simplicial-commutative-ring)

[math:def-disjoint-union-topology](https://alphabetamath.cc/item/def-disjoint-union-topology)

[math:def-quotient-topology](https://alphabetamath.cc/item/def-quotient-topology)

[math:thm-quotient-universal-property](https://alphabetamath.cc/item/thm-quotient-universal-property)

[math:def-higher-homotopy-group-by-based-cubes](https://alphabetamath.cc/item/def-higher-homotopy-group-by-based-cubes)

[math:def-adjunction-by-unit-counit-and-triangle-identities](https://alphabetamath.cc/item/def-adjunction-by-unit-counit-and-triangle-identities)

### Source contract
**Given:** An arbitrary based topological space $X$ and a pointed simplicial set $K$, with the constructions in the Statement.

**Goal:** Supply the natural evaluation weak equivalence and pointed adjunction used for sequential prespectra, retaining their explicit formulas.

[F1] May, Chapter 16 §§1–4, supplies the singular operators, realization quotient, evaluation theorem and unpointed adjunction in his standing category of spaces. His weak-equivalence argument in §3 is a sketch.

[F2] Kerodon Construction 1.2.2.2 and §1.2.3, especially Corollary 1.2.3.5, supply the singular construction and unpointed adjunction for arbitrary topological spaces. Corollary 3.6.4.2 supplies the evaluation weak homotopy equivalence for every topological space.

### External input
Import the comparison theorem and unpointed adjunction from [F1] and [F2] at the recorded locators; the arbitrary-space scope uses [F2]. No local reconstruction of the weak-equivalence proof is claimed.

The displayed constructions make the specialization precise. Affine maps satisfy $(\alpha\beta)_*=\alpha_*\beta_*$, so precomposition satisfies the simplicial identities. The quotient relations identify all distinguished simplices with the distinguished vertex. Evaluation respects these relations since $(\sigma\circ\alpha_*)(t)=\sigma(\alpha_*t)$, and is continuous by the quotient universal property, being continuous on each simplex. The same relations make $|u|$ well-defined and continuous. Postcomposition shows that evaluation is natural.

The pointed adjunction is the restriction of the imported unpointed correspondence: $u$ preserves the distinguished simplex in every degree exactly when its evaluated realization sends $[ *_0,(1)]$ to $x_0$, because $[ *_n,t]=[ *_0,(1)]$ for every $n,t$. Conversely, a based $g$ gives constant simplices on all $*_n$ by the displayed inverse formula. Thus the two inverse maps restrict to based maps. The unit and counit preserve basepoints, and their triangle identities are the identities of the imported adjunction. Only this restriction and the formula checks are explained here; the substantial comparison is literature input.


## External stable enhancement and smash product of spectra

[Open item](item-thm-author-e0b0bf18ed2b-stable-enhancement-input) · level 0


### Statement

Work in ZFC with fixed nested Grothendieck universes $U\in V\in W$ and $\omega\in U$. Spaces and indexing diagrams called small are $U$-small; their infinity-categories are formed in $V$, and the infinity-category of those categories in $W$. Let $S$ be the infinity-category of small spaces and $S_*$ its infinity-category of pointed objects. Let $S^{\mathrm{fin}}$ be the smallest replete full subcategory of $S$ containing the point and closed under finite colimits, and let $S_*^{\mathrm{fin}}$ consist of its pointed objects.

Set $\mathrm{Sp}=\operatorname{Exc}_*(S_*^{\mathrm{fin}},S)$, the full infinity-category of functors taking the point to a contractible space and pushout squares to pullback squares. It is stable and presentable, has all small limits and colimits, and a square in it is a pushout exactly when it is a pullback. Write $0$ for its zero object and $E[1]=0\sqcup_E0$ for suspension; its inverse is $E[-1]=0\times_E0$.

Define the pointed evaluation $\Omega^\infty:\mathrm{Sp}\to S_*$ by $E\mapsto E(S^0)$, with base point induced by $E(*)\to E(S^0)$ and the equivalence $E(*)\simeq *$. Here $S^0$ is the pointed two-point space. This functor has a left adjoint $\Sigma^\infty:S_*\to\mathrm{Sp}$, and the sphere spectrum is $\mathbb S=\Sigma^\infty S^0$.

There is an equivalence $\mathrm{Sp}\simeq\operatorname*{lim}(\cdots\xrightarrow{\Omega}S_*\xrightarrow{\Omega}S_*)$ in the infinity-category of infinity-categories, where $\Omega X=*\times_X*$ is based loops. An object on the right is a coherent tower $Y_n\simeq\Omega Y_{n+1}$ for $n\geq0$, and its nth projection is naturally $Y_n\simeq\Omega^\infty(E[n])$. All equivalences, morphisms and tower compatibilities are coherent.

There is a symmetric monoidal smash product $\wedge:\mathrm{Sp}\times\mathrm{Sp}\to\mathrm{Sp}$ with unit $\mathbb S$, preserving small colimits separately in each variable. Its associativity, symmetry and unit laws include all higher coherences.

### Statement references

[math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Source contract

**Given:** The universe closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), with the nested universes and $\omega\in U$ assumed, and the Axiom of Choice of [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). Small means belonging to $U$ up to isomorphism. AC is part of the classical foundations of the imported constructions; no choice-free version is claimed. The simplicial sets and standard simplices used below are supplied by [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration).

**Goal:** Supply the stable enhancement, coherent Omega-tower description, pointed evaluation adjunction and smash product with the precise formalism below.

[F1] Reference 0 imports the spectrum-object construction, its stability and presentability, the coherent tower equivalence and the pointed stabilization adjunction. Reference 2 supplies presentability of spaces and completeness of presentable infinity-categories. Reference 3 supplies the stability criterion and the symmetric monoidal smash product with sphere unit. The tower theorem is applied to $S_*$, which is pointed and has finite limits; stabilization of $S_*$ agrees with stabilization of $S$. The adjunction is the pointed assertion (2′) in the proof of Proposition 1.4.4.4. The sphere definition there is the unpointed suspension of the point, equivalently the pointed suspension of $S^0$.

[F2] Reference 1 imports the quasicategory, mapping-space, functor-category, cone, adjunction and coCartesian-fibration formalism used below; reference 2 imports the precise accessibility and presentability interface; reference 3 imports the finite-space convention and the Segal-fiber meaning of symmetric monoidal. These are statement-bearing external inputs in addition to [F1].

### External input

Import [F1] and [F2], at their stated hypotheses and size bounds. The following paragraphs specify the imported foundational interface; they are not local proofs of the cited results.

Use simplicial sets with standard simplices $\Delta[n]$. The horn $\Lambda_i[n]$ is the union of all codimension-one faces except the ith face. An infinity-category is a simplicial set in which every map $\Lambda_i[n]\to C$ extends to $\Delta[n]\to C$ for $0<i<n$; a Kan complex has this extension property for every horn. A functor is a simplicial map. The functor infinity-category has $\operatorname{Fun}(C,D)_n=\operatorname{Hom}(C\times\Delta[n],D)$ when $D$ is an infinity-category. A full subcategory on chosen vertices consists of all simplices whose vertices are chosen; replete means closed under equivalence. The mapping space $\operatorname{Map}_C(x,y)$ can be represented by the right mapping Kan complex: its n-simplices are maps $\Delta[n+1]\to C$ whose restriction to the face spanned by vertices $0,\ldots,n$ is the constant simplex at $x$ and whose last vertex is $y$. Its components are the morphisms in the homotopy category; an equivalence is a morphism invertible there. These constructions and their invariance are imported from reference 1.

Concretely $S$ is the homotopy coherent simplicial nerve of the simplicial category of small Kan complexes, whose mapping simplicial sets are the internal homs $Y^X$. The nerve construction is that of reference 1, Definitions 1.1.5.1 and 1.1.5.5: its n-simplices are simplicial functors from $\mathfrak C[\Delta[n]]$, with objects $0,\ldots,n$ and mapping spaces given by nerves of posets of subsets of $\{i,\ldots,j\}$ containing both endpoints, composed by union. Mapping spaces for $j<i$ are empty. Pointed spaces are arrows $*\to X$ in $S$, with their coherent morphisms. Finite spaces and finite pointed spaces have exactly the finite-colimit-closure meaning in the Statement, as in reference 3, Notation 1.4.2.5. For a reduced functor the contractibility of its value at the point makes the induced pointing canonical up to a contractible choice.

A coherent diagram is a simplicial map $p:K\to C$. A cone (respectively cocone) extends it by an initial (respectively final) cone vertex, together with all simplices giving compatibility. Its limit is a terminal cone and its colimit an initial cocone; terminal means every incoming mapping space is contractible, and initial is the dual condition. Products, pullbacks and pushouts refer to these universal properties, including the empty diagrams for terminal and initial objects. A zero object is both initial and terminal. The corresponding mapping-space universal properties are homotopy universal properties. In the infinity-category of infinity-categories, objects are infinity-categories, arrows are functors and mapping spaces are the cores of functor infinity-categories, retaining natural equivalences and their higher homotopies. Here the core is the largest simplicial subset all of whose edges are equivalences. The tower limit in the Statement is taken there, not in an ordinary homotopy category. All of this formalism is imported from reference 1.

For an infinite regular cardinal $\kappa$, a diagram shape is $\kappa$-small if it has fewer than $\kappa$ nondegenerate simplices; $\kappa$ is regular when a union of fewer than $\kappa$ sets each of size less than $\kappa$ still has size less than $\kappa$. An infinity-category is $\kappa$-filtered when every $\kappa$-small diagram in it has a cocone. An object $c$ is $\kappa$-compact when $\operatorname{Map}(c,-)$ preserves small $\kappa$-filtered colimits. An infinity-category is accessible when, for some such $\kappa\in U$, it admits small $\kappa$-filtered colimits and is generated under them by an essentially small full subcategory of $\kappa$-compact objects; essentially small means equivalent to a small infinity-category. Presentable means accessible and admitting all small colimits. Reference 2 imports this characterization, presentability of $S$, and existence of all small limits in a presentable infinity-category. A pointed infinity-category with finite limits and colimits is stable precisely when its pullback and pushout squares coincide, by reference 3. Suspension and loops are the indicated pushout and pullback with zero objects and are inverse in a stable infinity-category. An adjunction $L\dashv R$ has a coherent unit for which $\operatorname{Map}(Lc,d)\simeq\operatorname{Map}(c,Rd)$, induced by that unit, is an equivalence for every $c,d$, as imported from reference 1.

A symmetric monoidal infinity-category means the structure of reference 3, Definition 2.0.0.7: a coCartesian fibration $p:C^\otimes\to N(\mathrm{Fin}_*)$ whose fiber over $\langle n\rangle=\{*,1,\ldots,n\}$ is equivalent to $C^n$ via the maps selecting each non-basepoint element. Here $\mathrm{Fin}_*$ is the category of finite pointed sets and basepoint-preserving functions, and $N$ is its ordinary nerve, whose n-simplices are strings of n composable arrows. The tensor and unit come from transport along the fold $\langle2\rangle\to\langle1\rangle$ and $\langle0\rangle\to\langle1\rangle$. For precision, a coCartesian fibration is an inner fibration admitting a coCartesian lift from every object over the source of every base arrow; inner fibration means the relative lifting property for all inner horns. An edge $x\to y$ is coCartesian when for each $z$ the coherent square from $\operatorname{Map}(y,z)\to\operatorname{Map}(x,z)$ to $\operatorname{Map}(py,pz)\to\operatorname{Map}(px,pz)$ is a homotopy pullback, the dual criterion of reference 1, Proposition 2.4.4.3. Transport is specified up to its coherent contractible choices. This imports the higher coherences, rather than merely laws in a homotopy category. Reference 3, Corollary 4.8.2.19, supplies this structure on $\mathrm{Sp}$ with the asserted sphere unit and separate colimit preservation.


## External input on derived enhancements

[Open item](item-thm-author-4f716d60801a-derived-enhancement-input) · level 0


### Statement
Assume the Axiom of Choice and fix suitable Grothendieck universes containing $\omega$ and the scheme or ring data, using larger universes for their categories. Existence of these universes is a standing size assumption, not a consequence asserted from Choice. Smallness below is relative to the base universe. For a scheme $X$, let $\mathcal A_X=\operatorname{Mod}(\mathcal O_X)$ be the category of all Zariski module sheaves, and let $\mathcal D(X)$ be the infinity-localization of its unbounded cochain complexes at quasi-isomorphisms. For a unital ring $A$, let $\mathcal A_A=A\text{-}\operatorname{Mod}$ denote unital left modules and define $\mathcal D(A)$ in the same way. Write $\mathcal D(\mathcal A)$ for either construction.

A cochain map $f:C^\bullet\to E^\bullet$ is a quasi-isomorphism exactly when $H^n(f)$ is an isomorphism for every integer $n$, where $H^n(C)=\ker(d^n)/\operatorname{im}(d^{n-1})$. Cochain maps commute with the differentials; a cochain homotopy between $f$ and $g$ is a family $h^n:C^n\to E^{n-1}$ satisfying $f-g=d_Eh+hd_C$. A complex is acyclic if all its cohomology objects vanish. The chain convention of the published quasi-isomorphism definition is read by $C^\sharp_n=C^{-n}$ and $d^\sharp_n=d^{-n}$, so that $H_n(C^\sharp)=H^{-n}(C)$.

These derived enhancements are locally small stable presentable infinity-categories. Their homotopy categories are the ordinary unbounded derived categories $D(\mathcal A)=K(\mathcal A)[\mathrm{qis}^{-1}]$, where $K(\mathcal A)$ has cochain maps modulo cochain homotopy. Both the enhanced categories and their homotopy categories are idempotent complete. If $F:\mathcal A\to\mathcal B$ is an exact additive functor between any two of the above module or module-sheaf abelian categories, its termwise extension induces an exact infinity-functor $\mathcal D(F):\mathcal D(\mathcal A)\to\mathcal D(\mathcal B)$. For a cochain map $f:C\to E$, the cone $\operatorname{Cone}(f)^n=E^n\oplus C^{n+1}$, with $d(e,c)=(d_Ee+fc,-d_Cc)$ and its canonical nullhomotopy, represents the cofiber of $f$ in the localization. Thus its cofiber triangle ends in $C[1]$, with $C[1]^n=C^{n+1}$ and differential $-d_C$.

Here an infinity-category retains mapping spaces and coherent higher compositions; its homotopy category has the same objects and the components of those mapping spaces as morphisms. Localization means that precomposition identifies functors out of it with functors out of complexes that invert all quasi-isomorphisms, including their natural transformations. All limits and colimits are coherent ones. Stable means having a zero object and finite limits and colimits, with a square a pushout exactly when it is a pullback. A cofiber is the pushout $E\sqcup_C0$, including the defining square and nullhomotopy. Exact infinity-functors preserve finite limits and colimits. Presentable means accessible and admitting all small colimits; accessibility means admitting $\kappa$-filtered colimits and being generated under them by a small family of $\kappa$-compact objects for some regular cardinal $\kappa$, with $\kappa$-compactness meaning preservation of those colimits by the represented mapping-space functor. Ordinary idempotent completeness means that every $e^2=e$ splits as $e=ir$ with $ri=1$; enhanced idempotent completeness means that coherent idempotent diagrams split. These are the notions used by the imported criteria below.

### Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)

[math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules)

[math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)

[math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:def-exact-functor-between-abelian-categories](https://alphabetamath.cc/item/def-exact-functor-between-abelian-categories)

[math:def-grothendieck-category](https://alphabetamath.cc/item/def-grothendieck-category)

[math:def-idempotent-complete-category](https://alphabetamath.cc/item/def-idempotent-complete-category)

### Facts & Assumptions
**Given:** A scheme or ring, the abelian categories $\mathcal A,\mathcal B$ described in the Statement, and, when functoriality is used, an exact additive functor $F:\mathcal A\to\mathcal B$.

**Goal:** Establish the full ambient enhancement interface, including the actual induced functors and cone cofibers.

[A1] Choice and the stated universe assumptions are retained for the imported unbounded resolution and model-category constructions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) specify these assumptions.

[F1] Stacks Remark 19.13.3 supplies the Grothendieck property for modules and module sheaves and the K-injective Hom comparison. Here K-injective means that every map from an acyclic complex, including every shift, is nullhomotopic. [math:def-grothendieck-category](https://alphabetamath.cc/item/def-grothendieck-category) supplies the Grothendieck-category terminology. The source is reference 0.

[F2] Higher Algebra supplies the unbounded stable presentable localization, its reflective dg-nerve model, and the K-injective and homotopy descriptions at the listed locators. It also supplies dg cone cofibers, the functor-category localization property, the stable exactness criterion, and the equivalence of enhanced and homotopy-category idempotent completeness. The source is reference 1.

[F3] Higher Topos Theory supplies the coherent-idempotent splitting criterion and its sequential realization, as well as the definition of presentability used here. The source is reference 2.

[F4] The published cochain, cohomology, quasi-isomorphism and ordinary derived-category conventions are [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category), [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex), [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism) and [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category). The latter supplies precisely the cochain cone convention in the Statement; its ordinary size caveat is discharged here by [F1]. An exact additive functor preserves kernels, cokernels and finite direct sums by [math:def-exact-functor-between-abelian-categories](https://alphabetamath.cc/item/def-exact-functor-between-abelian-categories). Ordinary idempotent completeness is [math:def-idempotent-complete-category](https://alphabetamath.cc/item/def-idempotent-complete-category).

### External input
Import [F1]–[F3] only under the hypotheses and reading limits of references 0–2. The scheme case uses its Zariski site of open sets, so the ringed-site assertion applies to all module sheaves without finiteness or quasi-coherence assumptions. The derived model, cofiber criterion and splitting criteria are imported established inputs. The application to the specified categories and exact functors is the local argument below; it does not claim reconstruction of those inputs. No identification of $D(\operatorname{QCoh}(X))$ with the quasi-coherent-cohomology subcategory is asserted for arbitrary $X$.

### Proof

Import [F1]–[F3] only under the hypotheses and reading limits of references 0–2. The scheme case uses its Zariski site of open sets, so the ringed-site assertion applies to all module sheaves without finiteness or quasi-coherence assumptions. The derived model, cofiber criterion and splitting criteria are imported established inputs. The application to the specified categories and exact functors is the local argument below; it does not claim reconstruction of those inputs. No identification of $D(\operatorname{QCoh}(X))$ with the quasi-coherent-cohomology subcategory is asserted for arbitrary $X$.


1.1 The two categories $\mathcal A$ are Grothendieck abelian by [F1], so [F2] applies under [A1] and gives their stable presentable enhancements and the specified infinity-localizations. The fibrant model in [F2] has K-injective representatives and maps in its homotopy category are cochain maps modulo homotopy. The Hom comparison in [F1] computes exactly these same maps in $D(\mathcal A)$; the quasi-isomorphic replacements are essentially surjective, identifying the homotopy categories and discharging their local-smallness caveat in [F4]. In the dg nerve the canonical cone square is a cofiber square by [F2]. Its reflective localization preserves this colimit: mapping its image into a local object is, by adjunction, the mapping space from the original square, hence the required pullback of mapping spaces. Consequently the localized cone square is still a cofiber square, with the cochain sign convention of [F4]. Presentability provides the small colimits required by [F3], so coherent idempotents split; [F2] then gives ordinary homotopy-category idempotent completeness. [A1, F1, F2, F3, F4]

2.1 Exactness of $F$ in [F4] gives $H^n(F(C))\cong F(H^n(C))$, since kernels, images and cokernels are preserved. Thus termwise $F$ preserves quasi-isomorphisms, and the functor-category universal property in [F2] produces the actual induced $\mathcal D(F)$ with its comparison to termwise $F$. Additivity preserves zero, the signed cone matrices, and the canonical cone nullhomotopy: termwise $F$ also sends graded homotopies and their equations to their images. It therefore sends the cone square for a cochain map to the cone square for its image. This verifies preservation of all cofiber sequences, not only those initially presented by cochain maps: for an arbitrary enhanced arrow $\alpha:M\to N$, choose a K-injective resolution $N\to I$ from [F1]. Using the homotopy-category identification in step 1.1, the composite $M\to I$ is represented by an actual cochain map $f:M\to I$. Equality of its homotopy class with that composite supplies a path in the enhanced mapping space, and hence an equivalence of arrow diagrams from $\alpha$ to $f$ with target comparison $N\simeq I$. Cofiber squares are invariant under this equivalence; so are their images under $\mathcal D(F)$. The cone-square verification therefore applies to every arrow. Together with preservation of zero and the stable exactness criterion in [F2], this proves that $\mathcal D(F)$ is exact. [F1, F2, F4, step 1.1] ∎


## External local perfection and summand closure

[Open item](item-thm-author-4f716d60801a-local-perfect-input) · level 0


### Statement

Assume the Axiom of Choice. Fix Grothendieck universes $\mathbb U\in\mathbb V$ with $\omega\in\mathbb U$. Let $(X,\mathcal O_X)$ be a $\mathbb U$-small ringed space, and let $\mathcal A=\mathrm{Mod}_{\mathbb U}(\mathcal O_X)$ be the abelian category of module sheaves with $\mathbb U$-small section data. Write $D(\mathcal O_X)=K(\mathcal A)[\mathrm{qis}^{-1}]$, with the localization and its Hom sets formed in $\mathbb V$. Use cochain complexes, and the usual distinguished triangles isomorphic to images of mapping-cone triangles.

For an open $W\subseteq X$, put $\mathcal O_W=\mathcal O_X|_W$. The finite free module sheaf $\mathcal O_W^r$ has sections $\mathcal O_W(V)^r$ on $V\subseteq W$, with componentwise restriction. A module sheaf $M$ is a direct summand of $N$ if $M\oplus M'\cong N$ for some module sheaf $M'$. A complex on $W$ is strictly perfect if it is zero outside a finite interval and each term is a direct summand of some $\mathcal O_W^r$ with $r$ finite. A module sheaf is finite locally free if every point has an open neighborhood on which it is isomorphic to some finite free module sheaf. No globally constant rank is required.

An object $E\in D(\mathcal O_X)$ is perfect if some open cover $X=\bigcup_i U_i$ has each $E|_{U_i}$ isomorphic in $D(\mathcal O_{U_i})$ to a strictly perfect complex. Here restriction on derived objects is computed by restricting any representative complex term by term.

Perfection is invariant under isomorphism in the derived category and is local on $X$. When all stalk rings $\mathcal O_{X,x}$ are local, it is equivalent to local representation by bounded complexes of finite locally free module sheaves. The finite degree bounds may depend on the member of the open cover. In a distinguished triangle, perfection of any two objects implies perfection of the third. If $E\oplus F$ is perfect, then both $E$ and $F$ are perfect.

Scheme stalk rings are local.

### Source contract

**Given:** The Axiom of Choice, the stated nested universes, a ringed space and its module sheaves; local stalk rings only for the finite locally free characterization.

**Goal:** Record local perfection, its derived invariance and closure under triangles and direct summands, with the scheme case included.

[F1] The Axiom of Choice is retained as an assumption for the imported results; universes are a size convention, not a consequence of Choice ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)).

[F2] The ringed-space and module-sheaf interfaces, including the abelian category in which the complexes live, are [math:def-ringed-space](https://alphabetamath.cc/item/def-ringed-space), [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space) and [math:thm-abelian-sheaves-form-abelian-category](https://alphabetamath.cc/item/thm-abelian-sheaves-form-abelian-category). Cochain, boundedness and quasi-isomorphism conventions are [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category), [math:def-bounded-bounded-below-and-bounded-above-complex](https://alphabetamath.cc/item/def-bounded-bounded-below-and-bounded-above-complex) and [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism), with the cochain reindexing convention.

[F3] Use [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category), [math:thm-the-derived-category-inherits-a-triangulated-structure](https://alphabetamath.cc/item/thm-the-derived-category-inherits-a-triangulated-structure), [math:def-distinguished-triangle](https://alphabetamath.cc/item/def-distinguished-triangle) and [math:def-biproduct](https://alphabetamath.cc/item/def-biproduct) for the localization, cone triangles and sums. The complex data and morphism data for $\mathbb U$-small sheaves are drawn from sets in $\mathbb V$, so their homotopy category is small in $\mathbb V$. Thus the published localization interface's smallness alternative applies in $\mathbb V$; no unqualified same-universe local-smallness claim is made.

[F4] Open restriction, stalks and local rings mean [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace), [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf) and [math:def-local-ring](https://alphabetamath.cc/item/def-local-ring). The derived open-restriction construction is imported below.

[F5] By [math:def-scheme](https://alphabetamath.cc/item/def-scheme) a scheme is a locally ringed space, and [math:def-locally-ringed-space](https://alphabetamath.cc/item/def-locally-ringed-space) specifies exactly the local-stalk condition. This supplies the scheme-stalk assertion, separately from the imported perfection results.

### External input

Import the perfection definition, representative invariance, local finite locally free characterization, triangle closure and summand closure from [Stacks, Section 20.49](https://stacks.math.columbia.edu/tag/08CL), at the exact locators and hypotheses in reference 0.

The inline strictly perfect convention is [Stacks, Definition 20.46.1](https://stacks.math.columbia.edu/tag/08C3), reference 1; finite local freeness on general ringed spaces is [Definition 17.14.1](https://stacks.math.columbia.edu/tag/01C5), reference 2. Finite free summands are not identified with finite locally free sheaves on arbitrary ringed spaces.

The derived open-restriction construction is the opening paragraph of [Stacks, Section 20.32](https://stacks.math.columbia.edu/tag/0D5U), reference 3. These imported assertions retain their recorded reading limits. No local reconstruction of strictification, pseudo-coherence, Tor amplitude or summand closure is claimed.


## Reindexing cochains as chains

[Open item](item-lem-author-80e2d7bee57f-cochain-to-chain) · level 0


### Statement
Let $C$ be a cochain complex of abelian groups, with group homomorphisms $d^q:C^q\to C^{q+1}$ satisfying $d^{q+1}d^q=0$ for every integer $q$. Define a chain complex $D$ by $D_n=C^{-n}$ and $\partial_n=d^{-n}$. Then $H_n(D)=H^{-n}(C)$ naturally in $C$. Here homology and cohomology mean the kernel of the outgoing differential modulo the image of the incoming differential.

### Facts & Assumptions
**Given:** A cochain complex $C$ as stated, indexed by all integers, with no boundedness assumption.

**Goal:** Construct $D$ and identify its homology naturally in cochain maps.

[F1] [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category) and [math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category) supply the complex conventions, specialized to abelian groups: cochain differentials raise degree and chain differentials lower degree, with consecutive differentials composing to zero.

[F2] [math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map) and [math:def-chain-map](https://alphabetamath.cc/item/def-chain-map) supply the map conventions. For a cochain map $f:C\to C'$, the components satisfy $d_{C'}^q f^q=f^{q+1}d_C^q$; for a chain map $g:D\to D'$, they satisfy $\partial_n^{D'}g_n=g_{n-1}\partial_n^D$.

[F3] [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex) and [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex) give the quotients $H^q(C)=\ker(d_C^q)/\operatorname{im}(d_C^{q-1})$ and $H_n(D)=\ker(\partial_n)/\operatorname{im}(\partial_{n+1})$ in abelian groups.

[F4] [math:def-group](https://alphabetamath.cc/item/def-group) defines abelian groups, and [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism) defines their homomorphisms. By [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category), the category of abelian groups and homomorphisms is abelian, with kernels and images the usual subgroups and cokernels the usual quotient groups. Thus the abelian-category interfaces in [F1]–[F3] apply in this setting.

[F5] [math:thm-a-chain-map-induces-a-well-defined-map-on-homology](https://alphabetamath.cc/item/thm-a-chain-map-induces-a-well-defined-map-on-homology) supplies the unique map on homology induced by a chain map, characterized by commutation with the quotient maps from cycles. We apply it to the reindexed chain maps constructed in step 1.1.

### Proof
1.1 The map $\partial_n=d_C^{-n}$ has target $C^{-n+1}=D_{n-1}$, and the composite $\partial_{n-1}\partial_n=d_C^{-n+1}d_C^{-n}$ is zero. Thus the displayed groups and maps form a chain complex. For a cochain map $f:C\to C'$, put $g_n=f^{-n}$; then $\partial_n^{D'}g_n=d_{C'}^{-n}f^{-n}=f^{-n+1}d_C^{-n}=g_{n-1}\partial_n^D$, so $g$ is a chain map. Reindexing preserves identity maps and composition componentwise. [F1, F2, F4, given, construct]

2.1 In degree $n$, $\ker(\partial_n)=\ker(d_C^{-n})$ and $\operatorname{im}(\partial_{n+1})=\operatorname{im}(d_C^{-n-1})$. The latter subgroup lies in the former because $d_C^{-n}d_C^{-n-1}=0$, so both quotients are defined and equal. For $f:C\to C'$ as in step 1.1, $d_{C'}^{-n}f^{-n}x=f^{-n+1}d_C^{-n}x=0$ for every cycle $x$, and $f^{-n}d_C^{-n-1}y=d_{C'}^{-n-1}f^{-n-1}y$ for every $y$. Hence $f^{-n}$ preserves cycles and boundaries. By [F5] applied to the chain map of step 1.1, the induced homology map exists uniquely and is characterized by commutation with the cycle quotient maps; on both identical quotients it is therefore $[x]\mapsto[f^{-n}x]$. The identity on representatives therefore gives the claimed natural identification. [F1, F2, F3, F4, F5, given, step 1.1] ∎


## Cohomology of an integer shift

[Open item](item-lem-author-80e2d7bee57f-shift-cohomology) · level 0


### Statement
For a cochain complex $C$ of abelian groups and integers $q,k$, the convention $C[k]^q=C^{q+k}$ and $d_{C[k]}^q=(-1)^k d_C^{q+k}$ gives a natural isomorphism $H^q(C[k])\cong H^{q+k}(C)$.

### Facts & Assumptions
**Given:** $C$, $q$, and $k$ as stated.

**Goal:** Compare the indicated cohomology groups.

[F1] [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category) specifies the cochain shift and its sign.

[F2] [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category) supplies the cochain-complex relation $d_C^{n+1}d_C^n=0$ in every integer degree $n$.

[F3] [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex) defines the cycles $Z^n(C)=\ker d_C^n$, boundaries $B^n(C)=\operatorname{im}d_C^{n-1}$, and cohomology $H^n(C)=Z^n(C)/B^n(C)$.

[F4] [math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map) defines a cochain map $f:C\to D$ by degreewise homomorphisms $f^n$ satisfying $d_D^nf^n=f^{n+1}d_C^n$.

### Proof
1.1 The composite of consecutive shifted differentials is $(-1)^{2k}d_C^{q+k+1}d_C^{q+k}=0$, so the shift is a cochain complex. Multiplication of a homomorphism by $(-1)^k$ changes neither its kernel nor its image, since multiplication by this sign is its own inverse. Hence $Z^q(C[k])=Z^{q+k}(C)$ and $B^q(C[k])=B^{q+k}(C)$ as subgroups of $C^{q+k}$. [F1, F2, F3, given]

2.1 By the cohomology quotient definition, the identity of these common quotients is the required isomorphism $H^q(C[k])\cong H^{q+k}(C)$. For a cochain map $f:C\to D$, set $f[k]^q=f^{q+k}$. Its cochain-map identity follows by multiplying the original identity by $(-1)^k$. That identity also shows that $f^{q+k}$ sends cycles to cycles and boundaries to boundaries, so it induces the cohomology maps. Both routes in the naturality square send $[x]$ to $[f^{q+k}(x)]$, proving naturality. [F1, F3, F4, step 1.1] ∎


## Reindexing commutes with shifts

[Open item](item-lem-author-80e2d7bee57f-chain-shift-reindex) · level 0


### Statement
Let $\mathcal A$ be an abelian category and let $C$ be a cochain complex in $\mathcal A$, indexed by all integers with no boundedness assumption. Reindex it as the chain complex $R(C)=D$, where $D_n=C^{-n}$ and $\partial_n=d_C^{-n}$. For an integer $k$, use the cochain shift $C[k]^q=C^{q+k}$ with differential $d_{C[k]}^q=(-1)^k d_C^{q+k}$, and define the chain shift by $D[k]_n=D_{n-k}$ with differential $\partial^{D[k]}_n=(-1)^k\partial_{n-k}$. Then $R(C[k])=R(C)[k]$ as chain complexes. This equality is natural in cochain maps: for $f:C\to C'$, put $R(f)_n=f^{-n}$, $f[k]^q=f^{q+k}$ and $R(f)[k]_n=R(f)_{n-k}$; then $R(f[k])=R(f)[k]$.

### Facts & Assumptions
**Given:** $\mathcal A$, $C$, $D$, $k$, and the componentwise constructions in the statement.

**Goal:** Verify the constructions and compare their objects, differentials and maps.

[F1] [math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category) supplies the ambient abelian category and its additive structure. Morphisms can be negated, and composition is additive in each variable.

[F2] [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category) supplies cochain complexes and the reindexing $D_n=C^{-n}$, $\partial_n=d_C^{-n}$ in any abelian category. [math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category) supplies the chain differential condition $\partial_{n-1}\partial_n=0$.

[F3] [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category) supplies the termwise cochain shift convention $C[k]^q=C^{q+k}$ and $d_{C[k]}^q=(-1)^k d_C^{q+k}$. Only this convention is used; no derived localization or assertion about Hom sets is needed.

[F4] [math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map) and [math:def-chain-map](https://alphabetamath.cc/item/def-chain-map) supply the map conditions $d_{C'}^q f^q=f^{q+1}d_C^q$ and $\partial_n^{D'}g_n=g_{n-1}\partial_n^D$. Reindexing and shifting maps use the component formulas in the statement.

### Proof
1.1 The reindexed differential has target $C^{-n+1}=D_{n-1}$ and satisfies $\partial_{n-1}\partial_n=d_C^{-n+1}d_C^{-n}=0$. The consecutive differential composites for $C[k]$ and $D[k]$ are respectively $(-1)^{2k}d_C^{q+k+1}d_C^{q+k}=0$ and $(-1)^{2k}\partial_{n-k-1}\partial_{n-k}=0$, so all the constructions are complexes. In degree $n$, $R(C[k])_n=C[k]^{-n}=C^{-n+k}=D_{n-k}=R(C)[k]_n$. [F1, F2, F3, given]

2.1 The differential of $R(C[k])$ in degree $n$ is $(-1)^k d_C^{-n+k}=(-1)^k\partial_{n-k}$, exactly the differential of $R(C)[k]$. For a cochain map $f:C\to C'$, reindexing its map equation gives $\partial_n^{D'}f^{-n}=f^{-n+1}\partial_n^D$, so $R(f)$ is a chain map. Multiplying the map equations in degrees $q+k$ and $n-k$ by $(-1)^k$ shows that the specified shifted maps are maps of the shifted complexes. Both $R(f[k])_n$ and $R(f)[k]_n$ equal $f^{-n+k}$. These component formulas preserve identities and composition, so the equality of complexes is natural in $C$. [F1, F2, F3, F4, given, step 1.1] ∎


## External K-flat sheaf resolution and pullback input

[Open item](item-thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input) · level 0


### Statement
Assume AC and fix Grothendieck universes $\mathcal U\in\mathcal V$ with $\omega\in\mathcal U$. Ringed spaces and module sheaves are taken in $\mathcal U$; categories and ordinary localizations are formed in $\mathcal V$. Here $\mathcal U$-small sets mean sets belonging to $\mathcal U$. Let $(X,\mathcal O_X)$ be any such ringed space and write $\mathcal A_X=\operatorname{Mod}_{\mathcal U}(\mathcal O_X)$ for the abelian category of all sheaves of $\mathcal O_X$-modules with $\mathcal U$-small section sets. Every complex below is a $\mathbb Z$-indexed cochain complex in $\mathcal A_X$, unless another ringed space or ring is specified. Acyclicity and quasi-isomorphisms use the cochain convention, equivalently the chain convention $C_n=C^{-n}$. An $\mathcal O_X$-module $M$ is flat when $-\otimes_{\mathcal O_X}M:\mathcal A_X\to\mathcal A_X$ is exact.

For complexes $P,Q$ of $\mathcal O_X$-modules, put $T_X(P,Q)=\operatorname{Tot}^{\oplus}(P\otimes_{\mathcal O_X}Q)$, with $T_X(P,Q)^n=\bigoplus_{i+j=n}P^i\otimes_{\mathcal O_X}Q^j$ and differential $d(p\otimes q)=d_Pp\otimes q+(-1)^ip\otimes d_Qq$ for homogeneous local sections $p\in P^i$, $q\in Q^j$. These are sheaf tensor products and sheaf coproducts. Call $P$ K-flat when $T_X(N,P)$ is acyclic for every acyclic cochain complex $N$ of $\mathcal O_X$-modules.

Every cochain complex $C$ of $\mathcal O_X$-modules admits a quasi-isomorphism $P\to C$ with $P$ K-flat and every $P^i$ flat. K-flatness is stalkwise: $P$ is K-flat exactly when each $P_x$ is K-flat as a cochain complex of $\mathcal O_{X,x}$-modules, testing against all acyclic complexes of $\mathcal O_{X,x}$-modules with tensor over $\mathcal O_{X,x}$. K-flat complexes are closed under cochain shifts, mapping cones and $T_X$, and include all bounded-above complexes of flat modules and the tensor unit $\mathcal O_X[0]$ (the structure sheaf in degree zero and zero elsewhere). Here shifts and cones have the cochain conventions of $D(\mathcal A_X)$, and bounded above means vanishing in all sufficiently large degrees. For K-flat $P$, $T_X(-,P)$ preserves quasi-isomorphisms. For any complex $N$, $T_X(N,-)$ preserves quasi-isomorphisms between K-flat complexes. Write $D(\mathcal O_X)=D(\mathcal A_X)$ for the ordinary unbounded derived category. Its derived tensor $E\otimes_{\mathcal O_X}^{\mathbf L}F$ is computed by $T_X(P,Q)$ for K-flat representatives $P\to E$ and $Q\to F$.

For every morphism of ringed spaces $f:(X,\mathcal O_X)\to(Y,\mathcal O_Y)$, the module pullback $f^*G=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}G$ goes from $\mathcal A_Y$ to $\mathcal A_X$. Applied degreewise it preserves K-flatness and quasi-isomorphisms between K-flat complexes, and computes $Lf^*:D(\mathcal O_Y)\to D(\mathcal O_X)$. For another morphism $g:Y\to Z$ there is the usual natural isomorphism $Lf^*\circ Lg^*\cong L(g\circ f)^*$. For $E,F\in D(\mathcal O_Y)$ there is the canonical bifunctorial isomorphism $Lf^*(E\otimes_{\mathcal O_Y}^{\mathbf L}F)\cong Lf^*E\otimes_{\mathcal O_X}^{\mathbf L}Lf^*F$.

### Statement references
[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-ringed-space](https://alphabetamath.cc/item/def-ringed-space)

[math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)

[math:def-morphism-ringed-spaces](https://alphabetamath.cc/item/def-morphism-ringed-spaces)

[math:thm-abelian-sheaves-form-abelian-category](https://alphabetamath.cc/item/thm-abelian-sheaves-form-abelian-category)

[math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[math:def-exactness-of-a-complex-at-a-degree-and-acyclic-complex](https://alphabetamath.cc/item/def-exactness-of-a-complex-at-a-degree-and-acyclic-complex)

[math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism)

[math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product)

[math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)

[math:def-exact-functor-between-abelian-categories](https://alphabetamath.cc/item/def-exact-functor-between-abelian-categories)

[math:def-direct-sum-total-complex-of-a-double-complex](https://alphabetamath.cc/item/def-direct-sum-total-complex-of-a-double-complex)

[math:def-tensor-product-total-complex-of-chain-complexes](https://alphabetamath.cc/item/def-tensor-product-total-complex-of-chain-complexes)

[math:def-bounded-bounded-below-and-bounded-above-complex](https://alphabetamath.cc/item/def-bounded-bounded-below-and-bounded-above-complex)

[math:def-natural-isomorphism](https://alphabetamath.cc/item/def-natural-isomorphism)

### Source contract
**Given:** The two universes, arbitrary ringed spaces, their module-sheaf cochain complexes, morphisms of ringed spaces, and AC, as typed in the Statement.

**Goal:** Import exactly the classical K-flat resolution, tensor and pullback machinery needed for a separate enhanced construction.

[A1] AC is retained for the arbitrary resolution choices in [F1] and [F2], including a K-flat replacement for each complex in the chosen universe. Universe existence is an explicit size convention, not a consequence of AC. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[F0] The module-sheaf category is abelian by [math:thm-abelian-sheaves-form-abelian-category](https://alphabetamath.cc/item/thm-abelian-sheaves-form-abelian-category). Stacks Lemma 17.3.2(2) and its preceding direct-sum construction give the required coproducts as sheafifications of sectionwise module sums. The tensor total is the direct-sum total of the double complex with horizontal differential $d_P\otimes1$ and signed vertical differential $(-1)^i1\otimes d_Q$ in bidegree $(i,j)$; these differentials anticommute. Use [math:def-direct-sum-total-complex-of-a-double-complex](https://alphabetamath.cc/item/def-direct-sum-total-complex-of-a-double-complex) with $C_{a,b}=P^{-a}\otimes_{\mathcal O_X}Q^{-b}$ to translate its homological convention. The analogous total on stalk modules uses [math:def-tensor-product-total-complex-of-chain-complexes](https://alphabetamath.cc/item/def-tensor-product-total-complex-of-chain-complexes), reindexed by $C_n=C^{-n}$.

[F1] Stacks Section 20.26, at the first source contract, supplies the resolution, stalk test, shift/cone/tensor closure, quasi-isomorphism preservation and derived-tensor construction used here. In particular, Lemma 20.26.12 supplies the flat-term K-flat resolution; Lemma 20.26.13 concerns tensoring a quasi-isomorphism between K-flat complexes with an arbitrary complex. These are imported results, not local reconstruction of the unbounded resolution proof.

[F2] Stacks Section 20.27, construction and Lemmas 20.27.1–3, together with Lemma 20.26.8, supplies degreewise pullback on K-flat complexes, its preservation of their quasi-isomorphisms, and both classical comparison isomorphisms. Source and target are $\mathcal O_Y$- and $\mathcal O_X$-module complexes, respectively. [math:def-morphism-ringed-spaces](https://alphabetamath.cc/item/def-morphism-ringed-spaces) [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)

[F3] Flat sheaf means exactness of the stated tensor functor, as in Stacks Definition 17.17.1. [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space) [math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product) [math:def-exact-functor-between-abelian-categories](https://alphabetamath.cc/item/def-exact-functor-between-abelian-categories)

### External input
Import [F0]–[F3] at the four precise source contracts above, with their hypotheses and reading limits. The direct-sum total differential and its Koszul symmetry $p\otimes q\mapsto(-1)^{ij}q\otimes p$ use the displayed sheaf tensor over $\mathcal O_X$, with homogeneous degrees $i,j$. No termwise flatness is assumed of a general K-flat complex; flat terms are part of the supplied replacement and bounded-above hypotheses.

The category of $\mathcal U$-small sheaves is encoded by section sets and structure maps indexed by the $\mathcal U$-small set of opens. These encodings and their integer-indexed complexes form sets in $\mathcal V$. Thus the ordinary derived category is interpreted using the small-category alternative in [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category), measured in $\mathcal V$; no unsupported assertion of $\mathcal U$-small derived Hom sets is required. The universe convention does not impose a geometric restriction. The ringed-space input includes the underlying ringed spaces of schemes.

Only the classical derived-category assertions are imported here. Their comparison isomorphisms alone do not supply an infinity-coherent enhancement; that construction remains the responsibility of the separate enhanced-localization and coherent-family helpers. Lemma 20.26.7 remains unused.


## External localization of one marked scheme and tensor family

[Open item](item-thm-author-c5bc2838d897-kcoherent-enhanced-localization-input) · level 0

### Statement
Assume AC and suitable universes. Hinich's localization L:Cat_∞^+→Cat_∞ is a functor with a natural localization map. For a marked cocartesian fibration p:(E,V)→(B,W) satisfying Definition 2.1.1, its localization is a cocartesian fibration L(E,V)→L(B,W), with fibers the localized original fibers (Proposition 2.1.4). The four hypotheses are: p is cocartesian; cocartesian lifts of W are marked; all fiber transports preserve markings; and transports over W induce equivalences of localized fibers. Markings are saturated. For a symmetric monoidal cocartesian fibration over Fin_*, if every active transport preserves its componentwise marking, Proposition 3.2.2 gives a symmetric monoidal localization, with the full universal property for symmetric monoidal functors.

The nerve of an ordinary Grothendieck opfibration is a cocartesian fibration (dual of HTT Remark 2.4.2.2). Cocartesian fibrations classify coherent diagrams, as in Hinich §2.1.5–2.1.6/HTT straightening. These facts apply to a single family over a product base, and thus retain coherence in all base variables simultaneously.

For the fiber comparison, retain these formal inputs: the symmetric monoidal relative localization theorem of BGT Proposition 3.5; HA Proposition 1.3.4.5 identifying chain-homotopy localization with the dg nerve under finite-chain-interval closure; HA Proposition 1.3.2.10 and its following paragraph giving stability for full shift/cone-closed complex subcategories; and Drew Theorem 1.3 identifying stable Verdier quotients with localization at the maps whose cones lie in the subcategory.

### Definition
**Size and scheme convention.** Fix nested Grothendieck universes containing $\omega$, large enough that every category being localized is small in the next universe. Their existence is an additional size assumption, not a consequence of AC. Here $\operatorname{Sch}_{qcqs}$ has all quasi-compact quasi-separated schemes in the fixed universe and all scheme morphisms between them.

**Complex convention.** Use unbounded complexes in an additive category and its cochain homotopies; convert chain notation by $C_n=C^{-n}$. A homotopy equivalence has an inverse up to chain homotopy; a quasi-isomorphism induces isomorphisms on all homology objects when the category is abelian. In cochain notation $C[1]^n=C^{n+1}$ with differential $-d_C$, and $\operatorname{Cone}(f)^n=D^n\oplus C^{n+1}$ with differential $(y,x)\mapsto(d_Dy+f(x),-d_Cx)$. The finite chain interval is free on two degree-zero vertices and one degree-one edge whose boundary is the second vertex minus the first; tensor with it uses finite sums and the total differential. These are the interval, shift and cone conventions in HA Proposition 1.3.4.5 and Remark 1.3.2.17.

**Higher categories and families.** Use HTT Definition 1.1.2.4 (inner-horn infinity-categories), Section 1.2.4 (equivalences), and Definition 3.0.0.1 ($\operatorname{Cat}_\infty$). Functors are simplicial maps; $\operatorname{Fun}(C,D)$ is the simplicial exponential. The ordinary nerve has strings of composable arrows as its simplices. Cocartesian edges and fibrations mean the duals of HTT Definitions 2.4.1.1 and 2.4.2.1; transport is induced by cocartesian lifts. Fibers are taken in the infinity-categorical sense; Hinich Definition 2.1.3 allows equivalent cocartesian presentations. A coherent diagram over $B$ means a functor $B\to\operatorname{Cat}_\infty$.

**Ordinary opfibration.** For a functor $p:E\to B$, an arrow $a:e\to e'$ above $u:b\to b'$ is opcartesian if every arrow $h:e\to z$ above $vu$, for any $v:b'\to p(z)$, factors uniquely as $h=ka$ with $p(k)=v$. It is an opfibration when such an $a$ exists for every $e$ and every $u$ starting at $p(e)$. A covariant pseudofunctor assigns categories $F(b)$ and functors $F(u)$ with invertible unit/composition comparisons satisfying unit and associativity coherence. Its ordinary Grothendieck construction has pairs $(b,x)$ as objects and pairs $(u,F(u)x\to y)$ as arrows; composition uses those comparisons. The coherence equations give associativity and identities. This is the ordinary convention in the dual of HTT Remark 2.4.2.2.

**Marked localization.** A marked category $(C,W)$ has specified arrows $W$; saturation means that $W$ is the inverse image of equivalences under some functor. Use Hinich Section 1.1.2 for $\operatorname{Cat}_\infty^+$ and localization: functors from $L(C,W)$ correspond to functors from $C$ taking $W$ to equivalences. For an ordinary relative category, apply this to its nerve and its chosen weak-equivalence subcategory.

**Tensor convention.** $\mathrm{Fin}_*$ consists of finite pointed sets $\langle n\rangle=\{*,1,\ldots,n\}$ and pointed maps. Active means that only the basepoint maps to the basepoint; inert means each nonbasepoint in the target has exactly one preimage. Symmetric monoidal infinity-categories and their functors have HA Definition 2.0.0.7 and Hinich Definition 3.2.1 conventions. In particular, the inert projections identify the $\langle n\rangle$ fiber with the $n$th power of the $\langle1\rangle$ fiber, including the terminal nullary fiber. Componentwise marking uses these identifications. For BGT's ordinary symmetric monoidal categories, a lax symmetric monoidal functor has coherent unit/product comparisons compatible with the symmetry; weakly symmetric monoidal means those comparisons are weak equivalences.

**Stable and dg convention.** Use HA Definitions 1.1.1.9 and 1.3.1.1 and Construction 1.3.1.6 for stability, dg categories and the dg nerve, respectively. Cofibers are pushouts along the map to zero; exact functors preserve zero and finite limits and colimits. The stable Verdier quotient has Drew Definition 1.1's universal property among exact functors annihilating the subcategory. This is the stable quotient, with no additional idempotent completion asserted.

**Sheaf application convention.** $\operatorname{Mod}(\mathcal O_X)$ means all Zariski module sheaves, without a quasicoherence restriction. Tensor of complexes is direct-sum total tensor of sheaf tensor products, with $d(p\otimes q)=dp\otimes q+(-1)^i p\otimes dq$ for $p$ of degree $i$. A complex is acyclic when all its cohomology sheaves vanish. It is K-flat when its total tensor with every acyclic module-sheaf complex is acyclic (Stacks Definition 20.26.2). Degreewise pullback applies $f^*M=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}M$ in every degree. These conventions specify the application objects; the consumers still owe the closure and preservation hypotheses of the imported theorems.

### Definition references
[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-chain-homotopy-equivalence](https://alphabetamath.cc/item/def-chain-homotopy-equivalence)

[math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-complex-homotopy-and-contractibility-in-an-additive-category](https://alphabetamath.cc/item/def-complex-homotopy-and-contractibility-in-an-additive-category)

[math:def-symmetric-monoidal-category](https://alphabetamath.cc/item/def-symmetric-monoidal-category)

[math:def-lax-strong-and-strict-monoidal-functor](https://alphabetamath.cc/item/def-lax-strong-and-strict-monoidal-functor)

[math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)

[math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product)

[math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)

[Higher categorical definitions and opfibrations (HTT)](https://www.math.ias.edu/~lurie/papers/HTT.pdf)

[Stable, dg and symmetric monoidal definitions (HA)](https://www.math.ias.edu/~lurie/papers/HA.pdf)

[Marked localization conventions (Hinich)](https://arxiv.org/pdf/1311.4128v4)

[Stable quotient convention (Drew)](https://arxiv.org/pdf/1511.08287v1)

[K-flat convention (Stacks)](https://stacks.math.columbia.edu/tag/06Y7)

### Source contract
**Given:** Marked cocartesian families satisfying all four explicit conditions, tensor-stable markings for the monoidal assertion, and the interval/stability conditions for the separate fiber comparison. Use larger universes for the categories of schemes and sheaf complexes.

**Goal:** Import a genuine coherent family-localization theorem, rather than only pointwise localization statements.

[A1] Retain [AC](https://alphabetamath.cc/item/def-axiom-of-choice) for choices of representatives, cocartesian lifts and localization presentations in the imported constructions. The size assumption supplies the chosen larger universes; AC does not supply their existence. No minimal-choice assertion is made.

[F1] Hinich Definition 2.1.1 and Proposition 2.1.4 supply the family theorem and its compatibility with the functorial localization map of §1.1.

[F2] Hinich Definition 3.2.1/Proposition 3.2.2 supply the symmetric monoidal universal property; HTT Remark 2.4.2.2 and family classification supply the ordinary-opfibration and coherent-diagram bridge.

[F3] The precise BGT, HA and Drew results in the frontmatter supply the formal fiber comparisons; no field-dependent dg monoidal nerve theorem is used.

### External input
Import [F1]–[F3] with the stated hypotheses and reading limits. For the intended application, take $\operatorname{Sch}_{qcqs}^{op}\times\mathrm{Fin}_*$ as base, marked only by equivalences, and componentwise quasi-isomorphisms as the fiber markings.

If a consumer constructs the total Grothendieck category over this base and verifies saturation, all four marked-cocartesian conditions, the symmetric monoidal Segal and unit conditions on each scheme fiber, and preservation of markings by active tensor transports, then the imported theorems give one localized cocartesian family, hence one coherent diagram in the scheme and tensor variables simultaneously.

Identifying its localized fibers with supplied enhancements additionally requires the consumer to establish the relevant fiber comparisons under the hypotheses of the formal inputs above. The general imports alone do not establish the application construction, its hypothesis checks or those identifications. A natural comparison with a separately specified pullback/tensor diagram would require further data and verification; when no such diagram has been specified, no such comparison is asserted.


## External full-subcategory localization criterion

[Open item](item-thm-author-c5bc2838d897-kflat-addendum-verdier-criterion) · level 0


### Statement
Assume AC and the size convention below. Let $D$ be a pretriangulated category, $D'\subseteq D$ a full pretriangulated subcategory, and $S$ a saturated multiplicative system compatible with the triangulated structure. If every $X\in D$ receives $s:X'\to X$ in $S$ with $X'\in D'$, then $S'=S\cap\operatorname{Arrows}(D')$ is a saturated compatible multiplicative system and $(S')^{-1}D'\to S^{-1}D$, induced by inclusion, is an exact equivalence. This conclusion includes full faithfulness, not merely essential surjectivity.

For the intended application, if $A$ is any abelian category subject to that size convention, $S=\operatorname{Qis}(A)$ in $K(A)$ is a saturated compatible multiplicative system and $S^{-1}K(A)=D(A)$. For a right multiplicative system, roofs and their common-refinement equivalence compute the localization; equivalently, Hom in the localization is the filtered colimit over denominators into the source.

### Statement references
[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category)

[math:def-homotopy-category-of-chain-complexes](https://alphabetamath.cc/item/def-homotopy-category-of-chain-complexes)

[math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:def-localization-of-a-category-at-a-class-of-morphisms](https://alphabetamath.cc/item/def-localization-of-a-category-at-a-class-of-morphisms)

[Full-subcategory criterion, Stacks Lemma 13.5.8](https://stacks.math.columbia.edu/tag/0GSL)

[Quasi-isomorphism system, Stacks Lemma 13.11.2](https://stacks.math.columbia.edu/tag/05RT)

[Derived localization, Stacks Definition 13.11.3](https://stacks.math.columbia.edu/tag/05RU)

[Localized Hom formula, Stacks Remark 4.27.15](https://stacks.math.columbia.edu/tag/05Q4)

### Definition
The size convention is relative to a fixed larger working universe: the objects and arrows of every ordinary category in a localization or Hom formula, and each denominator diagram, form sets there. Thus these categories and diagrams are small there, and the Hom sets and colimits asserted here are sets in that universe. For categories of all sheaves or complexes from an initial universe, choose the larger universe to contain their object and arrow collections as sets. No claim of small Hom sets in the initial universe for an arbitrary unbounded derived category is made. AC permits set-indexed choices of representatives and quasi-inverse data in the working universe; no choice over a proper class there is used.

A pretriangulated category means a category with additive translation and a specified class of triangles satisfying exactly TR1, TR2 and TR3. Translation includes a chosen inverse and coherence for integer shifts; triangles have the form $X\to Y\to Z\to X[1]$. A full pretriangulated subcategory has the ambient Hom sets between its objects and inherited translation and distinguished-triangle structure, itself satisfying these three axioms. No octahedral axiom is imposed. An exact functor is an additive functor $F$ with a specified natural isomorphism $F(X[1])\cong F(X)[1]$ carrying distinguished triangles to distinguished triangles, using that isomorphism on the last arrow. An exact equivalence is such a functor that is an equivalence of ordinary categories.

A multiplicative system is the two-sided system of identities, composites, Ore squares and cancellation in the cited library definition. A right multiplicative system requires only the right-hand fraction conditions: identities and composites lie in $S$; for $f:U\to Y$ and $s:V\to Y$ with $s\in S$ there are $t:W\to U$ in $S$ and $g:W\to V$ with $ft=sg$; if $f,g:X\to Y$ and $s:Y\to Z$ in $S$ satisfy $sf=sg$, some $t:W\to X$ in $S$ satisfies $ft=gt$. A two-sided system is saturated when, for composable $f,g,h$, membership of both $fg$ and $gh$ in $S$ implies $g\in S$. Compatibility means $f\in S$ if and only if $f[1]\in S$, and every commuting square on the first two objects of distinguished triangles whose two vertical arrows lie in $S$ extends to a morphism of triangles with third vertical arrow also in $S$.

The notation $S^{-1}C$ means the same-object localization with its universal functor $Q_C:C\to S^{-1}C$ inverting $S$. For the pretriangulated localizations in the criterion, translation is induced by that of $C$, the shift comparison for $Q_C$ is the identity, and distinguished triangles are precisely triangles isomorphic to images of distinguished triangles of $C$. The functor in the Statement is the factorization of $D'\hookrightarrow D\xrightarrow{Q_D}S^{-1}D$ through $Q_{D'}$, with the induced shift comparison. Existence of these structures and exactness are part of the imported localization results, not an inference from the universal property alone.

For an abelian category $A$, use unbounded cochain complexes, with $K(A)$ the chain homotopy category reindexed by $C^n=C_{-n}$, and with the usual cone triangles. A quasi-isomorphism induces an isomorphism on every cohomology object; $\operatorname{Qis}(A)$ denotes their homotopy classes in $K(A)$. Put $D(A)=\operatorname{Qis}(A)^{-1}K(A)$. A complex is acyclic when all its cohomology objects vanish.

A right roof from $X$ to $Y$ is $X\xleftarrow{s}Q\xrightarrow{a}Y$ with $s\in S$. A common refinement of two such roofs consists of $u_i:R\to Q_i$ with $s_1u_1=s_2u_2\in S$ and $a_1u_1=a_2u_2$; the $u_i$ need not themselves lie in $S$. The denominator category $S/X$ has objects $s:Q\to X$ in $S$ and arrows from $s$ to $t:R\to X$ given by $u:Q\to R$ with $tu=s$. Cofiltered means that the opposite category is filtered. The functor on $(S/X)^{\mathrm{op}}$ sends $s:Q\to X$ to $\operatorname{Hom}_C(Q,Y)$, with transition maps given by precomposition. Its colimit is the ordinary set-valued filtered colimit; the claim that it computes localized Hom, including the asserted common-refinement equality, is imported below.

For the additional imported adjunction, a simplicial set $T$ is a functor $\Delta^{\mathrm{op}}\to\mathrm{Set}$, with face maps $d_i$ and degeneracies $s_i$. The ordinary nerve of $B$ has $N(B)_n=\operatorname{Fun}([n],B)$, where $[n]$ is the ordered category on $0,\ldots,n$, and simplicial operators act by precomposition. The ordinary category $hT$ has the vertices of $T$ as objects and is generated by its directed edges, subject to $d_0(\sigma)\circ d_2(\sigma)=d_1(\sigma)$ for each $2$-simplex $\sigma$ and to each degenerate edge $s_0(x)$ being the identity. Morphisms are finite edge paths modulo the smallest composition-compatible equivalence relation generated by these relations. Composition is induced by concatenation, with empty paths as identities; associativity and identities descend to the quotient. Thus this construction specifies an ordinary category. This is the underlying ordinary homotopy-category convention in the imported proposition. The adjunction $h\dashv N$ means a bijection $\operatorname{Fun}(hT,B)\cong\operatorname{Hom}_{\mathrm{sSet}}(T,N(B))$, natural in $T$ and $B$; here $\operatorname{Fun}$ denotes the set of ordinary functors and the right side the set of simplicial maps.

### Definition references
[math:def-category-with-translation](https://alphabetamath.cc/item/def-category-with-translation)

[math:def-triangle-in-a-category-with-translation](https://alphabetamath.cc/item/def-triangle-in-a-category-with-translation)

[math:def-triangulated-category-axiom-tr-one](https://alphabetamath.cc/item/def-triangulated-category-axiom-tr-one)

[math:def-triangulated-category-axiom-tr-two](https://alphabetamath.cc/item/def-triangulated-category-axiom-tr-two)

[math:def-triangulated-category-axiom-tr-three](https://alphabetamath.cc/item/def-triangulated-category-axiom-tr-three)

[math:def-equivalence-and-adjoint-equivalence-of-categories](https://alphabetamath.cc/item/def-equivalence-and-adjoint-equivalence-of-categories)

[math:def-multiplicative-system-in-a-category](https://alphabetamath.cc/item/def-multiplicative-system-in-a-category)

[math:def-filtered-category-and-filtered-colimit](https://alphabetamath.cc/item/def-filtered-category-and-filtered-colimit)

[math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)

[Pretriangulated convention, Stacks Definition 13.3.2](https://stacks.math.columbia.edu/tag/0145)

[Compatibility, Stacks Definition 13.5.1](https://stacks.math.columbia.edu/tag/05R2)

[Saturation, Stacks Definition 4.27.20](https://stacks.math.columbia.edu/tag/05Q8)

[Right multiplicative systems and fractions, Stacks Section 4.27](https://stacks.math.columbia.edu/tag/04VB)

[Localized pretriangulated structure, Stacks Proposition 13.5.6](https://stacks.math.columbia.edu/tag/05R6)

[Exact factorization, Stacks Lemma 13.5.7](https://stacks.math.columbia.edu/tag/05R7)

[Ordinary nerve and homotopy category, HTT Proposition 1.2.3.1 and following presentation](https://www.math.ias.edu/~lurie/papers/HTT.pdf)

### Source contract
**Given:** $D,D',S$ with exactly the hypotheses in the Statement and the explicit size and formulation conventions above.

**Goal:** Import the precise localization criterion and the actual Hom-set/equality description used in its application.

[F1] Stacks Lemma 13.5.8 gives the exact equivalence under those hypotheses. Proposition 13.5.6 and Lemma 13.5.7 supply the pretriangulated localizations and exact factorization used in its formulation.

[F2] Stacks Lemma 13.11.2 and Definition 13.11.3 give the saturated compatible quasi-isomorphism system in $K(A)$ and the classical derived localization $D(A)$, with the size convention above.

[F3] Stacks Section 4.27 right calculus, Lemmas 4.27.11, 4.27.13 and 4.27.14, and Remark 4.27.15 give well-defined roof localization, common-refinement equality, and the formula $\operatorname{Hom}_{S^{-1}C}(X,Y)=\operatorname*{colim}_{(s:Q\to X)\in(S/X)^{\mathrm{op}}}\operatorname{Hom}_C(Q,Y)$. In particular $S/X$ is cofiltered.

[F4] HTT Proposition 1.2.3.1 states the adjunction $h\dashv N$ in the precise ordinary-category/simplicial-set sense defined above. Its formal application to the localization universal property is made in the local consumer; it is not attributed verbatim as an additional source theorem.

### External input
Import [F1]–[F4] with the statements, hypotheses, locators and reading limits in the four corresponding source records. The three additional definition records fix the pretriangulated, compatibility and saturation conventions. The proof of [F1] uses the denominator-colimit formula for full faithfulness. The replacement hypothesis applies to every ambient object. No projectivity or orthogonality hypothesis is added, and no K-flat object is asserted K-projective.


## External straightening and symmetric monoidal criteria

[Open item](item-thm-author-c5bc2838d897-monoidal-transport-straightening-input) · level 0


### Statement
For any infinity-category $D$, straightening gives an equivalence $\mathrm{Coc}(D)\simeq\mathrm{Fun}(D,\mathrm{Cat}_\infty)$, where $\mathrm{Coc}(D)$ has cocartesian fibrations as objects and functors over $D$ preserving cocartesian arrows as morphisms. Functor categories satisfy exponential currying $\mathrm{Fun}(B\times S,\mathrm{Cat}_\infty)\simeq\mathrm{Fun}(B,\mathrm{Fun}(S,\mathrm{Cat}_\infty))$.

For $S=N(\mathrm{Fin}_*)$, a cocartesian fibration $C^\otimes\to S$ is a symmetric monoidal infinity-category exactly when its inert maps $\rho_i:\langle n\rangle\to\langle1\rangle$ give $C_n\simeq C_1^n$ for every $n\geq0$, with $C_0$ terminal. Maps over $S$ preserving all cocartesian arrows are strong symmetric monoidal functors, including equivalence of their tensor and unit comparisons.

Let $f:(C,V)\to(D,W)$ satisfy all four conditions of Hinich Definition 2.1.1, with saturated markings, and let $F^+:D\to\mathrm{Cat}_\infty^+$ classify its marked fibers. The composite $L\circ F^+:D\to\mathrm{Cat}_\infty$ sends $W$ to equivalences and extends to $\overline F:L(D,W)\to\mathrm{Cat}_\infty$. The localized family $L(C,V)\to L(D,W)$ is the unstraightening of $\overline F$. Its pullback to $D$ is classified by $L\circ F^+$ and has the localized fibers. These are constructions of whole cocartesian families and their localization map. If $W$ consists of equivalences, $L(D,W)\simeq D$, giving the original-base special case. The explicit marked-cocartesian hypotheses and, in the monoidal application, preservation of componentwise markings by active tensor transports remain required.

### Source contract
**Given:** Categories in fixed suitable universes, genuinely cocartesian families, and the stated Segal and marking conditions where used.

**Goal:** Import the standard family/functor dictionary and exact strong monoidal criterion.

[F1] Hinich §2.1.5, equation (31), supplies Coc(D)≃Fun(D,Cat∞) with cocartesian-preserving maps. Its §2.2.2–2.2.6 proves the actual family-localization assertion.

[F2] HTT Notation 1.2.7.2 and Proposition 1.2.7.3 supply functor infinity-categories; currying is their defining simplicial exponential identity.

[F3] HA Definition 2.0.0.7 and Definition 2.1.3.7 supply precisely the Segal and strong symmetric monoidal conditions, including the nullary unit.

### Facts & Assumptions
[F4] [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration) supplies simplicial sets, standard simplices $\Delta[n]$, and degreewise products and pullbacks. [math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration) supplies horns $\Lambda^i[n]$ and the horn-filling meaning of Kan complexes. All categories and simplicial sets are small in a fixed universe when required; their categories of objects are taken in a larger compatible universe.

[F5] In the HTT conventions cited in source reference 2, an **infinity-category** is a simplicial set $C$ in which every $\Lambda^i[n]\to C$ with $0<i<n$ extends to $\Delta[n]$. Its objects and arrows are vertices and edges; identities are degenerate edges. A functor is a simplicial map. An edge $e$ is an **equivalence** precisely when every outer-horn map $\Lambda^0[n]\to C$, $n\geq2$, whose first edge is $e$ extends to $\Delta[n]$ (HTT Proposition 1.2.4.3). Put $\mathrm{Fun}(K,C)_m=\operatorname{Hom}_{\mathrm{sSet}}(K\times\Delta[m],C)$, with simplicial operators induced from $\Delta[m]$; for an infinity-category $C$ this is an infinity-category (HTT Proposition 1.2.7.3). Its edges and equivalence edges are natural transformations and natural equivalences. The **core** $C^\simeq$ is its largest Kan subcomplex, consisting of simplices all of whose edges are equivalences (HTT Proposition 1.2.5.3 and its following paragraph).

[F6] The ambient $\mathrm{Cat}_\infty$ in source reference 2 is the coherent nerve of the simplicial category whose objects are small infinity-categories and whose mapping simplicial sets are $\mathrm{Fun}(C,D)^\simeq$, with composition induced by composition of functors (HTT Definition 3.0.0.1). Here a simplicial category has simplicial sets of morphisms and associative unital simplicial composition. Explicitly, let $Q^n$ have objects $0,\ldots,n$, empty morphism simplicial sets for $i>j$, and $\operatorname{Map}_{Q^n}(i,j)=N(P_{ij})$ for $i\leq j$, where $P_{ij}$ is the inclusion-ordered set of subsets of $\{i,\ldots,j\}$ containing both endpoints; composition is induced by union and identities by singleton subsets. The ordinary nerve $N(A)_m$ consists of strings of $m$ composable arrows in the category $A$. The coherent nerve has $n$-simplices the simplicial functors $Q^n\to A$; simplicial operators use direct images of subsets under monotone maps. This is the construction of HTT Definitions 1.1.5.1, 1.1.5.3 and 1.1.5.5. Its infinity-category property for Kan mapping simplicial sets is imported from Proposition 1.1.5.10. Equivalences of infinity-categories mean equivalence edges in this $\mathrm{Cat}_\infty$; a terminal infinity-category means one equivalent to $\Delta[0]$.

[F7] In source reference 2, an **inner fibration** $p:E\to D$ has the relative lifting property against every $\Lambda^i[n]\hookrightarrow\Delta[n]$ with $0<i<n$. For such $p$, an edge $e$ of $E$ is **$p$-cocartesian** when every compatible pair $\Lambda^0[n]\to E$, $\Delta[n]\to D$ with first edge $e$ admits a lift $\Delta[n]\to E$, for $n\geq2$. This is the opposite of HTT Remark 2.4.1.4. A **cocartesian fibration** is an inner fibration for which every arrow $u:d\to d'$ and every $x$ over $d$ have a cocartesian lift starting at $x$ (the opposite of Definition 2.4.2.1). Its fiber is $E_d=E\times_D\{d\}$. The transport $u_!:E_d\to E_{d'}$ and its coherences are those furnished by the imported straightening equivalence [F1], not additional independently chosen pointwise functors. As in Hinich Definition 2.1.3 (source reference 0), the same family in $\mathrm{Cat}_\infty$ may be represented up to equivalence by such a simplicial cocartesian fibration; pullbacks of families are understood in $\mathrm{Cat}_\infty$.

[F8] Source reference 0, §1.1.2–1.1.3, supplies **marked infinity-categories** $(C,V)$, where $V$ is a collection of arrows. A marking is **saturated** if $V$ is the inverse image of equivalence arrows under some functor $C\to T$. Thus $V$ determines a wide subcategory of $C$; $\mathrm{Cat}_\infty^+$ is the full subcategory of $\mathrm{Fun}(\Delta[1],\mathrm{Cat}_\infty)$ on these inclusions. Let $K(T)=T^\simeq$ and $\operatorname{Map}(A,T)=\mathrm{Fun}(A,T)^\simeq$. The **localization** $C\to L(C,V)$ has, naturally in $T$, $\operatorname{Map}(L(C,V),T)\simeq\operatorname{Map}(C,T)\times_{\operatorname{Map}(V,T)}\operatorname{Map}(V,K(T))$, where the fiber product is the homotopy pullback of Kan complexes, equivalently the space of functors carrying $V$ to equivalences. Its existence and functorial localization map are imported from §1.1.3. A homotopy pullback here records two points and a path identifying their images, with all higher simplices. For a marking-preserving $f:(C,V)\to(D,W)$, the four conditions of Hinich Definition 2.1.1 are: $f$ is cocartesian; cocartesian lifts of $W$ belong to $V$; every transport preserves the fiber markings; and transport along every arrow of $W$ induces an equivalence of localized fibers. These are all required, with saturated markings. No condition is inferred merely from separate fiberwise localizations.

[F9] In source reference 1, $\mathrm{Fin}_*$ is the category of finite pointed sets and basepoint-preserving maps, with representatives $\langle n\rangle=\{*,1,\ldots,n\}$. A map $\alpha:\langle m\rangle\to\langle n\rangle$ is **inert** if each $\alpha^{-1}(i)$, $1\leq i\leq n$, is a singleton; it is **active** if $\alpha^{-1}(*)=\{*\}$. The projection $\rho_i$ sends $i$ to $1$ and all other elements to $*$. The active fold $\langle n\rangle\to\langle1\rangle$ sends all nonbasepoints to $1$, including the unique map when $n=0$. In a family with the Segal equivalences of the Statement these active transports encode tensor operations and the nullary unit. If its first fiber has a saturated marking $V$, the **componentwise marking** on the $n$th fiber means that an arrow maps to $V$ under every $\rho_i$; at $n=0$ all arrows are marked. These are the fiber markings in Hinich §3.2 (source reference 0). Preservation by every active transport is a hypothesis of the monoidal-localization application. It is distinct from the all-cocartesian-edge preservation required of a strong symmetric monoidal functor in [F3].

### External input
Import [F1]–[F3] and the sourced framework [F5]–[F9] with the frontmatter reading limits; [F4] supplies their simplicial syntax. This standard formal input does not supply a product-base family in an application: that must actually have been constructed, with its hypotheses verified. No identification of separately existing functors is part of this import.


## Cofiber and triangle presentations of K zero

[Open item](item-lem-author-3a003d7b5208-triangle-presentation) · level 0


### Statement
Let $\mathcal C$ be a small stable infinity-category. Its cofiber Grothendieck group, generated by equivalence classes of objects with $[Y]=[X]+[Z]$ for every cofiber sequence $X\to Y\to Z$, is canonically the triangle Grothendieck group of its homotopy category $h\mathcal C$, generated by isomorphism classes with the same relation for every distinguished triangle. The identification sends each object class to the class of that same object.

We use the quasicategory model: an infinity-category is a simplicial set in which every map $\Lambda_i[n]\to\mathcal C$ extends over $\Delta[n]$ for $0<i<n$, where the inner horn $\Lambda_i[n]$ is the union of all faces except the $i$th. Small means that the simplices form sets in the fixed universe. A pointed infinity-category has a zero object $0$, both initial and final. Stability means that it admits finite limits and colimits and that a square is a pushout if and only if it is a pullback. Here limits and colimits use coherent cones in the infinity-category, rather than limits or colimits in its homotopy category.

A cofiber sequence includes a coherent pushout square with top row $X\to Y$ and bottom row $0\to Z$; thus $Z\simeq Y\sqcup_X0$, with its indicated maps and nullhomotopy. Write $X[1]=\Sigma X\simeq0\sqcup_X0$. Extend the cofiber square by a second pushout square with top row $Y\to0$ and bottom row $Z\to W$. The outer rectangle identifies $W\simeq X[1]$, and the connecting morphism is the homotopy class of $Z\to W\simeq X[1]$. The imported triangulation theorem gives $h\mathcal C$ its induced triangulated structure: its distinguished triangles are exactly the diagrams isomorphic to these cofiber triangles $X\to Y\to Z\to X[1]$. These constructions are interpreted up to equivalence, so no presentation depends on a particular pushout representative.

The homotopy category has the same objects and morphisms $\pi_0\operatorname{Map}_{\mathcal C}(X,Y)$, equivalently homotopy classes of edges, with composition induced by composition in $\mathcal C$. An edge is an equivalence precisely when its image in $h\mathcal C$ is an isomorphism. For a set $S$, write $\mathbb Z[S]$ for the free abelian group on $S$. Each group above is the quotient of the corresponding free group by the subgroup generated by $[Y]-[X]-[Z]$ for its specified sequences or triangles. Smallness ensures that both presentations use sets.

### Statement references
[math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)

[math:def-triangulated-grothendieck-group](https://alphabetamath.cc/item/def-triangulated-grothendieck-group)

[math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)

### External input
Only the higher-categorical premises below are imported. The comparison of the two group presentations is proved locally.

Source 0: [Lurie, Higher Algebra](https://people.math.harvard.edu/~lurie/papers/HA.pdf), Definition 0.0.0.1; Definitions 1.1.1.1, 1.1.1.4 and 1.1.1.6, Remark 1.1.1.7 and Proposition 1.1.3.4 supply the quasicategory, pointedness, cofiber and stability conventions above, including independence of cofiber representatives. The exact statements, hypotheses and reading limits are recorded in reference 0.

Source 1: [Lurie, Higher Algebra](https://people.math.harvard.edu/~lurie/papers/HA.pdf), the suspension construction before Notation 1.1.2.7, Definition 1.1.2.11, Theorem 1.1.2.14 and Remark 1.1.2.15 supply suspension, the two-pushout connecting map and the induced triangulation. The theorem assumes a pointed infinity-category with cofibers and invertible suspension; the remark states that every stable infinity-category satisfies those hypotheses. This substantial theorem is used as an external premise, not proved here. The exact scope and reading limits are recorded in reference 1.

Source 2: [Lurie, Higher Topos Theory](https://people.math.harvard.edu/~lurie/papers/HTT.pdf), Section 1.2.2, Propositions 1.2.3.5 and 1.2.3.9, the opening of Section 1.2.4, and Definition 1.2.13.4 with Remark 1.2.13.5 supply the mapping-space/homotopy-category conventions, edge representability, the equivalence criterion, and coherent limits and colimits. The exact hypotheses and reading limits are recorded in reference 2.

### Facts & Assumptions
**Given:** A small stable infinity-category $\mathcal C$ with the induced triangulated structure supplied by Source 1.

**Goal:** Identify the two presented groups canonically without changing their object-class maps.

[F1] Source 2 gives the same objects in $\mathcal C$ and $h\mathcal C$, and every morphism in $h\mathcal C$ is represented by an edge of $\mathcal C$. Such an edge is an equivalence exactly when its image is an isomorphism.

[F2] Sources 0 and 1 give cofibers, suspension and the induced triangulation. In particular, every cofiber sequence extends to a distinguished triangle, and every distinguished triangle is isomorphic to one so obtained. Stability of the given category discharges the theorem's pointedness, cofiber and invertible-suspension hypotheses.

[F3] The triangle presentation is [math:def-triangulated-grothendieck-group](https://alphabetamath.cc/item/def-triangulated-grothendieck-group). The free groups and quotient groups have the meanings in [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group) and [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group). The simplicial sets and standard simplices in the formulation have the meanings in [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration); the inner horn is defined inline. Smallness makes the object and relation collections sets.

### Proof
**Proof technique:** Compare generators and relations.

1.1 By [F1], equivalent objects of $\mathcal C$ give isomorphic objects of $h\mathcal C$. Conversely an isomorphism in $h\mathcal C$ is represented by an edge, which is an equivalence by the same criterion. The identity on objects therefore gives a bijection of the two class sets, and hence identifies their free abelian groups by [F3]. Denote this common group by $A$. [F1, F3, construct]

2.1 Under this identification, [F2] makes every cofiber relation a distinguished-triangle relation. Conversely a distinguished triangle is isomorphic to a cofiber triangle, so the two triples give the same element $[Y]-[X]-[Z]$ of $A$. The generated relation subgroups are therefore equal, say $R$. Both presented groups are $A/R$ by [F3]. The identity of $A$ induces the mutually inverse maps given by sending each coset to the same coset. They take each object class to itself, which also uniquely determines the identification because object classes generate. [F2, F3, step 1.1] ∎


## Exact equivalences preserve triangle K zero

[Open item](item-lem-author-3a003d7b5208-exact-equivalence-k-zero) · level 0


### Statement
An exact equivalence $F:\mathcal T\to\mathcal U$ of essentially small triangulated categories induces an isomorphism $K_0^{\mathrm{tri}}(\mathcal T)\to K_0^{\mathrm{tri}}(\mathcal U)$, sending $[X]$ to $[F(X)]$. Here $K_0^{\mathrm{tri}}$ is generated by isomorphism classes with $[Y]=[X]+[Z]$ for each distinguished triangle $X\to Y\to Z\to X[1]$. Exact means that $F$ is additive, commutes with translation up to its specified natural isomorphism, and sends distinguished triangles to distinguished triangles using that isomorphism on the last arrow. Equivalence means that an ordinary quasi-inverse functor $G$ and natural isomorphisms $\eta:1_{\mathcal T}\Rightarrow GF$ and $\varepsilon:FG\Rightarrow1_{\mathcal U}$ are supplied; exactness of $G$ is not an additional hypothesis.

### Facts & Assumptions
**Given:** The exact functor $F$ and equivalence data $(G,\eta,\varepsilon)$ in the Statement. The specified quasi-inverse data require no additional choice principle.

**Goal:** Construct inverse homomorphisms on triangle Grothendieck groups without assuming that $G$ is exact.

[F1] A triangulated category has specified translation and distinguished triangles satisfying TR1--TR4; TR1 completes any morphism to a distinguished triangle, and TR3 extends a commuting square on first arrows to a morphism of distinguished triangles. [math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category) [math:def-triangulated-category-axiom-tr-one](https://alphabetamath.cc/item/def-triangulated-category-axiom-tr-one) [math:def-triangulated-category-axiom-tr-three](https://alphabetamath.cc/item/def-triangulated-category-axiom-tr-three)

[F2] An exact functor is additive and has a specified natural translation isomorphism; this is used to form its distinguished image triangles, including their last arrows. [math:def-exact-functor-between-triangulated-categories](https://alphabetamath.cc/item/def-exact-functor-between-triangulated-categories)

[F3] Equivalence supplies the ordinary functor $G$ and the natural isomorphisms $\eta$ and $\varepsilon$ with the displayed directions; the triangle identities of an adjoint equivalence are unnecessary. [math:def-equivalence-and-adjoint-equivalence-of-categories](https://alphabetamath.cc/item/def-equivalence-and-adjoint-equivalence-of-categories)

[F4] For an essentially small triangulated category, $K_0^{\mathrm{tri}}$ is the free abelian group on the set of isomorphism classes modulo the subgroup generated by all distinguished-triangle relations. [math:def-triangulated-grothendieck-group](https://alphabetamath.cc/item/def-triangulated-grothendieck-group)

[F5] An equivalence is fully faithful, meaning that its maps on all hom sets are bijections. This direction of the equivalence criterion is choice-free for supplied quasi-inverse data. [math:thm-fully-faithful-split-essentially-surjective-characterises-equivalence](https://alphabetamath.cc/item/thm-fully-faithful-split-essentially-surjective-characterises-equivalence)

[F6] In a morphism of distinguished triangles, two isomorphism components force the third to be an isomorphism. [math:prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third](https://alphabetamath.cc/item/prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third)

[F7] A function from the generating set of a free abelian group to an abelian group extends uniquely to a homomorphism. [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[F8] A homomorphism annihilating a normal subgroup factors uniquely through the quotient by that subgroup; every subgroup of an abelian group is normal. [math:thm-quotient-group-universal-property](https://alphabetamath.cc/item/thm-quotient-group-universal-property)

### Proof
**Proof technique:** Lift the first arrow of each target triangle and compare its completion, then use the two group presentations.

1.1 Both $F$ and the ordinary functor $G$ preserve isomorphic objects, so they define maps on isomorphism classes. Exactness of $F$ preserves every triangle relation. To check the relations for $G$, take any distinguished triangle $A\xrightarrow u B\to C\to A[1]$ in $\mathcal U$. Fullness gives a morphism $f:G(A)\to G(B)$ with $F(f)=\varepsilon_B^{-1}u\varepsilon_A$. Complete $f$ by TR1 to a distinguished triangle $G(A)\xrightarrow fG(B)\to D\to G(A)[1]$. Its exact image under $F$ and the original triangle have the commuting first-arrow square with isomorphisms $\varepsilon_A$ and $\varepsilon_B$; the image triangle uses the specified translation isomorphism of $F$. TR3 and [F6] give an isomorphism $v:F(D)\to C$. Applying $G$ and composing with $\eta_D$ yields $D\xrightarrow{\eta_D}GF(D)\xrightarrow{G(v)}G(C)$, an isomorphism. The completed triangle therefore gives $[G(B)]=[G(A)]+[G(C)]$ in $K_0^{\mathrm{tri}}(\mathcal T)$. Thus $G$ respects every relation, without an assumed exact structure on $G$. Only an individual triangle completion is used in this verification, not a simultaneous selection of completions. [given, F1, F2, F3, F4, F5, F6, construct]

2.1 Put $P_{\mathcal V}=\mathbb Z[\operatorname{Iso}(\mathcal V)]$ and let $R_{\mathcal V}$ be its subgroup generated by $e_Y-e_X-e_Z$ for distinguished triangles $X\to Y\to Z\to X[1]$, where $e_X$ denotes the free generator of the isomorphism class of $X$ and $\mathcal V$ is $\mathcal T$ or $\mathcal U$. By [F7] the assignments $e_X\mapsto[F(X)]$ and $e_Y\mapsto[G(Y)]$ extend uniquely to homomorphisms $\widetilde F_0:P_{\mathcal T}\to K_0^{\mathrm{tri}}(\mathcal U)$ and $\widetilde G_0:P_{\mathcal U}\to K_0^{\mathrm{tri}}(\mathcal T)$. Step 1.1 shows that these maps send every respective triangle-relation generator to zero in the target Grothendieck group; by additivity they annihilate $R_{\mathcal T}$ and $R_{\mathcal U}$. Thus [F8] factors them through the source quotients $P_{\mathcal T}/R_{\mathcal T}=K_0^{\mathrm{tri}}(\mathcal T)$ and $P_{\mathcal U}/R_{\mathcal U}=K_0^{\mathrm{tri}}(\mathcal U)$ of [F4], giving homomorphisms $F_0:K_0^{\mathrm{tri}}(\mathcal T)\to K_0^{\mathrm{tri}}(\mathcal U)$ and $G_0:K_0^{\mathrm{tri}}(\mathcal U)\to K_0^{\mathrm{tri}}(\mathcal T)$ with the asserted values on object classes. The isomorphisms $\eta_X:X\to GF(X)$ and $\varepsilon_Y:FG(Y)\to Y$ give $G_0F_0([X])=[X]$ and $F_0G_0([Y])=[Y]$. Since these classes generate, both composites are identity homomorphisms. Hence $F_0$ is the asserted isomorphism with inverse $G_0$. [F3, F4, F7, F8, step 1.1, construct] ∎


## Additive equivalences preserve split K zero

[Open item](item-lem-author-3a003d7b5208-split-group-equivalence) · level 0


### Statement
An additive equivalence $F:\mathcal A\to\mathcal B$ of essentially small additive categories induces an isomorphism of their split Grothendieck groups. Here essentially small means that the isomorphism classes form a set, denoted $\operatorname{Iso}(\mathcal D)$ for $\mathcal D=\mathcal A,\mathcal B$. The split Grothendieck group is the abelian group

$$K_0^{\mathrm{split}}(\mathcal D)=\mathbb Z[\operatorname{Iso}(\mathcal D)]/\langle e_{M\oplus N}-e_M-e_N\rangle.$$

The numerator is the free abelian group on the isomorphism classes, $e_M$ denotes its generator for the class of $M$, and the denominator is the subgroup generated by the displayed elements for all objects $M,N$. Write $[M]$ for the image of $e_M$, so $[M\oplus N]=[M]+[N]$. Finite direct sums mean biproducts, including the zero object. An additive equivalence is an equivalence preserving finite direct sums up to isomorphism. The induced isomorphism sends $[M]$ to $[F(M)]$.

### Facts & Assumptions
**Given:** An additive equivalence $F:\mathcal A\to\mathcal B$ of essentially small additive categories, with a quasi-inverse $G$ and natural isomorphisms $1_{\mathcal A}\cong GF$ and $FG\cong1_{\mathcal B}$. Preservation of direct sums by $G$ will be deduced, rather than assumed.

**Goal:** Identify the two split Grothendieck groups by their presentations.

[F1] Additive categories have finite biproducts, and a biproduct is in particular a finite coproduct. [math:def-additive-category](https://alphabetamath.cc/item/def-additive-category) [math:def-biproduct](https://alphabetamath.cc/item/def-biproduct)

[F2] Equivalence data consist of two functors with natural isomorphisms $1_{\mathcal A}\cong GF$ and $FG\cong1_{\mathcal B}$; reversing the data, using inverse natural isomorphisms, makes $G$ an equivalence with quasi-inverse $F$. No triangle identities are required. [math:def-equivalence-and-adjoint-equivalence-of-categories](https://alphabetamath.cc/item/def-equivalence-and-adjoint-equivalence-of-categories)

[F3] The split Grothendieck group has the free abelian group and direct-sum relation subgroup specified in the Statement. Its elements are generated by the classes $[M]$. [math:def-split-grothendieck-group-of-an-additive-category](https://alphabetamath.cc/item/def-split-grothendieck-group-of-an-additive-category)

[F4] A function from the generators of a free abelian group to an abelian group extends uniquely to a homomorphism. A homomorphism annihilating a normal subgroup descends uniquely to the quotient; every subgroup of an abelian group is normal, since conjugation is trivial. [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group) [math:thm-quotient-group-universal-property](https://alphabetamath.cc/item/thm-quotient-group-universal-property)

[F5] An equivalence preserves every existing colimit, in particular every finite coproduct. [math:prop-equivalences-preserve-reflect-and-create-limits-and-colimits](https://alphabetamath.cc/item/prop-equivalences-preserve-reflect-and-create-limits-and-colimits)

### Proof
**Proof technique:** Transport generators and direct-sum relations.

1.1 By [F2], $G$ is an equivalence, so [F5] shows that it preserves finite coproducts, including the empty one. By [F1], $G(M\oplus N)\cong G(M)\oplus G(N)$, and $G$ preserves the zero object up to isomorphism. For either $H=F$ or $H=G$, functoriality preserves isomorphisms and the direct-sum preservation just established (or given for $F$) yields $H(M\oplus N)\cong H(M)\oplus H(N)$. Thus $e_M\mapsto[H(M)]$ is well-defined on isomorphism classes and extends to the free abelian group by [F4]. It kills every generator $e_{M\oplus N}-e_M-e_N$ of the relation subgroup by [F3]. This subgroup is normal, as the free group here is abelian, so [F4] gives homomorphisms $F_0$ and $G_0$ on the split groups. [F1, F2, F3, F4, F5, construct]

2.1 The natural isomorphisms in [F2] give $G_0F_0([M])=[GF(M)]=[M]$ for every object $M$ of $\mathcal A$ and $F_0G_0([N])=[FG(N)]=[N]$ for every object $N$ of $\mathcal B$. Since these classes generate the groups by [F3], the two composite homomorphisms are identities. Therefore $F_0$ is the asserted isomorphism, with inverse $G_0$. [F2, F3, step 1.1] ∎


## Determinant on the stable general linear group

[Open item](item-lem-author-da44cda020c0-units-k1-stable-matrix-determinant) · level 0


### Statement
For a commutative unital ring $A$, let $\operatorname{GL}_n(A)$ be the group of invertible $n$ by $n$ matrices and $\operatorname{GL}(A)$ their union under $M\mapsto\operatorname{diag}(M,1)$. The ordinary determinant defines a homomorphism $\operatorname{GL}(A)\to A^\times$, where $A^\times$ is the group of units of $A$. It factors through the abelianization $\operatorname{GL}(A)^{\mathrm{ab}}$ and sends the class of the one by one matrix $(u)$ to $u$.

The determinant of an $n$ by $n$ matrix is the sum over permutations $\sigma$ of $\operatorname{sign}(\sigma)$ times the product of the entries in positions $(i,\sigma(i))$. The abelianization of a group is its quotient by the subgroup generated by commutators.

### Facts & Assumptions

**Given:** A commutative unital ring $A$.

**Goal:** Construct the indicated determinant homomorphism and calculate it on one by one matrices.

[F1] Commutative rings, ring-matrix products and identities, invertible matrices, units and group homomorphisms have their usual supplied meanings. In particular, a matrix is invertible when it has a two-sided inverse, and $A^\times$ consists of elements with a two-sided multiplicative inverse. [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring); [math:def-ring-matrix-product-identity-and-transpose](https://alphabetamath.cc/item/def-ring-matrix-product-identity-and-transpose); [math:def-invertible-matrix-and-similarity-over-a-commutative-ring](https://alphabetamath.cc/item/def-invertible-matrix-and-similarity-over-a-commutative-ring); [math:def-invertible-element](https://alphabetamath.cc/item/def-invertible-element); [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

[F2] Matrix multiplication over a commutative ring is associative and has identity $I_n$. The invertible elements of any monoid form a group under the inherited multiplication. [math:thm-ring-matrix-arithmetic-laws](https://alphabetamath.cc/item/thm-ring-matrix-arithmetic-laws); [math:lem-monoid-units-form-a-group](https://alphabetamath.cc/item/lem-monoid-units-form-a-group)

[F3] For a group $G$, its subgroup generated by the commutators $ghg^{-1}h^{-1}$ is normal; the quotient is its abelianization, and every homomorphism from $G$ to an abelian group factors uniquely through this quotient. [math:thm-derived-subgroup-is-characteristic-and-abelianization-is-universal](https://alphabetamath.cc/item/thm-derived-subgroup-is-characteristic-and-abelianization-is-universal)

[F4] Permutations are bijections of the finite ordered index set $\{0,\ldots,n-1\}$. The sign $\operatorname{sign}(\sigma)$ in the Statement is $\operatorname{sgn}(\sigma)=(-1)^{\operatorname{inv}(\sigma)}$, where $\operatorname{inv}(\sigma)$ counts pairs $i<j$ with $\sigma(i)>\sigma(j)$; the signs act as $1$ and $-1$ in $A$. [math:def-symmetric-group](https://alphabetamath.cc/item/def-symmetric-group); [math:def-inversions-inversion-number-and-sign](https://alphabetamath.cc/item/def-inversions-inversion-number-and-sign)

[F5] For $n\geq1$, write $D(C)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i<n}c_{\sigma(i),i}$ for the library's column-indexed determinant. For every commutative ring and all $C,E\in M_n(A)$, it satisfies $D(CE)=D(C)D(E)$. Neither matrix must be invertible. [math:def-determinant-of-a-square-matrix](https://alphabetamath.cc/item/def-determinant-of-a-square-matrix); [math:thm-determinant-multiplicative](https://alphabetamath.cc/item/thm-determinant-multiplicative)

### Proof

**Proof technique:** Apply determinant multiplicativity with the explicit transpose conversion, check stabilization by the permutation formula, and use the universal property of abelianization.

1.1 Apply [F2] to the multiplicative monoids $A$ and $M_n(A)$ to obtain the groups $A^\times$ and $\operatorname{GL}_n(A)$ of [F1]. Stabilization is an injective group homomorphism: block multiplication gives $\operatorname{diag}(M,1)\operatorname{diag}(N,1)=\operatorname{diag}(MN,1)$, it preserves identity, and $M$ is recovered as the upper left block. Thus the union under these inclusions is a group: every finite list of elements can be represented at a common size, where multiplication, identity and inversion satisfy the group laws. Here $\operatorname{diag}(M,1)$ has $M$ as its upper left block, last diagonal entry $1$, and zero entries in the other positions of its last row and column. The row-indexed determinant in the Statement is exactly $\det(M)=D(M^{\mathsf T})$ by [F4] and [F5]. Thus [F2] and [F5] give $\det(MN)=D(N^{\mathsf T}M^{\mathsf T})=D(N^{\mathsf T})D(M^{\mathsf T})=\det(M)\det(N)$, with the final interchange using commutativity of $A$. In the identity-matrix formula only the identity permutation can contribute, and it has no inversions, so $\det(I)=1$. In the formula for $\operatorname{diag}(M,1)$ only permutations fixing the new last index can contribute. Restriction to the old indices gives a bijection with their permutations and preserves the inversion number, since a fixed largest index creates no inversions. Hence $\det(\operatorname{diag}(M,1))=\det(M)$, also over rings of characteristic two. If $M$ is invertible, multiplicativity gives $\det(M)\det(M^{-1})=1$. Thus determinant defines a homomorphism $\operatorname{GL}(A)\to A^\times$ independent of the chosen matrix size. [given, F1, F2, F4, F5, algebra]

2.1 The unit group $A^\times$ is abelian because $A$ is commutative. Hence every commutator in $\operatorname{GL}(A)$ has determinant $1$, and [F3] gives the unique factorization through $\operatorname{GL}(A)^{\mathrm{ab}}$. The determinant of $(u)$ is $u$ by the permutation formula. This proves the statement. [F1, F3, F4, step 1.1, algebra] ∎


## Compatible local units glue uniquely

[Open item](item-lem-author-da44cda020c0-units-k1-gluing-units) · level 0


### Statement
Let X be a ringed space with structure sheaf O and let {Uᵢ} cover X. Units uᵢ∈O(Uᵢ)× that agree on every overlap Uᵢ∩Uⱼ glue to a unique u∈O(X)×. The resulting operation is compatible with multiplication.

A ringed space is a topological space equipped with a sheaf of commutative unital rings; a unit is a section having a multiplicative inverse.

### Facts & Assumptions

**Given:** A ringed space, an open cover, and compatible local units as in the statement.

**Goal:** Glue the units and prove uniqueness and multiplicativity.

[F1] The underlying set-valued presheaf of a sheaf satisfies locality (sections equal on an open cover are equal) and gluing (compatible sections on an open cover glue); locality makes the glued section unique. These clauses apply on every open subset, including the empty cover of the empty set. [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)

[F2] A sheaf of rings has a ring of sections on each open set and ring-homomorphism restriction maps, whose underlying set-valued presheaf is a sheaf. [math:def-presheaf-of-groups-rings-modules](https://alphabetamath.cc/item/def-presheaf-of-groups-rings-modules) For open subsets $W\subseteq V\subseteq U$, restrictions satisfy $\rho^U_U=\mathrm{id}$ and $\rho^U_W=\rho^V_W\circ\rho^U_V$. [math:def-presheaf-on-topological-space](https://alphabetamath.cc/item/def-presheaf-on-topological-space) Ring homomorphisms preserve addition, multiplication and identity in the unital convention. [math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism) In particular, restricting $ab=ba=1$ gives $\rho(a)\rho(b)=\rho(b)\rho(a)=1$, so restrictions preserve inverses.

[F3] A topology contains the empty set and the whole space and is closed under arbitrary unions and finite intersections. [math:def-topological-space](https://alphabetamath.cc/item/def-topological-space) An open cover here means a family of open subsets $U_i$ with $\bigcup_iU_i=X$; thus every overlap $U_i\cap U_j$ is open, and the empty family covers precisely the empty space.

[F4] A ring has an abelian additive group and associative multiplication with a two-sided identity, satisfying both distributive laws; the zero ring is allowed. [math:def-ring](https://alphabetamath.cc/item/def-ring) Commutative means $ab=ba$ for all elements. A unit $a$ has an element $b$ satisfying $ab=ba=1$. Multiplication in a ring is a monoid operation, so the uniqueness-of-inverses lemma applies and this $b$ is unique. [math:lem-inverse-unique](https://alphabetamath.cc/item/lem-inverse-unique)

### Proof

**Proof technique:** Apply the sheaf axiom to the sections and their inverses.

1.1 By [F1], the compatible sections $u_i$ glue to a unique section $u\in\mathcal O(X)$. By [F4], let $v_i$ be the unique inverse of $u_i$. On an overlap, [F2] makes both restrictions of the $v_i$ inverses of the same restricted unit, so they agree by uniqueness of inverses in [F4]. Hence [F1] glues them to $v\in\mathcal O(X)$. The sections $uv$ and $1$ have the same restriction to every $U_i$ by [F2]; locality in [F1] gives $uv=1$, and commutativity gives $vu=1$. Thus $u$ is a unit. Uniqueness of the glued underlying section also proves uniqueness among global units. [given, F1, F2, F3, F4, construct, algebra]

2.1 Let $(u_i)$ and $(w_i)$ be two compatible families of local units, with glued units $u$ and $w$ from step 1.1. Their products form a compatible family by [F2], and each $u_iw_i$ is a unit with inverse $v_iw_i^{-1}$, where $v_i=u_i^{-1}$. By [F2], $uw$ restricts to $u_iw_i$ on each $U_i$; uniqueness in [F1] therefore identifies $uw$ with the glued product. This proves multiplicativity. The empty-cover case is included by [F1], without an additional nonemptiness assumption. [F1, F2, F4, step 1.1, algebra] ∎


## A right inverse makes a homomorphism surjective

[Open item](item-lem-author-da44cda020c0-units-k1-split-surjective-homomorphism) · level 0


### Statement
Let $d:G\to H$ and $s:H\to G$ be group homomorphisms with $d\circ s=\operatorname{id}_H$. Then $d$ is surjective and $s$ is injective. If $G$ is abelian, $G$ is the internal direct sum of $\ker(d)$ and $s(H)$.

Here $\ker(d)$ is the subgroup of elements mapped to the identity, and an internal direct sum means that each element has a unique expression as a product of one element from each subgroup.

### Statement references
[math:def-group](https://alphabetamath.cc/item/def-group)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:def-subgroup](https://alphabetamath.cc/item/def-subgroup)

### Facts & Assumptions
**Given:** Group homomorphisms $d,s$ with $d\circ s=\operatorname{id}_H$, meaning $d(s(h))=h$ for every $h\in H$.

**Goal:** Prove surjectivity, injectivity and, when $G$ is abelian, the direct-sum decomposition.

[F1] Groups and abelian groups, group homomorphisms, injective and surjective functions, and subgroups have the meanings in [math:def-group](https://alphabetamath.cc/item/def-group), [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism), [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection) and [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup), respectively.

[F2] The kernel of $d$ is a subgroup of $G$, and the image $s(H)=\{s(h):h\in H\}$ is a subgroup of $G$, by [math:thm-image-subgroup-and-kernel-normal](https://alphabetamath.cc/item/thm-image-subgroup-and-kernel-normal) applied to $d$ and $s$.

[F3] Both homomorphisms preserve identities and inverses by [math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties), claims 1 and 2; thus $s(1)=1$ and $d(x^{-1})=d(x)^{-1}$ for $x\in G$.

### Proof
**Proof technique:** Apply the right-inverse identity and decompose an arbitrary element.

1.1 Each $h\in H$ equals $d(s(h))$, so $d$ is surjective. If $s(h)=s(h')$, applying $d$ gives $h=h'$, so $s$ is injective. [given, F1, algebra]

2.1 Suppose $G$ is abelian. By [F2], $\ker(d)$ and $s(H)$ are subgroups. For $g\in G$, put $k=g\,s(d(g))^{-1}$. Product and inverse preservation give $d(k)=d(g)\,d(s(d(g)))^{-1}=d(g)\,d(g)^{-1}=1$, so $g=k\,s(d(g))$ lies in $\ker(d)s(H)$. If $s(h)\in\ker(d)$, then $h=d(s(h))=1$, and hence $s(h)=s(1)=1$; thus the two subgroups intersect only in the identity. If $ka=k'a'$ with $k,k'\in\ker(d)$ and $a,a'\in s(H)$, multiplying on the left by $(k')^{-1}$ and on the right by $a^{-1}$ gives $(k')^{-1}k=a'a^{-1}$. This element belongs to both subgroups, so it is $1$. Multiplying these two identity equations by $k'$ and $a$, respectively, gives $k=k'$ and $a'=a$. Every element therefore has the required unique expression, and commutativity gives the internal direct sum. [given, F1, F2, F3, step 1.1, algebra] ∎


## External matrix, exact and bounded-projective K-theory comparisons

[Open item](item-thm-author-da44cda020c0-units-k1-classical-comparisons) · level 0


### Statement
Assume AC. For every commutative unital ring A, let P(A) be the exact category of finite projective modules and let C(A)=Chᵇ(P(A)) be bounded cochain complexes, with degreewise split monomorphisms as cofibrations and quasi-isomorphisms as weak equivalences. The canonical matrix-automorphism maps and degree-zero inclusion give natural isomorphisms

$$GL(A)_{ab}\xrightarrow{\sim}\pi_1 K^Q(P(A))\xrightarrow{\sim}\pi_1 K^W(C(A)).$$

The first is the classical matrix/Quillen comparison; the second includes the canonical exact-category S/Q comparison and Gillet–Waldhausen inclusion. The image of M∈$GL_n$(A) is the standard automorphism class of M acting on Aⁿ in degree zero. In particular the one-by-one unit u maps to the class of multiplication by u on A. These comparisons are natural for extension of scalars along unital ring maps.

### Formulation conventions
Here “finite projective” means finitely generated and projective: a finite list generates the module, and projectivity is the lifting property against surjective module maps in [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module). For size purposes use the small presentation whose objects are pairs $(n,e)$ with $n\geq0$ and $e\in M_n(A)$ satisfying $e^2=e$, representing $eA^n$. A morphism $(n,e)\to(m,f)$ is a matrix $v\in M_{m\times n}(A)$ with $fve=v$; composition is matrix multiplication and the identity at $(n,e)$ is $e$. The fully faithful image functor has exactly the finite projectives as essential image by [math:ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules](https://alphabetamath.cc/item/ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules). We use $P(A)$ for this presentation when making the categorical constructions; it has a set of objects and arrows, includes the free objects $(n,I_n)$, and uses block direct sums. This is the small-equivalent-category convention of Weibel IV.6.3.1, not an assumption that all finite projectives are free.

The ambient category of all $A$-modules is abelian by [math:thm-modules-over-a-ring-form-an-abelian-category](https://alphabetamath.cc/item/thm-modules-over-a-ring-form-an-abelian-category). The exact structure on $P(A)$ consists of sequences isomorphic to $0\to P\to P\oplus Q\to Q\to0$, with the displayed inclusion and projection. “Split” means that the surjection has an $A$-linear section, as in [math:def-split-short-exact-sequence](https://alphabetamath.cc/item/def-split-short-exact-sequence). Thus admissible monomorphisms and epimorphisms are precisely the split injections and split surjections between these projectives. The ordinary inherited short exact sequences have this structure because a surjection onto a projective splits, as supplied by [math:thm-projective-module-characterizations](https://alphabetamath.cc/item/thm-projective-module-characterizations).

An object of $C(A)$ is a cochain complex $C^i$ with $C^i=0$ outside some finite interval and $d^{i+1}d^i=0$, computed in the ambient module category, with each term in $P(A)$; morphisms are the degree-preserving maps commuting with the differentials. These are the interfaces of [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category) and [math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map). A cofibration is a cochain map that is a split injection in every degree; a splitting is not required to commute with the differential. Its degreewise quotient is again a bounded complex of finite projectives. A weak equivalence induces isomorphisms on all $H^i(C)=\ker d^i/\operatorname{im}d^{i-1}$, using [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex). Under $C_n=C^{-n}$ and $d_n=d^{-n}$ this is exactly [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism), by [math:prop-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cochain-reindexing-is](https://alphabetamath.cc/item/prop-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cochain-reindexing-is). Bounded complexes of objects in the small presentation form a small category. The Waldhausen structure just specified is the bounded-complex structure preceding Weibel V.2.2, transported by this reindexing.

The group $GL(A)$ is the union of the invertible matrix groups under $M\mapsto\operatorname{diag}(M,1)$, as defined in [math:def-stable-general-linear-group-and-elementary-subgroup-of-a-ring](https://alphabetamath.cc/item/def-stable-general-linear-group-and-elementary-subgroup-of-a-ring); commutativity identifies its right-module column convention with the left-module convention above. The subscript ${ab}$ means quotient by the commutator subgroup, as in [math:def-abelianisation-of-a-group](https://alphabetamath.cc/item/def-abelianisation-of-a-group). The symbol $\pi_1$ denotes the group of based loops modulo endpoint-fixed homotopy from [math:def-based-loops-and-fundamental-group](https://alphabetamath.cc/item/def-based-loops-and-fundamental-group). For the K-spaces below the basepoint is the constant loop at the zero object.

For a small category $\mathcal D$, write $B\mathcal D=|N\mathcal D|$: the nerve has composable strings of $n$ arrows as its $n$-simplices, faces compose or omit arrows and degeneracies insert identities; realization glues the corresponding standard simplices by these maps. For a small exact category $\mathcal E$, $Q\mathcal E$ has the same objects, and an arrow $E\to E^{\prime}$ is an isomorphism class of spans $E\leftarrow T\rightarrow E^{\prime}$ whose left arrow is an admissible epimorphism and right arrow an admissible monomorphism. Isomorphisms of spans fix the endpoints; composition uses pullback. Set $K^Q(\mathcal E)=\Omega BQ\mathcal E$, with $\Omega$ the based loop space. These are the imported construction interfaces in Weibel IV.3.1.4 and IV.6.1/6.3, included in [F3].

For a small Waldhausen category $\mathcal D$, $S_n\mathcal D$ consists of flags $0=D_0\rightarrowtail D_1\rightarrowtail\cdots\rightarrowtail D_n$ of cofibrations with compatible chosen quotients $D_{ij}=D_j/D_i$. Compatibility means $D_{ii}=0$ and each $D_{ij}\rightarrowtail D_{ik}\twoheadrightarrow D_{jk}$ is a cofibration sequence for $i\leq j\leq k$. Morphisms are natural transformations of these diagrams. Write $wS_n\mathcal D$ for the subcategory with all the objects and the componentwise weak equivalences. Restricting the diagrams along order-preserving maps gives faces and degeneracies. Set $K^W(\mathcal D)=\Omega|B(wS_\bullet\mathcal D)|$, realizing the category nerves and then the simplicial direction, based at the zero diagram. An exact category is regarded here as Waldhausen with its admissible monomorphisms as cofibrations and its isomorphisms as weak equivalences. These are Weibel IV.8.1–8.3/8.5–8.6 in [F3]; in particular the second comparison in the Statement is the inverse of the canonical S/Q equivalence followed by degree-zero inclusion.

For a unital map $\varphi:A\to B$, extension of scalars is $B\otimes_A(-)$ on modules and maps, as in [math:def-restriction-and-extension-of-scalars](https://alphabetamath.cc/item/def-restriction-and-extension-of-scalars), applied degreewise on complexes. On the small presentations it is $(n,e)\mapsto(n,\varphi(e))$, with entries of every morphism sent through $\varphi$. The represented module is the usual scalar extension; the image/summand splitting of $e$ identifies these models. A cochain homotopy from $a$ to $b$ is a family $h^i:C^i\to D^{i-1}$ satisfying $a-b=dh+hd$; brackets for maps modulo homotopy below mean this equivalence relation. The categorical constructions, their well-definedness and their functoriality are imported in [F3]; the applicability checks for this particular scalar-extension functor appear below.

### Source contract
**Given:** A commutative unital ring, AC, and the exact/Waldhausen structures specified above. AC is the assumption in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and is retained for the imported classical comparisons. The explicit small presentation and finite applicability checks make no further appeal to AC; no sharper choice strength is asserted for the imported proofs. In particular AC does not imply that an arbitrary projective module is free.

**Goal:** Import the actual classical comparison maps with their matrix-loop normalization.

[F1] Weibel III.1.1 identifies matrix K₁ with GL(A)_ab. IV.1.1, IV.4.9/4.11.1 and IV.7.1–7.2 identify its canonical automorphism maps with exact-category Quillen K-theory.

[F2] Weibel Exercise IV.7.9(c) matches the Quillen automorphism class with its group-completion class. IV.8.3.2/8.5–8.6 and Exercises IV.8.5–8.7 supply the canonical S/Q comparison and its automorphism-class normalization. V.2.2 supplies the K-theory equivalence induced by P(A)→C(A).

[F3] Weibel IV.3.1/3.1.4, IV.6.1/6.3/6.3.1 and IV.8.1–8.3.2/8.5–8.6 supply the nerve/realization, Q and Waldhausen S construction interfaces, small-category conventions and functoriality specified above. The paragraph preceding V.2.2 supplies the bounded-complex Waldhausen structure in an ambient abelian category.

[F4] Stacks Project Remark 13.19.5 imports the following fact: if f:C→D is a quasi-isomorphism in an abelian category and P is a bounded above complex of projectives, postcomposition induces a bijection from maps P→C modulo cochain homotopy to maps P→D modulo cochain homotopy. Only this fact is imported from that source.

### External input
Import [F1]–[F4] with the exact source statements, hypotheses and reading limits in the frontmatter. The comparison theorem and the construction interfaces are literature inputs; the elementary applicability checks below do not reconstruct their proofs. The automorphism normalization uses the actual categorical maps, rather than the mere existence of abstract fundamental-group isomorphisms.

For the kernel hypothesis of [F2], a surjection $P\twoheadrightarrow Q$ between finite projectives has a section by projectivity. Its kernel is the image of the complementary projection on $P$ and is therefore finitely generated; as a direct summand of a projective it is projective by [math:thm-projective-module-characterizations](https://alphabetamath.cc/item/thm-projective-module-characterizations). Thus $P(A)$ is closed under kernels of its surjections in the ambient abelian module category. This verifies the stated hypothesis of V.2.2 here, without borrowing a premise from a later consumer.

For base change, let $f:C\to D$ be a quasi-isomorphism in $C(A)$. In [F4] first take $P=D$ to obtain $g:D\to C$ with $fg$ homotopic to $1_D$. Taking $P=C$, injectivity then gives $gf$ homotopic to $1_C$, since postcomposition with $f$ identifies their homotopy classes. Both uses satisfy bounded-above projectivity because $C$ and $D$ are bounded projective complexes. Applying the additive functor $B\otimes_A(-)$ preserves the two equations $fg-1=dh+hd$ and $gf-1=dk+kd$, so the base-changed map also has a homotopy inverse. On a cycle, a difference $dh+hd$ is a boundary; hence homotopy inverses induce inverse maps on cohomology, and base change preserves quasi-isomorphisms without flatness. It preserves the split cofibrations, their pushouts and finite projectives: the module splittings and finite free retractions are preserved by the additive scalar-extension functor, and pushouts along split inclusions are computed degreewise by direct sums with the complementary module summand; no chain-compatible splitting is asserted. Consequently [F3] applies to this functor. The comparisons of [F1]–[F2] commute with it and send matrices entrywise, proving that their stated naturality has exactly the scope claimed.

The determinant and its unit calculation are separate local results; no determinant compatibility is inferred here from a comparison of degree-zero K-groups. No regularity, noetherianity, global resolution property or flatness of the ring map is added to the Statement.

Source correction retained from the existing item: Exercise IV.8.7 cites IV.7.8 for the automorphism class; the intended reference is IV.7.9. This historical source cross-reference correction does not change the imported comparison.


## Cohomology of a cochain complex

[Open item](item-lem-author-b747b28c359f-cochain-cohomology) · level 0


### Statement
For a cochain complex $C$ of abelian groups and an integer $i$, the quotient $H^i(C)=\ker(d^i:C^i\to C^{i+1})/\operatorname{im}(d^{i-1}:C^{i-1}\to C^i)$ is an abelian group.

A cochain complex consists of abelian groups $C^i$ and homomorphisms $d^i$ satisfying $d^{i+1}d^i=0$. Elements of the kernel are cocycles and elements of the image are coboundaries.

### Facts & Assumptions

[F1] Abelian groups are groups with commutative operation, written additively here, and group homomorphisms preserve the operation: [math:def-group](https://alphabetamath.cc/item/def-group) and [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism).

[F2] For an additive group homomorphism $f:G\to H$, its kernel is $\{x\in G:f(x)=0\}$ and its image is $\{f(x):x\in G\}$, as in [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism).

[F3] A subgroup carries the restricted group operation; normality means invariance under conjugation: [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup) and [math:def-normal-subgroup](https://alphabetamath.cc/item/def-normal-subgroup).

[F4] The kernel of a group homomorphism is a subgroup of its domain, and its image is a subgroup of its codomain: [math:thm-image-subgroup-and-kernel-normal](https://alphabetamath.cc/item/thm-image-subgroup-and-kernel-normal).

[F5] Every subgroup of an abelian group is normal: [math:cor-subgroups-of-abelian-groups-are-normal](https://alphabetamath.cc/item/cor-subgroups-of-abelian-groups-are-normal).

[F6] For a group $G$ and a normal subgroup $N$, the quotient group $G/N$ consists of cosets, with a well-defined group operation induced by that of $G$: [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group) and [math:thm-quotient-group-laws](https://alphabetamath.cc/item/thm-quotient-group-laws).

[F7] If $G$ is abelian and $N$ is a normal subgroup, then $G/N$ is abelian: [math:cor-quotient-of-an-abelian-group-is-abelian](https://alphabetamath.cc/item/cor-quotient-of-an-abelian-group-is-abelian).

### Proof

**Given:** A cochain complex $C$ and an integer $i$, with the square-zero condition stated in the inline definition.

**Goal:** Show that the displayed quotient is an abelian group.

1.1 Put $Z=\ker d^i$ and $B=\operatorname{im}d^{i-1}$. If $x\in B$, then $x=d^{i-1}(y)$ for some $y$, so $d^i(x)=d^id^{i-1}(y)=0$ by the given square-zero condition; hence $B\subseteq Z$. By [F4], $Z$ and $B$ are subgroups of $C^i$. Their restricted operations agree, so $B$ is a subgroup of $Z$ by [F3]. Commutativity in $C^i$ restricts to $Z$, which is therefore abelian by [F1]; thus [F5] makes $B$ normal in $Z$. [given, F1, F2, F3, F4, F5]

2.1 By [F6], $Z/B$ inherits a well-defined group operation, additively $(z+B)+(z'+B)=(z+z')+B$. Since $Z$ is abelian, [F7] makes this quotient abelian. By the formula in the Statement, it is $H^i(C)$. [step 1.1, F6, F7] ∎


## Derived enhancements of module sheaves on ringed spaces

[Open item](item-thm-adjudicate-1ef158934564-ringed-derived-enhancement) · level 0


### Statement
Assume the Axiom of Choice and fix Grothendieck universes $\mathcal U\in\mathcal V$ with $\omega\in\mathcal U$. For any $\mathcal U$-small ringed space $(X,\mathcal O_X)$, let $\mathcal A_X=\mathrm{Mod}_{\mathcal U}(\mathcal O_X)$ denote all module sheaves with $\mathcal U$-small section sets. Then $\mathcal A_X$ is Grothendieck abelian. Its unbounded derived infinity-category $\mathcal D(X)$ is stable and presentable relative to $\mathcal U$ and is the infinity-localization of $\operatorname{Ch}(\mathcal A_X)$ at quasi-isomorphisms. Its homotopy category is the ordinary unbounded derived category $D(\mathcal A_X)$. Ordinary localizations and functor categories are interpreted in $\mathcal V$; the category of these complexes is $\mathcal V$-small, satisfying the ordinary derived-category interface's size condition. Chain and cochain conventions agree by $C_n=C^{-n}$, with the same differentials reindexed.

For any two such ringed spaces $X,Y$ and any exact additive functor $F:\mathcal A_X\to\mathcal A_Y$, degreewise application induces an actual exact infinity-functor $\mathcal D(F):\mathcal D(X)\to\mathcal D(Y)$. Every ordinary natural transformation $\alpha:F\Rightarrow G$ between two such exact functors induces a natural transformation $\mathcal D(\alpha):\mathcal D(F)\Rightarrow\mathcal D(G)$. These descents are determined up to the equivalences supplied by localization. No quasi-coherence or finiteness hypothesis is imposed.

### Facts & Assumptions
**Given:** The universes, ringed spaces and exact functors specified in the Statement.

[A1] Choice is retained for the imported unbounded resolution and model-category constructions. Universes are assumed to exist here, rather than deduced from Choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[F1] The formulation uses ringed spaces, their module sheaves, and Grothendieck abelian categories in the AB5-and-generator convention. [math:def-ringed-space](https://alphabetamath.cc/item/def-ringed-space) [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space) [math:def-grothendieck-category](https://alphabetamath.cc/item/def-grothendieck-category)

[F2] Complexes and quasi-isomorphisms use the published chain conventions; $D(\mathcal A)$ is the quasi-isomorphism localization of the cochain homotopy category, subject to its stated size condition. [math:def-category-of-chain-complexes](https://alphabetamath.cc/item/def-category-of-chain-complexes) [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism) [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[F3] Exact additive functors and ordinary natural transformations use their published definitions. [math:def-exact-functor-between-abelian-categories](https://alphabetamath.cc/item/def-exact-functor-between-abelian-categories) [math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation)

[F4] Additive functors apply degreewise to complexes and chain maps; exact functors preserve quasi-isomorphisms. Only the preservation assertion is used, with no conservativity assumption. [math:prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps](https://alphabetamath.cc/item/prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps) [math:cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative](https://alphabetamath.cc/item/cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative)

[F5] The natural biproduct comparison identifies $F(\operatorname{Cone}(f))$ with $\operatorname{Cone}(F(f))$, compatibly with the cone sequence. [math:prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences](https://alphabetamath.cc/item/prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences)

[F6] Stacks Remark 19.13.3 supplies the ringed-site module assertion and the ordinary derived Hom formula using K-injective resolutions. Here K-injective means that maps from any acyclic complex into any shift of the resolution vanish in the homotopy category. Beke Proposition 3.10 supplies local presentability of an AB5 category with a generator, so the Stacks convention meets Higher Algebra Definition 1.3.5.1.

[F7] Higher Algebra Definition 1.3.5.8, Proposition 1.3.5.9, Lemma 1.3.5.11 and Propositions 1.3.5.13–15 and 1.3.5.21 supply the unbounded stable presentable enhancement, its fibrant-complex model and its two localization descriptions. Lemma 1.3.5.11 makes the fibrant models K-injective; these imports include the existence of replacements.

[F8] Higher Algebra Definition 1.3.4.1 supplies the full functor-category universal property: precomposition by $q:\operatorname{Ch}(\mathcal A)\to\mathcal D(\mathcal A)$ identifies $\operatorname{Fun}(\mathcal D(\mathcal A),\mathcal E)$ with the full subcategory of $\operatorname{Fun}(N\operatorname{Ch}(\mathcal A),\mathcal E)$ consisting of functors inverting quasi-isomorphisms. Its differential graded nerve construction is functorial, and Remark 1.3.2.17 identifies the canonical cone square with a cofiber square. Combined with the reflective localization of [F7], which preserves colimits by Higher Topos Theory Proposition 5.2.3.5, this identifies the image of a chain-map cone square with its derived cofiber square. The stability and exactness conventions are Definition 1.1.1.9 and §1.1.4 with Proposition 1.1.4.1: preservation of zero objects and cofiber sequences is exactness.

[F9] Higher Topos Theory supplies the formulation interfaces for infinity-categories, ordinary nerves, homotopy categories and functor infinity-categories at Definition 1.1.2.4, Example 1.1.2.6, §1.2.3 and Notation 1.2.7.2. In particular, morphisms of functor infinity-categories are natural transformations. Definition 5.4.2.1, Proposition 5.4.2.2 and Definition 5.5.0.1 fix accessibility and presentability, always relative to $\mathcal U$ here. These definitions and the substantial results [F6]–[F8] are imported at the exact source contracts above; the following proof is the local application, not a reconstruction of those foundations.

### External input
Import the ringed-site and K-injective facts of Stacks 079Q, Beke Proposition 3.10, the Higher Algebra unbounded construction, localization and coherent cone interfaces, and the Higher Topos Theory formulation and adjoint facts specified in [F6]–[F9]. Their hypotheses and reading limits are recorded in the source contracts. These foundations are imported; the proof below locally composes them and checks functoriality.

### Proof

**Goal:** Establish the statement under its stated hypotheses.

Import the ringed-site and K-injective facts of Stacks 079Q, Beke Proposition 3.10, the Higher Algebra unbounded construction, localization and coherent cone interfaces, and the Higher Topos Theory formulation and adjoint facts specified in [F6]–[F9]. Their hypotheses and reading limits are recorded in the source contracts. These foundations are imported; the proof below locally composes them and checks functoriality.


**Proof technique:** direct composition of the stated imported interfaces and the published exact-functor results.

1.1 Regard $X$ as the small site of its open subsets, ordered by inclusion and covered by ordinary open covers, with the given structure sheaf. Its module sheaves are exactly those of [F1], so [F6] makes $\mathcal A_X$ Grothendieck and locally presentable in the convention needed for [F7]. Applying [F7] gives stability, presentability and the quasi-isomorphism localization. The same applies to $Y$. A module sheaf is encoded by its section sets and structure maps indexed by the $\mathcal U$-small set of opens; because $\mathcal U\in\mathcal V$, all these encodings, and their integer-indexed complexes, form sets in $\mathcal V$. Thus [F2]'s ordinary localization is formed from a $\mathcal V$-small category. For the comparison of homotopy categories, use the fibrant replacements of [F7]. Their maps in the homotopy category are chain-homotopy classes, and they are K-injective by the same input. The Hom formula in [F6] therefore identifies these mapping sets, compatibly with composition, with the ordinary derived Hom sets; every complex has a replacement. This gives $h\mathcal D(X)\simeq D(\mathcal A_X)$. Reindexing by $C_n=C^{-n}$ identifies the conventions without changing quasi-isomorphisms. All resolutions and model structures used here retain [A1]. [A1, F1, F2, F6, F7, F9]

2.1 By [F3]–[F4], degreewise $F$ is a functor on complexes preserving quasi-isomorphisms, so [F8] gives $\mathcal D(F)$ with $\mathcal D(F)q_X\simeq q_YF$. Degreewise $\alpha$ is a natural transformation since its components commute with every differential and chain map; composing with $q_Y$ gives a morphism in the functor category on $N\operatorname{Ch}(\mathcal A_X)$. The full faithfulness in [F8], applied with target $\mathcal D(Y)$, lifts this morphism to $\mathcal D(\alpha)$; no invertibility of its components is required. To check enhanced exactness, $F$ also acts on graded maps of complexes componentwise, preserving addition, composition and the differential $d(f)=d\circ f-(-1)^{|f|}f\circ d$. Thus it defines a differential graded functor and hence a functor on differential graded nerves by [F8]. It preserves the zero complex. Composing with target localization inverts quasi-isomorphisms, hence descends through the reflective localization of [F7]. On ordinary complexes it is $q_YF$, so the full faithfulness in [F8] identifies its descent with $\mathcal D(F)$. The cone comparison [F5] preserves the canonical nullhomotopy of $C\to D\to\operatorname{Cone}(f)$: its degree-$n$ map sends $x$ to $(0,x)$ in $\operatorname{Cone}(f)_{n+1}$, and the comparison carries its image under $F$ to that same coordinate map. Consequently it preserves the coherent cone square, whose localization is a cofiber square by [F8]. Every morphism in the fibrant-complex model of step 1.1 is a chain map; hence these squares compute cofibers for all derived morphisms, up to equivalence. The induced functor preserves zero objects and cofiber sequences, and is exact by [F8]. This proves all functoriality assertions on the infinity-localizations themselves. [F3, F4, F5, F7, F8, F9, step 1.1] ∎



## Pointed simplicial constructions and sequential model structures

[Open item](item-thm-adjudicate-0cc4fcf73566-pointed-simplicial-stable-model-input) · level 0


### Statement
Assume ZFC. Let $\mathrm{sSet}_*$ be the category of simplicial sets with a specified map $* = \Delta[0]\to A$ and maps preserving it. Put $T_+=T\amalg *$ for an unpointed simplicial set $T$. For pointed $A,B$, define $A\wedge B=(A\times B)/(A\times *\cup *\times B)$, degreewise, and define $\operatorname{Map}_*(A,B)_q=\operatorname{Hom}_{\mathrm{sSet}_*}(A\wedge\Delta[q]_+,B)$, with simplicial operators induced by those of $\Delta[q]$ and basepoint the constant map. These constructions give the smash–mapping adjunction. Set $K=\Delta[1]/\partial\Delta[1]$, based at the collapsed boundary, and $\Omega B=\operatorname{Map}_*(K,B)$.

For clarity, $|T|$ means the quotient of $\coprod_{q\geq0}T_q\times\{(t_0,\ldots,t_q)\in\mathbb R_{\geq0}^{q+1}:\sum t_i=1\}$ by $(T(\alpha)x,t)\sim(x,\alpha_*t)$ for each order-preserving $\alpha:[p]\to[q]$, where $\alpha_*$ sums coordinates over each fiber. The Kan model structure on $\mathrm{sSet}_*$ has weak equivalences the maps whose realizations are weak homotopy equivalences, fibrations the underlying Kan fibrations, and cofibrations the degreewise injections. It has functorial model factorizations; all objects are cofibrant and its fibrant objects are the Kan complexes. Generating cofibrations are $I_+=\{\partial\Delta[q]_+\to\Delta[q]_+:q\geq0\}$ and generating trivial cofibrations are $J_+=\{\Lambda^r[q]_+\to\Delta[q]_+:q\geq1,0\leq r\leq q\}$. Here generation means that trivial fibrations and fibrations are detected by the right lifting properties against $I_+$ and $J_+$, respectively, with the corresponding small-object factorizations. All generator domains and codomains have finitely many nondegenerate simplices. Smash product satisfies the pushout-product axiom: for cofibrations $i:A\to B$ and $j:C\to D$, $(B\wedge C)\amalg_{A\wedge C}(A\wedge D)\to B\wedge D$ is a cofibration, trivial if either $i$ or $j$ is trivial. In particular $K\wedge(-)\dashv\Omega$ is a Quillen adjunction.

A sequential prespectrum is a sequence $X_n$ in $\mathrm{sSet}_*$, $n\geq0$, with sphere-first maps $K\wedge X_n\to X_{n+1}$; a map of prespectra is a sequence commuting with these maps. This category has the projective model structure, whose weak equivalences and fibrations are levelwise and whose cofibrations have the left lifting property against all levelwise trivial fibrations. It also has the sequential stable model structure, with the same cofibrations, and fibrant objects precisely the level-Kan prespectra whose adjoint maps $X_n\to\Omega X_{n+1}$ are weak equivalences. To specify its weak equivalences concretely, let $\mathcal M(A,E)_q$ be the set of prespectrum maps $A\wedge\Delta[q]_+\to E$, where $(A\wedge T)_n=A_n\wedge T$ and its structure map is $K\wedge(A_n\wedge T)\cong(K\wedge A_n)\wedge T\to A_{n+1}\wedge T$. For a functorial projective cofibrant replacement $PA\to A$, a map $f:A\to B$ is a stable equivalence exactly when $\mathcal M(PB,E)\to\mathcal M(PA,E)$ is a weak equivalence of simplicial sets for every such fibrant $E$. Stable fibrations are the maps with the right lifting property against the cofibrations that are stable equivalences.

### Statement references

[math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)

[math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration)

[math:def-model-category-and-quillen-adjunction](https://alphabetamath.cc/item/def-model-category-and-quillen-adjunction)

[math:def-weak-homotopy-equivalence](https://alphabetamath.cc/item/def-weak-homotopy-equivalence)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### External input
The Kan model structure, its pointed generators, the smash–mapping adjunction and its pushout-product property are imported from Hovey's Model categories at the locators in reference 0. The sequential projective and stable structures and the mapping-space criterion are imported from reference 1, specifically its pointed-simplicial specialization. Its Theorem 5.7 supplies the levelwise tensor and compatible-map enrichment used in $\mathcal M$; the projective cofibrant and level-fibrant inputs make this the derived mapping space of §2. The displayed quotient and mapping formulas fix the interfaces of those imports. No assertion about symmetric spectra or motivic localizations is included.

The Axiom of Choice is allowed in the imported small-object factorizations and model-structure existence constructions, including simultaneous selections of lifts. No independent reconstruction of those substantial existence arguments is claimed. In particular the stable existence premise is the specific simplicial case of Corollary 3.5, rather than an unverified invocation of the general left proper cellular localization theorem.


## Agreement of the domain and prime-quotient valuative formulas

[Open item](item-lem-adjudicate-30c6e58e6bd4-domain-valuative-compatibility) · level 0


### Statement
Assume the Axiom of Choice. For every nonzero commutative domain $D$, let $\delta(D)$ be the supremum of the Krull dimensions of valuation subrings of $\operatorname{Frac}(D)$ containing the embedded copy of $D$. The supremum is taken in $\{0,1,\ldots,\infty\}$. Then

$$\delta(D)=\sup_{\mathfrak p\in\operatorname{Spec}D}\delta(D/\mathfrak p).$$

Thus extending the domain formula to general rings by the supremum over their prime quotients leaves its value on domains unchanged, including the value infinity.

### Facts & Assumptions
**Given:** A nonzero commutative domain $D$ in the classical foundational setting below.

**Goal:** Compare the domain invariant with its prime-quotient extension.

[F1] [math:def-valuation-ring](https://alphabetamath.cc/item/def-valuation-ring) gives the field-membership definition of a valuation ring. [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions) constructs the fraction field, and [math:thm-field-of-fractions-is-a-field-and-the-domain-embeds](https://alphabetamath.cc/item/thm-field-of-fractions-is-a-field-and-the-domain-embeds) gives its field structure and canonical embedding. Krull dimension is the prime-chain supremum of [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring).

[F2] Proper prime ideals and their spectrum use [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets). Quotients use [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring), and [math:thm-quotient-is-domain-iff-ideal-prime](https://alphabetamath.cc/item/thm-quotient-is-domain-iff-ideal-prime) ensures that every $D/\mathfrak p$ in the statement is a nonzero domain.

[F3] [math:lem-valuation-ring-is-local](https://alphabetamath.cc/item/lem-valuation-ring-is-local) identifies the nonunits of a valuation ring with its unique maximal ideal. [math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal) supplies $V_{\mathfrak p}$ and its fractions, and [math:cor-primes-of-a-prime-local-ring](https://alphabetamath.cc/item/cor-primes-of-a-prime-local-ring) identifies its primes with those of $V$ contained in $\mathfrak p$.

[F4] $A[T_1,\ldots,T_k]$ is the polynomial ring in finitely many commuting indeterminates, including $k=0$, as in [math:def-multivariate-polynomial-ring-by-iteration](https://alphabetamath.cc/item/def-multivariate-polynomial-ring-by-iteration).

[F5] Reference 0 supplies the classical polynomial-dimension tests stated in External input.

[F6] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). It is retained in the imported classical valuation-dimension characterization [F5]; no choice-free reconstruction of that characterization is claimed.

### External input
Reference 0 defines $c(R)$ for a domain $R$ as the supremum of the lengths of finite strict chains of valuation overrings ending in $\operatorname{Frac}(R)$. For nonzero $A$, it defines $c_*(A)=\sup_{\mathfrak p\in\operatorname{Spec}A}c(A/\mathfrak p)$. Theorem 1.1, (1) iff (3), states for each integer $n\geq0$ that $c(R)\leq n$ is equivalent to $\dim R[T_1,\ldots,T_k]\leq n+k$ for every integer $k\geq0$; its final clause gives the same equivalence for $c_*(A)$ and every nonzero commutative ring $A$. This uses [F4] and the classical setting [F6]. The translation to the Krull dimensions of valuation overrings is local below.

### Proof
1.1 Fix a valuation overring $V$ of a domain $R$, with fraction field $K=\operatorname{Frac}(R)$. Its fraction field is $K$, since $R\subseteq V\subseteq K$. Any overring $W$ of $V$ in $K$ is again a valuation ring by [F1]. By [F3], it has maximal ideal $\mathfrak m_W$ consisting of its nonunits; this is prime because a product is a unit exactly when both factors are units. Hence $\mathfrak p=\mathfrak m_W\cap V$ is prime. Every $s\in V\setminus\mathfrak p$ is a unit in $W$, so $V_{\mathfrak p}\subseteq W$. Conversely, if $w\in W\setminus V$, then $w^{-1}\in V$ by [F1], and it is a unit of $W$, so $w^{-1}\notin\mathfrak p$ and $w\in V_{\mathfrak p}$. Thus $W=V_{\mathfrak p}$. Each $V_{\mathfrak p}$ is a valuation ring, and [F3] recovers $\mathfrak p$ as the contraction of its unique maximal ideal. These correspondences reverse inclusions: inclusion of primes reverses the denominator sets, and inclusion of overrings preserves units and therefore reverses the contractions of their nonunits. They preserve strictness by being inverse bijections. The endpoints are $V=V_{\mathfrak m_V}$ and $K=V_{(0)}$. Finite prime chains in $V$ can be extended by these endpoints, so their length supremum equals that of finite strict chains of valuation overrings from $V$ to $K$. Taking the supremum over all $V$ containing $R$ yields $\delta(R)=c(R)$. [F1, F3, given, construct]

2.1 Put $\rho(D)=\sup_{\mathfrak p\in\operatorname{Spec}D}\delta(D/\mathfrak p)$. These are domain inputs by [F2]. Applying step 1.1 to each quotient gives $\rho(D)=c_*(D)$, and applying it to $D$ gives $\delta(D)=c(D)$. For every finite integer $n\geq0$, [F5] identifies both $c(D)\leq n$ and $c_*(D)\leq n$ with exactly the same test $\dim D[T_1,\ldots,T_k]\leq n+k$ for all $k\geq0$. The hypotheses hold because $D$ is nonzero and [F6] supplies the imported classical setting. Therefore $\delta(D)$ and $\rho(D)$ have exactly the same finite upper bounds. Both are in $\{0,1,\ldots,\infty\}$: fraction fields provide nonempty valuation-overring families, and $(0)$ is a prime of $D$. Equal finite upper bounds determine the same value, including infinity, proving the equality. [F1, F2, F4, F5, F6, step 1.1] ∎


## External sequential simplicial Omega replacement

[Open item](item-thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input) · level 1


### Statement
Assume ZFC. Let $K=\Delta[1]/\partial\Delta[1]$ and let $X$ be a sequential pointed simplicial prespectrum with sphere-first maps $K\wedge X_n\to X_{n+1}$, each $X_n$ a Kan complex. Kan means that every simplicial horn has a filler. Use the pointed smash product, simplicial mapping object and model structures specified by the pointed simplicial model input. Write $\Omega Z=\operatorname{Map}_*(K,Z)$ and $a_n:X_n\to\Omega X_{n+1}$ for the adjoints. The tail is $(sX)_n=X_{n+1}$. Define $R=s\Omega$ with $(RX)_n=\Omega X_{n+1}$ and adjoint structure maps $\Omega a_{n+1}$. On prespectrum maps set $(Rf)_n=\Omega f_{n+1}$. The maps $a_n$ form a natural prespectrum map $\iota_X:X\to RX$, with $\iota_{RX}=R\iota_X$. Define $QX=\operatorname{colim}_{m\geq0}R^mX$ using transitions $R^m\iota_X$; colimits are computed levelwise. Then $QX$ is level Kan, its adjoint structure maps are weak equivalences (indeed isomorphisms), $X\to QX$ is a stable equivalence, and
$$ (QX)_n=\operatorname{colim}_{m\geq0}\Omega^mX_{n+m}. $$
A stable equivalence is a weak equivalence in the sequential stable model structure specified by the pointed simplicial model input; level weak equivalences use the Kan model structure. All conclusions use the stated prolongation convention.

### Statement references

[thm-adjudicate-0cc4fcf73566-pointed-simplicial-stable-model-input](item-thm-adjudicate-0cc4fcf73566-pointed-simplicial-stable-model-input)

[math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)

[math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration)

[math:def-model-category-and-quillen-adjunction](https://alphabetamath.cc/item/def-model-category-and-quillen-adjunction)

[math:def-filtered-category-and-filtered-colimit](https://alphabetamath.cc/item/def-filtered-category-and-filtered-colimit)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Facts & Assumptions
**Given:** $K$ and the level-Kan sequential prespectrum $X$ in the Statement, working in ZFC.

**Goal:** Import the functorial Omega replacement with its exact sequential formula and conventions.

[F1] [thm-adjudicate-0cc4fcf73566-pointed-simplicial-stable-model-input](item-thm-adjudicate-0cc4fcf73566-pointed-simplicial-stable-model-input) supplies pointed constructions, the Kan and sequential stable model structures, boundary/horn generators, and the Quillen suspension adjunction. [math:def-model-category-and-quillen-adjunction](https://alphabetamath.cc/item/def-model-category-and-quillen-adjunction) fixes model terminology, and [math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration) fixes the level-Kan hypothesis. The generator domains and codomains are finite simplicial sets, meaning finitely many nondegenerate simplices.

[F2] [math:thm-filtered-colimits-commute-with-finite-limits-in-set](https://alphabetamath.cc/item/thm-filtered-colimits-commute-with-finite-limits-in-set) applies degreewise to simplicial sets, and [math:def-filtered-category-and-filtered-colimit](https://alphabetamath.cc/item/def-filtered-category-and-filtered-colimit) fixes the colimit convention. The sequence of nonnegative integers is a nonempty filtered index category.

[F3] Reference 0 imports Hovey's sequential construction and conclusions, with all §4 hypotheses as recorded in that reference. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is permitted in the imported model-structure existence and small-object arguments; the explicit $Q$ construction makes no additional selections of fillers.

### External input
Apply [F3] to the precise pointed simplicial model of [F1], with $G=K\wedge(-)$ and $U=\Omega$. The left Quillen hypothesis holds because the pushout-product axiom applied to $*\to K$ makes $K\wedge(-)$ preserve cofibrations and trivial cofibrations; its right adjoint is the supplied $\operatorname{Map}_*(K,-)$.

For the finiteness hypothesis of Definition 4.1, the boundary and horn generators in [F1] have finite domains and codomains. A map from a finite simplicial set is determined by finitely many nondegenerate simplices and finitely many compatibility conditions. In a sequential colimit these representatives and conditions occur at a common stage, and equalities between them hold at a common later stage. Thus these objects are finitely presented in Hovey's sequential sense. Taking the horn generators themselves as the detecting trivial cofibrations verifies the almost finitely generated condition, including its restriction to maps with fibrant codomain.

Sequential colimits preserve finite products by [F2], including the empty product. Also $\Omega$ preserves sequential colimits: its degree-$q$ simplices are pointed maps from $K\wedge\Delta[q]_+$, which has finitely many nondegenerate simplices: a nondegenerate simplex of $\Delta[1]\times\Delta[q]$ has degree at most $q+1$, since at every step at least one coordinate of its pair of monotone maps increases. There are finitely many such pairs in those dimensions, and adjoining or collapsing a basepoint preserves this finiteness. The same finite representative-and-relation argument applies, including the basepoint condition. A filtered colimit of Kan complexes is Kan because each finite horn map factors through a stage and obtains a filler there. These checks verify the remaining specialized finiteness and colimit hypotheses; they do not assert them for arbitrary topological spaces.

With these inputs, Lemma 4.3 identifies $\iota_{RX}$ with $R\iota_X$ for the stated prolongation; Proposition 4.4 gives the level-Kan Omega-spectrum and its isomorphic adjoint structure maps; Corollary 4.8 gives the stable equivalence $X\to QX$. The level formula is the objectwise colimit in Definition 4.2. Theorem 4.9 is consistent with this application: its preliminary projective fibrant replacement addresses arbitrary inputs, whereas $X$ here is already level fibrant. No symmetric-spectrum or model-category equivalence is asserted. The substantial replacement theorem is imported; the preceding checks only verify its application.


## Omega towers and the suspension index

[Open item](item-lem-author-e0b0bf18ed2b-omega-tower-shift) · level 1


### Statement
Let $Y=(Y_n,\alpha_n:Y_n\simeq\Omega Y_{n+1})_{n\geq0}$ be a coherent Omega tower of pointed spaces and let $\mathcal Y$ be its corresponding object of $\mathrm{Sp}$. Use the size and foundational conventions of the stable enhancement. Write $S_*$ for pointed spaces, $\mathbb S=\Sigma^\infty S^0$, and $\pi_k(\mathcal Y)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[k],\mathcal Y)$, with the canonical stable abelian group law. For a pointed space $Z$, $\pi_d(Z)=\pi_0\operatorname{Map}_{S_*}(S^d,Z)$ denotes its homotopy group, computed in a pointed Kan representative. Take $S^0$ to be the pointed two-point space and use the ordered suspension identification $S^{d+1}=\Sigma S^d\simeq S^1\wedge S^d$, with the new circle coordinate first.

Define $\lambda_d:\pi_{d+1}(Z)\xrightarrow{\sim}\pi_d(\Omega Z)$ by this suspension–loop adjunction. For fixed $k\in\mathbb Z$ and $n+k=d\geq2$, specify $b_n=\lambda_d^{-1}\circ(\alpha_n)_*:\pi_d(Y_n)\to\pi_{d+1}(Y_{n+1})$, and define the coherent tower's stable group by $G_k(Y)=\operatorname{colim}_{n\geq N}(\pi_{n+k}(Y_n),b_n)$, where $N\geq0$ and $N+k\geq2$. There are cutoff-independent compatible natural isomorphisms $\pi_k(\mathcal Y)\cong\pi_{n+k}(Y_n)\cong G_k(Y)$ for every such $n$. The tail $(Y_{n+1})_{n\geq0}$ represents $\mathcal Y[1]$, and $\pi_k(\mathcal Y[1])\cong\pi_{k-1}(\mathcal Y)$.

This definition agrees with the published stable groups whenever a compatible strict model is given: let $E$ be a sequential Omega-prespectrum of well-pointed based CGWH spaces with actual maps $\sigma_n:S^1\wedge E_n\to E_{n+1}$. Compatibility means pointed equivalences $q_n:\operatorname{Sing}E_n\simeq Y_n$ identifying the adjoint maps $\widetilde\sigma_n$ with $\alpha_n$ in pointed spaces, including the loop comparisons. Then the level homotopy-group isomorphisms identify the published sphere-first system of $E$ with $(\pi_{n+k}(Y_n),b_n)$ and induce $G_k(E)\cong G_k(Y)$. Here $G_k(E)$ is the published sequential stable group. The intrinsic definition of $G_k(Y)$ requires no choice of strict model.

### Statement references

[thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)

[lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance)

[math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps](https://alphabetamath.cc/item/def-sequential-prespectrum-spectrum-and-adjoint-structure-maps)

[math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum)

### Facts & Assumptions
**Given:** The coherent tower $Y$, its associated spectrum $\mathcal Y$, and the integers and size conventions of the Statement. Suspension $[1]$ and loops $[-1]$ are inverse on spectra. A compatible strict model is an additional given only for the final comparison in the Statement.

**Goal:** Construct the tower group system, identify its colimit with the enhanced groups, check agreement with any given compatible strict model, and determine the suspension index.

[F1] The declared enhancement supplies pointed spaces, their coherent diagrams and mapping spaces, the stable category $\mathrm{Sp}$, the pointed adjunction $\Sigma^\infty\dashv\Omega^\infty$, and the coherent equivalences $Y_n\simeq\Omega^\infty(\mathcal Y[n])$. [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)

[F2] The abstract-group-system assertion supplies cutoff independence and invariance under compatible stage-group isomorphisms. Its realization and Kan-comparison interface also permits reading the groups of a pointed Kan level through its realization. [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance)

[F3] A strict sequential prespectrum has the spaces and sphere-first maps stated above, with $\widetilde\sigma_n(x)(t)=\sigma_n(t\wedge x)$. Its published stable group is the colimit under $[f]\mapsto[\sigma_n\circ(1_{S^1}\wedge f)\circ\chi_d]$, where $\chi_d:S^{d+1}\cong S^1\wedge S^d$ is the ordered sphere identification. [math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps](https://alphabetamath.cc/item/def-sequential-prespectrum-spectrum-and-adjoint-structure-maps) [math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum)

[F4] For based CGWH spaces, iterated loop components are the higher homotopy groups, with the operation given by concatenation in the first cube coordinate. The topological suspension–loop transpose preserves based homotopies. These apply to the strict spaces in [F3], and to spheres as sources. [math:cor-higher-homotopy-groups-are-iterated-loop-components](https://alphabetamath.cc/item/cor-higher-homotopy-groups-are-iterated-loop-components) [math:prop-loop-suspension-adjunction-on-based-homotopy-classes](https://alphabetamath.cc/item/prop-loop-suspension-adjunction-on-based-homotopy-classes)

[F5] The precise pointed-space homotopy, loop, suspension and mapping-group inputs used beyond [F1] are the three source records in External input. Homotopic pointed maps induce equal homomorphisms; thus coherent compatibility becomes an equality on the specified homotopy groups.

### External input
Reference 0 supplies the Kan sphere-class construction, its group laws and functoriality, corepresentability by a pointed sphere, and the singular comparison. Reference 1 supplies the based loop model and its one-degree homotopy-group comparison; iteration identifies $\pi_d(Z)$ with components of iterated loops. Reference 2 supplies the pointed suspension–loop mapping-space adjunction and the functorial stable abelian group law. These inputs apply in pointed spaces and spectra under [F1]; the CGWH comparison uses [F4]. Only these premises are imported. The construction of $b_n$, the colimit comparison, the strict-model compatibility calculation and the suspension-index calculation below are local.

### Proof
1.1 By [F5], $\lambda_d$ is a natural isomorphism of abelian groups for $d\geq2$. Since $\alpha_n$ is an equivalence, every specified $b_n$ is an isomorphism. Homotopy invariance makes the system well-defined from the coherent tower, and makes coherent maps of towers induce compatible homomorphisms. To compare with spectra, the left adjoint in [F1] preserves the suspension pushout: mapping its image into any spectrum gives, by adjunction, exactly the pullback specifying that pushout. It preserves the zero object as well. Thus $\Sigma^\infty S^d\simeq\mathbb S[d]$, using the same ordered suspensions as in the Statement. For $d=n+k$, shifting both arguments and then applying the pointed adjunction gives $\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[k],\mathcal Y)\simeq\operatorname{Map}_{\mathrm{Sp}}(\Sigma^\infty S^d,\mathcal Y[n])\simeq\operatorname{Map}_{S_*}(S^d,Y_n)$. Taking components gives the required stage isomorphism, respecting the group laws because the adjunction and shifts identify the double-suspension loop operations of [F5]. Increasing $n$ once replaces a sphere map by the adjoint of $\alpha_n$ composed with that map; by definition this induces $b_n$. This proves compatibility and naturality, including the chosen sphere order. [F1, F5, given]

2.1 By [F2], cutoff changes give canonical colimit isomorphisms. Since all $b_n$ are isomorphisms, the map from any stage into the colimit is an isomorphism: represent a class at a common later stage and use the inverse composite of the intervening $b_n$ to return to that stage. Step 1.1 therefore identifies $\pi_k(\mathcal Y)$ with $G_k(Y)$. For a given compatible strict model, [F4] transposes $\widetilde\sigma_n\circ f$ to $(t,u)\mapsto\sigma_n(t\wedge f(u))$; under $\chi_d$ this is exactly the bonding representative of [F3]. The natural singular comparison in [F5] and the specified $q_n$ consequently intertwine the two group systems, so [F2] gives $G_k(E)\cong G_k(Y)$. This computation also retains the realization convention for Kan levels described in [F2]. Finally [F1] gives $\Omega^\infty((\mathcal Y[1])[n])\simeq Y_{n+1}$ coherently, so the tail represents $\mathcal Y[1]$. The shift equivalence gives $\operatorname{Map}(\mathbb S[k],\mathcal Y[1])\simeq\operatorname{Map}(\mathbb S[k-1],\mathcal Y)$, and hence the asserted suspension formula as an abelian group isomorphism. At stage $n$ of the tail the same degree is $n+k=(n+1)+(k-1)$, confirming the index. [F1, F2, F3, F4, F5, step 1.1, given] ∎


## Stable rotation and exact coherent products

[Open item](item-lem-author-e0b0bf18ed2b-exactness-and-products) · level 1


### Statement
Assume the Axiom of Choice and the compatible nested Grothendieck universes $U\in V\in W$, with $\omega\in U$, stipulated by the supplied stable spectra and filtration constructions. All indexing diagrams and objects obey those size bounds.

In $\mathrm{Sp}$ every small coherent diagram has a homotopy limit and colimit. For $f:A\to B$ define $\operatorname{fib}(f)=A\times_B0$ and $\operatorname{cofib}(f)=B\amalg_A0$. Then $\operatorname{cofib}(f)\simeq\operatorname{fib}(f)[1]$. A fiber sequence $F\to A\to B$, including its nullhomotopy and defining pullback square, extends to the cofiber triangle $F\to A\to B\to F[1]$. Products are coherent homotopy products. Smash with a fixed spectrum preserves finite limits and finite colimits in either variable.

### Facts & Assumptions
**Given:** Spectra, a map $f$ and a small indexing infinity-category. Write $0$ for the zero object and $[1]$ for suspension, $E[1]=0\amalg_E0$.

**Goal:** Establish rotation, products and separate exactness of smash.

[F1] The stable enhancement gives all small limits and colimits, equality of pushouts and pullbacks, and a symmetric monoidal smash preserving colimits separately. [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)

[A1] Retain the classical foundations and compatible universe bounds of the supplied constructions, including the Axiom of Choice and $\omega\in U$ for fixed $U\in V\in W$. These are premises of the selected framework; the algebraic image and product arguments below assert no necessity of Choice for the corresponding abstract group facts. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof
1.1 The limits and colimits exist by [F1] and are homotopy limits and colimits because their universal properties are equivalences of mapping spaces. In particular, the limit over a discrete small indexing category is the homotopy product, with the coherences supplied by the limit construction. [F1]

1.2 The square defining $F$ as the fiber of $A\to B$ is a pullback and hence a pushout. Thus $B\simeq A\amalg_F0$. Pasting pushouts gives $B\amalg_A0\simeq(A\amalg_F0)\amalg_A0\simeq0\amalg_F0=F[1]$. The induced map $B\to F[1]$ completes the stated cofiber triangle. Taking $F=\operatorname{fib}(f)$ gives $\operatorname{cofib}(f)\simeq\operatorname{fib}(f)[1]$. [F1, given]

2.1 Smash with a fixed spectrum preserves colimits and therefore the zero object and pushout squares. A pullback square is a pushout square, so its image is again both a pushout and a pullback. Preservation of the zero object and pullbacks gives preservation of finite limits; finite colimits are preserved by assumption. The same argument applies in the other variable. This proves the statement. [F1, step 1.1, step 1.2] ∎


## Restriction, stalks and cohomological support

[Open item](item-lem-author-4f716d60801a-restriction-support) · level 1


### Statement
Assume the Axiom of Choice and fix suitable Grothendieck universes containing $\omega$ and the scheme data, with larger universes for the categories, as in the derived-enhancement input. The existence of these universes is a standing size assumption. Let $X$ be a scheme, $U\subseteq X$ open with structure sheaf $\mathcal O_U=\mathcal O_X|_U$, and $x\in X$. Write $\mathcal D(X)$ for the derived infinity-category of all Zariski $\mathcal O_X$-module sheaves, and use the analogous notation for $U$ and for modules over the stalk ring $\mathcal O_{X,x}$. Restriction and taking the stalk at $x$ induce exact functors $\mathcal D(X)\to\mathcal D(U)$ and $\mathcal D(X)\to\mathcal D(\mathcal O_{X,x})$. Both commute with cohomology: $H^n(E|_U)\cong H^n(E)|_U$ and $H^n(E_x)\cong H^n(E)_x$, where $E_x$ denotes the derived object represented by the degreewise stalk complex.

For $E\in\mathcal D(X)$ put $\operatorname{Supp}(E)=\bigcup_{n\in\mathbb Z}\{y\in X:H^n(E)_y\ne0\}$, where $H^n$ denotes the cohomology sheaf. This support is invariant under equivalence. For $T\subseteq X$, it is contained in $T$ exactly when the stalk complex at every point outside $T$ is acyclic. If $T$ is closed, this is equivalent to $E|_{X\setminus T}\simeq0$. Support is unchanged by shifts. For any cofiber sequence $E\to F\to G$, one has $\operatorname{Supp}(G)\subseteq\operatorname{Supp}(E)\cup\operatorname{Supp}(F)$. If $E$ is a retract of $F$, meaning there are maps $i:E\to F$ and $r:F\to E$ with $ri=1_E$ in the homotopy category, then $\operatorname{Supp}(E)\subseteq\operatorname{Supp}(F)$.

### Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)

[math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)

[math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)

[math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)

[thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)

### Facts & Assumptions
**Given:** $X$, $U$, $x$, $T$ and $E$ as stated, under Choice and the fixed universe assumptions.

**Goal:** Establish exactness and all the cohomology and support assertions.

[A1] Choice is used to invoke the derived enhancement in [F1], in the stated fixed universes; no extra choice is needed by the stalkwise argument. The assumptions are [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention).

[F1] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the derived localizations, their homotopy categories, exact functoriality for exact additive functors, and the cone and shift conventions. Every cofiber sequence is equivalent to a cone sequence, using the cochain-map representatives of derived arrows described there.

[F2] [math:def-scheme](https://alphabetamath.cc/item/def-scheme) specifies $(X,\mathcal O_X)$; [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space) specifies its module sheaves and their linear morphisms. [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace) identifies restriction on an open subset with the same sections on its open subsets. [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf) gives germs on neighbourhoods and equality after shrinking. [math:def-kernel-cokernel-image-sheaves](https://alphabetamath.cc/item/def-kernel-cokernel-image-sheaves) computes kernels, images and cokernels of module sheaves by the underlying sheaf formulas with their induced module structures.

[F3] [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise) supplies exactness detection on every stalk for the underlying abelian sheaves. Apply this also to $0\to\mathcal M\to0$ to detect that a sheaf is zero. The module structures in [F2] do not change whether these underlying sequences are exact.

[F4] [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex) gives $H^n(C)=\ker(d^n)/\operatorname{im}(d^{n-1})$. By [math:def-exact-functor-between-abelian-categories](https://alphabetamath.cc/item/def-exact-functor-between-abelian-categories), an exact additive functor preserves kernels, images and cokernels, and hence these cohomology objects.

[F5] [math:thm-long-exact-sequence-in-cohomology](https://alphabetamath.cc/item/thm-long-exact-sequence-in-cohomology) applies to a short exact sequence of cochain complexes in any abelian category, in particular to the degreewise split sequence $0\to D\to\operatorname{Cone}(f)\to C[1]\to0$ for $f:C\to D$, and to its degreewise stalk sequence.

### Proof
1.1 The open restriction in [F2] is an $\mathcal O_U$-module sheaf, and germs of an $\mathcal O_X$-module form an $\mathcal O_{X,x}$-module: multiply representatives after restricting to a common neighbourhood; changing representatives gives the same germ after further shrinking. Linear sheaf morphisms therefore induce linear germ maps. Both operations are additive. For $y\in U$, the identification $(\mathcal M|_U)_y\cong\mathcal M_y$ follows by intersecting each neighbourhood with $U$; the germ equivalence in [F2] proves both surjectivity and injectivity. By [F2] and [F3], taking a stalk preserves short exact sequences of module sheaves, and the displayed stalk identification shows that restriction also preserves them. For a sheaf map $a:\mathcal M\to\mathcal N$, apply this preservation to $0\to\ker(a)\to\mathcal M\to\operatorname{im}(a)\to0$ and $0\to\operatorname{im}(a)\to\mathcal N\to\operatorname{coker}(a)\to0$: the induced projection onto the image and inclusion of the image identify the kernel, image and cokernel after applying either functor. Thus both functors are exact in the sense of [F4]. They commute with cohomology, so preserve quasi-isomorphisms. Under [A1], [F1] now gives the exact derived functors asserted in the Statement. Their action is the degreewise restriction or stalk operation, yielding both cohomology identifications. Cohomology of complexes sends quasi-isomorphisms to isomorphisms, so descends by localization to the homotopy category in [F1]; equivalent derived objects therefore have isomorphic cohomology sheaves. In particular, their supports agree. [A1, F1, F2, F3, F4, given]

2.1 By step 1.1, $H^n(E_x)\cong H^n(E)_x$, so the definition of support gives the stalkwise acyclicity criterion for every subset $T$. A complex represents zero in the localization exactly when it is acyclic: an acyclic complex is linked to zero by its quasi-isomorphism $0\to C$, and the converse follows from cohomology invariance. For closed $T$, apply step 1.1 and the zero-sheaf criterion in [F3] to the cohomology sheaves on $X\setminus T$. This proves the open-complement equivalence. The shift convention in [F1] gives $H^n(E[k])\cong H^{n+k}(E)$ for each integer $k$, so shifting does not change the union defining support. For a cofiber sequence, [F1] allows a presentation by $f:C\to D$ and its cone $K$. The sequence in [F5] remains short exact on stalks by step 1.1. Its long exact cohomology sequence contains $H^n(D_y)\to H^n(K_y)\to H^{n+1}(C_y)$. Outside the union of the first two supports, both outer terms vanish for every $n$, forcing the middle term to vanish; support invariance transfers this conclusion to the given cofiber sequence. Finally, applying the cohomology and stalk functors to $ri=1_E$ makes $H^n(E)_y$ a retract of $H^n(F)_y$. If the latter is zero, the identity of the former is zero, so the former vanishes. This proves the retract assertion and all remaining claims. [F1, F3, F4, F5, step 1.1, given] ∎


## Eilenberg–Mac Lane spectrum of a chain complex

[Open item](item-thm-author-80e2d7bee57f-eilenberg-maclane-input) · level 1


### Statement
For every unbounded chain complex $D$ of abelian groups, the cited Eilenberg–Mac Lane construction gives a functorial pointed simplicial Omega spectrum $HD$ and natural isomorphisms from its stable homotopy groups to $H_n(D)$ for all integers $n$. An Omega spectrum is a sequential spectrum whose adjoint structure maps are weak equivalences.

### Statement references

[math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category)

[math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)

[lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance)

[math:def-weak-homotopy-equivalence](https://alphabetamath.cc/item/def-weak-homotopy-equivalence)

### External input
Pointed simplicial sequential spectra and their stable groups use the explicit realization convention of [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance): the circle is $K=\Delta^1/\partial\Delta^1$, structure maps are $s_r:K\wedge X_r\to X_{r+1}$, and $\pi_n(X)=G_n(X)=\operatorname{colim}_{r\gg0}\pi_{r+n}(|X_r|)$ with the specified suspension bonding maps. The source's right-hand circle coordinate is put first by the switch $K\wedge X_r\to X_r\wedge K$. Here $\Omega Z=\operatorname{Map}_*(K,Z)$ is the pointed simplicial set whose $m$-simplices are pointed simplicial maps $K\wedge\Delta[m]_+\to Z$, where $+$ adjoins a disjoint basepoint; simplicial operators act by precomposition and the basepoint is the constant map. The adjoint of $s_r$ sends $x$ to the map $k\mapsto s_r(k,x)$. A simplicial weak equivalence means a map whose geometric realization is a weak homotopy equivalence in [math:def-weak-homotopy-equivalence](https://alphabetamath.cc/item/def-weak-homotopy-equivalence).

This is the one-object $\mathbb Z$ case of the cited construction and equation (B.1.9). The result and its construction are imported from the cited literature; no local reconstruction is claimed. The source defines the levels using the functor $W$ and explicitly states that the underlying spectra are Omega spectra. The model is a naive module spectrum, not the symmetric Eilenberg–Mac Lane functor distinguished in the source's Remark B.1.10.


## K-flat roofs give the full derived localization

[Open item](item-lem-author-c5bc2838d897-kflat-addendum-localization-equivalence) · level 1


### Statement
Assume AC. For any scheme X let A=Mod($O_X$), the abelian category of all Zariski module sheaves, $K=K$(A) its cochain homotopy category, and H⊆K the full subcategory on K-flat complexes. Let S be the quasi-isomorphisms in K and $S_H$=S∩Arrows(H). Then the functor induced by actual inclusion

$$(S_H)^{-1}H\longrightarrow S^{-1}K=D(\mathcal O_X)$$

is an exact equivalence, including full faithfulness. Consequently the actual inclusion induces an exact equivalence F(X)[$W_X$⁻¹]→𝒟(X) of stable infinity-localizations, with F(X) the ordinary category of K-flat complexes and $W_X$ its quasi-isomorphisms, and 𝒟(X) the supplied derived enhancement. The ordinary-localization assertion holds for any ringed space. No K-flat complex is assumed K-projective, and morphisms in these localizations are not replaced by chain maps without denominators.

### Statement references
[math:thm-abelian-sheaves-form-abelian-category](https://alphabetamath.cc/item/thm-abelian-sheaves-form-abelian-category)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-ringed-space](https://alphabetamath.cc/item/def-ringed-space)

[math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:thm-the-homotopy-category-of-an-abelian-category-is-triangulated](https://alphabetamath.cc/item/thm-the-homotopy-category-of-an-abelian-category-is-triangulated)

### Facts & Assumptions
**Given:** X, all unbounded sheaf complexes, AC and fixed Grothendieck universes containing $\omega$. Assume the existence of sufficiently large nested universes, independently of AC, so that the objects, arrows and denominator diagrams being localized are sets in the working universe. AC is retained for the imported unbounded replacements and for set-indexed choices of representatives and quasi-inverse data; no proper-class choice is used.

**Goal:** Prove essential surjectivity, fullness and faithfulness of this actual localization functor, then its stable enhanced upgrade.

[F0] [math:def-scheme](https://alphabetamath.cc/item/def-scheme) and [math:def-ringed-space](https://alphabetamath.cc/item/def-ringed-space) fix the geometric object types. [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space) fixes module sheaves and their morphisms. Use [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) for the size convention. The module-sheaf category is abelian by [math:thm-abelian-sheaves-form-abelian-category](https://alphabetamath.cc/item/thm-abelian-sheaves-form-abelian-category), and [math:thm-the-homotopy-category-of-an-abelian-category-is-triangulated](https://alphabetamath.cc/item/thm-the-homotopy-category-of-an-abelian-category-is-triangulated) gives the ambient homotopy category with its usual shift and cone triangles, reindexed from chains by $C_n=C^{-n}$. The cochain, homotopy, quasi-isomorphism and cone conventions are those explicitly supplied by [F1]–[F3].

[F1] [thm-author-c5bc2838d897-kflat-addendum-verdier-criterion](item-thm-author-c5bc2838d897-kflat-addendum-verdier-criterion) gives Stacks Lemma 13.5.8 and the quasi-isomorphism multiplicative system, with the precise right-roof/common-refinement calculus. Its Definition fixes pretriangulated categories, exact ordinary functors, saturation, compatibility, and the universal property of ordinary localization.

[F2] [thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input](item-thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input) defines K-flatness using direct-sum total tensor and supplies its sheaf-complex conventions. It includes Stacks Lemma 20.26.12 (06YF), providing R→M K-flat and quasi-isomorphic for every complex M, and Lemma 20.26.6 (079S), providing shift/cone closure. These apply on every ringed space, without boundedness or quasi-coherence restrictions.

[F3] [thm-author-c5bc2838d897-kcoherent-enhanced-localization-input](item-thm-author-c5bc2838d897-kcoherent-enhanced-localization-input) supplies the dg-nerve, finite chain-interval and stability conventions, HA Proposition 1.3.4.5 (chain-homotopy localization and dg nerve), and Drew Theorem 1.3 (stable Verdier localization). [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the infinity-localization universal property including natural transformations, identifies 𝒟(X) as localization of all complexes with h𝒟(X)=D($O_X$), and supplies the canonical cone cofibers. A stable infinity-category has zero and finite limits and colimits, with pushouts exactly pullbacks; an exact functor preserves finite limits and colimits. Infinity-localization of an ordinary category means localization of its ordinary nerve.

[F4] The Definition, Source contract [F4], and External input of [thm-author-c5bc2838d897-kflat-addendum-verdier-criterion](item-thm-author-c5bc2838d897-kflat-addendum-verdier-criterion) explicitly import the adjunction $h\dashv N$ of HTT Proposition 1.2.3.1: maps $C\to N(B)$ correspond naturally to ordinary functors $hC\to B$. Here $N$ is the ordinary nerve, $hC$ is the ordinary homotopy category, and $B$ is any ordinary category in the working universe. The localization consequence is derived in step 3.1 below, rather than attributed to the supplier's Statement.

[F5] [Higher Algebra, the cited stable mapping and exactness passages](https://www.math.ias.edu/~lurie/papers/HA.pdf), reference 0, imports the natural suspension/loop mapping-space comparison and the exactness criterion under its stable-category hypotheses. In particular, for $m\geq1$ it identifies $\pi_m\operatorname{Map}_{\mathcal C}(P,Q)_0$ with $\operatorname{Hom}_{h\mathcal C}(P[m],Q)$; in degree zero the set of components is $\operatorname{Hom}_{h\mathcal C}(P,Q)$.

[F6] [math:def-weak-homotopy-equivalence](https://alphabetamath.cc/item/def-weak-homotopy-equivalence) defines the component-bijection and all-basepoint homotopy-group test. [Higher Topos Theory, the cited spaces and equivalence passages](https://www.math.ias.edu/~lurie/papers/HTT.pdf), reference 1, supplies the passage to spaces as homotopy types and the fully faithful plus essentially surjective criterion for equivalence of infinity-categories. A mapping space is pointed here by the zero morphism, and its homotopy groups mean those of its homotopy type. The test uses component sets in degree zero, and groups only in positive degrees.

[F7] [math:thm-the-cone-long-exact-sequence](https://alphabetamath.cc/item/thm-the-cone-long-exact-sequence) supplies the long exact sequence of homology for a cone in any abelian category. Reindexing by $C_n=C^{-n}$ gives the cochain sequence with consecutive terms $H^n(P)\to H^n(Q)\to H^n(\operatorname{Cone}(f))\to H^{n+1}(P)\to H^{n+1}(Q)$ for $f:P\to Q$.

### External input
Only the foundational premises [F5] and [F6] are directly imported here, with the exact locators, hypotheses and reading limits in references 0 and 1. The inputs [F1]–[F4] are supplied by the declared local items; [F6] also uses the published weak-equivalence definition, and [F7] uses the published cone long exact sequence. The roof argument, the application of the nerve adjunction to localization, and the upgrade of this actual inclusion functor are local arguments; no proof of the cited infinity-category foundations is claimed.

### Proof
1.1 The subcategory H is full because between K-flat complexes it keeps all chain maps modulo all chain homotopies. K-flatness is invariant under chain homotopy equivalence: if $f-g=dh+hd$, tensoring with a fixed complex $N$ takes $h$ to $H(n\otimes p)=(-1)^i n\otimes h(p)$ for $n$ of degree $i$; the total differential gives $T(N,f)-T(N,g)=dH+Hd$. Thus tensoring preserves homotopy equivalences, hence the acyclicity test defining K-flatness. Zero and shifts are K-flat, and the cone of a map between K-flat complexes is K-flat by [F2]. The ambient K is triangulated by [F0]. H is additive (finite direct sums follow from zero and cones of zero maps), is invariant under homotopy equivalence, and is closed under shifts and cones. The ambient cone triangles therefore give its inherited pretriangulated structure: TR1 and rotation stay inside H, and the ambient TR3 completion is a morphism in H by fullness. By [F1], S is saturated and compatible with the triangulated structure, and S⁻¹$K=D$($O_X$). [F0, F1, F2, given]

2.1 Every M∈K receives a quasi-isomorphism R→M with R K-flat by [F2]. This verifies the replacement hypothesis of Stacks Lemma 13.5.8 for every ambient object, without boundedness or global scheme hypotheses. Together with step 1.1 all its hypotheses hold. Thus $S_H$ is a saturated compatible multiplicative system and ($S_H$)⁻¹H→S⁻¹K is an exact equivalence by [F1]. The following two steps make the full-faithfulness content explicit. [F1, F2, step 1.1]

2.2 For fullness, let P,Q∈H and represent a derived morphism by the right roof $P\xleftarrow{s}M\xrightarrow{a}Q$ in K, with s∈S, using [F1]. Choose r:R→M as in [F2]. Then $P\xleftarrow{sr}R\xrightarrow{ar}Q$ is a roof in H with denominator sr∈$S_H$ and represents the same ambient derived morphism. Thus the map on each localized Hom set is surjective. Essential surjectivity on objects follows from the same replacement R→M. [F1, F2, step 1.1]

2.3 For faithfulness, let roofs $P\xleftarrow{s_i}R_i\xrightarrow{a_i}Q$ in H, for $i=1,2$, have equal images in S⁻¹K. The right-calculus equivalence relation in [F1] provides a common refining roof $P\xleftarrow{t}M\xrightarrow{b}Q$ in K and maps $u_i$:M→$R_i$ in K with $s_i$ $u_i$=t∈S and $a_i$ $u_i$=b. Choose a K-flat quasi-isomorphism r:R→M. Then $u_i$ r:R→$R_i$ are morphisms of the full subcategory H, the common denominator tr belongs to $S_H$, and $s_i$ $u_i$ r=tr and $a_i$ $u_i$ r=br as equalities in H. They are equalities of homotopy classes; any witnessing chain homotopies are the same homotopies in the full complex subcategory, so no lifting of homotopies is needed. Hence $P\xleftarrow{tr}R\xrightarrow{br}Q$ is a common refining roof in H. The two original roofs are equal in ($S_H$)⁻¹H by the same [F1] equivalence relation. Thus the map on Hom sets is injective. [F1, F2, step 1.1]

2.4 Let $C_X$=F(X)[$W_X$⁻¹] denote the common model's fiber. K-flat complexes are closed under tensor with the finite chain interval: with its two vertices and one edge, the interval tensor is the cone of $(-1,1):P\to P\oplus P$, up to the standard chain/cochain reindexing and tensor-order signs of [F2]–[F3]. Finite sums, shifts and cones stay K-flat by step 1.1. First localizing F(X) at chain homotopy equivalences therefore gives its dg nerve by [F3], which is stable by shift/cone closure. Its homotopy category is H: the supplied dg-nerve construction has cochain maps as edges, and identifies two such edges precisely modulo $f-g=dh+hd$. Its full subcategory of acyclic objects contains zero and is closed under shifts and cones: in [F7] vanishing of the outer cohomology terms forces that of the cone terms. The same exact sequence says that a map is a quasi-isomorphism exactly when its cone is acyclic, since vanishing of all cone terms is equivalent to each $H^n(f)$ being an isomorphism. Drew's theorem in [F3] thus identifies the further quasi-isomorphism localization with the stable Verdier quotient, so $C_X$ is stable. Inverting quasi-isomorphisms already inverts chain homotopy equivalences; the two successive localizations consequently have the same functor-category universal property as F(X)[$W_X$⁻¹]. Actual inclusion into all complexes therefore supplies $I_X:C_X\to\mathcal D(X)$. [F1, F2, F3, F7, step 1.1]

3.1 For an infinity-category $C$, arrows $W$ and localization $L=C[W^{-1}]$, test its functor-category universal property against $N(B)$ for an ordinary category $B$. By [F4], maps to $N(B)$ correspond to ordinary functors out of $hC$. This also identifies natural transformations: the generators-and-relations presentation in that supplier gives $h(C\times\Delta^n)=hC\times[n]$. Indeed an edge in the product factors into its $C$ edge and its ordinal edge; the two triangles of each product square impose their commutation, with exactly the relations in $hC$ and $[n]$. Thus maps $C\times\Delta^n\to N(B)$ are functors $hC\times[n]\to B$, and the functor infinity-category is the ordinary nerve of the category of functors $hC\to B$ and natural transformations. The localization property therefore identifies $\operatorname{Fun}(hL,B)$ with the full subcategory of $\operatorname{Fun}(hC,B)$ inverting the images of $W$, naturally in $B$. This is the ordinary localization property including transformations; its uniqueness up to equivalence gives $hL\simeq(hC)[(hW)^{-1}]$, compatibly with the localization functor. Apply this after the chain-homotopy localization in step 2.4, whose homotopy category is H. We obtain $hC_X\simeq(S_H)^{-1}H$. Compatibility for inclusion identifies $hI_X$ with the ordinary inclusion-induced equivalence in steps 2.1–2.3. [F1, F3, F4, step 2.1, step 2.2, step 2.3, step 2.4]

3.2 Consider inclusion from the dg nerve of K-flat complexes into the dg nerve of all complexes, followed by the supplied localization to $\mathcal D(X)$. This functor preserves zero and every cofiber sequence: every edge in a dg nerve is an actual cochain map, and its canonical cone square represents its cofiber by [F3]. The inclusion preserves that same square and its nullhomotopy, and the supplied ambient derived localization preserves these cone cofibers. It is therefore exact by [F5]. It sends every acyclic K-flat complex to zero, since its map to zero is a quasi-isomorphism. The exact-functor universal property of the stable Verdier quotient in [F3] now factors it through an exact functor $C_X\to\mathcal D(X)$. This factorization agrees with the actual inclusion-induced $I_X$: both factor the same functor from the dg nerve and the localization universal property identifies such factorizations including natural transformations. Hence $I_X$ itself is exact. [F3, F5, step 2.4]

4.1 For $P,Q\in C_X$ and $m\geq1$, [F5] identifies the homotopy group at zero of its mapping space with $\operatorname{Hom}_{hC_X}(P[m],Q)$, and similarly in $\mathcal D(X)$; degree zero gives the sets of components. Exactness of $I_X$ identifies shifts, so the full faithfulness of $hI_X$ identifies these groups and component sets. This comparison also handles all basepoints: [F5] gives $\operatorname{Map}(P,Q)\simeq\Omega\operatorname{Map}(P[-1],Q)$ naturally for exact functors. In this loop model, concatenate with a loop representing any chosen point; concatenation with its reversed loop is a homotopy inverse and moves the zero component to that point's component. The induced map is a loop map, so these translations commute with it up to homotopy. Thus its homotopy-group isomorphisms at zero transfer to every source basepoint. By [F6] every $\operatorname{Map}(P,Q)\to\operatorname{Map}(I_XP,I_XQ)$ is an equivalence of spaces. Essential surjectivity follows from $hI_X$, so [F6] makes $I_X$ an equivalence, already exact by step 3.2. This proves exactly the missing fiber comparison for the unchanged coherent-family construction. [F5, F6, step 3.1, step 3.2] ∎


## Strong monoidal transport from a product-base cocartesian family

[Open item](item-lem-author-c5bc2838d897-monoidal-transport-product-family) · level 1


### Statement
Let $S=N(\mathrm{Fin}_*)$ and let $q:E\to B\times S$ be a cocartesian fibration of infinity-categories. Assume that for each $b\in B$, the inert transports in the pullback $E_b^{\otimes}\to S$ induce equivalences $E_{(b,n)}\simeq E_{(b,1)}^n$ for all $n\geq0$; the $n=0$ condition means $E_{(b,0)}$ is terminal. Then $q$ determines one coherent functor from $B$ to symmetric monoidal infinity-categories and strong symmetric monoidal functors. Its value at $b$ is $E_b^{\otimes}\to S$, and its transport for $u:b\to b'$ is induced by $q$-cocartesian transport over $(u,\mathrm{id})$. It preserves every $S$-cocartesian transport, including active tensor operations and the nullary unit, with all composition/higher coherences.

### Facts & Assumptions
**Given:** One actual cocartesian fibration over the PRODUCT $B\times S$, and the specified Segal/unit equivalences. Separate fibrations over $B$ and $S$ do not constitute the hypothesis.

**Goal:** Derive strong symmetric monoidal $B$-transports from that one family.

[F1] [thm-author-c5bc2838d897-monoidal-transport-straightening-input](item-thm-author-c5bc2838d897-monoidal-transport-straightening-input) supplies straightening with its morphisms, exponential currying, and the HA symmetric monoidal/strong monoidal criteria.

[F2] For formulation as well as argument, use the same supplier's Facts [F4]–[F7] and [F9]: its compatible-universe conventions, simplicial model of infinity-categories, functors and equivalences, ordinary nerve, $\mathrm{Cat}_\infty$ and functor infinity-categories, cocartesian fibrations, fibers and coherent transport, and $\mathrm{Fin}_*$ with its inert projections and active folds. These are the interfaces supplied by [thm-author-c5bc2838d897-monoidal-transport-straightening-input](item-thm-author-c5bc2838d897-monoidal-transport-straightening-input), not additional conclusions of this lemma. Write $E_b^\otimes=E\times_{B\times S}(\{b\}\times S)$ and $E_{(b,n)}=E\times_{B\times S}\{(b,\langle n\rangle)\}$. A full subcategory spanned by specified objects means the simplicial subset containing exactly the simplices whose vertices are those objects.

### Proof
1.1 Straighten $q$ to $F:B\times S\to\mathrm{Cat}_\infty$. Currying is the exponential equivalence $\operatorname{Fun}(B\times S,\mathrm{Cat}_\infty)\simeq\operatorname{Fun}(B,\operatorname{Fun}(S,\mathrm{Cat}_\infty))$, so it gives one functor $G:B\to\operatorname{Fun}(S,\mathrm{Cat}_\infty)$, with $G(b)=F(b,-)$. The pullback $E_b^{\otimes}\to S$ is its unstraightening. By the assumed inert Segal equivalences and terminal zeroth value, this is a symmetric monoidal infinity-category. [F1, F2, given]

2.1 An edge $u:b\to b'$ gives the actual natural transformation $G(u):F(b,-)\to F(b',-)$ in $\operatorname{Fun}(S,\mathrm{Cat}_\infty)$. Under the straightening equivalence whose morphisms preserve cocartesian arrows, it gives a map $E_b^{\otimes}\to E_{b'}^{\otimes}$ OVER $S$ preserving ALL $S$-cocartesian arrows. Its component at $s\in S$ is the $q$-transport along $(u,\mathrm{id}_s)$. Thus it is strong symmetric monoidal by the criterion in [F1], not just a map preserving inert arrows. [F1, F2, step 1.1]

3.1 Explicitly, for every $\alpha:s\to t$ in $S$, naturality in the curried functor gives an equivalence $F(b',\alpha)\circ F(u,\mathrm{id}_s)\simeq F(u,\mathrm{id}_t)\circ F(b,\alpha)$. Both sides are transports along the same composite arrow $(u,\alpha)$ in the product base. For $\alpha:\langle2\rangle\to\langle1\rangle$ this is the tensor equivalence, and for $\alpha:\langle0\rangle\to\langle1\rangle$, together with terminal $E_{(b,0)}$, it is the unit equivalence. Hence the active and nullary operations are preserved, not merely the coordinate projections. [F1, F2, step 1.1, step 2.1]

4.1 Every simplex of $B$ is already sent by $G$ to a simplex of $\operatorname{Fun}(S,\mathrm{Cat}_\infty)$. Unstraightening its transformations retains their full compositions and all higher coherences. The full subcategory of $\operatorname{Fun}(S,\mathrm{Cat}_\infty)$ on objects satisfying the Segal/unit conditions contains every $G(b)$, and, by step 2.1, its transformations correspond to strong symmetric monoidal functors. Therefore $G$ factors through that model of symmetric monoidal infinity-categories, proving the asserted coherent diagram. No higher coherence has been inferred from pointwise equivalences. [F1, F2, step 1.1, step 2.1, step 3.1] ∎


## Affine bundle K zero is the projective split group

[Open item](item-lem-author-3a003d7b5208-affine-bundle-split-group) · level 1


### Statement
Assume the Axiom of Choice. For a commutative unital ring $A$ and $X=\operatorname{Spec}A$, associated sheaf induces an isomorphism from the split Grothendieck group of finitely generated projective $A$-modules to the vector-bundle Grothendieck group of $X$.

A finitely generated projective module is a finitely generated module with the lifting property through surjective module maps. A vector bundle is a locally finite free $\mathcal O_X$-module. Its Grothendieck group is generated by isomorphism classes $[E]$, with $[E]=[E']+[E'']$ for every short exact sequence $0\to E'\to E\to E''\to0$ of vector bundles. The split group has only the corresponding direct-sum relations.

### Facts & Assumptions
**Given:** AC, a commutative unital ring $A$, and $X=\operatorname{Spec}A$.

**Goal:** Compare the two stated group presentations.

[A1] The Axiom of Choice is assumed, as required by the affine bundle–module equivalence in [F1]. No additional choice is used in the group-presentation argument. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] Associated sheaf is an additive equivalence from finite projective modules to vector bundles on $X$, and every short exact sequence of these bundles splits. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

[F2] An additive equivalence of essentially small additive categories induces an isomorphism on split Grothendieck groups, carrying each object class to its image class. Here essentially small means that a set of objects represents every isomorphism class. The split group is the free abelian group on these classes modulo the direct-sum relations. [lem-author-3a003d7b5208-split-group-equivalence](item-lem-author-3a003d7b5208-split-group-equivalence)


[F3] The affine scheme has underlying space $\operatorname{Spec}A$ and structure sheaf $\mathcal O_X$. The associated-sheaf construction sends an $A$-module $P$ to the module sheaf $\widetilde P$, functorially in module maps. Exactness for module sheaves means equality of the image sheaf and kernel sheaf; a short exact sequence has zero terms at both ends. [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) [math:def-associated-sheaf-module-affine-scheme](https://alphabetamath.cc/item/def-associated-sheaf-module-affine-scheme) [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves)

[F4] An additive category has abelian groups of morphisms with bilinear composition, a zero object, and finite biproducts. [math:def-additive-category](https://alphabetamath.cc/item/def-additive-category)

### Proof
**Proof technique:** Split the exact-sequence relations and transport the presentation.

1.1 The two categories in [F1] satisfy the hypotheses of [F2]. For smallness, a finitely generated module $M$ has a finite generating list $m_1,\ldots,m_n$, so the map $q:A^n\to M$ given by $q(a_1,\ldots,a_n)=\sum_i a_i m_i$ is surjective. Here $A^n$ is the module of $n$-tuples with coordinatewise operations, including $A^0=0$. If $N=\ker q$, the map $A^n/N\to M$ sending $a+N$ to $q(a)$ is well-defined, injective and surjective: equality of images is exactly membership of their difference in $N$. For all finite $n$, the submodules $N\subseteq A^n$ form a set, being subsets of a fixed set. Thus the quotients $A^n/N$ form a set of representatives for finitely generated modules; retaining the projective quotients gives one for finite projectives. By [F1] under [A1], their associated sheaves represent all bundles. Morphisms form sets: module homomorphisms are functions satisfying linearity, and sheaf morphisms are families of section maps indexed by the set of opens. In both categories morphisms add pointwise and composition is bilinear. The zero module or sheaf is a zero object; finite direct sums with their inclusions and projections are biproducts. Finite sums of finite projectives remain finitely generated and projective: concatenate their generators and lift each summand map through a surjection, then add the lifts. Finite sums of bundles are finite locally free by intersecting finitely many local free charts. Hence both categories are additive by [F4] and essentially small as required by [F2]. [A1, F1, F2, F4, construct]

2.1 Every direct sum $E'\oplus E''$ gives a short exact sequence with inclusion into the first factor and projection onto the second. Indeed the inclusion has zero kernel, the projection has image $E''$, and its kernel equals the image of the inclusion, as module sheaves in [F3]. Thus each split relation is an exact-sequence relation. Conversely, [F1] under [A1] identifies the middle term of every short exact sequence of bundles with $E'\oplus E''$, so its relation is a split relation. Both presentations use the same isomorphism classes, and their relation subgroups therefore coincide. The associated-sheaf equivalence in [F1] induces an isomorphism of split groups by [F2], whose hypotheses were verified in step 1.1. Composing with the equality of the bundle presentations gives the stated isomorphism, carrying $[P]$ to $[\widetilde P]$ for the construction in [F3]. [A1, F1, F2, F3, step 1.1, construct] ∎


## External exact extension by zero for module sheaves

[Open item](item-thm-author-50b5133c29cc-klocal-extension-by-zero-input) · level 1


### Statement
For an open subspace $v:V\hookrightarrow X$ of a ringed space, module extension by zero $v_!$ is an exact additive functor left adjoint to exact restriction $v^*$. Its stalk is the given module stalk at points of $V$ and zero outside $V$, and $v^*v_!=\mathrm{id}$. Assuming the Axiom of Choice and fixed suitable universes for the derived constructions, applying both functors degreewise to complexes preserves quasi-isomorphisms and mapping cones, so they induce actual exact functors on the sheaf-derived infinity-localizations for these arbitrary ringed spaces. Their ordinary natural unit/counit maps induce natural transformations there.

### Facts & Assumptions
**Given:** The ringed space and open subspace in the Statement. For the enhanced assertions, assume Choice and fix Grothendieck universes $\mathcal U\in\mathcal V$ with $\omega\in\mathcal U$, taking $X$ and its structure sheaf to be $\mathcal U$-small and all section sets in $\mathcal U$. The existence of these universes is an assumption, not a consequence of Choice. [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[A1] Choice is used only through the supplied unbounded derived enhancement and its resolution/model constructions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] Ringed spaces, module sheaves, open restriction and stalks have their published meanings; $V$ carries $\mathcal O_X|_V$ and $v^*$ denotes restriction of module sheaves. [math:def-ringed-space](https://alphabetamath.cc/item/def-ringed-space) [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space) [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace) [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)

[F2] Import module extension by zero with its adjunction, stalk description and restriction identity from Stacks Definition 6.31.5(5)–(6) and Lemma 6.31.8(2)–(4). Import exactness of both functors and the ordinary degreewise derived construction from Stacks §20.32 opening; Lemma 20.32.8 states the ordinary derived adjunction. The adjunction includes its natural unit and counit. Exact additive functors, adjunctions and natural transformations use the published definitions. [math:def-exact-functor-between-abelian-categories](https://alphabetamath.cc/item/def-exact-functor-between-abelian-categories) [math:def-adjunction-by-unit-counit-and-triangle-identities](https://alphabetamath.cc/item/def-adjunction-by-unit-counit-and-triangle-identities) [math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation)

[F3] Complexes use the chain convention, quasi-isomorphisms induce isomorphisms on all homology objects, and mapping cones use the published direct-sum differential. Additive functors apply degreewise; exact functors preserve quasi-isomorphisms and carry cones to cones by natural chain isomorphisms. Only preservation, not reflection, of quasi-isomorphisms is used. [math:def-category-of-chain-complexes](https://alphabetamath.cc/item/def-category-of-chain-complexes) [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism) [math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map) [math:prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps](https://alphabetamath.cc/item/prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps) [math:cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative](https://alphabetamath.cc/item/cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative) [math:prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences](https://alphabetamath.cc/item/prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences)

[F4] The current ringed-derived enhancement supplies the module-sheaf abelian categories, their stable infinity-localizations, exact infinity-functors induced by exact additive functors, and descent of ordinary natural transformations between such functors. Its proof supplies the coherent cone/cofiber comparison needed for enhanced exactness; this is additional to the bare localization universal property. Its chain/cochain comparison is $C_n=C^{-n}$. [thm-adjudicate-1ef158934564-ringed-derived-enhancement](item-thm-adjudicate-1ef158934564-ringed-derived-enhancement)

[F5] In the Stacks construction of [F2], extension by zero sheafifies the module presheaf whose value on an open $W\subseteq X$ is $\mathcal F(W)$ if $W\subseteq V$ and zero otherwise. Sheafification uses the published twofold plus construction by germ-compatible local presentations. [math:def-sheafification](https://alphabetamath.cc/item/def-sheafification) [math:def-presheaf-plus-construction](https://alphabetamath.cc/item/def-presheaf-plus-construction)

### External input
The two Stacks source contracts supply the sheaf and ordinary derived facts in [F2] and the construction in [F5]. Their proofs are imported to the extent stated in the reading limits. The enhanced conclusion is the local application below of [F4], whose exact-functor interface includes the cone/cofiber comparison. It is not attributed to Stacks §20.32 or to the localization universal property alone.

### Proof

**Goal:** Establish the statement under its stated hypotheses.
**Given:** The data and size assumptions above, with $\mathcal A_X$ and $\mathcal A_V$ denoting the supplied categories of module sheaves.

**Proof technique:** direct application of the sheaf imports, published exact-functor results and the current enhancement interface.

1.1 By [F2], $v_!:\mathcal A_V\to\mathcal A_X$ and $v^*:\mathcal A_X\to\mathcal A_V$ are exact additive functors with the asserted sheaf adjunction, stalks and restriction identity. They preserve the chosen section-size bounds: restriction uses the original section sets, and the presheaf in [F5] has $\mathcal U$-small values. Each plus construction can represent a local presentation by a subset of the set of all pairs $(W,s)$ of an open and a section; deleting repeated identical pairs changes no germ condition or equivalence class. This set of pairs is $\mathcal U$-small by universe closure, so its collections of presentations and their quotients are also $\mathcal U$-small. Applying this twice proves the same bound for sheafification. The degreewise construction in [F3] therefore defines actual functors on complexes. The preservation assertion of [F3] shows that these invert the required quasi-isomorphisms after localization, and its natural chain isomorphisms identify the image of each mapping cone with the cone of the image map. Thus preservation of cones here means the canonical natural comparison, not literal equality of chosen direct sums. [F1, F2, F3, F4, F5, given]

2.1 The functors of step 1.1 meet the exact-additive hypotheses of [F4] in the fixed universes. Apply its exact-functor conclusion to each to obtain actual exact functors on $\mathcal D(V)$ and $\mathcal D(X)$; its cofiber comparison supplies the required enhanced exactness. Apply its natural-transformation conclusion to the sheaf unit $\mathrm{id}\Rightarrow v^*v_!$ and counit $v_!v^*\Rightarrow\mathrm{id}$, whose identity and composite functors are also exact. Their degreewise components commute with differentials and chain maps by ordinary naturality, so these are the descents of the actual chain-level maps. The restriction identity from [F2] likewise descends, up to the canonical equivalences of localization. All enhanced assertions retain [A1] and the stated universe bounds. [A1, F2, F3, F4, step 1.1] ∎

### Remarks
Extension by zero is asserted on all module sheaves, without a quasi-coherence or finiteness hypothesis. Preservation of arbitrary quasi-coherent or perfect complexes is not asserted; the supported-open equivalence consumer checks perfection on the particular support subcategories where it uses these functors.


## Stable determinant commutes with ring maps

[Open item](item-lem-author-da44cda020c0-units-k1-determinant-base-change) · level 1


### Statement
For a unital homomorphism $f:A\to B$ of commutative unital rings, entrywise application of $f$ induces $\mathrm{GL}(A)^{\mathrm{ab}}\to\mathrm{GL}(B)^{\mathrm{ab}}$. The stable determinant homomorphisms commute with this map and with $f:A^\times\to B^\times$.

### Statement references
[lem-author-da44cda020c0-units-k1-stable-matrix-determinant](item-lem-author-da44cda020c0-units-k1-stable-matrix-determinant)

[math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)

[math:def-ring-matrix-product-identity-and-transpose](https://alphabetamath.cc/item/def-ring-matrix-product-identity-and-transpose)

[math:thm-derived-subgroup-is-characteristic-and-abelianization-is-universal](https://alphabetamath.cc/item/thm-derived-subgroup-is-characteristic-and-abelianization-is-universal)

### Facts & Assumptions
**Given:** A unital homomorphism $f:A\to B$ of commutative unital rings.

**Goal:** Prove the stated naturality square.

[F1] Stable determinant is induced by the permutation formula and factors through abelianization. [lem-author-da44cda020c0-units-k1-stable-matrix-determinant](item-lem-author-da44cda020c0-units-k1-stable-matrix-determinant)

[F2] A unital ring homomorphism preserves addition, multiplication and $1$. Consequently it preserves $0$ and additive inverses: $f(0)+f(0)=f(0)$ gives $f(0)=0$, and $f(a)+f(-a)=f(0)=0$ gives $f(-a)=-f(a)$. [math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)

[F3] Matrix products are given by finite sums of products of entries, and $I_n$ has diagonal entries $1$ and off-diagonal entries $0$. [math:def-ring-matrix-product-identity-and-transpose](https://alphabetamath.cc/item/def-ring-matrix-product-identity-and-transpose)

[F4] The abelianization of a group is an abelian quotient, and every homomorphism into an abelian group factors uniquely through the source's abelianization. [math:thm-derived-subgroup-is-characteristic-and-abelianization-is-universal](https://alphabetamath.cc/item/thm-derived-subgroup-is-characteristic-and-abelianization-is-universal)

### Proof
**Proof technique:** Apply the ring homomorphism to the determinant formula.

1.1 Write $f(M)$ for entrywise application. By [F2] and [F3], $f(MN)=f(M)f(N)$ and $f(I_n)=I_n$. If $MN=NM=I_n$, then $f(M)f(N)=f(N)f(M)=I_n$. Entrywise application therefore gives homomorphisms $\mathrm{GL}_n(A)\to\mathrm{GL}_n(B)$; the identity $f(\operatorname{diag}(M,1))=\operatorname{diag}(f(M),1)$ makes them compatible with the stable groups of [F1]. Compose the resulting homomorphism $\mathrm{GL}(A)\to\mathrm{GL}(B)$ with the abelianization quotient of the target. By [F4] this composite factors uniquely through $\mathrm{GL}(A)^{\mathrm{ab}}$, giving the asserted induced map. A unit and its inverse likewise map to a unit and its inverse; multiplicativity in [F2] makes $f:A^\times\to B^\times$ a homomorphism. [given, F1, F2, F3, F4, algebra]

2.1 Applying $f$ to the finite permutation formula gives $f(\det M)=\det(f(M))$: [F2] preserves each finite sum and product, including the signs $1$ and $-1$. The equality is compatible with stabilization and passes to the abelianized groups by [F1] and step 1.1. This is the desired square. [F1, F2, step 1.1, algebra] ∎


## Gluing compatible local determinant homomorphisms

[Open item](item-lem-author-da44cda020c0-units-k1-local-determinant-gluing) · level 1


### Statement
Let $X$ be a ringed space covered by open sets $U_i$. Let $G$ and $G_i$ be groups with homomorphisms $r_i:G\to G_i$, and let $d_i:G_i\to\mathcal O_X(U_i)^\times$ be homomorphisms. Assume that, for every $g\in G$, the sections $d_i(r_i(g))$ agree on every overlap. Then there is a unique homomorphism $d:G\to\mathcal O_X(X)^\times$ whose restriction to each $U_i$ is $d_ir_i$.

### Facts & Assumptions
**Given:** The cover, groups, maps and overlap compatibility in the statement.

**Goal:** Construct the unique global homomorphism $d$.

[F1] Compatible local units glue uniquely, and gluing respects multiplication. [lem-author-da44cda020c0-units-k1-gluing-units](item-lem-author-da44cda020c0-units-k1-gluing-units)

[F2] Groups have the associative product, identity and inverses specified in [math:def-group](https://alphabetamath.cc/item/def-group). A group homomorphism is a function preserving products, as in [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism); composites preserve products by the same definition.

[F3] For every open set $V$, the section ring $\mathcal O_X(V)$ supplied by the ringed-space convention in [F1] is commutative and unital. Its multiplication and identity make its underlying set a monoid. Applying [math:lem-monoid-units-form-a-group](https://alphabetamath.cc/item/lem-monoid-units-form-a-group) to that monoid makes $\mathcal O_X(V)^\times$ a group under the restricted multiplication. This applies to $V=X$ and to every $U_i$.

### Proof
**Proof technique:** Glue pointwise and use uniqueness.

1.1 For each $g\in G$, the assumed overlap compatibility and [F1] give a unique global unit $d(g)$ restricting to $d_i(r_i(g))$ on every $U_i$. [F1, F3, given]

2.1 For $g,h\in G$, the restrictions of $d(gh)$ and $d(g)d(h)$ agree on every $U_i$ because $d_i$ and $r_i$ are homomorphisms. Uniqueness in [F1] gives $d(gh)=d(g)d(h)$. The same uniqueness proves that any map with the specified restrictions equals $d$. [F1, F2, F3, step 1.1] ∎


## Cohomology maps induced by cochain maps

[Open item](item-lem-author-b747b28c359f-cochain-maps) · level 1

### Statement
A cochain map $f:C\to D$ induces a homomorphism $H^i(f):H^i(C)\to H^i(D)$ for every integer $i$. These homomorphisms preserve identities and composition. A cochain map is a family of homomorphisms $f^i:C^i\to D^i$ satisfying $d_D^if^i=f^{i+1}d_C^i$.

### Facts & Assumptions

[F1] Cohomology is the group of cocycles modulo coboundaries, as in [lem-author-b747b28c359f-cochain-cohomology](item-lem-author-b747b28c359f-cochain-cohomology).

### Proof

**Given:** Cochain complexes and cochain maps between them.

**Goal:** Construct the induced maps and establish their functoriality.

1.1 The defining commutation relation sends cocycles to cocycles and coboundaries to coboundaries. Thus $[x]\mapsto[f^i(x)]$ is a well-defined homomorphism on the quotient in [F1]. [F1, construct]

2.1 Applying the identity or a composite to a cocycle gives respectively the same cocycle or the successive images. Hence the induced maps preserve identities and composition. [step 1.1] ∎

## Singular sphere classes and ordered suspension

[Open item](item-lem-adjudicate-1ef158934564-singular-sphere-comparison) · level 1


### Statement
Let $Z$ be any based topological space. Write $D^n=\{(t_0,\ldots,t_n):t_i\geq0,\ \sum_i t_i=1\}$, and let $\Delta^n$ and $\partial\Delta^n$ be the standard simplicial simplex and boundary. Use the realization $|B|$, singular complex $(\operatorname{Sing}Z)_n=C(D^n,Z)$ and evaluation $\epsilon_Z([f,t])=f(t)$ of the pointed realization–singular adjunction. The simplicial operators on $\operatorname{Sing}Z$ are affine precomposition and its basepoint simplices are constant. A pointed simplicial set has a chosen map from $\Delta^0$; a pointed simplicial homotopy $H:\Delta^1\times B\to C$ is constant on $\Delta^1\times *$. A Kan complex is a simplicial set in which every map from a horn $\Lambda_i^n$ (the union of all faces of $\Delta^n$ except face $i$, for $n\geq1$) extends to $\Delta^n$. The complex $\operatorname{Sing}Z$ is Kan.

For $d\geq1$ put $T_d=\Delta^d/\partial\Delta^d$. Use the simplicial sphere-class group on $[T_d,\operatorname{Sing}Z]_*$, with multiplication normalized to traverse the left factor first in degree one: it is the opposite of Kerodon's composition-order group in degree one and Kerodon's abelian group in higher degrees. Denote it by $\pi_d^{\mathrm{simp}}$. On the topological side use the published cubical group, whose product traverses the left factor first in coordinate one. Set $S^d=I^d/\partial I^d$, based at the collapsed boundary, where $I=[0,1]$.

Specify the comparison parametrization as follows. Let $E_{d-1}=\{u\in\mathbb R^{d-1}:u_i\geq0,\ \sum_i u_i\leq1\}$ and fix the boundary-preserving radial homeomorphism $R_{d-1}:I^{d-1}\to E_{d-1}$ obtained by translating the cube center and the simplex barycenter to the origin and rescaling each ray by the ratio of its distances to their boundaries. In dimension zero both spaces are a point, with empty boundary. For $u=R_{d-1}(v)$ and $h=1-\sum_i u_i$, the formula $(s,v)\mapsto(h(1-s),hs,u)$ induces a based homeomorphism $q_d:S^d\to D^d/\partial D^d=|T_d|$. In degree one it runs from vertex $0$ to vertex $1$. Evaluated realization, parametrized by $q_d$, gives a natural group isomorphism $C_d:\pi_d^{\mathrm{simp}}(\operatorname{Sing}Z)\xrightarrow{\sim}\pi_d(Z)$, namely $[a]\mapsto[\epsilon_Z|a|q_d]$.

Here are the conventions for the more general representative assertion. Simplicial quotients are computed degreewise, and $B\wedge C=(B\times C)/((B\times *)\cup(*\times C))$. For arbitrary based topological spaces use the ordinary quotient $X\wedge Y=(X\times Y)/((X\times *)\cup(*\times Y))$. Put $K=T_1$, oriented by $|K|=I/\partial I=S^1$. There is a natural product-and-quotient homeomorphism $\rho_B:|K\wedge B|\xrightarrow{\sim}S^1\wedge|B|$ for every pointed simplicial set $B$. A finite simplicial set has finitely many nondegenerate simplices. For any finite pointed simplicial sphere $A$ and fixed based homeomorphism $u_A:S^d\xrightarrow{\sim}|A|$, evaluation gives a bijection $[A,\operatorname{Sing}Z]_*\to\pi_d(Z)$ by $[a]\mapsto[\epsilon_Z|a|u_A]$. This includes iterated smash powers of $K$, with their ordered cube-quotient realizations.

Let $Z'$ be any based space and let $\sigma:S^1\wedge Z\to Z'$ be based and continuous. Define $t_\sigma:K\wedge\operatorname{Sing}Z\to\operatorname{Sing}Z'$ as the pointed adjoint of $\sigma(1_{S^1}\wedge\epsilon_Z)\rho_{\operatorname{Sing}Z}$. For every such $a:A\to\operatorname{Sing}Z$ the following equality has domain $|K\wedge A|$:
$$\epsilon_{Z'}\bigl|t_\sigma\circ(1_K\wedge a)\bigr|=\sigma\circ(1_{S^1}\wedge(\epsilon_Z|a|))\circ\rho_A.$$
For the sphere-class version use $u_{K\wedge A}=\rho_A^{-1}(1_{S^1}\wedge u_A)\chi_d$, where $\chi_d:S^{d+1}\xrightarrow{\sim}S^1\wedge S^d$ is induced by the identity on the ordered cube $I\times I^d$, with its exterior boundary collapsed. This places the new coordinate first.

There is also a compactly generated version. For based CG spaces define $X\wedge_kY=k((X\times_kY)/(X\vee Y))$, where $X\times_kY=k(X\times Y)$ and $X\vee Y$ is the union of the two basepoint axes. On CGWH inputs this is the published smash. Every realization is CG, and $\rho_B$ also identifies $|K\wedge B|$ with $S^1\wedge_k|B|$, using the displayed CG formula for intermediate realization factors. For based CG $Z,Z'$ and based continuous $\sigma:S^1\wedge_kZ\to Z'$, the same adjunction construction and representative equality hold with $\wedge_k$ on topological factors. Kification preserves the cubical maps and boundary-fixed homotopies defining these sphere classes. In particular this applies to CGWH spaces and requires no well-pointedness of $Z$.

### Statement references
[thm-author-e0b0bf18ed2b-singular-realization-input](item-thm-author-e0b0bf18ed2b-singular-realization-input)

[math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)

[math:def-higher-homotopy-group-by-based-cubes](https://alphabetamath.cc/item/def-higher-homotopy-group-by-based-cubes)

[math:thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one](https://alphabetamath.cc/item/thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one)

[math:thm-quotient-universal-property](https://alphabetamath.cc/item/thm-quotient-universal-property)

[math:cor-left-adjoints-preserve-colimits](https://alphabetamath.cc/item/cor-left-adjoints-preserve-colimits)

[math:lem-continuity-is-local-and-pastes](https://alphabetamath.cc/item/lem-continuity-is-local-and-pastes)

[math:def-compactly-generated-conventions-for-based-homotopy](https://alphabetamath.cc/item/def-compactly-generated-conventions-for-based-homotopy)

[math:lem-kification-compact-tests-and-finite-constructions](https://alphabetamath.cc/item/lem-kification-compact-tests-and-finite-constructions)

[math:def-smash-product-of-based-spaces](https://alphabetamath.cc/item/def-smash-product-of-based-spaces)

[math:cor-heine-borel-in-the-product-topology](https://alphabetamath.cc/item/cor-heine-borel-in-the-product-topology)

[math:thm-metric-hausdorff-separation](https://alphabetamath.cc/item/thm-metric-hausdorff-separation)

[math:thm-compactness-under-continuous-maps](https://alphabetamath.cc/item/thm-compactness-under-continuous-maps)

[math:thm-product-universal-property](https://alphabetamath.cc/item/thm-product-universal-property)

### Facts & Assumptions
**Given:** $Z,Z',d,K,A,u_A$ and $\sigma$ as in the Statement, with its specified simplicial multiplication and either of its topology conventions.

**Goal:** Prove the group comparison and the ordered-suspension equality.

[F1] The pointed realization–singular adjunction sends $a$ to $\epsilon_Z|a|$, naturally, and supplies its realization and singular constructions. [thm-author-e0b0bf18ed2b-singular-realization-input](item-thm-author-e0b0bf18ed2b-singular-realization-input)

[F2] The published simplicial definition supplies standard simplices, boundaries, degreewise products and simplicial homotopies. Kerodon supplies the Kan property of $\operatorname{Sing}Z$ and the sphere-class group. Its face criterion implies $[c]=[b][a]$ for faces $(b,c,a,e,\ldots,e)$ of a $(d+1)$-simplex, where $e$ is constant. In degree one our multiplication is opposite to Kerodon's; higher groups are abelian. [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)

[F3] Kerodon Corollary 3.6.2.2 makes the canonical map $|B\times C|\to|B|\times|C|$ a homeomorphism whenever one simplicial factor is finite. We use it with $\Delta^1$, $K$ or finite sphere factors. Example 3.2.2.3 identifies $|T_d|$ with the simplex modulo its boundary, a topological sphere.

[F4] The published cubical group has product $(a*b)(s,v)=a(2s,v)$ for $s\leq1/2$ and $b(2s-1,v)$ for $s\geq1/2$; it is a group for every $d\geq1$. [math:def-higher-homotopy-group-by-based-cubes](https://alphabetamath.cc/item/def-higher-homotopy-group-by-based-cubes), [math:thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one](https://alphabetamath.cc/item/thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one)

[F5] Maps agreeing on a finite closed cover paste continuously, and maps constant on quotient fibers descend continuously. Left adjoints preserve existing colimits; by [F1] this applies to realization and its pointed quotients. [math:lem-continuity-is-local-and-pastes](https://alphabetamath.cc/item/lem-continuity-is-local-and-pastes), [math:thm-quotient-universal-property](https://alphabetamath.cc/item/thm-quotient-universal-property), [math:cor-left-adjoints-preserve-colimits](https://alphabetamath.cc/item/cor-left-adjoints-preserve-colimits)

[F6] Use compact-Hausdorff-test kification. For CG source $T$, continuity of $T\to X$ is equivalent to continuity into $kX$. Finite k-products are categorical, ordinary quotients of CG spaces are CG, and kification preserves cubical maps and relative homotopies. The displayed CG smash agrees with the published CGWH formula on its stated inputs. [math:def-compactly-generated-conventions-for-based-homotopy](https://alphabetamath.cc/item/def-compactly-generated-conventions-for-based-homotopy), [math:lem-kification-compact-tests-and-finite-constructions](https://alphabetamath.cc/item/lem-kification-compact-tests-and-finite-constructions), [math:def-smash-product-of-based-spaces](https://alphabetamath.cc/item/def-smash-product-of-based-spaces)

[F7] Closed bounded Euclidean subsets are compact, and metric spaces are Hausdorff. Continuous images of compact spaces are compact, and a continuous bijection from compact to Hausdorff is a homeomorphism. Continuity into a product is tested on its coordinates; only this choice-free characteristic property of the product theorem is used. [math:cor-heine-borel-in-the-product-topology](https://alphabetamath.cc/item/cor-heine-borel-in-the-product-topology), [math:thm-metric-hausdorff-separation](https://alphabetamath.cc/item/thm-metric-hausdorff-separation), [math:thm-compactness-under-continuous-maps](https://alphabetamath.cc/item/thm-compactness-under-continuous-maps), [math:thm-product-universal-property](https://alphabetamath.cc/item/thm-product-universal-property)

### External input
The three references import the simplicial sphere-group structure, its face criterion and order convention, and the simplex-quotient sphere model (reference 0); the finite-factor realization homeomorphism (reference 1); and the singular Kan property (reference 2). The hypotheses are a pointed Kan target in positive degree, simplicial sets with a finite factor, and an arbitrary topological space, respectively. They apply here since $\operatorname{Sing}Z$ is Kan, $d\geq1$, and $K,\Delta^1$ are finite. The group comparison, its cubical parametrization and the suspension calculation are proved locally below; their proofs are not attributed to those references.

### Proof
1.1 First justify the parametrization in the Statement. The radial map $R_{d-1}$ and its inverse are continuous: for each centered polytope the distance to its boundary along a unit ray is a positive continuous function, given by the minimum of the applicable finitely many facet-distance ratios; these distances are bounded above and bounded away from zero, so the radial formulas extend continuously at the center. They preserve boundaries. The formula defining $q_d$ is continuous by coordinate tests in [F7]. It carries the exterior boundary of $I^d$ into $\partial D^d$; away from that boundary it is bijective, since $u$ and $s=t_1/(t_0+t_1)$ recover the parameters. Every boundary point maps to the basepoint after the quotient. It therefore induces a continuous bijection $q_d$. Its source is compact by [F7] and quotient descent, and its target is Hausdorff by the sphere model in [F3] and [F7], so it is a homeomorphism. By [F1], [F3], maps from any finite pointed $A$ to $\operatorname{Sing}Z$ correspond to based maps $|A|\to Z$; the same adjunction on $\Delta^1\times A$ identifies pointed homotopies in both directions, since its realization is $I\times|A|$. Thus evaluation gives the asserted class bijections; [F2] supplies the group on $T_d$. To verify its multiplication, let $a,b:D^d\to Z$ be constant on the boundary. In $D^{d+1}$ put $F_i=\{t_i=0\}$ and $m=\min(t_0,t_2)$. The continuous map $r(t)=(t_0-m,t_1+2m,t_2-m,t_3,\ldots,t_{d+1})$ retracts onto $F_0\cup F_2$. Paste $b$ on $F_0$ and $a$ on $F_2$ in increasing-vertex coordinates; they agree at the basepoint on the intersection. By [F5] composition with $r$ gives a singular simplex $w$ with faces $d_0w=b$, $d_2w=a$, $d_1w=c$ and $d_jw=e$ for $j\geq3$: for these last faces $r$ leaves $t_j=0$ and lands in the boundary of $F_0$ or $F_2$. The same observation on the boundary of $F_1$ shows that $c$ has constant boundary. On $F_1$ use $(t_0,t_2,u)=(h(1-s),hs,u)$ with $u=R_{d-1}(v)$. For $s\leq1/2$, $r$ lands on $F_2$ with increasing-vertex coordinates $(h(1-2s),2hs,u)$; for $s\geq1/2$ it lands on $F_0$ with coordinates $(2h(1-s),h(2s-1),u)$. Consequently $cq_d$ is exactly the coordinate-one concatenation of $aq_d$ followed by $bq_d$, including the boundary values. This also directly checks the degree-one order. Hence its topological class is $C_d([a])*C_d([b])$ by [F4]. The face criterion gives $[c]=[b][a]$ in Kerodon's group, equal to our normalized product of $[a]$ and $[b]$ in degree one and to their product in higher degrees by commutativity. The class bijection is therefore a group isomorphism. Postcomposition commutes with evaluation and the formulas, proving naturality. [F1, F2, F3, F4, F5, F7, construct]

2.1 By [F1], [F3], [F5], realization preserves product with $K$ and the pointed quotient defining its smash. More explicitly, continuous based maps out of either $|K\wedge B|$ or $S^1\wedge|B|$ correspond to continuous maps out of $S^1\times|B|$ that are constant on both basepoint axes; this identifies the canonical $\rho_B$ as a natural homeomorphism. Each realization is CG: if a subset is k-closed, its inverse image along every compact Hausdorff characteristic simplex $D^n\to|B|$ is closed by [F7], and the defining quotient topology then makes the subset closed. The finite-factor homeomorphism makes $S^1\times|B|$ CG because it is $|K\times B|$, and its ordinary smash quotient is CG by [F6]. Thus $\rho_B$ also has the asserted kified target. For CG $Z$, functoriality of k-products and quotient descent make $1\wedge_k\epsilon_Z$ continuous, so adjunction defines $t_\sigma$ in this convention too. By its definition $\epsilon_{Z'}|t_\sigma|=\sigma(1\wedge\epsilon_Z)\rho_{\operatorname{Sing}Z}$. Compose with $|1_K\wedge a|$ and use naturality of $\rho$ to obtain the displayed equality. To pass to classes, a pointed simplicial homotopy $H:\Delta^1\times A\to\operatorname{Sing}Z$ defines the pointed homotopy $(s,k\wedge x)\mapsto t_\sigma(k\wedge H(s,x))$; this is well-defined on the smash because $H(s,*)=*$ and $t_\sigma$ is pointed. Its realization is a based ordinary homotopy by the finite $\Delta^1$ product comparison. The CG version preserves these cubical classes and boundary-fixed homotopies by [F6] and quotient descent. With $u_{K\wedge A}$ as stated, this is exactly suspension with the new coordinate first. Iteration of the same product-and-quotient argument gives the ordered cube-quotient models for smash powers of $K$ and the map $\chi_d$. [F1, F3, F5, F6, F7, step 1.1] ∎


## Finite Kan representatives and ordered iterated loops

[Open item](item-lem-adjudicate-fcabf63fbedd-finite-kan-ordered-loops) · level 1


### Statement
Use pointed simplicial sets with degreewise colimits and smash products. For a sequence $Z_j\to Z_{j+1}$, its degree-$q$ colimit is the disjoint union of the sets $(Z_j)_q$ modulo eventual equality: $(j,x)$ and $(j',x')$ agree if their images agree at some stage $\ell\geq j,j'$. Faces, degeneracies and the basepoint are induced from the stages. Here a Kan complex means a simplicial set in which every horn (the union of all but one codimension-one face of a simplex) has a filler. For every sequential system of pointed Kan complexes $Z_j$, its degreewise colimit $Z_\infty$ is Kan, and the natural map $\operatorname{colim}_j\pi_r(Z_j)\to\pi_r(Z_\infty)$ is an isomorphism for $r\geq2$. Homotopy groups are based at the chosen vertex and identified with realization groups.

Put $K=\Delta^1/\partial\Delta^1$ and $\Omega Z=\operatorname{Map}_*(K,Z)$, with constant-map basepoint. For a pointed simplicial set $A$, the $q$-simplices of $\operatorname{Map}_*(A,Z)$ are the pointed maps $A\wedge(\Delta^q)_+\to Z$, where $(\Delta^q)_+$ adds a disjoint basepoint. For Kan $Z$, all $\Omega^mZ$ are Kan, and there are natural group isomorphisms $D_{r,m}:\pi_r(\Omega^mZ)\xrightarrow{\sim}\pi_{r+m}(Z)$ for $r\geq2$ and $m\geq0$, with $D_{r,0}$ the identity. They are obtained by evaluation on the ordered finite sphere $T_r=K^{\wedge r}$: uncurry each loop by putting its circle to the left of the sphere already present. Thus innermost loops are evaluated on the leftmost circle factors.

In particular, if $Z,W$ are pointed Kan complexes and $u:Z\to\Omega W$ is adjoint to $v:K\wedge Z\to W$, then $D_{r,m+1}\circ(\Omega^m u)_*=v_*\circ\Sigma_{\mathrm{left}}\circ D_{r,m}$, where $\Sigma_{\mathrm{left}}$ suspends a sphere representative by a new $K$ factor on its left. Here $v_*$ is induced on realization homotopy groups, so no Kan hypothesis on $K\wedge Z$ is required. All sphere coordinates use the oriented identification $|K|=S^1$ and the sphere-first convention.

### Statement references

[math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)

[lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance)

[math:def-higher-homotopy-group-by-based-cubes](https://alphabetamath.cc/item/def-higher-homotopy-group-by-based-cubes)

### Facts & Assumptions
**Given:** The pointed Kan complexes, sequential maps, integers $r\geq2$, $m\geq0$ and, for the last assertion, the adjoint pair $u,v$ specified in the Statement. A simplex is nondegenerate if it is not the image of a lower-dimensional simplex under a degeneracy operator. A finite simplicial set has finitely many nondegenerate simplices; it need not have finitely many simplices in all degrees together.

**Goal:** Establish finite representatives, colimit comparison and the ordered loop isomorphisms needed for sequential stabilization.

[F1] [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration) supplies simplicial sets, standard simplices, their boundaries, degreewise constructions and simplicial homotopies. The pointed mapping object is defined in the Statement.

[F2] [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance) supplies the realization convention, its natural Kan comparison, preservation of colimits by realization and the ordered identification $|K\wedge A|\cong S^1\wedge|A|$. [math:def-higher-homotopy-group-by-based-cubes](https://alphabetamath.cc/item/def-higher-homotopy-group-by-based-cubes) supplies based cube representatives and concatenation; [math:thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one](https://alphabetamath.cc/item/thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one) supplies their group laws.

[F3] The first source record supplies finite simplicial sphere representatives, homotopy witnesses and functorial Kan homotopy groups. The second supplies Kan fibrancy of pointed mapping objects by taking the fiber of restriction along a basepoint inclusion.

[F4] The third and fourth source records make the realization unit of a Kan complex a homotopy equivalence. The fifth supplies its pointed version and the pointed realization–singular homotopy adjunction; the sixth ensures the singular target is Kan.

### External input
The imported premises are precisely [F3] and [F4] at the six source locators. In [F4], the unit has Kan source and singular Kan target, so the hypotheses of both equivalence statements apply. The adjunction compares homotopies fixing the specified basepoint. These inputs do not assert a coordinate ordering for iterated loops; the ordered application and colimit argument below are local.

### Proof
1.1 The finite sources used below are explicit: nondegenerate simplices of $\Delta^r\times\Delta^1$ are strictly increasing chains in the finite grid $[r]\times[1]$; those of $(\Delta^1)^d$ are strictly increasing chains in $\{0,1\}^d$. These products have finitely many such chains, and their quotients give the sphere cylinders and $T_d$. A map from a finite simplicial set to a degreewise sequential colimit factors through a stage: choose representatives for its finitely many nondegenerate simplices, then advance until their finitely many face relations hold. Any equality of two such maps holds at a common later stage by the same finite argument. Apply this to a horn and its containing simplex to obtain a filler in $Z_\infty$ from a Kan stage. By [F3], homotopy classes use the finite source $\Delta^r/\partial\Delta^r$, and equality uses its finite product with $\Delta^1$, fixing the basepoint. Representatives therefore lift to stages and every equality occurs at a later stage. This proves bijectivity of the canonical colimit map; functoriality makes it a group isomorphism. For the ordered calculation, [F4] gives a pointed homotopy equivalence $Z\to\operatorname{Sing}|Z|$. Postcomposition, followed by the pointed adjunction, gives $[A,Z]_*\cong[|A|,|Z|]_*$, naturally for any pointed simplicial $A$. Here brackets denote maps modulo homotopies fixing the basepoint. With $A=T_r$, [F2] identifies its realization with the ordered cube sphere $I^r/\partial I^r$, so these classes compute $\pi_r(Z)$. All constructions preserve the specified basepoints. [F1, F2, F3, F4, given, construct]

2.1 By [F3], the pointed mapping objects and hence iterated loops of a Kan complex are Kan. Direct currying gives $[A,\Omega B]_*\cong[K\wedge A,B]_*$: a representative $f$ goes to $(t,a)\mapsto f(a)(t)$, and the same formula with an extra $\Delta^1$ parameter gives the inverse correspondence on pointed homotopies. Apply this repeatedly with $A=T_r$, using step 1.1, to obtain the bijections $D_{r,m}$. They are group isomorphisms: realizing evaluation and using the ordered smash identification in [F2] gives a continuous map $S^1\wedge|\Omega B|\to|B|$. Its iterates define the same evaluation operation on continuous cube representatives, agreeing with currying on every realized simplicial representative. This operation preserves concatenation in a retained sphere coordinate. Concatenation in distinct cube coordinates has a common constant unit and satisfies the four-quarter-cube interchange identity, so those operations agree, as in the group-law argument of [F2]. This agrees with the prescribed first-coordinate group law. For $\Omega^m u$, applying $u$ after all old loop evaluations adds its loop as the new innermost one. Uncurrying puts its circle to the left of all old loop circles, giving exactly $v\circ(1_K\wedge\widehat f)$, where $\widehat f:T_{r+m}\to Z$ is the fully uncurried representative. This proves the displayed identity with $\Sigma_{\mathrm{left}}$. Evaluation commutes with all pointed maps, so the isomorphisms and identity are natural. [F1, F2, F3, step 1.1, construct] ∎


## External dg-nerve mapping and complex-localization bridges

[Open item](item-thm-adjudicate-2ee8c9528eaa-dg-nerve-derived-mapping-input) · level 1


### Statement
Assume Choice and the fixed universes of the derived enhancement. For module complexes, use the differential graded nerve $N_{\mathrm{dg}}$ of the category enriched in Hom complexes. Quasi-isomorphisms of Hom complexes induce equivalences of the associated mapping spaces. Its reflective derived localization $L$ has unit a quasi-isomorphism $Q\to I_Q$ to a fibrant complex, and adjunction identifies $\operatorname{Map}_{\mathcal D(A)}(LP,LQ)$ with $\operatorname{Map}_{N_{\mathrm{dg}}\mathrm{Ch}(A)}(P,I_Q)$, naturally in $P,Q$. The composite from ordinary complexes is the quasi-isomorphism localization defining the supplied $\mathcal D(A)$.

For a full dg subcategory $\mathcal C$ of complexes in an additive category, closed under identity mapping cylinders, its ordinary category localized at cochain homotopy equivalences is equivalent to $N_{\mathrm{dg}}\mathcal C$ by the canonical inclusion.

### Statement references
[thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)

[math:def-hom-complex-of-chain-complexes](https://alphabetamath.cc/item/def-hom-complex-of-chain-complexes)

[math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

### Source contract
**Given:** Module complexes and, in the last assertion, a full dg subcategory with the stated cylinder closure.

**Goal:** Import the mapping-space and localization bridges, not a proof of perfect-model equivalence.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) retain the assumptions of [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input), including the module categories and their unbounded derived localization. Universes containing the data and $\omega$ are assumed to exist; this is not deduced from Choice.

[F1] [math:def-hom-complex-of-chain-complexes](https://alphabetamath.cc/item/def-hom-complex-of-chain-complexes) supplies the Hom enrichment. Read its chain grading as $C^\sharp_n=C^{-n}$; its Hom degree $r$ is cochain degree $-r$. Composition is composition of graded maps, with its usual graded Leibniz identity. The dg nerve is the construction imported from reference 0, rather than the nerve of the ordinary category obtained by forgetting higher homotopies.

[F2] Identity mapping cylinders are those of reference 0, equivalently $P\oplus\operatorname{Cone}(\mathrm{id}_P)$ with the usual endpoint maps. [math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map) supplies cones after the same reversal of grading. A cochain homotopy equivalence is a cochain map admitting an inverse up to homotopies $f-g=dh+hd$, as in the supplied derived enhancement.

### External input
Import reference 0 under [A1], using the cochain translation [F1] and the cylinder convention [F2]. The adjunction and nerve comparisons are established external inputs; no local proof is claimed.


## Stable Yoneda Waldhausen presentations without retract completion

[Open item](item-lem-adjudicate-55b16ac0b0e5-stable-yoneda-waldhausen-presentation) · level 1


### Statement
Assume the Axiom of Choice and fixed nested Grothendieck universes $U\in V\in W$ with $\omega\in U$. For every $U$-small stable infinity-category $D$ there is a $W$-small DHKS-saturated Waldhausen category $C_D$ with cofibration/weak-equivalence factorization and an equivalence $N(C_D)[W_D^{-1}]\simeq D$, where $W_D$ is its class of weak equivalences. Its homotopy pushouts correspond to the finite pushouts of $D$. No idempotent completion of $D$ is taken.

Here a Waldhausen category has a zero object, subcategories of cofibrations and weak equivalences containing the isomorphisms, every map from zero a cofibration, pushouts along cofibrations whose cobase-changed leg is a cofibration, and the gluing axiom: an objectwise weak equivalence between two such pushout spans induces a weak equivalence of pushouts. Both designated classes are closed under composition. DHKS-saturated means that a map is a weak equivalence exactly when it is invertible in the homotopy category of the infinity-localization. Factorization means that every map is a cofibration followed by a weak equivalence. A weakly exact functor preserves weak equivalences, zero up to equivalence and homotopy pushout squares. An exact Waldhausen functor preserves zero, cofibrations, weak equivalences and pushouts along cofibrations.

One possible $C_D$ is the full category of cofibrant $V$-small spectral presheaves in BGT's projective simplicial model whose derived images are stably representable by objects of $D$. This full category is $W$-small; cofibrations and weak equivalences are inherited from the model category. The stable Yoneda image, rather than its retract closure, specifies the objects.

### Statement references

[thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)

[math:def-model-category-and-quillen-adjunction](https://alphabetamath.cc/item/def-model-category-and-quillen-adjunction)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Facts & Assumptions
**Given:** $D$, Choice and the three universes as in the Statement. All presheaves and point-set spectra used in the construction are $V$-small; the collection of those structures is formed in $W$.

**Goal:** Verify the stated Waldhausen presentation from the precise imported model and localization inputs.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) supply the choice and size conventions. The existence of the displayed universes is an assumption, not a consequence of Choice. [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input) supplies the infinity-category, mapping-space, stable-spectrum and coherent finite-limit/colimit conventions. [math:def-model-category-and-quillen-adjunction](https://alphabetamath.cc/item/def-model-category-and-quillen-adjunction) supplies model factorization, lifting, cofibrant/fibrant objects and weak equivalences.

[F1] Reference 0 supplies BGT's projective simplicial model $P_D=\operatorname{Fun}_\Delta(\mathfrak C[D]^{\mathrm{op}},\mathrm{Sp}_{\mathrm{model},V})$ and its equivalence with spectral presheaves on $D$. Its weak equivalences are objectwise stable equivalences of spectra. The simplicial category $\mathfrak C[D]$ is the simplicial realization used there. The stably representable cofibrant-fibrant objects form $\Upsilon(D)$, and $N(\Omega^\infty\Upsilon(D))\simeq D$ by Proposition 4.8. Stably representable here means equivalent to the spectral Yoneda presheaf $d\mapsto\operatorname{Map}_D(d,e)$ for some $e\in D$; the stable mapping spectrum has nth space $\operatorname{map}_D(d,e[n])$. This input applies to every small stable $D$, with no retract-completeness hypothesis.

[F2] Reference 1 supplies the interval criterion of Higher Algebra Proposition 1.3.4.7 and the fibrant-replacement argument in the proof of Theorem 1.3.4.20. Reference 2 supplies simplicial tensors, the enriched tensor adjunction, the corner axiom and its pushout-product formulation. In particular, restriction along a cofibration is a fibration of mapping Kan complexes into a fibrant target, and is a weak equivalence when that cofibration is trivial. Tensoring a cofibrant object with a simplex remains cofibrant; its map back to that object is a weak equivalence.

### External input
Import the projective spectral-presheaf model and stable Yoneda equivalence [F1], and the simplicial-model and localization calculus [F2], with the hypotheses and reading limits of references 0–2. The proof below verifies closure, the restriction of that calculus and size for this particular presentation. The unnumbered paragraph after BGT Corollary 7.12 is not used as a source for detailed presentation properties.

### Proof
1.1 Form $P_D$ using [F1] and let $C_D$ consist of all its cofibrant objects whose derived presheaves are stably representable. The spectral Yoneda embedding preserves finite limits: evaluation at each $d$ gives the mapping-spectrum functor, which preserves limits in its second variable. Since both $D$ and spectral presheaves are stable, finite limits and finite colimits coincide, so this embedding is exact. Its full replete image is therefore closed under zero and finite homotopy pushouts, without adding retracts. The model zero is cofibrant and belongs to $C_D$. For a map $X\to Y$ in $C_D$, model factorization $X\hookrightarrow Z\xrightarrow{\sim}Y$ has cofibrant $Z$, and $Z$ is still stably representable because it is weakly equivalent to $Y$. For a span $Y\leftarrow X\to Z$ of cofibrant objects with $X\to Y$ a cofibration, its model pushout $T$ is cofibrant: $Z\to T$ is a cofibration. For every fibrant test object $B$, the enriched adjunction identifies $\operatorname{map}(T,B)$ with $\operatorname{map}(Y,B)\times_{\operatorname{map}(X,B)}\operatorname{map}(Z,B)$. The restriction from $Y$ is a fibration by [F2], so this is a homotopy pullback. Thus $T$ computes the ambient homotopy pushout and belongs to $C_D$ by exactness of Yoneda. The same mapping-space calculation shows that objectwise weak equivalences between these spans induce weak equivalences on pushouts, giving gluing. Closure of cofibrations under composition and pushout follows from their lifting characterization in [A1]; weak equivalences are closed under composition by two-out-of-three. These facts verify every stated Waldhausen axiom and factorization. [A1, F1, F2, construct]

2.1 The infinity-localization of $C_D$ is the full subcategory modeled by its cofibrant-fibrant objects. To justify this restriction rather than assume it, regard $C_D$ as a full simplicial subcategory of the cofibrants of $P_D$. It is closed under $\Delta[1]\otimes X$ by [F2] and its defining weak-equivalence closure. Thus the four hypotheses of Proposition 1.3.4.7 hold: isomorphisms and two-out-of-three are inherited, interval objects satisfy the enriched adjunction, and interval projection is a weak equivalence. Every $X$ also has a trivial-cofibration fibrant replacement $X\to RX$ remaining in $C_D$. Into any cofibrant-fibrant $B$, this replacement induces an equivalence of mapping spaces by the corner axiom. Consequently the fibrant-replacement adjunction and marked-localization argument in the proof of Theorem 1.3.4.20 restrict to this full simplicial subcategory: their units are these weak equivalences and their mapping spaces into the fibrant objects are unchanged. They identify $N(C_D)[W_D^{-1}]$ with the nerve of the full simplicial category of its cofibrant-fibrant objects. That category is exactly $\Omega^\infty\Upsilon(D)$, so [F1] identifies the localization fully with $D$. In particular it embeds fully in the underlying infinity-category of $P_D$; a map inverted in it is an equivalence of spectral presheaves, hence an objectwise equivalence of spectra, and therefore a projective model weak equivalence by [F1]. The converse holds by the defining localization, proving DHKS-saturation. Step 1.1 and this full embedding identify its homotopy pushouts with those in $D$. Finally all $V$-small presheaf structures and morphisms on the fixed small indexing category form sets in $W$, by the universe closure convention; the full subcategory used here is therefore $W$-small. The model operations are performed in $V$ and their results are retained in this full category, not discarded by taking an ordinary skeleton. Larger compatible universes are assumed if another category of these data is needed. Choice enters the imported realizations and replacements through [A1]; no functorial strict selection of $C_D$ as $D$ varies is claimed. [A1, F1, F2, step 1.1] ∎


## Singular complexes preserve the sequential group convention

[Open item](item-lem-author-e0b0bf18ed2b-singular-sequential-comparison) · level 2


### Statement
Let $E$ be a sequential prespectrum of well-pointed based compactly generated weak Hausdorff spaces with structure maps $\sigma_n:S^1\wedge E_n\to E_{n+1}$, sphere first. Let $K=\Delta^1/\partial\Delta^1$, with $|K|$ identified with $S^1$ in the chosen orientation, and put $X_n=\operatorname{Sing}E_n$ with its constant basepoint simplex. Give $X$ the structure map $K\wedge X_n\to X_{n+1}$ adjoint to $|K\wedge X_n|\cong S^1\wedge|X_n|\to S^1\wedge E_n\to E_{n+1}$, where the middle map uses evaluation. Then every $X_n$ is Kan and $G_k(X)\cong\pi_k(E)$ naturally for every integer $k$, with the published sphere-first bonding convention.

### Facts & Assumptions
**Given:** $E$, $K$ and the chosen oriented realization as in the Statement. The group $G_k$ is the sequential colimit of the tail-invariance supplier. Naturality is with respect to families of based maps $f_n:E_n\to E'_n$ satisfying $f_{n+1}\sigma_n=\sigma'_n(1_{S^1}\wedge f_n)$.

**Goal:** Construct the simplicial prespectrum and compare its stable groups to the published groups.

[F1] The singular-realization input gives the natural evaluation weak equivalence $\epsilon_n:|\operatorname{Sing}E_n|\to E_n$, the pointed realization–singular adjunction, and the constant basepoint simplices. [thm-author-e0b0bf18ed2b-singular-realization-input](item-thm-author-e0b0bf18ed2b-singular-realization-input)

[F2] The sequential definitions fix sphere-first structure maps and bonding maps, including the sphere-coordinate identification in the stable colimit. [math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps](https://alphabetamath.cc/item/def-sequential-prespectrum-spectrum-and-adjoint-structure-maps), [math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum)

[F3] The tail-invariance supplier defines pointed simplicial prespectra and their stage convention $\pi_d^{\mathrm{simp}}(Z)=\pi_d(|Z|)$. The simplicial smash product $A\wedge B$ is the degreewise quotient of $A\times B$ by the union of the two basepoint factors. Its realization premise gives the natural ordered homeomorphism $|K\wedge Z|\cong S^1\wedge|Z|$ for every pointed simplicial set $Z$, and realized levels are well-pointed based compactly generated weak Hausdorff spaces. It also gives the natural identification with ordinary Kan groups for Kan levels, cutoff independence, and passage of compatible stage-group isomorphisms to colimits. [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance)

[F4] The direct sphere-comparison lemma identifies ordinary Kan groups of a singular complex with topological groups by evaluated sphere representatives and verifies the ordered suspension formula. [lem-adjudicate-1ef158934564-singular-sphere-comparison](item-lem-adjudicate-1ef158934564-singular-sphere-comparison)

[F5] Standard simplices, their boundaries and degreewise products have the published simplicial-set meanings; a simplicial set is Kan exactly when every horn inclusion admits an extension into it. [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration), [math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration)

[F6] Products and smash quotients of based spaces use the compactly generated convention; well-pointed means that the basepoint inclusion is a cofibration. [math:def-compactly-generated-based-space-and-well-pointed-object](https://alphabetamath.cc/item/def-compactly-generated-based-space-and-well-pointed-object)

[F7] The Kan property of singular complexes is the precise imported premise recorded in External input. [Kerodon, Proposition 1.2.5.8](https://kerodon.net/tag/002K).

### External input
Import from Kerodon Proposition 1.2.5.8 the assertion that $\operatorname{Sing}Z$ is Kan for every topological space $Z$. Its stated scope applies to every $E_n$; choosing the constant basepoint does not change the underlying simplicial set or its horn-extension property. The full statement and displayed proof were read for this repair; the preceding realization-of-horns identification used there remains imported. This premise supplies the Kan assertion only. The sequential construction, bonding-map comparison and colimit argument below are local applications of the declared suppliers.

### Proof
1.1 The ordered homeomorphism in [F3], with the topology convention of [F6], makes the topological composite in the Statement a well-defined based continuous map. The pointed adjunction [F1] therefore defines a unique based simplicial structure map $s_n:K\wedge X_n\to X_{n+1}$. Its defining equation is $\epsilon_{n+1}|s_n|=\sigma_n(1_{S^1}\wedge\epsilon_n)$ under that homeomorphism. By [F7], each $X_n$ is Kan in the sense of [F5]. Thus $X$ is the required pointed simplicial prespectrum; [F3] also ensures its realization has levels in the topological prespectrum convention. [F1, F2, F3, F5, F6, F7, given]

2.1 For $d\geq1$, the evaluation weak equivalence [F1] identifies $\pi_d^{\mathrm{simp}}(X_n)=\pi_d(|X_n|)$ with $\pi_d(E_n)$. By [F3] and [F4], this comparison also agrees with the ordinary Kan-group comparison on evaluated sphere representatives. For a sphere representative $a:A\to X_n$, the equation from step 1.1 and the ordered suspension formula [F4] give the evaluated bonding representative $\sigma_n\circ(1_{S^1}\wedge(\epsilon_n|a|))$. This is exactly the bonding representative of [F2], with its sphere-coordinate identification and the first factor retained. Hence the stage isomorphisms commute with the actual bonding homomorphisms. For each integer $k$, take a tail with $n+k\geq2$ and pass these compatible isomorphisms to colimits by [F3], obtaining $G_k(X)\cong\pi_k(E)$ independently of the cutoff. Evaluation, the ordered homeomorphism and the sphere comparison are natural; for the level maps specified in Given, their naturality also makes the constructed structure maps commute with $\operatorname{Sing}f_n$. The induced colimit isomorphism is therefore natural in $E$. [F1, F2, F3, F4, step 1.1, given] ∎


## Omega replacement preserves sequential stable groups

[Open item](item-lem-author-e0b0bf18ed2b-omega-replacement-comparison) · level 2


### Statement
Let $X$ be a level-Kan sequential pointed simplicial prespectrum with sphere-first structure maps $K\wedge X_n\to X_{n+1}$, $K=\Delta^1/\partial\Delta^1$. For the replacement $QX$ of the simplicial Omega replacement input, the natural map $G_k(X)\to G_k(QX)$ is an isomorphism for every integer $k$. More precisely, for $i+k\geq2$ there is a natural isomorphism $\pi_{i+k}((QX)_i)\cong G_k(X)$, compatible with advancement in $i$.

### Statement references

[thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input](item-thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input)

[lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance)

### Facts & Assumptions
**Given:** $X$, $k$ and $i$ as in the Statement, in the ZFC setting of [F1]. Write $s_n:K\wedge X_n\to X_{n+1}$ for its structure maps and $\iota_n:X_n\to\Omega X_{n+1}$ for their adjoints. All homotopy groups have the realization/Kan comparison and sphere-first convention of [F2].

**Goal:** Compute the stable groups of the imported Omega replacement.

[F1] [thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input](item-thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input) gives $(QX)_i=\operatorname{colim}_m\Omega^mX_{i+m}$, the transition $\Omega^m\iota_{i+m}$, the inherited structure maps, and $\iota_{RX}=R\iota_X$ for $R=s\Omega$.

[F2] [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance) supplies the pointed simplicial prespectrum and $G_k$ conventions and identifies a sequential colimit with any cofinal finite tail.

[F3] [lem-adjudicate-fcabf63fbedd-finite-kan-ordered-loops](item-lem-adjudicate-fcabf63fbedd-finite-kan-ordered-loops) supplies finite Kan representatives, commutation of homotopy groups with sequential Kan colimits, and natural iterated loop isomorphisms $D_{r,m}$ with the left-coordinate transition identity.

[F4] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is allowed in the imported model-structure existence arguments underlying [F1]. The calculation below uses only its explicit level formula, transitions and inherited structure maps; it makes no simultaneous choices of fillers and does not use the imported stable-equivalence assertion.

### Proof
1.1 Put $r=i+k\geq2$. By [F3], the levels $\Omega^mX_{i+m}$ are Kan and $\pi_r((QX)_i)\cong\operatorname{colim}_m\pi_r(\Omega^mX_{i+m})$. Apply $D_{r,m}$ to obtain $\operatorname{colim}_m\pi_{r+m}(X_{i+m})$. The transition identity of [F3], with $u=\iota_{i+m}$ and $v=s_{i+m}$, identifies its bonding map with suspension by a new leftmost $K$ followed by $s_{i+m}$. These are exactly the sphere-first bonding maps of [F2]. Cofinal tail invariance therefore gives the natural isomorphism $\phi_i:\pi_{i+k}((QX)_i)\xrightarrow{\sim}G_k(X)$. In particular, the map $X_i\to(QX)_i$ inserts the $m=0$ term, so its composite with $\phi_i$ is the defining map from stage $i$ into $G_k(X)$. [F1, F2, F3, F4, given]

2.1 For advancement in $i$, [F1] identifies the adjoint structure map at the $m$th stage with $\Omega^m\iota_{i+m}$, using $\iota_{RX}=R\iota_X$. For $m\geq1$, label the loop variables of a representative $f:T_r\to\Omega^mX_{i+m}$ by $t_1,\ldots,t_m$, outermost first, and write $z$ for its sphere coordinates. Its fully uncurried form is $\widehat f(t_m,\ldots,t_1,z)$; below, the list $t_m,\ldots,t_2$ is empty when $m=1$. Taking the adjoint of $\Omega^m\iota_{i+m}$ extracts the outermost loop as the new sphere coordinate, say $s=t_1$, leaving target loop variables $t_2,\ldots,t_m,t_{m+1}$. Fully uncurrying the target therefore gives $s_{i+m}(t_{m+1},\widehat f(t_m,\ldots,t_2,s,z))$, on the ordered sphere coordinates $(t_{m+1},t_m,\ldots,t_2,s,z)$. This is exactly the sphere-first stable bonding of $\widehat f$: the new circle is $t_{m+1}$ and the old sphere coordinates are $(t_m,\ldots,t_2,s,z)$. No circle factors are interchanged. For $m=0$, adjunction directly gives $s_i(s,f(z))$, the same bonding formula. Thus, if $b_i^Q$ is the stable bonding map for $QX$, $\phi_{i+1}b_i^Q=\phi_i$. Consequently the $\phi_i$ induce an isomorphism $G_k(QX)\to G_k(X)$ by [F2]. Its composite with the natural map from $G_k(X)$ fixes every stage representative by the last assertion of step 1.1, and is the identity. This proves both the stable-group isomorphism and the asserted advancement compatibility. [F1, F2, F3, step 1.1] ∎


## External affine derived and perfect comparisons

[Open item](item-thm-author-4f716d60801a-affine-derived-input) · level 2


### Statement
Assume the Axiom of Choice and work in suitable fixed universes for the unbounded derived categories. Let $A$ be a commutative unital ring and $X=\operatorname{Spec}A$, with its structure sheaf $\mathcal O_X$. Write $D(A)$ for the ordinary unbounded derived category of $A$-modules, and $D(\mathcal O_X)=D(\mathrm{Mod}(\mathcal O_X))$ for that of all sheaves of $\mathcal O_X$-modules, using cochain complexes and inverting quasi-isomorphisms. Let $D_{\mathrm{qc}}(X)$ be the full subcategory of $D(\mathcal O_X)$ consisting of objects whose cohomology sheaves are quasi-coherent in every degree.

Here an object $E$ of $D(\mathcal O_X)$ is called locally perfect if every point has an open neighbourhood $U$ such that $E|_U$ is isomorphic in $D(\mathcal O_U)$ to a bounded cochain complex of finite locally free $\mathcal O_U$-modules; the finite degree bounds may depend on $U$.

The associated-sheaf functor on $A$-modules is exact, and its degreewise application to complexes preserves quasi-isomorphisms. The induced functor $D(A)\to D_{\mathrm{qc}}(X)$ is an equivalence. For any $A$-complex, its associated object is locally perfect if and only if the complex is isomorphic in $D(A)$ to a bounded complex of finitely generated projective $A$-modules.

### Statement references
[math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-associated-sheaf-module-affine-scheme](https://alphabetamath.cc/item/def-associated-sheaf-module-affine-scheme)

[math:def-quasi-coherent-module-scheme](https://alphabetamath.cc/item/def-quasi-coherent-module-scheme)

[math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)

[thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)

[lem-author-4f716d60801a-restriction-support](item-lem-author-4f716d60801a-restriction-support)

[thm-author-4f716d60801a-local-perfect-input](item-thm-author-4f716d60801a-local-perfect-input)

### Source contract
**Given:** $A$ and $X$ as above, and possibly unbounded complexes, under the stated Choice and universe conventions.

**Goal:** Record the classical affine comparison and its perfection criterion with the scheme-side terms specified.

[F1] Stacks Lemma 36.3.5 imports the equivalence in the statement. Its displayed proof explicitly invokes exactness of associated sheaf, so this import includes that exactness and the induced functor on complexes.

[F2] Stacks Lemma 36.10.7 imports the perfection criterion. The ring convention is that of [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring). The local finite locally free convention agrees with the source's perfection on schemes by [thm-author-4f716d60801a-local-perfect-input](item-thm-author-4f716d60801a-local-perfect-input).

[F3] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the unbounded derived constructions and their Hom sets in suitable universes. The ordinary cochain-localization convention is [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category), applied to modules and to the module sheaves of [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space). Choice is retained for these imported resolution and derived-category constructions, as specified in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F4] Restriction to an open subspace is [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace); its degreewise operation induces restriction on derived objects by [lem-author-4f716d60801a-restriction-support](item-lem-author-4f716d60801a-restriction-support). Thus $E|_U$ in the inline local-perfect condition is independent of the complex representing $E$.

### External input
Import [F1] and [F2] with the stated reading limits, using the ambient construction in [F3] and the restriction operation in [F4]. The local-perfection convention in [F2] applies because schemes have local stalk rings. This item records a classical derived equivalence; the enhanced comparison is established separately for the actual induced functor. No local proof of the imported comparisons is claimed.


## Reading spectrum homotopy from an Omega tower

[Open item](item-lem-author-80e2d7bee57f-tower-group-index) · level 2


### Statement
Work in ZFC with the size, pointed-space and spectrum conventions of the Omega-tower comparison. Let $Y=(Y_n,\alpha_n:Y_n\simeq\Omega Y_{n+1})_{n\geq0}$ be a coherent Omega tower of pointed spaces and let $E$ be its associated spectrum. Write $\mathbb S=\Sigma^\infty S^0$ for the sphere spectrum and $\pi_i(E)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[i],E)$ with its stable abelian group law. For pointed spaces use $\pi_d(Z)=\pi_0\operatorname{Map}_{S_*}(S^d,Z)$, computed in a pointed Kan representative, with $S^{d+1}=\Sigma S^d\simeq S^1\wedge S^d$ in that order.

For an integer $i$, choose $N\geq0$ with $N+i\geq2$. For $n\geq N$, put $A_n=\pi_{n+i}(Y_n)$. With $d=n+i$, let $\lambda_d:\pi_{d+1}(Y_{n+1})\xrightarrow{\sim}\pi_d(\Omega Y_{n+1})$ be the suspension–loop identification and set $b_n=\lambda_d^{-1}\circ(\alpha_n)_*:A_n\to A_{n+1}$. Define the stable group of the tower in degree $i$ by $G_i(Y)=\operatorname{colim}_{n\geq N}(A_n,b_n)$, a sequential colimit of abelian groups.

For every $n\geq N$, the natural comparison gives compatible isomorphisms $\pi_i(E)\cong A_n\cong G_i(Y)$. These identifications are natural in coherent maps of towers and independent of increasing the cutoff $N$, under the canonical tail-colimit identifications.

### Statement references

[lem-author-e0b0bf18ed2b-omega-tower-shift](item-lem-author-e0b0bf18ed2b-omega-tower-shift)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Facts & Assumptions
**Given:** $Y$, $E$, $i$ and $N$ as stated. Use the same size and foundational conventions as the Omega-tower comparison, including AC.

**Goal:** Identify the specified stable group with the spectrum homotopy group and each stage group on the indicated tail.

[F1] [lem-author-e0b0bf18ed2b-omega-tower-shift](item-lem-author-e0b0bf18ed2b-omega-tower-shift) supplies the coherent-tower realization, sphere and homotopy-group conventions, the ordered suspension–loop group isomorphism, and the cutoff-independent colimit $G_i(Y)$ with exactly the bonding maps $b_n$ above. It gives natural comparison isomorphisms $c_n:\pi_i(E)\xrightarrow{\sim}A_n$ satisfying $b_nc_n=c_{n+1}$, and identifies the canonical stage-to-colimit maps as isomorphisms for $n+i\geq2$.

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) as part of ZFC. Its use is inherited through [F1] from the classical foundations of the stable enhancement; the two-step application below makes no additional selection of representatives or strict models.

### Proof
1.1 Fix any $n\geq N$. Since $n+i\geq2$, apply [F1] with $k=i$ to obtain the group isomorphism $c_n:\pi_i(E)\xrightarrow{\sim}\pi_{n+i}(Y_n)=A_n$. Its compatibility with advancement is $b_nc_n=c_{n+1}$, with $b_n$ exactly as defined in the Statement. The foundational assumption for this application is [A1]. [F1, A1, given]

2.1 The group system $(A_n,b_n)$ and its colimit are exactly those of [F1], so the canonical map $\iota_n:A_n\to G_i(Y)$ is an isomorphism. Compose it with $c_n$ from step 1.1. The equality $\iota_{n+1}b_n=\iota_n$, together with $b_nc_n=c_{n+1}$, makes the composite independent of advancement. Naturality and the canonical identifications for increased cutoffs are those supplied by [F1]. This proves all the claimed comparisons. [F1, step 1.1] ∎


## Homotopic maps act equally on cohomology

[Open item](item-lem-author-b747b28c359f-homotopy-cohomology) · level 2

### Statement
If cochain maps $f,g:C\to D$ are cochain-homotopic, then $H^i(f)=H^i(g)$ for every integer $i$. Here a cochain homotopy is a family $h^i:C^i\to D^{i-1}$ with $f^i-g^i=d_D^{i-1}h^i+h^{i+1}d_C^i$.

### Facts & Assumptions

[F1] Cochain maps induce maps on cohomology by applying the map to cocycle representatives ([lem-author-b747b28c359f-cochain-maps](item-lem-author-b747b28c359f-cochain-maps)).

### Proof

**Given:** Cochain maps $f,g$ and a cochain homotopy $h$ between them.

**Goal:** Prove equality of their induced cohomology maps.

1.1 For a cocycle $x\in C^i$, the homotopy identity gives $f^i(x)-g^i(x)=d_D^{i-1}h^i(x)$ because $d_C^i(x)=0$. This difference is a coboundary. [given]

2.1 Every cohomology class has a cocycle representative, and by [F1] the induced maps take it to the classes of $f^i(x)$ and $g^i(x)$. These classes agree by step 1.1. [F1, step 1.1] ∎

## Stable spectra and exact triangles

[Open item](item-def-stable-spectra-interface) · level 3


### Definition
Use the symmetric monoidal stable infinity-category $\mathrm{Sp}=\operatorname{Exc}_*(S_*^{\mathrm{fin}},S)$ supplied by the stable enhancement input. Here $S$ is the infinity-category of spaces, $S_*^{\mathrm{fin}}$ is the infinity-category of finite pointed spaces, and $\operatorname{Exc}_*$ consists of functors taking the point to a contractible space and pushouts to pullbacks. An infinity-category retains mapping spaces and coherent higher compositions. Diagrams are coherent functors, and limits and colimits are their homotopy limits and colimits; these exist for small diagrams.

Write $0$ for the zero spectrum. For $f:A\to B$, define $\operatorname{fib}(f)=A\times_B0$ and $\operatorname{cofib}(f)=B\sqcup_A0$. A fiber or cofiber sequence includes its nullhomotopy and defining pullback or pushout square. Define suspension $E[1]=0\sqcup_E0$ and desuspension $E[-1]=0\times_E0$. A fiber sequence $F\to A\to B$ extends to the cofiber triangle $F\to A\to B\to F[1]$, and $\operatorname{cofib}(f)\simeq\operatorname{fib}(f)[1]$. Let $\mathbb S=\Sigma^\infty S^0$ be the sphere spectrum and define $\pi_i(E)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[i],E)$. These are abelian groups for every $i\in\mathbb Z$, and $\pi_i(E[1])\cong\pi_{i-1}(E)$.

Products are coherent homotopy products. The smash product $E\wedge F$ is the separately colimit-preserving symmetric monoidal product with unit $\mathbb S$; its associativity, symmetry and unit include higher coherences. A ring spectrum means an associative or commutative algebra object for smash, with the intended type specified. Smash is separately exact: it preserves finite limits and finite colimits in each variable.

To connect this interface with the published sequential-prespectrum definition, let $E$ be a sequential prespectrum of well-pointed based compactly generated weak Hausdorff spaces, with $\sigma_n:S^1\wedge E_n\to E_{n+1}$ and the sphere coordinate first. Form $X=\operatorname{Sing} E$ with the structure maps of the singular sequential comparison; every level $X_n$ is Kan. Apply the simplicial Omega replacement input to this level-Kan $X$ to form $QX$ functorially. Then $QX$ is level Kan and its adjoint structure maps $(QX)_n\to\Omega(QX)_{n+1}$ are weak equivalences (indeed isomorphisms). Regard its coherent Omega tower as an object $\mathcal RE$ of $\mathrm{Sp}$ using the imported tower equivalence. For every $i\in\mathbb Z$ there is a natural isomorphism

$$\pi_i^{\mathrm{seq}}(E)=\operatorname*{colim}_{n\gg0}\pi_{n+i}(E_n)\xrightarrow{\sim}\pi_i(\mathcal RE).$$

The left bonding map is suspension with $S^1$ first followed by $\sigma_n$, with the published sphere-coordinate identification. If $E$ is already an Omega-prespectrum, its adjoint structure maps are weak equivalences and the comparison agrees with evaluation at each sufficiently late level. The tower $(QX)_{n+1}$ represents $(\mathcal RE)[1]$, so $\pi_i((\mathcal RE)[1])\cong\pi_{i-1}^{\mathrm{seq}}(E)$. In particular, a map inducing isomorphisms on all published stable groups is sent to an equivalence in $\mathrm{Sp}$.

### Definition references

[thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)

[math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum)

[lem-author-e0b0bf18ed2b-singular-sequential-comparison](item-lem-author-e0b0bf18ed2b-singular-sequential-comparison)

[lem-author-e0b0bf18ed2b-omega-replacement-comparison](item-lem-author-e0b0bf18ed2b-omega-replacement-comparison)

[thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input](item-thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input)

### Facts & Assumptions
**Given:** The foundational and smallness conventions of the external stable enhancement and, for the comparison, a sequential prespectrum $E$ as specified above.

**Goal:** Justify the operations, comparison, index convention and equivalence detection in the definition.

[F1] [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input) supplies the stable enhancement, coherent tower equivalence, limits, colimits and smash product.

[F2] [lem-author-e0b0bf18ed2b-singular-sequential-comparison](item-lem-author-e0b0bf18ed2b-singular-sequential-comparison) makes $X=\operatorname{Sing} E$ a level-Kan sequential pointed simplicial prespectrum and identifies its groups with the published sequential groups, preserving sphere order.

[F3] [lem-author-e0b0bf18ed2b-omega-replacement-comparison](item-lem-author-e0b0bf18ed2b-omega-replacement-comparison) identifies the groups of $\operatorname{Sing} E$ and its Omega replacement.

[F4] [lem-author-e0b0bf18ed2b-omega-tower-shift](item-lem-author-e0b0bf18ed2b-omega-tower-shift) identifies the latter groups with enhanced groups and proves the suspension index.

[F5] [lem-author-e0b0bf18ed2b-exactness-and-products](item-lem-author-e0b0bf18ed2b-exactness-and-products) proves rotation, homotopy products and separate exactness.

[F6] Reference 0 in External input supplies the criterion that all integer homotopy groups detect equivalences of spectra, and specifies their shift and pointed-evaluation conventions. Reference 1 supplies the coherent algebra-object meaning of ring spectrum.

[F7] The strict sequential objects and adjoint structure maps are those of [math:def-sequential-prespectrum-spectrum-and-adjoint-structure-maps](https://alphabetamath.cc/item/def-sequential-prespectrum-spectrum-and-adjoint-structure-maps); their stable-group bonding maps are those of [math:def-stable-homotopy-groups-of-a-sequential-prespectrum](https://alphabetamath.cc/item/def-stable-homotopy-groups-of-a-sequential-prespectrum). A map here is a family of based level maps commuting with the structure maps. An Omega-prespectrum has weak-equivalence adjoint structure maps.

[F8] Assume the Axiom of Choice, as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), within the ZFC setting of [F1]. The same nested universes and smallness convention apply throughout. Choice is retained in the imported categorical and homotopical foundations of [F1] and [F6] and the replacement input [F9]; no choice-free version of those inputs is asserted.

[F9] [thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input](item-thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input) applies to the level-Kan $X$ of [F2] and supplies the functorial $QX$, which is level Kan with adjoint structure maps $(QX)_n\to\Omega(QX)_{n+1}$ that are weak equivalences (indeed isomorphisms). Thus $QX$ gives the coherent Omega tower required by [F1] and [F4]. This is a separate input from the stable-group comparison in [F3].

### External input
Reference 0 imports spectral equivalence detection and the homotopy-group conventions in [F6]. Reference 1 imports coherent algebra objects: for the smash fibration $p:\mathrm{Sp}^{\otimes}\to N(\mathrm{Fin}_*)$, a commutative algebra is a section preserving inert morphisms. An inert base map has exactly one preimage over each non-basepoint of its target; inert arrows upstairs are the coCartesian arrows over these maps. For an associative algebra, first pull $p$ back along the associative operad to $N(\mathrm{Fin}_*)$, then take an inert-preserving section. That operad is the nerve of the category with finite pointed sets as objects and pointed maps equipped with an ordering of each non-basepoint fiber as morphisms; composition orders fibers by ordered concatenation. These imports apply to the supplied monoidal enhancement under [F8]. Only these premises are imported; the comparison and their application below are local.

### Justification
1.1 The operations and coherences exist by [F1], rotation, products and exactness follow from [F5], and the algebra terminology uses [F6]. For every spectrum, [F4] identifies $\pi_i$ with a homotopy group in degree at least two, hence an abelian group. For a sequential $E$, [F2] verifies the level-Kan hypothesis of [F9]. That input makes $QX$ level Kan with weak-equivalence adjoint structure maps, so its image in pointed spaces is a coherent Omega tower to which [F1] and [F4] apply. Compose the natural group isomorphisms of [F2], [F3] and [F4]. They give the displayed comparison with the sphere-first bonding maps of [F7]. The tail formula in [F4] gives the suspension sign. If $E$ is already an Omega-prespectrum, its adjoint weak equivalences make each sufficiently late bonding map an isomorphism; the colimit therefore agrees with evaluation there, compatibly with the comparison. [F1, F2, F3, F4, F5, F6, F7, F8, F9, given]

2.1 Let $f:E\to E'$ induce isomorphisms on all published stable groups. Naturality in step 1.1 gives isomorphisms on every $\pi_i(\mathcal Rf)$. These are precisely the groups in the imported criterion: for any spectrum $Z$ and integer $i$, choose $r\geq0$ with $d=i+r\geq2$. By [F4], our $\pi_i(Z)$ is naturally $\pi_d(\Omega^\infty(Z[r]))$. By [F6], the latter is the source's degree-$d$ group of $Z[r]$, hence its degree-$i$ group of $Z$, since the source defines degree $j$ by applying its degree-zero functor to $Z[-j]$. These identifications are natural in $Z$, so the criterion of [F6] applies to $\mathcal Rf$ and proves it is an equivalence in $\mathrm{Sp}$. The construction uses the functorial $\operatorname{Sing}$ and $Q$ of [F2] and [F9]; this argument asserts neither a model-category nor a monoidal equivalence. [F1, F2, F3, F4, F6, F8, F9, step 1.1] ∎


## Bounded finite-projective complexes and affine chain models

[Open item](item-lem-author-4f716d60801a-finite-projective-model) · level 3


### Statement
Assume the Axiom of Choice and the fixed compatible Grothendieck universes containing the data and $\omega$ used by the unbounded derived enhancement. For a commutative unital ring $A$, degreewise associated sheaf and global sections give inverse equivalences between bounded complexes of finitely generated projective $A$-modules and bounded complexes of finite locally free sheaves on $\operatorname{Spec}A$, preserving chain maps, homotopies, shifts and cones. A bounded complex $P$ of projective modules is K-projective: every map from $P$ to an acyclic complex is nullhomotopic, including after any shift of the target. Thus its derived morphisms are chain maps modulo homotopy, and the differential graded category of bounded finite-projective complexes models the full enhanced ring-perfect subcategory.

More precisely, all complexes here are cochain complexes and bounded means zero outside a finite interval. Let $\mathcal C_A$ be the dg category of bounded finite-projective complexes with the Hom complexes specified below. The functor $N_{\mathrm{dg}}\mathcal C_A\to\mathcal D(A)$ induced by inclusion and derived localization is fully faithful with essential image the objects perfect in the ordinary derived category. The ordinary category of the same complexes, localized as an infinity-category at quasi-isomorphisms, gives this same model. For any bounded projective $P$ and any complex $Q$, the cochain complex $\underline{\operatorname{Hom}}_A(P,Q)$ computes derived Hom from $P$, and in particular $H^0\underline{\operatorname{Hom}}_A(P,Q)=\operatorname{Hom}_{D(A)}(P,Q)$. Here computing derived Hom means that $\underline{\operatorname{Hom}}_A(P,Q)\to\underline{\operatorname{Hom}}_A(P,I_Q)$ is a quasi-isomorphism for a fibrant replacement $Q\to I_Q$ in the supplied derived construction.

### Statement references
[math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring)

[lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

[thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)

[thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input)

[math:def-projective-module](https://alphabetamath.cc/item/def-projective-module)

[math:def-hom-complex-of-chain-complexes](https://alphabetamath.cc/item/def-hom-complex-of-chain-complexes)

[math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map)

[math:thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic](https://alphabetamath.cc/item/thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic)

[thm-adjudicate-2ee8c9528eaa-dg-nerve-derived-mapping-input](item-thm-adjudicate-2ee8c9528eaa-dg-nerve-derived-mapping-input)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

### Facts & Assumptions
**Given:** $A$, bounded projective $P$, arbitrary $Q$ and acyclic $N$; Choice and the fixed universe assumptions as stated. Existence of these universes is a separate assumption, not a consequence of Choice.

**Goal:** Establish the affine chain model, its derived Hom calculation and the actual enhanced comparison.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is retained for the affine equivalence and the imported unbounded resolution constructions. [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) and [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) specify the compatible size bounds. The finite homotopy construction below makes only finitely many lift selections.

[F1] [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface) gives the additive termwise equivalence between finite projectives and finite locally free sheaves, with its natural unit and counit.

[F2] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the unbounded derived localization, cochain maps and homotopies, cohomology, quasi-isomorphisms and cochain cone convention. The current Statement of [thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input) explicitly supplies exactness of associated sheaf and preservation of quasi-isomorphisms.

[F3] [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring) defines ring-perfect objects by bounded finite-projective representatives up to derived isomorphism. [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module) supplies the lifting property for arbitrary projective terms, without a finite-generation hypothesis.

[F4] Use $C^\sharp_n=C^{-n}$, $d^\sharp_n=d_C^{-n}$ to translate [math:def-hom-complex-of-chain-complexes](https://alphabetamath.cc/item/def-hom-complex-of-chain-complexes) and [math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map) to cochains. Explicitly, $\underline{\operatorname{Hom}}_A(P,Q)^r=\prod_n\operatorname{Hom}_A(P^n,Q^{n+r})$, with $(\delta u)^n=d_Q^{n+r}u^n-(-1)^r u^{n+1}d_P^n$. Its cochain degree $r$ is the published Hom chain degree $-r$. Composition is $(vu)^n=v^{n+r}u^n$ for $u$ of degree $r$; identities are degree-zero identity maps. These operations are associative and satisfy $\delta(vu)=(\delta v)u+(-1)^{\deg v}v\delta u$ by substitution, giving the stated dg category. Shifts are $Q[s]^n=Q^{n+s}$ with differential $(-1)^s d_Q$, and $\operatorname{Cone}(f)^n=E^n\oplus C^{n+1}$ with $d(e,c)=(d_Ee+fc,-d_Cc)$ for $f:C\to E$. The published cone criterion [math:thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic](https://alphabetamath.cc/item/thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic) applies under this same reindexing. The degree-zero cocycles of the Hom complex are exactly cochain maps; its degree-zero boundaries are exactly maps $dh+hd$, so its $H^0$ is cochain maps modulo homotopy.

[F5] [thm-adjudicate-2ee8c9528eaa-dg-nerve-derived-mapping-input](item-thm-adjudicate-2ee8c9528eaa-dg-nerve-derived-mapping-input) supplies the dg nerve, invariance of its mapping spaces under Hom quasi-isomorphisms, the reflective comparison to the specified $\mathcal D(A)$ using $Q\to I_Q$, and the ordinary-category localization comparison under identity-cylinder closure. These are the precise enhanced inputs used below; they do not assert the perfect-model conclusion in advance.

### Proof
1.1 Apply [F1] termwise: naturality makes the unit and counit commute with differentials, while additivity preserves the equations for maps and homotopies and the signed shift and cone matrices of [F4]. Finite sums of projectives are projective by lifting each summand separately, and finite generation is preserved by taking the finite union of generating sets. Thus this is an equivalence of the indicated complex categories, preserving those constructions; exactness in [F2] preserves quasi-isomorphisms. For a cochain map $f:P\to N$, choose $b$ with $P^n=0$ for $n>b$ and start with $h^{b+1}=0$. Descending through the finite nonzero range of $P$, suppose the homotopy equation is already satisfied in degree $n+1$. Put $r^n=f^n-h^{n+1}d_P^n$. Then $d_Nr^n=f^{n+1}d_P^n-d_Nh^{n+1}d_P^n=h^{n+2}d_P^{n+1}d_P^n=0$. Hence $r^n$ factors through $Z^n(N)=\ker d_N^n$. Acyclicity makes $d_N^{n-1}:N^{n-1}\to Z^n(N)$ surjective; projectivity in [F3] lifts $r^n$ to $h^n:P^n\to N^{n-1}$. Below the lowest nonzero degree put $h^n=0$; the remaining equations have zero source. This proves $f=dh+hd$. Apply it to $N[r]$ for each integer $r$: a Hom cocycle $u$ of degree $r$ is a map $P\to N[r]$, and a nullhomotopy $h$ for that map gives $u=\delta((-1)^r h)$. Thus $\underline{\operatorname{Hom}}_A(P,N)$ is acyclic. [A1, F1, F2, F3, F4, given, construct, algebra]

2.1 For a quasi-isomorphism $q:Q\to R$, [F4] gives an acyclic cone. Direct substitution into the displayed Hom and cone differentials identifies $\underline{\operatorname{Hom}}_A(P,\operatorname{Cone}(q))$ with $\operatorname{Cone}(\underline{\operatorname{Hom}}_A(P,q))$: in degree $r$ both consist of pairs $(a^n:P^n\to R^{n+r},b^n:P^n\to Q^{n+r+1})$ and have differential $(\delta a+qb,-\delta b)$. Step 1.1 and the cone criterion therefore make $\underline{\operatorname{Hom}}_A(P,q)$ a quasi-isomorphism. In particular use the unit $Q\to I_Q$ from [F5]. The natural comparison of mapping spaces factors as $\operatorname{Map}_{N_{\mathrm{dg}}\mathrm{Ch}(A)}(P,Q)\to\operatorname{Map}_{N_{\mathrm{dg}}\mathrm{Ch}(A)}(P,I_Q)\simeq\operatorname{Map}_{\mathcal D(A)}(LP,LQ)$. The first arrow is an equivalence by the Hom quasi-isomorphism and [F5], and the second is its localization adjunction. This proves enhanced full faithfulness for $\mathcal C_A$, with the actual localization functor and coherent compositions, as well as the asserted derived Hom computation. In particular its $H^0$ description follows from [F4] and [F2]. Every perfect derived object is isomorphic to such a representative by [F3]; an isomorphism in the homotopy category is an equivalence in the enhancement. This gives the stated essential image without replacing a mapping-space argument by a morphism-set calculation. Finally a quasi-isomorphism $q:P\to Q$ between bounded projectives is a homotopy equivalence: the established Hom quasi-isomorphism for source $Q$ supplies $g:Q\to P$ with $qg\simeq\mathrm{id}_Q$, and injectivity on $H^0$ for source $P$ then gives $gq\simeq\mathrm{id}_P$. Conversely homotopy equivalences are quasi-isomorphisms because homotopic maps have the same action on cohomology. Identity mapping cylinders remain in $\mathcal C_A$: their terms are finite sums of terms of $P$ and its shift, as seen from $P\oplus\operatorname{Cone}(\mathrm{id}_P)$. Thus [F5] identifies the ordinary quasi-isomorphism localization with its dg nerve and hence with the same full enhanced perfect subcategory. Choice and the separate universe assumptions enter through [A1] and [F5]; no additional infinite choice was used in step 1.1. [A1, F2, F3, F4, F5, step 1.1, construct, algebra] ∎


## Cohomology descends to the derived category

[Open item](item-lem-author-b747b28c359f-derived-cohomology) · level 3


### Statement
For each integer $i$, cohomology defines a functor $H^i:D(\mathbb Z)\to\operatorname{Ab}$. Here $D(\mathbb Z)$ is the derived category of cochain complexes of abelian groups, obtained by inverting quasi-isomorphisms; a quasi-isomorphism is a cochain map inducing an isomorphism on every cohomology group.

### Facts & Assumptions

[F1] The derived category is the localization of the homotopy category of complexes at quasi-isomorphisms ([math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)). A functor inverting the localized arrows factors through the localization by its universal property ([math:def-localization-of-a-category-at-a-class-of-morphisms](https://alphabetamath.cc/item/def-localization-of-a-category-at-a-class-of-morphisms)). We use the same-object localization model and the standing size convention of these interfaces; this argument makes no additional assertion of local smallness.

[F2] Cochain maps induce functorial cohomology maps, and homotopic maps induce equal maps ([lem-author-b747b28c359f-cochain-maps](item-lem-author-b747b28c359f-cochain-maps), [lem-author-b747b28c359f-homotopy-cohomology](item-lem-author-b747b28c359f-homotopy-cohomology)).

[F3] The category $\operatorname{Ab}$ of abelian groups and homomorphisms is an abelian category ([math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)), so the derived-category construction in [F1] applies to it.

[F4] Cochain complexes have differentials $d^n:C^n\to C^{n+1}$ with $d^{n+1}d^n=0$ ([math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)). Under reindexing $C^\sharp_n=C^{-n}$, the cochain homotopy category $K(\operatorname{Ab})$ has these complexes as objects and cochain-homotopy classes of maps as morphisms, with composition induced by representatives ([math:def-homotopy-category-of-chain-complexes](https://alphabetamath.cc/item/def-homotopy-category-of-chain-complexes)).

[F5] A covariant functor assigns objects and morphisms and preserves identities and composition ([math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)).

### Proof

**Given:** An integer $i$ and the derived category described in the statement.

**Goal:** Construct the stated functor.

1.1 By [F2], the assignments $C\mapsto H^i(C)$ and $[f]\mapsto H^i(f)$ are well defined on the objects and morphisms of the homotopy category in [F4], with values in $\operatorname{Ab}$ from [F3]. They preserve identities and composition, hence form a functor by [F5]. Every quasi-isomorphism becomes an isomorphism under this functor by the definition of quasi-isomorphism in the statement. [F2, F3, F4, F5, given]

2.1 The localization universal property in [F1] therefore gives a functor on $D(\mathbb Z)$ whose composite with localization is the functor of step 1.1. Thus cohomology and its maps depend only on the derived-category object and morphism. [F1, step 1.1] ∎


## Homotopy exactness of a spectral fiber sequence

[Open item](item-lem-fiber-sequence-homotopy-exactness) · level 4


### Statement
For a fiber sequence $A\to B\to C$ of spectra there is a natural exact sequence of abelian groups

$$\cdots\to\pi_{i+1}C\to\pi_iA\to\pi_iB\to\pi_iC\to\pi_{i-1}A\to\cdots.$$

If $\pi_iC=0$, then $\pi_iA\to\pi_iB$ is surjective; if also $\pi_{i+1}C=0$, it is an isomorphism. Exactness is asserted for these homotopy groups themselves, before taking images in another spectrum.

A fiber sequence here consists of maps $A\to B\to C$, a specified nullhomotopy of their composite, and an identification of $A$ with the homotopy pullback $B\times_C0$. For a spectrum $E$ and an integer $i$, $\pi_iE$ is the group of components of the mapping space from the $i$-fold suspension of the sphere spectrum to $E$. Exactness means that the image of each displayed homomorphism equals the kernel of the next.

### Facts & Assumptions

**Given:** A fiber sequence $A\to B\to C$ of spectra and an integer $i$.

**Goal:** Construct the natural long exact sequence and prove the stated consequences.

[F1] In the stable spectra interface, mapping spaces represent coherent maps and carry limits in the target to homotopy limits of spaces. Fiber sequences extend to cofiber triangles; pushout and pullback squares agree, and suspension is an equivalence with inverse desuspension. The groups are $\pi_iE=\pi_0\operatorname{Map}(\mathbb S[i],E)$, are abelian, and satisfy $\pi_i(E[1])\cong\pi_{i-1}E$ naturally. [def-stable-spectra-interface](item-def-stable-spectra-interface)

### Proof

**Proof technique:** Apply mapping spaces to rotated fiber squares and examine components of their homotopy fibers.

1.1 For any spectrum $T$, apply $\operatorname{Map}(T,-)$ to the defining pullback square for $A$. By its universal property, $\operatorname{Map}(T,A)$ is the homotopy fiber of $\operatorname{Map}(T,B)\to\operatorname{Map}(T,C)$ over the zero map. A point in this fiber is a map $T\to B$ together with a path from its composite with $B\to C$ to zero. Thus a component of $\operatorname{Map}(T,B)$ has zero image in $\pi_0\operatorname{Map}(T,C)$ exactly when it has a representative admitting such a path, equivalently when it lies in the image of $\pi_0\operatorname{Map}(T,A)$. This proves exactness at $\pi_0\operatorname{Map}(T,B)$. [F1, given]

2.1 The defining pullback square is also a pushout, so its cofiber triangle is $A\to B\to C\to A[1]$. The square exhibiting $C$ as the cofiber of $A\to B$ is also a pullback; hence $B\to C\to A[1]$ is a fiber sequence with the induced nullhomotopy. Repeating this rotation and applying inverse suspension produces a bi-infinite sequence of fiber sequences. Applying step 1.1 to each one gives exactness at every term of the resulting sequence of mapping-space component groups. [F1, step 1.1]

3.1 Take $T=\mathbb S[i]$. The first rotated terms are $\pi_iA\to\pi_iB\to\pi_iC\to\pi_i(A[1])$, and the natural suspension identification identifies the last group with $\pi_{i-1}A$. Applying the same identification to the other rotations gives the displayed long sequence. The connecting maps are induced by the cofiber-triangle maps, with these suspension identifications. The construction is natural for maps of fiber sequences, including their specified coherences, because it uses the universal properties of the fiber and cofiber squares. The displayed maps are homomorphisms under the abelian group structures of [F1]. [F1, step 2.1]

4.1 Exactness at $\pi_iB$ makes $\pi_iA\to\pi_iB$ surjective when $\pi_iC=0$. Exactness at $\pi_iA$ makes its kernel the image of $\pi_{i+1}C$, so it is also injective when that group vanishes. Hence it is an isomorphism in the latter case. These deductions concern the groups in the fiber sequence; no preservation of exactness after taking images in a further group is asserted. [step 3.1] ∎


## Decreasing spectral filtrations and associated graded

[Open item](item-def-decreasing-filtered-spectrum) · level 4


### Definition
Let $E$ be a spectrum. A **decreasing filtration on $E$** consists of spectra $F^jE$, indexed by $j\in\mathbb Z$, and a coherent diagram whose transition maps $F^jE\to F^kE$ are defined whenever $j\geq k$, together with a coherent compatible family of maps $F^jE\to E$. Thus the composite $F^{j+1}E\to F^jE\to E$ is identified with the given map $F^{j+1}E\to E$. Coherent means that the maps, their composition identifications, and all higher compatibility data form a diagram and a cone in the infinity-category of spectra.

The **associated graded spectrum in degree $j$** is $\operatorname{gr}^jE=\operatorname{cofib}(F^{j+1}E\to F^jE)$. For $i\in\mathbb Z$, its **image filtration** on the homotopy group $\pi_iE$ is the family of subgroups

$$F^j\pi_iE=\operatorname{im}(\pi_iF^jE\longrightarrow\pi_iE).$$

The filtration is **exhaustive** if the canonical map $\operatorname*{colim}_{j\to-\infty}F^jE\to E$ is an equivalence. Here the colimit is over the maps from larger indices to smaller indices. It is **complete**, in the tower-vanishing convention used here, if $\operatorname*{lim}_{j\to+\infty}F^jE$ is equivalent to the zero spectrum; the limit is taken over the same transition maps. It is **nonnegative** if every structure map $F^jE\to E$ is an equivalence for $j\leq0$. Completeness imposes no injectivity condition on the maps $\pi_iF^jE\to\pi_iE$.

### Facts & Assumptions
**Given:** A spectrum $E$ and a coherent augmented tower as in the definition.

**Goal:** Justify the graded spectra, image filtration, and the stated conditions.

[F1] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the stable infinity-category of spectra, its small limits and colimits, cofibers, zero spectrum, and functorial abelian homotopy groups.

### Justification
1.1 The index category has one object for each integer and one arrow $j\to k$ when $j\geq k$. It is small, so the tower has a limit and a colimit. The compatible maps to $E$ form a cone and induce the displayed canonical colimit map. Each transition map has a cofiber, so every $\operatorname{gr}^jE$ is defined. These constructions are invariant under equivalence of the coherent input diagrams. [F1, given]

2.1 Applying $\pi_i$ gives group homomorphisms. The image of each structure map is therefore a subgroup of $\pi_iE$, and compatibility with $F^{j+1}E\to F^jE$ gives $F^{j+1}\pi_iE\subseteq F^j\pi_iE$. Equivalence to $E$ or to the zero spectrum is a well-defined condition on the specified maps or limit. None of the three conditions includes injectivity of the homomorphisms defining the image filtration; in particular, completeness is the stated condition on the tower limit. [F1, given, step 1.1] ∎


## Local perfection implies quasi-coherent cohomology

[Open item](item-lem-author-4f716d60801a-local-perfect-qc) · level 4


### Statement
Assume the Axiom of Choice and fix suitable Grothendieck universes containing $\omega$ and the scheme data, with larger universes for the categories. Existence of these universes is a standing size assumption. All module and sheaf data are taken relative to the fixed base universe. Let $X$ be any scheme in that universe and let $\mathcal A_X=\operatorname{Mod}(\mathcal O_X)$ be the abelian category of all Zariski $\mathcal O_X$-module sheaves in that convention. Write $D(\mathcal O_X)=D(\mathcal A_X)$ for its ordinary unbounded cochain derived category, and $\mathcal D(X)$ for its derived infinity-category, whose homotopy category is $D(\mathcal O_X)$.

An object $E\in\mathcal D(X)$ is locally perfect if each point has an open neighbourhood $U$ on which the image of $E|_U$ in $D(\mathcal O_U)$ is isomorphic to a bounded complex of finite locally free $\mathcal O_U$-modules. Here bounded means zero outside a finite interval of degrees; finite locally free means locally a finite direct sum of copies of the structure sheaf. Restriction uses $\mathcal O_U=\mathcal O_X|_U$. This condition is independent of the chosen derived representative and local on $X$. Every object satisfying it has quasi-coherent cohomology sheaves $H^n(E)$ for all integers $n$. The finite bounds may depend on the open set; neither a uniform global bound nor globally constant ranks are required.

### Statement references
[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)

[math:thm-abelian-sheaves-form-abelian-category](https://alphabetamath.cc/item/thm-abelian-sheaves-form-abelian-category)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[math:def-quasi-coherent-module-scheme](https://alphabetamath.cc/item/def-quasi-coherent-module-scheme)

[math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)

[math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)

[thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)

### Facts & Assumptions
**Given:** A scheme $X$ and a locally perfect object $E\in\mathcal D(X)$, under the Choice and universe assumptions in the Statement.

**Goal:** Prove independence of representatives, locality and quasi-coherence of every cohomology sheaf, without a uniform global bound.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is retained for the imported derived constructions and affine comparisons. [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) specifies the universe convention; their existence is separately assumed. These are the assumptions of [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input), which supplies $\mathcal D(X)$ and identifies its homotopy category with $D(\mathcal A_X)$. Thus equivalences of enhanced objects give exactly isomorphisms of objects in the ordinary derived category.

[F0] [math:def-scheme](https://alphabetamath.cc/item/def-scheme) specifies $(X,\mathcal O_X)$; [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space) specifies the module sheaves and their linear maps. [math:thm-abelian-sheaves-form-abelian-category](https://alphabetamath.cc/item/thm-abelian-sheaves-form-abelian-category) makes their category abelian, so [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category) applies, with its size caveat discharged by [A1]. Use the cochains of [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category) and the quasi-isomorphisms of [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism), read by $C^\sharp_n=C^{-n}$. Finite local freeness and its preservation under open restriction are as in [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank). The restriction operation itself is [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace).

[F1] [thm-author-4f716d60801a-local-perfect-input](item-thm-author-4f716d60801a-local-perfect-input) gives invariance and locality of perfection, and its bounded finite locally free characterization on schemes, under the stated Choice and universe assumptions.

[F2] On an affine open in the sense of [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme), [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model) gives a bounded module-complex model for each bounded finite locally free complex. The associated-sheaf construction is [math:def-associated-sheaf-module-affine-scheme](https://alphabetamath.cc/item/def-associated-sheaf-module-affine-scheme). [thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input) supplies exactness of this functor on modules. Modules here are unital left modules as in [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules), and [math:thm-modules-over-a-ring-form-an-abelian-category](https://alphabetamath.cc/item/thm-modules-over-a-ring-form-an-abelian-category) supplies their abelian category, so the cohomology theorem in [F4] applies to this source and the module-sheaf target.

[F3] [lem-author-4f716d60801a-restriction-support](item-lem-author-4f716d60801a-restriction-support) gives $H^n(E|_U)\cong H^n(E)|_U$ and invariance of cohomology under derived equivalence.

[F4] [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex) defines $H^n(C)=\ker(d^n)/\operatorname{im}(d^{n-1})$. Exactness has the meaning in [math:def-exact-functor-between-abelian-categories](https://alphabetamath.cc/item/def-exact-functor-between-abelian-categories). [math:thm-an-exact-functor-commutes-with-homology](https://alphabetamath.cc/item/thm-an-exact-functor-commutes-with-homology), applied after the reindexing $C^\sharp_n=C^{-n}$, gives $H^n(\widetilde{P^\bullet})\cong\widetilde{H^n(P^\bullet)}$ for every module complex $P^\bullet$ by exactness in [F2].

[F5] [math:def-quasi-coherent-module-scheme](https://alphabetamath.cc/item/def-quasi-coherent-module-scheme) defines quasi-coherence by local affine associated-module presentations and states its invariance under isomorphism and locality on open covers. Its locality discussion also recalls that every point of an open subscheme has an affine open neighbourhood contained in that open. In particular, an associated sheaf on an affine scheme satisfies the quasi-coherence condition by taking that whole affine scheme as the neighbourhood.

### Proof
1.1 By [A1], the local condition can be interpreted in the ordinary derived category, where [F1] gives invariance under isomorphism and locality on open covers. In particular it is unchanged by changing a complex representative or by equivalence in $\mathcal D(X)$. Restricting a local representative to a smaller open set preserves its boundedness and the finite local freeness of its terms by [F0]; hence these presentations can be refined without imposing a common bound. [A1, F0, F1, given]

2.1 Refine the local presentations to affine opens $U=\operatorname{Spec}A$, using the affine neighbourhood property recalled in [F5]. By [F2], on each such open the representative is $\widetilde{P^\bullet}$ for a bounded module complex $P^\bullet$. For every integer $n$, exactness in [F2] and the cohomology theorem in [F4] give $H^n(\widetilde{P^\bullet})\cong\widetilde{H^n(P^\bullet)}$. By [F3] and the local derived isomorphism, this is $H^n(E)|_U$. The right side is an associated module sheaf, hence quasi-coherent by [F5]. Applying the locality in [F5] to this affine open cover proves that $H^n(E)$ is quasi-coherent on $X$. The construction imposes no common global degree bound or constant rank. [F0, F2, F3, F4, F5, step 1.1] ∎


## Homotopy groups of integer spectral shifts

[Open item](item-lem-author-80e2d7bee57f-spectral-integer-shift) · level 4


### Statement
For a spectrum $E$ in the stable spectra interface and integers $i,k$, there is a natural isomorphism $\pi_i(E[k])\cong\pi_{i-k}(E)$, where $[1]$ is suspension and $[-1]$ its inverse.

### Facts & Assumptions
**Given:** $E$ and integers $i,k$.

**Goal:** Compute the homotopy index after shifting.

[F1] [def-stable-spectra-interface](item-def-stable-spectra-interface) defines suspension and desuspension as inverse shifts and supplies $\pi_i(E[1])\cong\pi_{i-1}(E)$.

### Proof
1.1 For $k\geq0$, iterate the isomorphism in [F1] $k$ times, including the identity when $k=0$. This gives $\pi_i(E[k])\cong\pi_{i-k}(E)$. [F1, given]

2.1 For $k<0$, apply the nonnegative case to $E[k]$ and $-k$: $\pi_{i-k}(E)\cong\pi_i(E[k])$. Inverting this isomorphism gives the stated formula. Every step is natural in $E$. [F1, step 1.1] ∎


## External nonconnective lax symmetric monoidal K-theory

[Open item](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input) · level 4


### Statement
Assume the Axiom of Choice and compatible fixed universes. Smallness is relative to the small universe, with categories of small categories formed in larger universes. Use infinity-categories, spaces, coherent functors, limits and colimits in the stable-enhancement conventions. A stable infinity-category has a zero object, finite limits and finite colimits, and its pullback and pushout squares coincide. An exact functor preserves finite limits and finite colimits. An infinity-category $A$ is idempotent-complete when every retract of a representable presheaf is representable: in $\operatorname{Fun}(A^{\mathrm{op}},S)$, if $P\to\operatorname{map}_A(-,a)\to P$ composes to the identity up to homotopy, then $P\simeq\operatorname{map}_A(-,b)$ for some $b$. Here $S$ denotes spaces, $\operatorname{map}$ denotes the mapping space, and the assignment $a\mapsto\operatorname{map}_A(-,a)$ is the Yoneda embedding.

Let $\mathrm{Cat}_{\mathrm{perf}}$ have small idempotent-complete stable infinity-categories as objects and exact functors as arrows, with natural equivalences and their higher coherences in its mapping spaces. It has a symmetric monoidal tensor characterized, for every such $A,B,C$, by $\operatorname{Fun}^{\mathrm{ex}}(A\otimes B,C)\simeq\operatorname{Fun}^{\mathrm{ex},\mathrm{ex}}(A\times B,C)$; the right side consists of functors exact separately in the two variables. Its unit is $\mathrm{Sp}^{\omega}$, a small equivalent presentation of the full category of compact spectra. Compact means that $\operatorname{map}_{\mathrm{Sp}}(E,-)$ preserves filtered colimits.

The nonconnective algebraic K-theory functor $\mathbb K:\mathrm{Cat}_{\mathrm{perf}}\to\mathrm{Sp}$ exists and is lax symmetric monoidal. It is BGT's $IK$, and has the natural equivalence $\mathbb K(A)\simeq\operatorname{Map}_{\mathcal M_{\mathrm{loc}}}(U_{\mathrm{loc}}(\mathrm{Sp}^{\omega}),U_{\mathrm{loc}}(A))$. Here $U_{\mathrm{loc}}:\mathrm{Cat}_{\mathrm{perf}}\to\mathcal M_{\mathrm{loc}}$ is the universal localizing invariant, with stable presentable target the category of localizing motives; its defining universal property and the meaning of localizing are specified below. $\operatorname{Map}_{\mathcal M_{\mathrm{loc}}}$ is the mapping spectrum in that category, whose nth space is $\operatorname{map}_{\mathcal M_{\mathrm{loc}}}(X,Y[n])$ for $n\geq0$, with structure equivalences supplied by stability. It is not merely a mapping space.

In particular $\mathbb K$ carries coherent commutative algebra objects in $\mathrm{Cat}_{\mathrm{perf}}$ to $E_\infty$ ring spectra, and transports their specified coherent algebra and module operations functorially. Lax symmetric monoidal includes coherent comparisons $\mathbb K(A)\wedge\mathbb K(B)\to\mathbb K(A\otimes B)$ and $\mathbb S\to\mathbb K(\mathrm{Sp}^{\omega})$ in all arities. A commutative algebra object has coherently symmetric, associative and unital operations in every finite arity; an $E_\infty$ ring spectrum is such an object in spectra. A module has coherent unital associative action operations of an algebra on its underlying object. Only supplied algebra/module data are transported.

### Source contract
**Given:** The Axiom of Choice of [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the universe, higher-category, presentability, filtered-colimit and symmetric monoidal conventions of [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input). AC is included in the classical foundations of these imported constructions; no choice-free theorem is claimed. The target spectra, sphere, suspension and smash conventions are those of [def-stable-spectra-interface](item-def-stable-spectra-interface).

**Goal:** Import the precise nonconnective multiplicative functor, including the interfaces needed to interpret its domain and representing formula.

[F1] Reference 0, BGT, A universal characterization, supplies the stable/exact/idempotent-complete interfaces in §2.2, mapping spectra in Definition 2.15, compactness in §2.4, the tensor universal property and unit in §3.1, exact sequences in Definition 5.12 and Proposition 5.13, and the localizing invariant and nonconnective representing formula in Definition 8.1, Theorem 8.7, Definition 9.6 and Theorem 9.8.

[F2] Reference 1, BGT, Uniqueness of the multiplicative cyclotomic trace, supplies the operadic meaning of coherent algebras and lax monoidal maps in §3, the monoidal motive target in Theorem 5.8, and the nonconnective lax symmetric monoidal assertion and algebra consequence in Proposition 5.9 and Corollary 5.10.

### External input
Import [F1] and [F2] with the hypotheses and reading limits recorded in the references; the inline interfaces are sourced specifications, not local proofs.

For precision, a localizing invariant on $\mathrm{Cat}_{\mathrm{perf}}$ with values in a stable presentable infinity-category $D$ preserves filtered colimits and sends exact sequences to cofiber sequences. Here an exact sequence $A\to B\to C$ has zero composite, fully faithful first map (equivalences on mapping spaces), and identifies $C$ with the cofiber $B\sqcup_A0$ in $\mathrm{Cat}_{\mathrm{perf}}$. Equivalently its idempotent-completed stable quotient is $C$; the quotient is universal for exact functors from $B$ sending $A$ to zero. BGT also defines the invariant on all small stable categories and requires inversion of maps becoming equivalences after idempotent completion; on the restricted domain that condition is already invariance under equivalence. Universality means that precomposition induces $\operatorname{Fun}^{L}(\mathcal M_{\mathrm{loc}},D)\simeq\operatorname{Fun}_{\mathrm{loc}}(\mathrm{Cat}_{\mathrm{perf}},D)$, where $L$ denotes colimit-preserving functors and the right side is the full functor category on these localizing invariants. Existence of this target and invariant is imported from [F1], not inferred from a notation convention.

Use the symmetric monoidal families over the nerve of finite pointed sets specified by the stable-enhancement supplier. A lax symmetric monoidal functor is a functor between these families over that nerve preserving the cocartesian arrows over inert maps, where inert means that each nonbasepoint in the target has exactly one preimage. It need not preserve the cocartesian arrows over every map. A commutative algebra is an inert-preserving section of the family; composing such operations with the lax functor gives the transported operations. The same composition applies to the coherent algebra/action operations specifying a module, including the nullary unit and all action compatibilities. This is the operadic meaning of [F2], not a construction from binary homotopy-category maps alone.

This is the nonconnective $IK$ of [F1] and [F2]. A scheme localization sequence or identification of $\pi_0$ with a separately presented degree-zero group requires its own application/comparison supplier.


## Nonconnective K theory in degree zero

[Open item](item-thm-author-3a003d7b5208-nonconnective-k-zero-input) · level 4


### Statement
For a small idempotent-complete stable infinity-category C, the canonical map from the abelian group generated by equivalence classes of objects, subject to [Y]=[X]+[Z] for every cofiber sequence X→Y→Z, to π₀𝕂(C) is an isomorphism. Here 𝕂 is the nonconnective algebraic K-theory functor of Blumberg–Gepner–Tabuada. The isomorphism sends the generator of an object to its K-theory class. It is natural for exact functors.

Here an infinity-category is a quasicategory: a simplicial set $C$ such that every map $\Lambda_i[n]\to C$ extends to $\Delta[n]\to C$ for $0<i<n$. The inner horn $\Lambda_i[n]$ is the union of all faces of the standard simplex $\Delta[n]$ except its $i$th face. Small means that its simplices form sets in the fixed small universe. Objects are vertices; their equivalence classes identify objects isomorphic in the homotopy category, whose morphisms are homotopy classes of edges. Diagrams and their limits and colimits are homotopy-coherent: limits and colimits have the universal cone and cocone properties in mapping spaces. A stable infinity-category has all finite limits and colimits, and a square is a pushout exactly when it is a pullback. It has a zero object $0$, both initial and terminal. An exact functor preserves finite limits and colimits.

For precision, let $I$ be the nerve of the ordinary category with one object and endomorphisms $1,e$, with $e^2=e$; the nerve has composable chains as simplices. A homotopy-coherent idempotent is a map $I\to C$. Idempotent complete means that each such diagram has a colimit, the coherent meaning of every idempotent splitting as a retract. A retract of $X$ is an object $Y$ with maps $i:Y\to X$, $r:X\to Y$ and a specified homotopy $ri\simeq1_Y$; the coherent idempotent and splitting include their higher coherences.

A cofiber sequence $X\to Y\to Z$ includes the pushout square identifying $Z$ with $Y\sqcup_X0$, including its nullhomotopy. Its cofiber Grothendieck group, denoted $G(C)$ here, is the free abelian group on object equivalence classes modulo the subgroup generated by $[Y]-[X]-[Z]$ for these sequences. Smallness makes this a set-sized presentation. The notation $\pi_0$ is the degree-zero stable homotopy group of the supplied spectrum interface.

### Statement references
[math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)

[def-stable-spectra-interface](item-def-stable-spectra-interface)

### External input
Kasprowski–Winges §2.2 supplies the object-class comparison $G(\operatorname{Idem}(C))\cong\pi_0\mathbb K(C)$. Their §2.1 and BGT §2.2 supply the stable idempotent-completion interface: an exact fully faithful map $j_C:C\to\operatorname{Idem}(C)$ into a small idempotent-complete stable infinity-category, with every object a retract of an image object. It is universal among exact maps into idempotent-complete stable categories: restriction along $j_C$ identifies the infinity-categories of exact functors $\operatorname{Idem}(C)\to D$ and $C\to D$ for every such $D$. In particular $j_C$ is an equivalence when $C$ is already idempotent complete. Here functor infinity-categories are the simplicial internal hom, whose $n$-simplices are maps $C\times\Delta[n]\to D$, restricted to exact functors when indicated.

Lurie's specified passages supply the quasicategory and coherent-idempotent definitions above. BGT Definition 9.6 and Theorem 9.8 identify the nonconnective functor with the one in Kasprowski–Winges formula (2.6). BGT Remark 9.33 is contextual only; its Waldhausen hypotheses are not used as a substitute for the general comparison. Only the passages specified in sources.references were read; no local reconstruction of these imported results is claimed.

### Facts & Assumptions
**Given:** A small idempotent-complete stable infinity-category C, in the preceding sense, and the cited BGT nonconnective functor, with degree-zero groups interpreted in [def-stable-spectra-interface](item-def-stable-spectra-interface). The simplicial sets and standard simplices use [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration).

**Goal:** Identify π₀𝕂(C) with $G(C)$, with the stated generator map and naturality.

[F1] The imported comparison identifies $G(\operatorname{Idem}(C))$ with $\pi_0\mathbb K(C)$ naturally in exact functors, by the object-class map (Kasprowski–Winges §2.2).

[F2] The imported completion interface supplies $j_C$, its exactness and its universal property; $j_C$ is an equivalence for idempotent-complete $C$ (Kasprowski–Winges §2.1; BGT §2.2). The coherent completeness convention is the one in the cited Lurie definitions, not ordinary preadditive completion.

### Proof
**Proof technique:** Apply the imported comparison under its stated hypotheses.

1.1 Since C is idempotent complete, [F2] makes $j_C$ an exact equivalence. It therefore identifies object equivalence classes and cofiber sequences in the two categories, so it induces an isomorphism $G(C)\xrightarrow{\sim}G(\operatorname{Idem}(C))$. Explicitly, equivalences preserve the defining pushout squares, and an inverse equivalence gives the inverse on presentations. [F2, given]

2.1 Compose the isomorphism of step 1.1 with [F1]. The result is the asserted object-class isomorphism $G(C)\xrightarrow{\sim}\pi_0\mathbb K(C)$. Both maps are natural for exact functors by the completion interface and [F1]; on a generator their composite is its K-theory class. [F1, F2, step 1.1] ∎


## Cofiber of a direct-summand inclusion

[Open item](item-lem-author-9f61e4df2141-split-spectral-cofiber) · level 4


### Statement
For spectra $A$ and $B$, the cofiber of the canonical inclusion $A\to A\oplus B$ is naturally equivalent to $B$. Under this equivalence the cofiber map is the projection $A\oplus B\to B$, and the connecting map $B\to A[1]$ is zero. Here $\oplus$ denotes the finite coproduct, which is also a product in the stable category.

### Facts & Assumptions
**Given:** Spectra $A$ and $B$ and their canonical inclusion and projection.

**Goal:** Identify the cofiber sequence and its connecting map.

[F1] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the stable category of spectra, zero object, cofibers, and suspension.

### Proof
1.1 The pushout defining $\operatorname{cofib}(A\to A\oplus B)$ is $(A\oplus B)\amalg_A0$. By the universal property of coproducts and the zero object, maps from this pushout to any spectrum are naturally maps from $B$; hence the pushout is naturally $B$, with cofiber map the projection. [F1, given, construct]

2.1 The projection has the canonical section $B\to A\oplus B$. In the cofiber triangle, the composite of consecutive maps is zero, so the connecting map composed with this projection is zero. Composing with the section shows that the connecting map itself is zero. [F1, step 1.1] ∎


## Functorial finite coefficients for derived complexes

[Open item](item-lem-author-b747b28c359f-derived-finite-coefficients) · level 4


### Statement
For $C\in D(\mathbb Z)$ and a positive integer $n$, put $C/n=C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$. This construction and its cohomology groups are functorial in $C$. For every integer $i$ there is a natural short exact sequence
$$0\to H^i(C)/nH^i(C)\to H^i(C/n)\to H^{i+1}(C)[n]\to0,$$
where $H^{i+1}(C)[n]$ is the subgroup annihilated by $n$.

### Facts & Assumptions

[F1] [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence) supplies, for every positive integer $n$, the functor $T_n:D(\mathbb Z)\to D(\mathbb Z)$ computed by the two-term free resolution $[\mathbb Z\xrightarrow{n}\mathbb Z]$ in degrees $-1,0$. It identifies $T_n(C)=C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$ with the multiplication-by-$n$ cone, without boundedness assumptions. It proves that this construction respects homotopies and quasi-isomorphisms and descends through localization, and that its coefficient short exact sequence is natural for every morphism in $D(\mathbb Z)$.

[F2] Use the derived category of cochain complexes of abelian groups, including its standing size convention and localization model, from [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category). For every integer $i$, cohomology is a functor $H^i:D(\mathbb Z)\to\operatorname{Ab}$ by [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology).

### Proof

**Given:** $C\in D(\mathbb Z)$, a positive integer $n$, and an integer $i$, with the conventions in [F2].

**Goal:** Establish functoriality and the displayed natural exact sequence.

1.1 For this fixed $n$, take the functor $T_n$ supplied by [F1]. Its value at $C$ is the stated $C/n$, and its localization construction defines its action on all derived-category morphisms, independently of the chosen complex representative. Composing it with the functor $H^i$ from [F2] proves functoriality of $H^i(C/n)$; [F2] also gives functoriality of the integral cohomology terms. [given, F1, F2]

2.1 Choose a cochain complex $A$ representing $C$. The coefficient exact sequence of [F1] applied to $A$ is the displayed sequence, since its cone represents $T_n(C)$ by step 1.1. By [F1], its two maps descend through localization and are natural for every morphism in $D(\mathbb Z)$; hence changing the representative carries this sequence to the same derived-category sequence by the induced isomorphisms. Its objectwise exactness is the exactness supplied by [F1]. Thus the sequence is natural with the terms and functoriality asserted in the statement. [F1, F2, step 1.1] ∎


## Stage projections, kernels and image groups

[Open item](item-lem-filtered-stage-exact-sequence) · level 5

### Statement
Assume the Axiom of Choice and the fixed compatible universe and smallness conventions of the stable spectra interface. Let $E$ be a spectrum with a decreasing filtration and let $i,j\in\mathbb Z$. There is a natural exact sequence of abelian groups

$$\pi_{i+1}\operatorname{gr}^jE\longrightarrow\pi_iF^{j+1}E\longrightarrow\pi_iF^jE\xrightarrow{p}\pi_i\operatorname{gr}^jE\longrightarrow\pi_{i-1}F^{j+1}E.$$

Write $q:\pi_iF^jE\to\pi_iE$ for the structure homomorphism and $F^j\pi_iE=\operatorname{im}q$. The stage projection $p$ induces a homomorphism $\bar p:F^j\pi_iE\to\pi_i\operatorname{gr}^jE$ satisfying $\bar p(q(x))=p(x)$ precisely when $\ker q\subseteq\ker p$. When it exists, its kernel is $F^{j+1}\pi_iE$. In particular, injectivity of $q$ is sufficient, and then $q$ identifies $\ker p$ with $F^{j+1}\pi_iE$.

A decreasing filtration consists of spectra $F^jE$ with compatible maps $F^{j+1}E\to F^jE\to E$. Its graded spectrum is the cofiber $\operatorname{gr}^jE=\operatorname{cofib}(F^{j+1}E\to F^jE)$. The image filtration is $F^j\pi_iE=\operatorname{im}(\pi_iF^jE\to\pi_iE)$. Exactness means that the image of each map equals the kernel of the next; $\pi_i$ denotes the $i$th homotopy group of a spectrum.

### Facts & Assumptions

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the fixed compatible universe and smallness conventions of [def-stable-spectra-interface](item-def-stable-spectra-interface). These retain the ZFC and nested-universe premises of its stable enhancement whenever its spectra, coherent diagrams, limits, cofibers and homotopy groups are used below. Existence of the required universes is a separate size assumption, not a consequence of Choice. The finite formal arguments introduce no additional selection principle.

**Given:** A spectrum $E$ with a decreasing filtration and integers $i,j$. Work under [A1].

**Goal:** Prove the stage exact sequence and determine when its graded projection descends to the image filtration, together with its kernel.

[F1] The filtration supplies the compatible maps $F^{j+1}E\to F^jE\to E$, and $\operatorname{gr}^jE$ is the cofiber of the first map. Its image filtration is defined by the images of the structure maps. [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)

[F2] In spectra, a cofiber sequence is also a fiber sequence, with its coherent nullhomotopy. Homotopy groups are functorial abelian groups. [def-stable-spectra-interface](item-def-stable-spectra-interface)

[F3] A fiber sequence $A\to B\to C$ gives a natural long exact sequence $\cdots\to\pi_{i+1}C\to\pi_iA\to\pi_iB\to\pi_iC\to\pi_{i-1}A\to\cdots$. [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness)

### Proof

**Proof technique:** Apply homotopy exactness to the cofiber sequence, then use the elementary criterion for a homomorphism to factor through an image.

1.1 By [F1] and [F2], $F^{j+1}E\to F^jE\to\operatorname{gr}^jE$ is a fiber sequence. Applying [F3] gives the displayed exact sequence, including the indicated connecting maps. Its naturality follows from the naturality in [F3] for maps of these sequences. [A1, F1, F2, F3, given]

2.1 Let $r:\pi_iF^{j+1}E\to\pi_iF^jE$ be the transition homomorphism. Exactness at $\pi_iF^jE$ gives $\ker p=\operatorname{im}r$. Compatibility of the filtration maps gives $q\circ r:\pi_iF^{j+1}E\to\pi_iE$ as the structure homomorphism, and hence $q(\ker p)=F^{j+1}\pi_iE$. [A1, F1, step 1.1]

3.1 If a homomorphism $\bar p$ with $\bar p q=p$ exists on $\operatorname{im}q$, then $q(x)=0$ implies $p(x)=\bar p(0)=0$, so $\ker q\subseteq\ker p$. Conversely, under this inclusion define $\bar p(q(x))=p(x)$. If $q(x)=q(y)$, then $x-y\in\ker q\subseteq\ker p$, so $p(x)=p(y)$; thus the formula is independent of the lift. It defines a homomorphism because $p$ and $q$ are homomorphisms, and it is the unique such homomorphism because $q$ is onto its image. [F2, construct, step 2.1]

4.1 When $\bar p$ exists, an element $q(x)$ is in its kernel exactly when $p(x)=0$. Consequently $\ker\bar p=q(\ker p)=F^{j+1}\pi_iE$ by step 2.1. If $q$ is injective, $\ker q=0\subseteq\ker p$, so the projection exists; moreover $q$ restricts to an isomorphism from $\ker p$ onto $F^{j+1}\pi_iE$. This proves all assertions. [step 2.1, step 3.1] ∎



## Complex shifts and spectral homotopy indices

[Open item](item-lem-eilenberg-maclane-shift-index) · level 5


### Statement
Work in ZFC with the size and pointed-space conventions of the stable spectra interface and Omega-tower comparison. Let $C$ be an unbounded cochain complex of abelian groups: its groups $C^q$ and homomorphisms $d_C^q:C^q\to C^{q+1}$ are indexed by all integers and satisfy $d_C^{q+1}d_C^q=0$, with no boundedness assumption. Write $H^q(C)=\ker d_C^q/\operatorname{im}d_C^{q-1}$. A cochain map $f:C\to C'$ has degreewise homomorphisms satisfying $d_{C'}^qf^q=f^{q+1}d_C^q$. Write $HC$ for the spectrum associated, through the stable spectra interface, to the Eilenberg–Mac Lane Omega spectrum of the chain complex $D_n=C^{-n}$, with differential $\partial_n=d_C^{-n}$. Then, naturally in cochain maps and for all integers $i,j$,

$$\pi_i(HC)\cong H^{-i}(C),\qquad \pi_i(H(C[2j]))\cong H^{2j-i}(C),\qquad \pi_i((HC)[2j])\cong H^{2j-i}(C).$$

Here $C[k]^q=C^{q+k}$ with differential $(-1)^k d_C^{q+k}$ is the cochain shift, whereas $(HC)[k]$ is integer spectral suspension; the formulas do not identify these two objects by a specified equivalence.

For the graded application, let $E$ be a spectrum with a decreasing filtration $F^\bullet E$, and put $\operatorname{gr}^jE=\operatorname{cofib}(F^{j+1}E\to F^jE)$, a spectrum. Let $C_j$ be a cochain complex of abelian groups. A specified equivalence $\operatorname{gr}^jE\simeq(HC_j)[2j]$ induces $\pi_i\operatorname{gr}^jE\cong H^{2j-i}(C_j)$.

For the support application, let $C_{j,T}$ be any separately supplied cochain complex of abelian groups representing cohomology with support. Only its cochain-complex structure is used here; the construction of such a support complex is separate input to an application. Its unshifted realization and its spectral $2j$-shift satisfy

$$\pi_i(HC_{j,T})\cong H^{-i}(C_{j,T}),\qquad \pi_i((HC_{j,T})[2j])\cong H^{2j-i}(C_{j,T}).$$

### Facts & Assumptions
**Given:** The Axiom of Choice and the size conventions above; $C$ and integers $i,j$ as stated. For the graded conclusion, $E$, its decreasing filtration, $C_j$, and the specified graded equivalence. For the support conclusion, the supplied cochain complex $C_{j,T}$.

**Goal:** Establish the displayed natural group identifications and their graded and support consequences.

[F1] [lem-author-80e2d7bee57f-cochain-to-chain](item-lem-author-80e2d7bee57f-cochain-to-chain) constructs $D_n=C^{-n}$ with $\partial_n=d_C^{-n}$ and identifies $H_i(D)$ with $H^{-i}(C)$ naturally in cochain maps.

[F2] [thm-author-80e2d7bee57f-eilenberg-maclane-input](item-thm-author-80e2d7bee57f-eilenberg-maclane-input) supplies the functorial pointed simplicial Omega spectrum of the unbounded chain complex $D$ and identifies its stable homotopy groups with $H_i(D)$. Its stable groups and sphere-order convention are those of that supplier.

[F3] [lem-author-80e2d7bee57f-tower-group-index](item-lem-author-80e2d7bee57f-tower-group-index) compares a coherent Omega tower with its associated spectrum and identifies its stable groups with the enhanced homotopy groups, naturally in tower maps and with the same ordered suspension–loop convention.

[F4] [lem-author-80e2d7bee57f-shift-cohomology](item-lem-author-80e2d7bee57f-shift-cohomology) computes cohomology after cochain shift, and [lem-author-80e2d7bee57f-chain-shift-reindex](item-lem-author-80e2d7bee57f-chain-shift-reindex) identifies the corresponding shifted chain complex, including its differential.

[F5] [lem-author-80e2d7bee57f-spectral-integer-shift](item-lem-author-80e2d7bee57f-spectral-integer-shift) computes homotopy groups after integer spectral shift; [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the stable category, its coherent Omega-tower interpretation, and its homotopy-group functors.

[F6] [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category), [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex), and [math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map) supply the complex, cohomology and map definitions used above, specialized to abelian groups.

[F7] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) supplies the coherent decreasing filtration on $E$ and defines its associated graded spectra as the displayed cofibers.

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) as part of ZFC. This retains the foundational hypothesis of [F3] and [F5]; use their same fixed size conventions. The local index calculations make no further choices of models or representatives.

[F8] Every simplicial abelian group is Kan by [math:lem-additive-kan-and-normalized-fibration-criterion](https://alphabetamath.cc/item/lem-additive-kan-and-normalized-fibration-criterion), specifically its first assertion and proof step 1.1. Here Kan means that every horn extends to a simplex, as in [math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration). Only that assertion is used, not the boundary-lifting converse.

[F9] Reference 0 in External input identifies the actual levels $X_n$ of the spectrum $X=HD$ in [F2] as $W(D[n])$, which are simplicial abelian groups pointed by zero. The symbol $W$ denotes the source's functor to simplicial abelian groups; its full construction is imported, not reconstructed here.

[F10] Reference 1 in External input supplies the natural path-fibration model of loops for a pointed Kan complex. Reference 2 supplies the Kan homotopy-equivalence criterion and its pointed consequence. They apply only after both relevant complexes are known to be Kan.

[F11] [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance) supplies the pointed simplicial prespectrum convention, the natural realization-to-Kan homotopy-group comparisons and their ordered suspension compatibility, and invariance of the resulting colimits. [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input) supplies the model of spaces as the coherent nerve of Kan complexes, its pointed objects, and the coherent Omega-tower equivalence. Use its same nested universes and ZFC assumptions.

### External input
Reference 0 imports the simplicial abelian group structure of each level of the specific construction in [F2]. Reference 1 imports the Kan path-fibration model of based loops. Reference 2 imports the criterion and pointed consequence in [F10]. The Kan assertion used in [F8] is supplied by the declared Math Library lemma. The passage from these premises to the coherent tower, the comparison of its bonding maps, and the shift calculations below are local arguments. No monoidal or symmetric-spectrum comparison is asserted.

### Proof
1.1 By [F1] and [F6], $D_n=C^{-n}$ with differential $\partial_n=d_C^{-n}$ is an unbounded chain complex. Apply [F2] under [A1] and write $X=HD$, $K=\Delta^1/\partial\Delta^1$ and $s_n:K\wedge X_n\to X_{n+1}$ for its sphere-first structure maps. By [F9] and [F8], every $X_n$ is Kan. For any pointed Kan complex $(Z,z)$, $\operatorname{Map}_*(K,Z)$ is exactly the fiber at $z$ of evaluation at the terminal endpoint on paths starting at $z$: both descriptions require both endpoint restrictions of $\Delta^1\times\Delta[m]\to Z$ to be constant at $z$. Thus [F10] makes this mapping complex Kan and identifies it naturally with derived loops. Each adjoint $\alpha_n:X_n\to\operatorname{Map}_*(K,X_{n+1})$ is a weak equivalence by [F2]; [F11] compares its realization groups with its Kan groups at every basepoint, so [F10] makes it an equivalence of pointed spaces. The actual pointed maps and their natural loop construction give a coherent tower $Y_n=X_n$ in the Kan model of [F11], using iterated composites of the adjoints and their loop images for successive transitions; functorial composition supplies the compatibilities. This is a construction from the supplied strict maps, without choosing representatives of homotopy-category arrows. To compare bonding maps, put $d=n+i\geq2$. Under [F11], the tower map $\lambda_d^{-1}(\alpha_n)_*$ sends a sphere class $[f]$ to the class of $s_n\circ(1_K\wedge f)$ after the ordered identification $S^{d+1}=S^1\wedge S^d$. This is precisely the bonding map defining the stable groups in [F2], including its conversion of the source's circle order. Therefore [F11] identifies the two colimits, and [F3] gives $\pi_i(HC)\cong G_i(Y)\cong G_i(X)\cong H_i(D)=H^{-i}(C)$. Every construction and comparison is natural in cochain maps, by [F1], [F2], [F10] and [F11]. [F1, F2, F3, F5, F6, F8, F9, F10, F11, A1, given]

2.1 Apply step 1.1 to $C[2j]$. By [F4], its associated chain complex is the corresponding chain shift and $H^{-i}(C[2j])\cong H^{2j-i}(C)$. Independently, [F5] gives $\pi_i((HC)[2j])\cong\pi_{i-2j}(HC)\cong H^{2j-i}(C)$. The graded object of [F7] is a spectrum, and its specified equivalence to $(HC_j)[2j]$ induces an isomorphism under the homotopy-group functor; applying the same formula to the cochain complex $C_j$ proves the graded conclusion. Applying step 1.1 and the spectral-shift formula to the supplied cochain complex $C_{j,T}$ gives its two displayed formulas. Both applications use exactly the stated complex types, with the unshifted and shifted spectra kept distinct. The shift identifications are natural by [F4] and [F5], and the graded identification is natural for maps preserving the specified equivalence. [F4, F5, F6, F7, A1, given, step 1.1] ∎


## Multiplicative filtrations and graded products

[Open item](item-def-multiplicative-filtered-spectrum) · level 5


### Definition
Work in ZFC and the fixed nested universes of the supplied stable enhancement of spectra. A **decreasing filtered spectrum** is a coherent diagram $F$ in spectra indexed by the category $I$, whose objects are integers and whose unique arrow $i\to k$ exists exactly when $i\geq k$. Addition makes $I$ a small symmetric monoidal category with unit $0$. Write $\operatorname{FilSp}=\operatorname{Fun}(I,\mathrm{Sp})$ for the infinity-category of these diagrams and coherent natural transformations.

Equip this diagram category with **left Day convolution** along addition. Concretely,

$$(F\otimes_{\rm Day}G)^n=\operatorname*{colim}_{(a,b)\in I\times I,\ a+b\geq n}(F^a\wedge G^b).$$

The indexing subcategory has coordinatewise decreasing arrows; its inclusion for $n\geq m$ defines the transition from degree $n$ to degree $m$. All colimits are infinity-categorical colimits. The tensor unit $J$ has $J^n=\mathbb S$ for $n\leq0$ and $J^n=0$ for $n>0$, with identity maps between its sphere stages and the forced zero maps otherwise. This is the left Kan extension of the sphere at the monoidal unit $0$: a left Kan extension here has the indicated colimit over objects mapping to the output index. The associativity, symmetry and unit coherences are those of Day convolution.

A **multiplicative filtered spectrum**, written $F\in\operatorname{CAlg}(\operatorname{FilSp})$, is a commutative algebra object for this tensor product. Equivalently, it is a lax symmetric monoidal functor $I\to\mathrm{Sp}$. Precisely, this means an infinity-operad map $I^\otimes\to\mathrm{Sp}^\otimes$ over finite pointed sets preserving inert arrows, using the operadic convention of the spectra interface. The ordinary symmetric monoidal category $I$ has an associated category $I^\otimes$: over $\langle n\rangle$ its objects are lists $(i_1,\ldots,i_n)$, and a pointed map $f:\langle n\rangle\to\langle m\rangle$ admits a morphism from this list to $(k_1,\ldots,k_m)$ exactly when $\sum_{r\in f^{-1}(s)}i_r\geq k_s$ for every non-basepoint $s$. Composition is substitution of lists; take the nerve to obtain its infinity-operad. Inert maps select inputs, with identity identifications on the retained indices. This description fixes the full coherent meaning, not just equations in the homotopy category.

In particular, for every finite ordered list $(i_1,\ldots,i_n)$, including the empty list, there is a map

$$\mu_{i_1,\ldots,i_n}:F^{i_1}\wedge\cdots\wedge F^{i_n}\longrightarrow F^{i_1+\cdots+i_n}.$$

The empty smash product is the sphere spectrum $\mathbb S$, and the empty sum is $0$. The maps are compatible with all transition maps and permutations, with substitution of lists into lists, and with the unit, together with all higher homotopies encoded by the indicated infinity-operad map. The one-input operation is the identity up to its specified coherent identification. Conversely, such operadically coherent indexed data give the commutative algebra object by the Day correspondence. Thus unrelated binary pairings do not suffice.

A multiplicative filtration **on a commutative ring spectrum $E$** additionally has a morphism $F\to\operatorname{const}(E)$ in $\operatorname{CAlg}(\operatorname{FilSp})$. Here a commutative ring spectrum is a commutative algebra object in spectra under smash product, and $\operatorname{const}(E)$ has its constant tower and the constant lax symmetric monoidal structure supplied by the products and unit of $E$. Equivalently, the component maps $F^i\to E$ form an augmentation of the underlying tower and commute coherently with every finite-input product. The augmentation is part of the data.

Put $\operatorname{gr}^iF=\operatorname{cofib}(F^{i+1}\to F^i)$ and write $q_i:F^i\to\operatorname{gr}^iF$ for the canonical cofiber map. Integer-graded spectra are families $A=(A^i)_{i\in\mathbb Z}$, equivalently functors from the discrete category of integers. Their Day tensor is $(A\otimes_{\rm gr}B)^n=\coprod_{a+b=n}A^a\wedge B^b$, with sphere unit in degree zero and zero elsewhere. Associated graded is strong symmetric monoidal from the filtered Day tensor to this graded tensor, meaning that it preserves the unit and tensor product up to coherent equivalence. It therefore gives the **associated graded multiplication**, including the coherent family

$$\overline\mu_{i,j}:\operatorname{gr}^iF\wedge\operatorname{gr}^jF\longrightarrow\operatorname{gr}^{i+j}F.$$

These are the products induced by $\mu_{i,j}$ through the cofibers; they satisfy $\overline\mu_{i,j}(q_i\wedge q_j)\simeq q_{i+j}\mu_{i,j}$. Their unit is $\mathbb S\to F^0\xrightarrow{q_0}\operatorname{gr}^0F$. No exhaustiveness, completeness or nonnegativity is required. These are maps from filtration stages to graded pieces; the definition does not assert that there is a map from $E$ or from an image subgroup of $\pi_*E$ to a graded piece.

### Definition references

[def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)

[def-stable-spectra-interface](item-def-stable-spectra-interface)

[thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Facts & Assumptions

**Given:** A coherent decreasing filtered spectrum $F$ with the specified commutative Day algebra structure, and, when a filtration on $E$ is discussed, a commutative ring spectrum $E$ and multiplicative augmentation as above. Work under the stated ZFC and universe conventions.

**Goal:** Justify the indexed algebra description, the associated graded products and their compatibility with the cofiber maps.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) supplies the tower, its transition maps and the cofiber definition of the associated graded.

[F2] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies spectra, the sphere unit, coherent diagrams, cofibers, and commutative algebra objects as inert-preserving operadic sections. Smash preserves colimits separately, hence preserves cofiber constructions in each variable.

[F3] Reference 0 supplies Day convolution and the equivalence between its commutative algebra objects and lax symmetric monoidal functors, including higher coherences. Apply it to the additive index category $I$ and spectra.

[F4] [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input) supplies presentability, stability, the separately colimit-preserving symmetric monoidal smash, and the nested-universe conventions used by both references. The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is retained in these imported foundations; no additional choice of multiplication or augmentation is made here.

[F5] Reference 1 supplies the strong symmetric monoidal associated-graded functor for these decreasing diagrams. Its hypotheses hold by [F4].

### External input

Reference 0 imports the existence and coherent algebra-object correspondence for Day convolution in [F3], under the smallness and colimit conditions discharged by [F4]. In the displayed specialization, arrows $a+b\to n$ are exactly the inequalities $a+b\geq n$; the empty-input left Kan extension is $J$.

Reference 1 imports the monoidality assertion in [F5], for the entire diagram category of decreasing integer filtrations, without localizing or completing the towers. Its graded tensor has the displayed coproduct formula. These are the imported premises; the indexing, augmentation interpretation, cofiber product formula and its application to the given $F$ are justified locally below.

### Justification

1.1 By [F4] the index category is small in the chosen universe and smash preserves its colimits, so [F3] supplies the displayed Day structure. Its empty-input colimit is the sphere when $0\geq n$ and the zero spectrum otherwise, giving $J$. The equivalence in [F3] identifies a commutative Day algebra with the specified operad map, and hence with all the indexed operations and their coherences. If $i_r\geq k_r$ for every $r$, then $\sum i_r\geq\sum k_r$, so the target transition exists; associativity, commutativity and the identity $0$ for addition give matching indices for substitution, symmetry and units. The constant lax monoidal functor associated to $E$ has its products as structure maps; a morphism to it is exactly the stated coherent multiplicative augmentation. These clauses specify extra structure, without asserting that every tower admits it. For fixed $i,j$, transition compatibility identifies the restriction of $\mu_{i,j}$ along either $F^{i+1}\wedge F^j$ or $F^i\wedge F^{j+1}$ with a map factoring through $F^{i+j+1}\to F^{i+j}$. Composition with $q_{i+j}$ thus has the cofiber's canonical nullhomotopy, compatibly on the common corner $F^{i+1}\wedge F^{j+1}$. [F1, F2, F3, F4, given]

2.1 Since smash preserves colimits separately, $\operatorname{gr}^iF\wedge\operatorname{gr}^jF$ is the iterated cofiber of the square with corners $F^{i+1}\wedge F^{j+1}$, $F^{i+1}\wedge F^j$, $F^i\wedge F^{j+1}$ and $F^i\wedge F^j$. The compatible nullhomotopies in step 1.1 induce $\overline\mu_{i,j}$ by its universal property, with $\overline\mu_{i,j}(q_i\wedge q_j)\simeq q_{i+j}\mu_{i,j}$. For any finite nonempty list use the cube replacing any subset of inputs $F^{i_r}$ by $F^{i_r+1}$; its iterated cofiber is the smash of the graded pieces, and every vertex with a raised index maps through $F^{\sum i_r+1}$. This gives the analogous finite-input cofiber operations. The canonical strong symmetric monoidal structure of [F5] is the functorial cofiber comparison for these Day tensors, so it supplies their permutation, substitution and higher coherence compatibilities. In particular, it takes the commutative algebra structure to a commutative graded algebra and takes its unit to $\mathbb S\to F^0\xrightarrow{q_0}\operatorname{gr}^0F$. This establishes coherent commutativity, associativity and unitality and the asserted compatibility; it uses no injectivity of stage maps or additional maps out of image subgroups. [F1, F2, F3, F4, F5, given, step 1.1, construct] ∎


## Valuative dimension and degreewise bounded towers

[Open item](item-def-valuative-dimension-and-boundedness) · level 5


### Definition
All rings are commutative with identity. The **Krull dimension** of a nonzero ring is the supremum, in the nonnegative integers together with infinity, of the lengths $n$ of strict chains of prime ideals $\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_n$. The zero ring has dimension $-1$. A **domain** is a nonzero ring without zero divisors. Its fraction field is denoted $\operatorname{Frac}(D)$. A **valuation overring** of a domain $D$ is a subring $V$ of $\operatorname{Frac}(D)$ containing $D$ such that, for every nonzero element $x$ of that field, at least one of $x$ and $x^{-1}$ lies in $V$.

The **valuative dimension** $\dim_v D$ of a domain $D$ is the supremum of the Krull dimensions of its valuation overrings. For a ring $A$, put $\dim_v A=\sup_{\mathfrak p\in\operatorname{Spec}A}\dim_v(A/\mathfrak p)$, with the supremum of the empty set equal to $-1$. For a scheme $X$, put $\dim_v X=\sup_{\operatorname{Spec}A\subseteq X}\dim_v A$, over all affine open subschemes, again taking the empty supremum to be $-1$. The scheme has **finite valuative dimension** if this value is finite.

Let $F^jE$ be a decreasing filtration of a spectrum $E$, and let $S$ be a specified set of integers. It is **degreewise bounded above in filtration on $S$** if, for every $i\in S$, there is an integer $N(i)$ such that $\pi_iF^jE=0$ for all $j\geq N(i)$. If $S=\mathbb Z$, it is simply **degreewise bounded above in filtration**. The bound may depend on $i$. This is a condition on the homotopy groups of the stages; completeness is the separately defined condition that the inverse limit of the tower is the zero spectrum.

### Facts & Assumptions
**Given:** A scheme $X$, or a decreasing filtration $F^\bullet E$ and a set $S\subseteq\mathbb Z$.

**Goal:** Justify the quantities and conditions in the definition.

[F1] Rings and subrings use the unital conventions of [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring) and [math:def-subring](https://alphabetamath.cc/item/def-subring). Prime ideals are proper ideals satisfying the product criterion of [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals), and their set is [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets). Quotient rings are constructed in [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring); [math:thm-quotient-is-domain-iff-ideal-prime](https://alphabetamath.cc/item/thm-quotient-is-domain-iff-ideal-prime) makes every prime quotient a domain. The fraction construction is [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions), and [math:thm-field-of-fractions-is-a-field-and-the-domain-embeds](https://alphabetamath.cc/item/thm-field-of-fractions-is-a-field-and-the-domain-embeds) supplies its field structure and the embedding $d\mapsto d/1$.

[F2] A scheme is as in [math:def-scheme](https://alphabetamath.cc/item/def-scheme). Its affine open subschemes carry the restricted structure sheaf, as in [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme). An affine open $U$ has coordinate ring canonically isomorphic, after an affine presentation, to $\Gamma(U,\mathcal O_X|_U)$, as in [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme).

[F3] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) supplies the decreasing tower, its augmentation and its tower-vanishing convention for completeness. [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies spectra, functorial integer-indexed homotopy groups, the zero spectrum and small inverse limits.

[F4] Retain the Axiom of Choice, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), in the supplied spectral foundations and in the classical valuative-compatibility argument of [F5]. For spectra use the compatible universe and smallness conventions of [def-stable-spectra-interface](item-def-stable-spectra-interface). Forming the displayed suprema and writing the degreewise quantifiers requires no additional choice of witnesses.

[F5] [lem-adjudicate-30c6e58e6bd4-domain-valuative-compatibility](item-lem-adjudicate-30c6e58e6bd4-domain-valuative-compatibility) proves that, on a domain, the prime-quotient supremum agrees with the valuation-overring formula.

### Justification
1.1 By [F1], $D$ embeds in its fraction field, which is itself a valuation overring, so the supremum defining $\dim_v D$ is over a nonempty set; prime quotients are domains. Prime ideals, subrings of a fixed field, and finite prime chains form sets. By [F2], affine opens form a subset of the power set of $|X|$, and one may use the specified ring $\Gamma(U,\mathcal O_X|_U)$ for each such open. By [F5], the domain and general-ring formulas agree whenever both apply. Thus all the suprema exist in $\{-1,0,1,\ldots,\infty\}$ with the stated empty convention. For a ring isomorphism $f:A\to B$, the maps $\mathfrak p\mapsto f(\mathfrak p)$ and $a+\mathfrak p\mapsto f(a)+f(\mathfrak p)$ give an inclusion-preserving bijection of primes and isomorphisms of the corresponding domain quotients. For a domain isomorphism $g:D\to D'$, the fraction map $a/b\mapsto g(a)/g(b)$ is well-defined and invertible by the fraction construction in [F1]. It bijects valuation overrings, since it preserves containment of the domain and the condition on $x$ or $x^{-1}$, and preserves their prime-chain lengths. Therefore ring valuative dimension is isomorphism-invariant, so [F2] makes the scheme expression independent of the presentation of each affine open. [F1, F2, F4, F5, given, construct]

2.1 Under the spectral conventions of [F4], [F3] makes each $\pi_iF^jE$ a well-defined group and supplies the inverse limit and zero spectrum. The displayed quantifiers therefore give a definite property of the tower and the specified set of degrees, with the bound specified separately for each degree. Completeness is instead the stated condition on the inverse limit. These two conditions are recorded separately; neither definition includes a uniform bound or injectivity of transition maps. [F3, F4, given, step 1.1] ∎


## Support fibers commute with graded triangles

[Open item](item-lem-filtered-support-exactness) · level 5

### Statement
Assume the Axiom of Choice and the fixed compatible universe and smallness conventions of the stable spectra interface. Let $U\subset X$ be an open immersion, write $T=X\setminus U$, and let $E$ be a presheaf of decreasing filtered spectra. Thus restriction gives a coherently compatible map of augmented towers $F^jE(X)\to F^jE(U)$ and a map $E(X)\to E(U)$. Here a presheaf means a contravariant coherent functor on a category containing this open immersion; no descent property is assumed. Put

$$F^j_T E(X)=\operatorname{fib}(F^jE(X)\to F^jE(U)),\qquad E_T(X)=\operatorname{fib}(E(X)\to E(U)).$$

The compatible maps make $F^\bullet_T E(X)$ a decreasing filtration on $E_T(X)$. For every integer $j$ there is a natural fiber sequence

$$\operatorname{gr}^j_T E(X)\longrightarrow \operatorname{gr}^jE(X)\longrightarrow \operatorname{gr}^jE(U),$$

where $\operatorname{gr}^j_T E(X)=\operatorname{cofib}(F^{j+1}_T E(X)\to F^j_T E(X))$. Consequently there is an exact sequence

$$\cdots\to\pi_{i+1}F^jE(U)\to\pi_iF^j_T E(X)\to\pi_iF^jE(X)\to\pi_iF^jE(U)\to\cdots.$$

In particular, every element in the kernel of the last displayed map lifts to $\pi_iF^j_T E(X)$. More specifically, if $\pi_iF^jE(U)\to\pi_iE(U)$ is injective, then every element of $\operatorname{im}(\pi_iF^jE(X)\to\pi_iE(X))$ whose restriction to $\pi_iE(U)$ is zero is the image of an element of $\pi_iF^j_T E(X)$ under the composite to $\pi_iE(X)$. Without such a condition, an ambient kernel condition alone does not identify a stage-level kernel.

### Facts & Assumptions

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the fixed compatible universe and smallness conventions of [def-stable-spectra-interface](item-def-stable-spectra-interface). These retain the ZFC and nested-universe premises of its stable enhancement whenever its spectra, coherent diagrams, limits, cofibers and homotopy groups are used below. Existence of the required universes is a separate size assumption, not a consequence of Choice. The finite formal arguments introduce no additional selection principle.

**Given:** A coherent presheaf of decreasing filtered spectra, an open immersion $U\subset X$, and integers $i,j$. Work under [A1].

**Goal:** Construct the supported filtration and graded fiber sequence, and prove the exactness and lifting assertions with their stated hypotheses.

[F1] In [def-stable-spectra-interface](item-def-stable-spectra-interface), spectra form a stable infinity-category with zero object and coherent finite limits and colimits. A fiber is the pullback over zero, a cofiber is the pushout along zero, and a square is a pullback exactly when it is a pushout.

[F2] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) defines an augmented decreasing filtration and its associated graded as the cofiber of the transition from stage $j+1$ to stage $j$.

[F3] [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness) gives the natural long exact homotopy sequence of any fiber sequence of spectra.

[F4] An open immersion identifies its source with an open subscheme carrying the restricted structure sheaf, as in [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes) and [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme). The argument uses its restriction arrow in the given presheaf diagram; it requires no geometric descent or support-category comparison.

### Proof

**Proof technique:** Apply the fiber construction to the diagram of filtration stages and use stability to compare its cofibers.

1.1 Restriction and the transition maps form a coherent diagram of arrows $F^jE(X)\to F^jE(U)$. Taking the pullback over zero at every stage is functorial, producing transition maps $F^{j+1}_T E(X)\to F^j_T E(X)$ with all composition coherences. The compatible augmentation maps to $E(X)\to E(U)$ likewise induce compatible maps $F^j_T E(X)\to E_T(X)$. This is the asserted augmented decreasing tower. [A1, F1, F2, given]

2.1 For a coherent square of arrows of spectra, taking fibers preserves its finite limits: each fiber is itself a pullback, and the universal property of limits identifies an iterated finite limit with the limit over the corresponding product diagram. Limits of arrow diagrams are computed at their source and target. The zero arrow has zero fiber. In particular, if a square of arrows is pointwise a pushout, stability makes it pointwise a pullback; after taking fibers it is again a pullback and hence a pushout. Thus taking fibers carries pointwise cofiber squares of arrows to cofiber squares of spectra. [A1, F1, step 1.1]

3.1 Apply step 2.1 to the map of arrows from $F^{j+1}E(X)\to F^{j+1}E(U)$ to $F^jE(X)\to F^jE(U)$. Its pointwise cofiber is the arrow $\operatorname{gr}^jE(X)\to\operatorname{gr}^jE(U)$. The cofiber of its map of fibers is therefore naturally equivalent to the fiber of that graded arrow. By the definition of the supported graded spectrum, this is precisely the displayed graded fiber sequence. The construction uses the coherent diagram and universal properties, so it is natural in maps of such filtered presheaves and open pairs. [F1, F2, step 1.1, step 2.1]

4.1 The definition of $F^j_T E(X)$ gives a fiber sequence $F^j_T E(X)\to F^jE(X)\to F^jE(U)$. Applying [F3] yields the displayed long exact sequence. Exactness at $\pi_iF^jE(X)$ says that its restriction kernel is exactly the image of $\pi_iF^j_T E(X)$, proving the first lifting claim. [F1, F3, step 3.1]

5.1 Suppose the stated map on $U$ is injective. Choose a stage representative $a\in\pi_iF^jE(X)$ of an ambient element $x$ whose restriction to $\pi_iE(U)$ is zero. Compatibility of restriction with augmentation says that the image of $a|_U$ in $\pi_iE(U)$ is zero; injectivity therefore gives $a|_U=0$ in $\pi_iF^jE(U)$. Step 4.1 lifts $a$ to $\pi_iF^j_T E(X)$, whose image in $\pi_iE(X)$ is $x$. The argument explicitly uses injectivity to pass from the ambient kernel to the stage kernel. This proves all claims. [F2, step 1.1, step 4.1, given] ∎



## Enhanced affine perfect equivalence

[Open item](item-lem-author-4f716d60801a-lifted-affine-equivalence) · level 5



### Statement

Assume the Axiom of Choice. Let $A$ be any commutative unital ring and $X=\operatorname{Spec}A$. Fix compatible Grothendieck universes containing $\omega$, $A$ and $X$, with larger universes for their module and derived categories, as in the derived-enhancement interface. Their existence is a separate size assumption. Write $\mathcal D(A)$ and $\mathcal D(X)$ for the infinity-localizations of unbounded cochain complexes of $A$-modules and of all Zariski $\mathcal O_X$-modules, respectively, at quasi-isomorphisms.

Degreewise associated sheaf induces an exact equivalence $\mathcal D(A)\simeq\mathcal D_{\mathrm{qc}}(X)$ of stable infinity-categories, where $\mathcal D_{\mathrm{qc}}(X)$ is the full subcategory of $\mathcal D(X)$ on objects with quasi-coherent cohomology sheaves in every degree, retaining their ambient mapping spaces and composition coherences. The finite limits and colimits of this target are inherited from $\mathcal D(X)$.

This actual functor restricts to an equivalence between the full subcategory represented by bounded complexes of finitely generated projective $A$-modules and the full locally perfect subcategory on $X$. Here bounded means zero outside a finite interval of cochain degrees, and locally perfect means locally equivalent to such a complex of finite locally free sheaves; finite locally free means locally isomorphic to $\mathcal O_U^r$ for a finite rank $r$, and degree bounds may vary with the neighbourhood.

### Statement references

[thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)

[thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input)

[lem-author-4f716d60801a-local-perfect-qc](item-lem-author-4f716d60801a-local-perfect-qc)

[lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model)

[math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-associated-sheaf-module-affine-scheme](https://alphabetamath.cc/item/def-associated-sheaf-module-affine-scheme)

[math:def-quasi-coherent-module-scheme](https://alphabetamath.cc/item/def-quasi-coherent-module-scheme)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[math:def-weak-homotopy-equivalence](https://alphabetamath.cc/item/def-weak-homotopy-equivalence)

[math:cor-higher-homotopy-groups-are-iterated-loop-components](https://alphabetamath.cc/item/cor-higher-homotopy-groups-are-iterated-loop-components)

[math:thm-an-exact-functor-commutes-with-homology](https://alphabetamath.cc/item/thm-an-exact-functor-commutes-with-homology)

[math:def-compactly-generated-conventions-for-based-homotopy](https://alphabetamath.cc/item/def-compactly-generated-conventions-for-based-homotopy)

### Facts & Assumptions

**Given:** $A$, $X$, Choice and the compatible universe assumptions in the Statement.

**Goal:** Prove the enhanced affine equivalence for degreewise associated sheaf and its restriction to the specified perfect objects.

[A1] Choice is [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); the universe convention is [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention). These assumptions are used through the supplied unbounded enhancements and affine comparisons, not supplied by a choice-free local construction.

[F1] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) gives the ambient locally small stable infinity-categories, their ordinary derived homotopy categories, cochain shifts and cone cofibers, and the actual exact enhanced functor induced by an exact additive module-to-module-sheaf functor.

[F2] [thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input) explicitly supplies exactness of associated sheaf, preservation of quasi-isomorphisms, the ordinary unbounded affine equivalence for this same functor, and its local-perfection criterion.

[F3] [lem-author-4f716d60801a-local-perfect-qc](item-lem-author-4f716d60801a-local-perfect-qc) gives representative-independent local perfection and quasi-coherent cohomology. [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model) and [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring) specify the bounded finite-projective representatives and their actual affine chain functor.

[F4] [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) supplies the affine scheme convention. [math:def-associated-sheaf-module-affine-scheme](https://alphabetamath.cc/item/def-associated-sheaf-module-affine-scheme) specifies $M\mapsto\widetilde M$; [math:def-quasi-coherent-module-scheme](https://alphabetamath.cc/item/def-quasi-coherent-module-scheme) defines quasi-coherence and its isomorphism invariance. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank) specifies finite locally free sheaves. The well-defined derived local-perfect condition is that of [F2] and [F3].

[F5] Higher Algebra, reference 0, supplies $\operatorname{Map}(M[1],N)\simeq\Omega\operatorname{Map}(M,N)$ at zero and invertibility of suspension in a stable infinity-category.

[F6] Higher Topos Theory, reference 1, supplies CW models for mapping homotopy types and detection of infinity-category equivalences by mapping-space weak equivalences and essential surjectivity, with the latter tested on the homotopy category. Use these based CW models, hence based compactly generated weak Hausdorff (CGWH) spaces, for homotopy-group calculations. [math:def-compactly-generated-conventions-for-based-homotopy](https://alphabetamath.cc/item/def-compactly-generated-conventions-for-based-homotopy) defines CGWH spaces, their kified mapping spaces and the based loop construction used in [F7].

[F7] [math:def-weak-homotopy-equivalence](https://alphabetamath.cc/item/def-weak-homotopy-equivalence) supplies the test by components and positive homotopy groups at every source basepoint. [math:cor-higher-homotopy-groups-are-iterated-loop-components](https://alphabetamath.cc/item/cor-higher-homotopy-groups-are-iterated-loop-components) gives the natural group identification $\pi_m(T,0)\cong\pi_0(\Omega^m T)$ for a based CGWH space and $m\ge1$, with multiplication given by concatenation of loops. Apply these to the models in [F6].

[F8] [math:thm-an-exact-functor-commutes-with-homology](https://alphabetamath.cc/item/thm-an-exact-functor-commutes-with-homology) applies to the exact associated-sheaf functor of [F2] between the module and module-sheaf abelian categories of [F1]. Reindex its chain convention by $C^\sharp_n=C^{-n}$ and $d^\sharp_n=d_C^{-n}$. It yields $H^n(\widetilde{C})\cong\widetilde{H^n(C)}$ naturally, for every integer $n$.

### External input

Import the suspension-loop input [F5] from source reference 0 and the mapping-type models and equivalence criterion [F6] from source reference 1, with their recorded hypotheses and reading limits. Both ambient categories in [F1] satisfy the required stability, local smallness and size conditions. The application below is local; no proof of these foundational inputs is claimed.

### Proof

1.1 By [F2], associated sheaf is exact and additive, so [F1] produces the actual exact functor $L:\mathcal D(A)\to\mathcal D(X)$. The cohomology comparison [F8] identifies $H^n(LM)$ with $\widetilde{H^n(M)}$, which is quasi-coherent by [F4]; thus $L$ lands in the stated full subcategory. The homotopy-category functor is the fully faithful functor of [F2]. For any $M,N$, iterating [F5] and taking loop components by [F7] gives $\pi_m\operatorname{Map}(M,N)_0\cong\operatorname{Hom}_{h\mathcal D(A)}(M[m],N)$ for $m\ge1$, and the corresponding formula in the ambient $\mathcal D(X)$. Exactness identifies shifts, so full faithfulness on homotopy categories gives bijectivity on components and isomorphisms on these groups at zero. To treat every basepoint, apply [F5] to $M[-1]$: the mapping spaces are naturally loop spaces, compatibly with $L$. Translation by a loop has homotopy inverse given by its reverse, since a loop followed by its reverse contracts by shortening the traversed segment. Translation therefore reduces all basepoints to zero, compatibly up to homotopy with the mapping-space map. By [F7] this map is a weak equivalence for every $M,N$; [F6] makes $L$ fully faithful into the ambient category. [A1, F1, F2, F4, F5, F6, F7, F8, construct]

2.1 The ordinary affine equivalence of [F2] gives essential surjectivity onto $\mathcal D_{\mathrm{qc}}(X)$: an isomorphism in the homotopy category is an equivalence of enhanced objects. Together with step 1.1 and [F6], this proves an infinity-category equivalence with the full target, without having assumed that target stable. Transport finite limits and colimits from $\mathcal D(A)$ through this equivalence. For any finite diagram in the target, lift the coherent diagram along an inverse equivalence; exactness of the ambient $L$ identifies its limit and colimit with the ambient ones in $\mathcal D(X)$. Their mapping-space universal properties restrict to the full target, so these ambient cones also compute its own finite limits and colimits. Thus the target has inherited finite limits and colimits and is stable, and the displayed equivalence is exact. Finally [F2] says that an object of $\mathcal D(A)$ is ring-perfect exactly when its associated object is locally perfect. Every locally perfect object lies in the target by [F3], and [F3] identifies precisely the stated bounded finite-projective representatives. Restricting the full equivalence therefore proves the perfect-subcategory assertion. [A1, F1, F2, F3, F6, step 1.1] ∎


## Stable supported perfect subcategories and retracts

[Open item](item-lem-author-4f716d60801a-supported-stability) · level 5


### Statement
Assume the Axiom of Choice. Fix Grothendieck universes $\mathbb U\in\mathbb V$ with $\omega\in\mathbb U$, and larger universes as needed for the derived categories. Scheme data are $\mathbb U$-small and module sheaves have $\mathbb U$-small section data. Existence of these universes is a standing size assumption, not a consequence of Choice. For any scheme $X$ in these universes, let $\mathcal D(X)$ be the derived infinity-category of all Zariski $\mathcal O_X$-module sheaves, formed from unbounded cochain complexes by inverting quasi-isomorphisms.

An object is locally perfect if every point has an open neighbourhood on which it is equivalent to a bounded complex of finite locally free sheaves. Here bounded means zero outside a finite interval, with bounds allowed to vary between neighbourhoods; finite locally free means locally isomorphic to $\mathcal O_X^r$ for a finite $r\geq0$. Let $\operatorname{Perf}(X)$ be the full subcategory of $\mathcal D(X)$ on these objects, retaining all ambient mapping spaces and their composition coherences. Put $\operatorname{Supp}(E)=\bigcup_{n\in\mathbb Z}\{x\in X:H^n(E)_x\ne0\}$, where $H^n$ is the cohomology sheaf, and let $\operatorname{Perf}_T(X)$ be the full subcategory of $\operatorname{Perf}(X)$ on objects whose support is contained in $T\subseteq X$.

Both subcategories are stable and idempotent complete, and their homotopy categories are idempotent complete. Their finite limits and colimits are inherited from $\mathcal D(X)$. For a functor to a category with a zero object, its full kernel means the full subcategory on objects sent to zero. If $T$ is closed and $j:X\setminus T\hookrightarrow X$, then $\operatorname{Perf}_T(X)$ is the full kernel of $j^*|_{\operatorname{Perf}(X)}:\operatorname{Perf}(X)\to\mathcal D(X\setminus T)$. For arbitrary $T$, it is the intersection, inside $\operatorname{Perf}(X)$, of the full kernels of $(-)_x|_{\operatorname{Perf}(X)}:\operatorname{Perf}(X)\to\mathcal D(\mathcal O_{X,x})$ over $x\notin T$.

### Facts & Assumptions
**Given:** A scheme $X$, a subset $T$, the Axiom of Choice, and the fixed universe and section-size conventions of the Statement.

**Goal:** Establish stability, the kernel descriptions and enhanced and ordinary idempotent completeness.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is retained to invoke the derived-enhancement and local-perfection inputs in [F1] and [F2]. [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) specifies the separate size assumptions; no implication from Choice to the existence of universes is used.

[F0] [math:def-scheme](https://alphabetamath.cc/item/def-scheme) specifies $(X,\mathcal O_X)$. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank) specifies the finite locally free sheaves in the local models, including rank zero and ranks varying locally. Boundedness is the finite-degree condition stated above.

[F1] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the stable idempotent-complete ambient derived infinity-category, its idempotent-complete ordinary derived homotopy category, cochain cones and shifts, and the meanings of stability, exactness and idempotent completeness. Its ordinary derived homotopy category has the usual distinguished cone triangles.

[F2] [thm-author-4f716d60801a-local-perfect-input](item-thm-author-4f716d60801a-local-perfect-input) identifies perfection on schemes with the stated local models and gives closure under distinguished triangles and direct summands. [lem-author-4f716d60801a-local-perfect-qc](item-lem-author-4f716d60801a-local-perfect-qc) establishes that this local condition is well-defined on derived objects.

[F3] [lem-author-4f716d60801a-restriction-support](item-lem-author-4f716d60801a-restriction-support) gives exact open-restriction and stalk functors, their cohomological support criteria and support containment for retracts.

[F4] [math:prop-a-distinguished-triangle-with-zero-first-map-is-split](https://alphabetamath.cc/item/prop-a-distinguished-triangle-with-zero-first-map-is-split) splits a distinguished triangle with zero first map. Rotating a triangle with zero connecting map to this form gives the corresponding direct-sum decomposition of its middle object.

### Proof
1.1 Zero and shifts in either direction have the stated local models. For a map between perfect objects, its ambient cofiber is perfect by the cone-triangle closure in [F2]; its fiber is a shift of that cofiber. This also gives finite sums, since the cofiber of a zero map $A[-1]\to B$ is $B\oplus A$. Ambient pushouts are obtained as the cofibers of the maps $(f,-g):A\to B\oplus C$ for spans $B\leftarrow A\to C$; dually, pullbacks are fibers of the corresponding maps out of finite sums. These formulas follow from the ambient stable pushout-pullback property and the cone construction in [F1]. Thus all these operations stay perfect. Fullness retains their universal mapping-space properties, so the perfect subcategory is stable and inherits finite limits and colimits. [A1, F0, F1, F2]

2.1 Restrict the domain of every functor in [F3] to $\operatorname{Perf}(X)$. The support criteria identify $\operatorname{Perf}_T(X)$ with the intersection of their stalk kernels inside $\operatorname{Perf}(X)$ and, for closed $T$, with the kernel of the restricted open-restriction functor. These functors are exact by [F3] and step 1.1. Their kernels contain zero and are closed under shifts and ambient cofibers; so is their intersection. The construction in step 1.1 and fullness therefore give stability and inherited finite limits and colimits for the supported subcategory as well. The empty intersection when $T=X$ is $\operatorname{Perf}(X)$. [F1, F3, step 1.1]

3.1 Let $E$ be a retract of a perfect object $P$, with $i:E\to P$, $r:P\to E$ and $ri=1_E$ in the ambient homotopy category. Complete $r$ to the fiber triangle $K\to P\xrightarrow{r}E\xrightarrow{\delta}K[1]$. Consecutive triangle maps compose to zero, so $\delta r=0$ and hence $\delta=\delta ri=0$. Applying [F4] after rotation gives $P\cong K\oplus E$. By summand closure in [F2], $E$ is perfect. If $P$ is supported in $T$, support containment for retracts in [F3] gives $\operatorname{Supp}(E)\subseteq\operatorname{Supp}(P)\subseteq T$. Thus both full subcategories are closed under ambient homotopy-category retracts. [F1, F2, F3, F4, step 1.1, step 2.1]

4.1 Every coherent idempotent in either full subcategory splits in the ambient category by [F1]; its splitting object is an ambient retract and remains in that subcategory by step 3.1. Fullness retains the splitting maps and coherences. An ordinary idempotent in either homotopy category similarly splits in the ambient homotopy category by [F1], and its splitting object remains by step 3.1. Thus both enhanced subcategories and their ordinary homotopy categories are idempotent complete. [F1, step 1.1, step 2.1, step 3.1] ∎


## Graded pieces of a direct-sum tail tower

[Open item](item-lem-author-9f61e4df2141-tail-splitting) · level 5


### Statement
Assume the Axiom of Choice and the fixed compatible universe and smallness conventions of the stable spectra interface. Let $(G_j)_{j\geq0}$ be spectra and put $T^q=\bigoplus_{j\geq q}G_j$ for $q\geq0$, with $T^q=T^0$ for $q\leq0$. Give these spectra the canonical tail inclusions and augmentation to $T^0$. Then $\operatorname{gr}^qT\simeq G_q$ for $q\geq0$, the connecting map $G_q\to T^{q+1}[1]$ is zero, and $\operatorname{gr}^qT\simeq0$ for $q<0$. The identifications are natural in maps of families $(G_j)$.

### Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the fixed compatible universe and smallness conventions of [def-stable-spectra-interface](item-def-stable-spectra-interface). These retain the ZFC and nested-universe premises of its stable enhancement whenever its spectra, coherent diagrams, limits, cofibers and homotopy groups are used below. Existence of the required universes is a separate size assumption, not a consequence of Choice. The finite formal arguments introduce no additional selection principle.

**Given:** The family of spectra and its augmented tail tower. Work under [A1].

**Goal:** Compute its graded pieces and connecting maps.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) defines the associated graded as a cofiber.

[F2] [lem-author-9f61e4df2141-split-spectral-cofiber](item-lem-author-9f61e4df2141-split-spectral-cofiber) computes the cofiber and connecting map of a summand inclusion.

[F3] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies spectra, coherent diagrams, small colimits, the zero object, cofibers and suspension. Here $\bigoplus$ means the coproduct, the colimit of the discrete family. Use the foundational and smallness conventions of that interface.

### Proof
1.1 By [F3], the small coproducts exist, and inclusions of their tail index sets induce the coherent transition maps and augmentation. For $q\geq0$, the universal property of coproducts gives a natural equivalence $T^q\simeq T^{q+1}\oplus G_q$ carrying the transition map to the first-summand inclusion. Applying [F2] gives the stated graded piece and zero connecting map. [A1, F1, F2, F3, given, construct]

2.1 For $q<0$ the transition map is the identity of $T^0$, whose cofiber is zero. The coproduct decompositions, inclusions and projections commute with maps of families, so the identifications are natural. [A1, F1, F3, given, step 1.1] ∎


## Images of filtration stages

[Open item](item-lem-author-98a750efd0cc-filtration-image) · level 5


### Statement
Let $F$ be a coherently augmented decreasing filtration on a spectrum $E$. For integers $i,j$, the image of $\pi_iF^j\to\pi_iE$ is a subgroup of $\pi_iE$, and the same homomorphism, regarded as a map to this image, is surjective.

### Statement references

[def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)

[math:def-subgroup](https://alphabetamath.cc/item/def-subgroup)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

### Facts & Assumptions
**Given:** A spectrum $E$, its augmented decreasing filtration $F$, and integers $i,j$.

**Goal:** Establish the subgroup and surjectivity assertions.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) supplies the structure map $F^j\to E$ and the induced homomorphism of abelian homotopy groups.

[F2] [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup) defines a subgroup by containment of the identity and closure under the group operation and inverses; in additive notation these are zero, sums and negatives. Its group operation is inherited from the ambient group.

[F3] [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection) defines the image of a function $u:A\to B$ as $u[A]=\{u(x):x\in A\}$ and surjectivity as the existence of a preimage for every element of the codomain.

[F4] By [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism), a homomorphism of abelian groups preserves addition. Assertions 1 and 2 of [math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties) show that it also preserves zero and negatives.

### Proof
1.1 Write $u:\pi_iF^j\to\pi_iE$ for the homomorphism in [F1], and set $H=\{u(x):x\in\pi_iF^j\}$. By [F3], $H$ is its image. By [F4], $0=u(0)\in H$, $u(x)+u(y)=u(x+y)\in H$ and $-u(x)=u(-x)\in H$ for all $x,y\in\pi_iF^j$. Thus $H$ satisfies the three conditions in [F2] and is a subgroup of $\pi_iE$. [F1, F2, F3, F4, given]

2.1 Regard $u$ as a function $\pi_iF^j\to H$ with the same values; it is well-defined because each value belongs to $H$. It remains a homomorphism because $H$ has the inherited operation of [F2]. Every $h\in H$ has the form $u(x)$ for some $x\in\pi_iF^j$ by [F3]. This is precisely the surjectivity criterion of [F3], proving the second assertion together with the first assertion in step 1.1. [F2, F3, F4, step 1.1] ∎


## Spectral rationalization and its homotopy groups

[Open item](item-lem-adjudicate-7eb670bebc1b-spectral-rationalization) · level 5


### Statement
Assume the Axiom of Choice and the fixed compatible universe conventions of the stable-spectra interface. For an integer $m>0$, let $m:E\to E$ denote the natural sum of $m$ identity maps, formed by the finite biproduct diagonal and fold. Define the rational sphere and rationalization by the coherent sequential colimit

$$\mathbb S_{\mathbb Q}:=\operatorname*{colim}(\mathbb S\xrightarrow{2}\mathbb S\xrightarrow{3}\mathbb S\xrightarrow{4}\cdots),\qquad E_{\mathbb Q}:=E\wedge\mathbb S_{\mathbb Q}.$$

The first stage supplies the natural map $E\to E_{\mathbb Q}$. This functor preserves small colimits and is exact: it preserves finite limits and finite colimits, including cofiber sequences and their connecting maps. For every integer $i$ there is a natural isomorphism

$$\pi_i(E_{\mathbb Q})\cong\pi_i(E)\otimes_{\mathbb Z}\mathbb Q,$$

carrying the unit map to $a\mapsto a\otimes1$ and spectral maps to their tensor products with $\mathbb Q$. Tensoring abelian groups with $\mathbb Q$ preserves exact sequences and their kernels, images and quotients. A spectrum $R$ is called rational when every positive-integer multiplication $R\to R$ is an equivalence. The spectrum $E_{\mathbb Q}$ is rational, and restriction along the unit induces an equivalence of mapping spaces $\operatorname{Map}(E_{\mathbb Q},R)\simeq\operatorname{Map}(E,R)$ for every rational $R$. Thus this construction has the usual rational-localization meaning, including for nonconnective spectra.

### Statement references

[def-stable-spectra-interface](item-def-stable-spectra-interface)

[lem-author-9f61e4df2141-split-spectral-cofiber](item-lem-author-9f61e4df2141-split-spectral-cofiber)

[math:lem-rationalization-is-exact-and-commutes-with-singular-homology](https://alphabetamath.cc/item/lem-rationalization-is-exact-and-commutes-with-singular-homology)

[math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift](https://alphabetamath.cc/item/lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift)

### External input
Reference 0 imports preservation of small filtered colimits by every integer spectral homotopy-group functor. It applies to the displayed countable sequence without any connectivity bound. References 1 and 2 supply the precise contractible-index limit facts in [F5], used only for the mapping-space localization property. The rationalization construction and its consequences are locally proved below.

### Facts & Assumptions
**Given:** Spectra in the supplied stable enhancement, its sphere unit, fixed universes and the Axiom of Choice.

**Goal:** Construct rationalization, identify its homotopy groups and prove exactness and the localization property.

[F1] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies coherent small colimits and mapping spaces, the sphere, abelian homotopy groups, their detection of equivalences, and separately colimit-preserving and exact smash. [lem-author-9f61e4df2141-split-spectral-cofiber](item-lem-author-9f61e4df2141-split-spectral-cofiber) supplies the finite coproduct/product identification. Consequently the finite diagonal and fold define natural integer multiples of the identity; they act by repeated addition on homotopy groups.

[F2] Reference 0 in External input supplies the natural comparison between the homotopy groups of a filtered spectral colimit and the filtered colimit of its homotopy groups. Here filtered means nonempty, with a common target for each pair of objects and with every pair of parallel arrows equalized by a further arrow. The sequential index has objects $n\geq1$ and one arrow $n\to k$ when $n\leq k$: it is small and nonempty, a pair has upper bound its maximum, and parallel arrows already coincide.

[F3] [math:lem-rationalization-is-exact-and-commutes-with-singular-homology](https://alphabetamath.cc/item/lem-rationalization-is-exact-and-commutes-with-singular-homology) identifies $A\otimes_{\mathbb Z}\mathbb Q$ with positive-integer fractions $a/s$. Equality is $a/s=b/t$ when a positive integer kills $ta-sb$, and every element is such a fraction. It also supplies exactness of this group rationalization. [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations) supplies the tensor notation.

[F4] [math:lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift](https://alphabetamath.cc/item/lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift) supplies the following presentation, with no injectivity assumption on the transition maps. For a sequence $A_1\xrightarrow{u_1}A_2\xrightarrow{u_2}\cdots$, let $D=\bigoplus_{r\geq1}A_r$ be the abelian group of tuples $(a_r)$ having only finitely many nonzero coordinates, with coordinatewise addition. Write $\iota_r:A_r\to D$ for the coordinate inclusion and define $s\iota_r=\iota_{r+1}u_r$. Then the quotient $C=D/\operatorname{im}(1-s)$, whose elements are cosets modulo the subgroup of elements $y-sy$, is the group colimit, with stage maps $a\mapsto[\iota_r(a)]$. Write $u_{rN}$ for the composite transition map from stage $r$ to stage $N\geq r$, with $u_{rr}=1$. The finite-stage and eventual-equality properties used below are derived from this presentation in step 2.1.

[F5] Reference 1 supplies the limit-cone criterion for an equivalence-valued diagram indexed by a weakly contractible simplicial set. Reference 2 supplies weak contractibility of the nerve of a small ordinary category with a terminal object. Apply these to the inverse-sequence category with objects $n\geq1$ and an arrow $n\to k$ when $n\geq k$; its terminal object is $1$. Thus every projection of a limiting cone over such an all-equivalence diagram is an equivalence. These are coherent limit statements, not assertions about limits in the homotopy category.

[A1] Retain [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) in the ZFC and size assumptions of [F1], [F2] and [F3]. No independent family of choices of representatives, denominators or inverse maps is used.

### Proof
1.1 The small colimit in the statement exists by [F1] under [A1]. Smash commutes with that colimit, and smashing the finite diagonal and fold with $E$ preserves their biproduct description. Hence $E_{\mathbb Q}$ is naturally the colimit of $E\xrightarrow{2}E\xrightarrow{3}E\xrightarrow{4}\cdots$. Smash with a fixed spectrum preserves small colimits and is exact by [F1], proving the asserted functoriality and exactness. For $A=\pi_iE$, [F2] now identifies $\pi_i(E_{\mathbb Q})$ with the group colimit of $A\xrightarrow{2}A\xrightarrow{3}A\xrightarrow{4}\cdots$, with the same transition maps by [F1]. [A1, F1, F2, given, construct]

2.1 By [F4], use the presentation $C=D/\operatorname{im}(1-s)$ for the group colimit in step 1.1. Its relations $[\iota_r(a)]=[\iota_{r+1}(u_r a)]$ move every finite sum to a single common later stage, so every class has a finite-stage representative. If $a\in A_i$ and $b\in A_j$ have equal classes, write $\iota_i(a)-\iota_j(b)=(1-s)y$ with $y\in D$. Choose $N$ greater than $i$, $j$ and all nonzero coordinate indices of $y$. The homomorphism $\bigoplus_{r=1}^{N}A_r\to A_N$ sending coordinate $r$ by $u_{rN}$ kills $(1-s)y$: for each coordinate of $y$, its two terms cancel because $u_{rN}=u_{r+1,N}u_r$. Thus $u_{iN}a=u_{jN}b$. Conversely, equality at a common stage gives equal classes by those relations. This proves eventual equality without injective transition maps. Number the copies of $A$ starting at $n=1$. Send $a$ in copy $n$ to $a/n!$ in the fraction group of [F3]. These homomorphisms are compatible, since $(n+1)a/(n+1)!=a/n!$. They are jointly onto: for $a/s$ take $n\geq s$, so $s$ divides $n!$, and use $(n!/s)a$ in copy $n$. If $a/n!=0$, then $ka=0$ for some positive $k$ by [F3]; choose $N\geq nk$ so $k$ divides $N!/n!$. The image of $a$ in copy $N$ is zero, so its colimit class is zero. This proves the claimed isomorphism. It is natural because both formulas commute with homomorphisms, and at copy 1 the unit is $a\mapsto a/1$. Exactness in [F3] also preserves kernels, images and quotients, by applying it to the associated short exact sequences. Positive multiplication on fractions has inverse $a/s\mapsto a/(ms)$, so [F1]'s equivalence detection makes $E_{\mathbb Q}$ rational. Finally, for rational $R$, mapping the colimit of step 1.1 into $R$ is the inverse limit of the spaces $\operatorname{Map}(E,R)$ with transition maps given by precomposition with positive multiplication. Naturality of multiplication identifies this with postcomposition by the corresponding equivalences of $R$. All transition maps are therefore equivalences. The inverse-sequence index in [F5] is small in the stipulated universes and has terminal object $1$, so its nerve is weakly contractible. The mapping-colimit universal property gives its coherent limiting cone. Applying the limit-cone direction of [F5] shows that its projection to the first term is an equivalence. The evaluation map is precisely restriction along $E\to E_{\mathbb Q}$. This proves the localization assertion and finishes the proof. [F1, F2, F3, F4, F5, step 1.1, construct, algebra] ∎


## Perfect complexes on schemes and their support

[Open item](item-def-scheme-perfect-complexes) · level 6


### Definition
Assume the Axiom of Choice and fix suitable universes. Let $X$ be any scheme. Let $\mathcal D(X)$ be the stable derived infinity-category obtained from cochain complexes of Zariski $\mathcal O_X$-modules by inverting quasi-isomorphisms. A quasi-isomorphism induces an isomorphism on every cohomology sheaf. Its homotopy category is the ordinary unbounded derived category $D(\mathcal O_X)$.

An object $E$ is **perfect** if every point has an open neighbourhood on which $E$ is equivalent to a bounded complex of finite locally free modules. Bounded means nonzero in only finitely many degrees; finite locally free means locally a finite direct sum of copies of the structure sheaf. Bounds may vary between neighbourhoods. Write $\operatorname{Perf}(X)$ for the full enhanced subcategory on these objects, retaining all ambient mapping spaces and their composition coherences.

The **support** of $E$ is $\operatorname{Supp}(E)=\bigcup_{n\in\mathbb Z}\{x\in X:H^n(E)_x\ne0\}$. For any subset $T\subseteq X$, define $\operatorname{Perf}_T(X)$ as the full subcategory of perfect objects with support contained in $T$. If $T$ is closed and $j:X\setminus T\hookrightarrow X$ is the open immersion, this is equivalently the full subcategory on objects with $j^*E\simeq0$; thus these complexes are acyclic on the open complement. For arbitrary $T$, the condition is interpreted stalkwise.

These full subcategories are stable and idempotent complete. Their finite limits and colimits are inherited from $\mathcal D(X)$; their exact triangles are the images in the homotopy category of ambient cofiber sequences $E\to F\to G\to E[1]$. For cochains, $E[1]^n=E^{n+1}$ with differential $-d$.

For a commutative unital ring $A$, degreewise associated sheaf gives an exact equivalence $\operatorname{Perf}(A)\simeq\operatorname{Perf}(\operatorname{Spec}A)$, where $\operatorname{Perf}(A)$ is the full subcategory of $\mathcal D(A)$ on objects represented by bounded complexes of finitely generated projective $A$-modules.

### Justification
[lem-author-4f716d60801a-local-perfect-qc](item-lem-author-4f716d60801a-local-perfect-qc) proves that the local condition is independent of representatives and gives quasi-coherent cohomology. [lem-author-4f716d60801a-restriction-support](item-lem-author-4f716d60801a-restriction-support) proves invariance of support and the open-complement equivalence. [lem-author-4f716d60801a-supported-stability](item-lem-author-4f716d60801a-supported-stability) proves the stable and idempotent-complete subcategory assertions. [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence) proves the enhanced affine comparison for the actual associated-sheaf functor, and [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring) supplies the ring convention. No global bound or global vector-bundle resolution is imposed.


## Spectral sequence of a tower

[Open item](item-prop-tower-exact-couple-interface) · level 6


### Statement
Work in ZFC with the fixed compatible size conventions of the stable spectra and Eilenberg–Mac Lane interfaces. Let $E$ be a spectrum equipped with a coherent decreasing filtration: spectra $F^jE$ and coherent compatible maps $F^{j+1}E\to F^jE\to E$, for all integers $j$. Put $\operatorname{gr}^jE=\operatorname{cofib}(F^{j+1}E\to F^jE)$ and $F^j\pi_nE=\operatorname{im}(\pi_nF^jE\to\pi_nE)$. The stage sequences form an exact couple and yield a cohomological spectral sequence, indexed from page 2, with

$$E_2^{a,b}=\pi_{-a-b}\operatorname{gr}^{-b}E,\qquad d_s:E_s^{a,b}\longrightarrow E_s^{a+s,b-s+1}\quad(s\ge2).$$

If specified equivalences $\operatorname{gr}^jE\simeq(HC_j)[2j]$ are given for unbounded cochain complexes $C_j$ of abelian groups, then naturally

$$E_2^{a,b}\cong H^{a-b}(C_{-b}).$$

Here $HC_j$ is the Eilenberg–Mac Lane realization of the chain complex with degree-$n$ group $C_j^{-n}$, $[2j]$ is spectral suspension, and $H^q(C_j)$ is cochain cohomology. Naturality in this formula means naturality for cochain maps and maps of filtered spectra compatible with the specified graded equivalences.

Suppose additionally that, for each integer $n$, there are integers $L_n\le U_n$ such that $\pi_nF^jE\to\pi_nE$ is an isomorphism for $j\le L_n$ and $\pi_nF^jE=0$ for $j\ge U_n$. Then every bidegree stabilizes after finitely many pages and there are natural isomorphisms

$$E_\infty^{a,b}\cong F^{-b}\pi_{-a-b}E/F^{-b+1}\pi_{-a-b}E.$$

Thus the spectral sequence converges to $\pi_{-a-b}E$ with its finite image filtration. Here $E_\infty$ denotes the eventual stable page in each bidegree; convergence includes the displayed associated-graded identification, not a canonical splitting of the filtration. The stated boundedness is a sufficient hypothesis; no convergence is asserted from the graded identifications alone.

### Facts & Assumptions

**Given:** ZFC and the fixed compatible size conventions; the coherent tower and compatible maps in the statement; for the indexed cohomology formula, the specified graded equivalences; for convergence, the stated degreewise bounds.

**Goal:** Construct the spectral sequence, calculate its indices, and prove its bounded convergence assertion.

[F1] For every $j,n$, [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence) gives the natural long exact sequence containing $\pi_nF^{j+1}E\to\pi_nF^jE\to\pi_n\operatorname{gr}^jE\to\pi_{n-1}F^{j+1}E$.

[F2] [math:def-exact-couple](https://alphabetamath.cc/item/def-exact-couple) specifies the initial homological exact-couple degrees, and [math:def-derived-exact-couple](https://alphabetamath.cc/item/def-derived-exact-couple) defines the derived maps and homology quotients. [math:thm-an-exact-couple-generates-a-spectral-sequence](https://alphabetamath.cc/item/thm-an-exact-couple-generates-a-spectral-sequence) proves repeated derivation is possible, gives the differential degrees and page transitions, and identifies each page with its explicit cycle/boundary subquotient. [math:def-cohomological-spectral-sequence](https://alphabetamath.cc/item/def-cohomological-spectral-sequence) specifies the cohomological differential degrees and page-to-page homology requirement.

[F3] For an unbounded cochain complex $C_j$ of abelian groups and under a specified equivalence $\operatorname{gr}^jE\simeq(HC_j)[2j]$, [lem-eilenberg-maclane-shift-index](item-lem-eilenberg-maclane-shift-index) gives $\pi_n\operatorname{gr}^jE\cong H^{2j-n}(C_j)$.

[F4] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies spectra, coherent diagrams, cofibers, integer spectral shifts, equivalences and functorial abelian homotopy groups. [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) supplies the coherent decreasing augmented tower and its graded spectra and image filtration.

[F5] [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category), [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex) and [math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map) specify complexes, their cohomology and their maps, here in abelian groups. [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category) permits applying the categorical exact-couple and cochain interfaces to these groups.

[F6] [math:prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences](https://alphabetamath.cc/item/prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences) gives functorial maps of derived couples and pages from maps of initial exact couples.

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) as part of ZFC, with the same fixed size conventions as [F3] and [F4]. These hypotheses are retained when invoking their spectral foundations and Eilenberg–Mac Lane realization; the finite group calculations below make no additional simultaneous choices of representatives.

### Proof

1.1 Set $D^1_{p,q}=\pi_{p+q}F^{-p}E$ and $E^1_{p,q}=\pi_{p+q}\operatorname{gr}^{-p}E$. Let $i$ be induced by $F^{-p}E\to F^{-p-1}E$, let $j$ be the stage projection, and let $k$ be the connecting homomorphism. Their respective degrees are $(1,-1)$, $(0,0)$ and $(-1,0)$. Under [A1], the operations in [F4] and the long exact sequences in [F1] give these maps. Exactness at all three vertices follows from [F1], so in the abelian category of [F5] they form an initial exact couple. [A1, F1, F2, F4, F5, construct]

2.1 Derive the couple repeatedly. At homological page $r\ge1$, its differential $d_r=jk$ has degree $(-r,r-1)$, squares to zero, and its homology is the next page. Define $E_s^{a,b}=E^{s-1}_{b,-a-2b}$ for $s\ge2$. A homological differential with $r=s-1$ changes $(b,-a-2b)$ to $(b-r,-a-2b+r-1)$, corresponding to $(a+s,b-s+1)$. Hence these reindexed pages satisfy the cohomological spectral-sequence convention. At $s=2$, their total homotopy degree is $b+(-a-2b)=-a-b$ and their filtration index is $-b$, proving the first displayed formula. Maps of coherent filtered spectra give maps of these exact couples by [F1] and [F4]; [F6] makes the reindexed pages and their differentials functorial. [F1, F2, F4, F6, step 1.1, algebra]

3.1 With $j=-b$ and $n=-a-b$, [F3] gives $\pi_n\operatorname{gr}^jE\cong H^{2j-n}(C_j)=H^{a-b}(C_{-b})$. This proves the second displayed formula and its naturality for maps preserving the given graded equivalences. [A1, F3, F5, F6, step 2.1, algebra]

3.2 Fix $j,n$. Write $G_n^h=\pi_nF^hE$, $Q_n^j=\pi_n\operatorname{gr}^jE$, $P_j:G_n^j\to Q_n^j$ for the projection, $\delta_j:Q_n^j\to G_{n-1}^{j+1}$ for its connecting map, and $q_j:G_n^j\to\pi_nE$ for the augmentation. By the explicit subquotient formulas in [F2], the homological page-$r$ term of step 1.1 at $(p,q)=(-j,n+j)$ is $N_r/B_r$, where $N_r=\delta_j^{-1}(\operatorname{im}(G_{n-1}^{j+r}\to G_{n-1}^{j+1}))$ and $B_r=P_j(\ker(G_n^j\to G_n^{j-r+1}))$. These formulas express exactly the repeated lifting and boundary tests: surviving representatives have connecting images liftable to stage $j+r$, and the boundaries are projections of elements killed at stage $j-r+1$. At $r=1$ they give $N_1=Q_n^j$ and $B_1=0$. The canonical homology transitions are induced by the nested numerators and denominators in [F2]. [F1, F2, step 1.1, step 2.1]

4.1 Under the stated degreewise bounds, choose $r$ large enough that $j+r\geq U_{n-1}$ and $\ell=j-r+1\leq L_n$. The high-stage group $G_{n-1}^{j+r}$ is zero, so $N_r=\ker\delta_j=\operatorname{im}P_j$ by exactness. The map $q_\ell:G_n^\ell\to\pi_nE$ is an isomorphism and $q_j=q_\ell\circ(G_n^j\to G_n^\ell)$; hence $\ker(G_n^j\to G_n^\ell)=\ker q_j$. Thus $B_r=P_j(\ker q_j)$. These equalities hold for every larger $r$, so the canonical page transitions stabilize at $\operatorname{im}P_j/P_j(\ker q_j)$. They also make all subsequent outgoing and incoming differentials zero: in the subquotient description a differential has lift formula $[e]\mapsto[P_h x]$ when $\delta e$ is the requisite transition image of $x$; if $e\in\ker\delta$, choose $x=0$, while the incoming image is $B_{r+1}/B_r=0$. [given, F1, F2, step 3.2]

5.1 The map $G_n^j\to\operatorname{im}P_j/P_j(\ker q_j)$ is onto and has kernel $\ker P_j+\ker q_j$. Exactness gives $\ker P_j=\operatorname{im}(G_n^{j+1}\to G_n^j)$; its image under $q_j$ is precisely $F^{j+1}\pi_nE$. Consequently $q_j$ induces an isomorphism from $\operatorname{im}P_j/P_j(\ker q_j)$ to $F^j\pi_nE/F^{j+1}\pi_nE$. The maps are canonical and natural by the functorial stage exact sequences, images and quotients, and [F6]. Finally $F^j\pi_nE=\pi_nE$ for $j\leq L_n$ and $F^j\pi_nE=0$ for $j\geq U_n$, so this filtration is finite. Step 4.1 proves finite stabilization in each bidegree, and substitution of $j=-b$ and $n=-a-b$, with $s=r+1$ as in step 2.1, gives the asserted associated-graded formula and convergence without a splitting. [given, F1, F6, step 2.1, step 4.1] ∎


## Products and projections on image filtrations

[Open item](item-lem-image-filtration-products) · level 6


### Statement
Assume the Axiom of Choice and the compatible nested Grothendieck universes $U\in V\in W$, with $\omega\in U$, stipulated by the supplied stable spectra and filtration constructions. All indexing diagrams and objects obey those size bounds.

Let $F$ be a multiplicative decreasing filtration on a commutative ring spectrum $E$. For integers $i,j,a,b$, write
$$q_{i,a}:\pi_aF^i\longrightarrow\pi_aE,\qquad p_{i,a}:\pi_aF^i\longrightarrow\pi_a\operatorname{gr}^iF$$
for the maps induced by the augmentation and the cofiber projection, respectively, and set $F^i\pi_aE=\operatorname{im}q_{i,a}$. Then
$$F^i\pi_aE\cdot F^j\pi_bE\subseteq F^{i+j}\pi_{a+b}E.$$
For any stage lifts $x\in\pi_aF^i$ and $y\in\pi_bF^j$, their stage product $xy\in\pi_{a+b}F^{i+j}$ satisfies
$$p_{i+j,a+b}(xy)=p_{i,a}(x)\,p_{j,b}(y).$$
If, for the three pairs $(i,a)$, $(j,b)$ and $(i+j,a+b)$, one has $\ker q_{r,n}\subseteq\ker p_{r,n}$, the corresponding maps $p_{r,n}$ descend uniquely to homomorphisms $\bar p_{r,n}:F^r\pi_nE\to\pi_n\operatorname{gr}^rF$, and
$$\bar p_{i+j,a+b}(uv)=\bar p_{i,a}(u)\,\bar p_{j,b}(v)$$
for $u\in F^i\pi_aE$ and $v\in F^j\pi_bE$. Injectivity of each relevant $q_{r,n}$ is sufficient for these descent conditions; it is not needed for the containment or the formula for chosen stage lifts.

A decreasing filtration here is a coherent tower of spectra $F^r$ with maps $F^{r+1}\to F^r$ and compatible maps $F^r\to E$. Its graded piece is the cofiber $\operatorname{gr}^rF=\operatorname{cofib}(F^{r+1}\to F^r)$. Multiplicativity supplies compatible maps $F^i\wedge F^j\to F^{i+j}$ and $\operatorname{gr}^iF\wedge\operatorname{gr}^jF\to\operatorname{gr}^{i+j}$, and makes the augmentation compatible with multiplication on $E$. Products in homotopy groups are those induced by these maps and the canonical smash pairing of sphere spectra. An image filtration consists of the subgroups $F^r\pi_nE$ just defined; a stage lift of an element of one of these subgroups is a preimage under $q_{r,n}$.

### Facts & Assumptions
**Given:** A multiplicative decreasing filtration $F$ on a commutative ring spectrum $E$ and integers $i,j,a,b$.

**Goal:** Prove the product containment and the projection identity for stage lifts, and prove the stated conditional identity on image groups.

[F1] The stage multiplication is compatible with the augmentation to $E$, and the graded multiplication satisfies $\overline\mu_{i,j}(p_i\wedge p_j)\simeq p_{i+j}\mu_{i,j}$ for the cofiber maps $p_r:F^r\to\operatorname{gr}^rF$. These maps induce the corresponding pairings on homotopy groups. [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)

[F2] For each $(r,n)$, the stage projection $p_{r,n}$ factors uniquely through the image of $q_{r,n}$ exactly when $\ker q_{r,n}\subseteq\ker p_{r,n}$. In particular, injectivity of $q_{r,n}$ implies this condition. [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence)

[A1] Retain the classical foundations and compatible universe bounds of the supplied constructions, including the Axiom of Choice and $\omega\in U$ for fixed $U\in V\in W$. These are premises of the selected framework; the algebraic image and product arguments below assert no necessity of Choice for the corresponding abstract group facts. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof
**Proof technique:** Apply the augmentation and cofiber compatibilities to representatives, then use the image-factorization criterion.

1.1 Let $u\in F^i\pi_aE$ and $v\in F^j\pi_bE$. By the definition of image, choose $x\in\pi_aF^i$ and $y\in\pi_bF^j$ with $q_{i,a}(x)=u$ and $q_{j,b}(y)=v$. The stage multiplication gives $xy\in\pi_{a+b}F^{i+j}$. Compatibility of multiplication with the augmentation gives $q_{i+j,a+b}(xy)=uv$. Hence $uv$ is in $F^{i+j}\pi_{a+b}E$, proving the containment. [F1, given, construct]

1.2 For any such stage classes $x,y$, the cofiber compatibility in [F1], applied to their representing sphere maps, gives $p_{i+j,a+b}(xy)=p_{i,a}(x)p_{j,b}(y)$. This equality concerns the chosen stage classes and does not require their images in $\pi_*E$ to determine them uniquely. [F1, given]

2.1 Assume the three kernel inclusions in the statement. By [F2], the three stage projections factor uniquely through their respective image groups. For the lifts chosen in step 1.1, the product $xy$ is a stage lift of $uv$. Therefore
$$\bar p_{i+j,a+b}(uv)=p_{i+j,a+b}(xy)=p_{i,a}(x)p_{j,b}(y)=\bar p_{i,a}(u)\bar p_{j,b}(v).$$
The factorization ensures that the displayed values are independent of the chosen lifts. [F2, step 1.1, step 1.2, assume-hyp]

3.1 An injective $q_{r,n}$ has zero kernel and thus satisfies the corresponding inclusion. Steps 1.1 through 2.1 prove all assertions, with no injectivity hypothesis used in the first two steps. [F2, step 1.1, step 1.2, step 2.1] ∎


## Dimension decreases under quotients

[Open item](item-lem-author-14463ef2f4e5-quotient-dimension) · level 6


### Statement
For a commutative ring $A$ and ideal $I$, $\dim(A/I)\leq\dim A$, using $-1$ for the zero ring.

### Statement references
[math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)

[math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)

[def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)

### Facts & Assumptions
**Given:** A commutative ring $A$ and an ideal $I$.

**Goal:** Compare the Krull dimensions of $A/I$ and $A$.

[F1] Krull dimension is the supremum of the lengths of strict chains of prime ideals, with dimension $-1$ for the zero ring. [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness) [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)

[F2] For the quotient ring $A/I$, contraction along the quotient map gives an inclusion-preserving bijection from its prime ideals to the prime ideals of $A$ containing $I$. [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring) [math:thm-prime-spectrum-of-a-quotient-bijection](https://alphabetamath.cc/item/thm-prime-spectrum-of-a-quotient-bijection)

### Proof
1.1 By [F2], the inverse image of a prime ideal under the quotient map $A\to A/I$ is prime, and distinct prime ideals have distinct inverse images. Since contraction preserves inclusion, every strict prime chain in $A/I$ pulls back to a strict prime chain of the same length in $A$. [F2, given]

2.1 Taking suprema gives the inequality. If $A/I$ is zero, its dimension is $-1$, and the same inequality holds by the convention in [F1]. [F1, step 1.1] ∎


## A valuation overring has a center

[Open item](item-lem-author-14463ef2f4e5-valuation-center) · level 6


### Statement
Let $D$ be a domain and $V$ a valuation overring in $K=\operatorname{Frac}(D)$. Then $V$ is local, meaning it has a unique maximal ideal $\mathfrak m$, and if $\mathfrak q=\mathfrak m\cap D$, the inclusion $D\subseteq V$ extends to a local inclusion $D_{\mathfrak q}\subseteq V$. Here local means that the inverse image of the maximal ideal of $V$ is the maximal ideal of $D_{\mathfrak q}$.

### Facts & Assumptions
**Given:** A domain $D$ and a valuation overring $V$ in its fraction field.

**Goal:** Construct its center $\mathfrak q$ and the stated local inclusion.

[F1] For each nonzero $x\in K$, either $x$ or $x^{-1}$ lies in $V$. [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)

[F2] The fraction field $K=\operatorname{Frac}(D)$ is the localization of $D$ at its nonzero elements; it is a field, and $d\mapsto d/1$ is an injective unital ring homomorphism. We identify $D$ with this subring of $K$. [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions) [math:thm-field-of-fractions-is-a-field-and-the-domain-embeds](https://alphabetamath.cc/item/thm-field-of-fractions-is-a-field-and-the-domain-embeds)

[F3] In a commutative ring $R$, an ideal $I$ is a subset containing $0$, closed under addition and additive inverses, and satisfying $ri\in I$ for every $r\in R$ and $i\in I$; it is proper if $I\ne R$. [math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal) A prime ideal is proper and satisfies $ab\in\mathfrak p\Rightarrow a\in\mathfrak p$ or $b\in\mathfrak p$; a maximal ideal is maximal among proper ideals. A unit $u$ of a ring means an element admitting $v$ with $uv=vu=1$, and a nonunit is any other element. [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)

[F4] For a prime ideal $\mathfrak q\subset D$, the localization $D_{\mathfrak q}$ has fractions $a/s$ with $s\in D\setminus\mathfrak q$. A unital homomorphism from $D$ taking these denominators to units extends uniquely to this localization by $a/s\mapsto f(a)f(s)^{-1}$. [math:def-localisation-at-a-prime-ideal](https://alphabetamath.cc/item/def-localisation-at-a-prime-ideal) [math:thm-universal-property-of-localisation](https://alphabetamath.cc/item/thm-universal-property-of-localisation)

[F5] The ring $D_{\mathfrak q}$ is local with unique maximal ideal $\mathfrak qD_{\mathfrak q}=\{a/s:a\in\mathfrak q,\ s\notin\mathfrak q\}$. [math:thm-localisation-at-a-prime-is-local](https://alphabetamath.cc/item/thm-localisation-at-a-prime-is-local)

### Proof
1.1 Let $\mathfrak m$ be the set of nonunits of $V$. If $a$ is a nonunit and $v\in V$, then $va$ cannot be a unit, since an inverse of $va$ would give an inverse of $a$. If nonunits $a,b$ have nonzero sum, [F1] gives either $a/b\in V$ or $b/a\in V$ when both are nonzero; in the first case $a+b=b(1+a/b)$ is a nonunit, and similarly in the second. The zero cases are immediate, and $-a$ is a nonunit whenever $a$ is. Thus $\mathfrak m$ is a proper ideal: it contains $0$ and does not contain $1$. Every proper ideal contains only nonunits: if it contained a unit $u$, absorption would put $u^{-1}u=1$ in it and hence every ring element in it. Thus $\mathfrak m$ contains every proper ideal and is the unique maximal ideal. It is prime because two elements outside it are units and their product is a unit. [F1, F2, F3, given, algebra]

2.1 Its inverse image $\mathfrak q=\mathfrak m\cap D$ contains $0$, is closed under addition and additive inverses, and absorbs multiplication by elements of $D$, since $\mathfrak m$ has these properties in $V$. It excludes $1$, so it is a proper ideal. If $ab\in\mathfrak q$ for $a,b\in D$, primality of $\mathfrak m$ gives $a\in\mathfrak q$ or $b\in\mathfrak q$. Thus $\mathfrak q$ is prime. Every element of $D\setminus\mathfrak q$ maps to a unit of $V$, so [F4] extends the inclusion to a well-defined unital homomorphism $D_{\mathfrak q}\to V$ by $a/s\mapsto as^{-1}$. Here $s\ne0$, since $0\in\mathfrak q$, and this is the same fraction in $K$. If its image is zero, then $a=0$ in $K$, hence in $D$ by [F2], and $a/s=0$ in the localization. The homomorphism is therefore injective. A fraction $a/s$ maps into $\mathfrak m$ exactly when $a\in\mathfrak q$: multiplication by the unit $s$ preserves membership in $\mathfrak m$. By [F5] its inverse image is precisely the unique maximal ideal $\mathfrak qD_{\mathfrak q}$, proving the asserted local inclusion. [F2, F3, F4, F5, given, step 1.1, algebra] ∎


## Noetherian domains have equal Krull and valuative dimensions

[Open item](item-thm-author-14463ef2f4e5-noetherian-valuative-input) · level 6

### Statement
For a noetherian integral domain $D$, $\dim_v D=\dim D$, allowing infinity. Noetherian means that every ideal is finitely generated; the dimensions and valuation overrings are as defined in this development.

### External input
This is the classical noetherian-domain comparison recorded in the cited introduction. It is used as an external mathematical input; no local reconstruction of its proof is claimed.

## Boundary maps vanish for a split tower

[Open item](item-lem-author-9f61e4df2141-split-tower-boundaries) · level 6


### Statement
Assume the Axiom of Choice and the fixed compatible universe and smallness conventions of the stable-spectra interface; universe existence is a separate assumption. Suppose a decreasing augmented tower $F^\bullet E$ is equipped with an equivalence of augmented towers to the direct-sum tail tower of [lem-author-9f61e4df2141-tail-splitting](item-lem-author-9f61e4df2141-tail-splitting). Then every connecting map $\operatorname{gr}^qE\to F^{q+1}E[1]$ is zero. In particular, every connecting homomorphism on homotopy groups in the stage long exact sequences is zero.

### Facts & Assumptions
**Given:** The augmented tower and the specified equivalence of towers.

**Goal:** Prove the vanishing of its stage boundaries.

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) with the same fixed universes and smallness bounds as [F3]; their existence is assumed separately from Choice. This retains the explicit Choice hypotheses of the tail-tower result [F2] and stage exact-sequence result [F4], as well as the ZFC foundations of the spectral model in [F3]. Invoking these supplied constructions uses this premise; transporting their zero maps adds no selection requirement.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) defines the graded pieces as cofibers of transitions.

[F2] [lem-author-9f61e4df2141-tail-splitting](item-lem-author-9f61e4df2141-tail-splitting) gives zero connecting maps for the tail tower.

[F3] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies coherent spectral diagrams, functorial cofibers and their connecting maps, suspension, the zero spectrum, and functorial homotopy groups. Use the foundational and smallness conventions of that interface.

[F4] [lem-filtered-stage-exact-sequence](item-lem-filtered-stage-exact-sequence) supplies the natural stage long exact sequences; their connecting homomorphisms are induced by the spectral connecting maps under the suspension identification.

### Proof
1.1 Invoke the supplied spectral constructions under [A1]. The equivalence of tower diagrams identifies each transition map with the corresponding tail inclusion. Functoriality of cofiber sequences identifies the connecting map of the given transition with that of the tail inclusion. [A1, F1, F3, given]

2.1 The latter map is zero by [F2], including in negative filtration degrees. Applying the homotopy-group functor of [F3] sends a zero map to the zero homomorphism. By [F4], these are exactly the connecting homomorphisms in the stage long exact sequences, which proves both assertions. [A1, F2, F3, F4, step 1.1] ∎


## Image filtration for a split tower

[Open item](item-lem-author-9f61e4df2141-split-image-filtration) · level 6


### Statement
Assume the Axiom of Choice and use the foundational and smallness conventions of the stable-spectra interface. Let $F^\bullet E$ be equivalent as an augmented tower to the tail tower of a family $(G_j)_{j\geq0}$, including an equivalence $E\simeq\bigoplus_{j\geq0}G_j$. For every integer $n$ and $q\geq0$, the image of $\pi_nF^qE\to\pi_nE$ is the image of the canonical tail inclusion $\pi_n(\bigoplus_{j\geq q}G_j)\to\pi_n(\bigoplus_{j\geq0}G_j)$. Moreover the quotient of this image by the corresponding image at $q+1$ is naturally $\pi_nG_q$. This statement does not require identifying homotopy groups of an infinite coproduct with a direct sum.

### Facts & Assumptions
**Given:** The augmented tower equivalence, an integer $n$, and $q\geq0$, in the foundational setting of the statement.

**Goal:** Identify the image filtration and its successive quotient.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) defines coherent augmented towers and their image filtration groups.

[F2] [lem-author-9f61e4df2141-tail-splitting](item-lem-author-9f61e4df2141-tail-splitting) specifies the tail tower: $T^q=\bigoplus_{j\geq q}G_j$ for $q\geq0$, extended constantly for $q\leq0$, with canonical inclusions and augmentation to $T^0$. Its statement identifies graded pieces and connecting maps; the decomposition used below is derived locally.

[F3] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the stable infinity-category of spectra, small coherent limits and colimits with their universal properties, the zero spectrum, and functorial abelian groups $\pi_n(Z)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[n],Z)$. Here $\bigoplus$ denotes the coproduct of a discrete family, and every index family is small in the supplied universes.

[F4] [lem-author-9f61e4df2141-split-spectral-cofiber](item-lem-author-9f61e4df2141-split-spectral-cofiber) states that the finite coproduct $A\oplus B$ is also the product in spectra. We use this finite biproduct identification, not any assertion about homotopy groups of infinite coproducts.

[F5] [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group) supplies the quotient by a normal subgroup, written additively as cosets $x+H$. All homotopy groups here are abelian by [F3], so the image subgroup at $q+1$ is normal in that at $q$.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed in the ZFC foundations inherited from [F3]. It is used when invoking that supplied categorical model and its existence of small limits and colimits; the explicit coproduct maps and coset maps below require no additional selection.

### Proof
1.1 Put $T^q=\bigoplus_{j\geq q}G_j$ for $q\geq0$ as in [F2]. The coherent augmentation square of the given tower equivalence becomes a commutative square of group homomorphisms under the functor $\pi_n$, with vertical isomorphisms; hence it identifies the two images in the statement. The coproduct universal property constructs a retraction $r_q:T^0\to T^q$: on $G_j$ use its canonical inclusion in $T^q$ when $j\geq q$, and the map through the zero spectrum otherwise. The composite with the tail inclusion is the identity of $T^q$, as is checked on each summand by that same universal property. Applying $\pi_n$ gives a left inverse, proving that the tail map on groups is injective. Thus, under the given equivalence, $I_q:=\operatorname{im}(\pi_nF^qE\to\pi_nE)$ is identified with $\pi_nT^q$ and $I_{q+1}\subseteq I_q$ is induced by the tail transition. [A1, F1, F2, F3, given, construct]

2.1 Partitioning the index set into $\{j\geq q+1\}$ and $\{q\}$, the coproduct universal property gives a natural equivalence $T^q\simeq T^{q+1}\oplus G_q$: maps out of either side are the same family of maps out of the $G_j$. This equivalence carries the tail transition to the first-summand inclusion. By [F4] this finite coproduct is the product, so its mapping space from $\mathbb S[n]$ is the product of the two mapping spaces by the product universal property. Taking $\pi_0$ therefore gives $\pi_nT^q\cong\pi_nT^{q+1}\times\pi_nG_q$ as abelian groups, carrying the transition to $a\mapsto(a,0)$. Via step 1.1, $I_q/I_{q+1}$ is consequently the quotient of this finite product by its first factor. The map sending the coset of $(a,b)$ to $b$ is well-defined, additive and inverse to $b\mapsto(0,b)+(\pi_nT^{q+1}\times\{0\})$, which proves the claimed isomorphism with $\pi_nG_q$. Every construction commutes with maps of families and the specified augmented tower equivalence, proving the asserted naturality. Only the finite product is evaluated on homotopy groups. [F3, F4, F5, step 1.1, construct] ∎


## Nesting of image filtration groups

[Open item](item-lem-author-98a750efd0cc-filtration-nesting) · level 6


### Statement
Assume the Axiom of Choice and the compatible nested Grothendieck universes $U\in V\in W$, with $\omega\in U$, stipulated by the supplied stable spectra and filtration constructions. All indexing diagrams and objects obey those size bounds.

For a decreasing filtration $F$ on a spectrum $E$ and integers $i$ and $a\geq b$, the image of $\pi_iF^a\to\pi_iE$ is contained in the image of $\pi_iF^b\to\pi_iE$.

### Facts & Assumptions
**Given:** $F$, $E$, $i$, and $a\geq b$ as stated. Write $F^j$ for the stage $F^jE$ of this filtration.

**Goal:** Prove the containment.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) gives a transition $F^a\to F^b$ compatible with the maps to $E$.

[F2] [lem-author-98a750efd0cc-filtration-image](item-lem-author-98a750efd0cc-filtration-image) identifies these images as subgroups.

[F3] [def-stable-spectra-interface](item-def-stable-spectra-interface) defines $\pi_i(Z)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[i],Z)$. A map of spectra induces its homotopy-group map by postcomposition on these homotopy classes.

[F4] [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection) defines the image of a function $u:A\to B$ as $u[A]=\{u(x):x\in A\}$.

[A1] Retain the classical foundations and compatible universe bounds of the supplied constructions, including the Axiom of Choice and $\omega\in U$ for fixed $U\in V\in W$. These are premises of the selected framework; the algebraic image and product arguments below assert no necessity of Choice for the corresponding abstract group facts. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof
1.1 Let $t:\pi_iF^a\to\pi_iF^b$ and $u_j:\pi_iF^j\to\pi_iE$ be induced by the transition and the augmentation maps in [F1]. Their compatibility identifies the augmentation at $a$ with the composite through $b$ up to homotopy. Postcomposing a sphere map first with the transition and then with the augmentation represents the same class as postcomposing with that composite. Homotopic composites represent the same class, so [F3] gives $u_a=u_b\circ t$. [F1, F3, given]

2.1 Let $y$ belong to the image of $u_a$. By [F4] there is $x\in\pi_iF^a$ with $y=u_a(x)$. Step 1.1 gives $y=u_b(t(x))$, and $t(x)\in\pi_iF^b$, so [F4] puts $y$ in the image of $u_b$. Hence the first image is contained in the second. Both images are subgroups of $\pi_iE$ by [F2], giving the asserted containment of image filtration groups. [F2, F4, step 1.1] ∎


## Naturality of image filtrations

[Open item](item-lem-author-98a750efd0cc-filtration-naturality) · level 6


### Statement
Assume the Axiom of Choice and the compatible nested Grothendieck universes $U\in V\in W$, with $\omega\in U$, stipulated by the supplied stable spectra and filtration constructions. All indexing diagrams and objects obey those size bounds.

Let $F$ and $G$ be decreasing filtrations on spectra $E$ and $D$. Suppose maps $F^j\to G^j$ and $E\to D$ form a coherent map of augmented towers: in particular each square with the maps to $E$ and $D$ commutes up to the specified homotopy. Then $\pi_iE\to\pi_iD$ carries the $j$th image subgroup of $E$ into that of $D$, for every $i,j\in\mathbb Z$. These restricted maps respect identity and composition whenever the original maps do.

### Facts & Assumptions
**Given:** The two augmented towers and compatible maps just specified.

**Goal:** Establish induced functorial maps on their image subgroups.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) specifies the augmented towers and their structure maps. The homotopy groups are those of [def-stable-spectra-interface](item-def-stable-spectra-interface): $\pi_i(T)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[i],T)$. Postcomposition induces their homomorphisms. Homotopic maps give paths in these mapping spaces and hence the same map on components; identities and composition are preserved on components.

[F2] [lem-author-98a750efd0cc-filtration-image](item-lem-author-98a750efd0cc-filtration-image) supplies the image subgroups with their inherited operations and the surjections from the stage homotopy groups onto them.

[F3] [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism) defines a group homomorphism by preservation of the group operation; here the groups are abelian and written additively.

[A1] Retain the classical foundations and compatible universe bounds of the supplied constructions, including the Axiom of Choice and $\omega\in U$ for fixed $U\in V\in W$. These are premises of the selected framework; the algebraic image and product arguments below assert no necessity of Choice for the corresponding abstract group facts. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof
1.1 Fix $i,j$. Write $u:\pi_iF^j\to\pi_iE$, $v:\pi_iG^j\to\pi_iD$, $a:\pi_iF^j\to\pi_iG^j$ and $b:\pi_iE\to\pi_iD$ for the induced homomorphisms. The specified homotopy and [F1] give $bu=va$. Let $H=\operatorname{im}u$ and $J=\operatorname{im}v$. If $h\in H$, [F2] gives an $x\in\pi_iF^j$ with $h=u(x)$, so $b(h)=v(a(x))\in J$. Thus $r:H\to J$, $r(h)=b(h)$, is well-defined. It is independent of the chosen preimage because its value is defined from $h$ itself. [F1, F2, given]

2.1 The subgroup operations are inherited by [F2]. For $h,h'\in H$, the ambient homomorphism gives $r(h+h')=b(h+h')=b(h)+b(h')=r(h)+r(h')$, so [F3] makes $r$ a homomorphism. Restricting an ambient identity gives $h\mapsto h$. For composable maps of augmented towers, let $c$ be the second ambient homomorphism. By [F1] the composite ambient map is $cb$; its restriction sends $h$ to $c(b(h))$, which is also the composite of the two restricted maps. The intermediate value lies in $J$ by step 1.1. Hence the restricted maps respect identity and composition as claimed. [F1, F2, F3, step 1.1] ∎


## Products of filtration images

[Open item](item-lem-author-98a750efd0cc-filtration-products) · level 6


### Statement
Work in ZFC and the fixed nested universes of the stable spectra interface. Let $F$ be a multiplicative filtration on a commutative ring spectrum $E$, including its multiplicative augmentation as specified by the multiplicative filtered spectrum definition. For integers $a,b,i,j$, multiplication on $\pi_*E$ sends the product of the image of $\pi_iF^a\to\pi_iE$ and the image of $\pi_jF^b\to\pi_jE$ into the image of $\pi_{i+j}F^{a+b}\to\pi_{i+j}E$.

### Statement references

[def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)

[lem-author-98a750efd0cc-filtration-image](item-lem-author-98a750efd0cc-filtration-image)

[def-stable-spectra-interface](item-def-stable-spectra-interface)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Facts & Assumptions
**Given:** The multiplicatively augmented filtered spectrum $F\to E$ and the four integers, under the stated ZFC and universe conventions.

**Goal:** Prove the containment of products.

[F1] [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum) supplies the stage multiplication $\mu_{a,b}:F^a\wedge F^b\to F^{a+b}$, the multiplication $\mu_E:E\wedge E\to E$, and the augmentation components $u_c:F^c\to E$, with $u_{a+b}\mu_{a,b}\simeq\mu_E(u_a\wedge u_b)$.

[F2] [lem-author-98a750efd0cc-filtration-image](item-lem-author-98a750efd0cc-filtration-image) supplies the image subgroups and surjectivity of each stage homomorphism onto its image.

[F3] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies $\pi_nA=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[n],A)$ for every integer $n$, suspension and its inverse, and the separately exact symmetric monoidal smash product with unit $\mathbb S$.

[F4] The Axiom of Choice, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), is retained in the ZFC foundations and nested-universe conventions of [F1] and [F3]. Its use is in those supplied categorical and homotopical foundations; choosing the two lifts below requires only finite choice.

### Proof
1.1 Let $p$ and $q$ belong to the two stated image subgroups. By [F2], choose lifts $x\in\pi_iF^a$ and $y\in\pi_jF^b$, and by [F3] represent them by maps $\alpha:\mathbb S[i]\to F^a$ and $\beta:\mathbb S[j]\to F^b$. Fix the ordered sphere identification $\rho_{i,j}:\mathbb S[i+j]\xrightarrow{\sim}\mathbb S[i]\wedge\mathbb S[j]$ induced by suspension and the sphere unit, without interchanging the two factors. Indeed, separate exactness carries the suspension cofiber square to a suspension cofiber square, giving $A[r]\wedge B\simeq(A\wedge B)[r]$ and $A\wedge B[r]\simeq(A\wedge B)[r]$ for $r=1$; stability gives the inverse identifications for $r=-1$, and iteration gives every integer $r$. Apply these to the sphere unit to obtain $\rho_{i,j}$ for all integers $i,j$. The composite $\mu_{a,b}(\alpha\wedge\beta)\rho_{i,j}$ defines $z\in\pi_{i+j}F^{a+b}$. Smash and composition preserve homotopies, so its class depends only on $x,y$. Use this same ordered sphere convention to define multiplication on $\pi_*E$. [F1, F2, F3, F4, given, construct]

2.1 Apply $u_{a+b}$ to the representative of $z$. The compatibility in [F1] gives $u_{a+b}\mu_{a,b}(\alpha\wedge\beta)\rho_{i,j}\simeq\mu_E((u_a\alpha)\wedge(u_b\beta))\rho_{i,j}$. By the product convention in step 1.1, the right side represents $pq\in\pi_{i+j}E$, since $u_a\alpha$ and $u_b\beta$ represent $p$ and $q$. Thus $pq$ lies in the image of $\pi_{i+j}F^{a+b}\to\pi_{i+j}E$, as required. This conclusion holds for every pair $p,q$; no choice of lifts changes their product in $\pi_*E$. [F1, F2, F3, step 1.1] ∎


## Extending a nonnegative filtration to integer indices

[Open item](item-lem-author-98a750efd0cc-filtration-extension) · level 6


### Statement
Assume the Axiom of Choice and the compatible nested Grothendieck universes $U\in V\in W$, with $\omega\in U$, stipulated by the supplied stable spectra and filtration constructions. All indexing diagrams and objects obey those size bounds.

Let $F$ be a coherent multiplicative decreasing filtration indexed by $\mathbb N=\{0,1,2,\ldots\}$, with $F^0=E$ as commutative ring spectrum and with its maps to $F^0$ as multiplicative augmentation. It extends canonically to a multiplicative decreasing filtration indexed by $\mathbb Z$, by setting $\widetilde F^j=F^{\max(j,0)}$. Its stages and products in nonnegative degrees are the original ones, and every stage in nonpositive degree is $E$ with identity transition maps between such stages.

### Facts & Assumptions
**Given:** The specified coherent nonnegative multiplicative tower $F$.

**Goal:** Construct and justify the integer-indexed extension.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) specifies transition directions and augmentation; [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum) specifies the coherent finite-input product data, the category of operators encoding all their compatibilities, and the multiplicative augmentation.

[F2] For the nonnegative input, use the same indexed-product convention as in [F1], with $I_{\mathbb N}$ the full symmetric monoidal subcategory on nonnegative integers of the integer index category $I_{\mathbb Z}$. Thus $I_{\mathbb N}$ has an arrow $a\to b$ exactly when $a\geq b$, and tensor is addition with unit $0$. Its category of operators has objects finite lists of nonnegative integers. Over a pointed map $f:\langle n\rangle\to\langle m\rangle$, an arrow from $(a_1,\ldots,a_n)$ to $(b_1,\ldots,b_m)$ exists exactly when $\sum_{t\in f^{-1}(s)}a_t\geq b_s$ for each non-basepoint $s$, and is unique if it exists. Composition is substitution as in [F1]. The given coherent multiplicative tower is a map from the nerve of this category of operators to the spectra operad preserving inert arrows, equipped with the stated multiplicative augmentation to $E$.

[A1] Retain the classical foundations and compatible universe bounds of the supplied constructions, including the Axiom of Choice and $\omega\in U$ for fixed $U\in V\in W$. These are premises of the selected framework; the algebraic image and product arguments below assert no necessity of Choice for the corresponding abstract group facts. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Proof
1.1 Put $r(j)=\max(j,0)$. If $j\geq k$, then $r(j)\geq r(k)$, so precomposition of the original coherent diagram with $r:I_{\mathbb Z}\to I_{\mathbb N}$ gives $\widetilde F^j=F^{r(j)}$ and the transition $F^{r(j)}\to F^{r(k)}$, with all composition and identity data. For $j\leq0$ these are the constant stage $F^0=E$ and identity transitions. For every finite list $(j_1,\ldots,j_n)$, the sum $\sum_t r(j_t)$ is nonnegative and at least $\sum_t j_t$, so it is at least $r(\sum_t j_t)$. This includes the empty list because $r(0)=0$. Consequently, whenever $\sum_{t\in f^{-1}(s)}j_t\geq k_s$, one has $\sum_{t\in f^{-1}(s)}r(j_t)\geq r(k_s)$. [F1, F2, given, construct]

2.1 Define $R:I_{\mathbb Z}^{\otimes}\to I_{\mathbb N}^{\otimes}$ on lists by applying $r$ to each entry, and send each operator over $f$ to the unique operator over the same $f$ with those new source and target lists. Step 1.1 proves that it exists, including for empty fibers. Identities and composites are preserved: both candidate composites have the same source, target and underlying pointed map, for which the operator is unique. Inert operators select entries with identity identifications, and $R$ preserves them. Taking nerves and composing with the given operad map defining $F$ therefore supplies the full coherent multiplicative structure on $\widetilde F$. Its finite-input product is precisely the original product into $F^{\sum_t r(j_t)}$ followed by the transition to $F^{r(\sum_t j_t)}$; hence it is the proposed construction, including the empty-input unit. All permutation, substitution and higher compatibility data are inherited by this composition. Precomposition likewise carries the given multiplicative augmentation to the constant $E$ diagram to the required augmentation; its components are the maps to $F^0=E$. On nonnegative lists and operators $R$ is the identity, so the original transitions, products and all their coherences are recovered. Together with step 1.1 this proves every stated property of the canonical extension. [F1, F2, given, step 1.1, construct] ∎


## A perfect affine module sheaf admits a finite projective resolution

[Open item](item-lem-adjudicate-8da4ac7e2794-affine-perfect-module-resolution) · level 6


### Statement
Assume the Axiom of Choice and fix compatible Grothendieck universes containing $\omega$, the commutative unital ring $A$, the affine scheme $X=\operatorname{Spec}A$ and the module data, with larger universes for the supplied derived categories. Universe existence is a separate assumption. Let $M$ be an $A$-module and let $\widetilde M$ be its associated sheaf. If $\widetilde M[0]$ is perfect, then $M$ admits a finite projective resolution: an exact sequence $0\to P_d\to\cdots\to P_0\to M\to0$ with $d\geq0$ and each $P_i$ finitely generated projective. No noetherianity or regularity of $A$ is required.

Here $[0]$ places a module or sheaf in cochain degree zero. A cochain complex has maps $d^i:C^i\to C^{i+1}$ with $d^{i+1}d^i=0$ and cohomology $H^i(C)=\ker d^i/\operatorname{im}d^{i-1}$; bounded means zero outside a finite interval. Perfectness on $X$ means locally equivalent to a bounded complex of finite locally free sheaves, where finite locally free means locally a finite direct sum of copies of the structure sheaf.

### Facts & Assumptions
**Given:** The ring, module, perfect associated sheaf, AC and universe assumptions in the Statement.

**Goal:** Produce the stated finite projective resolution.

[A1] AC and the compatible universe closure convention are inherited by the affine derived equivalence. Universe existence and inclusion of $\omega$ are explicitly assumed. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[F1] Degreewise associated sheaf is a fully faithful derived equivalence on affine schemes and identifies the perfect objects with bounded complexes of finite projective modules. Thus the given perfect sheaf has a representative $\widetilde Q$ with $Q$ such a bounded complex, and this actual functor also takes $M[0]$ to $\widetilde M[0]$. [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence), [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring), [math:def-associated-sheaf-module-affine-scheme](https://alphabetamath.cc/item/def-associated-sheaf-module-affine-scheme)

[F2] Finite projective means finitely generated and having the lifting property through surjective module maps. A direct summand of a finite projective module is finite projective: restrict a lift from the ambient module to prove projectivity, and project a finite generating list to prove finite generation. [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module), [math:def-generated-cyclic-finitely-generated-and-free-modules](https://alphabetamath.cc/item/def-generated-cyclic-finitely-generated-and-free-modules)

[F3] Use the cochain convention in the Statement and the derived category obtained by inverting quasi-isomorphisms. Quasi-isomorphisms induce cohomology isomorphisms; consequently a zigzag of them preserves every cohomology module. Exact module sequences have image equal to kernel at each term. [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category), [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category), [math:def-exact-and-short-exact-sequences-of-modules](https://alphabetamath.cc/item/def-exact-and-short-exact-sequences-of-modules), [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring)

### Proof
1.1 By [F1] choose a bounded finite-projective complex $Q$ whose associated sheaf complex represents $\widetilde M[0]$. Full faithfulness reflects this equivalence to $Q\simeq M[0]$ in the module derived category. By [F3], $H^0(Q)\cong M$ and $H^i(Q)=0$ for $i\ne0$. If the greatest nonzero degree $N$ is positive, vanishing of $H^N(Q)$ says $d^{N-1}:Q^{N-1}\to Q^N$ is onto. Lift the identity of $Q^N$ through this surjection by [F2], obtaining a section $s$. The kernel $K$ is a direct summand: the maps $Q^{N-1}\to K\oplus Q^N$, $u\mapsto(u-sd^{N-1}u,d^{N-1}u)$, and $(v,w)\mapsto v+s(w)$ are inverse. Hence $K$ is finite projective. The preceding differential lands in $K$ because consecutive differentials compose to zero. Replace $Q^{N-1}$ by $K$ and discard $Q^N$; the removed summand is the two-term identity complex $Q^N\to Q^N$, so cohomology is unchanged. Repeat finitely many times to obtain a bounded finite-projective complex $R$ concentrated in degrees at most zero, still with only $H^0(R)\cong M$. If there were no positive terms, take $R=Q$. The zero complex is allowed. [A1, F1, F2, F3, given, construct]

2.1 Since $R^1=0$, the quotient map $R^0\to H^0(R)\cong M$ is onto with kernel $\operatorname{im}d^{-1}$. For each negative degree, vanishing cohomology gives $\ker d^i=\operatorname{im}d^{i-1}$. At the leftmost nonzero degree $-d<0$ the preceding term is zero, so its differential is injective. Thus, putting $P_i=R^{-i}$ and adding zero terms if needed, the augmented sequence $0\to P_d\to\cdots\to P_0\to M\to0$ is exact and finite, with finite projective terms. If $R$ is concentrated in degree zero this is the length-zero resolution; if $M=0$ the all-zero resolution is permitted. AC and the universe assumptions enter through [F1]; splitting each of the finitely many surjections uses only the projective lifting property. This proves the claim without additional ring hypotheses. [A1, F2, F3, step 1.1, construct] ∎


## Prime quotients of noetherian rings

[Open item](item-lem-author-14463ef2f4e5-noetherian-quotient) · level 7


### Statement
If $A$ is a noetherian ring and $\mathfrak p$ is prime, then $A/\mathfrak p$ is a noetherian domain and $\dim(A/\mathfrak p)\leq\dim A$. Here noetherian means that every ideal is finitely generated.

### Statement references
[math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)

[math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal)

[math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)

[math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)

[math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain)

[math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)

[math:def-generated-and-principal-ideals](https://alphabetamath.cc/item/def-generated-and-principal-ideals)

### Facts & Assumptions
**Given:** A noetherian commutative ring $A$ and a prime ideal $\mathfrak p$.

**Goal:** Establish the domain, noetherian and dimension assertions for the quotient.

[F1] A quotient has Krull dimension at most that of its ring. [lem-author-14463ef2f4e5-quotient-dimension](item-lem-author-14463ef2f4e5-quotient-dimension) For a nonzero commutative ring, Krull dimension is the supremum of lengths of strict chains of prime ideals. [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)

[F2] An ideal is an additive subgroup closed under multiplication by ring elements. The ideal $(a_1,\ldots,a_n)$ is the smallest ideal containing the listed elements; in a commutative ring its elements are precisely sums $\sum_{i=1}^n r_i a_i$, with the empty sum equal to $0$. An ideal is finitely generated if it equals $(a_1,\ldots,a_n)$ for some finite list. [math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal) [math:def-generated-and-principal-ideals](https://alphabetamath.cc/item/def-generated-and-principal-ideals) [math:thm-generated-ideal-description-in-a-commutative-ring](https://alphabetamath.cc/item/thm-generated-ideal-description-in-a-commutative-ring)

[F3] A prime ideal is proper and satisfies $ab\in\mathfrak p\Rightarrow a\in\mathfrak p$ or $b\in\mathfrak p$. A domain is a commutative ring with $1\ne0$ and no zero divisors. [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals) [math:def-zero-divisor-and-integral-domain](https://alphabetamath.cc/item/def-zero-divisor-and-integral-domain)

[F4] The quotient has coset multiplication $(a+\mathfrak p)(b+\mathfrak p)=ab+\mathfrak p$. The map $q:A\to A/\mathfrak p$, $q(a)=a+\mathfrak p$, is a surjective ring homomorphism with kernel $\mathfrak p$. [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring) [math:prop-canonical-quotient-ring-map](https://alphabetamath.cc/item/prop-canonical-quotient-ring-map)

[F5] For every ideal $J$ of $A/\mathfrak p$, the inverse image $q^{-1}(J)$ is an ideal of $A$ containing $\mathfrak p$, and $q(q^{-1}(J))=J$. [math:thm-correspondence-theorem-ideals](https://alphabetamath.cc/item/thm-correspondence-theorem-ideals)

### Proof
1.1 By [F3], $\mathfrak p$ is proper, so $1\notin\mathfrak p$ and [F4] gives $q(1)\ne q(0)$. If $q(a)q(b)=0$, then $ab\in\mathfrak p$ by [F4]; [F3] gives $a\in\mathfrak p$ or $b\in\mathfrak p$, hence $q(a)=0$ or $q(b)=0$. Commutativity descends from $A$ by the coset multiplication in [F4], so $A/\mathfrak p$ is a domain. Now let $J$ be any ideal of $A/\mathfrak p$. By [F5], $K=q^{-1}(J)$ is an ideal of $A$. Noetherianity gives $K=(a_1,\ldots,a_n)$ for some finite list. For $y\in J$, [F5] gives $x\in K$ with $y=q(x)$, and [F2] writes $x=\sum_{i=1}^n r_i a_i$. Thus $y=\sum_{i=1}^n q(r_i)q(a_i)$. Conversely, each $q(a_i)$ lies in $J$, and the ideal properties in [F2] put every such sum in $J$. Therefore $J=(q(a_1),\ldots,q(a_n))$, including the empty-list case, and $A/\mathfrak p$ is noetherian. [F2, F3, F4, F5, given, algebra]

2.1 Applying [F1] to $I=\mathfrak p$ gives the dimension inequality. [F1, given, step 1.1] ∎


## Finite type algebras over fields have bounded dimension

[Open item](item-lem-author-14463ef2f4e5-finite-type-dimension) · level 7


### Statement
Assume the Axiom of Choice. If a commutative $k$-algebra $A$ is generated by $n$ elements over a field $k$, then $A$ is noetherian and $\dim A\leq n$. An algebra is generated by those elements when the evaluation map from the polynomial ring in $n$ variables is surjective. Here $n\geq0$ is an integer, Krull dimension counts lengths of strict prime-ideal chains, and $\dim(0)=-1$ for the zero ring.

### Facts & Assumptions
**Given:** The Axiom of Choice, a field $k$, and a surjection $k[t_1,\ldots,t_n]\to A$.

**Goal:** Prove noetherianity and the dimension bound.

[F1] A finite type algebra over a noetherian ring is noetherian. [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)

[F2] Under Choice, adjoining one polynomial variable to a finite-dimensional noetherian ring increases its Krull dimension by one. [math:thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring](https://alphabetamath.cc/item/thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F3] Dimension does not increase under quotients. [lem-author-14463ef2f4e5-quotient-dimension](item-lem-author-14463ef2f4e5-quotient-dimension)

[F4] A field has $0\ne1$ and inverses for nonzero elements; a commutative $k$-algebra is a commutative unital ring with a unital structure map from $k$. A ring is noetherian when every ideal is finitely generated. Finite-variable polynomial rings are constructed by iterating the one-variable construction, starting at $k[t_1,\ldots,t_0]=k$. Evaluation agrees with the structure map on constants and sends $t_i$ to the specified generator $a_i$; generation by these elements means that this map is surjective. [math:def-field](https://alphabetamath.cc/item/def-field) [math:def-algebra-over-a-commutative-ring](https://alphabetamath.cc/item/def-algebra-over-a-commutative-ring) [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module) [math:def-multivariate-polynomial-ring-by-iteration](https://alphabetamath.cc/item/def-multivariate-polynomial-ring-by-iteration) [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)

[F5] For a ring homomorphism $f:R\to S$, its kernel is an ideal, the quotient $R/\ker f$ is a ring, and the induced map $R/\ker f\to\operatorname{im}f$ is a ring isomorphism. [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring) [math:thm-first-isomorphism-theorem-rings](https://alphabetamath.cc/item/thm-first-isomorphism-theorem-rings)

[F6] Prime ideals are proper ideals satisfying the product criterion. Krull dimension is the supremum of lengths of strict prime chains, with dimension $-1$ for the zero ring. [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals) [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)

### Proof
1.1 If an ideal of $k$ contains $x\ne0$, it contains $x^{-1}x=1$, hence is the whole field. Its only ideals are therefore $(0)$ and $k$, both finitely generated, so $k$ is noetherian. If $ab=0$ and $a\ne0$, multiplication by $a^{-1}$ gives $b=0$; thus $(0)$ is prime and is the only prime ideal of $k$. Hence $\dim k=0$ by [F6]. By the polynomial recursion in [F4], apply [F1] and [F2] successively: each next polynomial ring is a one-generated algebra over its predecessor, so remains noetherian, and has dimension one larger. Induction gives $\dim k[t_1,\ldots,t_n]=n$, including $n=0$; every application of [F2] has a noetherian ring of finite dimension and the assumed Choice. [F1, F2, F4, F6, given, algebra]

2.1 Put $P=k[t_1,\ldots,t_n]$ and let $f:P\to A$ be the given surjection. By [F5], $I=\ker f$ is an ideal and $f$ induces a ring isomorphism $\bar f:P/I\to A$. This isomorphism and its inverse carry ideals to ideals and preserve properness and the product criterion in [F6], so they give mutually inverse inclusion-preserving bijections of prime ideals. They therefore preserve the lengths of strict prime chains and Krull dimension; if either ring is zero, both are zero and have dimension $-1$. Consequently [F3] gives $\dim A=\dim(P/I)\leq\dim P=n$. Finally [F1] gives noetherianity of $A$, since $k$ is noetherian by step 1.1 and $A$ is a finite type $k$-algebra by [F4]. [F1, F3, F4, F5, F6, given, step 1.1] ∎


## Valuative dimension can be computed on an affine cover

[Open item](item-lem-author-14463ef2f4e5-affine-cover) · level 7


### Statement
If $X=\bigcup_{i\in I}U_i$ is an affine open cover with $U_i=\operatorname{Spec}A_i$, then $\dim_v X=\sup_i\dim_v A_i$, with empty supremum $-1$.

### Facts & Assumptions
**Given:** A scheme $X$ and an affine open cover as in the statement. Schemes, affine schemes and affine open subschemes use the restricted structure sheaf conventions of [math:def-scheme](https://alphabetamath.cc/item/def-scheme), [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) and [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme).

**Goal:** Compare the supremum over all affine opens with that over the given cover.

[F1] The scheme valuative dimension is the supremum over all affine opens, and the ring valuative dimension is the supremum over prime quotients and their valuation overrings. For a valuation overring $V$ in a fraction field $K$, every nonzero $z\in K$ has $z\in V$ or $z^{-1}\in V$. Valuative dimension is unchanged by ring isomorphisms, by the fraction-field transport argument in the definition's Justification. [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)

[F2] A valuation overring $V$ has a unique maximal ideal $\mathfrak m$. [lem-author-14463ef2f4e5-valuation-center](item-lem-author-14463ef2f4e5-valuation-center) A unit means an element $u\in V$ with $uv=vu=1$ for some $v\in V$; a nonunit is an element without such an inverse. The identification of $\mathfrak m$ with the nonunits, and its primality, are proved directly below from the valuation property in [F1].

[F3] An ideal is an additive subgroup closed under multiplication by ring elements. [math:def-left-right-and-two-sided-ideal](https://alphabetamath.cc/item/def-left-right-and-two-sided-ideal) A prime ideal is proper and satisfies the product criterion; prime quotients are domains. Quotients use cosets with their induced ring operations. [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals) [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring) [math:thm-quotient-is-domain-iff-ideal-prime](https://alphabetamath.cc/item/thm-quotient-is-domain-iff-ideal-prime)

[F4] For a domain $D$, the field $\operatorname{Frac}(D)$ consists of fractions $a/b$ with $b\ne0$, and $d\mapsto d/1$ embeds $D$ into it. A subring of this field is a domain. [math:def-field-of-fractions](https://alphabetamath.cc/item/def-field-of-fractions) [math:thm-field-of-fractions-is-a-field-and-the-domain-embeds](https://alphabetamath.cc/item/thm-field-of-fractions-is-a-field-and-the-domain-embeds)

[F5] Ring homomorphisms preserve addition, multiplication and the identity. [math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism) The points of $\operatorname{Spec}R$ are prime ideals, and its basic opens are $D(s)=\{\mathfrak q:s\notin\mathfrak q\}$. A ring map induces a continuous spectrum morphism by contraction, and every morphism between affine schemes is uniquely obtained from its map on coordinate rings. [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum) [math:def-morphism-affine-schemes-from-ring-map](https://alphabetamath.cc/item/def-morphism-affine-schemes-from-ring-map) [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)

[F6] A scheme morphism has local stalk maps and section maps compatible with restrictions. For an open $W$ of an open subspace $U\subseteq X$, one has $(\mathcal O_X|_U)(W)=\mathcal O_X(W)$, and restriction to $U$ leaves the stalks at its points unchanged. Indeed a stalk consists of germs $(W,s)$, with two representatives equal when their sections agree on a smaller neighbourhood; intersecting any neighbourhood with $U$ gives a representative inside $U$, and the same intersection preserves germ equality. [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes) [math:def-morphism-ringed-spaces](https://alphabetamath.cc/item/def-morphism-ringed-spaces) [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace) [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)

[F7] The residue field at a point $y$ is the quotient of its local ring by its maximal ideal. In an affine chart where $y$ corresponds to $\mathfrak p\subset A$, it is canonically $\operatorname{Frac}(A/\mathfrak p)$. These identifications use the stalk of the restricted structure sheaf, so they agree on overlapping charts. [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)

[F8] A sheaf satisfies locality and gluing for every open cover, including the empty cover of the empty set. [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space) Hence its sections over the empty set form a singleton: gluing gives a section of the empty matching family and locality makes it unique. For a sheaf of rings this is the zero ring.

### Proof
1.1 The supremum over the cover is at most $\dim_v X$ by [F1]. Conversely, take an arbitrary affine open $U=\operatorname{Spec}A$, a prime $\mathfrak p\subset A$ and a valuation overring $V$ of $D=A/\mathfrak p$ in $K=\operatorname{Frac}(D)$. Since $D\subseteq V\subseteq K$, every fraction of $V$ lies in $K$, while every element of $K$ is a fraction of elements of $D\subseteq V$; hence $\operatorname{Frac}(V)=K$. By [F5], $A\to D\hookrightarrow V$ induces a morphism $f:\operatorname{Spec}V\to U\subseteq X$. Let $\mathfrak m$ be the unique maximal ideal supplied by [F2]. We identify it with the nonunits directly. Let $N$ be the set of nonunits of $V$. If $a\in N$ and $v\in V$, an inverse of $va$ would give an inverse of $a$, so $va\in N$; the same argument gives $-a\in N$. For nonzero $a,b\in N$, the valuation property in [F1] gives $a/b\in V$ or $b/a\in V$. In the first case $a+b=b(1+a/b)\in N$ by the product observation, and the second case is symmetric. When either summand is zero the conclusion is immediate. Thus [F3] makes $N$ an ideal, proper because $0\in N$ and $1\notin N$. A proper ideal contains no unit, since an inverse would force it to contain $1$; hence $\mathfrak m\subseteq N$. Maximality now gives $N=\mathfrak m$. Elements outside $N$ are units, and the product of units has the product of their inverses as an inverse; therefore $N$ is prime by [F3]. In particular $\mathfrak m$ is a point of $\operatorname{Spec}V$. Let $x=f(\mathfrak m)$ and choose $U_i=\operatorname{Spec}B$ containing $x$. The open $f^{-1}(U_i)$ contains $\mathfrak m$, so [F5] gives a basic open $D(s)$ containing $\mathfrak m$ inside it. By the identification $N=\mathfrak m$ just proved, $s\notin\mathfrak m$ is a unit; a proper prime ideal contains no unit, so $D(s)=\operatorname{Spec}V$. Thus $f$ has image in $U_i$. To factor $f$ as a scheme morphism $g:\operatorname{Spec}V\to U_i$, use its same continuous map with codomain $U_i$. For every open $W\subseteq U_i$, which is also open in $X$, use the section map $f^\sharp_W:\mathcal O_X(W)\to\mathcal O_{\operatorname{Spec}V}(f^{-1}W)$. By [F6] these are precisely maps from the restricted structure sheaf, they commute with restrictions, and their stalk maps are the original local maps. They therefore define $g$, whose composite with the inclusion is $f$. [F1, F2, F3, F4, F5, F6, given, choose, construct]

2.1 By [F5], $g$ corresponds to a unital homomorphism $\varphi:B\to V$. Its kernel $\mathfrak r=\{b\in B:\varphi(b)=0\}$ is an ideal: it is closed under differences and multiplication by elements of $B$ because $\varphi$ preserves addition and multiplication. It is proper since $\varphi(1)=1\ne0$, and if a product maps to zero, one of its factors does because $V$ is a domain; thus $\mathfrak r$ is prime by [F3]. The induced map $B/\mathfrak r\to V$, $b+\mathfrak r\mapsto\varphi(b)$, is well-defined since equal cosets differ by a kernel element, is a unital homomorphism by the quotient operations, and is injective since a coset maps to zero precisely when it is the zero coset. The point $(0)$ of $\operatorname{Spec}V$ maps by contraction to $\mathfrak p$ in $U$ and to $\mathfrak r$ in $U_i$, representing the same point $y\in X$. The local stalk map at $(0)$ induces a map $\kappa_X(y)\to\kappa_{\operatorname{Spec}V}((0))=\operatorname{Frac}(V)=K$: it descends to the quotients because it carries the maximal ideal into the maximal ideal. In the $A$-chart, [F7] identifies this map with $\operatorname{Frac}(A/\mathfrak p)\to K$, sending each fraction to that same fraction, hence with the identity of $K$. In the $B$-chart the same stalk map identifies it with the fraction extension of $B/\mathfrak r\hookrightarrow V\subseteq K$. Thus [F7] canonically identifies $\operatorname{Frac}(B/\mathfrak r)$ with $K$, compatibly with that embedding, rather than merely giving an abstract field isomorphism. Transporting $V$ along its inverse gives a subring of $\operatorname{Frac}(B/\mathfrak r)$ containing $B/\mathfrak r$; the condition that $z$ or $z^{-1}$ belongs to it is preserved, as are prime-chain lengths under the ring isomorphism. It is therefore a valuation overring of $B/\mathfrak r$ with dimension $\dim V$. Consequently $\dim V\leq\dim_v B\leq\sup_i\dim_v A_i$. Taking the suprema over these valuation overrings, prime quotients and affine opens in [F1] proves the reverse inequality. If $X$ is empty, every affine open and cover member is empty. Its coordinate ring is its ring of global sections by the affine-scheme convention in the Given; [F8] makes that ring the zero ring. Thus [F1] makes both sides $-1$, also when the indexing set is empty. [F1, F3, F4, F5, F6, F7, F8, step 1.1, algebra] ∎


## One coherent K-flat family and its supplied perfect fibers

[Open item](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison) · level 7


### Statement
Assume AC and use schemes and sheaves in a fixed universe, with larger universes for their categories. There is one coherent diagram

$$\widehat{\operatorname{Perf}}^{\otimes}:\operatorname{Sch}_{qcqs}^{op}\longrightarrow\operatorname{CAlg}(\operatorname{Cat}_{\infty})$$

whose fibers are stable, whose tensor is exact separately in each variable, whose transition functors are exact symmetric monoidal, and whose underlying categories are the perfect full subcategories of K-flat sheaf-complex localizations. Pullbacks are induced by actual degreewise sheaf pullback and products are total tensor. For each X its fiber has an actual exact equivalence to the supplied full sheaf-derived Perf(X), induced by inclusion into all $O_X$-complexes. This identifies the specified fiber enhancement. It does not claim a natural equivalence to a previously chosen diagram of pullbacks on the supplied fibers: that supplier specifies no such diagram. The single common family constructed here supplies the missing coherent diagram.

### Facts & Assumptions
**Given:** AC; all qcqs schemes in a fixed universe; F(X), the ordinary category of K-flat $O_X$-cochain complexes; $W_X$, its quasi-isomorphisms.

**Goal:** Construct the family before identifying its fibers, and verify every family-localization hypothesis.

[A1] Retain [AC](https://alphabetamath.cc/item/def-axiom-of-choice) for the imported K-flat resolutions and choices of representatives, cocartesian lifts and localization presentations in [F1], [F2] and [F4]. All choices range over sets in the chosen larger universes. Use the nested Grothendieck-universe convention in the Definition of [F2]; their existence is a separate standing size assumption, not a consequence of AC.

[F1] [thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input](item-thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input) supplies K-flat resolutions, closure under shifts/cones/tensor, and preservation of K-flat objects and their quasi-isomorphisms by degreewise pullback.

[F2] [thm-author-c5bc2838d897-kcoherent-enhanced-localization-input](item-thm-author-c5bc2838d897-kcoherent-enhanced-localization-input) imports Hinich's functorial/family localization, its marked-cocartesian hypotheses and symmetric monoidal universal property; it also imports the nerve/opfibration, chain-interval and stable-Verdier comparisons. Its Definition fixes the universe, ordinary nerve, infinity-category, marked localization, cocartesian fibration, stable/exact and finite-pointed-set conventions used here. Write $\operatorname{CAlg}(\operatorname{Cat}_{\infty})$ for symmetric monoidal infinity-categories and strong symmetric monoidal functors, modeled by the Segal/unit families and transports of [F5].

[F3] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) identifies the supplied 𝒟(X) with localization of all sheaf complexes. [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) defines its full perfect fibers but chooses no scheme-indexed pullback or tensor diagram.

[F4] [lem-author-c5bc2838d897-kflat-addendum-localization-equivalence](item-lem-author-c5bc2838d897-kflat-addendum-localization-equivalence) proves the actual inclusion-induced K-flat fiber equivalence, using the precise Verdier localization criterion and explicit fullness/faithfulness.

[F5] [lem-author-c5bc2838d897-monoidal-transport-product-family](item-lem-author-c5bc2838d897-monoidal-transport-product-family) converts an actual product-base cocartesian family with pointwise Segal/unit equivalences into coherent strong symmetric monoidal transports by straightening and currying.

[F6] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) defines quasi-compact and quasi-separated schemes. Here $\operatorname{Sch}_{qcqs}$ has those schemes in the fixed universe as objects and all scheme morphisms between them as arrows, as in the size and scheme convention of [F2].

### Proof
1.1 Construct an ordinary Grothendieck opfibration E→B₀, where B₀=Sch_qcqs^op×Fin_*. Its objects over (X,⟨n⟩) are n-tuples of objects of F(X). For a base map (Y,⟨n⟩)→(X,⟨m⟩) given by f:X→Y and α:⟨n⟩→⟨m⟩, transport sends ($P_i$) to (⊗_{α(i)=j}f*$P_i$)_{1≤j≤m}, with the empty tensor $O_X$. A morphism over this base map is a tuple of chain maps from that transported tuple to the target tuple. Compose using composition of chain maps, canonical pullback-composition isomorphisms and the signed tensor associativity/symmetry. These comparison isomorphisms form an ordinary pseudofunctor: inverse-image composition and relative tensor associativity follow from their universal properties, and all paths give the same maps on elementary local tensors; the Koszul sign rule supplies the same permutation sign. Hence their unit, pentagon, symmetry and interchange equations hold before localization. The Grothendieck construction therefore is an ordinary category with associative composition, and the displayed identity maps from each transported tuple are its opcartesian arrows. By [F2], N(E)→N(B₀) is a cocartesian fibration. This encodes the entire scheme/tensor diagram, rather than isolated functors. [A1, F1, F2, F6, construct]

2.1 Mark only equivalences in the base. In each fiber mark componentwise quasi-isomorphisms, and in E mark a map over a base equivalence exactly when its vertical component after an opcartesian lift is componentwise a quasi-isomorphism. To justify the saturation requirement, first view the same actual transport formulas as a pseudofunctor of pairs (F(X)^n,$W_X^n$). The fiber markings are saturated, since quasi-isomorphisms are the inverse images of isomorphisms under cohomology; every transport preserves them. The Grothendieck construction for the wide subcategories $W_X^n$ and its inclusion into E give a natural diagram of these saturated pairs, hence a functor B→Cat_∞^+. Every base equivalence is carried to an equivalence of pairs. Hinich Lemma 2.1.6, with Remark 2.1.2, therefore equips E→B with the saturated total marking just described. This invokes the marked-family classification, rather than trying to infer saturation from two-out-of-three alone. The four hypotheses of Hinich Definition 2.1.1 now hold. The underlying map is cocartesian by step 1.1; lifts of marked base edges have identity vertical components; every transport preserves markings because f* preserves K-flat quasi-isomorphisms and tensoring K-flat complexes preserves quasi-isomorphisms; and transports over base equivalences are relative equivalences, hence equivalences after localization. For active Fin_* maps the same tensor argument verifies the additional hypothesis of Hinich Proposition 3.2.2; inert transports merely select coordinates. No morphism over a noninvertible scheme or Fin_* map is marked. [F1, F2, step 1.1]

3.1 Apply Hinich Proposition 2.1.4 to the ONE marked total fibration over Sch_qcqs^op×Fin_*. Only base equivalences are inverted, so, after the equivalent cocartesian presentation of Hinich Definition 2.1.3 if needed, its localization q remains cocartesian over B×N(Fin_*), $B=N(\mathrm{Sch}_{\mathrm{qcqs}}^{\mathrm{op}})$. The theorem's proof §2.2.2–2.2.6 identifies it with the unstraightening of L∘F⁺; the localization map is a natural map of diagrams, hence preserves transports. On restriction to each X, Hinich Proposition 3.2.2 applies because active tensor transports preserve the markings as checked in step 2.1. Thus its canonical inert Segal maps are equivalences and the zeroth fiber is terminal. Apply [lem-author-c5bc2838d897-monoidal-transport-product-family](item-lem-author-c5bc2838d897-monoidal-transport-product-family): straightening over the PRODUCT and currying yield B→Fun(N(Fin_*),Cat∞), and its natural transformations unstraighten to maps preserving every Fin_*-cocartesian arrow. Therefore all scheme transports are strong symmetric monoidal, including their unit/tensor comparison equivalences and all higher compositions. This conclusion is derived from the single total family, not from separately given pointwise functors. [F2, F5, step 1.1, step 2.1]

4.1 Put $C_X$=L(F(X),$W_X$). Actual inclusion of K-flat into all sheaf complexes induces $I_X$:$C_X$→𝒟(X). The focused lemma [lem-author-c5bc2838d897-kflat-addendum-localization-equivalence](item-lem-author-c5bc2838d897-kflat-addendum-localization-equivalence) proves that this is an exact equivalence. Its proof verifies all hypotheses of Stacks Lemma 13.5.8 (0GSL), explicitly proves fullness and faithfulness by K-flat replacements of roofs and their common refinements, and upgrades the same exact inclusion-induced functor by stable mapping spaces. It assumes no K-projectivity. This supplies exactly the fiber comparison with the supplier's specified localization; the coherent scheme/tensor diagram remains the one constructed in steps 1.1 through 3.1. [F4, step 3.1]

5.1 Inside each $C_X$ take the full subcategory on objects whose $I_X$-image is locally a bounded finite locally free complex. Tensor and every transport preserve this condition: locally the tensor of two such representatives is bounded finite locally free, and pullback of such a representative is again so, computed without resolving further because bounded flat complexes are K-flat. These conditions are invariant under equivalence and preserved by shifts and cones. Hence they define a full cocartesian subfamily of the already constructed family, with exact transports and tensor exact in each variable. Its straightening is the asserted diagram widehat Perf^⊗. Each $I_X$ restricts to the actual exact equivalence widehat Perf(X)≃Perf(X). This common model is an enhancement realization of precisely the supplied fibers, and supplies their previously unspecified functorial tensor/pullback interface. No independent scheme-indexed diagram on those fibers has been invented or compared. [F1, F2, F3, step 3.1, step 4.1] ∎


## External qcqs classical perfect generator

[Open item](item-thm-author-c5bc2838d897-kcoherent-qcqs-classical-generator-input) · level 7


### Statement
Assume AC and let X be a quasi-compact quasi-separated scheme. In the ordinary perfect subcategory of D($O_X$) there is a perfect object P such that every perfect object is obtained from P by finitely iterating integer shifts, finite sums, cones and direct summands. This is the classical generator statement of Stacks Remark 36.17.2; its proof combines the perfect generator of $D_{\mathrm{QCoh}}$ with compact=perfect and the compact-generation proposition.

### Source contract
**Given:** qcqs X and AC; perfection is the supplied sheaf-derived local condition [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes).

**Goal:** Import one substantial scheme theorem needed only to enumerate perfect objects.

[F1] Stacks Remark 36.17.2, Proposition 36.17.1, Theorem 36.15.3 and Proposition 13.37.6 give the stated classical generator.

### External input
Import [F1]. The proof is not reconstructed. Its use below establishes essential smallness through finite constructions and small Hom sets; it supplies no coherent product, enhanced equivalence, or scheme localization theorem.


## Affine perfect triangle classes and bundle Euler classes

[Open item](item-lem-author-3a003d7b5208-affine-triangle-euler) · level 7


### Statement
Assume AC and suitable universes. Let $A$ be a commutative unital ring and $X=\operatorname{Spec}A$. The triangle Grothendieck group of the homotopy category of $\operatorname{Perf}(X)$ is isomorphic to the vector-bundle Grothendieck group of $X$. Under this isomorphism, the class of the associated sheaf complex of a bounded finite-projective complex $P$ maps to $\sum_n(-1)^n[\widetilde{P^n}]$, and the class of a degree-zero bundle complex $E[0]$ maps to $[E]$.

Here $\operatorname{Perf}(X)$ is the full stable derived subcategory of locally perfect complexes. The triangle group uses one additive relation for each distinguished triangle; the vector-bundle group uses short exact sequence relations. A bounded complex has only finitely many nonzero terms. No Noetherian or regularity hypothesis is imposed.

### Statement references

[def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)

[lem-author-3a003d7b5208-affine-bundle-split-group](item-lem-author-3a003d7b5208-affine-bundle-split-group)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-associated-sheaf-module-affine-scheme](https://alphabetamath.cc/item/def-associated-sheaf-module-affine-scheme)

### Facts & Assumptions
**Given:** AC, suitable universes, $A$ and $X$ as stated. AC carries the supplied enhanced affine and bundle comparisons in [F1] and [F3]; the group-presentation argument makes no additional choice.

**Goal:** Compose the affine derived equivalence with the Euler and bundle comparisons.

[F1] Degreewise associated sheaf gives an exact equivalence $\operatorname{Perf}(A)\simeq\operatorname{Perf}(X)$; the former consists of objects represented by bounded finite-projective $A$-complexes. [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)

[F2] Degree-zero inclusion induces an isomorphism from the split group of finite projective $A$-modules to the triangle group of $\operatorname{Perf}(A)$. Its inverse sends $P$ to $\sum_n(-1)^n[P^n]$. This holds for every unital associative ring; its ring perfect category is essentially small, meaning that a set of objects represents all isomorphism classes. [math:thm-perfect-complex-k-zero-agrees-with-projective-k-zero](https://alphabetamath.cc/item/thm-perfect-complex-k-zero-agrees-with-projective-k-zero)

[F3] Associated sheaf identifies the finite-projective split group with the vector-bundle group. [lem-author-3a003d7b5208-affine-bundle-split-group](item-lem-author-3a003d7b5208-affine-bundle-split-group)

[F4] An exact equivalence of essentially small triangulated categories induces an isomorphism on triangle groups. [lem-author-3a003d7b5208-exact-equivalence-k-zero](item-lem-author-3a003d7b5208-exact-equivalence-k-zero)

[F5] The affine scheme $X=\operatorname{Spec}A$ includes its structure sheaf $\mathcal O_X$. The associated-sheaf construction sends an $A$-module $M$ to $\widetilde M$, functorially in module maps. Applying it degreewise sends a cochain complex and its differential to the associated sheaf complex. [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) [math:def-associated-sheaf-module-affine-scheme](https://alphabetamath.cc/item/def-associated-sheaf-module-affine-scheme)

### Proof
1.1 The exact enhanced equivalence in [F1] gives an exact equivalence of homotopy triangulated categories: it preserves the cofiber sequences whose images are the distinguished triangles. The ring perfect category is essentially small by [F2], and the images of a set of its representatives under [F1] represent all scheme-side isomorphism classes. Thus both triangle groups satisfy the size hypothesis of [F4]. By [F1] and [F4], associated sheaf induces an isomorphism of the triangle groups of $\operatorname{Perf}(A)$ and $\operatorname{Perf}(X)$. Invert it, compose with the inverse of the degree-zero isomorphism in [F2], and then with [F3]. This constructs the asserted isomorphism. [F1, F2, F3, F4, construct]

2.1 The inverse affine equivalence takes the associated sheaf complex of $P$ to $P$. Its Euler class under [F2] is $\sum_n(-1)^n[P^n]$, and [F3] sends each term to $[\widetilde{P^n}]$, proving the formula. [F1, F2, F3, F5, step 1.1]

3.1 Every bundle $E$ is isomorphic to $\widetilde P$ for a finite projective $P$ by [F3]. Apply step 2.1 with $P$ concentrated in degree zero: $[E[0]]$ maps to $[E]$. This is independent of the representative because step 1.1 is a well-defined group isomorphism. [F3, step 1.1, step 2.1] ∎

### Source notes
The current online Stacks tag 0AFY, Lemma 15.121.1, has a missing exponent in the first sum of its acyclic-complex display: the intended term is $(-1)^n[M^n]$. For the identity complex $\mathbb Z\to\mathbb Z$ in degrees zero and one, the literal unweighted negative sum is $-2[\mathbb Z]$ rather than zero. This localized display typo does not refute the stated conclusion of Lemma 15.121.1, Lemma 15.121.2 or [F2], whose supplied local proof uses the alternating Euler class. This affine result does not assert global vector-bundle representation of perfect classes on arbitrary qcqs schemes.


## Degeneration of the spectral sequence of a split tower

[Open item](item-lem-author-9f61e4df2141-split-couple-degeneration) · level 7


### Statement
Under the hypotheses of [lem-author-9f61e4df2141-split-tower-boundaries](item-lem-author-9f61e4df2141-split-tower-boundaries), the tower spectral sequence of [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface) has zero differentials on every page $E_s$ for $s\geq2$. This assertion alone does not assert convergence or resolve extensions.

### Facts & Assumptions
**Given:** A tower with the specified equivalence to a direct-sum tail tower, with the foundational and size conventions of [F2] under [A1].

**Goal:** Show that all differentials in its tower spectral sequence vanish.

[F1] [lem-author-9f61e4df2141-split-tower-boundaries](item-lem-author-9f61e4df2141-split-tower-boundaries) makes every stage connecting homomorphism zero.

[F2] [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface) constructs the initial exact couple from stage long exact sequences, with the stage connecting homomorphisms as its map $k_1$. Its homological page $r\geq1$ is reindexed as cohomological page $s=r+1$.

[F3] [math:def-derived-exact-couple](https://alphabetamath.cc/item/def-derived-exact-couple) supplies the differential $d_r=j_rk_r$ and the well-defined derived maps for a page-$r$ exact couple $(D_r,E_r,i_r,j_r,k_r)$. Componentwise, $D_{r+1}=\operatorname{im}(i_r)$ and $E_{r+1}=H(E_r,d_r)$, and for a $d_r$-cycle representative $e$ the connecting map is $k_{r+1}([e])=k_r(e)$, regarded as an element of $\operatorname{im}(i_r)$. The image here is a subgroup of the former stage group, not the target of a projection from that group.

[A1] Retain the Axiom of Choice, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), in the ZFC and fixed size conventions required by [F2]. It is inherited when invoking that tower construction and its spectral foundations; the zero-map calculation and induction below require no additional choices of representatives or preimages.

### Proof
1.1 Invoke [F2] under [A1] and write $(D_1,E_1,i_1,j_1,k_1)$ for the initial tower exact couple. The map $k_1$ is zero in every bidegree by [F1], since its components are the stage connecting homomorphisms. Consequently $d_1=j_1k_1=0$ by [F3]. [A1, F1, F2, F3, given]

2.1 Suppose $k_r=0$ for a derived couple at page $r\geq1$. For every $d_r$-cycle representative $e$, [F3] gives $k_{r+1}([e])=k_r(e)=0$ in the subgroup $D_{r+1}=\operatorname{im}(i_r)$; hence $k_{r+1}=0$ and $d_{r+1}=j_{r+1}k_{r+1}=0$. Starting with step 1.1, induction gives zero connecting maps and differentials on every homological page $r\geq1$. The reindexing $s=r+1$ of [F2] gives the asserted zero differentials on every page $E_s$ for $s\geq2$. No convergence or extension assertion is used. [F2, F3, step 1.1] ∎


## External extension and morphism input for perfect complexes

[Open item](item-thm-author-50b5133c29cc-klocal-tt-extension-input) · level 7

### Statement
Let $X$ be qcqs and $j:U\hookrightarrow X$ a quasi-compact open. In the ordinary sheaf-derived perfect categories:

(a) For $E,F\in D_{\mathrm{perf}}(\mathcal O_X)$ and $b:j^*E\to j^*F$, there exist a perfect $Q$ and maps $c:Q\to E$, $a:Q\to F$ with $j^*c$ invertible and $b\,j^*c=j^*a$.

(b) If $a,b:E\to F$ have the same restriction, there are a perfect $Q$ and $c:Q\to E$ with $j^*c$ invertible and $ac=bc$.

(c) A perfect object on $U$ extends to $X$ whenever its Euler class lies in the image of restriction on the classical perfect Euler groups. In particular $F\oplus F[1]$ extends for every perfect $F$ on $U$.

The Euler group here is the classical perfect-complex Grothendieck group, with $[B]=[A]+[C]$ for triangles and $[F[1]]=-[F]$. This is a source-side extension criterion, not an identification with $\pi_0$ of the K spectrum defined in this run. Verdier quotient by a full thick triangulated subcategory is localization at maps with cone in it.


### Statement references

[def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-thick-subcategory](https://alphabetamath.cc/item/def-thick-subcategory)

[math:def-localization-of-a-category-at-a-class-of-morphisms](https://alphabetamath.cc/item/def-localization-of-a-category-at-a-class-of-morphisms)

### Source contract
**Given:** qcqs $X$, quasi-compact open $U$, and ordinary derived categories of sheaf complexes with locally bounded finite locally free representatives.

Here qcqs means quasi-compact and quasi-separated; quasi-compactness of the open is quasi-compactness of the open subscheme $U$. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

Use the foundational choice and universe conventions inherited from [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes); no independent local choice argument is asserted.

The ordinary perfect category, its shifts, triangles and restriction are those of [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes). An extension of $F$ means a perfect $E$ on $X$ together with an isomorphism $j^*E\simeq F$ in the ordinary derived category.

The classical Euler group is the abelian group on isomorphism classes of perfect objects, modulo the displayed triangle relations; restriction acts by $[E]\mapsto[j^*E]$. The Euler relations in [F2] are imported for this source-side group.

A full thick triangulated subcategory has the inherited triangulated structure and is closed under direct summands. [math:def-thick-subcategory](https://alphabetamath.cc/item/def-thick-subcategory) supplies this formulation. [math:def-localization-of-a-category-at-a-class-of-morphisms](https://alphabetamath.cc/item/def-localization-of-a-category-at-a-class-of-morphisms) supplies the meaning of localization; [F2] supplies the cone criterion and the multiplicative-system assertion, rather than a local construction of them.

**Goal:** Import exactly the established extension/roof inputs needed before applying enhanced localization.

[F1] TT Propositions 5.2.2(a), 5.2.3(a), 5.2.4(a) supply (a)–(c), under the hypotheses of 5.1 with its auxiliary $Z=X$; 5.6.3 removes the temporary ample-family/noetherian hypotheses in their proof.

[F2] TT 1.5.6–1.5.7 give the Euler relations, so $[F\oplus F[1]]=0$ is in the image of any restriction map. Stacks Lemma 13.6.6 and Definition 13.6.7 give the quotient convention.

### External input
Import [F1] and [F2] with the exact references and reading limits in the metadata. Only their perfect-complex and ordinary morphism assertions are used. No TT nonconnective spectrum, model comparison, or claim of a reconstructed extension theorem is included.


## Elmanto–Morrow motivic complex input

[Open item](item-lem-author-b747b28c359f-elmanto-morrow-complexes) · level 7


### Statement
Assume the Axiom of Choice. Fix Grothendieck universes $U\in V\in W$ with $\omega\in U$, containing the fields and scheme data under consideration. Existence of these universes is a size assumption. For a field $B\in U$, let $\mathcal C_B$ be the category of all qcqs $B$-schemes with data in $U$, and all $B$-morphisms; it is regarded as $V$-small. Here qcqs means quasi-compact and quasi-separated. For $B=k$ this is the size-bounded ambient category $\mathrm{Sch}_k$ of the article conventions; no finite-type restriction is imposed on this input.

Write $\mathcal D_\infty(\mathbb Z)$ for the infinity-localization of unbounded cochain complexes of $V$-small abelian groups at quasi-isomorphisms, considered in $W$. A quasi-isomorphism induces an isomorphism on every cohomology group. The supplied stable presentable enhancement retains mapping spaces and coherent higher compositions; its homotopy category, obtained by taking components of mapping spaces, is the ordinary derived category $D(\mathbb Z)$. A coherent complex-valued presheaf $P$ is an infinity-functor $N(\mathcal C_B)^{\mathrm{op}}\to\mathcal D_\infty(\mathbb Z)$, where the nerve $N(\mathcal C_B)$ has as its $n$-simplices strings of $n$ composable arrows, with faces composing or deleting arrows and degeneracies inserting identities. All limits and colimits of values below are in this enhancement: limits are terminal coherent cones, and colimits are initial coherent cocones. For example, a cone with vertex $L$ is limiting exactly when $\operatorname{Map}(A,L)\simeq\lim_i\operatorname{Map}(A,E_i)$ naturally for every test object $A$.

For a covering sieve $R$ on $X$ in the Nisnevich topology of $\mathcal C_B$, regard $R$ as the category of arrows $T\to X$ in that sieve, with commuting triangles as morphisms. Nisnevich families are etale families with a residue-field-preserving lift of every point; their sieves generate this topology. The **derived Nisnevich sheaf condition** is that restriction induces an equivalence
$$P(X)\longrightarrow\lim_{(T\to X)\in R^{\mathrm{op}}}P(T)$$
for every such $R$. The empty sieve on the empty scheme is included, giving $P(\varnothing)\simeq0$. This is sheaf descent; no additional hyperdescent assertion is made.

The presheaf $P$ is **finitary** if, for every $U$-small cofiltered category $J$ and inverse diagram $X_\bullet:J\to\mathcal C_B$ with affine transition morphisms, the canonical map
$$\operatorname*{colim}_{j\in J^{\mathrm{op}}}P(X_j)\longrightarrow P\!\left(\lim_{j\in J}X_j\right)$$
is an equivalence. Cofiltered means that $J^{\mathrm{op}}$ is filtered. Affine means that the inverse image of each affine open of the target is affine. The scheme limit is characterized by its compatible projection maps; it exists and is qcqs for these diagrams. Those projections induce the displayed map. These conditions specify both the diagrams and the comparison, rather than ordinary limits in the homotopy category.

Let $F$ be a prime field, $\mathbb Q$ or $\mathbb F_p$ for a prime $p$. For every integer $j\geq0$, Elmanto and Morrow supply a finitary derived Nisnevich sheaf $M_{j,F}=\mathbb Z(j)_{\mathrm{mot}}$ on $\mathcal C_F$. For any field $k$ with prime subfield identified with $F$, let $u:\mathcal C_k\to\mathcal C_F$ forget the $k$-structure. Then $M_{j,F}\circ u^{\mathrm{op}}$ is the corresponding coherent complex-valued functor on $\mathrm{Sch}_k$, and is again a finitary derived Nisnevich sheaf. Its values in the homotopy category are the same complexes in $D(\mathbb Z)$ as before restriction.

### Statement references
[def-article-conventions](item-def-article-conventions)

[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)

[thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-filtered-category-and-filtered-colimit](https://alphabetamath.cc/item/def-filtered-category-and-filtered-colimit)

[math:def-affine-morphism-schemes](https://alphabetamath.cc/item/def-affine-morphism-schemes)

[math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)

### External input
Reference 0 imports the existence, functoriality, finitariness and Nisnevich sheafhood of the prime-field motivic complexes from Elmanto–Morrow, Theorem 1.1, with the enhanced target convention of Section 2.1. Their construction and proof are not reconstructed. Reference 1 supplies coherent limit conventions, existence of small limits in a presentable infinity-category, and the space-valued covering-sieve sheaf convention; the displayed enhanced sheaf condition fixes its meaning here. Reference 2 supplies the definition of finitary. References 3, 4 and 5 supply, respectively, ordinary directed replacement for cofiltered limits, affine-transition scheme-limit existence, and the qcqs limit conclusion. Only these premises, with their recorded hypotheses and reading limits, are imported. The restriction argument below is locally authored; the existence theorem remains an imported premise.

### Facts & Assumptions
[A1] Choice is inherited from the supplied unbounded derived enhancement, including its resolution and model constructions; the elementary identification of slice categories is choice-free. Universe closure and the separate existence assumption give the stated size bounds. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[F1] Reference 0 supplies $M_{j,F}$ for every prime field $F$ and $j\geq0$, with precisely the sheafhood and finitariness asserted above. No filtration, comparison or spectral-sequence property is used.

[F2] Taking the ring to be $\mathbb Z$ in [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) gives the locally small stable presentable infinity-localization and its ordinary derived homotopy category, under [A1]. Presentability supplies small colimits. Reference 1, Corollary 5.5.2.4, supplies small limits; its Section 1.2.13 specifies coherent cones and cocones. Apply these with coefficient universe $V$, so even the $V$-small sieve categories are admissible.

[F3] [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) supplies sieves and the size-bounded site convention; [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface) supplies the Nisnevich covering families and generated topology. Reference 1, Definition 6.2.2.6, supplies the covering-sieve convention for space-valued sheaves; here the condition is explicitly imposed using the coherent limits of [F2].

[F4] Reference 3, part (2), replaces any small cofiltered scheme diagram by a directed inverse system with the same limit, including transfer of existence. Reference 4 supplies existence for that system with affine transitions. Reference 5 supplies its qcqs conclusion. These are ordinary scheme-limit facts; no ordinary reindexing result is applied to an infinity-categorical colimit.

[F5] The indexing condition is the opposite of [math:def-filtered-category-and-filtered-colimit](https://alphabetamath.cc/item/def-filtered-category-and-filtered-colimit), and the affine-transition condition is [math:def-affine-morphism-schemes](https://alphabetamath.cc/item/def-affine-morphism-schemes). Reference 2, Recollection 3.6, supplies precisely the stated finitary convention, with colimits in the enhanced target of [F2].

[F6] [def-article-conventions](item-def-article-conventions) supplies the category of qcqs field-schemes and its contravariant functor convention. [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification) identifies the prime subfield of every field $k$ with $\mathbb Q$ or $\mathbb F_p$, so [F1] applies after this identification. The underlying scheme and the covering conditions in [F3] are unchanged by composing a structure map with $\operatorname{Spec}k\to\operatorname{Spec}F$.

### Proof
**Given:** The stated Choice and universe assumptions, a field $k$ with prime subfield $F$, and $j\geq0$.

**Goal:** Apply the prime-field existence input with the precise descent and continuity interfaces, and prove its restriction statement.

1.1 By [F2] all displayed target limits and colimits exist. For a cofiltered scheme diagram in [F5], apply the directed replacement of [F4]; its transitions remain affine since they are images of diagram arrows. References 4 and 5 then give a qcqs scheme limit, and reference 3 transfers its universal property to the original diagram. The compatible structure maps to the fixed base give its base-scheme structure; thus the finitary comparison is well-defined. By [F6] the prime field satisfies the hypotheses of [F1], which supplies the coherent functor $M_{j,F}$ with these properties. Composition of structure maps defines $u$ on objects and leaves underlying arrows unchanged, preserving identities and composition. Precomposition therefore supplies $M_{j,F}\circ u^{\mathrm{op}}$ and does not change its values or their images in the homotopy category. [A1, F1, F2, F4, F5, F6]

2.1 For $X\in\mathcal C_k$, every $F$-morphism $T\to uX$ gives $T$ a unique compatible $k$-structure by composition with $X\to\operatorname{Spec}k$. A commuting triangle over $uX$ automatically respects these $k$-structures. Hence $(\mathcal C_k)_{/X}\cong(\mathcal C_F)_{/uX}$, with corresponding sieves and underlying diagrams. Each Nisnevich generating family in either slice is exactly such a family in the other by [F3], since etaleness and residue-field lifting depend only on the underlying maps. Consequently the generated covering sieves correspond. For each covering sieve $R$, the restricted comparison is therefore the very equivalence $M_{j,F}(uX)\to\lim_{(T\to uX)\in uR^{\mathrm{op}}}M_{j,F}(T)$ of [F1], proving descent, including the empty cover. Finally, $u$ preserves the scheme limits used in [F5]: the underlying $F$-scheme limit from step 1.1 acquires the common $k$-structure from its projections. These structure maps agree because a nonempty cofiltered category is connected: any two indices receive arrows from a common index. Every compatible cone over the underlying $F$-diagram therefore acquires this same unique $k$-structure, which verifies the limit universal property over $k$. Affineness is unchanged by $u$. Thus the restricted finitary comparison is also exactly the prime-field comparison of [F1], and is an equivalence. This proves all the restriction assertions. [F1, F2, F3, F5, F6, step 1.1] ∎


## Motivic complexes and cohomology

[Open item](item-def-motivic-cohomology) · level 8


### Definition
Assume the Axiom of Choice and fix compatible nested Grothendieck universes $U\in V\in W$, with $\omega\in U$, as required by the supplied Elmanto–Morrow complex functor. Scheme data, sites and coefficient values satisfy its fixed size bounds.

Let $k$ and $\mathrm{Sch}_k$ have the conventions of [def-article-conventions](item-def-article-conventions): objects of $\mathrm{Sch}_k$ are quasi-compact quasi-separated schemes over $k$. For an integer $j\geq0$, the **motivic complex of weight $j$** is the restriction to $\mathrm{Sch}_k$ of the Elmanto–Morrow Nisnevich sheaf $\mathbb Z(j)_{\mathrm{mot}}$ supplied by [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes). It is a contravariant functor with values in $D(\mathbb Z)$, the derived category of complexes of abelian groups.

For $X\in\mathrm{Sch}_k$ and $i\in\mathbb Z$, its **motivic cohomology group of degree $i$ and weight $j$** is
$$H^{i,j}_{\mathrm{mot}}(X,\mathbb Z):=H^i\bigl(\mathbb Z(j)_{\mathrm{mot}}(X)\bigr).$$
For a positive integer $n$, define finite coefficients objectwise by
$$H^{i,j}_{\mathrm{mot}}(X,\mathbb Z/n):=H^i\bigl(\mathbb Z(j)_{\mathrm{mot}}(X)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n\bigr).$$
The derived tensor product here is equivalently the mapping cone of multiplication by $n$. A morphism $X\to Y$ of $k$-schemes induces pullback from the group of $Y$ to that of $X$.

### Justification
The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and nested universe bounds are inherited from [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes); they discharge that construction premise before its functor is evaluated or restricted.

The external input [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) supplies the specified complex-valued functor and its Nisnevich descent on the stated category. Nisnevich covering families and the topology they generate are those of [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface). The supplied sheaf is understood in the derived, homotopy-coherent sense of Elmanto–Morrow, Theorem 1.1 and Section 2.1, rather than as a degreewise sheaf of complexes. Its restriction to the category of [def-article-conventions](item-def-article-conventions) is already part of the external supplier's contract.

Use the cochain, localization and size conventions of [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category) for the underlying derived category $D(\mathbb Z)$ and its mapping-cone model. For a representing cochain complex $C$, [lem-author-b747b28c359f-cochain-cohomology](item-lem-author-b747b28c359f-cochain-cohomology) defines the abelian group $H^i(C)=\ker d_C^i/\operatorname{im}d_C^{i-1}$. By [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology), $H^i$ is a functor on $D(\mathbb Z)$, so the integral group and pullback are independent of representatives and respect identities and composition. This uses the underlying derived-category functor of the supplied homotopy-coherent sheaf; no construction of its descent data from an ordinary triangulated-category-valued presheaf is asserted.

[lem-author-b747b28c359f-derived-finite-coefficients](item-lem-author-b747b28c359f-derived-finite-coefficients) supplies the derived quotient, its equivalence with the cone, and its functoriality without any boundedness assumption. In particular, it supplies a fixed coefficient functor computed by the two-term free resolution of $\mathbb Z/n$, including its descent on all derived-category morphisms; a choice of cones for individual morphisms in an abstract triangulated category is not being used as a functor. Applying cohomology gives the finite-coefficient group and its pullback. This finite-coefficient extension is defined here using that supplier; it is not an additional assertion of the article's Definition 2.2.

Evaluation in this definition is evaluation of the supplied complex-valued sheaf; no identification with derived sections on a separately chosen site is assumed.

### Reading limits
The article's Definition 2.2 was checked in the frozen extraction and supplied PDF page image. Elmanto–Morrow's prime-field convention, the opening assertion of Theorem 1.1, and Section 2.1 were checked in the versioned PDF extraction. Its screenshot requests did not produce an inspectable image in this tool session. The construction is used through the explicitly marked external supplier; its proof is not reconstructed here.


## Finite valuative dimension for noetherian and finite type schemes

[Open item](item-thm-author-14463ef2f4e5-finite-valuative-dimension) · level 8


### Statement
Assume the Axiom of Choice. A noetherian scheme of finite Krull dimension has finite valuative dimension, bounded above by its Krull dimension. Every scheme of finite type over a field has finite valuative dimension. A noetherian scheme here is one covered by finitely many affine spectra of noetherian rings. Its Krull dimension is the supremum of the lengths of strict chains of irreducible closed subsets; the empty scheme has dimension $-1$. A scheme of finite type over a field has a finite affine cover by spectra of finitely generated algebras over that field.

### Facts & Assumptions
**Given:** Choice, and either a noetherian scheme $X$ of finite Krull dimension $d$, or a scheme $X$ of finite type over a field $k$.

**Goal:** Prove finite valuative dimension in both cases and the bound in the first case.

[F1] For a noetherian domain, valuative dimension equals Krull dimension. [thm-author-14463ef2f4e5-noetherian-valuative-input](item-thm-author-14463ef2f4e5-noetherian-valuative-input)

[F2] A prime quotient of a noetherian ring is a noetherian domain and has dimension at most that of the ring. [lem-author-14463ef2f4e5-noetherian-quotient](item-lem-author-14463ef2f4e5-noetherian-quotient)

[F3] Under Choice a finitely generated algebra over a field is noetherian and has finite Krull dimension. [lem-author-14463ef2f4e5-finite-type-dimension](item-lem-author-14463ef2f4e5-finite-type-dimension) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F4] The valuative dimension of a scheme is the supremum of the valuative dimensions of the rings in any affine open cover. [lem-author-14463ef2f4e5-affine-cover](item-lem-author-14463ef2f4e5-affine-cover)

[F5] Noetherian rings have every ideal finitely generated. Fields are nonzero commutative rings with inverses for nonzero elements. A commutative $k$-algebra has a unital structure map from $k$; finitely generated means generated as an algebra by a finite list of elements. [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module) [math:def-field](https://alphabetamath.cc/item/def-field) [math:def-algebra-over-a-commutative-ring](https://alphabetamath.cc/item/def-algebra-over-a-commutative-ring) [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)

[F6] A scheme is a locally ringed space locally isomorphic to affine schemes. An affine open has the subspace topology and restricted structure sheaf. A $k$-scheme is equipped with a structure morphism $f:X\to\operatorname{Spec}k$; finite type over $k$ means that $f$ is a finite-type morphism. A scheme morphism is a morphism of locally ringed spaces. The noetherian finite-cover convention is as stated above. [math:def-scheme](https://alphabetamath.cc/item/def-scheme) [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme) [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes) [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[F7] An irreducible subset is nonempty and cannot be the union of two proper closed subsets in its subspace topology. The closure of a subset is its smallest closed superset. [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset) [math:def-interior-closure-boundary-top](https://alphabetamath.cc/item/def-interior-closure-boundary-top)

[F8] The points of $\operatorname{Spec}A$ are its prime ideals, and $V(I)=\{\mathfrak q:I\subseteq\mathfrak q\}$ for an ideal $I$. For a prime $\mathfrak p$, its singleton has closure $V(\mathfrak p)$. [math:def-prime-spectrum-and-vanishing-sets](https://alphabetamath.cc/item/def-prime-spectrum-and-vanishing-sets) [math:lem-closure-of-a-point-is-its-vanishing-set](https://alphabetamath.cc/item/lem-closure-of-a-point-is-its-vanishing-set)

[F9] The closure of an irreducible subset is irreducible (clause 1). For $T\subseteq U\subseteq X$ with the subspace topology, $\operatorname{cl}_U(T)=\overline{T}^{X}\cap U$ (clause 1). [math:lem-irreducible-components-of-a-topological-space](https://alphabetamath.cc/item/lem-irreducible-components-of-a-topological-space) [math:thm-subspace-closure-and-interior](https://alphabetamath.cc/item/thm-subspace-closure-and-interior)

[F10] Choice is retained for the polynomial-dimension input used in [F3] and for the stated hypotheses of the spectrum-closure and irreducible-closure suppliers in [F8] and [F9]. Selecting the finitely many affine charts or their finite bounds below requires no additional arbitrary-index choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F11] Ring valuative dimension is the supremum over prime quotients, and scheme valuative dimension is the supremum over affine opens. Both Krull and valuative dimensions of the zero ring and empty scheme are $-1$. [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)

[F12] For a finite-type morphism $f:X\to S$ and an affine target open $V=\operatorname{Spec}R$, the inverse image $f^{-1}(V)$ has a finite affine open cover $U_i=\operatorname{Spec}A_i$ with each $A_i$ a finitely generated $R$-algebra, using the structure maps induced by $f$. This is the finite-cover consequence in the Statement and final proof step of [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target), with finite type understood as in [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism). Taking $S=V=\operatorname{Spec}k$ gives precisely a finite affine cover of $X$ by finitely generated $k$-algebras compatible with its given structure morphism.

### Proof
1.1 Let $A$ be a noetherian ring. For each prime $\mathfrak p$, [F2] makes $A/\mathfrak p$ a noetherian domain of dimension at most $\dim A$. By [F1], its valuative dimension equals its Krull dimension. Taking the supremum over prime quotients in the definition of valuative dimension gives $\dim_v A\leq\dim A$. For $A=0$, there are no primes and both dimensions are $-1$ by convention. [F1, F2, F5, F8, F11, given]

2.1 Let $U=\operatorname{Spec}A$ be an affine open of a scheme $X$ of dimension $d$. For a strict prime chain $\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_n$, [F8] gives $V(\mathfrak p_0)\supsetneq\cdots\supsetneq V(\mathfrak p_n)$: at each adjacent pair, $\mathfrak p_i$ belongs to $V(\mathfrak p_i)$ and not to $V(\mathfrak p_{i+1})$. Each singleton $\{\mathfrak p_i\}$ is irreducible by [F7], since a union covering a singleton contains that point in one member. Its closure $V(\mathfrak p_i)$ in $U$ is therefore irreducible by [F8] and [F9]. By [F6] and the subspace convention in [F7], it is also an irreducible subset of $X$. Thus $C_i=\overline{V(\mathfrak p_i)}^{X}$ is irreducible and closed by [F7] and [F9]. Closure preserves inclusion because it is the smallest closed superset, and [F9] gives $C_i\cap U=V(\mathfrak p_i)$, so these inclusions remain strict. Reversing this chain gives a length-$n$ chain counted by $\dim X$, whence $\dim A\leq d$. For an empty affine open the same inequality follows from the dimension-$-1$ convention. If $X$ is noetherian, choose the finite noetherian affine cover in the Statement. Step 1.1 bounds every cover ring's valuative dimension by $d$, and [F4] gives $\dim_v X\leq d$. If instead $X$ is finite type over $k$, apply [F12] to its structure morphism $f:X\to\operatorname{Spec}k$, taking the whole affine target $V=\operatorname{Spec}k$. Since $f^{-1}(V)=X$, this gives a finite affine cover of $X$ by spectra of finitely generated $k$-algebras, with their algebra structures induced by $f$. By [F3] each ring is noetherian of finite Krull dimension, so step 1.1 gives a finite valuative bound for each. Their finite maximum and [F4] prove $\dim_v X<\infty$. For the empty scheme the valuative and Krull dimensions are both $-1$, and the empty cover has supremum $-1$. [F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, given, step 1.1, choose, construct] ∎


## Essential smallness of perfect and supported categories

[Open item](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness) · level 8


### Statement
Assume AC. For every quasi-compact quasi-separated scheme X, the supplied Perf(X) is essentially small as a stable infinity-category. Every full supported subcategory Perf_T(X), for any subset T⊆X, is essentially small as well. Their already supplied idempotent completeness and stability therefore place chosen small equivalent models in Cat_perf, the infinity-category of small idempotent-complete stable infinity-categories and exact functors.

### Facts & Assumptions
**Given:** qcqs X, subset T, AC and the fixed suitable universes of the derived-enhancement supplier.

**Goal:** Justify the small domain needed for nonconnective K-theory.

[F1] [thm-author-c5bc2838d897-kcoherent-qcqs-classical-generator-input](item-thm-author-c5bc2838d897-kcoherent-qcqs-classical-generator-input) gives one perfect classical generator P of the ordinary perfect derived category.

[F2] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) supplies the exact full stable idempotent-complete enhancements. [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the locally small ambient derived infinity-category: each mapping space admits a small equivalent model relative to the chosen universe.

[F3] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) specifies the qcqs hypothesis: the underlying space is quasi-compact and the intersection of every two affine open subschemes is quasi-compact.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) supplies AC. Use the universe closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention): fix a base universe $U$ containing $\omega$ and the scheme data, with a larger universe for the ambient category and its objects as in [F2]. Existence of these universes is assumed separately from AC. A family is $U$-small if it is indexed by a set in $U$; essential smallness means equivalence to a $U$-small infinity-category. AC is used to choose cone and splitting representatives for the small families of construction data in the larger universe. Closure of $U$ under finite constructions, subsets and $U$-indexed unions controls the sizes of the indexing sets, not membership of the chosen ambient objects in $U$.

[F4] Reference 0 supplies size replacement for full subcategories on small families and the fully faithful, essentially surjective equivalence criterion; small models retain coherent composition.

### External input
The size-replacement and equivalence inputs [F4] are imported from [Higher Topos Theory](https://www.math.ias.edu/~lurie/papers/HTT.pdf) at reference 0’s locators; they are not proved here.

### Proof
1.1 Begin with the classical generator $P$ of [F1]. From a $U$-small family of representatives, retain its members and add all integer shifts, finite sums, cones of every homotopy-category map between its members, and splitting images of all their idempotent endomorphisms. These objects remain perfect by [F2]. For each pair of representatives the ordinary Hom set is $U$-small by [F2], so the family of maps, and its subset of idempotents, has a $U$-small index set by [A1]. Cones exist and idempotents split by [F2]; AC in [A1] chooses representatives in the fixed larger universe. A splitting image is unique up to isomorphism: if $e=ir=i'r'$ with $ri=1$ and $r'i'=1$, then $r'i$ and $ri'$ are inverse isomorphisms. Iterate these operations over $\omega$. Because $\omega\in U$, the universe closure in [A1] makes the total indexing set $U$-small. Every finite expression in shifts, sums, cones and summands appears at a finite stage, up to isomorphism. [F1, F2, A1, construct]

2.1 The hypothesis [F3] permits application of [F1], so every ordinary perfect object is isomorphic to a representative from step 1.1. By [F2], an isomorphism in the homotopy category is an equivalence in the enhanced category. Let $\mathcal C_0$ be the full enhanced subcategory on those representatives. Its object family is $U$-small by step 1.1 and its mapping spaces are essentially $U$-small by [F2]; [F4] therefore gives a $U$-small model equivalent to $\mathcal C_0$. The inclusion $\mathcal C_0\to\operatorname{Perf}(X)$ is fully faithful by fullness and essentially surjective by the generator argument, hence an equivalence by [F4]. This uses the classical generator only to enumerate objects and makes no inference of enhanced coherence from a triangulated equivalence. Support is invariant under equivalence by [F2]; thus the subfamily whose support is contained in $T$ represents $\operatorname{Perf}_T(X)$ for any subset $T$, with no closedness assumption. Its index set is a subset of the small index set, hence is $U$-small by [A1]. Apply [F4] again to the full subcategory on this subfamily, using the same ambient mapping spaces; its fully faithful and essentially surjective inclusion in $\operatorname{Perf}_T(X)$ is an equivalence. Equivalences transport the finite-limit and finite-colimit universal properties and coherent idempotent splittings. Both small models therefore inherit the already supplied stability and idempotent completeness and lie in $\mathrm{Cat}_{\mathrm{perf}}$. [F1, F2, F3, F4, A1, step 1.1] ∎


## Coherent derived tensor and pullback on perfect complexes

[Open item](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback) · level 8


### Statement
Assume the Axiom of Choice and fix the universes of the common-family construction. Let $X$ be a quasi-compact quasi-separated (qcqs) scheme. On the common-family realization $\widehat{\operatorname{Perf}}(X)$ of the supplied perfect fiber, derived tensor is a coherent symmetric monoidal product with unit $\mathcal O_X$, exact separately in each variable. Every morphism $f:X\to Y$ between qcqs schemes induces an exact symmetric monoidal pullback $Lf^*:\operatorname{Perf}(Y)\to\operatorname{Perf}(X)$, coherently compatible with composition. For every homomorphism $A\to B$ of commutative unital rings, its affine specialization on bounded finite-projective representatives is derived extension of scalars. No flatness or finite Tor-dimension assumption on $f$ is needed.

### Facts & Assumptions
**Given:** Qcqs schemes $X,Y$ in the fixed universe, any morphism $f:X\to Y$, and AC.

**Goal:** Restrict actual enhanced operations to the supplied perfect subcategories.

[F1] [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison) constructs one coherent scheme/tensor family of K-flat localizations over qcqs schemes and all their morphisms, with its full perfect subfamily and actual exact equivalences to the supplied perfect fibers. All operations in this lemma are those of that common family, without comparison to any independently chosen pullback diagram. Its nested Grothendieck universes are standing size assumptions, separate from AC; its symmetric monoidal and exact functors retain their higher coherences.

[F2] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) specifies local bounded finite locally free representatives and the full stable subcategory, with finite stable operations inherited from the sheaf-derived category. Bounded means zero outside a finite interval of cochain degrees, and finite locally free means locally a finite sum of copies of the structure sheaf.

[F3] [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence) identifies the given enhanced affine perfect category through the actual degreewise associated-sheaf functor, for all commutative unital rings in the chosen universes.

[F4] [thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input](item-thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input) defines sheaf tensor, its signed direct-sum cochain total, K-flatness and module pullback. It supplies the stalkwise K-flat test, bounded-above-flat K-flatness, tensor computation on K-flat representatives, and computation of derived pullback by degreewise pullback on K-flat representatives. Its arbitrary-ringed-space scope includes open subspaces and one-point ringed spaces with a commutative ring as structure ring. These are classical computations; the coherent enhanced family is supplied by [F1].

[F5] [math:lem-affine-module-sheaf-universal-property](https://alphabetamath.cc/item/lem-affine-module-sheaf-universal-property) supplies the natural bijection $\operatorname{Hom}_{\mathcal O_{\operatorname{Spec}A}}(\widetilde M,H)\cong\operatorname{Hom}_A(M,\Gamma(\operatorname{Spec}A,H))$ for every $A$-module $M$ and every module sheaf $H$, with no quasi-coherence or finiteness assumption on $H$.

[F6] [math:thm-pullback-pushforward-module-adjunction](https://alphabetamath.cc/item/thm-pullback-pushforward-module-adjunction) supplies the natural module-sheaf adjunction $f^*\dashv f_*$ for any morphism of ringed spaces. Here $(f_*H)(V)=H(f^{-1}V)$ with scalar action induced by the structure-sheaf map.

[F7] [math:thm-extension-of-scalars-is-left-adjoint-to-restriction](https://alphabetamath.cc/item/thm-extension-of-scalars-is-left-adjoint-to-restriction) supplies the natural bijection $\operatorname{Hom}_B(B\otimes_A M,N)\cong\operatorname{Hom}_A(M,\operatorname{Res}^B_A N)$ for a unital map of commutative rings. The restricted action is $a n=u(a)n$ for the ring map $u:A\to B$, and extension of scalars is the $B$-module $B\otimes_A M$.

[F8] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) defines qcqs. Under our AC assumption, [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact) and [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated) place every affine scheme in that scope.

[F9] [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module) defines projectivity by lifting through surjective module maps. A finite projective module is such a module with a finite generating family. [math:thm-projective-modules-are-flat](https://alphabetamath.cc/item/thm-projective-modules-are-flat) gives its flatness. We also apply these to the finite free stalk modules in local presentations.

[F10] [math:thm-morphisms-into-affine-scheme-global-sections](https://alphabetamath.cc/item/thm-morphisms-into-affine-scheme-global-sections) associates to a ring map $u:A\to B$ its morphism $f:\operatorname{Spec}B\to\operatorname{Spec}A$, inducing $u$ on global functions under the canonical identifications. Consequently the $A$-action on $\Gamma(\operatorname{Spec}B,H)$ coming from $f_*H$ is restriction along $u$.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed for the common-family construction in [F1], the enhanced affine comparison in [F3], and affine quasi-compactness in [F8]. The finite local computations below use those supplied constructions.

### Proof
1.1 Locally represent $E$ and $F$ by bounded finite locally free complexes as in [F2]. Each stalk complex is bounded with finite free terms. A finite free module is projective by lifting the images of its finitely many basis vectors through a surjection, and hence is flat by [F9]. Apply the bounded-above-flat assertion of [F4] to the one-point ringed space at each stalk, then its stalkwise criterion on the neighbourhood: these local representatives are K-flat. Thus [F4] computes derived tensor by their ordinary signed total tensor. This is again bounded finite locally free: after shrinking to trivialize the finitely many terms, the tensor of ranks $r,s$ has basis $e_i\otimes e_j$ of rank $rs$, and each total degree is a finite sum of these modules. The unit $\mathcal O_X[0]$ is perfect. The full perfect subfamily in [F1] already retains the tensor coherences; the computation identifies the local perfect condition of [F2]. [F1, F2, F4, F9, A1]

1.2 Fix a ring map $u:A\to B$, put $U=\operatorname{Spec}A$, $V=\operatorname{Spec}B$, and let $f:V\to U$ be its morphism from [F10]. For any $A$-module $M$ and any $\mathcal O_V$-module sheaf $H$, the adjunctions [F5]–[F7], with the scalar action checked in [F10], give natural bijections $\operatorname{Hom}_{\mathcal O_V}(f^*\widetilde M,H)\cong\operatorname{Hom}_{\mathcal O_U}(\widetilde M,f_*H)\cong\operatorname{Hom}_A(M,\operatorname{Res}^B_A\Gamma(V,H))\cong\operatorname{Hom}_B(B\otimes_A M,\Gamma(V,H))\cong\operatorname{Hom}_{\mathcal O_V}(\widetilde{B\otimes_A M},H)$. Evaluating these mutually inverse natural bijections at the two identity morphisms gives maps between $f^*\widetilde M$ and $\widetilde{B\otimes_A M}$; naturality shows that their composites are the identities. This proves a canonical isomorphism $f^*\widetilde M\cong\widetilde{B\otimes_A M}$, natural in $M$. It therefore commutes with every differential when applied degreewise to a complex; this is a natural chain isomorphism, not literal identity of the two constructions. [F5, F6, F7, F10, construct]

2.1 Tensoring K-flat representatives commutes with the signed mapping-cone matrices and takes zero to zero. Thus it preserves the ambient cone cofiber sequences, consistently with the enhanced exactness supplied by [F1]. Since the finite stable operations in [F2] are inherited from the ambient category, exactness in each variable restricts to the full perfect subcategory. [F1, F2, F4, step 1.1]

3.1 Given $E\in\operatorname{Perf}(Y)$ and $x\in X$, choose around $f(x)$ a bounded finite locally free presentation, and restrict to its inverse-image neighbourhood of $x$. The stalkwise K-flat criterion also shows that restriction of a K-flat complex to an open remains K-flat, so [F4] computes the derived pullback there by ordinary degreewise pullback of that presentation. Pullback preserves finite sums by the adjunction [F6]; its formula in [F4] gives $f^*\mathcal O_Y\cong\mathcal O_X$ by $a\otimes b\mapsto ab$ with inverse $a\mapsto a\otimes1$. Applied on local free charts, this gives $f^*\mathcal O_Y^r\cong\mathcal O_X^r$. The pulled-back complex is therefore bounded finite locally free and $Lf^*$ preserves perfect objects. Exactness and the strong monoidal and compositional coherences are those of the single localized family in [F1]. [F1, F2, F4, F6, step 1.1, step 2.1]

4.1 Let $P$ be a bounded finite-projective $A$-complex. Its terms are flat by [F9], so the one-point case of [F4] shows that $P$ is K-flat and $B\otimes_A P$ computes $B\otimes_A^{\mathbf L}P$. Each term $P^n$ is a summand of a finite free module: a finite generating family gives a surjection $A^r\to P^n$, and the projective lifting property supplies a section. Tensoring these inclusion and projection maps with $B$ retains their identity composite, making $B\otimes_A P^n$ a finitely generated summand of $B^r$. Such a summand is projective by extending a lifting problem to $B^r$, lifting its finite basis, and restricting to the summand. Thus $B\otimes_A P$ is a bounded finite-projective $B$-complex. By [F3], $\widetilde P$ represents a perfect object. The split finite-free presentations above remain split under associated sheaf, and [F5] identifies $\widetilde{A^r}$ with $\mathcal O_U^r$. Every stalk of $\widetilde P$ is therefore bounded with projective, hence flat, terms; the bounded-above and stalk criteria of [F4] make $\widetilde P$ K-flat. Step 1.2 identifies its actual degreewise sheaf pullback canonically with $\widetilde{B\otimes_A P}$. This natural chain isomorphism descends to the localizations of [F1] and [F3], and hence gives precisely the asserted affine specialization under their actual fiber comparisons. Both affine schemes are qcqs by [F8]. The construction works for every $u$ and every $f$ of the Statement, with no flatness or finite Tor-dimension restriction on the morphism. [F1, F3, F4, F5, F8, F9, A1, step 1.1, step 3.1, step 1.2] ∎


## Support ideals, mixed products and pullback

[Open item](item-lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal) · level 9


### Statement
Assume the Axiom of Choice and fix the universes of the common-family construction. Let $X$ be a quasi-compact quasi-separated (qcqs) scheme, and use the common-family realizations of the supplied perfect fibers and their full supported subcategories. For any subsets $T,S\subseteq X$, derived tensor induces an exact-in-each-variable coherent pairing $\operatorname{Perf}_T(X)\times\operatorname{Perf}_S(X)\to\operatorname{Perf}_{T\cap S}(X)$ and a coherent unital action $\operatorname{Perf}(X)\times\operatorname{Perf}_T(X)\to\operatorname{Perf}_T(X)$. Thus $\operatorname{Perf}_T(X)$ is a stable tensor ideal and a module category over $\operatorname{Perf}(X)$; no distinguished tensor unit in $\operatorname{Perf}_T(X)$ is asserted for proper $T$. For every morphism $f:X\to Y$ between qcqs schemes and every subset $T\subseteq Y$, $Lf^*$ takes $\operatorname{Perf}_T(Y)$ to $\operatorname{Perf}_{f^{-1}T}(X)$, compatibly with the actions and pairings.

### Statement references

[lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison)

[def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

### Facts & Assumptions
**Given:** Qcqs schemes in the fixed universe, arbitrary support subsets, any morphism between these schemes, and AC.

**Goal:** Supply supported multiplicative and contravariant functors without adding a false unit.

[F0] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) defines qcqs schemes. Use the nested universes of the common-family construction with the closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention); universe existence is a standing size assumption separate from AC.

[F1] [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback) gives exact coherent tensor and pullback on the perfect fibers over qcqs schemes, in the single common family of [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison). In this family the operations are induced by signed total tensor and degreewise module pullback of K-flat complexes, and the fiber equivalences to the supplied sheaf-derived categories are induced by inclusion.

[F2] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes), [lem-author-4f716d60801a-restriction-support](item-lem-author-4f716d60801a-restriction-support) and [lem-author-4f716d60801a-supported-stability](item-lem-author-4f716d60801a-supported-stability) supply the perfect and full supported subcategories, exact degreewise stalk functors commuting with cohomology, the criterion that support is contained in $T$ exactly when all stalk complexes off $T$ are acyclic, and stability with inherited finite stable operations. Full means retaining the ambient mapping spaces and composition coherences. A tensor ideal here means such a stable full subcategory closed under tensoring with every ambient perfect object; the module assertion specifies the restricted coherent ambient action and its associativity and unit coherences.

[F3] [thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input](item-thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input) supplies K-flat resolutions, the stalkwise K-flat criterion, and computation of derived tensor and pullback by signed direct-sum total tensor and degreewise pullback of K-flat representatives. Write $T_X(P,Q)^n=\bigoplus_{i+j=n}P^i\otimes_{\mathcal O_X}Q^j$, with differential $d(p\otimes q)=d_Pp\otimes q+(-1)^ip\otimes d_Qq$. K-flat means that this total tensor with any acyclic complex is acyclic. Tensoring with a K-flat complex preserves quasi-isomorphisms; tensoring any complex with a quasi-isomorphism between K-flat complexes also preserves quasi-isomorphisms. Its Source contract gives module-sheaf coproducts as sheafifications of sectionwise direct sums. The same input applies to one-point ringed spaces, hence to complexes over the stalk rings.

[F4] For any ringed space, [math:lem-stalk-tensor-product](https://alphabetamath.cc/item/lem-stalk-tensor-product) identifies $(M\otimes_{\mathcal O_X}N)_x$ naturally with $M_x\otimes_{\mathcal O_{X,x}}N_x$. Clause 2 of [math:lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product](https://alphabetamath.cc/item/lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product) gives $(\bigoplus_i G_i)_x\cong\bigoplus_i(G_i)_x$ for arbitrary set-indexed families of abelian sheaves and identifies their coproduct as the sheafification of the sectionwise direct sum. Only this coproduct clause, not its bounded-above tensor-total clause, is used.

[F5] [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces) defines $f^*M=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}M$. [math:lem-stalk-inverse-image-sheaf](https://alphabetamath.cc/item/lem-stalk-inverse-image-sheaf) gives $(f^{-1}M)_x\cong M_{f(x)}$, also for the structure sheaf, naturally with its ring and module operations.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed through the common-family, enhanced-category and K-flat resolution constructions in [F1]–[F3]. No geometric flatness or Tor-dimension assumption is added.

### Proof
1.1 The module-sheaf coproduct construction in [F3] has the same underlying abelian sheaf as the abelian coproduct in [F4]. Consequently [F4] gives the coproduct stalk isomorphism also for module sheaves; it is $\mathcal O_{X,x}$-linear because the germ maps and scalar operations agree on each summand. Combining it in every degree with the tensor stalk isomorphism of [F4] gives $T_X(P,Q)_x\cong\operatorname{Tot}^{\oplus}(P_x\otimes_{\mathcal O_{X,x}}Q_x)$. Naturality makes this an isomorphism of cochain complexes: both differentials send a degree-$(i,j)$ tensor to $d_Pp\otimes q+(-1)^ip\otimes d_Qq$. The coproduct clause allows every integer diagonal, so no boundedness is assumed here. Choose K-flat representatives $P,Q$ of $E,F$ using [F3]. Their stalks are K-flat and represent $E_x,F_x$ by [F2]–[F3]. Thus the displayed isomorphism computes $(E\otimes^{\mathbf L}F)_x\simeq E_x\otimes^{\mathbf L}_{\mathcal O_{X,x}}F_x$ for the actual common-family tensor of [F1]. If $E\in\operatorname{Perf}_T(X)$, $F\in\operatorname{Perf}_S(X)$ and $x\notin T\cap S$, one stalk is acyclic by [F2]; tensoring it with the other K-flat stalk is acyclic by [F3]. This proves the mixed support bound. Perfection and exactness in each variable come from [F1], and the finite stable operations are inherited by [F2]. Taking the ambient support bound to be $X$ gives the action on $\operatorname{Perf}_T(X)$. All ambient associativity, symmetry and unit-action coherences restrict, since the operations land in the stated full supported subcategories, whose mapping spaces are ambient ones. The acting unit is $\mathcal O_X\in\operatorname{Perf}(X)$; no unit object in the proper supported category is asserted. This proves the tensor-ideal and coherent module claims. [F0, F1, F2, F3, F4, A1]

2.1 Let $f:X\to Y$, $E\in\operatorname{Perf}_T(Y)$ and $x\in X$, and put $y=f(x)$, $A=\mathcal O_{Y,y}$ and $B=\mathcal O_{X,x}$, with the ring map induced by $f$. Choose a K-flat representative $Q$ of $E$. By [F1] and [F3], $Lf^*E$ is represented by degreewise $f^*Q$. Applying [F4]–[F5] degreewise, with the tensor stalk formula on the ringed space $(X,f^{-1}\mathcal O_Y)$, gives the natural chain isomorphism $(f^*Q)_x\cong B\otimes_A Q_y$, because $(f^{-1}\mathcal O_Y)_x\cong A$ and $(f^{-1}Q^n)_x\cong Q_y^n$; naturality respects the differentials. Here $Q_y$ is K-flat and represents $E_y$ by [F2]–[F3]. To identify the derived tensor, take a K-flat resolution $R\to B[0]$ over $A$, using the one-point case of [F3]. Tensoring it with $Q_y$ preserves this quasi-isomorphism. Therefore $B\otimes_A Q_y$ represents $B\otimes_A^{\mathbf L}E_y$, and we have derived the stalk formula $(Lf^*E)_x\simeq\mathcal O_{X,x}\otimes^{\mathbf L}_{\mathcal O_{Y,y}}E_y$. If $x\notin f^{-1}T$, then $Q_y$ is acyclic. The map $0\to Q_y$ is now a quasi-isomorphism between K-flat complexes, so [F3] permits tensoring it with the arbitrary $A$-module $B[0]$, proving that $B\otimes_A Q_y$ is acyclic even when $A\to B$ is not flat. Hence pullback has the asserted support, and is perfect and exact by [F1]. The ambient symmetric monoidal and composition coherences of [F1] restrict to these full supported subcategories and commute with the actions and mixed pairings of step 1.1. This proves all assertions for arbitrary support subsets; the open-complement criterion is needed only when the complement is open. [F0, F1, F2, F3, F4, F5, A1, step 1.1] ∎


## Applying nonconnective K-theory to the enhanced interface

[Open item](item-lem-author-c5bc2838d897-kcoherent-nonconnective-functor-products) · level 10


### Statement
Assume the Axiom of Choice (AC) and the fixed nested universes of the common-family construction, with a base universe containing $\omega$ and the scheme data. Let $X$ be a quasi-compact quasi-separated (qcqs) scheme. Use the common-family realizations of the supplied perfect categories and their full supported subcategories. Applying the imported nonconnective functor $\mathbb K$ to small equivalent models gives well-defined spectra $\mathbb K(\operatorname{Perf}(X))$ and $\mathbb K(\operatorname{Perf}_T(X))$ for every subset $T\subseteq X$, independently of equivalent coherent presentations.

Here the category of pairs has objects $(X,U)$ with $X$ qcqs and $U\subseteq X$ an arbitrary subset. A morphism $f:(X,U)\to(Y,T)$ is a scheme morphism $f:X\to Y$ satisfying $f^{-1}T\subseteq U$; identities and composition are those of schemes. Exact derived pullback followed by support inclusion induces $\mathbb K(\operatorname{Perf}_T(Y))\to\mathbb K(\operatorname{Perf}_U(X))$. These maps give coherent contravariance on this pair category. The case $U=f^{-1}T$ gives inverse-image support pullback; $U=X$ and $T=Y$ give contravariance on qcqs schemes. The exact inclusion $\operatorname{Perf}_T(X)\to\operatorname{Perf}(X)$ gives the supported-to-ambient map.

Tensor makes $\mathbb K(\operatorname{Perf}(X))$ an $E_\infty$ ring spectrum, makes $\mathbb K(\operatorname{Perf}_T(X))$ a unital module over it, and gives coherent mixed pairings $\mathbb K(\operatorname{Perf}_T(X))\wedge\mathbb K(\operatorname{Perf}_S(X))\to\mathbb K(\operatorname{Perf}_{T\cap S}(X))$ for all subsets $T,S\subseteq X$. Pullbacks respect these products and actions. The supported spectra are not asserted to have a distinguished ring unit for proper $T$. These conclusions need neither a degree-zero identification nor a scheme localization theorem.

### Facts & Assumptions
**Given:** Qcqs schemes in the fixed universes, arbitrary support subsets, pair morphisms as defined above, and AC.

**Goal:** Justify exactly the K-theoretic operations needed by the definition.

[F0] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) defines qcqs: the underlying space is quasi-compact and intersections of two affine opens are quasi-compact. Use the closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), with a base universe containing $\omega$ and the scheme data and larger universes containing the common-family fibers and the categories of those categories. Their existence is a standing size assumption separate from AC. Small means small relative to the base universe; essentially small means equivalent to such a small category.

[F1] [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness) supplies small stable idempotent-complete models of the ambient and all supported perfect fibers.

[F2] [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback) and [lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal](item-lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal) supply coherent tensor, pullbacks, modules and mixed products, exact in each variable. In particular $Lf^*$ takes $\operatorname{Perf}_T(Y)$ into $\operatorname{Perf}_{f^{-1}T}(X)$ for every morphism between qcqs schemes, with coherent composition and compatibility with products and actions.

[F3] [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input) gives the nonconnective functor on $\mathrm{Cat}_{\mathrm{perf}}$, the separately exact tensor universal property, its lax symmetric monoidal structure and transport of coherent algebra/module operations. Here $\mathrm{Cat}_{\mathrm{perf}}$ consists of small stable idempotent-complete infinity-categories and exact functors. [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies spectra, smash, sphere units and the all-integer homotopy-group convention. An $E_\infty$ ring is a coherent commutative algebra for smash; a module has coherent associative unital action.

[F4] [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison) supplies the single coherent scheme/tensor family with exact fiber equivalences to the supplied perfect categories. Throughout, $\operatorname{Perf}(X)$ denotes its common-family realization; supported categories are the corresponding full subcategories. No comparison with an independently chosen pullback diagram is claimed.

[F5] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) defines $\operatorname{Perf}_T(X)$ as the full subcategory of perfect objects whose support is contained in $T$. Support is the union of the nonzero cohomology stalk loci. These subcategories are stable and idempotent complete, with finite limits and colimits inherited from the ambient derived category. Full means retaining the ambient mapping spaces and all their composition coherences.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed in the small-model construction of [F1], the common-family construction of [F4], and the imported categorical foundations of [F3]. Choices of domain inverse equivalences below take place in the fixed larger universes of [F0]. No choice-free version of those inputs is asserted.

### Proof
1.1 By [F1] and [F4], the common-family diagram and its full supported fibers take values in essentially small stable idempotent-complete infinity-categories. Form that domain in the larger universes of [F0], with exact functors and natural equivalences as in [F3]. The inclusion of the small domain is fully faithful, since it retains the same exact functors and their natural equivalences, and essentially surjective by the definition of essential smallness. It is therefore an equivalence. Extend $\mathbb K$ along this domain equivalence once, or equivalently compose the entire diagram with one inverse equivalence. Its inverse choices with equivalence data are naturally equivalent. Transport the symmetric monoidal structure along the same equivalence: the tensor universal property of [F3] identifies separately exact pairings before and after transport, so their coherent algebra and module operations are transported together. This retains all coherences and establishes independence of equivalent coherent enhanced presentations. No independent choice of a skeleton for each individual map is used. [F0, F1, F3, F4, A1]

2.1 The pair category is well-defined. The identity of $(X,U)$ satisfies $\operatorname{id}^{-1}U=U$. For $f:(X,U)\to(Y,T)$ and $g:(Y,T)\to(Z,V)$, one has $(g\circ f)^{-1}V=f^{-1}(g^{-1}V)\subseteq f^{-1}T\subseteq U$; associativity and identities are inherited from schemes. For any $A\subseteq B\subseteq X$, the support definition in [F5] gives a full inclusion $\operatorname{Perf}_A(X)\to\operatorname{Perf}_B(X)$. It is exact because both full stable subcategories inherit their finite limits and colimits from the same ambient category. Compose the pullback in [F2] with this inclusion for $A=f^{-1}T$, $B=U$. For composable pair maps, both resulting composites are restrictions of the same ambient coherent pullback diagram in [F4]. The ambient identity, composition and higher coherence maps restrict to the target full supported subcategory: their objects have support in $U$ by the displayed inclusions, and fullness retains all the mapping spaces. Thus this is a coherent contravariant diagram of exact functors on pairs. Apply $\mathbb K$ from step 1.1 to that entire diagram. Taking $U=f^{-1}T$ gives the supplied support pullback, and taking full supports gives the scheme diagram. The pair map $\operatorname{id}:(X,X)\to(X,T)$ yields exactly the supported-to-ambient inclusion map. [F0, F2, F3, F4, F5, step 1.1]

3.1 By the tensor universal property in [F3], each separately exact pairing of [F2] is an exact functor out of the corresponding $\mathrm{Cat}_{\mathrm{perf}}$ tensor product. Compose its image under $\mathbb K$ with the lax monoidal comparison $\mathbb K(C)\wedge\mathbb K(D)\to\mathbb K(C\otimes D)$. The coherent ambient product and unit make the ambient spectrum an $E_\infty$ ring, while the coherent module action makes the supported spectrum a unital module; the same construction gives the mixed pairings with support $T\cap S$. Coherence follows from the supplied algebra/module operations and the lax symmetric monoidal functor, not merely binary maps in homotopy categories. Pullback compatibility follows by applying the same functor to the compatible operations in [F2]; support inclusions retain these compatibilities because the subcategories are full and their products have the asserted support bounds. No unit is inserted into a proper supported category. [F2, F3, F5, step 1.1, step 2.1]

4.1 These steps only apply the invariant and its coherent products to exact functors. They do not identify $\pi_0$ with a separately defined Grothendieck group, identify negative groups by another construction, or prove that a particular scheme-support sequence is a localization sequence. Thus they establish precisely the stated interface. [step 1.1, step 2.1, step 3.1] ∎


## Nonconnective K theory of perfect complexes

[Open item](item-def-nonconnective-k-spectrum-interface) · level 11


### Definition
Assume the Axiom of Choice. A **qcqs scheme** is a quasi-compact quasi-separated scheme. For such X, realize the full sheaf-derived stable idempotent-complete category Perf(X) of [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) by the full perfect fiber widehat Perf(X) in the single localized K-flat family of [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison). Each fiber is identified with the supplied Perf(X) by the actual exact inclusion-induced equivalence. The supplier has specified no prior scheme-indexed tensor/pullback diagram; here its coherent interface is, by definition, the one produced by that common family. Its tensor and pullbacks are those of [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback). By [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness) these fibers are essentially small. Extend 𝕂 once to the equivalent domain of essentially small stable idempotent-complete infinity-categories, rather than selecting independent skeletons for separate maps. Let 𝕂 be the nonconnective functor of [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input), and define

$$K(X)=\mathbb K(\operatorname{Perf}(X)),\qquad K_i(X)=\pi_iK(X)\quad(i\in\mathbb Z).$$

All groups use the indexing of [def-stable-spectra-interface](item-def-stable-spectra-interface); negative i are allowed and are not set to zero by a connective truncation. In the displayed formulas Perf and its supported categories mean these common-family realizations of the supplied enhanced categories. Equivalent coherent small presentations give naturally equivalent spectra and diagrams.

For every subset T⊆X define

$$K_T(X)=\mathbb K(\operatorname{Perf}_T(X)),\qquad K_{i,T}(X)=\pi_iK_T(X)\quad(i\in\mathbb Z).$$

The supported category consists of perfect complexes whose cohomology stalks vanish off T. For closed T this is equivalently acyclicity on the open complement. Its exact inclusion in Perf(X) supplies $K_T(X)\to K(X)$. Here $K_T(X)$ is defined by that category, without presupposing a fiber identification with K(X)→K(X∖T).

For every morphism f:X→Y of qcqs schemes, exact derived pullback gives f*:K(Y)→K(X). On pairs it gives $f^*:K_T(Y)\to K_{f^{-1}T}(X)$. These are coherent contravariant operations; on affine finite-projective representatives they are derived extension of scalars. No flatness, regularity or finite Tor-dimension assumption on f is imposed.

Derived tensor and the lax symmetric monoidal 𝕂 give the coherent E∞ multiplication K(X)∧K(X)→K(X), with unit induced by $O_X$. Thus K(X) is a commutative ring spectrum. Each $K_T(X)$ is a module over K(X), and there are coherent support pairings $K_T(X)$∧$K_S(X)$→$K_{T\cap S}(X)$. They induce $K_{i,T}(X)$⊗$K_{j,S}(X)$→$K_{i+j,T\cap S}(X)$ for all integers i,j. Pullback respects the products and module actions. For proper T no distinguished ring unit on $K_T(X)$ is asserted; its specified structure is the ambient module and supported pairings.

### Facts & Assumptions
**Given:** qcqs schemes, arbitrary support subsets, morphisms as above, AC and the chosen universes.

**Goal:** Define the nonconnective spectrum and justify its domain, all-integer groups, contravariance and products.

[F0] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) defines quasi-compactness and quasi-separatedness: the underlying space is quasi-compact and every intersection of two affine open subschemes is quasi-compact. Use the nested universes of the common-family construction with the closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), a base universe $U$ containing $\omega$ and the scheme data, and larger universes containing the fibers and categories of those categories. Their existence is a standing size assumption separate from AC. Small means $U$-small; essentially small means equivalent to a $U$-small infinity-category.

[F1] [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison) constructs the single coherently localized scheme/tensor family and identifies its fibers with the supplied enhancement; [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness) supplies its essentially small stable idempotent-complete domain.

[F2] [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback) and [lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal](item-lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal) supply the actual enhanced operations and support control.

[F3] [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input) supplies nonconnective 𝕂 and its lax symmetric monoidal structure; [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies π_i for all integers.

[F4] [lem-author-c5bc2838d897-kcoherent-nonconnective-functor-products](item-lem-author-c5bc2838d897-kcoherent-nonconnective-functor-products) applies these inputs and establishes presentation independence and multiplicative contravariance.

[A1] Assume [AC](https://alphabetamath.cc/item/def-axiom-of-choice) in the small-model construction of [F1], the common-family construction of [F1], and the imported categorical foundations of [F3]. Choices for extending the functor along the small-domain equivalence take place in the fixed larger universes of [F0], as in [F4].

### Justification
1.1 With the qcqs and size conventions of [F0] and AC as in [A1], use the common-family model of [F1] and apply [F3] to its whole coherent diagram and to each full support subfamily. This defines the displayed spectra, inclusion maps and all-integer groups independently of equivalent small presentations, as proved in [F4]. [F0, F1, F3, F4, A1]

2.1 Apply [F3] to the exact pullbacks and coherent separately exact pairings in [F2]. The functorial, ring, module and support-product assertions are precisely those of [F4]; smash of shifted sphere maps gives the degree i+j formula. The unit belongs to the ambient Perf(X), so it does not create a unit in a proper support category. This proves the interface. [F2, F3, F4, step 1.1] ∎

### Scope of separate inputs
A degree-zero comparison with a Grothendieck group, comparison with a particular classical nonconnective model, and a scheme localization theorem identifying a support category as the fiber are separate results with their own hypotheses. No such theorem is inferred from this definition. No identification with coherent-sheaf G-theory on a singular scheme is made.


## Affine perfect K zero and bundle K zero

[Open item](item-lem-affine-perfect-k-zero-bridge) · level 12


### Statement
Assume the Axiom of Choice and suitable universes. For a commutative unital ring A and X=Spec A, there is a canonical isomorphism π₀K(X)≅K⁰(X), where K(X) is the nonconnective spectrum of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) and K⁰(X) is the vector-bundle Grothendieck group. Under this isomorphism the class of the associated sheaf complex of a bounded complex P of finite projective A-modules maps to $\sum_n(-1)^n[\widetilde P^n]$, and the spectral class of a vector bundle E placed in degree zero maps to [E]. Equivalently, the inverse sends [E] to the class of E[0]. No noetherian or regularity hypothesis is imposed.

A vector bundle is a locally finite free $\mathcal O_X$-module. Its Grothendieck group is generated by isomorphism classes of vector bundles with [E]=[E′]+[E″] for every short exact sequence 0→E′→E→E″→0 of vector bundles. A finite projective A-module is a finitely generated module having the lifting property through surjective module maps; a bounded complex has finitely many nonzero terms. This is a comparison with vector-bundle K zero, not an identification with coherent-sheaf G-theory.

### Facts & Assumptions
**Given:** AC, suitable universes, a commutative unital ring A, and X=Spec A.

**Goal:** Identify the degree-zero group of the specified nonconnective spectrum with the vector-bundle group and establish the stated formulas.

[A1] Choice is assumed for the essentially small perfect-category and K-theory constructions invoked in [F1], and for the supplied affine quasi-compactness result; it is not inferred from affineness. The suitable universes in the Statement are fixed with the supplied closure convention; their existence is assumed, not deduced from AC. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[F1] Under the assumed AC, the affine scheme $X=\operatorname{Spec}A$ is quasi-compact by [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact) and quasi-separated by [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated), hence qcqs. The supplied interface therefore defines $K(X)=\mathbb K(\operatorname{Perf}(X))$, with an essentially small stable idempotent-complete perfect category and invariance under an equivalent small presentation. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[F2] The cofiber Grothendieck group of a small stable infinity-category is canonically the triangle Grothendieck group of its homotopy category. [lem-author-3a003d7b5208-triangle-presentation](item-lem-author-3a003d7b5208-triangle-presentation)

[F3] For a small idempotent-complete stable infinity-category, the object-class map identifies its cofiber Grothendieck group with π₀ of the specified nonconnective K-theory. This is an external input with the source and reading limits recorded there. [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input)

[F4] The triangle group of Perf(X) identifies with the vector-bundle group; it takes a bounded finite-projective representative to the alternating sum of its associated bundle terms and E[0] to [E]. The exact affine equivalence used there is degreewise associated sheaf. [lem-author-3a003d7b5208-affine-triangle-euler](item-lem-author-3a003d7b5208-affine-triangle-euler), [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)


[F5] The commutative unital ring convention is [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring). The affine scheme $X=\operatorname{Spec}A$ includes its structure sheaf $\mathcal O_X$, as in [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme). The associated-sheaf construction $M\mapsto\widetilde M$ is functorial in module maps, and is applied degreewise to complexes. [math:def-associated-sheaf-module-affine-scheme](https://alphabetamath.cc/item/def-associated-sheaf-module-affine-scheme)

[F6] Modules mean unital left modules; module maps are linear, and finite generation and finite freeness have their supplied algebraic meanings. The lifting-property definition of a finite projective module is given inline in the Statement. [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules), [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel), [math:def-generated-cyclic-finitely-generated-and-free-modules](https://alphabetamath.cc/item/def-generated-cyclic-finitely-generated-and-free-modules)

[F7] A bundle is the finite locally free module sheaf defined inline in the Statement, with module sheaves and their linear morphisms understood as in [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space). Short exact sequences use the sheaf exactness convention of [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves). Complexes use cochain differentials of degree $+1$ whose consecutive composites vanish; $E[0]$ means $E$ in degree zero and zero elsewhere. [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category), [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)

### Proof
**Proof technique:** Compose the spectral, triangulated and affine Euler comparisons.

1.1 Choose a small stable idempotent-complete presentation C equivalent to Perf(X), available by [F1]. The equivalence identifies the corresponding K-theory spectra and hence their π₀ groups. Apply [F3] to C and invert its object-class isomorphism; then apply [F2] to obtain an isomorphism from π₀K(X) to the triangle Grothendieck group of hPerf(X). The construction is independent of the presentation by the naturality and equivalence invariance in [F1] and [F3]. [A1, F1, F2, F3, construct]

2.1 Compose the isomorphism of step 1.1 with the affine Euler isomorphism of [F4]. This gives π₀K(X)≅K⁰(X). By [F3], the spectral class of an object is sent in step 1.1 to its triangle class. Therefore [F4] sends the class represented by P to $\sum_n(-1)^n[\widetilde P^n]$, and sends the class of E[0] to [E]. [F3, F4, step 1.1]

3.1 The classes [E] generate K⁰(X), so the final formula also describes the inverse on its generators. The hypotheses of all invoked suppliers are satisfied by the given commutative unital ring, AC and affine qcqs scheme; none requires noetherianity or regularity. This proves the bridge and both formulas. [F1, F3, F4, step 2.1] ∎


## Rational splitting of the motivic tower

[Open item](item-prop-rational-weight-splitting-input) · level 12


### Statement
Assume the Axiom of Choice and use the universes of the supplied perfect-complex $K$-theory interface. Let $X$ be a quasi-compact quasi-separated scheme over $\mathbb Q$ or over $\mathbb F_p$ for a prime $p$, of finite valuative dimension in the supplied convention. Let $F^\bullet_{\mathrm{mot}}K(X)$ be the Elmanto–Morrow motivic filtration on that nonconnective $K$-theory spectrum. Rationalization means applying $E\mapsto E_{\mathbb Q}=E\wedge\mathbb S_{\mathbb Q}$ to every stage and the augmentation, where $\mathbb S_{\mathbb Q}=\operatorname*{colim}(\mathbb S\xrightarrow{2}\mathbb S\xrightarrow{3}\mathbb S\xrightarrow{4}\cdots)$ is the rational sphere. This is exact and naturally induces $\pi_i(E_{\mathbb Q})\cong\pi_i(E)\otimes_{\mathbb Z}\mathbb Q$ for every integer $i$. There is a natural equivalence of augmented filtered spectra from this rationalized tower to the tail tower

$$q\longmapsto\bigoplus_{j\geq q}\mathbb Q(j)^{\mathrm{mot}}(X)[2j] \quad(q\geq0),$$

extended constantly for $q\leq0$. Here $\mathbb Q(j)^{\mathrm{mot}}(X)$ denotes the rationalization of Elmanto–Morrow's weight-$j$ motivic cohomology spectrum, and $[2j]$ is its $2j$-fold suspension. In particular, the associated motivic spectral sequence has zero differentials after rationalization. The induced image filtration has successive quotients given by the homotopy groups of the corresponding rational weight pieces.

### Statement references

[def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness)

[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:thm-rat-field](https://alphabetamath.cc/item/thm-rat-field)

[math:thm-z-mod-p-is-a-field](https://alphabetamath.cc/item/thm-z-mod-p-is-a-field)

[def-stable-spectra-interface](item-def-stable-spectra-interface)

[lem-adjudicate-7eb670bebc1b-spectral-rationalization](item-lem-adjudicate-7eb670bebc1b-spectral-rationalization)

[prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface)

[math:def-derived-exact-couple](https://alphabetamath.cc/item/def-derived-exact-couple)

### External input
The existence, boundedness and natural rational filtered splitting of the Elmanto–Morrow tower are imported from the cited theorems. Their construction and proof are not reconstructed here. The numbered argument locally applies this imported splitting and the supplied formal lemmas; it does not claim a local proof of the splitting input. In characteristic zero the cited theorem additionally asserts multiplicativity of its equivalence; no multiplicativity of the splitting is asserted here in positive characteristic. The splitting by itself is not a terminal-edge isomorphism: a particular edge comparison also requires the appropriate graded identification and high-filtration vanishing.

### Facts & Assumptions
**Given:** Choice, the fixed universes, $X$ as in the statement and the cited Elmanto–Morrow motivic filtration.

**Goal:** Obtain the stated splitting and its formal spectral-sequence and image-filtration consequences.

[F0] [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) supplies a scheme over a base, here $\operatorname{Spec}\mathbb Q$ or $\operatorname{Spec}\mathbb F_p$. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) supplies the qcqs hypotheses, [math:thm-rat-field](https://alphabetamath.cc/item/thm-rat-field) supplies the rational field and [math:thm-z-mod-p-is-a-field](https://alphabetamath.cc/item/thm-z-mod-p-is-a-field) supplies $\mathbb F_p=\mathbb Z/p\mathbb Z$ for prime $p$. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) supplies $K(X)$, its universes and homotopy indexing; [def-valuative-dimension-and-boundedness](item-def-valuative-dimension-and-boundedness) supplies the valuative-dimension convention. [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies smash, suspension and small coproducts, and [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) supplies coherent augmented towers, graded cofibers and image filtrations.

[A1] Choice is inherited from the specified perfect-category and nonconnective $K$-theory interface and is used when invoking that model of $K(X)$. Choice is also retained in the supplied stable and rationalization foundations. The formal consequences of a supplied split tower introduce no additional selection step. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The external input in Elmanto–Morrow, Theorems 4.12 and 4.27, supplies the natural rational filtered splitting under the stated respective hypotheses. The decreasing-filtration convention is Section 2.2; the proof of Lemma 7.1 explicitly writes the split stage $q$ as the sum over weights $j\geq q$ (there for affine schemes). This is the stagewise meaning of the filtered splitting in the two theorems, not an affine restriction on those theorems.

[F2] [lem-author-9f61e4df2141-split-spectral-cofiber](item-lem-author-9f61e4df2141-split-spectral-cofiber) and [lem-author-9f61e4df2141-tail-splitting](item-lem-author-9f61e4df2141-tail-splitting) identify the graded pieces and zero connecting maps of the tail tower.

[F3] [lem-author-9f61e4df2141-split-tower-boundaries](item-lem-author-9f61e4df2141-split-tower-boundaries) transports those zero boundaries across a tower equivalence, and [lem-author-9f61e4df2141-split-couple-degeneration](item-lem-author-9f61e4df2141-split-couple-degeneration) gives zero differentials in its tower spectral sequence.

[F4] [lem-author-9f61e4df2141-split-image-filtration](item-lem-author-9f61e4df2141-split-image-filtration) identifies the successive image-filtration quotients for such a splitting.

[F5] [lem-adjudicate-7eb670bebc1b-spectral-rationalization](item-lem-adjudicate-7eb670bebc1b-spectral-rationalization) supplies the stated rational sphere, exact stagewise rationalization, its natural homotopy-group comparison and exactness of group rationalization. [prop-tower-exact-couple-interface](item-prop-tower-exact-couple-interface) constructs the associated tower spectral sequence, with $E_2^{a,b}=\pi_{-a-b}\operatorname{gr}^{-b}$ and cohomological page index starting at 2. [math:def-derived-exact-couple](https://alphabetamath.cc/item/def-derived-exact-couple) specifies the successive image and kernel/quotient constructions of its derived couples.

### Proof
1.1 If $X$ is a $\mathbb Q$-scheme, apply Theorem 4.12; if it is an $\mathbb F_p$-scheme, apply Theorem 4.27. In either case the qcqs and finite-valuative-dimension hypotheses are exactly those in [F1]. The imported equivalence gives the displayed natural augmented tail splitting, with graded pieces as in [F2]. The constructions and hypotheses use the interfaces in [F0], and its stagewise rationalization is that of [F5]. [A1, F0, F1, F2, F5, given]

2.1 Apply [F3] to the rationalized tower and the equivalence from step 1.1: all differentials in its tower spectral sequence vanish. This is the associated spectral sequence constructed in [F5]. Exact rationalization preserves its stage cofiber sequences, and the natural homotopy comparison in [F5] identifies the resulting initial exact couple with the original one tensored with $\mathbb Q$, including all three maps. Group rationalization preserves kernels, images and quotients, so the derived-couple formulas in [F5] inductively identify every page and differential with its tensor product with $\mathbb Q$. Thus the original motivic differentials vanish after tensoring. Apply [F4] to the same augmented equivalence to obtain the stated successive image-filtration quotients for the rationalized tower. These are formal consequences of the imported splitting and do not reconstruct it or supply a separate edge comparison. [F3, F4, F5, step 1.1] ∎


## Elmanto–Morrow filtration input

[Open item](item-thm-author-98a750efd0cc-motivic-filtration-input) · level 12


### Statement
Assume the Axiom of Choice for the selected local perfect-complex $K$-theory realization. Let $\mathbb F$ be $\mathbb Q$ or $\mathbb F_p$ for a prime $p$. On the opposite of the category of quasi-compact quasi-separated $\mathbb F$-schemes, nonconnective algebraic $K$-theory has a functorial, multiplicative, $\mathbb N$-indexed decreasing motivic filtration whose zeroth stage is naturally equivalent to $K$. In the terminology of coherently multiplicative filtered spectra, the imported multiplicative filtration includes coherent products, unit and transition compatibility; its maps to $K$ are induced through its zeroth stage.

### Statement references

[def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-opposite-category](https://alphabetamath.cc/item/def-opposite-category)

### External input
This is the existence and zeroth-stage part of the cited Elmanto–Morrow results. It is imported as literature, not proved by the local formal lemmas. The source's later boundedness and convergence assertions require additional hypotheses and are not imported here. The nonconnective $K$-theory is used through the perfect-complex interface of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface), under its stated Choice assumption. This assumption belongs to the selected local realization; it is not an additional geometric hypothesis attributed to Elmanto–Morrow.

### Facts & Assumptions
**Given:** The Axiom of Choice, a prime field $\mathbb F$ and a qcqs $\mathbb F$-scheme.

**Goal:** Supply the functorial multiplicative filtration and its zeroth-stage equivalence under exactly these hypotheses.

[F1] The cited Theorem 1.1(1) states the functorial multiplicative filtration on nonconnective $K$-theory. The initial assertions of Theorems 4.12 and 4.27 state the nonnegative indexing and zeroth-stage identification, respectively in characteristics zero and $p$.

[F2] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) discharges the explicit Choice premise of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) when its common-family enhanced perfect categories and essentially small nonconnective-functor domain are invoked. Definitions 4.9 and 4.23 construct the imported filtration as a pullback of filtered $E_\infty$-algebras, providing the coherent multiplication specified by [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum). No independent choice of a filtration is made here.

### Proof
1.1 Under the inherited Choice premise in [F2], use the selected $K$-theory realization and apply the characteristic-zero assertion of [F1] when $\mathbb F=\mathbb Q$, and the characteristic-$p$ assertion when $\mathbb F=\mathbb F_p$. [F1, F2, given]

2.1 The qcqs hypothesis is exactly the common hypothesis of those initial assertions. The stated functoriality and coherent multiplicativity are the imported theorem's data, with the filtered-algebra structure in [F2]; no finite-valuative-dimension conclusion is used. [F1, F2, given, step 1.1] ∎


## The exact restriction kernel and its denominators

[Open item](item-lem-author-50b5133c29cc-klocal-kernel) · level 12


### Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. Let $X$ be qcqs, $U\subseteq X$ quasi-compact open, $T=X\setminus U$, and $j:U\hookrightarrow X$. In the supplied enhanced categories, $j^*:\mathrm{Perf}(X)\to\mathrm{Perf}(U)$ is exact and its full kernel is $\mathrm{Perf}_T(X)$. For a morphism $c$ of perfect objects, $j^*c$ is an equivalence if and only if $\operatorname{cofib}(c)$ belongs to this support category. The inclusion is fully faithful and stable, and the restriction of that inclusion is canonically zero.

### Facts & Assumptions
**Given:** $X,U,T,j$ as stated, with fixed universes. Assume the Axiom of Choice and use the universes fixed in the Statement.

**Goal:** Identify the actual sequence and the denominators in its triangulated quotient.

[A1] Choice is assumed when invoking the enhanced perfect-category, coherent restriction and derived-enhancement interfaces in [F1] and [F2]. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) gives the full stable perfect and supported sheaf-derived categories and the open-complement criterion.

[F2] [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) supplies the essentially small exact enhanced categories and coherent derived pullback; [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) identifies its homotopy category with ordinary sheaf-derived complexes.

### Proof
1.1 Open restriction is degreewise exact on sheaves and preserves bounded finite locally free local presentations. It therefore induces the actual exact restriction functor in the supplied enhancement. An object lies in its kernel exactly when its cohomology vanishes on $U$, equivalently when its support is contained in $T$, by [F1]. The common-family realization in [F2] represents this same restriction: inclusion of its complexes into all sheaf complexes commutes with open restriction before localization. [A1, F1, F2]

2.1 Exact restriction takes the cofiber of $c$ to the cofiber of $j^*c$. In a stable category a map is an equivalence precisely when its cofiber is zero. This proves the denominator criterion. Fullness and stability of the kernel follow from [F1]. Its restriction lands in the full subcategory of zero objects, which is contractible, supplying the zero composite and its natural nullhomotopy. [F1, F2, step 1.1] ∎


## Supported perfect complexes are invariant under an open neighbourhood

[Open item](item-lem-author-50b5133c29cc-klocal-supported-open-equivalence) · level 12

### Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. Let $X$ be qcqs, let $T\subseteq X$ be closed, and let $v:V\hookrightarrow X$ be a quasi-compact open containing $T$. Actual restriction induces an exact equivalence
$$v^*:\mathrm{Perf}_T(X)\xrightarrow{\sim}\mathrm{Perf}_T(V),$$
with inverse given in the supplied sheaf-derived model by degreewise module extension by zero $v_!$. It induces the natural equivalence $K_T(X)\simeq K_T(V)$, compatible with the support-to-global inclusions and restriction on global K spectra. No quasi-compactness of $X\setminus T$ is needed for this categorical excision lemma.

### Facts & Assumptions
[A1] Choice and the universe bounds are used to invoke the enhanced perfect-category and K-theory suppliers. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** $X,T,V,v$ as stated and the supplied sheaf-derived enhancement.

**Goal:** Construct an actual exact inverse on supported perfect categories, not merely a triangulated equivalence.

[F1] [thm-author-50b5133c29cc-klocal-extension-by-zero-input](item-thm-author-50b5133c29cc-klocal-extension-by-zero-input) gives actual degreewise exact functors $v_!,v^*$, their natural unit/counit, the stalk formula, and $v^*v_!=\mathrm{id}$.

[F2] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) defines perfection locally and support by cohomology stalks; [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input) supplies the actual infinity-localizations. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) supplies K on the common-family realizations of these full categories; its global and supported restriction maps are induced by the common-family derived pullback.

[F3] A scheme is quasi-compact when its underlying space is quasi-compact, and quasi-separated when every intersection of two affine opens is quasi-compact. The abbreviation qcqs means both conditions. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[F4] Exactness of sequences of abelian sheaves can be checked on every stalk. Apply this to the underlying abelian sheaves of modules: stalks preserve kernels, images and cokernels, so $H^n(C)_x=H^n(C_x)$. Applied to the sequence $0\to\mathcal F\to\mathcal G\to0$, the same criterion detects isomorphisms. Thus a complex is acyclic, or a cochain map is a quasi-isomorphism, exactly when this holds at every stalk. [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise)

[F5] An open immersion identifies its source with an open subscheme and its restricted structure sheaf. Write $R_v$ for ordinary module-sheaf restriction to $V$, so $R_v\mathcal G=v^{-1}\mathcal G=\mathcal G|_V$. Write $v^*_{\mathrm{mod}}\mathcal G=\mathcal O_V\otimes_{v^{-1}\mathcal O_X}v^{-1}\mathcal G$ for ordinary module pullback, distinguishing this formula from restriction until they are compared below. [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes) [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace) [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)

[F6] [thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input](item-thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input) supplies K-flat replacements and preservation of K-flat complexes and their quasi-isomorphisms by degreewise module pullback. K-flat means that total tensor with every acyclic complex is acyclic. [lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison](item-lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison) constructs the single localized family whose pullbacks come from those actual degreewise functors. Its inclusion-induced exact equivalences $I_X$ and $I_V$ identify the K-flat localizations with the supplied sheaf-derived categories, and restrict to their full perfect subcategories. The functor-category localization property in [F2] compares functors and natural transformations, not just objects of their homotopy categories.

### Proof
1.1 Let $F\in\mathrm{Perf}_T(V)$. Exactness and the stalk formula in [F1], with the cohomology-stalk identification in [F4], show that the cohomology of $v_!F$ equals that of $F$ on $V$ and is zero off $V$, so its support is contained in $T$. On the open $V$ it is perfect because $v^*v_!F=F$; on the open $X\setminus T$ it is acyclic, hence equivalent to the zero perfect object. These opens cover $X$ because $T\subseteq V$. Thus local perfection in [F2] makes $v_!F$ perfect on $X$. This is why closed ambient support, rather than preservation of arbitrary quasi-coherent sheaves by $v_!$, suffices. [F1, F2, F4]

1.2 The open subscheme $V$ is quasi-compact by hypothesis. Every affine open of $V$ is also an affine open of $X$, since $V$ is an open subscheme of $X$. For any two such affine opens their intersection is quasi-compact by quasi-separatedness of $X$ and [F3]. Hence $V$ is quasi-separated as well. Both $X$ and $V$ are therefore qcqs, as required for [F2] and [F6]. Under the identifications in [F5], $v^{-1}\mathcal O_X=\mathcal O_V$ with its ring structure. The module-pullback formula becomes $\mathcal O_V\otimes_{\mathcal O_V}R_v\mathcal G$. Multiplication $a\otimes s\mapsto as$ is a module-sheaf isomorphism to $R_v\mathcal G$, with inverse $s\mapsto1\otimes s$: the tensor relation gives $a\otimes s=1\otimes as$. These formulas commute with every module-sheaf morphism. Applied degreewise, they therefore give a natural chain isomorphism $v^*_{\mathrm{mod}}C\cong R_vC$ for every complex $C$, commuting with its differentials. [F3, F5, F6, given]

2.1 The degreewise unit identifies $v^*v_!$ with the identity. For $E\in\mathrm{Perf}_T(X)$ the actual counit $v_!v^*E\to E$ is a quasi-isomorphism: at points of $V$ it is an isomorphism on complex stalks, and outside $V$ the source is zero while the target is acyclic since those points lie outside $T$. The stalkwise criterion in [F4] therefore makes the counit a quasi-isomorphism of module-sheaf complexes. Hence this natural transformation becomes an equivalence in the supplied infinity-localization. Both functors are exact by [F1], and step 1.1 verifies their restrictions have precisely the claimed perfect/support domain. They therefore give mutually inverse exact functors of the actual enhanced full subcategories. [F1, F2, F4, step 1.1]

3.1 Let $\widehat{\mathcal D}(X)$ denote the K-flat localization in [F6], and let $\widehat v^*$ be its common-family pullback to $\widehat{\mathcal D}(V)$. Let $R_v^{\mathcal D}$ denote the exact functor on all sheaf-derived complexes induced by $R_v$, namely the restriction used in steps 1.1 and 2.1. On the ordinary category of K-flat $X$-complexes, step 1.2 gives a natural chain isomorphism between degreewise module pullback followed by inclusion among all $V$-complexes, and inclusion among all $X$-complexes followed by $R_v$. Both resulting functors invert quasi-isomorphisms: use [F6] for K-flat pullback and [F1] for exact restriction. The functor-category localization property in [F2] descends this actual natural isomorphism to a natural equivalence $I_V\widehat v^*\simeq R_v^{\mathcal D}I_X$. Thus this is an enhanced comparison, not merely an equality of derived objects. Restriction preserves the local finite locally free presentations of [F2] and has the same cohomology stalks at points of $V$ by [F1] and [F4]; consequently it carries $\mathrm{Perf}_T(X)$ to $\mathrm{Perf}_T(V)$, where $v^{-1}T=T$ because $T\subseteq V$. The same is true of $\widehat v^*$ under $I_X,I_V$. These are full support subcategories, so the natural equivalence restricts to them. It also commutes with their inclusions into the global perfect categories: each component and naturality map is the restriction of the very same comparison just constructed on all complexes. By step 2.1, $R_v^{\mathcal D}$ is an equivalence on supported perfect categories; since $I_X,I_V$ are equivalences there, so is $\widehat v^*$. Apply the K functor of [F2] to this equivalence and to its inclusion square. Its definition uses precisely $\widehat v^*$ for global and supported restriction, so the resulting $K_T(X)\simeq K_T(V)$ is the claimed restriction equivalence and is compatible with the support-to-global inclusions and global restriction. Extension by zero is used solely as an inverse on the support categories, without requiring it to preserve the common K-flat presentation or to be a global scheme pullback. [F1, F2, F4, F5, F6, step 1.1, step 2.1, step 1.2] ∎


## External enhanced quotient criterion and localizing nonconnective K

[Open item](item-thm-author-50b5133c29cc-klocal-categorical-localizing-input) · level 12

### Statement
Assume the Axiom of Choice and compatible fixed universes. A stable infinity-category has a zero object, finite limits and finite colimits, with the same pullback and pushout squares. An exact functor preserves finite limits and finite colimits. Let $\mathrm{Cat}_{\mathrm{ex}}$ have small stable infinity-categories as objects and exact functors as arrows; its mapping spaces retain natural equivalences of exact functors and all their higher homotopies. The zero category has just a zero object. Let $\mathrm{Cat}_{\mathrm{perf}}$ be its full subcategory on idempotent-complete objects, and let $\operatorname{Idem}:\mathrm{Cat}_{\mathrm{ex}}\to\mathrm{Cat}_{\mathrm{perf}}$ be the left adjoint to inclusion. This completion is the closure of the Yoneda image under retracts in presheaves of spaces, with its induced stable structure. Smallness is relative to the chosen universe; categories of small categories are formed in a larger one.

Consider actual exact functors $\mathcal A\xrightarrow{i}\mathcal B\xrightarrow{g}\mathcal C$, with $i$ fully faithful and a specified natural equivalence $\eta:gi\simeq0$. Fully faithful means equivalences on all mapping spaces. The enhanced quotient is the pushout $Q=\mathcal B/\mathcal A=\mathcal B\sqcup_{\mathcal A}0$ in $\mathrm{Cat}_{\mathrm{ex}}$, with its quotient functor $q:\mathcal B\to Q$. Precisely, for every small stable $\mathcal D$ it has the natural mapping-space universal property
$$\operatorname{map}_{\mathrm{Cat}_{\mathrm{ex}}}(Q,\mathcal D)\simeq\operatorname{map}_{\mathrm{Cat}_{\mathrm{ex}}}(\mathcal B,\mathcal D)\times_{\operatorname{map}_{\mathrm{Cat}_{\mathrm{ex}}}(\mathcal A,\mathcal D)}\{0\}.$$
The product is a homotopy pullback, and its points are exact functors from $\mathcal B$ equipped with a natural equivalence of their restriction along $i$ to zero. Thus $(g,\eta)$ specifies an induced exact functor $\bar g:Q\to\mathcal C$, uniquely up to contractible compatible choice. The sequence is called exact when its idempotent-completed sequence identifies $\operatorname{Idem}(\mathcal C)$ with the pushout of $\operatorname{Idem}(\mathcal B)\leftarrow\operatorname{Idem}(\mathcal A)\to0$ in $\mathrm{Cat}_{\mathrm{perf}}$, using the induced map and nullhomotopy.

For a stable $\mathcal D$, $h\mathcal D$ has the same objects and morphisms $\pi_0\operatorname{map}_{\mathcal D}(x,y)$. It has its canonical triangulation: translation is suspension and distinguished triangles are induced by cofiber sequences with their connecting morphisms. Exact enhanced functors induce exact triangulated functors, with the suspension comparison induced by preservation of these colimits. Write $V=h\mathcal B/h\mathcal A$ for the Verdier quotient by the full essential image of $hi$. Explicitly, this is the ordinary categorical localization of $h\mathcal B$ at arrows that have a cone isomorphic to an object of that image. Here a cone of an arrow $f:x\to y$ means a third object $z$ in a distinguished triangle $x\xrightarrow{f}y\to z\to x[1]$; membership in the localization class requires the existence of such a triangle with $z$ isomorphic to an object of the image. The quotient's translation is induced by suspension, and its distinguished triangles are those isomorphic to images of distinguished triangles of $h\mathcal B$. The functor $hg$, which annihilates that image, induces $v:V\to h\mathcal C$ with the induced suspension comparison.

The sequence is exact precisely when $v$ is an equivalence after idempotent completion; equivalently $\operatorname{Idem}(\bar g)$ is an equivalence. Here ordinary idempotent completion means the Karoubi category: objects are $(x,e)$ with $e^2=e$, and arrows $u:(x,e)\to(y,f)$ satisfy $fue=u$; the induced functor on these categories must be an equivalence. In particular the comparison $V\to hQ$ induced by $q$ is an equivalence before completion. These are criteria for the given enhanced functors and their induced quotient map.

Let $\mathbb K_{\mathrm{perf}}$ be the BGT nonconnective functor already used by the supplied K interface. BGT also defines a functor $IK:\mathrm{Cat}_{\mathrm{ex}}\to\mathrm{Sp}$ on all small stable infinity-categories, including those not idempotent-complete. It inverts maps that become equivalences under $\operatorname{Idem}$, and its restriction to $\mathrm{Cat}_{\mathrm{perf}}$ is naturally the supplied $\mathbb K_{\mathrm{perf}}$. More explicitly, naturally in $\mathcal D$,
$$IK(\mathcal D)\simeq IK(\operatorname{Idem}(\mathcal D))\simeq\mathbb K_{\mathrm{perf}}(\operatorname{Idem}(\mathcal D)).$$
For each exact sequence above, $IK(\mathcal A)\to IK(\mathcal B)\to IK(\mathcal C)$ is a cofiber, hence fiber, sequence of spectra. These sequences are functorial for coherent diagrams of the given exact functors and their nullhomotopies. On essentially small idempotent-complete categories this is the same functor and the same diagrams as in the supplied K interface, through its equivalent domain of small presentations.

### Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input)

[math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category)

[math:def-exact-functor-between-triangulated-categories](https://alphabetamath.cc/item/def-exact-functor-between-triangulated-categories)

[math:def-localization-of-a-category-at-a-class-of-morphisms](https://alphabetamath.cc/item/def-localization-of-a-category-at-a-class-of-morphisms)

[math:def-the-idempotent-completion-of-a-preadditive-category](https://alphabetamath.cc/item/def-the-idempotent-completion-of-a-preadditive-category)

[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[def-stable-spectra-interface](item-def-stable-spectra-interface)

### Facts & Assumptions
**Given:** The actual enhanced sequence $(i,g,\eta)$, full faithfulness of $i$, and the compatible universe conventions above. Assume AC as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); it is retained in the imported higher-category and K-theory foundations, without claiming a choice-free version.

**Goal:** Specify the enhanced localization criterion and the localizing property on the correct domain of nonconnective K-theory.

[F1] [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input) supplies the stable, exact and idempotent-complete interfaces, the category $\mathrm{Cat}_{\mathrm{perf}}$, the restricted BGT functor, compact spectra $\mathrm{Sp}^{\omega}$, the stable motive target $\mathcal M_{\mathrm{loc}}$, and its mapping spectra. Reference 0 supplies $\mathrm{Cat}_{\mathrm{ex}}$, the completion adjunction and the canonical homotopy-category triangulation.

[F2] Reference 0, the cofiber convention following Definition 5.12 and Propositions 5.13–5.15, supplies the actual enhanced quotient, its comparison with the triangulated quotient, and the exactness criterion. Use $\kappa=\omega$ only in this criterion: finite colimits and their preservation suffice. The universal mapping-space property specifies its induced map from $(g,\eta)$.

[F3] [math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category) and [math:def-exact-functor-between-triangulated-categories](https://alphabetamath.cc/item/def-exact-functor-between-triangulated-categories) specify the ordinary triangulated structures and exact functors. [math:def-localization-of-a-category-at-a-class-of-morphisms](https://alphabetamath.cc/item/def-localization-of-a-category-at-a-class-of-morphisms) specifies ordinary localization; reference 1 supplies its cone class, triangulation and exact factorization for a Verdier quotient. [math:def-the-idempotent-completion-of-a-preadditive-category](https://alphabetamath.cc/item/def-the-idempotent-completion-of-a-preadditive-category) supplies the Karoubi construction used in the ordinary completion criterion.

[F4] Reference 0, Definition 8.1, Theorem 8.7, Definition 9.6 and Theorem 9.8, supplies the all-small-category nonconnective $IK$ and a natural equivalence
$$IK(\mathcal D)\simeq\operatorname{Map}_{\mathcal M_{\mathrm{loc}}}(U_{\mathrm{loc}}(\mathrm{Sp}^{\omega}),U_{\mathrm{loc}}(\mathcal D)).$$
Here $U_{\mathrm{loc}}$ is the same localizing-motive functor as in [F1], extended to $\mathrm{Cat}_{\mathrm{ex}}$ by completion. A localizing invariant inverts maps becoming equivalences after completion, preserves filtered colimits, and sends exact sequences to cofiber sequences. Its representing formula and this property identify the restriction and completion equivalences in the Statement.

[F5] [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) fixes the coherent essentially small idempotent-complete domain and chooses exactly the BGT functor of [F1]. [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the target spectra, homotopy pullbacks, cofibers and fibers; in spectra cofiber sequences are fiber sequences.

### External input
Import the quotient existence, comparison and criterion in [F2], the triangulated-quotient construction in [F3], and the all-small-category nonconnective functor and its natural representing formula in [F4], under the recorded source hypotheses and reading limits. The stable, exact, retract-completion and homotopy-category interfaces in the Statement are sourced specifications. These are imported results, without a claimed local proof of their existence or comparison theorems.

The mapping-spectrum functor in [F4] preserves finite limits in its second variable by representability; the stable motive category and spectra identify cofiber sequences with fiber sequences. Thus the imported representing formula expresses the stated localizing property. This is BGT's nonconnective $IK$ on the larger domain, restricting to the chosen functor of [F1] and [F5]. Its completion equivalence is natural on coherent diagrams, so it also specifies the application through the essentially small domain without choosing unrelated skeletons for separate arrows. This input applies to actual exact functors with their nullhomotopies; an abstract triangulated equivalence alone does not provide an enhanced functor.


## External connective, nonconnective and automorphism comparisons

[Open item](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons) · level 12


### Statement
Assume the Axiom of Choice and fixed nested Grothendieck universes $U\in V\in W$ with $\omega\in U$; their existence is a separate assumption. Use the stated universe closure convention. Small means $U$-small for the input stable categories, and essentially small means equivalent to a $U$-small category. Input rings lie in $U$. The spectral-presheaf presentation uses $V$-small objects and forms a $W$-small category. All comparisons are evaluated in a common enlarged universe containing that presentation and the cone/suspension tower of BGT Definition 9.6; larger compatible universes for these constructions and motives are assumed when required. For a $U$-small stable infinity-category $D$, its $S_\infty$ construction gives a natural map $D^\simeq\to\Omega^\infty K^{\mathrm{cn}}(D)$ from the maximal subgroupoid. The induced loop at an object $E$ defines a homomorphism $\pi_0\operatorname{Aut}_D(E)\to\pi_1K^{\mathrm{cn}}(D)$; on $\pi_1$ one translates the component of $E$ to the zero component of the grouplike K-space. Composition of automorphisms maps to addition, and exact functors preserve these classes. The canonical natural map $j_D:K^{\mathrm{cn}}(D)\to\mathbb K(D)$ is an isomorphism on $\pi_i$ for $i>0$, in particular on $\pi_1$. On all small stable infinity-categories define $\mathbb K(D)=IK(D)$, BGT's spectrum-valued suspension-colimit functor of Definition 9.6, and take $j_D$ to be its canonical initial-stage map. By Theorem 9.8 this spectrum is naturally equivalent to $\operatorname{Map}_{\mathcal M_{\mathrm{loc}}}(U_{\mathrm{loc}}(\mathrm{Sp}^{\omega}),U_{\mathrm{loc}}(D))$; $U_{\mathrm{loc}}$ itself is motive-valued. On small stable idempotent-complete categories its restriction is naturally identified with the specified nonconnective perfect-complex functor, because that functor is explicitly BGT's $IK$ in the declared multiplicative input. Extend this identification to essentially small categories through equivalence, as in the perfect-complex interface. No value of that restricted interface outside its domain is presupposed.

For a small DHKS-saturated Waldhausen category $C$ admitting factorization, BGT's comparison gives $K^W(C)\simeq K^{\mathrm{cn}}(C_\infty)$, naturally in weakly exact functors; its S-construction map carries each object automorphism class to the class of the same automorphism in $C_\infty$. Here $C_\infty=N(C)[W^{-1}]$ denotes infinity-localization at the weak equivalences, and $K^{\mathrm{cn}}$ is the iterated $S_\infty$ spectrum for a pointed infinity-category with finite colimits. For any commutative unital ring $A$ in $U$, let $C(A)$ be the essentially small Waldhausen category of bounded cochain complexes of $U$-small finitely generated projective $A$-modules, with chain maps, degreewise split monomorphisms as cofibrations, and quasi-isomorphisms as weak equivalences. Apply the small-category comparison to a $U$-small presentation, with its transported Waldhausen structure, in the common enlarged universe. Its localization $C(A)_\infty$ is the full enhanced perfect module category via the actual finite-projective model. Degreewise associated sheaf then identifies it, by the enhanced affine equivalence, with the specified perfect category on $\operatorname{Spec}A$. No noetherian or regularity hypothesis on $A$ is imposed. These comparisons, followed by $j$, compare the class of an automorphism in $\pi_1$, not merely degree-zero object classes.

### Statement references

[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model)

[lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence)

[thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input)

[lem-adjudicate-55b16ac0b0e5-stable-yoneda-waldhausen-presentation](item-lem-adjudicate-55b16ac0b0e5-stable-yoneda-waldhausen-presentation)

[math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)

[math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-projective-module](https://alphabetamath.cc/item/def-projective-module)

### Facts & Assumptions
**Given:** AC and nested Grothendieck universes $U\in V\in W$ with $\omega\in U$, assumed to exist independently of AC; a $U$-small stable infinity-category $D$ and exact functors. Use $V$-small spectral presheaves, a $W$-small presentation and the common enlarged universes specified in the Statement. For the Waldhausen comparison retain factorization and DHKS-saturation. In the local application $A\in U$ is any commutative unital ring.

**Goal:** Import the positive-degree comparison to the specified nonconnective model, record its maps on object automorphisms, and verify the bounded finite-projective application.

[F1] BGT arXiv:1001.2282v4, §7.1, pp. 44–45, gives the S-construction and its natural one-skeleton/core map. Lemma 7.11 and Corollary 7.12, pp. 48–49, give the actual natural Waldhausen comparison under factorization and DHKS-saturation.

[F2] BGT Definition 9.6 and Theorem 9.8, p. 58, supply the spectrum-valued functor $IK$ on all small stable infinity-categories, its initial-stage map $j$ and its mapping-spectrum identification. Fix the uncountable regular cardinal $\kappa$ of BGT Definition 9.1 and the compatible enlarged universes of the Statement containing the cone and suspension tower used in Definition 9.6. For a DHKS-saturated Waldhausen category with factorization, Definition 9.30, p. 63, uses its stabilized localization; Proposition 9.32 and Remark 9.33, p. 64, give canonical positive-degree connective-to-nonconnective agreement. The degree-zero clause requires idempotent completeness and is not asserted in the general part here. [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input) explicitly identifies its spectrum-valued nonconnective functor with BGT's $IK$ on small stable idempotent-complete categories, and supplies the stable/exact, idempotent-complete and motive/mapping-spectrum conventions. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) uses precisely that functor and extends it coherently to essentially small categories; this supplies the required compatibility on its actual domain.

[F3] [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model) supplies the actual bounded-projective enhanced model and its K-projective mapping property. [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence) identifies the associated-sheaf functor with the enhanced affine perfect equivalence. Their Choice- and universe-qualified hypotheses hold for the present commutative unital ring application. [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module) supplies the projective lifting property used to encode finite projectives in a small matrix presentation; finite generation means existence of a finite generating list.

[F4] [lem-adjudicate-55b16ac0b0e5-stable-yoneda-waldhausen-presentation](item-lem-adjudicate-55b16ac0b0e5-stable-yoneda-waldhausen-presentation) defines the Waldhausen, factorization, weakly exact and DHKS-saturated interfaces and constructs, under AC and nested Grothendieck universes $U\in V\in W$ with $\omega\in U$, for every $U$-small stable $D$, a $W$-small saturated Waldhausen presentation $C_D$ with factorization and $N(C_D)[W_D^{-1}]\simeq D$. The presheaves are $V$-small, as required by that supplier. It uses the stably representable spectral-presheaf model of BGT Definition 4.7/Proposition 4.8, with a local verification of homotopy-colimit closure, model factorization, full localization and size. It does not pass to the retract closure of $D$, and does not import those detailed assertions from the unnumbered paragraph after Corollary 7.12.

[F5] [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact) under Choice and [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated) show that $\operatorname{Spec}A$ is qcqs (quasi-compact and quasi-separated), so the scheme domain of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) applies to every affine ring in this item.

[A1] [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) defines the universe closure convention; $U$-small means that the category or simplicial-set data belong to $U$. The existence of the stated nested universes and any required larger ones is assumed separately. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed for the supplied enhanced realizations in [F3] and the selected small presentations, including [F4]. No claim to a choice-free reconstruction of those suppliers is made.

### External input
Import the BGT comparisons and constructions in [F1] and [F2] at reference 0, with their stated hypotheses. The Waldhausen presentation is the locally proved supplier [F4]; compatibility with the specified restricted functor is supplied by the two direct inputs in [F2]. The numbered proof below checks the presentation hypotheses and composes these inputs; the whole item is a local application, not a claimed reconstruction of the imported foundations. The automorphism normalization is the literal map on the core/one-skeleton in the S constructions: a loop of weak equivalences at $E$ is sent to that same loop in the localized core. The comparison is natural at that construction level. Translation to the zero component is canonical on $\pi_1$ of the grouplike homotopy-commutative K-space; different choices of a path give conjugation, which acts trivially on its abelian $\pi_1$. This does not assert arbitrary K-flat complexes are K-projective.

### Proof
1.1 For an arbitrary $U$-small stable infinity-category $D$, apply [F4] with the assumed universes $U\in V\in W$ and $\omega\in U$. Its $V$-small presheaf construction gives the $W$-small saturated Waldhausen presentation $C_D$, with $N(C_D)[W_D^{-1}]\simeq D$. Its local proof verifies inherited model cofibrations and weak equivalences, factorization, gluing, the full infinity-localization and size, so the exact hypotheses of [F1] and the Waldhausen part of [F2] hold. Choice and the separately assumed universe existence are retained through [A1]. Since $C_D$ is $W$-small, apply the comparisons in the common enlarged universe of the Statement; do not assert that $C_D$ is $U$-small. No idempotent completion or functorial strict choice of presentations is used. [F4, A1, construct]

1.2 The indicated split cofibrations and quasi-isomorphisms give the usual Waldhausen structure on $C(A)$: pushouts along degreewise split monomorphisms remain bounded finite-projective complexes, and the quasi-isomorphism gluing property follows from the corresponding short exact sequences of complexes. For a map $f:P\to Q$, use $Q\oplus\operatorname{Cone}(\operatorname{id}_P)$ as a mapping cylinder. The graph of $f$ and the canonical inclusion $P\to\operatorname{Cone}(\operatorname{id}_P)$ is a degreewise split monomorphism, and projection to $Q$ is a quasi-isomorphism since the identity cone is contractible. Their composite is $f$, so factorization holds within $C(A)$. The finite sums, shifts and cones used here remain in the model of [F3]; the Waldhausen axioms are those of [F4]. For the asserted $U$-small presentation, choose a finite generating list of each finite projective $P$, giving a surjection $q:A^n\to P$. Lift $\operatorname{id}_P$ through $q$ by the projective property in [F3], obtaining $s:P\to A^n$; then $e=sq$ satisfies $e^2=e$ and $P\cong\operatorname{im}e$. Between two such image modules, maps are precisely matrices $u$ with $u=e' u e$, where $e'$ denotes the target idempotent. Thus bounded complexes and their chain maps have presentations by finite lists of these matrices and the equations for their differentials. All such codes and maps form sets in $U$, because $A,\omega\in U$ and [A1] gives closure under the required finite products, subsets and countable unions. The resulting category is fully faithfully and essentially surjectively mapped to $C(A)$; transport its split cofibrations and quasi-isomorphisms along that equivalence. This is the promised $U$-small Waldhausen presentation. Selecting equivalent representatives uses [A1], and no regularity or noetherian hypothesis is added. [F3, F4, A1, given, construct]

2.1 Apply [F1] and [F2] to $C_D$. Since $D$ is stable, suspension is already an equivalence, so $N(C_D)[W_D^{-1}][\Sigma^{-1}]\simeq D$. Corollary 7.12 identifies $K^W(C_D)$ with $K^{\mathrm{cn}}(D)$, and Definition 9.30 identifies its nonconnective target with $IK(D)$. Remark 9.33 gives isomorphisms on $\pi_i$ for $i>0$. These are induced by the initial-stage map $j_D$ into the suspension-colimit of Definition 9.6, rather than an independently chosen isomorphism of groups. Theorem 9.8 supplies its natural mapping-spectrum model. By the explicit identification in the multiplicative input of [F2], this same $IK$ restricts naturally to the functor used by the specified perfect-complex interface. Thus the general expression is defined on all small stable categories and agrees with the specified functor wherever that interface is defined. Naturality of $j$ and of the core maps comes from [F1] and [F2], independently of the auxiliary presentation choices. [F1, F2, step 1.1]

2.2 A bounded acyclic projective complex is contractible: its identity map is nullhomotopic by the K-projective property in [F3]. Thus a quasi-isomorphism between bounded projective complexes is a homotopy equivalence. Conversely, a map invertible in the localization induces an isomorphism in the derived category, hence on cohomology, so it is a quasi-isomorphism. This verifies DHKS-saturation. The actual localization is the full perfect module category by [F3], and the associated-sheaf functor gives its enhanced affine identification. By [F5] this affine scheme is qcqs, and [F2] therefore identifies its specified nonconnective functor with the present restriction of $IK$. The enhanced realizations and a small presentation use [A1]. [F2, F3, F5, A1, step 1.2]

3.1 Apply [F1] with the hypotheses verified in steps 1.2 and 2.2. Use the actual module and affine equivalences of [F3] and then the nonconnective comparison of [F2]. Its positive-degree agreement applies to $\pi_1$. For any $D$ the automorphism space $\operatorname{Aut}_D(E)$ is the loop space of $D^\simeq$ at $E$, so the core map induces a group homomorphism on loop components. Composition of automorphisms corresponds to concatenation of these loops. Translation by the inverse of the object class moves its image to the zero component of the grouplike K-space. Its fundamental group is abelian: loop concatenation and the K-space addition have the same unit and satisfy interchange, so they coincide and commute. Changing the translation path therefore has trivial conjugation on $\pi_1$. These maps commute with exact functors by naturality of the core construction and of $j$. The Waldhausen core maps in [F1] carry each automorphism loop to that same localized loop, and associated sheaf carries it to the corresponding sheaf automorphism. This proves the local application with its automorphism normalization. The general positive-degree comparison was derived in step 2.1 using the additional presentation input [F4]; it was not inferred from the Waldhausen-scoped citation alone. Corepresentability, rigidification and delooping foundations remain imported. [F1, F2, F3, step 2.1, step 1.2, step 2.2] ∎


## Isomorphism classes of vector bundles

[Open item](item-def-vector-bundle-classes) · level 13


### Definition
Assume the Axiom of Choice and the suitable universes used for the supplied perfect K-theory construction. Let $X$ be a quasi-compact, quasi-separated scheme and $n$ a nonnegative integer. A **vector bundle** on $X$ is a finite locally free $\mathcal O_X$-module: each point has an open neighbourhood on which it is isomorphic to a finite direct sum of copies of $\mathcal O_X$. It has **rank $n$** if every point has such a neighbourhood with exactly $n$ copies. An isomorphism of vector bundles is an invertible $\mathcal O_X$-linear morphism. Write $\mathrm{Vect}_n(X)$ for the set of their isomorphism classes and $[E]_{\mathrm{iso}}$ for the class of a rank-$n$ bundle $E$ in that set.

The supplied nonconnective perfect K-theory spectrum is $K(X)=\mathbb K(\operatorname{Perf}(X))$, and $K_0(X)=\pi_0K(X)$. A bundle $E$, regarded as a complex concentrated in degree zero, is perfect. Write $[E]\in K_0(X)$ for its object class in this spectral K-zero group. The unit of the ring $K_0(X)$ is denoted $1=[\mathcal O_X]$. Here $[E]$ denotes a K-zero class, not an isomorphism class in $\mathrm{Vect}_n(X)$.

If $X=\operatorname{Spec}A$ for a commutative unital ring $A$, the supplied affine comparison identifies this $K_0(X)$ with the vector-bundle Grothendieck group: the abelian group generated by bundle isomorphism classes subject to $[E]=[E']+[E'']$ for every short exact sequence $0\to E'\to E\to E''\to0$ of vector bundles. Under the comparison the two meanings of $[E]$ agree. This affine assertion makes no identification of perfect K-theory with coherent-sheaf G-theory.

### Facts & Assumptions
**Given:** A quasi-compact, quasi-separated scheme $X$, a nonnegative integer $n$, the Axiom of Choice and suitable universes.

**Goal:** Define the set of bundle isomorphism classes and justify the spectral class, unit and stated affine comparison.

[F1] A finite locally free sheaf has well-defined local rank, and a bundle is locally a finite free sheaf. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[F2] A complex locally quasi-isomorphic to a bounded complex of finite locally free sheaves is perfect. The perfect category contains such complexes. [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)

[F3] For qcqs $X$, the supplied spectrum is defined on the essentially small perfect category; its multiplication has unit induced by $\mathcal O_X$. For a small idempotent-complete stable category, the object-class map identifies the cofiber Grothendieck group with $\pi_0$ of its supplied nonconnective K-theory. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface), [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input)

[F4] Assuming AC and suitable universes, for $X=\operatorname{Spec}A$ with $A$ commutative and unital, the spectral degree-zero group is canonically isomorphic to the vector-bundle Grothendieck group and sends the spectral class of $E[0]$ to the bundle class of $E$. [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)

[F5] The article conventions define qcqs schemes and use finite locally free sheaves as vector bundles. [def-article-conventions](item-def-article-conventions), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F6] On a fixed ringed space, local module sheaves with overlap isomorphisms satisfying identity and cocycle conditions glue to a module sheaf. The glued object with its prescribed local identifications is unique up to unique compatible isomorphism. The theorem constructs its sections as compatible families of local sections. [math:thm-gluing-sheaves](https://alphabetamath.cc/item/thm-gluing-sheaves)

[F7] Schemes carry an underlying topology and structure sheaf; module-sheaf morphisms are linear on sections and commute with restrictions. Exactness of module sheaves means equality of image and kernel sheaves. The commutative unital ring and affine-scheme conventions apply to $X=\operatorname{Spec}A$. Suitable universes use the supplied closure convention; their existence is assumed separately from Choice. [math:def-scheme](https://alphabetamath.cc/item/def-scheme), [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space), [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves), [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring), [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme), [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

### Justification
1.1 Let $T$ be the set of open subsets of $X$. Use only covers $C\subseteq T$ with $\bigcup_{U\in C}U=X$; these covers form a subset of the power set of $T$. On each cover take the local sheaves $\mathcal O_U^n$ and matrices $g_{UV}$ with entries in $\mathcal O_X(U\cap V)$, having two-sided matrix inverses, such that $g_{UU}=I_n$ and $g_{VW}g_{UV}=g_{UW}$ after restriction to triple overlaps. Each matrix acts on local sections by multiplication and commutes with restrictions, so these are precisely module-sheaf gluing data. Conversely a map between free rank-$n$ sheaves is determined by the images of its standard basis sections, giving its matrix; an isomorphism gives an inverse matrix. The families of matrices on each cover form a set, and their union over the indicated set of covers is a set $D$. For $d\in D$, use the specific compatible-family construction of [F6]: on an open $W$, take families $s_U\in\mathcal O_X(W\cap U)^n$ with $s_V=g_{UV}s_U$ on overlaps, restricting componentwise. By [F6] this gives a module sheaf $M_d$ with the prescribed local free charts. It is a specified construction, so no choice from a class of possible glued sheaves is used. Define $d\sim d'$ when $M_d$ and $M_{d'}$ are isomorphic as module sheaves. These isomorphisms are families of linear section maps indexed by the set $T$ and compatible with restrictions; thus their existence defines a relation on the set $D$, and identities, inverses and composition show it is an equivalence relation. The quotient $D/{\sim}$ is a set. Every rank-$n$ bundle $E$ is represented: its trivializing opens form a cover $C\subseteq T$, and Choice selects one trivialization from the nonempty set of trivializations on each $U\in C$. Their overlap maps give the matrices above, and the uniqueness assertion of [F6], with those charts fixed, identifies $E$ with $M_d$. Changing trivializations or covers therefore gives the same quotient element exactly when the bundles are isomorphic. This realizes $\mathrm{Vect}_n(X)$ as $D/{\sim}$, and [F1] ensures rank invariance. For $n=0$ the same construction uses empty matrices and gives the zero sheaf. For empty $X$, the empty cover gives the unique module sheaf; it satisfies every rank-$n$ local condition vacuously, so each $\mathrm{Vect}_n(\varnothing)$ is a singleton. [F1, F5, F6, F7, construct]

2.1 By [F2], the complex $E[0]$, meaning $E$ in degree zero and zero elsewhere, is locally a bounded complex of finite locally free sheaves and hence belongs to $\operatorname{Perf}(X)$. Under the assumed Choice and universe bounds, [F3] supplies an essentially small stable idempotent-complete perfect category and invariance under equivalent small presentations. Apply its object-class comparison on a small presentation; the resulting class in $\pi_0K(X)$ is independent of that presentation and invariant under isomorphism. Its unit assertion gives $1=[\mathcal O_X[0]]$. If $X=\operatorname{Spec}A$ for the stated commutative unital ring, [F4] applies under the same Choice and universe assumptions and identifies these spectral object classes with the bundle generators of the Grothendieck group with its short-exact-sequence relations, interpreted by [F7]. Thus both meanings of $[E]$ agree on affines. No comparison with coherent-sheaf G-theory is used. [F2, F3, F4, F5, F7, step 1.1] ∎


## Units split the K one determinant

[Open item](item-lem-unit-section-of-k-one-determinant) · level 13


### Statement
Assume AC and let X be a quasi-compact quasi-separated scheme, with K(X)=𝕂(Perf(X)) as specified in [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface). There is a natural group homomorphism

$$s_X:\Gamma(X,\mathcal O_X)^\times\longrightarrow K_1(X),\qquad u\longmapsto[\mathcal O_X\xrightarrow{u}\mathcal O_X].$$

There is a natural determinant homomorphism det_X:K₁(X)→Γ(X,$O_X$)×, characterized by the usual stable matrix determinant on each affine restriction under the explicit affine comparison. It satisfies $\det_X\circ s_X=\mathrm{id}$; hence determinant is surjective and $s_X$ injective. For a vector-bundle automorphism α, det_X([α]) is the unit inducing the top-exterior-power automorphism det(α) of its determinant line (defined locally on rank loci). Neither a global resolution property nor regularity/noetherian hypotheses are required. This statement makes no identification of a motivic projection with determinant.

### Facts & Assumptions
**Given:** qcqs X, AC, the supplied perfect enhancement and nonconnective K functor, in the fixed compatible universes of [F1] and [F3]; existence of these universes is a separate size assumption. Rings below are commutative and unital. The notation [α] is the automorphism loop under the natural core→connective K→nonconnective K construction, not an object class in K₀.

**Goal:** Establish the precise affine π₁ comparison and unit normalization, construct det_X and $s_X$, and prove the splitting.

[F1] [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) supplies the actual sheaf-derived perfect model and exact pullbacks. [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence) and [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model) identify its affine fiber with the enhanced bounded finite-projective model. [lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback](item-lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback) identifies actual affine pullback with derived extension of scalars on those representatives.

[F2] [thm-author-da44cda020c0-units-k1-classical-comparisons](item-thm-author-da44cda020c0-units-k1-classical-comparisons) supplies the matrix/Quillen/S/Gillet–Waldhausen comparisons, with their automorphism-class normalization.

[F3] [thm-author-da44cda020c0-units-k1-enhanced-comparisons](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons) supplies the actual Waldhausen-to-infinity K comparison, the natural automorphism classes and j inducing an isomorphism on π₁ to the supplied nonconnective functor.

[F4] [lem-author-da44cda020c0-units-k1-stable-matrix-determinant](item-lem-author-da44cda020c0-units-k1-stable-matrix-determinant) constructs determinant on GL(A)_ab; [lem-author-da44cda020c0-units-k1-determinant-base-change](item-lem-author-da44cda020c0-units-k1-determinant-base-change) proves its ring-map naturality.

[F5] [lem-author-da44cda020c0-units-k1-gluing-units](item-lem-author-da44cda020c0-units-k1-gluing-units) and [lem-author-da44cda020c0-units-k1-local-determinant-gluing](item-lem-author-da44cda020c0-units-k1-local-determinant-gluing) supply unit sheaf gluing and the induced homomorphism. [lem-author-da44cda020c0-units-k1-split-surjective-homomorphism](item-lem-author-da44cda020c0-units-k1-split-surjective-homomorphism) gives surjectivity and injectivity from a right inverse.

[F6] [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles) supplies the exterior-power determinant line and its local wedge bases and pullback compatibility. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank) defines finite locally free bundles with locally constant, chart-independent rank, allowing different ranks on different components.

[F7] [math:def-scheme](https://alphabetamath.cc/item/def-scheme) defines a scheme as locally affine with its restricted structure sheaf. Here an affine open is an open subset with that restricted sheaf isomorphic to an affine scheme. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) defines the two qcqs conditions. Under the assumed AC, [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact) makes every affine scheme quasi-compact, and [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated) makes it quasi-separated. Thus every affine open and every affine refinement used below is qcqs, so its K-theory and pullbacks along the indicated scheme morphisms lie in the domain of [F1]. [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes) defines the morphisms used for naturality; their underlying maps are continuous. [math:lem-distinguished-open-refinement-at-a-point](https://alphabetamath.cc/item/lem-distinguished-open-refinement-at-a-point) refines any open neighborhood of a point in an affine chart to a distinguished open, and [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion) identifies that open, with its restricted sheaf, with the spectrum of a principal localization. Consequently every point of an arbitrary open subset of a scheme has an affine open neighborhood inside that subset: intersect an affine chart with the given open and apply these two results.

[F8] [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module) supplies the lifting property against surjective module maps. A finite projective module means a finitely generated module with this property; finite generation means generation by a finite list.

[F9] [math:def-mapping-cylinder-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cylinder-of-a-chain-map) specifies the cylinder terms and differential; [math:thm-the-mapping-cylinder-factors-a-chain-map](https://alphabetamath.cc/item/thm-the-mapping-cylinder-factors-a-chain-map) factors a chain map as a degreewise split monomorphism followed by a chain-homotopy equivalence. [math:thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism](https://alphabetamath.cc/item/thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism) supplies the latter map's quasi-isomorphism property. We apply these chain statements to cochains by $C^{\sharp}_n=C^{-n}$ and $d^{\sharp}_n=d_C^{-n}$; homology in degree $n$ is then cohomology in degree $-n$, and a chain homotopy becomes a degree-minus-one cochain homotopy.

[A1] AC is [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and is retained for the supplied enhanced affine realizations and small presentations in [F1]–[F3]. It also supplies the Choice hypothesis of affine quasi-compactness in [F7]. The local projective lifting and affine-neighborhood arguments below require no additional infinite selections.

### Proof
1.1 For a ring $A$, let $P(A)$ and $C(A)$ have the exact and Waldhausen structures specified in [F2] and [F3]. If $q:P\twoheadrightarrow Q$ is a surjection between finite projectives, lift $1_Q$ through $q$ using [F8] to obtain a section $t$. Then $1_P-tq$ has image $\ker q$, so the images of a finite generating list of $P$ generate that kernel. It is projective: extend any lifting problem from the kernel to $P$ using this projection, lift by projectivity of $P$, and restrict to the kernel. Thus $P(A)$ is closed under kernels of its surjections, verifying the Gillet–Waldhausen hypothesis in [F2]. For a cochain map $f:C\to D$, reindex as in [F9]. The cylinder has cochain terms $C^i\oplus D^i\oplus C^{i+1}$, hence remains bounded finite-projective: finite sums are finitely generated, and lifts can be formed summand by summand using [F8]. By [F9] its maps give a degreewise split monomorphism followed by a quasi-isomorphism, with composite $f$. The localization is the full enhanced perfect category by [F1]. A map invertible there induces isomorphisms on cohomology and is therefore a quasi-isomorphism, while every quasi-isomorphism is inverted by construction; this verifies DHKS-saturation. The finite-projective model in [F1] also proves that bounded projective quasi-isomorphisms are homotopy equivalences, and that bounded acyclic projective complexes are contractible by applying its K-projective mapping property to the identity. Thus all the comparison hypotheses in [F2] and [F3] hold, under the inherited size and Choice assumptions [A1]. [F1, F2, F3, F8, F9, A1]

2.1 By [F7], $\operatorname{Spec}A$ is qcqs under the assumed AC, so the affine use of [F1] is defined. Compose the actual maps of [F2], the actual Waldhausen/infinity comparison of [F3], j on π₁ from [F3], and the exact affine enhancement equivalence of [F1]. They give an isomorphism $c_A:GL(A)_{ab}\xrightarrow{\sim}\pi_1\mathbb K(\operatorname{Perf}(\operatorname{Spec}A))$. Every step carries an automorphism M of Aⁿ to the class of that same degree-zero automorphism: degree-zero inclusion is literal, the S-construction comparisons use its core loop, and associated sheaf sends it to its matrix acting on $O^n$. Thus $c_A([u])=[\mathcal O\xrightarrow{u}\mathcal O]$. This uses π₁ agreement in the positive-degree range of j; no π₀-only comparison is substituted. [F1, F2, F3, F7, A1, step 1.1]

3.1 This $c_A$ is natural for unital A→B. Extension of scalars takes finite projectives to finite projectives and preserves split monomorphisms. A bounded projective quasi-isomorphism is a homotopy equivalence by step 1.1, so tensor with B preserves its homotopy-inverse equations. By [F9], their tensor images are again quasi-isomorphisms, without a flatness hypothesis. Pushouts along the degreewise split inclusions are preserved by the scalar-extension functor, as verified in [F2]; hence it is weakly exact on C(A). All comparisons are induced by the corresponding actual functors in [F1]–[F3], and on matrix generators they send M to its entrywise image. The resulting π₁ naturality square commutes. Define $d_A=\det_A\circ c_A^{-1}$; [F4] makes these homomorphisms commute with all such ring maps, and $d_A([u])=u$ by step 2.1. [F1, F2, F3, F4, F9, step 1.1, step 2.1]

4.1 Given k∈K₁(X), on each affine open V=Spec(A) take $d_A(k|_V)\in\mathcal O_X(V)^\times$. By [F7], the intersection of two affine opens is covered by affine open neighborhoods W contained in that intersection. These affine V and W are qcqs by [F7], so their restrictions in [F1] are defined. Restrict further to each such W. Naturality from step 3.1 identifies both restrictions with $d_{\mathcal O(W)}(k|_W)$. They therefore agree as sections on the intersection by the sheaf uniqueness axiom. Apply [F5] to glue a unique global unit det_X(k). The same gluing lemma shows det_X is a homomorphism and independent of the affine cover. [F1, F4, F5, F7, step 3.1]

5.1 A global unit is the automorphism $m_u$ of $O_X$. The natural automorphism map in [F3] defines $s_X(u)=[m_u]$. Composition $m_u m_v=m_{uv}$ makes $s_X$ a group homomorphism. It is compatible with scheme pullback by [F1] and [F3]. Restriction to an affine V sends its class to the class [u|_V] of step 2.1. [F1, F3, step 2.1, step 4.1]

6.1 The restriction of $\det_X(s_X(u))$ to each affine V is u|_V by steps 3.1 and 5.1. Unit sheaf uniqueness in [F5] gives $\det_X(s_X(u))=u$ globally. The right-inverse lemma in [F5] proves surjectivity of determinant and injectivity of $s_X$. For f:Y→X between qcqs schemes, its continuity in [F7] makes f⁻¹(V) open for every affine V around f(y). The affine refinement argument in [F7] gives an affine W around y inside f⁻¹(V). Step 3.1 proves determinant naturality on W; sheaf uniqueness then proves it globally. Thus both maps are natural on the stated category. [F1, F5, F7, step 3.1, step 4.1, step 5.1]

7.1 For an automorphism α of a vector bundle E, [F6] supplies its locally constant rank and trivializing neighborhoods; refine them to affine opens by [F7]. On each rank locus define det(E) by its top exterior power as in [F6]. Restrictions of these powers agree canonically, so this defines the determinant line also when ranks vary between components. Naturality of the automorphism construction restricts [α] to the matrix class of α there. The top-wedge expansion in [F6] says that its action on det(E) is multiplication by that matrix determinant, exactly the local unit used in step 4.1. These local units glue uniquely; a line-bundle automorphism is canonically multiplication by a unit, because that is true on trivializations and scalar multiplication commutes with transition units. Thus det_X([α]) has the asserted exterior determinant interpretation. The empty-cover case of unit gluing in [F5] includes the empty scheme in steps 4.1 and 6.1 and in this local comparison: the unique empty family glues to its unique unit. No value of the K-group of the empty scheme is required for this argument. This completes the proof. [F1, F3, F4, F5, F6, F7, step 4.1, step 6.1] ∎


## Motivic filtration and image groups

[Open item](item-def-motivic-filtration) · level 13


### Definition
Assume the Axiom of Choice and fix a field $k$, algebraically closed under the article convention unless otherwise specified. Write $\mathrm{Sch}_k$ for the category of quasi-compact quasi-separated $k$-schemes and $k$-morphisms, as in [def-article-conventions](item-def-article-conventions). For $X$ in this category, let $K(X)$ be the nonconnective $K$-theory spectrum of perfect complexes, and let $K_i(X)=\pi_iK(X)$ for every integer $i$, as in [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface).

The **motivic filtration** $F^\bullet_{\mathrm{mot}}K$ is the Elmanto–Morrow functorial multiplicative nonnegative filtration supplied by [thm-author-98a750efd0cc-motivic-filtration-input](item-thm-author-98a750efd0cc-motivic-filtration-input), restricted from the prime field of $k$ to $k$-schemes. Extend it to integer indices by the construction of [lem-author-98a750efd0cc-filtration-extension](item-lem-author-98a750efd0cc-filtration-extension). Thus it is a functor

$$F^\bullet_{\mathrm{mot}}K:\mathrm{Sch}_k^{\mathrm{op}}\longrightarrow\operatorname{CAlg}(\operatorname{FilSp}),$$

where $\operatorname{FilSp}$ is the category of integer-indexed decreasing spectra with coherent transitions and $\operatorname{CAlg}$ denotes its coherently commutative, associative and unital algebra objects, as specified in [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum). Its zeroth stage is naturally equivalent to $K(X)$; we use that equivalence to write $F^0_{\mathrm{mot}}K(X)=K(X)$. Its multiplication includes maps

$$F^a_{\mathrm{mot}}K(X)\wedge F^b_{\mathrm{mot}}K(X)\longrightarrow F^{a+b}_{\mathrm{mot}}K(X)$$

for all integers $a,b$, coherently compatible with transitions, pullback and the multiplication on $K(X)$.

For $i\in\mathbb Z$ and $j\geq0$, define the **image filtration group**

$$F^j_{\mathrm{mot}}K_i(X)=\operatorname{im}\bigl(\pi_iF^j_{\mathrm{mot}}K(X)\longrightarrow K_i(X)\bigr).$$

The arrow is induced by the transition to stage zero and its identification with $K(X)$. Its image is a subgroup, and the induced map onto that subgroup is surjective. The same formula also makes sense for negative $j$ under the stated extension, in which case it gives all of $K_i(X)$.

### Facts & Assumptions
**Given:** A field $k$, a qcqs $k$-scheme $X$, the Axiom of Choice, the fixed compatible universes of the supplied spectral interfaces, and the integer indices specified above.

**Goal:** Justify the functor, its augmentation and multiplication, and the image-group definition without reconstructing the external filtration.

[F1] [def-article-conventions](item-def-article-conventions) defines the scheme category. By [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification), the prime subfield $k_0$ of $k$ admits a unit-preserving isomorphism from $\mathbb F=\mathbb Q$ or $\mathbb F_p$ for a prime $p$. Composing this isomorphism with $k_0\hookrightarrow k$ gives a unit-preserving embedding $\iota:\mathbb F\hookrightarrow k$.

[F2] The assumed Choice premise, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), discharges the explicit AC hypothesis of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) when its common-family perfect-complex realization and essentially small nonconnective-functor domain are invoked. That interface supplies contravariant nonconnective $K$, all integer homotopy groups and the ambient ring structure. [thm-author-98a750efd0cc-motivic-filtration-input](item-thm-author-98a750efd0cc-motivic-filtration-input) imports the nonnegative filtration, functoriality, multiplication and zeroth-stage equivalence on qcqs schemes over the prime field.

[F3] [lem-author-98a750efd0cc-filtration-extension](item-lem-author-98a750efd0cc-filtration-extension) supplies the integer-indexed extension; [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) and [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum) specify its augmentation and coherent algebra-object notation. All diagrams and algebra objects use the fixed compatible universes required by these interfaces.

[F4] [lem-author-98a750efd0cc-filtration-image](item-lem-author-98a750efd0cc-filtration-image), [lem-author-98a750efd0cc-filtration-nesting](item-lem-author-98a750efd0cc-filtration-nesting), [lem-author-98a750efd0cc-filtration-naturality](item-lem-author-98a750efd0cc-filtration-naturality) and [lem-author-98a750efd0cc-filtration-products](item-lem-author-98a750efd0cc-filtration-products) establish, respectively, subgroup and surjectivity, nesting, naturality and compatibility of products for such images.

[F5] [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence) sends a unit-preserving map of commutative rings $A\to B$ contravariantly to a morphism of affine schemes $\operatorname{Spec}B\to\operatorname{Spec}A$. It applies to the embedding $\iota$ in [F1].

### Justification
1.1 Invoke the perfect-complex $K$-theory interface in [F2] under the assumed Choice premise and compatible universes. By [F1], use the unit-preserving embedding $\iota:\mathbb F\hookrightarrow k$ from the appropriate standard prime field. By [F5] it induces $\operatorname{Spec}k\to\operatorname{Spec}\mathbb F$. Compose each $k$-scheme structure morphism with this map. The underlying scheme remains qcqs; a $k$-morphism commutes with the composite structure maps, so is an $\mathbb F$-morphism. Leaving underlying morphisms unchanged preserves identities and composition and gives a forgetful functor $\mathrm{Sch}_k\to\mathrm{Sch}_{\mathbb F}$. Restrict the filtration functor in [F2] along its opposite. No finite-type, regularity or finite-dimensional assumption is needed. [F1, F2, F5, given]

2.1 Use the natural zeroth-stage equivalence in [F2] to identify stage zero with the commutative ring spectrum $K$, and apply the extension in [F3] to the restricted nonnegative tower. Its coherent products give the displayed maps. The extension and all maps are functorial because they are built from the original transitions and products; the equality at stage zero denotes the supplied natural equivalence. Apply the image lemma in [F4] to each stage-to-$K$ map to obtain the subgroup and surjectivity statements. The remaining lemmas in [F4] give nesting, pullback compatibility and product containment. If $j<0$, the extended stage and its map to $K$ are identified with $K$ and its identity, so the image is the whole group. This justifies the definition and its stated properties. [F2, F3, F4, step 1.1] ∎

### Scope
The external construction is not reconstructed here. No completeness, boundedness, associated-graded identification or injectivity of a stage-to-$K$ map is asserted by this definition.


## Full faithfulness of the perfect triangulated quotient

[Open item](item-lem-author-50b5133c29cc-klocal-quotient-full-faithfulness) · level 13


### Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. For qcqs $X$, quasi-compact open $U$ and $T=X\setminus U$, the actual restriction induces a fully faithful triangulated functor
$$h\mathrm{Perf}(X)/h\mathrm{Perf}_T(X)\longrightarrow h\mathrm{Perf}(U).$$
The quotient inverts precisely maps whose restriction to $U$ is invertible.

### Facts & Assumptions
**Given:** The actual enhanced restriction and its ordinary homotopy functor. Assume the Axiom of Choice and use the universes fixed in the Statement.

**Goal:** Verify fullness and faithfulness, without assuming essential surjectivity.

[A1] Choice is inherited when invoking the actual restriction and kernel interface in [F1], the supplied enhanced perfect categories, and the choice of small models in [F4]. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [lem-author-50b5133c29cc-klocal-kernel](item-lem-author-50b5133c29cc-klocal-kernel) identifies the exact restriction kernel and the denominator class $S$ consisting of maps whose cone is supported on $T$. By [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes), its ordinary homotopy category is a full subcategory closed under both shifts and cones, with the inherited distinguished triangles. Thus it is a full triangulated subcategory of $h\mathrm{Perf}(X)$.

[F2] Clauses (a) and (b) of [thm-author-50b5133c29cc-klocal-tt-extension-input](item-thm-author-50b5133c29cc-klocal-tt-extension-input) supply roofs for morphisms between restricted perfect objects and the equalizer property for maps with identical restriction. These are assertions in the ordinary sheaf-derived categories identified with the homotopy categories in [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes).

[F3] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) defines qcqs: the underlying space is quasi-compact, and intersections of two affine opens are quasi-compact. Quasi-compactness of the open $U$ means quasi-compactness of its underlying space. Write $j:U\hookrightarrow X$. The notation $h$ means the ordinary homotopy category of the supplied perfect category, with the shifts and distinguished triangles specified in [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes). Fully faithful means bijective on every Hom set. A triangulated functor means an exact functor in the sense of [math:def-exact-functor-between-triangulated-categories](https://alphabetamath.cc/item/def-exact-functor-between-triangulated-categories), including its natural shift comparison.

[F4] [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness) supplies small equivalent models of $\mathrm{Perf}(X)$ and its full supported subcategory under the stated AC and universe assumptions. Passing to ordinary homotopy categories gives models with sets of objects and arrows. Transport their triangles, support subcategory and restriction along these equivalences. This satisfies the smallness alternative in the calculus theorem used in [F5].

[F5] The imported Stacks input recorded below states that cone denominators for a full triangulated subcategory form a two-sided multiplicative system, in the sense of [math:def-multiplicative-system-in-a-category](https://alphabetamath.cc/item/def-multiplicative-system-in-a-category). It identifies the Verdier quotient as the localization in [math:def-localization-of-a-category-at-a-class-of-morphisms](https://alphabetamath.cc/item/def-localization-of-a-category-at-a-class-of-morphisms) and gives exact factorization of an exact functor killing the subcategory. For the small models in [F4], [math:thm-the-calculus-of-fractions-constructs-the-localization](https://alphabetamath.cc/item/thm-the-calculus-of-fractions-constructs-the-localization) supplies single roofs $E\xleftarrow{c}Q\xrightarrow{a}F$, representing $q(a)q(c)^{-1}$, where $q$ is the quotient functor and $c\in S$. Refining by a denominator gives the same quotient morphism.

### Proof
1.1 Use the small models of [F4]; equivalence transports the following argument back to the actual categories. Since restriction kills the kernel, [F5] factors it as an exact functor through the Verdier quotient. Given a morphism $b:j^*E\to j^*F$, [F2] gives perfect $Q$ and $c:Q\to E$, $a:Q\to F$ with $j^*c$ invertible and $b=(j^*a)(j^*c)^{-1}$. By [F1], $c\in S$. Thus the quotient roof $E\xleftarrow{c}Q\xrightarrow{a}F$ maps to $b$, proving fullness on all object pairs. [A1, F1, F2, F3, F4, F5]

2.1 Every quotient morphism is a single roof $(c,a)$ by [F5], whose multiplicative-system and smallness hypotheses were supplied in [F1] and [F4]. If its restriction is zero, then $j^*a=0$ because $j^*c$ is invertible. The equalizer property in [F2], applied to $a$ and the zero map, gives $d:Q'\to Q$ with $j^*d$ invertible and $ad=0$. By [F1], $d\in S$; refining the roof by $d$ gives $(cd,ad)=(cd,0)$, which represents zero by [F5]. The exact induced functor is additive, so its map on each abelian Hom group has zero kernel and is injective. Together with step 1.1 this proves full faithfulness. Finally, $q(f)$ invertible implies $j^*f$ invertible by functoriality; conversely $j^*f$ invertible implies $f\in S$ by [F1], so $q(f)$ is invertible. This proves the asserted precise denominator class. [F1, F2, F3, F4, F5, step 1.1] ∎

### External input
The cone-denominator multiplicative-system assertion and exact Verdier factorization in [F5] are imported from [The Stacks Project, Lemma 13.6.6, Definition 13.6.7 and Lemma 13.6.8](https://stacks.math.columbia.edu/tag/05RA), with the hypotheses and reading limits in the reference contract. The roof construction is the declared Math Library theorem. The two-step proof of full faithfulness is a local composition of these facts with the restriction-kernel and perfect-morphism inputs; this item does not claim to reprove the imported categorical machinery.


## Every open perfect complex is a retract of a restriction

[Open item](item-lem-author-50b5133c29cc-klocal-retract-density) · level 14


### Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. Let $X$ be qcqs and $U\subseteq X$ quasi-compact open with complement $T$. Every perfect object on $U$ is a direct summand of the restriction of a perfect object on $X$. Consequently the functor
$$h\mathrm{Perf}(X)/h\mathrm{Perf}_T(X)\longrightarrow h\mathrm{Perf}(U)$$
is an equivalence after idempotent completion.

### Facts & Assumptions
**Given:** A perfect object $F$ on $U$. Assume the Axiom of Choice and use the universes fixed in the Statement.

**Goal:** Prove density up to retracts with no assertion that $F$ itself extends.

[A1] Assume AC as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). Use [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) with a base universe containing $\omega$ and the scheme data and a larger universe for ambient derived categories, as in the smallness supplier [F4]. Existence of suitable universes is assumed separately from AC. Besides the inherited uses in [F2] and [F4], AC chooses the set-indexed splitting family and then a family of preimages and isomorphisms indexed by the target objects in step 2.1.

[F1] [thm-author-50b5133c29cc-klocal-tt-extension-input](item-thm-author-50b5133c29cc-klocal-tt-extension-input) gives the classical Euler extension criterion and $[F[1]]=-[F]$. Its Euler group is generated by perfect-object classes modulo triangle relations, with restriction induced by $j^*$; in particular finite sums give addition. The criterion applies to qcqs $X$ and quasi-compact open $j:U\hookrightarrow X$.

[F2] [lem-author-50b5133c29cc-klocal-quotient-full-faithfulness](item-lem-author-50b5133c29cc-klocal-quotient-full-faithfulness) supplies the actual fully faithful triangulated quotient functor. [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) supplies the perfect and supported categories, their restriction, shifts and finite sums, and idempotent completeness of $h\mathrm{Perf}(U)$. Here $h$ denotes the ordinary homotopy category. The quotient and target are preadditive: their Hom sets are abelian groups and composition is bilinear. The quotient functor is additive, meaning it preserves addition in each Hom group. Fully faithful means bijective on each Hom set. A retract of $B$ is an object $A$ with maps $i:A\to B$ and $p:B\to A$ satisfying $pi=1_A$; then $ip$ is an idempotent on $B$, that is, $(ip)^2=ip$.

[F3] [math:def-the-idempotent-completion-of-a-preadditive-category](https://alphabetamath.cc/item/def-the-idempotent-completion-of-a-preadditive-category) defines $\operatorname{Kar}(\mathcal C)$: objects are $(A,e)$ with $e^2=e$; arrows $(A,e)\to(B,f)$ are arrows $u:A\to B$ satisfying $u=fue$; composition is inherited and the identity on $(A,e)$ is $e$. [math:thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal](https://alphabetamath.cc/item/thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal) constructs the additive extension into a target with supplied splittings and permits choosing those splittings under AC when the source is small and the target idempotent complete.

[F4] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) defines qcqs: the underlying space is quasi-compact and the intersection of two affine open subschemes is quasi-compact. Quasi-compactness of $U$ means quasi-compactness of its underlying space. Every affine open of $U$ is also an affine open of $X$, so $U$ is quasi-separated and hence qcqs. Thus [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness) applies to both $X$ and $U$, and to the supported subcategory on $X$. Choose small equivalent models, transporting the indicated restriction and full supported subcategory along the equivalences. The ordinary quotient has the same set of objects as the source model; its Hom sets are supplied by the quotient in [F2] and identified there with Hom sets in the small target model. Thus we may work with small preadditive categories $\mathcal C=h\mathrm{Perf}(X)/h\mathrm{Perf}_T(X)$ and $\mathcal D=h\mathrm{Perf}(U)$ and the induced functor $R:\mathcal C\to\mathcal D$.

[F5] [math:def-equivalence-and-adjoint-equivalence-of-categories](https://alphabetamath.cc/item/def-equivalence-and-adjoint-equivalence-of-categories) defines an equivalence by a quasi-inverse functor and natural isomorphisms to the identity functors. [math:thm-fully-faithful-split-essentially-surjective-characterises-equivalence](https://alphabetamath.cc/item/thm-fully-faithful-split-essentially-surjective-characterises-equivalence) states that a fully faithful functor with specified preimage objects and isomorphisms for every target object is an equivalence; once this family is supplied, the criterion needs no further Choice.

### Proof
1.1 In the source-side Euler group of [F1], $[F\oplus F[1]]=0$. The zero class belongs to the image of restriction from $X$, so [F1] gives perfect $E$ on $X$ with $j^*E\simeq F\oplus F[1]$ in the ordinary derived category. The canonical inclusion and projection exhibit $F$ as a summand of $j^*E$. No equality with the currently defined $K_0$ is used. [F1, F2, given]

2.1 Work in the small models $R:\mathcal C\to\mathcal D$ of [F4]. For every $(A,e)$ in $\operatorname{Kar}(\mathcal C)$, idempotent completeness of $\mathcal D$ gives a splitting $R(A)\xrightarrow{p_e}S_e\xrightarrow{i_e}R(A)$ with $i_ep_e=R(e)$ and $p_ei_e=1_{S_e}$. These splitting triples form a nonempty set for each $(A,e)$ since $\mathcal D$ is small; [A1] chooses a family indexed by the set of objects of $\operatorname{Kar}(\mathcal C)$. Apply [F3] to obtain $\widetilde R(A,e)=S_e$ and $\widetilde R(u)=p_fR(u)i_e$, extending $R$ up to natural isomorphism. The Hom group from $(A,e)$ to $(B,f)$ is the subgroup of $u:A\to B$ with $u=fue$. Full faithfulness of $R$ identifies it with the subgroup of $v:R(A)\to R(B)$ satisfying $v=R(f)vR(e)$. The mutually inverse maps $v\mapsto p_fvi_e$ and $w\mapsto i_fwp_e$ identify that subgroup with $\operatorname{Hom}_{\mathcal D}(S_e,S_f)$, so $\widetilde R$ is fully faithful. By step 1.1 any target object $F$ is a retract of some $R(A)$; write the retraction as $i:F\to R(A)$ and $p:R(A)\to F$ with $pi=1_F$. By full faithfulness there is a unique $e:A\to A$ with $R(e)=ip$, and faithfulness implies $e^2=e$. The maps $p i_e:S_e\to F$ and $p_e i:F\to S_e$ are inverse by the splitting equations. Hence $F\simeq\widetilde R(A,e)$. For each object $F$ of $\mathcal D$, let $W_F$ be the set of pairs $(B,\varepsilon)$ with $B\in\operatorname{Ob}(\operatorname{Kar}(\mathcal C))$ and $\varepsilon:\widetilde R(B)\xrightarrow{\sim}F$. It is a set because both $\operatorname{Kar}(\mathcal C)$ and $\mathcal D$ are small, and is nonempty by the preceding construction. Apply [A1] to the family $(W_F)_{F\in\operatorname{Ob}(\mathcal D)}$, obtaining specified $B_F$ and $\varepsilon_F$ simultaneously. Thus $\widetilde R$ is split essentially surjective. Together with its full faithfulness, [F5] gives a quasi-inverse and the natural isomorphisms establishing the stated equivalence after idempotent completion. [A1, F2, F3, F4, F5, step 1.1] ∎


## The actual enhanced restriction sequence and its K fiber

[Open item](item-lem-author-50b5133c29cc-klocal-enhanced-localization) · level 15


### Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. For qcqs $X$, quasi-compact open $U$ and closed complement $T$, the actual sequence of essentially small stable categories
$$\mathrm{Perf}_T(X)\longrightarrow\mathrm{Perf}(X)\xrightarrow{j^*}\mathrm{Perf}(U)$$
is exact: the induced enhanced Verdier quotient becomes equivalent to $\mathrm{Perf}(U)$ after idempotent completion. Applying the supplied nonconnective functor gives a natural fiber sequence $K_T(X)\to K(X)\to K(U)$, in all integer homotopy degrees.

### Facts & Assumptions
**Given:** The stated schemes and actual enhanced inclusion and restriction, with their zero composite. Assume the Axiom of Choice and use the universes fixed in the Statement.

**Goal:** Apply the precise categorical localization criterion, then the chosen nonconnective functor.

[A1] Choice is inherited when invoking the actual enhanced sequence in [F1], the quotient comparison in [F2], and the specified nonconnective K-theory interface in [F3]. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [lem-author-50b5133c29cc-klocal-kernel](item-lem-author-50b5133c29cc-klocal-kernel) supplies the actual exact functors, full inclusion and nullhomotopy. [lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness](item-lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness) supplies small equivalent models and idempotent completeness.

[F2] [lem-author-50b5133c29cc-klocal-quotient-full-faithfulness](item-lem-author-50b5133c29cc-klocal-quotient-full-faithfulness) and [lem-author-50b5133c29cc-klocal-retract-density](item-lem-author-50b5133c29cc-klocal-retract-density) establish the induced triangulated quotient equivalence after completion.

[F3] [thm-author-50b5133c29cc-klocal-categorical-localizing-input](item-thm-author-50b5133c29cc-klocal-categorical-localizing-input) imports BGT's enhanced criterion and the localizing property of the same $\mathbb K$ used in [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface).

[F4] [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness) supplies the natural long exact homotopy sequence of a spectral fiber sequence in every integer degree, including its connecting homomorphisms.

### Proof
1.1 Use equivalent small models, or the equivalent essentially small domain fixed by the supplied K interface. Apply BGT Proposition 5.15 with $\kappa=\omega$ to the actual sequence in [F1]. All categories are stable and therefore admit finite colimits; all functors are exact and preserve them. The composite is zero, the first arrow is fully faithful, and the triangulated quotient is an equivalence after idempotent completion by [F2]. Thus BGT yields the enhanced exact sequence and the claimed completion equivalence for its actual quotient functor. The use of homotopy categories is legitimate because an actual exact restriction functor was specified before applying the criterion. [A1, F1, F2, F3]

2.1 By [F3], applying $\mathbb K$ yields a cofiber sequence, hence a fiber sequence in spectra. Its terms and maps are exactly $K_T(X)$, $K(X)$ and $K(U)$ by their supplied definitions. The construction is natural for restriction diagrams preserving the indicated supports, because quotient, $U_{\mathrm{loc}}$, and its mapping-spectrum description are functorial on the actual diagrams. Apply [F4] to this fiber sequence to obtain its natural long exact sequence of homotopy groups. No connective truncation is performed, so this exact sequence retains all integer groups. [F1, F3, F4, step 1.1] ∎


## Perfect K theory localization and open excision

[Open item](item-prop-perfect-k-localization-input) · level 16


### Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. Let $X$ be a quasi-compact quasi-separated scheme and $U\subseteq X$ a quasi-compact open with closed complement $T$. For the specified nonconnective perfect-complex K-theory there is a natural fiber sequence
$$K_T(X)\longrightarrow K(X)\longrightarrow K(U).$$
For every cover $X=U\cup V$ by quasi-compact opens, the restriction square is homotopy cartesian, equivalently
$$K(X)\xrightarrow{\sim}K(U)\times_{K(U\cap V)}K(V).$$
Thus K-theory has open-cover Mayer–Vietoris (and the corresponding finite quasi-compact-open covering form by iteration). If $T$ is closed with quasi-compact complement and $T\subseteq W\subseteq X$ with $W$ quasi-compact open, restriction gives the natural support excision equivalence $K_T(X)\simeq K_T(W)$, compatible with the support-to-global and restriction maps. All these assertions use the nonconnective spectra and their groups in every integer degree, without a regularity, field or resolution-property assumption.

### Statement references
[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[lem-author-50b5133c29cc-klocal-enhanced-localization](item-lem-author-50b5133c29cc-klocal-enhanced-localization)

[lem-author-50b5133c29cc-klocal-supported-open-equivalence](item-lem-author-50b5133c29cc-klocal-supported-open-equivalence)

### Facts & Assumptions
[A1] Choice and the universe bounds are used to invoke the enhanced perfect-category and K-theory suppliers. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** The schemes, opens and closed supports in the Statement, with the supplied essentially small sheaf-derived perfect categories and nonconnective functor.

**Goal:** Deduce localization, Mayer–Vietoris and open excision in exactly that model.

[F1] [lem-author-50b5133c29cc-klocal-enhanced-localization](item-lem-author-50b5133c29cc-klocal-enhanced-localization) proves the actual enhanced quotient exactness and resulting K fiber sequence, using [lem-author-50b5133c29cc-klocal-kernel](item-lem-author-50b5133c29cc-klocal-kernel), [lem-author-50b5133c29cc-klocal-quotient-full-faithfulness](item-lem-author-50b5133c29cc-klocal-quotient-full-faithfulness) and [lem-author-50b5133c29cc-klocal-retract-density](item-lem-author-50b5133c29cc-klocal-retract-density).

[F2] [lem-author-50b5133c29cc-klocal-supported-open-equivalence](item-lem-author-50b5133c29cc-klocal-supported-open-equivalence) gives the actual support restriction equivalence and compatibility with global restriction.

[F3] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies coherent pullbacks and stable fiber/cofiber sequences. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) identifies the K functor and all integer groups.

[F4] A scheme is quasi-compact when every open cover of its underlying space has a finite subcover, and quasi-separated when the intersection of every two affine open subschemes is quasi-compact. These are the conventions of [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme).

[F5] By [math:def-scheme](https://alphabetamath.cc/item/def-scheme), every point of a scheme has an affine open neighbourhood. An affine scheme is a locally ringed space isomorphic to the prime spectrum of a commutative ring with its structure sheaf, as in [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme). For an open subset $A\subseteq X$, the open subscheme is $(A,\mathcal O_X|_A)$; it is affine open precisely when this restricted locally ringed space is affine, as in [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme). Restrictions to nested open subsets give the same restricted structure sheaf.

[F6] For a commutative ring $R$, an open $O\subseteq\operatorname{Spec}R$ and a point $\mathfrak p\in O$, [math:lem-distinguished-open-refinement-at-a-point](https://alphabetamath.cc/item/lem-distinguished-open-refinement-at-a-point) supplies $f\in R$ with $\mathfrak p\in D(f)\subseteq O$. Here $D(f)$ is the principal distinguished subset of [math:def-principal-distinguished-subset-of-spectrum](https://alphabetamath.cc/item/def-principal-distinguished-subset-of-spectrum). The statement of [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion) identifies $\operatorname{Spec}(R_f)$ with $D(f)$ as an open locally ringed subspace of $\operatorname{Spec}R$; thus this neighbourhood is affine with the restricted structure sheaf.

### Proof
1.1 First check the geometric hypotheses needed below. Every open subscheme of $X$ is quasi-separated: its affine opens are affine opens of $X$, with the same intersections. For any open $A\subseteq X$ and $x\in A$, take an affine open neighbourhood $H$ of $x$ in $X$ and an affine presentation $H\simeq\operatorname{Spec}R$ by [F5]. Under this presentation $A\cap H$ corresponds to an open $O$ containing the image $\mathfrak p$ of $x$. By [F6] there is $\mathfrak p\in D(f)\subseteq O$, and this distinguished open is affine with the restricted structure sheaf. Its inverse image in $H$ is therefore an affine open of $X$ contained in $A$, with the same restricted sheaf by [F5]. Thus the family of all affine opens of $X$ contained in $A$ covers $A$. If $A$ is quasi-compact, [F4] extracts a finite subcover (the empty one is allowed when $A=\varnothing$). In particular, for quasi-compact opens $A,B\subseteq X$ obtain finite affine covers $A=\bigcup_i A_i$ and $B=\bigcup_j B_j$ by this construction. Each $A_i\cap B_j$ is quasi-compact by quasi-separatedness of $X$, and these finitely many intersections cover $A\cap B$. Given any open cover of $A\cap B$, restrict it to each $A_i\cap B_j$, choose a finite subcover there, and take the finite union of the selected cover members. This proves quasi-compactness of $A\cap B$. The same open-cover argument shows that finite unions of quasi-compact opens are quasi-compact. Thus all the quasi-compact opens and their finite intersections used below are qcqs schemes. Now [F1] applied to $j:U\hookrightarrow X$ and its full kernel $\mathrm{Perf}_T(X)$ gives the claimed localization sequence. It identifies the category-defined $K_T(X)$ with the actual fiber, without assuming that identification in its definition or comparing with a different K-theory model. The choice and universe assumptions are those required by the suppliers. [A1, F1, F3, F4, F5, F6, given]

2.1 For a two-open cover $X=U\cup V$, step 1.1 shows that [F1] applies both to $U\subseteq X$ and $U\cap V\subseteq V$. Put $T=X\setminus U$, a closed subset of $X$ contained in $V$. Their fiber terms are $K_T(X)$ and $K_T(V)$, and [F2] identifies the induced map between these fibers with an equivalence. Put $P=K(U)\times_{K(U\cap V)}K(V)$. The map $K(X)\to P$ lies over $K(U)$, and the induced map on fibers over zero is exactly $K_T(X)\to K_T(V)$, by the defining pullback universal properties and the compatibility in [F2]. We justify the required stable fiber criterion directly from [F3]. For any map $A\to A'$ over a common base $B$, write $F=\operatorname{fib}(A\to B)$ and $F'=\operatorname{fib}(A'\to B)$. The defining fiber squares are also pushout squares in the stable category, so $B\simeq A\sqcup_F0$. Pasting pushouts gives $B\sqcup_A0\simeq0\sqcup_F0=F[1]$. Hence the defining cofiber square for $A\to B$ is also a pullback square, giving $A\simeq\operatorname{fib}(B\to F[1])$. The same construction gives $A'\simeq\operatorname{fib}(B\to F'[1])$, naturally in the map over $B$. If $F\to F'$ is an equivalence, the diagrams $B\to F[1]\leftarrow0$ and $B\to F'[1]\leftarrow0$ are equivalent coherent diagrams; their limits, and thus $A$ and $A'$, are equivalent. Apply this with $A=K(X)$, $A'=P$ and $B=K(U)$. This proves the restriction square is homotopy cartesian without a homotopy-group detection argument. For a finite quasi-compact-open cover, regroup its members into a union of the first members and the last member and iterate this binary formula, also on the intersection covers. All finite unions and intersections are quasi-compact by step 1.1, so each application has the required hypotheses. This gives the stated finite-cover Mayer–Vietoris form. The empty-cover case also holds: [F1] with $X=U=\varnothing$ and $T=\varnothing$ gives $K(\varnothing)\simeq\operatorname{fib}(\mathrm{id}_{K(\varnothing)})\simeq0$, since the supported category is then the whole perfect category. [F1, F2, F3, F4, step 1.1]

3.1 For the stated support excision take $W$ in [F2]. Its support equivalence is induced by actual restriction and is compatible with the support-to-global inclusions and global restriction. The support is closed in $W$, and $W\setminus T=W\cap(X\setminus T)$ is quasi-compact by step 1.1 because both opens on the right are quasi-compact. Thus both support terms are also the fibers in step 1.1, and naturality of [F1] identifies their maps with the actual restriction maps supplied by [F2]. No regularity, field or resolution-property hypothesis has entered, and the spectra have not been truncated in any degree. This proves the entire stated interface. [F1, F2, F3, F4, step 1.1, step 2.1] ∎
