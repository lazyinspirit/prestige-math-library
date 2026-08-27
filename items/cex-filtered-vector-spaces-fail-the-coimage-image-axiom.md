---
id: cex-filtered-vector-spaces-fail-the-coimage-image-axiom
kind: counterexample
title: "Filtered vector spaces can have zero kernel and zero cokernel without satisfying AB2"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3, Example 12.3.13"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-21
---

## Statement refuted

Zero kernel and zero cokernel are enough to force the coimage-image map to be
an isomorphism.

## Facts & Assumptions

**Given:** The filtered-vector-space category and the morphism $\iota:V\to W$
from
[[cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian]].

[L1] In that example, $\iota$ has zero kernel and zero cokernel, with
$\operatorname{coim}(\iota)=V$ and $\operatorname{im}(\iota)=W$, but $\iota$ is
not an isomorphism
([[cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian]]).

## Counterexample

1.1 The cited example already computes both endpoint objects explicitly: the coimage is $V$ and the image is $W$, even though both kernel and cokernel vanish. [L1]

2.1 The canonical map from coimage to image is the morphism $\iota:V\to W$ itself, and [L1] says that $\iota$ is not an isomorphism. So zero kernel and zero cokernel do not force AB2. [L1, step 1.1] ∎
