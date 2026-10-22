---
id: cex-knot-kt-44-boundary-case
kind: counterexample
title: "A graded Euler characteristic does not determine total rank"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
proof_strategy: direct
axiom_use: "The finite-dimensional vector-space calculation is choice-free."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Ciprian Manolescu, From Knots to Four-Manifolds, §2"
      url: "https://web.stanford.edu/~cm5/knots4m.pdf"
---

## Statement refuted

The false assertion is that a finite bigraded cochain complex over $\mathbb Q$ is determined in total dimension by its graded Euler characteristic $\sum_{i,j}(-1)^i\dim_{\mathbb Q}H^{i,j}q^j$.

## Statement references

No external statement is cited; the counterexample is finite-dimensional linear algebra.

## Facts & Assumptions

**Given:** A finite bigraded cochain complex over $\mathbb Q$ with zero differential. Its total rank is the sum of the dimensions of all bigraded groups, and its graded Euler characteristic weights degree $(i,j)$ by $(-1)^i q^j$.

[F1] With zero differential, every cohomology group equals its corresponding cochain group by the definition of cohomology.

## Counterexample

1.1 Define $V$ by $V^{0,0}=\mathbb Q$ and all other groups zero. Define $W$ by $W^{0,0}=W^{0,1}=W^{1,1}=\mathbb Q$ and all other groups zero; give both complexes zero differentials. [given, construct]

1.2 By [F1], the graded Euler characteristics are $\chi_q(V)=1$ and $\chi_q(W)=1+q-q=1$, but their total dimensions are $1$ and $3$. Therefore equal graded Euler characteristics do not determine total rank. [F1, step 1.1, algebra] ∎

## Remarks

This vector-space example does not assert that a nontrivial knot has the unknot's Jones polynomial. Jones-polynomial unknot detection is a separate knot-theoretic problem; a 2026 survey still describes it as open.

## Remarks references

[Manolescu, *From Knots to Four-Manifolds* (2026), §2, p. 5](https://web.stanford.edu/~cm5/knots4m.pdf)
