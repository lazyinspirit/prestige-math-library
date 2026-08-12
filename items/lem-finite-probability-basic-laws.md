---
id: lem-finite-probability-basic-laws
kind: lemma
title: "Normalization, nonnegativity, monotonicity, complements, and differences in a finite probability space"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-probability-space-and-event, lem-finite-sum-laws, thm-reals-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Theorem 1.1"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Sections 1.3.2-1.3.3"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

In a finite probability space $(\Omega,w)$, events $A\subseteq B\subseteq\Omega$ satisfy
$$0\le\mathbb P(A)\le\mathbb P(B)\le1,$$
and
$$\mathbb P(\varnothing)=0,\qquad \mathbb P(\Omega)=1,\qquad \mathbb P(A^c)=1-\mathbb P(A),\qquad \mathbb P(B\setminus A)=\mathbb P(B)-\mathbb P(A).$$
Probability zero need not imply that an event is empty.

## Facts & Assumptions

**Given:** A finite probability space $(\Omega,w)$ and events $A\subseteq B$.

[L1] Event probability is the sum of the nonnegative weights of its outcomes, and the sum of all outcome weights is $1$ ([[def-finite-probability-space-and-event]]).

[L2] Finite sums preserve nonnegativity and order ([[lem-finite-sum-laws]]).

[L3] The real numbers form a totally ordered field ([[thm-reals-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 The empty sum is $0$, while the sum over $\Omega$ is $1$, so $\mathbb P(\varnothing)=0$ and $\mathbb P(\Omega)=1$. [L1]

1.2 Since every summand in $\mathbb P(A)$ is nonnegative, $0\le\mathbb P(A)$. Splitting the sum over $B$ into $A$ and $B\setminus A$ gives $\mathbb P(B)=\mathbb P(A)+\mathbb P(B\setminus A)$, so $\mathbb P(A)\le\mathbb P(B)$. [L1, L2]

2.1 Taking $B=\Omega$ in step 1.2 gives $\mathbb P(A^c)=1-\mathbb P(A)$; rearranging the same identity for general $A\subseteq B$ gives $\mathbb P(B\setminus A)=\mathbb P(B)-\mathbb P(A)$. [step 1.1, step 1.2, L3, algebra]

3.1 The definition permits zero weights, so a singleton outcome of weight zero is a nonempty event of probability zero. All displayed conclusions follow. [L1, step 1.1, step 1.2, step 2.1] ∎
