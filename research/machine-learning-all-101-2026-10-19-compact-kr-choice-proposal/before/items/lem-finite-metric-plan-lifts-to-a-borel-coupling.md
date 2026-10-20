---
id: lem-finite-metric-plan-lifts-to-a-borel-coupling
kind: lemma
title: "A finite coupling lifts to a Borel coupling with a controlled metric cost"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-metric-space
  - def-metric-topology
  - def-borel-sigma-algebra
  - def-probability-measure
  - def-product-topology
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - lem-borel-product-of-second-countable-spaces
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-finite-probability-vector
  - def-finite-metric-coupling
  - def-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
justified_by: []
axiom_use: "No choice principle is used. Second-countability is given, product measure uses the stated finite probability factors, and all subsequent sums are finite."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
sources:
  references:
    - title: "Dmitriy Panchenko, Lecture Notes on Probability Theory, §4.4"
      url: "https://drive.google.com/uc?export=download&id=0B6JeBUquZ5BwVlV1dEpsTHVVbTA&resourcekey=0-5xbvKhDXZjrYRLfqppsHuQ"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §1.1, PDF pp. 3–4"
      url: "https://arxiv.org/pdf/1009.3856"
---

## Statement

Let $(X,d)$ be a second-countable metric space. Let $x_1,\ldots,x_m$ be distinct points, let $C_1,\ldots,C_m$ be a Borel partition of $X$, and let $\varepsilon>0$ satisfy $d(x,x_i)<\varepsilon$ for every $x\in C_i$. Let $\mu,\nu$ be Borel probability measures on $X$, set $p_i=\mu(C_i)$ and $q_j=\nu(C_j)$, and let $\pi=(\pi_{ij})$ be a finite coupling of the probability vectors $p,q$. Then there is a Borel probability measure $\gamma$ on $X\times X$ with marginals $\mu,\nu$ such that
$$\int_{X\times X}d(x,y)\,d\gamma(x,y)\le\sum_{i,j=1}^m\pi_{ij}d(x_i,x_j)+2\varepsilon.$$

## Facts & Assumptions

**Given:** The space, partition, measures, and finite coupling in the Statement.

[F1] For second-countable spaces with product topology, the Borel sigma-algebra on $X\times X$ equals $\mathcal B(X)\otimes\mathcal B(X)$. [[lem-borel-product-of-second-countable-spaces]]

[F2] For sigma-finite factors the product measure exists on the product sigma-algebra, has rectangle values $(\mu\times\nu)(A\times B)=\mu(A)\nu(B)$, and is sigma-finite. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F3] A finite coupling has nonnegative entries and the prescribed row and column sums. [[def-finite-metric-coupling]]

[F4] A probability vector has nonnegative coordinates summing to one. [[def-finite-probability-vector]]

[F5] The nonnegative integral is monotone and homogeneous, and is additive on nonnegative measurable functions. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] [[cor-additivity-of-the-nonnegative-lebesgue-integral]]

[F6] A metric is symmetric and satisfies the triangle inequality. [[def-metric-space]]

[F7] The metric cost is continuous on the product: the triangle inequality gives $|d(x,y)-d(x',y')|\le d(x,x')+d(y,y')$, and a continuous real-valued function is Borel. [[def-metric-space]] [[def-metric-topology]] [[def-product-topology]] [[def-borel-sigma-algebra]]

## Proof

**Proof technique:** direct.

1.1 If $p_i=0$, [F3] and nonnegativity imply $\pi_{ij}=0$ for every $j$; similarly, if $q_j=0$, then $\pi_{ij}=0$ for every $i$. For $p_i>0$ define $\mu_i(A)=\mu(A\cap C_i)/p_i$ for Borel $A\subseteq X$, and for $q_j>0$ define $\nu_j(A)=\nu(A\cap C_j)/q_j$. Countable additivity of $\mu,\nu$ is preserved by restriction to $C_i,C_j$ and multiplication by $1/p_i,1/q_j$; each restricted measure has total mass one after normalization. Hence these are Borel probability measures concentrated on $C_i,C_j$. [F3, F4, given, algebra]

2.1 Each conditional probability measure in step 1.1 is sigma-finite because $X$ has mass one. By [F1] and [F2], each active pair $p_i,q_j>0$ has a Borel product probability measure $\mu_i\times\nu_j$ on $X\times X$. Define $\gamma:=\sum_{i,j:p_i,q_j>0}\pi_{ij}(\mu_i\times\nu_j)$. Since zero rows and columns contribute zero by step 1.1, its total mass is $\sum_{i,j}\pi_{ij}=\sum_i p_i=1$. Thus $\gamma$ is a Borel probability measure. [F1, F2, F3, F4, step 1.1, construct]

3.1 For Borel $A\subseteq X$, the rectangle formula [F2] and row sums give $\gamma(A\times X)=\sum_{i:p_i>0}\sum_{j:q_j>0}\pi_{ij}\mu_i(A)=\sum_{i:p_i>0}p_i\mu_i(A)=\sum_i\mu(A\cap C_i)=\mu(A)$. The same calculation using column sums gives $\gamma(X\times A)=\nu(A)$, so $\gamma$ has the required marginals. [F2, F3, F4, step 2.1, algebra]

4.1 The cost $d(x,y)$ is nonnegative Borel by [F7]. For each active pair with $p_i,q_j>0$, [F2] gives $(\mu_i\times\nu_j)(C_i\times C_j)=1$, and the finite sum in step 2.1 therefore gives $\gamma(C_i\times C_j)=\pi_{ij}$. On zero rows or columns both sides are zero by step 1.1. On each active block, [F6] gives $d(x,y)\le d(x,x_i)+d(x_i,x_j)+d(x_j,y)<d(x_i,x_j)+2\varepsilon$. Integrating over the finite Borel partition and using finite additivity [F5] yields $\int d\,d\gamma\le\sum_{i,j}(d(x_i,x_j)+2\varepsilon)\pi_{ij}=\sum_{i,j}\pi_{ij}d(x_i,x_j)+2\varepsilon$. [step 1.1, step 2.1, F2, F5, F6, F7, algebra] ∎

## Diagram

For a Borel quantization map $Q:X\to F$, both paths in the square send $(x,y)$ to $Q(x)$; the second-coordinate square is analogous. The diagram records coordinate compatibility only; the proof of the coupling and cost estimates above is independent of it.

```tikzcd
X\times X \arrow[r,"Q\times Q"] \arrow[d,"\mathrm{pr}_1"'] & F\times F \arrow[d,"\mathrm{pr}_1"] \\
X \arrow[r,"Q"'] & F
```
