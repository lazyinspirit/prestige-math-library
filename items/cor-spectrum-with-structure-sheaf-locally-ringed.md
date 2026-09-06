---
id: cor-spectrum-with-structure-sheaf-locally-ringed
kind: corollary
title: "Spec A with its structure sheaf is a locally ringed space"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-stalk-structure-sheaf-prime-localization, thm-localisation-at-a-prime-is-local, def-locally-ringed-space]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "The Stacks Project, Definition 26.5.3"
      url: "https://stacks.math.columbia.edu/tag/01HR"
---
## Statement

$(\operatorname{Spec}A,\mathcal O_{\operatorname{Spec}A})$ is a locally ringed
space.

## Facts & Assumptions

**Given:** The affine structure sheaf.

## Proof

**Proof technique:** direct.

1.1 At $\mathfrak p$, the stalk is canonically isomorphic to [given]
$A_{\mathfrak p}$. [given]

2.1 The ring $A_{\mathfrak p}$ is local, with maximal ideal [step 1.1]
$\mathfrak pA_{\mathfrak p}$, so the canonically isomorphic stalk is local as
well. [step 1.1]

3.1 Thus every stalk is local, which is exactly the locally ringed condition. [step 2.1] ∎
