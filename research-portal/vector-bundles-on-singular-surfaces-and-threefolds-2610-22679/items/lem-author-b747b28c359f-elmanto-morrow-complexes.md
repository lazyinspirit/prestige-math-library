---
id: lem-author-b747b28c359f-elmanto-morrow-complexes
kind: lemma
title: Elmanto–Morrow motivic complex input
status: published
domain: mathematics
deps:
  - def-article-conventions
  - def-nisnevich-covering-interface
  - def-scheme-sites-and-sheafification
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-filtered-category-and-filtered-colimit
  - math:def-affine-morphism-schemes
  - math:thm-prime-subfield-classification
dependency_roles:
  def-article-conventions: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-filtered-category-and-filtered-colimit: mathematical-premise
  math:def-affine-morphism-schemes: mathematical-premise
  math:thm-prime-subfield-classification: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 1.1, opening assertion, printed p. 3 (PDF page index 2);
        Section 2.1, printed p. 11 (PDF page index 10)
      statement: For each prime field F and integer j >= 0 there is a finitary
        Nisnevich sheaf Z(j)_mot on qcqs F-schemes, valued in D(Z). Section 2.1
        uses the stable presentable derived infinity-category as target.
      hypotheses: F = Q or F_p for a prime p; j >= 0; arbitrary quasi-compact
        quasi-separated F-schemes. No algebraic closure, finite-type, smoothness
        or Noetherian hypothesis is part of this existence assertion.
      reading_limits: Read the PDF extraction of the opening of Theorem 1.1 and
        Section 2.1 during this repair; also read the surrounding prime-field
        convention. Import only existence, functoriality, Nisnevich sheafhood
        and finitariness. Section 4 construction and proofs were not
        reconstructed or independently verified. The field-restriction and
        continuity application below is locally authored.
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Section 1.2.13, Remark 1.2.13.3 and Definition 1.2.13.4, printed p. 47;
        Corollary 5.5.2.4, printed p. 464; Definition 6.2.2.6, printed p. 579
      statement: Coherent limits and colimits are universal cones and cocones; a
        presentable infinity-category admits all small limits. Space-valued
        sheaves are local for covering-sieve inclusions. The displayed derived
        sheaf condition in this item specifies the corresponding limit condition
        for the supplied derived target.
      hypotheses: An infinity-category and a small indexing diagram for the limit
        convention; a presentable infinity-category for existence of small
        limits; a small site for the covering-sieve definition. The supplied
        derived enhancement is presentable, and the chosen larger coefficient
        universe accommodates the sieve categories.
      reading_limits: Read the listed statements and the mapping-space discussion of
        limits in Section 1.2.13. Read the proof of Corollary 5.5.2.4 only as a
        source argument; its cited representability inputs were not
        reconstructed. Definition 6.2.2.6 is space-valued; the derived limit
        formulation is explicitly specified here, not misquoted as the literal
        statement of that definition. No hypercompletion or hyperdescent theorem
        is imported.
    - title: Peter J. Haine, Tim Holzschuh and Sebastian Wolf, Nonabelian basechange
        theorems & etale homotopy theory, June 6, 2024
      url: https://math.berkeley.edu/~phaine/files/nonabelian_basechange_etale_homotopy.pdf
      locator: Section 3.1, Recollection 3.6, printed p. 28 (PDF page index 27)
      statement: For a scheme S and a target infinity-category with filtered colimits,
        a contravariant functor on qcqs S-schemes is finitary if it takes
        cofiltered limits with affine transition maps to filtered colimits.
      hypotheses: The domain is all qcqs schemes over S; the inverse diagram is small
        and cofiltered and its transition morphisms are affine; the target
        admits filtered colimits.
      reading_limits: Read Recollection 3.6 in the PDF extraction. Use only its
        definition, instantiated at Spec F or Spec k and the derived target. The
        projection-induced comparison is written explicitly locally. No
        assertion about etale homotopy types or arc-descent is imported.
    - title: The Stacks Project, Lemma 4.21.5 (0032)
      url: https://stacks.math.columbia.edu/tag/0032
      locator: Lemma 4.21.5, especially part (2) and the construction of the directed
        replacement in its proof
      statement: A small filtered category has a directed-set replacement that
        computes limits of diagrams on its opposite in every ordinary category,
        whenever the directed replacement limit exists.
      hypotheses: The indexing category is small and filtered; for the limit assertion
        the diagram is on its opposite. Ordinary categorical limits are meant.
        Apply in the category of schemes, not to assert a coherent-colimit
        reindexing theorem.
      reading_limits: Read the complete lemma and its directed-replacement proof. Use
        the limit assertion only, including existence transfer; do not infer an
        infinity-categorical cofinality theorem from this ordinary categorical
        statement.
    - title: The Stacks Project, Lemma 32.2.2 (01YX)
      url: https://stacks.math.columbia.edu/tag/01YX
      locator: Lemma 32.2.2, complete statement including part (1)
      statement: An inverse system of schemes indexed by a directed set with affine
        transition maps has a scheme limit, and every limit projection is
        affine.
      hypotheses: The directed index set is nonempty and small; every transition
        morphism is affine. No Noetherian or finite-type assumption is required.
      reading_limits: Read the complete statement and proof. Import the existence and
        affineness conclusions without reconstructing its relative-Spec
        construction or upstream quasi-coherent-algebra results. The extension
        to a small cofiltered category is the local application of reference 3.
    - title: The Stacks Project, Limits of Schemes, Section 32.4 (081A)
      url: https://stacks.math.columbia.edu/tag/081A
      locator: Situation 32.4.5 and the paragraph immediately following it
      statement: For a directed inverse system of qcqs schemes with affine transition
        morphisms, the scheme limit is qcqs, because it is affine over any
        stage.
      hypotheses: All stages are quasi-compact and quasi-separated; the index set is
        directed; transitions are affine; use the limit of Lemma 32.2.2.
      reading_limits: Read Situation 32.4.5 and the following paragraph asserting the
        qcqs conclusion. Import that conclusion, not the later descent or
        approximation results of Section 32.4. Its upstream facts about affine
        morphisms are not independently reconstructed here.
proof_strategy: direct
dependency_level: 7
formulation_deps:
  - def-article-conventions
  - def-nisnevich-covering-interface
  - def-scheme-sites-and-sheafification
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-filtered-category-and-filtered-colimit
  - math:def-affine-morphism-schemes
  - math:thm-prime-subfield-classification
argument_deps:
  - def-article-conventions
  - def-nisnevich-covering-interface
  - def-scheme-sites-and-sheafification
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-filtered-category-and-filtered-colimit
  - math:def-affine-morphism-schemes
  - math:thm-prime-subfield-classification
---

## Statement
Assume the Axiom of Choice. Fix Grothendieck universes $U\in V\in W$ with $\omega\in U$, containing the fields and scheme data under consideration. Existence of these universes is a size assumption. For a field $B\in U$, let $\mathcal C_B$ be the category of all qcqs $B$-schemes with data in $U$, and all $B$-morphisms; it is regarded as $V$-small. Here qcqs means quasi-compact and quasi-separated. For $B=k$ this is the size-bounded ambient category $\mathrm{Sch}_k$ of the article conventions; no finite-type restriction is imposed on this input.

Write $\mathcal D_\infty(\mathbb Z)$ for the infinity-localization of unbounded cochain complexes of $V$-small abelian groups at quasi-isomorphisms, considered in $W$. A quasi-isomorphism induces an isomorphism on every cohomology group. The supplied stable presentable enhancement retains mapping spaces and coherent higher compositions; its homotopy category, obtained by taking components of mapping spaces, is the ordinary derived category $D(\mathbb Z)$. A coherent complex-valued presheaf $P$ is an infinity-functor $N(\mathcal C_B)^{\mathrm{op}}\to\mathcal D_\infty(\mathbb Z)$, where the nerve $N(\mathcal C_B)$ has as its $n$-simplices strings of $n$ composable arrows, with faces composing or deleting arrows and degeneracies inserting identities. All limits and colimits of values below are in this enhancement: limits are terminal coherent cones, and colimits are initial coherent cocones. For example, a cone with vertex $L$ is limiting exactly when $\operatorname{Map}(A,L)\simeq\lim_i\operatorname{Map}(A,E_i)$ naturally for every test object $A$.

For a covering sieve $R$ on $X$ in the Nisnevich topology of $\mathcal C_B$, regard $R$ as the category of arrows $T\to X$ in that sieve, with commuting triangles as morphisms. Nisnevich families are etale families with a residue-field-preserving lift of every point; their sieves generate this topology. The **derived Nisnevich sheaf condition** is that restriction induces an equivalence
$$P(X)\longrightarrow\lim_{(T\to X)\in R^{\mathrm{op}}}P(T)$$
for every such $R$. The empty sieve on the empty scheme is included, giving $P(\varnothing)\simeq0$. This is sheaf descent; no additional hyperdescent assertion is made.

The presheaf $P$ is **finitary** if, for every $U$-small cofiltered category $J$ and inverse diagram $X_\bullet:J\to\mathcal C_B$ with affine transition morphisms, the canonical map
$$\operatorname*{colim}_{j\in J^{\mathrm{op}}}P(X_j)\longrightarrow P\!\left(\lim_{j\in J}X_j\right)$$
is an equivalence. Cofiltered means that $J^{\mathrm{op}}$ is filtered. Affine means that the inverse image of each affine open of the target is affine. The scheme limit is characterized by its compatible projection maps; it exists and is qcqs for these diagrams. Those projections induce the displayed map. These conditions specify both the diagrams and the comparison, rather than ordinary limits in the homotopy category.

Let $F$ be a prime field, $\mathbb Q$ or $\mathbb F_p$ for a prime $p$. For every integer $j\geq0$, Elmanto and Morrow supply a finitary derived Nisnevich sheaf $M_{j,F}=\mathbb Z(j)_{\mathrm{mot}}$ on $\mathcal C_F$. For any field $k$ with prime subfield identified with $F$, let $u:\mathcal C_k\to\mathcal C_F$ forget the $k$-structure. Then $M_{j,F}\circ u^{\mathrm{op}}$ is the corresponding coherent complex-valued functor on $\mathrm{Sch}_k$, and is again a finitary derived Nisnevich sheaf. Its values in the homotopy category are the same complexes in $D(\mathbb Z)$ as before restriction.

## Statement references
[[def-article-conventions]]

[[def-scheme-sites-and-sheafification]]

[[def-nisnevich-covering-interface]]

[[thm-author-4f716d60801a-derived-enhancement-input]]

[[math:def-axiom-of-choice]]

[[math:def-grothendieck-universe-closure-convention]]

[[math:def-filtered-category-and-filtered-colimit]]

[[math:def-affine-morphism-schemes]]

[[math:thm-prime-subfield-classification]]

## External input
Reference 0 imports the existence, functoriality, finitariness and Nisnevich sheafhood of the prime-field motivic complexes from Elmanto–Morrow, Theorem 1.1, with the enhanced target convention of Section 2.1. Their construction and proof are not reconstructed. Reference 1 supplies coherent limit conventions, existence of small limits in a presentable infinity-category, and the space-valued covering-sieve sheaf convention; the displayed enhanced sheaf condition fixes its meaning here. Reference 2 supplies the definition of finitary. References 3, 4 and 5 supply, respectively, ordinary directed replacement for cofiltered limits, affine-transition scheme-limit existence, and the qcqs limit conclusion. Only these premises, with their recorded hypotheses and reading limits, are imported. The restriction argument below is locally authored; the existence theorem remains an imported premise.

## Facts & Assumptions
[A1] Choice is inherited from the supplied unbounded derived enhancement, including its resolution and model constructions; the elementary identification of slice categories is choice-free. Universe closure and the separate existence assumption give the stated size bounds. [[math:def-axiom-of-choice]] [[math:def-grothendieck-universe-closure-convention]]

[F1] Reference 0 supplies $M_{j,F}$ for every prime field $F$ and $j\geq0$, with precisely the sheafhood and finitariness asserted above. No filtration, comparison or spectral-sequence property is used.

[F2] Taking the ring to be $\mathbb Z$ in [[thm-author-4f716d60801a-derived-enhancement-input]] gives the locally small stable presentable infinity-localization and its ordinary derived homotopy category, under [A1]. Presentability supplies small colimits. Reference 1, Corollary 5.5.2.4, supplies small limits; its Section 1.2.13 specifies coherent cones and cocones. Apply these with coefficient universe $V$, so even the $V$-small sieve categories are admissible.

[F3] [[def-scheme-sites-and-sheafification]] supplies sieves and the size-bounded site convention; [[def-nisnevich-covering-interface]] supplies the Nisnevich covering families and generated topology. Reference 1, Definition 6.2.2.6, supplies the covering-sieve convention for space-valued sheaves; here the condition is explicitly imposed using the coherent limits of [F2].

[F4] Reference 3, part (2), replaces any small cofiltered scheme diagram by a directed inverse system with the same limit, including transfer of existence. Reference 4 supplies existence for that system with affine transitions. Reference 5 supplies its qcqs conclusion. These are ordinary scheme-limit facts; no ordinary reindexing result is applied to an infinity-categorical colimit.

[F5] The indexing condition is the opposite of [[math:def-filtered-category-and-filtered-colimit]], and the affine-transition condition is [[math:def-affine-morphism-schemes]]. Reference 2, Recollection 3.6, supplies precisely the stated finitary convention, with colimits in the enhanced target of [F2].

[F6] [[def-article-conventions]] supplies the category of qcqs field-schemes and its contravariant functor convention. [[math:thm-prime-subfield-classification]] identifies the prime subfield of every field $k$ with $\mathbb Q$ or $\mathbb F_p$, so [F1] applies after this identification. The underlying scheme and the covering conditions in [F3] are unchanged by composing a structure map with $\operatorname{Spec}k\to\operatorname{Spec}F$.

## Proof
**Given:** The stated Choice and universe assumptions, a field $k$ with prime subfield $F$, and $j\geq0$.

**Goal:** Apply the prime-field existence input with the precise descent and continuity interfaces, and prove its restriction statement.

1.1 By [F2] all displayed target limits and colimits exist. For a cofiltered scheme diagram in [F5], apply the directed replacement of [F4]; its transitions remain affine since they are images of diagram arrows. References 4 and 5 then give a qcqs scheme limit, and reference 3 transfers its universal property to the original diagram. The compatible structure maps to the fixed base give its base-scheme structure; thus the finitary comparison is well-defined. By [F6] the prime field satisfies the hypotheses of [F1], which supplies the coherent functor $M_{j,F}$ with these properties. Composition of structure maps defines $u$ on objects and leaves underlying arrows unchanged, preserving identities and composition. Precomposition therefore supplies $M_{j,F}\circ u^{\mathrm{op}}$ and does not change its values or their images in the homotopy category. [A1, F1, F2, F4, F5, F6]

2.1 For $X\in\mathcal C_k$, every $F$-morphism $T\to uX$ gives $T$ a unique compatible $k$-structure by composition with $X\to\operatorname{Spec}k$. A commuting triangle over $uX$ automatically respects these $k$-structures. Hence $(\mathcal C_k)_{/X}\cong(\mathcal C_F)_{/uX}$, with corresponding sieves and underlying diagrams. Each Nisnevich generating family in either slice is exactly such a family in the other by [F3], since etaleness and residue-field lifting depend only on the underlying maps. Consequently the generated covering sieves correspond. For each covering sieve $R$, the restricted comparison is therefore the very equivalence $M_{j,F}(uX)\to\lim_{(T\to uX)\in uR^{\mathrm{op}}}M_{j,F}(T)$ of [F1], proving descent, including the empty cover. Finally, $u$ preserves the scheme limits used in [F5]: the underlying $F$-scheme limit from step 1.1 acquires the common $k$-structure from its projections. These structure maps agree because a nonempty cofiltered category is connected: any two indices receive arrows from a common index. Every compatible cone over the underlying $F$-diagram therefore acquires this same unique $k$-structure, which verifies the limit universal property over $k$. Affineness is unchanged by $u$. Thus the restricted finitary comparison is also exactly the prime-field comparison of [F1], and is an equivalence. This proves all the restriction assertions. [F1, F2, F3, F5, F6, step 1.1] ∎
