---
dependency_level: 6
id: lem-perfect-field-witt-ring-is-a-complete-discrete-valuation-ring
kind: lemma
title: The Witt ring of any perfect field is a complete discrete valuation ring
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-p-typical-witt-vectors-of-a-perfect-field
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

For every perfect field $k$ of characteristic $p$, the ring $W_p(k)$ is a characteristic-zero complete discrete valuation ring, with uniformizer $p$, residue field $k$ and normalized valuation $v(p)=1$. Its fraction field is $W_p(k)[1/p]$. The valuation of a nonzero vector $(a_i)$ is the least $i$ with $a_i\ne0$. This assertion is not restricted to finite fields and requires no choice axiom.

## Statement references

[[def-p-typical-witt-vectors-of-a-perfect-field]]

[[lem-perfect-base-witt-frobenius-and-p-adic-completeness]]

[[lem-perfect-base-witt-teichmuller-expansions-and-units]]

## Facts & Assumptions

**Given:** The rings, prime and hypotheses in the Statement.

[F1] [[def-p-typical-witt-vectors-of-a-perfect-field]] supplies the notation and underlying tuple set only; no structural conclusion whose proof is being supplied is assumed.

[F2] [[lem-perfect-base-witt-frobenius-and-p-adic-completeness]] supplies its stated interface.

[F3] [[lem-perfect-base-witt-teichmuller-expansions-and-units]] supplies its stated interface.

## Proof

1.1 For a nonzero tuple let $n$ be the least index with nonzero coordinate. By [F2], it belongs to $p^nW_p(k)$ but not $p^{n+1}W_p(k)$. Write it as $p^nu$, uniquely since multiplication by $p$ is injective. Its reduction $u\bmod p$ is nonzero and hence a unit in $k$, so $u$ is a unit by [F3]. Thus every nonzero element is $p^n$ times a unit. Products of two such elements are nonzero because powers of $p$ are nonzero by injectivity and $1\ne0$. This proves the domain assertion and additivity of the indicated valuation; the sum inequality follows from the ideals $p^nW_p(k)$. [given, F2, F3, algebra]

2.1 In any nonzero ideal, choose an element of minimum valuation, which exists by well-ordering of the natural numbers. Its unit factor shows the ideal contains $p^n$, and minimality shows every element is divisible by $p^n$. Hence each nonzero ideal equals $(p^n)$, and $(p)$ is the unique maximal ideal by the unit criterion. This proves the discrete valuation ring assertion. Its completeness, separatedness and residue field are [F2]. Every quotient of nonzero elements is a power of $p$ times a unit, so its fraction field is exactly the localization at $p$. [given, F2, F3, step 1.1, algebra]

3.1 If a positive integer $m$ is written $p^rb$ with $p\nmid b$, the image of $b$ has nonzero residue in $k$, hence is a unit. Therefore $m$ is nonzero by injectivity of multiplication by $p$. The ring has characteristic zero. This argument also gives $v(p)=1$ and uses only a single minimum for any given ideal, not a choice function on ideals. [given, F2, F3, step 1.1, step 2.1, algebra] ∎
