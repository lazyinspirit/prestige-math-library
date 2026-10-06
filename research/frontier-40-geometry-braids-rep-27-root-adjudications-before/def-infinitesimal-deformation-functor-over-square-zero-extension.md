---
id: "def-infinitesimal-deformation-functor-over-square-zero-extension"
kind: "definition"
title: "Deformations of schemes and the infinitesimal deformation functor"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 1
justified_by: []
aliases: []
deps:
  - "def-square-zero-extension-and-small-extension"
  - "def-flat-morphism-schemes"
  - "def-locally-finite-presentation-morphism"
  - "def-fibre-product-schemes-universal-property"
  - "def-scheme-over-base"
  - "def-morphism-of-schemes"
  - "def-isomorphism-groupoid-and-connected-category"
  - "def-category-fibred-in-groupoids"
  - "lem-flat-morphisms-stable-base-change"
  - "lem-base-change-locally-finite-type-presentation"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  precheck: "n/a"
sources:
  references:
    - title: "The Stacks Project, Deformation Problems, complete chapter (Chapter 93)"
      url: "https://stacks.math.columbia.edu/download/examples-defos.pdf"
      locator: "Section 93.9, Example 9.1 (tag 0DY7): the category of deformations of a scheme over an Artinian ring, Lemma 9.2 (tag 0DY8, Rim-Schlessinger context) and Lemma 9.3 (tag 0DY9): infinitesimal automorphisms are derivations (printed pages 17-19, read 2026-10-05)"
    - title: "Robin Hartshorne, Lectures on Deformation Theory (Berkeley Math 274 draft, 2004/2005)"
      url: "http://math.berkeley.edu/~robin/math274root.pdf"
      locator: "Chapter 1 Section 1 and Chapter 4 Section 24: flat deformations over the dual numbers and deformations of a morphism (printed pages 7-20, read 2026-10-05)"
---

## Definition

Let $k$ be a field and let $X$ be a $k$-scheme that is flat and locally of
finite presentation over $k$ ([[def-flat-morphism-schemes]],
[[def-locally-finite-presentation-morphism]]), with structure morphism
$X\to\operatorname{Spec}k$ ([[def-scheme-over-base]]). For a small extension
$u\colon A'\to A$ of local Artin $k$-algebras with residue field $k$
([[def-square-zero-extension-and-small-extension]]) a **deformation of $X$ over
$A'$** is a scheme $X'$ flat and locally of finite presentation over $A'$
together with an isomorphism
$$X'\times_{\operatorname{Spec}A'}\operatorname{Spec}A\ \cong\ X$$
over $\operatorname{Spec}A$, where $\operatorname{Spec}A\to\operatorname{Spec}A'$
is the morphism induced by $u$ and the fibre product is taken in the category
of schemes ([[def-fibre-product-schemes-universal-property]]); equivalently,
a deformation is a cartesian square of schemes
$$\begin{array}{ccc} X & \longrightarrow & X' \\ \downarrow & & \downarrow \\ \operatorname{Spec}A & \longrightarrow & \operatorname{Spec}A', \end{array}$$
as in Stacks, *Deformation Problems*, Example 9.1 (tag 0DY7), the vertical
maps being flat and locally of finite presentation. An **isomorphism of
deformations** over $A'$ is an isomorphism $X'_1\to X'_2$ over
$\operatorname{Spec}A'$ whose base change to $\operatorname{Spec}A$ is the
identity of $X$; the identity and composites of such isomorphisms are again
isomorphisms of deformations, and every isomorphism of deformations is
invertible, so deformations of $X$ over $A'$ form a groupoid
([[def-isomorphism-groupoid-and-connected-category]]): the objects are the
deformations and the morphisms are the isomorphisms just defined. Write
$\operatorname{Def}_X(A')$ for this groupoid and
$\operatorname{Def}_X(A')_{\mathrm{iso}}$ for its set of isomorphism classes.
The groupoids $\operatorname{Def}_X(A')$ for varying $A'$, with the pullback
functors described below, constitute the **infinitesimal deformation functor**
of $X$; it is a category fibred in groupoids over the category of small
extensions ([[def-category-fibred-in-groupoids]]).

The **trivial deformation** of $X$ over $A'$ is the base change
$X\times_k\operatorname{Spec}A'$, with its canonical identification of the
special fibre with $X$; it is flat and locally of finite presentation over
$A'$ because $X$ is flat and locally of finite presentation over $k$ and these
properties are stable under base change
([[lem-flat-morphisms-stable-base-change]],
[[lem-base-change-locally-finite-type-presentation]]). The **tangent space** of the
deformation functor is
$$T^1_X=\operatorname{Def}_X(k[\epsilon])_{\mathrm{iso}},$$
the set of isomorphism classes of deformations over the dual numbers, pointed
by the class of the trivial deformation. The **infinitesimal automorphism
group** of the trivial deformation is
$$\operatorname{Inf}_X=\operatorname{Aut}_{k[\epsilon]}\bigl(X\times_k\operatorname{Spec}k[\epsilon]\bigr),$$
the group of automorphisms over $\operatorname{Spec}k[\epsilon]$ reducing to
the identity modulo $\epsilon$.

**Functoriality.** Let $v\colon A'_1\to A'_2$ be a morphism of small
extensions of $A$ (a local $k$-algebra map compatible with the augmentations,
[[def-morphism-of-schemes]] for the induced morphisms of spectra). Base change
along $\operatorname{Spec}A'_1\to\operatorname{Spec}A'_2$ sends a deformation
$X'_2$ of $X$ over $A'_2$ to a deformation
$X'_2\times_{\operatorname{Spec}A'_2}\operatorname{Spec}A'_1$ of $X$ over
$A'_1$, and sends isomorphisms of deformations to isomorphisms of deformations;
this defines a functor
$\operatorname{Def}_X(A'_2)\to\operatorname{Def}_X(A'_1)$. Similarly a
morphism $Y\to X$ of flat, locally finitely presented $k$-schemes induces
functors $\operatorname{Def}_Y(A')\to\operatorname{Def}_X(A')$ carrying a
deformation of $Y$ to its image under the induced morphism, so
$\operatorname{Def}_{(-)}(A')$ is a functor of the scheme.

The functor is genuinely groupoid-valued: a deformation carries automorphisms
over $A'$ that reduce to the identity on the special fibre, so
$\operatorname{Def}_X(A')$ is not in general equivalent to a discrete set, and
the set-valued and groupoid-valued functors are distinguished here. This
distinction is what the companion counterexample uses.

## Remarks

- **Reference conventions.** The definition follows Stacks, *Deformation
  Problems*, Section 93.9, Example 9.1 (tag 0DY7), where deformations of a
  scheme over a ring in the base category $\mathcal C_\Lambda$ are defined as
  flat morphisms fitting into a cartesian square over $\operatorname{Spec}A\to\operatorname{Spec}A'$;
  the infinitesimal automorphism group is the group denoted
  $\operatorname{Inf}$ there, computed in Lemma 9.3 (tag 0DY9). The same
  object appears in Illusie's deformation theory and in Hartshorne, *Lectures
  on Deformation Theory*, Chapter 1 Section 1.
- **Flatness and the cartesian square.** The two descriptions of a deformation
  agree: the base-change square of a flat, locally finitely presented
  $X'\to\operatorname{Spec}A'$ along $\operatorname{Spec}A\to\operatorname{Spec}A'$ is
  cartesian by definition of the fibre product, and conversely a cartesian
  square with flat locally finitely presented vertical maps exhibits $X$ as
  the base change of $X'$. Local finite presentation is stable under base
  change, so it persists on the special fibre.
- **No choice principle is used by this definition.** The description is
  canonical; only the later classification theorems use the Axiom of Choice,
  inherited from the derived-homology suppliers, and they declare it in their
  own statements.
