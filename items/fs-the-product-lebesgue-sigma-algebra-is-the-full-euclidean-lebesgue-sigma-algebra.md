---
id: fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra
kind: false-statement
title: "FALSE: the product Lebesgue sigma-algebra is the full Euclidean Lebesgue sigma-algebra"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures, thm-sections-of-product-measurable-sets-are-measurable, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, def-countable-choice]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 5.20"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). For all
$m,n \ge 1$,
$$\mathcal L(\mathbb R^m)\otimes\mathcal L(\mathbb R^n) = \mathcal L(\mathbb R^{m+n}).$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, Lebesgue measure $\lambda$ on
$\mathbb R$, a non-Lebesgue-measurable set $N \subseteq \mathbb R$, the set
$E:=\{0\}\times N \subseteq \mathbb R^2$, and the line
$Z:=\{0\}\times\mathbb R$.

[L1] The Euclidean Lebesgue measure is the completion of the product measure. ([[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]])

[L2] Every section of a product-measurable set is measurable. ([[thm-sections-of-product-measurable-sets-are-measurable]])

[L3] On measurable rectangles, the product measure satisfies $(\lambda\times\lambda)(A\times B)=\lambda(A)\lambda(B)$. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

## Refutation

**Proof technique:** direct.

1.1 For each $n\ge 1$, the rectangle $Z_n:=\{0\}\times[-n,n]$ satisfies $(\lambda\times\lambda)(Z_n)=\lambda(\{0\})\lambda([-n,n])=0$ by [L3], so $Z=\bigcup_{n\ge 1} Z_n$ is $(\lambda\times\lambda)$-null. [L3, algebra]

2.1 Because $E\subseteq Z$, [L1] makes $E$ Lebesgue measurable in $\mathbb R^2$. [L1, step 1.1]

3.1 If the displayed equality were true, then $E$ would belong to $\mathcal L(\mathbb R)\otimes\mathcal L(\mathbb R)$. But then [L2] would force the horizontal section $E_0=N$ to be Lebesgue measurable, a contradiction. Therefore the product sigma-algebra is strictly smaller than the full Euclidean Lebesgue sigma-algebra. The correct statement is the completion statement of [L1]. [L1, L2, step 2.1] ∎
