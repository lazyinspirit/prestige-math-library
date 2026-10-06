---
id: def-semistable-and-stable-points-for-a-linearization
kind: definition
title: Semistable and stable points for a linearization
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
justified_by: []
aliases: []
forward_refs: [cex-semistable-locus-depends-on-linearization, ex-gm-on-projective-line-with-two-linearizations]
deps: [def-g-linearization-of-an-invertible-sheaf, lem-linearizations-powers-and-equivariant-section-ring, def-invariant-section-ring-and-projective-git-quotient, def-projective-variety-classical, def-dimension-classical-variety, def-rational-action-on-affine-variety, def-reductive-and-linearly-reductive-over-c, def-homogeneous-coordinate-ring, def-affine-cone-projective-set]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
      locator: "Definitions 1.28 and 1.30, Proposition 1.35, printed pp. 11-12"
    - title: "P. E. Newstead, Geometric Invariant Theory, lecture notes, CIMAT Guanajuato 2006 (CEL/HAL; archived copy)"
      url: "https://web.archive.org/web/20231019082211id_/https://cel.hal.science/cel-00392098/file/newstead_notes.pdf"
      locator: "Lecture 1, Section 1.4 and Lecture 3, Sections 3.4-3.5"
    - title: "Victoria Hoskins, Moduli Problems and Geometric Invariant Theory, FU Berlin lecture notes (2015/16)"
      url: "https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf"
      locator: "Definitions 5.2, 5.4, 5.12 and Example 5.8"
    - title: "I. Dolgachev, Lectures on Invariant Theory, London Mathematical Society Lecture Note Series 296, Cambridge University Press, 2003"
      url: "https://www.math.ens.psl.eu/~benoist/refs/Dolgachev.pdf"
      locator: "Chapter 8.1, printed p. 115"
---

## Definition

Let $G$ be a complex reductive affine algebraic group ([[def-reductive-and-linearly-reductive-over-c]]) acting algebraically on a complex projective variety $X$ ([[def-projective-variety-classical]], [[def-rational-action-on-affine-variety]]), and let $L$ be an ample $G$-linearized invertible sheaf ([[def-g-linearization-of-an-invertible-sheaf]]).

A point $x\in X$ is **semistable with respect to $L$** if there exist $n\ge1$ and $\sigma\in\Gamma(X,L^{\otimes n})^G$ with $\sigma(x)\ne0$. The set of such points is written $X^{ss}(L)$, and its complement $X^{us}(L)=X\smallsetminus X^{ss}(L)$ is the **unstable locus**.

A point $x\in X^{ss}(L)$ is **stable with respect to $L$** if its orbit $Gx$ is closed in $X^{ss}(L)$ and its stabilizer $G_x$ is finite. The set of stable points is written $X^s(L)$.

These definitions agree with the embedded definitions for a $G$-equivariant closed immersion $X\hookrightarrow\mathbf P(V)$ with $L^{\otimes m}\cong\mathcal O(1)|_X$ as $G$-linearized invertible sheaves: $X^{ss}(L)=X\cap\mathbf P(V)^{ss}$ and $X^s(L)=X\cap\mathbf P(V)^s$, where semistability in $\mathbf P(V)$ is the nonvanishing of a positive-degree invariant homogeneous form ([[def-homogeneous-coordinate-ring]], [[def-affine-cone-projective-set]]) and stability adds closedness of the orbit in the semistable locus and finiteness of the stabilizer; this equivalence is asserted here and proved in the two main theorems of this page.

By construction $X^{ss}(L)$ and $X^s(L)$ are $G$-stable subsets of $X$. The definition itself claims no openness, nonemptiness or finiteness of either locus.

## Remarks

- **The linearization is part of the data.** The two loci depend on the linearization and not only on $(X,G,L)$; the companion page demonstrates this in [[cex-semistable-locus-depends-on-linearization]] and [[ex-gm-on-projective-line-with-two-linearizations]].
- **The invariant-section formulation.** The definition uses invariant sections of positive tensor powers of $L$, not only of $L$ itself; this is why a suitable common multiple of the degrees of a finite generating set, and not a single power of $L$, is needed in the projectivity arguments of this page ([[def-invariant-section-ring-and-projective-git-quotient]]).
- **Embedded comparison.** The comparison requires relating the full section ring to the embedding’s homogeneous coordinate ring and lifting invariants under the polynomial-ring surjection. These arguments, in addition to the positive-power comparison, are proved in [[thm-linear-action-projective-git-quotient]] and [[thm-projective-git-quotient-from-invariant-section-ring]].
- **Finiteness of the stabilizer.** For a complex affine algebraic group $G$, a closed subgroup $G_x$ is finite if and only if $\dim G_x=0$ ([[def-dimension-classical-variety]]).
