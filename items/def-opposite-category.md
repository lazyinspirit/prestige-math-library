---
id: def-opposite-category
kind: definition
title: "Opposite category $\\mathcal C^{\\mathrm{op}}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

For a category $\mathcal C$ ([[def-category]]), the **opposite category**
$\mathcal C^{\mathrm{op}}$ has the same objects and reverses every morphism:

$$\mathcal C^{\mathrm{op}}(A,B)=\mathcal C(B,A).$$

The identity at $A$ remains $1_A$. If $f^{\mathrm{op}}:B\to A$ and
$g^{\mathrm{op}}:C\to B$ correspond to $f:A\to B$ and $g:B\to C$ in
$\mathcal C$, define
$f^{\mathrm{op}}\circ_{\mathrm{op}}g^{\mathrm{op}}=(g\circ f)^{\mathrm{op}}$.
Associativity and the identity laws follow directly from those of $\mathcal C$,
so this prescription is a category. Moreover
$(\mathcal C^{\mathrm{op}})^{\mathrm{op}}=\mathcal C$ strictly.

