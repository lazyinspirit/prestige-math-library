---
id: lem-corestriction-after-bar-transfer-is-index-multiplication-on-homology
kind: lemma
title: "Corestriction after transfer multiplies by the index"
status: draft
origin: pipeline
deps: [def-finite-index-transfer-on-normalized-bar-chains, lem-bar-transfer-is-a-chain-map-and-choice-independent-up-to-chain-homotopy]
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
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

Let $H\le G$ have finite index and M be a left G-module. For every $n\ge0$, the composite $H_n(G;M)\xrightarrow{\operatorname{Tr}}H_n(H;M)\xrightarrow{i_*}H_n(G;M)$ is multiplication by $[G:H]$. Here corestriction means the covariant inclusion map in homology; the derived identification retains DC and supplied resolutions.

## Facts & Assumptions

**Given:** The finite-index inclusion, coefficient module, and a finite transversal T.

[F1] The transfer formula is well-defined on normalized diagonal coinvariants, is a chain map, and induces a transversal-independent homology map ([[lem-bar-transfer-is-a-chain-map-and-choice-independent-up-to-chain-homotopy]]).

[F2] For right-coset representatives $T$, write $x=r(x)t(x)$ with $r(x)\in H$; transfer is the finite sum obtained by applying $r$ to the vertices of $(tg_0,\ldots,tg_n)$ and using coefficient $tm$ ([[def-finite-index-transfer-on-normalized-bar-chains]]).

## Proof

1.1 Put $u(x)=x$. For each $t\in T$ define the alternating vertex prism $$P_{t,n}[(g_0,\ldots,g_n)\otimes m]=\sum_{i=0}^n(-1)^i[(r(tg_0),\ldots,r(tg_i),tg_i,\ldots,tg_n)\otimes tm].$$ Expanding the vertex-deletion differential cancels every face away from the switch in pairs; the two endpoint faces that survive give $$dP_t+P_td=u_{t,*}-r_{t,*},$$ where $u_{t,*}$ uses $(tg_0,\ldots,tg_n)$ and $r_{t,*}$ is the $t$-summand of corestriction after the transfer in [F2]. If $tx=h_tt_x$ with $h_t\in H$ and $t_x\in T$, then $t\mapsto t_x$ permutes $T$, $r(txg)=h_tr(t_xg)$, and both vertex strings and the coefficient $txm=h_tt_xm$ change by the same diagonal translation. Hence $P=\sum_{t\in T}P_t$ descends to $G$-coinvariants. Equal adjacent input vertices make every prism summand degenerate, so it also descends to normalized chains. Thus $$dP+Pd=\sum_{t\in T}u_{t,*}-i_*\operatorname{Tr}_T.$$ [F1, F2, given, algebra]

2.1 Each translated summand is $[(g_0,\ldots,g_n)\otimes m]$ in diagonal G-coinvariants. The sum is therefore $[G:H]$ times that chain in every degree, including zero. Homotopic chain maps give the same map on homology because their difference on a cycle is a boundary. Thus $i_*\operatorname{Tr}=[G:H]\operatorname{id}$. [step 1.1, algebra] ∎
