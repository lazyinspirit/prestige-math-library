---
id: ex-prime-sets-of-a-field-and-the-integers
kind: example
title: "The prime ideals of a field and of the integers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-well-ordering-principle, thm-division-algorithm-in-z, thm-quotient-is-domain-iff-ideal-prime, thm-z-mod-p-is-a-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §13 and §17"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

Let $F$ be a field.

1. $\operatorname{Spec}(F)=\{(0)\}$.
2. The prime ideals of $\mathbb Z$ are exactly $(0)$ and $(p)$ for prime integers $p$.

Thus the inclusion order on $\operatorname{Spec}(\mathbb Z)$ has $(0)\subsetneq(p)$ for each prime number $p$, and no other strict containments.

## Facts & Assumptions

**Given:** A field $F$ and the ring $\mathbb Z$.

[L1] Every nonempty subset of the natural numbers has a least element ([[thm-well-ordering-principle]]).

[L2] For a commutative ring, the quotient by an ideal is an integral domain exactly when that ideal is prime ([[thm-quotient-is-domain-iff-ideal-prime]]).

[L3] For a prime integer $p$, the quotient ring $\mathbb Z/p\mathbb Z$ is a field ([[thm-z-mod-p-is-a-field]]).

[L4] For integers $m$ and positive integers $n$, there are integers $q,r$ with $m=qn+r$ and $0\le r<n$ ([[thm-division-algorithm-in-z]]).

## Verification

**Proof technique:** direct.

1.1 A proper ideal of a field cannot contain a nonzero element, because any such element is a unit and would force $1$ into the ideal. Hence the only proper ideal of $F$ is $(0)$, and $(0)$ is prime because $F$ has no zero divisors. [given, algebra]

1.2 Let $I\trianglelefteq\mathbb Z$. If $I\neq(0)$, choose the least positive integer $n\in I$ using [L1]. For any $m\in I$, [L4] gives $m=qn+r$ with $0\le r<n$; since $r=m-qn\in I$ and $n$ was the least positive element of $I$, one must have $r=0$, so every element of $I$ is a multiple of $n$ and therefore $I=(n)$. [L1, L4, algebra]

1.3 If $n=ab$ with $1<a,b<n$, then $(a+(n))(b+(n))=0+(n)$ in $\mathbb Z/(n)$ while neither factor is zero, so [L2] shows $(n)$ is not prime. If $n=p$ is prime, then [L3] makes $\mathbb Z/(p)$ a field and hence a domain, so [L2] shows $(p)$ is prime. Finally $(0)$ is prime because $\mathbb Z$ is an integral domain. [L2, L3, algebra]

2.1 Steps 1.1, 1.2, and 1.3 prove the listed prime ideals of $F$ and $\mathbb Z$, and the inclusion order is immediate because every nonzero prime ideal of $\mathbb Z$ is maximal. [step 1.1, step 1.2, step 1.3] ∎
