---
id: lem-periodic-continued-fraction-is-quadratic
kind: lemma
title: "Eventually periodic regular continued fractions are quadratic irrationals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergents-of-regular-continued-fraction, def-eventually-periodic-continued-fraction, def-quadratic-irrational, lem-continued-fraction-convergent-recurrence, lem-continued-fraction-determinant-identity, thm-convergence-of-infinite-regular-continued-fractions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "Bruce Ikenaga, Periodic Continued Fractions"
      url: "https://sites.millersville.edu/bikenaga/number-theory/periodic-continued-fractions/periodic-continued-fractions.html"
pipeline_run: null
---

## Statement

The value of every eventually periodic regular continued fraction is a
quadratic irrational.

## Facts & Assumptions

**Given:** An eventually periodic regular continued fraction $$\alpha=[a_0; a_1,a_2,\ldots].$$

[F1] There are integers $N\ge0$ and $h\ge1$ such that $a_{n+h}=a_n$ for every $n\ge N$ ([[def-eventually-periodic-continued-fraction]]).

[F2] If $p_n/q_n$ are the convergents of a finite prefix, then for every $t>0$, $$[a_0; a_1,\ldots,a_n,t] = \frac{tp_n+p_{n-1}}{tq_n+q_{n-1}}.$$ ([[lem-continued-fraction-convergent-recurrence]]).

[F3] For a finite regular continued fraction whose digits are all positive, the convergents satisfy $q_0=1$, $p_0=a_0>0$, and, when $n\ge1$, $p_n,q_n>0$ ([[def-convergents-of-regular-continued-fraction]]).

[F4] Consecutive convergents satisfy $$p_nq_{n-1}-p_{n-1}q_n=(-1)^{n-1}.$$ ([[lem-continued-fraction-determinant-identity]]).

[F5] The finite convergents of an infinite regular continued fraction converge
to its value ([[thm-convergence-of-infinite-regular-continued-fractions]]).

## Proof

**Proof technique:** direct.

1.1 By increasing $N$ if necessary, we may still assume. [F1, F2, F3, F5, algebra] $$a_{n+h}=a_n\qquad(n\ge N)$$ with $N\ge1$. Let $$x=[a_N; a_{N+1},\ldots,a_{N+h-1},a_N,a_{N+1},\ldots]$$ be the purely periodic tail. For $r\ge1$, let $x_r$ be the finite continued fraction formed from $r$ copies of this period. By [F5], $x_r\to x$, and [F2] gives $$x_{r+1}=\frac{x_rp_{h-1}+p_{h-2}}{x_rq_{h-1}+q_{h-2}},$$ where the convergents are taken for the digit block $a_N,\ldots,a_{N+h-1}$. The denominators are positive by [F3], so a direct difference calculation shows that the displayed fractional-linear expression preserves the limit $x_r\to x$. Hence $$x=\frac{xp_{h-1}+p_{h-2}}{xq_{h-1}+q_{h-2}}.$$ Clearing denominators yields the quadratic equation $$q_{h-1}x^2+(q_{h-2}-p_{h-1})x-p_{h-2}=0.$$ [F1, F2, F3, F5, algebra]

2.1 The discriminant of the quadratic in step 1.1 is. [step 1.1, F3, F4, algebra] $$\Delta=(q_{h-2}-p_{h-1})^2+4q_{h-1}p_{h-2}=(p_{h-1}+q_{h-2})^2-4\bigl(p_{h-1}q_{h-2}-p_{h-2}q_{h-1}\bigr).$$ Putting $m:=p_{h-1}+q_{h-2}>0$, fact [F4] gives $$\Delta=m^2-4(-1)^{h-2}.$$ If $h$ is odd, then $\Delta=m^2+4$, which cannot be a square because $(n-m)(n+m)=4$ has no solution in integers with $m>0$. If $h$ is even, then $h\ge2$, fact [F3] gives $p_{h-1}\ge p_1\ge2$ and $q_{h-2}\ge q_0=1$, so $m\ge3$; then $\Delta=m^2-4$, which cannot be a square because $(m-n)(m+n)=4$ has no solution with $m\ge3$. Therefore $\Delta$ is not a square, so the root $x$ from step 1.1 is irrational. [step 1.1, F3, F4, algebra]

2.2 Append the finite tails $x_r$ of step 1.1 after the prefix. [F1, F2, F5, step 1.1, algebra] $a_0,\ldots,a_{N-1}$. These are a subsequence of the convergents of $\alpha$, so [F5] makes their values tend to $\alpha$. By [F2] their values are $$\frac{x_rp_{N-1}+p_{N-2}}{x_rq_{N-1}+q_{N-2}}.$$ The same positive-denominator difference calculation used in step 1.1 lets $r\to\infty$ and gives $$\alpha=\frac{xp_{N-1}+p_{N-2}}{xq_{N-1}+q_{N-2}}.$$ Clearing denominators and substituting the quadratic equation from step 1.1 shows that $\alpha$ also satisfies a quadratic equation over $\mathbb{Q}$. [F1, F2, F5, step 1.1, algebra]

3.1 Suppose that $\alpha$ were rational. Step 2.2 gives. [step 2.1, step 2.2, F4, algebra] $$x(\alpha q_{N-1}-p_{N-1})=p_{N-2}-\alpha q_{N-2}.$$ If $\alpha q_{N-1}-p_{N-1}=0$, then also $p_{N-2}-\alpha q_{N-2}=0$, and eliminating $\alpha$ yields $$p_{N-1}q_{N-2}-p_{N-2}q_{N-1}=0,$$ contrary to [F4]. Therefore $$x=\frac{p_{N-2}-\alpha q_{N-2}}{\alpha q_{N-1}-p_{N-1}}$$ is rational, contradicting step 2.1. Hence $\alpha$ is irrational. [step 2.1, step 2.2, F4, algebra]

4.1 Steps 2.2 and 3.1 show that $\alpha$ is an irrational real root of a quadratic equation over $\mathbb{Q}$, which is exactly the definition of a quadratic irrational ([[def-quadratic-irrational]]). [step 2.2, step 3.1] ∎
