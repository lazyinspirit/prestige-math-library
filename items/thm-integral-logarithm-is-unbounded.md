---
id: thm-integral-logarithm-is-unbounded
kind: theorem
title: "The integral logarithm is unbounded above and below"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-integral-logarithm-reciprocals-and-integer-powers,
       thm-of-archimedean]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "OpenStax, Calculus Volume 1, Section 6.7"
      url: "https://openstax.org/books/calculus-volume-1/pages/6-7-integrals-exponential-functions-and-logarithms"
pipeline_run: null
---

## Statement

For every $M\in\mathbb R$ there are $a,b>0$ such that

$$L(a)<M<L(b).$$

In particular, $L$ is unbounded both below and above.

## Facts & Assumptions

**Given:** $M\in\mathbb R$.

[L1] $L(2)>0$ and, for every natural $n$,
$L(2^n)=nL(2)$ and $L(2^{-n})=-nL(2)$
([[cor-integral-logarithm-reciprocals-and-integer-powers]]).

[L2] For every real $r$, there is a natural number $n\geq1$ with $r<n$
([[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 If $M<0$, take $n=1$; then $nL(2)>0>M$. If $M\geq0$, apply [L2] to $M/L(2)$ and choose $n\geq1$ with $M/L(2)<n$, so $M<nL(2)$. [L1, L2, algebra]
1.2 If $M>0$, take $m=1$; then $-mL(2)<0<M$. If $M\leq0$, apply [L2] to $(-M)/L(2)$ and choose $m\geq1$ with $(-M)/L(2)<m$, so $-mL(2)<M$. [L1, L2, algebra]
2.1 Set $b=2^n$ and $a=2^{-m}$. By [L1] and steps 1.1 and 1.2, $L(a)<M<L(b)$, and both $a$ and $b$ are positive. [step 1.1, step 1.2, L1, algebra] ∎