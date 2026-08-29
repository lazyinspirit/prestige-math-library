---
id: fs-two-morphisms-that-agree-on-every-member-are-equal
kind: false-statement
title: "FALSE: two morphisms that agree on every member are equal"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-chasing-rule-a-zero-arrow-is-detected-by-members,
       cex-two-morphisms-agreeing-on-every-member-need-not-be-equal]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

If $f,g:A \to B$ satisfy
$$f x \equiv g x$$
for every member $x$ of $A$, then $f = g$.

## Facts & Assumptions

**Given:** The memberwise equality claim of the statement.

[L1] The only general member test for equality of morphisms is the zero-arrow
criterion
([[thm-chasing-rule-a-zero-arrow-is-detected-by-members]]).

[L2] There are distinct morphisms that agree on every member
([[cex-two-morphisms-agreeing-on-every-member-need-not-be-equal]]).

## Refutation

**Proof technique:** direct.

1.1 The witness in [L2] gives distinct morphisms $f$ and $g$ with $f x \equiv g x$ for every member $x$. So the stated implication fails. [L2]

2.1 Item [L1] explains the precise replacement: member tests can detect equality with zero, not arbitrary equality of morphisms. [L1, step 1.1] ∎
