---
id: thm-universal-property-and-uniqueness-of-complexification
kind: theorem
title: "Complexification is initial for real-linear maps into complex vector spaces, and is unique up to unique isomorphism"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complexification-of-a-real-vector-space, thm-tensor-and-direct-sum-models-of-complexification-agree, cor-module-tensor-products-are-unique-up-to-unique-isomorphism]
aliases: []
landmark: true
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

Let $V$ be a real vector space and let $\iota:V\to V_{\mathbb C}$ be the canonical real-linear embedding of [[def-complexification-of-a-real-vector-space]]. For every complex vector space $W$ and every real-linear map $f:V\to W$ there is a unique complex-linear map $F:V_{\mathbb C}\to W$ with $F\circ\iota=f$, namely $F(z\otimes v)=z\,f(v)$.

Moreover, if $U$ is a complex vector space and $\iota':V\to U$ is a real-linear map with the same property, then there is a unique complex-linear isomorphism $u:V_{\mathbb C}\to U$ with $u\circ\iota=\iota'$.

## Facts & Assumptions

**Given:** A real vector space $V$ with canonical embedding $\iota:V\to V_{\mathbb C}$, and a real-linear map $f:V\to W$ into a complex vector space $W$.

[L1] The complexification carries the scalar action $z'\cdot(z\otimes v)=(z'z)\otimes v$ and $\iota(v)=1\otimes v$ ([[def-complexification-of-a-real-vector-space]]).

[L2] Every $\mathbb R$-balanced map $b:\mathbb C\times V\to A$ extends uniquely to an $\mathbb R$-linear map out of $\mathbb C\otimes_{\mathbb R}V$ ([[thm-universal-property-of-module-tensor-products]]).

[L3] Two pairs representing the same class of balanced maps are related by a unique isomorphism commuting with the structure maps, obtained by applying each universal property to the other pair ([[cor-module-tensor-products-are-unique-up-to-unique-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 The map $b:\mathbb C\times V\to W$ given by $b(z,v)=z\,f(v)$ is $\mathbb R$-bilinear and $\mathbb R$-balanced: additivity follows from the linearity of $f$ in $v$ and the distributivity of complex scalar multiplication, and $b(zr,v)=(zr)f(v)=z(r\,f(v))=z\,f(rv)=b(z,rv)$ for $r\in\mathbb R$. [given, L2, algebra]

1.2 Uniqueness of any extension: if $G:V_{\mathbb C}\to W$ is complex-linear with $G\circ\iota=f$, then $G(z\otimes v)=G(z\cdot(1\otimes v))=z\,G(1\otimes v)=z\,f(v)$ on every elementary tensor by [L1], so its values are already determined, and elementary tensors generate $V_{\mathbb C}$. [L1, given, algebra]

2.1 By [L2] there is a unique $\mathbb R$-linear map $F:V_{\mathbb C}\to W$ with $F(z\otimes v)=z\,f(v)$. [step 1.1, L2]

3.1 The map $F$ is complex-linear: by the scalar action of [L1], $F(z'\cdot(z\otimes v))=F((z'z)\otimes v)=(z'z)f(v)=z'(z\,f(v))=z'F(z\otimes v)$, and additivity extends the identity to all of $V_{\mathbb C}$. [step 2.1, L1, algebra]

3.2 The map $F$ satisfies $F\circ\iota=f$ because $F(\iota(v))=F(1\otimes v)=f(v)$ by [L1]. [step 2.1, L1]

3.3 Uniqueness: steps 1.2 and 2.1 show that any complex-linear extension $G$ with $G\circ\iota=f$ agrees with $F$ on every elementary tensor, hence everywhere, so $G=F$. [step 1.2, step 2.1]

4.1 For the uniqueness up to unique isomorphism, apply the universal property of $(V_{\mathbb C},\iota)$ to $\iota'$ to get a unique complex-linear $u:V_{\mathbb C}\to U$ with $u\circ\iota=\iota'$, and the universal property of $(U,\iota')$ to $\iota$ to get $v:U\to V_{\mathbb C}$ with $v\circ\iota'=\iota$. Both $v\circ u$ and $\operatorname{id}$ carry $\iota$ to itself, and both $u\circ v$ and $\operatorname{id}$ carry $\iota'$ to itself, so step 3.3 forces both composites to be identities; this is the two-application argument recorded in [L3]. [step 3.3, L3]

5.1 Steps 3.1 and 3.2 prove the universal property, step 3.3 its uniqueness clause, and step 4.1 the uniqueness of the representing pair up to unique isomorphism. [step 3.1, step 3.2, step 3.3, step 4.1] ∎
