---
id: prop-the-coimage-projection-is-epic-and-the-image-inclusion-is-monic
kind: proposition
title: "The coimage projection is epic and the image inclusion is monic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-image-and-coimage-in-a-category-with-kernels-and-cokernels, cor-equalizers-are-monic-and-coequalizers-are-epic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3, Fact 12.3.11"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-21
---

## Statement

For every morphism $f$ in a category with kernels and cokernels, the defining
map $q_f:A\to\operatorname{coim}(f)$ is epic and the defining map
$i_f:\operatorname{im}(f)\to B$ is monic.

## Facts & Assumptions

**Given:** A morphism $f:A\to B$ with coimage projection $q_f$ and image
inclusion $i_f$.

[L1] The coimage is defined as a cokernel and the image as a kernel
([[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]).

[L2] Every coequalizer is epic and every equalizer is monic
([[cor-equalizers-are-monic-and-coequalizers-are-epic]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the map $q_f$ is a cokernel of a kernel of $f$. Therefore [L2] makes $q_f$ epic. [L1, L2]

2.1 Again by [L1], the map $i_f$ is a kernel of a cokernel of $f$. Therefore [L2] makes $i_f$ monic. [L1, L2] ∎
