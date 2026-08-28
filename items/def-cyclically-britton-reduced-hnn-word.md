---
id: def-cyclically-britton-reduced-hnn-word
kind: definition
title: "Cyclically Britton-reduced HNN words"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-hnn-word-pin-and-britton-reduced-word]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Definition

Let

$$w=a_0t^{\varepsilon_1}a_1\cdots t^{\varepsilon_n}a_n$$

be a Britton-reduced HNN word in the sense of
[[def-hnn-word-pin-and-britton-reduced-word]]. It is
**cyclically Britton-reduced** when either $n=0$, or $n>0$ and the cyclic
rotation

$$t^{\varepsilon_n}(a_na_0)t^{\varepsilon_1}a_1\cdots t^{\varepsilon_{n-1}}a_{n-1}$$

is still Britton-reduced.

Equivalently, a Britton-reduced word of positive stable-letter length is
cyclically Britton-reduced exactly when no pin appears across the two ends: if
$\varepsilon_n=1$ and $\varepsilon_1=-1$, then $a_na_0\notin C_-$; if
$\varepsilon_n=-1$ and $\varepsilon_1=1$, then $a_na_0\notin C_+$.
