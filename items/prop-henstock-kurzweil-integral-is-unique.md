---
id: prop-henstock-kurzweil-integral-is-unique
kind: proposition
title: "The Henstock–Kurzweil integral has at most one value"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henstock-kurzweil-integral-on-a-compact-interval, thm-cousins-lemma-for-gauges]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Sections 1.2 and 1.21"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

A function on a compact interval has at most one Henstock–Kurzweil integral value.

## Facts & Assumptions

**Given:** Alleged integral values $I$ and $J$ for the same function on $[a,b]$.

[L1] Every gauge on a compact interval admits a fine tagged partition ([[thm-cousins-lemma-for-gauges]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $I\ne J$; choose gauges controlling errors below $|I-J|/3$, take their pointwise minimum, and use [L1] to obtain one tagged partition $P$ fine for both. [given, L1, assume-contra]

2.1 The triangle inequality gives $|I-J|\le|I-S(f,P)|+|S(f,P)-J|<2|I-J|/3$, a contradiction, so $I=J$. [step 1.1, discharge-contradiction] ∎
