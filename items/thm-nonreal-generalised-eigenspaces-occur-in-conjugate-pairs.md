---
id: thm-nonreal-generalised-eigenspaces-occur-in-conjugate-pairs
kind: theorem
title: "For a real operator, nonreal generalised eigenspaces of the complexification occur in conjugate pairs"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conjugation-and-real-structure-on-a-complex-vector-space, thm-a-complex-linear-operator-comes-from-a-real-operator-exactly-when-it-commutes-with-the-chosen-conjugation, def-primary-component-and-generalised-eigenspace]
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
    - title: "Keith Conrad, Complexification (notes)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/complexification.pdf"
---

## Statement

Let $T:V\to V$ be an endomorphism of a real vector space, let $\sigma=\sigma_{\operatorname{can}}$ be the canonical conjugation of $V_{\mathbb C}$, and let $\lambda\in\mathbb C$ and $e\ge1$. Then

$$\sigma\bigl(G^{(e)}_{\lambda}(T_{\mathbb C})\bigr)=G^{(e)}_{\overline\lambda}(T_{\mathbb C}).$$

Thus for nonreal $\lambda$ the generalised eigenspaces of $T_{\mathbb C}$ for $\lambda$ and for $\overline\lambda$ are interchanged by the real-linear involution $\sigma$, and they have the same real dimension.

## Facts & Assumptions

**Given:** A real vector space $V$, an endomorphism $T:V\to V$, a complex scalar $\lambda$, and an exponent $e\ge1$.

[L1] A conjugation is conjugate-linear and an involution ([[def-conjugation-and-real-structure-on-a-complex-vector-space]]).

[L2] The complexification of a real operator commutes with the canonical conjugation, because it comes from a real operator ([[thm-a-complex-linear-operator-comes-from-a-real-operator-exactly-when-it-commutes-with-the-chosen-conjugation]]).

[L3] The generalised eigenspace of exponent $e$ is $G^{(e)}_{\lambda}(T_{\mathbb C})=\ker(T_{\mathbb C}-\lambda I)^e$ ([[def-primary-component-and-generalised-eigenspace]]).

## Proof

**Proof technique:** direct.

1.1 The operator $T_{\mathbb C}$ commutes with $\sigma$ by [L2], and $\sigma$ is an $\mathbb R$-linear involution, hence a bijection, with $\sigma(zw)=\overline z\,\sigma w$ by [L1]. [L1, L2]

2.1 The powers commute with $\sigma$ up to conjugation of the scalar: for $w\in V_{\mathbb C}$, $\sigma(T_{\mathbb C}w-\lambda w)=T_{\mathbb C}\sigma w-\overline\lambda\,\sigma w$ by step 1.1 and [L1]; iterating this $e$ times gives $\sigma(T_{\mathbb C}-\lambda I)^e=(T_{\mathbb C}-\overline\lambda I)^e\sigma$. [step 1.1, L1, algebra]

3.1 If $w\in\ker(T_{\mathbb C}-\lambda I)^e$, then $(T_{\mathbb C}-\overline\lambda I)^e\sigma w=\sigma(T_{\mathbb C}-\lambda I)^ew=\sigma(0)=0$, so $\sigma w\in G^{(e)}_{\overline\lambda}(T_{\mathbb C})$ by [L3]. [step 2.1, L3]

3.2 Conversely, if $w'\in G^{(e)}_{\overline\lambda}(T_{\mathbb C})$, then $w:=\sigma w'$ satisfies $(T_{\mathbb C}-\lambda I)^ew=\sigma(T_{\mathbb C}-\overline\lambda I)^ew'=0$, so $w\in G^{(e)}_{\lambda}(T_{\mathbb C})$; since $\sigma$ is an involution, the two inclusions combine to the equality $\sigma(G^{(e)}_{\lambda}(T_{\mathbb C}))=G^{(e)}_{\overline\lambda}(T_{\mathbb C})$. [step 2.1, L1, L3]

4.1 Because $\sigma$ is real-linear and bijective by step 1.1, the two generalised eigenspaces have the same real dimension; for nonreal $\lambda$ they form the conjugate pair interchanged by $\sigma$. [step 1.1, step 3.2] ∎
