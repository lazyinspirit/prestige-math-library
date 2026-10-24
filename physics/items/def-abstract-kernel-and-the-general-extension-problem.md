---
id: def-abstract-kernel-and-the-general-extension-problem
kind: definition
title: "Abstract kernels and the general extension problem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-an-extension-induces-a-well-defined-outer-action-on-the-kernel]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Samuel Eilenberg and Saunders Mac Lane, Cohomology Theory in Abstract Groups. II. Group Extensions with a non-Abelian Kernel"
      url: "https://dokumen.pub/eilenberg-mac-lane-collected-works-0122340205-9780122340208.html"
---

## Definition

An **abstract kernel** for a pair of groups $(Q,N)$ is a homomorphism

$$\alpha:Q\to\operatorname{Out}(N).$$

By [[lem-an-extension-induces-a-well-defined-outer-action-on-the-kernel]], every
extension of $Q$ by $N$ determines such an outer action.

The **general extension problem** for $(Q,N,\alpha)$ asks two questions:

1. does there exist an extension of $Q$ by $N$ whose induced outer action is
   $\alpha$?
2. if so, how are the resulting extensions classified up to equivalence with
   fixed kernel and fixed quotient?
