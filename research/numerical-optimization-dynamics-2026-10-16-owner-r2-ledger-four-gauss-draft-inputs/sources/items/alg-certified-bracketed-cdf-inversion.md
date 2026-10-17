---
id: alg-certified-bracketed-cdf-inversion
kind: algorithm
title: "Certified bracketed bisection for a continuous CDF"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter II §2.2, Inversion by numerical solution"
      url: "https://luc.devroye.org/chapter_two.pdf"
    - title: "D. Pollard, A User's Guide to Measure Theoretic Probability, generalized inverse discussion"
      url: "https://web.archive.org/web/20210415110203if_/http://www.stat.yale.edu/~james/Courses/600.spring2011/Handouts/Extract-from-UGMTP.pdf"
---

## Definition

Input a continuous nondecreasing CDF $F$ on a finite interval $[a,b]$ with $a<b$, a target $u$, tolerance $\varepsilon>0$, a nonnegative integer $N$, and a verified modulus certificate
$$|x-y|\le (b-a)2^{-N}\ \Longrightarrow\ |F(x)-F(y)|\le\varepsilon\quad(x,y\in[a,b]).$$
An exact real-comparison oracle for $F$ and a budget of at least $N$ evaluations are also inputs. If $u\notin[F(a),F(b)]$, return status tail-unresolved. Otherwise set $\ell=a$ and $r=b$. Repeat $N$ times: set $m=(\ell+r)/2$; if $F(m)\le u$, replace $\ell$ by $m$, and otherwise replace $r$ by $m$. If an evaluation or the budget fails, return inconclusive. Return
$$\widehat x=(\ell+r)/2$$
and the certificate $F(\ell)\le u\le F(r)$ and $|F(\widehat x)-u|\le\varepsilon$.

For a CDF continuous on a compact bracket, some $N$ satisfying the modulus condition exists by uniform continuity. A caller that cannot supply a certified $N$ or exact comparison returns inconclusive. The procedure resolves the central bracket only; any tails outside $[a,b]$ require a separately specified branch or sampler.

## Remarks

This is a real-arithmetic reference procedure. Its cost is $N$ midpoint updates and at most $N$ new CDF comparisons, with tail and precision failures explicit. It does not identify CDF residual with spatial error unless an additional positive lower density bound is supplied.
