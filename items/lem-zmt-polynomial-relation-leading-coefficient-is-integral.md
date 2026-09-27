---
id: lem-zmt-polynomial-relation-leading-coefficient-is-integral
kind: lemma
title: The leading coefficient times a root is integral
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-integral-element-and-algebraic-integer, def-integral-ring-extension]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Commutative Algebra, Section 10.123, Lemma 10.123.1"
      url: "https://stacks.math.columbia.edu/tag/00PI"
    - title: "J. S. Milne, A Primer of Commutative Algebra, version 4.03, Section 17"
      url: "https://www.jmilne.org/xnotes/CA.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $R\to S$ be a unital ring map of commutative rings and let $t\in S$
satisfy a relation

$$ \varphi(a_{0})+\varphi(a_{1})t+\cdots+\varphi(a_{n})t^{n}=0 $$

with $n\ge0$ and $a_{0},\dots,a_{n}\in R$. Then $\varphi(a_{n})t$ is integral
over $R$ ([[def-integral-ring-extension]]). No hypothesis is imposed on
$\varphi(a_n)$: it may be zero, a zero divisor, or a nilpotent, and the map
$R\to S$ need not be injective.

## Facts & Assumptions

**Given:** A unital ring map $\varphi:R\to S$ of commutative rings, an integer $n\ge0$, elements $a_{0},\dots,a_{n}\in R$, and an element $t\in S$ satisfying $\varphi(a_{0})+\varphi(a_{1})t+\cdots+\varphi(a_{n})t^{n}=0$.

[L1] Let $A\to B$ be a homomorphism of commutative rings. An element $b\in B$ is **integral over** $A$ when it is a root of a monic polynomial in $A[X]$ ([[def-integral-element-and-algebraic-integer]]).

[L2] Let $f:A\to B$ be a homomorphism of commutative rings. The map $f$ is an **integral ring map** when every element of $B$ is integral over $A$ in the sense of [[def-integral-element-and-algebraic-integer]] ([[def-integral-ring-extension]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$ the given relation reads $\varphi(a_{0})=0$, hence $\varphi(a_{0})t=0$; the element $0\in S$ is a root of the monic polynomial $X$, so $\varphi(a_{0})t$ is integral over $R$. This disposes of the case $n=0$ and from here on we assume $n\ge1$. [given, L1]

1.2 Set $y=\varphi(a_{n})t\in S$, so that $\varphi(a_{n})^{n}t^{n}=y^{n}$, and for each $0\le i\le n-1$ the identity $\varphi(a_{n})^{n-1}\cdot t^{i}=\varphi(a_{n})^{n-1-i}\,y^{i}$ holds in $S$; these are the ordinary power identities for a single element. [given, algebra]

2.1 Multiplying the given relation by $\varphi(a_{n})^{n-1}$ and using step 1.2 in every summand gives the identity
$$ y^{n}+\sum_{i=0}^{n-1}\varphi\!\left(a_{i}a_{n}^{\,n-1-i}\right)y^{i}=0 $$
in $S$: the term $\varphi(a_{n})^{n-1}\varphi(a_{i})t^{i}$ equals $\varphi(a_{i}a_{n}^{n-1-i})y^{i}$, and the term of index $n$ becomes $y^{n}$ after multiplication, with coefficient $1$. [step 1.2, algebra]

3.1 The displayed identity of step 2.1 is a vanishing statement for the monic polynomial $P(X)=X^{n}+\sum_{i=0}^{n-1}\varphi(c_{i})X^{i}$ with coefficients $c_{i}=a_{i}a_{n}^{\,n-1-i}\in R$: its leading coefficient is $1$, so it is monic in the sense of [L1], and $P(y)=0$. [step 2.1, algebra]

4.1 Steps 1.2 and 3.1 exhibit $y=\varphi(a_{n})t$ as a root of a monic polynomial with coefficients in $R$, so $\varphi(a_{n})t$ is integral over $R$ by [L1]. Together with step 1.1 (the case $n=0$), this proves the statement for every $n\ge0$, including $a_{n}=0$ and $t=0$, where $y=0$ is integral and the identity of step 2.1 reads $0=0$. ∎ [step 1.1, step 3.1, L1, L2]
