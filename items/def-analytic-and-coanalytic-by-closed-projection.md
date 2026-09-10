---
id: def-analytic-and-coanalytic-by-closed-projection
kind: definition
title: "Analytic and coanalytic sets by closed projection"
status: draft
origin: pipeline
deps: ["def-polish-space", "def-baire-sequence-space", "def-product-topology"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definition 4.1, Lemma 4.2(iii), Definition 4.4"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Definition

Let $X$ be a Polish space ([[def-polish-space]]), and let $\mathcal N$ denote [[def-baire-sequence-space]]. Use the binary product topology ([[def-product-topology]]) on $X\times\mathcal N$.

A set $A\subseteq X$ is **analytic** if there is a closed $F\subseteq X\times\mathcal N$ such that

$$A=\{x\in X:(\exists y\in\mathcal N)\ (x,y)\in F\}.$$

A set $B\subseteq X$ is **coanalytic** if $X\setminus B$ is analytic. Complements are always relative to this specified $X$. The empty closed witness makes $\varnothing$ analytic. The witness $X\times\mathcal N$ makes $X$ analytic: the constant-zero sequence witnesses the projection at each $x$. Hence both $\varnothing$ and $X$ are also coanalytic, including when $X=\varnothing$.

These definitions use only ZF. No nonemptiness principle for arbitrary products is being invoked. Continuous-image and Borel-image characterizations require separate proofs; they are not part of this definition. This convention uses the closed-projection characterization in Marker Lemma 4.2(iii), rather than importing the other characterizations from its statement.
