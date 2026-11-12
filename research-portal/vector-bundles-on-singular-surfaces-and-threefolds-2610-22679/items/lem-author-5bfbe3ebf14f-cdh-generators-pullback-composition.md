---
id: lem-author-5bfbe3ebf14f-cdh-generators-pullback-composition
kind: lemma
title: Pullback and composition of the cdh generating families
status: published
domain: mathematics
deps:
  - def-cdh-topology-interface
  - def-nisnevich-covering-interface
  - math:def-etale-morphism-schemes
  - math:def-fibre-product-schemes-universal-property
  - math:def-base-change-morphism-schemes
  - math:lem-points-of-scheme-fibre-product-residue-tensors
  - math:lem-base-change-composition
  - math:thm-coproduct-property-of-tensor-products-of-commutative-algebras
dependency_roles:
  def-cdh-topology-interface: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
  math:def-etale-morphism-schemes: mathematical-premise
  math:def-fibre-product-schemes-universal-property: mathematical-premise
  math:def-base-change-morphism-schemes: mathematical-premise
  math:lem-points-of-scheme-fibre-product-residue-tensors: mathematical-premise
  math:lem-base-change-composition: mathematical-premise
  math:thm-coproduct-property-of-tensor-products-of-commutative-algebras: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 8
sources:
  references:
    - title: The Stacks Project, Étale morphisms
      url: https://stacks.math.columbia.edu/tag/02GH
      locator: Section 29.37, paragraph after Definition 29.37.1; Lemmas
        29.37.2–29.37.4 and 29.37.9
      statement: Étale means smooth of relative dimension zero. Étaleness is local on
        source and target, is preserved by composition and arbitrary base
        change, and holds for open immersions.
      hypotheses: Morphisms of schemes, with no noetherian, separatedness,
        quasi-compactness or flat-base-change restriction. For locality use open
        covers as in Lemma 29.37.2.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the equivalence paragraph, these statements and their
        displayed short proofs on tag 02GH. The linked algebraic stability and
        locality proofs were not reconstructed. These are imported premises, not
        a local proof of scheme-theoretic étale stability or library acceptance.
        Current maintenance read the assigned consumer and its exact declared
        supplier interfaces; no fresh primary-source or page-image reading,
        reconstruction or independent acceptance is claimed for this reference."
    - title: The Stacks Project, Proper morphisms
      url: https://stacks.math.columbia.edu/tag/01W0
      locator: Definition 29.42.1 and Lemmas 29.42.3–29.42.6
      statement: Proper means separated, finite type and universally closed;
        properness is local on the target, is preserved by composition and
        arbitrary base change, and holds for closed immersions.
      hypotheses: Morphisms of schemes; locality is for an open cover of the target.
        No noetherian or reducedness hypothesis or restriction on the base
        change is imposed.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the definition and exact statements on tag 01W0, and the
        displayed proofs of Lemmas 29.42.4–29.42.6. Lemma 29.42.3 has an omitted
        proof and is imported as stated. The linked separatedness and
        finite-type lemmas were not reconstructed. Current maintenance read the
        assigned consumer and its exact declared supplier interfaces; no fresh
        primary-source or page-image reading, reconstruction or independent
        acceptance is claimed for this reference."
    - title: The Stacks Project, Glueing schemes
      url: https://stacks.math.columbia.edu/tag/01JA
      locator: Lemmas 26.14.1–26.14.2, specialized to empty overlaps between distinct
        components
      statement: "Gluing schemes with empty overlaps gives their coproduct: its
        components are open and closed, carry their original local rings, and
        morphisms out are specified componentwise."
      hypotheses: A set-indexed collection of schemes, identity self-overlaps and
        empty pairwise overlaps; here only finite collections, including the
        empty one, are used.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the gluing hypotheses, both lemma statements, the topology
        and sheaf construction in the proof of 26.14.1, and the proof of
        26.14.2. The mapping properties are stated with proof omitted. Only the
        empty-overlap specialization is imported; no general gluing proof is
        claimed locally. Current maintenance read the assigned consumer and its
        exact declared supplier interfaces; no fresh primary-source or
        page-image reading, reconstruction or independent acceptance is claimed
        for this reference."
formulation_deps:
  - def-cdh-topology-interface
  - def-nisnevich-covering-interface
  - math:def-etale-morphism-schemes
  - math:def-fibre-product-schemes-universal-property
  - math:def-base-change-morphism-schemes
argument_deps:
  - def-cdh-topology-interface
  - def-nisnevich-covering-interface
  - math:def-etale-morphism-schemes
  - math:def-fibre-product-schemes-universal-property
  - math:def-base-change-morphism-schemes
  - math:lem-points-of-scheme-fibre-product-residue-tensors
  - math:lem-base-change-composition
  - math:thm-coproduct-property-of-tensor-products-of-commutative-algebras
---

## Statement
On this finite-type site, Nisnevich families and singleton completely decomposed proper (cdp) morphisms contain identities and are stable under arbitrary base change. Finite compositions of such families are stable under base change and composition. Every resulting composite family is completely decomposed in the pointwise sense: each target point has a lift with identical residue field. Finite disjoint unions of Nisnevich maps forming a cover give a Nisnevich covering morphism; finite disjoint unions over the disjoint union of their targets of cdp morphisms give a cdp morphism.

## Facts & Assumptions
**Given:** The finite-type site and the pointwise definitions from [[def-cdh-topology-interface]] and [[def-nisnevich-covering-interface]]. Residue fields are compared by their induced field maps, so “identical residue field” means that map is an isomorphism.

**Goal:** Verify the closure properties used for a finite pretopology.

[F1] A Nisnevich family consists of étale morphisms and supplies a residue-field-preserving lift of every target point; a cdp morphism is proper and has that lifting property. The site represents the indicated fibre products and finite coproducts. [[def-nisnevich-covering-interface]] [[def-cdh-topology-interface]]

[F2] Composing families $\{U_i\to X\}$ and $\{V_{ij}\to U_i\}_j$ means the family $\{V_{ij}\to X\}_{i,j}$. Finite composition means finitely many such substitutions. A mixed composite need not itself be étale or proper; the assertion for mixed composites is their pointwise lifting property and closure of the class of such composites. Only finitely many successive lifts of one point are used.

[F3] Fibre products have their universal-property meaning, base change is the projection of that product, and iterated base changes are canonically identified compatibly with projections. [[math:def-fibre-product-schemes-universal-property]] [[math:def-base-change-morphism-schemes]] [[math:lem-base-change-composition]]

[F4] Points above $y\in Y$ and $x'\in X'$ over $x\in X$ in $Y\times_X X'$ correspond to primes of $\kappa(y)\otimes_{\kappa(x)}\kappa(x')$, with the corresponding residue fields and induced projection maps. [[math:lem-points-of-scheme-fibre-product-residue-tensors]] The tensor product here is the coproduct of commutative algebras, with its canonical factor maps. [[math:thm-coproduct-property-of-tensor-products-of-commutative-algebras]]

[F5] The exact imported stability and locality facts, including the equivalence with smooth relative dimension zero used by [[math:def-etale-morphism-schemes]], are recorded in External input. They are not consequences merely of the definition of étaleness or of properness.

[F6] The coproduct construction and its local rings are the empty-overlap specialization in External input. Properness is local on the target, whereas étaleness is local on source and target. These facts apply to the finite open-and-closed components used below.

## Proof
1.1 Write $K=\kappa(x)$, $L=\kappa(y)$, $K'=\kappa(x')$, and let $\alpha:K\to L$ be the residue-field isomorphism of a chosen lift and $\beta:K\to K'$ the base-change field map. By [F4] the map $L\otimes_K K'\to K'$ given by $a\otimes b\mapsto\beta(\alpha^{-1}(a))b$ is a well-defined algebra map, inverse to $b\mapsto1\otimes b$. Thus the zero prime of the field $K'$ specifies a point of $Y\times_X X'$ above $y,x'$ whose induced residue-field map from $K'$ is an isomorphism. This proves the lifting property after arbitrary base change. The stability premises in [F5] supply étaleness or properness as appropriate. Identity maps are both open and closed immersions, hence étale and proper by [F5], and lift every point identically. Through a composite family, first lift a target point through one family and then through the family above that lift. The composite of the two induced residue-field isomorphisms is an isomorphism; finite iteration proves the lifting assertion for every mixed composite. Same-kind composition also preserves étaleness or properness by [F5]. Explicitly, for $V\to U\to X$ and $X'\to X$, [F3] identifies $V\times_U(U\times_X X')$ with $V\times_X X'$ over $U\times_X X'$ and $X'$. The two inverse maps retain the projections to $V,X'$ and insert or remove the forced projection to $U$. Consequently the pullback of a composite family is the composite of its pulled-back families. Finite iteration proves closure under base change, and concatenating substitutions proves closure under composition. [given, F1, F2, F3, F4, F5, algebra]

2.1 For a finite Nisnevich family $\{U_i\to X\}$, the morphism $\coprod_iU_i\to X$ is étale by source locality in [F5], applied to the component opens of [F6]. The family supplies a residue-preserving lift in one component for each target point, and [F6] preserves its local ring and hence its residue field in the coproduct. This is a Nisnevich covering morphism. For cdp maps $Y_i\to X_i$, the inverse image of each component $X_i$ under $\coprod_iY_i\to\coprod_iX_i$ is exactly $Y_i$, by the coproduct construction and mapping property in [F6]. Properness follows from target locality in [F5], and the residue-preserving lift is supplied in this unique target component by its cdp map. Thus this coproduct morphism is cdp. These arguments include empty components; an empty covering family has target the empty scheme, where its lifting condition is vacuous and its coproduct map is the empty identity. Together with step 1.1 this proves every asserted closure and lifting property, without asserting that a mixed composite is proper or étale. [F1, F5, F6, step 1.1] ∎

## External input
The following are imported premises for the local argument above; the lemma itself is proved locally.

The étale stability, locality, open-immersion and smooth-relative-dimension-zero facts in [F5] are imported from [Stacks, Section 29.37](https://stacks.math.columbia.edu/tag/02GH), at the locators and with the hypotheses recorded in source reference 0.

The proper stability, target locality and closed-immersion facts in [F5]–[F6] are imported from [Stacks, Definition 29.42.1 and Lemmas 29.42.3–29.42.6](https://stacks.math.columbia.edu/tag/01W0), as recorded in source reference 1.

The coproduct construction in [F6] is imported from [Stacks, Lemmas 26.14.1–26.14.2](https://stacks.math.columbia.edu/tag/01JA) by taking empty overlaps between distinct components. It gives the topological disjoint union, the original sheaf on each open-and-closed component and the componentwise mapping property, as recorded in source reference 2. The source reading limits are part of each reference; no reconstruction of the substantial imported results is claimed.
