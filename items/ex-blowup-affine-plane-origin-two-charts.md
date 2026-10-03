---
id: ex-blowup-affine-plane-origin-two-charts
kind: example
title: "Two charts of the blowup of the affine plane at the origin"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-algebra-properties
  - lem-blowup-plane-origin-incidence-equations
  - def-blowup-scheme-along-ideal
  - def-relative-projective-space-standard-charts
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.3.1-19.3.3 the blowup of the affine plane at the origin, pp. 383-386"
    - title: "Roman Bezrukavnikov et al., MIT 18.725 Algebraic Geometry (Fall 2015) consolidated lecture notes"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
      locator: "Lecture 9, the plane blowup charts, PDF pp. 23-24"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Example

Let $k$ be a field and consider $\operatorname{Bl}_0\mathbb A^2$ for the ideal $(x,y)$. The two standard charts are $\operatorname{Spec}k[x,y][y/x]=\operatorname{Spec}k[x,y/x]$ and $\operatorname{Spec}k[x/y,y]$, each isomorphic to $\mathbb A^2_k$, glued along the overlap $D(y/x)\leftrightarrow D(x/y)$ with $(y/x)(x/y)=1$; the exceptional curve $E$ is cut by $x$ in the first chart and by $y$ in the second, and the projection to $\mathbb A^2_k$ is the identity on the complement of $E$ and contracts $E$ to the origin. The total transform of a line through the origin is (the strict transform of the line) $+E$.

## Facts & Assumptions

**Given:** A field $k$, the scheme $\mathbb A^2_k=\operatorname{Spec}k[x,y]$, the ideal $(x,y)$ and its blowup.

[A1] **Choice.** The Axiom of Choice is assumed as inherited from the relative Proj construction; no further choice is used in this computation.

[F1] [[lem-blowup-plane-origin-incidence-equations]]: With homogeneous coordinates $u,v$ on $\mathbb P^1_k$, the blowup is $V(xv-yu)\subseteq\mathbb A^2_k\times_k\mathbb P^1_k$ with structural morphism as projection; its two standard charts are $\operatorname{Spec}k[x,T]$ with $y=xT$ and $\operatorname{Spec}k[y,U]$ with $x=yU$, their overlap inverts $T$ and $U$ with $TU=1$, and the exceptional divisor is $V(x)$ and $V(y)$ respectively and is $\mathbb P^1_k$.

[F2] [[thm-affine-blowup-standard-charts]]: For $I=(x,y)$ in $k[x,y]$, the standard opens $\operatorname{Spec}k[x,y][I/x]$ and $\operatorname{Spec}k[x,y][I/y]$ cover the blowup, with transition map $u_{xy}=y/x\mapsto u_{yx}^{-1}$, where $u_{yx}=x/y$ on the overlap.

[F3] [[lem-affine-blowup-algebra-properties]]: $A[I/a]$ has $IA[I/a]=a\,A[I/a]$ and $(A[I/a])_a=A_a$.

[F5] [[def-relative-projective-space-standard-charts]]: $\mathbb P^1_k$ is covered by the two standard affine charts $\operatorname{Spec}k[T]$ and $\operatorname{Spec}k[U]$ with overlap $TU=1$.

## Verification

1.1 The blowup is $V(xv-yu)\subseteq\mathbb A^2_k\times_k\mathbb P^1_k$ by [F1], and its two standard charts are $\operatorname{Spec}k[x,T]$ with $y=xT$ and $\operatorname{Spec}k[y,U]$ with $x=yU$; these are exactly the affine blowup algebras $k[x,y][I/x]$ and $k[x,y][I/y]$ of [F2] and [F3], and by [F5] the two charts of $\mathbb P^1_k$ glue along $TU=1$. [A1, F1, F2]

2.1 Each chart ring is a polynomial ring in two variables over $k$, namely $k[x,T]\cong k[x,y/x]$ and $k[y,U]\cong k[x/y,y]$, so $\operatorname{Spec}k[x,y][I/x]=\operatorname{Spec}k[x,T]\cong\mathbb A^2_k$ and $\operatorname{Spec}k[y,U]\cong\mathbb A^2_k$; the overlap is the open subscheme $D(T)=D(U^{-1})$ of the first chart, identified with $D(U)$ in the second by $T\mapsto U^{-1}$. [F2, F3, step 1.1]

3.1 By [F1] the exceptional divisor is cut by $x$ in the first chart and by $y$ in the second, and it is $\mathbb P^1_k$: in the first chart $E\cap\{x\ne0\}$ is empty and $E$ is the line $V(x)\cong\operatorname{Spec}k[T]$, in the second $E=V(y)\cong\operatorname{Spec}k[U]$, and the two affine lines glue along $TU=1$ by [F5]. [F1, F5, step 2.1]

4.1 The projection sends the first chart to $\mathbb A^2_k$ by $(x,T)\mapsto(x,xT)$ and the second by $(y,U)\mapsto(yU,y)$: on the open locus $x\ne0$ of the first chart the formula is inverted by $T=y/x$, so the projection restricts to an isomorphism onto $\{(x,y):x\ne0\}$, and symmetrically the second chart is isomorphic to $\{(x,y):y\ne0\}$ over the base. These two open subschemes cover $\mathbb A^2_k\smallsetminus\{0\}$ and the inverses agree on the overlap because $T=U^{-1}$ there (step 2.1), so the projection is the identity over $\mathbb A^2_k\smallsetminus\{0\}$. It contracts $E$ to the origin: on $E$ the first chart has $x=0$ and image $(0,0)$, and on the second $y=0$ and image $(0,0)$, while every point of $E$ lies in one of the two charts (step 3.1). [step 2.1, step 3.1]

5.1 Let $L=V(\ell)$ be a line through the origin and first suppose $\ell=y-ax$ with $a\in k$. In the first chart the pulled-back equation is $xT-ax=x(T-a)$, so the pullback divisor is the sum of $E=V(x)$ and the strict transform $V(T-a)$; in the second chart it is $y-ayU=y(1-aU)$, the sum of $E=V(y)$ and $V(1-aU)$, and for $a\ne0$ the two strict-transform pieces glue at the same exceptional point with coordinates $T=a$, $U=a^{-1}$; for $a=0$ the second piece is empty and the exceptional intersection is $T=0$. For the vertical line $\ell=x$ the first chart gives $x$, namely $E$, and the second gives $yU$, namely $E$ plus the strict transform $V(U)$; so in both cases the total transform is the strict transform plus $E$, with multiplicity one along $E$. [F1, F3, step 1.1] ∎
