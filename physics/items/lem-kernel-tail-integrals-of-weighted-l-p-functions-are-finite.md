---
id: lem-kernel-tail-integrals-of-weighted-l-p-functions-are-finite
kind: lemma
title: Kernel tail integrals of weighted L-p functions are finite
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [lem-a-p-weighted-average-comparison-and-density-to-mass, lem-a-infinity-weights-satisfy-power-decay, def-muckenhoupt-a-infinity-class, def-weight-and-weighted-lp-space, def-muckenhoupt-a-p-and-a-one-weights, thm-complex-holder-minkowski-and-the-quotient-norm, def-maximal-truncated-singular-integral, def-countable-choice, thm-tonelli-theorem-for-sigma-finite-product-spaces, lem-complex-translation-and-approximate-identity-interfaces, thm-dominated-convergence, thm-monotone-convergence-for-the-integral]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Lemma 7.4.5 and its proof, printed pp. 539-540"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "The weighted average inequality (4.20) used for the local-integrability conclusion, printed p. 79"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$1\le p<\infty$, $w\in A_p$
([[def-muckenhoupt-a-p-and-a-one-weights]]), and let $k:\mathbb R^n\setminus\{0\}\to\mathbb C$ be measurable and satisfy the pointwise
size bound $|k(y)|\le A_1|y|^{-n}$ for $y\ne0$. Then for every $f\in L^p(w)$,
every $x\in\mathbb R^n$ and every $\varepsilon>0$,
$$\int_{|y|\ge\varepsilon}|k(y)|\,|f(x-y)|\,dy\le C(n,p,[w]_{A_p})\,A_1\,w(Q(x,\varepsilon))^{-1/p}\|f\|_{L^p(w)},$$
a finite bound depending only on the stated data and on the cube
$Q(x,\varepsilon)$. Consequently the truncated singular integrals
$T_\varepsilon f$ and $T^{(\varepsilon,N)}f$
([[def-maximal-truncated-singular-integral]]) are defined at every point by
absolutely convergent integrals, and they are Borel measurable functions of the
centre $x$.

## Facts & Assumptions

**Given:** Countable Choice, $1\le p<\infty$, $w\in A_p$, the size bound $|k(y)|\le A_1|y|^{-n}$, $f\in L^p(w)$, $x\in\mathbb R^n$ and $\varepsilon>0$.

[F1] Write $D_p=[w]_{A_p}^{1/p}$ for $p>1$ and $D_1=c_n[w]_{A_1}$. Weighted average comparison: for every cube $Q$ and nonnegative measurable $g$, $\langle g\rangle_Q\le D_p(w(Q)^{-1}\int_Qg^pw)^{1/p}$, so $\int_Q|f|\le D_p|Q|w(Q)^{-1/p}\|f\|_{L^p(w)}$ ([[lem-a-p-weighted-average-comparison-and-density-to-mass]]).

[F2] Power decay: since $w\in A_\infty$ ([[def-muckenhoupt-a-infinity-class]]), there are $C,\delta>0$, depending only on $n$ and the data of a witnessing exponent, with $w(E)/w(Q)\le C(|E|/|Q|)^\delta$ for measurable $E\subseteq Q$ ([[lem-a-infinity-weights-satisfy-power-decay]]).

[F3] $w\,d\lambda$ is a locally finite measure and $0<w(Q)<\infty$ for every cube $Q$ ([[def-weight-and-weighted-lp-space]], [[def-muckenhoupt-a-p-and-a-one-weights]]).

[F4] Monotone convergence passes through increasing nonnegative sums ([[thm-monotone-convergence-for-the-integral]]). For a jointly measurable nonnegative integrand, the integral over a product space may be computed by iterated integrals ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]), and $\|f\|_{L^p(w)}^p=\int|f|^pw\,d\lambda$ ([[def-weight-and-weighted-lp-space]]).

[F5] Translations are norm-continuous in complex $L^1$ ([[lem-complex-translation-and-approximate-identity-interfaces]]); dominated convergence applies under an integrable majorant ([[thm-dominated-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Cover $\{|y|\ge\varepsilon\}$ by the annuli $A_j=\{2^j\varepsilon\le|y|<2^{j+1}\varepsilon\}$, $j\ge0$, which are pairwise disjoint with union $\{|y|\ge\varepsilon\}$ and each contained in the ball $B(x,2^{j+2}\varepsilon)$ after the substitution $y\mapsto x-y$. Hence $\int_{|y|\ge\varepsilon}|k(y)||f(x-y)|dy\le\sum_{j\ge0}(2^j\varepsilon)^{-n}A_1\int_{A_j}|f(x-y)|dy\le\sum_{j\ge0}(2^j\varepsilon)^{-n}A_1\int_{Q(x,2^{j+2}\varepsilon)}|f|$ by monotone convergence and monotonicity of the integral. [F4, given, algebra]

1.2 For each $j\ge0$ put $Q_j:=Q(x,2^{j+2}\varepsilon)$ and $R:=Q(x,\varepsilon)$. By [F1], $\int_{Q_j}|f|\le D_p|Q_j|w(Q_j)^{-1/p}\|f\|_{L^p(w)}$, while $(2^j\varepsilon)^{-n}|Q_j|=(2^j\varepsilon)^{-n}(2^{j+3}\varepsilon)^n=2^{3n}$ is a dimensional constant. By [F2] applied to $R\subseteq Q_j$, $w(R)/w(Q_j)\le C(|R|/|Q_j|)^\delta=C2^{-(j+2)n\delta}$, so $w(Q_j)^{-1/p}\le C^{1/p}2^{-(j+2)n\delta/p}w(R)^{-1/p}$. [F1, F2, F3, given, algebra]

2.1 Substituting the bounds of step 1.2 into step 1.1 gives $\int_{|y|\ge\varepsilon}|k(y)||f(x-y)|dy\le2^{3n}D_pC^{1/p}A_1\|f\|_{L^p(w)}w(R)^{-1/p}\sum_{j\ge0}2^{-(j+2)n\delta/p}$, and the geometric series converges because $\delta>0$; this is the asserted finite bound with $C(n,p,[w]_{A_p})=2^{3n}D_pC^{1/p}(1-2^{-n\delta/p})^{-1}2^{-2n\delta/p}$. [F2, step 1.1, step 1.2, given, algebra]

3.1 The estimate proves absolute convergence of every truncation. For fixed $0<\varepsilon<N$, the annular kernel is bounded and compactly supported. Near a fixed $x_0$, truncate $f$ to a bounded ball containing all arguments $x-y$ under consideration, obtaining an $L^1$ function $f_0$. Then $|T^{(\varepsilon,N)}f(x+h)-T^{(\varepsilon,N)}f(x)|\le A_1\varepsilon^{-n}\|f_0(\cdot+h)-f_0\|_1\to0$ by [F5]. Thus each finite truncation is continuous and Borel. Dominated convergence gives $T_\varepsilon f=\lim_{N\to\infty}T^{(\varepsilon,N)}f$, which is Borel. Continuity of the defining integrals in the cutoff radii follows from absolute integrability and null spherical boundaries, so rational cutoffs suffice in both maximal suprema; these maximal functions are Borel as well. [F5, step 2.1, given, algebra] ∎
