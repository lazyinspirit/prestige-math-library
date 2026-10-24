---
id: thm-probability-convergence-is-metrized-by-d-zero
kind: theorem
title: "Convergence in probability is metrized by $d_0$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-probability-convergence-metric, def-convergence-in-probability, lem-expectation-is-independent-of-the-ae-representative, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Exercise 3.2.8 (comparison metric)"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Durrett's exercise gives the equivalent bounded-transform metric with
integrand $t/(1+t)$; the proof below establishes the $\min(1,t)$ variant.

The formula $d_0([X],[Y])=\mathbb E[\min(1,|X-Y|)]$ is a metric on real
random variables modulo almost-sure equality. Moreover,
$$d_0([X_n],[X])\to0\quad\Longleftrightarrow\quad X_n\to X\text{ in probability}.$$

## Facts & Assumptions

**Given:** Real random variables $X,Y,Z$, and a sequence $(X_n)$, on one probability space.

[L1] The proposed formula for $d_0$ on almost-sure classes is $\mathbb E[\min(1,|X-Y|)]$ ([[def-probability-convergence-metric]]). Expectation of integrable random variables is unchanged by almost-sure replacement ([[lem-expectation-is-independent-of-the-ae-representative]]).

[L2] A nonnegative measurable function has integral zero exactly when it is zero almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[L3] Convergence in probability means that every fixed positive tail probability tends to zero ([[def-convergence-in-probability]]).

## Proof

**Proof technique:** direct.

1.1 The displayed integrand is measurable, nonnegative and bounded by $1$, so its expectation is finite. Almost-sure replacement of either representative leaves the integrand unchanged almost surely and hence leaves its expectation unchanged by [L1]. Symmetry is immediate. The real triangle inequality and $\min(1,a+b)\le\min(1,a)+\min(1,b)$ for $a,b\ge0$ give $\min(1,|X-Z|)\le\min(1,|X-Y|)+\min(1,|Y-Z|)$ pointwise. Taking expectations gives the triangle inequality. [L1, algebra]

1.2 For $0<\varepsilon\le1$, on $\{|X_n-X|>\varepsilon\}$ the integrand is at least $\varepsilon$, while on its complement it is at most $\varepsilon$ and everywhere it is at most $1$. Splitting the expectation over those events yields $\varepsilon\mathbb P(|X_n-X|>\varepsilon)\le d_0([X_n],[X])\le\varepsilon+\mathbb P(|X_n-X|>\varepsilon)$. [algebra]

2.1 If $d_0([X],[Y])=0$, [L2] makes $\min(1,|X-Y|)=0$ almost surely, hence $X=Y$ almost surely. Conversely, almost-sure equality makes the expectation zero. Thus $d_0$ is a metric on almost-sure classes. [L2, step 1.1]

3.1 If $d_0([X_n],[X])\to0$, the first inequality gives convergence in probability for each $0<\varepsilon\le1$; for a larger threshold, bound its tail event by the tail event at threshold $1$. Conversely, convergence in probability and the second inequality give $\limsup_n d_0([X_n],[X])\le\varepsilon$ for every $0<\varepsilon\le1$, hence $d_0([X_n],[X])\to0$. [step 1.2, L3] ∎
