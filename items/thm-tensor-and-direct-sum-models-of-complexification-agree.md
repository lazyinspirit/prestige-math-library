---
id: thm-tensor-and-direct-sum-models-of-complexification-agree
kind: theorem
title: "The tensor and direct-sum models of complexification are canonically complex-linearly isomorphic"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complexification-of-a-real-vector-space, def-direct-sum-model-of-complexification, thm-universal-property-of-module-tensor-products]
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
    - title: "Mikhail Troshkin, Real-complex linear algebra and abelian varieties"
      url: "https://derivedartwork.wordpress.com/2021/06/26/real-complex-linear-algebra-and-abelian-varieties/"
---

## Statement

Let $V$ be a real vector space. The map

$$\Phi:\mathbb C\otimes_{\mathbb R}V\longrightarrow V\oplus iV,\qquad \Phi(z\otimes v):=z(v,0),$$

is a complex-linear isomorphism between the tensor model of [[def-complexification-of-a-real-vector-space]] and the direct-sum model of [[def-direct-sum-model-of-complexification]]. Its inverse is

$$\Psi:V\oplus iV\longrightarrow \mathbb C\otimes_{\mathbb R}V,\qquad \Psi(v+iw):=1\otimes v+i\otimes w.$$

## Facts & Assumptions

**Given:** A real vector space $V$, with $\mathbb C$ regarded as a real vector space through $\mathbb R\subseteq\mathbb C$.

[L1] The complexification $V_{\mathbb C}=\mathbb C\otimes_{\mathbb R}V$ carries the complex scalar action $z'\cdot(z\otimes v)=(z'z)\otimes v$ and the real-linear embedding $\iota v=1\otimes v$ ([[def-complexification-of-a-real-vector-space]]).

[L2] The direct-sum model is $V\oplus iV$ with $(a+bi)\cdot(v,w)=(av-bw,\,aw+bv)$, written $v+iw=(v,w)$ ([[def-direct-sum-model-of-complexification]]).

[L3] Every $\mathbb R$-balanced map $b:\mathbb C\times V\to A$ into a real vector space $A$ extends uniquely to an $\mathbb R$-linear map $\mathbb C\otimes_{\mathbb R}V\to A$ sending $z\otimes v$ to $b(z,v)$ ([[thm-universal-property-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 The map $b:\mathbb C\times V\to V\oplus iV$, $b(z,v)=z(v,0)$, is $\mathbb R$-bilinear: it is additive in each variable because the addition in $V\oplus iV$ is componentwise, and for $r\in\mathbb R$ one has $b(zr,v)=(zr)(v,0)=z(r(v,0))=z(rv,0)=b(z,rv)$ by [L2]. [given, L2, algebra]

2.1 By [L3] there is a unique $\mathbb R$-linear map $\Phi:\mathbb C\otimes_{\mathbb R}V\to V\oplus iV$ with $\Phi(z\otimes v)=z(v,0)$. [step 1.1, L3]

3.1 The map $\Psi(v+iw)=1\otimes v+i\otimes w$ satisfies $\Psi\circ\Phi=\operatorname{id}$ on elementary tensors: writing $z=a+bi$, one has $\Psi(\Phi(z\otimes v))=\Psi(av+ibv)=1\otimes(av)+i\otimes(bv)=a(1\otimes v)+b(i\otimes v)=(a+bi)(1\otimes v)=z\otimes v$ by the scalar action of [L1]. [step 2.1, L1, L2, algebra]

3.2 Conversely $\Phi\circ\Psi=\operatorname{id}$: $\Phi(1\otimes v+i\otimes w)=(v,0)+i(w,0)=(v,0)+(0,w)=(v,w)=v+iw$ by [L2]. [step 2.1, L1, L2, algebra]

3.3 The map $\Phi$ is complex-linear: for $z,z'\in\mathbb C$, $\Phi(z'\cdot(z\otimes v))=\Phi((z'z)\otimes v)=(z'z)(v,0)=z'(z(v,0))=z'\Phi(z\otimes v)$ by [L1] and [L2], and the identity extends from elementary tensors by additivity. [step 2.1, L1, L2, algebra]

4.1 Steps 3.1 and 3.2 make $\Phi$ bijective with inverse $\Psi$, and step 3.3 makes it complex-linear, so $\Phi$ is the claimed canonical complex-linear isomorphism. [step 3.1, step 3.2, step 3.3] ∎
