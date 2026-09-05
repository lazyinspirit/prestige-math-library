---
id: ex-a-complete-four-blockade-gives-a-four-vertex-clique
kind: example
title: "A complete four-blockade gives a four-vertex clique"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades, def-complete-anticomplete-pure-and-x-sparse-blockades]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Claim 3.5.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Example

Let $\mathcal B=(B_1,B_2,B_3,B_4)$ be a complete four-blockade in a graph $G$,
and choose vertices $v_i\in B_i$ for $i=1,2,3,4$.

## Facts & Assumptions

**Given:** The complete blockade $\mathcal B$ and the chosen vertices
$v_i\in B_i$.

[L1] Distinct blocks of a complete blockade are pairwise complete
([[def-complete-anticomplete-pure-and-x-sparse-blockades]]).

## Verification

**Proof technique:** direct.


1.1 Because each block of a blockade is nonempty, the four choices $v_i\in B_i$ are legitimate. [given, choose]


2.1 If $i\ne j$, then $B_i$ is complete to $B_j$ by [L1], so the chosen vertices $v_i$ and $v_j$ are adjacent. [step 1.1, L1]


3.1 Therefore every pair among $v_1,v_2,v_3,v_4$ is adjacent, so these four vertices form a clique. [step 2.1] ∎
