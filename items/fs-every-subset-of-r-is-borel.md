---
id: fs-every-subset-of-r-is-borel
kind: false-statement
title: "FALSE: every subset of the real line is Borel"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cardinality-of-the-borel-sigma-algebra-on-rn, thm-cantor-powerset, def-sigma-algebra, thm-cantor-set-ternary-description, def-cantor-set, thm-cardinal-power-set-and-cantor, def-cardinal-arithmetic]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.4.16 and Remark 1.4.18"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every subset of $\mathbb R$ is Borel.

## Facts & Assumptions

**Given:** The Axiom of Choice.

[L1] Under the Axiom of Choice, $|\mathcal B(\mathbb R)|=\mathfrak c$ ([[thm-cardinality-of-the-borel-sigma-algebra-on-rn]]).

[L2] For every set $A$, there is no surjection $A\to\mathcal P(A)$, so $A$ is strictly smaller than its power set ([[thm-cantor-powerset]]).

[L3] Every sigma-algebra contains the empty set ([[def-sigma-algebra]]).

[L4] The map $b\mapsto\Phi\big((2b_k)_k\big)$ is a bijection from $\{0,1\}^{\mathbb N}$, the set of sequences with values in $\{0,1\}$, onto the Cantor set $C$ ([[thm-cantor-set-ternary-description]], [[def-cantor-set]]).

[L5] Under the Axiom of Choice, $2^{|A|}=|\mathcal P(A)|$ for every set $A$ ([[thm-cardinal-power-set-and-cantor]]), and $\kappa^\lambda$ is the cardinality of the set of functions from $\lambda$ to $\kappa$ ([[def-cardinal-arithmetic]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that every subset of $\mathbb R$ is Borel, so $\mathcal P(\mathbb R)=\mathcal B(\mathbb R)$. [assume-contra]

1.2 The Cantor set satisfies $C\subseteq\mathbb R$, and [L4] with [L5] gives $|C|=|\{0,1\}^{\mathbb N}|=2^{\aleph_0}=|\mathcal P(\mathbb N)|=\mathfrak c$. [L4, L5]

2.1 Every subset of $C$ is a subset of $\mathbb R$, so $\mathcal P(C)\subseteq\mathcal P(\mathbb R)$. Step 1.1 makes that inclusion land in $\mathcal B(\mathbb R)$, whose cardinality is $\mathfrak c$ by [L1]; hence $|\mathcal P(C)|\le\mathfrak c=|C|$ by step 1.2. [step 1.1, step 1.2, L1]

3.1 By [L2], $|C|<|\mathcal P(C)|$, contradicting step 2.1. Therefore some subset of $\mathbb R$ is not Borel. The cardinality argument selects no particular subset, but [L3] shows that the omitted subset cannot be empty. [step 1.2, step 2.1, L2, L3, discharge-contradiction] ∎
