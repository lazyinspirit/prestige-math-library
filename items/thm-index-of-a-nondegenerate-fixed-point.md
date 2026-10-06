---
id: thm-index-of-a-nondegenerate-fixed-point
kind: theorem
title: "The index of a nondegenerate fixed point is the sign of det(I-Df)"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-local-fixed-point-index, lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent, def-nondegenerate-fixed-point, def-differential-of-a-smooth-map, thm-chain-rule-for-differentials-of-smooth-maps, cor-multivariable-taylor-formula-with-peano-remainder, thm-degree-is-invariant-under-proper-smooth-homotopy, lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative, prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro Brasileiro de Topologia, Rio Claro 2006 (complete notes)"
      url: "https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf"
      locator: "Lecture II §5, printed p. 12 (each transverse intersection is signed by the sign of det(I-Df_x))"
    - title: "Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "Lecture 17, printed p. 54 (sign(x)=sign det(I-df))"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §4, printed pp. 121-122 (local number equals sign det(df_x-I); the I-Df convention used here differs by (-1)^n)"
dependency_level: 4
---

## Statement

Let $M$ be a smooth $n$-manifold without boundary, $n\ge1$, and let $x$ be a
nondegenerate fixed point of a smooth map $f:M\to M$
([[def-nondegenerate-fixed-point]]). Then
$$\operatorname{ind}_x(f)=\operatorname{sign}\det(I-Df_x:T_xM\to T_xM)\in\{+1,-1\},$$
so every nondegenerate fixed point has index $+1$ or $-1$. The convention is
$I-Df_x$, not $Df_x-I$; in the other ordering the value is multiplied by
$(-1)^n$, which is the source of sign discrepancies between references.

## Facts & Assumptions

**Given:** A smooth $n$-manifold without boundary, $n\ge1$, and a nondegenerate fixed point $x$ of the smooth self-map $f$.

[F1] The index is the degree of the normalized chart displacement, with reduced degree for $n=1$, independent of chart and admissible radius ([[def-local-fixed-point-index]], [[lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent]]).

[F2] Nondegeneracy means $I-Df_x$ is invertible ([[def-nondegenerate-fixed-point]]). In a chart at $x$, the chain rule identifies the derivative of $g(u)=u-\widehat f(u)$ with the conjugate $A=I-D\widehat f_0$ of $I-Df_x$ ([[def-differential-of-a-smooth-map]], [[thm-chain-rule-for-differentials-of-smooth-maps]]), and differentiability gives $g(u)=Au+o(|u|)$ ([[cor-multivariable-taylor-formula-with-peano-remainder]], $k=1$, componentwise).

[F3] Degree is invariant under smooth homotopies of connected spheres ([[thm-degree-is-invariant-under-proper-smooth-homotopy]]) and an orientation-preserving or reversing sphere diffeomorphism has degree $+1$ or $-1$ ([[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]]). For $n=1$ use reduced-degree homotopy invariance ([[lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative]]).

## Proof

1.1 Choose a chart centered at $x$ and a closed ball on which the chart displacement $g$ is defined. By [F2], $g(u)=Au+R(u)$ with $A$ invertible and $R(u)=o(|u|)$. Let $c=\|A^{-1}\|^{-1}>0$ and shrink the ball until $|R(u)|\le c|u|/2$ there. Then $|Au|\ge c|u|$, so $g$ has no zero in the punctured ball and a positive radius $\varepsilon$ in it is admissible. [given, F2]

2.1 For $v\in S^{n-1}$ and $t\in[0,1]$, the vector $A\varepsilon v+tR(\varepsilon v)$ has norm at least $c\varepsilon/2>0$. Its normalization is a smooth homotopy from $L_A(v)=Av/|Av|$ to the sphere map defining the fixed-point index. Therefore [F1] and [F3] identify $\operatorname{ind}_x(f)$ with $\deg L_A$, using reduced degree for $n=1$. [step 1.1, F1, F3]

3.1 The inverse of $L_A$ is $L_{A^{-1}}$. For $n\ge2$, radial normalization subtracts only an outward-normal component from $Aw$ on tangent vectors $w$, then rescales by a positive scalar. Thus, in outward-normal-first sphere orientations, the orientation sign of $dL_A$ is $\operatorname{sign}\det A$: the ambient ordered frame $(v,w_1,\ldots,w_{n-1})$ is sent to $(Av,Aw_1,\ldots,Aw_{n-1})$, and deleting normal components and positive rescaling leave its determinant sign unchanged. By [F3], $\deg L_A=\operatorname{sign}\det A$. For $n=1$, $L_A(v)=\operatorname{sign}(A)v$, of reduced degree $\operatorname{sign}(A)$ directly from [F1]. Finally $A$ is conjugate to $I-Df_x$, so their determinant signs agree. Hence $\operatorname{ind}_x(f)=\operatorname{sign}\det(I-Df_x)\in\{+1,-1\}$. This local-coordinate proof uses no orientation of $M$ and no choice principle. [step 2.1, F1, F2, F3] ∎

## Remarks

- **Sign convention.** With the opposite ordering, $\det(Df_x-I)=(-1)^n\det(I-Df_x)$ by multilinearity of the determinant in the columns of an $n\times n$ matrix, so a reference that uses $df_x-I$ reports $(-1)^n$ times the index defined here. Guillemin and Pollack use that ordering; the displacement convention here is fixed throughout the proof.
- **Isolatedness is not enough.** The formula needs the invertibility of $I-Df_x$; for a degenerate isolated fixed point the index is still defined, but it is not determined by the first derivative. See [[rem-isolated-does-not-imply-nondegenerate]].
