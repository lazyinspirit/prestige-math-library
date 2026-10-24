---
id: lem-relative-projective-space-universally-closed
kind: lemma
title: Projective-space projection is universally closed by finite graded pieces
status: published
origin: pipeline
deps:
  - def-relative-projective-space-standard-charts
  - thm-projective-space-as-proj
  - def-proj-graded-ring-points
  - def-graded-ring-and-graded-module
  - def-universally-closed-morphism
  - thm-nakayama-lemma
  - cor-finite-module-locally-zero-near-a-prime
  - thm-localisation-of-modules-is-tensor-product
  - thm-right-exactness-of-tensor-products
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, \u00a7\u00a730.2\u201330.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), \u00a7\u00a719.1, 19.6, 19.9, 28.1\u201328.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice. For every scheme $S$ and every integer $n\ge0$
the projection $\pi:\mathbb P^n_S\to S$ of relative projective space
([[def-relative-projective-space-standard-charts]]) is universally closed
([[def-universally-closed-morphism]]): for every $S$-scheme $T$ and every
closed subset $Z\subseteq\mathbb P^n_T$ the image of $Z$ under the projection
$\mathbb P^n_T\to T$ is closed in $T$. Here
$\mathbb P^n_T=\mathbb P^n_S\times_ST$ is the base-changed relative
projective space. The empty base, the empty closed set and the case $n=0$ are
included.

## Facts & Assumptions
**Given:** The Axiom of Choice, a scheme $S$ and an integer $n\ge0$.

[F1] Relative projective space is defined as the fibre product $\mathbb P^n_S=S\times_{\operatorname{Spec}\mathbb Z}\mathbb P^n_{\operatorname{Spec}\mathbb Z}$ with structure morphism the projection, its standard charts are the base changes of the charts of $\mathbb P^n_{\mathbb Z}$, and charts and overlaps commute with base change; for $n=0$, $\mathbb P^0_S\cong S$, and $\mathbb P^n_\varnothing=\varnothing$. ([[def-relative-projective-space-standard-charts]])

[F2] Under AC, for a commutative ring $A$ there is a canonical isomorphism of $\operatorname{Spec}A$-schemes $\operatorname{Proj}A[x_0,\dots,x_n]\cong\mathbb P^n_A$, natural in $A$: for $A\to B$ it is compatible with $\operatorname{Proj}(A[x])\otimes_AB\cong\operatorname{Proj}(B[x])$ and $\mathbb P^n_B\cong\mathbb P^n_A\times_{\operatorname{Spec}A}\operatorname{Spec}B$. ([[thm-projective-space-as-proj]])

[F3] $\operatorname{Proj}S$ is the set of homogeneous primes $\mathfrak p$ with $S_+\not\subseteq\mathfrak p$, the closed sets are the $V_+(I)=\{\mathfrak p:I\subseteq\mathfrak p\}$ for homogeneous ideals $I$, and $\operatorname{Proj}$ of the zero ring is empty; every closed subset of $\operatorname{Proj}S$ is $V_+(I)$ for some homogeneous ideal $I$. ([[def-proj-graded-ring-points]])

[F4] A morphism $f:X\to S$ is universally closed when for every $S$-scheme $T$ the base-changed map $X\times_ST\to T$ sends closed subsets to closed subsets; closedness of a subset of $T$ may be checked on an open cover of $T$. ([[def-universally-closed-morphism]])

[F5] Under AC (Nakayama): if $R$ is a local ring with maximal ideal $\mathfrak m$, $M$ is a finitely generated $R$-module and $\mathfrak m M=M$, then $M=0$. ([[thm-nakayama-lemma]])

[F6] If $M$ is a finitely generated $B$-module and $M_{\mathfrak p}=0$ for a prime $\mathfrak p$, then there is $b\notin\mathfrak p$ with $M_b=0$. ([[cor-finite-module-locally-zero-near-a-prime]])

[F7] For a $B$-module $M$ and prime $\mathfrak p$ one has $M_{\mathfrak p}\cong M\otimes_BB_{\mathfrak p}$ and $M\otimes_B\kappa(\mathfrak p)\cong M_{\mathfrak p}/\mathfrak p M_{\mathfrak p}$; tensor products are right exact, and graded pieces of a graded quotient commute with base change. ([[thm-localisation-of-modules-is-tensor-product]], [[thm-right-exactness-of-tensor-products]])

[F8] Graded rings and modules have homogeneous components, and a homogeneous ideal $I$ in $B[x_0,\dots,x_n]$, with $\deg x_i=1$, has graded pieces $I_m$ so that $(B[x]/I)_m$ is a finitely generated $B$-module. ([[def-graded-ring-and-graded-module]])



## Proof

**Proof technique:** direct: reduce to an affine base, express the fibre over a prime as $\operatorname{Proj}$ of the residue-field quotient of a homogeneous ideal, show by the maximal-graded-ideal argument that an empty fibre forces one graded piece to vanish, and use Nakayama plus finite generation to open up the vanishing piece.

1.1 Universal closedness of $\pi$ is checked after base change and locally on the target: given $T\to S$ and a closed $Z\subseteq\mathbb P^n_T$, it suffices to test closedness of the image of $Z$ over an affine open cover of $T$; since $\mathbb P^n_S\times_ST=\mathbb P^n_T$ by [F1] and restriction to an affine open $T'\subseteq T$ gives $\mathbb P^n_{T'}$, we may assume throughout that $T=\operatorname{Spec}B$ is affine and that $Z\subseteq\mathbb P^n_B=\operatorname{Proj}B[x_0,\dots,x_n]$ is closed, the identification being [F2]. [F1, F2, F4]

1.2 For a field $k$ and a homogeneous ideal $J\subseteq k[x_0,\dots,x_n]$ put $R=k[x]/J$: then $V_+(J)=\varnothing$ if and only if $R_m=0$ for some $m\ge1$. Indeed, $R$ is generated in degree one by the images of the $x_i$, so $R_{d+1}=R_1R_d$ for every $d\ge1$. If $R_m=0$, induction gives $R_d=0$ for all $d\ge m$. Every product of $m$ positive-degree homogeneous elements has degree at least $m$, whence $R_+^m=0$; thus every homogeneous prime contains $R_+$ and $\operatorname{Proj}R=\varnothing$. Conversely, if some $x_i$ is not nilpotent in $R$, then a maximal homogeneous ideal $\mathfrak q$ of the graded ring $R$ avoiding all powers of $x_i$ (Zorn, AC) is prime, by the minimal-homogeneous-component argument: if $ab\in\mathfrak q$ with $a,b\notin\mathfrak q$ and $a_i,b_j$ are homogeneous components of least degree not in $\mathfrak q$, all other components of degree $i+j$ of $ab$ lie in $\mathfrak q$, so $a_ib_j\in\mathfrak q$; then $\mathfrak q+(a_i)$ and $\mathfrak q+(b_j)$ are homogeneous ideals strictly containing $\mathfrak q$, so each meets the powers of $x_i$, and the product of such powers lies in $\mathfrak q+(a_ib_j)\subseteq\mathfrak q$, a contradiction; the contraction of $\mathfrak q$ is then a homogeneous prime of $k[x]$ containing $J$ but not $x_i$, a point of $V_+(J)$, contradiction. Hence every $x_i$ is nilpotent, say $x_i^{m_i}=0$ in $R$; with $m\ge(n+1)\max_i m_i$, every monomial of degree $m$ has some exponent $\ge m_i$ and hence vanishes in $R$, so $R_m=0$. [F3, F7, given, algebra]

2.1 By [F3] there is a homogeneous ideal $I\subseteq B[x_0,\dots,x_n]$ with $Z=V_+(I)$; for a prime $\mathfrak p\subseteq B$ the fibre of $Z$ over $\mathfrak p$ is $V_+(I\kappa(\mathfrak p))\subseteq\operatorname{Proj}\kappa(\mathfrak p)[x_0,\dots,x_n]$, where $I\kappa(\mathfrak p)$ is the image of $I$ under $B[x]\to\kappa(\mathfrak p)[x]$, because base change of $V_+(I)$ along $\operatorname{Spec}\kappa(\mathfrak p)\to\operatorname{Spec}B$ is $V_+$ of the extended ideal by the naturality in [F2] and the definition of $V_+$ in [F3]. [F2, F3, step 1.1]

3.1 Put $M_m:=(B[x]/I)_m$ for $m\ge0$; each $M_m$ is a finitely generated $B$-module by [F8], and $(\kappa(\mathfrak p)[x]/I\kappa(\mathfrak p))_m\cong M_m\otimes_B\kappa(\mathfrak p)$ by [F7]. Combining with step 1.2, the fibre $Z_{\mathfrak p}$ is empty if and only if $M_m\otimes_B\kappa(\mathfrak p)=0$ for some $m\ge1$. [F7, F8, step 2.1, step 1.2]

4.1 For a fixed $m\ge1$ and a prime $\mathfrak p$, the vanishing $M_m\otimes_B\kappa(\mathfrak p)=0$ is equivalent to $\mathfrak p(M_m)_{\mathfrak p}=(M_m)_{\mathfrak p}$; since $(M_m)_{\mathfrak p}$ is finitely generated over the local ring $B_{\mathfrak p}$ with maximal ideal $\mathfrak p B_{\mathfrak p}$ and $\mathfrak p B_{\mathfrak p}$ is the Jacobson radical of $B_{\mathfrak p}$, Nakayama [F5] gives $(M_m)_{\mathfrak p}=0$; then [F6] provides $b\notin\mathfrak p$ with $(M_m)_b=0$, and for every prime $\mathfrak q\in D(b)$ we get $(M_m)_{\mathfrak q}=0$ and hence an empty fibre over $\mathfrak q$ by step 3.1. [F5, F6, F7, step 3.1]

5.1 Conversely if $(M_m)_b=0$ for some $m,b$ then for every $\mathfrak q\in D(b)$ one has $M_m\otimes_B\kappa(\mathfrak q)=0$, so the fibre is empty over $D(b)$; therefore the set $U=\{\mathfrak p\in\operatorname{Spec}B:Z_{\mathfrak p}=\varnothing\}$ equals $\bigcup_{m\ge1}\bigcup\{\,D(b):(M_m)_b=0\,\}$, a union of basic open sets, hence is open in $\operatorname{Spec}B$. [F7, step 3.1, step 4.1]

6.1 The complement of $U$ in $\operatorname{Spec}B$ is exactly the image of the closed set $Z$ under $\pi_B$, so step 5.1 shows that this image is closed; since the argument applies to every affine base and, by step 1.1, to every base $T\to S$ after restriction to an affine cover, the projection $\pi$ is universally closed. The cases $n=0$ (where $\pi$ is an isomorphism $S\to S$) and $S=\varnothing$ (where the source is empty and the condition is vacuous) are included in this argument through [F1]; the Axiom of Choice is used exactly in the Zorn argument of step 1.2 and through Nakayama [F5] and the finite-generation step [F6]. [F1, F4, F5, F6, step 1.1, step 5.1] ∎
