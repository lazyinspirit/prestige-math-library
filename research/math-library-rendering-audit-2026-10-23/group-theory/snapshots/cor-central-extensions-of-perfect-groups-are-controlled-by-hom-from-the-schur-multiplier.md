---
id: cor-central-extensions-of-perfect-groups-are-controlled-by-hom-from-the-schur-multiplier
kind: corollary
title: "Central extensions of perfect groups"
status: published
origin: pipeline
deps: [def-perfect-group, thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two, thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action, def-axiom-of-choice, def-supplied-projective-resolution-datum, def-supplied-injective-resolution-datum]
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
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-05-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice and supplied projective and injective resolution
data for group (co)homology. For a perfect group $G$ and a trivial $G$-module
$A$, equivalence classes of
central extensions of $G$ by $A$ are naturally in bijection with
$\operatorname{Hom}(M(G),A)$.

## Facts & Assumptions

**Given:** The stated choice and resolution hypotheses, a perfect group
$G$, and an abelian group $A$ with trivial $G$-action.

## Proof

**Proof technique:** direct.

1.1 Perfectness gives $G_{\mathrm{ab}}=0$, hence $\operatorname{Ext}^1_{\mathbb Z}(G_{\mathrm{ab}},A)=0$.  The degree-two universal-coefficient sequence therefore identifies $H^2(G;A)$ naturally with $\operatorname{Hom}(M(G),A)$. [given, algebra]

2.1 The extension-classification theorem identifies $H^2(G;A)$ with equivalence classes of extensions inducing the trivial action, namely central extensions.  Composing the two bijections proves the claim. [step 1.1, algebra] ∎
