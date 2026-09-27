---
id: cor-central-extensions-of-perfect-groups-are-controlled-by-hom-from-the-schur-multiplier
kind: corollary
title: "Central extensions of perfect groups"
status: published
origin: pipeline
deps: [def-perfect-group, thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two, thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action]
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

For a perfect group $G$ and a trivial $G$-module $A$, equivalence classes of
central extensions of $G$ by $A$ are naturally in bijection with
$\operatorname{Hom}(M(G),A)$.

## Facts & Assumptions

**Given:** Let $G$ be perfect and let $A$ have trivial $G$-action.

## Proof

**Proof technique:** direct.

1.1 Perfectness gives $G_{\mathrm{ab}}=0$, hence $\operatorname{Ext}^1_{\mathbb Z}(G_{\mathrm{ab}},A)=0$.  The degree-two universal-coefficient sequence therefore identifies $H^2(G;A)$ naturally with $\operatorname{Hom}(M(G),A)$. [given, algebra]

2.1 The extension-classification theorem identifies $H^2(G;A)$ with equivalence classes of extensions inducing the trivial action, namely central extensions.  Composing the two bijections proves the claim. [step 1.1, algebra] ∎
