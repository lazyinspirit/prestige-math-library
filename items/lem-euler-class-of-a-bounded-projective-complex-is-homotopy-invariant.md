---
id: "lem-euler-class-of-a-bounded-projective-complex-is-homotopy-invariant"
kind: "lemma"
title: "Euler class of a bounded projective complex is derived invariant and triangle additive"
deps: [def-perfect-complex-over-a-ring, lem-perfect-complexes-form-a-triangulated-subcategory, def-split-grothendieck-group-of-an-additive-category, prop-morphisms-from-a-homotopically-projective-complex-need-no-roof, prop-cohomology-factors-through-the-derived-category, thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, thm-the-derived-category-inherits-a-triangulated-structure, thm-grothendieck-group-universal-properties-and-functoriality, def-projective-module, thm-projective-module-characterizations, def-derived-category-of-an-abelian-category, def-triangulated-category-axiom-tr-three, def-morphism-and-isomorphism-of-triangles, cor-triangulated-five-lemma, thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism, def-finitely-generated-graded-projective-module, thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules]
sources:
  references:
    - title: "The Stacks Project, More on Algebra, Lemma 15.121.1"
      url: "https://stacks.math.columbia.edu/tag/0FJG"
    - title: "Weibel, The K-book, Chapter II, Proposition 7.5 and Corollary 7.5.1"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Let $A$ be any unital associative ring and let $\operatorname{Proj}_{\mathrm{fg}}(A)$ be its essentially small additive category of finitely generated projective left modules. For a bounded complex $P$ of such modules, $\chi(P)=\sum_n(-1)^n[P^n]$ in $K_0^{\mathrm{split}}(\operatorname{Proj}_{\mathrm{fg}}(A))$. This class is unchanged by homotopy equivalence or quasi-isomorphism of bounded finite-projective complexes, depends only on the represented object of $D_{\mathrm{perf}}(A)$, and satisfies $\chi(Y)=\chi(X)+\chi(Z)$ for each distinguished triangle $X\to Y\to Z\to X[1]$ of perfect objects. The graded finite-projective analogue holds with degree-zero differentials and the graded split group.

## Facts & Assumptions

**Given:** A unital associative ring $A$, bounded cochain complexes of finitely generated projective left $A$-modules, and in the graded clause a graded $k$-algebra with bounded complexes of finite graded projective left modules and degree-zero differentials.

[F1] Perfect objects of $D(A\text{-}\mathrm{Mod})$ are those isomorphic to a bounded cochain complex of finitely generated projective left $A$-modules, and $D_{\mathrm{perf}}(A)$ is the strictly full subcategory they form ([[def-perfect-complex-over-a-ring]]).

[F2] $D_{\mathrm{perf}}(A)$ is an essentially small triangulated subcategory, every derived morphism between bounded finite-projective representatives is represented by a chain map uniquely up to homotopy, and cones of such chain maps are again bounded finite-projective representatives ([[lem-perfect-complexes-form-a-triangulated-subcategory]]).

[F3] $K_0^{\mathrm{split}}$ of an essentially small additive category is the free abelian group on its isomorphism classes modulo the relations $[X\oplus Y]=[X]+[Y]$, and an additive class function factors uniquely through it ([[def-split-grothendieck-group-of-an-additive-category]], [[thm-grothendieck-group-universal-properties-and-functoriality]]).

[F4] For a K-projective complex $P$ the localization map $\operatorname{Hom}_K(P,X)\to\operatorname{Hom}_D(P,X)$ is bijective ([[prop-morphisms-from-a-homotopically-projective-complex-need-no-roof]]).

[F5] A chain map is a quasi-isomorphism exactly when its cone is acyclic ([[thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic]]).

[F6] Every chain homotopy equivalence is a quasi-isomorphism ([[thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism]]).

[F7] In $D(A\text{-}\mathrm{Mod})$ the cone of a chain map $f:X\to Y$ has $\operatorname{Cone}(f)^n=Y^n\oplus X^{n+1}$ with differential $(y,x)\mapsto(d_Yy+fx,-d_Xx)$, and distinguished triangles are the isomorphic images of cone triangles ([[def-derived-category-of-an-abelian-category]], [[thm-the-derived-category-inherits-a-triangulated-structure]]).

[F8] A short exact sequence of modules ending in a projective module splits; direct summands and finite direct sums of finitely generated projectives are finitely generated projective ([[def-projective-module]], [[thm-projective-module-characterizations]]).

[F9] TR3 completes a morphism of distinguished triangles once the first two components intertwine the first arrows, and a morphism of distinguished triangles with two adjacent components isomorphisms has its third component an isomorphism ([[def-triangulated-category-axiom-tr-three]], [[def-morphism-and-isomorphism-of-triangles]], [[cor-triangulated-five-lemma]]).

[F10] In the graded setting finite graded projectives are the degree-zero summands of finite direct sums of internal shifts $A\{r_1\}\oplus\cdots\oplus A\{r_n\}$, they lift degree-zero maps through degree-zero epimorphisms, and finite direct sums of them are again finite graded projective ([[def-finitely-generated-graded-projective-module]], [[thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules]]).

## Proof

**Proof technique:** direct.

1.1 $\operatorname{Proj}_{\mathrm{fg}}(A)$ is an essentially small additive category, so $\chi$ takes values in the group of [F3]. It is additive because the direct sum of two finitely generated projective modules is finitely generated projective and the zero module is finitely generated projective. It is essentially small: every finitely generated projective $P$ is a direct summand of a finite free module $A^n$ [F8], so $P\cong\operatorname{im}(e)$ for an idempotent matrix $e\in M_n(A)$, and the idempotents in $\bigcup_{n\ge0}M_n(A)$ form a set. For a bounded complex $P$, the sum $\chi(P)=\sum_n(-1)^n[P^n]$ is finite by boundedness; it uses the classes of the terms in $K_0^{\mathrm{split}}(\operatorname{Proj}_{\mathrm{fg}}(A))$. The graded category of finite graded projectives is additive and essentially small by [F10], with the same finiteness of the alternating sum. [F3, F8, F10, construct, algebra]

1.2 Every acyclic bounded complex $P$ of finitely generated projectives has $\chi(P)=0$. Induct on the finite number of degrees in which $P$ is nonzero. Let $b$ be the largest such degree, so $P^b\ne0$ and $P^{b+1}=0$; acyclicity gives $P^b=\operatorname{im}(d^{b-1})$, and the sequence $0\to Z^{b-1}\to P^{b-1}\xrightarrow{d^{b-1}}P^b\to0$, with $Z^{b-1}=\ker d^{b-1}$, splits by projectivity of $P^b$ [F8]; hence $[P^{b-1}]=[Z^{b-1}]+[P^b]$ in the split group and $Z^{b-1}$ is finitely generated projective. Let $T$ be the complex with $T^n=P^n$ for $n\le b-2$, $T^{b-1}=Z^{b-1}$ and $T^n=0$ for $n\ge b$, with the restricted differentials. Then $T$ is a bounded complex of finitely generated projectives with fewer nonzero terms, and it is acyclic: in degrees $n\le b-2$ its cohomology is that of $P$, and $H^{b-1}(T)=Z^{b-1}/\operatorname{im}(d^{b-2})=H^{b-1}(P)=0$. By induction $\chi(T)=0$, while the split relation gives $\chi(P)-\chi(T)=(-1)^{b-1}([P^{b-1}]-[Z^{b-1}])+(-1)^b[P^b]=0$. Hence $\chi(P)=0$. The graded case repeats the argument with the degreewise kernel $Z^{b-1}$ and the graded splitting of [F10]. [F3, F8, F10, induction, algebra]

1.3 For a chain map $f:P\to Q$ of bounded finite-projective complexes, $\chi(\operatorname{Cone}(f))=\chi(Q)-\chi(P)$. By [F7] the cone has terms $\operatorname{Cone}(f)^n=Q^n\oplus P^{n+1}$; the split relations of [F3] give $\chi(\operatorname{Cone}(f))=\sum_n(-1)^n[Q^n]+\sum_n(-1)^n[P^{n+1}]=\chi(Q)-\chi(P)$. The cone is bounded with finitely generated projective terms by [F2], so the left side is defined. [F2, F3, F7, algebra]

2.1 $\chi$ is unchanged by quasi-isomorphism of bounded finite-projective complexes. If $f:P\to Q$ is a quasi-isomorphism, then $\operatorname{Cone}(f)$ is acyclic [F5], so $\chi(\operatorname{Cone}(f))=0$ by step 1.2 and step 1.3 gives $\chi(Q)=\chi(P)$. [F5, F7, step 1.2, step 1.3, algebra]

3.1 $\chi$ takes the same value on any two bounded finite-projective representatives of one object of $D_{\mathrm{perf}}(A)$. Let $X$ be perfect and let $P,P'$ be bounded finite-projective complexes with isomorphisms $X\cong P$ and $X\cong P'$ in $D(A\text{-}\mathrm{Mod})$; composing gives an isomorphism $P\to P'$ in the derived category. By [F2] this derived morphism is represented by a chain map $f:P\to P'$, and $f$ is a quasi-isomorphism because its image in $D$ is an isomorphism. Step 2.1 gives $\chi(P)=\chi(P')$, so $\chi(X):=\chi(P)$ is well defined on perfect objects, independently of the chosen representatives. [F1, F2, F4, step 2.1, algebra]

4.1 $\chi$ is unchanged by homotopy equivalence: a homotopy equivalence of bounded finite-projective complexes is a quasi-isomorphism by [F6], so step 2.1 applies. Together with step 3.1 this is the invariance asserted for bounded finite-projective complexes and for the represented perfect object. [F6, step 2.1, step 3.1, algebra]

4.2 $\chi$ is additive on distinguished triangles of perfect objects. Let $X\to Y\to Z\to X[1]$ be distinguished, choose bounded finite-projective representatives $P,Q$ with isomorphisms $u:P\to X$, $v:Q\to Y$, and let $g:=v^{-1}\circ(X\to Y)\circ u$. By [F2] and [F4], $g$ is represented by a chain map $f:P\to Q$, that is, $vQ(f)=Q(X\to Y)u$; the cone triangle $P\to Q\to\operatorname{Cone}(f)\to P[1]$ is distinguished [F7]. TR3 [F9] supplies $c:\operatorname{Cone}(f)\to Z$ making $(u,v,c)$ a morphism of triangles, and the first two components are isomorphisms, so the triangulated five lemma [F9] makes $c$ an isomorphism. Therefore $Z\cong\operatorname{Cone}(f)$ in $D(A\text{-}\mathrm{Mod})$ and, by step 3.1, $\chi(Z)=\chi(\operatorname{Cone}(f))=\chi(Q)-\chi(P)=\chi(Y)-\chi(X)$, which is the asserted additivity. [F2, F4, F7, F9, step 1.3, step 3.1, algebra]

5.1 Steps 1.1–4.2 establish the definition, quasi-isomorphism and homotopy invariance, independence of representatives, and triangle additivity for complexes of finitely generated projective left modules; the graded assertions use the graded splitting and degreewise biproducts of [F10] at every occurrence of a splitting or a direct sum. No global-dimension hypothesis and no choice principle is used, and the argument nowhere asserts an Euler class for an arbitrary bounded complex of modules. [F1, F3, F10, step 3.1, step 4.1, step 4.2, algebra] ∎
