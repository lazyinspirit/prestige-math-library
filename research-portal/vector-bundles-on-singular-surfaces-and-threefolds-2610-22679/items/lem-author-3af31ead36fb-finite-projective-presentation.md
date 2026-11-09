---
id: lem-author-3af31ead36fb-finite-projective-presentation
kind: lemma
title: Finite projective modules are finitely presented
status: draft
domain: mathematics
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement
Let $A$ be a commutative unital ring and $P$ a finite projective $A$-module. Then $P$ is finitely presented: there is an exact sequence $A^m\to A^n\to P\to0$ with $m,n$ finite. Here finite projective means finitely generated and having the lifting property through surjective module maps.

## Facts & Assumptions

**Given:** A commutative unital ring $A$ and a finite projective $A$-module $P$.

**Goal:** Construct a finite presentation of $P$.

## Proof

1.1 Choose finitely many generators of $P$ and let $q:A^n\to P$ be the resulting surjection. Projectivity lifts the identity of $P$ through $q$, giving a section $s:P\to A^n$. Thus $A^n=s(P)\oplus\ker q$. [given, choose, construct]

2.1 The projection $A^n\to\ker q$ maps the standard basis to a finite generating set of $\ker q$. Mapping a finite free module onto that kernel and composing with its inclusion in $A^n$ gives the required presentation. [step 1.1, construct] ∎
