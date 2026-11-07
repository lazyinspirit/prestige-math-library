---
dependency_level: 2
id: lem-integral-p-typical-witt-coordinate-operations
kind: lemma
title: Integral universal operations for p-typical Witt vectors
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-p-typical-witt-vectors-of-a-perfect-ring
- lem-witt-ghost-congruence-criterion
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Joseph Rabinoff, The theory of Witt vectors, sections 2–5; p-typical coordinate
      specialization
    url: https://arxiv.org/abs/1409.7445
---

## Statement

For every prime $p$ there are unique integral polynomials $S_n,P_n,N_n$ in the coordinates through $n$ such that, as formal identities over $\mathbb Z$,
$$w_n(S(X,Y))=w_n(X)+w_n(Y),\quad w_n(P(X,Y))=w_n(X)w_n(Y),\quad w_n(N(X))=-w_n(X).$$
Evaluating these polynomials makes $A^{\mathbb N}$ a functorial commutative unital ring for every commutative unital ring $A$. Its zero and unit are $(0,0,\ldots)$ and $(1,0,\ldots)$, its ghosts are ring homomorphisms, and truncation to the first $n$ coordinates is a ring homomorphism to the corresponding truncated ring. Formal integral identities determine these operations, even when ghosts over $A$ are not injective. No choice axiom is needed.

## Statement references

[[def-p-typical-witt-vectors-of-a-perfect-ring]]

[[lem-witt-ghost-congruence-criterion]]

## Facts & Assumptions

**Given:** The rings, prime and hypotheses in the Statement.

[F1] [[def-p-typical-witt-vectors-of-a-perfect-ring]] supplies the notation and underlying tuple set only; no structural conclusion whose proof is being supplied is assumed.

[F2] [[lem-witt-ghost-congruence-criterion]] supplies its stated interface.

## Proof

1.1 Work in $B=\mathbb Z[X_0,Y_0,X_1,Y_1,\ldots]$, with $\phi$ fixing integers and sending each variable to its $p$th power. Modulo $p$ this is Frobenius: the binomial theorem and $c^p\equiv c\pmod p$ for integers prove the assertion for every polynomial. The latter congruence follows by induction on integers from the binomial theorem, with negative integers treated by sign (also for $p=2$). By [F2], both ghost sequences $w_n(X),w_n(Y)$ satisfy the congruences. Their sum, product and negative do too, since $\phi$ is a ring endomorphism. [given, F2, algebra]

2.1 Apply [F2] to these three sequences. Its recursion yields integral $S_n,P_n,N_n$, and the recursion shows that only variables through $n$ occur. Uniqueness follows by cancellation of $p^n$ in $B$. Zero and unit have the indicated coordinates because their ghosts are respectively all zero and all one. [given, F2, step 1.1, algebra]

3.1 Every ring identity for these operations is an identity of integral coordinate polynomials: use the polynomial ring on all tuples involved, where ghost equality implies coordinate equality by the triangular formula and absence of $p$-torsion. On ghosts the identity is the ordinary corresponding identity in that polynomial ring. This proves associativity, commutativity, distributivity, additive inverses, and unit laws as polynomial identities; they remain true after evaluation in any $A$. Evaluation also commutes with every ring homomorphism $A\to A'$, so the operations are functorial. Each coordinate uses only earlier coordinates, proving the truncation assertion. This argument verifies polynomial identities directly, without choosing lifts of an arbitrary infinite tuple. [given, step 2.1, algebra] ∎
