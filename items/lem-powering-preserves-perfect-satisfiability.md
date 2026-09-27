---
id: lem-powering-preserves-perfect-satisfiability
kind: lemma
title: "Powering preserves perfect satisfiability"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-canonical-local-view-lift-preserves-perfect-satisfiability, def-constraint-graph-powering, def-constraint-graph-and-labeling-value]
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
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5.1 Lemma 18.31 part 2, printed p. 373."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Irit Dinur, The PCP theorem by gap amplification, §1.2 (UNSAT(G)=0 implies UNSAT(Gᵗ)=0), printed p. 5."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Statement

Let $G$ be a binary constraint graph over $\Sigma$ with $E(G)\ne\varnothing$ whose underlying graph is $d$-regular in the adjacency-slot convention, let $t\ge1$, and let $G_t$ be its local-view powered graph ([[def-constraint-graph-powering]]). If $\operatorname{val}(G)=1$, then $\operatorname{val}(G_t)=1$; equivalently $\operatorname{UNSAT}(G)=0$ implies $\operatorname{UNSAT}(G_t)=0$. This is perfect completeness; the quantitative lower bound for positive gaps is given, under its additional hypotheses, by [[lem-powering-amplifies-small-gaps]]. Perfect completeness does not assert $\operatorname{UNSAT}(G_t)\ge\operatorname{UNSAT}(G)$.

## Facts & Assumptions

**Given:** a $d$-regular binary constraint graph $G$ over $\Sigma$ with at least one edge, an integer $t\ge1$, its powered graph $G_t$, and the assertion $\operatorname{val}(G)=1$.

[F1] For a labeling $\sigma$ of $G$ and $E(G)\ne\varnothing$, $\operatorname{val}_\sigma(G)$ is the fraction of ordinary edges of $G$ satisfied by $\sigma$; hence $\operatorname{val}_\sigma(G)=1$ holds exactly when $\sigma$ satisfies every edge of $G$ ([[def-constraint-graph-and-labeling-value]]).

[F2] If $\sigma$ satisfies every edge of $G$, its canonical lift $\bar\sigma(v)(\pi):=\sigma(\text{endpoint of the pattern }\pi\text{ read from }v)$ is a labeling of $G_t$ that satisfies every slot of $G_t$; consequently $\operatorname{val}(G_t)=1$ whenever $\operatorname{val}(G)=1$ ([[lem-canonical-local-view-lift-preserves-perfect-satisfiability]]).

[F3] $\operatorname{val}(G_t)=\max_\varphi\operatorname{val}_\varphi(G_t)$ where the maximum runs over all labelings of $G_t$, and $G_t$ has at least one slot because $G$ has at least one slot ([[def-constraint-graph-powering]], [[def-constraint-graph-and-labeling-value]]).

## Proof

**Proof technique:** direct.

1.1 Since $\operatorname{val}(G)=1$ and $G$ is nonempty, there is a labeling $\sigma$ of $G$ with $\operatorname{val}_\sigma(G)=1$, and by [F1] such a $\sigma$ satisfies every edge of $G$. [F1, F3, given]

2.1 By [F2] applied to the labeling of step 1.1, the canonical lift $\bar\sigma$ satisfies every slot of $G_t$, so $\operatorname{val}_{\bar\sigma}(G_t)=1$ and hence $\operatorname{val}(G_t)\ge1$; since $\operatorname{val}$ is a maximum of fractions, $\operatorname{val}(G_t)=1$ and $\operatorname{UNSAT}(G_t)=1-\operatorname{val}(G_t)=0$. [F2, F3, step 1.1] ∎

## Remarks

- The gap need not be monotone under powering: take one vertex with one ordinary loop whose relation is empty, so $d=2$ and $\operatorname{UNSAT}(G)=1$. At $t=1$ the walk length is three and $J=\{1,2,3\}$. Any move tests the empty relation and fails, while the all-hold patterns pass vacuously. Each step holds with probability $1/2$, so every powered labeling has value $1/8$ and $\operatorname{UNSAT}(G_1)=7/8$.
- Nothing is assumed about $t$ beyond $t\ge1$, and no hypothesis on the powered labeling is needed: the lift is built from $\sigma$ with no choice, so the statement is itself choice-free.
- The edgeless case is deliberately excluded here and is instead governed by the convention that an edgeless graph has value one and unsatisfiability zero ([[def-constraint-graph-and-labeling-value]]); the degree-reduction map of [[def-degree-reduction-by-expander-clouds]] sends edgeless inputs to edgeless outputs, for which the powered graph is again empty.
- The converse also holds for perfect satisfiability, even though a satisfying powered labeling need not be a canonical lift. If $\varphi$ satisfies $G_t$, put $a(v):=\varphi(v)(\kappa_{v,v})$. For any oriented base edge $e=(u,w)$, consider the length-$2t+1$ pattern that holds $t$ times at $u$, traverses $e$, then holds $t$ times at $w$. Its central position $t+1$ belongs to $J$, and its test is exactly $(a(u),a(w))\in R_e$. Thus $a$ satisfies every base edge, including loops. The quantitative estimate [[lem-powering-amplifies-small-gaps]] concerns arbitrary, possibly imperfect powered labelings.
