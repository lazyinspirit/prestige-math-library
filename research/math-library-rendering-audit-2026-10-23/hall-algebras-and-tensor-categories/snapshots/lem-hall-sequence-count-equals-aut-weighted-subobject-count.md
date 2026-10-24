---
id: lem-hall-sequence-count-equals-aut-weighted-subobject-count
kind: lemma
title: "Exact-sequence counts equal endpoint automorphism counts times subobject counts"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-hall-finitary-abelian-category
  - def-untwisted-hall-algebra
  - def-exact-sequence-and-short-exact-sequence-in-an-abelian-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§1.3, PDF p. 7, equation (1.5): exact-sequence counts and subobject Hall numbers."
    - title: "Claus Michael Ringel, The Hall Algebra Approach to Quantum Groups, E.L.A.M. Lectures (1993)"
      url: "https://www.math.uni-bielefeld.de/~ringel/opus/elam.pdf"
      locator: "§2: endpoint-labelled extension counts and automorphism normalizations."
verification:
  precheck: pending
---

## Statement

Let $\mathcal A$ be a small finitary abelian category and let
$M,N,R\in\mathcal A$. Let $P^R_{M,N}$ be the number of endpoint-labelled
short exact sequences $0\to N\to R\to M\to0$, and let
$a_X=|\operatorname{Aut}(X)|$. Then
$$ P^R_{M, N}=a_Ma_Ng^R_{M, N}, $$
where $g^R_{M,N}$ counts subobjects $N\hookrightarrow R$ with quotient
isomorphic to $M$ as in [[def-untwisted-hall-algebra]].

## Facts & Assumptions

**Given:** A finitary abelian category and objects $M,N,R$.

[F1] $g^R_{M,N}$ counts subobject classes represented by monomorphisms
$N\hookrightarrow R$ whose cokernel is isomorphic to $M$
([[def-untwisted-hall-algebra]]).

[F2] Hom sets are finite, and a short exact sequence has a monomorphism and
epimorphism with the indicated kernel and cokernel
([[def-hall-finitary-abelian-category]],
[[def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]]).

## Proof



**Proof technique:** direct.

1.1 Fix a subobject class counted by [F1], represented by $i:N\to R$. Its quotient is a quotient object isomorphic to $M$. The number of isomorphisms $N\to\operatorname{im}(i)$ is $a_N$, and the number of isomorphisms $R/\operatorname{im}(i)\to M$ is $a_M$. Each pair of isomorphisms determines exactly one endpoint-labelled short exact sequence with this subobject; every such sequence arises from that pair. [F1, F2, construct]

2.1 Distinct subobject classes give disjoint sets of labelled sequences, because the image of the first map recovers the subobject class. Therefore each counted subobject contributes exactly $a_Na_M$ sequences, and summing over the $g^R_{M,N}$ classes proves the formula. [step 1.1, F1, algebra]

3.1 The total set of labelled sequences is a subset of $\operatorname{Hom}(N,R)\times\operatorname{Hom}(R,M)$ and hence finite by [F2]. The count $P^R_{M,N}$ is therefore a well-defined natural number. [F2, step 2.1] ∎

