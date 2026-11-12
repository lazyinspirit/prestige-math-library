---
id: lem-second-chern-additive
kind: lemma
title: Second Chern additivity on the second piece
status: published
domain: mathematics
deps:
  - lem-author-9b6cb358ddc9-actual-cartan
  - lem-author-ec13f1db88a5-global-picard-projection
  - prop-first-chern-determinant
  - def-motivic-filtration
  - lem-filtered-stage-exact-sequence
  - math:def-axiom-of-choice
  - def-article-conventions
  - def-vector-bundle-classes
  - def-motivic-cohomology
  - thm-author-d026a7b99ace-universal-chern-space
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  lem-author-9b6cb358ddc9-actual-cartan: mathematical-premise
  lem-author-ec13f1db88a5-global-picard-projection: mathematical-premise
  prop-first-chern-determinant: mathematical-premise
  def-motivic-filtration: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-article-conventions: mathematical-premise
  def-vector-bundle-classes: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Fasel and Yakerson, Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: v1, p. 3, Notation and conventions; p. 11, Section 5, Lemma 5.3 and its
        proof
      statement: Lemma 5.3 states that the second motivic Chern class on the second
        image filtration subgroup is a group homomorphism for normal X. Its
        proof also calculates c_2([V]-[W])=c_2(V)-c_2(W) for bundle differences
        in that subgroup.
      hypotheses: The article fixes an algebraically closed base field and qcqs
        schemes over it; its convention imposes finite type on affine schemes.
        Lemma 5.3 assumes normality. Its written argument uses global
        bundle-difference representatives and a Chern polynomial for
        finite-dimensional X. The present arbitrary-field, arbitrary-qcqs
        extension instead uses the explicitly declared perfect-space Cartan,
        first-layer and bundle-retention interfaces under their Choice and size
        assumptions.
      reading_limits: Read the supplied v1 article extraction at p. 3, Notation and
        conventions, and the full statement and proof of Lemma 5.3 on p. 11;
        inspected the corresponding supplied PDF page images page-3.png and
        page-11.png. These passages support the original normal-scheme assertion
        and the bundle calculation. The expanded scope and argument are locally
        authored using the inspected supplier bodies, not attributed to the
        article. The external constructions behind those suppliers were not
        reconstructed or freshly independently judged here.
dependency_level: 27
formulation_deps:
  - def-article-conventions
  - def-vector-bundle-classes
  - def-motivic-cohomology
  - def-motivic-filtration
  - thm-author-d026a7b99ace-universal-chern-space
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - lem-author-9b6cb358ddc9-actual-cartan
  - lem-author-ec13f1db88a5-global-picard-projection
  - prop-first-chern-determinant
  - def-motivic-filtration
  - lem-filtered-stage-exact-sequence
  - math:def-axiom-of-choice
  - def-article-conventions
  - def-vector-bundle-classes
  - def-motivic-cohomology
  - thm-author-d026a7b99ace-universal-chern-space
  - math:def-grothendieck-universe-closure-convention
---

## Statement
Assume AC and the fixed site/universe bounds. Let $k$ be algebraically closed and $X$ a normal qcqs $k$-scheme. For perfect-complex $K_0$ the actual global operation restricts to a homomorphism
$$c_2:F^2_{\mathrm{mot}}K_0(X)\longrightarrow H^{4,2}_{\mathrm{mot}}(X,\mathbb Z).$$
For every bundle difference $[V]-[W]$ in this piece, $c_2([V]-[W])=c_2(V)-c_2(W)$. There is no finite-type, noetherian, finite-dimensional or global bundle-representation hypothesis. In fact the same conclusion holds on every qcqs scheme over any field with these operations and conventions.

Here qcqs means quasi-compact and quasi-separated; normal means that every local ring is an integrally closed domain. A vector bundle is a finite locally free $\mathcal O_X$-module, and $[E]$ is the object class of its degree-zero perfect complex in $K_0(X)=\pi_0K(X)$. The second image subgroup is $F^2_{\mathrm{mot}}K_0(X)=\operatorname{im}(\pi_0F^2_{\mathrm{mot}}K(X)\to K_0(X))$. The target $H^{4,2}_{\mathrm{mot}}(X,\mathbb Z)$ is degree-four cohomology of the specified weight-two integral motivic complex. On bundles, $c_i(E)$ denotes the projective-relation Chern class; on perfect classes, $c_i(x)$ denotes its specified actual global extension.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]]. Use fixed compatible Grothendieck universes in the closure convention of [[math:def-grothendieck-universe-closure-convention]], with $\omega$ in the data universe, and the inherited site and universe bounds of [F1]–[F4]. Their existence is separately assumed, not deduced from Choice. Choice and these bounds are inherited from the actual first-layer comparison in [F2] at step 1.1, the perfect Cartan and inversion operations in [F1] at steps 2.1–3.1, and the bundle-object and bundle-retention constructions in [F3]–[F4] at step 3.1. No simultaneous choice of representatives is made.

**Given:** The stated scheme, conventions, and the second image subgroup $H=F^2_{\mathrm{mot}}K_0(X)$.

**Goal:** Prove the claim for actual perfect classes, including those without global bundle-difference representatives.

[F1] [[lem-author-9b6cb358ddc9-actual-cartan]] supplies actual perfect Cartan through degree three on all qcqs field-schemes, with zero normalization and formal inversion. Its products are the motivic cup products; the diagonal groups $H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$ form a commutative ring. In particular its degree-one identity gives additivity of the actual first class on perfect $K_0$.

[F2] [[def-motivic-filtration]] defines the nested image subgroups. [[lem-filtered-stage-exact-sequence]] makes the composite from the second stage to the first layer zero. [[lem-author-ec13f1db88a5-global-picard-projection]] and [[prop-first-chern-determinant]] identify this layer on the rank-zero fiber with the actual first Chern class, naturally and in full qcqs scope.

[F3] [[thm-author-d026a7b99ace-universal-chern-space]] constructs the actual global perfect-space operations and retains the projective-relation bundle classes under the bundle object-class maps. Thus $c_i([E])=c_i(E)$ for a finite locally free bundle $E$, in particular for $i=1,2$, with the same operations as in [F1]. This uses the supplier's actual object maps and local-replacement unit, without requiring a global bundle-difference representative for every perfect class.

[F4] [[def-article-conventions]] supplies the $k$-scheme, qcqs and finite locally free conventions, with this Statement's explicit arbitrary-field scope and absence of finite-type restrictions taking precedence over the article's standing conventions. [[def-vector-bundle-classes]] supplies the spectral object class $[E]\in K_0(X)$ of $E$ concentrated in degree zero. [[def-motivic-cohomology]] defines the integral motivic cohomology groups used here, with degree and weight as displayed.

## Proof
1.1 For $x\in H$ choose a second-stage representative and map it to the first stage. Its first-layer value is zero by the consecutive fiber sequence in [F2], and its augmentation is $x$. The actual first-layer identification in [F2] gives $c_1(x)=0$. The same holds for every element of $H$, an additive subgroup by definition. [A1, F2, F4, given]

2.1 For $x,y\in H$, the degree-two identity in [F1] gives $c_2(x+y)=c_2(x)+c_1(x)c_1(y)+c_2(y)=c_2(x)+c_2(y)$. Pointedness gives $c_2(0)=0$; taking $y=-x$ gives inverse preservation. Thus this restriction is a homomorphism. [A1, F1, step 1.1]

3.1 If $[V]-[W]\in H$, [F4] gives the indicated bundle object classes, and [F3] identifies their first and second perfect classes with the bundle Chern classes. The degree-one identity in [F1] and step 1.1 give $c_1(V)=c_1(W)$. Cartan and inversion in [F1], using the same identifications, give $c_2([V]-[W])=c_2(V)-c_1(V)c_1(W)+c_1(W)^2-c_2(W)$, which is the stated formula. This proves the special bundle formula without assuming all perfect classes have that form. [A1, F1, F3, F4, step 1.1, step 2.1] ∎
