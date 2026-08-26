---
id: cor-finiteness-of-positive-definite-binary-form-classes
kind: corollary
title: "For each negative discriminant, there are only finitely many proper-equivalence classes of positive-definite integral binary quadratic forms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-unique-reduced-positive-definite-binary-quadratic-form, lem-leading-coefficient-bound-for-a-reduced-form]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Proposition 9.4.1"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Chapter 4"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Statement

For every negative integer $\Delta$, there are only finitely many
proper-equivalence classes of positive-definite integral binary quadratic forms
of discriminant $\Delta$.

## Facts & Assumptions

**Given:** A negative integer $\Delta$.

[L1] Each proper-equivalence class of positive-definite integral binary quadratic forms contains exactly one reduced form ([[thm-unique-reduced-positive-definite-binary-quadratic-form]]).

[L2] A reduced positive-definite form of discriminant $\Delta$ satisfies $a\le\sqrt{|\Delta|/3}$ ([[lem-leading-coefficient-bound-for-a-reduced-form]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], it is enough to show that only finitely many reduced forms have discriminant $\Delta$. [L1]

1.2 If $(a,b,c)$ is reduced with discriminant $\Delta$, then $1\le a\le\sqrt{|\Delta|/3}$ by [L2], so only finitely many positive integers $a$ can occur. [L2, algebra]

2.1 For each such $a$, reducedness gives $|b|\le a$, so only finitely many integers $b$ can occur. Once $a$ and $b$ are fixed, the discriminant equation $\Delta=b^2-4ac$ determines $c=(b^2-\Delta)/(4a)$ uniquely. Therefore only finitely many reduced triples $(a,b,c)$ have discriminant $\Delta$. [step 1.2, algebra]

3.1 Hence there are only finitely many proper-equivalence classes of positive-definite integral binary quadratic forms of discriminant $\Delta$. [step 1.1, step 2.1] ∎
