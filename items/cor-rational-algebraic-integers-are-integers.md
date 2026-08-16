---
id: cor-rational-algebraic-integers-are-integers
kind: corollary
title: "The rational algebraic integers are exactly the integers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-element-and-algebraic-integer, thm-rational-root-theorem, thm-rat-field, lem-int-embeds-rat]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Eloisa Grifo, Commutative Algebra I, Section 1.4"
      url: "https://eloisagrifo.github.io/Teaching/ca1/CA1notes.pdf"
pipeline_run: null
---

## Statement

A rational number is an algebraic integer if and only if it is an integer. See [[def-integral-element-and-algebraic-integer]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $A\to B$ be a homomorphism of commutative rings. An element $b\in B$ is integral over $A$ when it is a root of a monic polynomial in $A[X]$. The extension is integral when every element is integral. An algebraic integer is a complex number integral over $\mathbb Z$. ([[def-integral-element-and-algebraic-integer]]).

[L2] Let $f=a_nx^n+\cdots+a_1x+a_0\in\mathbb Z[x]$ with $a_n\ne0$. If a reduced rational number $r/s$, where $r,s\in\mathbb Z$, $s>0$, and $\gcd(r,s)=1$, is a root of $f$, then $$ r\mid a_0\qquad\text{and}\qquad s\mid a_n. $$. ([[thm-rational-root-theorem]]).

[L3] $(\mathbb{Q}, +, \cdot, 0, 1)$ with the operations of def-rat-operations is a field: a commutative ring with $1 \ne 0$ in which every nonzero element has a multiplicative inverse. ([[thm-rat-field]]).

[L4] The map $j(k) = [(k,1)]$ is injective and preserves addition, multiplication, and order. Composing with lem-nat-embeds-int embeds $\mathbb{N}$ in $\mathbb{Q}$; we write $k$ for $j(k)$ throughout. ([[lem-int-embeds-rat]]).

## Proof

**Proof technique:** direct.

1.1 We write a rational algebraic integer in lowest terms $r/s$ with $s>0$. [L1, L2, L3, L4, given, algebra]

2.1 It is a root of a monic integer polynomial, so the rational-root theorem makes $s\mid1$, hence $s=1$. [step 1.1, given, algebra]

3.1 Conversely every integer satisfies the monic polynomial $X-n$. [step 2.1, given, algebra]

4.1 Both are admitted and neither is exceptional. The polynomial $X-n$ of step 3.1 is monic with integer coefficients for every integer $n$, giving $X$ at $n=0$ and $X+|n|$ for $n<0$; and in step 2.1 the lowest-terms representation covers $0$ as $0/1$, where the denominator is already $1$. This proves the stated claim. [step 2.1, step 3.1, given, algebra] ∎
