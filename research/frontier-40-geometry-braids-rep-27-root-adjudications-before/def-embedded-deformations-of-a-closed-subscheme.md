---
id: "def-embedded-deformations-of-a-closed-subscheme"
kind: "definition"
title: "Embedded deformations of a closed subscheme"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 2
justified_by: []
aliases: []
deps:
  - "def-closed-immersion-schemes"
  - "def-flat-morphism-schemes"
  - "def-fibre-product-schemes-universal-property"
  - "def-infinitesimal-deformation-functor-over-square-zero-extension"
  - "def-quasi-coherent-ideal-sheaf"
  - "def-sheaf-hom"
  - "def-internal-hom-qc-sheaves"
  - "def-effective-cartier-divisor"
  - "thm-conormal-sequence-closed-immersion"
  - "lem-smooth-closed-immersion-regular-conormal-sequence"
  - "def-smooth-morphism-schemes"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  precheck: "n/a"
sources:
  references:
    - title: "Robin Hartshorne, Lectures on Deformation Theory (Berkeley Math 274 draft, 2004/2005)"
      url: "http://math.berkeley.edu/~robin/math274root.pdf"
      locator: "Chapter 1 Theorem 1.1 and Chapter 1 Section 2, Situation A: closed subschemes of a fixed X, the Hilbert functor and its tangent space H^0(N) (printed pages 7-14, read 2026-10-05)"
    - title: "Edoardo Sernesi, An overview of classical deformation theory"
      url: "http://www.mat.uniroma3.it/users/sernesi/sernesioverviewdefth.pdf"
      locator: "Section 2 (pp. 4-7): first-order deformations of a closed subscheme inside a fixed ambient scheme and the normal-bundle description (read 2026-10-05)"
---

## Definition

Let $k$ be a field and let $X$ be a smooth projective $k$-scheme
([[def-smooth-morphism-schemes]]) with a closed subscheme $Y\subseteq X$
([[def-closed-immersion-schemes]]) that is flat over $k$
([[def-flat-morphism-schemes]]). For a small extension $A'\to A$ of local
Artin $k$-algebras with residue field $k$ and with the fixed deformation of
the ambient scheme $X$ given here by the trivial deformation
$$X_{A'}=X\times_k\operatorname{Spec}A'$$
of $X$ over $A'$ ([[def-infinitesimal-deformation-functor-over-square-zero-extension]]),
an **embedded deformation of $Y$ in $X$ over $A'$** is a closed subscheme
$Y'\subseteq X_{A'}$ flat over $A'$ together with an isomorphism
$$Y'\times_{\operatorname{Spec}A'}\operatorname{Spec}A\ \cong\ Y$$
over $X$, the fibre product being formed along the morphism
$\operatorname{Spec}A\to\operatorname{Spec}A'$ and the displayed isomorphism
being compatible with the identification
$X_{A'}\times_{\operatorname{Spec}A'}\operatorname{Spec}A\cong X$
([[def-fibre-product-schemes-universal-property]]). **Isomorphisms of embedded
deformations** are isomorphisms $Y'_1\to Y'_2$ over $X_{A'}$ inducing the
identity on $Y$; they are closed under composition and inverse, so embedded
deformations of $Y$ in $X$ over $A'$ form a groupoid. Writing
$\operatorname{ED}_{Y\subseteq X}(A')$ for this groupoid and
$\operatorname{ED}_{Y\subseteq X}(A')_{\mathrm{iso}}$ for its set of
isomorphism classes defines the **embedded deformation functor** on the
category of small extensions of $k$. The **trivial embedded deformation** is
$Y\times_k\operatorname{Spec}A'\subseteq X_{A'}$, and it exists as an
embedded deformation because $Y$ is flat over $k$.

When $Y=V(f)\subseteq\mathbb P^n_k$ is a hypersurface, this is the functor of
deformations of $Y$ inside the fixed projective space, whose tangent space is
computed by the normal sheaf; the **normal sheaf** of a closed immersion with
ideal sheaf $\mathcal I$ is
$$\mathcal N_{Y/X}=\mathcal Hom_{\mathcal O_Y}\bigl(\mathcal I/\mathcal I^2,\mathcal O_Y\bigr)$$
([[def-quasi-coherent-ideal-sheaf]], [[def-sheaf-hom]],
[[def-internal-hom-qc-sheaves]]), where $\mathcal I/\mathcal I^2$ is the
conormal sheaf of the immersion; for a smooth closed immersion of smooth
schemes the conormal sheaf is locally free and the conormal sequence
$0\to\mathcal I/\mathcal I^2\to i^*\Omega^1_{X/k}\to\Omega^1_{Y/k}\to0$ is
exact ([[thm-conormal-sequence-closed-immersion]],
[[lem-smooth-closed-immersion-regular-conormal-sequence]],
[[def-effective-cartier-divisor]]). For a hypersurface $V(f)\subseteq\mathbb P^n$
with $f$ a nonzerodivisor the ideal sheaf is invertible with
$\mathcal I\cong\mathcal O(-d)$, so the conormal sheaf is a line bundle on $Y$
and the normal sheaf is its dual.

## Remarks

- **Reference conventions.** The definition is the fixed-ambient (Hilbert
  scheme) form of the embedded deformation problem, following Hartshorne,
  *Lectures on Deformation Theory*, Chapter 1 Theorem 1.1 and Chapter 1
  Section 2, Situation A, where closed subschemes of a fixed nonsingular
  projective $X$ are deformed inside $X$; the tangent space of that problem is
  $H^0(Y,\mathcal N_{Y/X})$. The same problem is described in Sernesi, *An
  overview of classical deformation theory*, Section 2.
- **Comparison with abstract deformations.** An embedded deformation of $Y$
  in $X$ is in particular a deformation of $Y$ as a $k$-scheme in the sense of
  [[def-infinitesimal-deformation-functor-over-square-zero-extension]], but
  the two functors are different in general: embedded deformations come with a
  closed immersion into the fixed thickening $X_{A'}$, which is additional
  structure not present in an abstract deformation. No injectivity or
  surjectivity of the comparison is asserted here.
- **No choice principle is used by this definition.** Flatness, closed
  immersions and the normal sheaf are used only through the cited definitions
  and the canonical fibre-product identification.
