---
id: lem-finite-range-sequences-are-uniformly-dense-in-ell-infinity
kind: lemma
title: "Finite-range sequences are uniformly dense in ell-infinity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-c-zero-and-ell-infinity]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Michael Müger, Introduction to Functional Analysis"
      url: "https://www.math.ru.nl/~mueger/functionalanalysis.pdf"
      locator: "Proof of Theorem B.18, printed pp.192-193"
pipeline_run: phase-2-next-18
---

## Statement

The finite-range real, respectively complex, sequences are dense in
$\ell^\infty$ for the supremum norm.

## Facts & Assumptions

[L1] $\ell^\infty$ consists of bounded scalar sequences with the supremum norm
([[def-c-zero-and-ell-infinity]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 Let $x\in\ell^\infty$ and $\varepsilon>0$. In the real case partition the [given, L1]
bounded interval containing all $x_n$ into finitely many half-open intervals of
length below $\varepsilon$, and replace every $x_n$ by a fixed endpoint of its
cell. The resulting sequence $s$ has finite range and
$\|x-s\|_\infty<\varepsilon$. [L1, finite partition]

2.1 In the complex case partition a square containing all $x_n$ into finitely [given, L1, step 1.1]
many squares of side below $\varepsilon/\sqrt2$ and replace by one corner of
the containing cell. Again $s$ has finite range and
$\|x-s\|_\infty<\varepsilon$. This proves density in both scalar fields. [L1,
step 1.1, Euclidean estimate] ∎
