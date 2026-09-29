---
id: lem-walsh-hadamard-code-has-distance-one-half
kind: lemma
title: "Distinct Walsh–Hadamard words differ on half the cube"
status: published
origin: pipeline
deps:
  - def-walsh-hadamard-encoding-and-relative-distance
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: constructive
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.1, printed p. 363"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

For $n\ge1$ and distinct $u,v\in\mathbb F_2^n$, the tables
$\operatorname{WH}_n(u)$ and $\operatorname{WH}_n(v)$ differ at exactly
$2^{n-1}$ of their $2^n$ coordinates, so their relative distance is one half.
For $n=0$ there are no distinct messages.

## Facts & Assumptions

[F1] $\operatorname{WH}_n(u)$ is the truth table of $r\mapsto u\cdot r$ on
$\mathbb F_2^n$, indexed by $r$, and the relative distance is the fraction of
disagreeing coordinates. ([[def-walsh-hadamard-encoding-and-relative-distance]])

## Proof

**Given:** Fix $n\ge1$ and distinct $u,v\in\mathbb F_2^n$.

1.1 Put $d=u+v$. Since $u\ne v$, $d$ is nonzero. At a mask $r\in\mathbb F_2^n$, the two table values disagree exactly when $(u\cdot r)+(v\cdot r)=d\cdot r=1$. [F1, given, construct]

2.1 Choose a coordinate $j$ with $d_j=1$ and let $e_j$ be its unit vector. The map $r\mapsto r+e_j$ is an involution without fixed points, and $d\cdot(r+e_j)=d\cdot r+1$. Thus it partitions the $2^n$ masks into $2^{n-1}$ pairs, with exactly one mask in each pair satisfying $d\cdot r=1$. The coordinate choice exists because $d$ is a nonzero finite binary vector. [step 1.1, algebra]

3.1 By step 2.1 and the disagreement criterion in step 1.1, exactly $2^{n-1}$ table coordinates differ. Dividing by the $2^n$ coordinates gives relative distance $2^{n-1}/2^n=1/2$. If $n=0$, $\mathbb F_2^0$ has only its empty vector, so the statement has no distinct-message pair to check. [F1, step 1.1, step 2.1, algebra, discharge-construct] ∎
