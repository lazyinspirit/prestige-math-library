---
title: External sequential simplicial Omega replacement
status: published
research_item: thm-author-e0b0bf18ed2b-simplicial-omega-replacement-input
dependency_level: 1
sources:
  references:
    - title: Mark Hovey, Spectra and symmetric spectra in general model categories
      url: https://arxiv.org/pdf/math/0004051
      locator: Definition 1.1 and Corollary 1.6, pp. 5–6 (sequential spectra and
        prolongation); Definition 3.7, p. 14 (tail); Definition 4.1 and
        following discussion, pp. 15–17; Definition 4.2 and Lemma 4.3, p. 17;
        Proposition 4.4, p. 18; Theorem 4.7 and Corollary 4.8, pp. 19–20;
        Theorem 4.9, p. 20
      statement: For circle suspension on pointed simplicial sets, the sequential
        colimit of iterates of sΩ on a level-Kan prespectrum is a level-Kan
        Omega-spectrum, and the natural map to it is a stable equivalence. The
        adjoint structure map of this colimit is an isomorphism; the transitions
        use R^mι, with ι_R=Rι.
      hypotheses: The §4 results require G left Quillen with right adjoint U, an
        almost finitely generated base, U preserving sequential colimits, and
        (for stable equivalence) sequential colimits preserving finite products.
        Proposition 4.4 additionally requires a level-fibrant input for its
        fibrancy conclusion. Here G=K∧(-), U=Ω and level-fibrant means level
        Kan. The separate model-structure supplier provides the exact
        pointed-simplicial stable model, so the general left proper cellular
        existence theorem is not being newly applied without its hypotheses.
      reading_limits: Inspected the listed construction, prolongation and shift
        definitions, the proof of Lemma 4.3, the statement and colimit proof of
        Proposition 4.4, and the statements and proofs of Corollary 4.8 and
        Theorem 4.9; inspected the statement and beginning of the proof of
        Theorem 4.7. The rest of the proof of Theorem 4.7, general localization
        theory and Appendix cellularity arguments are imported, not
        reconstructed. The pointed model and Quillen inputs are supplied
        separately; elementary finite-stage checks are stated below.
external_input: true
---

PDF p. 3: Filtered S1 spectra: stable enhancement prerequisites

## Prerequisites

- [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)
- [math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration)
- [math:def-model-category-and-quillen-adjunction](https://alphabetamath.cc/item/def-model-category-and-quillen-adjunction)
- [thm-adjudicate-0cc4fcf73566-pointed-simplicial-stable-model-input](item-thm-adjudicate-0cc4fcf73566-pointed-simplicial-stable-model-input)
- [math:def-filtered-category-and-filtered-colimit](https://alphabetamath.cc/item/def-filtered-category-and-filtered-colimit)
- [math:thm-filtered-colimits-commute-with-finite-limits-in-set](https://alphabetamath.cc/item/thm-filtered-colimits-commute-with-finite-limits-in-set)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [` Mark Hovey, Spectra and symmetric spectra in general model categories · Definition 1.1 and Corollary 1.6, pp. 5–6 (sequential spectra and prolongation); Definition 3.7, p. 14 (tail); Definition 4.1 and following discussion, pp. 15–17; Definition 4.2 and Lemma 4.3, p. 17; Proposition 4.4, p. 18; Theorem 4.7 and Corollary 4.8, pp. 19–20; Theorem 4.9, p. 20 `](https://arxiv.org/pdf/math/0004051)


## Statement
Assume ZFC. Let $K=\Delta[1]/\partial\Delta[1]$ and let $X$ be a sequential pointed simplicial prespectrum with sphere-first maps $K\wedge X_n\to X_{n+1}$, each $X_n$ a Kan complex. Kan means that every simplicial horn has a filler. Use the pointed smash product, simplicial mapping object and model structures specified by the pointed simplicial model input. Write $\Omega Z=\operatorname{Map}_*(K,Z)$ and $a_n:X_n\to\Omega X_{n+1}$ for the adjoints. The tail is $(sX)_n=X_{n+1}$. Define $R=s\Omega$ with $(RX)_n=\Omega X_{n+1}$ and adjoint structure maps $\Omega a_{n+1}$. On prespectrum maps set $(Rf)_n=\Omega f_{n+1}$. The maps $a_n$ form a natural prespectrum map $\iota_X:X\to RX$, with $\iota_{RX}=R\iota_X$. Define $QX=\operatorname{colim}_{m\geq0}R^mX$ using transitions $R^m\iota_X$; colimits are computed levelwise. Then $QX$ is level Kan, its adjoint structure maps are weak equivalences (indeed isomorphisms), $X\to QX$ is a stable equivalence, and
$$ (QX)_n=\operatorname{colim}_{m\geq0}\Omega^mX_{n+m}. $$
A stable equivalence is a weak equivalence in the sequential stable model structure specified by the pointed simplicial model input; level weak equivalences use the Kan model structure. All conclusions use the stated prolongation convention.

## Statement references

[thm-adjudicate-0cc4fcf73566-pointed-simplicial-stable-model-input](item-thm-adjudicate-0cc4fcf73566-pointed-simplicial-stable-model-input)

[math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)

[math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration)

[math:def-model-category-and-quillen-adjunction](https://alphabetamath.cc/item/def-model-category-and-quillen-adjunction)

[math:def-filtered-category-and-filtered-colimit](https://alphabetamath.cc/item/def-filtered-category-and-filtered-colimit)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions
**Given:** $K$ and the level-Kan sequential prespectrum $X$ in the Statement, working in ZFC.

**Goal:** Import the functorial Omega replacement with its exact sequential formula and conventions.

[F1] [thm-adjudicate-0cc4fcf73566-pointed-simplicial-stable-model-input](item-thm-adjudicate-0cc4fcf73566-pointed-simplicial-stable-model-input) supplies pointed constructions, the Kan and sequential stable model structures, boundary/horn generators, and the Quillen suspension adjunction. [math:def-model-category-and-quillen-adjunction](https://alphabetamath.cc/item/def-model-category-and-quillen-adjunction) fixes model terminology, and [math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration) fixes the level-Kan hypothesis. The generator domains and codomains are finite simplicial sets, meaning finitely many nondegenerate simplices.

[F2] [math:thm-filtered-colimits-commute-with-finite-limits-in-set](https://alphabetamath.cc/item/thm-filtered-colimits-commute-with-finite-limits-in-set) applies degreewise to simplicial sets, and [math:def-filtered-category-and-filtered-colimit](https://alphabetamath.cc/item/def-filtered-category-and-filtered-colimit) fixes the colimit convention. The sequence of nonnegative integers is a nonempty filtered index category.

[F3] Reference 0 imports Hovey's sequential construction and conclusions, with all §4 hypotheses as recorded in that reference. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is permitted in the imported model-structure existence and small-object arguments; the explicit $Q$ construction makes no additional selections of fillers.

## External input
Apply [F3] to the precise pointed simplicial model of [F1], with $G=K\wedge(-)$ and $U=\Omega$. The left Quillen hypothesis holds because the pushout-product axiom applied to $*\to K$ makes $K\wedge(-)$ preserve cofibrations and trivial cofibrations; its right adjoint is the supplied $\operatorname{Map}_*(K,-)$.

For the finiteness hypothesis of Definition 4.1, the boundary and horn generators in [F1] have finite domains and codomains. A map from a finite simplicial set is determined by finitely many nondegenerate simplices and finitely many compatibility conditions. In a sequential colimit these representatives and conditions occur at a common stage, and equalities between them hold at a common later stage. Thus these objects are finitely presented in Hovey's sequential sense. Taking the horn generators themselves as the detecting trivial cofibrations verifies the almost finitely generated condition, including its restriction to maps with fibrant codomain.

Sequential colimits preserve finite products by [F2], including the empty product. Also $\Omega$ preserves sequential colimits: its degree-$q$ simplices are pointed maps from $K\wedge\Delta[q]_+$, which has finitely many nondegenerate simplices: a nondegenerate simplex of $\Delta[1]\times\Delta[q]$ has degree at most $q+1$, since at every step at least one coordinate of its pair of monotone maps increases. There are finitely many such pairs in those dimensions, and adjoining or collapsing a basepoint preserves this finiteness. The same finite representative-and-relation argument applies, including the basepoint condition. A filtered colimit of Kan complexes is Kan because each finite horn map factors through a stage and obtains a filler there. These checks verify the remaining specialized finiteness and colimit hypotheses; they do not assert them for arbitrary topological spaces.

With these inputs, Lemma 4.3 identifies $\iota_{RX}$ with $R\iota_X$ for the stated prolongation; Proposition 4.4 gives the level-Kan Omega-spectrum and its isomorphic adjoint structure maps; Corollary 4.8 gives the stable equivalence $X\to QX$. The level formula is the objectwise colimit in Definition 4.2. Theorem 4.9 is consistent with this application: its preliminary projective fibrant replacement addresses arbitrary inputs, whereas $X$ here is already level fibrant. No symmetric-spectrum or model-category equivalence is asserted. The substantial replacement theorem is imported; the preceding checks only verify its application.
