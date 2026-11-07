---
id: thm-tsen-classical-brauer-vanishing-over-one-variable-fields-in-zf
kind: theorem
title: "Classical Tsen vanishing without choice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - lem-one-variable-function-fields-over-algebraically-closed-fields-are-c1-in-zf
  - lem-central-division-reduced-norm-and-c1-splitting
proof_strategy: direct
axiom_use: "No choice principle is assumed; both cited statements have unqualified finite-dimensional proofs."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "SGA 4½, Exposé I §3.2, Tsen's theorem"
      url: "https://grothendiecksga.com/read/sga4.5/en/I_3.html"
      locator: "The classical splitting conclusion is obtained here from the stated C1 and finite reduced-norm suppliers."
---

## Statement

Let k be an algebraically closed field and K/k a finitely generated field extension of transcendence degree one. Every finite-dimensional central simple K-algebra is split. Equivalently, the classical Brauer group Br(K), defined by central-simple-algebra classes, is zero. No choice principle is assumed. This statement does not identify Br(K) with a Galois-cohomology group.

## Facts & Assumptions

**Given:** k and K as in the statement.

[F1] K is C1 without a choice hypothesis. [[lem-one-variable-function-fields-over-algebraically-closed-fields-are-c1-in-zf]]

[F2] Every finite-dimensional central simple algebra over a C1 field is split, by the finite reduced-norm argument. [[lem-central-division-reduced-norm-and-c1-splitting]]

## Proof

1.1 Apply [F1] to the stated k and K. The C1 splitting criterion [F2] then shows that every finite-dimensional central simple K-algebra is isomorphic to a matrix algebra over K. Its classical Brauer class is therefore the identity, and every classical class has such a representative. Hence Br(K)=0. This argument makes no cohomological comparison. [F1, F2, given, algebra] ∎

## Scope

The cohomological Brauer interpretation and the proper-curve cohomological-dimension theorem are separate prerequisites.
