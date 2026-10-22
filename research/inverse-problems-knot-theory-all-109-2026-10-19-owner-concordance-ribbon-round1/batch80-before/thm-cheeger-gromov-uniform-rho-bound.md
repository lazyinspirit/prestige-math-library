---
id: thm-cheeger-gromov-uniform-rho-bound
kind: theorem
title: "Cheeger–Gromov uniform bound for rho invariants"
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
    - title: "Jeff Cheeger and Mikhael Gromov, “Bounds on the von Neumann dimension of L²-cohomology and the Gauss–Bonnet theorem for open manifolds”"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cheegergr.pdf"
      locator: "§4, eta-invariant variation and uniform bound"
---

## Statement

For every closed oriented 3-manifold M there exists a finite constant C_M such that for every discrete group Γ and every homomorphism φ:π₁(M)→Γ for which the rho invariant is defined, |ρ(M,φ)|≤C_M. The constant may depend on M but not on Γ or φ.

## Statement references

[Cheeger–Gromov, §4](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cheegergr.pdf)

## Facts & Assumptions

**Given:** A fixed closed oriented 3-manifold M and any coefficient representation for which the signature defect is defined.

[F1] The rho invariant is the bordism-independent signature defect when its bounding hypotheses hold ([[def-integral-half-solutions-strebel-and-l2-signatures]]).

## Proof

1.1 A metric and a finite triangulation of M reduce the assertion to a uniform bound on the regularized eta-invariant of the odd-signature operators twisted by all unitary representations. [F1, given, algebra]

1.2 The uniform estimate depends on the heat-kernel regularization and eta-variation bounds in Cheeger–Gromov §4. The local statement of rho invariance in [F1] does not imply any estimate uniform over coefficient groups. [F1, step 1.1]

## Owner escalation

The paper’s proof imports analytic regularization results cited there. Those estimates are not locally proved; the required uniform bound remains escalated.