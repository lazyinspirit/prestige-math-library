---
id: prop-christoffel-formula-for-the-levi-civita-connection
kind: proposition
title: "Christoffel formula for the levi civita connection"
status: published
origin: pipeline
deps: ["thm-fundamental-theorem-of-riemannian-geometry","lem-koszul-formula-is-necessary-for-a-levi-civita-connection","def-christoffel-symbols-of-an-affine-connection","prop-coordinate-formula-for-the-lie-bracket"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

In coordinates for a Riemannian metric with matrix $(g_{ij})$ and inverse $(g^{ij})$, its Levi–Civita symbols are
$$\Gamma^k{}_{ij}=\tfrac12\sum_\ell g^{k\ell}(\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij}).$$

## Facts & Assumptions

**Given:** A supplied Riemannian metric and a coordinate chart.

[F1] The unique Levi–Civita connection exists ([[thm-fundamental-theorem-of-riemannian-geometry]]).

[F2] It obeys the Koszul formula ([[lem-koszul-formula-is-necessary-for-a-levi-civita-connection]]).

[F3] Symbols are its coordinate derivative coefficients ([[def-christoffel-symbols-of-an-affine-connection]]).

[F4] Coordinate fields commute ([[prop-coordinate-formula-for-the-lie-bracket]]).

## Proof

1.1 Insert $X=\partial_i,Y=\partial_j,Z=\partial_\ell$ in the Koszul identity. All bracket terms vanish, giving $2\sum_k\Gamma^k{}_{ij}g_{k\ell}=\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij}$. [F1, F2, F3, F4]

2.1 Multiply by $g^{m\ell}$ and sum over $\ell$. Since $\sum_\ell g_{k\ell}g^{m\ell}=\delta_k^m$, division by two gives the claimed expression. Constant metric coefficients give zero symbols, dimension one gives $\Gamma^1{}_{11}=g_{11}'/(2g_{11})$, and dimension zero gives an empty formula. Inverting a positive-definite matrix is legitimate at every point, including boundary points. [step 1.1] ∎
