---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-duffy-reference-triangle-map.json
  precheck: n/a
id: def-duffy-reference-triangle-map
kind: definition
title: The reference-triangle Duffy map from a vertex
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: [lem-duffy-reference-map-jacobian-and-image, thm-duffy-weak-singularity-transform]
axiom_use: None. This is an explicit polynomial map with determinant computed by differentiation.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Imperial College London, Numerical quadrature, Finite Element course notes, §1.6
      url: https://finite-element.github.io/1_quadrature.html
      locator: §1.6, equations (1.11)–(1.13), square-to-triangle Duffy map and Jacobian.
---

## Definition

Let $S=[0,1]^2$ and let $T=\{(x,y):0\le y\le x\le1\}$ be the reference triangle. The **vertex Duffy map** is $D:S\to T$, $D(r,s)=(r,rs)$. Its image, inverse for $r>0$, and Jacobian determinant are verified in [[lem-duffy-reference-map-jacobian-and-image]]. The change-of-variables use and endpoint limit for weak singularities are proved in [[thm-duffy-weak-singularity-transform]].

## Remarks

The diagram shows the boundary images under $D$. The cyan edge $r=0$ collapses to the cyan vertex $(0,0)$; the edges $s=0$ and $s=1$ map to $y=0$ and $y=x$, respectively. The edge $r=1$ maps to $x=1$. The determinant is $r$, so orientation is positive for $r>0$; no inverse is asserted at the collapsed vertex. These properties are established in the image-and-Jacobian lemma cited above, independently of the illustration.

```tikz
\begin{tikzpicture}[x=0.9cm,y=0.9cm]
\draw[thick] (0,0) -- (2.5,0) -- (2.5,2.5) -- (0,2.5) -- (0,0);
\draw[cyan,very thick] (0,0) -- (0,2.5);
\node at (1.25,1.25) {$S$};
\node[below left] at (0,0) {$(0,0)$};
\node[below right] at (2.5,0) {$(1,0)$};
\node[above left] at (0,2.5) {$(0,1)$};
\node[above right] at (2.5,2.5) {$(1,1)$};
\node[below] at (1.25,0) {$s=0$};
\node[above] at (1.25,2.5) {$s=1$};
\node[left,cyan] at (0,1.25) {$r=0$};
\node[right] at (2.5,1.25) {$r=1$};
\draw[->,thick] (3.5,1.25) -- (6,1.25);
\node[above] at (4.75,1.4) {$D(r,s)=(r,rs)$};
\node[below] at (4.75,1.1) {$\det D'=r$};
\draw[thick] (7,0) -- (9.5,0) -- (9.5,2.5) -- (7,0);
\fill[cyan] (7,0) circle (2pt);
\node at (8.7,0.65) {$T$};
\node[below left,cyan] at (7,0) {$(0,0)$};
\node[below right] at (9.5,0) {$(1,0)$};
\node[above right] at (9.5,2.5) {$(1,1)$};
\node[below] at (8.25,0) {$y=0$};
\node[above left] at (8.25,1.25) {$y=x$};
\node[right] at (9.5,1.25) {$x=1$};
\end{tikzpicture}
```
