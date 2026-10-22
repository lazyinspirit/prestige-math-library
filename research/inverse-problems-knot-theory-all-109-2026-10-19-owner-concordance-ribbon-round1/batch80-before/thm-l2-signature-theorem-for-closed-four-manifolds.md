---
id: thm-l2-signature-theorem-for-closed-four-manifolds
kind: theorem
title: "The L²-signature of a closed manifold equals its ordinary signature"
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
    - title: "Wolfgang Lück and Thomas Schick, “Various L²-signatures and a topological L²-signature theorem”"
      url: "https://arxiv.org/pdf/math/0209161"
      locator: "§1, Theorem 1.3 and its proof; Atiyah/Hilsum inputs"
---

## Statement

Let X be a closed oriented smooth 4-manifold, Γ a discrete group, and φ:π₁(X)→Γ a homomorphism. Then the von Neumann signature of the NΓ-coefficient intersection form equals the ordinary signature:
sign_Γ^(2)(X,φ)=sign(X).

## Statement references

[Lück–Schick, Theorem 1.3](https://arxiv.org/pdf/math/0209161)

## Facts & Assumptions

**Given:** A closed oriented smooth 4-manifold X and a homomorphism φ:π₁(X)→Γ.

[F1] The L²-signature is the von Neumann signature of the coefficient intersection form ([[def-integral-half-solutions-strebel-and-l2-signatures]]).

## Proof

1.1 The cited topological L²-signature theorem identifies the analytic L²-signature with the von Neumann signature of the equivariant intersection form for the classifying map of the universal Γ-cover. [F1, given]

1.2 The equality of that value with sign(X) uses the L² index theorem and analytic regularity inputs. Those inputs are not proved by step 1.1 and no local supplier for them has been read into this pair. [F1, step 1.1]

## Owner escalation

Lück–Schick Theorem 1.3 states the claimed equality and proves it through Atiyah’s L² index theorem and Hilsum’s operator results. A complete local proof of those analytic prerequisites is absent; this theorem remains escalated.