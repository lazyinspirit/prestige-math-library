---
id: cor-finite-purely-inseparable-extensions-have-prime-power-degree
kind: corollary
title: "A finite purely inseparable extension in characteristic $p$ has degree a power of $p$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-purely-inseparable-extension-characterizations, thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-tower-law-for-finite-field-extensions, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

If $K/F$ is a finite purely inseparable extension of characteristic $p>0$, then
$[K:F]=p^r$ for some $r\in\mathbb N$. The trivial extension gives $r=0$.

## Facts & Assumptions

**Given:** A finite purely inseparable extension $K/F$ of characteristic $p>0$.

[L1] The minimal polynomial of each element has the form $x^{p^e}-a$ and hence has $p$-power degree ([[thm-purely-inseparable-extension-characterizations]]).

[L2] The degree of a simple algebraic extension is the degree of its minimal polynomial ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L3] Degrees multiply in a finite tower ([[thm-tower-law-for-finite-field-extensions]]).

[L4] A finite extension has a finite basis over its base ([[def-extension-degree-and-finite-extension]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite basis using [L4]; its elements generate $K$, so adjoining them successively gives a finite tower of simple extensions. [L4, choose]

2.1 At each nontrivial step, [L1] and [L2] make the degree a power of $p$. The tower law [L3] makes the product, and hence $[K:F]$, a power of $p$. [step 1.1, L1, L2, L3]

3.1 If $K=F$, the empty tower has degree $1=p^0$, so the boundary case is included. [L3] ∎
