---
id: cex-an-algebraic-extension-need-not-be-finite
kind: counterexample
title: "An algebraic extension need not be finite"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finite-field-extensions-are-algebraic, cor-intermediate-field-degrees-divide, thm-nth-roots-exist, thm-eisenstein-irreducibility-criterion, thm-simple-algebraic-extension-quotient-power-basis-and-degree]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement refuted

Every algebraic field extension is finite.

## Facts & Assumptions

**Given:** For $m\ge0$, let $a_m=2^{1/2^m}$ be the positive real root and $K_m=\mathbb Q(a_m)$, and put $K=\bigcup_{m\ge0}K_m$.

[L1] Every element of a finite extension is algebraic over the base ([[thm-finite-field-extensions-are-algebraic]]).

[L3] The degree of an intermediate field divides the total finite degree ([[cor-intermediate-field-degrees-divide]]).

[L4] Positive real $n$-th roots exist ([[thm-nth-roots-exist]]).

[L5] Eisenstein's criterion proves $t^{2^m}-2$ irreducible at $2$ ([[thm-eisenstein-irreducibility-criterion]]).

[L6] A simple extension has degree equal to its minimal-polynomial degree ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

## Counterexample

**Proof technique:** contradiction.

1.1 By [L4], the elements $a_m$ exist, and $a_{m+1}^2=a_m$, so $K_m\subseteq K_{m+1}$ and the union $K$ is a field. [given, L4]

1.2 By [L5] and [L6], $[K_m:\mathbb Q]=2^m$ for every $m$. [L5, L6]

2.1 Every element of $K$ lies in some $K_m$. By [L5] and [L6], the extension $K_m/\mathbb Q$ has finite degree $2^m$, so [L1] makes each of its elements algebraic over $\mathbb Q$. Thus $K/\mathbb Q$ is algebraic. [step 1.1, L1, L5, L6]

2.2 Suppose, for contradiction, that $K/\mathbb Q$ has finite degree $N$. Then [L3] makes $2^m=[K_m:\mathbb Q]$ divide $N$ for every $m$. Choosing $m$ with $2^m>N$ is impossible. [step 1.2, L3, assume-contra, choose]

3.1 Thus $K/\mathbb Q$ is algebraic by step 2.1 but not finite, refuting the statement. [step 2.1, step 2.2, discharge-contradiction] ∎
