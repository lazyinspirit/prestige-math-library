---
id: fs-equivalence-classes-of-extensions-automatically-form-a-set
kind: false-statement
title: "FALSE: extension classes automatically form a set"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

FALSE: for fixed objects in an arbitrary abelian category, merely defining
equivalence of extensions proves that the extension classes form a set.

## Facts & Assumptions

**Given:** An arbitrary abelian category and fixed objects $M,N$, with no local-smallness, essential-smallness, or enough-resolution hypothesis imposed.

## Refutation

**Proof technique:** direct.

1.1 The axioms stated here do not bound the possible middle objects $E$ by a set. Thus the definition initially supplies only a class of extensions and an equivalence relation on it. Taking a quotient of a class by an equivalence relation does not, by itself, prove that the quotient is a set. [given, algebra]

2.1 The cited corollary obtains a set only after a resolution-based classification identifies the classes with a set-sized $\operatorname{Ext}^1(M,N)$. That extra smallness discharge is not a consequence of the equivalence-relation definition alone, which refutes the claim as now stated. [step 1.1, algebra] ∎
