---
id: lem-bar-transfer-is-a-chain-map-and-choice-independent-up-to-chain-homotopy
kind: lemma
title: "Bar transfer is a chain map independent of the transversal"
status: draft
origin: pipeline
deps: [def-finite-index-transfer-on-normalized-bar-chains]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
---

## Statement

The transfer formula is well-defined on normalized diagonal coinvariants and is a chain map. Any two finite right transversals yield chain-homotopic transfer maps. Hence transfer on homology is independent of the transversal, with the inherited derived-homology conventions.

## Facts & Assumptions

**Given:** G,H,M,T and the retraction r in the transfer definition.

[F1] Transfer is the finite sum using the vertex retraction r and coefficients tm ([[def-finite-index-transfer-on-normalized-bar-chains]]).

## Proof

1.1 The retraction satisfies $r(hx)=hr(x)$ for $h\in H$, since $Hx=Hhx$. For $x\in G$ and $t\in T$ write $tx=h_t t_x$. Right multiplication by x permutes the right cosets, so $t\mapsto t_x$ permutes T. The t-summand on $[(xg_0,\ldots,xg_n)\otimes xm]$ is $[(h_tr(t_xg_0),\ldots,h_tr(t_xg_n))\otimes h_tt_xm]$, equal in H-coinvariants to the $t_x$-summand of the original chain. This proves diagonal invariance and well-definedness. [F1, given, algebra]

1.2 For two H-equivariant vertex maps f,u define the prism $P_n(v_0,\ldots,v_n)=\sum_{i=0}^n(-1)^i(fv_0,\ldots,fv_i,uv_i,\ldots,uv_n)$. Expansion gives $dP+Pd=u_*-f_*$: deletions away from the switch cancel the corresponding terms of Pd; the two switch faces at consecutive values of i cancel, leaving only deletion of the first f-vertex at i=0 and of the last u-vertex at i=n, with signs + and -. For n=0 this reads $d(fv_0,uv_0)=(uv_0)-(fv_0)$. Equivariance makes this descend to diagonal coinvariants. If $v_j=v_{j+1}$, each prism summand has either an adjacent equal f-pair or an adjacent equal u-pair, so it also descends to normalization. [given, algebra]

2.1 For each deletion index $0\le j\le n$, deleting the jth vertex of $(r(tg_0),\ldots,r(tg_n))$ is exactly applying r to the tuple with $g_j$ deleted; the coefficient remains tm. Thus all faces, including j=0,n, commute with the sum and so does their alternating differential. Adjacent equal input vertices stay equal after r, so degeneracies map to degeneracies. The formula descends to normalized chains. [step 1.1, algebra]

2.2 Let U be another transversal with retraction u. For each right coset write its representative in U as $a_t t$, $a_t\in H$. The corresponding U-summand becomes $[(u(tg_0),\ldots,u(tg_n))\otimes tm]$ after translating by $a_t^{-1}$ in the H-coinvariants. Thus compare r and u on the same inputs $(tg_0,\ldots,tg_n)$ and same coefficient tm. Sum the prism of step 1.2 over T. The permutation calculation of step 1.1 applies to the prism too, because both vertex maps are H-equivariant. It gives a well-defined normalized homotopy K with $dK+Kd=\operatorname{Tr}_U-\operatorname{Tr}_T$. [step 1.1, step 1.2, algebra]

3.1 For completeness, in the inhomogeneous tuple $(1,g_1,g_1g_2,\ldots,g_1\cdots g_n)$, the recursion gives $r(tg_1\cdots g_i)=h_1\cdots h_i$ and $r(t)=1$. Consecutive vertex ratios are therefore the printed h_i, proving the inhomogeneous formula. All sums and choices are finite; for H=G use T={1}. [F1, step 2.1, step 2.2, algebra] ∎
