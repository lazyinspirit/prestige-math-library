---
id: thm-qa-22-long-product-error-recurrence
kind: theorem
title: Error recurrence for a chain of block-encoded products
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
deps:
  - thm-qa-22-product-block-encoding-correctness
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 (17 April 2025)
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
    - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Lemma 53
      url: https://arxiv.org/pdf/1806.01838
---

## Statement

Let $n\ge1$ and $k\ge1$, let $A_i\in\mathbb C^{n\times n}$, and let $\alpha_i>0$ satisfy $\|A_i\|_{\rm op}\le\alpha_i$. Suppose the separately padded block encodings have compressed blocks $B_i=A_i/\alpha_i+E_i$ with $\|E_i\|_{\rm op}\le\varepsilon_i$ and $\varepsilon_i\ge0$. Composing them on separate ancillas in the declared order gives normalization $\prod_{i=1}^k\alpha_i$ and an all-zero block $B_1\cdots B_k$ satisfying

$$\left\|B_1\cdots B_k-\frac{A_1\cdots A_k}{\prod_{i=1}^k\alpha_i}\right\|_{\rm op}\le\sum_{i=1}^k\varepsilon_i\prod_{j\ne i}(1+\varepsilon_j).$$

## Facts & Assumptions

**Given:** The matrices, positive normalizations, separate-ancilla product convention, and error bounds in the statement.

[F1] [[thm-qa-22-product-block-encoding-correctness]]: two separately padded encodings compose in their declared order, with multiplied normalization and the product of their compressed blocks.

[F2] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the maximum action on a unit vector.

[F3] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: $\|ST\|_{\rm op}\le\|S\|_{\rm op}\|T\|_{\rm op}$ for compatible maps.

## Proof

1.1 Inductively apply [F1] to the first $k-1$ encodings and the $k$th encoding, using disjoint ancillas at every composition. The resulting compression is $B_1\cdots B_k$ in the stated order, and each step multiplies the normalization, giving $\prod_i\alpha_i$. [F1, given, algebra]

1.2 Put $C_i:=A_i/\alpha_i$, so $B_i=C_i+E_i$. The hypotheses give $\|C_i\|_{\rm op}\le1$. For every unit vector $x$, the vector triangle inequality gives $\|B_ix\|\le\|C_ix\|+\|E_ix\|\le1+\varepsilon_i$; taking the maximum in [F2] yields $\|B_i\|_{\rm op}\le1+\varepsilon_i$. [F2, given, algebra]

2.1 The telescoping identity $B_1\cdots B_k-C_1\cdots C_k=\sum_{i=1}^k(B_1\cdots B_{i-1})E_i(C_{i+1}\cdots C_k)$ follows by adding and subtracting the intermediate products $B_1\cdots B_iC_{i+1}\cdots C_k$. By [F3], [F2], and [step 1.2], its norm is at most $\sum_i\varepsilon_i\prod_{j<i}(1+\varepsilon_j)$, since every later $\|C_j\|\le1$. Each omitted factor $(1+\varepsilon_j)$ is at least one, so this is at most the displayed sum over all $j\ne i$. Finally $C_1\cdots C_k=A_1\cdots A_k/(\prod_i\alpha_i)$, proving the result, including $k=1$. [step 1.1, step 1.2, F2, F3, algebra] ∎
