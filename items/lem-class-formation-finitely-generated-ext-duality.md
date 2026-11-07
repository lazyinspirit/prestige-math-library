---
id: lem-class-formation-finitely-generated-ext-duality
kind: lemma
title: "Finitely generated Ext duality relative to a class formation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-class-formation
  - thm-module-categories-have-enough-injectives
  - def-injective-object
  - def-ext-via-an-injective-resolution-of-the-second-variable
  - thm-long-exact-sequence-in-cohomology
  - thm-tate-nakayama-for-class-formations
  - lem-relative-invariant-for-class-formations
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
  - prop-finite-groups-have-torsion-annihilation-in-positive-cohomology
  - lem-subgroups-of-free-abelian-groups-are-free
  - thm-injective-modules-over-a-pid-are-exactly-divisible
  - thm-higher-yoneda-ext-agrees-with-derived-ext
  - prop-yoneda-product-is-composition-in-the-derived-category
  - thm-restriction-corestriction-composite-is-multiplication-by-the-index
  - cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules
justified_by: []
proof_strategy: direct
axiom_use: "AC and DC are explicit for actual discrete continuous injective Ext, comparisons, dual exactness and the supplied complete-resolution convention. Tate-Nakayama is used only with finite free integer coefficients, where its actual Tor hypothesis is proved."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "I Theorem1.8(a),(b), Lemma1.9 and their complete proofs, printed pp.21-23. The argument is reconstructed using actual current finite-lattice Tate-Nakayama interfaces; no finite-torsion Tor vanishing is used."
verification: {}
---

## Statement

Assume AC and DC, with the supplied ordinary and complete-resolution
convention. Let $(G,C,(\operatorname{inv}_V)_V)$ be a class formation and
let $M$ be a discrete continuous $G$-module finitely generated as an abelian
group. Put $D(A)=\operatorname{Hom}_{\mathbb Z}(A,\mathbb Q/\mathbb Z)$.
Yoneda composition and the invariant define
$$\alpha_r(G,M):\operatorname{Ext}^r_G(M,C)\longrightarrow D(H^{2-r}_{\mathrm{cts}}(G,M))\qquad(r\ge1),$$
where negative cohomology is zero.
Then $\alpha_r$ is an isomorphism for $r\ge2$, and it is an isomorphism for
$r=1$ when $M$ is torsion-free. In particular
$\operatorname{Ext}^r_G(M,C)=0$ for $r\ge3$.
If, in addition, for every open subgroup $V\le G$ and integer $n\ge1$ the
map
$$\alpha_1(V,\mathbb Z/n):C^V/nC^V\longrightarrow D(H^1_{\mathrm{cts}}(V,\mathbb Z/n))$$
is an isomorphism, then $\alpha_1(G,M)$ is an isomorphism for every such
finitely generated $M$. The maps are the actual Yoneda/invariant pairings,
natural in $M$, not unrelated abstract group isomorphisms.

## Facts & Assumptions

**Given:** Exactly the class formation, finitely generated module and explicit AC/DC/model convention in the Statement; the final degree-one conclusion has precisely its additional displayed cyclic-coefficient hypothesis.

[A1] AC and DC supply the named qualified interfaces. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] For every open $V$, $H^1(V,C)=0$, $H^2(V,C)\cong\mathbb Q/\mathbb Z$, and restriction multiplies the invariant by the subgroup index. [[def-class-formation]]

[F2] Relative invariants identify finite-quotient $H^2$ with the restriction kernel and give its unique fundamental class; inflation of the relative class multiplies that class by the intervening index. The Tate-Nakayama double connecting map is an isomorphism when the actual integer Tor hypothesis holds. [[lem-relative-invariant-for-class-formations]] [[thm-tate-nakayama-for-class-formations]]

[F3] Under AC every ordinary abelian group embeds in an injective abelian group. Injectivity extends maps across monomorphisms; injective Ext is the cohomology of the Hom complex on an actual injective resolution. Short exact cochain complexes give their natural long exact cohomology sequence. [[thm-module-categories-have-enough-injectives]] [[def-injective-object]] [[def-ext-via-an-injective-resolution-of-the-second-variable]] [[thm-long-exact-sequence-in-cohomology]]

[F4] Continuous cohomology is the filtered limit of finite-quotient cohomology with fixed coefficients; positive cohomology of a finite group is killed by its order. [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]] [[prop-finite-groups-have-torsion-annihilation-in-positive-cohomology]]

[F5] Subgroups of free abelian groups are free under AC. A divisible abelian group is injective, so $D=\operatorname{Hom}(-,\mathbb Q/\mathbb Z)$ is exact. [[lem-subgroups-of-free-abelian-groups-are-free]] [[thm-injective-modules-over-a-pid-are-exactly-divisible]]

[F6] With enough injectives and supplied data, Yoneda Ext identifies with injective Ext and connecting-arrow derived composition, without enough projectives. [[thm-higher-yoneda-ext-agrees-with-derived-ext]] [[prop-yoneda-product-is-composition-in-the-derived-category]]

[F7] Finite-index corestriction after restriction is multiplication by the index. Its finite-coset norm construction also computes the maps for continuous profinite cochains, by the injective delta-functor identification in [F3]. [[thm-restriction-corestriction-composite-is-multiplication-by-the-index]]

[F8] A finitely generated abelian group is a finite sum of integer lattices and finite cyclic groups. [[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]]

## Proof

**Proof technique:** kill finite-level lattice classes by fundamental-class inflation, obtain a uniform high-degree bound, and descend through finite coinduction diagrams.

**Given:** The data above; all assertions are proved simultaneously over every open subgroup of $G$.

1.1 We first construct all needed abstract continuous Ext data, without using a later arithmetic page. Let $\mathcal D_G$ be discrete continuous modules; kernels and cokernels have their ordinary abelian-group constructions with open stabilizers, so this category is abelian. For an injective abelian group $I$ define $J(I)=C_{\mathrm{cts}}(G,I)$ with $(g f)(h)=f(hg)$. Compactness makes every such function factor through a finite quotient, hence have open translation stabilizer. Evaluation at one gives $\operatorname{Hom}_G(X,J(I))=\operatorname{Hom}_{\mathbb Z}(X,I)$, with inverse $a\mapsto(x\mapsto(h\mapsto a(hx)))$. Each orbit of $x$ is finite, so this inverse is continuous as required. An abelian embedding $C\hookrightarrow I$ from [F3] gives an equivariant embedding $C\hookrightarrow J(I)$, detected by evaluation at one. The adjunction and ordinary injectivity make $J(I)$ injective in $\mathcal D_G$. Thus enough injectives and actual resolutions exist; AC/DC constructs their degreewise embeddings. Comparison maps and homotopies are built by extending the prescribed map on each preceding image into the next injective term; exactness makes the required factorizations well-defined. This proves canonical comparison independence by the usual finite-degree recursion. The same construction works for every open subgroup. [A1, F3, F4, given, construct, algebra]

1.2 Every open subgroup $U$ has subgroups of indices divisible by any prescribed positive integer $n$. Choose its invariant class $1/n\in H^2(U,C)$ by [F1]. A normalized continuous representing cocycle factors through a finite quotient by [F4]; its restriction to the kernel is zero. The restriction-scaling formula therefore says $[U:V]/n=0$ modulo $\mathbb Z$ at that kernel $V$, so $n\mid[U:V]$. Taking its core in $G$ makes $V$ normal without losing the divisibility. One may also intersect with any previously specified open normal subgroup. This proves the index availability required below, rather than imposing an unbounded-order hypothesis on $G$. [F1, F4, given, choose, construct, algebra]

2.1 Continuous normalized cochains are exact functors of the coefficient: a continuous cochain has finite image, and finitely many preimages lift it through a surjection while preserving zero. The positive cohomology of $J(I)$ is zero. In homogeneous coordinates, evaluation at one identifies its equivariant cochains with continuous functions $\phi:G^{p+1}\to I$; the inverse is $F(x_0,\ldots,x_p)(h)=\phi(hx_0,\ldots,hx_p)$. Factoring $\phi$ through a common finite quotient shows this is continuous into the discrete module $J(I)$. Inserting one, $(s\phi)(x_0,\ldots,x_{p-1})=\phi(1,x_0,\ldots,x_{p-1})$, preserves normalization and satisfies $ds+sd=1$ in positive degrees by cancellation of consecutive omissions. Any injective object is a direct summand of such a $J(I)$, since its embedding splits by injectivity, and is therefore cochain-acyclic too. On one injective resolution $C\to I^\bullet$, the first-quadrant double complex $C^p_{\mathrm{cts}}(G,I^q)$ has cohomology only on its zero row vertically and zero column horizontally. Eliminating cycles in these exact directions in each finite total degree gives $H^r_{\mathrm{cts}}(G,C)=H^r((I^\bullet)^G)$, naturally. No enough-projectives assertion or infinite total product is used. [F3, F4, step 1.1, construct, algebra]

3.1 Define $\operatorname{Ext}^r_G(M,C)=H^r\operatorname{Hom}_G(M,I^\bullet)$, with comparison independence from step 1.1. A short exact sequence in $M$ gives a termwise exact Hom sequence because each $I^q$ is injective, hence its contravariant long exact sequence by [F3]. For a short exact coefficient row, embed its endpoints in injectives $I',I''$ and extend the left embedding to the middle; the middle embeds in $I'\oplus I''$. Their cokernels form a short exact row. Repeating on this row constructs termwise split short exact resolutions; Hom preserves that splitting, giving the second-variable long exact sequence. Finite coresolution images provide set-sized Yoneda representatives: extend the initial map of an extension into $I^0$, pass to the cokernel and repeat, representing it as the pullback of the truncated coresolution along one map into its last image. The required maps lie in one Hom set in each degree. Thus the injective lane of [F6] applies without enough projectives. [A1, F3, F6, step 1.1, step 2.1, construct, algebra]

4.1 For a finite free integer lattice $L$, $\operatorname{Hom}_{\mathbb Z}(L,-)$ is exact. It preserves injective continuous modules by the equivariant adjunction with $-\otimes_{\mathbb Z}L$, which is exact because $L$ is free. All these modules are continuous, by intersecting the stabilizers of a finite basis and its finitely many image values. Applying this Hom functor to the resolution of $C$ gives an injective resolution of $\operatorname{Hom}_{\mathbb Z}(L,C)$. Its invariants complex is exactly $\operatorname{Hom}_G(L,I^\bullet)$. Step 2.1 therefore proves $\operatorname{Ext}^r_G(L,C)=H^r_{\mathrm{cts}}(G,\operatorname{Hom}_{\mathbb Z}(L,C))$. Evaluation identifies the latter coefficient with $L^*\otimes C$ using any finite basis; the inverse dual-basis sum proves basis independence. This supplies the entire lattice Ext/cochain interface internally, from ordinary injectives only. [F3, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Let $L$ be finite free over $\mathbb Z$ and put $N=L^*$. Its action factors through a finite quotient: stabilize finitely many basis vectors and take the core. By [F3] and [F4], an $\operatorname{Ext}^r_G(L,C)$ class is represented in $H^r(G/U,N\otimes C^U)$ with $U$ acting trivially on $N$. For $r\ge3$, [F2] identifies it with $a\in H^{r-2}(G/U,N)$ by cup product with the fundamental class $u_U$. The Tor hypothesis is satisfied: $N$ is finite free as an integer module, so its length-zero free resolution gives $\operatorname{Tor}^{\mathbb Z}_1(N,C^U)=0$. Choose $V\subset U$ normal with $[U:V]$ divisible by the order of $a$, possible by steps 1.2 and [F4]. Inflation sends $u_U$ to $[U:V]u_V$, so the enlarged class corresponds to $[U:V]\operatorname{Inf}(a)=0$. Every such Ext class is therefore zero in the continuous limit. Thus $\operatorname{Ext}^r_G(L,C)=0$ for $r\ge3$. No Tor assertion for a finite torsion coefficient is used. [F2, F3, F4, step 4.1, step 1.2, choose, construct, algebra]

6.1 Any finitely generated continuous $M$ has a presentation $0\to L_1\to L_0\to M\to0$ by finite free integer lattices with continuous action. Choose one finite quotient $G/U$ acting on $M$ and a finite abelian generating list; map a finite sum of $\mathbb Z[G/U]$ onto it. Its kernel is a subgroup of a finite free abelian group, hence free by [F5], of finite rank because every independent set is independent in the finite-dimensional rational span. Thus it is a finite lattice as claimed. The first-variable long exact sequence [F3] and step 5.1 give $\operatorname{Ext}^r_G(M,C)=0$ for $r\ge4$. This preliminary bound is uniform in all $M$ and every open subgroup. [F3, F5, step 5.1, choose, construct, algebra]

7.1 For a trivial finitely generated module, use [F8] to decompose it into finite direct sums of $\mathbb Z$ and $\mathbb Z/n$. On $\mathbb Z$, $\alpha_2$ is exactly the invariant and the higher groups are zero by step 5.1; $\alpha_1$ is $0\to0$, since [F1] kills $H^1(G,C)$ and a continuous homomorphism from compact $G$ to torsion-free $\mathbb Z$ has finite, hence zero, image. On $\mathbb Z/n$, apply the Ext sequence to $0\to\mathbb Z\xrightarrow{n}\mathbb Z\to\mathbb Z/n\to0$. It gives $\operatorname{Ext}^2_G(\mathbb Z/n,C)=(\mathbb Q/\mathbb Z)[n]$ and $\operatorname{Ext}^3_G(\mathbb Z/n,C)=0$, because multiplication by $n$ on $\mathbb Q/\mathbb Z$ is onto. The Yoneda evaluation sends a class $t\in(\mathbb Q/\mathbb Z)[n]$ to $\bar a\mapsto at$, so $\alpha_2$ is the actual duality isomorphism. Also $\operatorname{Ext}^1_G(\mathbb Z/n,C)=C^G/nC^G$ by [F1]. For the degree-one normalization, the class of $a\in C^G/nC^G$ is the pushout extension $(C\oplus\mathbb Z)/\langle(a,-n)\rangle$, whose chosen generator $z$ satisfies $nz=a$. For a character $\chi:G\to\mathbb Z/n$, choose its lift $t:G\to\{0,\ldots,n-1\}$. Splicing with its degree-one extension gives the normalized cocycle $a(\delta t)/n$, by lifting that generator in the two short sequences. Thus the pairing is the positive invariant of this carry cocycle, fixing its actual cyclic sign. Finite sums give all these base assertions for a trivial finitely generated $M$. [F1, F3, F5, F6, F8, step 5.1, step 6.1, construct, algebra]

8.1 Choose an open normal $U$ acting trivially on $M$. Embed $M$ into its finite coinduced module $P=\operatorname{Coind}_U^G M$, using $m\mapsto(g\mapsto gm)$, and put $M_1=P/M$. The embedding is split as a map of abelian groups by evaluation at the identity coset. Hence $P,M_1$ are finitely generated, and if $M$ is an integer lattice then so is $M_1$. Finite induction equals finite coinduction. The exact restriction functor has exact finite induction as left adjoint, so restriction preserves injectives; the Hom adjunction on actual injective resolutions gives $\operatorname{Ext}^r_G(P,C)=\operatorname{Ext}^r_U(M,C)$. Conversely finite coinduction is exact and right adjoint to exact restriction, hence preserves injectives. Applying it to an actual $U$-injective resolution and taking invariants, with $\Gamma_G\operatorname{Coind}=\Gamma_U$, proves $H^s(G,P)=H^s(U,M)$ on these same models. Under the adjunctions the Yoneda product becomes the finite coset trace in degree two. Its invariant satisfies $\operatorname{inv}_G\operatorname{Cor}_U^G x=\operatorname{inv}_U x$: restriction on $H^2$ is surjective by [F1], so choose $y$ with $\operatorname{Res}y=x$ and use [F7] to get both sides equal to $[G:U]\operatorname{inv}_G y$. Therefore the $P$-terms of $\alpha_r$ are exactly the trivial-action base maps over $U$, with the actual trace and invariant normalization. [F1, F3, F6, F7, step 7.1, construct, algebra]

9.1 The Ext sequence of $0\to M\to P\to M_1\to0$ and the dual cohomology sequence form a commutative diagram under $\alpha_r$, by [F5] and [F6]. At degree three, $\operatorname{Ext}^3_G(P,C)=0$ by steps 7.1 and 8.1, and $\operatorname{Ext}^4_G(M_1,C)=0$ by step 6.1. Exactness forces $\operatorname{Ext}^3_G(M,C)=0$. Together with step 6.1 this proves all higher vanishing, hence the isomorphisms in degrees at least three. [F3, F5, F6, step 6.1, step 7.1, step 8.1, algebra]

10.1 We now prove $\alpha_2$ without assuming it for $M_1$. The Ext sequence ends here with $\operatorname{Ext}^2(P,C)\to\operatorname{Ext}^2(M,C)\to0$. Its target dual sequence ends with $D(P^G)\to D(M^G)\to0$, because $M^G\to P^G$ is injective and $D$ is exact. The isomorphism for $P$ therefore makes $\alpha_2(M)$ surjective for every $M$. For injectivity, lift $x\in\ker\alpha_2(M)$ to $z\in\operatorname{Ext}^2(P,C)$. Its dual image comes from $D(M_1^G)$ by exactness. The surjectivity just established for every module supplies a lift in $\operatorname{Ext}^2(M_1,C)$. Subtract its image from $z$; the isomorphism for $P$ makes this difference zero, so $x=0$. This proves bijectivity for every $M$ simultaneously. [F3, F5, F6, step 8.1, step 9.1, construct, algebra]

11.1 If $M$ is torsion-free, the degree-one $P$ map is $0\to0$ by steps 7.1 and 8.1. The two exact sequences therefore identify both $\operatorname{Ext}^1(M,C)$ and $D(H^1(G,M))$ with the corresponding kernel between the degree-two $M_1$ and $P$ terms. Step 10.1 makes those terms isomorphic and their diagram commutes, giving $\alpha_1(M)$ bijective. [F3, F5, F6, step 7.1, step 8.1, step 10.1, algebra]

12.1 For the final assertion assume precisely the cyclic-coefficient condition in the Statement. Then $\alpha_1(P)$ is an isomorphism for every finitely generated $M$, by its trivial-action decomposition over $U$ in step 7.1. The degree-one diagram first gives surjectivity for all $M$: map a target class to the degree-two $M_1$ term, lift it by step 10.1, use exactness and the $P$ isomorphisms to obtain an Ext-one preimage, and correct by a $P$-class. For injectivity, a class with zero dual image maps to zero in the degree-two $M_1$ term, hence lifts from the degree-one $P$ term. Its dual image there comes from the degree-one $M_1$ term; the universal surjectivity just proved supplies that preimage. Subtract it and use the $P$ isomorphism to conclude the original class was zero. Thus $\alpha_1$ is bijective in general. Every map used is the Yoneda/invariant map, including its connecting maps; standard differential signs are the same on both rows. The zero module, trivial quotient, $n=1$ and zero classes are included. [F3, F5, F6, step 7.1, step 8.1, step 10.1, construct, algebra] ∎
