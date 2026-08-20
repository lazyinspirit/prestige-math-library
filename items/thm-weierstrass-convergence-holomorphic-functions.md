---
id: thm-weierstrass-convergence-holomorphic-functions
kind: theorem
title: "Locally uniform limits of holomorphic functions are holomorphic and their derivatives converge locally uniformly"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [rem-locally-uniform-convergence-dictionary, thm-uniform-limit-continuous-complex-functions, thm-uniform-limit-interchanges-complex-line-integrals, thm-goursat-triangle-theorem, thm-morera-triangle-theorem, lem-cauchy-estimates-on-concentric-subdiscs, def-oriented-complex-triangle-and-boundary, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact]
justified_by: []
aliases: []
landmark: true
short: "Weierstrass convergence"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §1.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Theorems 5.2 and 5.3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, Theorem 2.4.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Steven G. Krantz, A Guide to Complex Variables, §3.1.5"
      url: "https://www.math.wustl.edu/~sk/books/guide.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let each $f_n:\Omega\to\mathbb C$ be holomorphic, and suppose $f_n\to f$ locally uniformly on $\Omega$ in the sense of [[rem-locally-uniform-convergence-dictionary]]. Then $f$ is holomorphic and

$$f_n^{(k)}\longrightarrow f^{(k)}$$

locally uniformly on $\Omega$ for every natural $k$, with $f^{(0)}=f$.

A locally uniform limit of holomorphic functions is holomorphic, and for every natural $k$ the $k$th derivatives converge locally uniformly to the $k$th derivative of the limit.

## Facts & Assumptions

**Given:** An open set $\Omega$, holomorphic functions $f_n:\Omega\to\mathbb C$, and locally uniform convergence $f_n\to f$, equivalently uniform convergence on every compact subset by [[rem-locally-uniform-convergence-dictionary]].

[L1] A uniform limit of continuous complex-valued functions on a metric space is continuous ([[thm-uniform-limit-continuous-complex-functions]]).

[L2] Uniform convergence of continuous integrands on a fixed rectifiable contour permits passage of the limit through the complex line integral ([[thm-uniform-limit-interchanges-complex-line-integrals]]).

[L3] Every holomorphic function has zero integral around each contained filled triangle, including degenerate triangles ([[thm-goursat-triangle-theorem]]).

[L4] A continuous function on an open subset of $\mathbb C$ is holomorphic if and only if its integral around every contained filled triangle is zero ([[thm-morera-triangle-theorem]]).

[L5] If $0\le r<R<S$, $h$ is holomorphic on $D(a,S)$, $M$ bounds $|h|$ on $|\zeta-a|=R$, and $|z-a|\le r$, then $|h^{(k)}(z)|\le k!RM/(R-r)^{k+1}$ ([[lem-cauchy-estimates-on-concentric-subdiscs]]).

[L6] The boundary of a filled triangle is the union of its directed affine edge traces ([[def-oriented-complex-triangle-and-boundary]]).

[L7] Closed bounded subsets of Euclidean space, including $[0,1]$ and closed complex discs, are compact ([[thm-heine-borel-rn]]).

[L8] The continuous image of a compact metric space is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]).

## Proof

**Proof technique:** direct.

1.1 If $\Omega$ is nonempty, fix $a\in\Omega$ and choose $S>0$ with $\overline D(a,S)\subseteq\Omega$; [L7] makes this closed disc compact, the given convergence is uniform there, and [L1] makes $f$ continuous on it, so $f$ is continuous throughout $\Omega$. [given, L1, L7]

1.2 Let $\Delta\subseteq\Omega$ be any filled triangle. By [L6], its boundary trace is a finite union of affine images of $[0,1]$, compact by [L7] and [L8]; convergence is therefore uniform on the trace, [L3] makes every $\int_{\partial\Delta}f_n$ zero, and [L2] gives $\int_{\partial\Delta}f=0$. [given, L2, L3, L6, L7, L8]

2.1 The continuity from step 1.1 and the vanishing triangle integrals from step 1.2 satisfy [L4], so $f$ is holomorphic throughout $\Omega$; on the empty open set this conclusion is vacuous. [step 1.1, step 1.2, L4]

3.1 Fix a natural derivative order $k$ and a point $a\in\Omega$, and choose radii $0<r<R<S$ with $\overline D(a,S)\subseteq\Omega$; by step 2.1 every difference $h_n:=f_n-f$ is holomorphic on $D(a,S)$. [step 2.1, choose]

4.1 Given $\varepsilon>0$, uniform convergence on the compact circle $|\zeta-a|=R$ gives $N$ such that $|h_n(\zeta)|<\varepsilon(R-r)^{k+1}/(k!R)$ there for $n\ge N$; applying [L5] then gives $|f_n^{(k)}(z)-f^{(k)}(z)|<\varepsilon$ for every $|z-a|\le r$. [step 3.1, L5]

5.1 Step 4.1 proves uniform convergence of the $k$th derivatives on a neighbourhood of every point, hence local uniform convergence by the dictionary in the given data; when $k=0$ it recovers the original convergence, and zero or eventually constant sequences require no exception. [step 4.1] ∎
