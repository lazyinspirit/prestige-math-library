---
id: lem-elimination-tree-reach-contains-each-filled-neighbor
kind: lemma
title: Every later filled neighbor lies on the elimination-tree parent path
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-elimination-tree-and-column-reach
  - def-symmetric-structural-elimination-graph-and-ordering
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 4, §§4.1–4.2"
      url: "https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf"
    - title: "Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems, §4.1"
      url: "https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf"
---

## Statement

Let $v_k$ be a vertex in the elimination forest supplied by [[def-elimination-tree-and-column-reach]]. Every later filled neighbor of $v_k$ lies on its parent path and is therefore an ancestor. Consequently, if $v_s$ is a child of $v_k$, then every later neighbor of $v_s$ other than $v_k$ is a later neighbor of $v_k$; equivalently,
$$\mathcal C_s\setminus\{v_s\}\subseteq\mathcal C_k.$$

## Facts & Assumptions


**Given:** The zero-based ordered vertices, filled graphs, and parent forest from batch-2's graph definition.

[F1] [[def-elimination-tree-and-column-reach]]: $\mathcal C_k=\{v_k\}\cup N_k(v_k)$, and reach follows the supplied parent path.

[F2] [[def-symmetric-structural-elimination-graph-and-ordering]]: The parent is the later neighbor with least position greater than the child's position.

[F3] [[def-symmetric-structural-elimination-graph-and-ordering]]: The graph update adds every edge between two distinct vertices in the pivot's later-neighbor set.

## Proof


1.1 Fix $v_k$ and a later filled neighbor $v_t$. If $v_t$ is the parent, it is an ancestor by definition. Otherwise let $v_s$ be the parent. By [F2], $k<s<t$. Since $v_s$ and $v_t$ are both later neighbors of $v_k$, [F3] inserts $\{v_s,v_t\}$ when $v_k$ is eliminated. Thus $v_t$ remains a later neighbor of $v_s$. [given, F2, F3, choose]

1.2 Now let $v_s$ be a child of $v_k$. Every later neighbor $v_t$ of $v_s$ is either $v_k$ or is later than $v_k$. In the latter case both $v_k$ and $v_t$ are later neighbors of $v_s$, so [F3] joins them in the filled graph. Thus every element of $\mathcal C_s\setminus\{v_s\}$ belongs to $\mathcal C_k$. [F1, F2, F3, algebra]

2.1 If $v_t$ is not the parent of $v_s$, replace $v_k$ by $v_s$ and repeat. At each repetition the ordering position strictly increases and is at most $t$, because the current vertex remains adjacent to $v_t$ and its parent is the earliest later neighbor. The finite increasing sequence must reach position $t$; it cannot stop earlier at a root while still having later neighbor $v_t$. Hence $v_t$ lies on the parent path from $v_k$ and is an ancestor. [step 1.1, F2, induction, algebra]

3.1 Step 2.1 proves the ancestor assertion, and step 1.2 gives the child-column containment used to assemble fronts. [step 2.1, step 1.2] ∎
