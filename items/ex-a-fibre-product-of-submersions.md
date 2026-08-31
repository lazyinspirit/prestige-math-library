---
id: ex-a-fibre-product-of-submersions
kind: example
title: "A fibre product of submersions"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [def-transverse-smooth-maps,
       thm-transverse-fibre-product-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Example

Let $F,G:\mathbb R^2\to\mathbb R$ be the projections

$$ F(x,y)=x,\qquad G(u,v)=u. $$

Then

$$ \mathbb R^2\times_{\mathbb R}\mathbb R^2 =\{(x,y,u,v):x=u\} $$

is an embedded $3$-dimensional submanifold of $\mathbb R^4$.

## Facts & Assumptions

**Given:** The two projection maps $F$ and $G$.

[L1] Two smooth maps to the same target are transverse when their differential images span the target tangent space at every common value ([[def-transverse-smooth-maps]]).

[L2] Transverse fibre products are embedded submanifolds ([[thm-transverse-fibre-product-theorem]]).

## Verification
**Proof technique:** direct.

1.1 If $F(x,y)=G(u,v)$, then both differentials are the row matrix [L1, given, algebra]
$\begin{bmatrix}1&0\end{bmatrix}$, so
$$ dF_{(x,y)}(T_{(x,y)}\mathbb R^2)+dG_{(u,v)}(T_{(u,v)}\mathbb R^2)=\mathbb R. $$
Therefore [L1] gives $F\pitchfork G$. [L1, given, algebra]

2.1 By [L2], the fibre product is an embedded submanifold of $\mathbb R^4$. [L2, step 1.1, algebra]
Its
defining equation $x=u$ cuts the ambient dimension down by one, so it is
$3$-dimensional. [L2, step 1.1, algebra]

3.1 Thus the coincidence set of two coordinate projections is a concrete fibre product of submersions. [step 2.1] ∎
