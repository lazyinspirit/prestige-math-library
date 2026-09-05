---
id: ex-change-of-base-along-the-underlying-set-functor
kind: example
title: "Change of base along the underlying-set functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-the-underlying-ordinary-category-is-an-instance-of-change-of-base]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Categorical Homotopy Theory, Remark 3.5.11"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Example

Let $\mathcal A$ be an $\mathbf{Ab}$-enriched category. Changing base along the
underlying-set functor $U:\mathbf{Ab}\to\mathbf{Set}$ gives the ordinary
category whose hom-sets are the underlying sets of the abelian-group homs.

## Facts & Assumptions

**Given:** An $\mathbf{Ab}$-enriched category $\mathcal A$.

[L1] The underlying ordinary category construction is change of base along the underlying-hom or underlying-set functor ([[cor-the-underlying-ordinary-category-is-an-instance-of-change-of-base]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] with base functor $U:\mathbf{Ab}\to\mathbf{Set}$. [L1, given]

2.1 The result keeps the same objects and replaces each abelian-group hom-object by its underlying set, so one recovers the ordinary category obtained by forgetting addition on homs. [step 1.1] ∎
