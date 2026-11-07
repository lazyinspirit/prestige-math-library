---
id: lem-dirichlet-polynomial-threshold-partition-is-finite
kind: lemma
title: Finite threshold partitions for Dirichlet-polynomial frequencies
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: direct
axiom_use: No choice axiom is used; only finitely many polynomials and a finite subcover are involved.
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- thm-isolated-zeros-holomorphic-function
- thm-heine-borel-r
- thm-complex-exponential-is-entire-with-derivative-itself
sources:
  references:
  - title: Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals
    url: https://arxiv.org/pdf/1501.04585v4
    locator: Frequency partition in the proof of Proposition 1, printed p. 23. Finiteness of the threshold partition is established locally.
---

## Statement

Let $T>0$, and let $Q_j(s)=\sum_{n\in I_j}a_{j,n}n^{-s}$ be finitely many finite Dirichlet polynomials with complex coefficients and thresholds $c_j\ge0$. Every set obtained by finitely many Boolean operations from the subsets
$$\{t\in[-T,T]:|Q_j(1+it)|\mathrel{\diamond} c_j\},\qquad\diamond\in\{<,\le,>,\ge\}$$
is a finite union of intervals and points, with arbitrary endpoint inclusion. In particular, changing its endpoint inclusion alters the integral of any continuous function by zero. No countable choice or assertion about arbitrary measurable frequency sets is made.

## Facts & Assumptions

**Given:** The finite polynomial family, thresholds, and compact interval in the Statement.

[F1] A nonzero holomorphic function has isolated zeros. [[thm-isolated-zeros-holomorphic-function]]

[F2] Every open cover of a closed bounded real interval has a finite subcover. [[thm-heine-borel-r]]

[F3] The complex exponential is entire; hence finite sums and products of such exponentials are entire. [[thm-complex-exponential-is-entire-with-derivative-itself]]

## Proof

1.1 For each $j$ define the entire function $$G_j(z)=Q_j(1+iz)\,\overline{Q_j(1+i\overline z)}-c_j^2.$$ The second factor is entire: writing it out gives a finite sum of $\overline{a_{j,n}}n^{-1}e^{iz\log n}$. Thus [F3] applies, and for real $t$ one has $G_j(t)=|Q_j(1+it)|^2-c_j^2$. If $G_j$ is identically zero, the two weak threshold conditions hold everywhere and the two strict conditions nowhere. [F3, given, construct, algebra]

2.1 Suppose $G_j$ is not identically zero. By [F1], for every $t\in[-T,T]$ there is an open interval about $t$ containing at most one real zero: if $G_j(t)\ne0$ use continuity, and if $G_j(t)=0$ use isolation. The property-defined family of all such intervals covers $[-T,T]$; by [F2] a finite subcover exists, so the interval contains only finitely many zeros. Taking the finite union over $j$ gives a finite set $Z$. Between consecutive points of $Z$, all nonidentically-zero $G_j$ have constant sign by continuity; hence every specified threshold condition, and every finite Boolean combination of them, is constant on each such open interval. The values at the points of $Z$ may be chosen individually according to the weak or strict inequalities. This proves the finite-union claim, including constant and zero polynomials. [F1, F2, step 1.1, given, construct, cases]

3.1 A finite set has zero contribution to a Riemann integral of a continuous function: cover its points by finitely many intervals of arbitrarily small total length and bound the continuous function on the compact domain. Thus changing inclusion of any finite collection of endpoints leaves the integral unchanged. [F2, step 2.1, algebra] ∎
