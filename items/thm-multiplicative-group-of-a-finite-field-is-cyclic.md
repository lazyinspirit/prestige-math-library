---
id: thm-multiplicative-group-of-a-finite-field-is-cyclic
kind: theorem
title: "The multiplicative group $\\mathbb F_q^\\times$ of a finite field is cyclic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-field-and-its-order, lem-field-is-a-commutative-ring, cor-finite-subgroups-of-units-in-a-domain-are-cyclic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Theorem 1.6"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Statement

The multiplicative group $F^\times=F\setminus\{0\}$ of every finite field $F$ is cyclic.

## Facts & Assumptions

**Given:** A finite field $F$.

[L1] A finite field has a finite underlying set ([[def-finite-field-and-its-order]]).

[L2] Every field is an integral domain, and its nonzero elements are its units ([[lem-field-is-a-commutative-ring]]).

[L3] Every finite subgroup of the unit group of an integral domain is cyclic ([[cor-finite-subgroups-of-units-in-a-domain-are-cyclic]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $F^\times$ is the unit group of the integral domain $F$. It is finite by [L1]. [given, L1, L2]

2.1 Apply [L3] to the finite subgroup $F^\times$ of itself to conclude that it is cyclic. [step 1.1, L3] ∎
