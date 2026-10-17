---
id: lem-exact-rational-two-by-two-discriminant-sign
kind: lemma
title: Rational or dyadic stored real blocks have a finite exact discriminant-sign evaluator
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
- def-exact-real-2x2-discriminant-sign-predicate
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: 'James Demmel, Math 221 Lecture 16: Hessenberg reduction and implicit Q'
    url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
  - title: David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration
    url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
dependency_level: 1
---

## Statement

Suppose the stored entries of $B=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ have supplied exact rational encodings $a=p_a/q_a$, $b=p_b/q_b$, $c=p_c/q_c$, $d=p_d/q_d$, with integer numerators and positive integer denominators. Put $Q=q_aq_bq_cq_d$ and $A=p_a(Q/q_a)$, $B_0=p_b(Q/q_b)$, $C_0=p_c(Q/q_c)$, $D=p_d(Q/q_d)$. Compute the integer
$$Z=(A-D)^2+4B_0C_0.$$
Its integer sign is exactly [[def-exact-real-2x2-discriminant-sign-predicate]] and is found after finitely many exact integer operations. Finite binary floating values with their signed-integer/power-of-two encodings are a special case. This evaluator does not assume arbitrary stored real numbers have rational encodings. If an exact encoding or another terminating exact sign evaluator is unavailable, retain `schur-type-undecided`.

## Facts & Assumptions

**Given:** The exact finite integer encodings stated above, with positive denominators. Integer arithmetic is exact and is separate from the floating-point operationwise model; no bit-complexity estimate is claimed.

[F1] [[def-exact-real-2x2-discriminant-sign-predicate]] defines the sign of $(a+d)^2-4(ad-bc)=(a-d)^2+4bc$.

## Proof

1.1 $Q$ is a positive integer and each $Q/q_j$ is an integer product of the other three positive denominators. The displayed construction therefore uses a fixed finite number of integer additions, subtractions, products and sign comparisons, each on finite integers. Powers of two encoding binary exponents give such finite numerators and positive denominators as well. [given, construct]

1.2 Direct substitution gives $(a-d)^2+4bc=Z/Q^2$. Since $Q^2>0$, the discriminant sign in [F1] equals the integer sign of $Z$, including the exact zero case. Thus the finite recipe supplies the promised sign without a floating sign oracle; the unspecified-real branch remains undecided. [F1, step 1.1, algebra] ∎
