---
id: ex-finite-lookup-table-pac-sample-complexities
kind: example
title: "Finite lookup tables have explicit PAC sample bounds"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - def-realizable-and-agnostic-pac
  - thm-finite-class-sample-complexity
  - def-identically-distributed-and-iid-random-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
---

## Example

Let $d\ge1$, let $\mathcal X=\{1,\ldots,d\}$ have the discrete sigma-algebra, and let $\mathcal H$ be the class of all binary lookup tables on $\mathcal X$. Then $|\mathcal H|=2^d$. For any $0<\epsilon,\delta<1$, the exact ERM is realizable $(\epsilon,\delta)$-PAC at every realizable law when
$$m\ge\frac{d\log2+\log(1/\delta)}{\epsilon},$$
and is agnostic $(\epsilon,\delta)$-PAC at every law when
$$m\ge\frac{2\bigl(d\log2+\log(2/\delta)\bigr)}{\epsilon^2}.$$
The agnostic condition uses the same class and binary zero-one loss; these are sufficient sample sizes.

## Example references

[[def-realizable-and-agnostic-pac]]: defines the realizable and agnostic PAC probability guarantees used here.

[[thm-finite-class-sample-complexity]]: gives the realizable and agnostic finite-class sample-size conditions.

## Facts & Assumptions

**Given:** A finite discrete instance set of size $d\ge1$, all binary lookup tables on it, and $0<\epsilon,\delta<1$.

[F1] For a finite class of size $N$, exact ERM has the stated realizable sample bound and the agnostic sample bound $m\ge2(\log N+\log(2/\delta))/\epsilon^2$. [[thm-finite-class-sample-complexity]]

[F2] IID means mutually independent sample observations with one common law. [[def-identically-distributed-and-iid-random-variables]]

## Verification

**Given:** The finite lookup-table class and sample-size parameters in the Example.

1.1 A table assigns one of two labels independently at each of the $d$ inputs, so there are exactly $2^d$ tables. Every table is measurable on the finite discrete space, and the class is nonempty. [given, construct]

2.1 [F2] gives the IID sample convention required by [F1]. Substitute $N=2^d$ into [F1] and use $\log(2^d)=d\log2$. The resulting sufficient sample-size conditions are exactly those in the Example. [F1, F2, step 1.1, algebra] ∎
