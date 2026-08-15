---
id: cex-a-rational-recurrence-may-need-a-proper-splitting-field
kind: counterexample
title: 'A recurrence over $\mathbb Q$ can require a proper splitting field for its exponential closed form'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-linear-recurrence-iff-rational-generating-function, thm-closed-form-for-a-linear-recurrence-over-a-splitting-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

Every constant-coefficient recurrence over $\mathbb Q$ has its characteristic-root exponential closed form over $\mathbb Q$, without passing to a proper splitting field.

## Facts & Assumptions

**Given:** The sequence defined by $a_0=0$, $a_1=1$, and $a_{n+2}+a_n=0$.

[L1] A recurrence beginning at zero is represented by its rational formal generating function ([[thm-linear-recurrence-iff-rational-generating-function]]).

[L2] The polynomial-times-exponential form is asserted over a named splitting field of the recurrence characteristic polynomial ([[thm-closed-form-for-a-linear-recurrence-over-a-splitting-field]]).

## Counterexample

**Proof technique:** explicit splitting field.

1.1 Multiplying $A(x)=\sum_{n\ge0}a_nx^n$ by $1+x^2$ and using the recurrence leaves $x$, so [L1] gives $A(x)=x/(1+x^2)$ over $\mathbb Q$. [given, L1, algebra]

1.2 The characteristic polynomial $t^2+1$ has no root in $\mathbb Q$, but in $\mathbb Q(i)$ it factors as $(t-i)(t+i)$. Thus a pure-exponential expression using its characteristic roots cannot be written with bases in $\mathbb Q$. [algebra]

2.1 Applying [L2] in the splitting field and matching $a_0=0,a_1=1$ gives $a_n=(i^n-(-i)^n)/(2i)$. Its first four values are $0,1,0,-1$, which satisfy the given recurrence. [step 1.2, L2, algebra]

3.1 This rational recurrence over $\mathbb Q$ therefore requires the proper splitting field $\mathbb Q(i)$ for its characteristic-root exponential form, refuting the claim. [step 1.1, step 1.2, step 2.1] ∎
