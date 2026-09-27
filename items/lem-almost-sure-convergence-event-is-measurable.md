---
id: lem-almost-sure-convergence-event-is-measurable
kind: lemma
title: "The almost-sure convergence event is measurable"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-almost-sure-convergence-of-random-variables]
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
    - title: "S. Roch, Lecture 3: Modes of convergence, Definition 3.1"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
---

## Statement

For real random variables $(X_n)$ and $X$ on one probability space, the set
$\{\omega:X_n(\omega)\to X(\omega)\}$ is an event.

## Facts & Assumptions

**Given:** Real random variables $(X_n)$ and $X$ on a probability space.

[L1] Real convergence may be tested with positive rational tolerances.

## Proof

**Proof technique:** direct.

1.1 By [L1], the convergence set has the following countable description. [L1]
$$\bigcap_{r\in\mathbb Q_{>0}}\ \bigcup_{N=0}^\infty\ \bigcap_{n\ge N}\{|X_n-X|<r\}.$$ [L1]

2.1 Each set $\{|X_n-X|<r\}$ in the display is measurable because $X_n-X$ is a real random variable and the interval $(-r,r)$ is Borel. Countable unions and intersections preserve measurability. Thus the displayed set, and hence the convergence event, is measurable. [step 1.1] ∎
