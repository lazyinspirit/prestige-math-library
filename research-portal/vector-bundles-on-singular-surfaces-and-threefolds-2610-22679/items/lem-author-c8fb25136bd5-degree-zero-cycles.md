---
id: lem-author-c8fb25136bd5-degree-zero-cycles
kind: lemma
title: Degree-zero Bloch cycles are ordinary cycles
status: published
domain: mathematics
deps:
  - def-bloch-higher-cycle-complex
dependency_roles:
  def-bloch-higher-cycle-complex: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
---

## Statement
Let $k$ be a field, $X$ a smooth finite-type $k$-scheme, and $r\geq 0$. Write $Z^r(X)$ for the free abelian group on integral closed subschemes of codimension $r$ in $X$, with codimension measured on the ambient irreducible component containing the generic point. Then the identification $X\times\Delta^0=X$ gives $z^r(X,0)=Z^r(X)$.

## Statement references

[[def-bloch-higher-cycle-complex]]

## Facts & Assumptions

**Given:** $k$, $X$ and $r$ as in the statement.

**Goal:** Identify the two free abelian groups on their generators.

[F1] The definition of the Bloch complex uses integral closed codimension-$r$ subschemes meeting all nonempty coordinate faces in codimension $r$. [[def-bloch-higher-cycle-complex]]

## Proof

1.1 The equation defining $\Delta^0$ is $t_0=1$, so $X\times\Delta^0=X$. Its only nonempty coordinate face is itself, and every codimension-$r$ generator meets this face in codimension $r$. [F1]

2.1 Thus the two displayed free abelian groups have exactly the same generators, and the identity on those generators is the asserted identification. [step 1.1] ∎
