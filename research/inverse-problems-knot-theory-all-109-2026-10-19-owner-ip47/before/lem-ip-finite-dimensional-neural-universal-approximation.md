---
id: lem-ip-finite-dimensional-neural-universal-approximation
kind: lemma
title: Finite-dimensional universal approximation by smooth nonpolynomial activations
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - thm-real-stone-weierstrass-general
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Leshno, Lin, Pinkus and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
      locator: "Theorem 1 proof, smooth-activation finite-difference step."
    - title: "M. Xu, Math 205B notes from a course by R. Mazzeo"
      url: "https://math.berkeley.edu/~moorxu/oldsite/notes/205b/205bmain.pdf"
      locator: "Theorem 9.3, Stone–Weierstrass theorem on compact Hausdorff spaces."
    - title: "E. Carlen, Notes on Topology and the Stone-Weierstrass Theorem"
      url: "https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf"
      locator: "§1.6, Theorem 1.26 and Lemmas 1.27–1.28 with full proof, printed pp. 15–18."
---

## Statement

Let $n\ge1$ and let $\sigma\in C^\infty(\mathbb R)$ be globally Lipschitz and not a polynomial. For a compact set $K\subset\mathbb R^n$, let $\mathcal N_{\sigma,n}(K)$ be the restrictions to $K$ of functions
$$x\longmapsto c_0+\sum_{j=1}^{J}c_j\sigma(a_j\cdot x+b_j),$$
where $J\ge0$, $c_0,c_j,b_j\in\mathbb R$ and $a_j\in\mathbb R^n$. Then $\mathcal N_{\sigma,n}(K)$ is uniformly dense in $C(K,\mathbb R)$.

## Statement references

[Leshno, Lin, Pinkus and Schocken, Theorem 1 proof: smooth finite differences generate polynomial ridge functions](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

[Carlen, §1.6, Theorem 1.26 and Lemmas 1.27–1.28: real Stone–Weierstrass theorem and proof](https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf)

## Facts & Assumptions

**Given:** $n\ge1$, a compact $K\subset\mathbb R^n$, and a globally Lipschitz, smooth nonpolynomial activation $\sigma$.

[L1] Every unital point-separating real function algebra on a compact Hausdorff space is uniformly dense in its continuous real-valued functions. ([[thm-real-stone-weierstrass-general]])

## Proof

**Given:** The data in the statement.

1.1 Fix an integer $m\ge1$ and $a\in\mathbb R^n$. Since $\sigma$ is not a polynomial, $\sigma^{(m)}$ is not identically zero; choose $b_m$ with $\sigma^{(m)}(b_m)\ne0$. For $h\ne0$ define $R_{m,h}(x):=\frac{1}{\sigma^{(m)}(b_m)h^m}\sum_{j=0}^{m}(-1)^{m-j}\binom mj\sigma(b_m+jh(a\cdot x))$. This is a finite linear combination of permitted units. The repeated-integral formula for the $m$th forward difference gives $R_{m,h}(x)=\frac{(a\cdot x)^m}{\sigma^{(m)}(b_m)}\int_{[0,1]^m}\sigma^{(m)}(b_m+h(a\cdot x)(t_1+\cdots+t_m))\,dt$. Because $a\cdot x$ is bounded on compact $K$ and $\sigma^{(m)}$ is uniformly continuous on a compact interval around $b_m$, $R_{m,h}\to(a\cdot x)^m$ uniformly on $K$ as $h\to0$. [given, choose, algebra]

2.1 For $m\ge1$ and arbitrary real $x_1,\ldots,x_m$, the polarization identity $x_1\cdots x_m=\frac{1}{2^m m!}\sum_{\epsilon\in\{-1,1\}^m}(\prod_{j=1}^m\epsilon_j)(\sum_{j=1}^m\epsilon_jx_j)^m$ expresses each monomial of total degree $m$ in $n$ variables as a finite linear combination of powers of linear forms. Step 1.1 places every such power in the uniform closure of the network family, and that closure is a vector space because finite network sums are represented by concatenating their hidden units. Constants are present through $c_0$. Hence every real polynomial restricted to $K$ belongs to that closure. [step 1.1, algebra]

3.1 The restrictions of real polynomials to $K$ form a unital real function algebra and separate distinct points, since a coordinate function distinguishes any two different points. Compact subsets of Euclidean space are compact Hausdorff, so [L1] makes these polynomial restrictions uniformly dense in $C(K,\mathbb R)$. The network closure contains them by step 2.1 and is therefore all of $C(K,\mathbb R)$. [L1, step 2.1, given] ∎
