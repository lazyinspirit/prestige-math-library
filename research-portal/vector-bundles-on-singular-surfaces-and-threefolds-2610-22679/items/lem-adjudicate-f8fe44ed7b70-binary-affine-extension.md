---
id: lem-adjudicate-f8fe44ed7b70-binary-affine-extension
kind: lemma
title: Two-variable affine extension before hypercompletion
status: draft
domain: mathematics
deps:
  - thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input
  - lem-adjudicate-0e33ede8caef-coherent-affine-operation-extension
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - def-motivic-cohomology
  - math:def-axiom-of-choice
  - math:def-field
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-scheme-over-base
  - math:thm-smooth-morphisms-stable-base-change-composition
  - math:thm-affine-fibre-product-tensor-ring
dependency_roles:
  thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input: mathematical-premise
  lem-adjudicate-0e33ede8caef-coherent-affine-operation-extension: mathematical-premise
  def-adjudicate-c387df8ff29b-non-a1-spectrum-framework: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-field: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:thm-smooth-morphisms-stable-base-change-composition: mathematical-premise
  math:thm-affine-fibre-product-tensor-ring: mathematical-premise
formulation_deps:
  - thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input
  - lem-adjudicate-0e33ede8caef-coherent-affine-operation-extension
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - def-motivic-cohomology
  - math:def-axiom-of-choice
  - math:def-field
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-scheme-over-base
argument_deps:
  - thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input
  - lem-adjudicate-0e33ede8caef-coherent-affine-operation-extension
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
  - math:def-axiom-of-choice
  - math:thm-smooth-morphisms-stable-base-change-composition
  - math:thm-affine-fibre-product-tensor-ring
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 16
sources:
  references:
    - title: Jacob Lurie, Higher Topos Theory, author-hosted PDF
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Theorem 4.1.3.1, p. 236; Definition 4.3.2.2, pp. 271–272, and Lemma
        4.3.2.13, pp. 282–283; Definition 5.5.8.1, p. 506, Proposition 5.5.8.6,
        p. 507, Lemma 5.5.8.11 and Remark 5.5.8.12, p. 508; Proposition 6.2.2.7,
        statement p. 579 and proof pp. 582–583
      statement: Cofinality is tested by contractible comma categories. Left Kan
        extensions from full subcategories are computed by the indicated slice
        colimits. Sifted colimits of spaces commute with finite products.
        Ordinary space-valued sheafification on a Grothendieck site is a
        left-exact localization.
      hypotheses: Small indexing diagrams in compatible universes; space-valued
        functors and a full subcategory for the pointwise Kan extension. Sifted
        means nonempty with cofinal diagonal. For sheafification use a small
        site with a Grothendieck topology.
      reading_limits: Read the live author PDF extraction at the cofinality theorem
        and its proof, the pointwise Kan-extension definition and existence
        lemma, the sifted definition and finite-product statements with their
        displayed proof, and Proposition 6.2.2.7 with its displayed proof. The
        application to I_A and the product K-space is proved here. Earlier
        categorical foundations and sheafification construction are imported,
        not reconstructed.
---

## Statement
Assume the Axiom of Choice and compatible site and universe bounds, including $\omega$ in the scheme-data universe. Let $F$ be a prime field and $i\geq1$. Let $P(A)$ be the actual perfect K-space of $\operatorname{Spec}A$ for a commutative $F$-algebra $A$, and let $j$ include smooth finitely presented $F$-algebras into all commutative $F$-algebras. Put $Y_i(T)=\Omega^\infty H(\mathbb Z(i)_{\rm mot}(T)[2i])$, with the fixed realization and cohomological shift of the supplied coefficient functor. Restriction induces an equivalence of unpointed natural-transformation spaces
$$\operatorname{Map}(P\times P,Y_i)\simeq\operatorname{Map}(j^*P\times j^*P,j^*Y_i).$$
In particular a homotopy between two specified natural two-variable operations on smooth affines extends to the corresponding operations on all affines. For operations obtained from affine restriction by the supplied ordinary sheafification and affine-basis extension, the same homotopy gives a homotopy on all qcqs $F$-schemes with target the original $Y_i$. This applies to sums, source addition and cup-product composites of supplied operations. It does not replace $Y_i$ by its hypercompletion.

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] and the separate size bounds in the Statement. The prime field is a field in the sense of [[math:def-field]]; prime means that it has no proper subfield. A scheme over $F$ includes its structural morphism to $\operatorname{Spec}F$, as in [[math:def-scheme-over-base]], and qcqs has the meaning in [[math:def-quasi-compact-and-quasi-separated-scheme]]. Choice and the size bounds are inherited by the K-space, coefficient, Kan-extension and site constructions used in both proof steps.

[F1] [[thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input]] supplies the coherent space-valued counit equivalence $Lj^*P\simeq P$, with $L$ left Kan extension. [[def-adjudicate-c387df8ff29b-non-a1-spectrum-framework]] supplies the presentable categories, mapping spaces and coherent colimits in use. Functors of algebras here are covariant, equivalently presheaves on affine schemes.

[F2] [[lem-adjudicate-0e33ede8caef-coherent-affine-operation-extension]] supplies the actual Nisnevich, hence Zariski, coefficient sheaf $Y_i$, its fixed realization and shift, and the affine-basis right Kan extension to qcqs schemes, including nonseparated ones. The complexes and their original values have the meaning of [[def-motivic-cohomology]]. The extension uses ordinary space-valued sheafification and its source unit before any optional hypercompletion.

[F3] [[math:thm-affine-fibre-product-tensor-ring]] identifies affine products with tensor products and supplies the tensor coproduct property. [[math:thm-smooth-morphisms-stable-base-change-composition]] supplies smoothness under base change and composition. In particular two smooth finitely presented $F$-algebras have a smooth finitely presented tensor product over $F$.

[F4] Source record 0 imports the pointwise comma-category formula for space-valued left Kan extension, the cofinality criterion by contractible comma categories, and commutation of sifted colimits of spaces with finite products. A nonempty indexing category is sifted here when its diagonal into its square is cofinal. It also supplies left exactness of ordinary sheafification on a Grothendieck site. These categorical results are used under the fixed size bounds, not replaced by the corresponding statements for sets.

## Proof
**Given:** $F,i,P,Y_i,j$ and the assumptions in the Statement.

**Goal:** Extend a specified two-variable homotopy without changing coefficient values.

1.1 For an $F$-algebra $A$, let $I_A$ be the category whose objects are smooth finitely presented $F$-algebras $B$ with a map $B\to A$, and whose arrows commute with that map. It is nonempty since $F\to A$ is an object. For $(B\to A,C\to A)$, the tensor product $B\otimes_F C$, mapped to $A$ by $b\otimes c\mapsto f(b)g(c)$, is a coproduct in $I_A$ by [F3]. It is still smooth finitely presented: its spectrum is the affine product, whose projection is smooth by base change and whose structure map is smooth by composition; the tensor of two finite presentations is a finite presentation. The comma category from $(B,C)$ to the diagonal $I_A\to I_A\times I_A$ has the initial object given by the two tensor inclusions. Its nerve is contractible. Thus [F4] makes this diagonal cofinal and $I_A$ sifted. By the pointwise formula and finite-product commutation in [F4], the counit for the product is the composite equivalence $L(j^*P\times j^*P)(A)\simeq(\operatorname{colim}_{I_A}P(B))\times(\operatorname{colim}_{I_A}P(B))\simeq P(A)\times P(A)$, the last equivalence being [F1]. These are the natural counits, so the equivalence is natural in $A$. The Kan adjunction now gives exactly the displayed equivalence of mapping spaces into $Y_i$. It transports paths between the specified endpoints, not merely their objectwise component equalities. [A1, F1, F3, F4]

2.1 Apply step 1.1 to the two given affine operations and their smooth-affine homotopy. Extend that one path using the same affine-basis right Kan extension and source unit as [F2]. Right Kan extension is computed by limits, which preserve products: the limit of a diagram of pairs is a pair of compatible cones, equivalently the product of the two limits. Ordinary sheafification also preserves finite products by [F4]; hence its source unit on $P\times P$ is the product of the two units on $P$. The target is the original sheaf $Y_i$ by [F2]. Consequently the extended path has exactly the claimed endpoints on the ordinary sheafified source and, after its unit, on every global perfect K-space. Extension and restriction are functors, so they preserve composition and the supplied natural sums, source addition and coefficient cup products in those endpoints. This argument applies to the corresponding extended operations specified in the Statement; it does not assert that arbitrary nonaffine operations are determined merely by equality of affine components. The affine-basis formula in [F2] includes nonaffine intersections on nonseparated qcqs schemes. Thus the conclusion holds in the full stated scope before hypercompletion. [A1, F2, F4, step 1.1] ∎

## External input
Source record 0 supplies only the categorical inputs in [F4]. The affine K-space left Kan extension and the actual coefficient sheaf and affine-basis extension are used through [F1] and [F2]. Step 1.1 proves the finite-product application locally. This is a locally authored lemma, with no claim to a literature proof of the whole statement.

## Reading limits
Read the existing K-stack mapping input, coherent affine-extension lemma, source-native framework, motivic-cohomology definition and the six mathematical formulation and geometric suppliers declared here. Read the Lurie passages identified in source record 0; its deeper categorical foundations remain imported. No source reconstruction, independent acceptance, original-article audit or publication is claimed.
