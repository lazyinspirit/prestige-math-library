---
id: ex-thinning-a-four-block-weakly-sparse-blockade-to-directional-sparse-subblocks
kind: example
title: "Thinning a four-block weakly sparse blockade to directional sparse subblocks"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity, def-blockade-length-and-width, def-directional-and-weak-sparsity-between-vertex-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdos-Hajnal beyond the five-vertex path, Lemma 2.6"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Example

Let $G$ have four pairwise disjoint blocks
$$A_1=\{a_1,\ldots,a_8\},\quad A_2=\{b_1,\ldots,b_8\},\quad A_3=\{c_1,\ldots,c_8\},\quad A_4=\{d_1,\ldots,d_8\}.$$

and suppose the only cross-edges between noncomplete pairs are

$$ a_1b_1,\quad a_2c_1,\quad a_3d_1,\quad b_2c_2,\quad b_3d_2,\quad c_3d_3. $$

Then $(A_1,A_2,A_3,A_4)$ is a blockade of width $8$, every noncomplete pair is
weakly $1/16$-sparse, and the subblocks

$$ D_1=\{a_7,a_8\},\quad D_2=\{b_7,b_8\},\quad D_3=\{c_7,c_8\},\quad D_4=\{d_7,d_8\} $$

are pairwise complete or pairwise anticomplete. In particular every formerly
weakly sparse pair becomes directionally $0$-sparse after thinning.

## Facts & Assumptions

**Given:** The graph $G$ and the four blocks $A_1,A_2,A_3,A_4$ described in the
example.

[L1] A blockade is an ordered sequence of pairwise disjoint nonempty vertex
sets, and its width is the minimum block size
([[def-blockade-length-and-width]]).

[L2] A weakly $c$-sparse pair $(X,Y)$ satisfies
$e_G(X,Y)\le c|X||Y|$, while directional sparsity bounds the neighbours of each
single vertex into the opposite set
([[def-directional-and-weak-sparsity-between-vertex-sets]]).

## Verification

**Proof technique:** direct adjacency count.

1.1 The four blocks are pairwise disjoint and nonempty, each has size $8$, so $(A_1,A_2,A_3,A_4)$ is a blockade of width $8$ by [L1]. Every noncomplete pair listed in the example has exactly one cross-edge, hence at most $1=(1/16)\cdot 8\cdot 8$ cross-edges. Therefore each such pair is weakly $1/16$-sparse by [L2]. [L1, L2, given, algebra]

1.2 None of the vertices $a_7,a_8,b_7,b_8,c_7,c_8,d_7,d_8$ appears in any of the six displayed cross-edges. Hence every noncomplete pair among $D_1,D_2,D_3,D_4$ has no cross-edge at all, so each vertex in one chosen subblock has $0$ neighbours in the other. By [L2], those pairs are directionally $0$-sparse. [given, L2]

2.1 Therefore the thinning $(A_1,A_2,A_3,A_4)\rightsquigarrow(D_1,D_2,D_3,D_4)$ exhibits exactly the weak-to-directional sparsity conversion claimed in the example. [step 1.1, step 1.2] ∎
