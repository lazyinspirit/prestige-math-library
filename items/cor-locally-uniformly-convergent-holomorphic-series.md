---
id: cor-locally-uniformly-convergent-holomorphic-series
kind: corollary
title: "A locally uniformly convergent series of holomorphic functions may be differentiated term by term"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-weierstrass-convergence-holomorphic-functions, thm-algebra-of-complex-derivatives, def-complex-series-power-series-and-absolute-convergence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §1.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2 §5.2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open and let $g_j:\Omega\to\mathbb C$ be holomorphic. Suppose the sequence of partial sums of $\sum_{j\ge0}g_j$ converges locally uniformly to $g$. Then $g$ is holomorphic, and for every natural $k$,

$$g^{(k)}=\sum_{j\ge0}g_j^{(k)},$$

where the derivative series converges locally uniformly.

## Facts & Assumptions

**Given:** Holomorphic functions $g_j$ on a common open set $\Omega$ and locally uniform convergence of their complex-series partial sums as defined in [[def-complex-series-power-series-and-absolute-convergence]].

[L1] Complex differentiation is linear, and every constant function has derivative zero ([[thm-algebra-of-complex-derivatives]]).

[L2] A locally uniform limit of holomorphic functions is holomorphic, and for every natural $k$ the $k$th derivatives converge locally uniformly to the $k$th derivative of the limit ([[thm-weierstrass-convergence-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 For the finite partial sum $S_N=\sum_{j<N}g_j$, induction with [L1] gives $S_N^{(k)}=\sum_{j<N}g_j^{(k)}$ for every natural $k$; the empty partial sum is the zero holomorphic function. [L1, algebra]

2.1 Apply [L2] to the locally uniformly convergent sequence $(S_N)$: its limit $g$ is holomorphic and $S_N^{(k)}\to g^{(k)}$ locally uniformly for every natural $k$. [step 1.1, L2]

3.1 By step 1.1, the sequence in step 2.1 is exactly the partial-sum sequence of $\sum_{j\ge0}g_j^{(k)}$, proving the displayed termwise derivative formula; at $k=0$ it is the original series. [step 1.1, step 2.1] ∎
