---
id: ex-zero-set-has-zero-measure-but-is-uncountable
kind: example
title: "A null uncountable random closed set"
status: published
origin: pipeline
deps: [lem-brownian-zero-set-has-lebesgue-measure-zero, cor-brownian-zero-set-is-uncountable, def-brownian-zero-set, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Theorem 6.39, printed p. 71"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
verification:
  audited: 2026-09-22
---

## Example

Almost surely, for every $T>0$ the Brownian zero set $Z$ intersected with
$[0,T]$ is a closed, uncountable set of Lebesgue measure zero. Thus the
zero set of a Brownian path is a natural random set that is large in the
cardinality sense and simultaneously null for Lebesgue measure; the two
notions of size are independent.

## Facts & Assumptions

**Given:** AC and a standard Brownian motion $B$ with zero set $Z$.

[F1] For each fixed $T<\infty$, almost surely $\lambda(Z\cap[0,T])=0$. [[lem-brownian-zero-set-has-lebesgue-measure-zero]]

[F2] Almost surely $Z\cap[0,T]$ is uncountable for every $T>0$. [[cor-brownian-zero-set-is-uncountable]]

[F3] $Z$ is a closed subset of $[0,\infty)$ containing $0$, so $Z\cap[0,T]$ is compact for every $T>0$. [[def-brownian-zero-set]]

[F4] AC is the ambient assumption of the Brownian interfaces. [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 Intersecting the probability-one events supplied by [F1] for the positive integer horizons with the single probability-one event of [F2] gives a probability-one event on which nullity holds at every positive integer horizon and uncountability holds at every positive horizon.  For arbitrary $T>0$, choose an integer $N\ge T$; then $\lambda(Z\cap[0,T])\le\lambda(Z\cap[0,N])=0$, while uncountability of $Z\cap[0,T]$ follows directly from [F2]. [F1, F2]

2.1 On that event the set $Z\cap[0,T]$ is closed by [F3] and compact, uncountable by [step 1.1], and null by [step 1.1]; the two properties are not in tension because uncountability imposes no lower bound on Lebesgue measure, as the Cantor set shows in the deterministic setting. [step 1.1, F3]

3.1 The cases are covered: the horizon is positive and finite; simultaneous nullity for all horizons is obtained from the countable integer exhaustion, whereas simultaneous uncountability for all positive horizons is exactly [F2]; the point $0$ belongs to $Z$ and to every truncated set but is a singleton of measure zero; and AC enters only through [F4]. [step 2.1, F4, given] ∎

## Source notes

Sousi, Theorem 6.39, proves that the zero set is closed with no isolated points, hence uncountable, and Durrett's Section 7.4.1 computes its Lebesgue measure as zero. The example collects both facts and contrasts them.
