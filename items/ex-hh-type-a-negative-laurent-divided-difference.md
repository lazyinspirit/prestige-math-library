---
id: ex-hh-type-a-negative-laurent-divided-difference
kind: example
title: "A divided difference with negative Laurent exponents"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps: [def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

In rank two, with $A=\mathbb Z[Q,Q^{-1}][X_1^{\pm1},X_2^{\pm1}]$, the divided difference of $f=X_1^{-2}X_2$ is
$$
D_1(f)=\frac{X_2}{X_1^2}+\frac1{X_1}+\frac1{X_2}.
$$

## Facts & Assumptions

**Given:** The Laurent algebra and divided difference from [[def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences]] with $n=2$.

[F1] [[def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences]]: $D_1(f)=(f-s_1(f))/(1-X_1/X_2)$, and the quotient is the unique Laurent polynomial with this property.

## Verification

**Given:** $f=X_1^{-2}X_2$ and $s_1$ interchanges $X_1$ and $X_2$. Verify the displayed value of $D_1(f)$.

1.1 Applying the transposition gives $s_1(f)=X_2^{-2}X_1$, so $f-s_1(f)=X_2/X_1^2-X_1/X_2^2$. [given, F1, algebra]

2.1 Multiplication shows $(1-X_1/X_2)(X_2/X_1^2+1/X_1+1/X_2)=X_2/X_1^2-X_1/X_2^2=f-s_1(f)$. Each cancellation is in the Laurent ring, where $X_1$ and $X_2$ are units. [given, F1, step 1.1, algebra]

3.1 The quotient in $A$ is unique by [F1], so $D_1(f)=X_2/X_1^2+1/X_1+1/X_2$, as asserted. [F1, step 2.1] ∎

