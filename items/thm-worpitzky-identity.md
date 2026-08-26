---
id: thm-worpitzky-identity
kind: theorem
title: "Worpitzky's identity for $n\\ge1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-eulerian-recurrence, def-eulerian-number-and-eulerian-polynomial, def-binomial-coefficient, thm-binomial-closed-formula, thm-pascals-rule]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, Enumerative Combinatorics, Volume 1, second edition"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "Felix Gotti, MIT 18.211 Combinatorial Analysis, Lecture 13"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/13.%20Permutatios%20III/Permutations%20III.pdf"
pipeline_run: null
---

## Statement

For every $n,m \in \mathbb{N}$ with $n\ge1$,

$$m^n=\sum_{k=0}^{n-1}A(n,k)\binom{m+k}{n}.$$

## Facts & Assumptions

**Given:** Naturals $n$ and $m$.

[L1] The Eulerian numbers satisfy $A(n,k)=(k+1)A(n-1,k)+(n-k)A(n-1,k-1)$ ([[thm-eulerian-recurrence]]).

[L2] Binomial coefficients satisfy $\binom{N}{r}=0$ for $r>N$ ([[def-binomial-coefficient]]), Pascal's rule $\binom{N+1}{r}=\binom{N}{r}+\binom{N}{r-1}$ ([[thm-pascals-rule]]), and for $r\le N$ the closed formula rearranges to $r\binom{N}{r}=(N-r+1)\binom{N}{r-1}$ ([[thm-binomial-closed-formula]]).

[L3] $A(1,0)=1$ by the definition of Eulerian numbers ([[def-eulerian-number-and-eulerian-polynomial]]).

## Proof

**Proof technique:** induction.

1.1 For $n=1$, [L3] makes the right-hand side $\binom{m}{1}=m=m^1$. [base, L3, given]

1.2 Assume the identity at $n-1$, where $n\ge2$, and write $W_n(m):=\sum_{k=0}^{n-1}A(n,k)\binom{m+k}{n}$. [ih]

2.1 Using [L1] and shifting the second sum, $W_n(m)=\sum_{k=0}^{n-2}A(n-1,k)\bigl((k+1)\binom{m+k}{n}+(n-k-1)\binom{m+k+1}{n}\bigr)$. [step 1.2, L1, algebra]

3.1 Fix $k$ from step 2.1 and put $M:=m+k$. If $n>M+1$, then [L2] gives $\binom{M}{n}=\binom{M+1}{n}=\binom{M}{n-1}=0$, so the bracket in step 2.1 is $0=m\binom{M}{n-1}$. If $n=M+1$, then $\binom{M}{n}=0$, $\binom{M+1}{n}=1$, and $\binom{M}{n-1}=1$, so the same bracket is $(n-k-1)=m=m\binom{M}{n-1}$. Finally, if $n\le M$, then Pascal's rule from [L2] gives $(n-k-1)\binom{M+1}{n}=(n-k-1)\binom{M}{n}+(n-k-1)\binom{M}{n-1}$, and the closed-form identity from [L2] gives $n\binom{M}{n}=(M+1-n)\binom{M}{n-1}=(m+k+1-n)\binom{M}{n-1}$. Substituting into the bracket of step 2.1 yields $m\binom{M}{n-1}$. So in every case that bracket simplifies to $m\binom{m+k}{n-1}$. [step 2.1, L2, algebra]

4.1 Steps 2.1 and 3.1 give $W_n(m)=m\sum_{k=0}^{n-2}A(n-1,k)\binom{m+k}{n-1}$, and the inductive hypothesis of step 1.2 makes this $m\cdot m^{n-1}=m^n$. [step 1.2, step 2.1, step 3.1]

5.1 This is the required identity. [step 4.1, discharge-induction] ∎
