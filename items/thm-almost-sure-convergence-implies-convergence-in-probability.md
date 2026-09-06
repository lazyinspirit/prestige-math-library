---
id: thm-almost-sure-convergence-implies-convergence-in-probability
kind: theorem
title: "Almost-sure convergence implies convergence in probability"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-random-element-and-real-random-variable, def-almost-sure-convergence-of-random-variables, def-convergence-in-probability, lem-almost-sure-convergence-event-is-measurable, thm-dominated-convergence]
proof_strategy: direct
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Theorem 3.12"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  audited: 2026-09-07
  precheck: pass
---

## Statement

If $X_n\to X$ almost surely, then $X_n\to X$ in probability.

## Facts & Assumptions

**Given:** $X_n\to X$ almost surely.

[L1] Real random variables are measurable, so differences, absolute values,
threshold events, and their indicators are measurable
([[def-random-element-and-real-random-variable]]).

[L2] Dominated convergence sends an almost-everywhere convergent integrable
sequence with one integrable majorant to convergence of integrals
([[thm-dominated-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\varepsilon>0$ and set $I_n=\mathbf1_{\{|X_n-X|>\varepsilon\}}$. [given, L1]
By [L1] these are measurable; the hypothesis gives $I_n\to0$ almost surely,
and $0\le I_n\le1$. [given, L1]

2.1 Apply [L2] to the indicators from step 1.1 with majorant $1$. [step 1.1, L2]
$\mathbb P(|X_n-X|>\varepsilon)=\mathbb E I_n\to0$, which is the required
probability convergence. [step 1.1, L2] ∎
