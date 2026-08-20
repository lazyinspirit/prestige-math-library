---
id: ex-cousins-lemma-gives-heine-borel-on-an-interval
kind: example
title: "Cousin's lemma yields the Heine–Borel theorem on a compact interval"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cousins-lemma-for-gauges, def-complete-ordered-field]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Section 1.2"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Example

Cousin's lemma implies that every open cover of a compact interval $[a,b]$ has a finite subcover, the interval form of Heine-Borel.

## Facts & Assumptions

**Given:** An open cover $\mathcal U$ of $[a,b]$.

[L1] Every gauge on a compact interval admits a fine tagged partition ([[thm-cousins-lemma-for-gauges]]).

[L2] Every nonempty set of reals bounded above has a least upper bound ([[def-complete-ordered-field]]).

## Verification

**Proof technique:** constructive.

1.1 For each $x$, let $r(x)$ be half the supremum of the radii in $(0,1]$ whose centered interval at $x$ lies in some member of $\mathcal U$; openness makes this set nonempty, [L2] supplies its positive supremum, and the supremum property ensures the $r(x)$-interval lies in at least one covering member, so $r$ is a gauge. [given, L2, construct]

2.1 Apply [L1] to obtain a fine tagged partition; for its finitely many tags, choose covering members containing the corresponding gauge neighborhoods, and these members cover every partition cell and hence $[a,b]$, with a one-point interval covered by one member. [step 1.1, L1, choose, discharge-construct] ∎

## Remarks

The conclusion is the interval form of the published [[thm-heine-borel-r]], obtained here by the distinct Cousin-lemma route.
