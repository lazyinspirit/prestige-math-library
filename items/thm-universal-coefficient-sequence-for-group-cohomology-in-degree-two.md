---
id: thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two
kind: theorem
title: "Universal coefficients in degree two"
status: published
origin: pipeline
deps: [def-schur-multiplier-of-a-group, def-group-cohomology-as-a-derived-functor, thm-universal-coefficient-theorem-for-cohomology-over-a-pid, thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For a trivial $G$-module $A$, there is a natural exact sequence

$$0\to\operatorname{Ext}^1_{\mathbb Z}(G_{\mathrm{ab}},A)\to H^2(G;A)\to\operatorname{Hom}(M(G),A)\to0.$$

It admits a splitting after choices; no natural splitting is asserted.

## Facts & Assumptions

**Given:** Compute group (co)homology from a free $\mathbb ZG$-resolution of $\mathbb Z$ and then tensor it over $\mathbb ZG$ with the trivial module $\mathbb Z$.

[L1] The cohomological universal-coefficient theorem gives the natural degree-two short exact sequence for a degreewise free integral chain complex ([[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]).

[L2] This sequence splits after choices of complements, with no natural splitting asserted ([[thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally]]).

## Proof

**Proof technique:** direct.

1.1 The resulting chain complex is degreewise free over $\mathbb Z$, so the cohomological universal-coefficient theorem in degree two gives $0\to\operatorname{Ext}^1_{\mathbb Z}(H_1(G;\mathbb Z),A) \to H^2(G;A)\to \operatorname{Hom}_{\mathbb Z}(H_2(G;\mathbb Z),A)\to0$ naturally. [L1, given, algebra]

2.1 Since $H_1(G;\mathbb Z)=G_{\mathrm{ab}}$ and $H_2(G;\mathbb Z)=M(G)$, this is the displayed sequence. The splitting qualification follows from [L2]. [L2, step 1.1, algebra] ∎
