---
id: ex-complexification-of-a-real-polynomial-space
kind: example
title: "Complexifying a real polynomial space gives the same degree bound with complex coefficients"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complexification-of-a-real-vector-space, thm-tensor-and-direct-sum-models-of-complexification-agree, thm-universal-property-and-uniqueness-of-complexification]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
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

## Example

Let $\mathbb R[x]_{\le d}$ be the real vector space of real polynomials of degree at most $d$ and $\mathbb C[x]_{\le d}$ the complex vector space of complex polynomials of degree at most $d$, for a fixed $d\ge0$. Then

$$\mathbb C\otimes_{\mathbb R}\mathbb R[x]_{\le d}\cong\mathbb C[x]_{\le d},\qquad z\otimes p\longmapsto zp,$$

and the canonical embedding $\iota p=1\otimes p$ becomes the inclusion $\mathbb R[x]_{\le d}\subseteq\mathbb C[x]_{\le d}$. Complexification does not raise the degree bound; it only replaces real coefficients by complex ones.

## Facts & Assumptions

**Given:** The real vector space $V=\mathbb R[x]_{\le d}$ and the complex vector space $W=\mathbb C[x]_{\le d}$.

[L1] The complexification $V_{\mathbb C}=\mathbb C\otimes_{\mathbb R}V$ carries the scalar action $z\cdot(w\otimes v)=(zw)\otimes v$ and the real-linear embedding $\iota v=1\otimes v$ ([[def-complexification-of-a-real-vector-space]]).

[L2] The map $\Phi:\mathbb C\otimes_{\mathbb R}V\to V\oplus iV$, $\Phi(z\otimes v)=z(v,0)$, is a complex-linear isomorphism with inverse $\Psi(v+iw)=1\otimes v+i\otimes w$ ([[thm-tensor-and-direct-sum-models-of-complexification-agree]]).

[L3] A real-linear map $f:V\to W$ into a complex vector space extends to a unique complex-linear map $F:V_{\mathbb C}\to W$ with $F(z\otimes v)=z\,f(v)$ ([[thm-universal-property-and-uniqueness-of-complexification]]).

## Verification

**Proof technique:** direct.

1.1 The monomials $1,x,\ldots,x^d$ form a real basis of $\mathbb R[x]_{\le d}$ and a complex basis of $\mathbb C[x]_{\le d}$. [given]

1.2 The real-linear inclusion $f:\mathbb R[x]_{\le d}\hookrightarrow\mathbb C[x]_{\le d}$ extends by [L3] to a unique complex-linear map $F$ with $F(z\otimes p)=zp$; by the scalar action of [L1] this is the map $z\cdot(1\otimes p)\mapsto z\,f(p)$ on the tensor model. [L1, L3]

2.1 By [L2], every element of $\mathbb C\otimes_{\mathbb R}\mathbb R[x]_{\le d}$ is $1\otimes p+i\otimes q$ with $p,q\in\mathbb R[x]_{\le d}$, and $F$ sends it to $p+iq\in\mathbb C[x]_{\le d}$; the monomial images $F(1\otimes x^j)=x^j$ are the complex basis of step 1.1, so $F$ is a complex-linear isomorphism. [L2, step 1.1, step 1.2]

3.1 Degree bound: $p+iq$ has degree at most $d$ because $p$ and $q$ do, so no degree bound is lost; the embedding $\iota p=1\otimes p$ maps to $p$ itself, the inclusion of the real polynomials. [step 1.2, step 2.1]

4.1 Steps 1.2 through 3.1 identify the complexification with $\mathbb C[x]_{\le d}$ and the canonical embedding with the inclusion. [step 2.1, step 3.1] ∎
