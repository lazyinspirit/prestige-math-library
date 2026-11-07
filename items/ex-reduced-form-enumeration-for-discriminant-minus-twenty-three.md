---
id: ex-reduced-form-enumeration-for-discriminant-minus-twenty-three
kind: example
title: "Reduced-Form Enumeration for Discriminant −23"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - alg-enumerate-reduced-forms-of-negative-fundamental-discriminant
  - thm-reduced-form-enumeration-correctness-and-completeness
  - def-binary-quadratic-form-class-number
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, §9.4"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
---

## Example

Run the reduced-form enumerator on $D=-23$, which is squarefree and congruent
to $1$ modulo $4$. In the convention $(a,b,c)\leftrightarrow ax^2+bxy+cy^2$,
it returns, in order, $(1,1,6)$, $(2,-1,3)$, and $(2,1,3)$. Primitive means
$\gcd(a,b,c)=1$, positive definite means positive on every nonzero real pair,
and proper equivalence is change of variables by an integer matrix of
determinant $1$. The binary form class number $h(D)$ counts
proper-equivalence classes of primitive positive-definite integral forms of
discriminant $D$; because this enumerator returns one representative per class,
$h(-23)=3$.

## Example references

[[alg-enumerate-reduced-forms-of-negative-fundamental-discriminant]]

[[thm-reduced-form-enumeration-correctness-and-completeness]]

[[def-binary-quadratic-form-class-number]]

[William Stein, *Elementary Number Theory and Elliptic Curves*, §9.4](https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf)

## Facts & Assumptions

**Given:** The input $D=-23$ and the exact search and retention rules of the
reduced-form enumerator.

[F1] The procedure sets $A=\lfloor\sqrt{|D|/3}\rfloor$, scans each integer
$a$ from $1$ to $A$ and each $b$ from $-a$ to $a$, and retains only the
triples passing the parity, divisibility, primitive-gcd and reduced-boundary
tests ([[alg-enumerate-reduced-forms-of-negative-fundamental-discriminant]]).

[F2] The algorithm returns exactly one primitive positive-definite reduced
representative per proper-equivalence class, so its output length is $h(D)$
([[thm-reduced-form-enumeration-correctness-and-completeness]]).

[F3] The binary quadratic form class number $h(D)$ counts proper-equivalence
classes of primitive positive-definite integral forms of discriminant $D$
([[def-binary-quadratic-form-class-number]]).

## Verification

1.1 The only prime squares at most $23$ are $2^2=4$ and $3^2=9$, neither of which divides $23$. Thus $-23$ is squarefree and $-23\equiv1\pmod4$, so it is a valid input. The cutoff is $A=2$, since $3\cdot2^2=12\le23$ and $3\cdot3^2=27>23$. [given, algebra]

2.1 For $a=1$, the odd integers in $[-1,1]$ are $b=-1,1$. In both cases $b^2+23=24$ is divisible by $4a=4$ and $c=6$; both gcd tests equal $1$ and $a\le c$. The boundary condition $|b|=a$ retains only $b=1$, giving $(1,1,6)$. [F1, step 1.1, algebra]

2.2 For $a=2$, the odd integers in $[-2,2]$ are $b=-1,1$. For each, $b^2+23=24$ is divisible by $4a=8$ and $c=3$; the gcd is $\gcd(\gcd(2,b),3)=1$ and $2\le3$. Neither $|b|=a$ nor $a=c$, so both signs are retained, giving $(2,-1,3)$ and $(2,1,3)$. [F1, step 1.1, algebra]

3.1 There is no further outer-loop value because $A=2$. Thus the returned list is exactly the three triples above, and [F2] and [F3] identify its length with $h(-23)=3$. This is an execution trace of the new algorithm; the previously published manual derivation for $D=-23$ remains a separate example. [F1, F2, F3, step 2.1, step 2.2, algebra] ∎
