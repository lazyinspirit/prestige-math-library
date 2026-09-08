---
id: ex-surface-density-and-outward-normal-on-a-graph
kind: example
title: Graph density and outward orientation
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter §1.10.3, graph surface element and Example 1.43, printed p. 16 (PDF p. 22). The affine numerical instance is computed here.
status: published
origin: pipeline
proof_strategy: direct
deps: ["lem-surface-integral-is-independent-of-c-one-boundary-charts"]
---

## Example

For a subgraph $z<h(y)$ in $\mathbb R^n$, the boundary chart $X(y)=(y,h(y))$ has $dS=\sqrt{1+|Dh|^2}\,dy$ and $\nu\,dS=(-Dh,1)\,dy$. If $h(y)=a\cdot y+b$, both factors are constant. In $\mathbb R^3$, the patch $h(y_1,y_2)=2y_1-y_2+3$, $0<y_1,y_2<1$, has area $\sqrt6$ and upward flux 1 for $F=e_3$. Assume the surface-measure convention $\mathrm{AC}_\omega$.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Use the subgraph $z<h(y)$, and then the affine function and unit-square patch specified in the Example.

[F1] The graph density and outward normal are well defined. ([[lem-surface-integral-is-independent-of-c-one-boundary-charts]]).

## Verification

1.1 The tangent columns are $(e_i,\partial_i h)$, so $DX^TDX=I+Dh(Dh)^T$ and F1 gives density $\sqrt{1+|Dh|^2}$. The vector $(-Dh,1)$ has zero dot product with each tangent column, length $\sqrt{1+|Dh|^2}$, and positive last component. It points out of $z<h(y)$, as moving in its direction increases $z-h(y)$ to first order by $1+|Dh|^2>0$. Dividing by its length and multiplying by the density proves $\nu\,dS=(-Dh,1)dy$. [given, F1, algebra]

2.1 For affine h, $Dh=a$, so $dS=\sqrt{1+|a|^2}dy$ and $\nu=(-a,1)/\sqrt{1+|a|^2}$. In the stated instance $a=(2,-1)$, giving $DX^TDX=\begin{pmatrix}5&-2\\-2&2\end{pmatrix}$, determinant $10-4=6$, and $\nu=(-2,1,1)/\sqrt6$. Integration over the unit square gives area $\sqrt6\cdot1=\sqrt6$ and flux $\int (e_3\cdot\nu)\sqrt6\,dy=\int1\,dy=1$. For the upper unit hemisphere, $h(y)=\sqrt{1-|y|^2}$ on $|y|<1$. Here $Dh=-y/h$, so $\sqrt{1+|Dh|^2}=1/h$ and $\nu=(y,h)$; its last component is positive and it is the radial outward unit vector. The equator is outside this graph. Rotated full-sphere graph charts cover it in an atlas of the full sphere, but no graph chart contained in the closed upper hemisphere covers an equator point. [step 1.1, algebra] ∎

## Source notes

Hunter §1.10.3, graph surface element and Example 1.43, printed p. 16 (PDF p. 22). The affine numerical instance is computed here.
