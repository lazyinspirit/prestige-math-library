---
id: "lem-relative-homology-mayer-vietoris-for-closed-supports"
kind: "lemma"
title: "Relative homology Mayer–Vietoris for closed supports"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-relative-singular-homology","def-relative-cup-product","thm-long-exact-sequence-in-homology"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Lemma 3.27 proof, first exact sequence,
        p.237
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $A,B$ be closed subsets of a space $X$, and let $R$ be a commutative unital ring. Write $H_k(X\Vert K;R)=H_k(X,X\setminus K;R)$. There is an exact sequence
$$\cdots\to H_{k+1}(X\Vert A\cap B;R)\to H_k(X\Vert A\cup B;R)\xrightarrow{j}H_k(X\Vert A;R)\oplus H_k(X\Vert B;R)\xrightarrow{q}H_k(X\Vert A\cap B;R)\to\cdots,$$
where $j$ is the pair of restrictions and $q(a,b)=a|_{A\cap B}-b|_{A\cap B}$. Empty supports and zero coefficients are included. No AC is used.

## Facts & Assumptions

[F1] [[def-relative-singular-homology]] defines relative chains as the quotient of singular chains by the subspace chain complex.

[F2] [[def-relative-cup-product]] proves that for two subspaces $U,V$ open in their union the canonical map $C_*(X)/(C_*(U)+C_*(V))\to C_*(X)/C_*(U\cup V)$ is a chain homotopy equivalence, by the explicit $P=1-dE-Ed$ construction before dualization.

[F3] [[thm-long-exact-sequence-in-homology]] gives the long exact homology sequence of a short exact sequence of chain complexes.

## Proof

**Given:** $X,A,B,R$ as stated. Put $U=X\setminus A$, $V=X\setminus B$, $C=C_*(X;R)$, $D=C_*(U;R)$, and $E=C_*(V;R)$.

1.1 The singular simplex generators common to $D$ and $E$ are exactly the maps with image in $U\cap V$. Hence $D\cap E=C_*(U\cap V;R)$, including for the zero ring. The chain maps $$0\longrightarrow C/(D\cap E)\xrightarrow{j}(C/D)\oplus(C/E)\xrightarrow{q}C/(D+E)\longrightarrow0,$$ given by $j[c]=([c],[c])$ and $q([a],[b])=[a-b]$, are well-defined and commute with boundary because $D,E$ are subcomplexes. [F1, given]

2.1 The map $j$ is injective since a representative mapping to zero lies in both $D$ and $E$. The map $q$ is onto since $q([a],0)=[a]$, and $qj=0$. If $q([a],[b])=0$, write $a-b=d+e$ with $d\in D,e\in E$. Then $c=a-d=b+e$ has residues $[a]$ in $C/D$ and $[b]$ in $C/E$, so $j[c]=([a],[b])$. This proves exactness in every degree; the argument uses only the existence of a decomposition for one element of $D+E$. [step 1.1, algebra]

3.1 By De Morgan's laws, $U\cap V=X\setminus(A\cup B)$ and $U\cup V=X\setminus(A\cap B)$. The first two nonzero complexes in step 1.1 therefore have exactly the relative homology groups displayed in the statement. Since $U,V$ are open, [F2] identifies the homology of the final quotient with $H_*(X\Vert A\cap B;R)$. Applying [F3] to step 2.1 yields the asserted sequence. Composition of $q$ with this canonical quotient map is the difference of the two relative quotient maps, so the printed sign is precisely $a|_{A\cap B}-b|_{A\cap B}$. [F1, F2, F3, step 1.1, step 2.1]

4.1 If $A=\varnothing$, then $U=X$, $D=C$, and the sequence reduces to identity maps on the groups supported in $B$, with zero groups for empty support; the other empty case is symmetric. If $A=B$, the diagonal and difference sequence has the stated exactness. For $X=\varnothing$, $R=0$ or negative chain degrees all complexes concerned are zero. Degree zero follows from the same degreewise short exact sequence, with no reduced-group substitution. All singular generators, including degenerate ones, were retained in step 1.1. The quotient equivalence in [F2] uses prescribed small-chain operators; no AC or choice of a splitting is required. [F1, F2, step 1.1, step 2.1, step 3.1] ∎
