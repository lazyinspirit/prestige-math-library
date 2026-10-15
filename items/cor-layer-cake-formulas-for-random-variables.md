---
id: cor-layer-cake-formulas-for-random-variables
kind: corollary
title: "Layer-cake formulas for random variables"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-expectation-of-a-nonnegative-or-integrable-random-variable, def-positive-and-negative-parts-of-a-function, thm-layer-cake-formula-for-l-p-powers, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-monotone-convergence-for-the-integral]
proof_strategy: direct
verification:
  repair: research/bayesian-computational-statistics-62-owner-step4-b28-cor-layer-cake-formulas-for-random-variables-published-repair.json
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

[L1] Expectation is integration against $\mathbb P$, and $X=X^+-X^-$ with $|X|=X^++X^-$ for real $X$ ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[def-positive-and-negative-parts-of-a-function]]).

[L2] For a finite-valued measurable real function $f$, the layer-cake formula with $p=1$ gives $$\int |f|\,d\mu=\int_0^\infty \mu(\{|f|>t\})\,dt$$ ([[thm-layer-cake-formula-for-l-p-powers]]).

[L3] The Lebesgue integral is linear on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[L4] Increasing sequences of nonnegative measurable functions have integrals increasing to the integral of their pointwise limit, including infinite values ([[thm-monotone-convergence-for-the-integral]]).

## Proof

**Proof technique:** direct.

1.1 For each integer $n\ge1$, set $X_n=\min\{X,n\}$. This is a finite-valued nonnegative measurable real function: for a real $a$, $\{X_n>a\}$ is $\Omega$ if $a<0$, is $\{X>a\}$ if $0\le a<n$, and is empty if $a\ge n$. Also $X_n\uparrow X$, including where $X=+\infty$. Apply [L2] to $X_n$ to obtain $\mathbb E[X_n]=\int_0^\infty\mathbb P(X_n>t)\,dt$. For $t\ge0$, the tail $\mathbb P(X_n>t)$ equals $\mathbb P(X>t)$ when $t<n$ and zero when $t\ge n$, so these tails increase pointwise to $\mathbb P(X>t)$. Every tail is a nonincreasing Borel function of $t$: each strict upper level set is an initial interval, possibly empty or the whole half-line. Apply [L4] first on $\Omega$ and then on $(0,\infty)$ to pass to the limits in the identities for $X_n$. Using [L1] gives $$\mathbb E[X]=\int_0^\infty \mathbb P(X>t)\,dt,$$ with $+\infty$ allowed. [L1, L2, L4, construct]

2.1 If $X$ is integrable and real, then $X^+,X^-\in L^1$ and [L1] gives $X=X^+-X^-$. By step 1.1 applied to $X^+$ and $X^-$, $$\mathbb E[X^+]=\int_0^\infty\mathbb P(X>t)\,dt,\qquad \mathbb E[X^-]=\int_0^\infty\mathbb P(X<-t)\,dt.$$ Subtracting these identities and using [L3] proves the second formula. [L1, L3, step 1.1] ∎
