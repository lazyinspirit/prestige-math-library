---
id: thm-dense-finite-graph-is-connected
kind: theorem
title: "An $n$-vertex simple graph with more than $\\binom{n-1}{2}$ edges is connected"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-connected-graph-and-connected-component, cor-connected-components-partition-the-vertex-set, def-finite-simple-graph, thm-two-element-subsets-count, thm-subset-of-a-finite-set, cor-complete-graph-edge-count]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Cornell Mathematics, Graph Theory notes"
      url: "https://pi.math.cornell.edu/~zakh/putnam/graph-theory.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite simple graph with $n\ge1$ vertices. If
$|E(G)|>\binom{n-1}{2}$, then $G$ is connected.

## Facts & Assumptions

**Given:** A finite simple graph $G=(V,E)$ with $|V|=n\ge1$ and $|E|>\binom{n-1}{2}$.

[F1] If $G$ is disconnected, its components partition $V$ into at least two nonempty sets and no edge joins different components ([[def-connected-graph-and-connected-component]], [[cor-connected-components-partition-the-vertex-set]]).

[L1] A simple graph on a $q$-element vertex set has at most $\binom q2$ edges, with equality for the complete graph ([[def-finite-simple-graph]], [[thm-two-element-subsets-count]], [[thm-subset-of-a-finite-set]], [[cor-complete-graph-edge-count]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $G$ is disconnected. Choose one component with vertex set $A$, put $B=V\setminus A$, and write $k=|A|$. Then $1\le k\le n-1$, $|B|=n-k$, and no edge joins $A$ to $B$. [assume-contra, F1, choose]

2.1 By [L1], the edges with both endpoints in $A$ number at most $\binom k2$, and those with both endpoints in $B$ number at most $\binom{n-k}2$. Step 1.1 accounts for every edge, so $|E|\le\binom k2+\binom{n-k}2$. [step 1.1, L1]

2.2 For $1\le k\le n-1$, elementary binomial algebra gives $\binom k2+\binom{n-k}2=\binom{n-1}2-(k-1)(n-k-1)\le\binom{n-1}2$. [step 1.1, algebra]

3.1 Steps 2.1 and 2.2 give $|E|\le\binom{n-1}{2}$, contradicting the hypothesis. Therefore $G$ is connected. [step 2.1, step 2.2, given, discharge-contradiction] ∎
