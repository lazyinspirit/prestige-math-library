---
id: def-contact-order-regular-components
kind: definition
title: "Contact order of two regular components at a point"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-cartier-divisor
  - def-composition-series-and-length-of-a-module
  - def-dimension-noetherian-topological-space
  - def-effective-cartier-divisor
  - def-embedding-dimension-and-regular-local-ring
  - def-noetherian-ring
  - def-reduction-of-scheme
  - lem-cartier-divisor-local-equation-equivalence
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.4.12 blowups of local complete intersections and the normal-crossing computations, pp. 393-394"
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Section 31.34 strict transform and Section 31.36 for the geometry of intersections"
verification:
  precheck: n/a
---

## Definition

Let $k$ be a field and let $S$ be a **regular surface** over $k$: a
Noetherian scheme of dimension $2$ that is regular at every point, so that
each local ring $\mathcal O_{S,p}$ is a regular local ring of dimension two
([[def-embedding-dimension-and-regular-local-ring]],
[[def-noetherian-ring]], [[def-dimension-noetherian-topological-space]]).

Let $Y,Z\subseteq S$ be two distinct reduced curves, that is, distinct closed
subschemes of pure dimension one whose local rings have no nonzero nilpotents
([[def-reduction-of-scheme]]), let $p\in S$ be a closed point, and let
$I_Y,I_Z\subseteq\mathcal O_{S,p}$ be the ideals of the two curve germs.
Assume:

1. $Y$ and $Z$ have no common irreducible component, so that $I_Z\mathcal O_{Y,p}\neq0$
   whenever $\mathcal O_{Y,p}\neq0$;
2. every irreducible component of $Y$ and of $Z$ that passes through $p$ is
   regular at $p$ (a component not passing through $p$ is unconstrained).

Write $\mathcal O_{Y,p}:=\mathcal O_{S,p}/I_Y$ for the local ring of the curve
$Y$ at $p$, a one-dimensional reduced Noetherian local ring, and let
$I_Z\mathcal O_{Y,p}$ be the image of the ideal of $Z$. The **contact order
of $Y$ and $Z$ at $p$** is the length

$$n_p(Y,Z):=\operatorname{length}_{\mathcal O_{Y,p}}\bigl(\mathcal O_{Y,p}/I_Z\mathcal O_{Y,p}\bigr),$$

the number of factors of a composition series
([[def-composition-series-and-length-of-a-module]]); the zero module has
length $0$. The hypotheses above are exactly what makes this length finite:
if $p\notin Y$ then $\mathcal O_{Y,p}=0$; if $p\notin Z$ then
$I_Z\mathcal O_{Y,p}=\mathcal O_{Y,p}$; and if $p\in Y\cap Z$, then by
hypothesis 1 the ideal $I_Z\mathcal O_{Y,p}$ is nonzero and, since
$\mathcal O_{Y,p}$ is one-dimensional and reduced, it is not contained in any
minimal prime, so $\mathcal O_{Y,p}/I_Z\mathcal O_{Y,p}$ is a finite-length
module supported at the closed point $p$.

In the situations used in this library the curve germs are cut out by single
equations and the definition takes the following **local-equation form**.
Suppose $y,z\in\mathcal O_{S,p}$ generate $I_Y$ and $I_Z$ (with $y=1$ if
$p\notin Y$ and $z=1$ if $p\notin Z$). Then
$\mathcal O_{Y,p}=\mathcal O_{S,p}/(y)$ and
$I_Z\mathcal O_{Y,p}=z\mathcal O_{Y,p}$, so that

$$n_p(Y,Z)=\operatorname{length}_{\mathcal O_{Y,p}}\bigl(\mathcal O_{Y,p}/z\mathcal O_{Y,p}\bigr).$$

For the curves used in this library the germs are given by such single
equations: they are effective Cartier data, and two presentations of one
principal ideal differ by a unit
([[def-effective-cartier-divisor]], [[lem-cartier-divisor-local-equation-equivalence]],
[[def-cartier-divisor]]). The definition has the following properties, which
are the conventions used by its consumers. (a) It is independent of the chosen
local equations: another equation of $Y$ is $y'=uy$ with
$u\in\mathcal O_{S,p}^{\times}$, so $\mathcal O_{S,p}/(y')=\mathcal O_{S,p}/(y)$,
and another equation of $Z$ is $z'=vz$ with $v$ a unit, so
$z'\mathcal O_{Y,p}=z\mathcal O_{Y,p}$. (b) It is independent of which curve
is named first, because both lengths equal the common length of
$\mathcal O_{S,p}/(I_Y+I_Z)$, which is finite and agrees with its length over
either quotient. (c) $n_p(Y,Z)=1$ if and only if $Y$ and $Z$ **meet
transversally at $p$**, meaning $p\in Y\cap Z$, each of $Y$ and $Z$ is regular
at $p$, and their tangent lines are distinct one-dimensional subspaces of the
two-dimensional $k(p)$-vector space
$\mathfrak m_p/\mathfrak m_p^2$. Indeed, the length is one exactly when
$I_Z\mathcal O_{Y,p}$ is the maximal ideal of the one-dimensional local ring
$\mathcal O_{Y,p}$, so that this ring is a discrete valuation ring and the
image of a local equation of $Z$ is a uniformizer of it; this happens exactly
when $\mathcal O_{Y,p}$ is regular and the two tangent lines are distinct.
In particular, if either curve has two regular branches through $p$, its local
ring at $p$ is not a domain and hence not regular, its maximal ideal is not
principal, and the local contact order is at least $2$ even when each pair of
branches crosses with distinct tangents.

The **total contact order** of $Y$ and $Z$ is the sum of the local contact
orders over all closed points of their intersection,
$$n(Y,Z):=\sum_{p\in Y\cap Z}n_p(Y,Z).$$
Since $Y$ and $Z$ share no irreducible component, $Y\cap Z$ has dimension
zero and, being a closed subscheme of the Noetherian scheme $S$, has only
finitely many closed points; for distinct components the total contact order
is therefore a finite nonnegative integer. The value $1$ is reserved for a
genuine transversal crossing of two regular curves.
