---
id: ex-reduced-forms-of-discriminant-minus-twenty
kind: example
title: "The reduced primitive forms of discriminant $-20$"
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
$-20$ are

$$x^2+5y^2=(1,0,5),\qquad 2x^2+2xy+3y^2=(2,2,3).$$

Consequently $h(-20)=2$.

## Facts & Assumptions

**Given:** A reduced primitive positive-definite form $(a,b,c)$ of discriminant $-20$.

[L1] A reduced form of discriminant $\Delta$ satisfies $a\le\sqrt{|\Delta|/3}$ ([[lem-leading-coefficient-bound-for-a-reduced-form]]).

[L2] Each proper-equivalence class contains exactly one reduced form ([[thm-unique-reduced-positive-definite-binary-quadratic-form]]).

[L3] The class number $h(\Delta)$ counts proper-equivalence classes of primitive positive-definite forms of discriminant $\Delta$ ([[def-binary-quadratic-form-class-number]]).

## Verification

**Proof technique:** direct.

1.1 Here $a\le\sqrt{20/3}<3$, so $a$ is $1$ or $2$. [L1, given, algebra]

2.1 If $a=1$, then $-20=b^2-4c$, so $4c=b^2+20$. Reducedness gives $|b|\le1$. The values $b=\pm1$ make $c=21/4$, not an integer, while $b=0$ gives $c=5$, yielding $(1,0,5)$. [step 1.1, algebra]

2.2 If $a=2$, then $-20=b^2-8c$, so $8c=b^2+20$. Reducedness gives $|b|\le2$. The values $b=0,\pm1$ give no integer $c$, while $b=\pm2$ gives $c=3$; the boundary rule forces $b=2$. Thus the only reduced possibility with $a=2$ is $(2,2,3)$. [step 1.1, algebra]

3.1 The two forms of steps 2.1 and 2.2 are primitive and distinct, and [L2] shows that no other reduced primitive form of discriminant $-20$ exists. Hence [L3] gives $h(-20)=2$. [L2, L3, step 2.1, step 2.2] ∎
