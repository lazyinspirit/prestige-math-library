---
title: Multiplicative filtrations and graded products
status: published
research_item: def-multiplicative-filtered-spectrum
dependency_level: 5
sources:
  references:
    - title: Saul Glasman, Day convolution for infinity-categories (arXiv:1308.4940v4)
      url: https://arxiv.org/pdf/1308.4940v4
      locator: Notation 2.1, p. 2; Lemma 2.4, pp. 3–4; Definition 2.8, p. 6; Lemma
        2.10, pp. 7–8; Propositions 2.11–2.12, pp. 8–9 (printed pagination).
      statement: For a small symmetric monoidal source and a cocomplete symmetric
        monoidal target whose tensor preserves colimits separately, left Day
        convolution is symmetric monoidal. Its commutative algebra objects
        correspond to lax symmetric monoidal functors, retaining all operadic
        coherences.
      hypotheses: Use the small additive index category I and spectra with small
        colimits and separately colimit-preserving smash. Interpret size in the
        nested universes of the stable enhancement, viewing both categories in
        an enclosing universe as in Notation 2.1.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the v4 primary PDF text at the named locators, including the
        proof of Proposition 2.12. Import the Day and operadic theorems; no
        reconstruction of their higher-categorical foundations. The displayed
        integer-index formula and unit below specialize the left Kan-extension
        construction. No reading of the inaccessible Rochester mirror is
        claimed. Current maintenance read the assigned consumer and its exact
        declared supplier interfaces; no fresh primary-source or page-image
        reading, reconstruction or independent acceptance is claimed for this
        reference."
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes (arXiv:2309.08463v1)
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Section 2.2, Filtrations, printed pp. 11–12, especially the paragraph
        beginning “Assume now that C is presentably symmetric monoidal” on p.
        12.
      statement: For a stable presentably symmetric monoidal infinity-category,
        decreasing integer filtrations and integer-graded objects have Day
        convolution structures; associated graded is strong symmetric monoidal
        and carries filtered commutative algebras to graded commutative
        algebras.
      hypotheses: Specialize to spectra. Presentability, stability and separate
        colimit preservation hold by the stable enhancement. No completeness,
        exhaustiveness, nonnegativity, boundedness or geometric hypotheses are
        imposed for this assertion.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read Section 2.2 in the primary v1 PDF text, including the
        decreasing-index convention and the full monoidal paragraph. This
        paragraph states the foundational monoidality input without proving it
        there; import that established input. Do not import the subsequent
        motivic constructions or any convergence assertion. Current maintenance
        read the assigned consumer and its exact declared supplier interfaces;
        no fresh primary-source or page-image reading, reconstruction or
        independent acceptance is claimed for this reference."
---

PDF p. 3: CAlg(FilSp); PDF p. 10: Multiplication square

## Prerequisites

- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [` Saul Glasman, Day convolution for infinity-categories (arXiv:1308.4940v4) · Notation 2.1, p. 2; Lemma 2.4, pp. 3–4; Definition 2.8, p. 6; Lemma 2.10, pp. 7–8; Propositions 2.11–2.12, pp. 8–9 (printed pagination). `](https://arxiv.org/pdf/1308.4940v4)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes (arXiv:2309.08463v1) · Section 2.2, Filtrations, printed pp. 11–12, especially the paragraph beginning “Assume now that C is presentably symmetric monoidal” on p. 12. `](https://arxiv.org/pdf/2309.08463v1)


## Definition
Work in ZFC and the fixed nested universes of the supplied stable enhancement of spectra. A **decreasing filtered spectrum** is a coherent diagram $F$ in spectra indexed by the category $I$, whose objects are integers and whose unique arrow $i\to k$ exists exactly when $i\geq k$. Addition makes $I$ a small symmetric monoidal category with unit $0$. Write $\operatorname{FilSp}=\operatorname{Fun}(I,\mathrm{Sp})$ for the infinity-category of these diagrams and coherent natural transformations.

Equip this diagram category with **left Day convolution** along addition. Concretely,

$$(F\otimes_{\rm Day}G)^n=\operatorname*{colim}_{(a,b)\in I\times I,\ a+b\geq n}(F^a\wedge G^b).$$

The indexing subcategory has coordinatewise decreasing arrows; its inclusion for $n\geq m$ defines the transition from degree $n$ to degree $m$. All colimits are infinity-categorical colimits. The tensor unit $J$ has $J^n=\mathbb S$ for $n\leq0$ and $J^n=0$ for $n>0$, with identity maps between its sphere stages and the forced zero maps otherwise. This is the left Kan extension of the sphere at the monoidal unit $0$: a left Kan extension here has the indicated colimit over objects mapping to the output index. The associativity, symmetry and unit coherences are those of Day convolution.

A **multiplicative filtered spectrum**, written $F\in\operatorname{CAlg}(\operatorname{FilSp})$, is a commutative algebra object for this tensor product. Equivalently, it is a lax symmetric monoidal functor $I\to\mathrm{Sp}$. Precisely, this means an infinity-operad map $I^\otimes\to\mathrm{Sp}^\otimes$ over finite pointed sets preserving inert arrows, using the operadic convention of the spectra interface. The ordinary symmetric monoidal category $I$ has an associated category $I^\otimes$: over $\langle n\rangle$ its objects are lists $(i_1,\ldots,i_n)$, and a pointed map $f:\langle n\rangle\to\langle m\rangle$ admits a morphism from this list to $(k_1,\ldots,k_m)$ exactly when $\sum_{r\in f^{-1}(s)}i_r\geq k_s$ for every non-basepoint $s$. Composition is substitution of lists; take the nerve to obtain its infinity-operad. Inert maps select inputs, with identity identifications on the retained indices. This description fixes the full coherent meaning, not just equations in the homotopy category.

In particular, for every finite ordered list $(i_1,\ldots,i_n)$, including the empty list, there is a map

$$\mu_{i_1,\ldots,i_n}:F^{i_1}\wedge\cdots\wedge F^{i_n}\longrightarrow F^{i_1+\cdots+i_n}.$$

The empty smash product is the sphere spectrum $\mathbb S$, and the empty sum is $0$. The maps are compatible with all transition maps and permutations, with substitution of lists into lists, and with the unit, together with all higher homotopies encoded by the indicated infinity-operad map. The one-input operation is the identity up to its specified coherent identification. Conversely, such operadically coherent indexed data give the commutative algebra object by the Day correspondence. Thus unrelated binary pairings do not suffice.

A multiplicative filtration **on a commutative ring spectrum $E$** additionally has a morphism $F\to\operatorname{const}(E)$ in $\operatorname{CAlg}(\operatorname{FilSp})$. Here a commutative ring spectrum is a commutative algebra object in spectra under smash product, and $\operatorname{const}(E)$ has its constant tower and the constant lax symmetric monoidal structure supplied by the products and unit of $E$. Equivalently, the component maps $F^i\to E$ form an augmentation of the underlying tower and commute coherently with every finite-input product. The augmentation is part of the data.

Put $\operatorname{gr}^iF=\operatorname{cofib}(F^{i+1}\to F^i)$ and write $q_i:F^i\to\operatorname{gr}^iF$ for the canonical cofiber map. Integer-graded spectra are families $A=(A^i)_{i\in\mathbb Z}$, equivalently functors from the discrete category of integers. Their Day tensor is $(A\otimes_{\rm gr}B)^n=\coprod_{a+b=n}A^a\wedge B^b$, with sphere unit in degree zero and zero elsewhere. Associated graded is strong symmetric monoidal from the filtered Day tensor to this graded tensor, meaning that it preserves the unit and tensor product up to coherent equivalence. It therefore gives the **associated graded multiplication**, including the coherent family

$$\overline\mu_{i,j}:\operatorname{gr}^iF\wedge\operatorname{gr}^jF\longrightarrow\operatorname{gr}^{i+j}F.$$

These are the products induced by $\mu_{i,j}$ through the cofibers; they satisfy $\overline\mu_{i,j}(q_i\wedge q_j)\simeq q_{i+j}\mu_{i,j}$. Their unit is $\mathbb S\to F^0\xrightarrow{q_0}\operatorname{gr}^0F$. No exhaustiveness, completeness or nonnegativity is required. These are maps from filtration stages to graded pieces; the definition does not assert that there is a map from $E$ or from an image subgroup of $\pi_*E$ to a graded piece.

## Definition references

[def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)

[def-stable-spectra-interface](item-def-stable-spectra-interface)

[thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

**Given:** A coherent decreasing filtered spectrum $F$ with the specified commutative Day algebra structure, and, when a filtration on $E$ is discussed, a commutative ring spectrum $E$ and multiplicative augmentation as above. Work under the stated ZFC and universe conventions.

**Goal:** Justify the indexed algebra description, the associated graded products and their compatibility with the cofiber maps.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) supplies the tower, its transition maps and the cofiber definition of the associated graded.

[F2] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies spectra, the sphere unit, coherent diagrams, cofibers, and commutative algebra objects as inert-preserving operadic sections. Smash preserves colimits separately, hence preserves cofiber constructions in each variable.

[F3] Reference 0 supplies Day convolution and the equivalence between its commutative algebra objects and lax symmetric monoidal functors, including higher coherences. Apply it to the additive index category $I$ and spectra.

[F4] [thm-author-e0b0bf18ed2b-stable-enhancement-input](item-thm-author-e0b0bf18ed2b-stable-enhancement-input) supplies presentability, stability, the separately colimit-preserving symmetric monoidal smash, and the nested-universe conventions used by both references. The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is retained in these imported foundations; no additional choice of multiplication or augmentation is made here.

[F5] Reference 1 supplies the strong symmetric monoidal associated-graded functor for these decreasing diagrams. Its hypotheses hold by [F4].

## External input

Reference 0 imports the existence and coherent algebra-object correspondence for Day convolution in [F3], under the smallness and colimit conditions discharged by [F4]. In the displayed specialization, arrows $a+b\to n$ are exactly the inequalities $a+b\geq n$; the empty-input left Kan extension is $J$.

Reference 1 imports the monoidality assertion in [F5], for the entire diagram category of decreasing integer filtrations, without localizing or completing the towers. Its graded tensor has the displayed coproduct formula. These are the imported premises; the indexing, augmentation interpretation, cofiber product formula and its application to the given $F$ are justified locally below.

## Justification

1.1 By [F4] the index category is small in the chosen universe and smash preserves its colimits, so [F3] supplies the displayed Day structure. Its empty-input colimit is the sphere when $0\geq n$ and the zero spectrum otherwise, giving $J$. The equivalence in [F3] identifies a commutative Day algebra with the specified operad map, and hence with all the indexed operations and their coherences. If $i_r\geq k_r$ for every $r$, then $\sum i_r\geq\sum k_r$, so the target transition exists; associativity, commutativity and the identity $0$ for addition give matching indices for substitution, symmetry and units. The constant lax monoidal functor associated to $E$ has its products as structure maps; a morphism to it is exactly the stated coherent multiplicative augmentation. These clauses specify extra structure, without asserting that every tower admits it. For fixed $i,j$, transition compatibility identifies the restriction of $\mu_{i,j}$ along either $F^{i+1}\wedge F^j$ or $F^i\wedge F^{j+1}$ with a map factoring through $F^{i+j+1}\to F^{i+j}$. Composition with $q_{i+j}$ thus has the cofiber's canonical nullhomotopy, compatibly on the common corner $F^{i+1}\wedge F^{j+1}$. [F1, F2, F3, F4, given]

2.1 Since smash preserves colimits separately, $\operatorname{gr}^iF\wedge\operatorname{gr}^jF$ is the iterated cofiber of the square with corners $F^{i+1}\wedge F^{j+1}$, $F^{i+1}\wedge F^j$, $F^i\wedge F^{j+1}$ and $F^i\wedge F^j$. The compatible nullhomotopies in step 1.1 induce $\overline\mu_{i,j}$ by its universal property, with $\overline\mu_{i,j}(q_i\wedge q_j)\simeq q_{i+j}\mu_{i,j}$. For any finite nonempty list use the cube replacing any subset of inputs $F^{i_r}$ by $F^{i_r+1}$; its iterated cofiber is the smash of the graded pieces, and every vertex with a raised index maps through $F^{\sum i_r+1}$. This gives the analogous finite-input cofiber operations. The canonical strong symmetric monoidal structure of [F5] is the functorial cofiber comparison for these Day tensors, so it supplies their permutation, substitution and higher coherence compatibilities. In particular, it takes the commutative algebra structure to a commutative graded algebra and takes its unit to $\mathbb S\to F^0\xrightarrow{q_0}\operatorname{gr}^0F$. This establishes coherent commutativity, associativity and unitality and the asserted compatibility; it uses no injectivity of stage maps or additional maps out of image subgroups. [F1, F2, F3, F4, F5, given, step 1.1, construct] ∎
