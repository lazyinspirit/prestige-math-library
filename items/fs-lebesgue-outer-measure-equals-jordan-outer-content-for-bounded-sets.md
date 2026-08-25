---
id: fs-lebesgue-outer-measure-equals-jordan-outer-content-for-bounded-sets
kind: false-statement
title: "Lebesgue outer measure agrees with Jordan outer content on every bounded subset of $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content,
       prop-countable-subsets-of-rn-are-lebesgue-null,
       lem-finite-interval-cover-total-length,
       lem-q-and-irrationals-dense-r,
       def-jordan-inner-and-outer-content,
       def-countable-choice]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercises 1.2.1 and 1.2.8"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Every bounded subset of $\mathbb{R}^n$
has Lebesgue outer measure equal to its Jordan outer content.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice.

[L1] Lebesgue outer measure is at most Jordan outer content, and a bounded Jordan measurable set is Lebesgue measurable with Lebesgue measure equal to its Jordan content ([[thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content]]).

[L2] Every at most countable subset of $\mathbb R^n$ is Lebesgue null; in particular $\lambda_1(\mathbb Q)=0$ ([[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[F1] The Jordan outer content is defined through finite rectangle covers ([[def-jordan-inner-and-outer-content]]).

[F2] The same lower bound on total length holds for a finite cover of an interval by bounded intervals of any of the four bounded forms ([[lem-finite-interval-cover-total-length]]).

[F3] $\mathbb{Q}_{\mathbb R}$ is dense in $\mathbb{R}$ ([[lem-q-and-irrationals-dense-r]]).

## Refutation

**Proof technique:** direct.

1.1 What is true is [L1]: one inequality holds for every bounded set, and equality holds when the set is Jordan measurable. [L1, F1]

1.2 The witness $E := \mathbb{Q}\cap[0,1]$ has Lebesgue outer measure $0$ by [L2]; and if finitely many bounded intervals cover $E$, their union is closed and contains the dense subset $E$ of $[0,1]$, so it contains all of $[0,1]$, and [F2] forces total length at least $1$, while the single interval $[0,1]$ realises $1$, so [F1] gives Jordan outer content $1$. [L2, F1, F2, F3, algebra]

2.1 So the false statement drops the Jordan measurability hypothesis from the true theorem [L1], and the witness of step 1.2 refutes it. [step 1.1, step 1.2, L1] ∎
