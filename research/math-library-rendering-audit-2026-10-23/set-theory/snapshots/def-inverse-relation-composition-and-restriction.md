---
id: def-inverse-relation-composition-and-restriction
kind: definition
title: "The inverse relation $R^{-1}$, the composite $S \\circ R$, and the restriction $R \\restriction A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-inverse-relations-composites-and-restrictions-are-sets, def-relation-domain-range-and-field, def-ordered-pair]
justified_by: []
aliases: [def-inverse-relation, def-composition-of-relations, def-restriction]
landmark: false
short: "inverse, composite, restriction"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 9, Def. 12 and Def. 19"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Composition of relations (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Composition_of_relations"
    - title: "Binary relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_relation"
pipeline_run: null
---

## Definition

Let $R$ and $S$ be relations ([[def-relation-domain-range-and-field]]) and let
$A$ be a set. By
[[lem-inverse-relations-composites-and-restrictions-are-sets]] the three
collections below are sets, and each is again a relation, since each of its
elements is an ordered pair ([[def-ordered-pair]]):

- the **inverse** $R^{-1} := \{\,(b,a) : (a,b) \in R\,\}$;
- the **composite** $S \circ R := \{\,(a,c) : \exists b\ ((a,b) \in R \wedge (b,c) \in S)\,\}$;
- the **restriction** $R \restriction A := \{\,(a,b) \in R : a \in A\,\}$.

Membership in each is exactly as written: $(b,a) \in R^{-1}$ holds if and only if
$(a,b) \in R$; $(a,c) \in S \circ R$ holds if and only if $(a,b) \in R$ and
$(b,c) \in S$ for some $b$; and $(a,b) \in R \restriction A$ holds if and only if
$(a,b) \in R$ and $a \in A$.

## Remarks

- **The order in $S \circ R$.** $S \circ R$ applies $R$ first and $S$ second.
  This is the convention that makes the composite of functions read
  $(g \circ f)(x) = g(f(x))$, and it is the one the rest of the library uses.
  The opposite convention exists in the literature and would reverse every
  composite written here.

- **Restriction cuts the domain, not the range.** $R \restriction A$ keeps the
  pairs of $R$ whose first coordinate lies in $A$ and discards the rest;
  $A$ need not be included in $\operatorname{dom} R$, and
  $\operatorname{dom}(R \restriction A) = \operatorname{dom} R \cap A$.
