---
id: lem-ltwo-almost-orthogonality-of-dyadic-pieces
kind: lemma
title: "L2 almost orthogonality of the dyadic pieces"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-inhomogeneous-dyadic-frequency-partition, lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition, lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds, thm-plancherel, lem-ltwo-fourier-multiplier-bound, thm-young-convolution-inequality, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p, def-complex-lp-and-euclidean-test-function-conventions, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "(6.1.1) and the proof of Theorem 6.1.2 at $p=2$, (6.1.9), printed pp. 419-422"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Corollary 5.4, the hypothesis $\\sum_j|\\psi_j|^2\\sim1$, printed p. 24"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "(5.21), the dual square-function estimate, printed p. 21"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). For every
$f\in L^2(\mathbb R^n;\mathbb C)$,
$$\sum_{j\ge0}\|\Delta_jf\|_{L^2}^2\le\|f\|_{L^2}^2\le3\sum_{j\ge0}\|\Delta_jf\|_{L^2}^2 .$$
In particular $\sum_{j\ge0}\|\Delta_jf\|_{L^2}^2<\infty$. The constants $1$ and
$3$ depend on no parameter beyond the fixed partition.

## Facts & Assumptions

**Given:** the fixed partition $(\varphi_j)$ and operators $\Delta_j$ of [[def-inhomogeneous-dyadic-frequency-partition]]; a function $f\in L^2(\mathbb R^n;\mathbb C)$; the Plancherel isometry $\mathcal F_2$ and the complex $L^2$ conventions of [[def-complex-lp-and-euclidean-test-function-conventions]].

[F1] Each $\varphi_j\in C_c^\infty(\mathbb R^n)$ satisfies $0\le\varphi_j\le1$, the pointwise bounds $\tfrac13\le\sum_{j\ge0}\varphi_j(\xi)^2\le1$ with a locally finite sum, and for $f\in\mathcal S$ the function $\Delta_jf$ lies in $\mathcal S$ with $\widehat{\Delta_jf}=\varphi_j\widehat f$ ([[lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition]], [[def-inhomogeneous-dyadic-frequency-partition]]).

[F2] Plancherel: $\mathcal F_2:L^2(\mathbb R^n;\mathbb C)\to L^2(\mathbb R^n;\mathbb C)$ is a surjective isometry preserving the first-variable-linear inner product, so $\|g\|_2^2=\int|\mathcal F_2g|^2$ and $\langle g,h\rangle=\langle\mathcal F_2g,\mathcal F_2h\rangle$ ([[thm-plancherel]]).

[F3] The multiplier by a symbol $m$ with $\|m\|_\infty\le M$ that belongs to $C_c^\infty$ extends uniquely from $\mathcal S$ to a bounded operator on $L^2$ of norm at most $M$, given by $\mathcal F_2^{-1}(m\,\mathcal F_2g)$ ([[lem-ltwo-fourier-multiplier-bound]]).

[F4] For $g\in L^2$ and $j\ge0$, the convolution representative $\Delta_jg=g*K_j$ lies in $L^2$ with $\|\Delta_jg\|_2\le\|K_j\|_1\|g\|_2\le C\|g\|_2$, the constant being uniform in $j$ ([[thm-young-convolution-inequality]], [[lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds]]).

[F5] The smooth compactly supported functions are dense in $L^2(\mathbb R^n;\mathbb C)$ ([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]]): there is a sequence $f_k\in C_c^\infty\subset\mathcal S$ with $f_k\to f$ in $L^2$.

[F6] Tonelli's theorem for nonnegative measurable functions on sigma-finite products, in particular for summation in a discrete index against Lebesgue measure ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 The Schwartz case. Let $f\in\mathcal S$. For every $j$, [F1] gives $\Delta_jf\in\mathcal S$ with $\widehat{\Delta_jf}=\varphi_j\widehat f$; by Plancherel [F2] applied to $g=\Delta_jf$ and to $f$, $\|\Delta_jf\|_2^2=\int_{\mathbb R^n}|\widehat{\Delta_jf}|^2=\int_{\mathbb R^n}\varphi_j^2|\widehat f|^2$ and $\|f\|_2^2=\int|\widehat f|^2$. [F1, F2, algebra]

2.1 Summing the Schwartz identity. With $f\in\mathcal S$ as in step 1.1, the series $\sum_j\varphi_j(\xi)^2$ is locally finite with $\sum_j\varphi_j^2\in[1/3,1]$ pointwise by [F1], so Tonelli's theorem [F6] applied to the nonnegative functions $|\varphi_j\widehat f|^2$ gives $\sum_{j\ge0}\|\Delta_jf\|_2^2=\int_{\mathbb R^n}\bigl(\sum_{j\ge0}\varphi_j(\xi)^2\bigr)|\widehat f(\xi)|^2\,d\xi$, and the pointwise bounds sandwich this between $\tfrac13\int|\widehat f|^2=\tfrac13\|f\|_2^2$ and $\int|\widehat f|^2=\|f\|_2^2$. This proves the two-sided estimate, and the finiteness of $\sum_j\|\Delta_jf\|_2^2$, for Schwartz $f$. [F1, F2, F6, step 1.1, algebra]

2.2 The identity $\widehat{\Delta_jg}=\varphi_j\widehat g$ passes to $L^2$. For $j\ge0$ both maps $g\mapsto\Delta_jg=g*K_j$ and $g\mapsto\mathcal F_2^{-1}(\varphi_j\mathcal F_2g)$ are bounded linear operators on $L^2$ by [F3] and [F4], and they agree on the dense subspace $\mathcal S$ by step 1.1 and [F3]; given $g\in L^2$ and a sequence $g_k\in\mathcal S$ with $g_k\to g$ from [F5], both operators applied to $g_k$ converge in $L^2$ to their values at $g$, so $\Delta_jg=\mathcal F_2^{-1}(\varphi_j\mathcal F_2g)$ and hence $\|\Delta_jg\|_2^2=\int\varphi_j^2|\mathcal F_2g|^2$ for every $j$. [F3, F4, F5, step 1.1, algebra]

3.1 Conclusion. For $g\in L^2$, step 2.2 gives $\|\Delta_jg\|_2^2=\int\varphi_j^2|\mathcal F_2g|^2$ for every $j$, and Tonelli [F6] then gives $\sum_{j\ge0}\|\Delta_jg\|_2^2=\int\bigl(\sum_j\varphi_j^2\bigr)|\mathcal F_2g|^2$; the pointwise bounds $\tfrac13\le\sum_j\varphi_j^2\le1$ and $\|g\|_2^2=\int|\mathcal F_2g|^2$ from Plancherel [F2] yield $\tfrac13\|g\|_2^2\le\sum_j\|\Delta_jg\|_2^2\le\|g\|_2^2$, which is the stated two-sided estimate, and the finiteness of the sum. [F1, F2, F6, step 2.2, algebra] ∎
