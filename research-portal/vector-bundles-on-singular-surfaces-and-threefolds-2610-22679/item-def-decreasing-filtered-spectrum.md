---
title: Decreasing spectral filtrations and associated graded
status: draft
research_item: def-decreasing-filtered-spectrum
dependency_level: 4
---

PDF p. 3: FilSp and the image filtration

## Prerequisites

- [def-stable-spectra-interface](item-def-stable-spectra-interface)

## Definition
Let $E$ be a spectrum. A **decreasing filtration on $E$** consists of spectra $F^jE$, indexed by $j\in\mathbb Z$, and a coherent diagram whose transition maps $F^jE\to F^kE$ are defined whenever $j\geq k$, together with a coherent compatible family of maps $F^jE\to E$. Thus the composite $F^{j+1}E\to F^jE\to E$ is identified with the given map $F^{j+1}E\to E$. Coherent means that the maps, their composition identifications, and all higher compatibility data form a diagram and a cone in the infinity-category of spectra.

The **associated graded spectrum in degree $j$** is $\operatorname{gr}^jE=\operatorname{cofib}(F^{j+1}E\to F^jE)$. For $i\in\mathbb Z$, its **image filtration** on the homotopy group $\pi_iE$ is the family of subgroups

$$F^j\pi_iE=\operatorname{im}(\pi_iF^jE\longrightarrow\pi_iE).$$

The filtration is **exhaustive** if the canonical map $\operatorname*{colim}_{j\to-\infty}F^jE\to E$ is an equivalence. Here the colimit is over the maps from larger indices to smaller indices. It is **complete**, in the tower-vanishing convention used here, if $\operatorname*{lim}_{j\to+\infty}F^jE$ is equivalent to the zero spectrum; the limit is taken over the same transition maps. It is **nonnegative** if every structure map $F^jE\to E$ is an equivalence for $j\leq0$. Completeness imposes no injectivity condition on the maps $\pi_iF^jE\to\pi_iE$.

## Facts & Assumptions
**Given:** A spectrum $E$ and a coherent augmented tower as in the definition.

**Goal:** Justify the graded spectra, image filtration, and the stated conditions.

[F1] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies the stable infinity-category of spectra, its small limits and colimits, cofibers, zero spectrum, and functorial abelian homotopy groups.

## Justification
1.1 The index category has one object for each integer and one arrow $j\to k$ when $j\geq k$. It is small, so the tower has a limit and a colimit. The compatible maps to $E$ form a cone and induce the displayed canonical colimit map. Each transition map has a cofiber, so every $\operatorname{gr}^jE$ is defined. These constructions are invariant under equivalence of the coherent input diagrams. [F1, given]

2.1 Applying $\pi_i$ gives group homomorphisms. The image of each structure map is therefore a subgroup of $\pi_iE$, and compatibility with $F^{j+1}E\to F^jE$ gives $F^{j+1}\pi_iE\subseteq F^j\pi_iE$. Equivalence to $E$ or to the zero spectrum is a well-defined condition on the specified maps or limit. None of the three conditions includes injectivity of the homomorphisms defining the image filtration; in particular, completeness is the stated condition on the tower limit. [F1, given, step 1.1] ∎
