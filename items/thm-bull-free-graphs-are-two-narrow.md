---
id: thm-bull-free-graphs-are-two-narrow
kind: theorem
title: "Every bull-free graph is 2-narrow"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-prime-bull-free-graphs-are-basic, def-h-free-and-family-free-graph, lem-forbidden-induced-subgraph-classes-are-hereditary, lem-the-quotient-is-an-induced-subgraph-on-a-transversal, prop-bull-free-graphs-are-complement-invariant, thm-alpha-narrowness-is-preserved-under-substitution, thm-basic-bull-free-graphs-are-two-narrow, thm-composite-bull-free-graphs-have-a-nontrivial-module, thm-prime-graphs-are-the-graphs-that-are-not-substitutions, def-module-of-a-graph, def-substitution-of-a-graph-for-a-vertex]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdős-Hajnal Conjecture: A Survey, Theorem 2.4"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Theorem 1.3"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Statement

Every bull-free finite graph is two-narrow.

## Facts & Assumptions

**Given:** A bull-free finite graph $G$.

[L2] Every basic bull-free graph is two-narrow ([[thm-basic-bull-free-graphs-are-two-narrow]]).

[L3] Every composite bull-free graph has a nontrivial module ([[thm-composite-bull-free-graphs-have-a-nontrivial-module]]).

[L4] Graphs defined by forbidden induced subgraphs form hereditary classes ([[lem-forbidden-induced-subgraph-classes-are-hereditary]], [[def-h-free-and-family-free-graph]]).

[L5] Substitution preserves $\alpha$-narrowness, hence in particular two-narrowness ([[thm-alpha-narrowness-is-preserved-under-substitution]]).

[F1] A module is a vertex set whose outside vertices are each complete or anticomplete to it ([[def-module-of-a-graph]]).

[F2] The substitution $H_1[v\to H_2]$ replaces the vertex $v$ by the graph $H_2$ and gives every vertex of $H_2$ exactly the outside adjacencies of $v$ ([[def-substitution-of-a-graph-for-a-vertex]]).

## Proof

**Proof technique:** direct.

1.1 We argue by induction on $|V(G)|$. If $G$ is basic, then [L2] proves the claim. So assume that $G$ is not basic. Because “basic” means “bull-free and not composite”, the bull-free graph $G$ is then composite, and [L3] gives a nontrivial module $X$. Choose $x\in X$, let $H_2=G[X]$, and let $H_1=G[(V(G)\setminus X)\cup\{x\}]$. Since $X$ is nontrivial and proper, both $H_1$ and $H_2$ have fewer vertices than $G$. By [L4], both are bull-free because they are induced subgraphs of $G$. [L2, L3, L4, F1, choose, induction]

2.1 Because $X$ is a module, every vertex outside $X$ is complete or anticomplete to $X$. Therefore [F2] shows that $G$ is exactly the substitution $H_1[x\to H_2]$. By the inductive hypothesis, both $H_1$ and $H_2$ are two-narrow, so [L5] makes $G$ two-narrow as well. [step 1.1, F1, F2, L5]

3.1 Either $G$ was basic, when step 1.1 reduced directly to [L2], or it was composite, when step 2.1 proved it two-narrow. Hence every bull-free finite graph is two-narrow. [step 1.1, step 2.1, L2] ∎
