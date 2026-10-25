---
id: def-idempotent-and-split-idempotent
kind: definition
title: "Idempotent and split idempotent"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.4, Definition 12.4.1"
      url: "https://stacks.math.columbia.edu/tag/09SF"
pipeline_run: frontier-20
---

## Definition

Let $e:A\to A$ be an endomorphism in a category ([[def-category]]).

- $e$ is **idempotent** when $e^2=e$.
- An idempotent $e$ **splits** when there exist morphisms
  $A\xrightarrow{p}B\xrightarrow{i}A$ such that

$$ip=e,\qquad pi=1_B.$$

Then $B$ is called a **splitting object** for $e$.
