---
id: fs-every-lebesgue-measurable-set-is-a-borel-set
kind: false-statement
title: "Assuming the Axiom of Choice, every Lebesgue measurable subset of $\\mathbb{R}$ is a Borel set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-cantor-set-is-an-uncountable-lebesgue-null-set,
       thm-cantor-set-ternary-description,
       thm-cardinality-of-the-borel-sigma-algebra-on-rn,
       thm-cardinal-power-set-and-cantor,
       thm-lebesgue-measure-is-a-complete-measure,
       def-axiom-of-choice,
       def-borel-sigma-algebra]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Example 2.22"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every Lebesgue measurable subset of $\mathbb{R}$ is
a Borel set.

## Facts & Assumptions

**Given:** The Axiom of Choice.

[L1] Assuming countable choice, the Cantor set is an uncountable subset of $\mathbb R$ of Lebesgue measure zero ([[cor-cantor-set-is-an-uncountable-lebesgue-null-set]]).

[F1] $b \mapsto \Phi\big((2 b_k)_k\big)$ is a bijection from $\{0,1\}^{\mathbb{N}}$ onto the Cantor set $C$ ([[thm-cantor-set-ternary-description]]).

[F2] $$|\mathcal B(\mathbb R)|=\mathfrak c:=|\mathcal P(\mathbb N)|.$$ ([[thm-cardinality-of-the-borel-sigma-algebra-on-rn]])

[F3] Assuming choice, $2^{|A|}=|\mathcal P(A)|$ for every set $A$, and $\kappa<2^\kappa$ for every cardinal $\kappa$ ([[thm-cardinal-power-set-and-cantor]], clauses (a) and (b)).

[L2] Assuming countable choice, $\lambda_n$ is a complete measure ([[thm-lebesgue-measure-is-a-complete-measure]]).

[F4] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Refutation

**Proof technique:** direct.

1.1 By [F4], the Axiom of Choice gives countable choice, so [L1] applies and the Cantor set has Lebesgue measure zero. [given, F4, L1]

1.2 By [F1], the Cantor set is in bijection with $\{0,1\}^{\mathbb N}$, hence with $\mathcal P(\mathbb N)$, so its power set has cardinality $2^{\mathfrak c}$. [F1, algebra]

2.1 Since [F4] gives countable choice and [L2] says Lebesgue measure is complete under that hypothesis, every subset of the Cantor set is Lebesgue measurable. [step 1.1, F4, L2]

3.1 Assuming the Axiom of Choice, [F2] gives only $\mathfrak c$ Borel subsets of $\mathbb R$, while [F3] gives $2^{\mathfrak c} > \mathfrak c$; therefore not every Lebesgue measurable subset of $\mathbb R$ can be Borel. [step 2.1, step 1.2, F2, F3, F4]

4.1 The refutation is purely cardinal: it produces no particular measurable non-Borel set, only shows that one must exist. [step 3.1] ∎
