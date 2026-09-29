---
id: def-linear-system-base-locus
kind: definition
title: "Linear systems, base loci, and general members"
status: published
origin: pipeline
deps:
  - def-algebraically-closed-field
  - def-module-on-ringed-space
  - def-section-restriction-and-global-section
  - def-projective-space-points
  - def-projective-algebraic-set
  - thm-projective-zariski-topology
  - lem-zero-scheme-of-line-bundle-section
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Vakil, Foundations of Algebraic Geometry Classes 51–52, §3.9 Corollary 3.9, printed p. 10"
      url: "https://virtualmath1.stanford.edu/~vakil/0506-216/216class5152.pdf"
    - title: "Arapura, Notes on Basic Algebraic Geometry, §5.4 hyperplane parameterization and Theorem 5.4.5, printed pp. 38–39"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
---

## Definition

Fix an algebraically closed field $k$. Let $X$ be a $k$-scheme, let $L$ be an
invertible (locally free of rank one) $\mathcal O_X$-module, and let
$W\ne0$ be a finite-dimensional $k$-linear subspace of $\Gamma(X,L)$. The
subspace $W$ is a **linear system** on $X$.

Its parameter space is
$$
\mathbf P(W)=(W\setminus\{0\})/k^\times,
$$
the set of one-dimensional subspaces of $W$. If $\dim_kW=r$, a choice of basis
identifies $\mathbf P(W)$ with $\mathbf P_k^{r-1}$; give it the projective
Zariski topology. A change of basis is an invertible linear coordinate change,
which carries homogeneous zero sets to homogeneous zero sets, so this topology
does not depend on the chosen basis. In particular, when $r=1$, $\mathbf P(W)$
is the one-point space $\mathbf P_k^0$.

For $0\ne s\in W$, write $Z(s)\hookrightarrow X$ for its zero subscheme from
[[lem-zero-scheme-of-line-bundle-section]]. Replacing $s$ by $\lambda s$ for
$\lambda\in k^\times$ multiplies each local equation by a unit, so it leaves
the quotient ideals and the closed subscheme unchanged. Thus $Z(s)$ depends
only on the parameter $[s]\in\mathbf P(W)$. The **base locus** of $W$ is the
closed subset
$$
\operatorname{Bs}(W)=\bigcap_{0\ne s\in W}|Z(s)|=\bigcap_{[s]\in\mathbf P(W)}|Z(s)|\subseteq X.
$$
It is closed because each $|Z(s)|$ is closed and arbitrary intersections of
closed subsets are closed.
It is **base-point-free** when this subset is empty.

A property holds for a **general member** of $W$ if there is a nonempty
Zariski-open subset $U\subseteq\mathbf P(W)$ such that every parameter in $U$
has that property.

For a fixed projective embedding $X\subseteq\mathbf P_k^N$, the **hyperplane
system** is the system cut out by restrictions of degree-one homogeneous
forms; the degree-$e$ hypersurface system, for $e\ge1$, is cut out by
restrictions of homogeneous forms of degree $e$. These are viewed as sections
of the corresponding powers of the hyperplane line bundle, with forms giving
the same section identified.

## Source note

Vakil, *Foundations of Algebraic Geometry Classes 51–52*, §3.9 Corollary 3.9,
printed p. 10 (PDF page 10, lines 437–441), describes a finite-dimensional
base-point-free linear system as a vector space of sections of an invertible
sheaf and treats a general section as a point of $\mathbf P H^0(X,L)$. It
asserts that each section gives a closed subscheme, but leaves the Bertini proof
to Exercise 3.10; the preceding item supplies the zero-scheme construction.
Arapura, *Notes on Basic Algebraic Geometry*, §5.4, printed pp. 38–39 (PDF
pages 38–39, lines 1689–1721), identifies hyperplanes defined by linear forms
up to nonzero scalar with the dual projective space and states the smooth
hyperplane conclusion on a nonempty open subset. These passages support the
projective parameter and “general” conventions and the hyperplane example;
the basis-independent topology and arbitrary-subspace wording are made
explicit here.
