---
id: thm-direct-search-unsuccessful-poll-accumulations-are-stationary
kind: theorem
title: "Unsuccessful-poll accumulation points are stationary under shrinking mesh"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-deterministic-direct-search
  - def-positive-spanning-poll-set-and-angle
  - lem-positive-spanning-poll-set-has-uniform-angle
  - lem-compact-set-in-open-neighborhood-has-uniform-radius
  - lem-direct-search-local-descent-inequality
  - def-lipschitz-holder-contraction
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - lem-metrics-on-rn
  - thm-compact-implies-the-other-compactness-forms
  - def-metric-compactness
  - def-metric-convergence
  - def-sequence
  - def-total-derivative-in-euclidean-space
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. R. Conn, K. Scheinberg, and L. N. Vicente, Introduction to Derivative-Free Optimization, §§2.1–2.2 and ch. 8"
      url: https://ndl.ethernet.edu.et/bitstream/123456789/77202/1/18.pdf
    - title: "Tamara G. Kolda, Robert Michael Lewis, and Virginia Torczon, Optimization by Direct Search, §§3.1–3.6"
      url: https://www.kolda.net/publication/SIAM-42889.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Consider an infinite continuation of the polling and mesh-update rules of [[alg-deterministic-direct-search]], using its admissible inputs and exact branch rules but with no finite poll-budget cap. Write its fixed finite positive-spanning poll list as $D$ and its forcing function as $\rho$. Suppose a subsequence of unsuccessful polls indexed by $k_j$ has $\Delta_{k_j}\to0$ and centers $x_{k_j}$ in a compact set $K\subseteq V$, where $V\subseteq U$ is open. Assume $f:U\to\mathbb R$ is totally differentiable at every point of $V$ and $\nabla f$ is $L$-Lipschitz there. Here an accumulation point means a limit of a subsequence in the Euclidean metric. Then every such point is stationary, meaning $\nabla f(\bar x)=0$. Compactness ensures at least one such accumulation point. This asymptotic claim concerns the untruncated continuation; a finite-budget return is not a stationarity certificate.

## Facts & Assumptions

**Given:** The poll and forcing rules [[alg-deterministic-direct-search]], positive angle [[lem-positive-spanning-poll-set-has-uniform-angle]], uniform neighborhood radius [[lem-compact-set-in-open-neighborhood-has-uniform-radius]], local descent [[lem-direct-search-local-descent-inequality]], and compact metric sequential compactness [[thm-compact-implies-the-other-compactness-forms]].

[F1] There is $\kappa_D>0$ with $\max_i(-\langle u,d_i\rangle)\ge\kappa_D$ for every unit vector $u$ ([[lem-positive-spanning-poll-set-has-uniform-angle]]).

[F2] For sufficiently short displacements from any center in compact $K$, the segment remains in $V$ ([[lem-compact-set-in-open-neighborhood-has-uniform-radius]]).

[F3] If the segment $[x,x+h]$ lies in $V$, then $f(x+h)\le f(x)+\langle\nabla f(x),h\rangle+\frac{L}{2}\|h\|_2^2$ ([[lem-direct-search-local-descent-inequality]]).

[F4] A sequence is a function on the naturals, convergence is the metric limit, and every sequence in compact metric $K$ has a subsequence converging in $K$ ([[def-sequence]], [[def-metric-convergence]], [[thm-compact-implies-the-other-compactness-forms]], [[def-metric-compactness]]).

[F5] On $\mathbb R^n$ with $n\ge1$, the Euclidean metric is $d_2(x,y)=\|x-y\|_2$; thus the $L$-Lipschitz hypothesis gives $\|\nabla f(u)-\nabla f(v)\|_2\le L\|u-v\|_2$ ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]]).

[F6] The finite poll list has a largest norm $D_{\max}=\max_i\|d_i\|_2$ ([[def-positive-spanning-poll-set-and-angle]]).

## Proof

1.1 Use the defined finite maximum $D_{\max}$ from [F6], and choose the uniform radius $\delta>0$ from [F2]. For all sufficiently large $j$, $\Delta_{k_j}D_{\max}<\delta$, so every segment from $x_{k_j}$ to $x_{k_j}+\Delta_{k_j}d_i$ remains in $V$. [F2, F6, given, algebra]

2.1 If $\nabla f(x_{k_j})\ne0$, [F1] supplies a poll direction $d_i$ with $\langle\nabla f(x_{k_j}),d_i\rangle\le-\kappa_D\|\nabla f(x_{k_j})\|_2$. The poll is unsuccessful, so its in-domain trial value is at least $f(x_{k_j})-\rho(\Delta_{k_j})$. Apply [F3] to this direction and combine the two bounds to obtain $\kappa_D\|\nabla f(x_{k_j})\|_2\le\rho(\Delta_{k_j})/\Delta_{k_j}+(L\Delta_{k_j}/2)D_{\max}^2$. If the gradient is zero, the same inequality holds. [F1, F3, step 1.1, algebra]

3.1 The right side tends to zero by the forcing condition and $\Delta_{k_j}\to0$, while $\kappa_D>0$; hence $\|\nabla f(x_{k_j})\|_2\to0$. For any accumulation subsequence converging to $\bar x\in K$, [F5] gives $\|\nabla f(x_{k_j})-\nabla f(\bar x)\|_2\le L\|x_{k_j}-\bar x\|_2\to0$, so $\nabla f(\bar x)=0$. By [F4] at least one accumulation subsequence exists. [given, F4, F5, step 2.1, algebra] ∎

