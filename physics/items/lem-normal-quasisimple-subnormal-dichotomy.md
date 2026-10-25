---
id: lem-normal-quasisimple-subnormal-dichotomy
kind: lemma
title: "A normal quasisimple subgroup and a subnormal subgroup"
status: published
origin: pipeline
deps: [lem-quasisimple-proper-normal-subgroups-are-central-and-perfect-central-actions-trivial, def-subnormal-normal-series-refinement-and-equivalence, def-quasisimple-group-component-and-layer]
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: "Descend a subnormal chain until it first fails to contain the normal quasisimple subgroup; the normal intersection is central, and perfectness kills the commutator action."
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical author review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-04-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $Q\trianglelefteq G$ be quasisimple and let $S$ be a subnormal subgroup of $G$. Then either $Q\le S$ or $[Q,S]=1$.

## Facts & Assumptions

**Given:** $Q,S,G$ as in the statement.

[F1] A subnormal subgroup has a finite chain $S=S_0\trianglelefteq S_1\trianglelefteq\cdots\trianglelefteq S_d=G$. ([[def-subnormal-normal-series-refinement-and-equivalence]])

[F2] If a normal subgroup of a quasisimple group is proper, it lies in the center. A perfect group is centralized by a subgroup whose conjugation commutators all lie in that center. ([[lem-quasisimple-proper-normal-subgroups-are-central-and-perfect-central-actions-trivial]])

## Proof

1.1 Choose a subnormal chain from F1. If $Q\le S_0=S$, the first alternative holds. Otherwise, because $Q\le S_d=G$, there is an index $j<d$ such that $Q\le S_{j+1}$ but $Q\nleq S_j$. We only select an index from the given finite chain. [F1, given]

2.1 Both $Q$ and $S_j$ are normal in $S_{j+1}$, since $Q\trianglelefteq G$ and $S_j\trianglelefteq S_{j+1}$. Thus $Q\cap S_j$ is a proper normal subgroup of $Q$, and F2 puts it in $Z(Q)$. For $q\in Q$ and $s\in S_j$, their commutator lies in both $Q$ and $S_j$, hence in $Z(Q)$. Since $S_j$ normalizes the perfect group $Q$, the second clause of F2 gives $[Q,S_j]=1$. As $S\le S_j$, it follows that $[Q,S]=1$. No finiteness of $G$ beyond the finite subnormal chain is needed. [F2, step 1.1, algebra] ∎
