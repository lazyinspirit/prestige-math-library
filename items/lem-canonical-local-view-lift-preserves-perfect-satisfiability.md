---
id: lem-canonical-local-view-lift-preserves-perfect-satisfiability
kind: lemma
title: "Canonical local views preserve perfect satisfiability"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-constraint-graph-powering, def-constraint-graph-and-labeling-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5.1 Lemma 18.31 part 2 (canonical assignment satisfies the powered instance)."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Irit Dinur, The PCP theorem by gap amplification, §1.2: UNSAT(G)=0 implies UNSAT(Gᵗ)=0, p. 5."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Statement

Let $G$ be a $d$-regular binary constraint graph over $\Sigma$, let $t\ge1$ and let $G_t$ be its powered graph as in [[def-constraint-graph-powering]]. If $\sigma:V\to\Sigma$ satisfies every edge of $G$, then the **canonical lift** $\bar\sigma$ defined by
$$\bar\sigma(v)(\pi):=\sigma(\text{endpoint of the pattern }\pi\text{ read from }v),\qquad \pi\in\mathcal P_R,$$
is a labeling of $G_t$ that satisfies every slot of $G_t$; in particular $\operatorname{val}(G_t)=1$ whenever $\operatorname{val}(G)=1$. The same holds with repeated vertices, hold steps and loops, and no hypothesis on $t$ beyond $t\ge1$ is used.

## Facts & Assumptions

**Given:** a $d$-regular binary constraint graph $G$ over $\Sigma$, an integer $t\ge1$, its powered graph $G_t$ with view alphabet $\Sigma_t=\Sigma^{\mathcal P_R}$, central window $J$ and slot relations as in the powering definition, and a labeling $\sigma$ of $G$ that satisfies every edge.

[F1] A view is a function $\varphi:\mathcal P_R\to\Sigma$; a directed incidence slot of $G_t$ is indexed by a length-$L$ pattern read from a vertex $v_0$ and a copy bit, visits $v_0,\dots,v_L$, joins $v_0$ to $v_L$, and its relation table is determined by the starting vertex and the pattern (with the base graph fixed), independently of the copy bit. That table accepts the pair of views $(\varphi,\psi)$ exactly when for every $j\in J$ whose step is a move along a slot $e=(v_{j-1},v_j)$, the pair $(\varphi(\kappa_{v_0,v_{j-1}}),\psi(\kappa_{v_L,v_j}))$ lies in the relation of $e$; the two canonical patterns exist because their endpoints lie within radius $R$ of their view centres, and hold steps impose no condition ([[def-constraint-graph-powering]]).

[F2] For an edge $e$ with endpoints $u,w$ in the specified order, a labeling satisfies $e$ exactly when $(\sigma(u),\sigma(w))\in R_e$; loops are tested on the repeated label and a labeling satisfies $G$ when it satisfies every ordinary edge ([[def-constraint-graph-and-labeling-value]]).

## Proof

**Proof technique:** direct.

1.1 For each $v\in V$ and each pattern $\pi\in\mathcal P_R$ the endpoint of $\pi$ read from $v$ is a well-defined vertex, so $\bar\sigma(v)$ is a function $\mathcal P_R\to\Sigma$, i.e. an element of $\Sigma_t$; hence $\bar\sigma$ is a labeling of $G_t$. [F1, given]

2.1 Let a directed incidence slot of $G_t$ be given by a pattern $(\sigma_1,\dots,\sigma_L)$ from $v_0$, a copy bit, and visited vertices $v_0,\dots,v_L$, and let $j\in J$ be such that $\sigma_j$ is a move along a slot $e=(v_{j-1},v_j)$. The coordinate $\kappa_{v_0,v_{j-1}}$ ends at $v_{j-1}$ and $\kappa_{v_L,v_j}$ ends at $v_j$ by definition. Since the canonical lift labels every pattern by its endpoint, $\bar\sigma(v_0)(\kappa_{v_0,v_{j-1}})=\sigma(v_{j-1})$ and $\bar\sigma(v_L)(\kappa_{v_L,v_j})=\sigma(v_j)$; the copy bit does not alter the relation or these coordinates. [F1, step 1.1, algebra]

3.1 Since $\sigma$ satisfies every edge of $G$, the pair $(\sigma(v_{j-1}),\sigma(v_j))$ lies in the relation of the slot $e$ in its orientation $(v_{j-1},v_j)$, whether or not $e$ is a loop; by step 2.1 the pair of views reads exactly this pair at position $j$, so the slot of $G_t$ accepts $(\bar\sigma(v_0),\bar\sigma(v_L))$. Position $j$ was an arbitrary member of the central window and the slot was arbitrary, so $\bar\sigma$ satisfies every slot of $G_t$, and therefore $\operatorname{val}(G_t)=1$ when $\operatorname{val}(G)=1$. [F1, F2, step 2.1] ∎

## Remarks

- The lift is a function of the base labeling and the explicit pattern list; it makes no choice. Repeated occurrences of one vertex in a pattern all receive the same symbol $\sigma$ of that vertex, which is why consistency across the central overlap is automatic here.
- The converse direction is not claimed: satisfying labelings of $G_t$ need not be lifts. That gap is what the plurality decoding and collision analysis of the following items address.
