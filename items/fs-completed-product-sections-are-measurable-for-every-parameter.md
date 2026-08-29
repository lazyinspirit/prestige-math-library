---
id: fs-completed-product-sections-are-measurable-for-every-parameter
kind: false-statement
title: "FALSE: every section of a completed-product measurable function is measurable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completed-product-measure, thm-tonelli-and-fubini-for-completed-product-measures, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]
proof_strategy: direct
verification:
  audited: 2026-08-29
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

If $f$ is measurable for the completed product $\overline{\mu \times \nu}$,
then $f_x$ is measurable for every $x$ and $f^y$ is measurable for every $y$.

## Facts & Assumptions

**Given:** Lebesgue measure $\lambda$ on $\mathbb R$, a non-Lebesgue-measurable set $N \subseteq \mathbb R$, the set $E:=\{0\}\times N \subseteq \mathbb R^2$, and the indicator function $f:=\mathbf 1_E$.

[L1] For completed products, section measurability is guaranteed only for almost every parameter. ([[thm-tonelli-and-fubini-for-completed-product-measures]])

[L2] The completed product sigma-algebra contains every subset of a $(\lambda\times\lambda)$-null set. ([[def-completed-product-measure]])

[L3] On measurable rectangles, the product measure satisfies $(\lambda\times\lambda)(A\times B)=\lambda(A)\lambda(B)$. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

## Refutation

**Proof technique:** direct.

1.1 For each $n\ge 1$, the rectangle $Z_n:=\{0\}\times[-n,n]$ satisfies $(\lambda\times\lambda)(Z_n)=\lambda(\{0\})\lambda([-n,n])=0$ by [L3], so $Z:=\{0\}\times\mathbb R=\bigcup_{n\ge 1} Z_n$ is $(\lambda\times\lambda)$-null. [L3, algebra]

2.1 Because $E\subseteq Z$, [L2] puts $E$ in the completed product sigma-algebra, so $f=\mathbf 1_E$ is measurable for the completed product. [L2, step 1.1]

3.1 The section at $0$ is $f_0=\mathbf 1_N$, which is not measurable because $N$ is not Lebesgue measurable. Thus the displayed claim fails even though $f$ is measurable for the completed product, and [L1] is sharp. [L1, step 2.1] ∎
