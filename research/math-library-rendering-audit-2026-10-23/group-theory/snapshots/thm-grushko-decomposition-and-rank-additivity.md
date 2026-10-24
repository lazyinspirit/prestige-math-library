---
id: thm-grushko-decomposition-and-rank-additivity
kind: theorem
title: "Grushko decomposition and rank additivity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-kurosh-subgroup-theorem, thm-nielsen-schreier-with-an-explicit-basis, thm-finite-free-bases-have-the-same-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
    - title: "John Meier, Groups, Graphs and Trees"
      url: "https://web.archive.org/web/20260221182226if_/https://www.scribd.com/document/971180914/Groups-graphs-and-trees-An-introduction-to-the-geometry-of-infinite-groups-1st-Edition-John-Meier"
pipeline_run: null
---

## Statement

Let $G$ be a finitely generated group and suppose

$$G\cong A_1\ast\cdots\ast A_m\ast F_r,$$

where each $A_j$ is nontrivial, freely indecomposable, and not infinite cyclic,
and $F_r$ is a free group of finite rank. If also

$$G\cong B_1\ast\cdots\ast B_n\ast F_s$$

is another such decomposition, then $m=n$, after permuting indices each $A_j$
is conjugate to $B_j$, and $r=s$.

## Facts & Assumptions

**Given:** A finitely generated group $G$ equipped with the two displayed decompositions in the statement.

[L1] Every subgroup of a free product is itself a free product of conjugates of subgroups of the factors together with a free group. ([[thm-kurosh-subgroup-theorem]])

[L2] Every subgroup of a finitely generated free group is free; this is the finite-basis case of Nielsen-Schreier and requires no choice hypothesis. ([[thm-nielsen-schreier-with-an-explicit-basis]])

[L3] Any two finite free bases of the same free group have the same cardinality. ([[thm-finite-free-bases-have-the-same-cardinality]])

## Proof

**Proof technique:** direct.

1.1 Fix $j$. Apply [L1] to the subgroup $A_j\le G$ inside the decomposition $G\cong B_1\ast\cdots\ast B_n\ast F_s$. Because $A_j$ is freely indecomposable and not infinite cyclic, its Kurosh decomposition can contain neither a positive-rank free part nor two distinct nontrivial factors. By [L2], any subgroup of a conjugate of $F_s$ is free, so a nontrivial such subgroup would be either infinite cyclic or freely decomposable. Therefore the unique nontrivial Kurosh factor is $A_j$ itself, and it is contained in a conjugate of some $B_k$. [L1, L2, given]

2.1 Let $B_k'=gB_kg^{-1}$ be a conjugate containing $A_j$. Now view $B_k'$ as a subgroup of the first decomposition $G\cong A_1\ast\cdots\ast A_m\ast F_r$ and apply [L1] again. The identity double coset for the factor $A_j$ contributes the nontrivial subgroup $A_j$ to the Kurosh decomposition of $B_k'$. Since $B_k'$ is also freely indecomposable and not infinite cyclic, its Kurosh decomposition has no second nontrivial factor and no free part. Hence $B_k'=A_j$. So every $A_j$ is conjugate to some $B_k$. [L1, step 1.1]

3.1 Apply the same argument with the roles of the two decompositions reversed: every $B_k$ is conjugate to some $A_j$. Also, applying [L1] to the subgroup $A_j$ inside its own decomposition shows that $A_j$ meets every conjugate of $A_\ell$ for $\ell\neq j$ and every conjugate of $F_r$ trivially, because the identity double coset for $A_j$ already supplies the only possible nontrivial Kurosh factor. Therefore two distinct $A_j$ cannot both be conjugate to the same $B_k$. By symmetry the correspondence is bijective, so after permuting indices we get $m=n$ and each $A_j$ is conjugate to $B_j$. [L1, step 2.1]

4.1 After that permutation, quotient $G$ by the normal closure of the factors $A_1,\dots,A_m$. In the first decomposition this kills the nonfree factors and leaves $F_r$; in the second decomposition it kills the conjugate factors $B_1,\dots,B_m$ and leaves $F_s$. Thus $F_r\cong F_s$. Since both free groups have finite rank, [L3] gives $r=s$. This proves the uniqueness and rank statement. [L3, step 3.1] ∎

## Remarks

This is the uniqueness and free-rank additivity half of Grushko's theorem for decompositions already in hand. The classical existence half is deeper and is not re-proved on this page.
