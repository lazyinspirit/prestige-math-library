---
id: ex-characteristic-functions-of-open-and-closed-sets-are-semicontinuous
kind: example
title: "Characteristic functions of open and closed sets are one-sided semicontinuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-semicontinuity-on-euclidean-subsets, thm-euclidean-semicontinuity-level-set-characterisations, def-metric-topology]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lectures 2 and 4"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Example

Let $n\ge1$, let $X\subseteq\mathbb R^n$, and let $E\subseteq X$. The characteristic function $1_E:X\to\mathbb R$ is lower semicontinuous when $E$ is relatively open, and upper semicontinuous when $E$ is relatively closed. On $[0,1]$, the characteristic function of $\{0\}$ is upper semicontinuous but discontinuous at zero, and its negative is lower semicontinuous but discontinuous there.

## Facts & Assumptions

**Given:** The relative Euclidean topology and the semicontinuity convention [[def-semicontinuity-on-euclidean-subsets]].

[L1] Upper semicontinuity is equivalent to relative openness of every strict sublevel set, and lower semicontinuity is equivalent to relative openness of every strict superlevel set ([[thm-euclidean-semicontinuity-level-set-characterisations]]).

[L2] A set is closed exactly when its complement is open ([[def-metric-topology]]).

## Verification

**Proof technique:** direct.

1.1 Strict superlevels of $1_E$ are empty, $E$, or all of $X$, while strict sublevels are empty, $X\setminus E$, or all of $X$. By [L1] and [L2], $1_E$ is lower semicontinuous when $E$ is open and upper semicontinuous when $E$ is closed. [L1, L2, algebra]

2.1 For $E=\{0\}$ in $[0,1]$, step 1.1 gives upper semicontinuity, but values at positive points tend to zero rather than the value one at zero. Negation exchanges upper and lower semicontinuity, so $-1_E$ supplies the lower-semicontinuous discontinuous example. [step 1.1, algebra] ∎
