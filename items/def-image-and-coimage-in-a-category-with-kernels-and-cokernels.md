---
id: def-image-and-coimage-in-a-category-with-kernels-and-cokernels
kind: definition
title: "Image and coimage in a category with kernels and cokernels"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-kernels-and-cokernels-as-equalizers-and-coequalizers]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Gautam Tamme, Algebra II Lecture 9, §9.1"
      url: "https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture09.pdf"
    - title: "The Stacks Project, Section 12.3, Definition 12.3.9"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-21
---

## Definition

Let $f:A\to B$ be a morphism in a category with kernels and cokernels
([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

The **image** of $f$ is the kernel of a cokernel of $f$:

$$\operatorname{im}(f):=\ker(\operatorname{coker}(f)).$$

The **coimage** of $f$ is the cokernel of a kernel of $f$:

$$\operatorname{coim}(f):=\operatorname{coker}(\ker(f)).$$

This page uses the object notation $\operatorname{im}(f)$ and
$\operatorname{coim}(f)$. Their defining arrows are the corresponding kernel and
cokernel maps.
