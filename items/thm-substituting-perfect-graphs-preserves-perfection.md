---
id: thm-substituting-perfect-graphs-preserves-perfection
kind: theorem
title: "Substituting a perfect graph into a perfect graph preserves perfection"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-perfect-graph-for-the-bull-route, def-substitution-of-a-graph-for-a-vertex, lem-replicating-a-vertex-of-a-perfect-graph-preserves-perfection, def-clique-stable-set-and-numbers, def-proper-vertex-colouring-and-chromatic-number, def-subgraph-induced-subgraph-and-spanning-subgraph]
proof_strategy: direct
sources:
  references:
    - title: "Reinhard Diestel, Graph Theory, 5th ed., Exercise 51, p. 152, following Lemma 5.5.5"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch5.pdf"
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdos-Hajnal conjecture for bull-free graphs, Theorem 5.1"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-08-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $H_1,H_2$ be finite perfect graphs, let $v\in V(H_1)$, and assume the
nonempty substitution $G=H_1[v\to H_2]$ is defined as in
[[def-substitution-of-a-graph-for-a-vertex]]. Then $G$ is perfect. This
includes every induced subgraph of $G$, whether it meets the inserted
copy of $H_2$ or not.

## Facts & Assumptions

**Given:** Perfect finite graphs $H_1,H_2$ and a defined substitution
$G=H_1[v\to H_2]$.

[L1] Every induced subgraph of a perfect graph has chromatic number equal
to its clique number. A proper coloring splits its vertices into stable
color classes ([[def-perfect-graph-for-the-bull-route]],
[[def-proper-vertex-colouring-and-chromatic-number]],
[[def-clique-stable-set-and-numbers]]).

[L2] Replicating a vertex of a perfect graph into a nonempty finite clique
of true twins preserves perfection
([[lem-replicating-a-vertex-of-a-perfect-graph-preserves-perfection]]).

[L3] In $H_1[v\to H_2]$, each vertex of $H_2$ has precisely the outside
neighbors that $v$ had. Deleting a vertex set gives an induced subgraph
([[def-substitution-of-a-graph-for-a-vertex]],
[[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

## Proof

**Proof technique:** direct.

1.1 Fix an arbitrary $W\subseteq V(G)$, put $R=H_2[W\cap V(H_2)]$ and $S=W\setminus V(H_2)$. If $R$ is empty, then $G[W]=H_1[S]$, which is perfect by [L1]. Suppose $R$ is nonempty. Let $Q=H_1[S\cup\{v\}]$. By [L3], $G[W]=Q[v\to R]$, and $Q,R$ are perfect induced subgraphs of $H_1,H_2$. [L1, L3, construct]

2.1 Put $k=\chi(R)=\omega(R)\ge1$. Replace $v$ in $Q$ by a $k$-vertex clique $C$ of true twins, obtaining $Q_C$. By [L2], $Q_C$ is perfect. Every clique of $G[W]$ either avoids $R$ or consists of a clique in $R$ together with outside vertices all adjacent to $v$ in $Q$; its inside part has size at most $k$. Conversely, for any clique of outside vertices adjacent to $v$, a $k$-clique of $R$ can be added. The same description holds with $C$ in place of $R$, so $\omega(G[W])=\omega(Q_C)$. [L1, L2, L3, step 1.1]

3.1 Color $Q_C$ optimally with $\omega(Q_C)$ colors. Its $k$ mutually adjacent twin vertices use $k$ distinct colors. Color $R$ properly with $k$ colors and relabel those colors by the $k$ colors on $C$; keep the colors of all vertices in $S$ from the coloring of $Q_C$. This colors $G[W]$ properly. Indeed, inside $S$ and inside $R$ the colorings are proper; an outside vertex adjacent to $v$ was adjacent to every member of $C$, so its color differs from all $k$ colors now used on $R$; and an outside vertex not adjacent to $v$ has no edge into $R$. Thus $\chi(G[W])\le\omega(Q_C)=\omega(G[W])$. The reverse inequality holds for every graph, so equality follows. [L1, L3, step 2.1]

4.1 Since $W$ was arbitrary, every induced subgraph of $G$ has $\chi=\omega$. Therefore $G$ is perfect. [L1, step 1.1, step 3.1] ∎
## Source notes

Diestel, Exercise 51, p. 152, requests this substitution theorem after
giving the replication lemma. Chudnovsky-Safra cite the theorem as their
Theorem 5.1. Both source passages were read. The coloring transfer and
induced-subgraph argument above supply the complete local proof.
