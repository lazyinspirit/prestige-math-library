---
id: ex-integral-geometric-layers-for-fourteen-ordered-blocks
kind: example
title: "Integral geometric layers for fourteen ordered blocks"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-integral-geometric-layers-of-a-decreasing-block-partition, lem-integral-geometric-layers-have-rounded-cutoff-bounds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Huang, Ju, and Zhou, Erdős–Hajnal beyond the five-vertex path, geometric layers in Lemma 5.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Example

For $\ell=4$ and $t=14$, the integral cutoffs are
$$m_1=2,\qquad m_2=4,\qquad m_3=8,\qquad m_4=14.$$
Thus the four layers have respectively $2,2,4,6$ blocks. The final layer is
truncated at the integral endpoint $14$, rather than referring to a
nonintegral block index.

## Facts & Assumptions

**Given:** A decreasing ordered partition of $14$ blocks and $\ell=4$.

[F1] The cutoff $m_r$ is the largest integer at most both $t$ and $\ell^{r/2}$, and layers are successive cutoff differences ([[def-integral-geometric-layers-of-a-decreasing-block-partition]]).

[F2] These cutoffs produce nonempty layers covering all blocks ([[lem-integral-geometric-layers-have-rounded-cutoff-bounds]]).

## Verification

**Proof technique:** direct calculation.

1.1 The bounds $4^{1/2},4^{2/2},4^{3/2},4^{4/2}$ are $2,4,8,16$; intersecting their allowed integer indices with $[14]$ gives the stated cutoffs $2,4,8,14$ by [F1]. [F1, algebra]

2.1 Successive differences are $2$, $4-2=2$, $8-4=4$, and $14-8=6$. Their sum is $14$, agreeing with the coverage conclusion in [F2]. [F2, step 1.1, algebra]

3.1 In particular, the last cutoff is the integer $14$, so no expression such as a fifteenth or nonintegrally numbered block has been used. [F1, step 1.1] ∎
