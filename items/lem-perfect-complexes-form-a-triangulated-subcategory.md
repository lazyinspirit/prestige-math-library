---
id: "lem-perfect-complexes-form-a-triangulated-subcategory"
kind: "lemma"
title: "Perfect complexes form an essentially small triangulated subcategory"
deps: [def-perfect-complex-over-a-ring, def-homotopically-projective-bounded-above-complex, prop-morphisms-from-a-homotopically-projective-complex-need-no-roof, thm-the-derived-category-inherits-a-triangulated-structure, def-projective-module, thm-projective-module-characterizations, thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules, lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise, def-derived-category-of-an-abelian-category, def-triangulated-category, def-triangulated-category-axiom-tr-three, def-morphism-and-isomorphism-of-triangles, cor-triangulated-five-lemma, def-finitely-generated-graded-projective-module]
sources:
  references:
    - title: "The Stacks Project, More on Algebra, Lemma 15.76.4"
      url: "https://stacks.math.columbia.edu/tag/0656"
    - title: "Weibel, The K-book, Chapter II, Example 9.7.5"
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

For every unital associative ring $A$, $D_{\mathrm{perf}}(A)$ is an essentially small strictly full triangulated subcategory of $D(A\text{-}\mathrm{Mod})$. The same holds for finite graded projective representatives inside $D(\operatorname{GrMod}_0(A))$. Every derived-category morphism between bounded finite-projective representatives is represented by a chain map uniquely up to homotopy; its cone is again such a representative. These assertions require no global-dimension hypothesis.

## Facts & Assumptions

**Given:** A unital associative ring $A$ and the derived category of left $A$-modules; in the graded clause a unital graded $k$-algebra $A$ and $\operatorname{GrMod}_0(A)$.

[F1] $D_{\mathrm{perf}}(A)$ consists of the objects isomorphic in $D(A\text{-}\mathrm{Mod})$ to a bounded cochain complex of finitely generated projective left $A$-modules, and is the strictly full subcategory on those objects; the graded analogue is $D_{\mathrm{perf}}^{\mathrm{gr}}(A)$ inside $D(\operatorname{GrMod}_0(A))$ ([[def-perfect-complex-over-a-ring]]).

[F2] A complex $P$ is K-projective when $\operatorname{Hom}_K(P,A[r])=0$ for every acyclic complex $A$ and every integer $r$ ([[def-homotopically-projective-bounded-above-complex]]).

[F3] For a K-projective complex $P$ and any complex $X$, the localization map $Q:\operatorname{Hom}_K(P,X)\to\operatorname{Hom}_D(P,X)$ is bijective, under the standing localization size convention ([[prop-morphisms-from-a-homotopically-projective-complex-need-no-roof]]).

[F4] The derived category is triangulated with distinguished triangles the isomorphic images of cone triangles; its cone convention is $\operatorname{Cone}(f)^n=Y^n\oplus X^{n+1}$ and $d(y,x)=(d_Yy+fx,-d_Xx)$ for a chain map $f:X\to Y$, and the cone triangle ends in $X[1]$; the localization is exact ([[thm-the-derived-category-inherits-a-triangulated-structure]], [[def-derived-category-of-an-abelian-category]]).

[F5] Projectivity is the lifting property against epimorphisms; a finitely generated projective module is a direct summand of a finite free module, choice-free, and every short exact sequence ending in a projective module splits ([[def-projective-module]], [[thm-projective-module-characterizations]]).

[F6] A graded module is finite graded projective exactly when it is a degree-zero direct summand of a finite direct sum of internal shifts $A\{r_1\}\oplus\cdots\oplus A\{r_n\}$; a graded projective object lifts degree-zero maps through degree-zero epimorphisms ([[thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules]], [[def-finitely-generated-graded-projective-module]]).

[F7] In $\operatorname{GrMod}_0(A)$ kernels, cokernels, finite biproducts and exactness are computed degreewise, and projective objects lift degree-zero maps ([[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]).

[F8] TR3 supplies a completion $c$ of a morphism of distinguished triangles once the first two components $a,b$ satisfy $bf=f'a$; a triple $(a,b,c)$ with the three commutation identities is a morphism of triangles ([[def-triangulated-category-axiom-tr-three]], [[def-morphism-and-isomorphism-of-triangles]]).

[F9] If a morphism of distinguished triangles has two adjacent object components isomorphisms, then the remaining component is an isomorphism ([[cor-triangulated-five-lemma]]).

[F10] A triangulated category carries the translation $[1]$ with specified quasi-inverse and a class of distinguished triangles closed under the axioms TR1–TR4 ([[def-triangulated-category]]).

## Proof

**Proof technique:** direct.

1.1 $D_{\mathrm{perf}}(A)$ is essentially small. Every finitely generated projective left $A$-module is a direct summand of a finite free module [F5]; choosing a finite generating family of $P$ gives a surjection $A^n\twoheadrightarrow P$, which splits by [F5], so $P\cong\operatorname{im}(e)$ for an idempotent $e\in M_n(A)$. The idempotent matrices in $\bigcup_{n\ge0}M_n(A)$ form a set, so the isomorphism classes of finitely generated projective left $A$-modules form a set; bounded cochain complexes of these modules are finite-support sequences of such modules with differentials, and they therefore also form a set of objects. By [F1] every object of $D_{\mathrm{perf}}(A)$ is isomorphic to one of these complexes, so the set of isomorphism classes $\operatorname{Iso}(D_{\mathrm{perf}}(A))$ is a set. In the graded case [F6] exhibits each finite graded projective as a degree-zero summand of a finite sum $A\{r_1\}\oplus\cdots\oplus A\{r_n\}$; the finite tuples of shifts and the degree-zero idempotent endomorphisms of their sums form a set, and the same finite-support complex argument applies with [F7]. [F1, F5, F6, F7, construct, algebra]

1.2 Shifts preserve bounded finite-projective complexes. If $P$ is a bounded complex of finitely generated projective left $A$-modules, then $(P[1])^n=P^{n+1}$ with differential $-d_P^{n+1}$ [F4], so $P[1]$ is again bounded with finitely generated projective terms, and likewise $P[-1]^n=P^{n-1}$ is such a complex. Graded complexes with degree-zero differentials behave identically, since cochain shift changes only cochain degrees and moves the sign of the differential. [F1, F4, algebra]

1.3 The cone of a chain map of bounded finite-projective complexes is again one. For a chain map $f:P\to Q$ of such complexes, [F4] gives $\operatorname{Cone}(f)^n=Q^n\oplus P^{n+1}$, which is a finite direct sum of finitely generated projective modules, hence finitely generated projective by [F5]; the support of the cone is contained in the sum of the supports of $P$ and $Q$, hence finite. In the graded case the biproduct is computed degreewise [F7] and a finite direct sum of finite graded projectives is again finite graded projective by [F6]. [F4, F5, F6, F7, algebra]

1.4 Every bounded complex $P$ of projective objects is K-projective, with no choice principle needed. Let $E$ be acyclic, $r$ an integer, $f:P\to E[r]$ a chain map, and suppose $P^n=0$ for $n>b$; put $F:=E[r]$, which is acyclic, and set $h^n=0$ for $n>b$. Inductively assume $h^{n+1}:P^{n+1}\to F^n$ satisfies $f^{n+1}=d_F^nh^{n+1}+h^{n+2}d_P^{n+1}$, and put $u^n:=f^n-h^{n+1}d_P^n$. Then $d_F^nu^n=d_F^nf^n-d_F^nh^{n+1}d_P^n=f^{n+1}d_P^n-(f^{n+1}-h^{n+2}d_P^{n+1})d_P^n=0$, so $u^n$ factors through the cycles $Z^n(F)=\ker d_F^n$. Since $H^n(F)=0$, the map $F^{n-1}\to Z^n(F)$ is an epimorphism; by projectivity of $P^n$ the composite $P^n\to Z^n(F)$ lifts to $h^n:P^n\to F^{n-1}$ with $d_F^{n-1}h^n=u^n$, which is the homotopy equation in degree $n$. Below the support of $P$ we take $h^n=0$, where both sides vanish. Only finitely many lifts are chosen, one for each degree in the finite support of $P$, so no dependent choice is used and the induction terminates. Hence $\operatorname{Hom}_K(P,F)=0$ for every acyclic $F$ and every shift, which is [F2]. [F2, F5, construct, induction, algebra]

2.1 Every derived morphism between bounded finite-projective complexes is represented by a chain map, uniquely up to homotopy. A bounded complex of finitely generated projectives has projective terms, so step 1.4 makes it K-projective; the published no-roof proposition [F3] then makes $Q:\operatorname{Hom}_K(P,X)\to\operatorname{Hom}_D(P,X)$ bijective for every complex $X$, in particular for a bounded finite-projective complex $X$. Surjectivity represents every derived morphism $P\to X$ by a chain map, and injectivity says two chain maps represent the same derived morphism exactly when they are chain homotopic. [F2, F3, step 1.4, algebra]

2.2 $D_{\mathrm{perf}}(A)$ is closed under shifts. Let $X$ be perfect with bounded finite-projective representative $P$, so that $X\cong P$ in $D(A\text{-}\mathrm{Mod})$. Then $X[1]\cong P[1]$ and $X[-1]\cong P[-1]$; by step 1.2 both $P[1]$ and $P[-1]$ are bounded complexes of finitely generated projectives, so [F1] makes $X[1]$ and $X[-1]$ perfect. In the graded case the same argument uses the graded shift of a bounded complex with degree-zero differentials and finite graded projective terms. [F1, step 1.2, algebra]

3.1 $D_{\mathrm{perf}}(A)$ is closed under cones. Let $X\to Y\to Z\to X[1]$ be a distinguished triangle of $D(A\text{-}\mathrm{Mod})$ with $X,Y$ perfect. Fix bounded finite-projective representatives $P,Q$ and isomorphisms $u:P\to X$, $v:Q\to Y$ in $D$. The composite $g:=v^{-1}\circ(X\to Y)\circ u:P\to Q$ is a derived morphism between bounded finite-projective complexes, so by step 2.1 it is represented by a chain map $f:P\to Q$ with $Q(f)=g$, that is, $vQ(f)=Q(X\to Y)u$. The cone triangle $P\to Q\to\operatorname{Cone}(f)\to P[1]$ is distinguished by [F4], and its cone is a bounded finite-projective complex by step 1.3. Since $v\circ Q(f)=Q(X\to Y)\circ u$, TR3 [F8] supplies a third component $c:\operatorname{Cone}(f)\to Z$ making $(u,v,c)$ a morphism of triangles; the first two components are isomorphisms, so the triangulated five lemma [F9] makes $c$ an isomorphism. Hence $Z\cong\operatorname{Cone}(f)$, and [F1] makes $Z$ perfect. The graded case is identical, with the graded biproduct and graded projectivity supplied by [F6, F7]. [F1, F4, F6, F7, F8, F9, step 1.3, step 2.1, algebra]

4.1 Collecting the results: $D_{\mathrm{perf}}(A)$ is a strictly full subcategory by [F1], closed under isomorphism by construction, and closed under shifts and cones by steps 2.2 and 3.1. The distinguished triangles with objects in $D_{\mathrm{perf}}(A)$ are those of $D(A\text{-}\mathrm{Mod})$ among these objects; the axioms TR1–TR4 hold in $D(A\text{-}\mathrm{Mod})$ [F10] and their completions, being built by shifts and cones from perfect objects, again lie in $D_{\mathrm{perf}}(A)$ by steps 2.2 and 3.1, while all morphisms between perfect objects are available because the subcategory is strictly full. Hence $D_{\mathrm{perf}}(A)$, with the inherited translation and triangles, is triangulated, and step 1.1 shows it is essentially small. The graded assertions are proved by the same steps with the graded data. [F1, F10, step 1.1, step 2.2, step 3.1, algebra] ∎
