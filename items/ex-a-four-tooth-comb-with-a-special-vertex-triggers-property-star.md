---
id: ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star
kind: example
title: "A four-tooth comb with a special vertex realizes the trigger configuration for property (*)"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-comb-in-a-graph, def-property-star-for-a-finite-family]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Section 1.4"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Example

Let $G$ have vertices
$$
v,\ a_1,a_2,a_3,a_4,\ b_{i,j}\ (i,j\in[4])
$$
with edges exactly $a_ib_{i,j}$ and $vb_{i,j}$ for $i,j\in[4]$. Put
$$
B_i:=\{b_{i,1},b_{i,2},b_{i,3},b_{i,4}\}
$$
for each $i$.

## Facts & Assumptions

**Given:** The graph and the blocks displayed in the Example.

[L1] The item [[def-comb-in-a-graph]] characterizes an $(\ell,w)$-comb by the blockade conditions and the adjacency pattern of the teeth.

[L2] If a finite family $\mathcal F$ has property $(*)$ and $G$ is
$\overline{\mathcal F}$-free, then an $(\ell,w)$-comb with $\ell,w\ge4$
together with a vertex outside the comb that is complete to the blocks and
anticomplete to the teeth is the antecedent of the three-outcome implication
in [[def-property-star-for-a-finite-family]].

## Verification

**Proof technique:** direct.


1.1 The four sets $B_1,B_2,B_3,B_4$ are pairwise disjoint and each has $4$ vertices, so $(B_1,B_2,B_3,B_4)$ is a $(4,4)$-blockade. [given, L1]


2.1 Each tooth $a_i$ is adjacent to every vertex of $B_i$ and to no vertex of $B_j$ for $j\ne i$, and the teeth $a_1,a_2,a_3,a_4$ are distinct and lie outside the blocks. Hence $((a_i,B_i):i\in[4])$ is a $(4,4)$-comb by [L1]. [step 1.1, L1]


3.1 The vertex $v$ lies outside the comb, is adjacent to every vertex in $\bigcup_{i=1}^4 B_i$, and is nonadjacent to every $a_i$. Since this comb has $\ell=w=4$, the pair consisting of the comb and $v$ realizes the geometric trigger configuration occurring in [L2]. No assertion that an unspecified family has property $(*)$ is being made. [step 2.1, L2] ∎
