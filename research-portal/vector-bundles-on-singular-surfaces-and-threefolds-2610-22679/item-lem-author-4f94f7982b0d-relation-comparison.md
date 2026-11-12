---
title: The source Chern classes are the supplied projective-relation classes
status: published
research_item: lem-author-4f94f7982b0d-relation-comparison
dependency_level: 20
sources:
  references:
    - title: Annala-Iwasa, Motivic spectra and universality of K-theory, author PDF
        dated April 14, 2025
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Definition 4.4.1 and Lemma 4.4.3(ii), including the full proof of Lemma
        4.4.3, printed pp. 30–31; geometric conventions §§2.1.1–2.1.5, p. 14;
        linear orientation §§3.1.3–3.1.5, pp. 21–22; bundle PBF Lemma 3.2.3, p.
        23.
      statement: Definition 4.4.1 defines unique Chern coefficients for a bundle of
        positive constant rank by the line-quotient projective relation, with
        zeroth coefficient one, and defines their total polynomial. Lemma
        4.4.3(ii) gives the product of the linear factors of the orientation
        classes for a subbundle filtration with line quotients. We use its
        one-step line-bundle case. The rank-zero polynomial and zero
        coefficients above rank are local conventions in this item.
      hypotheses: A qcqs derived base S and compatible size universes; a linearly
        oriented motivic ring spectrum satisfying the class-power projective
        bundle formula. The filtered formula also requires a
        homotopy-commutative ring spectrum, a smooth qcqs S-scheme Y, and a
        filtration with line quotients. Here the supplied EM model and
        orientation discharge these hypotheses for the stated field and
        classical qcqs base; no A1-invariance is assumed.
      reading_limits: Read the cached author PDF dated 14 April 2025, its title page,
        p. 14, pp. 21–23, Definition 4.4.1 and Lemma 4.4.3 with its full proof
        on pp. 30–31; visually inspected pp. 14, 30 and 31. Opened the live
        author PDF and checked the definition and lemma passages. The source
        definition assumes positive rank. The geometric splitting and AI22 input
        to the filtered formula are imported through the declared supplier, not
        reconstructed. The model, orientation and coefficient uniqueness are
        used on their inspected interfaces; no independent audit of their
        upstream spectrum constructions is claimed.
      source_sha256: ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-4f94f7982b0d-em-p1-model](item-lem-author-4f94f7982b0d-em-p1-model)
- [lem-author-4f94f7982b0d-actual-orientation](item-lem-author-4f94f7982b0d-actual-orientation)
- [thm-author-4f94f7982b0d-non-a1-whitney-input](item-thm-author-4f94f7982b0d-non-a1-whitney-input)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [lem-chern-relation-uniqueness](item-lem-chern-relation-uniqueness)
- [` Annala-Iwasa, Motivic spectra and universality of K-theory, author PDF dated April 14, 2025 · Definition 4.4.1 and Lemma 4.4.3(ii), including the full proof of Lemma 4.4.3, printed pp. 30–31; geometric conventions §§2.1.1–2.1.5, p. 14; linear orientation §§3.1.3–3.1.5, pp. 21–22; bundle PBF Lemma 3.2.3, p. 23. `](https://ryomei.com/papers/MotSp.pdf)


## Statement
Assume the Axiom of Choice and the fixed site-size and universe bounds of the supplied motivic constructions. Let $k$ be a field, $S$ a qcqs $k$-scheme, $Y$ a smooth qcqs $S$-scheme, and $V$ a finite locally free sheaf of constant rank $r\geq0$ on $Y$. Use the supplied non-$\mathbb A^1$ EM model $\mathcal E_S$ with its actual additive orientation and natural diagonal identifications $\mathcal E_S^{2i,i}(Y)\cong H^{2i,i}_{\mathrm{mot}}(Y,\mathbb Z)$ for $i\geq0$.

For $r>0$ the coefficients of Annala–Iwasa Definition 4.4.1 agree under these identifications with the supplied projective-relation coefficients $c_i(V)$. Extend the source-side polynomial by zero coefficients above rank and, for the zero bundle, by $\widetilde c_t(0)=1$. With these explicit local conventions the agreement holds for every $i\geq0$ and every constant rank, including zero. Definition 4.4.1 itself starts at positive rank. For a line the first coefficient is the original additive EM orientation and all higher coefficients are zero.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated site-size and universe bounds. This supplies the foundational hypotheses of the model and Chern-coefficient constructions invoked in steps 1.1 and 2.1; no additional bundle or affine-torsor choices are made here.

[F1] [thm-author-4f94f7982b0d-non-a1-whitney-input](item-thm-author-4f94f7982b0d-non-a1-whitney-input) specifies the source quotient-projective relation and the filtered formula for line quotients, including the one-step filtration of a line bundle. [lem-author-4f94f7982b0d-em-p1-model](item-lem-author-4f94f7982b0d-em-p1-model) and [lem-author-4f94f7982b0d-actual-orientation](item-lem-author-4f94f7982b0d-actual-orientation) supply its homotopy-commutative model, actual linear orientation and projective bundle formula, and identify its groups, products and actual first class.

[F2] [def-motivic-chern-classes](item-def-motivic-chern-classes) and [lem-chern-relation-uniqueness](item-lem-chern-relation-uniqueness) give the unique coefficients of the supplied quotient-projective relation, including rank-zero and above-rank conventions. The motivic Chern definition uses the supplied additive orientation on line bundles; by [F1] this is the actual EM first class on the model.

## Proof
**Given:** $k,S,Y,V$, the Axiom of Choice and the stated bounds, and the explicit source-side extensions in the statement.

**Goal:** Identify the actual coefficients and signs.

1.1 The model and orientation in [F1] satisfy the source hypotheses over the stated qcqs base, regarded as a classical derived scheme, and on the smooth qcqs $S$-scheme $Y$. For $r>0$ the source relation is $\sum_{j=0}^r(-1)^j\xi^j\pi^*\widetilde c_{r-j}(V)=0$, with $\widetilde c_0=1$. Multiply by $(-1)^r$ and set $i=r-j$. It becomes $\xi^r+\sum_{i=1}^r(-1)^i\pi^*\widetilde c_i(V)\xi^{r-i}=0$. The orientation and quotient $\mathcal O(1)$ are the same by [F1]. Hence coefficient uniqueness in [F2] gives $\widetilde c_i(V)=c_i(V)$ for $1\leq i\leq r$; both zeroth coefficients are the unit. [A1, F1, F2, given]

2.1 If $r=1$, apply the filtered formula in [F1] to the one-step filtration $0\subset V$ with sole line quotient $V$. It gives $\widetilde c_t(V)=1+c_1^{\mathrm{or}}(V)t$, where $c_1^{\mathrm{or}}$ denotes the original EM orientation class. By step 1.1 its coefficient is $c_1(V)$; tensor-product additivity is that of the supplied additive orientation in [F2]. Above positive rank the declared zero-coefficient extension agrees with the supplied convention. In rank zero the source-side series is $1$ by our explicit local extension of Definition 4.4.1, and the supplied series is $1$ by [F2]; no relation on the empty projective bundle is used. These statements identify the whole actual series, with no virtual extension used. [A1, F1, F2, step 1.1] ∎
