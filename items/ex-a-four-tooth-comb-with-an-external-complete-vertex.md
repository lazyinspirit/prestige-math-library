---
id: ex-a-four-tooth-comb-with-an-external-complete-vertex
kind: example
title: "A four-tooth comb with an external complete vertex"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair, def-comb-in-a-graph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 2.10"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Example

Let $a_1,a_2,a_3,a_4,v$ be five vertices and let
$B_i=\{b_i\}$ for $i=1,2,3,4$. If the only edges among these nine vertices are
$a_ib_i$ for $1\le i\le 4$ and $vb_i$ for $1\le i\le 4$, then
$((a_i,B_i):i\in[4])$ is a four-tooth comb and the outside vertex $v$ is
complete to the tooth blocks and anticomplete to the teeth.

## Facts & Assumptions

**Given:** The nine labelled vertices above with exactly the displayed edges.

[L1] A comb is given by distinct teeth $a_i$, disjoint blocks $B_i$, each tooth
complete to its own block and anticomplete to the other blocks
([[def-comb-in-a-graph]]).

## Verification

**Proof technique:** direct finite check.

1.1 For each $i\in[4]$, the tooth $a_i$ is adjacent to the unique vertex of its own block $B_i=\{b_i\}$ and to no vertex of the other three blocks. Therefore $((a_i,B_i):i\in[4])$ satisfies [L1]. [L1, given]

2.1 By construction the vertex $v$ is adjacent to every $b_i$ and to none of the teeth $a_i$. So $v$ has exactly the extra adjacency pattern singled out in the comb outcome of the lemma. [step 1.1, given] ∎
