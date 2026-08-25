---
id: cex-lebesgue-null-sets-need-not-have-zero-jordan-outer-content
kind: counterexample
title: "$\\mathbb{Q}\\cap[0,1]$ is Lebesgue null and has Jordan outer content one"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-countable-subsets-of-rn-are-lebesgue-null,
       def-jordan-inner-and-outer-content,
       lem-finite-interval-cover-total-length,
       thm-rationals-countable,
       lem-q-and-irrationals-dense-r,
       def-interval,
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
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.2.1"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement refuted

A Lebesgue null subset of $[0,1]$ must have Jordan outer content $0$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the set $E := \mathbb{Q} \cap [0,1]$.

[L1] Every at most countable subset of $\mathbb R^n$ is Lebesgue null ([[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[F1] Its **Jordan outer content** is the infimum of $\sum_{r<q}\operatorname{vol}(R_r)$ over finite axis-parallel rectangle covers of the set ([[def-jordan-inner-and-outer-content]]).

[F2] The same lower bound on total length holds for a finite cover of an interval by bounded intervals of any of the four bounded forms ([[lem-finite-interval-cover-total-length]]).

[F3] $\mathbb{Q}_{\mathbb R}$ is dense in $\mathbb{R}$ ([[lem-q-and-irrationals-dense-r]]).

[F4] The rationals are countably infinite ([[thm-rationals-countable]]).

## Counterexample

**Proof technique:** direct.

1.1 The witness set $E = \mathbb{Q} \cap [0,1]$ is countable, hence Lebesgue null by [L1]. [L1, F4]

1.2 Let finitely many bounded intervals cover $E$. Their union is closed in $[0,1]$, and because it contains the dense subset $E$ of $[0,1]$, [F3] makes it contain all of $[0,1]$. [F1, F3, algebra]

2.1 Therefore [F2] gives total covering length at least $1$. [step 1.2, F2]

3.1 The single interval $[0,1]$ realises total length $1$, so [F1] gives Jordan outer content exactly $1$. Thus $E$ is Lebesgue null and still has Jordan outer content one. [step 2.1, F1] ∎
