---
id: def-normal-point-and-normal-variety
kind: definition
title: Normal points and normal varieties
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 0
justified_by: [lem-normality-local-on-affine-opens]
aliases: []
deps: [def-normal-noetherian-ring, def-integral-closure-and-integrally-closed-domain, def-germ-and-local-ring-classical-variety, thm-local-ring-affine-variety-localization, def-classical-algebraic-prevariety-regular-maps-and-varieties, def-classical-integral-affine-atlas-and-chartwise-morphism, thm-classical-principal-open-coordinate-ring-localization, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §a: Definition 8.1 and the following remark on reducible varieties (cross-reference 3.14)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Definition

Assume the Axiom of Choice for the affine-coordinate and localization interfaces.
Let $k$ be an algebraically closed field and let $X$ be a classical variety over
$k$, in the reduced separated finite-type register of
[[def-classical-algebraic-prevariety-regular-maps-and-varieties]]; the
irreducible case is the one of
[[def-classical-integral-affine-atlas-and-chartwise-morphism]]. Let $x\in X$
and let $\mathcal O_{X,x}$ be the local ring of germs of regular functions at
$x$ ([[def-germ-and-local-ring-classical-variety]]); when $X$ is affine with
maximal ideal $\mathfrak m_x$ of $x$, this ring is the localisation
$k[X]_{\mathfrak m_x}$
([[thm-local-ring-affine-variety-localization]]). For a reducible affine chart,
the same identification follows by representing germs on principal
neighbourhoods and using
[[thm-classical-principal-open-coordinate-ring-localization]].

The point $x$ is **normal** when $\mathcal O_{X,x}$ is an integrally closed
domain ([[def-integral-closure-and-integrally-closed-domain]]). The variety $X$
is **normal** when every one of its points is normal; equivalently, when every
local ring $\mathcal O_{X,x}$ is an integrally closed domain.

This is the pointwise form of the ring-theoretic notion of
[[def-normal-noetherian-ring]]: a Noetherian ring is normal when all of its
prime localisations are integrally closed domains, and the local rings of the
points of a classical variety are the localisations of the coordinate rings of
its affine charts. Prime localizations and classical point localizations give the same normality condition, as proved in [[lem-normality-local-on-affine-opens|the affine-chart criterion]]; reducibility is allowed.

**Recorded consequence.** A point that lies on two distinct irreducible
components of $X$ cannot be normal. On an affine chart $U$ with reduced
coordinate ring $R=k[U]$, the components through $x$ correspond to two distinct
minimal primes $\mathfrak p\ne\mathfrak q$ of $R$ contained in the maximal
ideal $\mathfrak m_x$. Pick $a$ in the intersection of the minimal primes other
than $\mathfrak q$ with $a\notin\mathfrak q$, and $b$ in the intersection of
the minimal primes other than $\mathfrak p$ with $b\notin\mathfrak p$; such
elements exist because if that intersection were contained in $\mathfrak q$,
then some minimal prime other than $\mathfrak q$ would be contained in
$\mathfrak q$, hence equal to it. Then $ab$ lies in every minimal prime of the
reduced ring, hence $ab=0$. Moreover $a/1\ne0$ in $R_{\mathfrak m_x}$: if
$sa=0$ with $s\notin\mathfrak m_x$, then the class of $s$ is a nonzero element
of the domain $R/\mathfrak q$ annihilating the nonzero class of $a$, a
contradiction, so $s\in\mathfrak q\subseteq\mathfrak m_x$; the same argument
applies to $b$. Thus
$\mathcal O_{X,x}$ has zero divisors and is not a domain, so $x$ is not normal.
In particular, distinct irreducible components of a normal classical variety
are disjoint.
