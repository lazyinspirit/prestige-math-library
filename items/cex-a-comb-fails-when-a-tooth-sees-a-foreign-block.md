---
id: cex-a-comb-fails-when-a-tooth-sees-a-foreign-block
kind: counterexample
title: "If a tooth sees a foreign block, the structure is not a comb"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-comb-in-a-graph]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, §2"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** a sequence of teeth and blocks is still a comb even if some
tooth is adjacent to a foreign block.

## Facts & Assumptions

**Given:** Two blocks $B_1=\{b_1\}$ and $B_2=\{b_2\}$, and two teeth $a_1,a_2$
with edges $a_1b_1$, $a_1b_2$, and $a_2b_2$.

## Proof

**Proof technique:** direct.

1.1 The tooth $a_1$ is complete to its own block $B_1$, but it is also adjacent to the foreign block $B_2$. [given]

2.1 The definition [[def-comb-in-a-graph]] requires every tooth $a_i$ to be anticomplete to every foreign block $B_j$ with $j\neq i$. Step 1.1 violates that requirement, so this data is not a comb. [step 1.1, given]

3.1 Therefore the claim is false. [step 2.1] ∎
