---
id: ex-a-cross-edge-in-a-rooted-stable-tooth-comb-creates-an-induced-five-cycle
kind: example
title: "A cross-edge in a rooted stable-tooth comb creates an induced five-cycle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-rooted-stable-tooth-comb,
       ex-a-rooted-stable-tooth-comb-with-two-teeth,
       lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle,
       def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, proof of Theorem 4.4"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Example

Start with the graph from
[[ex-a-rooted-stable-tooth-comb-with-two-teeth]] and add the extra edge
$b_1b_2$. Then the five vertices $v,a_1,b_1,b_2,a_2$ induce a copy of $C_5$.

## Facts & Assumptions

**Given:** The graph obtained from
[[ex-a-rooted-stable-tooth-comb-with-two-teeth]] by adding the edge $b_1b_2$.

[L1] In any rooted stable-tooth comb, a cross-edge between two different blocks
forces an induced $C_5$
([[lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle]]).

## Verification

**Proof technique:** direct.

1.1 The underlying five-vertex configuration is still a rooted stable-tooth comb with teeth $a_1,a_2$, blocks $\{b_1\},\{b_2\}$, and root $v$; the new feature is exactly the cross-edge $b_1b_2$ between the two blocks. [given]

2.1 Applying [L1] with $i=1$ and $j=2$ shows that the induced subgraph on $\{v,a_1,b_1,b_2,a_2\}$ is a copy of $C_5$. [step 1.1, L1] ∎
