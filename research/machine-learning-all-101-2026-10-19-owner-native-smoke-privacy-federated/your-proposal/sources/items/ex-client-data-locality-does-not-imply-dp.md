---
id: ex-client-data-locality-does-not-imply-dp
kind: example
title: Keeping records on clients does not imply differential privacy
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-differential-privacy-and-adjacency
  - def-measurable-space
  - def-probability-measure
  - def-measure-kernel-and-probability-kernel
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
sources:
  references: []
proof_strategy: direct
---

## Example

Let the database be a finite record set, use add/remove adjacency, and let a
distributed system release the exact number of records after each client has
kept its own record locally. This deterministic count release is not
$(\varepsilon,\delta)$-differentially private for any finite
$\varepsilon\ge0$ and any $0\le\delta<1$.

## Example references

[[def-differential-privacy-and-adjacency|Add/remove differential privacy]]

## Facts & Assumptions
**Given:** The database domain and exact count mechanism in the Example.

[F1] [[def-differential-privacy-and-adjacency]]: differential privacy requires the event inequality for every ordered neighboring database pair and every measurable output event.

[F2] [[def-measurable-space]], [[def-probability-measure]], and [[def-measure-kernel-and-probability-kernel]]: a deterministic count release is a probability kernel into the finite output space $\mathbb N$ equipped with its power-set sigma algebra.



**Proof technique:** direct.

## Proof

1.1 Let $D=\varnothing$, $D'=\{r\}$, and let $M(E)=|E|$. These databases are add/remove neighbors. For the measurable event $A=\{1\}$, $\Pr[M(D)\in A]=0$ and $\Pr[M(D')\in A]=1$. [F1, F2, given, construct]

2.1 The required privacy inequality in the order $(D',D)$ would read $1\le e^\varepsilon\cdot0+\delta=\delta$, which is false whenever $\delta<1$. Therefore the exact count mechanism is not $(\varepsilon,\delta)$-differentially private for the stated parameters. [F1, step 1.1, given, algebra] ∎