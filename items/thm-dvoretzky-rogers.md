---
id: thm-dvoretzky-rogers
kind: theorem
title: "Dvoretzky--Rogers theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, lem-dvoretzky-rogers-finite-block-estimate, thm-unconditional-convergence-equivalences]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: construction
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "A. Dvoretzky and C. A. Rogers, Absolute and Unconditional Convergence in Normed Linear Spaces"
      url: "https://eclass.uoa.gr/modules/document/file.php/MATH195/4.%20%CE%86%CF%81%CE%B8%CF%81%CE%B1%20%CE%95%CF%80%CE%B9%CF%83%CE%BA%CF%8C%CF%80%CE%B7%CF%83%CE%B7%CF%82/8-Dvoretzky_Rogers.pdf"
      locator: "Theorem 2 and proof, PNAS 36 (1950), p.195"
pipeline_run: phase-2-next-18
---

## Statement

Assume Countable Choice. Every infinite-dimensional real or complex Banach
space contains an unconditionally convergent series that is not absolutely
convergent.

## Facts & Assumptions

[A1] Countable Choice holds ([[def-countable-choice]]).

[L1] Each sufficiently high-dimensional finite block admits vectors with
prescribed squared norms and the uniform subset-sum estimate
([[lem-dvoretzky-rogers-finite-block-estimate]]).

[L2] Uniform smallness of all finite tails is equivalent to unconditional
convergence in a Banach space
([[thm-unconditional-convergence-equivalences]]).

## Proof

**Proof technique:** construction.

**Given:** The objects and hypotheses in the Statement.

1.1 Put $c_n=(8n^2)^{-1}$ for $n\ge1$. Since $\sum_{n\ge1}n^{-2}<2$, we have $\sum_nc_n<1/4$, while $\sum_n\sqrt{c_n}=8^{-1/2}\sum_n1/n=\infty$. Put $N_1=1$ and, for $m\ge2$, recursively take $N_m$ to be the least integer greater than $N_{m-1}$ such that $\sum_{n\ge N_m}c_n<4^{-m}$. Thus [given]

$$\sum_m\left(\sum_{N_m\le n<N_{m+1}}c_n\right)^{1/2}<\infty.$$

[explicit least-index recursion, scalar series]

2.1 Let $r_m=N_{m+1}-N_m$. Infinite-dimensionality supplies a subspace of dimension at least $r_m(r_m-1)$ (the cases $r_m\le1$ are chosen directly). Use [A1] exactly here to select, for all $m$, one family $(x_n)_{N_m\le n<N_{m+1}}$ given by [L1] with $d_n=c_n$. Then $\|x_n\|=1/(\sqrt8n)$ and every subset $F$ of the $m$th block satisfies [given, A1, L1, step 1.1]

$$\left\|\sum_{n\in F}x_n\right\| \le\sqrt3\left(\sum_{n\in F}c_n\right)^{1/2}.$$

[A1, L1, step 1.1]

3.1 For any finite set $F$ contained in the tail beginning at $N_M$, split it by blocks and use the triangle inequality and step 2.1: [given, L2, step 2.1, step 1.1]

$$\left\|\sum_{n\in F}x_n\right\| \le\sqrt3\sum_{m\ge M} \left(\sum_{N_m\le n<N_{m+1}}c_n\right)^{1/2}.$$

The right side tends to zero by step 1.1. Condition (3) of [L2] therefore holds,
so $\sum_nx_n$ converges unconditionally. [L2, steps 1.1, 2.1]

4.1 On the other hand, [given, step 2.1, step 3.1] $\sum_n\|x_n\|=8^{-1/2}\sum_n1/n=\infty$, so the same series is not absolutely convergent. [step 2.1, algebra] ∎