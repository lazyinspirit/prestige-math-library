---
id: ex-incomparability-in-a-quadratic-integral-extension
kind: example
title: "In k[Y] subset k[X] with Y = X^2, distinct comparable primes do not share a contraction"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-incomparability-for-integral-extensions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (14.6)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 7.4"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Example

Let $k$ be an algebraically closed field, let $A:=k[Y]$, and let $B:=k[X]$ with the inclusion $A\hookrightarrow B$ determined by $Y\mapsto X^2$. Then any two distinct comparable prime ideals of $B$ have different contractions to $A$.

## Facts & Assumptions

**Given:** An algebraically closed field $k$, the integral extension $k[Y]\subseteq k[X]$ with $Y=X^2$, and the incomparability theorem ([[thm-incomparability-for-integral-extensions]]).

[L1] Under an integral map, comparable primes with the same contraction are equal ([[thm-incomparability-for-integral-extensions]]).

## Verification

**Proof technique:** direct.

1.1 Because $k$ is algebraically closed, the prime ideals of $k[X]$ are $(0)$ and the maximal ideals $(X-a)$ for $a\in k$. The inclusion is integral because $X$ satisfies the monic equation $T^2-Y=0$ over $k[Y]$. [L1, given, algebra]

2.1 The contractions are easy to compute: $(0)\cap k[Y]=(0)$, while $(X-a)\cap k[Y]=(Y-a^2)$ because a polynomial in $Y$ vanishes at $X=a$ exactly when it vanishes at $Y=a^2$. Thus a proper inclusion of primes in $k[X]$ can only be $(0)\subsetneq(X-a)$, and its contractions are $(0)\subsetneq(Y-a^2)$. [step 1.1, given, algebra]

3.1 Hence every distinct comparable pair of primes in $k[X]$ has distinct contraction, exactly as [L1] predicts. [L1, step 2.1] ∎
