---
id: ex-the-five-vertex-path-is-leaf-reducible
kind: example
title: "The five-vertex path is leaf-reducible"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-leaf-reducible-finite-family, cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order, def-erdos-hajnal-property-and-constant, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, definition of leaf-reducible"
      url: "https://arxiv.org/pdf/2606.06258v2"
    - title: "Tung H. Nguyen, Notes on Recent Work on the Erdős-Hajnal Conjecture, Exercise 1.1"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
pipeline_run: null
---

## Example

The singleton family $\{P_5\}$ is leaf-reducible.

## Facts & Assumptions

**Given:** The path graph $P_5$.

[L1] A family is leaf-reducible if deleting one leaf from one member leaves a
modified family with the Erdős-Hajnal property
([[def-leaf-reducible-finite-family]]).

[L2] Every $P_4$-free graph has a clique or stable set of size at least the
square root of its order
([[cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order]]).

[L3] A graph has the Erdős-Hajnal property when its forbidden induced-subgraph
class has some positive exponent
([[def-erdos-hajnal-property-and-constant]]).

## Verification

**Proof technique:** direct.

1.1 An endpoint of $P_5$ is a leaf, and deleting it leaves the four-vertex path $P_4$. [given, L1]

2.1 By [L2], the class of $P_4$-free graphs has the positive exponent $1/2$, so [L3] says that $P_4$ has the Erdős-Hajnal property. Therefore the modified singleton family $\{P_4\}$ satisfies the condition in [L1]. [step 1.1, L2, L3]

3.1 Hence the singleton family $\{P_5\}$ is leaf-reducible. [step 2.1, L1] ∎
