---
page: rational-cherednik-algebras-and-category-o
title: "Rational Cherednik Algebras and Their Category O"
status: published
requires: [affine-hecke-algebras-beyond-type-a]
items:
  - lem-rational-cherednik-log-connection-meridian-eigenvalues
  - def-rational-cherednik-reflection-data-and-parameters
  - def-rational-cherednik-algebra
  - lem-rational-cherednik-commutator-jacobi-compatibility
  - thm-rational-cherednik-pbw-theorem
  - def-rational-cherednik-category-o
  - def-rational-cherednik-standard-module
  - thm-rational-cherednik-standard-module-lies-in-category-o
  - def-rational-cherednik-polynomial-representation
  - lem-rational-cherednik-category-o-has-finite-length
  - lem-rational-cherednik-polynomial-representation-dunkl-formula
  - lem-finite-modules-with-connection-over-a-polynomial-open-are-locally-free
  - lem-rational-cherednik-dunkl-localization-and-flat-connection
  - def-rational-cherednik-kz-functor-and-finite-hecke-algebra
  - lem-rational-cherednik-standard-module-local-connection-residue
  - thm-rational-cherednik-category-o-projective-generator-from-generalized-standards
  - lem-rational-cherednik-kz-relation-specializes-in-flat-family
  - thm-rational-cherednik-kz-standard-modules-factor-through-hecke
  - thm-rational-cherednik-kz-factors-through-hecke-algebra
  - lem-cherednik-nilpotent-induced-connections-have-moderate-growth
  - lem-bounded-separate-rationality-is-rational
  - thm-cherednik-localized-monodromy-is-fully-faithful-with-subquotient-closed-image
  - lem-rational-cherednik-costandard-orthogonality-and-character
  - thm-rational-cherednik-category-o-bgg-reciprocity-and-projective-generator-rank
  - thm-rational-cherednik-kz-quotient-equivalence-under-bmr-rank
examples: []
---

This page treats rational Cherednik algebras for finite complex reflection groups, their PBW basis and category $\mathcal O$, then constructs KZ monodromy with explicit local parameter and loop conventions. The Hecke relation is proved for every object by generalized-standard parameter families. The torsion-quotient equivalence is proved under the explicit Hecke-rank hypothesis.

Companion: [[rational-cherednik-algebras-and-category-o-examples]].

## Conventions

Let $W$ be a finite complex reflection group on a finite-dimensional complex vector space $\mathfrak h$, with reflection set $S$. The parameter $c:S\to\mathbb C$ is constant on conjugacy classes. For each reflection $s$, choose $\alpha_s\in\mathfrak h^*$ and $\alpha_s^\vee\in\mathfrak h$ with $s x=x-\alpha_s^\vee(x)\alpha_s$; only the product $\alpha_s(y)\alpha_s^\vee(x)$ enters the algebra. The sign convention is
$$[y,x]=t\,x(y)-\sum_{s\in S}c_s\alpha_s(y)\alpha_s^\vee(x)s.$$
The category-$\mathcal O$ and KZ carriers use $t=1$. No semisimplicity assumption on $\mathcal O$ or on its Hecke algebra is implicit.

## 1. Algebra and PBW

The reflection data, quotient presentation, Jacobi compatibility and PBW basis are carried by [[def-rational-cherednik-reflection-data-and-parameters]], [[def-rational-cherednik-algebra]], [[lem-rational-cherednik-commutator-jacobi-compatibility]] and [[thm-rational-cherednik-pbw-theorem]]. PBW is proved by terminating ordered reduction: group equivariance resolves mixed group overlaps, while the local Jacobi identity resolves the remaining vector-letter overlaps.

## 2. Category $\mathcal O$ and polynomial representation

The page uses the full subcategory of $H_{1,c}$-modules finite over $\mathbb C[\mathfrak h^*]$ on which $S(\mathfrak h)_{>0}$ acts locally nilpotently. Standard modules are induced from finite-dimensional $W$-modules with $\mathfrak h$ acting by zero. Their PBW vector space is $\mathbb C[\mathfrak h^*]\otimes E$; [[thm-rational-cherednik-standard-module-lies-in-category-o]] proves membership, and [[def-rational-cherednik-polynomial-representation]] takes $E=\mathbf1$. [[lem-rational-cherednik-polynomial-representation-dunkl-formula]] verifies the differential-reflection action. The authored finite-length lemma proves finite length and identifies the simple heads of standards with irreducible labels; it does not assert semisimplicity.

## 3. Localization, KZ monodromy and Hecke parameters

The Dunkl embedding identifies the localized algebra with $\mathcal D(\mathfrak h_{\rm reg})\rtimes W$. Every localized object of $\mathcal O$ is a finite-rank vector bundle with integrable $W$-equivariant connection, and KZ is its exact monodromy functor. For a hyperplane $H$, choose $s_H$ with eigenvalue $\zeta_H=e^{2\pi i/e_H}$ on the conormal line. The positive meridian lifts by angle $2\pi/e_H$ and ends at the $s_H^{-1}$ translate; the endpoint is identified by $s_H$. With the stated left differential-module convention the standard-module residue is
$$R_H=\sum_{\ell=1}^{e_H-1}c_{H,\ell}(1-s_H^\ell),$$
so its $\zeta_H^j$ eigenspace gives the meridian root
$$\mu_{H,j}=\zeta_H^j\exp\!\left(-\frac{2\pi i}{e_H}\sum_{\ell=1}^{e_H-1}c_{H,\ell}(1-\zeta_H^{j\ell})\right).$$
This sign is derived from the local connection and its horizontal transport; source parameter conventions must be translated to this commutator and endpoint convention.

The uniform Euler bound in [[thm-rational-cherednik-category-o-projective-generator-from-generalized-standards]] constructs a finite projective generator inside generalized standards and proves the highest-weight structure. [[lem-rational-cherednik-costandard-orthogonality-and-character]] proves costandard orthogonality with a finite Koszul resolution and equality of standard/costandard characters; [[thm-rational-cherednik-category-o-bgg-reciprocity-and-projective-generator-rank]] proves reciprocity and the KZ projective endomorphism dimension $|W|$.

[[lem-rational-cherednik-kz-relation-specializes-in-flat-family]] proves a convergent nonresonant gauge and respects the fractional meridian endpoint. Monodromy depends holomorphically on the polynomial-free generalized-standard family, so the exact Hecke relation extends to every parameter. Thus [[thm-rational-cherednik-kz-standard-modules-factor-through-hecke]] and [[thm-rational-cherednik-kz-factors-through-hecke-algebra]] hold without an assumption of semisimplicity or diagonalizability at resonant parameters.

For the quotient, [[lem-finite-modules-with-connection-over-a-polynomial-open-are-locally-free]] supplies the coherent-connection local-freeness statement beyond category $\mathcal O$. [[lem-cherednik-nilpotent-induced-connections-have-moderate-growth]] proves uniform growth on generic lines, and [[lem-bounded-separate-rationality-is-rational]] gives the interpolation argument needed to algebraize horizontal maps and invariant determinant lines. [[thm-cherednik-localized-monodromy-is-fully-faithful-with-subquotient-closed-image]] consequently proves full faithfulness and closure under subobjects and quotients directly. No unproved full Riemann–Hilbert theorem is imported.

Finally [[thm-rational-cherednik-kz-quotient-equivalence-under-bmr-rank]] proves that the Hecke map onto the KZ projective endomorphism algebra is surjective, and the explicit hypothesis $\dim_{\mathbb C}\mathcal H_{q(c)}(W)=|W|$ makes it an isomorphism. The equivalence identifies the torsion quotient, rather than all of category $\mathcal O$, with Hecke modules. No unconditional Hecke dimension theorem is claimed.

## Prerequisites and reuse boundaries

The page prerequisite [[affine-hecke-algebras-beyond-type-a]] is a reading-order edge only. Its actual batch-71 evidence was inspected; no PA40 item is used as a logical supplier here. The existing [[def-degenerate-affine-hecke-algebra]] remains the type-A degenerate affine Hecke algebra and is not a rational Cherednik or KZ supplier.

## Definition, diagram, and repair contracts

Apply the [definition and diagram contracts](../../research/physics-algebras-planning-2026-10-17/definition-and-diagram-contracts.md) and [prerequisite and repair holds](../../research/physics-algebras-planning-2026-10-17/prerequisites.md) before treating any item as a supplier. No diagram is needed for these algebraic and local-connection arguments; if a later diagram is added, its spaces, maps, orientations and algebraic verification must be stated. Existing items keep their canonical identities and placements. The bounded same-ID resolver route applies only to carriers designated physics-only; this PA-42 pair is a mathematics page and makes no such designation.

## Sources

The authoring used and inspected the full relevant arguments in [Etingof–Ginzburg](https://arxiv.org/pdf/math/0011114), [Etingof–Ma, *Lecture Notes on Cherednik Algebras*](https://arxiv.org/pdf/1001.0432) and [Ginzburg–Guay–Opdam–Rouquier](https://arxiv.org/pdf/math/0212036). URLs, section and page locators, item-level support, source-result dispositions, retrieval stamps and the convention comparison are recorded in the batch coverage file.

## Canonical planning records

The complete design section is [PA-42 in the physics/algebras track](../../research/plan-physics-algebras-track.md). The controlling run plan is [plan-spec.json](../../research/plan-spec.json); its IDs, titles, order and page prerequisites agree with the design. No plan/spec conflict was found. The source research inventory remains unchanged.

The lane reference is [05-hecke](../../research/physics-algebras-planning-2026-10-17/dossiers/05-hecke.md), with its [source inventory](../../research/physics-algebras-planning-2026-10-17/sources/05-hecke/README.md). The full placement contract is the [placed-pages inventory](../../research/physics-algebras-planning-2026-10-17/splice/placed-pages.json), entry `rational-cherednik-algebras-and-category-o`; the historical audited [proposed-pages inventory](../../research/physics-algebras-planning-2026-10-17/proposed-pages.json) remains unchanged.
