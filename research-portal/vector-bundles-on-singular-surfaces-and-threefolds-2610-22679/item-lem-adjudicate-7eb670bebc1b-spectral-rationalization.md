---
title: Spectral rationalization and its homotopy groups
status: published
research_item: lem-adjudicate-7eb670bebc1b-spectral-rationalization
dependency_level: 5
sources:
  references:
    - title: Jacob Lurie, Higher Algebra (September 18, 2017)
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Proof of Proposition 1.4.3.6, printed p. 152 (PDF page index 151),
        paragraph proving that homotopy groups preserve products and filtered
        colimits
      statement: Integer-indexed homotopy-group functors on spectra preserve small
        filtered colimits.
      hypotheses: Spectra of spaces in Sp, any integer degree and a small filtered
        diagram, with the fixed compatible universes and ZFC foundations of the
        supplied stable-spectra interface. No connectivity assumption.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Current repair read the named proof paragraph through the primary
        PDF web text extraction, including its reduction by shifts to degree
        zero. Import this foundational colimit fact only. The telescope, its
        fraction calculation and its application below are local arguments; the
        foundational proof was not reconstructed. Current maintenance read the
        assigned consumer and its exact declared supplier interfaces; no fresh
        primary-source or page-image reading, reconstruction or independent
        acceptance is claimed for this reference."
    - title: Kerodon, Corollary 7.2.3.5 (02XX)
      url: https://kerodon.net/tag/02XX
      locator: Corollary 7.2.3.5, equivalence of conditions (1) and (2), and complete
        proof
      statement: For a diagram indexed by a weakly contractible simplicial set whose
        edges are equivalences, a limiting cone has equivalences as all its
        projection maps; conversely an all-equivalence cone is limiting.
      hypotheses: A weakly contractible small indexing simplicial set, an
        infinity-category target and a coherent cone. Use the implication from
        the limit-cone condition when every diagram edge is an equivalence.
      reading_limits: Read the complete corollary and displayed proof through primary
        web extraction in this maintenance pass. Its anodyne-replacement and
        cofinality foundations remain imported; no reconstruction or independent
        acceptance is claimed.
    - title: Kerodon, Contractibility (02L4)
      url: https://kerodon.net/tag/02L4
      locator: Example 3.2.4.2; Definition 3.2.4.16 and Remark 3.2.4.17
      statement: A small ordinary category with an initial or terminal object has
        contractible nerve, and a contractible simplicial set is weakly
        contractible.
      hypotheses: An ordinary category with an initial or terminal object. Apply to
        the inverse-sequence index with terminal object 1.
      reading_limits: Read these three entries through primary web extraction in this
        maintenance pass. The cited nerve-homotopy construction is imported;
        surrounding homotopy theory was not audited.
---

## Prerequisites

- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [lem-author-9f61e4df2141-split-spectral-cofiber](item-lem-author-9f61e4df2141-split-spectral-cofiber)
- [math:lem-rationalization-is-exact-and-commutes-with-singular-homology](https://alphabetamath.cc/item/lem-rationalization-is-exact-and-commutes-with-singular-homology)
- [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift](https://alphabetamath.cc/item/lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift)
- [` Jacob Lurie, Higher Algebra (September 18, 2017) · Proof of Proposition 1.4.3.6, printed p. 152 (PDF page index 151), paragraph proving that homotopy groups preserve products and filtered colimits `](https://www.math.ias.edu/~lurie/papers/HA.pdf)
- [` Kerodon, Corollary 7.2.3.5 (02XX) · Corollary 7.2.3.5, equivalence of conditions (1) and (2), and complete proof `](https://kerodon.net/tag/02XX)
- [` Kerodon, Contractibility (02L4) · Example 3.2.4.2; Definition 3.2.4.16 and Remark 3.2.4.17 `](https://kerodon.net/tag/02L4)


## Statement
Assume the Axiom of Choice and the fixed compatible universe conventions of the stable-spectra interface. For an integer $m>0$, let $m:E\to E$ denote the natural sum of $m$ identity maps, formed by the finite biproduct diagonal and fold. Define the rational sphere and rationalization by the coherent sequential colimit

$$\mathbb S_{\mathbb Q}:=\operatorname*{colim}(\mathbb S\xrightarrow{2}\mathbb S\xrightarrow{3}\mathbb S\xrightarrow{4}\cdots),\qquad E_{\mathbb Q}:=E\wedge\mathbb S_{\mathbb Q}.$$

The first stage supplies the natural map $E\to E_{\mathbb Q}$. This functor preserves small colimits and is exact: it preserves finite limits and finite colimits, including cofiber sequences and their connecting maps. For every integer $i$ there is a natural isomorphism

$$\pi_i(E_{\mathbb Q})\cong\pi_i(E)\otimes_{\mathbb Z}\mathbb Q,$$

carrying the unit map to $a\mapsto a\otimes1$ and spectral maps to their tensor products with $\mathbb Q$. Tensoring abelian groups with $\mathbb Q$ preserves exact sequences and their kernels, images and quotients. A spectrum $R$ is called rational when every positive-integer multiplication $R\to R$ is an equivalence. The spectrum $E_{\mathbb Q}$ is rational, and restriction along the unit induces an equivalence of mapping spaces $\operatorname{Map}(E_{\mathbb Q},R)\simeq\operatorname{Map}(E,R)$ for every rational $R$. Thus this construction has the usual rational-localization meaning, including for nonconnective spectra.

## Statement references

[def-stable-spectra-interface](item-def-stable-spectra-interface)

[lem-author-9f61e4df2141-split-spectral-cofiber](item-lem-author-9f61e4df2141-split-spectral-cofiber)

[math:lem-rationalization-is-exact-and-commutes-with-singular-homology](https://alphabetamath.cc/item/lem-rationalization-is-exact-and-commutes-with-singular-homology)

[math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift](https://alphabetamath.cc/item/lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift)

## External input
Reference 0 imports preservation of small filtered colimits by every integer spectral homotopy-group functor. It applies to the displayed countable sequence without any connectivity bound. References 1 and 2 supply the precise contractible-index limit facts in [F5], used only for the mapping-space localization property. The rationalization construction and its consequences are locally proved below.

## Facts & Assumptions
**Given:** Spectra in the supplied stable enhancement, its sphere unit, fixed universes and the Axiom of Choice.

**Goal:** Construct rationalization, identify its homotopy groups and prove exactness and the localization property.

[F1] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies coherent small colimits and mapping spaces, the sphere, abelian homotopy groups, their detection of equivalences, and separately colimit-preserving and exact smash. [lem-author-9f61e4df2141-split-spectral-cofiber](item-lem-author-9f61e4df2141-split-spectral-cofiber) supplies the finite coproduct/product identification. Consequently the finite diagonal and fold define natural integer multiples of the identity; they act by repeated addition on homotopy groups.

[F2] Reference 0 in External input supplies the natural comparison between the homotopy groups of a filtered spectral colimit and the filtered colimit of its homotopy groups. Here filtered means nonempty, with a common target for each pair of objects and with every pair of parallel arrows equalized by a further arrow. The sequential index has objects $n\geq1$ and one arrow $n\to k$ when $n\leq k$: it is small and nonempty, a pair has upper bound its maximum, and parallel arrows already coincide.

[F3] [math:lem-rationalization-is-exact-and-commutes-with-singular-homology](https://alphabetamath.cc/item/lem-rationalization-is-exact-and-commutes-with-singular-homology) identifies $A\otimes_{\mathbb Z}\mathbb Q$ with positive-integer fractions $a/s$. Equality is $a/s=b/t$ when a positive integer kills $ta-sb$, and every element is such a fraction. It also supplies exactness of this group rationalization. [math:def-tensor-product-of-modules-by-generators-and-relations](https://alphabetamath.cc/item/def-tensor-product-of-modules-by-generators-and-relations) supplies the tensor notation.

[F4] [math:lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift](https://alphabetamath.cc/item/lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift) supplies the following presentation, with no injectivity assumption on the transition maps. For a sequence $A_1\xrightarrow{u_1}A_2\xrightarrow{u_2}\cdots$, let $D=\bigoplus_{r\geq1}A_r$ be the abelian group of tuples $(a_r)$ having only finitely many nonzero coordinates, with coordinatewise addition. Write $\iota_r:A_r\to D$ for the coordinate inclusion and define $s\iota_r=\iota_{r+1}u_r$. Then the quotient $C=D/\operatorname{im}(1-s)$, whose elements are cosets modulo the subgroup of elements $y-sy$, is the group colimit, with stage maps $a\mapsto[\iota_r(a)]$. Write $u_{rN}$ for the composite transition map from stage $r$ to stage $N\geq r$, with $u_{rr}=1$. The finite-stage and eventual-equality properties used below are derived from this presentation in step 2.1.

[F5] Reference 1 supplies the limit-cone criterion for an equivalence-valued diagram indexed by a weakly contractible simplicial set. Reference 2 supplies weak contractibility of the nerve of a small ordinary category with a terminal object. Apply these to the inverse-sequence category with objects $n\geq1$ and an arrow $n\to k$ when $n\geq k$; its terminal object is $1$. Thus every projection of a limiting cone over such an all-equivalence diagram is an equivalence. These are coherent limit statements, not assertions about limits in the homotopy category.

[A1] Retain [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) in the ZFC and size assumptions of [F1], [F2] and [F3]. No independent family of choices of representatives, denominators or inverse maps is used.

## Proof
1.1 The small colimit in the statement exists by [F1] under [A1]. Smash commutes with that colimit, and smashing the finite diagonal and fold with $E$ preserves their biproduct description. Hence $E_{\mathbb Q}$ is naturally the colimit of $E\xrightarrow{2}E\xrightarrow{3}E\xrightarrow{4}\cdots$. Smash with a fixed spectrum preserves small colimits and is exact by [F1], proving the asserted functoriality and exactness. For $A=\pi_iE$, [F2] now identifies $\pi_i(E_{\mathbb Q})$ with the group colimit of $A\xrightarrow{2}A\xrightarrow{3}A\xrightarrow{4}\cdots$, with the same transition maps by [F1]. [A1, F1, F2, given, construct]

2.1 By [F4], use the presentation $C=D/\operatorname{im}(1-s)$ for the group colimit in step 1.1. Its relations $[\iota_r(a)]=[\iota_{r+1}(u_r a)]$ move every finite sum to a single common later stage, so every class has a finite-stage representative. If $a\in A_i$ and $b\in A_j$ have equal classes, write $\iota_i(a)-\iota_j(b)=(1-s)y$ with $y\in D$. Choose $N$ greater than $i$, $j$ and all nonzero coordinate indices of $y$. The homomorphism $\bigoplus_{r=1}^{N}A_r\to A_N$ sending coordinate $r$ by $u_{rN}$ kills $(1-s)y$: for each coordinate of $y$, its two terms cancel because $u_{rN}=u_{r+1,N}u_r$. Thus $u_{iN}a=u_{jN}b$. Conversely, equality at a common stage gives equal classes by those relations. This proves eventual equality without injective transition maps. Number the copies of $A$ starting at $n=1$. Send $a$ in copy $n$ to $a/n!$ in the fraction group of [F3]. These homomorphisms are compatible, since $(n+1)a/(n+1)!=a/n!$. They are jointly onto: for $a/s$ take $n\geq s$, so $s$ divides $n!$, and use $(n!/s)a$ in copy $n$. If $a/n!=0$, then $ka=0$ for some positive $k$ by [F3]; choose $N\geq nk$ so $k$ divides $N!/n!$. The image of $a$ in copy $N$ is zero, so its colimit class is zero. This proves the claimed isomorphism. It is natural because both formulas commute with homomorphisms, and at copy 1 the unit is $a\mapsto a/1$. Exactness in [F3] also preserves kernels, images and quotients, by applying it to the associated short exact sequences. Positive multiplication on fractions has inverse $a/s\mapsto a/(ms)$, so [F1]'s equivalence detection makes $E_{\mathbb Q}$ rational. Finally, for rational $R$, mapping the colimit of step 1.1 into $R$ is the inverse limit of the spaces $\operatorname{Map}(E,R)$ with transition maps given by precomposition with positive multiplication. Naturality of multiplication identifies this with postcomposition by the corresponding equivalences of $R$. All transition maps are therefore equivalences. The inverse-sequence index in [F5] is small in the stipulated universes and has terminal object $1$, so its nerve is weakly contractible. The mapping-colimit universal property gives its coherent limiting cone. Applying the limit-cone direction of [F5] shows that its projection to the first term is an equivalence. The evaluation map is precisely restriction along $E\to E_{\mathbb Q}$. This proves the localization assertion and finishes the proof. [F1, F2, F3, F4, F5, step 1.1, construct, algebra] ∎
