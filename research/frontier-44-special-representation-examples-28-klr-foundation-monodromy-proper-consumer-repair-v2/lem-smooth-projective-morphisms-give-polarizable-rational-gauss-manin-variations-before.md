---
id: lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations
kind: lemma
title: "Geometric Gauss–Manin Hodge variations and integral lattices"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms, thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties, thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses, lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex, thm-jacobian-criterion-smooth-morphism, def-local-system-of-r-modules-and-its-pullback, lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology, thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace, def-axiom-of-choice]
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Statement

Assume AC. For a smooth projective morphism $f:X\to S$ of smooth quasiprojective complex varieties, $R^mf_*\mathbb Q$ is a finite-rank local system, with full monodromy-stable integral lattice obtained from $R^mf_*\mathbb Z$ modulo torsion, and with a continuous pure Hodge decomposition of weight $m$. A relatively ample line bundle supplies flat Lefschetz operators and a flat rational polarization of this variation. Products, sums, Tate twists, exterior powers and Hodge direct summands have the corresponding geometric realizations and full integral lattices. Pullbacks of algebraic maps between smooth projective fibers preserve rational Hodge structures.

## Facts & Assumptions

**Given:** $f$ and AC [[lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology, thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace, def-axiom-of-choice]]. A smooth algebraic morphism has local analytic submersion charts by the Jacobian criterion [[thm-jacobian-criterion-smooth-morphism]]. Compact fibers have finite CW models ([[lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex]]). Compact Kähler harmonic theory, including Sobolev elliptic inverse bounds and spectral decomposition, is [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]. Hodge–Riemann is [[thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties]]. Rational Künneth is [[thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses]].

## Proof

1.1 The analytification of $f$ is a proper submersion. Analytic submersion follows from the Jacobian charts. A projective embedding into $S\times\mathbb P^N$ shows the inverse image of a compact subset of $S$ is closed in that subset times compact projective space, hence compact. Over a small coordinate ball in $S$ choose a smooth horizontal complement to $\ker df$ and lift the radial paths from its center. The horizontal ODE has a solution on the entire path: its image stays in the inverse image of a compact smaller closed ball, and there the coefficients are bounded in finitely many charts, so continuation cannot terminate early. Forward and reversed paths give inverse smooth diffeomorphisms of the central fiber with each fiber, smoothly dependent on the base point. Thus $f$ is locally a smooth fiber bundle. Transport gives the rational/integral cohomology local systems. [[lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology]] identifies singular cohomology with constant-sheaf cohomology on the fibers and local product neighborhoods. Proper base change in [[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]] identifies these with the actual cohomology sheaves $R^mf_*\mathbb Q$. Finite CW cohomology makes the integral groups finitely generated; quotienting torsion gives a free full lattice. [given, construct, algebra]

2.1 Choose relative Kähler metrics by restricting Fubini–Study from the projective embedding. In a fiber trivialization of step 1.1 their Laplacians form a smooth family of elliptic operators on a fixed compact manifold. To check continuity of harmonic projectors, take a small contour around zero avoiding the other spectrum of the central Laplacian. Its resolvent is bounded $H^s\to H^{s+2}$ by the compact elliptic theorem. The perturbation $\Delta_t-\Delta_0$ has small norm $H^{s+2}\to H^s$, so the Neumann series for the resolvent converges uniformly on that contour. Contour integration gives a continuously varying finite-rank projection. Its rank is constant nearby; the harmonic kernel has that same rank because its dimension is the fixed Betti number from step 1.1. Hence the projection projects precisely onto the harmonic kernel. The Kähler decomposition into $(p,q)$ types is invariant under the Laplacian; applying the same projector to the type projections gives continuous Hodge subspaces. These descend to the cohomology decomposition by harmonic representatives. [step 1.1, given, construct, algebra]

3.1 The first Chern class of the relatively ample line bundle is the restriction of one class on $X$, so it is invariant under local fiber transport and yields a flat rational Lefschetz map. Cup product and integration are invariant under the orientation-preserving fiber diffeomorphisms from step 1.1. The Hodge–Riemann polarization on each primitive piece is therefore flat. Its full-cohomology polarization is obtained by the fixed sign correction on the flat primitive Lefschetz decomposition; the primitive projections are flat because they are formed from the flat Lefschetz operators and their hard-Lefschetz inverses. Fiberwise positivity is Hodge–Riemann. [step 1.1, step 2.1, given, algebra]

4.1 Product families are smooth projective and their rational cohomology is the direct sum of tensor products by Künneth; pullback and wedge of $(p,q)$ forms show this identification respects Hodge types. Finite disjoint unions realize sums. Exterior powers are images of the rational alternating projector on tensor powers, and a prescribed Hodge direct summand is the image of its prescribed flat rational Hodge projector. Intersect each rational direct summand with the full ambient integral lattice to obtain its invariant full lattice, clearing denominators of a finite rational basis to check fullness. For a pure polarized object the polarization identifies its dual with its appropriate Tate twist, so duals remain geometric. Rational pullback between smooth projective fibers preserves Hodge types since a holomorphic map pulls back closed $(p,q)$ forms to closed $(p,q)$ forms; metric independence of the Hodge decomposition identifies the resulting cohomological classes. [step 1.1, step 2.1, step 3.1, given, algebra] ∎
## Remarks

The compact Kähler supplier must prove the rational singular/de Rham comparison, metric-independent pure decomposition, the elliptic inverse bounds and spectral projection used in step 2.1. Its author is constructing that foundation separately. The present proof supplies the family argument rather than importing a Gauss–Manin semisimplicity theorem.
