---
id: def-algebraic-and-transcendental-elements
kind: definition
title: 'Algebraic and transcendental elements and algebraic extensions'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field-extension-generated-subfields-and-simple-extension, def-polynomial-evaluation-and-root]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Extension Fields"
      url: "https://judsonbooks.org/aata-files/aata-html/fields-section-extension-fields.html"
pipeline_run: frontier-11
---

## Definition

Let $K/F$ be a field extension
([[def-field-extension-generated-subfields-and-simple-extension]]) and let
$a\in K$. The element $a$ is **algebraic over $F$** if $f(a)=0$ for some
nonzero polynomial $f\in F[x]$ ([[def-polynomial-evaluation-and-root]]); it is
**transcendental over $F$** otherwise. The extension $K/F$ is **algebraic** if
every element of $K$ is algebraic over $F$, and **transcendental** otherwise.
