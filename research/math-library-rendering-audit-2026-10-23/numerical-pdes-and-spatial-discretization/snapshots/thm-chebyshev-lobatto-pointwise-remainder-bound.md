---
id: thm-chebyshev-lobatto-pointwise-remainder-bound
kind: theorem
title: "Chebyshev–Lobatto interpolation remainder bound"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-chebyshev-gauss-lobatto-collocation-grid, def-cardinal-polynomial-interpolation, thm-lagrange-interpolation-remainder, def-chebyshev-polynomials-first-and-second-kind, thm-chebyshev-multiple-angle-identities, lem-chebyshev-degree-leading-coefficients-and-extreme-values, thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots, thm-chain-rule, thm-sine-and-cosine-derivatives, thm-quarter-turn-values-and-shift-formulas, cor-trigonometric-parity-and-pythagorean-identity, def-higher-derivatives-and-smoothness, thm-heine-borel-r, thm-extreme-value-r, def-chebyshev-arcsine-weighted-l2-pairing]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice axiom is used; the proof applies the finite-node Lagrange remainder theorem."
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §1.8"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 65–67 / PDF pp. 71–73; Chebyshev–Gauss–Lobatto product and interpolation error."
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, Lecture 3"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
      locator: "Complete 236-page lecture-note PDF, Lecture 3, Theorem 1.3 and proof, printed pp. 16–18 / PDF pp. 15–18; pointwise Lagrange remainder."
---
 
## Statement

Let $N\ge1$ and $f\in C^{N+1}([-1,1])$. Let $I_N^Lf$ be interpolation at the nodes $x_j=\cos(j\pi/N)$. Then
$$\|f-I_N^Lf\|_C \le \sqrt{\pi}\,\frac{2^{1-N}}{(N+1)!}\max_{x\in[-1,1]}|f^{(N+1)}(x)|.$$

## Facts & Assumptions

**Given:** $N\ge1$ and $f\in C^{N+1}([-1,1])$.

[F1] [[def-chebyshev-gauss-lobatto-collocation-grid]]: the $N+1$ distinct nodes are $x_j=\cos(j\pi/N)$, including both endpoints.

[F2] [[def-chebyshev-polynomials-first-and-second-kind]] and [[lem-chebyshev-degree-leading-coefficients-and-extreme-values]]: $T_N$ has degree $N$ and leading coefficient $2^{N-1}$ for $N\ge1$.

[F3] [[thm-chebyshev-multiple-angle-identities]], [[thm-chain-rule]], and [[thm-sine-and-cosine-derivatives]]: for $x=\cos\theta$, $0<\theta<\pi$, $T_N'(x)=N\sin(N\theta)/\sin\theta$.

[F4] [[thm-quarter-turn-values-and-shift-formulas]]: $\sin(k\pi)=0$ for every integer $k$, by repeated shifts by $\pi$.

[F5] [[cor-trigonometric-parity-and-pythagorean-identity]]: $|\sin t|\le1$ for every real $t$.

[F6] [[def-cardinal-polynomial-interpolation]]: the node polynomial is $\omega_N(x)=\prod_{j=0}^N(x-x_j)$ and $I_N^Lf$ is its degree-at-most-$N$ Lagrange interpolant after reversing the decreasing node order.

[F7] [[thm-lagrange-interpolation-remainder]]: for $x$ off the nodes, $f(x)-I_N^Lf(x)=f^{(N+1)}(\xi)\omega_N(x)/(N+1)!$ for some $\xi$ in the interval between the extreme nodes and $x$; at a node the error is zero.

[F8] [[def-chebyshev-arcsine-weighted-l2-pairing]]: $\|h\|_C\le\sqrt{\pi}\|h\|_\infty$ because the angular measure has total mass $\pi$.

[F9] [[def-higher-derivatives-and-smoothness]], [[thm-heine-borel-r]], and [[thm-extreme-value-r]]: $f^{(N+1)}$ is continuous on the compact interval, so the displayed finite maximum exists.

[F10] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]: a polynomial with more distinct roots than its degree is the zero polynomial.

## Proof
1.1 By the recurrence in [F2], $T_N$ has leading coefficient $2^{N-1}$ for every $N\ge1$. Hence $q_N(x):=\frac{2^{1-N}}{N}(x^2-1)T_N'(x)$ is monic of degree $N+1$. [F2, algebra]

1.2 For $1\le j<N$, put $\theta_j=j\pi/N$. Then [F3] and [F4] give $T_N'(x_j)=N\sin(j\pi)/\sin\theta_j=0$. Also $q_N(1)=q_N(-1)=0$. Thus $q_N$ vanishes at all $N+1$ distinct nodes in [F1]. The node product $\omega_N$ is also monic of degree $N+1$ by [F6]; their difference has degree at most $N$ and $N+1$ distinct roots, so [F10] gives $q_N=\omega_N$. [F1, F2, F3, F4, F6, F10, algebra]

2.1 For $x=\cos\theta$ with $0<\theta<\pi$, the derivative formula in [F3] gives $|\omega_N(x)|=2^{1-N}|\sin\theta\,\sin(N\theta)|\le2^{1-N}.$ The inequality uses [F5]. At the endpoints $\omega_N=0$, so this bound holds on all of $[-1,1]$. [F1, F3, F5, step 1.2, algebra]

3.1 At nodes the interpolation error is zero; off the nodes apply [F7] and step 2.1. Since the maximum in [F9] is finite, this gives $\|f-I_N^Lf\|_\infty\le \frac{2^{1-N}}{(N+1)!}\max_{[-1,1]}|f^{(N+1)}|.$ [F1, F7, F9, step 2.1, algebra]

4.1 Apply the weighted-norm estimate [F8] to the uniform error in step 3.1. This proves the stated inequality. [F8, step 3.1, algebra] ∎