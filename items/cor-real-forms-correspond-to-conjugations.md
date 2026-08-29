---
id: cor-real-forms-correspond-to-conjugations
kind: corollary
title: "Real forms of a complex vector space correspond exactly to conjugations"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space, def-conjugation-and-real-structure-on-a-complex-vector-space, def-fixed-real-form-of-a-conjugation, thm-tensor-and-direct-sum-models-of-complexification-agree]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Mikhail Troshkin, Real-complex linear algebra and abelian varieties"
      url: "https://derivedartwork.wordpress.com/2021/06/26/real-complex-linear-algebra-and-abelian-varieties/"
---

## Statement

Let $W$ be a complex vector space. Call a real subspace $V\le W_{\mathbb R}$ a **real form** of $W$ when the map $\theta:V_{\mathbb C}\to W$, $\theta(z\otimes v)=zv$, is a complex-linear isomorphism. Then the assignments

$$\sigma\longmapsto W^{\sigma}\qquad\text{and}\qquad V\longmapsto\sigma_V,$$

where $\sigma_V$ is the conjugation on $W$ transported from the canonical conjugation of $V_{\mathbb C}$ along $\theta$, are inverse bijections between the conjugations of $W$ and the real forms of $W$. The canonical conjugation of [[def-conjugation-and-real-structure-on-a-complex-vector-space]] is $\sigma_{\operatorname{can}}(z\otimes v)=\overline z\otimes v$.

## Facts & Assumptions

**Given:** A complex vector space $W$.

[L1] The fixed points of a conjugation form a real subspace whose complexification recovers the ambient complex space ([[thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space]]).

[L2] A conjugation is additive, conjugate-linear, and an involution; on the complexification $V_{\mathbb C}$ of a real space the canonical conjugation is $\sigma_{\operatorname{can}}(z\otimes v)=\overline z\otimes v$ ([[def-conjugation-and-real-structure-on-a-complex-vector-space]]).

[L3] The fixed real form of a conjugation is the real subspace of its fixed points ([[def-fixed-real-form-of-a-conjugation]]).

[L4] Every element of the complexification $V_{\mathbb C}$ is uniquely $1\otimes A+i\otimes B$ with $A,B\in V$ ([[thm-tensor-and-direct-sum-models-of-complexification-agree]]).

## Proof

**Proof technique:** direct.

1.1 For a conjugation $\sigma$, the subspace $W^{\sigma}$ is a real form of $W$: by [L1] the complexification of $W^{\sigma}$ recovers $W$ through the multiplication map, which is exactly the defining condition. [L1]

1.2 The fixed points of $\sigma_{\operatorname{can}}$ on $V_{\mathbb C}$ are the embedded copy of $V$: by [L4] an element is uniquely $1\otimes A+i\otimes B$, and $\sigma_{\operatorname{can}}(1\otimes A+i\otimes B)=1\otimes A-i\otimes B$ by [L2], which equals itself exactly when $i\otimes B=-i\otimes B$, hence $B=0$. [L2, L4, algebra]

1.3 For a real form $V$ with isomorphism $\theta:V_{\mathbb C}\to W$, define $\sigma_V(w)=\theta(\sigma_{\operatorname{can}}(\theta^{-1}w))$. It is additive and conjugate-linear because $\theta$ is complex-linear and $\sigma_{\operatorname{can}}$ has these properties by [L2], and it is an involution because $\sigma_{\operatorname{can}}^2=\operatorname{id}$. [L2, given, algebra]

2.1 If $V=W^{\sigma}$ came from a conjugation $\sigma$, then $\sigma_V=\sigma$: for $w=A+iB$ with $A,B\in W^{\sigma}$, step 1.3 gives $\sigma_V(w)=\theta(1\otimes A-i\otimes B)=A-iB$, while $\sigma(A+iB)=A+\overline iB=A-iB$ by [L2]. [step 1.3, L1, L2]

2.2 If $\sigma_V$ came from a real form $V$, then $W^{\sigma_V}=\theta(\{1\otimes A:A\in V\})=V$: the fixed points of $\sigma_V$ in $W$ are the $\theta$-images of the fixed points of $\sigma_{\operatorname{can}}$, which step 1.2 identifies with the embedded copy of $V$, and $\theta(1\otimes A)=A$ by the real-form condition. [step 1.2, step 1.3, L3]

3.1 Steps 1.1, 2.1 and 2.2 show that the two assignments compose to the identity in both orders, so they are inverse bijections. [step 1.1, step 2.1, step 2.2] ∎
