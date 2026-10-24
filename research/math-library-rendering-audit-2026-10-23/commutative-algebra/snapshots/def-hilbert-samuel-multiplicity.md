---
id: def-hilbert-samuel-multiplicity
kind: definition
title: "Hilbert-Samuel multiplicity as the factorial-scaled leading coefficient"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-determinant-trick-for-nakayama]
aliases: []
sources:
  scraped: []
  references:
    - title: "Stacks Project, Definition 10.59.6 and Lemma 10.59.7"
      url: "https://stacks.math.columbia.edu/tag/00K4"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, §21"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
verification:
  precheck: n/a
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Definition

Let $(R,\mathfrak m)$ be a Noetherian local ring, let $M$ be a finite
$R$-module, and let $I\subseteq\mathfrak m$ be an ideal of definition for $M$.

If $M=0$, define
$$ e_I(M):=0. $$

If $M\neq0$, suppose the Hilbert-Samuel function $\chi_{I,M}(n)$ agrees for all sufficiently large $n$ with a polynomial $P_{I,M}\in\mathbb Q[n]$. Such a polynomial is unique. Because $I\subseteq\mathfrak m$ and $M\neq0$, the quotient $M/I^{n+1}M$ is nonzero for every $n$, so $P_{I,M}$ is not the zero polynomial. Let $d=\deg P_{I,M}$.

The **Hilbert-Samuel multiplicity** of $M$ with respect to $I$ is
$$ e_I(M):=d!\cdot(\text{leading coefficient of }P_{I,M}). $$

Equivalently, when $M\neq0$ and
$$ P_{I,M}(n)=\frac{e_I(M)}{d!}n^d+\text{lower-degree terms}, $$
then $e_I(M)$ is the scaling of the top term. It is an integer: the $d$th forward difference of the integer-valued polynomial $P_{I,M}$ at any sufficiently large integer is $d!$ times its leading coefficient.

## Remarks

The quoted Nakayama step is choice-free here. If $M/I^{n+1}M=0$, then
$I^{n+1}M=M$. By [[lem-determinant-trick-for-nakayama]], some
$a\in I^{n+1}\subseteq\mathfrak m$ satisfies $(1-a)M=0$. In a local ring
$1-a$ is a unit, forcing $M=0$, contrary to the hypothesis.
