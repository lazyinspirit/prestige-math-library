---
id: lem-author-ab0a6fc202cb-clopen-derived-descent
kind: lemma
title: Derived Nisnevich descent on a finite clopen partition
status: published
domain: mathematics
deps:
  - def-nisnevich-covering-interface
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-open-immersion-schemes
  - math:def-affine-open-subscheme
  - math:ex-localization-etale-open-immersion
  - math:lem-fibre-product-open-restriction
dependency_roles:
  def-nisnevich-covering-interface: mathematical-premise
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:ex-localization-etale-open-immersion: mathematical-premise
  math:lem-fibre-product-open-restriction: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 7
sources:
  references:
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Example 1.2.13.1 and Remark 1.2.13.3, Definition 1.2.13.4 and Remark
        1.2.13.5, printed pp. 46–47; Corollary 5.5.2.4, printed p. 464 (PDF
        pages 64–65 and 482, one-based).
      statement: A coherent limit is a terminal cone, characterized by its mapping
        spaces; products are limits of discrete diagrams and an empty product is
        terminal. Every presentable infinity-category admits all small limits.
      hypotheses: A diagram in an infinity-category; presentability for the existence
        assertion. All diagram sizes are relative to fixed compatible universes.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read these definitions, mapping-space descriptions and the
        complete statement and proof of Corollary 5.5.2.4 in the primary PDF
        text. The representability and presheaf results cited in that proof are
        imported, not reconstructed; no whole-book review is claimed. Current
        maintenance read the assigned consumer and its exact declared supplier
        interfaces; no fresh primary-source or page-image reading,
        reconstruction or independent acceptance is claimed for this reference."
    - title: Kerodon, Corollary 7.2.3.5 (02XX)
      url: https://kerodon.net/tag/02XX
      locator: Corollary 7.2.3.5, conditions (1) and (2), and its proof.
      statement: For a weakly contractible simplicial set K and a cone
        K^{triangleleft} into an infinity-category, carrying every edge of the
        cone to an equivalence is equivalent to the restricted diagram carrying
        every edge to an equivalence and the cone being a limit cone. In
        particular the identity cone on a constant K-diagram is a limit.
      hypotheses: K is weakly contractible, the target is an infinity-category, and
        the full cone sends every edge to an equivalence for the forward
        implication used here.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the complete corollary and its proof on the primary Kerodon
        page. Its anodyne-replacement and cofinality inputs are imported, not
        reconstructed. The local application uses only the identity cone on the
        constant diagram indexed by the nerve of the simplex category. Current
        maintenance read the assigned consumer and its exact declared supplier
        interfaces; no fresh primary-source or page-image reading,
        reconstruction or independent acceptance is claimed for this reference."
    - title: Kerodon, Contractibility, Subsection 3.2.4 (02L4)
      url: https://kerodon.net/tag/02L4
      locator: Example 3.2.4.2; Definition 3.2.4.16; Remark 3.2.4.17.
      statement: The nerve of an ordinary category with an initial or final object is
        contractible, hence weakly contractible. Weak contractibility means that
        the projection to a point is a weak homotopy equivalence.
      hypotheses: An ordinary category with an initial or final object, with its nerve
        regarded as a simplicial set; take it small in the chosen universe.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read exactly the three indicated entries on the primary subsection
        page. The nerve-homotopy proposition cited by the example is imported.
        No verification of the surrounding homotopy-group theory is claimed.
        Current maintenance read the assigned consumer and its exact declared
        supplier interfaces; no fresh primary-source or page-image reading,
        reconstruction or independent acceptance is claimed for this reference."
formulation_deps:
  - def-nisnevich-covering-interface
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-open-immersion-schemes
  - math:def-affine-open-subscheme
  - math:ex-localization-etale-open-immersion
  - math:lem-fibre-product-open-restriction
argument_deps:
  - def-nisnevich-covering-interface
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-open-immersion-schemes
  - math:def-affine-open-subscheme
  - math:ex-localization-etale-open-immersion
  - math:lem-fibre-product-open-restriction
---

## Statement
Assume the Axiom of Choice and the compatible Grothendieck-universe and site-size conventions of the supplied unbounded derived construction, with $\omega$ in the base universe. Write $D(\mathbb Z)=\mathcal D(\mathbb Z)$ for the enhanced localization of unbounded cochain complexes of unital $\mathbb Z$-modules at quasi-isomorphisms, retaining its coherent mapping spaces. Let $F:\mathcal C^{\mathrm{op}}\to D(\mathbb Z)$ be a homotopy-coherent Nisnevich sheaf on a category of schemes within these size bounds. Suppose the empty scheme and a finite clopen partition $X=\coprod_{\alpha\in A}X_\alpha$, its inclusions and their iterated fiber products lie in $\mathcal C$. Here a clopen partition consists of pairwise disjoint open-and-closed subschemes covering $X$, with the restricted structure sheaves; empty pieces and an empty index set are allowed. Require every augmentation to $X$ and every face and degeneracy map between the chosen iterated fiber products to be a morphism of $\mathcal C$. Require also the canonical scheme isomorphism from each such product to $X_\alpha$ when all indices equal $\alpha$, or to $\varnothing$ otherwise, and its inverse, to be morphisms of $\mathcal C$. Then $F(\varnothing)\simeq0$, and restriction induces a natural equivalence
$$F(X)\xrightarrow{\simeq}\prod_{\alpha\in A}F(X_\alpha).$$
Here sheaf means that the canonical comparison for every covering family whose full augmented Cech system of intersection objects and morphisms is available in $\mathcal C$ is an equivalence to the homotopy limit of its Cech descent diagram; the empty covering family is included. All products and limits are coherent ones in the enhanced category, not limits in its ordinary homotopy category. A totalization is the limit of a cosimplicial diagram, indexed by the simplex category $\Delta$ of the nonempty finite ordered sets $[n]=\{0,\ldots,n\}$ and all order-preserving maps. Its nerve has $r$-simplices the strings of $r$ composable maps, with faces given by composition or endpoint deletion and degeneracies by identity insertion. These indexing diagrams and cover index sets are small relative to the chosen derived enhancement. The empty product is its zero object. No assertion about injectivity for general overlapping open covers is made.

## Statement references

[[def-nisnevich-covering-interface]]

[[thm-author-4f716d60801a-derived-enhancement-input]]

[[math:def-axiom-of-choice]]

[[math:def-grothendieck-universe-closure-convention]]

[[math:def-open-immersion-schemes]]

[[math:def-affine-open-subscheme]]

## Facts & Assumptions

**Given:** The Choice and size assumptions, the enhanced target, the sheaf $F$ and the finite partition in the Statement.

**Goal:** Compute descent on this particular finite cover, including the empty case.

[A1] Choice and the explicit universe assumptions are retained when applying the unbounded enhancement supplier; existence of the chosen universes is a size assumption, not a consequence asserted from Choice. [[math:def-axiom-of-choice]] [[math:def-grothendieck-universe-closure-convention]]

[A2] The category contains every augmentation, face and degeneracy map of the chosen intersection objects and both directions of their canonical isomorphisms with the pieces or the empty scheme, as required in the Statement. Thus $F$ is defined on all these maps, and sends each specified isomorphism to an equivalence. These canonical maps have their scheme fiber-product and open-restriction meanings. [[def-nisnevich-covering-interface]] [[math:lem-fibre-product-open-restriction]]

[F1] A Nisnevich cover is an etale family with residue-field-preserving lifts of every point. Open immersions identify the source with the restricted open subscheme and are etale, including the empty immersion. Thus their local rings and residue fields agree with those of the target at corresponding points. Fiber products with open subschemes are inverse-image open subschemes. [[def-nisnevich-covering-interface]] [[math:def-open-immersion-schemes]] [[math:def-affine-open-subscheme]] [[math:ex-localization-etale-open-immersion]] [[math:lem-fibre-product-open-restriction]]

[F2] The ring-$\mathbb Z$ case of the enhancement supplier constructs the stable presentable infinity-category $D(\mathbb Z)$ under [A1]; stable includes a zero object. Reference 0 supplies its small coherent limits and the terminal-cone and mapping-space characterizations of limits and products. A cone with vertex $L$ is a coherent family of maps from $L$ to the diagram; terminality means that its space of factorizations from every other cone is contractible. [[thm-author-4f716d60801a-derived-enhancement-input]]

[F3] By the assumed sheaf condition, $F(X)$ is the totalization of the cosimplicial diagram $C^\bullet$ with
$$C^n=\prod_{(\alpha_0,\ldots,\alpha_n)\in A^{n+1}}F(X_{\alpha_0}\times_X\cdots\times_X X_{\alpha_n}).$$
By [A2], applying $F$ to the actual Cech face and degeneracy maps defines its structure maps, induced by coordinate projections and repetitions. Descent for the empty family gives the terminal object: every degree is an empty product. This is the assumed derived sheaf condition for the covering families of [[def-nisnevich-covering-interface]], not an assertion that ordinary sheaf values compute derived sections.

[F4] Reference 1 supplies the identity-cone limit for a constant diagram indexed by a weakly contractible simplicial set. Reference 2 supplies contractibility of the nerve of an ordinary category with a terminal object and its implication of weak contractibility. The constant diagram has one value and identity structure maps, with their constant coherences. Weak contractibility means that projection of the indexing simplicial set to a point is a weak homotopy equivalence.

## External input
Import the coherent-limit interface and existence theorem of reference 0, the constant-cone criterion of reference 1, and the nerve-contractibility facts of reference 2, only with their stated hypotheses and reading limits. The enhanced target itself is supplied by the ring-$\mathbb Z$ specialization of [[thm-author-4f716d60801a-derived-enhancement-input]] under [A1]. The two-step computation below is a local application of these inputs; no reconstruction of their foundational proofs is claimed.

## Proof

1.1 By [F1] the clopen inclusions cover $X$ in the Nisnevich topology: each point lies in a piece with the same local ring and residue field. The empty family covers the empty scheme since its point-lifting condition is vacuous. In that empty-cover case [F3] is the constant diagram at the terminal object. The simplex category has terminal object $[0]$, since there is exactly one order-preserving map $[n]\to[0]$ for every $n$; hence [F4] makes its nerve weakly contractible and makes the identity cone on any constant diagram a limit cone. Thus empty-cover descent identifies $F(\varnothing)$ with the terminal object of $D(\mathbb Z)$, which is its zero object by [F2]. If $A$ is empty then $X=\varnothing$, and the desired equivalence is already proved. [A1, F1, F2, F3, F4]

2.1 Suppose $A$ is nonempty, and put $P=\prod_{\alpha\in A}F(X_\alpha)$. Repeated use of the inverse-image description in [F1] identifies each iterated fiber product in [F3] canonically with $X_\alpha$ when all indices equal $\alpha$, and with the empty open subscheme otherwise. By [A2] these isomorphisms and their inverses lie in $\mathcal C$, so applying $F$ identifies the diagonal factors with $F(X_\alpha)$ and the mixed factors with $F(\varnothing)$. Projecting $C^n$ onto its diagonal factors therefore gives an equivalence $C^n\to P$: every omitted factor is terminal by step 1.1, and the product mapping-space property in [F2] makes insertion or deletion of terminal factors an equivalence. These projections form a coherent natural equivalence $C^\bullet\simeq\operatorname{const}_{\Delta}P$. Indeed every order-preserving map sends the diagonal tuple to the same diagonal tuple, and the corresponding scheme map between the canonical repeated intersections is the identity on $X_\alpha$; the canonical intersection identifications respect composition. Contravariant functoriality of $F$ preserves these coherences, and the discarded terminal factors have contractible spaces of choices. Equivalent diagrams have equivalent coherent cone categories, so their terminal cones correspond by [F2]. By [F4] and the terminal-object calculation in step 1.1 the limit of this constant diagram is $P$. Applying descent [F3] gives the displayed equivalence; its components are the restriction maps because the augmentation followed by a diagonal projection is restriction to $X_\alpha$. These projections commute with morphisms of sheaves and pullback of this partition whenever defined in $\mathcal C$, proving naturality. [A2, F1, F2, F3, F4, step 1.1, construct] ∎
