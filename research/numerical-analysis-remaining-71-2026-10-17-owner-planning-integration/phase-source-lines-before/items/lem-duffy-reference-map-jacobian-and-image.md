---
id: lem-duffy-reference-map-jacobian-and-image
kind: lemma
title: The reference-triangle Duffy map has the stated image and Jacobian
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-duffy-reference-triangle-map, def-p-norms-on-rn, def-c-one-map-and-local-inverse, def-jacobian-determinant-of-a-c-one-map]
proof_strategy: direct
axiom_use: None. The image and determinant are verified by finite algebra.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Imperial College London, Numerical quadrature, Finite Element course notes, §1.6
      url: https://finite-element.github.io/1_quadrature.html
      locator: §1.6, equations (1.11)–(1.13), square-to-triangle Duffy map and Jacobian.
---

## Statement

For the map $D(r,s)=(r,rs)$ of [[def-duffy-reference-triangle-map]], the image of $[0,1]^2$ is $T=\{(x,y):0\le y\le x\le1\}$. On $r>0$ it has inverse $(x,y)\mapsto(x,y/x)$ and Jacobian determinant $r$; the edge $r=0$ maps to $(0,0)$.

## Facts & Assumptions

**Given:** The map $D(r,s)=(r,rs)$ on the square $[0,1]^2$.

[F1] [[def-duffy-reference-triangle-map]]: $D(r,s)=(r,rs)$ and $T=\{(x,y):0\le y\le x\le1\}$.

[F2] [[def-c-one-map-and-local-inverse]]: a map on an open Euclidean set is $C^1$ when all components are differentiable with continuous derivative entries; a local inverse is the inverse of a bijective restriction.

[F3] [[def-jacobian-determinant-of-a-c-one-map]]: the Jacobian determinant is the determinant of the derivative matrix.

## Proof

1.1 For an increment $(h,k)$, $D(r+h,s+k)-D(r,s)=(h,sh+rk+hk)$. The linear part $(h,sh+rk)$ has matrix $\begin{pmatrix}1&0\\s&r\end{pmatrix}$, while the remainder has Euclidean norm $|hk|\le(h^2+k^2)/2$; divided by $\|(h,k)\|_2=\sqrt{h^2+k^2}$ it tends to zero. Thus this is the total derivative. Its entries are continuous, so the polynomial extension is $C^1$ on $\mathbb R^2$ by [F2]; its determinant is $r$ by [F3]. [F1, F2, F3, algebra]

1.2 If $0\le r,s\le1$, then $0\le rs\le r\le1$, so $D(r,s)\in T$. Conversely, for $(x,y)\in T$ with $x>0$, $r=x$ and $s=y/x$ lie in $[0,1]$ and map to $(x,y)$; when $x=0$, $y=0$ and every $(0,s)$ maps to the vertex. For $r>0$, the displayed inverse is unique. This proves the image, inverse, and collapsed-edge claims. [F1, step 1.1, given, algebra] ∎
