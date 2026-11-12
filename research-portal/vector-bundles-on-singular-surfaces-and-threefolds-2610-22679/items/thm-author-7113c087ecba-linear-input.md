---
id: thm-author-7113c087ecba-linear-input
kind: theorem
title: Exact linear hyperdescent and derived-localization input
status: published
domain: mathematics
deps:
  - def-author-cf6ede58b450-site-plus-data
  - math:def-grothendieck-universe-closure-convention
  - math:def-axiom-of-choice
  - math:thm-modules-over-a-ring-form-an-abelian-category
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-cohomology-object-of-a-cochain-complex
  - math:def-derived-category-of-an-abelian-category
  - math:def-localization-of-a-category-at-a-class-of-morphisms
  - math:def-presheaf-representable-functor-and-representation
  - math:def-simplicial-object-and-simplicial-commutative-ring
  - math:def-product-total-complex-of-a-double-complex
  - math:thm-an-exact-functor-commutes-with-homology
  - math:def-commutative-ring
dependency_roles:
  def-author-cf6ede58b450-site-plus-data: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-modules-over-a-ring-form-an-abelian-category: mathematical-premise
  math:def-cochain-complex-in-an-abelian-category: mathematical-premise
  math:def-cohomology-object-of-a-cochain-complex: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  math:def-localization-of-a-category-at-a-class-of-morphisms: mathematical-premise
  math:def-presheaf-representable-functor-and-representation: mathematical-premise
  math:def-simplicial-object-and-simplicial-commutative-ring: mathematical-premise
  math:def-product-total-complex-of-a-double-complex: mathematical-premise
  math:thm-an-exact-functor-commutes-with-homology: mathematical-premise
  math:def-commutative-ring: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Utsav Choudhury and Martin Gallauer Alves de Souza, Homotopy theory of dg
        sheaves
      url: https://arxiv.org/pdf/1511.02828v1
      locator: Section 3, p. 8; Section 5.1, Definitions 5.1 and 5.3 and Remark 5.4,
        pp. 17–18; Theorem 5.7 and Lemma 5.10, pp. 18–19; Fact 5.15 and
        preceding paragraph, p. 22
      statement: For unbounded complexes on a small site, the local model inverts
        sheafified homology equivalences. Its fibrant objects satisfy hypercover
        descent, and sheafification compares its homotopy category with the
        derived category of sheaves. Descent uses product totalization of
        evaluation on coproducts of representables and is invariant under
        objectwise quasi-isomorphisms.
      hypotheses: A small Grothendieck site and a commutative unital coefficient ring;
        unbounded complexes. Hypercovers and products have the fixed universe
        bounds. No dimension, enough-points, or boundedness hypothesis.
      reading_limits: Read the displayed definitions, Theorem 5.7 and its printed
        proof, Lemma 5.10 and its printed proof, Remark 5.4, Fact 5.15 with its
        preceding paragraph, and the Section 3 conventions in the linked PDF
        during this assignment. Model-localization existence and the cited
        deeper simplicial-presheaf results are imported, not reconstructed.
        Reindex homological degree n as cohomological degree -n.
    - title: "The Stacks Project, Section 18.11: Sheafification of presheaves of
        modules"
      url: https://stacks.math.columbia.edu/tag/03CX
      locator: Lemma 18.11.1, its following adjunction formulas, and Lemma 18.11.2
      statement: Sheafifying a module over a presheaf of rings gives a module over the
        associated sheaf of rings. This functor is exact and left adjoint to
        restriction followed by inclusion; on sheaves the counit is an
        isomorphism.
      hypotheses: A site and a presheaf of rings. Apply to the constant presheaf with
        value Lambda; the module presheaves are precisely Lambda-linear
        presheaves.
      reading_limits: Read these statements and the printed proof of 18.11.2 online
        during this assignment; 18.11.1 has its proof omitted by the source.
        Underlying sheafification theory is imported. No claim to reconstruct
        it.
    - title: "The Stacks Project, Section 21.19: Cohomology of unbounded complexes"
      url: https://stacks.math.columbia.edu/tag/07A5
      locator: Opening paragraphs, the Grothendieck-abelian assertion, clause (2), and
        the following derived-functor computation formula
      statement: Modules on a ringed site form a Grothendieck abelian category. Every
        unbounded complex admits a K-injective resolution, and right derived
        additive functors are computed by applying the functor to that
        resolution.
      hypotheses: A ringed site with the usual size bounds; additive functor to an
        abelian category. Here the ring sheaf is the sheafification of the
        constant Lambda presheaf, and the functor is inclusion into
        Lambda-linear presheaves.
      reading_limits: Read these opening assertions, clause (2), and its computation
        formula during this assignment. Also read the statement of Theorem
        19.12.6 (079P); its transfinite existence proof and the cited generator
        constructions are imported, not reconstructed. Choice is retained
        explicitly.
    - title: "The Stacks Project, Section 13.31: K-injective complexes"
      url: https://stacks.math.columbia.edu/tag/070G
      locator: Definition 13.31.1, Lemma 13.31.2(1)–(3), and Lemma 13.31.7
      statement: For a K-injective target, homotopy-category morphisms compute
        derived-category morphisms. If all complexes admit K-injective
        resolutions, right derived functors exist and are computed on those
        resolutions.
      hypotheses: An abelian category; K-injectivity of the target for 13.31.2;
        existence of resolutions for 13.31.7. Use the fixed larger-universe
        localizations.
      reading_limits: Read the definition, all clauses and printed proofs of 13.31.2
        and 13.31.7 during this assignment. Their referenced roof and
        derived-functor machinery is imported. The preservation of K-injectivity
        by inclusion is proved in the present item.
dependency_level: 1
---

## Statement
Assume the Axiom of Choice. Fix Grothendieck universes $U\in V$ with $\omega\in U$, a $U$-small Grothendieck site $(\mathcal C,J)$, and a $U$-small commutative unital ring $\Lambda$. All values, coproduct index sets in hypercovers, and countable products below are $U$-small; categories and their localizations are formed in $V$. Write $\mathcal P=\operatorname{Fun}(\mathcal C^{\mathrm{op}},\Lambda\text{-}\operatorname{Mod}_U)$ for presheaves of modules, with natural transformations as morphisms, and let $\mathcal S=\operatorname{Sh}(\mathcal C,\Lambda)$ be the full subcategory whose underlying set presheaves satisfy the covering-sieve matching condition. Kernels and cokernels in $\mathcal P$ are pointwise. Let $a:\mathcal P\to\mathcal S$ be associated-sheaf formation and $i:\mathcal S\to\mathcal P$ inclusion. Both categories are abelian; $a$ is exact and $a\dashv i$, with $ai\cong\mathrm{id}$.

Use unbounded cochain complexes, $H^n(C)=\ker d^n/\operatorname{im}d^{n-1}$, and $D(\mathcal A)=K(\mathcal A)[\mathrm{qis}^{-1}]$. Here $K$ identifies cochain maps differing by a homotopy $f-g=dh+hd$, with $h$ of degree $-1$; a quasi-isomorphism induces isomorphisms on every $H^n$. A complex $I$ is K-injective when every map from an acyclic complex to $I$ is null-homotopic. A K-injective resolution is a quasi-isomorphism into such an $I$. The functor $a$ also denotes degreewise sheafification on derived categories. Let $W$ consist of maps of presheaf complexes for which every $aH^n(f)$ is invertible.

For precision, $yX=\mathcal C(-,X)$ is the representable set presheaf. An augmented simplicial presheaf $U_\bullet\to yX$ is a functor from $\Delta^{\mathrm{op}}$ to set presheaves with compatible maps to $yX$; $\Delta$ has the finite nonempty ordinals and monotone maps. Set $M_0=yX$. For $n>0$, $M_n(T)$ is the set of compatible families of elements of $U_k(T)$ indexed by all maps $[k]\to[n]$ with $0\leq k<n$, compatible under precomposition and with a common augmentation in $yX(T)$. These pointwise limits are the augmented matching presheaves. A hypercover requires $U_n=\coprod_{\alpha\in A_n}yX_{n,\alpha}$ and that each $U_n\to M_n$ become an epimorphism after associated-sheaf formation on sets. Thus $M_1=U_0\times_{yX}U_0$; an arbitrary augmented diagram is insufficient.

For a presheaf complex $C$, put $C(U_p)=\prod_{\alpha\in A_p}C(X_{p,\alpha})$. A map from $yT$ to a coproduct of representables is determined by its value on $\mathrm{id}_T$, which selects a summand and an arrow from $T$; applying the restriction maps of $C$ therefore defines pullback on these products. Pullback along the simplicial structure gives a cosimplicial complex, with horizontal differential $\delta=\sum_j(-1)^jd_j^*$. Its product totalization has degree $m$ equal to $\prod_{p\geq0}C(U_p)^{m-p}$ and differential $\delta+(-1)^p d_C$ on horizontal degree $p$. The differentials square to zero because $\delta^2=d_C^2=0$ and pullbacks commute with $d_C$. Descent means that the augmentation $C(X)\to\operatorname{Tot}^{\Pi}C(U_\bullet)$ is a quasi-isomorphism for every hypercover. This product-total model represents the derived hypercover evaluation used here.

The localization at $W$ has homotopy category $D(\mathcal S)$. In $D(\mathcal P)$ its local objects are exactly the hypercover-descent objects and its reflector is $L=Ri\,a$: choose $aC\to I$ K-injective in $\mathcal S$ and represent $LC$ by $iI$. More explicitly, $a\dashv Ri$, $Ri$ is fully faithful, and the unit $C\to LC$ becomes a quasi-isomorphism after $a$. Local means that precomposition by every map in $W$ induces bijections into the object and all its shifts; equivalently the unit is invertible. No bound on the complexes, dimension hypothesis, or enough-points hypothesis is imposed.

## Statement references
[[def-author-cf6ede58b450-site-plus-data]]

[[math:def-grothendieck-universe-closure-convention]]

[[math:def-axiom-of-choice]]

[[math:thm-modules-over-a-ring-form-an-abelian-category]]

[[math:def-cochain-complex-in-an-abelian-category]]

[[math:def-cohomology-object-of-a-cochain-complex]]

[[math:def-derived-category-of-an-abelian-category]]

[[math:def-localization-of-a-category-at-a-class-of-morphisms]]

[[math:def-presheaf-representable-functor-and-representation]]

[[math:def-simplicial-object-and-simplicial-commutative-ring]]

[[math:def-product-total-complex-of-a-double-complex]]

[[math:thm-an-exact-functor-commutes-with-homology]]

[[math:def-commutative-ring]]

## External input
The hypercover criterion, homotopy invariance of its product-total model, and derived-sheaf model comparison are imported from [Choudhury–Gallauer, Definitions 5.1/5.3, Remark 5.4, Theorem 5.7, Lemma 5.10 and Fact 5.15](https://arxiv.org/pdf/1511.02828v1). These apply to the site, ring and unbounded complexes just specified, after reindexing chains as cochains.

Exact module sheafification and its adjunction are imported from [Stacks, Lemmas 18.11.1–18.11.2](https://stacks.math.columbia.edu/tag/03CX). The ringed-site Grothendieck-abelian and unbounded-resolution input is [Stacks, Section 21.19, opening and clause (2)](https://stacks.math.columbia.edu/tag/07A5). The K-injective Hom and derived-functor rules are [Stacks, Definition 13.31.1 and Lemmas 13.31.2/13.31.7](https://stacks.math.columbia.edu/tag/070G). These are imported premises; the composition proving the particular reflector below is local.

## Facts & Assumptions
**Given:** The site, ring, universes and Choice in the statement.

**Goal:** Identify the reflector and connect its local objects with the imported hypercover criterion.

[A1] Choice is retained for the imported unbounded-resolution and model-existence inputs. The universe closure convention bounds all site diagrams and complexes: the collections of $U$-small modules, presheaves and complexes are $V$-small, since their structure data are sets built from $U\in V$. Thus the derived-category supplier's small-category size alternative applies in $V$; no unrestricted local-smallness claim is assumed. [[math:def-axiom-of-choice]], [[math:def-grothendieck-universe-closure-convention]], [[math:def-derived-category-of-an-abelian-category]].

[F1] The first external input supplies hypercover local objects and the sheaf-model comparison for exactly $W$. The site and matching-family conventions are [[def-author-cf6ede58b450-site-plus-data]]; representables, simplex maps and product totals are [[math:def-presheaf-representable-functor-and-representation]], [[math:def-simplicial-object-and-simplicial-commutative-ring]] and [[math:def-product-total-complex-of-a-double-complex]], reindexed with the stated sign convention. Localization has the universal property in [[math:def-localization-of-a-category-at-a-class-of-morphisms]].

[F2] The second external input gives exact $a\dashv i$ and $ai\cong\mathrm{id}$. Sheaves of $\Lambda$-modules identify with modules over the associated sheaf of the constant ring presheaf: the action extends uniquely to local representatives of constant-ring sections by the unique action in Stacks 18.11.1. Presheaves of modules are abelian by pointwise kernels, cokernels and image-coimage equality in [[math:thm-modules-over-a-ring-form-an-abelian-category]]. The third input therefore applies to $\mathcal S$ and gives K-injective resolutions and $Ri$ into $D(\mathcal P)$; it is not restricted to integer coefficients.

[F3] The fourth external input identifies $\operatorname{Hom}_K(-,I)$ with $\operatorname{Hom}_D(-,I)$ for K-injective $I$. Cohomology and exact-functor compatibility use [[math:def-cochain-complex-in-an-abelian-category]], [[math:def-cohomology-object-of-a-cochain-complex]] and [[math:thm-an-exact-functor-commutes-with-homology]], with homological degree $n$ read as cohomological degree $-n$.

## Proof
1.1 By exactness and the cohomology compatibility in [F3], $H^n(aC)\cong aH^n(C)$, so $a$ descends to derived categories and sends precisely $W$ to quasi-isomorphisms. Choose $B\to I$ K-injective in $\mathcal S$ using [F2]. The adjunction extends to cochain maps and homotopies degreewise. For an acyclic presheaf complex $A$, exactness makes $aA$ acyclic, so $\operatorname{Hom}_{K(\mathcal P)}(A,iI)=\operatorname{Hom}_{K(\mathcal S)}(aA,I)=0$; hence $iI$ is K-injective. Consequently [F3] gives natural identifications $\operatorname{Hom}_{D(\mathcal P)}(C,iI)\cong\operatorname{Hom}_{K(\mathcal P)}(C,iI)\cong\operatorname{Hom}_{K(\mathcal S)}(aC,I)\cong\operatorname{Hom}_{D(\mathcal S)}(aC,B)$. This proves $a\dashv Ri$ for the asserted resolution model, with independence of resolutions supplied by the same natural Hom identification. Its counit $aRiB\to B$ is invertible because $aiI=I\simeq B$; thus the adjunction identifies morphisms between $RiB$ and $RiB'$ with those between $B$ and $B'$, proving full faithfulness. [A1, F2, F3, construct]

2.1 The unit is represented by $C\to iaC\to iI$, whose image under $a$ is the resolution $aC\to I$; it belongs to $W$. For any $W$-inverting functor $T$ on $D(\mathcal P)$, applying $T$ to this unit identifies $T$ naturally with $(T\circ Ri)\circ a$; the invertible counit makes this factorization unique up to the universal natural isomorphism. Thus $a$ is localization at $W$ and $L=Ri\,a$ is its reflector. Its image objects are $W$-local by the Hom adjunction, in every shift. Conversely if $C$ is $W$-local, its unit $\eta:C\to LC$ gives a retraction $r:LC\to C$ by locality; locality of $LC$ then gives $\eta r=\mathrm{id}$, since both sides agree after precomposition by $\eta$. Hence $\eta$ is invertible. The imported criterion [F1] identifies these same local objects with hypercover-descent complexes, and its model comparison identifies the homotopy category with $D(\mathcal S)$. This retains the unbounded product-total hypercover criterion, without substituting ordinary covering-family descent. [F1, F2, F3, step 1.1] ∎
