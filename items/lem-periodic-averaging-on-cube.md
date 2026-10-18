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
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - cor-vector-valued-ftc-and-lipschitz-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Grégoire Allaire, Introduction to Homogenization Theory, Lecture 1"
      url: "https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf"
      locator: "§1.3.1, Lemma 1.3.2, PDF p. 15: periodic weak averaging; the local cell-tiling argument also proves the stated L1 variant."
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 1 §1.2, Proposition 1.2.2, printed pp. 12–13: weak averaging of periodic rescalings."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Statement

Let $Y=(0,1)^d$, $Q=(0,1)^d$, $g\in L^1(Y)$ be extended $\mathbb Z^d$-periodically, and $\varphi\in C_c^1(Q)$. As $\epsilon\downarrow0$,
$$\int_Q\varphi(x)g(x/\epsilon)\,dx\longrightarrow\left(\int_Yg\right)\left(\int_Q\varphi\right).$$
If $g\in L^2(Y)$ and $0<\epsilon\le1$, then $\|g(\cdot/\epsilon)\|_{L^2(Q)}\le C_d\|g\|_{L^2(Y)}$. In particular, for $g\in L^2(Y)$, $g(\cdot/\epsilon)\rightharpoonup\int_Yg$ weakly in $L^2(Q)$.

## Facts & Assumptions

**Given:** A periodic $L^1$ or $L^2$ function on the unit cell, a compactly supported $C^1$ slow factor, cell tiling by $\epsilon(k+Y)$, affine change of variables for Lebesgue-measurable functions, Cauchy--Schwarz, and smooth density in $L^2(Q)$.

[F1] [[thm-holder-inequality-for-integrals]]: integral Cauchy--Schwarz holds on $Q$ and on each cell.

[F2] [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]: $C_c^\infty(Q)$ is dense in $L^2(Q)$.

[F3] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: affine pullbacks preserve the measurability and almost-everywhere class of periodic functions and transform nonnegative integrals by the determinant.

[F4] [[cor-vector-valued-ftc-and-lipschitz-bound]]: the bounded gradient of the $C^1$ slow factor gives $|\varphi(x)-\varphi(x_k)|\le\|\nabla\varphi\|_\infty|x-x_k|$ along each line segment in a grid cell.

[A1] [[def-countable-choice]]: the periodic representatives and $L^2$ classes use the stated Countable Choice convention.

## Proof




1.1 Tile $\mathbb R^d$ by cells $C_k^\epsilon=\epsilon(k+Y)$. Only $O_d(\epsilon^{-d})$ cells meet the fixed compact support of $\varphi$. On each such cell choose its lower corner $x_k=\epsilon k$. The mean-value bound gives $|\varphi(x)-\varphi(x_k)|\le\sqrt d\epsilon\|\nabla\varphi\|_\infty$. By [F3], $\int_{C_k^\epsilon}|g(x/\epsilon)|dx=\epsilon^d\|g\|_{L^1(Y)}$. Therefore replacing $\varphi$ by $\varphi(x_k)$ on every intersecting cell changes the integral by at most $C\epsilon\|g\|_1\|\nabla\varphi\|_\infty$; for sufficiently small $\epsilon$, every such cell is contained in $Q$ because the support is compact in $Q$. Extend $\varphi$ by zero to a compactly supported $C^1$ function on $\mathbb R^d$. For all sufficiently small $\epsilon$, the grid sum has only cells in a fixed bounded box, and $$\left|\epsilon^d\sum_k\varphi(\epsilon k)-\int_{\mathbb R^d}\varphi(x)\,dx\right|\le\sum_k\int_{C_k^\epsilon}|\varphi(\epsilon k)-\varphi(x)|\,dx\le C\epsilon\|\nabla\varphi\|_\infty,$$ since the total volume of those cells is uniformly bounded. Thus the grid Riemann sums converge. By [F3], the change-of-variables identity first holds for $g^+$ and $g^-$ separately; subtracting their finite integrals gives $\int_{C_k^\epsilon}g(x/\epsilon)\,dx=\epsilon^d\int_Yg$ for signed $g$. The cell-corner sum is therefore $\epsilon^d\sum_k\varphi(\epsilon k)\int_Yg$, which converges to the stated mean times integral. [F3, F4, given, algebra]


1.2 The same tiling bounds the $L^2$ rescaling: each cell has $\int_{C_k^\epsilon}|g(x/\epsilon)|^2dx=\epsilon^d\|g\|_2^2$ by [F3], and at most $C_d\epsilon^{-d}$ cells meet $Q$ when $\epsilon\le1$. Summing gives the asserted uniform bound. [F1, F3, algebra]


2.1 The averaging result applied to every $C_c^\infty(Q)$ test gives convergence of pairings against that dense class. The uniform $L^2$ bound in step 1.2, together with $|\int_Yg|\le\|g\|_2$, lets one approximate an arbitrary $L^2(Q)$ test by [F2] and pass the pairing limit. This proves weak $L^2$ convergence. [step 1.2, F2, F1, step 1.1, A1, algebra] ∎

