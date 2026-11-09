---
title: Finite-rank detection of stable pointed motivic classes
status: draft
research_item: lem-adjudicate-00232ac8c49e-stable-universal-class-detection
dependency_level: 18
---

PDF p. 17: Corollary 6.9; stable universal Chern and support comparison prerequisite

## Prerequisites

- [thm-repair-72891dd58cd0-universal-chern-derived-limit-input](item-thm-repair-72891dd58cd0-universal-chern-derived-limit-input)
- [lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag)
- [lem-adjudicate-6e70d30b9793-em-picard-square](item-lem-adjudicate-6e70d30b9793-em-picard-square)
- [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed site and universe bounds. Let $k$ be a perfect field, let $B_n=BGL_{n,k}$ be pointed by the trivial bundle, and use the stabilization $E\mapsto E\oplus\mathcal O$. Let $B_\infty=\operatorname*{colim}_{n\geq1}B_n$ in pointed local sheaves on the smooth finite-type $k$-site. For $i\geq1$, let $Y_i=\Omega^\infty(\mathbb Z(i)_{\rm cl}[2i])$ be the derived target for classical integral motivic cohomology. Then restriction is injective:
$$[B_\infty,Y_i]_*\longrightarrow\varprojlim_n[B_n,Y_i]_*.$$
Here brackets denote homotopy classes of maps in that sheaf category, not maps of groups of bundle classes. The assertion also holds for the actual EM target through the supplied natural smooth-field equivalence. Consequently, two existing stable pointed universal maps which agree at every finite rank admit a homotopy as maps of sheaves. Restricting this one homotopy to a smooth base and then taking derived sections gives homotopies compatible with its restriction arrows. Both Zariski and Nisnevich sites are permitted, with the same derived targets.

## Statement references

[lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag)

[lem-adjudicate-6e70d30b9793-em-picard-square](item-lem-adjudicate-6e70d30b9793-em-picard-square)

[thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)

[Annala–Iwasa, April 14, 2025, Corollary 4.4.7](https://ryomei.com/papers/MotSp.pdf)

[Stacks Project, Lemma 15.88.5](https://stacks.math.columbia.edu/tag/0919)

## Facts & Assumptions

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the supplied universes. Choice is inherited from the coefficient constructions and permits the recursive choices in step 3.1.

[F1] The supplied integral field zigzag and actual Picard square identify the classical and actual EM coefficient targets as natural derived targets on the smooth site. They retain products, the unit and the actual orientation. The universal-Chern supplier supplies the existing stable pointed maps and their common source model; no uniqueness of their coherent stabilization is assumed here. [lem-adjudicate-6e70d30b9793-field-unit-zigzag](item-lem-adjudicate-6e70d30b9793-field-unit-zigzag) [lem-adjudicate-6e70d30b9793-em-picard-square](item-lem-adjudicate-6e70d30b9793-em-picard-square) [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)

[F2] [thm-repair-72891dd58cd0-universal-chern-derived-limit-input](item-thm-repair-72891dd58cd0-universal-chern-derived-limit-input) supplies the cohomology computation of Annala–Iwasa, April 14, 2025, Corollary 4.4.7, with its hypotheses and reading limits in the source record. Applied to classical integral $H\mathbb Z$, it gives $H^{*,*}(B_n)=H^{*,*}(k)\lbrack\!\lbrack c_1,\ldots,c_n\rbrack\!\rbrack$, with the actual universal coefficients. Its Lemma 4.4.3 supplies Whitney. The source's qcqs smooth convention includes nonseparated schemes. This is an established external computation, not a local reconstruction.

[F3] The stable interface supplies derived mapping spectra, coherent limits and products, and homotopy exactness of a fiber sequence. For the countable tower of derived abelian mapping complexes used below, [thm-repair-72891dd58cd0-universal-chern-derived-limit-input](item-thm-repair-72891dd58cd0-universal-chern-derived-limit-input) supplies Stacks Project Definition 13.34.1 and Lemma 15.88.5 supply the product-difference triangle and its exact sequence; Lemma 15.88.1 describes its $R^1\varprojlim$ term. [def-stable-spectra-interface](item-def-stable-spectra-interface) [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness)

## Provenance of application

The universal Chern computation and countable derived-limit results are imported through [thm-repair-72891dd58cd0-universal-chern-derived-limit-input](item-thm-repair-72891dd58cd0-universal-chern-derived-limit-input). The detection statement and numbered application argument are locally authored (ai-generated); they do not reconstruct the imported proofs. The cited literature is not asserted to state the detection lemma.

## Proof

**Given:** $k$, $i\geq1$, the pointed universal stacks and the derived coefficient targets on the fixed smooth site.

**Goal:** Remove the possible inverse-limit obstruction to comparing two already constructed stable maps.

1.1 Zariski local sheafification of the simplicial classifying presheaf $BGL_n$ is $\mathrm{Vect}_n$: a vector bundle is Zariski locally trivial and its automorphisms are the invertible matrices. Thus [F2] computes the mapping cohomology of our actual source. Under stabilization, Whitney gives $c_j\mapsto c_j$ for $j\leq n$ and $c_{n+1}\mapsto0$. Consequently restriction on cohomology is evaluation at $c_{n+1}=0$, which is surjective in every fixed bidegree: lift a series by the identical expression in the first $n$ variables. Evaluation at the trivial bundle is its constant coefficient. Removing that split constant summand shows that restriction on the reduced groups $\widetilde H^{2i-1,i}(B_{n+1})\to\widetilde H^{2i-1,i}(B_n)$ is also surjective. The classical coefficient target is Nisnevich local, so adjunction for sheafification computes the same mapping groups on the Nisnevich site. [F1, F2]

2.1 Let $T_n$ be the derived spectrum of pointed maps from $B_n$ to the coefficient spectrum $H(\mathbb Z(i)_{\rm cl}[2i])$; equivalently use reduced free abelian chains of $B_n$ and their derived Hom complex into $\mathbb Z(i)_{\rm cl}[2i]$. Then $\Omega^\infty T_n=\operatorname{Map}_*(B_n,Y_i)$ and $\pi_1T_n=\widetilde H^{2i-1,i}(B_n)$. The stabilized general-linear source of [F1] is this colimit: each simplex is a finite tuple of matrices and lies in some $GL_n$, so filtered colimits commute with the finite products in the nerve, and local sheafification preserves this colimit. The actual coherent colimit defining $B_\infty$ then gives $\operatorname{Map}_*(B_\infty,Y_i)\simeq\Omega^\infty\varprojlim_n T_n$. In this enhanced setting the product-difference triangle of [F3], or its derived-complex version, therefore gives the exact sequence $\prod_n\pi_1T_n\xrightarrow{1-s}\prod_n\pi_1T_n\to\pi_0\varprojlim_nT_n\to\prod_n\pi_0T_n$, where $s((a_n))_n=f_n(a_{n+1})$ for the restriction maps $f_n$. This uses genuine coherent mapping objects before taking homotopy classes. [F3, step 1.1]

3.1 The first arrow in step 2.1 is surjective. Given $(b_n)$, set $a_1=0$ and recursively choose $a_{n+1}$ with $f_n(a_{n+1})=a_n-b_n$, using the surjectivity in step 1.1 and [A1]. Then $(1-s)(a_n)=(b_n)$. Exactness now makes $\pi_0\varprojlim_nT_n\to\prod_n\pi_0T_n$ injective; its image lies in the compatible inverse limit. This proves the claimed injectivity and kills precisely the potential $R^1\varprojlim$ ambiguity, rather than assuming compatible finite-rank homotopies. [A1, F3, step 1.1, step 2.1]

4.1 Two existing stable maps with equal finite-rank restrictions consequently belong to the same component of $\operatorname{Map}_*(B_\infty,Y_i)$, so there is a pointed homotopy in the sheaf category itself. The splitting into the basepoint value and the reduced mapping object also shows that finite-rank equality of their unpointed coefficient classes suffices when both maps are pointed. Transport by the equivalence in [F1] proves the assertion for the EM target. A homotopy of sheaf maps restricts as a single natural transformation to the site over any smooth base, hence gives a homotopy of its entire restriction diagram after derived sections. This claims existence, not a contractible space of choices, and uses no affine-$K_0$ detection. [F1, step 2.1, step 3.1] ∎
