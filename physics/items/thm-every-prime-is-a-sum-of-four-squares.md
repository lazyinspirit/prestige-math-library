---
id: thm-every-prime-is-a-sum-of-four-squares
kind: theorem
title: "Every prime is a sum of four integer squares"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime, def-sum-of-four-squares-representation, lem-small-four-square-multiple-of-a-prime, lem-four-square-descent, lem-int-bounded-above-has-greatest]
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
    - title: "Keith Conrad, Proofs by Descent, §6, Theorem 6.6"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf"
    - title: "MIT 18.781 Theory of Numbers, Lecture 22, Theorem 80"
      url: "https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/fe790e3f49be0f81f6f25135d00476a9_MIT18_781S12_lec22.pdf"
pipeline_run: null
---

## Statement

Every prime is a sum of four integer squares. That is, for every prime $p$
([[def-prime]]) there is a quadruple $(a,b,c,d)\in\mathbb Z^4$ with
$p=a^2+b^2+c^2+d^2$ ([[def-sum-of-four-squares-representation]]).

## Facts & Assumptions

**Given:** A prime $p$.

[F1] An integer $p$ is prime when $p>1$ and $d\mid p$ with $d>0$ force $d=1$ or $d=p$ ([[def-prime]]).

[F2] A representation of a nonnegative integer $n$ as a sum of four squares is an ordered quadruple $(a,b,c,d)\in\mathbb Z^4$ with $n=a^2+b^2+c^2+d^2$ ([[def-sum-of-four-squares-representation]]).

[L1] For every prime $p$ there is an integer $m$ with $1\le m<p$ for which $pm$ is a sum of four integer squares ([[lem-small-four-square-multiple-of-a-prime]]).

[L2] If $p$ is prime, $1<m<p$ and $pm$ is a sum of four integer squares, then there is an integer $n$ with $1\le n<m$ for which $pn$ is a sum of four integer squares ([[lem-four-square-descent]]).

[L3] Let $S\subseteq\mathbb Z$ be nonempty. If $S$ has an upper bound, it has a greatest element; if $S$ has a lower bound, it has a least element. In each case the element is unique ([[lem-int-bounded-above-has-greatest]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the prime $p$ is not a sum of four integer squares. [assume-contra]

1.2 Let $S$ be the set of integers $m$ with $1\le m<p$ for which $pm$ is a sum of four integer squares; $S$ is nonempty by [L1]. [given, F1, F2, L1, construct]

2.1 The set $S$ is bounded below by $1$, so [L3] gives it a least element $m_0$, and $1\le m_0<p$ because $m_0\in S$. [step 1.2, L3]

3.1 The value $m_0=1$ is impossible: it would make $p=p\cdot 1$ a sum of four integer squares, against step 1.1. Hence $m_0>1$, and with step 2.1 this gives $1<m_0<p$. [step 1.1, step 2.1, F2, algebra]

4.1 Applying [L2] to the prime $p$ and the multiplier $m_0$, whose hypotheses $1<m_0<p$ and "$pm_0$ is a sum of four integer squares" are step 3.1 and membership of $m_0$ in $S$, gives an integer $n$ with $1\le n<m_0$ for which $pn$ is a sum of four integer squares. [step 2.1, step 3.1, L2]

5.1 Then $1\le n<m_0<p$, so $n\in S$ while $n<m_0$, contradicting the leastness of $m_0$; the assumption of step 1.1 therefore fails, and $p$ is a sum of four integer squares. [step 2.1, step 4.1, F2, algebra, discharge-contradiction] ∎

## Remarks

**What makes the descent terminate.** The proof does not iterate the descent lemma; it applies it once, to the least multiplier, and reads the contradiction off leastness. The least element is supplied by [L3], for a set of integers bounded below, so no appeal to an infinite descending chain is needed and no infinite regress is written.

**Where the hypothesis that $p$ is prime enters.** Twice, through [L1] and through [L2]. In [L1] it supplies the congruence and the bound $p\ge2$ used to obtain a multiplier below $p$; in the construction underlying [L2] it is used when a positive divisor of $p$ is forced to be $1$ or $p$. For a composite modulus the multiplier can stall above $1$, so the statement proved here is genuinely about primes; the passage from primes to all nonnegative integers is [[thm-lagrange-four-square-theorem]], and it uses [[cor-four-squares-closed-under-products]] rather than a further descent.
