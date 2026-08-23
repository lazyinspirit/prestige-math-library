---
id: ex-orthogonal-group-is-a-regular-level-set
kind: example
title: 'The orthogonal group is a regular level set of dimension $n(n-1)/2$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-regular-critical-points-values-and-level-sets, def-euclidean-submersions-and-immersions, cor-regular-level-set-local-graph-theorem, def-tangent-space-to-a-regular-level-set, def-ck-euclidean-maps-and-diffeomorphisms, thm-continuous-partial-derivatives-imply-total-differentiability, thm-total-derivative-computes-directional-and-partial-derivatives, lem-derivative-of-a-power, thm-algebra-of-derivatives, thm-linear-kernel-image-and-injectivity, thm-rank-nullity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'L. W. Tu, An Introduction to Manifolds, Example 11.3 (the orthogonal group)'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Section 8'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
pipeline_run: null
---

## Example

Let $n\ge1$. Identify $M_n(\mathbb R)$ with $\mathbb R^{n^2}$ entrywise, and identify the symmetric $n\times n$ real matrices with $\mathbb R^{n(n+1)/2}$ by listing the entries in the positions $(i,j)$ with $i\le j$. Under these identifications let
$$f:M_n(\mathbb R)\to\operatorname{Sym}_n(\mathbb R),\qquad f(A)=A^{\mathsf T}A,$$
so that $f$ is a map between Euclidean spaces of dimensions $n^2$ and $n(n+1)/2$.

Then $f$ is $C^\infty$, its derivative is $Df(A)H=A^{\mathsf T}H+H^{\mathsf T}A$, and $I_n$ is a regular value of $f$. Consequently
$$O(n)=\{A\in M_n(\mathbb R):A^{\mathsf T}A=I_n\}=f^{-1}(I_n)$$
is a regular level set: near each of its points it is a $C^\infty$ graph of dimension
$$n^2-\frac{n(n+1)}2=\frac{n(n-1)}2 ,$$
and its tangent space at $A\in O(n)$ is
$$T_AO(n)=\{AK:K\in M_n(\mathbb R),\ K^{\mathsf T}=-K\},$$
of dimension $n(n-1)/2$.

At $n=1$ the target dimension equals the source dimension, $O(1)=\{1,-1\}$, and the graph dimension is $0$: the two points are isolated.

## Facts & Assumptions

**Given:** A natural number $n\ge1$, the entrywise identifications above, and the map $f$ with components $f_{ij}(A)=\sum_{k<n}a_{ki}a_{kj}$ for $i\le j$.

[L1] Each component $f_{ij}$ is a polynomial in the entries of $A$, so its partial derivatives of every order exist and are again polynomials, hence continuous ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]]). A map each of whose components is $C^k$ for every $k$ is $C^\infty$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), and a map whose partial derivatives exist near a point and are continuous there is totally differentiable there ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L2] If $f$ is totally differentiable at $A$, then the directional derivative $D_Hf(A)$ exists for every $H$ and equals $Df(A)H$ ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[L3] A $C^1$ map is a submersion at a point when its derivative there is surjective, and a value is regular when every point of its fibre is a submersion point ([[def-euclidean-submersions-and-immersions]], [[def-regular-critical-points-values-and-level-sets]]).

[L4] Near each of its points a regular level set of a $C^k$ map $U\subseteq\mathbb R^m\to\mathbb R^N$ is a $C^k$ graph of dimension $m-N$, and its tangent space at such a point is the kernel of the derivative ([[cor-regular-level-set-local-graph-theorem]], [[def-tangent-space-to-a-regular-level-set]]).

[L5] A linear map is injective exactly when its kernel is trivial, and for a linear map on a finite-dimensional space the dimension of the space is the sum of the dimensions of the kernel and the image ([[thm-linear-kernel-image-and-injectivity]], [[thm-rank-nullity]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $f$ is $C^\infty$ and totally differentiable at every $A$. [given, L1]

1.2 Let $A\in f^{-1}(I_n)$, so $A^{\mathsf T}A=I_n$. If $Ax=0$ then $x=I_nx=A^{\mathsf T}Ax=0$, so by [L5] the map $x\mapsto Ax$ is injective and therefore, its kernel being trivial, surjective on $\mathbb R^n$; hence $A$ is invertible and $A^{-1}=A^{\mathsf T}$, so also $AA^{\mathsf T}=I_n$. [given, L5, algebra]

2.1 Fix $A,H\in M_n(\mathbb R)$. Then $(A+tH)^{\mathsf T}(A+tH)=A^{\mathsf T}A+t(A^{\mathsf T}H+H^{\mathsf T}A)+t^2H^{\mathsf T}H$, a polynomial in $t$ with matrix coefficients, so its derivative at $t=0$ is $A^{\mathsf T}H+H^{\mathsf T}A$. By [L2] this directional derivative is $Df(A)H$, so $Df(A)H=A^{\mathsf T}H+H^{\mathsf T}A$. This matrix is symmetric, as the target requires. [step 1.1, given, L2, algebra]

3.1 Let $S$ be symmetric and put $H=\tfrac12AS$. Then $A^{\mathsf T}H=\tfrac12A^{\mathsf T}AS=\tfrac12S$, and $H^{\mathsf T}=\tfrac12SA^{\mathsf T}$ gives $H^{\mathsf T}A=\tfrac12SA^{\mathsf T}A=\tfrac12S$. By step 2.1, $Df(A)H=S$, so $Df(A)$ is surjective onto $\operatorname{Sym}_n(\mathbb R)$. [step 2.1, step 1.2, algebra]

4.1 By [L3], every point of $f^{-1}(I_n)$ is a submersion point, so $I_n$ is a regular value and $f^{-1}(I_n)=O(n)$ is a regular level set. [step 3.1, L3]

5.1 By [L4] with $m=n^2$ and $N=n(n+1)/2$, near each of its points $O(n)$ is a $C^\infty$ graph of dimension $n^2-n(n+1)/2=n(n-1)/2$, and $T_AO(n)=\ker Df(A)=\{H:A^{\mathsf T}H+H^{\mathsf T}A=0\}$. [step 4.1, L4, algebra]

6.1 If $K^{\mathsf T}=-K$ and $H=AK$, then by step 1.2 $A^{\mathsf T}H=K$ and $H^{\mathsf T}A=K^{\mathsf T}A^{\mathsf T}A=K^{\mathsf T}=-K$, so $H\in\ker Df(A)$. Conversely, if $A^{\mathsf T}H+H^{\mathsf T}A=0$, put $K=A^{\mathsf T}H$; then $K^{\mathsf T}=H^{\mathsf T}A=-K$ and $AK=AA^{\mathsf T}H=H$ by step 1.2. Hence $T_AO(n)=\{AK:K^{\mathsf T}=-K\}$. [step 5.1, step 1.2, algebra]

7.1 The map $K\mapsto AK$ is linear and injective, because $A$ is invertible by step 1.2, so by [L5] its image has the dimension of its domain. A skew-symmetric matrix is determined freely by its entries strictly above the diagonal and has zero diagonal, so the skew-symmetric matrices have dimension $n(n-1)/2$, and $\dim T_AO(n)=n(n-1)/2$. [step 6.1, step 1.2, L5, algebra]

8.1 At $n=1$ the source and target both have dimension $1$, $f(a)=a^2$, and $f^{-1}(1)=\{1,-1\}$, on which $f'(a)=2a\ne0$; the graph dimension $n(n-1)/2$ is $0$, so each point is isolated, and the skew-symmetric $1\times1$ matrices are $\{0\}$, in agreement with step 7.1. [step 5.1, step 7.1, algebra] ∎
