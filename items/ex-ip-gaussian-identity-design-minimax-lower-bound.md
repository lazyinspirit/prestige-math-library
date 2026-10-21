---
id: ex-ip-gaussian-identity-design-minimax-lower-bound
kind: example
title: "Identity design: noiseless recovery and a noisy minimax lower bound"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-matrix-product-and-identity-matrix
  - def-ip-nullspace-property
  - def-p-norms-on-rn
  - lem-p-norms-are-norms-and-induce-the-published-metrics
  - thm-gaussian-sparse-sequence-minimax-lower-bound
  - thm-ip-basis-pursuit-exact-recovery-under-nsp
  - lem-finite-sum-laws
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  scraped: []
  references: []
---

## Example

Assume the Axiom of Choice. Let $n,d,s\in\mathbb N$ with $n\ge1$, $d\ge2$,
$1\le s\le d/2$, and
$\sigma>0$. Use one-based coordinate labels $j=1,\ldots,d$, with coordinate
$j$ identified with the library's coordinate $j-1$, and put
$$\Theta_{s,d}:=\{\theta\in\mathbb R^d:|\{j\in\{1,\ldots,d\}:\theta_j\ne0\}|\le s\},$$
and let $I_d$ be the $d\times d$ identity matrix. For
$\theta\in\Theta_{s,d}$, observe independent coordinates
$$Y_j\sim N\bigl((I_d\theta)_j,\sigma^2/n\bigr),\qquad 1\le j\le d.$$
The zero kernel of $I_d$ implies the strict nullspace property of order $s$,
so the noiseless basis-pursuit problem uniquely recovers each $s$-sparse
$\theta$. In this noisy Gaussian model, every Borel estimator
$T:\mathbb R^d\to\mathbb R^d$ satisfies
$$\sup_{\theta\in\Theta_{s,d}}\mathbb E_\theta\left[\sum_{j=1}^d(T(Y)_j-\theta_j)^2\right]\ge \frac{\sigma^2s\log(ed/s)}{200000n}.$$

## Example references

[[def-axiom-of-choice|Axiom of Choice]]

[[def-ip-nullspace-property|Strict nullspace property and coordinate conventions]]

[[def-p-norms-on-rn|Finite-dimensional one-norm and two-norm]]

[[def-matrix-product-and-identity-matrix|Identity matrix and matrix multiplication]]

[[thm-ip-basis-pursuit-exact-recovery-under-nsp|Exact recovery under the strict nullspace property]]

[[thm-gaussian-sparse-sequence-minimax-lower-bound|Gaussian sparse-sequence minimax lower bound]]

## Facts & Assumptions

**Given:** The Axiom of Choice; integers $n\ge1$, $d\ge2$, and $1\le s\le d/2$; $\sigma>0$; the class $\Theta_{s,d}$ and independent Gaussian observation law in the Example; and a Borel estimator $T:\mathbb R^d\to\mathbb R^d$.

[A1] [[def-axiom-of-choice]]: the Axiom of Choice states that every family of nonempty sets has a choice function; the minimax supplier used below explicitly assumes this axiom.

[F1] [[def-ip-nullspace-property]]: the strict nullspace property tests every nonzero $h\in\ker A$; if $\ker A=\{0\}$, the condition is vacuous for every admissible order $1\le s\le d$.

[F2] [[thm-ip-basis-pursuit-exact-recovery-under-nsp]]: strict NSP of order $s$ implies unique noiseless $\ell_1$ recovery for every vector with at most $s$ nonzero coordinates.

[F3] [[thm-gaussian-sparse-sequence-minimax-lower-bound]]: under AC, for $n,d\ge1$, $\sigma>0$, and $1\le s\le d/2$, independent $N(\theta_j,\sigma^2/n)$ coordinates over $\Theta_{s,d}$ give every Borel estimator squared-$\ell_2$ risk at least $\sigma^2s\log(ed/s)/(200000n)$ in the worst case.

[F4] [[def-p-norms-on-rn]]: $\|u\|_2^2=\sum_{j=1}^d u_j^2$ for $u\in\mathbb R^d$.

[F5] [[lem-p-norms-are-norms-and-induce-the-published-metrics]]: the defined $\ell_2$ function is a norm on $\mathbb R^d$.

[F6] [[def-matrix-product-and-identity-matrix]]: $I_d$ has diagonal entries $1$ and off-diagonal entries $0$.

[F7] [[def-ip-nullspace-property]]: $(Au)_i=\sum_{j=1}^d A_{ij}u_j$ under the one-based coordinate relabeling.

[F8] [[lem-finite-sum-laws]]: finite sums split at an index, and the sum of a list with exactly one nonzero term is that term.

## Verification

1.1 For each $i\in[d]$, [F6] and [F7] give $(I_dh)_i=\sum_{j=1}^d \delta_{ij}h_j=h_i$ by [F8], so $I_dh=0$ forces $h=0$ and $\ker I_d=\{0\}$. Hence $I_d$ satisfies strict NSP of order $s$ vacuously by [F1], and [F2] gives unique noiseless $\ell_1$ recovery for every $\theta\in\Theta_{s,d}$. [given, F1, F2, F6, F7, F8, algebra]

2.1 For each $\theta\in\Theta_{s,d}$, $(I_d\theta)_j=\theta_j$, so the stated independent observation coordinates have exactly the Gaussian sequence laws in [F3]. The parameter, sample-size, noise, sparsity, estimator, and AC hypotheses in [A1] and [F3] are all among the Given; applying [F3] proves the displayed minimax lower bound in its sum-of-squares form by [F4], where [F5] confirms that the displayed squared error is the squared Euclidean norm. [given, A1, F3, F4, F5, algebra] ∎
