---
id: rem-finitely-generated-abelian-groups-admit-invariant-factor-normal-form
kind: remark
title: "Finitely generated abelian groups admit invariant-factor normal form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-supplied
deps: []
justified_by: []
proved_here: false
external_dependency:
  source_url: "https://jack-jeffries.github.io/F25/817text.html"
  exact_statement: "Every finitely generated abelian group is isomorphic to Z^r x Z/d_1Z x ... x Z/d_kZ with d_i > 1 and d_1 | d_2 | ... | d_k."
  local_proof_attempt: "A local proof would require the classification of finitely generated modules over a principal ideal domain or an equivalent Smith normal form development, neither of which is published earlier in this reading order."
  necessity: "The present page needs only the normal form as an exact cited reduction for the abelian word-problem algorithm."
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jack Jeffries, Math 817: Introduction to Modern Algebra I (Fall 2025)"
      url: "https://jack-jeffries.github.io/F25/817text.html"
pipeline_run: null
---

## Statement

Every finitely generated abelian group $A$ is isomorphic to

$$\mathbb Z^r\times \mathbb Z/d_1\mathbb Z\times\cdots\times \mathbb Z/d_k\mathbb Z,$$

where $r\ge 0$, each $d_i>1$, and $d_1\mid d_2\mid\cdots\mid d_k$.

## Remarks

This page records only the exact normal form. It does not prove the full
classification theorem.

The consequence used below is algorithmic: once a finitely generated abelian
group has been written in these coordinates, equality with the identity reduces
to checking an integer vector and finitely many residue classes.
