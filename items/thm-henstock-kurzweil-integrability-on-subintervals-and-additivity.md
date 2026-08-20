---
id: thm-henstock-kurzweil-integrability-on-subintervals-and-additivity
kind: theorem
title: "Henstock–Kurzweil integrability on subintervals and additivity over adjacent intervals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henstock-kurzweil-integral-on-a-compact-interval, thm-cousins-lemma-for-gauges, thm-henstock-kurzweil-cauchy-criterion, def-oriented-integral]
justified_by: []
forward_refs: []
aliases: []
landmark: false
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

Let $a\le c\le b$. A function is Henstock–Kurzweil integrable on $[a,b]$ if and only if its restrictions to $[a,c]$ and $[c,b]$ are integrable, and then

$$\int_a^b f=\int_a^c f+\int_c^b f.$$

With oriented integrals, for points $u,v,w$, $\int_u^w f=\int_u^v f+\int_v^w f$ whenever the compact pieces are integrable.

For points $u,v,w$, $\int_u^w f=\int_u^v f+\int_v^w f$ whenever the compact pieces are integrable.

Henstock–Kurzweil integrals restrict to subintervals and add over adjacent intervals.

## Facts & Assumptions

**Given:** A function on $[a,b]$ and a cut point $c\in[a,b]$.

[L1] Every gauge on a compact interval admits a fine tagged partition ([[thm-cousins-lemma-for-gauges]]).

[L2] A function on a compact interval is HK integrable if and only if one gauge makes every pair of fine tagged sums uniformly close ([[thm-henstock-kurzweil-cauchy-criterion]]).

[L3] Oriented integrals satisfy antisymmetry for every pair of endpoints ([[def-oriented-integral]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, fix a whole-interval gauge whose fine sums are within $\varepsilon/2$ of the integral. Given two fine partitions $P,Q$ of $[a,c]$, use [L1] to choose one fine partition $R$ of $[c,b]$ for the restricted gauge. Then $P\cup R$ and $Q\cup R$ are whole-interval fine partitions, so $|S(f,P)-S(f,Q)|<\varepsilon$; [L2] proves integrability on $[a,c]$, and the symmetric completion proves it on $[c,b]$. [given, L1, L2, algebra]

1.2 For the reverse direction, choose side gauges for error $\varepsilon/2$. For $x<c$ shrink the left gauge below $(c-x)/2$, for $x>c$ shrink the right gauge below $(x-c)/2$, and at $c$ take the minimum of the two gauges. Thus a fine cell can cross $c$ only when tagged at $c$, in which case splitting it at $c$ produces one fine cell for each side. The two side estimates then add, proving whole-interval integrability and the displayed additivity, including $c=a$ or $c=b$. [given, algebra]

2.1 Ordering $u,v,w$, applying step 1.2, and reversing any necessary limits with [L3] gives the oriented three-point identity. [step 1.2, L3, algebra] ∎
