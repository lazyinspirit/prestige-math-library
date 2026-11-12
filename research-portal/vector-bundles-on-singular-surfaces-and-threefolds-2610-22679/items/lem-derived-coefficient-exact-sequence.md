---
id: lem-derived-coefficient-exact-sequence
kind: lemma
title: Derived finite coefficients and the Bockstein sequence
status: published
domain: mathematics
deps:
  - math:def-derived-category-of-an-abelian-category
  - math:def-annihilator-and-torsion-of-a-module
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-tensor-product-total-complex-of-chain-complexes
  - math:def-localization-of-a-category-at-a-class-of-morphisms
  - math:thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic
dependency_roles:
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  math:def-annihilator-and-torsion-of-a-module: mathematical-premise
  math:def-cochain-complex-in-an-abelian-category: mathematical-premise
  math:def-tensor-product-total-complex-of-chain-complexes: mathematical-premise
  math:def-localization-of-a-category-at-a-class-of-morphisms: mathematical-premise
  math:thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Let $C$ be a cochain complex of abelian groups, let $n$ be a positive integer, and write $C/n$ for the mapping cone of multiplication by $n$ on $C$. Then $C/n$ represents the derived tensor product $C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$, and for every integer $m$ there is a natural short exact sequence
$$0\longrightarrow H^m(C)/nH^m(C)\longrightarrow H^m(C/n)\longrightarrow H^{m+1}(C)[n]\longrightarrow0,$$
where $H^{m+1}(C)[n]=\{a:n a=0\}$. In particular, if $H^m(C/p)=0$ for a prime $p$, multiplication by $p$ is injective on $H^{m+1}(C)$. For fixed $n$, the coefficient construction defines a functor on $D(\mathbb Z)$, and the displayed short exact sequence is natural for morphisms in $D(\mathbb Z)$. No boundedness of $C$ is assumed.

## Statement references

[[math:def-cochain-complex-in-an-abelian-category]]

[[math:def-derived-category-of-an-abelian-category]]

[[math:def-annihilator-and-torsion-of-a-module]]

## Facts & Assumptions

[F1] Cochains and the reindexing $A^i=A_{-i}$ are as in [[math:def-cochain-complex-in-an-abelian-category]]. Use the homotopy category, its localization $Q:K(\mathbb Z)\to D(\mathbb Z)$, and its standing size convention from [[math:def-derived-category-of-an-abelian-category]]. In its cochain cone convention, $\operatorname{Cone}(f)^m=B^m\oplus A^{m+1}$ with differential $(y,x)\mapsto(d_By+f(x),-d_Ax)$. Write $H^m(A)=\ker(d_A^m)/\operatorname{im}(d_A^{m-1})$; acyclic means these groups are all zero, and a quasi-isomorphism induces isomorphisms on these groups.

[F2] For an abelian group $M$, the notation $M[n]=\{a\in M:na=0\}$ is the annihilator subgroup for the fixed integer $n$, using [[math:def-annihilator-and-torsion-of-a-module]]. Also $M/nM$ is the quotient by the image of multiplication by $n$.

[F3] Reindexing [[math:def-tensor-product-total-complex-of-chain-complexes]] gives $\operatorname{Tot}(A\otimes B)^m=\bigoplus_{i+j=m}A^i\otimes_{\mathbb Z}B^j$ and $d(a\otimes b)=d_Aa\otimes b+(-1)^i a\otimes d_Bb$ for $a\in A^i$. Fix $P_n=[\mathbb Z\xrightarrow{n}\mathbb Z]$ in degrees $-1,0$, augmented to $\mathbb Z/n$ in degree zero. Define $T_n(A)=\operatorname{Tot}(A\otimes P_n)$ and $T_n(f)=f\otimes1$. Thus $T_n(A)^m=A^m\oplus A^{m+1}$ and $d(y,z)=(d_Ay+(-1)^{m+1}nz,d_Az)$. Each total degree has only two summands, even for unbounded $A$. For this fixed coefficient, the notation $A\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$ denotes the functor obtained by descending $QT_n$ to $D(\mathbb Z)$; the proof supplies this descent and verifies its K-flat computation interpretation. Here K-flat means that tensoring with an acyclic complex gives an acyclic total complex. Over $\mathbb Z$ the two tensor orders are identified by $a\otimes b\mapsto(-1)^{ij}b\otimes a$ for degrees $i,j$.

[F4] A functor that inverts the localized arrows factors through localization, and natural transformations between such functors descend as well, by [[math:def-localization-of-a-category-at-a-class-of-morphisms]].

[F5] A cochain map is a quasi-isomorphism exactly when its cone is acyclic, by cochain reindexing of [[math:thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic]].

## Proof

**Given:** A possibly unbounded cochain complex $C$ of abelian groups, a positive integer $n$, and an integer $m$, with the conventions in [F1]–[F5].

**Goal:** Construct the finite-coefficient functor on the derived category, identify its value with the cone, and prove the natural exact sequence and prime-torsion consequence.

1.1 The augmentation $P_n\to\mathbb Z/n$ is a quasi-isomorphism: multiplication by $n$ on $\mathbb Z$ is injective, with cokernel $\mathbb Z/n$. The differential in [F3] squares to zero, since its two terms involving $n d_Az$ have opposite signs. It also shows that $T_n$ preserves identities, compositions and cochain maps. For maps $f,g:A\to B$ with cochain homotopy $h^i:A^i\to B^{i-1}$, meaning $f-g=d_Bh+hd_A$, the operator $h\otimes1$ is a homotopy between $T_n(f)$ and $T_n(g)$: the mixed terms have signs $(-1)^{i-1}$ and $(-1)^i$ and cancel. Thus $T_n$ defines a functor on $K(\mathbb Z)$. The degree-$m$ map $\phi_A:\operatorname{Cone}(n:A\to A)\to T_n(A)$ given by $(y,x)\mapsto(y,(-1)^{m+1}x)$ is an invertible cochain map, by [F1] and [F3], and commutes with maps induced by cochain maps $A\to B$. If $A$ is acyclic and $(y,x)$ is a degree-$m$ cone cocycle, write $x=du$; then $d(y+nu)=0$, so write $y+nu=dv$. Consequently $(y,x)=d(v,-u)$, proving that $T_n(A)$ is acyclic. Hence $P_n$ is K-flat. For any cochain map $f:A\to B$, regrouping summands gives $\operatorname{Tot}(\operatorname{Cone}(f)\otimes P_n)\cong\operatorname{Cone}(T_n(f))$: send a target tensor to the target summand and a shifted-source tensor to the shifted-source summand without an extra sign. Indeed for $a\in A^{i+1}$ and $p\in P_n^j$ the latter summand has differential components $f(a)\otimes p$, $-d_Aa\otimes p$, and $(-1)^i a\otimes d_{P_n}p$ on both sides. By [F5], if $f$ is a quasi-isomorphism its cone is acyclic, so the preceding K-flatness calculation makes $\operatorname{Cone}(T_n(f))$ acyclic and $T_n(f)$ a quasi-isomorphism. Thus $QT_n$ inverts quasi-isomorphisms and descends by [F4] to a functor on $D(\mathbb Z)$; on a roof $C\xleftarrow{s}A\xrightarrow{f}B$ it acts as $Q(T_n(f))Q(T_n(s))^{-1}$. Localization makes this independent of the roof. This constructs the notation in [F3] for every unbounded $C$. It agrees with computation using a K-flat replacement of $C$ whenever one is supplied: for a quasi-isomorphism $R\to C$ with $R$ K-flat, both arrows $T_n(C)\leftarrow\operatorname{Tot}(R\otimes P_n)\to\operatorname{Tot}(R\otimes\mathbb Z/n)$ are quasi-isomorphisms. The first follows from the just-proved preservation; for the second, its cone is, by the same cone calculation and the graded tensor interchange in [F3], $\operatorname{Tot}(R\otimes\operatorname{Cone}(P_n\to\mathbb Z/n))$, which is acyclic by K-flatness and [F5]. No existence theorem for replacements is needed, because the explicit K-flat resolution of the coefficient already constructs the functor. The natural maps $\phi_C$ identify its values with $C/n$. [given, F1, F3, F4, F5, construct, algebra]

2.1 The inclusion $C\to\operatorname{Cone}(n)$ sends $y$ to $(y,0)$, and projection sends a cone cocycle $(y,x)$ to $[x]\in H^{m+1}(C)$. These induce well-defined cohomology maps: the cocycle equations are $dx=0$ and $dy=-nx$, while a cone boundary changes $x$ by a boundary. The kernel of the inclusion-induced map on $H^m(C)$ is $nH^m(C)$: if $(y,0)=d(v,u)$, then $du=0$ and $y=dv+nu$, and conversely $d(0,u)=(nu,0)$ for every cocycle $u$. If the projected class vanishes, write $x=du$ and subtract the boundary $d(0,-u)=(-nu,x)$; the resulting representative $(y+nu,0)$ comes from $H^m(C)$. Finally, the projection has image precisely $H^{m+1}(C)[n]$: the cocycle equation implies $n[x]=0$, and conversely if $nx=-dy$ for a cocycle $x$, the pair $(y,x)$ is a cone cocycle. This proves the displayed short exact sequence. These maps commute with every cochain map $C\to C'$. Cohomology itself descends from $K(\mathbb Z)$, since a homotopy changes the image of a cocycle by a boundary and quasi-isomorphisms induce cohomology isomorphisms. Its quotient and annihilator functors also invert quasi-isomorphisms; together with step 1.1 and [F4], this descends both maps of the exact sequence to $D(\mathbb Z)$. Naturality for inverses of quasi-isomorphisms, and hence for roofs, follows by inverting the vertical isomorphisms in the naturality squares. Exactness remains the same exactness of abelian groups on each representing complex. If $H^m(C/p)=0$, its surjection onto $H^{m+1}(C)[p]$ makes that subgroup zero, which is exactly injectivity of multiplication by $p$. [given, F1, F2, F4, step 1.1, algebra] ∎
