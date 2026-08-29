---
id: cor-a-nonreal-eigenvector-produces-an-invariant-real-two-plane
kind: corollary
title: "A nonreal eigenvector yields an invariant real two-plane and the standard rotation-scaling block"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-nonreal-generalised-eigenspaces-occur-in-conjugate-pairs, thm-a-complex-linear-operator-comes-from-a-real-operator-exactly-when-it-commutes-with-the-chosen-conjugation, thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Complexification (notes)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/complexification.pdf"
---

## Statement

Let $T:V\to V$ be an endomorphism of a real vector space, identify $V$ with the fixed real form of the canonical conjugation on $V_{\mathbb C}$, and suppose $w=u+iv$ with $u,v\in V$ is an eigenvector of $T_{\mathbb C}$ with eigenvalue $\lambda=a+bi$, where $b\neq0$. Then $u$ and $v$ are $\mathbb R$-linearly independent, $\operatorname{span}_{\mathbb R}\{u,v\}$ is $T$-invariant, and with respect to the ordered basis $(u,-v)$ the matrix of $T$ restricted to that plane is

$$\begin{pmatrix}a&-b\\ b&a\end{pmatrix}.$$

Moreover $\sigma(w)=u-iv$ is an eigenvector of $T_{\mathbb C}$ with eigenvalue $\overline\lambda=a-bi$.

## Facts & Assumptions

**Given:** A real vector space $V$, an endomorphism $T$, and an eigenvector $w=u+iv$ of $T_{\mathbb C}$ with eigenvalue $\lambda=a+bi$, where $u,v\in V$ and $b\neq0$.

[L1] Every element of $V_{\mathbb C}$ is uniquely $u+iv$ with $u,v$ in the fixed real form $V$ ([[thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space]]).

[L2] The canonical conjugation interchanges the generalised eigenspaces of $\lambda$ and $\overline\lambda$ ([[thm-nonreal-generalised-eigenspaces-occur-in-conjugate-pairs]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the decomposition $w=u+iv$ with $u,v\in V$ is unique. Both $u$ and $v$ are nonzero: if $v=0$ then $w$ lies in $V$ and $T_{\mathbb C}w=\lambda w$ forces $b=0$; symmetrically $u=0$ would give the same contradiction for the coefficient of $i$. [L1, given, algebra]

2.1 Expanding $T_{\mathbb C}(u+iv)=\lambda(u+iv)$ gives $Tu+iTv=(au-bv)+i(bu+av)$; comparing the $V$- and $iV$-components, which are unique by [L1], yields $Tu=au-bv$ and $Tv=bu+av$. [step 1.1, algebra]

2.2 The conjugate vector is an eigenvector for $\overline\lambda$: $\sigma(w)=u-iv$ lies in $G^{(1)}_{\overline\lambda}(T_{\mathbb C})$ by [L2] applied with $e=1$. [step 1.1, L2]

3.1 The vectors $u,v$ are $\mathbb R$-linearly independent: if $u$ and $v$ were dependent, then, since both are nonzero, $v=\alpha u$ for a real $\alpha$, so $w=(1+i\alpha)u$ and dividing the eigen-equation by $1+i\alpha\neq0$ gives $T_{\mathbb C}u=\lambda u$. But $T_{\mathbb C}u=Tu$ lies in $V$, while $\lambda u=au+biu$ has nonzero $i$-component $bu$, contradicting uniqueness of the components in [L1]. [step 1.1, step 2.1, L1, algebra]

3.2 The plane is invariant and the block appears: $Tu=au-bv=au+b(-v)$ and $T(-v)=-(bu+av)=-bu+a(-v)$ by step 2.1, so in the ordered basis $(u,-v)$ the two columns are $\binom{a}{b}$ and $\binom{-b}{a}$. [step 2.1, algebra]

4.1 Steps 3.1 and 3.2 prove the independence, invariance and matrix claims, and step 2.2 the conjugate eigenvector claim. [step 2.2, step 3.1, step 3.2] ∎
