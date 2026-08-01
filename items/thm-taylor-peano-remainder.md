---
id: thm-taylor-peano-remainder
kind: theorem
title: "Peano's form: the normalized Taylor remainder tends to zero"
status: published
origin: session
deps: [def-taylor-polynomial-and-remainder, lem-taylor-polynomial-derivatives, lem-cauchy-mean-value-quotient-form, lem-derivative-of-a-power, thm-chain-rule, cor-differentiable-implies-continuous, def-derivative, def-function-limit, def-continuity-real, def-neighbourhood-r, thm-algebra-of-function-limits, thm-induction-principle, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
pipeline_run: null
---

## Statement

Let $n\ge1$. If there is a real $\delta>0$ such that $f$ is
$n$-times differentiable on the open interval
$N_\delta(a)=(a-\delta,a+\delta)$, then
$$\frac{R_{n,a}f(x)}{(x-a)^n}\longrightarrow0\qquad(x\to a).$$
Equivalently, in the usual little-$o$ shorthand,
$f(x)=T_{n,a}f(x)+o((x-a)^n)$. For $n=0$, the analogous assertion is the
separate continuity condition at $a$: for every $\varepsilon>0$, all
domain points $x$ sufficiently near $a$ satisfy
$|f(x)-f(a)|<\varepsilon$.

## Facts & Assumptions

**Given:** The stated differentiability on the open neighbourhood $N_\delta(a)$ of [[def-neighbourhood-r]], or the separate continuity hypothesis when $n=0$.

[L1] Taylor polynomials and their matching derivatives are [[def-taylor-polynomial-and-remainder]] and [[lem-taylor-polynomial-derivatives]].

[L2] The derivative quotient is [[def-derivative]], differentiability implies continuity ([[cor-differentiable-implies-continuous]]), and continuity at $a$ has the stated quantified condition ([[def-continuity-real]]). The Cauchy quotient lemma is [[lem-cauchy-mean-value-quotient-form]], the shifted-power derivative follows from [[lem-derivative-of-a-power]] and [[thm-chain-rule]], and finite limits are [[def-function-limit]] and obey [[thm-algebra-of-function-limits]].

[L3] For $n\ge1$, the canonical real $\iota(n)$ is positive and hence nonzero ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

## Proof

**Proof technique:** induction.

1.1 Under the separate $n=0$ hypothesis, the quantified assertion is exactly the definition of continuity at $a$.  [given, L2]

1.2 For $n=1$, the derivative definition gives $$\frac{f(x)-f(a)-f'(a)(x-a)}{x-a} =\frac{f(x)-f(a)}{x-a}-f'(a)\longrightarrow0.$$ This is the required base case.  [base, given, L2]

1.3 Assume $n\ge2$ and the assertion through order $n-1$. Put $R=R_{n,a}f$. Then $R(a)=R'(a)=0$, and $R'(x)=R_{n-1,a}(f')(x)$.  [L1, algebra]

2.1 By the induction hypothesis applied to $f'$, $R'(x)/(x-a)^{n-1}\to0$. Applying the Cauchy quotient lemma to $R(x)-R(a)$ and $(x-a)^n$ gives $R(x)/(x-a)^n=R'(\xi)/(\iota(n)(\xi-a)^{n-1})$ for a point $\xi$ between $a$ and $x$.  [step 1.3, ih, L2, L3]

3.1 Since $\xi\to a$, the right side tends to $0$. This proves the Peano estimate without assuming continuity of $f^{(n)}$.  [step 2.1, L2, discharge-induction] ∎
