---
id: thm-sections-of-product-measurable-functions-are-measurable
kind: theorem
title: "Every section of a product-measurable function is measurable"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sections-of-sets-and-functions-on-products, thm-sections-of-product-measurable-sets-are-measurable, thm-generating-family-criterion-for-measurable-functions, def-borel-sigma-algebra-on-the-extended-real-line]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Theorem 5.15"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A)$ and $(Y,\mathcal B)$ be measurable spaces, and let
$$f : X \times Y \to \overline{\mathbb R}$$
be $(\mathcal A \otimes \mathcal B,\mathcal B(\overline{\mathbb R}))$-measurable.
Then $f_x : Y \to \overline{\mathbb R}$ is $\mathcal B$-measurable for every
$x \in X$, and $f^y : X \to \overline{\mathbb R}$ is $\mathcal A$-measurable
for every $y \in Y$.

## Facts & Assumptions

**Given:** Measurable spaces $(X,\mathcal A)$ and $(Y,\mathcal B)$, and a product-measurable function $f : X \times Y \to \overline{\mathbb R}$.

[L1] A function into $\overline{\mathbb R}$ is measurable once the preimages of a generating family for $\mathcal B(\overline{\mathbb R})$ are measurable. ([[thm-generating-family-criterion-for-measurable-functions]])

[L2] Sections of product-measurable sets are measurable. ([[thm-sections-of-product-measurable-sets-are-measurable]])

[A1] For every Borel set $U \subseteq \overline{\mathbb R}$, $$f_x^{-1}(U) = (f^{-1}(U))_x,\qquad (f^y)^{-1}(U) = (f^{-1}(U))^y.$$

## Proof

**Proof technique:** direct.

1.1 Fix $x \in X$ and let $\mathcal G$ be a generating family for $\mathcal B(\overline{\mathbb R})$. For each $U \in \mathcal G$, the set $f^{-1}(U)$ is product-measurable, so [L2] and [A1] give $f_x^{-1}(U) = (f^{-1}(U))_x \in \mathcal B$. By [L1], $f_x$ is therefore $\mathcal B$-measurable. [L1, A1, L2]

2.1 Fix $y \in Y$. The same argument gives $(f^y)^{-1}(U) = (f^{-1}(U))^y \in \mathcal A$ for every generator $U \in \mathcal G$, so [L1] implies that $f^y$ is $\mathcal A$-measurable. Thus every horizontal and vertical section of $f$ is measurable. [step 1.1, A1, L1, L2] ∎
