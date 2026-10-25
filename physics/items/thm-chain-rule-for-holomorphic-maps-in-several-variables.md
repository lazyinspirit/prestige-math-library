---
id: thm-chain-rule-for-holomorphic-maps-in-several-variables
kind: theorem
title: "The composite of holomorphic maps is holomorphic and its complex Jacobian is the product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-holomorphic-map-and-complex-jacobian, thm-componentwise-holomorphy-in-several-complex-variables, prop-holomorphic-functions-are-continuous-and-separately-holomorphic, thm-matrix-of-a-composite-is-the-product, lem-euclidean-linear-maps-have-matrices-and-are-bounded, def-coordinate-column-and-matrix-of-a-linear-map, thm-chain-rule-for-total-derivatives, def-euclidean-linear-map, rem-complex-euclidean-space-dictionary, lem-standard-basis-of-f-n, def-matrices-over-a-commutative-ring, lem-complex-conjugation-and-modulus-laws, def-metric-topology, def-metric-ball]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.3"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $m,n,p\ge1$, let $U\subseteq\mathbb C^m$ and $V\subseteq\mathbb C^n$ be open,
let $F:U\to\mathbb C^n$ have $F(U)\subseteq V$ and be holomorphic at $a\in U$,
and let $G:V\to\mathbb C^p$ be holomorphic at $F(a)$. Then $G\circ F$ is
holomorphic at $a$ with

$$D(G\circ F)(a)=DG(F(a))\circ DF(a),\qquad J_{\mathbb C}(G\circ F)(a)=J_{\mathbb C}G(F(a))\,J_{\mathbb C}F(a).$$

## Facts & Assumptions

**Given:** Open sets $U\subseteq\mathbb C^m$ and $V\subseteq\mathbb C^n$, a map $F:U\to V$ holomorphic at $a$, and $G:V\to\mathbb C^p$ holomorphic at $F(a)$; the spaces are read through [[rem-complex-euclidean-space-dictionary]].

[L1] $F$ is holomorphic at $a$ when there is a $\mathbb C$-linear $L$ with $F(a+h)=F(a)+L(h)+r(h)$ and $\lVert r(h)\rVert/\lVert h\rVert\to0$; $L$ is unique, written $DF(a)$, and $J_{\mathbb C}F(a)$ is its matrix in the standard bases ([[def-holomorphic-map-and-complex-jacobian]], [[def-coordinate-column-and-matrix-of-a-linear-map]], [[def-matrices-over-a-commutative-ring]]).

[L2] A map into $\mathbb C^n$ is holomorphic exactly when each component is, with $DF(a)h$ the tuple of the component differentials ([[thm-componentwise-holomorphy-in-several-complex-variables]]).

[L3] A holomorphic function of several variables is continuous ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]).

[L4] $[S\circ T]_{\mathcal B}^{\mathcal D}=[S]_{\mathcal C}^{\mathcal D}[T]_{\mathcal B}^{\mathcal C}$ for linear $T:U'\to V'$ and $S:V'\to W'$ with ordered bases $\mathcal B,\mathcal C,\mathcal D$ ([[thm-matrix-of-a-composite-is-the-product]]).

[L5] For every linear $L:\mathbb R^{m'}\to\mathbb R^{n'}$ there is $K\ge0$ with $\lVert Lh\rVert_2\le K\lVert h\rVert_2$ ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]), the notion of linear map being that of [[def-euclidean-linear-map]].

[L6] If $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[L7] Every $h$ satisfies $h=\sum_{k<m}h_ke_k$ in the standard basis ([[lem-standard-basis-of-f-n]]).

[L8] $|z+w|\le|z|+|w|$ for complex $z,w$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L9] A set is open exactly when each of its points admits a ball inside it ([[def-metric-topology]], [[def-metric-ball]]).

## Proof

**Proof technique:** direct.

1.1 Write $F(a+h)=F(a)+DF(a)h+r_F(h)$ and, for $\kappa\in\mathbb C^n$ small, $G(F(a)+\kappa)=G(F(a))+DG(F(a))\kappa+r_G(\kappa)$ as in [L1], with $\lVert r_F(h)\rVert=o(\lVert h\rVert)$, $\lVert r_G(\kappa)\rVert=o(\lVert\kappa\rVert)$ and $r_G(0)=0$. By [L5], read through the dictionary, there are $K,K'\ge0$ with $\lVert DF(a)h\rVert\le K\lVert h\rVert$ and $\lVert DG(F(a))\kappa\rVert\le K'\lVert\kappa\rVert$. [given, L1, L5]

2.1 Put $\kappa(h)=DF(a)h+r_F(h)$, so $F(a+h)=F(a)+\kappa(h)$; by step 1.1 and [L8] there is $\delta>0$ with $\lVert\kappa(h)\rVert\le(K+1)\lVert h\rVert$ whenever $\lVert h\rVert<\delta$ and $a+h\in U$, and $F(a+h)\in V$ because $F(U)\subseteq V$. [step 1.1, L8, L9]

3.1 Substituting, $G(F(a+h))=G(F(a))+DG(F(a))DF(a)h+\varrho(h)$ with $\varrho(h)=DG(F(a))r_F(h)+r_G(\kappa(h))$. By step 1.1 the first summand has norm at most $K'\lVert r_F(h)\rVert=o(\lVert h\rVert)$; by step 2.1 the second has norm $o(\lVert\kappa(h)\rVert)$ with $\lVert\kappa(h)\rVert\le(K+1)\lVert h\rVert$, hence $o(\lVert h\rVert)$, the value at $h$ with $\kappa(h)=0$ being $0$. So $\lVert\varrho(h)\rVert=o(\lVert h\rVert)$ by [L8]. [step 1.1, step 2.1, L8]

4.1 The composite $DG(F(a))\circ DF(a)$ is $\mathbb C$-linear, being a composite of $\mathbb C$-linear maps, so step 3.1 and [L1] make $G\circ F$ holomorphic at $a$ with $D(G\circ F)(a)=DG(F(a))\circ DF(a)$; this agrees with the real chain rule of [L6] read through the dictionary, by the uniqueness in [L1]. [step 3.1, L1, L6]

5.1 Taking matrices in the standard bases, [L4] turns step 4.1 into $J_{\mathbb C}(G\circ F)(a)=J_{\mathbb C}G(F(a))J_{\mathbb C}F(a)$, the entries being read off at the basis vectors by [L2], [L3] and [L7]. [step 4.1, L1, L2, L3, L4, L7] ∎
