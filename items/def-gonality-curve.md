---
id: def-gonality-curve
kind: definition
title: "Gonality"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-birational-smooth-proper-curves-isomorphic
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-nonconstant-morphism-curves-degree
  - lem-function-with-poles-defines-map-p1
  - lem-integral-finite-type-scheme-function-field
  - thm-affine-domain-dimension-transcendence-degree
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Definition

Let $k$ be a field and let $C$ be a smooth proper geometrically integral curve
over $k$ ([[def-algebraic-curve-over-field]]). The **gonality** of $C$ is
expressed by the raw minimum
$$\operatorname{gon}(C):=\min\{\deg(\varphi):\varphi:C\to\mathbb P^1_k\text{ is a nonconstant }k\text{-morphism}\},$$
where degree is as in [[def-nonconstant-morphism-curves-degree]]. Under AC,
the set in this expression is nonempty and the minimum exists, as follows.

Assume AC. The function field $k(C)$ has transcendence degree one over $k$
([[lem-integral-finite-type-scheme-function-field]],
[[thm-affine-domain-dimension-transcendence-degree]]). Hence there is an
$f\in k(C)$ transcendental over $k$. In particular $f\ne0$ and is
nonconstant. The actual finite-map result
[[lem-function-with-poles-defines-map-p1]], whose Statement assumes AC,
produces a finite locally free nonconstant morphism
$\varphi_f:C\to\mathbb P^1_k$ of degree $[k(C):k(f)]$. Thus the set of
degrees in the display is nonempty. Every such degree is a positive integer
([[def-nonconstant-morphism-curves-degree]]); well-ordering of the positive
integers gives a least element. Therefore the displayed minimum exists under
AC and is a positive integer.

Under the same AC assumption, $\operatorname{gon}(C)=1$ if and only if
$C\cong\mathbb P^1_k$. If the minimum is $1$, it is attained by a
nonconstant morphism $\varphi:C\to\mathbb P^1_k$ of degree $1$. By the degree
definition, the induced finite extension of function fields has degree one,
so $\varphi$ is birational; the actual birational-smooth-proper-curve theorem
[[cor-birational-smooth-proper-curves-isomorphic]] then makes it an
isomorphism. Conversely, an isomorphism $C\to\mathbb P^1_k$ has degree one,
and every nonconstant curve-map degree is positive, so its gonality is one.
The AC hypotheses here are inherited from the cited finite-map and
birational-curve suppliers; the raw minimum notation itself adds no choice
principle.
