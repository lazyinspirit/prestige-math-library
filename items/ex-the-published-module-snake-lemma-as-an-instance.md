---
id: ex-the-published-module-snake-lemma-as-an-instance
kind: example
title: "The published module snake lemma as an instance"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-snake-lemma-in-an-abelian-category,
       thm-snake-lemma-for-modules]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Lemma VIII.4.5"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Example

Inside $R\text{-}\mathbf{Mod}$, the categorical snake lemma becomes the
published module snake lemma.

## Facts & Assumptions

**Given:** Snake data in the category of modules.

[L1] The categorical snake lemma holds in every abelian category
([[thm-snake-lemma-in-an-abelian-category]]).

[L2] The module snake lemma is already on disk
([[thm-snake-lemma-for-modules]]).

## Verification

1.1 Module categories are abelian, so the module diagram satisfies the hypotheses of [L1]. [L1]

2.1 The kernel, cokernel, and connecting-map terms in [L1] are exactly the ones named in [L2]. Thus the published module theorem is the specialization of the categorical snake lemma to modules. [L2, step 1.1] ∎
