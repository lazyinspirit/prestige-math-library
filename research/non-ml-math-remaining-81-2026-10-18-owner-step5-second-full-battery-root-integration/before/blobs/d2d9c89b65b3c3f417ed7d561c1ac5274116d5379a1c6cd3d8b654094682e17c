---
id: lem-heisenberg-bracket-defines-lie-algebra
kind: lemma
title: "The Heisenberg bracket satisfies the Lie algebra axioms"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-heisenberg-lie-algebra, def-lie-algebra-over-a-field]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "François Dumas, Noncommutative Invariants, §3.2.1"
      url: "https://lmbp.uca.fr/~fdumas/fichiers/B-Mat60.pdf"
---

## Statement

For every field $k$ and integer $n\geq 1$, the vector space and bracket specified in [[def-heisenberg-lie-algebra]] form a Lie algebra over $k$.

## Facts & Assumptions

**Given:** A field $k$, an integer $n\geq 1$, and the vector space $\mathfrak h_n(k)$ with the bracket in [[def-heisenberg-lie-algebra]].

[F1] [[def-heisenberg-lie-algebra]]: the bracket is bilinear, every bracket is a scalar multiple of $Z$, and $[Z,v]=0$ for every $v\in\mathfrak h_n(k)$.

[F2] [[def-lie-algebra-over-a-field]]: a Lie bracket is bilinear and alternating and satisfies the Jacobi identity.

## Proof

1.1 Bilinearity is part of the bracket construction in [F1]. For $v=\sum_i(a_iX_i+b_iP_i)+cZ$, its self-bracket is $[v,v]=\sum_i(b_i a_i-a_i b_i)Z=0$, since multiplication in $k$ is commutative. Thus the bracket is alternating in every characteristic, including characteristic $2$. [F1, F2, algebra]

2.1 By [F1], each bracket lies in $kZ$ and $Z$ brackets to zero with all of $\mathfrak h_n(k)$. Every nested bracket is therefore zero, so each term in the Jacobi sum vanishes. Together with step 1.1, the axioms in [F2] hold. [F1, F2, step 1.1, algebra] ∎
