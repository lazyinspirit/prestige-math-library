---
id: ex-a-large-almost-pure-pair-extends-an-anticomplete-blockade
kind: example
title: "A large almost-pure pair extends an anticomplete blockade"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade, def-blockade-length-and-width, def-edges-between-sets-and-pure-mixed-pairs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdos-Hajnal beyond the five-vertex path, proof of Lemma 2.8"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Example

Let

$$ B_0=\{u_1,u_2\},\qquad B_1=\{v_1,v_2\},\qquad B_2=\{w_1,w_2,w_3,w_4,w_5,w_6\}, $$

and assume:

1. $B_0$ is anticomplete to $B_1$;
2. $B_0\cup B_1$ is anticomplete to $B_2$;
3. inside $B_2$ there are disjoint subsets
   $$ X=\{w_1,w_2\},\qquad Y=\{w_3,w_4,w_5,w_6\}, $$
   with $Y$ anticomplete to $X$.

Then $(B_0,B_1,B_2)$ is an anticomplete blockade, and replacing the last block
$B_2$ by the pair $(X,Y)$ produces the longer anticomplete blockade
$(B_0,B_1,X,Y)$.

## Facts & Assumptions

**Given:** The blocks $B_0,B_1,B_2$ and the subsets $X,Y\subseteq B_2$ with the
adjacency relations stated in the example.

[L1] A blockade is an ordered sequence of pairwise disjoint nonempty vertex
sets ([[def-blockade-length-and-width]]).

[L2] A pair of disjoint vertex sets is anticomplete exactly when there are no
edges between them ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Verification

**Proof technique:** direct.

1.1 The sets $B_0,B_1,B_2$ are pairwise disjoint and nonempty, so $(B_0,B_1,B_2)$ is a blockade by [L1]. Hypotheses 1 and 2 say that each earlier block is anticomplete to every later block, so [L2] makes it an anticomplete blockade. [L1, L2, given]

1.2 The sets $X$ and $Y$ are disjoint nonempty subsets of $B_2$, and hypothesis 3 says that $Y$ is anticomplete to $X$. Hypothesis 2 also implies that both $X$ and $Y$ are anticomplete to $B_0\cup B_1$. Therefore every earlier block in $(B_0,B_1,X,Y)$ is anticomplete to every later block. [given, L2]

2.1 By steps 1.1 and 1.2, replacing the last block $B_2$ by the anticomplete pair $(X,Y)$ extends the original anticomplete blockade by one step. [step 1.1, step 1.2] ∎
