---
id: def-it-real-differential-entropy
kind: definition
title: Differential entropy for real densities
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the integrals are over Lebesgue densities on Euclidean spaces.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 8, §8.6
      url: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 4, Gaussian MAC converse
      url: https://arxiv.org/pdf/1001.3404v3
---

## Definition

If $X$ has Lebesgue density $f$ on $\mathbb R^d$ and $\int f\ln f$ is a finite real number, its differential entropy in nats is $h(X):=-\int_{\mathbb R^d}f(x)\ln f(x)\,dx$. If $(X,S)$ has conditional densities $f_{X|S=s}$ for almost every $s$ and the indicated integral is finite, set $h(X|S):=\int h(f_{X|S=s})\,dP_S(s)$. We use only these finite-integral cases; differential entropy is not defined here by a formal subtraction of possibly infinite quantities.

## Facts & Assumptions

**Given:** A Euclidean random vector with a Lebesgue density and an absolutely finite entropy integral; for the conditional version, conditional densities and an absolutely finite averaged entropy integral.

## Proof

1.1 The integrability hypothesis makes $\int f\ln f$ a finite real number, so the displayed negative integral is a defined real number. [given, algebra]

2.1 In the conditional definition, almost-everywhere existence of the conditional densities and integrability of their entropy values make the outer expectation a finite real number; changing a conditional density on a $P_S$-null set does not change it. [given, algebra, algebra] ∎

