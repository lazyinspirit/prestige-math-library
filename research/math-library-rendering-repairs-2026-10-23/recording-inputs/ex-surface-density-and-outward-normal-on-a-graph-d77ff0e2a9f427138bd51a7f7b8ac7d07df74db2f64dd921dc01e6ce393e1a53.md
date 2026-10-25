---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-surface-density-and-outward-normal-on-a-graph.json
  precheck: pass
id: ex-surface-density-and-outward-normal-on-a-graph
kind: example
title: Graph density and outward orientation
provenance:
  statement: ai-altered
  proof: ai-altered
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


## Remarks

The diagram shows the affine patch in parallel projection. Dashed outlines indicate the closures of the open parameter square and its image; their boundary edges are excluded. The tangent vectors are $t_1=(1,0,2)$ and $t_2=(0,1,-1)$, and $N=t_1\times t_2=(-2,1,1)$ points out of the subgraph. The normal arrow is a positive multiple of $N$; angles and lengths are not preserved by the projection.

```tikz
\begin{tikzpicture}[x=1.35cm,y=1.35cm,>=stealth,line width=0.9pt]
\draw[dashed] (0,0) -- (1,0) -- (1,1) -- (0,1) -- (0,0);
\node at (0.5,0.5) {$(0,1)^2$};
\node[below] at (0.5,0) {$y_1$};
\node[left] at (0,0.5) {$y_2$};
\draw[->] (1.45,0.5) -- (2.65,0.5);
\node[above] at (2.05,0.5) {$X$};
\begin{scope}[shift={(3.6,0.2)}]
\draw[dashed] (0,0) -- (1,1.05) -- (1.65,0.8) -- (0.65,-0.25) -- (0,0);
\draw[->] (0.12,0.126) -- (0.78,0.819);
\node[right] at (0.85,0.72) {$t_1$};
\draw[->] (0.078,-0.03) -- (0.507,-0.195);
\node[below] at (0.35,-0.16) {$t_2$};
\draw[->] (0.825,0.4) -- (0.015,1.33);
\node[above] at (0.015,1.33) {$N=(-2,1,1)$};
\node[below] at (1.0,-0.55) {$dS=\sqrt{6}\,dy_1\,dy_2$};
\end{scope}
\end{tikzpicture}
```

Here $X(y_1,y_2)=(y_1,y_2,2y_1-y_2+3)$. Since $|N|=\sqrt6$ and $e_3\cdot N=1$, the density and upward flux over the parameter square are $\sqrt6$ and $1$, respectively, as computed in Verification step 2.1. The verification does not depend on the illustration.
