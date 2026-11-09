---
title: Weight-zero sections and cohomology on the chosen general site
status: draft
research_item: lem-author-dcdf962edbda-cohomology
dependency_level: 13
---

PDF p. 4: Weight zero

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-dcdf962edbda-constant-sections](item-lem-author-dcdf962edbda-constant-sections)
- [lem-author-dcdf962edbda-pullback-projection](item-lem-author-dcdf962edbda-pullback-projection)
- [thm-author-dcdf962edbda-source-input](item-thm-author-dcdf962edbda-source-input)
- [def-motivic-cohomology](item-def-motivic-cohomology)


## Statement
Assume the Axiom of Choice and fixed compatible site and universe size bounds for the constructions below. Composing $\rho_0$ with the source constant-sheaf identification gives a natural equivalence
$$\mathbb Z(0)_{\mathrm{mot},k}(X)\longrightarrow R\Gamma^F_{\mathrm{cdh}}(X,\mathbb Z).$$
It induces natural isomorphisms $H^{i,0}_{\mathrm{mot}}(X,\mathbb Z)\cong H^i_{\mathrm{cdh},F}(X,\mathbb Z)$ for every integer $i$, and these groups vanish for $i<0$.

## Facts & Assumptions

[A1] Choice and the fixed compatible site and universe bounds are retained when applying [lem-author-dcdf962edbda-constant-sections](item-lem-author-dcdf962edbda-constant-sections) to define the derived target in step 1.1 and obtain its negative-degree vanishing in step 2.1. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[F1] [lem-author-dcdf962edbda-pullback-projection](item-lem-author-dcdf962edbda-pullback-projection).

[F2] [thm-author-dcdf962edbda-source-input](item-thm-author-dcdf962edbda-source-input).

[F3] [lem-author-dcdf962edbda-constant-sections](item-lem-author-dcdf962edbda-constant-sections) and [def-motivic-cohomology](item-def-motivic-cohomology).

## Proof
1.1 Compose the actual equivalence of [F1] with the actual natural identification of $\mathbb Z(0)_{\mathrm{cdh},F}$ in [F2]. Its target is derived evaluation of the ordinary constant sheaf on the site fixed in [F3], since that is explicitly the coefficient/site interpretation of the source input. This constructs the displayed map as a natural equivalence. [A1, F1, F2, F3]

2.1 Apply the cohomology functor. The left groups are those of the completed motivic definition, and the right groups are those defined in [F3]. Its negative-degree vanishing applies to the ordinary degree-zero constant sheaf. Naturality follows by applying the same functor to the natural equivalence. [A1, F1, F2, F3, step 1.1] ∎
