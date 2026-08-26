---
id: rem-skolem-construction-produces-a-steiner-triple-system
kind: remark
title: "Skolem's construction gives a Steiner triple system of order $6m+1$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-supplied
deps: []
proved_here: false
external_dependency:
  source_url: "https://jjdavidson.github.io/notes/design-theory/03steiner-triple.html"
  exact_statement: "For every integer m >= 1, Skolem's construction produces a Steiner triple system of order 6m+1."
  local_proof_attempt: "The in-scope route is the usual explicit construction on (Z/(2m)) x (Z/3) union {infinity}. The batch harvest and design notes both record that the exact block list was not verified against a primary source on disk, and the authoring rule here forbids reconstructing that list from memory."
  necessity: "This existence statement is the only missing branch in the landmark characterization of Steiner triple system orders."
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jonathan Davidson, Steiner Triple Systems"
      url: "https://jjdavidson.github.io/notes/design-theory/03steiner-triple.html"
---

## Statement

The source gives an explicit Skolem construction on
$\bigl(\mathbb Z/(2m)\bigr)\times(\mathbb Z/3)\cup\{\infty\}$ and proves that its
blocks form a Steiner triple system of order $6m+1$ for every $m\ge1$.

## Remarks

This page uses only that existence statement. The exact block families are not
rebuilt here, because the harvested notes and design record for this batch both
require that block list to be copied from a verified source rather than
reconstructed from memory.
