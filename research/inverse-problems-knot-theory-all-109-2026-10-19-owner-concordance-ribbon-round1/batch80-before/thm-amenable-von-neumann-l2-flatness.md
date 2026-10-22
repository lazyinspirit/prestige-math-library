---
id: thm-amenable-von-neumann-l2-flatness
kind: theorem
title: "L²-dimension flatness for amenable groups"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-integral-half-solutions-strebel-and-l2-signatures
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Jae Choon Cha and Kent E. Orr, “L²-signatures, homology localization, and amenable groups”"
      url: "https://arxiv.org/pdf/0910.3700"
      locator: "§6, Theorem 6.6 and proof; Lück dimension-flatness input"
---

## Statement

Let G be a countable discrete amenable group. For every right CG-module M and every integer q>0, the N G-von Neumann dimension of Tor_q^{CG}(M,N G) is zero. This dimension-flatness statement does not say that the Tor module itself is zero.

## Statement references

[Cha–Orr, Theorem 6.6 and proof](https://arxiv.org/pdf/0910.3700)

## Facts & Assumptions

**Given:** A countable discrete amenable group G and a right CG-module M.

[F1] N G is the group von Neumann algebra with its canonical trace and von Neumann dimension ([[def-integral-half-solutions-strebel-and-l2-signatures]]).

## Proof

1.1 Apply the bar resolution of the trivial CG-module to express the higher Tor groups as homology of a chain complex of induced modules. Amenability supplies Følner sets that make the normalized boundary-rank defects tend to zero. [F1, given, algebra]

1.2 Turning the Følner estimate into zero von Neumann dimension requires the dimension-continuity and approximation lemmas in Cha–Orr Theorem 6.6; neither follows from the definition of amenability alone. [F1, step 1.1]

## Owner escalation

The inspected Cha–Orr proof invokes Lück’s amenable-group dimension-flatness and von Neumann-dimension properties. These analytic/algebraic lemmas have no local proofs here, so the dimension-flatness theorem is not established in this draft.