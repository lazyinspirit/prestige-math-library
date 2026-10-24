---
id: thm-monomorphisms-and-epimorphisms-in-set
kind: theorem
title: "In $\\mathbf{Set}$, monomorphisms are exactly injections and epimorphisms are exactly surjections"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-sets-and-functions-form-category-set, def-monomorphism-and-epimorphism, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

In $\mathbf{Set}$, a function is monic exactly when it is injective, and it is
epic exactly when it is surjective.

## Facts & Assumptions

**Given:** A function $f:A\to B$ regarded as a morphism of $\mathbf{Set}$.

[L1] The morphisms of $\mathbf{Set}$ are functions ([[prop-sets-and-functions-form-category-set]]), monic and epic mean cancellation ([[def-monomorphism-and-epimorphism]]), and injective, surjective, and bijective have their usual fibrewise meanings ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ is injective, $f\circ g=f\circ h$ implies $g=h$ pointwise, so $f$ is monic; if $f$ is not injective, choose $a_0\ne a_1$ with $f(a_0)=f(a_1)$, and the two maps from a singleton selecting $a_0,a_1$ show that $f$ is not monic. [given, L1]

2.1 If $f$ is surjective and $g\circ f=h\circ f$, then for each $b\in B$ choose an $a$ only for this fixed $b$ with $f(a)=b$, giving $g(b)=h(b)$; hence $g=h$ and $f$ is epic. [step 1.1, L1]

3.1 If $f$ is not surjective, let $g:B\to\{0,1\}$ be constantly $0$ and let $h$ be $0$ on $f[A]$ and $1$ outside $f[A]$; then $g\ne h$ but $g\circ f=h\circ f$, so $f$ is not epic. [step 2.1, L1] ∎

