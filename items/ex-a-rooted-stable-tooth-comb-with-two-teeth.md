---
id: ex-a-rooted-stable-tooth-comb-with-two-teeth
kind: example
title: "A rooted stable-tooth comb with two teeth"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-rooted-stable-tooth-comb]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Figure 1 pattern"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Example

Let $G$ be the graph on vertices

$$\{v,a_1,a_2,b_1,b_2\}$$

with edge set

$$\{va_1,va_2,a_1b_1,a_2b_2\}.$$

Then

$$\bigl(v,\ ((a_1,\{b_1\}),(a_2,\{b_2\}))\bigr)$$

is a rooted stable-tooth comb in $G$.

## Facts & Assumptions

**Given:** The five-vertex graph in the Example.

[L1] A rooted stable-tooth comb is a comb whose teeth form a stable set and
whose root is adjacent to all teeth and anticomplete to all blocks
([[def-rooted-stable-tooth-comb]]).

## Verification

**Proof technique:** direct.

1.1 The two teeth $a_1,a_2$ are distinct, the blocks $\{b_1\}$ and $\{b_2\}$ are disjoint, each tooth is adjacent to its own block vertex, and neither tooth is adjacent to the other block. Thus $((a_1,\{b_1\}),(a_2,\{b_2\}))$ is a comb in $G$. [given]

2.1 The set $\{a_1,a_2\}$ is stable, the root $v$ is adjacent to both teeth, and $v$ is anticomplete to both blocks. Therefore [L1] identifies the displayed data as a rooted stable-tooth comb. [step 1.1, L1] ∎
