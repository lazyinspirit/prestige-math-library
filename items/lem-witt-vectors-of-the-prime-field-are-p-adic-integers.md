---
dependency_level: 6
id: lem-witt-vectors-of-the-prime-field-are-p-adic-integers
kind: lemma
title: The Witt vectors of the prime field are the p-adic integers
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-p-typical-witt-vectors-of-a-perfect-ring
- def-p-adic-integers-as-compatible-residue-classes
- lem-perfect-base-witt-frobenius-and-p-adic-completeness
- lem-perfect-base-witt-teichmuller-expansions-and-units
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

There is a canonical topological ring isomorphism $\mathbb Z_p\cong W_p(\mathbb F_p)$ extending the integer map. For any perfect characteristic-$p$ ring $R$, coordinatewise inclusion of $\mathbb F_p$ induces a unital map $\mathbb Z_p\to W_p(R)$, injective when $R$ is nonzero. Frobenius fixes its image. No choice is used.

## Statement references

[[def-p-typical-witt-vectors-of-a-perfect-ring]]

[[def-p-adic-integers-as-compatible-residue-classes]]

[[lem-perfect-base-witt-frobenius-and-p-adic-completeness]]

[[lem-perfect-base-witt-teichmuller-expansions-and-units]]

## Facts & Assumptions

**Given:** The rings, prime and hypotheses in the Statement.

[F1] [[def-p-typical-witt-vectors-of-a-perfect-ring]] supplies the notation and underlying tuple set only; no structural conclusion whose proof is being supplied is assumed.

[F2] [[def-p-adic-integers-as-compatible-residue-classes]] supplies its stated interface.

[F3] [[lem-perfect-base-witt-frobenius-and-p-adic-completeness]] supplies its stated interface.

[F4] [[lem-perfect-base-witt-teichmuller-expansions-and-units]] supplies its stated interface.

## Proof

1.1 In $W_p(\mathbb F_p)$, a nonzero integer $m=p^rb$ with $p\nmid b$ has valuation exactly $r$: $b$ is a unit by [F4] and $p$ is a non-zero-divisor by [F3]. Therefore the integer map induces an injection $\mathbb Z/p^n\mathbb Z\to W_p(\mathbb F_p)/p^n$. The target is the set of $n$ coordinates in $\mathbb F_p$ by [F3], so has exactly $p^n$ elements. The injection is thus bijective. [given, F3, F4, algebra]

2.1 These ring isomorphisms commute with reduction. Their inverse limit identifies the compatible residues defining $\mathbb Z_p$ in [F2], with coordinatewise ring operations, with $W_p(\mathbb F_p)$ by [F3]; the filtrations also coincide, proving the topological assertion. The base-ring map $\mathbb F_p\to R$ yields the stated Witt map by universal functoriality. For nonzero $R$ it is coordinatewise injective, hence injective. Coordinatewise Frobenius fixes each prime-field coordinate, so fixes the image. For the zero ring it is the unique unital map to that ring. [given, F2, F3, step 1.1, algebra] ∎
