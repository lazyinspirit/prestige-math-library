---
title: Imported Hom computation into a K-injective complex
status: draft
research_item: lem-adjudicate-94864d118f52-kinjective-hom-input
dependency_level: 0
sources:
  references:
    - title: "The Stacks Project, Lemma 13.31.2: K-injective Hom computation"
      url: https://stacks.math.columbia.edu/tag/070I
      locator: Lemma 13.31.2, equivalence of (1) and (3), with (2); statement and proof
      statement: For a K-injective complex I in an abelian category, passage from
        homotopy classes to derived morphisms into I is bijective for every
        source complex. Precomposition by a quasi-isomorphism is also bijective
        on these homotopy classes.
      hypotheses: An abelian category, a K-injective target complex, and the size
        conventions for its derived localization; no boundedness or
        enough-injectives assumption.
      reading_limits: Read the three equivalent conditions and their proof on tag
        070I, and Definition 13.31.1 on tag 070G. The cited cone,
        cohomological-functor and roof-calculus foundations were not
        reconstructed. This imports the Hom theorem, not resolution existence.
external_input: true
---

## Prerequisites

- [math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)
- [math:def-chain-homotopy](https://alphabetamath.cc/item/def-chain-homotopy)
- [math:def-homotopy-category-of-chain-complexes](https://alphabetamath.cc/item/def-homotopy-category-of-chain-complexes)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [` The Stacks Project, Lemma 13.31.2: K-injective Hom computation · Lemma 13.31.2, equivalence of (1) and (3), with (2); statement and proof `](https://stacks.math.columbia.edu/tag/070I)


## Statement
Let $\mathcal A$ be an abelian category, with the standing size bounds for its derived localization. Use cochain complexes. Write $K(\mathcal A)$ for their homotopy category and $D(\mathcal A)$ for its localization at quasi-isomorphisms. Here $H^n(N)=\ker d_N^n/\operatorname{im}d_N^{n-1}$; a complex is acyclic when all these objects vanish, and a quasi-isomorphism induces isomorphisms on all of them. A cochain homotopy has $f-g=dh+hd$, with $h^n:N^n\to I^{n-1}$; this is the chain convention under $N_n=N^{-n}$.

Suppose $I$ is K-injective, meaning $\operatorname{Hom}_{K(\mathcal A)}(M,I)=0$ for every acyclic $M$. Then the canonical map $\operatorname{Hom}_{K(\mathcal A)}(N,I)\to\operatorname{Hom}_{D(\mathcal A)}(N,I)$ is bijective for every complex $N$. For every quasi-isomorphism $s:M\to N$, precomposition gives a bijection $\operatorname{Hom}_{K(\mathcal A)}(N,I)\to\operatorname{Hom}_{K(\mathcal A)}(M,I)$. No boundedness hypothesis is imposed.

## Statement references
[math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category)

[math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)

[math:def-chain-homotopy](https://alphabetamath.cc/item/def-chain-homotopy)

[math:def-homotopy-category-of-chain-complexes](https://alphabetamath.cc/item/def-homotopy-category-of-chain-complexes)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

## External input
These two bijections are imported from [Stacks, Lemma 13.31.2](https://stacks.math.columbia.edu/tag/070I), conditions (1), (2) and (3). Its proof is cited, rather than reproduced here. This input supplies no K-injective resolution-existence assertion.
