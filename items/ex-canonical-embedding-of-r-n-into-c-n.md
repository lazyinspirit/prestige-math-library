---
id: ex-canonical-embedding-of-r-n-into-c-n
kind: example
title: "The standard embedding $\\mathbb R^n\\hookrightarrow\\mathbb C^n$ is the canonical complexification map"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complexification-of-a-real-vector-space, thm-tensor-and-direct-sum-models-of-complexification-agree, thm-a-real-basis-complexifies-to-a-complex-basis]
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

Take $V=\mathbb R^n$ with its standard real basis $e_1,\ldots,e_n$. The identification

$$\mathbb C\otimes_{\mathbb R}\mathbb R^n\cong\mathbb C^n,\qquad z\otimes e_j\longmapsto z e_j,$$

carries the canonical embedding $\iota x=1\otimes x$ of [[def-complexification-of-a-real-vector-space]] to the standard inclusion $\mathbb R^n\hookrightarrow\mathbb C^n$ that views a real coordinate vector as a complex one. For $n=0$ both sides are the zero space.

## Facts & Assumptions

**Given:** The standard real basis $(e_1,\ldots,e_n)$ of $\mathbb R^n$ and the canonical embedding $\iota$.

[L1] The complexification $V_{\mathbb C}=\mathbb C\otimes_{\mathbb R}V$ carries the scalar action $z\cdot(w\otimes v)=(zw)\otimes v$ and the real-linear embedding $\iota v=1\otimes v$ ([[def-complexification-of-a-real-vector-space]]).

[L2] The map $\Phi:\mathbb C\otimes_{\mathbb R}V\to V\oplus iV$, $\Phi(z\otimes v)=z(v,0)$, is a complex-linear isomorphism with inverse $\Psi(v+iw)=1\otimes v+i\otimes w$ ([[thm-tensor-and-direct-sum-models-of-complexification-agree]]).

[L3] A real ordered basis becomes a complex ordered basis after complexification ([[thm-a-real-basis-complexifies-to-a-complex-basis]]).

## Verification

**Proof technique:** direct.

1.1 The list $(e_1,\ldots,e_n)$ is a real basis of $\mathbb R^n$ by definition of the standard basis. [given]

1.2 By [L2], $\mathbb C\otimes_{\mathbb R}\mathbb R^n\cong\mathbb R^n\oplus i\mathbb R^n$ through $\Phi$, and the assignment $(x,y)\mapsto x+iy$, taken coordinatewise, is a complex-linear isomorphism $\mathbb R^n\oplus i\mathbb R^n\to\mathbb C^n$: complex scalar multiplication $(a+bi)\cdot(x,y)=(ax-by,ay+bx)$ is sent to $(ax-by)+i(ay+bx)=(a+bi)(x+iy)$. [L2, algebra]

2.1 Composing, the element $z\otimes e_j$ maps to $z(e_j,0)$ and then to the $j$th standard complex vector scaled by $z$; additivity extends this to every tensor. [step 1.2, algebra]

3.1 For $x=(x_1,\ldots,x_n)$ one has $\iota x=1\otimes x=\sum_jx_j(1\otimes e_j)$, which step 2.1 sends to $\sum_jx_je_j=x$; this is exactly the standard inclusion of $\mathbb R^n$ into $\mathbb C^n$, and by [L3] the images $\iota e_j=e_j$ form the complex basis of the complexification. [L1, L3, step 2.1]

4.1 Steps 1.2 and 3.1 identify the complexification with $\mathbb C^n$ and the canonical embedding with the standard inclusion. [step 1.2, step 3.1] ∎
