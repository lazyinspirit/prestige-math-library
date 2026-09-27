---
id: lem-eventual-hilbert-function-equals-zero-dimensional-projective-length
kind: lemma
title: "The eventual Hilbert function of a zero-dimensional projective quotient equals its total length"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-localisation-of-a-graded-ring-at-a-homogeneous-element, def-projective-scheme-from-a-homogeneous-quotient, def-krull-dimension-of-a-ring, lem-zero-dimensional-projective-scheme-has-finite-local-charts, def-total-length-of-a-zero-dimensional-projective-scheme, lem-standard-open-affine-chart-of-a-projective-quotient, lem-base-change-of-a-zero-dimensional-projective-quotient, lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces, lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union, lem-sheaf-section-over-empty-set-terminal, cor-dimension-of-a-direct-sum, def-dimension, def-composition-series-and-length-of-a-module, def-residue-field-scheme-point, def-extension-degree-and-finite-extension, def-affine-scheme-spectrum, def-scheme, def-prime-and-maximal-ideals, prop-iterated-localisation, thm-universal-property-of-localisation, cor-localisation-is-unique-up-to-unique-isomorphism, cor-polynomial-ring-over-a-domain-is-a-domain, thm-field-of-fractions-is-a-field-and-the-domain-embeds, lem-projective-standard-chart-prime-and-local-ring-correspondence]
justified_by: []
aliases: []
landmark: true
short: "eventual Hilbert value equals total length"
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "A. Gathmann, Algebraic Geometry class notes (2002), Lemma 6.1.4 and Remark 6.1.6, pp. 93-94"
      url: "https://agag-gathmann.math.rptu.de/class/alggeom-2002/alggeom-2002.pdf"
    - title: "The Stacks Project, Lemma 33.20.2 (tag 06LH) and Section 27.8 (tag 01M3)"
      url: "https://stacks.math.columbia.edu/tag/06LH"
pipeline_run: frontier-35-ten-categories
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let
$I\subseteq k[x_0,\ldots,x_n]$ be any homogeneous ideal, let
$S=k[x_0,\ldots,x_n]/I$ carry its standard grading, and let
$X=\operatorname{Proj}S$ be zero-dimensional in the chartwise sense that every
standard chart ring $A_i=(S_{x_i})_0$ is either zero or of Krull dimension $0$
([[def-projective-scheme-from-a-homogeneous-quotient]],
[[def-krull-dimension-of-a-ring]]); the empty case $X=\varnothing$ is included.
Then for all sufficiently large $m$

$$\dim_kS_m=\operatorname{len}_k(X),$$

the total length of [[def-total-length-of-a-zero-dimensional-projective-scheme]].
Saturation of $I$ is not assumed, and the equality is between natural numbers.

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, a homogeneous ideal
$I\subseteq k[x_0,\ldots,x_n]$, the standard graded quotient
$S=k[x_0,\ldots,x_n]/I$, its standard chart rings
$A_i=(S_{x_i})_0$, each zero or of Krull dimension $0$, and
$X=\operatorname{Proj}S$.

[L1] The points of $X$ are the homogeneous primes $\mathfrak p$ of $S$ with
$S_+\nsubseteq\mathfrak p$; the standard charts $D_+(x_i)=\operatorname{Spec}(A_i)$
cover $X$, chart points correspond to the primes of $A_i$, the local ring at a
point is the localization of any chart ring containing it, and the chart
identifications agree on overlaps
([[def-projective-scheme-from-a-homogeneous-quotient]],
[[lem-projective-standard-chart-prime-and-local-ring-correspondence]]). A
prime ideal is proper with multiplicative complement
([[def-prime-and-maximal-ideals]]).

[L2] For a homogeneous element $f$ of positive degree in $S$, the standard open
$D_+(f)=\{x\in X:f\notin\mathfrak p_x\}$ is the affine chart
$\operatorname{Spec}((S_f)_0)$, its ring of global sections is $(S_f)_0$, and
inside the chart $D_+(x_i)$ the piece $D_+(fx_i)$ corresponds to the degree-zero
dehomogenisation $f/x_i^{\deg f}\in A_i$
([[lem-standard-open-affine-chart-of-a-projective-quotient]]).

[L3] Assume AC. If $k\subseteq K$ is a field extension and
$S_K=S\otimes_kK$, then $S_K$ is standard graded with
$(S_K)_m=S_m\otimes_kK$, so $\dim_K(S_K)_m=\dim_kS_m$; the projective scheme
$X_K=\operatorname{Proj}(S_K)$ is again zero-dimensional in the chartwise sense;
and $\operatorname{len}_K(X_K)=\operatorname{len}_k(X)$
([[lem-base-change-of-a-zero-dimensional-projective-quotient]]).

[L4] Assume AC. For the zero-dimensional $X$: the point set is finite and
discrete; each local ring $\mathcal O_{X,x}$ is a finite-dimensional local
$k$-algebra with nilpotent maximal ideal, finite length and finite residue
degree; $X$ is the finite disjoint union of the spectra
$\operatorname{Spec}(\mathcal O_{X,x})$ of its local rings; and the total length
is $\operatorname{len}_k(X)=\sum_x\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})[\kappa(x):k]$,
with the convention $\operatorname{len}_k(\varnothing)=0$. For an affine
scheme $\operatorname{Spec}B$ with $B$ a finite-dimensional $k$-algebra one has
$\operatorname{len}_k(\operatorname{Spec}B)=\dim_kB$
([[lem-zero-dimensional-projective-scheme-has-finite-local-charts]],
[[def-total-length-of-a-zero-dimensional-projective-scheme]],
[[def-composition-series-and-length-of-a-module]],
[[def-residue-field-scheme-point]],
[[def-extension-degree-and-finite-extension]],
[[def-affine-scheme-spectrum]], [[def-scheme]]).

[L5] Over an infinite field, a finite-dimensional vector space is not the union
of finitely many proper linear subspaces
([[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]),
and the fraction field $k(t)$ of the polynomial ring $k[t]$ is infinite, since
the monomials $t^m$ have pairwise distinct images by the domain property
([[cor-polynomial-ring-over-a-domain-is-a-domain]],
[[thm-field-of-fractions-is-a-field-and-the-domain-embeds]]).

[L6] For a nonempty finite disjoint union of affine spectra, global sections
multiply: $\Gamma(\coprod_{j=1}^r\operatorname{Spec}R_j)=\prod_{j=1}^rR_j$
when $r\ge1$, because the product-ring projections identify the spectrum with
the disjoint union and restriction to the clopen pieces induces the product
isomorphism ([[lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union]]).
For the empty union, the structure sheaf has exactly one section over its empty
underlying space, so its ring of global sections is the zero ring
([[lem-sheaf-section-over-empty-set-terminal]]). The dimension of a finite
direct sum of finite-dimensional spaces is the sum of the dimensions
([[cor-dimension-of-a-direct-sum]], [[def-dimension]]).

[L7] Localization is exact and commutes with itself: iterated localizations of
$S$ in any order agree up to canonical isomorphism, and kernels of localization
maps are computed by the universal property
([[prop-iterated-localisation]],
[[thm-universal-property-of-localisation]],
[[cor-localisation-is-unique-up-to-unique-isomorphism]]); the localization
$S_L$ of the graded ring $S$ at a homogeneous element $L$ of degree one is
graded, the localisation map $S\to S_L$ is degree-preserving, and its kernel is
a graded ideal ([[lem-localisation-of-a-graded-ring-at-a-homogeneous-element]]).



## Proof

**Proof technique:** direct.

1.1 If $k$ is infinite, set $K=k$ and $S_K=S$; if $k$ is finite, set $K=k(t)$ with fraction field structure as in [L5], so that $K$ is infinite, and set $S_K=S\otimes_kK$; in the finite case [L3] gives $\dim_K(S_K)_m=\dim_kS_m$ for every $m$, $\operatorname{len}_K(X_K)=\operatorname{len}_k(X)$ for $X_K=\operatorname{Proj}(S_K)$, and $X_K$ zero-dimensional in the chartwise sense. [L3, L5]

1.2 Assume now that $k$ is infinite. If $X\ne\varnothing$, let $p_1,\ldots,p_r$ be its finitely many points, written as homogeneous primes of $S$ by [L1], and for each $j$ let $V_j=\{a=(a_0,\ldots,a_n)\in k^{n+1}:a_0x_0+\cdots+a_nx_n\in p_j\}$; each $V_j$ is a proper $k$-subspace, because it is the kernel of the linear map $k^{n+1}\to(S/p_j)_1$, which is nonzero as $x_i\notin p_j$ for some $i$; if $X=\varnothing$ let $L=x_0$, and otherwise [L5] provides $a\notin\bigcup_jV_j$ and we set $L=a_0x_0+\cdots+a_nx_n\in S_1$. In both cases $L\notin\mathfrak p_x$ for every point $x\in X$, so $X\subseteq D_+(L)$. [L1, L5]

2.1 Consequently it suffices to prove the displayed equality for the pair $(S_K,K)$: if $\dim_K(S_K)_m=\operatorname{len}_K(X_K)$ holds for all $m\ge m_0$, then in the finite case $\dim_kS_m=\dim_K(S_K)_m=\operatorname{len}_K(X_K)=\operatorname{len}_k(X)$ for all $m\ge m_0$, and in the infinite case the equality is the claim itself; from here on we therefore assume that $k$ is infinite. [L3, step 1.1]

2.2 Since $D_+(L)\subseteq X$ on the other hand, we have $D_+(L)=X$ as open subschemes; by [L2] the open subscheme $D_+(L)$ is the affine scheme $\operatorname{Spec}(A)$ with $A=(S_L)_0=\Gamma(X,\mathcal O_X)$, so $X=\operatorname{Spec}A$. [L2, step 1.2]

3.1 By [L4] the space $X$ is the finite disjoint union $\coprod_{x\in X}\operatorname{Spec}(\mathcal O_{X,x})$. If $X=\varnothing$, [L6] gives $A=\Gamma(X,\mathcal O_X)=0$, so $\dim_kA=0=\operatorname{len}_k(X)$ by the empty-sum convention in [L4]. If $X\ne\varnothing$, [L6] applies with the positive number of factors and gives $A=\prod_{x\in X}\mathcal O_{X,x}$, a finite-dimensional $k$-algebra with $\dim_kA=\sum_{x\in X}\dim_k\mathcal O_{X,x}$; applying [L4] to the affine scheme $\operatorname{Spec}A$ and to the local rings $\mathcal O_{X,x}$ gives $\operatorname{len}_k(X)=\dim_kA=\sum_x\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})[\kappa(x):k]$. Thus $A$ is finite-dimensional and $\dim_kA=\operatorname{len}_k(X)$ in either case. [L4, L6, step 2.2]

3.2 For every index $i$ there is $N_i\ge1$ with $x_i^{N_i}\in LS$: the open subschemes $D_+(x_i)$ and $D_+(Lx_i)=D_+(L)\cap D_+(x_i)$ of $X$ coincide by step 2.2, so inside the chart $D_+(x_i)=\operatorname{Spec}(A_i)$ the localization $A_i\to(A_i)_{v_i}$ at the degree-zero dehomogenisation $v_i=L/x_i$ of $L$ on that chart is an isomorphism, $v_i$ is a unit of $A_i$ with inverse $w$, and writing $w=a/x_i^m$ with $a\in S_m$ gives $(L/x_i)(a/x_i^m)=1$ in $(S_{x_i})_0$, hence $La-x_i^{m+1}$ is killed by a power of $x_i$ and $x_i^{N_i}=L\cdot(x_i^Ma)\in LS$ for $N_i=m+1+M$. [L1, L2, L7, step 2.2]

4.1 For $m\ge0$ define the $k$-linear map $\varphi_m:S_m\to A$, $s\mapsto s/L^m$, using $A=(S_L)_0\subseteq S_L$; every element of $A$ is a fraction $s/L^m$ with $s\in S_m$, so $A=\bigcup_{m\ge0}\varphi_m(S_m)$, and since $A$ is finite-dimensional by step 3.1 the ascending chain of images $\varphi_m(S_m)$ stabilizes: there is $m_0$ with $\varphi_m$ surjective for every $m\ge m_0$. [L7, step 3.1]

4.2 Let $K_0=\sum_{i=0}^nN_i$; every monomial in $x_0,\ldots,x_n$ of degree $K_0$ is divisible by some $x_i^{N_i}$ by the pigeonhole principle, and $S_+^{K_0}$ is generated by those monomials, so $S_+^{K_0}\subseteq LS$. [step 3.2]

5.1 Let $T=\ker(S\to S_L)=\{s\in S:L^Ms=0\text{ for some }M\}$, a graded ideal of $S$ by [L7], and put $T_m=T\cap S_m$; then $\ker\varphi_m=T_m$ for every $m$, because $s/L^m=0$ in $(S_L)_0$ exactly when $s$ is killed by a power of $L$. [L7, step 4.1]

5.2 Consequently $S_m=LS_{m-1}$ for every $m\ge K_0$: $S_+^{K_0}\subseteq LS$ gives $(S_+^{K_0})_m\subseteq(LS)_m=LS_{m-1}$, and $(S_+^{K_0})_m=S_m$ because every degree-$m$ monomial with $m\ge K_0$ is divisible by some degree-$K_0$ monomial. [step 4.2]

6.1 For every $m\ge K_0$ one has $T_m=LT_{m-1}$: if $t\in T_m$, then $t\in S_m=LS_{m-1}$ by step 5.2, say $t=La$ with $a\in S_{m-1}$, and $L^Mt=0$ implies $L^{M+1}a=0$, so $a\in T_{m-1}$; conversely $L\,T_{m-1}\subseteq T_m$. Hence $\dim_kT_m\le\dim_kT_{m-1}$ for $m\ge K_0$, and the sequence of dimensions is eventually constant, say equal to $d$ for all $m\ge m_1$. [step 5.1, step 5.2]

7.1 One has $d=0$: for $m\ge m_1$ the map $L:T_m\to T_{m+1}$ is surjective by step 6.1, so $L^M:T_{m_1}\to T_{m_1+M}$ is surjective for every $M$; but $T_{m_1}\subseteq S_{m_1}$ is finite-dimensional and every element of $T$ is killed by a power of $L$, so some $L^M$ kills all of $T_{m_1}$ and $T_{m_1+M}=0$, forcing $d=0$ and $T_m=0$ for all $m\ge m_1$. [step 6.1]

8.1 For $m\ge\max(m_0,m_1)$ the map $\varphi_m:S_m\to A$ is surjective by step 4.1 and has kernel $T_m=0$ by steps 5.1 and 7.1, hence is an isomorphism of $k$-vector spaces and $\dim_kS_m=\dim_kA=\operatorname{len}_k(X)$ by step 3.1. [step 3.1, step 4.1, step 5.1, step 7.1]

9.1 If $k$ is infinite, step 8.1 proves the claim; if $k$ is finite, step 8.1 applied over the infinite field $K=k(t)$ to $S_K$ and $X_K$ gives $\dim_K(S_K)_m=\operatorname{len}_K(X_K)$ for all large $m$, and step 2.1 converts this into $\dim_kS_m=\operatorname{len}_k(X)$ for all large $m$; the empty case is included, since then $L=x_0$ still gives $A=(S_{x_0})_0=0$, and all steps above remain valid. [step 2.1, step 8.1]

10.1 The proof is complete: the equality $\dim_kS_m=\operatorname{len}_k(X)$ holds for all sufficiently large $m$, no saturation of $I$ was used, the case $X=\varnothing$ is covered by $\operatorname{len}_k(\varnothing)=0$, and the Axiom of Choice is inherited from the finite-chart, base-change and finiteness suppliers of [L3], [L4] and [L5]. [L3, L4, L5, step 9.1] ∎
