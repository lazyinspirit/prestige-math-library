---
id: lem-exact-dyadic-determinant-sign-correct-and-terminates
kind: lemma
title: The integer-clearance determinant-sign algorithm is correct and terminates
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [alg-exact-dyadic-determinant-sign, lem-dyadic-determinant-integer-clearance-preserves-sign, def-certified-geometric-predicate-determinants]
sources:
  references:
    - title: "CGAL Manual, Robustness Issues: exact arithmetic and predicates"
      url: "https://doc.cgal.org/latest/Manual/devman_robustness.html"
---

## Statement

For every finite encoded $s\times s$ matrix $M$ of exact dyadic rationals,
$s\ge1$, [[alg-exact-dyadic-determinant-sign]] terminates and returns
$\operatorname{sgn}(\det M)$, including zero. No axiom of choice is required.

## Facts & Assumptions

**Given:** A positive integer $s$ and a finite encoding of the dyadic entries of $M$; arbitrary-precision integer arithmetic means exact arithmetic on finite integer encodings, without a fixed storage cap.

[F1] [[alg-exact-dyadic-determinant-sign]]: write $M_{ij}=a_{ij}/2^{b_{ij}}$ with $b_{ij}\ge0$, take $k_i=\max_j b_{ij}$, form the integer matrix $N_{ij}=2^{k_i}M_{ij}$, and return the sign of its integer Leibniz sum.

[F2] [[def-certified-geometric-predicate-determinants]]: the dyadic determinant is the signed permutation sum, with exactly one entry from each row in each product.

[F3] [[lem-dyadic-determinant-integer-clearance-preserves-sign]]: positive power-of-two row clearance preserves determinant sign and zero.

## Proof

1.1 Each finitely encoded dyadic entry can be put in the form in [F1] by integer shifts and cancellation of powers of two; zero uses exponent zero. Since $s\ge1$, every row has a nonempty finite list of exponents and its maximum $k_i$ exists and is computed by finitely many comparisons. Then $N_{ij}=a_{ij}2^{k_i-b_{ij}}$ is an exactly computable integer. [given, F1, construct, algebra]

2.1 In each permutation product of $N$, the row factors multiply to the same positive integer $C=\prod_i2^{k_i}$. Thus [F2] gives $\det N=C\det M$, the sign-preserving identity underlying [F3]. The integer sum in [F1] is exactly $\det N$, so the returned sign equals $\operatorname{sgn}(\det M)$, also when this value is zero. [F1, F2, F3, step 1.1, algebra]

3.1 There are exactly $s!$ permutations, which can be enumerated in lexicographic order from the finite set of tuples of length $s$ with entries in $\{0,\ldots,s-1\}$ by retaining those with distinct entries. Each product, sum, integer shift and sign comparison operates on finite integer encodings and terminates. Hence all loops and the algorithm terminate, even for singular matrices and $s=1$; there is no pivot division. All constructions are explicit and finite, so no axiom of choice is used. [given, F1, step 1.1, step 2.1, construct] ∎
