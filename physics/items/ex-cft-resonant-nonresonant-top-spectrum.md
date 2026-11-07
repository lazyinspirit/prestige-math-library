---
id: ex-cft-resonant-nonresonant-top-spectrum
kind: example
title: Universal simplicity with no positive integral top resonance
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
deps:
  - lem-cft-resonant-finite-root-and-first-kernel-reduction
dependency_roles:
  lem-cft-resonant-finite-root-and-first-kernel-reduction: mathematical-premise
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: voa-resonant-induction-and-projective-socles-examples
physical_scope: Pure mathematics; no physical premises or physical claim.
axiom_base: ZF
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
verification:
  precheck: pending
---

## Statement

Let $V$ be actual simple CFT-type VOA data satisfying the hypotheses of [[lem-cft-resonant-finite-root-and-first-kernel-reduction]], and suppose its finite simple-top weights $h_1,\ldots,h_s$ have no positive integral differences $h_j-h_i\in\mathbb Z_{>0}$. Then each universal module $M(U_i)$ is simple. This is a conditional application to actual VOA data; it does not assert that arbitrary prescribed complex weights are realized by a VOA.

## Statement references

[[lem-cft-resonant-finite-root-and-first-kernel-reduction]]

## Facts & Assumptions

**Given:** The actual VOA and module data in the Statement.

[F1] [[lem-cft-resonant-finite-root-and-first-kernel-reduction]]: if $M(U_i)$ has a nonzero largest graded top-disjoint submodule, its first occupied grade is a positive integer $d=h_j-h_i$ for some simple top $U_j$, and that grade contains a simple $A(V)$-submodule.

## Proof

1.1 Fix $i$. If $J(U_i)\ne0$, [F1] yields $j$ with $h_j-h_i\in\mathbb Z_{>0}$. The hypothesis on the finite list of actual weights excludes this, so $J(U_i)=0$. [F1, given, contradiction]

1.2 Any nonzero graded submodule of $M(U_i)$ either has zero degree-zero part and is contained in $J(U_i)=0$, or meets the simple top $U_i$ nontrivially and therefore contains all of $U_i$, which generates $M(U_i)$. Hence $M(U_i)$ is graded-simple. Since $L(0)=h_i+n$ on grade $n$, polynomial interpolation on the finite grade support of a vector shows every weak submodule is graded; therefore $M(U_i)$ is simple as an ungraded weak module. [F1, step 1.1, algebra] ∎
