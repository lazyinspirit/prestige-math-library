---
id: fs-product-of-complete-measure-spaces-is-complete
kind: false-statement
title: "FALSE: the product of two complete measure spaces is complete"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completed-product-measure, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures, thm-sections-of-product-measurable-sets-are-measurable, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 5.20"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

If $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ are complete measure spaces,
then the product measure space
$ (X \times Y,\mathcal A \otimes \mathcal B,\mu \times \nu)$ is complete.

## Facts & Assumptions

**Given:** Lebesgue measure $\lambda$ on $\mathbb R$, a non-Lebesgue-measurable set $N \subseteq \mathbb R$, the set $E:=\{0\}\times N \subseteq \mathbb R^2$, and the line $Z:=\{0\}\times\mathbb R$.

[L1] The completed product measure is generally a genuine completion of the uncompleted product measure. ([[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]])

[L2] Every section of a product-measurable set is measurable. ([[thm-sections-of-product-measurable-sets-are-measurable]])

[L3] On measurable rectangles, the product measure satisfies $(\lambda\times\lambda)(A\times B)=\lambda(A)\lambda(B)$. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

## Refutation

**Proof technique:** direct.

1.1 For each $n\ge 1$, the rectangle $Z_n:=\{0\}\times[-n,n]$ satisfies $(\lambda\times\lambda)(Z_n)=\lambda(\{0\})\lambda([-n,n])=0$ by [L3], so $Z=\bigcup_{n\ge 1} Z_n$ is $(\lambda\times\lambda)$-null. [L3, algebra]

2.1 Because $E\subseteq Z$, [L1] makes $E$ Lebesgue measurable in $\mathbb R^2$. [L1, step 1.1]

3.1 If $E$ belonged to $\mathcal L(\mathbb R)\otimes\mathcal L(\mathbb R)$, its horizontal section at $0$ would be $E_0=N$, which is not Lebesgue measurable, contradicting [L2]. Thus the product sigma-algebra misses a subset of a product-null set, so the product of two complete Lebesgue spaces need not be complete. This is exactly why [L1] needs an actual completion step. [L1, L2, step 2.1] ∎
