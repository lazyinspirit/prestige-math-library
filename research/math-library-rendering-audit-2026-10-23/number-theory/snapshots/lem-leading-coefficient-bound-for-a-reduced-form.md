---
id: lem-leading-coefficient-bound-for-a-reduced-form
kind: lemma
title: "A reduced positive-definite form of discriminant $\\Delta$ satisfies $a\\le\\sqrt{|\\Delta|/3}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-reduced-positive-definite-binary-quadratic-form, def-discriminant-of-binary-quadratic-form, prop-positive-definite-binary-form-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, proof of Proposition 9.4.1"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
pipeline_run: null
---

## Statement

Let $(a,b,c)$ be a reduced positive-definite binary quadratic form with
discriminant $\Delta$. Then

$$a\le\sqrt{|\Delta|/3}.$$

## Facts & Assumptions

**Given:** A reduced positive-definite form $(a,b,c)$ with discriminant $\Delta$.

[F1] Reduced forms satisfy $|b|\le a\le c$ ([[def-reduced-positive-definite-binary-quadratic-form]]).

[F2] The discriminant of $(a,b,c)$ is $\Delta=b^2-4ac$ ([[def-discriminant-of-binary-quadratic-form]]).

[L1] Positive-definite forms have negative discriminant ([[prop-positive-definite-binary-form-criterion]]).

## Proof

**Proof technique:** direct.

1.1 From $|b|\le a\le c$ we get $b^2\le a^2\le ac$. [F1, algebra]

2.1 Since the form is positive definite, [L1] gives $\Delta<0$, so $|\Delta|=4ac-b^2$. Using step 1.1 yields $|\Delta|=4ac-b^2\ge4a^2-a^2=3a^2$. [F2, L1, step 1.1, algebra]

3.1 Therefore $a^2\le|\Delta|/3$, and since $a>0$ for a positive-definite form, taking square roots gives $a\le\sqrt{|\Delta|/3}$. [F1, step 2.1, algebra] ∎
