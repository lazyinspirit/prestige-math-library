---
id: fs-gch-on-alephs-is-a-choice-free-formulation
kind: false-statement
title: "The aleph equation carries no well-orderability assertion"
status: draft
origin: pipeline
deps: ["def-local-gch-for-arbitrary-sets", "thm-sierpinski-arbitrary-set-gch-implies-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Carneiro, §§1–2, comparison and well-orderability conventions"
      url: https://arxiv.org/pdf/1506.03533
    - title: "Caicedo, opening Specker theorem and powersets-of-ordinals theorem"
      url: https://caicedoteaching.wordpress.com/2009/02/02/580-some-choiceless-results-5/
---

## Statement

False claim: “The equation $2^{\aleph_\alpha}=\aleph_{\alpha+1}$ says only that there is no intermediate size; it makes no assertion that $\mathcal P(\aleph_\alpha)$ can be well-ordered.” Here the equation is interpreted literally as equinumerosity with the indicated initial ordinal.

## Refutation

**Given:** The objects and hypotheses in the statement.

1.1 Under the stated interpretation, the equation asserts a bijection $b:\mathcal P(\aleph_\alpha)\to\aleph_{\alpha+1}$. Define $U<V$ iff $b(U)<b(V)$ in the ordinal order. [given]

2.1 This is a linear order, and any nonempty family of subsets has a least member: take the inverse image of its image’s least ordinal. Thus the equation explicitly asserts well-orderability, refuting the claim. The equation is expressible in ZF; its being expressible does not remove this mathematical content. [step 1.1] ∎
