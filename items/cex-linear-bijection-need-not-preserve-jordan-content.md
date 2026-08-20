---
id: cex-linear-bijection-need-not-preserve-jordan-content
kind: counterexample
title: "A linear bijection need not preserve Jordan content"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-linear-images-scale-jordan-content-by-absolute-determinant, def-multidimensional-rectangle-and-volume, def-jordan-inner-and-outer-content]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

Every linear bijection of $\mathbb R^2$ preserves Jordan content.

## Facts & Assumptions

**Given:** The unit square $Q=[0,1]^2$ and the linear map $T(x,y)=(2x,y)$.

[L1] A linear map with matrix $A$ scales Jordan content by $|\det A|$ ([[thm-linear-images-scale-jordan-content-by-absolute-determinant]]).

[L2] A rectangle has volume equal to the product of its nonnegative side lengths ([[def-multidimensional-rectangle-and-volume]]).

[L3] Jordan inner and outer contents are obtained from finite rectangular inner families and outer covers, with every inner sum at most every outer sum ([[def-jordan-inner-and-outer-content]]).

## Counterexample

**Proof technique:** direct.

1.1 The matrix of $T$ is $\operatorname{diag}(2,1)$, with inverse $\operatorname{diag}(1/2,1)$ and determinant $2$, and $T(Q)=[0,2]\times[0,1]$. [L1, algebra]

2.1 Each rectangle itself is both a one-rectangle inner family and outer cover, so [L2] and [L3] give $\operatorname{cont}(Q)=1$ and $\operatorname{cont}(T(Q))=2$; equivalently [L1] gives the same scaling. Thus the bijection $T$ does not preserve Jordan content. [step 1.1, L1, L2, L3] ∎
