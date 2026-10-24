---
id: thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space
kind: theorem
title: "The fixed points of a conjugation form a real vector space whose complexification recovers the ambient complex space"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conjugation-and-real-structure-on-a-complex-vector-space, def-fixed-real-form-of-a-conjugation, thm-universal-property-and-uniqueness-of-complexification, lem-complex-conjugation-and-modulus-laws, def-complexification-of-a-real-vector-space]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mikhail Troshkin, Real-complex linear algebra and abelian varieties"
      url: "https://derivedartwork.wordpress.com/2021/06/26/real-complex-linear-algebra-and-abelian-varieties/"
    - title: "Keith Conrad, Complexification (notes)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/complexification.pdf"
---

## Statement

Let $\sigma$ be a conjugation on a complex vector space $W$. The fixed real form $W^{\sigma}$ of [[def-fixed-real-form-of-a-conjugation]] is a real subspace of $W_{\mathbb R}$, and the map

$$\theta:\mathbb C\otimes_{\mathbb R}W^{\sigma}\longrightarrow W,\qquad \theta(z\otimes w)=z\,w,$$

is a complex-linear isomorphism whose restriction to the canonical embedding of $W^{\sigma}$ is the inclusion $W^{\sigma}\hookrightarrow W$. Thus the complexification of $W^{\sigma}$ canonically recovers $W$.

## Facts & Assumptions

**Given:** A complex vector space $W$ with a conjugation $\sigma$.

[L1] A conjugation is additive, conjugate-linear, and an involution: $\sigma(w+w')=\sigma w+\sigma w'$, $\sigma(zw)=\overline z\,\sigma w$, $\sigma\sigma w=w$ ([[def-conjugation-and-real-structure-on-a-complex-vector-space]]).

[L2] The fixed real form is $W^{\sigma}=\{w\in W:\sigma w=w\}\subseteq W_{\mathbb R}$ ([[def-fixed-real-form-of-a-conjugation]]).

[L3] A real-linear map $f:W^{\sigma}\to W$ extends to a unique complex-linear map from the complexification of $W^{\sigma}$ ([[thm-universal-property-and-uniqueness-of-complexification]]).

[L4] Complex conjugation satisfies $\overline{z+w}=\overline z+\overline w$, $\overline{zw}=\overline z\,\overline w$ and $\overline{\overline z}=z$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L5] The complexification of a real space carries the scalar action $z'\cdot(z\otimes v)=(z'z)\otimes v$ ([[def-complexification-of-a-real-vector-space]]).

## Proof

**Proof technique:** direct.

1.1 The set $W^{\sigma}$ is a real subspace: it contains $0$, is closed under addition because $\sigma$ is additive by [L1], and is closed under real scalars because $\sigma(rw)=\overline r\,\sigma w=rw$ for $r\in\mathbb R$. [L1, L2]

1.2 Every element of $\mathbb C\otimes_{\mathbb R}W^{\sigma}$ has the form $1\otimes A+i\otimes B$ with $A,B\in W^{\sigma}$: a general finite sum is $\sum_jz_j\otimes w_j=\sum_j(a_j+ib_j)\otimes w_j=\sum_j(a_j+ib_j)\cdot(1\otimes w_j)=1\otimes(\sum_ja_jw_j)+i\otimes(\sum_jb_jw_j)$ by the scalar action of [L5], and the two coefficient sums lie in the real subspace $W^{\sigma}$. [L5, L1, algebra]

2.1 By [L3], the real-linear inclusion $W^{\sigma}\hookrightarrow W$ extends uniquely to a complex-linear map $\theta:\mathbb C\otimes_{\mathbb R}W^{\sigma}\to W$ with $\theta(z\otimes w)=zw$. [step 1.1, L3]

3.1 Surjectivity: for $v\in W$ set $A=(v+\sigma v)/2$ and $B=(v-\sigma v)/(2i)$. By [L1] and [L4], $\sigma A=(v+\sigma v)/2=A$, and $\sigma B=(\sigma v-v)/(2\overline i)=(v-\sigma v)/(2i)=B$ because $\overline i=-i$; hence $A,B\in W^{\sigma}$ by [L2] and $\theta(1\otimes A+i\otimes B)=A+iB=v$. [step 2.1, L1, L2, L4, algebra]

3.2 Injectivity: for $A,B\in W^{\sigma}$ one has $\theta(1\otimes A+i\otimes B)=A+iB$ by step 2.1. If $A+iB=0$, applying $\sigma$ and using [L1] gives $A-iB=0$; subtracting the two identities gives $2iB=0$, hence $B=0$ and then $A=0$, so the tensor $1\otimes A+i\otimes B$ is zero. [step 1.2, step 2.1, L1, algebra]

4.1 Steps 2.1, 3.1 and 3.2 make $\theta$ a complex-linear isomorphism, and its restriction to $\iota W^{\sigma}$ is the inclusion because $\theta(1\otimes A)=A$. [step 2.1, step 3.1, step 3.2] ∎
