---
id: prop-the-bgg-differential-squares-to-zero
kind: proposition
title: The BGG differential squares to zero
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-bgg-differential-from-signed-verma-maps, lem-bruhat-rank-two-intervals-are-diamonds, lem-compatible-signs-exist-on-the-bruhat-graph, lem-bruhat-covers-give-unique-verma-embeddings, def-bgg-bruhat-verma-sum-in-degree-k, def-chain-complex-in-an-abelian-category, def-axiom-of-choice, thm-verma-module-has-a-unique-simple-quotient]
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
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 4.1 Step 1, p. 14"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "N. Hemelsoet and R. Voorhaar, A computer algorithm for the BGG resolution, arXiv:1911.00871, Sec. 2.2 (solving $d^2=0$ square-wise), pp. 4-5"
      url: "https://arxiv.org/pdf/1911.00871"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). With the maps $d_k$ of [[def-bgg-differential-from-signed-verma-maps]], $d_{k-1}\circ d_k=0$ for all $k\ge2$; with $d_0$ included the augmented sequence is a complex of $\mathfrak g$-modules

$$0\to C_{|\Phi^+|}(\lambda)\to\cdots\to C_1(\lambda)\to C_0(\lambda)\to L(\lambda)\to0.$$

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight $\lambda\in\Lambda^+$, the degree-$k$ Verma sums $C_k(\lambda)=\bigoplus_{\ell(w)=k}M(w\circ\lambda)$ with $\mathfrak g$-homomorphisms $d_k\colon C_k(\lambda)\to C_{k-1}(\lambda)$ for $k\ge1$ and $d_0=\pi\colon M(\lambda)\twoheadrightarrow L(\lambda)$.

[F1] $d_k$ is the morphism whose $(w,w')$-component is $\varepsilon(w,w')\iota_{w\to w'}$ when $w\rhd w'$ and $0$ otherwise, where $\iota_{w\to w'}\colon M(w\circ\lambda)\hookrightarrow M(w'\circ\lambda)$ is the canonical cover embedding; $C_k(\lambda)=0$ for $k>|\Phi^+|$. Composition of morphisms of direct sums multiplies matrices of components: for $\ell(w_1)=k$ and $\ell(w_4)=k-2$ the $(w_1,w_4)$-component of $d_{k-1}\circ d_k$ is $\sum_{\ell(w_2)=k-1}(d_{k-1})_{w_2,w_4}\circ(d_k)_{w_1,w_2}$ ([[def-bgg-differential-from-signed-verma-maps]], [[def-bgg-bruhat-verma-sum-in-degree-k]]).

[F2] Each $\iota_{w\to w'}$ is injective with image a proper submodule of $M(w'\circ\lambda)$, and for a length-two saturated path $w_1\rhd m\rhd w_4$ the composite $\iota_{m\to w_4}\circ\iota_{w_1\to m}$ is the canonical inclusion of $M(w_1\circ\lambda)$ into $M(w_4\circ\lambda)$, independent of the middle element $m$ ([[lem-bruhat-covers-give-unique-verma-embeddings]]).

[F3] If $w_4<w_1$ and $\ell(w_1)=\ell(w_4)+2$, then there are exactly two elements $m_1\ne m_2$ with $w_1\rhd m_i\rhd w_4$, and $[w_4,w_1]=\{w_4,m_1,m_2,w_1\}$ ([[lem-bruhat-rank-two-intervals-are-diamonds]]).

[F4] On every square the four signs multiply to $-1$; equivalently the two saturated paths of a rank-two interval carry opposite total signs: $\varepsilon(w_1,m_1)\varepsilon(m_1,w_4)=-\varepsilon(w_1,m_2)\varepsilon(m_2,w_4)$ ([[lem-compatible-signs-exist-on-the-bruhat-graph]]).

[F5] The kernel of $\pi\colon M(\lambda)\twoheadrightarrow L(\lambda)$ is the unique maximal submodule $J(\lambda)$ of $M(\lambda)$, the sum of all proper submodules; in particular every proper submodule of $M(\lambda)$ is contained in $\ker\pi$ ([[thm-verma-module-has-a-unique-simple-quotient]]).

[F6] $C_k(\lambda)=0$ for $k>|\Phi^+|$, so $d_k=0$ for $k>|\Phi^+|+1$ ([[def-bgg-bruhat-verma-sum-in-degree-k]]).

## Proof

1.1 Fix $k\ge2$, $w_1$ of length $k$ and $w_4$ of length $k-2$. By [F1] the $(w_1,w_4)$-component of $d_{k-1}\circ d_k$ is $\sum_{\ell(w_2)=k-1}\varepsilon(w_1,w_2)\varepsilon(w_2,w_4)\,\iota_{w_2\to w_4}\circ\iota_{w_1\to w_2}$, where a term is present only when $w_1\rhd w_2\rhd w_4$ and is zero otherwise, because $(d_k)_{w_1,w_2}=0$ unless $w_1\rhd w_2$ and $(d_{k-1})_{w_2,w_4}=0$ unless $w_2\rhd w_4$. [F1]

1.2 The case $k=1$: $d_0\circ d_1=\pi\circ d_1$. Each summand of $C_1(\lambda)$ maps under $d_1$ into $M(\lambda)$ through a scalar multiple of a cover embedding $\iota_{s_i\to e}$ whose image is a proper submodule of $M(\lambda)$, hence is contained in $J(\lambda)=\ker\pi$ by [F5]; therefore $\pi\circ d_1=0$. [F1, F2, F5]

2.1 If no $w_2$ with $w_1\rhd w_2\rhd w_4$ exists, every term of step 1.1 vanishes and the component is $0$. If such a $w_2$ exists, then $w_4<w_1$ with $\ell(w_1)=\ell(w_4)+2$, so by [F3] the only two candidates are $m_1,m_2$ and the component equals $\varepsilon(w_1,m_1)\varepsilon(m_1,w_4)\,\iota_{m_1\to w_4}\circ\iota_{w_1\to m_1}+\varepsilon(w_1,m_2)\varepsilon(m_2,w_4)\,\iota_{m_2\to w_4}\circ\iota_{w_1\to m_2}$. [F3, step 1.1]

3.1 In the situation of the second case of step 2.1, the two composites are equal: both are the canonical inclusion $M(w_1\circ\lambda)\hookrightarrow M(w_4\circ\lambda)$ by [F2]. The two coefficients are opposite by [F4]. Hence the component is $(\varepsilon(w_1,m_1)\varepsilon(m_1,w_4)+\varepsilon(w_1,m_2)\varepsilon(m_2,w_4))\,\iota=0$, where $\iota$ denotes the common composite. [F2, F4, step 2.1]

4.1 The cases outside $2\le k\le|\Phi^+|+1$: for $k>|\Phi^+|+1$ one has $C_k(\lambda)=0$ and $d_k=0$ by [F6]; for $k<0$ there is no differential. In all ranges the components of $d_{k-1}\circ d_k$ that lie in the ranges where a factor is zero vanish, and the remaining components are those treated in steps 3.1 and 1.2. [F6, step 3.1, step 1.2]

5.1 All components of $d_{k-1}\circ d_k$ vanish for every $k\ge1$: for $k\ge2$ by steps 1.1, 2.1 and 3.1 with [F6], for $k=1$ by step 1.2. Hence $d_{k-1}\circ d_k=0$ for all $k\ge2$, and with $d_0$ included the augmented sequence $0\to C_{|\Phi^+|}(\lambda)\to\cdots\to C_1(\lambda)\to C_0(\lambda)\to L(\lambda)\to0$ is a complex of $\mathfrak g$-modules, i.e. a chain complex in $\mathcal O$ ([[def-chain-complex-in-an-abelian-category]]). [step 3.1, step 1.2, step 4.1] ∎
