---
id: cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel
kind: corollary
title: "There is a Lebesgue measurable subset of $\\mathbb{R}$ that is not Borel"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset,
       lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one,
       lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two,
       cor-cantor-set-is-an-uncountable-lebesgue-null-set,
       thm-lebesgue-measure-is-a-complete-measure,
       thm-borel-sigma-algebra-of-a-subspace-is-the-trace,
       thm-continuous-preimages-of-borel-sets-are-borel,
       thm-borel-sets-are-lebesgue-measurable,
       def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Example 2.22"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Then there exists a Lebesgue measurable subset of
$\mathbb{R}$ that is not a Borel set.

## Facts & Assumptions

**Given:** The Axiom of Choice.

[L1] Every subset of $\mathbb{R}$ of positive Lebesgue outer measure contains a nonmeasurable subset ([[cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset]]).

[L2] The image $K=\psi[C]$ of the Cantor set under $\psi(x)=x+c(x)$ is compact and has Lebesgue measure $1$ ([[lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one]]).

[L3] The Cantor set is Lebesgue measurable with measure $0$ ([[cor-cantor-set-is-an-uncountable-lebesgue-null-set]]).

[L4] Assuming countable choice, Lebesgue measure is complete ([[thm-lebesgue-measure-is-a-complete-measure]]).

[L5] The Borel sigma-algebra of a subspace is the trace of the ambient Borel sigma-algebra ([[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]]).

[L6] Continuous preimages of Borel sets are Borel ([[thm-continuous-preimages-of-borel-sets-are-borel]]).

[L7] Assuming countable choice, every Borel subset of $\mathbb{R}$ is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]).

[L8] $\psi$ is a homeomorphism from $[0,1]$ onto $[0,2]$ ([[lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] the compact set $K$ has positive outer measure, so [L1] supplies a nonmeasurable subset $N \subseteq K$. [L1, L2, choose]

2.1 Let $E := \psi^{-1}[N] \subseteq C$. Since $C$ is measurable of measure $0$ by [L3], completeness [L4] makes $E$ Lebesgue measurable. [step 1.1, L3, L4, L8]

3.1 If $E$ were Borel in $\mathbb{R}$, then [L5] would make $E$ Borel as a subset of the subspace $C$. The inverse homeomorphism $\psi^{-1}|_K : K \to C$ is continuous by [L8], so [L6] would make $N=(\psi^{-1}|_K)^{-1}[E]$ Borel in the subspace $K$. Applying [L5] again, there would be a Borel set $B \subseteq \mathbb{R}$ with $N = K \cap B$. Now [L7] makes $B$ Lebesgue measurable, [L2] makes $K$ Lebesgue measurable, and measurable sets are closed under intersection; hence $N$ would be Lebesgue measurable, contradicting step 1.1. Therefore $E$ is not Borel. [step 1.1, step 2.1, L2, L5, L6, L7, L8] ∎
