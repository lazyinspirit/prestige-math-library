---
id: lem-archimedean-property-from-completeness
kind: lemma
title: Dedekind completeness implies the Archimedean property
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complete-ordered-real-field]
sources:
  references:
    - title: "Steven G. Krantz, Foundations of Analysis, §1.1, Theorem 1.10"
      url: "https://api.pageplace.de/preview/DT0400.9781482220759_A37871115/preview-9781482220759_A37871115.pdf"
---

## Statement

In a Dedekind-complete ordered field, the natural numbers are unbounded above.

## Facts & Assumptions

**Given:** A field satisfying [[def-complete-ordered-real-field]].

[A1] [[def-complete-ordered-real-field]]: every nonempty subset bounded above
has a least upper bound, and the field order is compatible with addition.

## Proof

1.1 Suppose the natural numbers were bounded above and let $s$ be their least upper bound from [A1]. Since $s-1<s$, the number $s-1$ is not an upper bound; there is a natural number $n>s-1$. [given, A1, choose]

2.1 Then the natural number $n+1$ exceeds $s$, contradicting that $s$ is an upper bound. Therefore the natural numbers are unbounded above. [A1, step 1.1, algebra] ∎

