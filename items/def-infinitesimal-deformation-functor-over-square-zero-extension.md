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
  - "def-axiom-of-choice"
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
  statement: "ai-altered"
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
      locator: "Chapter 1 Sections 1-2, especially the special-fibre convention (printed pages 1-8), and Chapter 4 Section 24 for deformation-of-morphism terminology."
    - title: "The Stacks Project, thickenings of affine schemes"
      url: "https://stacks.math.columbia.edu/tag/04EW"
      locator: "Lemma 37.2.3, including the complete finite-order-thickening proof; consulted for the nilpotent-base size argument."
---

## Definition

Assume the Axiom of Choice as inherited from the cited scheme and
flat-base-change suppliers ([[def-axiom-of-choice]]).
Let $k$ be a field and let $X$ be a flat, locally finitely presented $k$-scheme ([[def-flat-morphism-schemes]], [[def-locally-finite-presentation-morphism]], [[def-scheme-over-base]]). For an augmented commutative $k$-algebra $B\to k$, a **deformation of $X$ over $B$** is a flat, locally finitely presented $B$-scheme $X_B$ together with an isomorphism $X_B\times_{\operatorname{Spec}B}\operatorname{Spec}k\cong X$ ([[def-fibre-product-schemes-universal-property]]). An isomorphism of deformations is a $B$-isomorphism inducing the identity on this identified special fibre. These objects and isomorphisms form a possibly large groupoid $\operatorname{Def}_X(B)$; write $\operatorname{Def}_X(B)_{\mathrm{iso}}$ for its collection of isomorphism classes, without asserting that this collection is a set for every augmented base ([[def-isomorphism-groupoid-and-connected-category]]). This augmented-base convention includes local Artin $k$-algebras with residue field $k$ and arbitrary trivial square-zero algebras $k[I]=k\oplus I$, without a finite-dimensionality assumption on $I$ ([[def-square-zero-extension-and-small-extension]]).

When the augmentation ideal is nilpotent, the groupoid is essentially small and $\operatorname{Def}_X(B)_{\mathrm{iso}}$ is a set. Indeed the special fibre has the same underlying space as $X_B$, and the opens corresponding to a fixed affine cover of $X$ are affine by Stacks, Lemma 37.2.3 (tag 04EW). Their coordinate rings are finitely presented $B$-algebras by local finite presentation. Finite presentations over the fixed ring $B$ form a set, as do their special-fibre identifications and the gluing isomorphisms between open subsets of their spectra. The cover is indexed by a set, so these data give a set of representatives up to isomorphism. This applies to the local Artin bases and all $k[I]$ above.

For a small extension $A'\twoheadrightarrow A$ and a specified deformation $X_A$ over $A$, a **lift of $X_A$ to $A'$** is a flat, locally finitely presented $A'$-scheme $X_{A'}$ with an isomorphism $X_{A'}\times_{\operatorname{Spec}A'}\operatorname{Spec}A\cong X_A$. Isomorphisms of lifts reduce to the identity of $X_A$. Thus the relative lifting problem fixes the whole $A$-deformation, whereas $\operatorname{Def}_X(A')$ fixes only the original $k$-fibre. When $A=k$ the two descriptions coincide.

The **trivial deformation** is $X\times_k\operatorname{Spec}B$, with its canonical special-fibre identification. Its flatness and local finite presentation follow from base-change stability ([[lem-flat-morphisms-stable-base-change]], [[lem-base-change-locally-finite-type-presentation]]). Write $k[\epsilon]=k[\epsilon]/(\epsilon^2)$. The **tangent space** is the pointed set $T_X^1=\operatorname{Def}_X(k[\epsilon])_{\mathrm{iso}}$, pointed by the trivial class. The **infinitesimal automorphism group** is the group of $k[\epsilon]$-automorphisms of $X\times_k\operatorname{Spec}k[\epsilon]$ reducing to the identity on $X$; this reduction condition is part of the definition of $\operatorname{Inf}_X$.

**Base change.** An augmented $k$-algebra map $B_1\to B_2$ induces $\operatorname{Spec}B_2\to\operatorname{Spec}B_1$ ([[def-morphism-of-schemes]]) and the functor
$$\operatorname{Def}_X(B_1)\longrightarrow\operatorname{Def}_X(B_2),\qquad X_{B_1}\longmapsto X_{B_1}\times_{\operatorname{Spec}B_1}\operatorname{Spec}B_2.$$
The special fibre is canonically $X$, and flatness and local finite presentation persist by the cited base-change results. Base change carries isomorphisms to isomorphisms and composes through the canonical fibre-product identifications. Equivalently, these deformation groupoids form a category fibred in groupoids over the category of augmented affine bases ([[def-category-fibred-in-groupoids]]).

A deformation of a morphism $f:Y\to X$ consists of specified deformations $Y_B$, $X_B$ and a $B$-morphism $f_B:Y_B\to X_B$ reducing to $f$. A bare morphism $Y\to X$ supplies neither these deformations nor a lift and therefore does not define a general map between their deformation groupoids.

## Remarks

- The local Artin case and relative lifting convention are the deformation categories of Stacks, *Deformation Problems*, Section 93.9, Example 9.1 (tag 0DY7). The augmented-base convention above explicitly also defines the groupoid on arbitrary square-zero bases required by the first-order classification.
- The groupoids need not be discrete: an object can have nonidentity automorphisms reducing to the identity on its special fibre. Isomorphism classes and automorphism groups are distinct invariants.
- Choice is inherited from the flat-base-change supplier and the square-zero
  convention; no simultaneous choice of base-change objects is required.
