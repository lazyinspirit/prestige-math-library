---
id: lem-tgr-countable-l2-completeness
kind: lemma
title: Completeness of countable square-summable sequences
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-square-summable-family-on-an-arbitrary-index-set
  - thm-complex-plane-is-complete
  - def-hilbert-space
dependency_roles:
  def-square-summable-family-on-an-arbitrary-index-set: mathematical-premise
  thm-complex-plane-is-complete: mathematical-premise
  def-hilbert-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, Chapter 2 §2.1, Definition 2.1.1 and Exercise 2.1.2, printed pp. 13–14 (PDF pp. 12–13)
      url: https://arxiv.org/pdf/1311.2717
---

## Statement

With the inner product and norm of [[def-square-summable-family-on-an-arbitrary-index-set]], the complex sequence space
$$\ell^2(\mathbb N_0,\mathbb C):=\left\{x=(x_n)_{n\ge0}:\sum_{n\ge0}|x_n|^2<\infty\right\}$$
is complete. Hence it is a complex Hilbert space in the sense of [[def-hilbert-space]].

## Facts & Assumptions

**Given:** The index set is $\mathbb N_0$, the scalar field is $\mathbb C$, and the square-summable-family norm is the supremum of finite subsums as in [F1].

[F1] [[def-square-summable-family-on-an-arbitrary-index-set]]: the square-summable families form an inner-product space with norm $\|x\|_2=(\sup_{F\subseteq I,\ F\text{ finite}}\sum_{i\in F}|x_i|^2)^{1/2}$ and pairing $\langle x,y\rangle=\sum_i x_i\overline{y_i}$, linear in the first argument.

[F2] [[thm-complex-plane-is-complete]]: every Cauchy sequence in $\mathbb C$ converges.

[F3] [[def-hilbert-space]]: a complex Hilbert space is an inner-product space complete in its induced norm.

## Proof

1.1 Let $(x^{(k)})_{k\ge1}$ be Cauchy in $\ell^2(\mathbb N_0,\mathbb C)$. For each fixed $n$, $|x_n^{(k)}-x_n^{(\ell)}|\le\|x^{(k)}-x^{(\ell)}\|_2$, so [F2] gives a unique coordinate limit $x_n$. The sequence is norm-bounded: choose $k_0$ so that $\|x^{(k)}-x^{(k_0)}\|_2<1$ for $k\ge k_0$, bound those terms by $1+\|x^{(k_0)}\|_2$, and enlarge the bound to include the finitely many earlier norms. Call the resulting bound $C$. For every finite $F\subseteq\mathbb N_0$, finite-sum continuity gives $\sum_{n\in F}|x_n|^2=\lim_k\sum_{n\in F}|x_n^{(k)}|^2\le C^2$. Taking the supremum over finite $F$ shows $x\in\ell^2$. [given, F1, F2, algebra]

2.1 Given $\delta>0$, choose $k_1$ so $\|x^{(k)}-x^{(\ell)}\|_2<\delta/2$ whenever $k,\ell\ge k_1$. Fix $k\ge k_1$. For each finite $F$, coordinate convergence and the finite sum imply $\sum_{n\in F}|x_n^{(k)}-x_n|^2=\lim_{\ell\to\infty}\sum_{n\in F}|x_n^{(k)}-x_n^{(\ell)}|^2\le(\delta/2)^2$. Taking the supremum over finite $F$ gives $\|x^{(k)}-x\|_2\le\delta/2<\delta$. Thus every Cauchy sequence converges in this norm; [F3] gives the Hilbert-space conclusion. The coordinate limits are uniquely determined, so no choice principle is used. [given, F1, F2, F3, step 1.1, algebra] ∎
