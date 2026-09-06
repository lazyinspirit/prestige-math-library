---
id: fs-the-schur-multiplier-is-defined-as-h-two-cohomology-with-complex-units
kind: false-statement
title: "Multiplier defined as H²(G,C×)"
status: draft
origin: pipeline
deps: [def-schur-multiplier-of-a-group, thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two]
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
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For every group $G$, the Schur multiplier is defined as
$H^2(G;\mathbb C^\times)$.

## Facts & Assumptions

**Given:** Use the convention in [[def-schur-multiplier-of-a-group]].

[L1] The universal-coefficient sequence in
[[thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two]]
identifies $H^2(G;A)$ with $\operatorname{Hom}(M(G),A)$ whenever
$\operatorname{Ext}^1_{\mathbb Z}(G_{\mathrm{ab}},A)=0$.

## Refutation

**Proof technique:** direct.

1.1 That definition is $M(G)=H_2(G;\mathbb Z)$ for every group.  The cohomological group $H^2(G;\mathbb C^\times)$ is a different construction. Indeed, because $\mathbb C^\times$ is divisible, $\operatorname{Ext}^1_{\mathbb Z}(G_{\mathrm{ab}},\mathbb C^\times)=0$, so the universal-coefficient sequence identifies it with the character dual $\operatorname{Hom}(M(G),\mathbb C^\times)$ for every $G$ (with trivial coefficients), not with $M(G)$ itself. [L1, given, algebra]

2.1 It is therefore false to present $H^2(G;\mathbb C^\times)$ as this library's definition of the multiplier. [step 1.1, contradiction] ∎
