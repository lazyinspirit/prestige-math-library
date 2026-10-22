---
id: lem-bounded-euclidean-homeomorphism-has-compactly-supported-local-model
kind: lemma
title: "A bounded Euclidean homeomorphism has a compactly supported local model"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-homeomorphism-and-open-maps, def-homotopy-relative-and-path-homotopy]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. J. S. Hamilton, The triangulation of 3-manifolds, Quarterly Journal of Mathematics Oxford (2) 27 (1976), 63–70"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/hamiltontri.pdf"
      locator: "Printed pp.65,67–68: bounded universal-cover homeomorphism, compactification and Alexander isotopy; the present lemma isolates the Euclidean case"
---

## Statement

Let $n\ge1$, let $f:\mathbb R^n\to\mathbb R^n$ be a homeomorphism, and suppose there is a finite constant $C\ge0$ such that $\lVert f(x)-x\rVert\le C$ for every $x$. For every compact subset $K\subset\mathbb R^n$, there are an open neighborhood $U$ of $K$, a closed Euclidean ball $B$ centered at the origin, and an ambient isotopy $G_t$ of $\mathbb R^n$, $0\le t\le1$, such that $G_0$ is the identity, every $G_t$ is the identity outside $B$, and $G_1|_U=f|_U$. In particular, if $f$ is piecewise linear on a neighborhood of $K$, the final map is piecewise linear on some neighborhood of $K$. No global piecewise linearity of the isotopy or its final map is asserted.

## Statement references

[[def-homeomorphism-and-open-maps]]

[[def-homotopy-relative-and-path-homotopy]]

## Facts & Assumptions

**Given:** $n,f,C,K$ as in the Statement, with the Euclidean norm.

[F1] A homeomorphism is a continuous bijection with continuous inverse, and an ambient isotopy is a continuous family of homeomorphisms starting at the identity, whose associated map on the product with the parameter interval is a homeomorphism ([[def-homeomorphism-and-open-maps]], [[def-homotopy-relative-and-path-homotopy]]).

## Proof

**Given:** The data above.

1.1 Choose $R>1$ so large that $K\cup f(K)$ lies in the open radius-$R$ ball; this is possible because the continuous image of a compact set is compact, and compact Euclidean sets are bounded. Set $L=R+1$. Define an increasing homeomorphism $\rho:[0,\infty)\to[0,L)$ by $\rho(r)=r$ for $r\le R$ and $\rho(r)=R+(r-R)/(1+r-R)$ for $r\ge R$. The radial map $y(0)=0$, $y(x)=\rho(\lVert x\rVert)x/\lVert x\rVert$ for $x\ne0$, is a homeomorphism from $\mathbb R^n$ onto the open radius-$L$ ball, and it is the identity on the closed radius-$R$ ball. On the open radius-$L$ ball put $g=y\circ f\circ y^{-1}$. This is a homeomorphism there. [given, F1, construct]

1.2 Extend $g$ by the identity on the radius-$L$ sphere. To verify continuity there, put $r=\lVert x\rVert$ and $s=\lVert f(x)\rVert$. The displacement bound gives $s\ge r-C$. For $r>C$, insert $f(x)/r$ between the two unit vectors to obtain
$$\left\lVert\frac{f(x)}{s}-\frac{x}{r}\right\rVert\le\frac{|s-r|}{r}+\frac{C}{r}\le\frac{2C}{r}.$$
Consequently
$$\lVert y(f(x))-y(x)\rVert\le |\rho(s)-\rho(r)|+\rho(r)\frac{2C}{r}\le (L-\rho(s))+(L-\rho(r))+\frac{2LC}{r}.$$
The right side tends to zero as $r\to\infty$, uniformly over directions, since $s\ge r-C$ and $\rho$ is increasing with limit $L$. For an interior point $z=y(x)$ approaching a boundary point $b$, the equality $\lVert z\rVert=\rho(r)$ forces $r\to\infty$, and $\lVert g(z)-b\rVert\le\lVert g(z)-z\rVert+\lVert z-b\rVert$ tends to zero by this bound. This proves continuity directly. The inverse $f^{-1}$ has the same displacement bound: if $z=f(x)$ then $\lVert f^{-1}(z)-z\rVert=\lVert x-f(x)\rVert\le C$. Applying the same calculation to $f^{-1}$ gives the continuous inverse extension. Extend once more by the identity outside the closed radius-$L$ ball to obtain a homeomorphism $G$ of $\mathbb R^n$. The formulas and their inverse formulas agree on the joining sphere. [given, F1, step 1.1, construct]

2.1 The set $U=\{x:\lVert x\rVert<R,\ \lVert f(x)\rVert<R\}$ is an open neighborhood of $K$. On $U$ both $y^{-1}(x)=x$ and $y(f(x))=f(x)$, so $G(x)=f(x)$. Thus any piecewise linearity of $f$ on an open neighborhood of $K$ is retained after intersecting that neighborhood with $U$. This is an equality of actual local maps, rather than an approximation statement about their images. [given, step 1.1, step 1.2]

3.1 For $0<t\le1$ define $G_t(x)=tG(x/t)$ when $\lVert x\rVert\le tL$, and $G_t(x)=x$ when $\lVert x\rVert\ge tL$; put $G_0(x)=x$. The branches agree at $\lVert x\rVert=tL$ because $G$ fixes the radius-$L$ sphere. Each $G_t$ is a homeomorphism, with inverse given by the same formula using $G^{-1}$; it fixes every point outside the radius-$tL$ ball. The formulas give joint continuity for $t>0$. At $t=0$, both $x$ and its image lie in the radius-$tL$ ball whenever a point moves, so $\lVert G_t(x)-x\rVert\le2tL$. This proves joint continuity at zero, uniformly in $x$. The identical estimate applies to the inverse family, hence $(x,t)\mapsto(G_t(x),t)$ is a homeomorphism with continuous inverse $(x,t)\mapsto(G_t^{-1}(x),t)$. Therefore $G_t$ is an ambient isotopy, supported in the radius-$L$ ball, from the identity to $G$. Together with step 2.1 this proves all conclusions. [F1, step 1.2, step 2.1, construct] ∎

## Remarks

The construction uses only a choice of one sufficiently large real number, with no countable or arbitrary-index choice assumption. It supplies the bounded-homeomorphism compactification step in the Euclidean part of Hamilton's torus argument. It does not prove that a topological three-manifold admits a piecewise linear structure, and it does not straighten an arbitrary topological coordinate change.
