---
id: ex-compact-arithmetic-surface-hecke-que
kind: example
title: "Hecke QUE on a compact arithmetic surface"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps: [thm-lindenstrauss-que-for-compact-arithmetic-surfaces]
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity"
      url: "https://math.huji.ac.il/~elon/Publications/quantum.pdf"
      locator: "Theorem 1.1, Theorem 1.4, §§3, 7–8, and Appendix A."
---

## Example

Let M=Γ\ℍ be a compact arithmetic surface from a quaternion algebra over ℚ split over ℝ, and let φⱼ be L²-normalized joint Laplace and Hecke eigenfunctions with Laplace eigenvalues tending to infinity. Every weak-* limit of the associated microlocal lifts is normalized Liouville measure on T¹M.

## Example references

[Elon Lindenstrauss, Invariant Measures and Arithmetic Quantum Unique Ergodicity, Theorem 1.1, Theorem 1.4, §§3, 7–8, and Appendix A.](https://math.huji.ac.il/~elon/Publications/quantum.pdf)

## Facts & Assumptions

**Given:** A compact arithmetic surface $M=\Gamma\backslash\mathbb H$ from a quaternion algebra over $\mathbb Q$ split over $\mathbb R$, and an $L^2$-normalized sequence of joint Laplace and Hecke eigenfunctions with eigenvalues tending to infinity.

[F1] [[thm-lindenstrauss-que-for-compact-arithmetic-surfaces]]: Every quantum limit from such joint eigenfunctions on a compact arithmetic surface is normalized Liouville probability measure.

## Proof

**Proof technique:** direct specialization.

1.1 By the definition of a quantum limit, any weak-* subsequential limit of the associated microlocal lifts is a quantum limit for the stated surface and eigenfunction sequence. [given, construct]

1.2 The hypotheses of [F1] are exactly the compact arithmetic surface and joint eigenfunction hypotheses in the statement. Applying [F1] gives that every such limit is normalized Liouville measure on $T^1M$. [given, F1, step 1.1] ∎
