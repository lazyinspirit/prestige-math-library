---
id: def-luzin-property-n-on-a-compact-interval
kind: definition
title: "Luzin's property $(N)$ on a compact interval"
status: draft
origin: pipeline
deps: [def-lebesgue-outer-measure]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach--Zaretsky Theorem, §3.4"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
---

## Definition

For $a\le b$ and $F:[a,b]\to\mathbb R$, say that $F$ has **Luzin's property
$(N)$** if, for every $E\subseteq[a,b]$, $\lambda^*(E)=0$ implies
$\lambda^*(F(E))=0$, where $\lambda^*$ is Lebesgue outer measure
([[def-lebesgue-outer-measure]]). This formulation is meaningful before any
measurability of $F(E)$ has been proved. It is an image condition; it asserts
nothing about preimages of null sets. On $[a,a]$ it holds automatically.
