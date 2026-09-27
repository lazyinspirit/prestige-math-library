---
id: def-henstock-kurzweil-integral-on-a-compact-interval
kind: definition
title: "The Henstock–Kurzweil integral on a compact interval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-gauge-and-fine-tagged-partition, thm-cousins-lemma-for-gauges, def-tagged-partition-and-riemann-sum]
justified_by: []
forward_refs: []
aliases: []
landmark: true
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Sections 1.2 and 1.21"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Definition

Let $a\le b$ and $f:[a,b]\to\mathbb R$. The function $f$ is **Henstock–Kurzweil integrable** on $[a,b]$ with value $I\in\mathbb R$ when, for every $\varepsilon>0$, there is a gauge $\delta$ on $[a,b]$ such that

$$|S(f,P)-I|<\varepsilon$$

for every $\delta$-fine tagged partition $P$. Thus, for every $\varepsilon>0$ one gauge controls every fine tagged Riemann sum. Cousin's lemma ensures that the quantified class of fine partitions is nonempty.

For every $\varepsilon>0$ one gauge controls every fine tagged Riemann sum.

The value, once uniqueness is proved, is written $\int_a^b f$. On a degenerate interval, the Henstock–Kurzweil integral is $0$.
