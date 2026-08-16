---
id: cex-connected-domain-need-not-be-star-shaped
kind: counterexample
title: "A connected complex domain need not be star-shaped"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-punctured-rn-is-polygonally-connected, thm-path-connected-implies-connected, def-path-connected, def-complex-domain, def-star-shaped-open-subset-of-rn, rem-complex-plane-euclidean-dictionary, lem-complex-conjugation-and-modulus-laws, def-polygonal-path-and-polygonal-connectedness]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard Howell and John Mathews, Complex Analysis, Section 6.3"
      url: "https://complexanalysis.org/web/sec_cauchy-goursat.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** Every complex domain is star-shaped.

The punctured plane

$$U=\mathbb C\setminus\{0\}$$

is a complex domain, but it has no star centre.

## Facts & Assumptions

**Given:** The punctured complex plane $U=\mathbb C\setminus\{0\}$ under the Euclidean identification of [[rem-complex-plane-euclidean-dictionary]].

[L1] The punctured Euclidean space $\mathbb R^n\setminus\{p\}$ is polygonally connected when $n\ge2$ ([[lem-punctured-rn-is-polygonally-connected]]).

[L2] Polygonal connectedness supplies paths, and every path-connected space is connected ([[def-polygonal-path-and-polygonal-connectedness]], [[def-path-connected]], [[thm-path-connected-implies-connected]]).

[L3] A complex domain is a nonempty connected open subset of $\mathbb C$ ([[def-complex-domain]]).

[L4] A set is star-shaped with respect to $a$ only if the segment $(1-t)a+tz$ lies in the set for every member $z$ and every $0\le t\le1$ ([[def-star-shaped-open-subset-of-rn]]).

[L5] The complex modulus satisfies $|z+w|\le|z|+|w|$ and vanishes exactly at zero ([[lem-complex-conjugation-and-modulus-laws]]).

## Refutation

**Proof technique:** direct.

1.1 The set $U$ is nonempty. If $z\in U$, the ball $B(z,|z|/2)$ avoids $0$ by [L5], so $U$ is open; under $\mathbb C=\mathbb R^2$, [L1] and [L2] make it connected. Hence [L3] makes $U$ a complex domain. [given, L1, L2, L3, L5]

2.1 For any proposed centre $a\in U$, the point $-a$ also lies in $U$, but the segment from $a$ to $-a$ contains $(1-1/2)a+(1/2)(-a)=0\notin U$. By [L4], $a$ is not a star centre, so no star centre exists and the claim is false. [step 1.1, L4, algebra] ∎
