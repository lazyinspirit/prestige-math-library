---
id: lem-plane-curve-multiplicity-transform-chart
kind: lemma
title: "Strict-transform equation by removing the maximal exceptional power"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-blowup-plane-origin-incidence-equations
  - lem-affine-blowup-algebra-properties
  - thm-affine-blowup-standard-charts
  - lem-total-transform-strict-plus-exceptional-multiplicity
  - def-strict-transform-closed-subscheme
  - def-multiplicity-hypersurface-point
  - def-effective-cartier-divisor
justified_by: []
landmark: false
proof_strategy: "Expand the equation in homogeneous parts, substitute the chart coordinates, and identify the exact exceptional power with the multiplicity"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.4.1 the two charts and 19.4.3 the local multiplicity computation, pp. 389-390"
    - title: "Roman Bezrukavnikov et al., MIT 18.725 Algebraic Geometry (Fall 2015) consolidated lecture notes"
      url: "https://math.mit.edu/~higgs/18.725_2015.pdf"
      locator: "Lecture 9, blowup charts and computation of strict transforms, PDF pp. 23-25"
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Definition 31.34.1 and Lemma 31.34.2 on strict transforms"
verification:
  precheck: pass
---

## Statement

Let $k$ be a field, let $0$ be the origin of $\mathbb A^2_k=\operatorname{Spec}k[x,y]$
and let $f\in k[x,y]$ be a reduced local equation of a curve through $0$ of
multiplicity $m=\operatorname{mult}_0(f)\ge1$
([[def-multiplicity-hypersurface-point]]). In the chart with coordinates
$(x,s)$ where $y=xs$, the total transform equation is
$f(x,xs)=x^mg(x,s)$ with $g(0,s)$ the leading form evaluated at $(1,s)$, and
the strict transform is defined by $g=0$; symmetrically in the other chart.
In particular the strict transform has multiplicity at most $m$ at any point
of the exceptional curve $E$, and its equation is obtained from the total
transform by dividing by the largest power of the exceptional equation, which
is exactly the $m$-th power.

## Facts & Assumptions

**Given:** The plane $\mathbb A^2_k=\operatorname{Spec}k[x,y]$, the origin $0$, a reduced local equation $f\in k[x,y]$ with $m=\operatorname{mult}_0(f)$ ([[def-multiplicity-hypersurface-point]]), the blowup $\pi\colon S'\to\mathbb A^2_k$ of the origin with exceptional curve $E$ and its two standard charts $\operatorname{Spec}k[x,s]=\operatorname{Spec}k[x,y][y/x]$ and $\operatorname{Spec}k[u,y]=\operatorname{Spec}k[x,y][x/y]$ ([[lem-blowup-plane-origin-incidence-equations]]), and the strict transform $C'$ of the curve $C=V(f)$ ([[def-strict-transform-closed-subscheme]]).

[F1] [[def-multiplicity-hypersurface-point]]: Expanding $f(t_1,t_2)=\sum_{d\ge0}f_d(t_1,t_2)$ into homogeneous parts about the origin, the multiplicity $m$ is the least $d$ with $f_d\ne0$; equivalently $f_d\in k[x,y]$, $f_d\ne0$, and $f=f_m+(\text{terms of degree}>m)$ with $f_m$ the leading form.

[F2] [[lem-blowup-plane-origin-incidence-equations]]: The blowup of the origin is $V(xv-yu)\subseteq\mathbb A^2_k\times\mathbb P^1_k$; in the chart $\operatorname{Spec}k[x,s]$ with $s=v/u$ one has $y=xs$ and $E=V(x)$; in the chart $\operatorname{Spec}k[u,y]$ with $u=u/v$ one has $x=yu$ and $E=V(y)$; the overlap inverts $s$ and $u$ with $su=1$.

[F3] [[thm-affine-blowup-standard-charts]] and [[lem-affine-blowup-algebra-properties]]: On the affine chart cut by the element $x$ of the ideal $(x,y)$, the affine blowup algebra is $k[x,y][(x,y)/x]=k[x,y][s]/(xs-y)=k[x,s]$, with $(x,y)k[x,s]=xk[x,s]$ and $x$ a nonzerodivisor; the two charts cover the blowup.

[F4] [[lem-total-transform-strict-plus-exceptional-multiplicity]]: For a reduced curve $C$ through the origin with multiplicity $m$, $\pi^*C=C'+mE$ as effective Cartier divisors ([[def-effective-cartier-divisor]]), and the strict transform is obtained on each chart by dividing a local equation of the total transform by the $m$-th power of an exceptional equation.

## Proof

1.1 Write the homogeneous decomposition of $f$ about the origin as $f=f_m+f_{m+1}+\cdots$, with $f_m\ne0$ the leading form by [F1]. Substituting $y=xs$ gives $f(x,xs)=\sum_{d\ge m}x^df_d(1,s)=x^m\bigl(f_m(1,s)+xf_{m+1}(1,s)+x^2f_{m+2}(1,s)+\cdots\bigr)=x^mg(x,s)$, where $g(x,s):=\sum_{d\ge m}x^{d-m}f_d(1,s)\in k[x,s]$. [F1]

2.1 The constant term in $x$ of $g$ is $f_m(1,s)$, which is nonzero: the distinct degree-$m$ monomials $x^{m-j}y^j$ become the distinct monomials $s^j$, so their nonzero coefficient vector cannot vanish. Consequently $g(0,s)=f_m(1,s)\ne0$, and the exact power of $x$ dividing $f(x,xs)$ is $m$; since $E=V(x)$ on this chart by [F3], the equation of the total transform on the chart is $x^mg$ with $g$ not divisible by $x$. [F2, F3, step 1.1]

3.1 By [F4] the total transform is $\pi^*C=C'+mE$, and in the chart its local equation is the product of a local equation of $C'$ with the $m$-th power $x^m$ of the exceptional equation; by step 2.1 the local equation of the total transform is $x^mg$ with $x\nmid g$, so the strict transform is cut out by $g=0$ in this chart, as claimed. The same computation with the roles of $x$ and $y$ interchanged, using the second chart with $x=yu$, gives the symmetric description $f(yu,y)=y^m\tilde g(u,y)$ with $\tilde g(u,0)=f_m(u,1)$ and strict transform $\tilde g=0$; the two chart equations glue to the strict transform by [F4] and [[def-strict-transform-closed-subscheme]], since they are the saturations of the total transform by the exceptional equation on each chart. [F3, F4, step 1.1, step 2.1]

3.2 A closed point $q$ of $E$ in the first chart corresponds to an irreducible polynomial $p(s)$, and its ambient maximal ideal is $(x,p(s))$. Let $e$ be the exponent of $p$ in the nonzero polynomial $f_m(1,s)$. Its image in $k[s]_{(p)}$ lies in $(p)^e\setminus(p)^{e+1}$. If $g$ belonged to $(x,p)^{e+1}$ in the local chart ring, reduction modulo $x$ would put that polynomial in $(p)^{e+1}$, a contradiction. Thus the order of $g$ is at most $e\le\deg f_m(1,s)\le m$. Points of $E$ outside the strict transform have unit equation and order zero. The second chart gives the identical bound, covering also the point at infinity. This proves the bound for every closed point, with arbitrary residue field; at the generic point of $E$, $g$ is a unit as well. [F1, F2, step 2.1]

4.1 Steps 3.1 and 3.2 prove the assertions: the strict transform equation in each chart is obtained from the total transform by dividing by the largest power of the exceptional equation, which is exactly $x^m$ in the first chart and $y^m$ in the second, with the leading form evaluated at $(1,s)$ (respectively $(u,1)$) as the value along $E$, and the strict transform has multiplicity at most $m$ at every point of $E$. [step 3.1, step 3.2] ∎

## Remarks

- The result is the chart-level form of the standard fact that the strict transform of a plane curve of multiplicity $m$ at the origin meets the exceptional curve in the closed points determined by the irreducible homogeneous factors of the leading form, each with the corresponding multiplicity. Over a splitting field these factors are linear and describe the geometric tangent directions.
- No reducedness or smoothness of $C$ away from the origin is used; only the finite multiplicity $m$ enters.
