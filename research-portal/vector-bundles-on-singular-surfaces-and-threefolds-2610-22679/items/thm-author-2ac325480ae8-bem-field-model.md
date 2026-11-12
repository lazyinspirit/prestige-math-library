---
id: thm-author-2ac325480ae8-bem-field-model
kind: theorem
title: External canonical field restriction identifies the BEM and EM cdh models
status: published
domain: mathematics
deps:
  - thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:thm-prime-subfield-classification
  - math:thm-affine-scheme-ring-anti-equivalence
dependency_roles:
  thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:thm-prime-subfield-classification: mathematical-premise
  math:thm-affine-scheme-ring-anti-equivalence: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Tom Bachmann, Elden Elmanto and Matthew Morrow, A¹-invariant motivic
        cohomology of schemes
      url: https://arxiv.org/html/2508.09915v1
      locator: Section 1.6; Section 2.2 through Definition 2.5 and (2.6); Theorem 1.1
        opening and (8); Definition 7.1 (including B=Z); Proposition 7.4 and its
        proof; Theorem 7.5 and its proof; Definition 7.8; Remark 7.9.
      hypotheses: BEM uses qcqs schemes and the category of qcqs smooth B-schemes.
        Definitions 7.1 and 7.8 allow every integer j; Theorem 7.5 and Remark
        7.9 allow a field or mixed-characteristic Dedekind domain B. Here the
        field assertion is retained for every B in U; the EM identification uses
        B=Q and j>=0. All source constructions are interpreted with the
        explicitly assumed Choice and universes U in V in W and the stated
        U-bounded scheme categories and enhanced target. Universe existence is
        an additional local size assumption, not a theorem attributed to BEM.
      statement: Theorem 1.1 supplies the complex-valued A1-motivic functor and its
        classical smooth-field comparison. Definition 7.1 forms its smooth-Z
        left Kan extension; Definition 7.8 cdh sheafifies it. Theorem 7.5 gives
        canonical multiplicative base independence after Nisnevich
        sheafification. Cdh sheafification yields the field restriction in
        Remark 7.9, including its classical-input maps. Sections 1.6 and 2.2 fix
        the enhanced derived target and qcqs cdh topology. For B=Q the
        construction matches EM (3.5).
      reading_limits: "Historical reading record retained from the incoming generated
        item: This repair read the served HTML title page (dated August 24,
        2026), Section 1.6, Section 2.2 through the topology generators, Theorem
        1.1 opening and (8), Definition 7.1 with its B=Z convention, Proposition
        7.4 and its proof, Theorem 7.5 and its short proof, Definition 7.8 and
        Remark 7.9. The motivic functor, classical comparison, enhanced Kan
        extensions and sheafification are imported; their deep foundations and
        Lemma 2.26 were not reconstructed. No immutable August 2025 snapshot,
        entire-paper reading, local proof or independent acceptance is claimed.
        The size assumptions are inherited from the inspected local EM
        interface. Current consumer maintenance read the item and current
        supplier interfaces; no fresh primary-source or page-image reading or
        independent acceptance is claimed."
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Section 2.1, printed p. 11; Section 2.3 and Section 3.1 opening through
        the functoriality paragraph, printed p. 12; Section 3.3, (3.4), topology
        paragraph, (3.5) and its universal-property paragraph, printed p. 14;
        Theorem 3.5 opening, pp. 14–15.
      hypotheses: Prime field F; weight j>=0; qcqs F-schemes with all F-morphisms;
        classical input on smooth F-schemes. The topology uses Nisnevich covers
        and finitely presented abstract blowup families. The local comparison
        here takes F=Q on exactly the U-bounded site and V-small-complex
        enhancement fixed by the declared EM supplier, under Choice and U in V
        in W. These last assumptions are the local supplier contract, not an
        existence theorem ascribed to EM.
      statement: EM uses stable presentable enhanced targets, reflective
        sheafification and left Kan extension adjoint to restriction. Its
        classical smooth-prime-field motivic functor includes coherent
        pullbacks, beyond naive flat cycle pullbacks. Definition (3.5) is its
        cdh-sheafified left Kan extension on qcqs prime-field schemes.
      reading_limits: "Historical reading record retained from the incoming generated
        item: This repair read Section 2.1 sheafification conventions, Section
        2.3 Kan-extension convention and adjunction, Section 3.1 opening cycle
        model and subsequent all-morphism functoriality discussion, and Section
        3.3 through (3.5), its universal-property paragraph and Theorem 3.5
        opening. The classical motivic and enhanced categorical constructions
        remain imported. No foundational proof reconstruction or independent
        acceptance is claimed. Current consumer maintenance read the item and
        current supplier interfaces; no fresh primary-source or page-image
        reading or independent acceptance is claimed."
dependency_level: 9
formulation_deps:
  - thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:thm-prime-subfield-classification
  - math:thm-affine-scheme-ring-anti-equivalence
argument_deps:
  - thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:thm-prime-subfield-classification
  - math:thm-affine-scheme-ring-anti-equivalence
---

## Statement
Assume the Axiom of Choice. Fix Grothendieck universes $U\in V\in W$ with $\omega,\mathbb Q\in U$; their existence is a separate size assumption. All fields and scheme data under consideration lie in $U$. Write $\mathcal S_{\mathbb Z}$ for the $V$-small category of qcqs schemes with data in $U$ and all scheme morphisms, and $\mathcal S_B$ for the category of such schemes with a structure morphism to $\operatorname{Spec}B$ and all morphisms over $B$; qcqs means quasi-compact and quasi-separated. For a base $R$, $\mathrm{Sm}_R$ is the full subcategory of qcqs smooth $R$-schemes, as in BEM Section 2.2. For $B=\mathbb Q$, use exactly the category and representative-based evaluation convention of the supplied EM target.

Use the stable presentable derived $\infty$-category $\mathcal D_\infty(\mathbb Z)$ of unbounded cochain complexes of $V$-small abelian groups, considered in $W$, whose homotopy category is $D(\mathbb Z)$. Presheaves, natural transformations, Kan extensions and sheafification are coherent in this common target. Left Kan extension means the left adjoint to restriction along the indicated opposite-category inclusion. Use BEM's qcqs cdh topology and ordinary reflective sheafification; on $\mathcal S_{\mathbb Q}$ these are precisely the topology and sheaf-reflector convention of the supplied EM target.

For every integer $j$, let $\mathbb Z(j)^{\mathrm{lse}}$ be the left Kan extension of BEM's $\mathbb A^1$-motivic cohomology restricted to smooth $\mathbb Z$-schemes, along $\mathrm{Sm}_{\mathbb Z}^{\mathrm{op}}\hookrightarrow\mathcal S_{\mathbb Z}^{\mathrm{op}}$, as in BEM Definition 7.1 with $B=\mathbb Z$. Define $D_j=\mathbb Z(j)^{\mathrm{cdh}}=L_{\mathrm{cdh}}\mathbb Z(j)^{\mathrm{lse}}$ by BEM Definition 7.8 on this qcqs site. For any field $B\in U$, $D_j$ restricts canonically to the cdh-local left Kan extension of classical motivic cohomology from $\mathrm{Sm}_B$ to $\mathcal S_B$. In particular, for $B=\mathbb Q$ and $j\geq0$ this is the very complex $C_{j,\mathbb Q}=\mathbb Z(j)_{\rm cdh}$ in EM v1 Section 3.3, definition (3.5), on exactly the site of the supplied EM comparison. This is a natural equivalence with the specified classical-input maps and their sheafification units, not just agreement of groups. Restriction by precomposition further to $\mathcal S_k$, for a characteristic-zero field $k\in U$ with its canonical $\mathbb Q$-structure, preserves it. No finite-type or separatedness restriction is imposed on the qcqs comparison domain.

## Statement references
[[math:def-axiom-of-choice]]

[[math:def-grothendieck-universe-closure-convention]]

[[thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input]]

[[math:def-quasi-compact-and-quasi-separated-scheme]]

[[math:def-scheme-over-base]]

[[math:def-smooth-morphism-schemes]]

[[math:thm-prime-subfield-classification]]

[[math:thm-affine-scheme-ring-anti-equivalence]]

## External input
Import BEM's complex-valued $\mathbb A^1$-motivic functor and its classical smooth-field identification from Theorem 1.1, including (8), and the constructions of Definitions 7.1 and 7.8. Theorem 7.5 is a canonical multiplicative Nisnevich-local base-independence result; applying cdh localization gives exactly the field restriction of Remark 7.9. Theorem 7.5 and Remark 7.9 supply this comparison as a map of functors with their input maps, rather than an inference from objectwise group isomorphisms. EM definition (3.5) uses the same classical smooth-prime-field functor, left Kan extension and cdh sheafification.

The declared supplier [[thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input]] fixes this actual EM target, its enhanced Kan-extension and sheaf-reflector meanings, and its qcqs site. Its hypotheses are used here with $F=\mathbb Q$, $j\geq0$ and exactly the common $U\in V\in W$ bounds of the Statement. The BEM ambient and base-restricted constructions use these same bounds and target, with their qcqs and smooth categories as in BEM Section 2.2 and their cdh topology as in Definition 2.5. Choice is inherited through the supplier's derived enhancement and skeleton/representative selections; [[math:def-axiom-of-choice]] declares this assumption, and [[math:def-grothendieck-universe-closure-convention]] supplies the closure convention. No universe existence is deduced from Choice. Only the supplied EM model specification is used, not its dimension bound. The source constructions and comparisons remain external inputs; no local reconstruction of their foundations is claimed.

The scheme and smoothness conditions use [[math:def-quasi-compact-and-quasi-separated-scheme]], [[math:def-scheme-over-base]] and [[math:def-smooth-morphism-schemes]]: smoothness is a condition on the structure morphism, and morphisms over a base commute with that structure. For the final restriction, [[math:thm-prime-subfield-classification]] supplies the canonical embedding $\mathbb Q\to k$; [[math:thm-affine-scheme-ring-anti-equivalence]] supplies its induced map $\operatorname{Spec}k\to\operatorname{Spec}\mathbb Q$. Composing a structure morphism with this map defines the forgetful functor $\mathcal S_k\to\mathcal S_{\mathbb Q}$, leaving the underlying qcqs scheme and morphisms unchanged. Restriction of a presheaf is precomposition with the opposite of this functor.
