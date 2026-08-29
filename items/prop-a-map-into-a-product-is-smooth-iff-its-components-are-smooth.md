---
id: prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth
kind: proposition
title: "A map into a product is smooth iff its components are smooth"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure,
       def-c-r-and-smooth-maps-between-smooth-manifolds,
       thm-product-universal-property]
justified_by: []
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
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.4"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

Let $P$, $M$, and $N$ be smooth manifolds, let $F:P\to M\times N$ be a map, and
write

$$f:=\pi_M\circ F,\qquad g:=\pi_N\circ F,$$

where $\pi_M$ and $\pi_N$ are the product projections. Then $F$ is smooth if and
only if both component maps $f:P\to M$ and $g:P\to N$ are smooth.

## Facts & Assumptions

**Given:** Smooth manifolds $P$, $M$, $N$; a map $F:P\to M\times N$; and its components $f:=\pi_M\circ F$, $g:=\pi_N\circ F$.

[F1] The product $M\times N$ carries a canonical smooth structure whose smooth charts are represented by product charts $\bigl(V\times W,\ \varphi\times\psi\bigr)$ built from smooth charts $(V,\varphi)$ of $M$ and $(W,\psi)$ of $N$ ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

[F2] A map between smooth manifolds is smooth exactly when it is continuous and, in smooth charts, one coordinate representative is smooth near each point ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L1] A map into a product is continuous exactly when its two components are continuous ([[thm-product-universal-property]]).

[A1] For open Euclidean sets $A\subseteq\mathbb R^a$, $B\subseteq\mathbb R^b$, and $U\subseteq\mathbb R^m$, a map $H:U\to A\times B$ is smooth if and only if its two components are smooth, because all coordinate partial derivatives of $H$ are exactly the coordinate partial derivatives of the component maps.

## Proof

**Proof technique:** direct.

1.1 Assume $F$ is smooth, and fix $p\in P$ with charts as below. By [F2] it is continuous, so [L1] makes both components $f$ and $g$ continuous. Fix $p\in P$ and choose a smooth chart $(U,\alpha)$ of $P$ at $p$, smooth charts $(V,\varphi)$ of $M$ at $f(p)$ and $(W,\psi)$ of $N$ at $g(p)$, and the product chart $\bigl(V\times W,\varphi\times\psi\bigr)$ of $M\times N$ at $F(p)$ from [F1]. [given, F1, F2, L1, choose]

2.1 Conversely assume that $f$ and $g$ are smooth, and fix $p\in P$ with charts as below. Then [F2] makes them continuous, so [L1] makes $F$ continuous. Fix $p\in P$ and choose smooth charts $(U,\alpha)$ of $P$, $(V,\varphi)$ of $M$, and $(W,\psi)$ of $N$ exactly as in step 1.1. [F1, F2, L1, choose]

3.1 In the charts chosen in steps 1.1 and 2.1, the representative of $F$ is the pair $((\varphi\times\psi)\circ F\circ\alpha^{-1})(x)=\bigl(\varphi\circ f\circ\alpha^{-1}(x),\psi\circ g\circ\alpha^{-1}(x)\bigr)$. Under the hypothesis of step 1.1, the left-hand side is smooth, so [A1] makes the two component representatives smooth; since $p$ was arbitrary, $f$ and $g$ are smooth by [F2]. Under the hypothesis of step 2.1, the two component representatives are smooth by [F2], so [A1] makes the left-hand side smooth, and [F2] makes $F$ smooth at $p$, hence everywhere. [F1, F2, A1, step 1.1, step 2.1]

4.1 Step 3.1 proves both directions of the equivalence. [step 3.1] ∎
