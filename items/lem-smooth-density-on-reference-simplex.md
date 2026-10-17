---
id: lem-smooth-density-on-reference-simplex
kind: lemma
title: Smooth functions are dense in finite-order Sobolev spaces on a reference simplex
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-matching-affine-simplicial-meshes, def-sobolev-space-wkp-and-its-norm, lem-affine-pullback-weak-derivatives-and-scaling, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, lem-test-function-cutoffs-and-euclidean-localization, lem-compact-support-zero-extension-in-wkp, lem-weak-leibniz-rule-with-a-smooth-factor, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 12
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap12.pdf
      locator: "§12.1, printed pp. 131–134: density and reference-cell Sobolev approximation."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 4
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "§4.2, printed pp. 56–57: reference-cell approximation and affine scaling."
verification: {}
---

## Statement

Assume Countable Choice. Let $d\ge2$, $k\in\mathbb N_0$,
$1\le p<\infty$, and let
$\widehat S_d$ be the reference simplex. Then restrictions of functions
smooth on a neighbourhood of $\overline{\widehat S_d}$ are dense in
$W^{k,p}(\widehat S_d)$ in its Sobolev norm. No density assertion for
$p=\infty$ is made.

## Facts & Assumptions

**Given:** The affine reference simplex and Sobolev conventions of [[def-matching-affine-simplicial-meshes]] and [[def-sobolev-space-wkp-and-its-norm]], with finite $p$ and Countable Choice.

[F1] For an invertible affine map $F(x)=Ax+b$, weak derivatives obey $D_j(u\circ F)=\sum_i A_{ij}(D_i u)\circ F$; higher derivatives follow by iterating this constant-matrix rule, with the corresponding determinant norm factors. For a homothety with $A=tI$, this gives $D^\alpha(u\circ F)=t^{|\alpha|}(D^\alpha u)\circ F$. ([[lem-affine-pullback-weak-derivatives-and-scaling]])

[F2] For finite $p$, $C_c^\infty(\mathbb R^d)$ is dense in $W^{k,p}(\mathbb R^d)$; in particular its order-zero case gives density in $L^p(\mathbb R^d)$. ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]])

[F3] Smooth cutoffs equal to one near a compact subset of an open set exist; multiplication by a smooth function with bounded derivatives preserves $W^{k,p}$; and a compactly supported $W^{k,p}$ function on an open set extends by zero to $\mathbb R^d$. ([[lem-test-function-cutoffs-and-euclidean-localization]], [[lem-weak-leibniz-rule-with-a-smooth-factor]], [[lem-compact-support-zero-extension-in-wkp]])

[F4] Countable Choice is the explicit assumption in the cited Sobolev, weak-derivative and density interfaces. ([[def-countable-choice]])

## Proof

1.1 Let $a$ be the barycenter of $\widehat S_d$ and, for $0<t<1$, set $F_t(x)=a+t(x-a)$. The set $S_t:=F_t^{-1}(\widehat S_d)$ is open and contains $\overline{\widehat S_d}$: each point of the closure is carried to a strict convex combination of that point and the interior point $a$, which lies in the open simplex. Thus $u_t:=u\circ F_t$ is defined on $S_t$ for $u\in W^{k,p}(\widehat S_d)$, and [F1] gives $D^\alpha u_t=t^{|\alpha|}(D^\alpha u)\circ F_t$. [F1, given, algebra]

2.1 For every $g\in L^p(\widehat S_d)$, $g\circ F_t\to g$ in $L^p(\widehat S_d)$ as $t\uparrow1$. To see this, extend $g$ by zero to $\mathbb R^d$ and approximate that extension in $L^p$ by $\phi\in C_c^\infty(\mathbb R^d)$ using [F2]. For $t\ge1/2$, change of variables bounds the pullback error by $t^{-d/p}\|g-\phi\|_{L^p(\mathbb R^d)}\le2^{d/p}\|g-\phi\|_p$; for fixed $\phi$, uniform continuity on the compact closure gives $\phi\circ F_t\to\phi$ uniformly there. First choosing $\phi$ with arbitrarily small error and then taking $t\uparrow1$ proves the claim. Applying it to each of the finitely many $D^\alpha u$ and using [F1] shows $u_t|_{\widehat S_d}\to u$ in $W^{k,p}(\widehat S_d)$. [F1, F2, step 1.1, given]

2.2 Fix $t<1$. Since $\overline{\widehat S_d}$ is compactly contained in $S_t$, choose $\eta\in C_c^\infty(S_t)$ equal to one near that closure by [F3]. Then $\eta u_t\in W^{k,p}(S_t)$ has compact support in $S_t$, so its zero extension $U_t$ belongs to $W^{k,p}(\mathbb R^d)$ by [F3]. By [F2], choose $\phi_j\in C_c^\infty(\mathbb R^d)$ converging to $U_t$ in that norm. Since $U_t=u_t$ on a neighbourhood of the closed simplex, the restrictions $\phi_j|_{\widehat S_d}$ converge to $u_t|_{\widehat S_d}$ in $W^{k,p}(\widehat S_d)$. [F2, F3, step 1.1]

3.1 Given $\varepsilon>0$, choose $t$ close enough to one that $\|u_t-u\|_{W^{k,p}(\widehat S_d)}<\varepsilon/2$ by step 2.1, and then choose $j$ in step 2.2 with $\|\phi_j-u_t\|_{W^{k,p}(\widehat S_d)}<\varepsilon/2$. The triangle inequality gives $\|\phi_j-u\|_{W^{k,p}(\widehat S_d)}<\varepsilon$. The choices are finite for each $u,\varepsilon$; Countable Choice is only the declared background of [F4], and no $p=\infty$ density is used. [F4, step 2.1, step 2.2, algebra] ∎
