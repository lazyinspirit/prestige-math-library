---
id: thm-expectation-of-products-of-independent-random-variables
kind: theorem
title: "Expectation factors over a finite product of mutually independent random variables"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-factorization-of-expectations-for-independent-variables, def-independent-random-elements, def-independence-of-finite-random-variables, lem-probability-measure-basic-identities]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/thm-expectation-of-products-of-independent-random-variables.json
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Lemma 1.1.9"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "M. Bucic, Probabilistic Method, Proposition A.15"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Statement

Let $(X_i)_{i\in I}$ be a finite mutually independent family of real random variables on a common probability space, with independence in the sense of Independent random elements.

1. If every $X_i$ is integrable, then $\prod_{i\in I}X_i$ is integrable and
   $$\mathbb E\!\left[\prod_{i\in I}X_i\right]=\prod_{i\in I}\mathbb E[X_i]$$
   in $\mathbb R$.
2. If every $X_i$ is nonnegative, the same identity holds in $[0,+\infty]$. A zero factor on the right makes the product zero even if another factor is $+\infty$; otherwise the usual extended nonnegative product is used.

The original finite-probability-space case is included: for a finite family of finite-valued real random variables, mutual atom independence as in Pairwise and mutual independence of finite-valued random variables suffices, and all expectations are finite. For $I=\varnothing$, both sides equal $1$. The converse is not asserted.

## Statement references

[[def-independent-random-elements]]

[[def-independence-of-finite-random-variables]]

## Facts & Assumptions

**Given:** A finite family $(X_i)_{i\in I}$ satisfying the independence and moment hypotheses of the applicable case in the Statement.

[L1] Independence of random elements means independence of their inverse-image sigma-algebras. ([[def-independent-random-elements]])

[L2] For an independent nonempty finite family of real random variables and Borel functions $g_i$, the product expectations factor in the nonnegative extended case, with the explicit zero-factor convention, and in the integrable case; in the latter case the product is integrable. ([[thm-factorization-of-expectations-for-independent-variables]])

[L3] For finite-valued random variables, mutual atom independence factors the joint probabilities of attained values for every subfamily. ([[def-independence-of-finite-random-variables]])

[L4] On a general probability space, $\mathbb P(\varnothing)=0$ follows from the set-difference identity with $A=B$, and $\mathbb P(A\cup B)=\mathbb P(A)+\mathbb P(B)-\mathbb P(A\cap B)$. For disjoint events this is two-set additivity, which gives finite disjoint additivity by induction. ([[lem-probability-measure-basic-identities]])

## Proof

**Proof technique:** direct.

1.1 In the original finite-valued case, let $J\subseteq I$ and let $B_i\subseteq\mathbb R$ be Borel for $i\in J$. Write $A_i$ for the finite attained-value set of $X_i$. The event $\bigcap_{i\in J}\{X_i\in B_i\}$ is the disjoint union of the joint atoms indexed by $\prod_{i\in J}(A_i\cap B_i)$. By [L3] and [L4], its probability is $$\sum_{(x_i)\in\prod_{i\in J}(A_i\cap B_i)}\prod_{i\in J}\mathbb P(X_i=x_i)=\prod_{i\in J}\sum_{x_i\in A_i\cap B_i}\mathbb P(X_i=x_i)=\prod_{i\in J}\mathbb P(X_i\in B_i).$$ Factoring finite sums proves the middle equality, including empty factors. Thus the family is independent in the sense of [L1]. Each variable is bounded because its attained-value set is finite, hence integrable on a probability space. [L1, L3, L4, algebra]

2.1 Suppose $I\ne\varnothing$ and every $X_i$ is integrable. Enumerate the finite set $I$ by $0,\ldots,n-1$ and apply [L2] with $g_i(x)=x$, which is Borel. It gives product integrability and the asserted real factorization. Selecting one enumeration of one finite set uses no axiom of choice. Step 1.1 supplies the required independence and integrability in the original finite-valued case. [L2, step 1.1]

3.1 Suppose $I\ne\varnothing$ and every $X_i$ is nonnegative. Apply [L2] to the same enumeration with $g_i(x)=\max(x,0)$, a continuous nonnegative Borel function. Since $g_i(X_i)=X_i$, [L2] gives the asserted extended factorization with precisely its zero-factor convention. [L2, step 2.1]

4.1 For $I=\varnothing$, the random product is the constant $1$, whose expectation is $1$ on a probability space, and the product of expectations is the empty product $1$. Steps 2.1 and 3.1 and this identity prove all stated cases. [step 2.1, step 3.1, algebra] ∎
