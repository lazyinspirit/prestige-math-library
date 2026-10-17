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

A manufacturer chooses a module count $z\in\{0,1,2\}$ and a normalized continuous setting $x\in[0,1]$. Set the tolerance to $\varepsilon=1/10$ and the total node budget to $N=4$. The mixed relaxation oracle reports `bound-unavailable` on the root evaluation, which uses one call and triggers the enumeration fallback. The exact cost is
$$F(z,x)=(x-z/2)^2+(z-2)^2/10.$$
Finite enumeration is the fallback for the mixed-integer relaxation oracle. Represent the same feasible design set using the outer continuous box $X=[-1,2]$ and the factorable inequalities $-x\le0$ and $x-1\le0$. Thus each continuous fallback uses the constrained-report mode, with feasible set $C_z=[0,1]$ strictly inside $X$.

## Facts & Assumptions

**Given:** The finite design set $\{0,1,2\}\times[0,1]$, the cost $F$, $\varepsilon=1/10$, node budget $N=4$, a root mixed-relaxation result `bound-unavailable`, and [[alg-bounded-mixed-integer-branch-and-bound]]. Each fallback assignment receives one remaining call. In the stated constrained-report mode, its deterministic exact continuous root report on $X$ returns the square-completion lower bound $(z-2)^2/10$ and the feasible witness $x=z/2$ with that exact objective value; the unconstrained midpoint-witness mode is not used.

[F1] A complete mixed-integer ledger with feasible upper bound $U$ and valid lower bound $L$ is a global epsilon certificate when $U-L\le\varepsilon$. [[thm-bounded-mixed-integer-gap-certificate-sound]]

## Verification

1.1 For each fixed $z\in\{0,1,2\}$, the square $(x-z/2)^2$ is nonnegative, so $F(z,x)\ge(z-2)^2/10$. The point $x=z/2$ belongs to $[0,1]$ and attains equality. Thus the exact fixed-integer minima are $2/5$, $1/10$, and $0$, respectively. [given, algebra]

2.1 After the root mixed-relaxation call, the three remaining calls are allocated one to each assignment in lexicographic order. For $z=0,1,2$, the exact continuous root report gives the lower bound $2/5,1/10,0$, respectively, and the feasible point $x=z/2$ attains it. Each reported point satisfies both inequalities, and each root report has equal lower and feasible upper bounds. Hence the continuous procedure returns a complete one-leaf zero-gap certificate immediately, before any subdivision or further oracle call. There are exactly $1+3=4$ calls in total. Thus the complete fallback ledger has $L=0$, and $(z,x)=(2,1)$ gives $U=0$. The total gap is exactly zero, which is at most $\varepsilon$. [given, step 1.1, algebra]

3.1 Therefore $(2,1)$ is globally optimal and is a zero-gap mixed-integer certificate. The proof uses finite enumeration and exact values; it makes no complexity claim for larger integer ranges. [F1, step 2.1, algebra] ∎

