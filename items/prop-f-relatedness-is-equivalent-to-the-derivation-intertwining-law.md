---
id: prop-f-relatedness-is-equivalent-to-the-derivation-intertwining-law
kind: proposition
title: "F-relatedness is equivalent to the derivation intertwining law"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-f-related-vector-fields, def-action-of-a-vector-field-on-smooth-functions, def-differential-of-a-smooth-map, lem-manifold-bump-for-a-compact-set-inside-an-open-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $F:M\to N$ be smooth, let $X$ be a smooth vector field on $M$, and let $Y$
be a smooth vector field on $N$. Then $X$ and $Y$ are $F$-related if and only
if

$$ X(f\circ F)=(Yf)\circ F $$

for every $f\in C^\infty(N)$.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$ and smooth vector fields $X$ on $M$ and $Y$ on $N$.

[L1] The differential satisfies $dF_p(v)(f)=v(f\circ F)$ for $v\in T_pM$ and $f\in C^\infty(N)$ ([[def-differential-of-a-smooth-map]]).

[L2] The action of a vector field on functions is defined pointwise by $(Xh)(p)=X_p(h)$ ([[def-action-of-a-vector-field-on-smooth-functions]]).

[L3] For a point inside an open set there is a smooth bump function equal to $1$ on a neighbourhood of that point and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

## Proof

**Proof technique:** direct.

1.1 Assume $X$ and $Y$ are $F$-related. For any $p\in M$ and $f\in C^\infty(N)$, [L1] and [L2] give $(X(f\circ F))(p)=X_p(f\circ F)=dF_p(X_p)(f)=Y_{F(p)}(f)=((Yf)\circ F)(p)$. [L1, L2, given]

1.2 Conversely, assume $X(f\circ F)=(Yf)\circ F$ for every smooth $f$ on $N$. Fix $p\in M$, and let $[g]\in C^\infty_{F(p)}(N)$ be a smooth germ. Choose an open neighbourhood $W$ of $F(p)$ on which $g$ is represented by a smooth function, and use [L3] to choose $\chi:N\to [0,1]$ that is $1$ on a neighbourhood of $F(p)$ and has support contained in $W$. Let $h$ be the global smooth function obtained by extending $\chi g$ by $0$ outside $W$. Then $[h]=[g]$ at $F(p)$. The hypothesis applied to $h$ gives $X_p(h\circ F)=Y_{F(p)}(h)$, and [L1] identifies the left-hand side with $dF_p(X_p)([h])$. Thus $dF_p(X_p)([g])=Y_{F(p)}([g])$ for every germ $[g]$, so $dF_p(X_p)=Y_{F(p)}$. [L1, L2, L3, given]

2.1 Therefore $X$ and $Y$ are $F$-related exactly when the derivation intertwining law holds for every smooth target function. [step 1.1, step 1.2] ∎
