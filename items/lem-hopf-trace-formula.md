---
id: "lem-hopf-trace-formula"
kind: "lemma"
title: "Hopf trace formula"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-trace-of-an-endomorphism","thm-trace-of-ab-equals-trace-of-ba","thm-dimension-of-a-linear-subspace"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Hopf trace formula, p.180
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $(C_i,d_i)_{i\in\mathbb Z}$ be a bounded chain complex of finite-dimensional vector spaces over a field $F$, and let $T:C\to C$ be a chain map. Then
$$\sum_i(-1)^i\operatorname{tr}(T_i)=\sum_i(-1)^i\operatorname{tr}(H_i(T)).$$
Both sums are finite. No AC is required.

## Facts & Assumptions

[F1] [[def-trace-of-an-endomorphism]] defines basis-independent trace, including trace zero on the zero space.

[F2] [[thm-trace-of-ab-equals-trace-of-ba]] gives $\operatorname{tr}(AB)=\operatorname{tr}(BA)$, including zero-size matrices.

[F3] [[thm-dimension-of-a-linear-subspace]] proves finite-dimensionality of subspaces and extension of an independent subset to a basis in finite dimension without AC.

## Proof

**Given:** $F,C,d,T$ as stated, with $d_iT_i=T_{i-1}d_i$. Choose integers $a\le b$ outside which $C_i=0$; a zero complex is permitted.

1.1 Put $Z_i=\ker d_i$ and $B_i=\operatorname{im}d_{i+1}$. The chain identity gives $B_i\subset Z_i$. The chain-map identity makes both subspaces invariant under $T_i$: if $d_ix=0$ then $d_iT_ix=T_{i-1}d_ix=0$, and $T_id_{i+1}y=d_{i+1}T_{i+1}y$ is again a boundary. By [F3], choose a finite basis of $B_i$, extend it to a basis of $Z_i$, then extend to a basis of $C_i$. Let $H'_i$ and $S_i$ be the spans of the two added blocks. Thus $$C_i=B_i\oplus H'_i\oplus S_i,\qquad Z_i=B_i\oplus H'_i.$$ Only the finitely many degrees $a,\ldots,b$ require bases; elsewhere use empty bases. [F3, given]

2.1 In this ordered three-block basis, invariance from step 1.1 gives a block upper triangular matrix for $T_i$. Denote its diagonal blocks by $A_i$ on $B_i$, $P_i$ on the quotient represented by $H'_i$, and $Q_i$ on the quotient represented by $S_i$. Summing diagonal entries gives $$\operatorname{tr}(T_i)=\operatorname{tr}(A_i)+\operatorname{tr}(P_i)+\operatorname{tr}(Q_i).$$ The map $H'_i\to Z_i/B_i=H_i(C)$ sending a vector to its class is bijective: the direct sum supplies unique representatives. In these quotient coordinates $P_i$ is exactly the induced homology endomorphism, since the other part of $T_i(H'_i)$ lies in $B_i$. Hence $\operatorname{tr}(P_i)=\operatorname{tr}(H_i(T))$ by [F1]. No invariance of $H'_i$ itself is assumed. [F1, step 1.1]

2.2 The differential restricts to an isomorphism $D_i:S_i\to B_{i-1}$. It is injective because $S_i\cap Z_i=0$, and it is onto because any $d_ix$ equals the differential of the $S_i$ component of $x$. For $s\in S_i$, the $B_i$ and $H'_i$ components of $T_is$ are cycles and are killed by $d_i$. The chain-map equation therefore reads $$D_iQ_i=A_{i-1}D_i.$$ Consequently $A_{i-1}=D_iQ_iD_i^{-1}$ in the chosen bases, and [F2] gives $\operatorname{tr}(A_{i-1})=\operatorname{tr}(Q_iD_i^{-1}D_i)=\operatorname{tr}(Q_i)$. This holds also when both spaces are zero. [F2, step 1.1]

3.1 Combining steps 2.1 and 2.2 yields $$\operatorname{tr}(T_i)=\operatorname{tr}(H_i(T))+\operatorname{tr}(A_i)+\operatorname{tr}(A_{i-1}).$$ Multiply by $(-1)^i$ and sum for $a\le i\le b$. The boundary terms cancel in adjacent degrees: the coefficient of $\operatorname{tr}(A_j)$ in the two sums is $(-1)^j+(-1)^{j+1}=0$. The possible unmatched terms are $A_{a-1}$ and $A_b$, both zero because $C_{a-1}=0$ and $C_{b+1}=0$ respectively. This proves the displayed formula, and homology outside this range is zero since its chain group is zero. [F1, step 2.1, step 2.2]

4.1 If the complex is zero, every matrix and both sums are empty or zero. If it is concentrated in one degree, the differential and boundary blocks are zero and the identity reduces to $T_i=H_i(T)$ in the same coordinates. Zero endomorphisms and zero-dimensional homology blocks give trace zero; nilpotent or non-diagonalizable maps cause no exception because only diagonal blocks, not eigenvectors, were used. The cancellation in step 3.1 is valid in characteristic two as well, where additive negatives coincide. Negative grading indices are allowed and the finite endpoint calculation is unchanged. There are no topological simplices in this algebraic statement. All basis selections in step 1.1 are in finitely many finite-dimensional spaces under [F3], so no arbitrary-index AC is used. [F1, F2, F3, step 1.1, step 2.1, step 2.2, step 3.1] ∎
