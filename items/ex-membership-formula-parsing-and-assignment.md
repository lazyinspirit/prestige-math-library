---
id: ex-membership-formula-parsing-and-assignment
kind: example
title: "Parsing and evaluating a membership formula"
status: published
origin: pipeline
deps: ["lem-satisfaction-coincidence"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Weiss, An Introduction to Set Theory (2014) \u2014 chapter 1 pp.17\u201318, nonempty-set formula."
      url: "https://www.math.toronto.edu/~weiss/Set_Theory.pdf"
---

## Example

In the membership structure on $M=\{0,1\}$, where $0=\varnothing$ and $1=\{0\}$, let $\phi=\exists v_1(v_1\in v_0)$. Then $\operatorname{FV}(\phi)=\{v_0\}$. It is false when $s(v_0)=0$ and true when $s(v_0)=1$.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] Assignments agreeing on $\operatorname{FV}(e)$ give equal denotations when $e$ is a term and the same truth value when $e$ is a formula. Also, passage to a reduct preserves denotations and satisfaction for expressions in the smaller signature. In particular sentence truth is independent of assignment; the truth of a formula can be specified by any tuple assigning all its free variables. ([[lem-satisfaction-coincidence]])

## Verification

1.1 The outer code is $(\mathsf{exists},v_1,(\mathsf{rel},\in,(\mathsf{var},v_1),(\mathsf{var},v_0)))$. The body has both variables free; the outer binder removes $v_1$. By coincidence all other assignment values are irrelevant. [F1]

2.1 The only membership pair in $M^2$ is $(0,1)$. For value $0$ at $v_0$, neither candidate witness is a member of $0$. For value $1$, witness $0$ works. These are the two asserted truth values. [step 1.1, given] ∎
