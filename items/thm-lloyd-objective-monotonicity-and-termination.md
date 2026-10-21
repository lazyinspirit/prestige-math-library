---
id: thm-lloyd-objective-monotonicity-and-termination
kind: theorem
title: "Lloyd iteration is objective-decreasing and terminates"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-lloyd-k-means
  - def-k-means-objective
  - thm-least-squares-solutions-and-normal-equation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Christopher M. Bishop, Pattern Recognition and Machine Learning"
      url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf"
---

## Statement

Let $n,p$ be positive integers, let $1\le K\le n$, let $x_1,\ldots,x_n\in\mathbb R^p$, and supply any initial centers in $(\mathbb R^p)^K$. The tie-sensitive Lloyd algorithm defined on this page terminates after finitely many iterations. At each fixed-center assignment, the K-means objective does not increase, and it strictly decreases if any label changes. At each center update, the objective does not increase, and it strictly decreases if a nonempty-cluster center changes. At termination each label is a nearest-center label under the stated retention rule, and every nonempty-cluster center is its sample mean; no global-minimum conclusion is made.

## Facts & Assumptions

**Given:** The finite data and initial centers in the Statement, the K-means objective $J$, and the specified Lloyd iteration.

[F1] [[def-k-means-objective]]: $J(z,\mu_1,\ldots,\mu_K)=\sum_{i=1}^n\|x_i-\mu_{z_i}\|_2^2$; an empty cluster contributes zero.

[F2] [[alg-lloyd-k-means]]: an assignment retains its current label when that label is among the nearest centers, otherwise it chooses the smallest nearest-center index; every nonempty cluster center is replaced by its sample mean and an empty-cluster center is unchanged.

[F3] [[thm-least-squares-solutions-and-normal-equation]]: for a linear map $T$ between finite-dimensional inner-product spaces, $x$ minimizes $\|Tx-b\|$ exactly when $T^*(Tx-b)=0$; minimizers exist and form one minimizer plus $\ker T$.

## Proof

1.1 Fix the current centers. For each observation, the old label is one of the available centers, so choosing a nearest center cannot increase its squared distance. If the label changes, its new distance is strictly smaller: an equal-distance tie would retain the old label by [F2]. Summing the pointwise inequalities gives nonincrease of $J$, strict when any label changes. [given, F1, F2, algebra]

1.2 Fix a nonempty cluster $C$ and set $T(u)=(u)_{i\in C}$ from $\mathbb R^p$ to $(\mathbb R^p)^C$, with product inner product, and $b=(x_i)_{i\in C}$. For $u,v\in\mathbb R^p$, $\langle Tu,Tv\rangle=|C|\langle u,v\rangle$, so $T^*T=|C|I$; also $\langle Tu,b\rangle=\langle u,\sum_{i\in C}x_i\rangle$, so $T^*b=\sum_{i\in C}x_i$. Minimizing $\|Tu-b\|$ is equivalent to minimizing its square, since squaring is increasing on nonnegative reals. Thus [F3] gives the unique minimizer $\bar x_C=|C|^{-1}\sum_{i\in C}x_i$; uniqueness follows because $T$ is injective for nonempty $C$. Replacing a center by this mean cannot increase the cluster contribution and strictly decreases it if the old center differed. Empty clusters contribute zero and retain their centers. [given, F1, F3, construct, algebra]

2.1 A nonterminal iteration changes either the labels or at least one nonempty center. By steps 1.1 and 1.2, its full assignment-and-center update therefore strictly decreases $J$. For every $t\ge1$, the state $(z^{(t)},\mu^{(t)})$ follows a center update: its nonempty centers are the means for $z^{(t)}$, so its objective value is determined by that labeling alone; empty centers do not affect it. Consequently, among these post-update states, a labeling cannot recur across nonterminal iterations, since its objective value would repeat despite strict decrease. There are only $K^n$ labelings, so after the first update there are at most $K^n-1$ further nonterminal iterations before a terminal iteration occurs. This proves finite termination without requiring the arbitrary initial centers to be cluster means or excluding $z^{(1)}=z^{(0)}$. [given, F1, F2, step 1.1, step 1.2, algebra]

3.1 At termination the labels and centers are unchanged by the next iteration. The assignment rule therefore certifies that each label is nearest under the retention convention, while the center update certifies that every nonempty-cluster center is its sample mean. This is the stated coordinatewise fixed point. [F2, step 2.1] ∎
