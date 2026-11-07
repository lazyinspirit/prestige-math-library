---
id: thm-arithmetic-chow-intersection-product
kind: theorem
title: "Intersection product in arithmetic Chow groups"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-arithmetic-chow-group-with-green-currents
  - def-arithmetic-variety-over-the-integers
  - thm-intersection-product-and-chow-ring-of-a-smooth-scheme
  - thm-poincare-lelong-for-arithmetic-cycle-relations
  - lem-smooth-dedekind-relative-diagonal-is-a-regular-immersion
  - lem-compact-kahler-current-ddbar-green-regularization
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Henri Gillet and Christophe Soulé, Arithmetic intersection theory"
      url: "https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf"
      locator: "§§2.1–2.2 and 4.1–4.2, printed pp. 109–146; integral product §4.5.1, pp. 162–164"
    - title: "Ziyang Jeremy Gao, An Introduction to Arakelov Geometry"
      url: "https://ziyangjeremygao.github.io/teaching/Arakelov/ArakelovGeometry.pdf"
      locator: "§§2.4.1–2.4.2, printed pp. 29–32; this treatment covers top products of Hermitian line bundles, not the full higher-codimension ring"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a regular arithmetic variety over the ring of integers of a number field, whose total scheme has pure dimension $d+1$ and whose smooth quasi-projective generic fibre has pure dimension $d$. For every $p,q\geq0$, the arithmetic Chow groups have a bilinear product
$$\widehat{\operatorname{CH}}^p(X)_{\mathbb Q}\times\widehat{\operatorname{CH}}^q(X)_{\mathbb Q}\longrightarrow\widehat{\operatorname{CH}}^{p+q}(X)_{\mathbb Q},$$
and these products make $\widehat{\operatorname{CH}}^*(X)_{\mathbb Q}$ a commutative graded ring with unit $[X]$. If $X$ is smooth over the Dedekind base and has projective generic fibre, the full integral graded product on $\widehat{\operatorname{CH}}^*(X)$ exists and induces this rational product.

## Statement references

[Gillet–Soulé, Theorem 4.2.3 and Theorem 4.5.1](https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf)

[Gao, Theorem 2.4.9 (top Hermitian line-bundle products only; not the full higher-codimension ring)](https://ziyangjeremygao.github.io/teaching/Arakelov/ArakelovGeometry.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice and a regular arithmetic variety $X$ with smooth quasi-projective generic fibre.

[A1] The Axiom of Choice is assumed by the ordinary Chow-ring and resolution suppliers used in the stated construction ([[def-axiom-of-choice]]).

[F1] An arithmetic variety is flat and finite type over a number ring with smooth quasi-projective generic fibre; regularity is a property of its total scheme ([[def-arithmetic-variety-over-the-integers]]).

[F2] Arithmetic Chow groups are quotients of arithmetic cycles by principal and exact-current relations ([[def-arithmetic-chow-group-with-green-currents]]).

[F3] The generic fibre $X_K$ is a smooth finite-type scheme over a field, and its ordinary Chow groups form a commutative graded ring with the diagonal-Gysin product ([[thm-intersection-product-and-chow-ring-of-a-smooth-scheme]]).

[F4] The principal arithmetic relation is a Green cycle with the stated $dd^c$ convention ([[thm-poincare-lelong-for-arithmetic-cycle-relations]]).

[F5] On a compact Kähler complex component, current regularization modulo the two Dolbeault boundary images has explicit smooth representatives when the double differential is smooth, and the quotient is separated ([[lem-compact-kahler-current-ddbar-green-regularization]]).

[F6] The relative diagonal of a smooth finite-type scheme of pure relative dimension $d$ over a Dedekind base is locally defined by a regular sequence of length $d$ ([[lem-smooth-dedekind-relative-diagonal-is-a-regular-immersion]]).

## Remaining local proof obligations

The Statement is preserved in full and remains escalated. The two local lemmas in [F5]–[F6] supply only the compact-current regularization and relative-diagonal steps. They do not establish the rational supported Chow product on a general regular arithmetic scheme, Roberts's K1-chain moving modulo K2 boundaries, annihilation of those boundaries by the arithmetic relation maps, general logarithmic Green representatives and residue/cutoff identities, or the complete integral Dedekind-base Gysin and external-product calculus. These prerequisites must be proved locally before the all-codimension product, commutativity, associativity and unit can be concluded. No source theorem is adopted as an external proof input here.
