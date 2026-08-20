---
id: thm-henstock-kurzweil-cauchy-criterion
kind: theorem
title: "The Cauchy criterion for Henstock–Kurzweil integrability"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henstock-kurzweil-integral-on-a-compact-interval, thm-cousins-lemma-for-gauges, thm-nested-interval-property, def-countable-choice, lem-geometric-sequence-null]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
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

A function $f:[a,b]\to\mathbb R$ is Henstock–Kurzweil integrable if and only if for every $\varepsilon>0$ there is a gauge $\delta$ such that

$$|S(f,P)-S(f,Q)|<\varepsilon$$

for every pair of $\delta$-fine tagged partitions $P,Q$.

## Facts & Assumptions

**Given:** A function $f$ on a compact interval.

[L1] Every gauge admits at least one fine tagged partition ([[thm-cousins-lemma-for-gauges]]).

[L2] A nested sequence of closed intervals whose lengths tend to zero has a one-point intersection ([[thm-nested-interval-property]]).

[L3] Countable choice provides a function selecting one member from each nonempty set in a family indexed by $\mathbb N$ ([[def-countable-choice]]).

[L4] If $|r|<1$, then $r^k\to0$ ([[lem-geometric-sequence-null]]).

[L5] HK integrability means that one gauge makes every fine sum lie within a prescribed error of one value ([[def-henstock-kurzweil-integral-on-a-compact-interval]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, apply [L5] with error $\varepsilon/2$; any two sums fine for the resulting gauge differ by less than $\varepsilon$. [given, L5, algebra]

1.2 For the reverse direction, use [L3] to choose a diameter-controlling gauge $\gamma_n$ for tolerance $2^{-n}$, set $\delta_n=\min_{k\le n}\gamma_k$, and let $H_n$ be the closed interval hull of the nonempty set of $\delta_n$-fine sums supplied by [L1]; the $H_n$ are nested, have length at most $2^{-n}$, and [L4] and [L2] give a common point $I$. [given, L1, L2, L3, L4]

2.1 Given $\varepsilon>0$, [L4] gives $n$ with $2^{-n}<\varepsilon$; every $\delta_n$-fine sum lies in $H_n$ with $I$, hence within $\varepsilon$ of $I$, which is precisely HK integrability and selects no partition. [step 1.2, L4, algebra] ∎
