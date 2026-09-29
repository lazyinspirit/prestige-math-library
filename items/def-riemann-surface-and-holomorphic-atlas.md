---
id: def-riemann-surface-and-holomorphic-atlas
kind: definition
title: Riemann surfaces and holomorphic atlases
status: draft
origin: pipeline
landmark: true
deps:
  - def-topological-manifold-without-boundary
  - def-second-countable-space
  - def-hausdorff-space
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 1 §2, Definitions 1.6 and 1.8, printed pp. 9–10"
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 1 and Ch. 2, examples of Riemann surfaces and definition of holomorphic map"
---

## Definition

Throughout, $\mathbb C$ carries its usual topology, and an open subset of
$\mathbb C$ is a **plane domain** when it is nonempty and connected. A
**chart** on a topological space $X$ is a homeomorphism
$\varphi:U\to\varphi(U)$ from an open set $U\subseteq X$ onto an open subset
$\varphi(U)\subseteq\mathbb C$ ([[def-homeomorphism-and-open-maps]]); here
$U$ is the **domain** of the chart and $\varphi$ its **coordinate**. Two charts
$\varphi:U\to\mathbb C$ and $\psi:V\to\mathbb C$ are **compatible** when the
transition maps
$$\psi\circ\varphi^{-1}:\varphi(U\cap V)\to\psi(U\cap V),\qquad \varphi\circ\psi^{-1}:\psi(U\cap V)\to\varphi(U\cap V)$$
are holomorphic on the (possibly empty) open sets where they are defined.

A **holomorphic atlas** on $X$ is a family $\mathcal A$ of pairwise compatible
charts whose domains cover $X$. A **Riemann surface** is a topological space $X$
such that

1. $X$ is nonempty and connected;
2. $X$ is Hausdorff ([[def-hausdorff-space]]) and second countable
   ([[def-second-countable-space]]);
3. $X$ carries a holomorphic atlas $\mathcal A$.

The three topological conditions say exactly that $X$ is a nonempty connected
topological $2$-manifold without boundary ([[def-topological-manifold-without-boundary]]):
each chart is a homeomorphism onto an open subset of $\mathbb C=\mathbb R^2$, and
conversely the local Euclidean condition is a supply of charts. The
one-dimensional complex structure is the additional datum $\mathcal A$.

**Maximal atlases.** Fix a topological space $X$ and an atlas $\mathcal A$. A
chart $\theta$ on $X$ is **compatible with $\mathcal A$** when it is compatible
with every member of $\mathcal A$. Write
$$\mathcal A^{\max}:=\{\theta:\theta\text{ is a chart on }X\text{ compatible with }\mathcal A\}.$$
Then $\mathcal A\subseteq\mathcal A^{\max}$, the family $\mathcal A^{\max}$ is an
atlas, any two of its members are compatible, and it contains every atlas
consisting of charts compatible with $\mathcal A$; in particular every
holomorphic atlas on $X$ is contained in a unique maximal atlas, namely
$\mathcal A^{\max}$. To see pairwise compatibility, let $\varphi,\psi$ belong
to $\mathcal A^{\max}$ and let $p$ lie in their overlap. Since $\mathcal A$
covers $X$, there is a chart $\theta\in\mathcal A$ whose domain contains $p$.
On this triple overlap,
$$\psi\circ\varphi^{-1}=(\psi\circ\theta^{-1})\circ(\theta\circ\varphi^{-1})$$
is holomorphic as a composition of holomorphic maps, and the same holds for
its inverse. Such neighbourhoods cover the overlap, proving compatibility.
Any atlas containing $\mathcal A$ consists of charts compatible with
$\mathcal A$, hence is contained in $\mathcal A^{\max}$; maximality therefore
forces equality. The covering hypothesis is essential: a noncovering
compatible family need not determine a unique complex structure on all of $X$.
Thus "the complex structure of $X$" may be
named by any one of its atlases, and two atlases determine the same complex
structure exactly when their union is again an atlas.

**Conventions fixed for this page and its companion.**

- *Nonemptiness is part of the definition.* The empty space carries the empty
  atlas and is a $2$-manifold in the topological sense, but it is not a Riemann
  surface here; statements about Riemann surfaces may therefore use points.
- *Connectedness is part of the definition.* A disjoint union of two Riemann
  surfaces is a topological $2$-manifold with a holomorphic atlas but is not a
  Riemann surface; when a construction produces a possibly disconnected
  complex curve, its connected components are Riemann surfaces by restriction of
  the atlas.
- *Charts are homeomorphisms.* A chart is required to be a homeomorphism onto an
  open subset of $\mathbb C$; a merely holomorphic bijection onto a nonopen
  image would not be a chart. Because each transition is holomorphic with
  nowhere-vanishing derivative on a plane domain, $(\psi\circ\varphi^{-1})'$ has
  no zero and $\varphi\circ\psi^{-1}$ is its holomorphic inverse; requiring
  holomorphy in both directions is therefore a symmetric formulation of the
  usual one-sided requirement, and it is kept because it is the form used here.
- *The Riemann sphere and other examples.* The standard two-chart atlas of the
  Riemann sphere, the identity atlas on a plane domain, and the quotient atlases
  of complex tori are produced on the companion page; this definition only fixes
  the axioms they must satisfy.
- *No choice principle is used in the definition.* An atlas is a set of charts;
  nothing selects a chart at a point, and a maximal atlas is determined by a
  first-order condition on charts.
