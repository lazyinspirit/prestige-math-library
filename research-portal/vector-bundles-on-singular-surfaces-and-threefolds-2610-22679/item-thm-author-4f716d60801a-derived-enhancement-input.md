---
title: External input on derived enhancements
status: published
research_item: thm-author-4f716d60801a-derived-enhancement-input
dependency_level: 0
sources:
  references:
    - title: The Stacks Project, Injectives, Remark 19.13.3 (079Q)
      url: https://stacks.math.columbia.edu/tag/079Q
      locator: Remark 19.13.3, both paragraphs and the displayed Hom formula
      statement: Modules over a ring and module sheaves on a ringed site are
        Grothendieck abelian. Every complex has a K-injective resolution, and
        maps into such a resolution in the ordinary derived category are chain
        maps modulo homotopy.
      hypotheses: A ring or ringed site; its module category is taken relative to
        fixed universes. No quasi-coherence, boundedness or finiteness
        hypothesis is imposed.
      reading_limits: Read the complete displayed remark and its Hom formula during
        this repair. Its cited K-injective existence theorem and comparison
        lemma are imported through this remark, not independently reconstructed.
    - title: Jacob Lurie, Higher Algebra, September 18, 2017
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Remark 1.3.1.11 (p. 83); Remark 1.3.2.17 (p. 91); Definition 1.3.4.1
        (p. 108); Definition 1.3.5.8, Proposition 1.3.5.9 and Lemma 1.3.5.11
        (pp. 125–126); Propositions 1.3.5.13–15 (p. 127) and 1.3.5.21(1) (p.
        129); Proposition 1.1.4.1 (pp. 33–34); Lemma 1.2.4.6 (p. 69)
      statement: Derived localization is stable, presentable and reflective from the
        dg nerve of complexes. The fibrant model is K-injective and its homotopy
        maps are maps modulo homotopy. Cones are dg cofibers. Localization has
        the functor-category universal property. Stable functors preserving zero
        and cofiber sequences are exact; stable idempotent completeness is
        equivalent to that of the homotopy category.
      hypotheses: Grothendieck abelian categories for the unbounded derived
        construction; an additive category for the dg cone assertion; stable
        infinity-categories for the exactness and idempotent-completeness
        criteria. Use larger universes for categories of complexes. Reverse
        homological grading to the stated cochain convention.
      reading_limits: Inspected the listed statements, the displayed cone argument,
        the localization discussion and proofs of 1.3.5.13–15, and the proof of
        1.3.5.21(1). Read the displayed exactness criterion and
        idempotent-completeness equivalence. Model-category existence, dg-nerve
        foundations and the surrounding results cited by these passages are
        imported, not reconstructed. Page numbers are printed book pages.
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Definitions 4.4.5.2 and 4.4.5.4 (p. 304); Corollary 4.4.5.15,
        Proposition 4.4.5.17 and Remark 4.4.5.18 (p. 308); Definition 5.5.0.1
        (p. 456)
      statement: Coherent idempotents split if their idempotent diagrams have
        colimits; repeated application of the idempotent computes the retract
        sequentially. Presentability means accessibility and existence of small
        colimits.
      hypotheses: An infinity-category; for splitting, the specified colimits must
        exist. Presentable categories have them. Smallness is relative to the
        fixed base universe.
      reading_limits: Read the indicated definitions, the three splitting statements,
        and the displayed argument around Proposition 4.4.5.17. Accessibility
        theory and the foundations of coherent diagrams are imported. Page
        numbers are printed book pages.
---

PDF p. 16: Perfect complexes with support

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)
- [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)
- [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:def-exact-functor-between-abelian-categories](https://alphabetamath.cc/item/def-exact-functor-between-abelian-categories)
- [math:def-grothendieck-category](https://alphabetamath.cc/item/def-grothendieck-category)
- [math:def-idempotent-complete-category](https://alphabetamath.cc/item/def-idempotent-complete-category)
- [` The Stacks Project, Injectives, Remark 19.13.3 (079Q) · Remark 19.13.3, both paragraphs and the displayed Hom formula `](https://stacks.math.columbia.edu/tag/079Q)
- [` Jacob Lurie, Higher Algebra, September 18, 2017 · Remark 1.3.1.11 (p. 83); Remark 1.3.2.17 (p. 91); Definition 1.3.4.1 (p. 108); Definition 1.3.5.8, Proposition 1.3.5.9 and Lemma 1.3.5.11 (pp. 125–126); Propositions 1.3.5.13–15 (p. 127) and 1.3.5.21(1) (p. 129); Proposition 1.1.4.1 (pp. 33–34); Lemma 1.2.4.6 (p. 69) `](https://www.math.ias.edu/~lurie/papers/HA.pdf)
- [` Jacob Lurie, Higher Topos Theory · Definitions 4.4.5.2 and 4.4.5.4 (p. 304); Corollary 4.4.5.15, Proposition 4.4.5.17 and Remark 4.4.5.18 (p. 308); Definition 5.5.0.1 (p. 456) `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)


## Statement
Assume the Axiom of Choice and fix suitable Grothendieck universes containing $\omega$ and the scheme or ring data, using larger universes for their categories. Existence of these universes is a standing size assumption, not a consequence asserted from Choice. Smallness below is relative to the base universe. For a scheme $X$, let $\mathcal A_X=\operatorname{Mod}(\mathcal O_X)$ be the category of all Zariski module sheaves, and let $\mathcal D(X)$ be the infinity-localization of its unbounded cochain complexes at quasi-isomorphisms. For a unital ring $A$, let $\mathcal A_A=A\text{-}\operatorname{Mod}$ denote unital left modules and define $\mathcal D(A)$ in the same way. Write $\mathcal D(\mathcal A)$ for either construction.

A cochain map $f:C^\bullet\to E^\bullet$ is a quasi-isomorphism exactly when $H^n(f)$ is an isomorphism for every integer $n$, where $H^n(C)=\ker(d^n)/\operatorname{im}(d^{n-1})$. Cochain maps commute with the differentials; a cochain homotopy between $f$ and $g$ is a family $h^n:C^n\to E^{n-1}$ satisfying $f-g=d_Eh+hd_C$. A complex is acyclic if all its cohomology objects vanish. The chain convention of the published quasi-isomorphism definition is read by $C^\sharp_n=C^{-n}$ and $d^\sharp_n=d^{-n}$, so that $H_n(C^\sharp)=H^{-n}(C)$.

These derived enhancements are locally small stable presentable infinity-categories. Their homotopy categories are the ordinary unbounded derived categories $D(\mathcal A)=K(\mathcal A)[\mathrm{qis}^{-1}]$, where $K(\mathcal A)$ has cochain maps modulo cochain homotopy. Both the enhanced categories and their homotopy categories are idempotent complete. If $F:\mathcal A\to\mathcal B$ is an exact additive functor between any two of the above module or module-sheaf abelian categories, its termwise extension induces an exact infinity-functor $\mathcal D(F):\mathcal D(\mathcal A)\to\mathcal D(\mathcal B)$. For a cochain map $f:C\to E$, the cone $\operatorname{Cone}(f)^n=E^n\oplus C^{n+1}$, with $d(e,c)=(d_Ee+fc,-d_Cc)$ and its canonical nullhomotopy, represents the cofiber of $f$ in the localization. Thus its cofiber triangle ends in $C[1]$, with $C[1]^n=C^{n+1}$ and differential $-d_C$.

Here an infinity-category retains mapping spaces and coherent higher compositions; its homotopy category has the same objects and the components of those mapping spaces as morphisms. Localization means that precomposition identifies functors out of it with functors out of complexes that invert all quasi-isomorphisms, including their natural transformations. All limits and colimits are coherent ones. Stable means having a zero object and finite limits and colimits, with a square a pushout exactly when it is a pullback. A cofiber is the pushout $E\sqcup_C0$, including the defining square and nullhomotopy. Exact infinity-functors preserve finite limits and colimits. Presentable means accessible and admitting all small colimits; accessibility means admitting $\kappa$-filtered colimits and being generated under them by a small family of $\kappa$-compact objects for some regular cardinal $\kappa$, with $\kappa$-compactness meaning preservation of those colimits by the represented mapping-space functor. Ordinary idempotent completeness means that every $e^2=e$ splits as $e=ir$ with $ri=1$; enhanced idempotent completeness means that coherent idempotent diagrams split. These are the notions used by the imported criteria below.

## Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)

[math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules)

[math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)

[math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:def-exact-functor-between-abelian-categories](https://alphabetamath.cc/item/def-exact-functor-between-abelian-categories)

[math:def-grothendieck-category](https://alphabetamath.cc/item/def-grothendieck-category)

[math:def-idempotent-complete-category](https://alphabetamath.cc/item/def-idempotent-complete-category)

## Facts & Assumptions
**Given:** A scheme or ring, the abelian categories $\mathcal A,\mathcal B$ described in the Statement, and, when functoriality is used, an exact additive functor $F:\mathcal A\to\mathcal B$.

**Goal:** Establish the full ambient enhancement interface, including the actual induced functors and cone cofibers.

[A1] Choice and the stated universe assumptions are retained for the imported unbounded resolution and model-category constructions. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) specify these assumptions.

[F1] Stacks Remark 19.13.3 supplies the Grothendieck property for modules and module sheaves and the K-injective Hom comparison. Here K-injective means that every map from an acyclic complex, including every shift, is nullhomotopic. [math:def-grothendieck-category](https://alphabetamath.cc/item/def-grothendieck-category) supplies the Grothendieck-category terminology. The source is reference 0.

[F2] Higher Algebra supplies the unbounded stable presentable localization, its reflective dg-nerve model, and the K-injective and homotopy descriptions at the listed locators. It also supplies dg cone cofibers, the functor-category localization property, the stable exactness criterion, and the equivalence of enhanced and homotopy-category idempotent completeness. The source is reference 1.

[F3] Higher Topos Theory supplies the coherent-idempotent splitting criterion and its sequential realization, as well as the definition of presentability used here. The source is reference 2.

[F4] The published cochain, cohomology, quasi-isomorphism and ordinary derived-category conventions are [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category), [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex), [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism) and [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category). The latter supplies precisely the cochain cone convention in the Statement; its ordinary size caveat is discharged here by [F1]. An exact additive functor preserves kernels, cokernels and finite direct sums by [math:def-exact-functor-between-abelian-categories](https://alphabetamath.cc/item/def-exact-functor-between-abelian-categories). Ordinary idempotent completeness is [math:def-idempotent-complete-category](https://alphabetamath.cc/item/def-idempotent-complete-category).

## External input
Import [F1]–[F3] only under the hypotheses and reading limits of references 0–2. The scheme case uses its Zariski site of open sets, so the ringed-site assertion applies to all module sheaves without finiteness or quasi-coherence assumptions. The derived model, cofiber criterion and splitting criteria are imported established inputs. The application to the specified categories and exact functors is the local argument below; it does not claim reconstruction of those inputs. No identification of $D(\operatorname{QCoh}(X))$ with the quasi-coherent-cohomology subcategory is asserted for arbitrary $X$.

## Proof

Import [F1]–[F3] only under the hypotheses and reading limits of references 0–2. The scheme case uses its Zariski site of open sets, so the ringed-site assertion applies to all module sheaves without finiteness or quasi-coherence assumptions. The derived model, cofiber criterion and splitting criteria are imported established inputs. The application to the specified categories and exact functors is the local argument below; it does not claim reconstruction of those inputs. No identification of $D(\operatorname{QCoh}(X))$ with the quasi-coherent-cohomology subcategory is asserted for arbitrary $X$.


1.1 The two categories $\mathcal A$ are Grothendieck abelian by [F1], so [F2] applies under [A1] and gives their stable presentable enhancements and the specified infinity-localizations. The fibrant model in [F2] has K-injective representatives and maps in its homotopy category are cochain maps modulo homotopy. The Hom comparison in [F1] computes exactly these same maps in $D(\mathcal A)$; the quasi-isomorphic replacements are essentially surjective, identifying the homotopy categories and discharging their local-smallness caveat in [F4]. In the dg nerve the canonical cone square is a cofiber square by [F2]. Its reflective localization preserves this colimit: mapping its image into a local object is, by adjunction, the mapping space from the original square, hence the required pullback of mapping spaces. Consequently the localized cone square is still a cofiber square, with the cochain sign convention of [F4]. Presentability provides the small colimits required by [F3], so coherent idempotents split; [F2] then gives ordinary homotopy-category idempotent completeness. [A1, F1, F2, F3, F4]

2.1 Exactness of $F$ in [F4] gives $H^n(F(C))\cong F(H^n(C))$, since kernels, images and cokernels are preserved. Thus termwise $F$ preserves quasi-isomorphisms, and the functor-category universal property in [F2] produces the actual induced $\mathcal D(F)$ with its comparison to termwise $F$. Additivity preserves zero, the signed cone matrices, and the canonical cone nullhomotopy: termwise $F$ also sends graded homotopies and their equations to their images. It therefore sends the cone square for a cochain map to the cone square for its image. This verifies preservation of all cofiber sequences, not only those initially presented by cochain maps: for an arbitrary enhanced arrow $\alpha:M\to N$, choose a K-injective resolution $N\to I$ from [F1]. Using the homotopy-category identification in step 1.1, the composite $M\to I$ is represented by an actual cochain map $f:M\to I$. Equality of its homotopy class with that composite supplies a path in the enhanced mapping space, and hence an equivalence of arrow diagrams from $\alpha$ to $f$ with target comparison $N\simeq I$. Cofiber squares are invariant under this equivalence; so are their images under $\mathcal D(F)$. The cone-square verification therefore applies to every arrow. Together with preservation of zero and the stable exactness criterion in [F2], this proves that $\mathcal D(F)$ is exact. [F1, F2, F4, step 1.1] ∎
