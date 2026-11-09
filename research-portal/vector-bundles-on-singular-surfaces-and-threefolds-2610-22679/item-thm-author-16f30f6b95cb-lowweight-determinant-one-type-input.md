---
title: External determinant and pointed one-type inputs
status: published
research_item: thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
dependency_level: 15
---

PDF p. 9: Actual low-weight projections and determinant normalization

## Prerequisites

- [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)
- [lem-unit-section-of-k-one-determinant](item-lem-unit-section-of-k-one-determinant)
- [lem-nisnevich-line-bundle-torsors](item-lem-nisnevich-line-bundle-torsors)
- [lem-adjudicate-f6007757a8ac-actual-determinant-stack-map](item-lem-adjudicate-f6007757a8ac-actual-determinant-stack-map)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed compatible universe and site-size bounds of the supplied constructions.

The extended determinant functor on perfect complexes is canonically compatible with exact triangles and derived pullback; on bounded locally free representatives its graded line is the alternating tensor product of determinant lines, with alternating rank. It gives the usual natural determinant/Picard operation on rank-zero K-theory. This operation retains line-bundle descent morphisms; it is not obtained by comparing only affine Picard GROUPS. On affine K-spaces its actual determinant map has π₁ the ordinary matrix determinant, and on vector-bundle classes its π₀ map is the determinant line. In particular on Nisnevich local rings, $\pi_0K=\mathbb Z$ by rank and π₁K=$G_m$ by determinant. The completed affine K₀/K₁ suppliers specify the same maps in the run's enhanced nonconnective model.

Pointed connected 1-types in an infinity-topos are classified fully faithfully by their sheaves of fundamental groups. Thus for the Nisnevich sheaf S of rank-zero K-spaces, τ≤1S≃$BG_m$ is the determinant/Pic map: its π₁ identification is determinant, and its π₀ of global sections is the usual first Chern class c₁=class of the determinant line, including perfect-complex classes. Maps S→$BG_m$ are determined by this 1-type. On a vector bundle the actual map is the frame-torsor pushforward $GL_r$→$G_m$ by matrix determinant; on a perfect complex it is the extended determinant functor with its triangle/pullback coherence.

## Source contract

[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated universe and site-size bounds. These hypotheses are used through the actual determinant map in [F2], including its enhanced perfect-category small presentations, and through the unit-section and torsor suppliers. Stack maps use a compatible universe-bounded big Nisnevich site; line-frame identification and derived sections use the specified small sites in the torsor supplier.

**Given:** The specified K-model, Nisnevich sheaves of spaces, and perfect complexes on schemes; use the rank-zero fiber so that graded-line signs are handled before forgetting the rank. Assume Choice and the universe and site-size bounds in [A1].

**Goal:** Import the ordinary coherent determinant construction and the standard first-Postnikov description used below.

[F1] Knudsen–Mumford Definition4/Theorem2 supplies the extended determinant data for true triangles, with the alternating formula, graded sign symmetry and pullback composition isomorphisms. In the Statement, compatibility with exact triangles means this enhanced cofiber convention; it does not assert functoriality for arbitrary ordinary derived-triangle diagrams.

[F2] [lem-adjudicate-f6007757a8ac-actual-determinant-stack-map](item-lem-adjudicate-f6007757a8ac-actual-determinant-stack-map) supplies the actual natural determinant map on the present perfect K-space, including its descent data, object and automorphism maps. Its proof first uses the Waldhausen determinant universal one-type and the canonical enhanced K comparison, including degree zero under idempotent completeness. Weibel IV.4.4.2 gives the compatible elementary affine normalization; the existing local K₀/K₁ suppliers give rank and determinant. Thus a Postnikov calculation is used to identify an already constructed map, rather than to construct enhanced determinant coherence. The supplier’s descent step uses sheafification of its affine map into the graded-line stack. Weibel V.10.10.1 supplies only the contextual descent statement under the separately recorded source scope.

[F3] HTT Proposition7.2.2.12(2) supplies the pointed 1-type classification. It proves the Postnikov description after the local calculations in [F2]. The global determinant line is glued with its isomorphisms by [F1]; local triviality of a line bundle is not used to infer that its Picard class is zero globally.

## External input
Import [F1]–[F3] with their stated reading limits. The first-Postnikov description is the formal consequence of the connected rank-zero sheaf and π₁=$G_m$, with the identification fixed by the actual determinant construction. No new arbitrary coherent enhancement or equivalence is inferred from group-level affine comparisons.

## Precise source and enhancement scope
KM's true triangles are represented by actual short-exact complex diagrams in its derived diagram category. The forgetful functor to ordinary derived triangles loses morphism information (pp.37–38); the p.41 footnote requires genuine diagram commutativity. The p.43 ordinary-triangle corollary has a perfect-cohomology hypothesis, and p.44 warns against an unrestricted extension. These qualifications do not weaken the determinant/Picard operation needed here. The new actual-map supplier gives the required map before the first-Postnikov identification, with true/enhanced cofiber additivity. No published KM error is alleged.
