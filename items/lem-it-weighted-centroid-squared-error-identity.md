---
id: lem-it-weighted-centroid-squared-error-identity
kind: lemma
title: The weighted centroid minimizes finite-cluster squared error
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by: []
aliases: []
axiom_use: No choice principle is used.
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Robert M. Gray, Source Coding Theory, first edition
      url: https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf
      locator: Chapter 5, §5.2, printed pp. 117–119, centroid reproduction points and squared-error contributions.
    - title: "Robert Gallager, 6.450 Principles of Digital Communications I, Chapter 3: Quantization"
      url: https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/926689aaa62a0315473fa9b982de1b07_book_3.pdf
      locator: §3.2.2, printed p. 66, conditional means minimize fixed-cell mean-squared error.
    - title: Robert M. Gray and David L. Neuhoff, Quantization, IEEE Transactions on Information Theory 44(6) (1998)
      url: https://www.csd.uoc.gr/~hy438/lectures/Quantization.pdf
      locator: §III, printed pp. 2342–2343, centroid reconstruction for a fixed partition.
---

## Statement

Let $x_1,\ldots,x_N\in\mathbb R^d$, let $w_i>0$ with $\sum_{i=1}^Nw_i=1$, and let $S\subseteq\{1,\ldots,N\}$ be nonempty. Put $W_S:=\sum_{i\in S}w_i$ and $\mu_S:=W_S^{-1}\sum_{i\in S}w_ix_i$. For every $c\in\mathbb R^d$,

$$\sum_{i\in S}w_i\|x_i-c\|_2^2=\sum_{i\in S}w_i\|x_i-\mu_S\|_2^2+W_S\|c-\mu_S\|_2^2.$$

Consequently, $\mu_S$ is the unique minimizer of the cluster's weighted squared error. If $S$ is empty, its cost is zero for every center and no centroid is required.

## Facts & Assumptions

**Given:** A finite list of vectors $x_i\in\mathbb R^d$, positive weights summing to one, and a nonempty index set $S$.

[A1] The inner product and squared norm on $\mathbb R^d$ are $\langle x,y\rangle=\sum_{\ell=1}^d x_\ell y_\ell$ and $\|x\|_2^2=\langle x,x\rangle$.

## Proof

1.1 Since $S$ is nonempty and each $w_i>0$, $W_S>0$, so $\mu_S$ is defined and $\sum_{i\in S}w_i(x_i-\mu_S)=0$ by its formula. [given, A1, algebra]

2.1 Write $x_i-c=(x_i-\mu_S)+(\mu_S-c)$ and expand the squared norm using [A1]. Summing over $S$, the cross term is $2\langle\sum_{i\in S}w_i(x_i-\mu_S),\mu_S-c\rangle=0$ by step 1.1; the remaining terms give the displayed identity. [given, A1, step 1.1, algebra]

3.1 The last term in step 2.1 is nonnegative and vanishes exactly when $c=\mu_S$, because $W_S>0$ and a Euclidean squared norm vanishes exactly at the zero vector. Thus $\mu_S$ uniquely minimizes the cost. For empty $S$, the sum has no terms and equals zero for every $c$. [given, step 2.1, algebra] ∎
