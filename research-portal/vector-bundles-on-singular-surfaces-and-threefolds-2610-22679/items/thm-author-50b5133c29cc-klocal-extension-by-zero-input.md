---
id: thm-author-50b5133c29cc-klocal-extension-by-zero-input
kind: theorem
title: External exact extension by zero for module sheaves
status: published
domain: mathematics
deps:
  - thm-adjudicate-1ef158934564-ringed-derived-enhancement
  - math:def-axiom-of-choice
  - math:def-ringed-space
  - math:def-module-on-ringed-space
  - math:def-restriction-sheaf-open-subspace
  - math:def-stalk-of-presheaf
  - math:def-exact-functor-between-abelian-categories
  - math:def-adjunction-by-unit-counit-and-triangle-identities
  - math:def-natural-transformation
  - math:def-grothendieck-universe-closure-convention
  - math:def-category-of-chain-complexes
  - math:def-quasi-isomorphism
  - math:def-mapping-cone-of-a-chain-map
  - math:prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps
  - math:cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative
  - math:prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences
  - math:def-sheafification
  - math:def-presheaf-plus-construction
dependency_roles:
  thm-adjudicate-1ef158934564-ringed-derived-enhancement: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-ringed-space: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:def-restriction-sheaf-open-subspace: mathematical-premise
  math:def-stalk-of-presheaf: mathematical-premise
  math:def-exact-functor-between-abelian-categories: mathematical-premise
  math:def-adjunction-by-unit-counit-and-triangle-identities: mathematical-premise
  math:def-natural-transformation: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-category-of-chain-complexes: mathematical-premise
  math:def-quasi-isomorphism: mathematical-premise
  math:def-mapping-cone-of-a-chain-map: mathematical-premise
  math:prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps: mathematical-premise
  math:cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative: mathematical-premise
  math:prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences: mathematical-premise
  math:def-sheafification: mathematical-premise
  math:def-presheaf-plus-construction: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: The Stacks Project, Sheaves on Spaces
      url: https://stacks.math.columbia.edu/tag/009Z
      locator: Definition 6.31.5(1)–(2), (5)–(6); Lemma 6.31.8(2)–(4); Lemma 6.31.12
      statement: Module extension by zero sheafifies the presheaf equal to the given
        module on opens contained in the open subspace and zero otherwise, with
        its natural module structure. It is left adjoint to restriction, has the
        given stalks inside and zero stalks outside, and restricts back to the
        original sheaf.
      hypotheses: Any ringed space and open subspace with restricted structure sheaf.
        This concerns module sheaves, not extension by the empty set on sheaves
        of sets.
      reading_limits: Read Definition 6.31.5, Lemma 6.31.8 and Lemma 6.31.12 on
        2026-11-12. Their omitted proofs are imported, not reconstructed.
    - title: The Stacks Project, Cohomology of Sheaves
      url: https://stacks.math.columbia.edu/tag/0D5U
      locator: §20.32 opening paragraphs; Lemma 20.32.8
      statement: Restriction and module extension by zero are exact and induce derived
        functors by applying them degreewise to any complex; extension by zero
        is left adjoint to restriction on derived categories.
      hypotheses: Any ringed space and open subspace. No quasi-coherence,
        constructibility, or finiteness hypothesis is required for these sheaf
        functors.
      reading_limits: Read the opening paragraphs and Lemma 20.32.8 with its proof on
        2026-11-12. Modules Lemma 17.3.4 and Derived Categories Lemma 13.30.3
        are cited there; their proofs were not inspected. These are ordinary
        derived-category assertions, not the enhanced exactness theorem.
dependency_level: 1
---

## Statement
For an open subspace $v:V\hookrightarrow X$ of a ringed space, module extension by zero $v_!$ is an exact additive functor left adjoint to exact restriction $v^*$. Its stalk is the given module stalk at points of $V$ and zero outside $V$, and $v^*v_!=\mathrm{id}$. Assuming the Axiom of Choice and fixed suitable universes for the derived constructions, applying both functors degreewise to complexes preserves quasi-isomorphisms and mapping cones, so they induce actual exact functors on the sheaf-derived infinity-localizations for these arbitrary ringed spaces. Their ordinary natural unit/counit maps induce natural transformations there.

## Facts & Assumptions
**Given:** The ringed space and open subspace in the Statement. For the enhanced assertions, assume Choice and fix Grothendieck universes $\mathcal U\in\mathcal V$ with $\omega\in\mathcal U$, taking $X$ and its structure sheaf to be $\mathcal U$-small and all section sets in $\mathcal U$. The existence of these universes is an assumption, not a consequence of Choice. [[math:def-grothendieck-universe-closure-convention]]

[A1] Choice is used only through the supplied unbounded derived enhancement and its resolution/model constructions. [[math:def-axiom-of-choice]]

[F1] Ringed spaces, module sheaves, open restriction and stalks have their published meanings; $V$ carries $\mathcal O_X|_V$ and $v^*$ denotes restriction of module sheaves. [[math:def-ringed-space]] [[math:def-module-on-ringed-space]] [[math:def-restriction-sheaf-open-subspace]] [[math:def-stalk-of-presheaf]]

[F2] Import module extension by zero with its adjunction, stalk description and restriction identity from Stacks Definition 6.31.5(5)–(6) and Lemma 6.31.8(2)–(4). Import exactness of both functors and the ordinary degreewise derived construction from Stacks §20.32 opening; Lemma 20.32.8 states the ordinary derived adjunction. The adjunction includes its natural unit and counit. Exact additive functors, adjunctions and natural transformations use the published definitions. [[math:def-exact-functor-between-abelian-categories]] [[math:def-adjunction-by-unit-counit-and-triangle-identities]] [[math:def-natural-transformation]]

[F3] Complexes use the chain convention, quasi-isomorphisms induce isomorphisms on all homology objects, and mapping cones use the published direct-sum differential. Additive functors apply degreewise; exact functors preserve quasi-isomorphisms and carry cones to cones by natural chain isomorphisms. Only preservation, not reflection, of quasi-isomorphisms is used. [[math:def-category-of-chain-complexes]] [[math:def-quasi-isomorphism]] [[math:def-mapping-cone-of-a-chain-map]] [[math:prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps]] [[math:cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative]] [[math:prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences]]

[F4] The current ringed-derived enhancement supplies the module-sheaf abelian categories, their stable infinity-localizations, exact infinity-functors induced by exact additive functors, and descent of ordinary natural transformations between such functors. Its proof supplies the coherent cone/cofiber comparison needed for enhanced exactness; this is additional to the bare localization universal property. Its chain/cochain comparison is $C_n=C^{-n}$. [[thm-adjudicate-1ef158934564-ringed-derived-enhancement]]

[F5] In the Stacks construction of [F2], extension by zero sheafifies the module presheaf whose value on an open $W\subseteq X$ is $\mathcal F(W)$ if $W\subseteq V$ and zero otherwise. Sheafification uses the published twofold plus construction by germ-compatible local presentations. [[math:def-sheafification]] [[math:def-presheaf-plus-construction]]

## External input
The two Stacks source contracts supply the sheaf and ordinary derived facts in [F2] and the construction in [F5]. Their proofs are imported to the extent stated in the reading limits. The enhanced conclusion is the local application below of [F4], whose exact-functor interface includes the cone/cofiber comparison. It is not attributed to Stacks §20.32 or to the localization universal property alone.

## Proof

**Goal:** Establish the statement under its stated hypotheses.
**Given:** The data and size assumptions above, with $\mathcal A_X$ and $\mathcal A_V$ denoting the supplied categories of module sheaves.

**Proof technique:** direct application of the sheaf imports, published exact-functor results and the current enhancement interface.

1.1 By [F2], $v_!:\mathcal A_V\to\mathcal A_X$ and $v^*:\mathcal A_X\to\mathcal A_V$ are exact additive functors with the asserted sheaf adjunction, stalks and restriction identity. They preserve the chosen section-size bounds: restriction uses the original section sets, and the presheaf in [F5] has $\mathcal U$-small values. Each plus construction can represent a local presentation by a subset of the set of all pairs $(W,s)$ of an open and a section; deleting repeated identical pairs changes no germ condition or equivalence class. This set of pairs is $\mathcal U$-small by universe closure, so its collections of presentations and their quotients are also $\mathcal U$-small. Applying this twice proves the same bound for sheafification. The degreewise construction in [F3] therefore defines actual functors on complexes. The preservation assertion of [F3] shows that these invert the required quasi-isomorphisms after localization, and its natural chain isomorphisms identify the image of each mapping cone with the cone of the image map. Thus preservation of cones here means the canonical natural comparison, not literal equality of chosen direct sums. [F1, F2, F3, F4, F5, given]

2.1 The functors of step 1.1 meet the exact-additive hypotheses of [F4] in the fixed universes. Apply its exact-functor conclusion to each to obtain actual exact functors on $\mathcal D(V)$ and $\mathcal D(X)$; its cofiber comparison supplies the required enhanced exactness. Apply its natural-transformation conclusion to the sheaf unit $\mathrm{id}\Rightarrow v^*v_!$ and counit $v_!v^*\Rightarrow\mathrm{id}$, whose identity and composite functors are also exact. Their degreewise components commute with differentials and chain maps by ordinary naturality, so these are the descents of the actual chain-level maps. The restriction identity from [F2] likewise descends, up to the canonical equivalences of localization. All enhanced assertions retain [A1] and the stated universe bounds. [A1, F2, F3, F4, step 1.1] ∎

## Remarks
Extension by zero is asserted on all module sheaves, without a quasi-coherence or finiteness hypothesis. Preservation of arbitrary quasi-coherent or perfect complexes is not asserted; the supported-open equivalence consumer checks perfection on the particular support subcategories where it uses these functors.
