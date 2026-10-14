---
id: lem-matrix-depth-maximizer-exists-on-compact-classes
kind: lemma
title: A matrix-depth maximizer exists on the bounded covariance classes
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-matrix-depth-covariance-estimator
  - def-bounded-spectrum-covariance-class
  - def-block-sparse-covariance-class
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-heine-borel-rn
  - def-upper-semicontinuous-real-map-on-a-topological-space
  - thm-euclidean-semicontinuous-extreme-value-theorem
  - lem-closed-subset-of-a-compact-space-is-compact
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: AC is inherited through beta in the estimator definition. The compactness and upper-semicontinuity proof itself is choice-free.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, §3.1 and §3.2"
      url: "https://arxiv.org/pdf/1506.00691"
dependency_level: 4
---

## Statement

For every integer $p\ge1$, every nonempty finite sample in $\mathbb R^p$,
and every $M>0$, the dense bounded-class argmax correspondence
$$\operatorname{Argmax}_{\Gamma\in\mathcal F_p(\beta M)}D_{S^{p-1}}(\Gamma,P_n)$$
from [[def-matrix-depth-covariance-estimator]] is nonempty compact. If
$1\le s\le p/2$, the single-block sparse bounded-class argmax
$$\operatorname{Argmax}_{\Gamma\in\mathcal F_{p,s}(\beta M)}D_{U_s}(\Gamma,P_n)$$
is also nonempty compact.

## Facts & Assumptions

**Given:** An integer $p\ge1$, a nonempty finite sample in $\mathbb R^p$, its empirical law $P_n$, a bound $M>0$, and, for the sparse case, $1\le s\le p/2$.

[F1] [[def-matrix-depth-covariance-estimator]] defines empirical matrix depth as the infimum over directions of the minimum of the two empirical weak-tail counts.

[F2] [[def-bounded-spectrum-covariance-class]], [[def-block-sparse-covariance-class]], [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], and [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the search classes consist of positive semidefinite symmetric matrices with operator norm at most $\beta M$; the sparse class is the finite union of closed support classes.

[F3] [[thm-cauchy-schwarz-in-an-inner-product-space]] and [[thm-heine-borel-rn]]: for unit coordinate vectors, $|e_i^T\Gamma e_j|\le\|\Gamma\|_{\rm op}$, and a closed bounded subset of finite-dimensional Euclidean coordinate space is compact.

[F4] [[def-upper-semicontinuous-real-map-on-a-topological-space]]: a real map is upper semicontinuous exactly when its strict sublevel sets are open, equivalently its weak superlevel sets are closed.

[F5] [[thm-euclidean-semicontinuous-extreme-value-theorem]] and [[lem-closed-subset-of-a-compact-space-is-compact]]: an upper semicontinuous real map on a nonempty compact Euclidean set attains its maximum, and a closed subset of a compact space is compact.

## Proof

1.1 Identify the symmetric matrices with their coordinates in $\mathbb R^{p^2}$. The dense class $K=\mathcal F_p(\beta M)$ is bounded because each entry satisfies $|\Gamma_{ij}|=|e_i^T\Gamma e_j|\le\|\Gamma\|_{\rm op}\le\beta M$ by [F3]. It is closed: if $\Gamma_k\to\Gamma$ coordinatewise with $\Gamma_k\in K$, then $\Gamma$ is symmetric, $v^T\Gamma v=\lim_k v^T\Gamma_kv\ge0$ for every $v$, and $\|\Gamma v\|_2=\lim_k\|\Gamma_kv\|_2\le\beta M\|v\|_2$ for every $v$. By the operator-norm definition in [F2], this gives $\|\Gamma\|_{\rm op}\le\beta M$. Thus $K$ is closed and bounded, so [F3] makes it compact. [F2, F3, algebra]

1.2 Fix $u$ and write $q(\Gamma)=u^T\Gamma u$ and $r_i=(u^Tx_i)^2$. If $\Gamma_k\to\Gamma$, then $q(\Gamma_k)\to q(\Gamma)$. For each $i$, if $r_i<q(\Gamma)$ or $r_i>q(\Gamma)$, the two weak-tail indicators eventually keep their limiting membership; if $r_i=q(\Gamma)$, the observation is counted in both weak tails at $\Gamma$. Therefore the limsup of each finite tail count is at most its value at $\Gamma$, and the limsup of their minimum is at most the minimum of their values there. The minimum of the two empirical tails is upper semicontinuous in $\Gamma$. The infimum over $u$ remains upper semicontinuous because each strict sublevel set of the infimum is the union of the corresponding open strict sublevel sets from [F4]. Hence $\Gamma\mapsto D_U(\Gamma,P_n)$ is upper semicontinuous on either search class. [F1, F4, algebra]

2.1 For each fixed $S\subseteq[p]$ with $|S|\le s$, requiring the off-diagonal entries outside $S\times S$ to vanish is a finite collection of closed coordinate equalities. Its intersection with the dense compact class is compact by [F5]. There are finitely many such $S$, and their union is $\mathcal F_{p,s}(\beta M)$ by [F2]. A finite union of compact sets is compact, since any open cover has a finite subcover on each of its finitely many members. [F2, F5, step 1.1]

3.1 Both applicable search classes are nonempty because they contain the zero matrix. By steps 1.1–1.2 they are compact Euclidean sets. By step 1.2, their empirical depth functions are upper semicontinuous, so [F5] gives a maximizer on each applicable class. Its argmax is the nonempty weak superlevel set at that maximum, closed by [F4] and compact by [F5]. This proves the claim. [F2, F4, F5, step 1.1, step 2.1, step 1.2, construct] ∎
