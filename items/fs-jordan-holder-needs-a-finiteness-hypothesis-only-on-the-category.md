---
id: fs-jordan-holder-needs-a-finiteness-hypothesis-only-on-the-category
kind: false-statement
title: "FALSE: Jordan-Holder needs finiteness only of the ambient category"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-jordan-holder-theorem-in-an-abelian-category, def-object-of-finite-length]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Section 1.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Statement

The Jordan-Holder theorem needs a finiteness hypothesis only on the ambient
category, not on the object.

## Facts & Assumptions

**Given:** The abelian category $\mathbf{Ab}$ and the objects $\mathbb Z/p$ and
$\mathbb Z$.

[L1] Jordan-Holder compares composition series of a single object
([[thm-jordan-holder-theorem-in-an-abelian-category]]).

[L2] Finite length is an objectwise condition
([[def-object-of-finite-length]]).

## Refutation

1.1 The object $\mathbb Z/p$ has finite length, while by the previous false statement witness $\mathbb Z$ has no composition series and so is not of finite length. Both live in the same abelian category $\mathbf{Ab}$. [L2, algebra]

2.1 Therefore the relevant finiteness hypothesis is on the object whose composition series are being compared, not on the category alone. That is exactly how [L1] and [L2] are stated, so the displayed statement is false. [L1, L2, step 1.1] ∎
