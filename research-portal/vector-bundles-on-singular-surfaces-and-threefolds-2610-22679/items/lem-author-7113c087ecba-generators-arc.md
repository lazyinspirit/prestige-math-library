---
id: lem-author-7113c087ecba-generators-arc
kind: lemma
title: Every qcqs cdh generator is an arc covering family
status: published
domain: mathematics
deps:
  - lem-author-dcdf962edbda-qcqs-site
  - thm-author-7113c087ecba-valuative-input
  - def-nisnevich-covering-interface
  - def-scheme-sites-and-sheafification
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-locally-finite-presentation-morphism
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-proper-morphism
  - math:def-closed-immersion-schemes
  - math:lem-closed-immersion-affine-quotient-and-base-change
  - math:def-fibre-product-schemes-universal-property
  - math:thm-fibre-products-of-schemes-exist
  - math:ex-localization-etale-open-immersion
  - math:lem-etale-stable-base-change-composition
  - math:thm-etale-morphisms-open-and-quasi-finite
  - math:lem-base-change-surjective-morphisms
  - math:def-scheme
  - math:def-affine-open-subscheme
  - math:cor-affine-scheme-quasi-compact
  - math:def-compact-space
  - math:lem-distinguished-open-refinement-at-a-point
  - math:def-principal-distinguished-subset-of-spectrum
  - math:thm-local-ring-unit-characterisations
  - math:def-prime-spectrum-and-vanishing-sets
  - math:thm-affine-scheme-ring-anti-equivalence
  - math:thm-quotient-ring-universal-property
  - math:def-valuation-ring
  - math:lem-valuation-ring-is-local
  - math:def-field-of-fractions
  - math:thm-field-of-fractions-is-a-field-and-the-domain-embeds
  - math:def-localisation-at-a-prime-ideal
dependency_roles:
  lem-author-dcdf962edbda-qcqs-site: mathematical-premise
  thm-author-7113c087ecba-valuative-input: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-morphism: mathematical-premise
  math:def-locally-finite-presentation-morphism: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-proper-morphism: mathematical-premise
  math:def-closed-immersion-schemes: mathematical-premise
  math:lem-closed-immersion-affine-quotient-and-base-change: mathematical-premise
  math:def-fibre-product-schemes-universal-property: mathematical-premise
  math:thm-fibre-products-of-schemes-exist: mathematical-premise
  math:lem-etale-stable-base-change-composition: mathematical-premise
  math:thm-etale-morphisms-open-and-quasi-finite: mathematical-premise
  math:lem-base-change-surjective-morphisms: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:def-compact-space: mathematical-premise
  math:lem-distinguished-open-refinement-at-a-point: mathematical-premise
  math:def-principal-distinguished-subset-of-spectrum: mathematical-premise
  math:thm-local-ring-unit-characterisations: mathematical-premise
  math:def-prime-spectrum-and-vanishing-sets: mathematical-premise
  math:thm-affine-scheme-ring-anti-equivalence: mathematical-premise
  math:thm-quotient-ring-universal-property: mathematical-premise
  math:def-valuation-ring: mathematical-premise
  math:lem-valuation-ring-is-local: mathematical-premise
  math:def-field-of-fractions: mathematical-premise
  math:thm-field-of-fractions-is-a-field-and-the-domain-embeds: mathematical-premise
  math:def-localisation-at-a-prime-ideal: mathematical-premise
  math:ex-localization-etale-open-immersion: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 8
sources:
  references:
    - title: Bhargav Bhatt and Akhil Mathew, The arc-topology (arXiv:1807.04725v4)
      url: https://arxiv.org/pdf/1807.04725v4
      locator: Printed p. 2, Definition 1.1(3); p. 3, Definition 1.2(1)–(2), Remark 1.4
      statement: The affine-local finite-affine-refinement convention and
        rank-at-most-one lifting test specify the arc Grothendieck topology,
        also on qcqs schemes.
      hypotheses: Arbitrary schemes for families; qcqs schemes for the single-map
        test; both valuation rings have rank at most one. No noetherian
        hypothesis.
      reading_limits: "Current repair read the browser-extracted text of the versioned
        PDF at printed pp. 2–3: the rank convention, Definition 1.1(1),(3),
        Definition 1.2(1)–(2) and Remark 1.4. These supply the lift test,
        finite-family convention and arc-topology structure. No page images,
        later comparison theorems or deeper cited proofs were checked or
        reconstructed."
formulation_deps:
  - lem-author-dcdf962edbda-qcqs-site
  - thm-author-7113c087ecba-valuative-input
  - def-nisnevich-covering-interface
  - def-scheme-sites-and-sheafification
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-locally-finite-presentation-morphism
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-proper-morphism
  - math:def-closed-immersion-schemes
  - math:def-fibre-product-schemes-universal-property
  - math:thm-fibre-products-of-schemes-exist
  - math:def-scheme
  - math:def-affine-open-subscheme
  - math:def-valuation-ring
  - math:def-field-of-fractions
argument_deps:
  - lem-author-dcdf962edbda-qcqs-site
  - thm-author-7113c087ecba-valuative-input
  - def-nisnevich-covering-interface
  - def-scheme-sites-and-sheafification
  - math:def-axiom-of-choice
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-quasi-compact-and-quasi-separated-morphism
  - math:def-locally-finite-presentation-morphism
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-proper-morphism
  - math:def-closed-immersion-schemes
  - math:lem-closed-immersion-affine-quotient-and-base-change
  - math:def-fibre-product-schemes-universal-property
  - math:thm-fibre-products-of-schemes-exist
  - math:ex-localization-etale-open-immersion
  - math:lem-etale-stable-base-change-composition
  - math:thm-etale-morphisms-open-and-quasi-finite
  - math:lem-base-change-surjective-morphisms
  - math:def-scheme
  - math:def-affine-open-subscheme
  - math:cor-affine-scheme-quasi-compact
  - math:def-compact-space
  - math:lem-distinguished-open-refinement-at-a-point
  - math:def-principal-distinguished-subset-of-spectrum
  - math:thm-local-ring-unit-characterisations
  - math:def-prime-spectrum-and-vanishing-sets
  - math:thm-affine-scheme-ring-anti-equivalence
  - math:thm-quotient-ring-universal-property
  - math:def-valuation-ring
  - math:lem-valuation-ring-is-local
  - math:def-field-of-fractions
  - math:thm-field-of-fractions-is-a-field-and-the-domain-embeds
  - math:def-localisation-at-a-prime-ideal
---

## Statement
Assume the Axiom of Choice. On the completed qcqs prime-field category every Nisnevich covering family and every abstract blowup family $\{Z\to X,Y\to X\}$ is an arc cover. Here $Z\to X$ is a finitely presented closed immersion, $Y\to X$ is finitely presented proper and an isomorphism outside $Z$. Consequently the source cdh topology is coarser than the arc topology, including on arbitrary nonnoetherian objects. The category and its universe bounds are those of the source qcqs cdh site; arc covering families use the affine-local finite-family convention.

## Statement references
[[lem-author-dcdf962edbda-qcqs-site]]

[[def-nisnevich-covering-interface]]

[[thm-author-7113c087ecba-valuative-input]]

[[math:def-axiom-of-choice]]

## External input
Reference 0 imports the arc Grothendieck topology on qcqs schemes from [Bhatt–Mathew, Definitions 1.1(3), 1.2 and Remark 1.4](https://arxiv.org/pdf/1807.04725v4). The rank-bounded lift test and family convention themselves are also stated in the valuative supplier. The generator comparison below is proved locally.

## Facts & Assumptions
**Given:** Choice, the universe and small-skeleton bounds of the source qcqs prime-field site, and the families in the statement.

**Goal:** Prove that each family is arc covering in the affine-local finite-family sense, and hence compare the generated topologies.

[A1] Choice is assumed through the library inputs for étale openness and stability, surjectivity after base change, affine compactness, closed-immersion affine quotients and local-ring units. It is not an extra geometric finiteness hypothesis. [[math:def-axiom-of-choice]]

[F1] The site and its generating families are specified by [[lem-author-dcdf962edbda-qcqs-site]]. The terms sieve, covering sieve and Grothendieck topology, including maximality, pullback stability and transitivity, have the meanings in [[def-scheme-sites-and-sheafification]]. A generated topology is the least topology containing its generating sieves.

[F2] The injective local valuation extension $V\hookrightarrow B_{\mathfrak q}$ for an étale $V$-algebra at a prime over the closed point has the same rank as $V$, by the current statement of [[thm-author-7113c087ecba-valuative-input]]. That supplier also provides the proper valuative lift and the exact arc test: for $g:\operatorname{Spec}V\to X$ of rank at most one there must be an extension $V\hookrightarrow W$ of rank at most one and a lift $h$ with $fh=g\circ\operatorname{Spec}(V\to W)$. For families it requires finitely many affine source opens above each affine target open, whose finite disjoint union passes that test. Its conventions include valuation rank as Krull dimension and finite disjoint unions as schemes.

[F3] A Nisnevich family is a family of étale maps with a residue-field-preserving point over every target point, and in particular is jointly surjective, by [[def-nisnevich-covering-interface]]. Open immersions are étale, including the empty immersion, by [[math:ex-localization-etale-open-immersion]].

[F4] Scheme fibre products exist and are characterized by compatible pairs of maps; this is the meaning of every pullback used below. [[math:def-fibre-product-schemes-universal-property]] [[math:thm-fibre-products-of-schemes-exist]]

[F5] Étale morphisms are open and remain étale under base change and composition; restrictions to open subschemes use [F3]. Surjective scheme morphisms remain surjective under arbitrary base change. [[math:thm-etale-morphisms-open-and-quasi-finite]] [[math:lem-etale-stable-base-change-composition]] [[math:lem-base-change-surjective-morphisms]]

[F6] Every scheme has affine open neighbourhoods, with the restricted structure sheaf. Affine schemes are quasi-compact, meaning that every open cover has a finite subcover, with no Hausdorff requirement. For schemes, quasi-separated means that intersections of affine opens are quasi-compact. A quasi-compact morphism has quasi-compact inverse images of quasi-compact opens. [[math:def-scheme]] [[math:def-affine-open-subscheme]] [[math:cor-affine-scheme-quasi-compact]] [[math:def-compact-space]] [[math:def-quasi-compact-and-quasi-separated-scheme]] [[math:def-quasi-compact-and-quasi-separated-morphism]]

[F7] If $R$ is a local ring, every open neighbourhood of its closed point in $\operatorname{Spec}R$ is the whole spectrum: refine the neighbourhood to $D(a)$ containing the maximal ideal, so $a$ is outside that ideal and hence a unit; then $D(a)=\operatorname{Spec}R$. Thus a map from $\operatorname{Spec}R$ whose closed point lands in an open subscheme factors through that open subscheme by restriction. The refinement, the definition $D(a)=\{\mathfrak p:a\notin\mathfrak p\}$ and the local-unit assertion are supplied by [[math:lem-distinguished-open-refinement-at-a-point]], [[math:def-principal-distinguished-subset-of-spectrum]] and [[math:thm-local-ring-unit-characterisations]].

[F8] A closed immersion is a closed-subspace identification with surjective structure-sheaf map. Over $U=\operatorname{Spec}A$ its inverse image is $\operatorname{Spec}(A/I)$ for an ideal $I$. A point is in this closed subset exactly when its prime contains $I$. Affine maps are contravariantly ring maps, and a ring map killing $I$ factors uniquely through $A/I$. [[math:def-closed-immersion-schemes]] [[math:lem-closed-immersion-affine-quotient-and-base-change]] [[math:def-prime-spectrum-and-vanishing-sets]] [[math:thm-affine-scheme-ring-anti-equivalence]] [[math:thm-quotient-ring-universal-property]]

[F9] Proper means separated, finite type and universally closed; finite type includes quasi-compactness. Finite presentation means locally of finite presentation, quasi-compact and quasi-separated, with the local ring-chart meaning in the supplier. These conventions retain both finite-presentation hypotheses on the abstract blowup family. [[math:def-proper-morphism]] [[math:def-locally-finite-type-and-finite-type-morphism]] [[math:def-locally-finite-presentation-morphism]] [[math:def-quasi-compact-and-quasi-separated-morphism]]

[F10] Reference 0 provides the arc Grothendieck topology with the family convention in [F2], including on the qcqs category. It therefore contains the topology generated by any collection of its covering sieves, by the least-topology characterization in [F1].

[F11] A valuation ring is a subring of a field satisfying the valuation membership alternative, so it is a nonzero integral domain. It is local by the valuation-locality supplier. Its field of fractions $K=\operatorname{Frac}V$ has the injective canonical map $V\to K$. These supply the local closed point and domain injection used below. [[math:def-valuation-ring]] [[math:lem-valuation-ring-is-local]] [[math:def-field-of-fractions]] [[math:thm-field-of-fractions-is-a-field-and-the-domain-embeds]]

[F12] Prime localization means $B_{\mathfrak q}=(B\setminus\mathfrak q)^{-1}B$, with canonical ring map $b\mapsto b/1$. Its corresponding affine-scheme map, and the commutation of its composites with other affine ring maps, follow from the affine anti-equivalence in [F8]. [[math:def-localisation-at-a-prime-ideal]] [[math:thm-affine-scheme-ring-anti-equivalence]]

## Proof
1.1 Fix an affine open $U\subseteq X$. For a Nisnevich family, the images in $U$ of all affine opens in its members' inverse images of $U$ are open and cover $U$, by [F3], [F5] and [F6]. Compactness gives finitely many such affine opens $A_j$, and $T=\coprod_j A_j\to U$ is surjective. This finite refinement need only be étale and jointly surjective; no residue-field condition on the selected subfamily is asserted. For $g:\operatorname{Spec}V\to U$ with $V$ of rank at most one, base-change surjectivity gives a point over the closed point in $T\times_U\operatorname{Spec}V$. It lies in one component $A_j\times_U\operatorname{Spec}V$. Choose an affine neighbourhood $\operatorname{Spec}B$ of that point and let $\mathfrak q$ be its prime. Its map to $\operatorname{Spec}V$ is étale: the two source-open inclusions are étale by [F3] and [[math:ex-localization-etale-open-immersion]], and base change and composition preserve étaleness by [F5]. The prime $\mathfrak q$ lies over the maximal ideal of $V$. By [F2], $W=B_{\mathfrak q}$ is an injective local valuation extension of the same rank, and the localization map in [F12] gives $\operatorname{Spec}W\to\operatorname{Spec}B\to A_j$. The localization extends the same $V$-algebra structure, so this is the required commuting lift. Hence these finitely many affine opens satisfy the family test. If $U$ is empty, the empty refinement passes the test vacuously. [A1, F2, F3, F4, F5, F6, F11, F12]

2.1 For an abstract blowup family, write $U=\operatorname{Spec}A$ and $Z_U=\operatorname{Spec}(A/I)$ using [F8]. Given $g:\operatorname{Spec}V\to U$ with $\operatorname{rank}V\le1$, put $K=\operatorname{Frac}V$ as in [F11]. If its generic point maps into $Z_U$, the map $A\to K$ kills $I$; injectivity of $V\to K$ implies that $A\to V$ kills $I$, so [F8] factors the whole map through $Z_U$. Otherwise the generic map lifts to $Y$ through the isomorphism outside $Z$, and the proper valuative criterion [F2] extends it over $\operatorname{Spec}V$, with image in $Y_U$. Thus either member receives a lift with the identity extension $V\to V$. The scheme $Z_U$ is affine and $Y_U$ is quasi-compact by [F9] and [F6], so choose finite affine open covers of both. Each lift factors through an affine in these covers containing the image of its closed point, by [F7]. Their finite disjoint union therefore passes the arc test over $U$. This proves that both types of generating families are covering for the arc Grothendieck topology. By [F1] and [F10], the least topology containing those generating sieves, namely the source cdh topology, is coarser than the arc topology. No noetherian, finite-type-over-the-field or dimension bound on $X$ was used. [A1, F1, F2, F4, F6, F7, F8, F9, F10, F11, step 1.1] ∎
