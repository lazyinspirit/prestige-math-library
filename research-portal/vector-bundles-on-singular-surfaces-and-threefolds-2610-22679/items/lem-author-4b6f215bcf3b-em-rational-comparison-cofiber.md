---
id: lem-author-4b6f215bcf3b-em-rational-comparison-cofiber
kind: lemma
title: Elmanto–Morrow rational comparison cofiber
status: published
domain: mathematics
external_input: true
deps:
  - def-motivic-cohomology
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-derived-category-of-an-abelian-category
  - math:thm-the-derived-category-inherits-a-triangulated-structure
  - math:cor-triangulated-five-lemma
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:thm-abelian-groups-form-an-abelian-category
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  math:thm-the-derived-category-inherits-a-triangulated-structure: mathematical-premise
  math:cor-triangulated-five-lemma: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:thm-abelian-groups-form-an-abelian-category: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: arXiv v1, Theorem 4.10(2)–(4) and its proof, PDF pages 21–22; Section
        3.3, equation (3.5), PDF page 14 (cdh-complex notation).
      statement: For every qcqs Q-scheme X and integer weight j, Theorem 4.10 supplies
        the canonical motivic-to-cdh comparison and a pullback square with
        rational complexes on the right; its comparison cofiber is rational.
        Part (4) gives the finite-coefficient equivalence. Section 3.3, equation
        (3.5), specifies the paper's cdh-local motivic complex.
      hypotheses: X is quasi-compact and quasi-separated over Q; j is an integer,
        restricted here to j >= 0. Finite coefficients in this application use a
        positive integer. Neither finite type, smoothness nor a dimension bound
        is imposed on X.
      reading_limits: Freshly checked the versioned PDF text extraction of Theorem
        4.10(2)–(4), its proof, and Section 3.3 around equation (3.5).
        Screenshot requests for the theorem and proof failed, so these checks
        used the extraction. The cdh-local construction, derived de Rham
        comparisons and their underlying proofs were not reconstructed or fully
        traced. The comparison and rational-cofiber assertion are imported; the
        cone conventions use the declared mathematical suppliers.
proof_strategy: direct
dependency_level: 9
formulation_deps:
  - def-motivic-cohomology
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-derived-category-of-an-abelian-category
  - math:thm-the-derived-category-inherits-a-triangulated-structure
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:thm-abelian-groups-form-an-abelian-category
argument_deps:
  - def-motivic-cohomology
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-derived-category-of-an-abelian-category
  - math:thm-the-derived-category-inherits-a-triangulated-structure
  - math:cor-triangulated-five-lemma
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:thm-abelian-groups-form-an-abelian-category
---

## Statement
Assume the Axiom of Choice and the compatible nested Grothendieck universe bounds of the specified motivic construction: fix $U\in V\in W$ with $\omega\in U$, containing the field and scheme data in $U$ and coefficient data in $V$, with categories formed in $W$. Existence of these universes is a separate size assumption.

For a quasi-compact quasi-separated $\mathbb Q$-scheme $X$ and integer $j\geq0$, Elmanto–Morrow supply a natural map in $D(\mathbb Z)$
$$f_X:\mathbb Z(j)_{\mathrm{mot}}(X)\longrightarrow\mathbb Z(j)_{\mathrm{cdh}}(X)$$
whose cofiber is isomorphic to the underlying complex of a complex of $\mathbb Q$-vector spaces. The first complex is the Elmanto–Morrow motivic complex, restricted along $\mathbb Q\to k$ when $X$ is a $k$-scheme with this specified field inclusion. The second is the cdh-local motivic complex of the cited paper on its category of qcqs $\mathbb Q$-schemes. The map is its canonical motivic-to-cdh map. No identification with evaluation on the separately chosen small cdh site is asserted.

A $\mathbb Q$-scheme means a scheme equipped with a structure morphism to $\operatorname{Spec}\mathbb Q$. Quasi-compact means that every open cover has a finite subcover; quasi-separated means that every intersection of two affine open subschemes is quasi-compact. Write qcqs for these two conditions. A $k$-scheme is regarded as a $\mathbb Q$-scheme by composing its structure morphism with $\operatorname{Spec}k\to\operatorname{Spec}\mathbb Q$.

Use the cochain, shift, localization and size conventions for $D(\mathbb Z)$, the derived category of complexes of abelian groups, of the declared derived-category supplier. A cofiber of $f:A\to B$ means the third object $C$ of a distinguished triangle $A\xrightarrow{f}B\to C\to A[1]$. For a cochain-map representative $g:A'\to B'$, its cone has terms $\operatorname{Cone}(g)^n=B'^n\oplus A'^{n+1}$ and differential $d(b,a)=(d_{B'}b+g(a),-d_{A'}a)$. A roof representing $f$ gives such a cone after replacing its source by the quasi-isomorphic source of the roof. This specifies the cofiber up to isomorphism, without choosing a functor of cones on the bare triangulated category. A rational complex here means a complex of $\mathbb Q$-vector spaces with $\mathbb Q$-linear differentials, viewed as a complex of abelian groups.

## Statement references
[[def-motivic-cohomology]]

[[math:def-scheme-over-base]]

[[math:def-quasi-compact-and-quasi-separated-scheme]]

[[math:def-derived-category-of-an-abelian-category]]

[[math:thm-the-derived-category-inherits-a-triangulated-structure]]

[[math:cor-triangulated-five-lemma]]

## External input
The comparison and rational-cofiber assertion are imported from Elmanto–Morrow Theorem 4.10(2)–(4) and its proof. Its fundamental fiber sequence in part (3), equivalently its pullback square in part (2), supplies the rational cofiber: the derived de Rham terms on the right are rational. The authors explicitly use that rationality to deduce part (4). The cdh-complex notation is that of Section 3.3, equation (3.5), on qcqs schemes over the prime field. The assertion is used with the hypotheses and reading limits in the reference; the underlying construction and proof are not reconstructed here.

## Facts & Assumptions
**Given:** A qcqs $\mathbb Q$-scheme $X$ and $j\geq0$.

**Goal:** Obtain the canonical comparison map with rational cofiber.

[F1] The cited external input supplies the natural comparison map and its rational cofiber under these hypotheses.

[F2] The first complex is the motivic complex of [[def-motivic-cohomology]]. The structure morphism and qcqs conditions have the meanings of [[math:def-scheme-over-base]] and [[math:def-quasi-compact-and-quasi-separated-scheme]].

[F3] [[math:def-derived-category-of-an-abelian-category]] supplies the cochain cone and roof conventions. [[math:thm-the-derived-category-inherits-a-triangulated-structure]] supplies the distinguished cone triangles in this localization. TR1 supplies a completion of each morphism; TR3 extends the identities on its first two objects to a morphism between any two completions. By [[math:cor-triangulated-five-lemma]], the third component is an isomorphism. Thus the cofiber convention is independent of the completion up to isomorphism, with no assertion of a canonical choice of such an isomorphism or a cone functor on the bare triangulated category.

[A1] The Axiom of Choice and fixed size bounds are inherited from the motivic construction of [[def-motivic-cohomology]]. Assume [[math:def-axiom-of-choice]] and compatible universes with the closure convention of [[math:def-grothendieck-universe-closure-convention]] as specified in the Statement. These premises discharge the selected complex construction when [F2] is used in step 1.1; the abstract cone-comparison argument in [F3] makes no further choice. They are not additional geometric hypotheses attributed to the cited source theorem.

[F4] The category $\mathbf{Ab}$ of abelian groups and homomorphisms is an abelian category by [[math:thm-abelian-groups-form-an-abelian-category]]. Thus [F3] applies with $\mathcal A=\mathbf{Ab}$ to the cochain and derived-category conventions for $D(\mathbb Z)$ used here.

## Proof
1.1 Under [A1], use the scheme and complex conventions of [F2] and apply [F1] to $X$ and $j$. [A1, F1, F2, given]

2.1 This yields precisely the stated canonical map and rational-cofiber property. By [F4], the abelian-category hypothesis of [F3] holds for these complexes of abelian groups. By [F3], every cofiber in the stated triangle convention is isomorphic to the imported cofiber, so the property does not depend on its representative. [F1, F3, F4, step 1.1] ∎
