---
id: def-relative-dimension-smooth-morphism
kind: definition
title: "Relative dimension of a smooth morphism at a point"
status: published
origin: pipeline
deps:
  - def-smooth-morphism-schemes
  - def-geometric-fibre
  - def-krull-dimension-of-a-ring
  - def-local-ring
  - def-ag-geometrically-regular-algebra-and-fibre
  - thm-affine-domain-dimension-transcendence-degree
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.29 (morphisms and dimensions of fibres)"
      url: https://stacks.math.columbia.edu/tag/02FW
verification:
  audited: 2026-09-30
---

## Definition

Let $f:X\to S$ be a morphism of schemes that is smooth at a point $x\in X$
([[def-smooth-morphism-schemes]]), and put $s=f(x)$. For a scheme $Y$ and a
point $y\in Y$ the **local dimension** of $Y$ at $y$, written $\dim_yY$, is the
infimum of the Krull dimensions of the open neighbourhoods of $y$ in $Y$
([[def-krull-dimension-of-a-ring]]). If $Y$ is locally of finite type over a
field, this equals the largest dimension of an irreducible component through
$y$ in any finite-type affine neighbourhood of $y$: nonempty principal opens
of a finite-type domain have the same fraction field and hence the same
dimension by [[thm-affine-domain-dimension-transcendence-degree]], while
components not containing $y$ may be removed after shrinking that affine
neighbourhood. The component formula need not hold for arbitrary locally
Noetherian schemes: at the generic point of the spectrum of a discrete
valuation ring, a principal open is a field of dimension zero although the
whole space is an irreducible component of dimension one. This is the Stacks
convention for $\dim_y$; it is not the height of the
local ring $\mathcal O_{Y,y}$, which can be strictly smaller for a point lying
on a lower-dimensional component ([[def-local-ring]]).

Let $K/\kappa(s)$ be a field extension and let
$X_{s,K}=X_s\times_{\operatorname{Spec}\kappa(s)}\operatorname{Spec}K$ be the
base-changed fibre; it is the geometric fibre of [[def-geometric-fibre]]
when $K$ is an algebraic closure of $\kappa(s)$. We say $f$ has **relative dimension
$n$ at $x$** when
$$\dim_yX_{s,K}=n$$
for every field extension $K/\kappa(s)$ and every point $y\in X_{s,K}$ lying
over the image of $x$ in $X_s$ (the quantifier convention of
[[def-ag-geometrically-regular-algebra-and-fibre]]). We say $f$ has **pure
relative dimension $n$** when it is smooth with relative dimension $n$ at every
point of $X$, that is, when $f$ is smooth and every geometric fibre of $f$ is pure
$n$-dimensional in the sense that its local dimension equals $n$ at each of its
points.

Only the smooth case is used on this page. There, the condition holds for a
unique $n$ at each point $x$: the fibre is geometrically regular at the points
over $x$ by the definition of smoothness, and a computation with a standard
smooth chart — $m$ variables and $c$ independent equations, hence $m-c$ free
parameters — gives the common value $m-c$ of the local dimensions of the
geometric fibre at the points lying over $x$, independent of the field
extension $K$. On the model chart $\mathbb A^n_S\to S$ the relative dimension is
$n$ everywhere, and for $n=0$ the morphism is étale; the chart computation is
carried out in the standard-form and Jacobian results on this page. The integer
is allowed to depend on the point $x$; pure relative dimension means that it
does not, and the empty source case is vacuous.
