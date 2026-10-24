---
id: def-galois-closure-of-a-finite-separable-extension
kind: definition
title: "The Galois closure of a finite separable extension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-normal-closure-of-an-algebraic-extension, def-finite-galois-extension-and-galois-group]
justified_by: [thm-galois-closures-exist-and-are-minimal]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Remark 3.18"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be a finite separable extension embedded in a fixed algebraic closure
$\Omega$ of $F$. Its **Galois closure in $\Omega$** is the normal closure
$N_{\Omega}(K/F)$ of [[def-normal-closure-of-an-algebraic-extension]].

Equivalently, it is the least subfield $L$ of $\Omega$ containing $K$ for which
$L/F$ is finite Galois ([[def-finite-galois-extension-and-galois-group]]). The
existence, finiteness, separability, and leastness asserted by this terminology
are established in [[thm-galois-closures-exist-and-are-minimal]].
