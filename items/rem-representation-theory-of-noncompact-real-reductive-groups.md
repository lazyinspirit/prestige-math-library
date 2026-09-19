---
id: rem-representation-theory-of-noncompact-real-reductive-groups
kind: remark
title: Representation theory of noncompact real reductive groups
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VII"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VII, §2, the axioms of a reductive Lie group and the Harish-Chandra class, printed pp. 446-458; Historical Notes for Chapter VII, printed pp. 768-772"
landmark: false
---

## Remark

This page and its companion stop at the finite-dimensional real structure
theory: complexification and conjugations, compact and split forms, Cartan
involutions and Cartan decompositions, restricted roots, the Iwasawa
decomposition, $\theta$-stable Cartan subalgebras and Cayley transforms, and
the Vogan and Satake classification of real forms. Everything on this page is
a statement about the real Lie algebra $\mathfrak g_0$ or about the global
decomposition of a semisimple Lie group with finite center.

The representation theory of a noncompact real reductive group $G$ lies beyond
this block and is not used anywhere on this page. Its subject matter is:
the real reductive class and the Harish-Chandra class governed by axioms on
the Lie algebra, the maximal compact subgroup $K$ and the center
(Knapp, Chapter VII, §2); admissible representations and the Harish-Chandra
module of $(\mathfrak g,K)$-finite vectors, which forgets the topology of the
representation in exchange for a purely algebraic module over the pair
$(\mathfrak g,K)$; the unitary dual and the problem of which irreducible
admissible representations carry a positive definite invariant Hermitian
form; the Plancherel theorem for $L^2(G)$ with its discrete and continuous
parts; and the Langlands classification of irreducible admissible
representations as quotients of standard parabolically induced
representations.

Two features of the finite-dimensional theory that this page does build are
the inputs that the analytic theory takes for granted: the Cartan
decomposition and the existence of a maximal compact subgroup $K$, and the
Iwasawa decomposition $G=KAN$ together with the restricted-root data of
$\mathfrak a$ and the nilpotent algebra $\mathfrak n$. The further steps —
admissibility, the Harish-Chandra homomorphism and its infinitesimal
character, the asymptotics of matrix coefficients, and the harmonic analysis
of $L^2(G)$ — use elliptic regularity, Fourier analysis on groups and
invariant integral geometry, none of which is developed in this library
track. For the same reason the compact-group representation theory that the
library does contain is not a substitute. A finite-dimensional unitary
representation has relatively compact image; it can be faithful for a
noncompact group (even with dense image in a torus), but it cannot realise
that group as a closed noncompact matrix subgroup. The unitary dual and its
topological representation theory are therefore not captured by the compact
theory.

The boundary is recorded here so that no consumer of this page treats the
Vogan/Satake classification of real forms as a classification of
representations. The relevant foundational constructions for the analytic
theory are documented in the Historical Notes for Chapter VII of the source.
