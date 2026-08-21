---
id: thm-hake-extension-theorem-for-henstock-kurzweil-integrals
kind: theorem
title: "Hake's theorem: a finite-endpoint generalized integral is a proper Henstock–Kurzweil integral after assigning the endpoint value"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henstock-kurzweil-integral-on-a-noncompact-interval, thm-cauchy-criterion-for-noncompact-henstock-kurzweil-integrals, thm-saks-henstock-lemma, thm-henstock-kurzweil-integrability-on-subintervals-and-additivity, def-countable-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Hake extension"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Section 1.21"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

Let $a<b<\infty$, let $f$ be HK integrable on every $[a,c]$ with $a<c<b$, and assign any finite value to $f(b)$. The resulting function on $[a,b]$ is properly HK integrable if and only if $\lim_{c\uparrow b}\int_a^c f$ exists as a finite real. In that case the proper integral equals this limit and is independent of the assigned value at $b$. The reflected statement holds at a missing left endpoint.

A finite-endpoint noncompact integral extends to a proper HK integral if and only if the truncation limit exists.

## Facts & Assumptions

**Given:** The locally HK-integrable function near a finite missing endpoint and a finite assigned endpoint value.

[L1] A missing finite-endpoint integral exists exactly when all sufficiently late tail integrals are small ([[thm-cauchy-criterion-for-noncompact-henstock-kurzweil-integrals]]).

[L2] Fine partial tagged partitions have uniformly small sums of local integration errors ([[thm-saks-henstock-lemma]]).

[L3] Henstock–Kurzweil integrals restrict to subintervals and add over adjacent intervals ([[thm-henstock-kurzweil-integrability-on-subintervals-and-additivity]]).

[L4] Countable choice selects one member from each nonempty set in a family indexed by $\mathbb N$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, [L3] restricts a proper HK integral to every compact prefix; apply [L2] to the one-cell partial partition $([c,b],b)$ after taking $c$ sufficiently close to $b$, and also make $|f(b)|(b-c)$ small, to obtain uniformly small tail integrals, so [L1] and [L3] make the truncation values converge to the proper integral. [given, L1, L2, L3]

1.2 For the reverse direction, let $A=\lim_{c\uparrow b}\int_a^c f$ and set $c_i=b-(b-a)/(i+1)$, so $c_0=a$ and $c_i\uparrow b$. By [L4], choose for each band $[c_{i-1},c_i]$ a gauge whose Saks–Henstock partial-partition error is below $\varepsilon2^{-i-4}$. [given, L2, L4]

2.1 On each open band, take the minimum of its local gauge and half the distances to the two band endpoints; at each $c_i$, take the minimum of the adjacent gauges and half the adjacent band lengths. At $b$, choose a radius $\gamma$ so that the truncation tail error is below $\varepsilon/4$ and $|f(b)|\gamma<\varepsilon/4$. A partition fine for this global gauge can cross a band boundary only when tagged there, so it splits into finitely many complete band partitions, one final fine partial band partition, and a possible last cell tagged at $b$. [step 1.2, L1, L2, algebra]

3.1 Additivity [L3], the summable local error budget from step 1.2, the Saks–Henstock estimate on the final partial band, the truncation bound, and the endpoint-cell bound from step 2.1 show that every fine sum differs from $A$ by less than $\varepsilon$. Thus the extension is properly HK integrable with integral $A$. Changing the assigned value at $b$ alters only the last endpoint-tagged term, whose length the gauge can make arbitrarily small, so the integral is independent of that value; reflection gives the left-endpoint form. [step 1.2, step 2.1, L2, L3, algebra] ∎
