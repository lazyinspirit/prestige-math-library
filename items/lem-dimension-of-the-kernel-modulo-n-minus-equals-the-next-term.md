---
id: lem-dimension-of-the-kernel-modulo-n-minus-equals-the-next-term
kind: lemma
title: "Dimension of the kernel modulo n-minus equals the next term (BGG 10.7)"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-bgg-differential-from-signed-verma-maps, lem-surjectivity-modulo-n-minus-for-free-weight-generated-modules, lem-n-minus-coinvariants-map-injectively-into-the-kernel-of-the-differential, lem-tor-with-the-trivial-module-is-computed-by-the-weak-bgg-resolution, def-tor-by-resolving-the-left-module, thm-long-exact-tor-sequence-in-the-left-module-variable, cor-every-module-admits-a-projective-resolution, def-bgg-category-o, thm-every-category-o-object-has-finite-length, lem-finite-b-stable-generators-and-weight-flags-in-category-o, def-axiom-of-choice, def-balanced-tor-bifunctor, prop-tor-zero-is-the-tensor-product-in-either-construction, thm-pbw-model-of-a-verma-module, def-bgg-bruhat-verma-sum-in-degree-k, lem-positive-root-pairings-of-a-dominant-integral-weight, thm-category-o-is-abelian-and-extension-closed, lem-a-proper-verma-submodule-misses-the-highest-weight-line, thm-verma-module-has-a-unique-simple-quotient]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 4.2.3 (BGG Lemma 10.7), pp. 26-29"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "A. Rocha-Caridi, Splitting criteria for modules induced from a subalgebra of a semisimple Lie algebra, Trans. AMS 262 (1980), Sec. 10, Lemma 10.5 and Corollary 10.6, pp. 354-356"
      url: "https://www.ams.org/journals/tran/1980-262-02/S0002-9947-1980-0586721-0/S0002-9947-1980-0586721-0.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\lambda\in\Lambda^+$, let $k\ge0$, and assume that $C_\bullet(\lambda)$ is exact in degrees $0,\dots,k-1$, that is, $\operatorname{im}d_{j+1}=\ker d_j$ for $0\le j\le k-1$ (vacuous for $k=0$). Let $d_k\colon C_k(\lambda)\to C_{k-1}(\lambda)$ be the BGG differential of [[def-bgg-differential-from-signed-verma-maps]]. Then $\ker d_k/\mathfrak n^-\ker d_k$ is finite-dimensional and

$$\dim_{\mathbb C}\ker d_k/\mathfrak n^-\ker d_k=\dim_{\mathbb C}C_{k+1}(\lambda)/\mathfrak n^-C_{k+1}(\lambda)=|W_{k+1}|.$$

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight $\lambda\in\Lambda^+$, an integer $k\ge0$, the BGG complex $C_\bullet(\lambda)$ and the hypothesis that it is exact in degrees $0,\dots,k-1$.

[F1] $\ker d_k$ is an object of $\mathcal O$ of finite length, and every object $M$ of $\mathcal O$ has a finite-dimensional $\mathfrak b$-stable $\mathfrak h$-semisimple generating subspace $E$ with a $\mathfrak b$-flag whose quotients are one dimensional and annihilated by $\mathfrak n^+$; hence $M=U(\mathfrak n^-)E$ and $M/\mathfrak n^-M$ is spanned by the classes of finitely many weight vectors, so it is finite-dimensional ([[thm-category-o-is-abelian-and-extension-closed]], [[lem-finite-b-stable-generators-and-weight-flags-in-category-o]], [[thm-every-category-o-object-has-finite-length]], [[def-bgg-category-o]]).

[F2] $C_{k+1}(\lambda)=\bigoplus_{\ell(w)=k+1}M(w\circ\lambda)$, each $M(\psi)\cong U(\mathfrak n^-)v_\psi$ is free over $U(\mathfrak n^-)$ on its highest weight vector, and $M(\psi)/\mathfrak n^-M(\psi)=\mathbb C\bar v_\psi$ is one-dimensional of weight $\psi$; the weights $w\circ\lambda$ are pairwise distinct, so $\dim_{\mathbb C}C_{k+1}(\lambda)/\mathfrak n^-C_{k+1}(\lambda)=|W_{k+1}|$ ([[thm-pbw-model-of-a-verma-module]], [[def-bgg-bruhat-verma-sum-in-degree-k]], [[lem-positive-root-pairings-of-a-dominant-integral-weight]]).

[F3] $\operatorname{Tor}_{k+1}^{U(\mathfrak n^-)}(\mathbb C,\Pi_\lambda)\cong\mathbb C^{|W_{k+1}|}$, where $\Pi_\lambda=L(\lambda)$ ([[lem-tor-with-the-trivial-module-is-computed-by-the-weak-bgg-resolution]]).

[F4] Tor can be computed from a free (hence projective) resolution $\cdots\to F_2\to F_1\to F_0\to\Pi_\lambda\to0$ of the left module $\Pi_\lambda$: $\operatorname{Tor}_n^{U(\mathfrak n^-)}(\mathbb C,\Pi_\lambda)=H_n(F_\bullet/\mathfrak n^-F_\bullet)$, and the functor $\mathbb C\otimes_{U(\mathfrak n^-)}(-)$ is right exact; free modules and their finite direct sums are projective, so resolutions exist under the Axiom of Choice ([[def-tor-by-resolving-the-left-module]], [[def-balanced-tor-bifunctor]], [[prop-tor-zero-is-the-tensor-product-in-either-construction]], [[thm-long-exact-tor-sequence-in-the-left-module-variable]], [[cor-every-module-admits-a-projective-resolution]]).

[F5] **BGG 10.5, free presentation form** ([[lem-surjectivity-modulo-n-minus-for-free-weight-generated-modules]]): if $N\in\mathcal O$, $M$ is a $U(\mathfrak n^-)$-module free on weight-vector generators $v_1,\dots,v_n$, and $\varphi\colon M\to N$ is $U(\mathfrak n^-)$-linear with every $\varphi(v_i)$ a weight vector, then $\varphi$ is surjective if and only if $\bar\varphi\colon M/\mathfrak n^-M\to N/\mathfrak n^-N$ is surjective.

[F6] **BGG 10.6** ([[lem-n-minus-coinvariants-map-injectively-into-the-kernel-of-the-differential]]): for $j\ge0$, if $C_\bullet(\lambda)$ is exact in degrees $0,\dots,j-1$, then $\bar d_{j+1}\colon C_{j+1}(\lambda)/\mathfrak n^-C_{j+1}(\lambda)\to\ker d_j/\mathfrak n^-\ker d_j$ is injective.

[F7] $\ker d_0=\ker\pi$ is the maximal submodule of $M(\lambda)=C_0(\lambda)$, which does not contain the highest weight vector, and $C_0(\lambda)/\mathfrak n^-C_0(\lambda)=\mathbb C\bar v_\lambda$ has weight $\lambda$ ([[thm-verma-module-has-a-unique-simple-quotient]], [[lem-a-proper-verma-submodule-misses-the-highest-weight-line]], [[thm-pbw-model-of-a-verma-module]]).

## Proof

1.1 By [F1] the space $\ker d_k/\mathfrak n^-\ker d_k$ is finite-dimensional and is spanned by classes of weight vectors; choose weight vectors $v_1,\dots,v_n\in\ker d_k$ whose classes $\bar v_1,\dots,\bar v_n$ form a basis of $\ker d_k/\mathfrak n^-\ker d_k$. By [F2] the space $C_{k+1}(\lambda)/\mathfrak n^-C_{k+1}(\lambda)$ has dimension $|W_{k+1}|$. [F1, F2]

2.1 Let $D:=U(\mathfrak n^-)g_1\oplus\cdots\oplus U(\mathfrak n^-)g_n$ be free on generators $g_i$, and let $\delta\colon D\to\ker d_k$ be the $U(\mathfrak n^-)$-linear map with $\delta(g_i)=v_i$. Its reduction $\bar\delta\colon D/\mathfrak n^-D\to\ker d_k/\mathfrak n^-\ker d_k$ sends the basis $\bar g_i$ to the basis $\bar v_i$, so it is an isomorphism, in particular surjective; the images $\delta(g_i)=v_i$ are weight vectors, so [F5] applied to $M=D$, $N=\ker d_k$ gives that $\delta$ is surjective. Hence $\operatorname{im}\delta=\ker d_k$, and the augmented sequence $D\to C_k(\lambda)\to C_{k-1}(\lambda)\to\cdots\to C_0(\lambda)\to\Pi_\lambda\to0$ is exact: at $D\to C_k$ by surjectivity onto $\ker d_k$, at $C_j$ for $0\le j\le k-1$ by the exactness hypothesis, at $C_k$ because $\operatorname{im}\delta=\ker d_k$, and at $\Pi_\lambda$ because the augmentation is surjective. [F1, F5, step 1.1]

3.1 Every $C_j(\lambda)$ is free over $U(\mathfrak n^-)$ by [F2], and $D$ is free; choose a free $U(\mathfrak n^-)$-module $D_2$ with a surjection $D_2\twoheadrightarrow\ker\delta$ and continue inductively to obtain a free resolution $\cdots\to D_2\to D\to C_k(\lambda)\to\cdots\to C_0(\lambda)\to\Pi_\lambda\to0$ of $\Pi_\lambda$. [F2, F4, step 2.1]

4.1 We compute the two maps that enter $\operatorname{Tor}_{k+1}$. First, applying the right exact functor $\mathbb C\otimes_{U(\mathfrak n^-)}(-)$ to the exact sequence $D_2\to D\xrightarrow{\delta}\ker d_k\to0$ from step 3.1 gives an exact sequence $D_2/\mathfrak n^-D_2\to D/\mathfrak n^-D\to\ker d_k/\mathfrak n^-\ker d_k\to0$ whose second map is the isomorphism $\bar\delta$; hence the first map is zero. Second, if $k\ge1$, applying the functor to the exact sequence $D\xrightarrow{\delta}C_k(\lambda)\xrightarrow{d_k}\ker d_{k-1}\to0$ (exact by step 2.1 and the hypothesis at $k-1$) gives an exact sequence $D/\mathfrak n^-D\to C_k(\lambda)/\mathfrak n^-C_k(\lambda)\xrightarrow{\bar d_k}\ker d_{k-1}/\mathfrak n^-\ker d_{k-1}\to0$; the composite is zero because $d_k\delta=0$, and $\bar d_k$ is injective by [F6] with $j=k-1$ (using exactness in degrees $0,\dots,k-2$, which the hypothesis provides), so the first map is zero. If $k=0$, the map $D/\mathfrak n^-D\to C_0(\lambda)/\mathfrak n^-C_0(\lambda)$ is zero because $\delta(D)\subseteq\ker d_0$, every weight of $\ker d_0$ is different from $\lambda$ by [F7], and $C_0(\lambda)/\mathfrak n^-C_0(\lambda)$ is one-dimensional of weight $\lambda$. [F6, F7, step 2.1, step 3.1]

5.1 By the resolution of step 3.1 and [F4], $\operatorname{Tor}_{k+1}^{U(\mathfrak n^-)}(\mathbb C,\Pi_\lambda)$ is the homology at degree $k+1$ of the complex $\cdots\to D_2/\mathfrak n^-D_2\to D/\mathfrak n^-D\to C_k(\lambda)/\mathfrak n^-C_k(\lambda)\to\cdots$, namely $\ker\bigl(D/\mathfrak n^-D\to C_k(\lambda)/\mathfrak n^-C_k(\lambda)\bigr)/\operatorname{im}\bigl(D_2/\mathfrak n^-D_2\to D/\mathfrak n^-D\bigr)$. Both maps vanish by step 4.1, so this homology equals $D/\mathfrak n^-D$, which is isomorphic to $\ker d_k/\mathfrak n^-\ker d_k$ via $\bar\delta$. [F4, step 4.1]

6.1 Combining steps 1.1, 5.1 and [F3]: $\dim_{\mathbb C}\ker d_k/\mathfrak n^-\ker d_k=\dim_{\mathbb C}\operatorname{Tor}_{k+1}^{U(\mathfrak n^-)}(\mathbb C,\Pi_\lambda)=|W_{k+1}|$, which equals $\dim_{\mathbb C}C_{k+1}(\lambda)/\mathfrak n^-C_{k+1}(\lambda)$ by step 1.1. This proves both equalities. [F1, F2, F3, step 1.1, step 5.1] ∎
