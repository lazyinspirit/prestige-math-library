---
id: rem-monoidal-functor-means-different-things-in-different-sources
kind: remark
title: "Why the bare phrase 'monoidal functor' is ambiguous across sources"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-lax-strong-and-strict-monoidal-functor]
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter XI.2"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 2.4.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Remark

The term "monoidal functor" is not source-stable. Mac Lane's Chapter XI.2 and
the older lax-oriented literature use it for what this page calls a lax
monoidal functor. EGNO's Definition 2.4.1 uses it only for the strong case.

For that reason this library does not use the phrase bare. It writes "lax
monoidal", "strong monoidal", or "strict monoidal" explicitly, as in
[[def-lax-strong-and-strict-monoidal-functor]].
