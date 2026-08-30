---
id: thm-dirichlet-convolution-invertibility-criterion
kind: theorem
title: "An arithmetic function has a Dirichlet inverse exactly when its value at $1$ is nonzero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirichlet-convolution, def-dirichlet-convolution-identity, def-divides-in-z, lem-divisor-bound, thm-complex-numbers-form-a-field, thm-dirichlet-convolution-commutative-ring, thm-strong-induction]
justified_by: []
aliases: []
proof_strategy: induction
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive, Theorem 23.4.3"
      url: "https://math.gordon.edu/ntic/ntic2020/section-gen-moebius.html"
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Exercise 2.54"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

Let $f$ be an arithmetic function. Then the following are equivalent.

1. There exists an arithmetic function $g$ such that
   $$f*g=\varepsilon.$$
2. One has $f(1)\ne0$.

When these conditions hold, the inverse $g$ is unique, it also satisfies
$g*f=\varepsilon$, and it is determined recursively by

$$
g(1)=\frac{1}{f(1)},\qquad g(n)=-\frac{1}{f(1)}\sum_{\substack{d\mid n\\d<n}} f(n/d)g(d)\quad(n>1).
$$

## Facts & Assumptions

**Given:** An arithmetic function $f$.

## Proof

**Proof technique:** induction.

1.1 Suppose $g$ satisfies $f*g=\varepsilon$. Evaluating at $n=1$ gives $f(1)g(1)=\varepsilon(1)=1$, so $f(1)\ne0$ and $g(1)=1/f(1)$. [base, given, algebra]

1.2 Now assume $f(1)\ne0$. Since $\mathbb C$ is a field by [[thm-complex-numbers-form-a-field]], set $g(1):=1/f(1)$. Then $(f*g)(1)=f(1)g(1)=1=\varepsilon(1)$. [base, given, algebra]

1.3 Fix $n>1$ and assume inductively that $g(d)$ has already been defined for every $d<n$ so that $(f*g)(m)=\varepsilon(m)$ for every $m<n$. Every proper positive divisor $d$ of $n$ satisfies $d<n$ by [[lem-divisor-bound]], so in the identity $\sum_{d\mid n} f(d)g(n/d)=\varepsilon(n)=0$ the only unknown term is $f(1)g(n)$. Solving for that term and reindexing the proper divisors by $d\leftrightarrow n/d$ gives the displayed recursion, and with that choice the equality $(f*g)(n)=0$ holds. [ih, given, algebra]

2.1 Apply [[thm-strong-induction]] to the property on natural numbers $r$ that the displayed recursion uniquely defines $g(m)$ and makes $(f*g)(m)=\varepsilon(m)$ for every $1\le m\le r+1$. Step 1.2 gives the base case $r=0$, and step 1.3 gives the strong induction step. Therefore there is a unique arithmetic function $g$ with $f*g=\varepsilon$ for every positive integer $n$. [step 1.2, step 1.3]

3.1 By [[thm-dirichlet-convolution-commutative-ring]], Dirichlet convolution is commutative, so $g*f=f*g=\varepsilon$. Together with step 1.1, this proves the equivalence, the recursive formula, and uniqueness. [step 1.1, step 2.1, discharge-induction] ∎
