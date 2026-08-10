---
id: lem-taylor-polynomial-derivatives
kind: lemma
title: "Taylor polynomials match the prescribed derivatives at the centre"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-taylor-polynomial-and-remainder, lem-derivative-of-a-power, thm-chain-rule, thm-algebra-of-derivatives, def-factorial-and-falling-factorial, lem-finite-sum-laws, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
pipeline_run: null
---

## Statement

For $0\le r\le n$,
$$(T_{n,a}f)^{(r)}(x)=\sum_{j=r}^{n}\frac{f^{(j)}(a)}{\iota((j-r)!)}(x-a)^{j-r}.$$
Consequently $(T_{n,a}f)^{(r)}(a)=f^{(r)}(a)$, and $R_{n,a}f$ and its derivatives through order $n$ vanish at $a$.

## Facts & Assumptions

**Given:** The Taylor polynomial of [[def-taylor-polynomial-and-remainder]].

[L1] Natural powers differentiate as in [[lem-derivative-of-a-power]]; applying the chain rule to $x\mapsto x-a$, whose derivative is $1$, gives the same shifted-power formula; and finite sums differentiate termwise by [[thm-chain-rule]] and [[thm-algebra-of-derivatives]].

[L2] Falling factorials cancel factorials according to [[def-factorial-and-falling-factorial]]; finite sums reindex by [[lem-finite-sum-laws]].

## Proof

**Proof technique:** induction.

1.1 At $r=0$ the formula is the definition.  [base, given]

1.2 Assuming the formula at $r<n$, differentiate termwise. The term indexed $j$ acquires $\iota(j-r)$, which cancels $\iota((j-r)!)$ to $\iota((j-r-1)!)$; the $j=r$ constant term disappears. This is the formula at $r+1$.  [ih, L1, L2, algebra]

2.1 At $x=a$, only the $j=r$ term survives and equals $f^{(r)}(a)$. Subtraction from $f^{(r)}(a)$ gives the remainder assertion.  [step 1.2, L1, algebra]

3.1 The formula and both consequences hold through order $n$.  [step 1.1, step 2.1, discharge-induction] ∎
