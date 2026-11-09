---
id: lem-author-75596422a482-quotient-inclusion
kind: lemma
title: Restriction modulo its kernel
status: published
domain: mathematics
deps:
  - lem-author-75596422a482-restriction-kernel
dependency_roles:
  lem-author-75596422a482-restriction-kernel: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 6
---

## Statement
With $j^*:z^r(U,\bullet)\to z^r(U\setminus T,\bullet)$ as above and $K=\ker j^*$, the induced chain map $z^r(U,\bullet)/K\to z^r(U\setminus T,\bullet)$ is degreewise injective and has the same cokernel complex as $j^*$.

## Statement references

[[lem-author-75596422a482-restriction-kernel]]

## Facts & Assumptions

**Given:** A field $k$, a smooth finite-type $k$-scheme $U$, closed $T\subset U$, and $r\geq0$.

**Goal:** Identify the quotient map and its cokernel.

[F1] $K$ is the kernel subcomplex of the restriction chain map. [[lem-author-75596422a482-restriction-kernel]]

## Proof

1.1 In each degree, the induced map from the quotient by the kernel is injective and has image equal to the image of the original homomorphism. [F1, algebra]

2.1 Because the original map and the quotient projection commute with differentials, the induced map is a chain map. Its cokernel is the target modulo the same image, with the same induced differential. [F1, step 1.1] ∎
