---
id: thm-complexification-preserves-kernels-images-rank-nullity-and-short-exact-sequences
kind: theorem
title: "Complexification preserves kernels, images, finite rank, nullity, and short exact sequences"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complexification-of-a-real-linear-map, thm-tensor-and-direct-sum-models-of-complexification-agree, prop-complexification-is-functorial, thm-linear-kernel-image-and-injectivity, thm-rank-nullity, def-exact-and-short-exact-sequences-of-modules]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Complexification (notes)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/complexification.pdf"
---

## Statement

Let $T:V\to W$ be a real-linear map. Under the canonical isomorphism of [[thm-tensor-and-direct-sum-models-of-complexification-agree]], the complexification acts componentwise: $T_{\mathbb C}(v+iw)=Tv+iTw$. Consequently

$$\ker(T_{\mathbb C})=(\ker T)\oplus i(\ker T),\qquad \operatorname{im}(T_{\mathbb C})=(\operatorname{im}T)\oplus i(\operatorname{im}T),$$

the complexifications of the real subspaces. If $V$ and $W$ are finite-dimensional, then $\operatorname{rank}_{\mathbb C}(T_{\mathbb C})=\operatorname{rank}_{\mathbb R}(T)$ and $\operatorname{nullity}_{\mathbb C}(T_{\mathbb C})=\operatorname{nullity}_{\mathbb R}(T)$. If $0\to U\xrightarrow{i}V\xrightarrow{p}W\to0$ is a short exact sequence of real vector spaces, then

$$0\longrightarrow U_{\mathbb C}\xrightarrow{i_{\mathbb C}}V_{\mathbb C}\xrightarrow{p_{\mathbb C}}W_{\mathbb C}\longrightarrow0$$

is a short exact sequence of complex vector spaces.

## Facts & Assumptions

**Given:** A real-linear map $T:V\to W$, and in the exactness clause real-linear maps $i:U\to V$ and $p:V\to W$ with $p\circ i=0$.

[L1] The complexification of a real-linear map is $T_{\mathbb C}(z\otimes v)=z\otimes T(v)$ ([[def-complexification-of-a-real-linear-map]]).

[L2] The canonical isomorphism $\Phi:\mathbb C\otimes_{\mathbb R}V\to V\oplus iV$ satisfies $\Phi(z\otimes v)=z(v,0)$, with inverse $\Psi(v+iw)=1\otimes v+i\otimes w$ ([[thm-tensor-and-direct-sum-models-of-complexification-agree]]).

[L3] Kernel and image of a linear map are linear subspaces, and a linear map is injective exactly when its kernel is zero ([[thm-linear-kernel-image-and-injectivity]]).

[L4] For a linear map from a finite-dimensional space, $\dim V=\operatorname{nullity}T+\operatorname{rank}T$ ([[thm-rank-nullity]]).

[L5] A short exact sequence is exact at every displayed module, so $\operatorname{im}i=\ker p$ at the middle term ([[def-exact-and-short-exact-sequences-of-modules]]).

[L6] Complexification of maps respects composition: $(p\circ i)_{\mathbb C}=p_{\mathbb C}\circ i_{\mathbb C}$ ([[prop-complexification-is-functorial]]).

## Proof

**Proof technique:** direct.

1.1 In the direct-sum model, $T_{\mathbb C}(v+iw)=Tv+iTw$: applying $\Phi$ to the formula of [L1], $\Phi(T_{\mathbb C}(1\otimes v+i\otimes w))=\Phi(1\otimes Tv+i\otimes Tw)=Tv+iTw$ by [L2]. [L1, L2, algebra]

1.2 If $U\le V$ is a real subspace with real basis $u_1,\ldots,u_m$, then every element of $U\oplus iU$ is $\sum_{j\le m}(a_j+ib_j)u_j$ with $a_j,b_j\in\mathbb R$: the real and imaginary components are real combinations of the $u_j$. [L2, algebra]

1.3 The list $u_1,\ldots,u_m$ is complex-linearly independent in $U\oplus iU$: $\sum_j(a_j+ib_j)u_j=0$ means $(\sum_ja_ju_j,\sum_jb_ju_j)=(0,0)$ in $V\oplus iV$, and the real independence of the $u_j$ forces every $a_j=b_j=0$. [L2, algebra]

1.4 By [L6] and the hypothesis $p\circ i=0$, one has $p_{\mathbb C}\circ i_{\mathbb C}=0$, hence $\operatorname{im}i_{\mathbb C}\subseteq\ker p_{\mathbb C}$. [L6, given, algebra]

2.1 $\ker(T_{\mathbb C})=\{v+iw:Tv=Tw=0\}=(\ker T)\oplus i(\ker T)$: the equality of the two descriptions is step 1.1, and by [L3] the kernel of the componentwise map is the complexification of $\ker T$. [step 1.1, L2, L3]

2.2 $\operatorname{im}(T_{\mathbb C})=\{Tv+iTw\}=(\operatorname{im}T)\oplus i(\operatorname{im}T)$, again directly from step 1.1. [step 1.1, L2]

2.3 For a finite-dimensional real subspace $U$, steps 1.2 and 1.3 exhibit $u_1,\ldots,u_m$ as a complex basis of $U\oplus iU$, so $\dim_{\mathbb C}(U\oplus iU)=\dim_{\mathbb R}U$. [step 1.2, step 1.3]

3.1 Combining steps 2.1, 2.2 and 2.3 gives $\operatorname{nullity}_{\mathbb C}(T_{\mathbb C})=\dim_{\mathbb C}\ker(T_{\mathbb C})=\dim_{\mathbb R}\ker T=\operatorname{nullity}_{\mathbb R}(T)$ and the matching rank identity, with rank and nullity as in [L4]. [step 2.1, step 2.2, step 2.3, L4]

3.2 At the middle term, $\ker p_{\mathbb C}=(\ker p)\oplus i(\ker p)=(\operatorname{im}i)\oplus i(\operatorname{im}i)=\operatorname{im}i_{\mathbb C}$ by [L5] and steps 2.1 and 2.2 applied to $i$ and $p$. [step 2.1, step 2.2, L5]

3.3 The map $i_{\mathbb C}$ is injective because $\ker i_{\mathbb C}=(\ker i)\oplus i(\ker i)=0$ by [L3], and $p_{\mathbb C}$ is surjective because $\operatorname{im}p_{\mathbb C}=(\operatorname{im}p)\oplus i(\operatorname{im}p)=W_{\mathbb C}$. [step 2.1, step 2.2, L3]

4.1 By [L5], exactness of the complexified sequence is: $0=\ker i_{\mathbb C}$ at $U_{\mathbb C}$, $\operatorname{im}i_{\mathbb C}=\ker p_{\mathbb C}$ at $V_{\mathbb C}$, and $\operatorname{im}p_{\mathbb C}=W_{\mathbb C}$ at $W_{\mathbb C}$; these are step 3.3, step 3.2 and step 3.3 respectively, with the containment of step 1.4 absorbed into the equality. [step 1.4, step 3.2, step 3.3, L5]

5.1 Steps 2.1 and 2.2 prove the kernel and image formulas, step 3.1 the rank and nullity preservation, and step 4.1 the short-exact-sequence clause. [step 3.1, step 4.1] ∎
