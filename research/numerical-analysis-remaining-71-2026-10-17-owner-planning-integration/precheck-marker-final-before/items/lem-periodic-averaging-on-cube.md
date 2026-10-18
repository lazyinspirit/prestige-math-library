---
id: lem-periodic-averaging-on-cube
kind: lemma
title: Periodic averaging and rescaling bounds on the unit cube
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-periodic-zero-mean-cell-space
  - def-countable-choice
  - thm-holder-inequality-for-integrals
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Grégoire Allaire, Introduction to Homogenization Theory, Lecture 1"
      url: "https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf"
      locator: "Lemma 1.3.2 and its proof, PDF pp. 12–13: periodic averaging on bounded sets."
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 1 §1.3, printed pp. 14–19: periodic oscillations and weak averaging."
verification:
  precheck: n/a
---
## Statement

Let $Y=(0,1)^d$, $Q=(0,1)^d$, $g\in L^1(Y)$ be extended $\mathbb Z^d$-periodically, and $\varphi\in C_c^1(Q)$. As $\epsilon\downarrow0$,
$$\int_Q\varphi(x)g(x/\epsilon)\,dx\longrightarrow\left(\int_Yg\right)\left(\int_Q\varphi\right).$$
If $g\in L^2(Y)$ and $0<\epsilon\le1$, then $\|g(\cdot/\epsilon)\|_{L^2(Q)}\le C_d\|g\|_{L^2(Y)}$. In particular, for $g\in L^2(Y)$, $g(\cdot/\epsilon)\rightharpoonup\int_Yg$ weakly in $L^2(Q)$.

## Facts & Assumptions

**Given:** A periodic $L^1$ or $L^2$ function on the unit cell, a compactly supported $C^1$ slow factor, cell tiling by $ε(k+Y)$, Cauchy--Schwarz, and smooth density in $L^2(Q)$.

[F1] [[thm-holder-inequality-for-integrals]]: integral Cauchy--Schwarz holds on $Q$ and on each cell.

[F2] [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]: $C_c^\infty(Q)$ is dense in $L^2(Q)$.

[A1] [[def-countable-choice]]: the periodic representatives and $L^2$ classes use the stated Countable Choice convention.

## Proof




1.1 Tile $\mathbb R^d$ by cells $C_k^\epsilon=\epsilon(k+Y)$. Only $O_d(\epsilon^{-d})$ cells meet the fixed compact support of $\varphi$. On each such cell choose its lower corner $x_k=\epsilon k$. The mean-value bound gives $|\varphi(x)-\varphi(x_k)|\le\sqrt d\epsilon\|\nabla\varphi\|_\infty$. By change of variables, $\int_{C_k^\epsilon}|g(x/\epsilon)|dx=\epsilon^d\|g\|_{L^1(Y)}$. Therefore replacing $\varphi$ by $\varphi(x_k)$ on every full intersecting cell changes the integral by at most $C\epsilon\|g\|_1\|\nabla\varphi\|_\infty$; cells meeting the support boundary satisfy the same estimate because $\varphi$ vanishes outside its compact support. The resulting sum is $\|g\|_1$ times the Riemann sum $\epsilon^d\sum_k\varphi(\epsilon k)$, which converges to $\|g\|_1\int_Q\varphi$ if $g$ is nonnegative; for signed $g$, applying the cell calculation with the signed cell integral gives instead $\epsilon^d\sum_k\varphi(\epsilon k)\int_Yg$. This tends to the stated mean times integral. [given, algebra]

1.2 The same tiling bounds the $L^2$ rescaling: each cell has $\int_{C_k^\epsilon}|g(x/\epsilon)|^2dx=\epsilon^d\|g\|_2^2$, and at most $C_d\epsilon^{-d}$ cells meet $Q$ when $\epsilon\le1$. Summing gives the asserted uniform bound. [F1, algebra]

2.1 The averaging result applied to every $C_c^\infty(Q)$ test gives convergence of pairings against that dense class. The uniform $L^2$ bound in step 1.2, together with $|\int_Yg|\le\|g\|_2$, lets one approximate an arbitrary $L^2(Q)$ test by [F2] and pass the pairing limit. This proves weak $L^2$ convergence. [step 1.2, F2, F1, step 1.1, A1, algebra] ∎
