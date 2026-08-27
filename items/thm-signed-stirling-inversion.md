---
id: thm-signed-stirling-inversion
kind: theorem
title: "The signed first-kind and second-kind Stirling numbers are inverse transition matrices"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-factorial-and-falling-factorial, thm-powers-expand-in-the-falling-factorial-basis, thm-signless-first-kind-recurrence-and-rising-factorial-expansion]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Lin, 18.212 Algebraic Combinatorics, Lecture 11, Corollary 4"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/c65777fbaa1e5af6aaa3e6ab8cbdf255_MIT18_212S19_lec11.pdf"
pipeline_run: null
---

## Statement

For all $n,m\in\mathbb{N}$,

$$m^{\underline{n}}=\sum_{k=0}^{n}s(n,k)m^k.$$

Consequently, for all $n,j\in\mathbb{N}$,

$$\sum_{k=j}^{n}S(n,k)s(k,j)=\delta_{n,j},\qquad \sum_{k=j}^{n}s(n,k)S(k,j)=\delta_{n,j},$$

where $\delta_{n,j}$ is the Kronecker delta. Equivalently, for sequences
$(a_k)_{k\geq0}$ and $(b_n)_{n\geq0}$ in any commutative ring,

$$b_n=\sum_{k=0}^{n}S(n,k)a_k\quad\Longleftrightarrow\quad a_n=\sum_{k=0}^{n}s(n,k)b_k.$$

## Facts & Assumptions

**Given:** The second-kind expansion of
[[thm-powers-expand-in-the-falling-factorial-basis]] and the first-kind
expansion of
[[thm-signless-first-kind-recurrence-and-rising-factorial-expansion]].

## Proof

**Proof technique:** direct.

1.1 Replace $x$ by $-m$ in [[thm-signless-first-kind-recurrence-and-rising-factorial-expansion]]. Since $(-m)^{\overline n}=(-1)^nm^{\underline n}$ and $s(n,k)=(-1)^{n-k}c(n,k)$ by definition, this gives $m^{\underline n}=\sum_{k=0}^{n}s(n,k)m^k$. [given, algebra]

1.2 A finite linear combination $\sum_{j=0}^{n}a_jm^{\underline j}$ that vanishes for every $m\in\mathbb{N}$ has all coefficients zero: evaluating at $m=0$ gives $a_0=0$, and after that evaluating at $m=1,2,\dots,n$ strips off the remaining coefficients triangularly because $m^{\underline j}=0$ for $j>m$ and $m^{\underline m}=m! \neq 0$ by [[def-factorial-and-falling-factorial]]. [given]

2.1 Substitute the second-kind expansion of [[thm-powers-expand-in-the-falling-factorial-basis]] into step 1.1. This gives $m^{\underline n}=\sum_{k=0}^{n}s(n,k)\sum_{j=0}^{k}S(k,j)m^{\underline j}=\sum_{j=0}^{n}\bigl(\sum_{k=j}^{n}s(n,k)S(k,j)\bigr)m^{\underline j}$. [step 1.1, given, algebra]

3.1 Apply step 1.2 to the identity of step 2.1. Since the left-hand side is $m^{\underline n}$, the coefficient of $m^{\underline j}$ is $\delta_{n,j}$, so $\sum_{k=j}^{n}s(n,k)S(k,j)=\delta_{n,j}$. [step 2.1, step 1.2]

4.1 The matrix in step 3.1 is lower triangular with diagonal entries $1$, so its inverse is unique. Since step 3.1 shows that $(s(n,k))_{n,k\ge 0}$ is a left inverse of $(S(n,k))_{n,k\ge 0}$, it is also the right inverse. Hence $\sum_{k=j}^{n}S(n,k)s(k,j)=\delta_{n,j}$ as well. [step 3.1, algebra]

5.1 Steps 3.1 and 4.1 say exactly that the two triangular Stirling matrices are inverse to one another. Therefore the two finite-sum transforms on sequences in any commutative ring are mutually inverse, which is the claimed iff. [step 3.1, step 4.1] ∎
