---
id: fs-the-subtraction-rule-produces-a-unique-member
kind: false-statement
title: "FALSE: the subtraction rule produces a unique member"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-chasing-rule-the-subtraction-surrogate,
       thm-abelian-groups-form-an-abelian-category]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Theorem VIII.4.3(vi)"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

In the subtraction surrogate, the member $z$ with $g z \equiv 0$ is unique.

## Facts & Assumptions

**Given:** The category $\mathbf{Ab}$.

[L1] The category $\mathbf{Ab}$ is abelian ([[thm-abelian-groups-form-an-abelian-category]]).

[L2] The subtraction surrogate applies whenever $g x \equiv g y$ ([[thm-chasing-rule-the-subtraction-surrogate]]).

## Refutation

**Proof technique:** direct.

1.1 In $\mathbf{Ab}$, take $B=\mathbb Z$, $C=0$, $g=0:\mathbb Z\to0$, and $x=y=0_{\mathbb Z,\mathbb Z}:\mathbb Z\to\mathbb Z$. Then $g x=g y=0$, so the hypotheses of [L2] are satisfied. [L1, L2]

2.1 Both $z_0:=0_{\mathbb Z,\mathbb Z}$ and $z_1:=1_{\mathbb Z}$ satisfy $g z_i=0$, hence $g z_i\equiv0$. Since $z_0\ne z_1$, the asserted uniqueness fails in this instance. [L1, step 1.1, algebra]

3.1 Therefore the statement is false. [step 2.1] ∎
