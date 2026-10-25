---
id: thm-lagrange-four-square-theorem
kind: theorem
title: "Lagrange's four-square theorem: every nonnegative integer is a sum of four integer squares"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-of-four-squares-representation, thm-every-prime-is-a-sum-of-four-squares, cor-four-squares-closed-under-products, lem-every-integer-above-one-has-a-prime-divisor, lem-int-bounded-above-has-greatest, def-divides-in-z, def-prime]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "MIT 18.781 Theory of Numbers, Lecture 22, Theorem 80"
      url: "https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/fe790e3f49be0f81f6f25135d00476a9_MIT18_781S12_lec22.pdf"
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive, §14.2, Fact 14.2.2"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Statement

Every nonnegative integer is a sum of four integer squares. That is, for every
integer $n\ge 0$ there is a quadruple $(a,b,c,d)\in\mathbb Z^4$ with
$n=a^2+b^2+c^2+d^2$ ([[def-sum-of-four-squares-representation]]).

## Facts & Assumptions

**Given:** The nonnegative integers.

[F1] A representation of a nonnegative integer $n$ as a sum of four squares is an ordered quadruple $(a,b,c,d)\in\mathbb Z^4$ with $n=a^2+b^2+c^2+d^2$ ([[def-sum-of-four-squares-representation]]).

[F2] For $d,a\in\mathbb Z$, $d\mid a$ means $a=dq$ for some $q\in\mathbb Z$ ([[def-divides-in-z]]).

[F3] An integer $p$ is prime when $p>1$ and $d\mid p$ with $d>0$ force $d=1$ or $d=p$ ([[def-prime]]).

[L1] Every prime is a sum of four integer squares. ([[thm-every-prime-is-a-sum-of-four-squares]]).

[L2] Let $m$ and $n$ be nonnegative integers; if each of $m$ and $n$ is a sum of four integer squares, then $mn$ is a sum of four integer squares ([[cor-four-squares-closed-under-products]]).

[L3] Let $n\in\mathbb Z$ with $n>1$ and put $S:=\{d\in\mathbb Z: d\mid n \text{ and } d>1\}$. Then $S$ is nonempty and has a least element $q$, and $q$ is prime; in particular every integer greater than $1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]).

[L4] Let $S\subseteq\mathbb Z$ be nonempty. If $S$ has an upper bound, it has a greatest element; if $S$ has a lower bound, it has a least element. In each case the element is unique ([[lem-int-bounded-above-has-greatest]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that not every nonnegative integer is a sum of four integer squares. [assume-contra]

2.1 Let $T$ be the set of nonnegative integers that are not sums of four integer squares; by step 1.1 it is nonempty, and it is bounded below by $0$, so [L4] gives it a least element $n_0$. [step 1.1, L4, F1, construct]

3.1 Neither $0$ nor $1$ lies in $T$, since $0=0^2+0^2+0^2+0^2$ and $1=1^2+0^2+0^2+0^2$ are representations in the sense of [F1]; as $n_0\in T$ and $n_0\ge 0$, this forces $n_0>1$. [step 2.1, F1, algebra]

4.1 By [L3] the integer $n_0>1$ has a prime divisor $q$, and by [F2] there is an integer $k$ with $n_0=qk$. [step 3.1, L3, F2, choose]

5.1 Here $k\ge 1$, since $k\le 0$ would give $n_0=qk\le 0$ against $n_0>1$; and $k<n_0$, since step 4.1 gives $q$ prime, so [F3] gives $q>1$, hence $q\ge 2$, and therefore $n_0=qk\ge 2k=k+k>k$. [step 4.1, F3, algebra]

6.1 Since $0\le k<n_0$ and $n_0$ is least in $T$, the integer $k$ is not in $T$, so $k$ is a sum of four integer squares; and $q$ is a sum of four integer squares by [L1]. [step 2.1, step 5.1, L1]

7.1 Both factors of $n_0=qk$ are nonnegative and are sums of four integer squares, so [L2] makes $n_0$ one, contradicting $n_0\in T$; the assumption of step 1.1 therefore fails, and every nonnegative integer is a sum of four integer squares. [step 4.1, step 6.1, L2, F1, discharge-contradiction] ∎

## Remarks

**Why $0$ and $1$ are treated by hand.** The proof factors $n_0$ through a prime divisor, and neither small value has one: $1$ is a product of no primes at all and $0$ is not a product of primes. Both are covered instead by the explicit quadruples in step 3.1, which the definition admits because coordinates may vanish.

**Negative integers are outside the statement, not an omission.** A square is nonnegative, and so is any sum of squares, so no negative integer is a sum of four integer squares, and the hypothesis $n\ge 0$ is the exact range where the conclusion can hold.

**Four is not improvable.** Some integers admit no representation with a vanishing coordinate, so they are not sums of three squares. The proposition [[prop-three-square-congruence-obstruction]] and its corollary [[cor-integers-requiring-four-squares]] exhibit the family $4^am$ with $m\equiv7\pmod8$; they do not assert the converse classification.
