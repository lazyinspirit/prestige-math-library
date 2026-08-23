---
id: ex-counting-premeasure-on-the-finite-cofinite-algebra
kind: example
title: "Counting premeasure on the finite-cofinite algebra induces counting outer measure"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-premeasure-on-an-algebra, def-outer-measure-induced-by-a-premeasure, lem-disjointification-of-an-algebra-cover, ex-counting-outer-measure, def-countable]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Section 1.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Example

On the finite-cofinite algebra $\mathcal A_0$ of $\mathbb N$, let $\mu_0(A)=|A|$ for finite $A$ and $\mu_0(A)=+\infty$ for cofinite $A$. Then $\mu_0$ is a premeasure and its induced outer measure is counting outer measure on every subset of $\mathbb N$.

## Facts & Assumptions

**Given:** The finite-cofinite algebra and the function $\mu_0$ in the Example.

[F1] A **premeasure** on an algebra $\mathcal A_0$ vanishes at the empty set and is countably additive whenever a disjoint sequence in $\mathcal A_0$ has its union in $\mathcal A_0$. ([[def-premeasure-on-an-algebra]])

[F2] The set function induced by $\mu_0$ assigns $E\subseteq X$ the infimum of $\sum_k\mu_0(A_k)$ over all countable algebra covers $E\subseteq\bigcup_kA_k$. ([[def-outer-measure-induced-by-a-premeasure]])

[L1] Every countable algebra cover of an algebra set disjointifies inside that set into algebra members subordinate to the original cover. ([[lem-disjointification-of-an-algebra-cover]])

[L2] Counting measure is an outer measure on $\mathcal P(X)$ and every subset of $X$ is Carathéodory measurable. ([[ex-counting-outer-measure]])

## Verification

**Proof technique:** direct.

1.1 The function is the restriction of counting measure, so a disjoint sequence whose union lies in the finite-cofinite algebra has cardinality equal to the nonnegative sum of the member cardinalities, both for a finite union and for an infinite union; hence [F1] holds. [F1, algebra]

1.2 If $E$ is finite, its self-cover gives induced cost at most $|E|$, while [L1] applied to any cover of $E$ yields disjoint subordinate pieces whose total cardinality is $|E|$, so every cover costs at least $|E|$. If $E$ is infinite, a cover containing a cofinite member has infinite cost; a cover by finite members with finite total cardinality has finite union and cannot cover $E$, so every cover has infinite cost. [F2, L1, cases]

2.1 Step 1.2 gives the value $|E|$ for finite $E$ and $+\infty$ for infinite $E$, exactly the counting outer measure of [L2]. [step 1.2, L2] ∎
