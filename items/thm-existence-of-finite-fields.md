---
id: thm-existence-of-finite-fields
kind: theorem
title: "For every prime $p$ and $n\\ge1$, a field with $p^n$ elements exists"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-roots-of-x-q-minus-x-form-a-field, thm-splitting-fields-exist-for-nonzero-polynomials, thm-z-mod-p-is-a-field, def-polynomials-that-split-and-splitting-fields, def-finite-field-and-its-order]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Theorem 2.5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Propositions 4.19-4.24"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

For every prime $p$ and every integer $n\ge1$, there exists a field with exactly $p^n$ elements.

## Facts & Assumptions

**Given:** A prime $p$, a positive integer $n$, and $q=p^n$.

[L1] In characteristic $p$, the roots of $t^q-t$ in a field form a subfield and are all simple ([[lem-roots-of-x-q-minus-x-form-a-field]]).

[L2] Every nonzero polynomial over a field has a splitting field ([[thm-splitting-fields-exist-for-nonzero-polynomials]]).

[L3] The quotient $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

[L4] A splitting field is generated over the base by all roots of the polynomial ([[def-polynomials-that-split-and-splitting-fields]]).

[L5] A field with finite underlying set is a finite field and its order is its cardinality ([[def-finite-field-and-its-order]]).

## Proof

**Proof technique:** constructive.

1.1 Over the field $\mathbb F_p$ from [L3], use [L2] to choose a splitting field $E$ of $h(t)=t^q-t$. [given, L2, L3, choose, construct]

2.1 Let $R$ be the root set of $h$ in $E$. By [L1], $R$ is a subfield of $E$ and all roots are simple. By [L4], the roots generate $E$, while the subfield $R$ already contains them and the base; hence $E=R$. [step 1.1, L1, L4]

3.1 The degree-$q$ polynomial $h$ splits in $E$ and has no repeated roots, so it has exactly $q$ distinct roots. Thus $|E|=|R|=q=p^n$. [step 2.1, L1, algebra]

4.1 By [L5], $E$ is the required finite field. [step 3.1, L5, discharge-construct] ∎
