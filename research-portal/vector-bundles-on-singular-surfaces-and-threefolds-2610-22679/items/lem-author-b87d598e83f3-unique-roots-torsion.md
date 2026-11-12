---
id: lem-author-b87d598e83f3-unique-roots-torsion
kind: lemma
title: Unique divisibility excludes torsion
status: published
domain: mathematics
deps:
  - math:def-group
  - math:def-injection-surjection-bijection
dependency_roles:
  math:def-group: mathematical-premise
  math:def-injection-surjection-bijection: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Let $G$ be an abelian group. Suppose that for every integer $n\geq1$, multiplication by $n$ is a bijection on $G$. Then $G$ is torsion-free: if $ng=0$ for some $n\geq1$, then $g=0$.

## Facts & Assumptions
**Given:** The abelian group and bijectivity hypotheses in the statement.

**Goal:** Prove the stated torsion-freeness.

[F1] [[math:def-group]] supplies the abelian group, its additive operation and its identity $0$. Here $ng$ denotes the sum of $n$ copies of $g$ for a positive integer $n$; it is an element of $G$ by closure under addition. The term torsion-free has exactly the meaning stated in the conclusion.

[F2] [[math:def-injection-surjection-bijection]] defines a bijection as a map that is both injective and surjective; injectivity means that equal images have equal inputs.

## Proof
1.1 For any $n\geq1$, the multiplication map $n:G\to G$ is injective by the given bijectivity and [F2]. It sends $0$ to $0$: the sum of $n$ copies of $0$ equals $0$ by the additive identity axiom in [F1]. [given, F1, F2]

2.1 If $ng=0$, then $ng=n0$ by step 1.1; injectivity from step 1.1, with the meaning in [F2], gives $g=0$. This holds for every positive $n$, proving the claim. [step 1.1, F2] ∎
