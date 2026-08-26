---
id: def-pointing-of-a-combinatorial-class
kind: definition
title: "Pointing a combinatorial class"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-combinatorial-class-and-ordinary-generating-function]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 5: Combinatorial Constructions"
      url: "https://enumeration.ca/toolbox/combinatorial-constructions/"
pipeline_run: null
---

## Definition

Let $\mathcal{A}$ be a combinatorial class. Its **pointing**
$\Theta\mathcal{A}$ is the class of pairs

$$\Theta\mathcal{A} := \{(a,p) : a \in \mathcal{A},\ 1 \le p \le |a|\},$$

with size $|(a,p)| := |a|$.

Thus a pointed object is an $\mathcal{A}$-object together with a distinguished
atomic position. Objects of size $0$ contribute nothing to $\Theta\mathcal{A}$,
because there is no index $p$ with $1 \le p \le 0$.
