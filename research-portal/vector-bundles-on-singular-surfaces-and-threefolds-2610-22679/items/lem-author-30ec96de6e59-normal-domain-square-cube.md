---
id: lem-author-30ec96de6e59-normal-domain-square-cube
kind: lemma
title: Square-cube roots in a normal domain
status: draft
domain: mathematics
deps:
  - lem-author-30ec96de6e59-square-cube-uniqueness
dependency_roles:
  lem-author-30ec96de6e59-square-cube-uniqueness: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement
Let $A$ be an integrally closed domain. For every $x,y\in A$ with $x^3=y^2$ there is a unique $a\in A$ with $a^2=x$ and $a^3=y$. An integrally closed domain is a domain containing every element of its fraction field that satisfies a monic polynomial over it.

## Facts & Assumptions

**Given:** An integrally closed domain $A$ and $x,y\in A$ satisfying $x^3=y^2$.

**Goal:** Produce the unique simultaneous square and cube root.

[F1] Equal squares and cubes in a reduced ring determine an element uniquely ([[lem-author-30ec96de6e59-square-cube-uniqueness]]).

## Proof

1.1 If $x=0$, then $y=0$ because $A$ is a domain, and $a=0$ works. If $x\ne0$, put $a=y/x$ in the fraction field. The relation gives $a^2=x$ and $a^3=y$. [given, algebra]

2.1 In the second case $a$ satisfies the monic equation $T^2-x=0$, so integral closedness puts $a$ in $A$. A domain is reduced, so [F1] gives uniqueness in both cases. [given, F1, step 1.1] ∎
