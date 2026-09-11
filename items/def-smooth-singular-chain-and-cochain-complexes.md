---
id: "def-smooth-singular-chain-and-cochain-complexes"
kind: "definition"
title: "Smooth singular chain and cochain complexes"
deps: ["def-real-singular-chain-complex", "def-real-singular-cochain-complex", "def-smooth-singular-simplex"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://people.math.harvard.edu/~pspark/derham.pdf"
      locator: "DG-16 item 13; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: published
origin: "pipeline"
---

## Definition

For a smooth manifold $M$, possibly with boundary, let
$$C_k^\infty(M;\mathbb R)=\mathbb R^{(S_k^\infty(M))}\quad(k\ge0),\qquad C_k^\infty(M;\mathbb R)=0\quad(k<0),$$
using [[def-smooth-singular-simplex]]. It is the subspace of [[def-real-singular-chain-complex]] spanned by the smooth simplices, with the same signed face differential.

This is a subcomplex: an affine face map $\delta_i:A^{k-1}\to A^k$ has the open inverse image $\delta_i^{-1}(O)$ containing $\Delta^{k-1}$. Composing $\bar\sigma$ with this affine map on that inverse image extends $\sigma\delta_i$ smoothly into $M$. Thus every face is smooth, and the already proved signed cancellation gives $\partial^2=0$ on this subspace.

Define the **smooth singular cochain complex** by
$$C_\infty^k(M;\mathbb R)=\operatorname{Hom}_{\mathbb R}(C_k^\infty(M;\mathbb R),\mathbb R),\qquad \delta\varphi=\varphi\partial.$$
As for [[def-real-singular-cochain-complex]], these are arbitrary real functions on the supplied smooth-simplex basis, evaluated by finite sums. Precomposition gives $\delta^2\varphi=\varphi\partial^2=0$. Define $H_k^\infty(M;\mathbb R)=\ker\partial_k/\operatorname{im}\partial_{k+1}$ and $H_\infty^k(M;\mathbb R)=\ker\delta^k/\operatorname{im}\delta^{k-1}$; both quotients are licensed by square-zero.

Negative groups vanish and the degree-zero boundary is zero. On a point all simplices are smooth, so the complexes are the ordinary unnormalized point complexes; no constant simplices are discarded. For the empty manifold all groups are zero. The specified subspaces and duals require no choice of extensions or bases.
