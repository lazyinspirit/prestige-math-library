---
id: lem-kernel-generators-for-the-weak-bgg-complex
kind: lemma
title: "Composition factors of the BGG kernel lie above the degree (BGG 10.6a)"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-bgg-differential-from-signed-verma-maps, thm-weak-bgg-resolution, lem-jordan-holder-factors-of-verma-modules-lie-above-the-head, def-composition-series-and-composition-factors-of-an-object, thm-every-category-o-object-has-finite-length, thm-category-o-is-abelian-and-extension-closed, def-axiom-of-choice, def-verma-type-of-a-module-with-a-standard-filtration, def-verma-module, def-bgg-bruhat-verma-sum-in-degree-k, def-chain-complex-in-an-abelian-category]
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
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 4.2.2 (BGG Lemma 10.6a), pp. 22-25"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "A. Rocha-Caridi, Splitting criteria for modules induced from a subalgebra of a semisimple Lie algebra, Trans. AMS 262 (1980), Sec. 9 and Sec. 10, pp. 349-354"
      url: "https://www.ams.org/journals/tran/1980-262-02/S0002-9947-1980-0586721-0/S0002-9947-1980-0586721-0.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\lambda\in\Lambda^+$, let $k\ge0$, and let $d_k\colon C_k(\lambda)\to C_{k-1}(\lambda)$ be the BGG differential of [[def-bgg-differential-from-signed-verma-maps]] (with $d_0=\pi$ the augmentation). Assume that the complex $C_\bullet(\lambda)$ is exact in degrees $0,\dots,k-1$, that is, $\operatorname{im}d_{j+1}=\ker d_j$ for $0\le j\le k-1$; this hypothesis is vacuous for $k=0$. If a simple module $L(\mu)$ occurs in a composition series of $\ker d_k$, then $\mu=u\circ\lambda$ with $\ell(u)\ge k+1$. Equivalently, no composition factor of $\ker d_k$ has the form $L(u\circ\lambda)$ with $\ell(u)\le k$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight $\lambda\in\Lambda^+$, an integer $k\ge0$, the BGG complex $C_\bullet(\lambda)$ with differentials $d_j$, and the hypothesis that $C_\bullet(\lambda)$ is exact in degrees $0,\dots,k-1$.

[F1] The weak BGG resolution: $0\to B_{|\Phi^+|}(\lambda)\to\cdots\to B_1(\lambda)\to B_0(\lambda)\to\Pi_\lambda\to0$ is an exact complex of objects of $\mathcal O$ and $\operatorname{Typ}B_i(\lambda)=\{w\circ\lambda:\ell(w)=i\}$ with each weight occurring once ([[thm-weak-bgg-resolution]], [[def-verma-type-of-a-module-with-a-standard-filtration]]).

[F2] $C_i(\lambda)=\bigoplus_{\ell(w)=i}M(w\circ\lambda)$ is a direct sum of Verma modules and $B_i(\lambda)$ is Verma-filtered with type $\{w\circ\lambda:\ell(w)=i\}$, so the multiset of Jordan-Holder factors is $\operatorname{JH}C_i=\bigsqcup_{\ell(w)=i}\operatorname{JH}M(w\circ\lambda)=\operatorname{JH}B_i$: the factors of a direct sum and of a filtration are the multiset unions of the factors of the pieces, and the factors of $M(w\circ\lambda)$ are independent of the filtration ([[def-bgg-differential-from-signed-verma-maps]], [[def-bgg-bruhat-verma-sum-in-degree-k]], [[def-composition-series-and-composition-factors-of-an-object]]).

[F3] If a simple module $L(\mu)$ occurs in a composition series of $M(w\circ\lambda)$, then $\mu=u\circ\lambda$ with $u\ge w$ in Bruhat order, so $\ell(u)\ge\ell(w)$; every composition factor of $C_i(\lambda)$ therefore has the form $L(u\circ\lambda)$ with $\ell(u)\ge i$ ([[lem-jordan-holder-factors-of-verma-modules-lie-above-the-head]]).

[F4] For a short exact sequence $0\to A\to B\to C\to0$ of objects of $\mathcal O$ the multisets satisfy $\operatorname{JH}B=\operatorname{JH}A\uplus\operatorname{JH}C$; hence equalities of two of the multisets force the equality of the third, and $\operatorname{JH}A\subseteq\operatorname{JH}B$ for a subobject $A\subseteq B$. Objects of $\mathcal O$ have finite length and $\mathcal O$ is abelian ([[thm-category-o-is-abelian-and-extension-closed]], [[thm-every-category-o-object-has-finite-length]], [[def-composition-series-and-composition-factors-of-an-object]]).

[F5] The complex $B_\bullet(\lambda)$ is exact at every degree (it is a resolution), while $C_\bullet(\lambda)$ is a complex; by hypothesis it is exact at degrees $0,\dots,k-1$ ([[thm-weak-bgg-resolution]], [[def-bgg-differential-from-signed-verma-maps]], [[def-chain-complex-in-an-abelian-category]]).

## Proof

1.1 The comparison chain. We prove $\operatorname{JH}\ker d_i=\operatorname{JH}\ker d^B_i$ for all $0\le i\le k$ by induction on $i$. Base $i=0$: the augmentation $\Pi_\lambda=B_0(\lambda)/\ker d^B_0=C_0(\lambda)/\ker d_0$ is the same simple module, so $\operatorname{JH}(B_0/\ker d^B_0)=\operatorname{JH}(C_0/\ker d_0)$, and [F2] gives $\operatorname{JH}B_0=\operatorname{JH}C_0$; by the additivity of [F4] applied to $0\to\ker d^B_0\to B_0\to B_0/\ker d^B_0\to0$ and to the same sequence for $C_0$, the equality of the middle and quotient multisets gives $\operatorname{JH}\ker d^B_0=\operatorname{JH}\ker d_0$. [F2, F4, F5]

2.1 Induction step. Let $1\le i\le k$ and assume $\operatorname{JH}\ker d^B_{i-1}=\operatorname{JH}\ker d_{i-1}$. By exactness of $B_\bullet$ at $i-1$ we have $\operatorname{im}d^B_i=\ker d^B_{i-1}$, and by the hypothesis of the statement (which covers $i-1\le k-1$) we have $\operatorname{im}d_i=\ker d_{i-1}$; hence $\operatorname{JH}\operatorname{im}d^B_i=\operatorname{JH}\operatorname{im}d_i$. The first isomorphism theorem applied in the abelian category gives $\operatorname{im}d^B_i\cong B_i/\ker d^B_i$ and $\operatorname{im}d_i\cong C_i/\ker d_i$, so $\operatorname{JH}(B_i/\ker d^B_i)=\operatorname{JH}(C_i/\ker d_i)$. Since $\operatorname{JH}B_i=\operatorname{JH}C_i$ by [F2], additivity [F4] applied to the two short exact sequences $0\to\ker d^B_i\to B_i\to B_i/\ker d^B_i\to0$ and $0\to\ker d_i\to C_i\to C_i/\ker d_i\to0$ yields $\operatorname{JH}\ker d^B_i=\operatorname{JH}\ker d_i$. [F2, F4, F5, step 1.1, F1]

3.1 At $i=k$, the comparison gives $\operatorname{JH}\ker d_k=\operatorname{JH}\ker d^B_k$. Exactness gives $\ker d^B_k=\operatorname{im}d^B_{k+1}$. Applying [F4] to $0\to\ker d^B_{k+1}\to B_{k+1}\to\operatorname{im}d^B_{k+1}\to0$ yields $\operatorname{JH}\ker d_k=\operatorname{JH}\operatorname{im}d^B_{k+1}\subseteq\operatorname{JH}B_{k+1}$. [F4, F5, step 1.1, step 2.1]

4.1 By [F2] $\operatorname{JH}B_{k+1}=\bigsqcup_{\ell(w)=k+1}\operatorname{JH}M(w\circ\lambda)$, and by [F3] every simple factor in this union is $L(u\circ\lambda)$ with $\ell(u)\ge k+1$. Hence every composition factor of $\ker d_k$ is of the form $L(u\circ\lambda)$ with $\ell(u)\ge k+1$, which proves the main assertion. [F2, F3, step 3.1]

5.1 For the equivalent formulation, note first that $\ker d_k\subseteq C_k(\lambda)$, so every factor of $\ker d_k$ is a factor of $C_k(\lambda)$ and hence, by [F3], of the form $L(u\circ\lambda)$ with $\ell(u)\ge k$. Given step 4.1, the condition "no factor of $\ker d_k$ has the form $L(u\circ\lambda)$ with $\ell(u)\le k$" is therefore equivalent to the main assertion. [F3, step 4.1] ∎
