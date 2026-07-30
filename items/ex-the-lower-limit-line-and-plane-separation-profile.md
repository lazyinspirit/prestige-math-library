---
id: ex-the-lower-limit-line-and-plane-separation-profile
kind: example
title: "Assuming choice, the lower-limit line is normal while its square is regular and nonnormal"
status: published
origin: session
deps: [cor-lower-limit-line-is-normal, lem-products-preserve-regularity, lem-lower-limit-plane-antidiagonal, thm-normality-is-not-productive]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "G. Gruenhage, General Topology Course Notes, Sorgenfrey plane"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
pipeline_run: null
---

## Example

Assume choice. The half-open intervals of the lower-limit line are clopen, and the line is normal by [[cor-lower-limit-line-is-normal]]. Its square remains regular by [[lem-products-preserve-regularity]], yet the antidiagonal $\{(x,-x):x\in\mathbb R\}$ is closed discrete while $\mathbb Q^2$ is dense and countable by [[lem-lower-limit-plane-antidiagonal]].

Jones's bound turns that profile into nonnormality of the square, as proved in [[thm-normality-is-not-productive]]. This separates the productive behaviour of regularity from the nonproductive behaviour of normality without conflating the two separation conditions.
