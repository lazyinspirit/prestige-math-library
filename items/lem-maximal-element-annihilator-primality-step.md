---
id: lem-maximal-element-annihilator-primality-step
kind: lemma
title: "A maximal element annihilator is prime"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-annihilator-and-torsion-of-a-module]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Lemma (17.12)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §19"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Let $R$ be a commutative ring, let $M$ be a left $R$-module, and let
$m \in M$ be nonzero. If $\operatorname{Ann}_R(m)$ is maximal among the
annihilators of nonzero elements of $M$, then $\operatorname{Ann}_R(m)$ is a
prime ideal.

## Facts & Assumptions

**Given:** A commutative ring $R$, a left $R$-module $M$, and a nonzero element $m \in M$ such that $\operatorname{Ann}_R(m)$ is maximal among the annihilators of nonzero elements of $M$.

[L1] The annihilator of an element $x \in M$ is $\operatorname{Ann}_R(x)=\{r \in R : rx=0\}$ ([[def-annihilator-and-torsion-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 Put $I=\operatorname{Ann}_R(m)$. Since $m \neq 0$, one has $1 \notin I$, so $I$ is proper. Let $ab \in I$ and assume $b \notin I$. Then $bm \neq 0$. Also $I \subseteq \operatorname{Ann}_R(bm)$ because every $r \in I$ satisfies $r(bm)=b(rm)=0$. If $r \in \operatorname{Ann}_R(bm)$, then $(rb)m=0$, so $rb \in I$ by [L1]. [L1, given, algebra]

2.1 The element $bm$ is nonzero, so maximality of $I$ forces $\operatorname{Ann}_R(bm)=I$. Since $abm=0$, the element $a$ lies in $\operatorname{Ann}_R(bm)=I$. Therefore $ab \in I$ and $b \notin I$ imply $a \in I$, so $I$ is prime. [step 1.1]

3.1 Thus $\operatorname{Ann}_R(m)$ is a prime ideal. [step 2.1] ∎
