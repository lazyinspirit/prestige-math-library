---
id: ex-the-long-exact-hom-sequence-of-a-cone-triangle
kind: example
title: "The long exact Hom sequence of a cone triangle"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-long-exact-hom-sequences-of-a-distinguished-triangle]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Lemma 13.4.2"
      url: "https://stacks.math.columbia.edu/tag/05QN"
---

## Example

Applying $K(\mathbb Z\text{-Mod})(S^0(\mathbb Z),-)$ to the cone triangle of
multiplication by $m$ gives the exact segment
$$\mathbb Z\xrightarrow m\mathbb Z\to K(S^0\mathbb Z,[\mathbb Z\xrightarrow m\mathbb Z])\to0.$$

## Verification

**Given:** The displayed data.

1.1 The displayed cone triangle is distinguished. [given]

2.1 The representable long exact Hom theorem supplies the exact segment, and $K(S^0\mathbb Z,S^0\mathbb Z)\cong\mathbb Z$ identifies its first map with multiplication by $m$. [step 1.1, given] ∎
