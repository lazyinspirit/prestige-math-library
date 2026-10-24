---
id: def-exact-sequence-and-short-exact-sequence-in-an-abelian-category
kind: definition
title: "Exact sequence and short exact sequence in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-exactness-at-a-node]
justified_by: []
landmark: true
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Definition 12.5.7"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "David Mehrle, Category Theory, Part III, Definition 7.20"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: frontier-23
---

## Definition

A sequence of morphisms in an abelian category is **exact** when it is exact at
every interior object in the sense of [[def-exactness-at-a-node]].

In particular, a composable triple
$$0\to A\xrightarrow{i}B\xrightarrow{p}C\to 0$$
is a **short exact sequence** when it is exact at $A$, at $B$, and at $C$.

This page uses the sequence language literally: the definition names exactness
of displayed chains of morphisms, not chain complexes as objects.
