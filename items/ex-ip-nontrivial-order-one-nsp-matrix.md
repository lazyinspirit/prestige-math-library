---
id: ex-ip-nontrivial-order-one-nsp-matrix
kind: example
title: "A nontrivial three-column matrix with the nullspace property"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-nullspace-property
  - def-p-norms-on-rn
  - lem-p-norms-are-norms-and-induce-the-published-metrics
  - thm-ip-basis-pursuit-exact-recovery-under-nsp
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  scraped: []
  references: []
---

## Example

Let
$$A=\begin{pmatrix}1&-1&0\\1&0&1\end{pmatrix}\in M_{2\times3}(\mathbb R)$$
and $s=1$, using one-based coordinate labels $j=1,2,3$ corresponding to
library indices $j-1$. Then $\ker A=\{\lambda(1,1,-1):\lambda\in\mathbb R\}$,
$A$ satisfies the
strict nullspace property of order $1$, and every vector $x^\dagger\in\mathbb
R^3$ with at most one nonzero coordinate is the unique minimizer of
$$\sum_{j=1}^3|z_j|$$
subject to $Az=Ax^\dagger$.

## Example references

[[def-ip-nullspace-property|Strict nullspace property and coordinate conventions]]

[[def-p-norms-on-rn|Finite-dimensional one-norm]]

[[thm-ip-basis-pursuit-exact-recovery-under-nsp|Exact recovery under the strict nullspace property]]

## Facts & Assumptions

**Given:** The matrix $A=\begin{pmatrix}1&-1&0\\1&0&1\end{pmatrix}$ and sparsity order $s=1$.

[F1] [[def-ip-nullspace-property]]: strict NSP requires $\|h_S\|_1<\|h_{S^c}\|_1$ for each nonzero kernel vector and every $S$ with $|S|\le s$.

[F2] [[def-p-norms-on-rn]]: the $\ell_1$ norm is the sum of coordinate absolute values.

[F3] [[thm-ip-basis-pursuit-exact-recovery-under-nsp]]: a matrix with strict NSP of order $s$ uniquely recovers every vector with at most $s$ nonzero coordinates by exact $\ell_1$ minimization.

[F4] [[lem-p-norms-are-norms-and-induce-the-published-metrics]]: the defined $\ell_1$ function is a norm on $\mathbb R^3$.

[F5] [[def-ip-nullspace-property]]: under its coordinate relabeling, $(Au)_i=\sum_{j=1}^n A_{ij}u_j$ for each row $i$.

## Verification

1.1 For $h=(u,v,w)$, the row formula [F5] gives $Ah=(u-v,u+w)$, so $Ah=0$ exactly when $v=u$ and $w=-u$. Hence $\ker A=\{\lambda(1,1,-1):\lambda\in\mathbb R\}$. [given, F5, algebra]

2.1 Write a nonzero kernel vector as $h=\lambda(1,1,-1)$ with $\lambda\ne0$. If $S=\varnothing$, then $\|h_S\|_1=0<3|\lambda|=\|h_{S^c}\|_1$. If $S$ is a singleton, then $\|h_S\|_1=|\lambda|<2|\lambda|=\|h_{S^c}\|_1$. These are all sets with $|S|\le1$, so [F1] holds. [given, F1, F2, step 1.1, algebra]

3.1 Applying [F3] with $s=1$ now gives the claimed unique minimizer for every vector with at most one nonzero coordinate; [F2] identifies the objective formula as the $\ell_1$ norm by [F4]. [given, F2, F3, F4, step 2.1] ∎
