---
id: cor-cantor-set-is-an-uncountable-lebesgue-null-set
kind: corollary
title: "The Cantor set is an uncountable subset of $\\mathbb{R}$ of Lebesgue measure zero"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line, thm-cantor-set-properties, def-cantor-set, def-countable, thm-lebesgue-measure-is-a-complete-measure, def-measure-zero-and-content-zero, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Example 2.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.2.9"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). The Cantor
middle-thirds set $C$ ([[def-cantor-set]]) is Lebesgue measurable with

$$\lambda_1(C) = 0,$$

and $C$ is uncountable ([[def-countable]]).

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Cantor middle-thirds set $C$.

[L1] Assuming countable choice, $\lambda_1^*(A)=0$ if and only if $A \subseteq \mathbb{R}$ has measure zero in the covering sense ([[thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line]], [[def-measure-zero-and-content-zero]]).

[L2] Assuming countable choice, every $S \subseteq \mathbb{R}$ with $\lambda_1^*(S)=0$ is Lebesgue measurable with $\lambda_1(S)=0$ ([[thm-lebesgue-measure-is-a-complete-measure]]).

[F1] $C$ has content zero, and therefore measure zero, and $C$ is uncountable ([[thm-cantor-set-properties]], claims 2 and 4; [[def-cantor-set]], [[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 The published theorem gives that $C$ has measure zero in the covering sense, so the agreement theorem gives $\lambda_1^*(C) = 0$. [L1, F1]

2.1 A set of Lebesgue outer measure zero is Lebesgue measurable with measure zero, so $\lambda_1(C) = 0$, while the same published theorem gives that $C$ is uncountable. [step 1.1, L2, F1] ∎
