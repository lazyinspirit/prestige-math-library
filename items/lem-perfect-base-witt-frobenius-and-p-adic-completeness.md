---
dependency_level: 4
id: lem-perfect-base-witt-frobenius-and-p-adic-completeness
kind: lemma
title: Perfect-base Witt Frobenius and p-adic completeness
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-p-typical-witt-vectors-of-a-perfect-ring
- lem-integral-p-typical-witt-coordinate-operations
- lem-witt-frobenius-and-verschiebung-coordinate-identities
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

Let $R$ be any perfect commutative characteristic-$p$ ring, including the zero ring. In $W_p(R)$, $F$ is an automorphism, multiplication by $p$ is injective, and
$$p^nW_p(R)=V^nW_p(R)=\{a:a_0=\cdots=a_{n-1}=0\}.$$
First-coordinate reduction identifies $W_p(R)/p$ with $R$, and truncation gives a ring isomorphism
$$W_p(R)\ \cong\ \varprojlim_{n\ge1}W_p(R)/p^n.$$
Thus the Witt ring is separated and complete for its $p$-adic topology. These facts require no choice axiom.

## Statement references

[[def-p-typical-witt-vectors-of-a-perfect-ring]]

[[lem-integral-p-typical-witt-coordinate-operations]]

[[lem-witt-frobenius-and-verschiebung-coordinate-identities]]

## Facts & Assumptions

**Given:** The rings, prime and hypotheses in the Statement.

[F1] [[def-p-typical-witt-vectors-of-a-perfect-ring]] supplies the notation and underlying tuple set only; no structural conclusion whose proof is being supplied is assumed.

[F2] [[lem-integral-p-typical-witt-coordinate-operations]] supplies its stated interface.

[F3] [[lem-witt-frobenius-and-verschiebung-coordinate-identities]] supplies its stated interface.

## Proof

1.1 By [F3], $F$ is coordinatewise Frobenius. The inverse sends every coordinate to its unique $p$th root in $R$, so it is a bijective ring endomorphism. Also $p=VF$, with $V$ injective as a coordinate shift, making multiplication by $p$ injective. Since $F$ and $V$ commute and $F$ is onto, $p^n=V^nF^n$ has image exactly $V^nW_p(R)$, the tuples with their first $n$ coordinates zero. This also proves the residue-ring identification by [F2]'s truncation. [given, F2, F3, algebra]

2.1 A class modulo $p^n$ is uniquely specified by its first $n$ coordinates. A compatible sequence of such classes therefore specifies a unique infinite tuple, and every tuple has those truncations. The resulting bijection is a ring homomorphism by [F2], proving the asserted inverse-limit isomorphism. The intersection of the ideals is zero, and a Cauchy sequence has, for each $n$, an eventually constant truncation; these stabilized truncations give its unique limit by the same construction. No representatives of infinitely many quotient classes are chosen. The argument also applies to the zero ring. [given, F2, step 1.1, algebra] ∎
