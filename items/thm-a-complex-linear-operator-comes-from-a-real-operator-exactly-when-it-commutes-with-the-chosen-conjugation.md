---
id: thm-a-complex-linear-operator-comes-from-a-real-operator-exactly-when-it-commutes-with-the-chosen-conjugation
kind: theorem
title: "A complex-linear operator comes from a real operator exactly when it commutes with the chosen conjugation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complexification-of-a-real-linear-map, def-conjugation-and-real-structure-on-a-complex-vector-space, def-fixed-real-form-of-a-conjugation, thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space, prop-complexification-is-functorial, cor-real-forms-correspond-to-conjugations]
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
    - title: "Keith Conrad, Complexification (notes)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/complexification.pdf"
---

## Statement

Let $W$ be a complex vector space, let $\sigma$ be a conjugation on $W$, let $V=W^{\sigma}$ be its fixed real form, and let $\theta:V_{\mathbb C}\to W$ be the canonical isomorphism of [[thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space]]. A complex-linear operator $T:W\to W$ commutes with $\sigma$ if and only if $T=\theta\circ S_{\mathbb C}\circ\theta^{-1}$ for a real-linear operator $S:V\to V$; in that case $S$ is unique and is the restriction $S=T|_V$.

## Facts & Assumptions

**Given:** A complex vector space $W$, a conjugation $\sigma$ with fixed real form $V=W^{\sigma}$, and a complex-linear operator $T:W\to W$.

[L1] The complexification of a real-linear map $S$ is $S_{\mathbb C}(z\otimes v)=z\otimes S(v)$ ([[def-complexification-of-a-real-linear-map]]).

[L2] A conjugation is conjugate-linear and an involution; the canonical conjugation on $V_{\mathbb C}$ is $\sigma_{\operatorname{can}}(z\otimes v)=\overline z\otimes v$, and $\sigma=\theta\circ\sigma_{\operatorname{can}}\circ\theta^{-1}$ ([[def-conjugation-and-real-structure-on-a-complex-vector-space]], [[cor-real-forms-correspond-to-conjugations]]).

[L3] The fixed real form is $V=W^{\sigma}=\{w:\sigma w=w\}$ ([[def-fixed-real-form-of-a-conjugation]]).

[L4] The map $\theta(z\otimes v)=zv$ is a complex-linear isomorphism, and $\theta(1\otimes v)=v$ ([[thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space]]).

## Proof

**Proof technique:** direct.

1.1 If $T=\theta\circ S_{\mathbb C}\circ\theta^{-1}$ for a real-linear $S$, then $T$ commutes with $\sigma$: for $w=\theta(z\otimes v)$, one has $T\sigma w=\theta S_{\mathbb C}\theta^{-1}\theta\sigma_{\operatorname{can}}(z\otimes v)=\theta S_{\mathbb C}(\overline z\otimes v)=\theta(\overline z\otimes Sv)$, while $\sigma Tw=\theta\sigma_{\operatorname{can}}\theta^{-1}\theta(z\otimes Sv)=\theta(\overline z\otimes Sv)$ by [L1] and [L2]. [L1, L2, L4, algebra]

1.2 Conversely, if $T\sigma=\sigma T$, then $V$ is invariant under $T$: for $v\in V$, $\sigma(Tv)=T\sigma v=Tv$, so $Tv\in V$ by [L3]; the restriction $S:=T|_V:V\to V$ is therefore a well-defined real-linear operator. [L2, L3]

2.1 With this $S$, one has $\theta\circ S_{\mathbb C}\circ\theta^{-1}=T$: for $w=\theta(z\otimes v)$, $\theta S_{\mathbb C}(z\otimes v)=\theta(z\otimes Sv)=z\cdot Sv=T(z\,v)=T(\theta(z\otimes v))=Tw$, using [L1], the complex-linearity of $T$, and the identity $\theta(1\otimes v)=v$ of [L4]. [step 1.2, L1, L4, algebra]

3.1 Uniqueness: if $T=\theta\circ S_{\mathbb C}\circ\theta^{-1}=\theta\circ R_{\mathbb C}\circ\theta^{-1}$, then $S_{\mathbb C}=R_{\mathbb C}$ because $\theta$ is an isomorphism, and evaluating on $1\otimes v$ gives $\iota\,Sv=S_{\mathbb C}(1\otimes v)=R_{\mathbb C}(1\otimes v)=\iota\,Rv$, whence $Sv=Rv$ by the injectivity of the embedding in [L4]. [step 2.1, L1, L4]

4.1 Steps 1.1, 2.1 and 3.1 together prove both directions of the claimed equivalence, the concrete description of $S$ as the restriction, and its uniqueness. [step 1.1, step 2.1, step 3.1] ∎
