---
id: thm-finite-inclusion-exclusion-for-measures
kind: theorem
title: "Inclusion-exclusion for a nonempty finite family of finite-measure sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-two-set-measure-identity, thm-finite-and-countable-subadditivity-of-measures, def-finite-sum, lem-finite-sum-laws, def-integer-power, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.4.35"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$ be natural and let $A_0,\ldots,A_{m-1}$ be measurable sets of finite measure. Then

$$\mu\left(\bigcup_{i<m}A_i\right)=\sum_{\varnothing\ne J\subseteq\{0,\ldots,m-1\}}(-1)^{|J|+1}\mu\left(\bigcap_{j\in J}A_j\right).$$

The finite sum on the right uses the following recursive order. For one index it lists $\{0\}$. After the nonempty subsets of $\{0,\ldots,m-1\}$ in their existing order, it lists $\{m\}$ and then the sets $J\cup\{m\}$ for nonempty $J$ in that same existing order. This convention fixes the sum without invoking an unproved permutation rule.

## Facts & Assumptions

**Given:** A nonempty finite list $A_0,\ldots,A_{m-1}$ of measurable sets, each of finite measure.

[L1] For measurable $A,B$, $\mu(A\cup B)+\mu(A\cap B)=\mu(A)+\mu(B)$ ([[prop-two-set-measure-identity]]).

[L2] The measure of a finite union is at most the sum of the member measures ([[thm-finite-and-countable-subadditivity-of-measures]]).

[L3] Finite sums start with the empty sum and satisfy additivity, splitting, and telescoping laws ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L4] Natural powers satisfy $a^0=1$ and $a^{n+1}=a^na$ ([[def-integer-power]]).

[L5] A property true at $0$ and inherited by successors holds for every natural number ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 Let $P(r)$ be the displayed inclusion-exclusion formula for a list of $r+1$ finite-measure measurable sets. It suffices to prove $P(r)$ for every $r\in\mathbb N$. [given, L5]

1.2 For $r=0$, both sides of $P(0)$ are $\mu(A_0)$, since the only nonempty subset of $\{0\}$ is $\{0\}$ and $(-1)^2=1$. [base, L3, L4]

1.3 Fix $r$ and assume $P(r)$ for every list of $r+1$ such sets. [ih]

2.1 Put $U=\bigcup_{i<r+1}A_i$. By [L2], $\mu(U)<+\infty$, and [L1] applied to $U$ and $A_{r+1}$ gives $\mu(U\cup A_{r+1})=\mu(U)+\mu(A_{r+1})-\mu(U\cap A_{r+1})$ in $\mathbb R$. [given, step 1.3, L1, L2, algebra]

2.2 The induction hypothesis expands $\mu(U)$ over the nonempty subsets of $\{0,\ldots,r\}$ and expands $\mu(U\cap A_{r+1})=\mu(\bigcup_{i<r+1}(A_i\cap A_{r+1}))$ over the same subsets; all intersections remain finite-measure. [given, step 1.3, L2, L3]

3.1 In step 2.1, the terms from $\mu(U)$ are indexed by nonempty subsets not containing $r+1$, the term $\mu(A_{r+1})$ is indexed by $\{r+1\}$, and the negated terms from step 2.2 are indexed in the stated recursive order by the sets $J\cup\{r+1\}$ and acquire the sign $(-1)^{|J|+2}=(-1)^{|J\cup\{r+1\}|+1}$. Finite-sum splitting therefore gives $P(r+1)$. [step 2.1, step 2.2, L3, L4]

4.1 By induction, $P(r)$ holds for every $r$, hence the stated formula holds for every nonempty finite family; the one-set boundary is step 1.2, and finiteness was used exactly in step 2.1 to permit subtraction. [step 1.1, step 1.2, step 2.1, step 3.1, L5, discharge-induction] ∎
