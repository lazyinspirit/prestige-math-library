---
title: External stable enhancement and smash product of spectra
status: published
research_item: thm-author-e0b0bf18ed2b-stable-enhancement-input
dependency_level: 0
sources:
  references:
    - title: "Jacob Lurie, Higher Algebra (September 18, 2017): spectrum objects,
        tower and pointed adjunction"
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definition 1.4.2.8 (p. 142); Corollary 1.4.2.17, Remark 1.4.2.18 and
        Notation 1.4.2.20 (p. 146); Proposition 1.4.2.24 and Remark 1.4.2.25 (p.
        147); Definition 1.4.3.1 and Remark 1.4.3.3 (p. 150); Proposition
        1.4.4.4, especially proof assertion (2′) (pp. 156–157), and sphere
        definition immediately before Corollary 1.4.4.6 (p. 157)
      statement: Reduced excisive functors from finite pointed spaces to spaces form a
        stable presentable infinity-category. Stabilization is unchanged by
        passing from the target to its pointed objects; for a pointed target
        with finite limits, it is the homotopy limit of its loop tower.
        Evaluation at the pointed zero-sphere has a pointed lift with a left
        adjoint on pointed objects when the target is presentable. For spaces
        its left adjoint sends the pointed zero-sphere to the sphere spectrum;
        the nth tower projection is evaluation on the nth sphere, equivalently
        evaluation after the nth suspension shift.
      hypotheses: The spectrum-object construction uses a target with finite limits.
        The tower theorem is applied to pointed spaces; Remark 1.4.2.18
        identifies its stabilization with that of spaces. Presentability is
        required for Proposition 1.4.4.4. Spaces are presentable by reference 2
        below. All smallness is relative to the stated universes and the
        imported results are used in their classical set-theoretic setting.
      reading_limits: "In this repair, inspected the displayed statements and
        definitions at the listed locators, the pointed adjunction assertion
        (2′) in the proof of Proposition 1.4.4.4, and the sphere-definition
        paragraph. The pointed sphere identification uses the composite
        adjunction: the unpointed left adjoint is the pointed left adjoint after
        adjoining a disjoint base point, and the point with a disjoint base
        point is the pointed zero-sphere. Did not reconstruct the tower or
        stabilization proofs or review all their antecedents. Reading was
        through the actual PDF text returned by the web tool; shell download was
        unavailable."
    - title: "Jacob Lurie, Higher Topos Theory: infinity-categories, spaces, diagrams
        and coherent structures"
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Definition 1.1.2.4 and Example 1.1.2.6 (p. 14); Definitions 1.1.5.1 and
        1.1.5.5 (pp. 20–22); right mapping-space construction and Proposition
        1.2.2.3 (p. 27); Notation 1.2.7.2 and Proposition 1.2.7.3 (p. 39);
        Definition 1.2.13.4 and Remark 1.2.13.5 (p. 47); Definition 1.2.16.1 (p.
        51); Definition 2.4.2.1 (p. 121); Proposition 2.4.4.3 (pp. 131–132),
        used dually; Definition 3.0.0.1 (p. 144); Definition 5.2.2.7 and
        Proposition 5.2.2.8 (pp. 342–343)
      statement: Use quasicategories (inner-horn-filling simplicial sets), their right
        mapping Kan complexes and internal-hom functor infinity-categories.
        Spaces are the simplicial nerve of the simplicial category of Kan
        complexes. Limits and colimits are terminal cones and initial cocones,
        respectively. The infinity-category of infinity-categories uses the
        cores of functor categories as mapping spaces. CoCartesian fibrations
        are the dual of Cartesian fibrations, with their edges characterized by
        the dual mapping-space pullback criterion. An adjunction is
        characterized by a unit inducing the mapping-space equivalences.
      hypotheses: Use simplicial sets in the stated size universes. The
        functor-category assertion requires an infinity-category as target. The
        coCartesian mapping-space criterion applies to an inner fibration
        between infinity-categories; the monoidal base is the nerve of the
        category of finite pointed sets. The unit criterion concerns functors
        between infinity-categories.
      reading_limits: In this repair, read the cited defining formulas and statements,
        including the precise mapping-space diagram and its qualification in
        Proposition 2.4.4.3. The source imports the underlying quasicategorical
        formalism at this abstraction; no local proof of its foundational
        equivalences, functor-category theorem or fibration criterion is
        claimed.
    - title: "Jacob Lurie, Higher Topos Theory: accessibility, presentability and
        completeness"
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Definition 5.3.1.7 (p. 382); Definition 5.3.4.5 (p. 396); Definition
        5.4.2.1 and Proposition 5.4.2.2 (pp. 423–424); Definition 5.5.0.1 (p.
        456); Example 5.5.1.8 (p. 461); Corollary 5.5.2.4 (p. 464)
      statement: For a regular cardinal kappa, kappa-filtered indexing
        infinity-categories admit cocones for every kappa-small simplicial
        diagram; kappa-compact objects corepresent functors preserving those
        colimits. An infinity-category admitting small kappa-filtered colimits
        and generated under them by an essentially small full subcategory of
        kappa-compact objects is accessible. Presentable means accessible and
        admitting small colimits. Spaces are presentable, and every presentable
        infinity-category admits all small limits.
      hypotheses: Kappa is an infinite regular cardinal in the small universe.
        Compactness is defined for categories admitting the relevant filtered
        colimits. In the characterization of accessibility use Proposition
        5.4.2.2(3), including generation by a full essentially small subcategory
        of compact objects. Completeness requires presentability.
      reading_limits: In this repair, read the specified definitions, Proposition
        5.4.2.2(3), Example 5.5.1.8 and Corollary 5.5.2.4. Their proofs and the
        general Ind-completion theory are imported, not reconstructed. Only
        their application to spaces and spectra is used.
    - title: "Jacob Lurie, Higher Algebra (September 18, 2017): finite spaces,
        stability and symmetric monoidal smash"
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Proposition 1.1.3.4 (p. 31); Definition 1.4.2.1 and Notation 1.4.2.5
        (p. 141); Corollary 1.4.2.27 (pp. 149–150); Definition 2.0.0.7 (p. 169);
        Corollary 4.8.2.19 and following characterization (pp. 722–723)
      statement: Finite spaces are the full subcategory generated by the point under
        finite colimits, with finite pointed spaces its pointed objects. Reduced
        means preserving the final object and excisive means sending pushout
        squares to pullback squares. Stability is equivalent to pointedness,
        existence of finite limits and colimits, and coincidence of pullback and
        pushout squares. A symmetric monoidal infinity-category is a coCartesian
        fibration over the nerve of finite pointed sets with product (Segal)
        fibers. Spectra admit such a structure with sphere unit and tensor
        product preserving small colimits separately in each variable; this is
        the smash product.
      hypotheses: Use the finite-colimit closure of the point as the domain for
        spectrum objects. The stability criterion assumes a pointed
        infinity-category. The Segal equivalences are induced by the maps
        selecting each non-basepoint element. The first existence assertion of
        Corollary 4.8.2.19 is applied to spectra; its subsequent universal
        property for other stable presentable monoidal categories is not
        asserted here.
      reading_limits: In this repair, read the listed definitions and propositions,
        including the whole statement and following two-property
        characterization of Corollary 4.8.2.19. The existence proof of the smash
        structure and the general tensor product of presentable
        infinity-categories are imported. No claim of reading all of Chapter 4
        or of independent acceptance is made.
external_input: true
---

PDF p. 3: Filtered S1 spectra: stable enhancement prerequisites

## Prerequisites

- [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [` Jacob Lurie, Higher Algebra (September 18, 2017): spectrum objects, tower and pointed adjunction · Definition 1.4.2.8 (p. 142); Corollary 1.4.2.17, Remark 1.4.2.18 and Notation 1.4.2.20 (p. 146); Proposition 1.4.2.24 and Remark 1.4.2.25 (p. 147); Definition 1.4.3.1 and Remark 1.4.3.3 (p. 150); Proposition 1.4.4.4, especially proof assertion (2′) (pp. 156–157), and sphere definition immediately before Corollary 1.4.4.6 (p. 157) `](https://www.math.ias.edu/~lurie/papers/HA.pdf)
- [` Jacob Lurie, Higher Topos Theory: infinity-categories, spaces, diagrams and coherent structures · Definition 1.1.2.4 and Example 1.1.2.6 (p. 14); Definitions 1.1.5.1 and 1.1.5.5 (pp. 20–22); right mapping-space construction and Proposition 1.2.2.3 (p. 27); Notation 1.2.7.2 and Proposition 1.2.7.3 (p. 39); Definition 1.2.13.4 and Remark 1.2.13.5 (p. 47); Definition 1.2.16.1 (p. 51); Definition 2.4.2.1 (p. 121); Proposition 2.4.4.3 (pp. 131–132), used dually; Definition 3.0.0.1 (p. 144); Definition 5.2.2.7 and Proposition 5.2.2.8 (pp. 342–343) `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)
- [` Jacob Lurie, Higher Topos Theory: accessibility, presentability and completeness · Definition 5.3.1.7 (p. 382); Definition 5.3.4.5 (p. 396); Definition 5.4.2.1 and Proposition 5.4.2.2 (pp. 423–424); Definition 5.5.0.1 (p. 456); Example 5.5.1.8 (p. 461); Corollary 5.5.2.4 (p. 464) `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)
- [` Jacob Lurie, Higher Algebra (September 18, 2017): finite spaces, stability and symmetric monoidal smash · Proposition 1.1.3.4 (p. 31); Definition 1.4.2.1 and Notation 1.4.2.5 (p. 141); Corollary 1.4.2.27 (pp. 149–150); Definition 2.0.0.7 (p. 169); Corollary 4.8.2.19 and following characterization (pp. 722–723) `](https://www.math.ias.edu/~lurie/papers/HA.pdf)


## Statement

Work in ZFC with fixed nested Grothendieck universes $U\in V\in W$ and $\omega\in U$. Spaces and indexing diagrams called small are $U$-small; their infinity-categories are formed in $V$, and the infinity-category of those categories in $W$. Let $S$ be the infinity-category of small spaces and $S_*$ its infinity-category of pointed objects. Let $S^{\mathrm{fin}}$ be the smallest replete full subcategory of $S$ containing the point and closed under finite colimits, and let $S_*^{\mathrm{fin}}$ consist of its pointed objects.

Set $\mathrm{Sp}=\operatorname{Exc}_*(S_*^{\mathrm{fin}},S)$, the full infinity-category of functors taking the point to a contractible space and pushout squares to pullback squares. It is stable and presentable, has all small limits and colimits, and a square in it is a pushout exactly when it is a pullback. Write $0$ for its zero object and $E[1]=0\sqcup_E0$ for suspension; its inverse is $E[-1]=0\times_E0$.

Define the pointed evaluation $\Omega^\infty:\mathrm{Sp}\to S_*$ by $E\mapsto E(S^0)$, with base point induced by $E(*)\to E(S^0)$ and the equivalence $E(*)\simeq *$. Here $S^0$ is the pointed two-point space. This functor has a left adjoint $\Sigma^\infty:S_*\to\mathrm{Sp}$, and the sphere spectrum is $\mathbb S=\Sigma^\infty S^0$.

There is an equivalence $\mathrm{Sp}\simeq\operatorname*{lim}(\cdots\xrightarrow{\Omega}S_*\xrightarrow{\Omega}S_*)$ in the infinity-category of infinity-categories, where $\Omega X=*\times_X*$ is based loops. An object on the right is a coherent tower $Y_n\simeq\Omega Y_{n+1}$ for $n\geq0$, and its nth projection is naturally $Y_n\simeq\Omega^\infty(E[n])$. All equivalences, morphisms and tower compatibilities are coherent.

There is a symmetric monoidal smash product $\wedge:\mathrm{Sp}\times\mathrm{Sp}\to\mathrm{Sp}$ with unit $\mathbb S$, preserving small colimits separately in each variable. Its associativity, symmetry and unit laws include all higher coherences.

## Statement references

[math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Source contract

**Given:** The universe closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), with the nested universes and $\omega\in U$ assumed, and the Axiom of Choice of [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). Small means belonging to $U$ up to isomorphism. AC is part of the classical foundations of the imported constructions; no choice-free version is claimed. The simplicial sets and standard simplices used below are supplied by [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration).

**Goal:** Supply the stable enhancement, coherent Omega-tower description, pointed evaluation adjunction and smash product with the precise formalism below.

[F1] Reference 0 imports the spectrum-object construction, its stability and presentability, the coherent tower equivalence and the pointed stabilization adjunction. Reference 2 supplies presentability of spaces and completeness of presentable infinity-categories. Reference 3 supplies the stability criterion and the symmetric monoidal smash product with sphere unit. The tower theorem is applied to $S_*$, which is pointed and has finite limits; stabilization of $S_*$ agrees with stabilization of $S$. The adjunction is the pointed assertion (2′) in the proof of Proposition 1.4.4.4. The sphere definition there is the unpointed suspension of the point, equivalently the pointed suspension of $S^0$.

[F2] Reference 1 imports the quasicategory, mapping-space, functor-category, cone, adjunction and coCartesian-fibration formalism used below; reference 2 imports the precise accessibility and presentability interface; reference 3 imports the finite-space convention and the Segal-fiber meaning of symmetric monoidal. These are statement-bearing external inputs in addition to [F1].

## External input

Import [F1] and [F2], at their stated hypotheses and size bounds. The following paragraphs specify the imported foundational interface; they are not local proofs of the cited results.

Use simplicial sets with standard simplices $\Delta[n]$. The horn $\Lambda_i[n]$ is the union of all codimension-one faces except the ith face. An infinity-category is a simplicial set in which every map $\Lambda_i[n]\to C$ extends to $\Delta[n]\to C$ for $0<i<n$; a Kan complex has this extension property for every horn. A functor is a simplicial map. The functor infinity-category has $\operatorname{Fun}(C,D)_n=\operatorname{Hom}(C\times\Delta[n],D)$ when $D$ is an infinity-category. A full subcategory on chosen vertices consists of all simplices whose vertices are chosen; replete means closed under equivalence. The mapping space $\operatorname{Map}_C(x,y)$ can be represented by the right mapping Kan complex: its n-simplices are maps $\Delta[n+1]\to C$ whose restriction to the face spanned by vertices $0,\ldots,n$ is the constant simplex at $x$ and whose last vertex is $y$. Its components are the morphisms in the homotopy category; an equivalence is a morphism invertible there. These constructions and their invariance are imported from reference 1.

Concretely $S$ is the homotopy coherent simplicial nerve of the simplicial category of small Kan complexes, whose mapping simplicial sets are the internal homs $Y^X$. The nerve construction is that of reference 1, Definitions 1.1.5.1 and 1.1.5.5: its n-simplices are simplicial functors from $\mathfrak C[\Delta[n]]$, with objects $0,\ldots,n$ and mapping spaces given by nerves of posets of subsets of $\{i,\ldots,j\}$ containing both endpoints, composed by union. Mapping spaces for $j<i$ are empty. Pointed spaces are arrows $*\to X$ in $S$, with their coherent morphisms. Finite spaces and finite pointed spaces have exactly the finite-colimit-closure meaning in the Statement, as in reference 3, Notation 1.4.2.5. For a reduced functor the contractibility of its value at the point makes the induced pointing canonical up to a contractible choice.

A coherent diagram is a simplicial map $p:K\to C$. A cone (respectively cocone) extends it by an initial (respectively final) cone vertex, together with all simplices giving compatibility. Its limit is a terminal cone and its colimit an initial cocone; terminal means every incoming mapping space is contractible, and initial is the dual condition. Products, pullbacks and pushouts refer to these universal properties, including the empty diagrams for terminal and initial objects. A zero object is both initial and terminal. The corresponding mapping-space universal properties are homotopy universal properties. In the infinity-category of infinity-categories, objects are infinity-categories, arrows are functors and mapping spaces are the cores of functor infinity-categories, retaining natural equivalences and their higher homotopies. Here the core is the largest simplicial subset all of whose edges are equivalences. The tower limit in the Statement is taken there, not in an ordinary homotopy category. All of this formalism is imported from reference 1.

For an infinite regular cardinal $\kappa$, a diagram shape is $\kappa$-small if it has fewer than $\kappa$ nondegenerate simplices; $\kappa$ is regular when a union of fewer than $\kappa$ sets each of size less than $\kappa$ still has size less than $\kappa$. An infinity-category is $\kappa$-filtered when every $\kappa$-small diagram in it has a cocone. An object $c$ is $\kappa$-compact when $\operatorname{Map}(c,-)$ preserves small $\kappa$-filtered colimits. An infinity-category is accessible when, for some such $\kappa\in U$, it admits small $\kappa$-filtered colimits and is generated under them by an essentially small full subcategory of $\kappa$-compact objects; essentially small means equivalent to a small infinity-category. Presentable means accessible and admitting all small colimits. Reference 2 imports this characterization, presentability of $S$, and existence of all small limits in a presentable infinity-category. A pointed infinity-category with finite limits and colimits is stable precisely when its pullback and pushout squares coincide, by reference 3. Suspension and loops are the indicated pushout and pullback with zero objects and are inverse in a stable infinity-category. An adjunction $L\dashv R$ has a coherent unit for which $\operatorname{Map}(Lc,d)\simeq\operatorname{Map}(c,Rd)$, induced by that unit, is an equivalence for every $c,d$, as imported from reference 1.

A symmetric monoidal infinity-category means the structure of reference 3, Definition 2.0.0.7: a coCartesian fibration $p:C^\otimes\to N(\mathrm{Fin}_*)$ whose fiber over $\langle n\rangle=\{*,1,\ldots,n\}$ is equivalent to $C^n$ via the maps selecting each non-basepoint element. Here $\mathrm{Fin}_*$ is the category of finite pointed sets and basepoint-preserving functions, and $N$ is its ordinary nerve, whose n-simplices are strings of n composable arrows. The tensor and unit come from transport along the fold $\langle2\rangle\to\langle1\rangle$ and $\langle0\rangle\to\langle1\rangle$. For precision, a coCartesian fibration is an inner fibration admitting a coCartesian lift from every object over the source of every base arrow; inner fibration means the relative lifting property for all inner horns. An edge $x\to y$ is coCartesian when for each $z$ the coherent square from $\operatorname{Map}(y,z)\to\operatorname{Map}(x,z)$ to $\operatorname{Map}(py,pz)\to\operatorname{Map}(px,pz)$ is a homotopy pullback, the dual criterion of reference 1, Proposition 2.4.4.3. Transport is specified up to its coherent contractible choices. This imports the higher coherences, rather than merely laws in a homotopy category. Reference 3, Corollary 4.8.2.19, supplies this structure on $\mathrm{Sp}$ with the asserted sphere unit and separate colimit preservation.
