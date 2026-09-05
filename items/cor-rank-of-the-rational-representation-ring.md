---
id: cor-rank-of-the-rational-representation-ring
kind: corollary
title: "The rank of $R_{\\mathbb Q}(G)$ is the number of conjugacy classes of cyclic subgroups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-rational-character-ring, cor-cyclic-fixed-points-detect-rational-representations, thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets, thm-character-of-a-permutation-representation-counts-fixed-points]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Tammo tom Dieck, Representation Theory, Proposition (4.5.4)"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
---

## Statement

Let $G$ be a finite group. The rank of the free abelian group
$R_{\mathbb Q}(G)$ equals the number of conjugacy classes of cyclic subgroups of
$G$.

## Facts & Assumptions

**Given:** A finite group $G$.

[F1] The map $$x\longmapsto \bigl(\langle \operatorname{Res}_C^Gx,1_C\rangle_C\bigr)_{(C)}$$ from $R_{\mathbb Q}(G)$ to the product over cyclic conjugacy classes is injective ([[cor-cyclic-fixed-points-detect-rational-representations]]).

[F2] The induced trivial representation $\operatorname{Ind}_C^G1_C$ is the permutation representation of $G$ on $G/C$ ([[thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets]]).

[F3] The character of a permutation representation counts fixed points ([[thm-character-of-a-permutation-representation-counts-fixed-points]]).

## Proof

**Proof technique:** direct.

1.1 Choose representatives $C_1,\dots,C_r$ of the conjugacy classes of cyclic subgroups of $G$. By [F1], the group $R_{\mathbb Q}(G)$ injects into $\mathbb Q^r$, so its rank is at most $r$. [F1, given, choose]

1.2 For each $i$, let $U_i:=\operatorname{Ind}_{C_i}^G1_{C_i}$, viewed as an element of $R_{\mathbb Q}(G)$. Suppose that $a_1U_1+\cdots+a_rU_r=0$ with $a_i\in\mathbb Q$. Reorder the representatives so that $|C_1|\ge\cdots\ge|C_r|$, and choose $i$ minimal with $a_i\ne0$. Let $g_i$ be a generator of $C_i$. [F2, given, choose]

2.1 If $U_j(g_i)\ne0$, then [F2] and [F3] show that $g_i$ fixes some coset $xC_j$, so $x^{-1}g_ix\in C_j$. Therefore a conjugate of the cyclic subgroup $C_i=\langle g_i\rangle$ lies in $C_j$, which implies $|C_i|\le|C_j|$. In the relation from step 1.2, every index $j<i$ has $a_j=0$ by minimality of $i$, so only $j\ge i$ can contribute. For such $j$, the ordering gives $|C_j|\le|C_i|$, hence $|C_j|=|C_i|$. A subgroup of $C_j$ with the same finite order as $C_j$ must equal $C_j$, so the conjugate of $C_i$ lying in $C_j$ is all of $C_j$. Thus $C_j$ is conjugate to $C_i$, and because $C_1,\dots,C_r$ were chosen as distinct conjugacy-class representatives, this forces $j=i$. On the other hand, $g_i$ fixes the coset $C_i$ itself, so [F2] and [F3] give $U_i(g_i)>0$. Evaluating the relation from step 1.2 at $g_i$ therefore yields $a_iU_i(g_i)=0$, a contradiction. Thus the $U_i$ are linearly independent. [F2, F3, step 1.2, algebra]

3.1 Step 2.1 gives $r$ linearly independent elements of $R_{\mathbb Q}(G)$, while step 1.1 shows that the rank is at most $r$. Hence $\operatorname{rank}R_{\mathbb Q}(G)=r$, the number of cyclic conjugacy classes. [step 1.1, step 2.1, algebra] ∎
