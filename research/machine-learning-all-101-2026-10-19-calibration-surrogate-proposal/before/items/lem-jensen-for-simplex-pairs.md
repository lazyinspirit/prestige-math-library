---
id: lem-jensen-for-simplex-pairs
kind: lemma
title: "Jensen's inequality for pairs of simplex-valued forecasts"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-probability-measure
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-measurable-function-between-measurable-spaces
  - def-integral-of-a-nonnegative-simple-function
  - thm-dominated-convergence
  - thm-heine-borel-rn
  - thm-heine-cantor-metric
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification: {}
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Theorem 1.6.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Vaicenavicius et al., Evaluating Model Calibration in Classification, supplementary material, Theorem 2 and proof"
      url: "https://proceedings.mlr.press/v89/vaicenavicius19a/vaicenavicius19a-supp.pdf"
---

## Statement

For an integer $K\ge2$, let $\Delta_K=\{p\in[0,1]^K:\sum_{j=1}^Kp_j=1\}$ and $C=\Delta_K\times\Delta_K\subset\mathbb R^{2K}$. Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space, let $Z=(U,V):\Omega\to C$ be measurable, and let $\psi:C\to\mathbb R$ be continuous and jointly convex, meaning $\psi(\lambda z+(1-\lambda)w)\le\lambda\psi(z)+(1-\lambda)\psi(w)$ for all $z,w\in C$ and $\lambda\in[0,1]$. Define $\mathbb E Z$ coordinatewise. Then $\mathbb E Z=(\mathbb E U,\mathbb E V)\in C$ and
$$\psi(\mathbb E U,\mathbb E V)\le\mathbb E[\psi(U,V)].$$

## Statement references

[Durrett, Theorem 1.6.2](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf): scalar Jensen inequality for an integrable random variable.

[Vaicenavicius et al., supplementary Theorem 2](https://proceedings.mlr.press/v89/vaicenavicius19a/vaicenavicius19a-supp.pdf): applies convexity to the pair of conditional mean forecasts in each fixed bin.

## Facts & Assumptions

**Given:** A probability space, a measurable $C$-valued random vector $Z=(U,V)$, and a continuous jointly convex function $\psi:C\to\mathbb R$.

[F1] $C$ is convex, closed, and bounded in finite-dimensional Euclidean space; it is therefore compact by Heine–Borel. [[thm-heine-borel-rn]]

[F2] A continuous map from a compact metric space to a metric space is uniformly continuous. [[thm-heine-cantor-metric]]

[F3] Probability is total mass one, expectation is integration, and the integral of a nonnegative simple function is the finite weighted sum of its values. [[def-probability-measure]] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] [[def-integral-of-a-nonnegative-simple-function]]

[F4] A measurable sequence converging almost everywhere under one integrable majorant has convergent integrals. [[thm-dominated-convergence]]

[F5] A measurable map is one whose preimages of measurable sets are measurable. [[def-measurable-function-between-measurable-spaces]]

## Proof

1.1 If $Z$ has finite range $z_1,\ldots,z_m\in C$ with probabilities $p_1,\ldots,p_m$, then [F3] gives $\mathbb E Z=\sum_i p_i z_i$, a convex combination in $C$. Joint convexity proves $\psi(\mathbb E Z)\le\sum_i p_i\psi(z_i)=\mathbb E\psi(Z)$ by induction on the number of positive weights: combine the first $m-1$ points into their normalized convex average, apply the induction hypothesis, then apply two-point convexity with weights $1-p_m$ and $p_m$. [F1, F3, given, algebra]

1.2 For $n\ge1$ set $D_n=\{(m_1/n,\ldots,m_K/n):m_i\in\mathbb N_0,\sum_i m_i=n\}\subseteq\Delta_K$. This is a finite set with a canonical lexicographic order. For $p\in\Delta_K$, put $m_i=\lfloor np_i\rfloor$ for $i<K$ and $m_K=n-\sum_{i<K}m_i$. Then $m_K\ge0$, the coordinates sum to $n$, and the first $K-1$ coordinate errors are below $1/n$ while the last is below $(K-1)/n$. Thus some $q\in D_n$ has $\|p-q\|_2<\sqrt{K(K-1)}/n$. The product grid $D_n\times D_n$ therefore approximates every point of $C$ within $2K/n$. List its finitely many points canonically as $c_{n,1},\ldots,c_{n,m_n}$ and assign each point of $C$ to the first ball of radius $2K/n$ containing it. The cells are Borel by [F5]; replacing $Z$ on each cell by its center defines a measurable finite-range $Z_n\in C$ with $\|Z_n-Z\|_2<2K/n$ everywhere. The grid, order and assignment are explicit, so no choice axiom is used. [F1, F5, construct]

2.1 Step 1.1 gives $\mathbb E Z_n\in C$ for every $n$. Each coordinate of $Z_n$ and $Z$ is bounded by $1$, so dominated convergence [F4] gives $\mathbb E Z_n\to\mathbb E Z$ coordinatewise; because the coordinate constraints defining $C$ are closed, $\mathbb E Z\in C$. [F1, F3, F4, step 1.1]

2.2 By [F2], $\psi$ is uniformly continuous on $C$. Choose $\delta>0$ so that points within distance $\delta$ have $\psi$-values within $1$, and then choose $n$ with $2K/n<\delta$. The finite grid in step 1.2 is a $\delta$-net, so $|\psi(z)|\le1+\max_{c\in D_n\times D_n}|\psi(c)|$ for every $z\in C$. This is a common finite bound. Since $\|Z_n-Z\|_2\to0$, continuity gives $\psi(Z_n)\to\psi(Z)$ pointwise; [F4] then gives $\mathbb E\psi(Z_n)\to\mathbb E\psi(Z)$. [F1, F2, F4, step 1.2]

3.1 Applying step 1.1 to each $Z_n$ gives $\psi(\mathbb E Z_n)\le\mathbb E\psi(Z_n)$. By continuity of $\psi$ and steps 2.1 and 2.2, taking limits proves $\psi(\mathbb E Z)\le\mathbb E\psi(Z)$. [F1, step 1.1, step 2.1, step 2.2] ∎

