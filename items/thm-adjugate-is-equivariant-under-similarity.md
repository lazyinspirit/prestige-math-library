---
id: thm-adjugate-is-equivariant-under-similarity
kind: theorem
title: "Over a commutative ring, adj(P^{-1}AP)=P^{-1}adj(A)P for every invertible P"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-determinant-rank-one-update-over-a-commutative-ring,
       cor-determinant-is-invariant-under-similarity,
       def-invertible-matrix-and-similarity-over-a-commutative-ring,
       thm-ring-matrix-arithmetic-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jaroslav Vrabel, A note on the matrix determinant lemma"
      url: "https://arxiv.org/abs/1608.03207"
    - title: "András Pál, Introduction to Commutative Algebra"
      url: "https://www.ma.imperial.ac.uk/~apal4/commalgnotes.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, $n\geq1$, $A,P\in M_n(R)$, and suppose $P$ is
invertible. Then

$$\operatorname{adj}(P^{-1}AP) =P^{-1}\operatorname{adj}(A)P.$$

## Facts & Assumptions

**Given:** $R,n,A,P$ as in the statement, and $C:=P^{-1}AP$.

[F1] Similarity over a commutative ring means $C=P^{-1}AP$ for an invertible
$P$ ([[def-invertible-matrix-and-similarity-over-a-commutative-ring]]).

[L1] Similar matrices have equal determinants
([[cor-determinant-is-invariant-under-similarity]]).

[L2] For columns $u,v$,
$\det(B+uv^{\mathsf T})
=\det(B)+v^{\mathsf T}\operatorname{adj}(B)u$
([[lem-determinant-rank-one-update-over-a-commutative-ring]]).

[L3] Matrix multiplication is associative and distributive, transpose reverses
products, and the standard coordinate columns select matrix entries
([[thm-ring-matrix-arithmetic-laws]]).

## Proof

**Proof technique:** direct.

1.1 For arbitrary columns $u,v$, $$ C+uv^{\mathsf T} =P^{-1}\bigl(A+(Pu)(v^{\mathsf T}P^{-1})\bigr)P. $$ [F1, L3, algebra]
2.1 Apply [L1] to step 1.1, then [L2] to both rank-one updates. Since $\det(C)=\det(A)$, cancellation in the additive group of $R$ gives $$ v^{\mathsf T}\operatorname{adj}(C)u =v^{\mathsf T}P^{-1}\operatorname{adj}(A)Pu. $$ [step 1.1, L1, L2, L3]
3.1 For each $i,j$, choose $v$ to be standard column $i$ and $u$ to be standard column $j$. Step 2.1 says that the $(i,j)$ entries of $\operatorname{adj}(C)$ and $P^{-1}\operatorname{adj}(A)P$ are equal. [step 2.1, L3]
4.1 Equality of all entries proves $\operatorname{adj}(C)=P^{-1}\operatorname{adj}(A)P$, and substituting the definition of $C$ proves the statement. [step 3.1, F1] ∎