---
id: thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null
kind: theorem
title: "Every affine hyperplane of $\\mathbb{R}^n$, and hence every proper linear subspace, is Lebesgue null"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-lipschitz-images-of-lebesgue-null-sets-are-lebesgue-null, prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null, def-lipschitz-holder-contraction, lem-euclidean-linear-maps-have-matrices-and-are-bounded, thm-lebesgue-measure-is-a-complete-measure, def-euclidean-inner-product, def-orthogonal-complement, cor-double-orthogonal-complement-and-dimension, def-linear-subspace, def-linear-map, lem-metrics-on-rn, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-finite-sum, lem-finite-sum-laws, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.2"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). Then:

1. For every $u \in \mathbb{R}^n$ with $u \ne 0$ and every real $c$, the affine
   hyperplane
   $$H_{u,c} \;:=\; \{\, x \in \mathbb{R}^n : \langle u,x\rangle = c \,\}$$
   ([[def-euclidean-inner-product]]) is Lebesgue measurable with
   $\lambda_n(H_{u,c}) = 0$, and so is every subset of it.
2. Every proper linear subspace $W \subsetneq \mathbb{R}^n$
   ([[def-linear-subspace]]) is Lebesgue measurable with $\lambda_n(W) = 0$.

At $n = 1$ a hyperplane is the singleton $\{c/u_0\}$ and the only proper linear
subspace is $\{0\}$.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, a nonzero $u \in \mathbb{R}^n$, a real $c$, and a proper linear subspace $W$ of $\mathbb{R}^n$.

[L1] Assuming countable choice, a Lipschitz self-map of $\mathbb{R}^n$ carries a set of Lebesgue outer measure zero to a Lebesgue measurable set of measure zero ([[lem-lipschitz-images-of-lebesgue-null-sets-are-lebesgue-null]]).

[L2] For $i_0<n$ and a real $c$, the coordinate hyperplane $\{\,x \in \mathbb{R}^n : x_{i_0}=c\,\}$ is Lebesgue measurable with measure $0$ ([[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]).

[L3] Assuming countable choice, $\lambda_n$ is a complete measure on $\mathcal{L}(\mathbb{R}^n)$, so every subset of a measurable null set is measurable of measure $0$ ([[thm-lebesgue-measure-is-a-complete-measure]]).

[F1] The **Euclidean inner product** of $x,y \in \mathbb{R}^n$ is $\langle x,y\rangle := \sum_{k<n}x_ky_k$, and it is symmetric, bilinear and positive definite, making $\mathbb{R}^n$ an inner product space ([[def-euclidean-inner-product]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[F2] For a linear subspace $W$ of an inner product space $V$, $W^\perp:=\{v\in V:\langle v,w\rangle=0$ for every $w\in W\}$, and $\{0\}^\perp=V$ ([[def-orthogonal-complement]], [[def-linear-subspace]]).

[F3] For every subspace $W$ of a finite-dimensional inner product space $V$, $W^{\perp\perp}=W$ ([[cor-double-orthogonal-complement-and-dimension]]).

[F4] For every linear $L:\mathbb R^m\to\mathbb R^n$ there is $K\ge0$ with $\|Lh\|_2\le K\|h\|_2$ for every $h$ ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]], [[def-linear-map]]).

[F5] $f$ is **Lipschitz** with constant $L \ge 0$ if $d_Y(f(x),f(x')) \le L\,d_X(x,x')$ for all $x,x'$ ([[def-lipschitz-holder-contraction]]), and $\lVert x-y\rVert_2 = d_2(x,y)$ ([[lem-p-norms-are-norms-and-induce-the-published-metrics]], claim 3; [[def-p-norms-on-rn]]; [[lem-metrics-on-rn]]).

## Proof

**Proof technique:** direct.

1.1 Fix $j<n$ with $u_j \ne 0$ and define $\Psi : \mathbb{R}^n \to \mathbb{R}^n$ by $\Psi(x)_l := x_l$ for $l \ne j$ and $\Psi(x)_j := \big(c - \sum_{l \ne j}u_lx_l\big)/u_j$. Then $\Psi$ carries the coordinate hyperplane $P := \{\,x : x_j = 0\,\}$ onto $H_{u,c}$: a point of $P$ has $\langle u,\Psi(x)\rangle = \sum_{l\ne j}u_lx_l + u_j\Psi(x)_j = c$, and conversely a point $y \in H_{u,c}$ is $\Psi(x)$ for the point $x$ agreeing with $y$ off the coordinate $j$ and having $x_j = 0$. [F1]

1.2 $\Psi$ is Lipschitz: the difference $\Psi(x)-\Psi(x')$ equals $L(x-x')$ for the linear map $L$ obtained from $\Psi$ by deleting the constant $c/u_j$, so $d_2(\Psi(x),\Psi(x')) = \lVert L(x-x')\rVert_2 \le K\,d_2(x,x')$ for a real $K \ge 0$. [F4, F5]

2.1 The coordinate hyperplane $P$ is Lebesgue measurable of measure $0$, hence of outer measure $0$, so steps 1.1 and 1.2 with the Lipschitz lemma give that $H_{u,c} = \Psi[P]$ is Lebesgue measurable with $\lambda_n(H_{u,c}) = 0$; completeness then gives the same for every subset of it, which is claim 1. [step 1.1, step 1.2, L1, L2, L3]

3.1 If $W$ is a proper linear subspace then $W^\perp \ne \{0\}$: otherwise $W = W^{\perp\perp} = \{0\}^\perp = \mathbb{R}^n$. Choosing a nonzero $u \in W^\perp$ puts $W$ inside $H_{u,0}$, so claim 1 and completeness make $W$ Lebesgue measurable of measure $0$; at $n=1$ the hyperplane $H_{u,c}$ is the singleton $\{c/u_0\}$ and the only proper subspace is $\{0\}$. [step 2.1, L3, F1, F2, F3] ∎
