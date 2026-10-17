---
id: ex-bounded-engineering-design-mixed-integer-gap-certificate
kind: example
title: A bounded engineering design has an exact mixed-integer gap certificate
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound-examples
dependency_level: 9
deps: [alg-bounded-mixed-integer-branch-and-bound, thm-bounded-mixed-integer-gap-certificate-sound]
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §§12 and 17"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
---

## Example

A manufacturer chooses a module count $z\in\{0,1,2\}$ and a normalized continuous setting $x\in[0,1]$. The exact cost is
$$F(z,x)=(x-z/2)^2+(z-2)^2/10.$$
Finite enumeration is the fallback for the mixed-integer relaxation oracle.

## Facts & Assumptions

**Given:** The finite design set $\{0,1,2\}\times[0,1]$, the cost $F$, and [[alg-bounded-mixed-integer-branch-and-bound]] with an exact continuous lower-bound oracle.

[F1] A complete mixed-integer ledger with feasible upper bound $U$ and valid lower bound $L$ is a global epsilon certificate when $U-L\le\varepsilon$. [[thm-bounded-mixed-integer-gap-certificate-sound]]

## Verification

1.1 For each fixed $z\in\{0,1,2\}$, the square $(x-z/2)^2$ is nonnegative, so $F(z,x)\ge(z-2)^2/10$. The point $x=z/2$ belongs to $[0,1]$ and attains equality. Thus the exact fixed-integer minima are $2/5$, $1/10$, and $0$, respectively. [given, algebra]

2.1 The fallback enumerates all three integer assignments and uses each exact square-completion lower bound with its attaining feasible point. Taking the least of the three lower bounds gives $L=0$, and the assignment $(z,x)=(2,1)$ gives $U=0$. The total gap is exactly zero. [given, step 1.1, algebra]

3.1 Therefore $(2,1)$ is globally optimal and is a zero-gap mixed-integer certificate. The proof uses finite enumeration and exact values; it makes no complexity claim for larger integer ranges. [F1, step 2.1, algebra] ∎

