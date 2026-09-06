---
id: thm-cellular-homology-computes-singular-homology
kind: theorem
title: Cellular homology computes singular homology
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cellular-homology, lem-skeletal-homology-stabilizes-away-from-the-cell-dimension, lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology, def-cellular-boundary-from-three-consecutive-skeleta, thm-relative-homology-of-consecutive-cw-skeleta, thm-long-exact-sequence-of-a-pair-in-singular-homology]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Theorem 2.35
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

For every CW complex $X$, abelian group $G$, and $n\geq0$, the cellular complex has an
isomorphism $H_n^{\mathrm{cell}}(X;G)\cong H_n(X;G)$, natural with respect to
cellular maps.

## Facts & Assumptions

**Given:** A CW complex $X$, an abelian group $G$, and $n\geq0$. Write $X^{-1}=\varnothing$, suppress $G$ in homology notation, and write $C_m=H_m(X^m,X^{m-1};G)$.

[F1] Consecutive relative skeletal homology is concentrated in the cell dimension ([[thm-relative-homology-of-consecutive-cw-skeleta]]).

[F2] Each skeletal pair has its long exact homology sequence ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

[F3] Skeletal inclusions induce isomorphisms in degrees below the old skeleton dimension ([[lem-skeletal-homology-stabilizes-away-from-the-cell-dimension]]).

[F4] The natural colimit of skeletal homology is singular homology of $X$, also for infinite CW complexes ([[lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology]]).

[F5] Cellular homology is $\ker d_n/\operatorname{im}d_{n+1}$ ([[def-cellular-homology]]); $d_m=i_{m-1}\partial_m$, where $\partial_m:C_m\to H_{m-1}(X^{m-1})$ is the pair connecting map and $i_{m-1}:H_{m-1}(X^{m-1})\to C_{m-1}$ is the relative quotient map ([[def-cellular-boundary-from-three-consecutive-skeleta]]).

## Proof

**Proof technique:** direct.

1.1 For every finite $m\geq0$, $H_k(X^m)=0$ when $k>m$: begin with the discrete $X^0$ case of [F1], and use [F2] successively with [F1] to pass from $X^{m-1}$ to $X^m$. The empty skeleton also has zero homology. [F1, F2, given]

2.1 For $n\geq1$, the exact sequence of $(X^n,X^{n-1})$ and step 1.1 give an injection $i_n:H_n(X^n)\to C_n$ with image $\ker\partial_n$. The same argument one degree lower makes $i_{n-1}$ injective, including $i_0:H_0(X^0)\to H_0(X^0,\varnothing)$, which is an isomorphism. Since $d_n=i_{n-1}\partial_n$, we obtain $\ker d_n=\ker\partial_n=i_n H_n(X^n)$. For $n=0$ this identity follows directly from $i_0$ being an isomorphism and $d_0=0$. [F2, F5, step 1.1, algebra]

3.1 For $(X^{n+1},X^n)$, exactness and $H_n(X^{n+1},X^n)=0$ give the exact tail $$C_{n+1}\xrightarrow{\partial_{n+1}}H_n(X^n)\longrightarrow H_n(X^{n+1})\longrightarrow0.$$ Under the injection $i_n$ of step 2.1, $\operatorname{im}\partial_{n+1}$ corresponds exactly to $\operatorname{im}d_{n+1}$ by [F5]. Taking the quotient therefore yields $$H_n^{\mathrm{cell}}(X;G)\cong H_n(X^n)/\operatorname{im}\partial_{n+1}\cong H_n(X^{n+1};G).$$ [F1, F2, F5, step 2.1, algebra]

4.1 By [F3], all inclusions after $X^{n+1}$ induce isomorphisms on $H_n$. By [F4], their colimit is $H_n(X;G)$. Combining with step 3.1 proves the comparison for arbitrary, possibly infinite-dimensional, CW complexes. [F3, F4, step 3.1]

5.1 A cellular map preserves all skeleta. Its induced chain maps commute with inclusions, quotient maps and connecting homomorphisms: the latter send a relative cycle represented by $c$ to the class of $\partial c$, and a chain map commutes with $\partial$. Consequently every injection, quotient identification and colimit map in steps 2.1--4.1 commutes with cellular maps. The comparison is therefore natural in exactly the stated sense. [step 2.1, step 3.1, step 4.1, given] ∎
