---
id: cor-the-prime-quotient-has-at-least-four-vertices
kind: corollary
title: "The prime quotient produced by the modular decomposition of a connected and anticonnected graph has at least four vertices"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-gallai-modular-decomposition, def-prime-graph, lem-graphs-on-three-vertices-are-not-prime, def-modular-partition-and-quotient-graph, def-module-of-a-graph, lem-a-proper-module-of-a-connected-graph-has-a-complete-neighbour, lem-modules-are-complement-invariant, def-connected-graph-and-connected-component, def-anticonnected-graph-and-anticonnected-component, def-edges-between-sets-and-pure-mixed-pairs, def-graph-isomorphism-and-complement, def-finite-cardinality]
aliases: []
landmark: false
proof_strategy: cases
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.4"
      url: "https://arxiv.org/pdf/0912.1457"
pipeline_run: null
---

## Statement

Let $G$ be a connected and anticonnected finite simple graph with
$|V(G)|\ge2$, and let $\mathcal R$ be the modular partition of $G$ into its
maximal proper modules, whose quotient is prime
([[thm-gallai-modular-decomposition]]). Then $|\mathcal R|\ge4$, so the prime
quotient $G/\mathcal R$ has at least four vertices.

## Facts & Assumptions

**Given:** A connected and anticonnected finite simple graph $G$ with $|V(G)|\ge2$, and its partition $\mathcal R$ into maximal proper modules, with $G/\mathcal R$ prime and $|\mathcal R|\ge2$.

[L1] For a connected and anticonnected graph with at least two vertices, the maximal proper modules form a modular partition with at least two parts whose quotient is prime ([[thm-gallai-modular-decomposition]]).

[F1] A modular partition of $G$ is a set of nonempty, pairwise disjoint modules of $G$ whose union is $V(G)$; the quotient has vertex set $\mathcal R$ ([[def-modular-partition-and-quotient-graph]], [[def-finite-cardinality]]).

[F2] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$, and $M$ is proper when $M\ne V(G)$ ([[def-module-of-a-graph]]).

[L2] In a connected graph, if $M$ is a module with $\varnothing\ne M\ne V(G)$, then some vertex outside $M$ is complete to $M$ ([[lem-a-proper-module-of-a-connected-graph-has-a-complete-neighbour]]).

[L3] A vertex set is a module of $G$ if and only if it is a module of $\overline G$ ([[lem-modules-are-complement-invariant]]).

[L4] Every finite simple graph on exactly three vertices has a nontrivial module, and is therefore not prime ([[lem-graphs-on-three-vertices-are-not-prime]]).

[F3] $G$ is prime when every module of $G$ is trivial ([[def-prime-graph]]).

[F4] $G$ is anticonnected when $\overline G$ is connected, and $\overline G$ has the same vertex set as $G$; distinct vertices are adjacent in $\overline G$ exactly when they are not adjacent in $G$ ([[def-anticonnected-graph-and-anticonnected-component]], [[def-connected-graph-and-connected-component]], [[def-graph-isomorphism-and-complement]]).

[F5] A disjoint pair is complete when every cross pair is an edge and anticomplete when no cross pair is an edge ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** cases.

1.1 By [L1] the partition $\mathcal R$ has at least two parts, so $|\mathcal R|\ge2$ and it remains to exclude $|\mathcal R|=2$ and $|\mathcal R|=3$. [L1, F1]

1.2 First case: $|\mathcal R|=2$, say $\mathcal R=\{M_1,M_2\}$. Then $M_1$ is a nonempty module of $G$ and $M_1\ne V(G)$, since $M_2$ is nonempty and disjoint from it, so $V(G)\setminus M_1=M_2$. [assume-case two, F1, F2]

1.3 Second case: $|\mathcal R|=3$. Then $G/\mathcal R$ is a finite simple graph on exactly three vertices, so it has a nontrivial module and is not prime. [assume-case three, F1, L4]

2.1 In the first case, $G$ is connected, so [L2] gives a vertex $v\in M_2$ complete to $M_1$; and $M_1$ is a module of $\overline G$ by [L3], with $\overline G$ connected because $G$ is anticonnected, so [L2] applied in $\overline G$ gives a vertex $v'\in M_2$ complete to $M_1$ in $\overline G$, that is, adjacent in $G$ to no vertex of $M_1$. [step 1.2, L2, L3, F4, F5]

3.1 Still in the first case, $M_2$ is a module of $G$ and $M_1$ is nonempty, so picking $x\in M_1$, which lies outside $M_2$, the two vertices $v,v'\in M_2$ satisfy $xv\in E(G)$ if and only if $xv'\in E(G)$; but step 2.1 makes $xv$ an edge and $xv'$ a non-edge. So $|\mathcal R|=2$ is impossible. [step 1.2, step 2.1, F2, F5, choose]

4.1 The second case contradicts the primality of $G/\mathcal R$ supplied by [L1], so $|\mathcal R|=3$ is impossible as well; the two excluded cases together with step 1.1 leave $|\mathcal R|\ge4$. [step 1.1, step 1.3, step 3.1, L1, F3, cases-exhaustive] ∎
