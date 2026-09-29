---
id: def-constructible-subset-scheme
kind: definition
title: "Constructible subsets of a scheme"
status: draft
origin: pipeline
deps:
  - def-quasi-compact-and-quasi-separated-scheme
  - def-affine-scheme-spectrum
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Topology, Section 5.15 (tags 0059, 04ZC) and Morphisms of Schemes, Section 29.23"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "The Stacks Project, Commutative Algebra, Section 10.29"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
---

## Definition

Let $X$ be a topological space, for instance the underlying space of a scheme
([[def-quasi-compact-and-quasi-separated-scheme]]). An open subset
$U\subseteq X$ is **retrocompact** if for every quasi-compact open subset
$V\subseteq X$ the intersection $U\cap V$ is quasi-compact as a topological
space. A subset $Z\subseteq X$ is **constructible** if it is a finite union of
subsets of the form $U\cap (X\setminus V)$ with $U,V\subseteq X$ retrocompact
open. By convention the empty union is allowed, so $\varnothing$ is
constructible, and every retrocompact open is constructible, by taking
$V=\varnothing$.

A subset of a scheme is called constructible when it is constructible in the
underlying topological space. Since a morphism of schemes is continuous, the
preimage of a constructible subset is constructible whenever the preimages of
retrocompact opens are retrocompact; this is checked where it is used and is
not part of the definition.

For an affine scheme $X=\operatorname{Spec}A$
([[def-affine-scheme-spectrum]]) the notation $D(f)$ for a basic open and
$V(g_1,\dots,g_m)$ for a vanishing set is available, and there the
retrocompact opens are exactly the quasi-compact opens: the space
$\operatorname{Spec}A$ is quasi-compact, so a retrocompact open is
quasi-compact; conversely a quasi-compact open is a finite union of basic
opens, and basic opens are spectra of rings and hence quasi-compact, so
intersections of quasi-compact opens are finite unions of basic opens and
quasi-compact. A subset of $\operatorname{Spec}A$ is therefore constructible
exactly when it is a finite union of sets $D(f)\cap V(g_1,\dots,g_m)$; the
description by finitely many $D(f)\cap V(g_1,\dots,g_m)$ is the one used in
the constructibility results on this page.
