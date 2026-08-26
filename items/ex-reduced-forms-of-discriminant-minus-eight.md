---
id: ex-reduced-forms-of-discriminant-minus-eight
kind: example
title: "The reduced primitive forms of discriminant $-8$"
status: draft
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
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Section 9.4"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
pipeline_run: null
---

## Example

The only reduced primitive positive-definite binary quadratic form of
discriminant $-8$ is

$$x^2+2y^2=(1,0,2).$$

Consequently $h(-8)=1$, and every primitive positive-definite form of
discriminant $-8$ is properly equivalent to $x^2+2y^2$.

## Facts & Assumptions

**Given:** A reduced primitive positive-definite form $(a,b,c)$ of discriminant $-8$.

[L1] A reduced form of discriminant $\Delta$ satisfies $a\le\sqrt{|\Delta|/3}$ ([[lem-leading-coefficient-bound-for-a-reduced-form]]).

[L2] Each proper-equivalence class contains exactly one reduced form ([[thm-unique-reduced-positive-definite-binary-quadratic-form]]).

[L3] The class number $h(\Delta)$ counts proper-equivalence classes of primitive positive-definite forms of discriminant $\Delta$ ([[def-binary-quadratic-form-class-number]]).

## Verification

**Proof technique:** direct.

1.1 Here $a\le\sqrt{8/3}<2$, so the positive integer $a$ must be $1$. [L1, given, algebra]

2.1 The discriminant equation gives $-8=b^2-4c$, so $4c=b^2+8$. Reducedness gives $|b|\le1$; the choices $b=\pm1$ make $c=9/4$, not an integer, while $b=0$ gives $c=2$. Thus the only reduced possibility is $(1,0,2)$. [step 1.1, algebra]

3.1 The form $(1,0,2)$ is primitive, so by [L2] there is exactly one proper-equivalence class of primitive positive-definite forms of discriminant $-8$. Hence [L3] gives $h(-8)=1$, and every such form is properly equivalent to $(1,0,2)$. [L2, L3, step 2.1] ∎
