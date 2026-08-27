---
id: cor-continuous-functions-are-borel-measurable
kind: corollary
title: "Continuous functions on Euclidean spaces are Borel measurable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-borel-and-lebesgue-measurable-function-on-rn, thm-continuous-preimages-of-borel-sets-are-borel]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 2B"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $n,m\ge1$. Every continuous map
$f : \mathbb{R}^n \to \mathbb{R}^m$ is Borel measurable in
the sense of [[def-borel-and-lebesgue-measurable-function-on-rn]].

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, natural numbers $n,m\ge1$, and a continuous function
$f : \mathbb{R}^n \to \mathbb{R}^m$.

[L1] A continuous map has Borel preimages of Borel sets.
([[thm-continuous-preimages-of-borel-sets-are-borel]])

## Proof

**Proof technique:** direct.

1.1 Let $B \subseteq \mathbb{R}^m$ be Borel. By [L1], the preimage [L1]
$f^{-1}(B)$ is a Borel subset of $\mathbb{R}^n$. [L1]

2.1 By the definition of Borel measurability on Euclidean spaces, step 1.1 says [step 1.1]
exactly that $f$ is Borel measurable. [step 1.1] ∎
