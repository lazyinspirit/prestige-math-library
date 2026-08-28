---
id: def-hnn-word-pin-and-britton-reduced-word
kind: definition
title: "HNN words, pins, and Britton-reduced words"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-equivalent-hnn-presentation-with-associated-subgroups]
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

Work in the associated-subgroup notation of
[[lem-equivalent-hnn-presentation-with-associated-subgroups]]:

$$G=\langle A,t \mid tct^{-1}=\phi(c)\text{ for }c\in C_-\rangle,$$

where $\phi:C_-\to C_+$ is an isomorphism.

An **HNN word** is an expression

$$a_0t^{\varepsilon_1}a_1\cdots t^{\varepsilon_n}a_n,$$

with $n\ge 0$, $a_i\in A$, and $\varepsilon_i\in\{1,-1\}$. Its
**stable-letter length** is $n$.

A **pin** is a subword of one of the two forms

$$tct^{-1}\qquad(c\in C_-),$$

or

$$t^{-1}dt\qquad(d\in C_+).$$

An HNN word is **Britton-reduced** when no pin occurs and every interior base
coefficient $a_i$ with $1\le i<n$ is nonidentity whenever
$\varepsilon_i=-\varepsilon_{i+1}$. Equivalently, a sign change is allowed only
across a coefficient that does not lie in the subgroup that would create a pin.
