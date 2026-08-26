---
id: prop-binary-quadratic-form-discriminants-modulo-four
kind: proposition
title: "An integer is the discriminant of an integral binary quadratic form exactly when it is congruent to $0$ or $1$ modulo $4$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-discriminant-of-binary-quadratic-form, def-congruence-modulo-an-integer, lem-congruence-respects-integer-arithmetic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Proposition 9.2.9"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Chapter 4"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Statement

An integer $\Delta$ is the discriminant of an integral binary quadratic form if
and only if

$$\Delta\equiv0\pmod4\qquad\text{or}\qquad\Delta\equiv1\pmod4.$$

## Facts & Assumptions

**Given:** An integer $\Delta$.

[F1] The discriminant of $(a,b,c)$ is $b^2-4ac$ ([[def-discriminant-of-binary-quadratic-form]]).

[L1] $u\equiv v\pmod n$ means that $n$ divides $u-v$ ([[def-congruence-modulo-an-integer]]).

[L2] Congruent integers may be added, subtracted, and multiplied ([[lem-congruence-respects-integer-arithmetic]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\Delta$ is the discriminant of some integral form, say $\Delta=b^2-4ac$. Then $\Delta\equiv b^2\pmod4$. [F1, L1, L2]

1.2 If $\Delta\equiv0\pmod4$, then $(1,0,-\Delta/4)$ is an integral binary quadratic form and its discriminant is $0^2-4\cdot1\cdot(-\Delta/4)=\Delta$. [F1, L1, given, construct, algebra]

1.3 If $\Delta\equiv1\pmod4$, then $(1,1,(1-\Delta)/4)$ is an integral binary quadratic form and its discriminant is $1^2-4\cdot1\cdot((1-\Delta)/4)=\Delta$. [F1, L1, given, construct, algebra]

2.1 If $b=2m$ is even, then $b^2=4m^2\equiv0\pmod4$; if $b=2m+1$ is odd, then $b^2=4m(m+1)+1\equiv1\pmod4$. Hence every discriminant is congruent to $0$ or $1$ modulo $4$. [step 1.1, algebra]

3.1 Step 2.1 proves the forward implication, while steps 1.2 and 1.3 prove the converse in the two possible congruence classes. [step 2.1, step 1.2, step 1.3] ∎
