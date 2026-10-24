---
id: cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property
kind: corollary
title: "The two six-vertex prime $\\mathcal H$-graphs have the Erdős-Hajnal property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-left-six-vertex-prime-h-graph, def-right-six-vertex-prime-h-graph, thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property, thm-substitution-preserves-the-erdos-hajnal-property, thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family, cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence, prop-erdos-hajnal-property-is-complement-invariant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. IV. New graphs with the Erdős-Hajnal property, Theorem 1.4"
      url: "https://arxiv.org/pdf/2307.06455"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 2 discussion"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-07-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Both the left and the right six-vertex prime $\mathcal H$-graphs have the
Erdős-Hajnal property.

## Facts & Assumptions

**Given:** The left and right six-vertex prime $\mathcal H$-graphs.

[L1] Every graph on at most four vertices has the Erdős-Hajnal property ([[thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property]]).

[L2] For a single graph, the Erdős-Hajnal property is equivalent to virality ([[cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence]]).

[L3] Deleting a leaf and a co-leaf from two forbidden graphs preserves virality ([[thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family]]).

[L4] A graph and its complement have the same Erdős-Hajnal constants ([[prop-erdos-hajnal-property-is-complement-invariant]]).

[L5] Substituting one Erdős-Hajnal graph for a vertex of another preserves the Erdős-Hajnal property ([[thm-substitution-preserves-the-erdos-hajnal-property]]).

[F1] In the graph $L$ of [[def-left-six-vertex-prime-h-graph]], $c$ is a leaf and $b$ is a co-leaf: $b$ is adjacent to $a,c,d,e$ and nonadjacent to $f$. The graph $L-c$ is the substitution of the edge $bd$ for the second vertex of the path $a-X-e-f$. The graph $L-b$ is the substitution of the path $a-d-e-f$ for one vertex of a two-vertex stable set whose other vertex is $c$.

[F2] The right six-vertex prime $\mathcal H$-graph is the complement of the left one by definition.

## Proof

**Proof technique:** direct.

1.1 The two factor graphs in each substitution of [F1] have at most four vertices. By [L1] and [L5], both $L-c$ and $L-b$ have the Erdős-Hajnal property. By [L2], the singleton families $\{L-c\}$ and $\{L-b\}$ are viral. [L1, L2, L5, F1]

2.1 Apply [L3] to the family $\{L\}$, using $c$ in the leaf-deletion slot and $b$ in the co-leaf-deletion slot. Step 1.1 verifies both viral hypotheses, so $\{L\}$ is viral. The reverse direction of [L2] gives the Erdős-Hajnal property for $L$. [step 1.1, L2, L3, F1]

3.1 Let $R$ be the right six-vertex prime $\mathcal H$-graph. By [F2], we have $R=\overline L$, so [L4] transfers the Erdős-Hajnal property from $L$ to $R$. [step 2.1, L4, F2]

4.1 Therefore both six-vertex prime $\mathcal H$-graphs have the Erdős-Hajnal property. [step 2.1, step 3.1] ∎
