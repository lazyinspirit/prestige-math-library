---
id: thm-monotonicity-of-the-henstock-kurzweil-integral
kind: theorem
title: "Monotonicity of the Henstock–Kurzweil integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henstock-kurzweil-integral-on-a-compact-interval, thm-linearity-of-the-henstock-kurzweil-integral, thm-cousins-lemma-for-gauges, lem-finite-sum-laws]
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

If $f$ and $g$ are Henstock–Kurzweil integrable on $[a,b]$ and $f(x)\le g(x)$ throughout the interval, then

$$\int_a^b f\le\int_a^b g.$$

In particular, $m\le f\le M$ implies $m(b-a)\le\int_a^b f\le M(b-a)$.

## Facts & Assumptions

**Given:** HK-integrable $f,g$ on $[a,b]$ with $f\le g$.

[L1] The Henstock–Kurzweil integral is linear ([[thm-linearity-of-the-henstock-kurzweil-integral]]).

[L2] Every gauge admits a fine tagged partition ([[thm-cousins-lemma-for-gauges]]).

## Proof

**Proof technique:** contradiction.

1.1 If a nonnegative integrable function $h$ had integral $H<0$, choose a gauge making every fine sum differ from $H$ by less than $-H/2$ and use [L2]; every such sum is nonnegative, contradicting $S(h,P)<H/2<0$. [given, L2, assume-contra]

2.1 Apply step 1.1 to $h=g-f$ and use [L1] to obtain $0\le\int(g-f)=\int g-\int f$. Every constant $k$ is HK integrable with integral $k(b-a)$ because every tagged sum equals that value; applying the first conclusion to $f-m$ and $M-f$ therefore gives the constant bounds, with equality on a degenerate interval. [step 1.1, L1, algebra, discharge-contradiction] ∎
