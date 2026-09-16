---
id: ex-zero-set-has-zero-measure-but-is-uncountable
kind: example
title: "A null uncountable random closed set"
status: draft
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
---

## Example

Almost surely, for every $T>0$ the Brownian zero set $Z$ intersected with
$[0,T]$ is a closed, uncountable set of Lebesgue measure zero. Thus the
zero set of a Brownian path is a natural random set that is large in the
cardinality sense and simultaneously null for Lebesgue measure; the two
notions of size are independent.

## Facts & Assumptions

**Given:** AC and a standard Brownian motion $B$ with zero set $Z$.

[F1] Almost surely $\lambda(Z\cap[0,T])=0$ for every $T<\infty$. [[lem-brownian-zero-set-has-lebesgue-measure-zero]]

[F2] Almost surely $Z\cap[0,T]$ is uncountable for every $T>0$. [[cor-brownian-zero-set-is-uncountable]]

[F3] $Z$ is a closed subset of $[0,\infty)$ containing $0$, so $Z\cap[0,T]$ is compact for every $T>0$. [[def-brownian-zero-set]]

[F4] AC is the ambient assumption of the Brownian interfaces. [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 Intersecting the probability-one events of [F1] over integer horizons and the probability-one event of [F2] gives a single probability-one event on which both conclusions hold for every integer horizon; for an arbitrary $T>0$, choosing an integer $N\ge T$ gives $\lambda(Z\cap[0,T])\le\lambda(Z\cap[0,N])=0$ and $Z\cap[0,T]\supseteq Z\cap[0,N']$ for any integer $N'\le T$, which is uncountable whenever such an $N'$ with $Z\cap[0,N']$ uncountable exists, since [F2] provides uncountability for every positive horizon. [F1, F2]

2.1 On that event the set $Z\cap[0,T]$ is closed by [F3] and compact, uncountable by [step 1.1], and null by [step 1.1]; the two properties are not in tension because uncountability imposes no lower bound on Lebesgue measure, as the Cantor set shows in the deterministic setting. [step 1.1, F3]

3.1 The cases are covered: the horizon is positive and finite, and the statements for all horizons are obtained from countably many integer horizons; the point $0$ belongs to $Z$ and to every truncated set but is a singleton of measure zero; the uncountability concerns $Z\cap[0,T]$ and not just $Z$; and AC enters only through [F4]. [step 2.1, F4, given] ∎

## Source notes

Sousi, Theorem 6.39, proves that the zero set is closed with no isolated points, hence uncountable, and Durrett's Section 7.4.1 computes its Lebesgue measure as zero. The example collects both facts and contrasts them.
