---
id: thm-convergence-of-infinite-regular-continued-fractions
kind: theorem
title: "Every infinite regular continued fraction converges to a unique real number"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complete-ordered-field, def-convergents-of-regular-continued-fraction, lem-continued-fraction-determinant-identity, cor-cauchy-reals-lub-complete, thm-induction-principle, thm-of-archimedean]
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
    - title: "William Stein, Elementary Number Theory: Primes, Congruences, and Secrets"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

Let $[a_0; a_1,a_2,\ldots]$ be an infinite regular continued fraction, and let
$c_n:=p_n/q_n$ be its convergents. Then:

1. $c_0<c_2<c_4<\cdots$ and $c_1>c_3>c_5>\cdots$;
2. every even convergent is below every odd convergent; and
3. there is a unique real number $x$ such that both subsequences
$(c_{2m})_{m\ge0}$ and $(c_{2m+1})_{m\ge0}$ converge to $x$.

This real number is the value of the infinite regular continued fraction.

## Facts & Assumptions

**Given:** An infinite regular continued fraction and its convergents
$c_n=p_n/q_n$.

[F1] Consecutive convergents satisfy
$$c_n-c_{n-1}=\frac{(-1)^{n-1}}{q_nq_{n-1}}$$
for $n\ge1$ ([[lem-continued-fraction-determinant-identity]]).

[F2] Every complete ordered field is Archimedean
([[thm-of-archimedean]]).

[F3] The constructed real field has the least-upper-bound property
([[cor-cauchy-reals-lub-complete]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since every partial quotient after the first is at least $1$. [given, F1, induction, algebra]
The denominators satisfy
$$q_{n+1}=a_{n+1}q_n+q_{n-1}\ge q_n+q_{n-1}>q_n>0$$
for $n\ge1$, with $q_0=1$ and $q_1=a_1\ge1$. Thus $(q_n)$ is nondecreasing
from $q_0$ onward and strictly increasing from $q_1$ onward, and induction on
$n$ gives $q_n\ge n$ for $n\ge1$. [given, F1, induction, algebra]

2.1 By [F1], the signs of $c_n-c_{n-1}$ alternate, and by step 1.1 their absolute values strictly decrease. [F1, step 1.1, algebra]
Hence
$$c_{2m}<c_{2m+1},\qquad c_{2m+2}=c_{2m+1}-(c_{2m+1}-c_{2m+2})>c_{2m},$$
and similarly
$$c_{2m+3}=c_{2m+2}-(c_{2m+2}-c_{2m+3})<c_{2m+1}.$$
So the even convergents increase, the odd convergents decrease, and every even
convergent is below every odd convergent. [F1, step 1.1, algebra]

2.2 Put $d_n:=1/(q_nq_{n+1})$. [F2, step 1.1, algebra]
Step 1.1 gives $d_n\le1/(n(n+1))$ for $n\ge1$, and the Archimedean property
[F2] therefore implies $d_n\to0$. For
$\varepsilon>0$ choose $N\ge1$ with $1/N<\varepsilon$, then for $n\ge N$,
$$0<d_n\le \frac{1}{n(n+1)}\le \frac{1}{n}\le \frac{1}{N}<\varepsilon.$$
[F2, step 1.1, algebra]

3.1 Let $E:=\{c_{2m}:m\ge0\}$. [step 2.1, given]
By step 2.1 the set $E$ is nonempty and bounded above by $c_1$, so [F3] gives a
real number
$x:=\sup E$. [step 2.1, given]

3.2 If $n=2m+1$ is odd, then $c_{n-1}\in E$ and step 2.1 gives. [step 2.1, step 2.2, F1]
$c_{n-1}\le x\le c_n$, so
$$0\le c_n-x\le c_n-c_{n-1}=d_{n-1}.$$
If $n=2m$ is even, then $c_n\in E$ and step 2.1 gives
$c_n\le x\le c_{n+1}$, so
$$0\le x-c_n\le c_{n+1}-c_n=d_n.$$
Since the right-hand sides tend to $0$ by step 2.2, both subsequences converge
to $x$. [step 2.1, step 2.2, F1]

4.1 If $y$ were another real with both subsequences converging to $y$, then for every $m$. [step 3.2, algebra]
$$|x-y|\le |x-c_{2m}|+|c_{2m}-y|,$$
and the right-hand side tends to $0$ as $m\to\infty$ by step 3.2. Hence
$x=y$, so the value is unique. [step 3.2, algebra] ∎
