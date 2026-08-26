---
id: cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable
kind: corollary
title: "A continuous preimage of a Lebesgue measurable subset of $\\mathbb{R}$ can be nonmeasurable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset,
       lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one,
       cor-cantor-set-is-an-uncountable-lebesgue-null-set,
       thm-lebesgue-measure-is-a-complete-measure,
       lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two,
       def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Example 2.22"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Then there exist a Lebesgue measurable set
$E \subseteq \mathbb{R}$, a subset $X \subseteq \mathbb{R}$, and a continuous map
$g:X \to \mathbb{R}$ such that $g^{-1}[E]$ is not Lebesgue measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice.

[L1] Every subset of $\mathbb{R}$ of positive Lebesgue outer measure contains a nonmeasurable subset ([[cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset]]).

[L2] The image $K=\psi[C]$ of the Cantor set under $\psi(x)=x+c(x)$ is compact and has Lebesgue measure $1$ ([[lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one]]).

[L3] The Cantor set is Lebesgue measurable with measure $0$ ([[cor-cantor-set-is-an-uncountable-lebesgue-null-set]]).

[L4] Assuming countable choice, Lebesgue measure is complete ([[thm-lebesgue-measure-is-a-complete-measure]]).

[L5] $\psi$ is a homeomorphism from $[0,1]$ onto $[0,2]$ ([[lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] the compact set $K$ has positive outer measure, so [L1] supplies a nonmeasurable subset $N \subseteq K$. [L1, L2, choose]

2.1 Let $E := \psi^{-1}[N] \subseteq C$. Since $C$ is measurable and has measure $0$ by [L3], completeness from [L4] makes $E$ Lebesgue measurable. [step 1.1, L3, L4, L5]

3.1 Let $g := \psi^{-1}|_K : K \to \mathbb{R}$. The map $g$ is continuous because $\psi$ is a homeomorphism by [L5]. For every $x \in K$, one has $g(x) \in E$ exactly when $x \in N$, because $g$ is the inverse of $\psi$ on $K$. Therefore $g^{-1}[E]=N$, and this preimage is not Lebesgue measurable. [step 1.1, step 2.1, L5] ∎
