---
id: def-holomorphic-and-meromorphic-map-of-riemann-surfaces
kind: definition
title: Holomorphic maps and meromorphic functions on Riemann surfaces
status: published
origin: pipeline
landmark: true
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - def-riemann-sphere-holomorphic-charts
  - def-meromorphic-function-complex-domain
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 1 §2, Definition 1.14 and Examples 1.15; Ch. 4 §2, discussion before Theorem 4.4"
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 3, holomorphic maps and meromorphic functions; Ch. 2, the Riemann sphere as a Riemann surface"
verification:
  audited: 2026-09-30
---

## Definition

Let $X$ and $Y$ be Riemann surfaces with atlases $\mathcal A_X$ and $\mathcal A_Y$
([[def-riemann-surface-and-holomorphic-atlas]]), and let $\widehat{\mathbb C}$
be the Riemann sphere with its standard holomorphic charts
$\phi_0,\phi_\infty$ ([[def-riemann-sphere-holomorphic-charts]]).

**Holomorphic maps.** A map $f:X\to Y$ is **holomorphic** at $x\in X$ when there
are charts $\varphi\in\mathcal A_X$ with $x\in\operatorname{dom}\varphi$ and
$\psi\in\mathcal A_Y$ with $f(x)\in\operatorname{dom}\psi$ such that the **chart
expression** is defined on $\varphi(W)$ for some open neighbourhood
$W\subseteq\operatorname{dom}\varphi$ of $x$ with
$f(W)\subseteq\operatorname{dom}\psi$ and is holomorphic at $\varphi(x)$:
$$\psi\circ f\circ\varphi^{-1}:\varphi(W)\to\mathbb C$$
Since $\varphi$ is a chart, $\varphi(W)$ is open in $\mathbb C$.
The map $f$ is **holomorphic** when it is holomorphic at every point of $X$.

*Independence of the charts.* The condition does not depend on the charts
chosen, and it is enough to test it on one atlas on each side. If
$\varphi'\in\mathcal A_X$ and $\psi'\in\mathcal A_Y$ are further charts with
$x\in\operatorname{dom}\varphi'$ and $f(x)\in\operatorname{dom}\psi'$, the given
local chart expression makes $f$ continuous on a neighbourhood of $x$. Shrink
that neighbourhood to an open set $W$ on which both source charts are defined
and $f(W)\subseteq\operatorname{dom}\psi\cap\operatorname{dom}\psi'$. Then near
$\varphi'(x)$,
$$\psi'\circ f\circ\varphi'^{-1}=(\psi'\circ\psi^{-1})\circ(\psi\circ f\circ\varphi^{-1})\circ(\varphi\circ\varphi'^{-1}),$$
and all three factors are holomorphic on neighbourhoods of the relevant points:
the outer two are transitions between compatible charts, and the middle one is
holomorphic by hypothesis. The chain rule gives holomorphy of the composite.
A map tested with one pair of charts at $x$ is therefore holomorphic at $x$
whatever charts an alternative atlas supplies. In particular, replacing either
atlas by its maximal one does not change the class of holomorphic maps, so the
notion depends only on the two complex structures.

A holomorphic map is continuous, since in the charts above it is locally the
composite of continuous maps; in particular a holomorphic map is determined by
its values on a nonempty open set when the target is Hausdorff and the source
connected, a fact used later but not proved here. Constant maps, the identity
$X\to X$, restrictions $f|_U$ to open $U\subseteq X$ (with the restricted atlas
and the subspace topology), and composites of holomorphic maps are holomorphic.

**Meromorphic functions.** A **meromorphic function** on $X$ is a holomorphic
map $f:X\to\widehat{\mathbb C}$ that is not the constant map with value
$\infty$. Equivalently, writing $f$ in the charts of
$\widehat{\mathbb C}$: $f$ is meromorphic when for every $x\in X$ there is a
chart $\varphi$ of $X$ with $x\in\operatorname{dom}\varphi$ such that the local
expression $f\circ\varphi^{-1}$ is either holomorphic at $\varphi(x)$ (when
$f(x)\neq\infty$) or has a pole at $\varphi(x)$ in the sense of
[[def-isolated-singularity-types]] (when $f(x)=\infty$), and the set
$f^{-1}(\infty)$ is not all of $X$. The points of $f^{-1}(\infty)$ are the
**poles** of $f$; at such a point the reciprocal chart expression
$w\mapsto 1/F(w)$ near $w=\varphi(x)$, where $F=f\circ\varphi^{-1}$, is
holomorphic with value $0$, so poles are isolated and coincide with the usual
plane-domain notion in a chart.

*Agreement with plane domains.* If $X=\Omega$ is a plane domain with its
identity atlas and $g:\Omega\setminus P\to\mathbb C$ is meromorphic in the sense of
[[def-meromorphic-function-complex-domain]], with pole set $P$, then the map
$f:\Omega\to\widehat{\mathbb C}$ with $f(z)=g(z)$ for $z\notin P$ and
$f(z)=\infty$ for $z\in P$ is holomorphic: away from $P$ this is the ordinary
statement that $g$ is holomorphic, and at $p\in P$ the chart expression in
$\phi_\infty$ is $z\mapsto 1/g(z)$, which is holomorphic near $p$ with value $0$,
because $g$ has a pole at $p$. Conversely, if $f:\Omega\to\widehat{\mathbb C}$
is holomorphic and not constant $\infty$, then $g:=f$ restricted to the open set
$f^{-1}(\mathbb C)$ is holomorphic there and every point of $f^{-1}(\infty)$ is a
pole of $g$, so $g$ is meromorphic on $\Omega$ in the plane-domain sense. The two
notions therefore agree, and this is the sense in which a meromorphic function
on a Riemann surface is locally a usual meromorphic function.

**Conventions.**

- The map $X\to\widehat{\mathbb C}$ constant at $\infty$ is holomorphic but is
  excluded from being meromorphic; it is the analogue of the zero function being
  excluded from having a well-defined finite order. Every nonconstant holomorphic
  map $X\to\widehat{\mathbb C}$ is meromorphic.
- Constants, the identity, and $z\mapsto 1/z$ on $\mathbb C^\times$ (and the
  standard chart transition of $\widehat{\mathbb C}$) are examples of
  meromorphic functions; the definition of holomorphic map is used here for
  maps between surfaces of possibly different complex dimension conventions only
  in dimension one, so all chart expressions are functions of one complex
  variable.
- **No choice principle is used.** Charts are quantified over an atlas, which is
  a set; the independence argument is a chain-rule computation. No chart is
  selected.
