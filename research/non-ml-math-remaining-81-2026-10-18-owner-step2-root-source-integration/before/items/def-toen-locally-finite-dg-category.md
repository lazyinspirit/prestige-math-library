---
id: def-toen-locally-finite-dg-category
kind: definition
title: "Locally finite dg enhancements for derived Hall theory"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-field-and-its-order
  - def-cochain-complex-in-an-abelian-category
  - def-differential-graded-algebra
  - def-differential-graded-module
  - def-model-category-and-quillen-adjunction
  - def-triangulated-category
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bertrand Toën, Derived Hall algebras, arXiv:math/0501343v4, §§3–4"
      url: "https://arxiv.org/pdf/math/0501343v4"
    - title: "Olivier Schiffmann, Lectures on Hall algebras, arXiv:math/0611617v2, §5.6"
      url: "https://arxiv.org/pdf/math/0611617v2"
verification:
  precheck: n/a
---

## Definition

Fix a finite field $k=\mathbb F_q$ ([[def-finite-field-and-its-order]]). A **small $k$-linear dg-category** $\mathcal T$ has a set of objects, a cochain complex $\mathcal T(a,b)$ of $k$-vector spaces for every ordered pair, closed degree-zero identity maps, and associative degree-zero composition chain maps
$$
\mathcal T(b,c)\otimes_k\mathcal T(a,b)\longrightarrow\mathcal T(a,c).
$$
The cohomological grading and differential follow [[def-cochain-complex-in-an-abelian-category]]. Each endomorphism complex is a differential graded algebra in the sense of [[def-differential-graded-algebra]].

The dg-category is **locally finite** when, for every $a,b$, the graded vector space $\bigoplus_{i\in\mathbb Z}H^i(\mathcal T(a,b))$ is finite-dimensional. Thus the cohomology is finite-dimensional and vanishes outside a finite set of degrees; no uniform bound over all pairs is assumed.

A **right dg $\mathcal T$-module** is a dg-functor $\mathcal T^{op}\to\mathrm{Ch}(k)$: it assigns a cochain complex $M(a)$ to each object and compatible degree-zero right composition actions. On each endomorphism algebra $\mathcal T(a,a)$ this is the right differential graded module structure of [[def-differential-graded-module]]. A quasi-isomorphism is a module map inducing an isomorphism on every cohomology group at every object.

The enhancement used here includes the standard projective model category of right dg modules ([[def-model-category-and-quillen-adjunction]]): its weak equivalences are the quasi-isomorphisms just defined, its fibrations are objectwise degreewise surjections, and its representable modules are homotopically projective, so their dg Hom complexes compute derived Hom. Its homotopy category $\mathcal D(\mathcal T)$ is triangulated. The same objectwise homotopy theory is used for arrow diagrams and composable-pair diagrams. It is stable: it is pointed, and a square is a homotopy pushout exactly when it is a homotopy pullback. The translation is the cohomological shift, and a homotopy cofiber of a module map is represented functorially by its mapping cone. These homotopy-theory structures are part of the supplied dg enhancement; an unenhanced triangulated category alone is not an input.

For modules $a,b$, write $\mathrm{RHom}_{\mathcal T}(a,b)$ for the derived Hom complex in the supplied projective homotopy theory. Its derived mapping space has $\pi_j\operatorname{Map}(a,b)=H^{-j}\mathrm{RHom}_{\mathcal T}(a,b)=\operatorname{Ext}^{-j}_{\mathcal T}(a,b)$ for $j\ge0$. In the core homotopy type of a category of modules, $\pi_1$ at $a$ is $\operatorname{Aut}(a)$ and $\pi_i=\operatorname{Ext}^{1-i}_{\mathcal T}(a,a)$ for $i>1$.

For $a\in\mathcal T$, the **representable right module** is $h_a=\mathcal T(-,a)$. A module is **perfect** if its object in $\mathcal D(\mathcal T)$ belongs to the smallest full triangulated subcategory containing all representables and closed under retracts. This means it is obtained from finitely many representables by finite direct sums, shifts, cones, and direct summands. For perfect modules set
$$
\operatorname{Ext}^i_{\mathcal T}(x,y):=\operatorname{Hom}_{\mathcal D(\mathcal T)}(x,y[i]).
$$
