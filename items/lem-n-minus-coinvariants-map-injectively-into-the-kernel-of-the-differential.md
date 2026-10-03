---
id: lem-n-minus-coinvariants-map-injectively-into-the-kernel-of-the-differential
kind: lemma
title: "The BGG differential induces an injection into kernel coinvariants (BGG 10.6)"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-bruhat-covers-give-unique-verma-embeddings, def-bgg-differential-from-signed-verma-maps, lem-surjectivity-modulo-n-minus-for-free-weight-generated-modules, lem-kernel-generators-for-the-weak-bgg-complex, lem-nonzero-highest-weight-images-survive-modulo-n-minus, thm-pbw-model-of-a-verma-module, def-axiom-of-choice, prop-the-bgg-differential-squares-to-zero, def-bgg-bruhat-verma-sum-in-degree-k, lem-positive-root-pairings-of-a-dominant-integral-weight, lem-finite-weyl-strong-exchange-and-deletion, def-bgg-category-o]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 4.2.2, pp. 22-24"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "A. Rocha-Caridi, Splitting criteria for modules induced from a subalgebra of a semisimple Lie algebra, Trans. AMS 262 (1980), Sec. 10, Lemma 10.5, pp. 354-355"
      url: "https://www.ams.org/journals/tran/1980-262-02/S0002-9947-1980-0586721-0/S0002-9947-1980-0586721-0.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\lambda\in\Lambda^+$, let $k\ge0$, and assume that $C_\bullet(\lambda)$ is exact in degrees $0,\dots,k-1$, that is, $\operatorname{im}d_{j+1}=\ker d_j$ for $0\le j\le k-1$ (vacuous for $k=0$). Let $d_{k+1}\colon C_{k+1}(\lambda)\to C_k(\lambda)$ be the BGG differential of [[def-bgg-differential-from-signed-verma-maps]]. Then the induced map

$$\bar d_{k+1}\colon C_{k+1}(\lambda)/\mathfrak n^-C_{k+1}(\lambda)\to\ker d_k/\mathfrak n^-\ker d_k$$

is injective.

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight $\lambda\in\Lambda^+$, an integer $k\ge0$, the BGG complex $C_\bullet(\lambda)$ together with the hypothesis that it is exact in degrees $0,\dots,k-1$, and the induced map $\bar d_{k+1}$ on $\mathfrak n^-$-coinvariants.

[F1] $C_{k+1}(\lambda)=\bigoplus_{\ell(w)=k+1}M(w\circ\lambda)$; each $M(w\circ\lambda)\cong U(\mathfrak n^-)v_w$ is free over $U(\mathfrak n^-)$ on its highest weight vector $v_w$, and $M(w\circ\lambda)/\mathfrak n^-M(w\circ\lambda)=\mathbb C\bar v_w$ with $\bar v_w$ of weight $w\circ\lambda$; the weights $w\circ\lambda$ for $w\in W_{k+1}$ are pairwise distinct, so $\{\bar v_w:w\in W_{k+1}\}$ is a basis of $C_{k+1}(\lambda)/\mathfrak n^-C_{k+1}(\lambda)$ consisting of $\mathfrak h$-eigenvectors of distinct weights ([[thm-pbw-model-of-a-verma-module]], [[def-bgg-bruhat-verma-sum-in-degree-k]], [[lem-positive-root-pairings-of-a-dominant-integral-weight]], [[def-bgg-category-o]]).

[F2] $d_{k+1}$ is a $\mathfrak g$-homomorphism, hence $\mathfrak h$-equivariant, and $d_k\circ d_{k+1}=0$; therefore $d_{k+1}$ maps $C_{k+1}(\lambda)$ into $\ker d_k$, and its restriction $\varphi_w:=d_{k+1}|_{M(w\circ\lambda)}$ to each summand is a $\mathfrak g$-homomorphism $M(w\circ\lambda)\to\ker d_k$; the induced map $\bar d_{k+1}$ on coinvariants is $\mathfrak h$-equivariant because $\mathfrak n^-C_{k+1}(\lambda)$ and $\mathfrak n^-\ker d_k$ are $\mathfrak h$-stable ([[prop-the-bgg-differential-squares-to-zero]], [[def-bgg-differential-from-signed-verma-maps]], [[def-bgg-category-o]]).

[F3] For $w\in W_{k+1}$ the vector $d_{k+1}(v_w)$ is nonzero. Its component in the summand $M(w'\circ\lambda)$ of $C_k(\lambda)$ is $\varepsilon(w,w')\iota_{w\to w'}(v_w)$ for every cover $w\rhd w'$; since $\ell(w)=k+1\ge1$ there is at least one such cover, because for a suitable simple reflection $s_i$ one has $\ell(ws_i)=\ell(w)-1$ and then $ws_i\lhd w$ is a cover; each $\iota_{w\to w'}$ is injective, so each displayed component is nonzero, and a tuple of vectors in a direct sum is nonzero as soon as one component is ([[def-bgg-differential-from-signed-verma-maps]], [[lem-bruhat-covers-give-unique-verma-embeddings]], [[lem-finite-weyl-strong-exchange-and-deletion]]).

[F4] **BGG 10.6b** ([[lem-nonzero-highest-weight-images-survive-modulo-n-minus]]): if $M\in\mathcal O$ has all composition factors of the form $L(u\circ\lambda)$ with $\ell(u)\ge\ell(w_0)$, and $\varphi\colon M(w_0\circ\lambda)\to M$ satisfies $\varphi(v)\ne0$ for a highest weight vector $v$, then $\varphi(v)\notin\mathfrak n^-M$.

[F5] **BGG 10.6a** ([[lem-kernel-generators-for-the-weak-bgg-complex]]): under the present hypothesis, every composition factor of $\ker d_k$ is of the form $L(u\circ\lambda)$ with $\ell(u)\ge k+1$; moreover $\ker d_k$ is an object of $\mathcal O$, being a subobject of $C_k(\lambda)\in\mathcal O$ ([[def-bgg-category-o]]).

[F6] If an $\mathfrak h$-equivariant linear map between $\mathfrak h$-semisimple modules is nonzero on each vector of a basis consisting of eigenvectors of pairwise distinct weights, then it is injective: the images are nonzero eigenvectors of pairwise distinct weights, hence linearly independent. This is ordinary linear algebra ([[def-bgg-category-o]]).

## Proof

1.1 By [F1] the domain $C_{k+1}(\lambda)/\mathfrak n^-C_{k+1}(\lambda)$ has the basis $\{\bar v_w\}$ of eigenvectors of pairwise distinct weights, and $\bar d_{k+1}$ is $\mathfrak h$-equivariant by [F2]. Suppose $\bar d_{k+1}(\bar v_w)\ne0$ for every $w$. Then the images $\bar d_{k+1}(\bar v_w)$ are nonzero eigenvectors of the pairwise distinct weights $w\circ\lambda$; by the linear algebra in [F6] they are linearly independent, so $\bar d_{k+1}$ is injective on the basis and therefore injective. [F1, F2, F6]

1.2 Fix $w\in W_{k+1}$. By [F3] $d_{k+1}(v_w)\ne0$, and by [F2] $d_{k+1}$ takes values in $\ker d_k$, so $\varphi_w(v_w)=d_{k+1}(v_w)\ne0$. [F2, F3]

2.1 Apply [F4] with $M=\ker d_k$ and $w_0=w$. By [F5], every composition factor of $\ker d_k$ is $L(u\circ\lambda)$ with $\ell(u)\ge k+1=\ell(w)$; $\ker d_k\in\mathcal O$; and $\varphi_w\colon M(w\circ\lambda)\to\ker d_k$ is a $\mathfrak g$-homomorphism with $\varphi_w(v_w)\ne0$. Hence $\varphi_w(v_w)\notin\mathfrak n^-\ker d_k$, i.e. the class of $d_{k+1}(v_w)$ in $\ker d_k/\mathfrak n^-\ker d_k$ is nonzero. But that class is exactly $\bar d_{k+1}(\bar v_w)$. [F4, F5, step 1.2]

3.1 Since $w\in W_{k+1}$ was arbitrary, step 2.1 shows $\bar d_{k+1}(\bar v_w)\ne0$ for every basis vector; by step 1.1 the map $\bar d_{k+1}$ is injective. [step 1.1, step 2.1] ∎
