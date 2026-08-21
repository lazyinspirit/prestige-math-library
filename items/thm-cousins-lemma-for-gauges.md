---
id: thm-cousins-lemma-for-gauges
kind: theorem
title: "Cousin's lemma: every gauge on a compact interval admits a fine tagged partition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-gauge-and-fine-tagged-partition, thm-nested-interval-property, lem-geometric-sequence-null]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Every gauge has a fine partition"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
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

For $a\le b$, every gauge on a compact interval admits a fine tagged partition.

Equivalently, every gauge admits a fine tagged partition, and every gauge admits at least one fine tagged partition. In particular, every gauge on each complementary compact interval admits a fine tagged partition.

## Facts & Assumptions

**Given:** A gauge $\delta$ on $[a,b]$.

[L1] A nested sequence of nonempty closed bounded intervals whose lengths tend to zero has an intersection consisting of a single point ([[thm-nested-interval-property]]).

[L2] If $|r|<1$, then $r^k\to0$ ([[lem-geometric-sequence-null]]).

[L3] A tagged partition is fine when every tagged cell lies inside its tag's gauge interval ([[def-gauge-and-fine-tagged-partition]]).

## Proof

**Proof technique:** contradiction.

1.1 If $a=b$, the declared degenerate partition is fine; otherwise suppose, for contradiction, that $[a,b]$ has no fine partition, bisect it, and at each stage retain the left half if it has no fine partition and otherwise the right half, which must have none because two fine half-partitions concatenate; the retained closed intervals are nested and have length $(b-a)2^{-k}$, so [L2] and [L1] give one common point $c$. [given, L1, L2, assume-contra]

2.1 Since $\delta(c)>0$ and the retained lengths tend to zero, a sufficiently late retained interval lies inside $(c-\delta(c),c+\delta(c))$; tagged by $c$, [L3] makes that one cell a fine partition, contradicting its construction. [step 1.1, L3, discharge-contradiction] ∎
