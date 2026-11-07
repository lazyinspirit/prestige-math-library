---
dependency_level: 1
id: lem-finite-moment-and-close-pair-bounds-produce-separated-chains
kind: lemma
title: Finite moments and close-pair bounds give separated chains
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-finite-probability-space-and-event
- lem-finite-probability-basic-laws
- thm-cauchy-schwarz-finite
- def-expectation-on-a-finite-probability-space
- lem-cauchy-schwarz-for-finite-random-variables
- def-prime-gap-functions
justified_by: []
proof_strategy: direct
axiom_use: ZF finite expectations and an existential positive-probability outcome.
  No arbitrary ordering of the probability space is assumed; the finite real point
  set has its canonical increasing order.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Ford–Maynard–Tao, Chains of large gaps between primes, §3; explicit finite
      separation argument
    url: https://arxiv.org/pdf/1511.04468
    locator: Printed pp.6–8, Maier-matrix moment/separation step. Analytic first/second
      moment and local-pair estimates remain explicit premises.
verification: {}
---

## Statement

Let $(\Omega,w)$ be a finite probability space, let $L,a,b,d,A>0$, and let $0<\varepsilon\le\min\{1/4,a^2/(16bdA^2)\}$. For each outcome $\omega$, let $S_\omega$ be a finite subset of $[0,L]$, put $N(\omega)=|S_\omega|$, and let $D_\varepsilon(\omega)$ count unordered pairs of distinct elements of $S_\omega$ at distance at most $\varepsilon L$. Suppose that
$$\mathbb EN\ge aA,\qquad \mathbb E(N^2)\le bA^2,\qquad \mathbb ED_\varepsilon\le dA^2\varepsilon.$$
Then some outcome of positive weight satisfies
$$aA/2\le |S_\omega|\le4bA/a,\qquad D_\varepsilon(\omega)=0.$$
In particular, for an integer $k\ge1$, if $A=2(k+1)/a$ and
$$c=\min\{1/4,a^4/(64bd)\},\qquad \varepsilon=c/(k+1)^2,$$
then some such set has at least $k+1$ elements and its consecutive elements have distances greater than $\varepsilon L$. The constant $c$ is explicit and independent of $k$ when the supplied $a,b,d$ are absolute constants. If for that outcome a translate $s_0+S_\omega$ is the COMPLETE set of primes in $[s_0,s_0+L]$, then $k$ adjacent distances in it are $k$ actual consecutive prime gaps, with last prime at most $s_0+L$. An arbitrary subset of the primes is insufficient for this last conclusion. No choice axiom is assumed.

## Statement references

[[def-finite-probability-space-and-event]]

[[lem-finite-probability-basic-laws]]

[[thm-cauchy-schwarz-finite]]

[[def-expectation-on-a-finite-probability-space]]

[[lem-cauchy-schwarz-for-finite-random-variables]]

[[def-prime-gap-functions]]

## Facts & Assumptions

**Given:** Exactly the finite probability space, finite point sets and positive constants in the Statement.

[F1] Finite expectation is the weighted sum, with nonnegative weights of total one; event probabilities obey finite monotonicity and union bounds. [[def-finite-probability-space-and-event]] [[def-expectation-on-a-finite-probability-space]] [[lem-finite-probability-basic-laws]]

[F2] For real finite random variables, $(\mathbb E XY)^2\le\mathbb E(X^2)\mathbb E(Y^2)$; the ordinary finite-sum inequality also holds. [[lem-cauchy-schwarz-for-finite-random-variables]] [[thm-cauchy-schwarz-finite]]

[F3] Consecutive primes are adjacent in the increasing enumeration, and a chain of $k$ gaps requires $k+1$ consecutive primes with the specified last-prime cutoff. [[def-prime-gap-functions]]

## Proof

**Given:** The stated data and moment assumptions.

1.1 Let $E=\{N\ge aA/2\}$. Since $N<aA/2$ on its complement, $\mathbb E(N1_{E^c})\le aA/2$. Therefore $\mathbb E(N1_E)\ge aA/2$. Apply [F2] to $N$ and $1_E$, using $\mathbb E(N^2)\le bA^2$, to get $\mathbb P(E)\ge a^2/(4b)$. All divisions use positive constants. In particular the moment hypotheses themselves force $a^2\le b$, by [F2] applied to $N$ and the constant one. [F1, F2, given, algebra]

1.2 On $\{N>4bA/a\}$ one has $N^2>(4bA/a)^2$. Summing this finite pointwise inequality gives $\mathbb P(N>4bA/a)\le bA^2/(4bA/a)^2=a^2/(16b)$. Since $D_\varepsilon$ is a nonnegative INTEGER, $1_{\{D_\varepsilon\ge1\}}\le D_\varepsilon$, so $\mathbb P(D_\varepsilon\ge1)\le dA^2\varepsilon\le a^2/(16b)$. These are direct finite-sum Markov estimates, including zero-weight outcomes and zero pair counts. [F1, given, algebra]

2.1 Removing the two bad events in step 1.2 from $E$ leaves probability at least $a^2/(4b)-a^2/(16b)-a^2/(16b)=a^2/(8b)>0$. Thus at least one outcome in the remaining event has positive weight: otherwise its finite probability sum would be zero. Existentially take that outcome. It satisfies both displayed bounds and has $D_\varepsilon=0$. No ordering or choice of a “first” outcome was assumed. [F1, step 1.1, step 1.2, algebra]

3.1 For the displayed $A$ and $c$, one has $aA/2=k+1$ and $a^2/(16bdA^2)=a^4/(64bd(k+1)^2)$. The chosen $\varepsilon$ therefore meets the hypotheses, so step 2.1 gives at least $k+1$ points with every distinct pair farther apart than $\varepsilon L$. A finite subset of $\mathbb R$ has its unique increasing order; take its first $k+1$ points. Their $k$ consecutive distances have the asserted lower bound. Here $c/(k+1)^2\ge c/(4k^2)$ for $k\ge1$, retaining the effective $k^{-2}$ scale when $a,b,d$ are absolute. [F1, step 2.1, construct, algebra]

4.1 If $s_0+S_\omega$ is the COMPLETE prime set of the interval, no prime can lie between any two adjacent selected points: any such prime would still belong to that interval and hence to $s_0+S_\omega$, contradicting adjacency. Thus [F3] gives actual consecutive prime gaps and the last prime is bounded by the interval's right endpoint. Without completeness, an omitted intermediate prime would invalidate precisely this deduction. This proves all stated conclusions, and does not assert the analytic moment or close-pair hypotheses for any prime ensemble. [F3, step 3.1, algebra] ∎

