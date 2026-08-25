---
id: def-heisenberg-group-of-order-p-cubed
kind: definition
title: "The Heisenberg group of order $p^3$ over $\\mathbb Z/p$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group, thm-integers-modulo-n-basic-algebra, thm-z-mod-p-is-a-field, def-prime]
justified_by: [prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Definition 2.31"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. A. Craven, The Theory of p-Groups, Definition 3.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Definition

Let $p$ be a prime ([[def-prime]]) and let $\mathbb Z/p$ carry the addition and
multiplication of [[thm-integers-modulo-n-basic-algebra]], which make it a field
([[thm-z-mod-p-is-a-field]]). The **Heisenberg group of order $p^3$** is the set

$$H_p:=\{(a,b,c):a,b,c\in\mathbb Z/p\}$$

with the multiplication

$$(a,b,c)(a',b',c'):=(a+a',\,b+b',\,c+c'+ab').$$

That this is a group law ([[def-group]]), that it is not commutative, and that
$H_p$ has $p^3$ elements are proved in
[[prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed]].

## Remarks

The same multiplication is written on the published example
[[ex-heisenberg-sylow-subgroup-of-the-upper-triangular-group]], where the triple
$(a,b,c)$ records the three entries above the diagonal of a unipotent
upper-triangular $3\times3$ matrix over $\mathbb Z/p$; the two constructions
produce the same group, and the notation is kept identical so that a reader meets
one object rather than two.

The asymmetry of the third coordinate, $c+c'+ab'$ rather than
$c+c'+a'b$, is a choice of convention: the opposite choice gives the group with
the roles of the first two coordinates exchanged, and the map
$(a,b,c)\mapsto(b,a,c)$ carries one to the other. Nothing below depends on which
is taken, provided one is taken throughout.

At $p=2$ the construction does not produce a group of exponent two: the element
$(1,1,0)$ squares to $(0,0,1)$, so $H_2$ has an element of order four.
