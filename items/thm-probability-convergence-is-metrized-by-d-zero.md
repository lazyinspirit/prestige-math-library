---
id: thm-probability-convergence-is-metrized-by-d-zero
kind: theorem
title: "Convergence in probability is metrized by $d_0$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-probability, def-probability-convergence-metric, lem-expectation-is-independent-of-the-ae-representative, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Exercise 3.2.8 (comparison metric)"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Durrett's exercise gives the equivalent bounded-transform metric with
integrand $t/(1+t)$; the proof below establishes the $\min(1,t)$ variant.

The formula $d_0([X],[Y])=\mathbb E[\min(1,|X-Y|)]$ is a metric on real
random variables modulo almost-sure equality. Moreover,
$$d_0([X_n],[X])\to0\quad\Longleftrightarrow\quad X_n\to X\text{ in probability}.$$

## Facts & Assumptions

**Given:** Real random variables $X,Y,Z$, and a sequence $(X_n)$, on one probability space.

[L1] Expectation of integrable random variables is unchanged by almost-sure
replacement ([[lem-expectation-is-independent-of-the-ae-representative]]).

[L2] A nonnegative measurable function has integral zero exactly when it is
zero almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[L3] Convergence in probability means that every fixed positive tail
probability tends to zero ([[def-convergence-in-probability]]).

## Proof

**Proof technique:** direct.

1.1 The integrand is bounded by $1$, so its expectation is finite. Almost-sure replacement of either representative leaves it unchanged almost surely, hence leaves its expectation unchanged by [L1]. Symmetry is immediate; and [L1]
$$\min(1,|X-Z|)\le\min(1,|X-Y|)+\min(1,|Y-Z|)$$
by the real triangle inequality. Taking expectations gives the triangle
inequality. [L1]

1.2 If $d_0([X],[Y])=0$, [L2] makes $\min(1,|X-Y|)=0$ almost surely. [L2]
$X=Y$ almost surely; the converse is clear. Thus $d_0$ is a metric.
[L2]

1.3 For $0<\varepsilon\le1$, splitting at the error event gives. [algebra]
$$\varepsilon\mathbb P(|X_n-X|>\varepsilon)\le d_0([X_n],[X])$$
and
$$d_0([X_n],[X])\le\varepsilon+\mathbb P(|X_n-X|>\varepsilon).$$
The first comes from the bad set; the second splits it from its complement.
[algebra]

2.1 The first inequality makes $d_0\to0$ imply probability convergence by [L3]. Conversely, [L3] and the second inequality give $\limsup d_0\le\varepsilon$ for every $\varepsilon>0$, hence $d_0\to0$. [step 1.3, L3] ∎
