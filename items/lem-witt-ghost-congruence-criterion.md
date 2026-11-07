---
dependency_level: 1
id: lem-witt-ghost-congruence-criterion
kind: lemma
title: Ghost congruences and integral p-typical coordinates
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-p-typical-witt-vectors-of-a-perfect-ring
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

Let $p$ be prime. Write $w_n(a)=\sum_{i=0}^np^ia_i^{p^{n-i}}$. Suppose $A$ is a commutative ring in which multiplication by $p$ is injective, and $\phi:A\to A$ is a unital endomorphism with $\phi(a)\equiv a^p\pmod {pA}$. A sequence $b_n\in A$ is $w_n(a)$ for a unique $a\in A^{\mathbb N}$ if and only if
$$b_n\equiv\phi(b_{n-1})\pmod {p^nA}\quad(n\ge1).$$
Also, in any commutative ring, $x\equiv y\pmod {p^m}$ with $m\ge1$ implies $x^{p^r}\equiv y^{p^r}\pmod {p^{m+r}}$ for every $r\ge0$. These assertions require no choice axiom.

## Statement references

[[def-p-typical-witt-vectors-of-a-perfect-ring]]

## Facts & Assumptions

**Given:** The rings, prime and hypotheses in the Statement.

[F1] [[def-p-typical-witt-vectors-of-a-perfect-ring]] supplies the notation and underlying tuple set only; no structural conclusion whose proof is being supplied is assumed.

## Proof

1.1 Write $x=y+p^mz$. In the binomial expansion of $x^p-y^p$, the term with one $z$ has a factor $p^{m+1}$; terms with $1<j<p$ have a factor $p^{mj+1}$ because $p$ divides $\binom pj$; the last term has $p^{mp}$, and $mp\ge m+1$. This proves the power assertion for $r=1$, including $p=2$; iteration proves it for all $r$. [given, algebra]

2.1 If $b_n=w_n(a)$, subtract $\phi(w_{n-1}(a))$ from $w_n(a)$. For $i<n$, the corresponding difference is $p^i((a_i^p)^{p^{n-1-i}}-\phi(a_i)^{p^{n-1-i}})$, which belongs to $p^nA$ by step 1.1. The remaining term is $p^na_n$. This proves necessity. [given, step 1.1, algebra]

3.1 Conversely set $a_0=b_0$. Having constructed through $a_{n-1}$ with the required ghosts, apply step 2.1 to the partial tuple with last coordinate zero: its $n$th ghost is congruent to $\phi(b_{n-1})$, hence to $b_n$, modulo $p^nA$. Thus $b_n-\sum_{i<n}p^ia_i^{p^{n-i}}$ has a unique quotient by $p^n$. Define that quotient to be $a_n$. This recursion proves existence and uniqueness at every coordinate. It is a recursion with unique outputs, so no choice is used. [given, step 2.1, algebra] ∎
