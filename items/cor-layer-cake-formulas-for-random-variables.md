---
id: cor-layer-cake-formulas-for-random-variables
kind: corollary
title: "Layer-cake formulas for random variables"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-expectation-of-a-nonnegative-or-integrable-random-variable, def-positive-and-negative-parts-of-a-function, thm-layer-cake-formula-for-l-p-powers, thm-linearity-of-the-lebesgue-integral-on-l-one]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.6"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "J. R. Norris, Probability and Measure, Section 4.2"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Statement

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space.

1. If $X:\Omega\to[0,+\infty]$ is measurable, then
   $$\mathbb E[X]=\int_0^\infty \mathbb P(X>t)\,dt,$$
   where the right-hand side may be $+\infty$.
2. If $X$ is an integrable real random variable, then
   $$\mathbb E[X]=\int_0^\infty \mathbb P(X>t)\,dt-\int_0^\infty \mathbb P(X<-t)\,dt.$$

## Facts & Assumptions

**Given:** A probability space and a random variable $X$ in the relevant clause.

[L1] Expectation is integration against $\mathbb P$, and $X=X^+-X^-$ with
$|X|=X^++X^-$ for real $X$
([[def-expectation-of-a-nonnegative-or-integrable-random-variable]],
[[def-positive-and-negative-parts-of-a-function]]).

[L2] The layer-cake formula with $p=1$ gives
$$\int |f|\,d\mu=\int_0^\infty \mu(\{|f|>t\})\,dt$$
for measurable $f$ ([[thm-layer-cake-formula-for-l-p-powers]]).

[L3] The Lebesgue integral is linear on $L^1$
([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] with $f=X$ and $p=1$. Because $X\ge0$, one has $|X|=X$ and $\{|X|>t\}=\{X>t\}$, so [L1] gives $$\mathbb E[X]=\int_0^\infty \mathbb P(X>t)\,dt.$$ [L1, L2]

2.1 If $X$ is integrable and real, then $X^+,X^-\in L^1$ and [L1] gives $X=X^+-X^-$. By step 1.1 applied to $X^+$ and $X^-$, $$\mathbb E[X^+]=\int_0^\infty\mathbb P(X>t)\,dt,\qquad \mathbb E[X^-]=\int_0^\infty\mathbb P(X<-t)\,dt.$$ Subtracting these identities and using [L3] proves the second formula. [L1, L3, step 1.1] ∎
