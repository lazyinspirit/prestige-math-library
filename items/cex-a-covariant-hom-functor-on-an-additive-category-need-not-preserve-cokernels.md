---
id: cex-a-covariant-hom-functor-on-an-additive-category-need-not-preserve-cokernels
kind: counterexample
title: "A covariant hom functor on an additive category need not preserve cokernels"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups, def-hom-groups-and-induced-hom-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.14 and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
pipeline_run: frontier-20
---

## Statement refuted

**Refuted claim:** every covariant hom-functor on an additive category preserves
cokernels.

Take the additive category $\mathbf{Ab}$ and the covariant hom-functor
$\mathbf{Ab}(\mathbb Z/2,-)$.

## Facts & Assumptions

**Given:** The sequence $\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2$ in
$\mathbf{Ab}$.

[L1] In a preadditive category, hom-functors take values in abelian groups
([[thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups]]).

[L2] For modules, postcomposition gives the induced maps on Hom groups
([[def-hom-groups-and-induced-hom-maps]]).

## Counterexample

**Proof technique:** direct.

1.1 The cokernel of multiplication by $2$ on $\mathbb Z$ is $\mathbb Z/2$. Applying $\mathbf{Ab}(\mathbb Z/2,-)$ gives $\operatorname{Hom}(\mathbb Z/2,\mathbb Z)\xrightarrow{(2)_*}\operatorname{Hom}(\mathbb Z/2,\mathbb Z)\to\operatorname{Hom}(\mathbb Z/2,\mathbb Z/2)$, with the induced maps described by [L2]. [L2]

2.1 Every homomorphism $\mathbb Z/2\to\mathbb Z$ is zero, while $\operatorname{Hom}(\mathbb Z/2,\mathbb Z/2)\cong\mathbb Z/2$. So the image sequence is $0\to0\to\mathbb Z/2$, whose first cokernel is $0$, not $\mathbb Z/2$. [L1, step 1.1]

3.1 Therefore the covariant hom-functor $\mathbf{Ab}(\mathbb Z/2,-)$ does not preserve this cokernel. [step 2.1] ∎
