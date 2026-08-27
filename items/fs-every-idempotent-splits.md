---
id: fs-every-idempotent-splits
kind: false-statement
title: "FALSE: every idempotent splits"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-idempotent-complete-category, thm-an-additive-category-with-kernels-is-idempotent-complete, def-the-idempotent-completion-of-a-preadditive-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Dixy Msapato, The Karoubi envelope and weak idempotent completion of an extriangulated category, Section 2.1"
      url: "https://eprints.whiterose.ac.uk/id/eprint/180476/13/Msapato2022_Article_TheKaroubiEnvelopeAndWeakIdemp.pdf"
pipeline_run: frontier-20
---

## Statement

**False claim:** every idempotent in every preadditive category splits.

## Facts & Assumptions

**Given:** The one-object preadditive category attached to the commutative ring $R=\mathbb Z\times\mathbb Z$ and the idempotent $e=(1,0)\in R$.

[L1] Idempotent completeness means that every idempotent splits ([[def-idempotent-complete-category]]).

[L2] An additive category with kernels is idempotent complete, so the missing hypothesis really is extra structure ([[thm-an-additive-category-with-kernels-is-idempotent-complete]]).

[L3] The Karoubi envelope adjoins formal splitting objects for idempotents ([[def-the-idempotent-completion-of-a-preadditive-category]]).

## Refutation

**Proof technique:** direct.

1.1 The element $e=(1,0)$ satisfies $e^2=e$, so it is an idempotent endomorphism of the unique object of the one-object preadditive category attached to $R$. [given, L1]

2.1 If $e$ split there as $ip=e$ and $pi=1$, then commutativity of $R$ would give $e=ip=pi=1$, contradicting $e=(1,0)\ne(1,1)$. So this idempotent does not split. [step 1.1]

3.1 Therefore not every idempotent splits. The point of [L2] is that kernels rule this out in additive categories, while [L3] records the standard repair that adjoins the missing split object. [L2, L3, step 2.1] ∎
