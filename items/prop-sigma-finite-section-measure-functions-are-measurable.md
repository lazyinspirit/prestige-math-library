---
id: prop-sigma-finite-section-measure-functions-are-measurable
kind: proposition
title: "For sigma-finite measures, the section-measure functions are measurable"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sections-of-sets-and-functions-on-products, lem-finite-rectangle-unions-form-a-generating-algebra, thm-sections-of-product-measurable-sets-are-measurable, thm-monotone-class, def-finite-sigma-finite-and-semifinite-measures, def-measure, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]
proof_strategy: direct
verification:
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

[A1] Since $\nu$ is sigma-finite, there are measurable sets $Y_m \uparrow Y$ with $\nu(Y_m) < \infty$ for every $m$. Likewise there are measurable $X_n \uparrow X$ with $\mu(X_n) < \infty$.

[A2] If $F_k \uparrow F$, then $(F_k)_x \uparrow F_x$ and $\nu((F_k)_x \cap Y_m) \uparrow \nu(F_x \cap Y_m)$ for every $x$. If $F_k \downarrow F$, then $(F_k)_x \cap Y_m \downarrow F_x \cap Y_m$, and continuity from above on the finite-measure space $Y_m$ gives $\nu((F_k)_x \cap Y_m) \downarrow \nu(F_x \cap Y_m)$.

## Proof

**Proof technique:** direct.

1.1 Fix $m \ge 1$ and let $\mathcal C_m$ be the family of sets $F \in \mathcal A \otimes \mathcal B$ for which $x \mapsto \nu(F_x \cap Y_m)$ is $\mathcal A$-measurable. If $F=A \times B$ is a measurable rectangle, then $$\nu(F_x \cap Y_m)=\nu(B \cap Y_m)\mathbf 1_A(x),$$ so $F \in \mathcal C_m$. By [A2], $\mathcal C_m$ is a monotone class. Hence [L1] and [L2] imply that every product-measurable set lies in $\mathcal C_m$. [L1, L2, A1, A2]

2.1 Applying step 1.1 to the given set $E$ shows that $g_m(x):=\nu(E_x \cap Y_m)$ is measurable for every $m$. Because $Y_m \uparrow Y$, one has $g_m(x) \uparrow \nu(E_x)$ for each $x$, so [L3] gives measurability of $x \mapsto \nu(E_x)$. [A1, L3, step 1.1]

3.1 The same argument with the finite-measure exhaustion $X_n \uparrow X$ shows that $y \mapsto \mu(E^y)$ is measurable. Therefore both section-measure functions are measurable. [A1, L3, step 1.1, step 2.1] ∎
