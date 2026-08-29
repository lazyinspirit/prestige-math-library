---
id: fs-the-members-of-an-object-form-an-abelian-group
kind: false-statement
title: "FALSE: the members of an object form an abelian group"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-chasing-rule-the-subtraction-surrogate,
       cex-the-members-of-an-object-do-not-form-a-group]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

For every object of an abelian category, addition of representatives induces an
abelian-group operation on its members modulo equivalence.

## Facts & Assumptions

**Given:** The group-law claim of the statement.

[L1] The subtraction surrogate gives only an existence statement for a witness
$z$, not a binary operation on all member classes
([[thm-chasing-rule-the-subtraction-surrogate]]).

[L2] There is an explicit object whose members do not support such a group law
([[cex-the-members-of-an-object-do-not-form-a-group]]).

## Refutation

**Proof technique:** direct.

1.1 The counterexample [L2] shows that the claimed group structure fails even in $\mathbf{Ab}$. So the statement is false. [L2]

2.1 This does not contradict [L1]: the subtraction surrogate is weaker than an additive law on member classes. [L1, step 1.1] ∎
