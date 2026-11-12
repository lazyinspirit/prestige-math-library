---
title: External dimension criterion for a cdh-acyclic Nisnevich sheaf
status: published
research_item: thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input
dependency_level: 7
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Section 2.1, printed p. 11; Section 3.3, p. 14, abstract blowup square
        (3.4) and cdh topology; Theorem 8.2 and footnote 14, p. 54; Lemma 8.9
        and Proposition 8.10 with its complete proof, pp. 56–57. PDF indices are
        printed page minus one.
      statement: Proposition 8.10 gives the dimension bound for a finitary Nisnevich
        sheaf over any base ring satisfying cdh acyclicity, pro-cdh descent and
        the henselian nilpotent-relative degree-zero bound. Section 2.1 uses
        coherent presheaves in a stable presentable derived infinity-category
        and reflective sheafification. Section 3.3 specifies the qcqs
        abstract-blowup topology. Only the degreewise pro-cohomology convention
        in the first clause of footnote 14 is imported.
      hypotheses: Any commutative base ring R; coherent presheaf on qcqs R-schemes in
        the unbounded derived infinity-category of abelian groups, finitary and
        Nisnevich-local. All three displayed assumptions are required. The
        conclusion concerns finite-dimensional Noetherian R-schemes. The
        degreewise convention applies to every Noetherian abstract blowup
        square.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read Section 2.1, the opening of Section 3.3 through its topology
        and square-characterization paragraph, the full statements of Theorem
        8.2 and footnote 14, and Lemma 8.9 and Proposition 8.10 with the
        complete proof in the actual v1 PDF text. Checked globalization of the
        relative bound, reduced reduction, the Nisnevich spectral sequence,
        dimension induction and the modification/pro-cdh step. The proof
        foundations cited there remain imported, without reconstruction. Retain
        the previously recorded correction of the modification notation: the
        closure is in X1 and the Nisnevich pullback is over X1. Do not import
        the footnote inference from bounded-above degreewise vanishing to
        cartesianness in unbounded Pro(D(Z)). No other version or downstream
        motivic theorem is reviewed here. Current maintenance read the assigned
        consumer and its exact declared supplier interfaces; no fresh
        primary-source or page-image reading, reconstruction or independent
        acceptance is claimed for this reference."
    - title: The Stacks Project, Categories, Section 4.22, Essentially constant
        systems
      url: https://stacks.math.columbia.edu/tag/05PT
      locator: Definition 4.22.1(2), Remark 4.22.5 (05PX), and Example 4.22.6 (0G2W)
      statement: For cofiltered systems F and G, pro-morphisms are lim_j colim_i
        Hom(F(i),G(j)). For inverse sequences of abelian groups, being the zero
        pro-object means that every fixed stage receives a zero transition from
        some later stage.
      hypotheses: Ordinary categories and small cofiltered diagrams, with set-valued
        Hom in a chosen larger universe. Here the category is abelian groups and
        the diagrams are indexed by positive integers with transitions from
        larger to smaller indices.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the named definition, remark and example, including the
        displayed Hom formula and the description of sequence morphisms. The
        zero criterion is the value-zero specialization of Definition 4.22.1(2).
        No derived pro-category detection or general pro-category exactness
        theorem is imported. Current maintenance read the assigned consumer and
        its exact declared supplier interfaces; no fresh primary-source or
        page-image reading, reconstruction or independent acceptance is claimed
        for this reference."
    - title: The Stacks Project, More on Morphisms, Section 37.5, Infinitesimal
        neighbourhoods
      url: https://stacks.math.columbia.edu/tag/05YW
      locator: Opening construction and Definition 37.5.1; Lemma 37.5.2 statement and
        displayed first-order proof
      statement: For an immersion Z into X, its nth infinitesimal neighbourhood is cut
        out in an open neighbourhood by the (n+1)st power of the defining
        quasi-coherent ideal. For a closed immersion the open neighbourhood is X
        itself. Thus rY is cut out by the rth ideal power, with r=1 giving Y.
      hypotheses: An immersion of schemes and an open neighbourhood in which it is
        closed; in this application a closed immersion Y into a Noetherian
        scheme X, and integer r at least 1. The pulled-back neighbourhood is the
        scheme fibre product with X prime over X.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the opening construction, Definition 37.5.1, and Lemma 37.5.2
        with its displayed first-order proof. Use only the ideal-power
        construction, specialized to a closed immersion. The source proves the
        first-order universal property and states the higher-order version; no
        unprinted higher-order proof or formal-completion result is claimed.
        Current maintenance read the assigned consumer and its exact declared
        supplier interfaces; no fresh primary-source or page-image reading,
        reconstruction or independent acceptance is claimed for this reference."
external_input: true
---

PDF p. 4: Motivic dimension vanishing

## Prerequisites

- [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology)
- [thm-adjudicate-60ab133bec72-enhanced-mapping-input](item-thm-adjudicate-60ab133bec72-enhanced-mapping-input)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-canonical-t-structure-on-a-derived-category](https://alphabetamath.cc/item/def-canonical-t-structure-on-a-derived-category)
- [math:def-algebra-over-a-commutative-ring](https://alphabetamath.cc/item/def-algebra-over-a-commutative-ring)
- [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module)
- [math:def-local-ring](https://alphabetamath.cc/item/def-local-ring)
- [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring)
- [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence)
- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)
- [math:def-affine-morphism-schemes](https://alphabetamath.cc/item/def-affine-morphism-schemes)
- [math:def-filtered-category-and-filtered-colimit](https://alphabetamath.cc/item/def-filtered-category-and-filtered-colimit)
- [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)
- [math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)
- [math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism)
- [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)
- [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)
- [lem-adjudicate-7110d94407d7-noetherian-schemes-qcqs](item-lem-adjudicate-7110d94407d7-noetherian-schemes-qcqs)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes, arXiv:2309.08463v1 · Section 2.1, printed p. 11; Section 3.3, p. 14, abstract blowup square (3.4) and cdh topology; Theorem 8.2 and footnote 14, p. 54; Lemma 8.9 and Proposition 8.10 with its complete proof, pp. 56–57. PDF indices are printed page minus one. `](https://arxiv.org/pdf/2309.08463v1)
- [` The Stacks Project, Categories, Section 4.22, Essentially constant systems · Definition 4.22.1(2), Remark 4.22.5 (05PX), and Example 4.22.6 (0G2W) `](https://stacks.math.columbia.edu/tag/05PT)
- [` The Stacks Project, More on Morphisms, Section 37.5, Infinitesimal neighbourhoods · Opening construction and Definition 37.5.1; Lemma 37.5.2 statement and displayed first-order proof `](https://stacks.math.columbia.edu/tag/05YW)


## Statement
Assume the Axiom of Choice and fix compatible Grothendieck universes $U\in V\in W$ with $\omega\in U$, containing the base ring and scheme data under consideration. Their existence is a separate size assumption. Use the supplied enhanced target and site constructions in these compatible bounds. Let $R$ be a commutative base ring, and let $\mathrm{Sch}^{\mathrm{qcqs}}_R$ denote the category of quasi-compact, quasi-separated schemes over $\operatorname{Spec}R$. Write $\mathcal D(\mathbb Z)$ for the unbounded derived infinity-category of cochain complexes of abelian groups; its homotopy category is the ordinary $D(\mathbb Z)$. All functors, fibers, limits and colimits below are coherent in $\mathcal D(\mathbb Z)$, with the universe conventions of the stable derived interface. Write $\mathcal D(\mathbb Z)^{\leq n}=\{C:H^q(C)=0\text{ for all }q>n\}$, using the canonical cohomological convention. Let $W:(\mathrm{Sch}^{\mathrm{qcqs}}_R)^{op}\to\mathcal D(\mathbb Z)$ be a finitary Nisnevich sheaf, in the precise sense below. Assume:

1. $L_{\mathrm{cdh}}W\simeq0$.
2. $W$ satisfies degreewise pro-cdh descent on Noetherian $R$-schemes, as defined below.
3. For every Noetherian local henselian commutative $R$-algebra $A$ and every nilpotent ideal $I\subseteq A$, $\operatorname{fib}(W(A)\to W(A/I))\in\mathcal D(\mathbb Z)^{\leq0}$, where $W(A)=W(\operatorname{Spec}A)$.

Then $W(X)\in\mathcal D(\mathbb Z)^{\leq\dim X}$ for every Noetherian $R$-scheme $X$ of finite dimension. Here $\dim X$ is the supremum of lengths $m$ of strict chains $Z_0\subsetneq\cdots\subsetneq Z_m$ of nonempty irreducible closed subsets of $X$. For the empty scheme take $\dim\varnothing=-\infty$ and $\mathcal D^{\leq-\infty}=\{0\}$; its conclusion is $W(\varnothing)\simeq0$.

## Source contract
[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) supplies Choice, and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) supplies the closure convention for the separately assumed containing universes. Retain the enhanced-mapping supplier's compatible size hierarchy. Choice is used when applying the Noetherian-to-qcqs bridge in [F7], not asserted as a geometric restriction in the literature's criterion. All schemes and diagrams considered lie within the fixed bounds.

**Given:** All three assumptions and the stated coherent sheaf, continuity and scheme hypotheses.

**Goal:** Import the established geometric dimension criterion with its exact input class, preserving its arbitrary-base-ring scope and dimension bound.

[F1] The first source record imports EM Proposition 8.10, including its proof, under the conventions of EM Sections 2.1 and 3.3 and the degreewise part of Theorem 8.2 footnote 14. The second source supplies ordinary pro-abelian groups; the third supplies ideal-power neighbourhoods. These are precise external inputs, not local reconstructions of their foundations.

[F2] Coherent diagrams, mapping-space universal properties of limits and colimits, stable fibers, and the derived infinity-category with its ordinary homotopy category use [thm-adjudicate-60ab133bec72-enhanced-mapping-input](item-thm-adjudicate-60ab133bec72-enhanced-mapping-input). Cohomology on that ordinary category is supplied by [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology), and the upper-degree convention by [math:def-canonical-t-structure-on-a-derived-category](https://alphabetamath.cc/item/def-canonical-t-structure-on-a-derived-category). The stable presentable target and reflective sheafification conventions are imported from EM Section 2.1 in the first source record.

[F3] Scheme objects over the base, qcqs objects and Noetherian schemes use [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) and [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme). Irreducibility in the inline dimension definition uses [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset). Affine evaluation and its induced restriction maps use [math:thm-affine-scheme-ring-anti-equivalence](https://alphabetamath.cc/item/thm-affine-scheme-ring-anti-equivalence).

[F4] The commutative algebra, Noetherian ring, local ring and quotient conventions use [math:def-algebra-over-a-commutative-ring](https://alphabetamath.cc/item/def-algebra-over-a-commutative-ring), [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module), [math:def-local-ring](https://alphabetamath.cc/item/def-local-ring) and [math:def-quotient-ring](https://alphabetamath.cc/item/def-quotient-ring). An ideal $I$ is nilpotent if every product of some fixed number of its elements is zero. Here henselian means that every simple root of a monic polynomial over the residue field lifts uniquely to a root over the local ring; this is the local henselian convention in the imported criterion.

[F5] Nisnevich covering families and covering sieves use [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface). Filtered indexing categories use [math:def-filtered-category-and-filtered-colimit](https://alphabetamath.cc/item/def-filtered-category-and-filtered-colimit); cofiltered means that the opposite category is filtered. Affine transition morphisms use [math:def-affine-morphism-schemes](https://alphabetamath.cc/item/def-affine-morphism-schemes).

[F6] The blowup-square formulation uses proper morphisms, locally finite presentation, quasi-compact and quasi-separated morphisms, and closed immersions as in [math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism), [math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism), [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism) and [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes). Finitely presented means locally of finite presentation, quasi-compact and quasi-separated. The fibre product has its universal property from [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property) and exists by [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist).

[F7] Under [A1], [lem-adjudicate-7110d94407d7-noetherian-schemes-qcqs](item-lem-adjudicate-7110d94407d7-noetherian-schemes-qcqs) proves that every Noetherian scheme is qcqs, including the empty scheme, and that every open is quasi-compact. Therefore each Noetherian $R$-scheme $X$ in the conclusion belongs to the functor's qcqs domain, via its given structure morphism. Under Choice, [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact) makes every affine scheme quasi-compact, and [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated) makes it quasi-separated. Thus the affine spectra defining $W(A)$ and $W(A/I)$ in assumption 3 are also in the domain, with their induced $R$-structure maps supplied by the affine anti-equivalence in [F3]. In assumption 2 the schemes are expressly Noetherian. Thus the imported criterion is applied to defined evaluations, over the same arbitrary base ring. This domain check uses no field, equicharacteristic, regularity or separatedness assumption.

## External input
Import [F1] with exactly the source hypotheses and reading limits. The ambient derived category is the stable presentable infinity-category of EM Section 2.1, rather than an ordinary functor into its homotopy category. A fiber is the derived pullback $\operatorname{fib}(B\to C)=B\times_C0$. Limits and colimits have the mapping-space universal properties of [F2], and are taken in this target; they are not termwise ordinary limits of complexes.

Finitary means that for every small cofiltered diagram $(X_i)_{i\in J}$ of qcqs $R$-schemes with affine transition maps and inverse limit $X$, the canonical map $\operatorname{colim}_{i\in J^{op}}W(X_i)\to W(X)$ is an equivalence. Nisnevich descent means that for every Nisnevich covering sieve $S$ of $X$, restriction induces an equivalence $W(X)\to\lim_{(U\to X)\in S^{op}}W(U)$. Thus this is derived descent for the étale completely decomposed families of [F5], including the empty cover and $W(\varnothing)\simeq0$.

On the entire category $\mathrm{Sch}^{\mathrm{qcqs}}_R$, the cdh topology is generated by Nisnevich covers and the families $\{Y\to X,X'\to X\}$ of abstract blowup squares. Here $p:X'\to X$ is proper and finitely presented, $i:Y\hookrightarrow X$ is a finitely presented closed immersion, $Y'=X'\times_XY$, and $p$ restricts to an isomorphism $X'\setminus Y'\simeq X\setminus Y$. This is the qcqs convention of EM Section 3.3, used over the arbitrary base ring of Proposition 8.10; it does not restrict to separated finite-type schemes over a field. For this topology, a cdh sheaf satisfies the same covering-sieve descent condition. The functor $L_{\mathrm{cdh}}$ is the reflection from coherent presheaves to these sheaves: for every cdh sheaf $V$, precomposition with $W\to L_{\mathrm{cdh}}W$ gives $\operatorname{Map}(L_{\mathrm{cdh}}W,V)\simeq\operatorname{Map}(W,V)$. Its existence here is part of the imported sheafification interface, with no replacement by ordinary section evaluation.

For an abstract blowup square of Noetherian $R$-schemes and $r\geq1$, let $rY$ be the closed subscheme cut out by the $r$th power of the ideal defining $Y$, and put $rY'=X'\times_XrY$. The ideal-power construction is the third source input; locally $Y=\operatorname{Spec}(B/J)$ in $\operatorname{Spec}B$, it gives $rY=\operatorname{Spec}(B/J^r)$. These are the $(r-1)$st neighbourhoods of EM footnote 14. Restriction as $r$ increases makes the levelwise total fibers into an inverse sequence, where
$$T_r=\operatorname{fib}\bigl(W(X)\longrightarrow W(X')\times_{W(rY')}W(rY)\bigr).$$
The map and the pullback use the coherent square obtained by applying $W$ to the scheme square. This formula defines the levelwise total fiber; it makes no assertion about a pullback in an unbounded pro-derived category.

For clarity, an ordinary pro-abelian group is a small cofiltered diagram of abelian groups, with morphisms specified in the second source by
$$\operatorname{Hom}_{\operatorname{Pro}(\operatorname{Ab})}(G,H)=\lim_b\operatorname{colim}_a\operatorname{Hom}_{\operatorname{Ab}}(G_a,H_b).$$
For an inverse sequence, being zero means that for each fixed stage $r$ there is an $s\geq r$ for which the transition to stage $r$ is the zero homomorphism. Degreewise pro-cdh descent means precisely
$$\text{for every }q\in\mathbb Z\text{ and every }r\geq1,\text{ there exists }s\geq r\text{ such that }H^q(T_s)\longrightarrow H^q(T_r)\text{ is zero}.$$
This is the degreewise convention of the first clause of EM Theorem 8.2 footnote 14. No equivalence with cartesianness in unbounded $\operatorname{Pro}(\mathcal D(\mathbb Z))$ is imported. In the modification step of Proposition 8.10 this degreewise hypothesis suffices: for fixed $n>\dim X$, induction annihilates the cohomology of both lower-dimensional thickening systems in the relevant degrees, and degreewise pro exactness yields the required isomorphism on degree $n$ of the two constant top terms. The sheaf, nilpotent-relative and descent conditions above are hypotheses of the imported criterion, not claims about an arbitrary presheaf.
