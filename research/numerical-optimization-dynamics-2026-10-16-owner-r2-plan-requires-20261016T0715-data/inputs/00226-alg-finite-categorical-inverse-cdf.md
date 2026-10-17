---
id: alg-finite-categorical-inverse-cdf
kind: algorithm
title: "Finite categorical sampling by inverse CDF and binary search"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - thm-independent-fair-bit-streams-produce-uniforms
  - thm-midpoint-bit-stream-coupling-and-error
  - lem-generalized-inverse-sublevel-identity
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter III §2.1 and §2.3, discrete inversion"
      url: "https://luc.devroye.org/chapter_three.pdf"
    - title: "D. Pollard, A User's Guide to Measure Theoretic Probability, generalized inverse discussion"
      url: "https://web.archive.org/web/20210415110203if_/http://www.stat.yale.edu/~pollard/Courses/600.spring2011/Handouts/Extract-from-UGMTP.pdf"
---

## Definition

Input a nonempty finite list of outcomes $1,\ldots,r$ ($r\ge1$) with probabilities $p_i\ge0$ and $\sum_{i=1}^r p_i=1$, and either an ideal uniform $U\in(0,1)$ as in [[thm-independent-fair-bit-streams-produce-uniforms]] or a $b$-bit midpoint $U_b\in(0,1)$ as in [[thm-midpoint-bit-stream-coupling-and-error]]. Let $C_0=0$ and $C_i=\sum_{j=1}^i p_j$. Return the least $i$ with $U\le C_i$ (or $U_b\le C_i$). For ideal $U$, this is the generalized inverse of the step CDF $F(i)=C_i$ by [[lem-generalized-inverse-sublevel-identity]]. Find this index by binary search in the sorted cumulative array $C_1,\ldots,C_r$, using at most $\lceil\log_2 r\rceil$ comparisons. The procedure returns one outcome even when some $p_i=0$; such an outcome has no interval of positive length.

## Remarks

With ideal $U$, this is exact finite categorical inversion. Midpoint input has a discrete law; its threshold counts, rather than total-variation closeness to a continuous uniform law, control its categorical error.
