---
id: rem-malcev-finitely-generated-linear-groups-are-residually-finite
kind: remark
title: "Malcev's theorem gives a canonical non-load-bearing source of residually finite groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [def-finite-residual-and-residually-finite-group, def-finitely-generated-group]
proved_here: false
external_dependency:
  source_url: "https://arxiv.org/pdf/2407.07680"
  exact_statement: "Every finitely generated linear group is residually finite."
  local_proof_attempt: "A local proof would need the commutative-algebra and number-theoretic reduction machinery behind Malcev's theorem, including finite-residue separation for finitely generated coefficient rings, which this page does not build."
  necessity: "The page needs one canonical non-load-bearing class of residually finite groups beyond free groups, but no later item in this batch may depend on it."
verification:
  sources_checked: 2026-09-01
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
    - title: "Matthew Stover, Residual finiteness and discrete subgroups of Lie groups"
      url: "https://arxiv.org/pdf/2407.07680"
---

## Statement

Every finitely generated linear group is residually finite.

## Remarks

This is the classical Malcev theorem. On this page it is recorded only as a
source-backed class of examples and is never load-bearing for a later batch-1
proof.

The local route fails because the theorem is proved by passing from a finitely
generated matrix group to a finitely generated coefficient ring and then
separating a nontrivial matrix entry modulo a suitable finite quotient of that
ring. That commutative-algebra machinery lies outside the present pair.
