---
id: ex-borel-trace-on-the-cantor-set
kind: example
title: "The Borel sigma-algebra of the Cantor set is the trace of the real Borel sigma-algebra"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cantor-set, thm-borel-sigma-algebra-of-a-subspace-is-the-trace]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.4.12"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Example

For the Cantor middle-thirds set $C\subseteq\mathbb R$ with its subspace
topology,

$$\mathcal B(C)=\{B\cap C:B\in\mathcal B(\mathbb R)\}.$$

## Facts & Assumptions

**Given:** The Cantor middle-thirds set $C$ with the subspace topology inherited from $\mathbb R$.

[L1] The Cantor middle-thirds set is $C=\bigcap_{n\in\mathbb N}C_n\subseteq[0,1]$ ([[def-cantor-set]]).

[L2] The Borel sigma-algebra of a subspace is the trace of the ambient Borel sigma-algebra ([[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]]).

## Verification

**Proof technique:** direct.

1.1 The description in [L1] makes $C$ a specified subset of $\mathbb R$, equipped here with the subspace topology. [L1]

2.1 The subspace theorem [L2] applies to this inclusion $C\subseteq\mathbb R$. [step 1.1, L2]

3.1 Therefore [L2] gives $\mathcal B(C)=\{B\cap C:B\in\mathcal B(\mathbb R)\}$, as claimed. [step 2.1, L2] ∎
