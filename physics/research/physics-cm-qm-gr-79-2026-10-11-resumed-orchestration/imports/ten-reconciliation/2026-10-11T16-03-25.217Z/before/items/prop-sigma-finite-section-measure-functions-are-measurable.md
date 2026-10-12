---
id: prop-sigma-finite-section-measure-functions-are-measurable
kind: proposition
title: "For sigma-finite measures, the section-measure functions are measurable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sections-of-sets-and-functions-on-products, lem-finite-rectangle-unions-form-a-generating-algebra, thm-sections-of-product-measurable-sets-are-measurable, thm-monotone-class, def-finite-sigma-finite-and-semifinite-measures, def-measure, thm-continuity-from-below-for-measures, thm-continuity-from-above-for-measures, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-08
    scope: "Owner-authorized rectangle-algebra and measure-continuity repair; local checks only, no independent judge"
    delegated_by: owner
  precheck: pass
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Corollary 1.7.17"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 5.15"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ be sigma-finite measure
spaces, and let $E \in \mathcal A \otimes \mathcal B$. Then the functions

$$x \mapsto \nu(E_x),\qquad y \mapsto \mu(E^y)$$

are measurable from $X$ and $Y$ into $[0,\infty]$.

## Facts & Assumptions

**Given:** Sigma-finite measure spaces $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$, and a set $E \in \mathcal A \otimes \mathcal B$.

[L1] Finite disjoint unions of measurable rectangles form an algebra that generates $\mathcal A \otimes \mathcal B$. ([[lem-finite-rectangle-unions-form-a-generating-algebra]])

[L2] If an algebra generates a sigma-algebra, then its monotone class is that same sigma-algebra. ([[thm-monotone-class]])

[L3] Pointwise monotone limits of measurable functions are measurable. ([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]])

[L4] Measures are continuous on increasing sequences, and on decreasing sequences whose first term has finite measure. ([[thm-continuity-from-below-for-measures]], [[thm-continuity-from-above-for-measures]])

[A1] Since $\nu$ is sigma-finite, there are measurable sets $Y_m \uparrow Y$ with $\nu(Y_m) < \infty$ for every $m$. Likewise there are measurable $X_n \uparrow X$ with $\mu(X_n) < \infty$.

[A2] If $F_k \uparrow F$, then $(F_k)_x \uparrow F_x$ and $\nu((F_k)_x \cap Y_m) \uparrow \nu(F_x \cap Y_m)$ for every $x$. If $F_k \downarrow F$, then $(F_k)_x \cap Y_m \downarrow F_x \cap Y_m$, and continuity from above on the finite-measure space $Y_m$ gives $\nu((F_k)_x \cap Y_m) \downarrow \nu(F_x \cap Y_m)$.

## Proof

**Proof technique:** direct.

1.1 Fix $m\ge1$ and let $\mathcal C_m$ consist of product-measurable sets $F$ for which $x\mapsto\nu(F_x\cap Y_m)$ is measurable. If $F$ is a finite disjoint union of rectangles $A_j\times B_j$, its sections are disjoint unions of those $B_j$ with $x\in A_j$. Finite additivity therefore gives $$\nu(F_x\cap Y_m)=\sum_j\nu(B_j\cap Y_m)\mathbf1_{A_j}(x).$$ All coefficients are finite by [A1]. On each of the finitely many measurable Boolean atoms of the sets $A_j$, this function is constant; hence the inverse image of any Borel set is a finite union of those atoms. The empty union gives the zero function. Thus the entire generating algebra from [L1], not merely its individual rectangles, is contained in $\mathcal C_m$. [L1, A1, given, algebra]

2.1 Sections commute with increasing unions and decreasing intersections. For an increasing sequence in $\mathcal C_m$, [L4] identifies the section-measure function of its union with the pointwise increasing limit. For a decreasing sequence, all restricted sections have measure at most $\nu(Y_m)<\infty$, so [L4] likewise identifies the function of the intersection with the decreasing limit. In both cases [L3] makes that limit measurable. Thus $\mathcal C_m$ is a monotone class, and [L1], [L2] and step 1.1 imply that it contains every product-measurable set. [L1, L2, L3, L4, A1, A2, step 1.1]

3.1 Applying step 2.1 to $E$ shows that $g_m(x):=\nu(E_x\cap Y_m)$ is measurable for every $m$. Since $Y_m\uparrow Y$, [L4] gives $g_m(x)\uparrow\nu(E_x)$ for each $x$, and [L3] proves measurability of $x\mapsto\nu(E_x)$. [A1, L3, L4, step 2.1]

4.1 Interchanging the two factors and using the finite-measure exhaustion $X_n\uparrow X$ proves measurability of $y\mapsto\mu(E^y)$ by the same argument. Therefore both section-measure functions are measurable. [A1, L3, L4, step 1.1, step 2.1, step 3.1] ∎
