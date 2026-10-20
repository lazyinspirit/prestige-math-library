---
id: thm-compression-generalization-bound
kind: theorem
title: "The sample-compression generalization bound"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-sample-compression-scheme
  - def-population-and-empirical-risk
  - lem-population-and-empirical-risk-are-measurable
  - def-probability-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-probability-measure-basic-identities
  - lem-power-monotone
  - def-measurable-function-between-measurable-spaces
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - def-finite-sum
  - def-binomial-coefficient
  - def-integer-power
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the argument uses finite product measures, Tonelli, and a finite union bound."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sally Floyd and Manfred Warmuth, Sample Compression, Learnability, and the Vapnik–Chervonenkis Dimension, Theorem 5 and Appendix proof"
      url: "https://mwarmuth.bitbucket.io/pubs/J30.pdf"
---

## Statement

Let $(\mathcal X,\Sigma)$ be a measurable space, let $\mathcal H$ be a nonempty class of measurable maps $c:\mathcal X\to\{0,1\}$, fix a target $c\in\mathcal H$, and let $D$ be a probability measure on $\mathcal X$. Put $\mathcal Z=\mathcal X\times\{0,1\}$ with the product sigma-algebra. Let $m,d\in\mathbb N$ satisfy $m>d$, set $[m]=\{1,\ldots,m\}$, and draw $(X_1,\ldots,X_m)$ under $D^m$, labeling $X_j$ by $c(X_j)$. Write $S=((X_1,c(X_1)),\ldots,(X_m,c(X_m)))$. For each $0\le i\le d$, let $G_i:\mathcal Z^i\times\mathcal X\to\{0,1\}$ be a fixed jointly measurable reconstruction map (for $i=0$, $G_0$ is measurable on $\mathcal X$). For $I=\{i_1<\cdots<i_k\}\subseteq[m]$, define $S_I=((X_{i_1},c(X_{i_1})),\ldots,(X_{i_k},c(X_{i_k})))$ and $g(S_I)(x):=G_k(S_I,x)$; for $I=\varnothing$, let $S_I$ be the empty sequence and use $G_0$. Define $R_D(g(S_I)):=D\{x:g(S_I)(x)\ne c(x)\}$. For every $\epsilon\in(0,1)$,
$$\Pr_{D^m}\left\{\begin{array}{l}\text{there is an index subset }I\subseteq[m],\ |I|\le d,\text{ such that }R_D(g(S_I))>\epsilon\\[-2pt]\text{and }g(S_I)(X_j)=c(X_j)\text{ for every }j\in[m]\end{array}\right\}\le\sum_{i=0}^{d}\binom{m}{i}(1-\epsilon)^{m-i}.$$
The event displayed above is measurable. Thus any measurable consistent compression learner of size at most $d$ using these reconstructors has failure probability no larger than this bound.

## Statement references

[[def-sample-compression-scheme]]: the reconstruction map uses only the ordered selected labeled entries and is jointly measurable; consistency means reproducing every label in the full sample.

[[def-population-and-empirical-risk]]: population risk is expected loss and empirical risk is the average loss on the sample; here the loss is binary zero-one loss against the fixed target.

[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: $D^m$ assigns a product rectangle the product of its coordinate probabilities.

[[lem-probability-measure-basic-identities]]: the probability of a finite union is at most the sum of its probabilities.

[[def-binomial-coefficient]]: $\binom{m}{i}$ counts the $i$-element index subsets of $[m]$.

[Floyd and Warmuth, *Sample Compression, Learnability, and the Vapnik–Chervonenkis Dimension*, Theorem 5 and Appendix proof](https://mwarmuth.bitbucket.io/pubs/J30.pdf): fixes an indexed compression set, bounds consistency on the remaining independent sample, and sums over all subset sizes.

## Facts & Assumptions

**Given:** A fixed measurable target $c\in\mathcal H$, a probability measure $D$, a size-at-most-$d$ compression scheme, integers $m>d\ge0$, and $\epsilon\in(0,1)$.

[F1] For each $0\le i\le d$, the reconstruction map $G_i$ is jointly measurable, and a consistent scheme reproduces each of the $m$ target labels from its selected entries. [[def-sample-compression-scheme]]

[F2] Under zero-one loss, population risk is the probability of disagreement with the target and empirical risk is the average of the corresponding indicators; fixed-predictor risks are defined and the empirical-risk function of the sample is measurable. [[def-population-and-empirical-risk]], [[lem-population-and-empirical-risk-are-measurable]]

[F3] $D$ is a probability measure, $D^m$ is the finite product measure on the finite product sigma-algebra, and it has the rectangle formula and uniqueness property. A coordinate permutation preserves it because both pushforward measures agree on all rectangles. [[def-probability-measure]], [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F4] Tonelli makes the section risk measurable and permits integration first over selected coordinates and then over the remaining product coordinates. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F5] For events $E_1,\ldots,E_N$, $\Pr(\bigcup_{j=1}^N E_j)\le\sum_{j=1}^N\Pr(E_j)$. [[lem-probability-measure-basic-identities]]

[F6] $\binom{m}{i}$ is the number of $i$-element subsets of $[m]$. [[def-binomial-coefficient]]

[F7] The reconstruction maps are measurable maps on finite product measurable spaces; real finite sums and comparisons of measurable functions remain measurable, and natural powers preserve inequalities between nonnegative bases for a fixed positive exponent. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[def-measurable-function-between-measurable-spaces]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[def-finite-sum]], [[def-integer-power]], [[lem-power-monotone]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix $0\le i\le d$ and $I\subseteq[m]$ with $|I|=i$. For an ordered selected tuple $s$, define $L_s(x):=\mathbf1\{G_i(s,x)\ne c(x)\}$ and $r_i(s):=\int L_s\,dD$. By [F1], [F2], [F7], and [F4], the mismatch indicator and its section integral are measurable; the event that the selected hypothesis agrees with each selected example is also measurable. Thus the event $E_I$ that this subset reconstructs a hypothesis of risk greater than $\epsilon$ consistent on the full sample is measurable. [F1, F2, F4, F7, given]

2.1 Reorder the coordinates so the indices in $I$ come first. [F3] identifies the resulting law as $D^i\times D^{m-i}$. For fixed selected tuple $s$, let $A_s:=\{x:G_i(s,x)=c(x)\}$; then $D(A_s)=1-r_i(s)$ by [F2]. The remaining coordinates are all consistent exactly on the rectangle $A_s^{m-i}$, whose product probability is $(1-r_i(s))^{m-i}$ by [F3]. On $r_i(s)>\epsilon$, we have $0\le1-r_i(s)<1-\epsilon$ and $m-i\ge1$, so [F7] gives $(1-r_i(s))^{m-i}\le(1-\epsilon)^{m-i}$. Integrating over $s$ by [F4] and discarding the additional requirement that selected entries themselves be consistent gives $\Pr_{D^m}(E_I)\le(1-\epsilon)^{m-i}$. [F1, F2, F3, F4, F7, step 1.1, algebra]

3.1 There are exactly $\binom{m}{i}$ subsets of $[m]$ of size $i$ by [F6]. Applying [F5] over all such subsets and then over $i=0,\ldots,d$ yields $\Pr_{D^m}\left(\bigcup_{I\subseteq[m],\,|I|\le d}E_I\right)\le\sum_{i=0}^{d}\binom{m}{i}(1-\epsilon)^{m-i}$, which is the stated bound. The output of any consistent compression learner is one of these reconstructed candidates, so its measurable failure event is contained in this union. [F5, F6, step 2.1, given, algebra] ∎

## Remarks

The theorem assumes a size-$d$ compression scheme; it does not prove that every class of VC dimension $d$ has a compression scheme of size $O(d)$. Floyd and Warmuth identified that question in 1995, so the cited source is not used as a current-status claim.

## Remarks references

[Floyd and Warmuth, *Sample Compression, Learnability, and the Vapnik–Chervonenkis Dimension*, §9.1](https://mwarmuth.bitbucket.io/pubs/J30.pdf): records the 1995 open question about size-$O(d)$ compression for arbitrary VC-dimension-$d$ classes.
