---
id: ex-reduced-forms-of-discriminant-minus-twenty-three
kind: example
title: "The reduced primitive forms of discriminant $-23$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-leading-coefficient-bound-for-a-reduced-form, thm-unique-reduced-positive-definite-binary-quadratic-form, def-binary-quadratic-form-class-number]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Section 9.4"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
pipeline_run: null
---

## Example

The reduced primitive positive-definite binary quadratic forms of discriminant
$-23$ are

$$ (1,1,6),\qquad (2,1,3),\qquad (2,-1,3). $$

Consequently $h(-23)=3$.

## Facts & Assumptions

**Given:** A reduced primitive positive-definite form $(a,b,c)$ of discriminant $-23$.

[L1] A reduced form of discriminant $\Delta$ satisfies $a\le\sqrt{|\Delta|/3}$ ([[lem-leading-coefficient-bound-for-a-reduced-form]]).

[L2] Each proper-equivalence class contains exactly one reduced form ([[thm-unique-reduced-positive-definite-binary-quadratic-form]]).

[L3] The class number $h(\Delta)$ counts proper-equivalence classes of primitive positive-definite forms of discriminant $\Delta$ ([[def-binary-quadratic-form-class-number]]).

## Verification

**Proof technique:** direct.

1.1 Here $a\le\sqrt{23/3}<3$, so $a$ is $1$ or $2$. [L1, given, algebra]

2.1 If $a=1$, then $-23=b^2-4c$, so $4c=b^2+23$. Reducedness gives $|b|\le1$. The value $b=0$ gives no integer $c$, while $b=\pm1$ gives $c=6$; the boundary rule forces $b=1$. Thus $(1,1,6)$ is the only reduced possibility with $a=1$. [step 1.1, algebra]

2.2 If $a=2$, then $-23=b^2-8c$, so $8c=b^2+23$. Reducedness gives $|b|\le2$. The values $b=0,\pm2$ give no integer $c$, while $b=\pm1$ gives $c=3$, and both signs are allowed because $|b|<a$. Thus the reduced possibilities are $(2,1,3)$ and $(2,-1,3)$. [step 1.1, algebra]

3.1 The three forms from steps 2.1 and 2.2 are primitive and distinct, and [L2] shows that no other reduced primitive form of discriminant $-23$ exists. Hence [L3] gives $h(-23)=3$. [L2, L3, step 2.1, step 2.2] ∎
