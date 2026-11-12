---
id: lem-adjudicate-a3b6736b67cc-slice-hyperdescent
kind: lemma
title: Hypercovers and derived hyperdescent on the big cdh slice
status: draft
domain: mathematics
deps:
  - lem-author-2ac325480ae8-slice-site
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-2ac325480ae8-slice-site: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 13
sources:
  references:
    - title: Dugger, Hollander and Isaksen, Hypercovers and simplicial presheaves
      url: https://arxiv.org/pdf/math/0205027
      locator: Section 3, generalized-cover paragraph (p. 7); Definitions 4.2 and 4.3
        (p. 8), Definition 4.8 and Lemma 4.9 (p. 10); Definition 6.1 and Theorem
        6.2 (p. 16); Proposition 6.6 and Corollary 7.1 with its following
        observation (pp. 18–19).
      statement: Hypercovers have coproducts of representables in each degree and
        locally surjective augmented matching maps. On a small Grothendieck site
        a small dense family exists, and a space-valued presheaf has descent for
        all hypercovers exactly when it has descent for that family.
      hypotheses: A small Grothendieck site. Descent for simplicial presheaves is
        evaluated after objectwise fibrant replacement, by the homotopy limit of
        the products over representable summands. No subcanonical, Verdier,
        finite-type or bounded-cohomology assumption is imposed.
      reading_limits: Read the generalized-cover paragraph, the listed definitions and
        lemma, the statements of Theorem 6.2 and Proposition 6.6, the proof of
        Proposition 6.6, and Corollary 7.1 with its proof and following
        observation. Import the space-valued dense-family theorem; the proof of
        Theorem 6.2 and its earlier model-category inputs were not
        reconstructed. The served PDF identifies itself as arXiv v2, 20 June
        2003. The derived-valued application below is proved locally.
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Proposition 5.1.1.1 and Section 5.1.2, opening paragraph (1) (pp.
        316–317); Proposition 5.2.6.2 (p. 360); Corollary 5.1.2.3 (p. 319), also
        applied to opposite categories; Definition 5.5.0.1 (p. 456); Theorem
        5.5.1.1(6) (p. 458); Corollaries 5.5.2.4 and 5.5.2.9 (pp. 464–466);
        Proposition 5.5.3.6 (p. 467); Proposition 5.5.4.15 (p. 482).
      statement: Presentable infinity-categories have small colimit generators and
        small limits; their small functor categories are presentable with
        pointwise limits and colimits. An accessible limit-preserving functor
        between presentable categories has a left adjoint. Localization at a
        small set of maps is reflective. Passage between left and right adjoints
        is coherently functorial. Space-valued presheaves admit the
        simplicial-presheaf model.
      hypotheses: Small indexing categories and sets in the fixed universes;
        presentability of the coefficient infinity-category; accessibility and
        limit preservation for the asserted left adjoint. Local objects are
        tested by mapping spaces. The simplicial-presheaf model uses objectwise
        weak equivalences.
      reading_limits: Read the model-comparison proposition and Section 5.1.2 opening
        paragraph (1), the pointwise-colimit corollary, the adjoint-equivalence
        proposition and its proof, the presentability definition and generator
        characterization, the completeness and adjoint-functor corollary
        statements, and the functor-category and localization propositions with
        their displayed proofs. Import these categorical foundations and the
        model comparison; their cited foundational results, the proof of the
        generator characterization and the deferred construction in Proposition
        5.5.4.15 were not reconstructed. The online PDF is not revision-pinned.
---

## Statement
Assume the Axiom of Choice and the compatible universe bounds, sites $\mathcal C$ and $\mathcal C/U$, schemes $S,U$, functors $j,b$ and stable presentable coefficient infinity-category $E=D(\mathbb Z)$ of the slice-site construction. For either site $\mathcal A$, write $h_X(V)=\operatorname{Hom}_{\mathcal A}(V,X)$ for the representable set-valued presheaf. An augmented simplicial presheaf $H_\bullet\to h_X$ is a functor from $\Delta_+^{\rm op}$ to set-valued presheaves, where $\Delta_+$ adds the empty ordered set $[-1]$ to $\Delta$ and $H_{-1}=h_X$. Its augmented matching presheaf $M_nH$ is the limit of its proper-face diagram: include a copy of $H_{|I|-1}$ for each proper subset $I\subsetneq\{0,\ldots,n\}$, with the face restriction maps for inclusions of subsets. In particular $M_0H=h_X$ and $M_1H=H_0\times_{h_X}H_0$. All these matching limits are finite limits of presheaves of sets, computed objectwise.

Call $H_\bullet\to h_X$ a hypercover if each $H_n=\coprod_{a\in A_n}h_{W_{n,a}}$ is a small coproduct of representables and every $H_n\to M_nH$ is locally surjective. Here locally surjective means that each section over a test object lifts after restriction to a covering sieve of that object; the lifts need not agree with one another. An $E$-valued presheaf $P$ satisfies hyperdescent when every such augmentation induces an equivalence $P(X)\to\lim_{[n]\in\Delta}\prod_{a\in A_n}P(W_{n,a})$. The diagram includes all faces, degeneracies and their coherent relations; a map between coproducts of representables induces the contravariant product map by its component scheme maps. The empty cover requires $P(\emptyset)$ to be terminal.

On each of these two sites hyperdescent presheaves form a reflective full subcategory of $\operatorname{Fun}(N(\mathcal A)^{\rm op},E)$. Denote its reflector by $L^{\rm hyp}_{\mathcal A}$, with unit $\eta^{\rm hyp}_P:P\to L^{\rm hyp}_{\mathcal A}P$; its defining property is the natural equivalence $\operatorname{Map}(L^{\rm hyp}_{\mathcal A}P,Q)\simeq\operatorname{Map}(P,Q)$ for each hyperdescent presheaf $Q$. Both $j^*P(V,f)=P(V)$ and $j_*Q(V)=Q(b(V))$, where $b(V)=(V\times_SU\to U)$, preserve hyperdescent. This assertion supplies hyperdescent on the actual two big sites; it does not identify it with ordinary Čech descent.

## Statement references
[[lem-author-2ac325480ae8-slice-site]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions
[F1] [[lem-author-2ac325480ae8-slice-site]] supplies the size-bounded sites, their equal covering sieves over $(X,f)$ and $X$, the qcqs fibre products, the functor $b$, and the enhanced coefficient category $E$. A site is small in the category universe used here; all presheaf, hypercover and coefficient constructions are in the compatible larger universes supplied there.

[A1] [[math:def-axiom-of-choice]] is assumed, both as inherited in [F1] and for selecting the dense hypercover families, a small family of colimit generators and the adjoints used below. No additional geometric assumption on $k$ is made.

[F2] Reference 0 supplies the hypercover conventions and the small dense-family theorem for space-valued presheaves. Dense means every hypercover has a refinement belonging to the family, with the same augmentation object.

[F3] Reference 1 supplies presentable functor categories, small colimit generators, pointwise limits and colimits, evaluation adjoints, coherent passage to adjoints and localization at a small set of maps. It also supplies the simplicial-presheaf model needed to apply [F2] to coherent space-valued presheaves. Mapping out of a colimit gives the limit of mapping spaces, and mapping into a limit gives the limit of mapping spaces; these are the universal properties of those constructions.

## External input
The imported inputs are the dense-family and hypercover facts of [F2] from [Dugger–Hollander–Isaksen](https://arxiv.org/pdf/math/0205027) and the categorical facts of [F3] from [Higher Topos Theory](https://www.math.ias.edu/~lurie/papers/HTT.pdf), with exact locators, hypotheses and reading limits in sources.references. The construction of the derived-valued reflection and the two preservation assertions below are local arguments using those inputs.

## Proof
**Given:** The two sites, compatible universes, Choice, the enhanced $E$ and the hypercover conventions in the statement.

**Goal:** Construct the two reflective hyperdescent localizations and prove preservation by $j^*,j_*$.

1.1 First check the hypercover geometry. A slice hypercover over $(X,f)$ becomes an ambient augmented simplicial coproduct of representables by forgetting the component maps to $U$. For any test map $g:V\to X$, its matching sections are exactly the slice matching sections at $(V,f\circ g)$ over $g$, since every component map to $U$ is forced by the augmentation. Every covering sieve over $V$ lifts over $U$ by [F1]. Thus local lifts for slice matching maps give local lifts for the ambient matching maps, and the forgotten object is a hypercover. Conversely restriction of set-valued presheaves along $j$ preserves finite limits and coproducts objectwise and sends $h_W$ to $h_{b(W)}$: a map $V\to W$ over $S$ together with the specified $V\to U$ is exactly a map $V\to W\times_SU$ over $U$. Local surjectivity is preserved because an ambient covering sieve over a test $V$ lifts to the slice with its given map $V\to U$. Restricting an ambient hypercover over $X$ therefore gives the hypercover with components $b(W_{n,a})$ over $b(X)$, including all simplicial maps. Consequently the descent diagram for $j^*P$ at a slice hypercover is the diagram for $P$ at its forgotten hypercover, and the descent diagram for $j_*Q$ at an ambient hypercover is the diagram for $Q$ at this restricted hypercover. This proves both preservation assertions, including augmentation maps and the empty-cover condition. [F1, F2, construct]

2.1 Fix either site $\mathcal A$. By [A1], [F2] and [F3], select a small dense hypercover family $\mathscr H$ and a small colimit-generating family $\mathscr G$ in $E$. The functors $\operatorname{Map}_E(G,-)$ for $G\in\mathscr G$ jointly detect equivalences: for a map $v$ on which they are equivalences, mapping out of colimits extends this property to every object of $E$, and testing identities in its source and target produces a two-sided inverse to $v$. The presentable presheaf category has evaluation functors $\operatorname{ev}_W$, which are accessible and preserve limits because limits and colimits are pointwise. By [F3], let $F_W$ be the left adjoint of $\operatorname{ev}_W$; its adjunction is $\operatorname{Map}(F_WG,P)\simeq\operatorname{Map}_E(G,P(W))$. For each $H\to h_X$ in $\mathscr H$ and $G\in\mathscr G$, form the map $\operatorname*{colim}_{[n]\in\Delta^{\rm op}}\coprod_{a\in A_n}F_{W_{n,a}}G\to F_XG$ induced by the augmentation. The $F_W$ vary covariantly in $W$: they are the adjoints of the natural restriction transformations between the evaluation functors, so all simplicial coherences are retained. These maps form a small set. By the localization theorem in [F3] they have a reflector. Mapping them into $P$ and using the displayed adjunction identifies locality with descent for $\mathscr H$, tested by every $G\in\mathscr G$. For each such $G$, the coherent space-valued presheaf $V\mapsto\operatorname{Map}_E(G,P(V))$ then has descent for every hypercover by [F2] and the model comparison in [F3]. Mapping into limits and the detection property therefore give $E$-valued descent for every hypercover. Conversely hyperdescent implies locality for the chosen set. Its reflector is exactly $L^{\rm hyp}_{\mathcal A}$ with the asserted mapping-space universal property. Čech nerves of covering families are hypercovers, so this also enforces the stated empty-cover condition. Applying this construction to each site completes the claim, independently of ordinary sheafification. [A1, F1, F2, F3, construct] ∎
