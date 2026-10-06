---
id: lem-annulus-far-field-estimates-for-the-maximal-function
kind: lemma
title: Dyadic annulus far-field estimates for the maximal function
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-centered-and-uncentered-hardy-littlewood-maximal-functions, lem-euclidean-balls-have-positive-finite-lebesgue-measure, thm-lebesgue-measure-under-dilations-and-reflections, thm-lebesgue-measure-of-a-box-of-every-kind, thm-monotone-convergence-for-the-integral, prop-measure-monotonicity, def-countable-choice, def-locally-integrable-function-on-r-n, thm-polar-coordinates-formula-for-lebesgue-measure, thm-logarithm-derivative-and-integral]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§7.4.2, the estimate for $L_1$ in the proof of Theorem 7.4.3 (the display bounding $L_1$ by $C''_{n,\\delta}AM(f)(z_j)$ via Theorem 2.1.10), printed pp. 536-537; the radial-majorant estimate Theorem 2.1.10, printed p. 91"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "§§1.4-1.5, dyadic annulus domination by the maximal function, printed pp. 16-24"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$f\in L^1_{\mathrm{loc}}(\mathbb R^n)$, $z\in\mathbb R^n$, $r>0$ and
$\delta>0$. Then
$$\int_{|t-z|\ge r}|f(t)|\,|t-z|^{-n-\delta}\,dt\le C_{n,\delta}\,r^{-\delta}Mf(z),$$
where $M$ is the centred Hardy-Littlewood maximal function
([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]]) and
$C_{n,\delta}=2^{2n}(1-2^{-\delta})^{-1}$ depends only on $n$ and $\delta$.

## Facts & Assumptions

**Given:** Countable Choice, $f\in L^1_{\mathrm{loc}}(\mathbb R^n)$, $z\in\mathbb R^n$, $r>0$ and $\delta>0$.

[F1] For every locally integrable $f$ one has $Mf(z)=\sup_{\rho>0}\lambda(B(z,\rho))^{-1}\int_{B(z,\rho)}|f|\,d\lambda$, and each average is finite because $f$ is integrable over balls ([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]], [[def-locally-integrable-function-on-r-n]]).

[F2] Every ball $B(x,\rho)$ is Lebesgue measurable with $0<\lambda(B(x,\rho))<\infty$ ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]), the dilates of the unit ball satisfy $\lambda(B(0,\rho))=v_n\rho^n$ with $v_n=\lambda(B(0,1))\in(0,\infty)$ ([[thm-lebesgue-measure-under-dilations-and-reflections]]), and a ball is contained in the axis-parallel cube $Q(z,\rho)=\prod_i(z_i-\rho,z_i+\rho)$ of measure $(2\rho)^n$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F3] For a sequence of nonnegative measurable functions increasing to $g$, the integrals increase to $\int g$ ([[thm-monotone-convergence-for-the-integral]]).

[F4] If $A\subseteq B$ are measurable then $\int_A|f|\le\int_B|f|$ ([[prop-measure-monotonicity]]).

## Proof

**Proof technique:** Decompose the far field into dyadic annuli, bound each annulus by the maximal function through its measure, and sum the resulting geometric series.

1.1 The sets $A_k=\{t:2^kr\le|t-z|<2^{k+1}r\}$, $k\ge0$, are pairwise disjoint measurable sets whose union is $\{|t-z|\ge r\}$. Each partial sum $\sum_{k<K}|f|\,|t-z|^{-n-\delta}\mathbf 1_{A_k}$ increases with $K$ to $|f(t)||t-z|^{-n-\delta}\mathbf 1_{\{|t-z|\ge r\}}$, so monotone convergence [F3] gives $\int_{|t-z|\ge r}|f(t)||t-z|^{-n-\delta}dt=\sum_{k\ge0}\int_{A_k}|f(t)||t-z|^{-n-\delta}dt$, and every term is finite because $(2^kr)^{-n-\delta}\int_{B(z,2^{k+1}r)}|f|<\infty$ by [F1] and [F2]. [F1, F2, F3, given]

2.1 For $t\in A_k$ one has $|t-z|^{-n-\delta}\le(2^kr)^{-n-\delta}$, and $A_k\subseteq B(z,2^{k+1}r)\subseteq Q(z,2^{k+1}r)$, so [F4] and [F2] give $\int_{A_k}|f(t)||t-z|^{-n-\delta}dt\le(2^kr)^{-n-\delta}\int_{B(z,2^{k+1}r)}|f|\le(2^kr)^{-n-\delta}\lambda(B(z,2^{k+1}r))Mf(z)\le(2^kr)^{-n-\delta}(2^{k+2}r)^nMf(z)=2^{2n}2^{-k\delta}r^{-\delta}Mf(z)$. [F1, F2, F4, step 1.1, algebra]

3.1 Summing the geometric series in step 2.1 with ratio $2^{-\delta}<1$ gives $\int_{|t-z|\ge r}|f(t)||t-z|^{-n-\delta}dt\le2^{2n}(1-2^{-\delta})^{-1}r^{-\delta}Mf(z)$, which is the asserted inequality with $C_{n,\delta}=2^{2n}(1-2^{-\delta})^{-1}$. [step 1.1, step 2.1, algebra] ∎

**Why the exponent range is $\delta>0$.** The endpoint $\delta=0$ is not available: for the locally integrable function $f=\mathbf 1_{B(0,R)}$, the point $z=0$ and $r=1$ one has $Mf(0)=1$, while $\int_{|t|\ge1}|f(t)||t|^{-n}dt=\int_{1\le|t|\le R}|t|^{-n}dt=|\mathbb S^{n-1}|\log R$ grows without bound as $R\to\infty$, by [[thm-polar-coordinates-formula-for-lebesgue-measure]] and [[thm-logarithm-derivative-and-integral]]. Hence no constant independent of $R$ can bound that integral by $Mf(0)$; the divergence of $\sum_{k\ge0}2^{-k\delta}$ at $\delta=0$ is not removable, and only exponents $\delta>0$ occur in the Hölder estimates for standard kernels used on this page.
