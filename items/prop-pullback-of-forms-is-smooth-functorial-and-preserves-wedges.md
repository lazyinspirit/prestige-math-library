---
id: prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges
kind: proposition
title: "Pullback of forms is smooth functorial and preserves wedges"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pullback-of-a-differential-form,
       prop-pullback-of-covariant-tensors-is-smooth-and-functorial,
       prop-linear-pullback-respects-tensor-products-and-permutations,
       prop-differential-forms-form-a-graded-commutative-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement

For a smooth map $F:M\to N$, pullback sends smooth differential forms on $N$ to
smooth differential forms on $M$, is functorial, and satisfies

$$
F^*(\alpha\wedge\beta)=F^*\alpha\wedge F^*\beta.
$$

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$, a smooth map $G:N\to P$, and forms $\alpha,\beta$ on the target.

[F1] A form pullback is the covariant tensor pullback restricted to alternating tensors ([[def-pullback-of-a-differential-form]]).

[L1] Covariant tensor pullback is smooth and functorial ([[prop-pullback-of-covariant-tensors-is-smooth-and-functorial]]).

[L2] Fibrewise linear pullback respects tensor products and permutations, hence wedge products ([[prop-linear-pullback-respects-tensor-products-and-permutations]]).

## Proof
**Proof technique:** direct.

1.1 By [F1], $F^*\alpha$ is obtained from the covariant tensor pullback. Because [L1] sends smooth covariant tensors to smooth covariant tensors and preserves composition, the same is true for forms. [F1, L1, given]

1.2 At each point $p\in M$, [F1] and [L2] give $$ (F^*(\alpha\wedge\beta))_p=dF_p^*(\alpha_{F(p)}\wedge\beta_{F(p)}) =dF_p^*(\alpha_{F(p)})\wedge dF_p^*(\beta_{F(p)}), $$ which is exactly $(F^*\alpha\wedge F^*\beta)_p$. [F1, L2, given, algebra]

2.1 The identity and composition laws are inherited from [L1], and step 1.2 gives wedge preservation. Therefore pullback of forms is smooth, functorial, and wedge-preserving. [L1, step 1.2] ∎