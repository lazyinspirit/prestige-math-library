---
id: prop-relative-morse-complex-for-an-adapted-cobordism
kind: proposition
title: "The relative Morse complex of an adapted cobordism"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-compactified-unstable-manifolds-give-a-cw-decomposition, lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count, def-smooth-cobordism-triad-for-morse-theory, def-morse-function-adapted-to-a-cobordism, def-handle-decomposition-relative-to-the-incoming-boundary, thm-morse-functions-and-handle-decompositions-correspond, lem-a-handle-decomposition-gives-a-relative-cw-complex, def-mod-two-morse-chain-group, def-mod-two-morse-differential, thm-mod-two-morse-differential-squares-to-zero, def-signed-morse-differential-over-the-integers, thm-integral-morse-differential-squares-to-zero, def-morse-smale-pair, thm-one-critical-point-handle-attachment, cor-unstable-disk-is-the-handle-core, prop-deformation-lemma-for-a-critical-point-free-slab, lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time, thm-regular-interval-diffeomorphism, thm-cellular-chains-compute-homology-with-local-coefficients, def-homology-and-cohomology-with-local-coefficients, def-relative-singular-homology, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, def-compact-space, def-axiom-of-choice, def-nondegenerate-critical-point-nullity-index-and-coindex]
justified_by: []
dependency_level: 8
proof_strategy: direct
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.5: cobordisms, boundary-directed fields, the complex (C_*(f),partial_X) with all connections staying far from the boundary, printed pp. 78-80, PDF pp. 88-90"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 19, Sec. 6.2: Morse homology for manifolds with boundary; boundary types and the complexes computing H_*(partial M), H_*(M,partial M), H_*(M), PDF pp. 88-90"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 2.3 (relative Morse inequalities via the handle filtration) and Sec. 2.5 (the filtration M_k = {f <= k+1/2} gives the chain complex computing H_*(M)), read at PDF pp. 56-58 and 72-74"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(W;M_0,M_1)$ be a
compact smooth cobordism triad with adapted excellent Morse function $f$ and
adapted complete downward gradient-like field $X$ pointing outward along $M_0$
and inward along $M_1$, with $(f,X)$ Morse--Smale in the sense that all
unstable/stable intersections in $\operatorname{int}W$ are transverse
([[def-smooth-cobordism-triad-for-morse-theory]],
[[def-morse-function-adapted-to-a-cobordism]],
[[def-morse-smale-pair]]). Then:

1. all critical points of $f$ are interior and finite in number
   ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]],
   [[def-nondegenerate-critical-point-nullity-index-and-coindex]]); moreover
   every $X$-trajectory joining two critical points is contained in the
   compact interior region
   $\{x\in W: f(q)\le f(x)\le f(p)\}$ determined by the endpoint values, hence
   meets neither $\partial W$ nor sufficiently small boundary collars whose
   $f$-values lie below all interior critical values at $M_0$ and above all
   interior critical values at $M_1$
   ([[prop-deformation-lemma-for-a-critical-point-free-slab]],
   [[lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time]],
   [[thm-regular-interval-diffeomorphism]]);
2. the **relative Morse chain groups** $CM_k(f,X;\Lambda)$, free on the
   interior critical points of index $k$ over $\Lambda=\mathbb Z/2$ and
   $\Lambda=\mathbb Z$
   ([[def-mod-two-morse-chain-group]],
   [[def-signed-morse-differential-over-the-integers]]), with the trajectory
   differentials of [[def-mod-two-morse-differential]] and
   [[def-signed-morse-differential-over-the-integers]] restricted to the
   interior trajectory moduli spaces, form chain complexes
   ([[thm-mod-two-morse-differential-squares-to-zero]],
   [[thm-integral-morse-differential-squares-to-zero]]); their homology is
   denoted $HM_*(W,M_0;\Lambda)$ and called the **relative Morse homology** of
   the adapted data;
3. the compactified unstable manifolds of the interior critical points are the
   cells of the relative CW pair of
   [[lem-compactified-unstable-manifolds-give-a-cw-decomposition]], and the
   coefficient comparison of
   [[lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count]]
   identifies the relative Morse complex with the cellular complex of the
   relative handle decomposition of $(W,M_0)$
   ([[def-handle-decomposition-relative-to-the-incoming-boundary]],
   [[thm-morse-functions-and-handle-decompositions-correspond]],
   [[lem-a-handle-decomposition-gives-a-relative-cw-complex]],
   [[thm-one-critical-point-handle-attachment]],
   [[cor-unstable-disk-is-the-handle-core]]); hence there is a chain
   isomorphism between the relative Morse complex and the relative handle
   (cellular) chain complex, and consequently
   $$HM_*(W,M_0;\Lambda)\cong H_*^{\mathrm{cell}}(W,M_0;\Lambda)\cong H_*(W,M_0;\Lambda),$$
   the last isomorphism being the relative cellular comparison theorem applied
   with the constant local system
   ([[thm-cellular-chains-compute-homology-with-local-coefficients]],
   [[def-homology-and-cohomology-with-local-coefficients]],
   [[def-relative-singular-homology]]).

## Facts & Assumptions

**Given:** The Axiom of Choice and a compact cobordism triad $(W;M_0,M_1)$ with adapted excellent Morse function $f$ and adapted complete boundary-directed downward gradient-like field $X$, Morse--Smale in the interior.

[F1] Critical points of an adapted Morse function are interior, and there are finitely many of them; equivalently, the interior slab decomposition attaches one handle per critical point and the handle decomposition is finite ([[def-morse-function-adapted-to-a-cobordism]], [[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]], [[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

[F2] The function strictly decreases along $X$-trajectories, and boundary values are $0$ and $1$, outside the interior critical-value range. By continuity and compactness of the boundary, the collars can be shrunk until their values avoid that range; trajectories then stay in the compact region between the endpoint levels and away from these smaller collars, by the deformation lemma for a critical-point-free slab and the controlled crossing of compact regular bands ([[prop-deformation-lemma-for-a-critical-point-free-slab]], [[lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time]], [[thm-regular-interval-diffeomorphism]], [[def-morse-function-adapted-to-a-cobordism]]).

[F3] The compactified unstable manifolds of the interior critical points give a relative CW pair with one cell per interior critical point and, by the coefficient comparison, the cellular boundary coefficients equal the trajectory counts up to the index-dependent normalization ([[lem-compactified-unstable-manifolds-give-a-cw-decomposition]], [[lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count]]).

[F4] The handle decomposition relative to the incoming boundary attached at the critical points has cores the unstable disks, and the correspondence theorem identifies the handle filtration with the relative CW filtration; the associated relative CW complex computes the relative homology ([[def-handle-decomposition-relative-to-the-incoming-boundary]], [[thm-morse-functions-and-handle-decompositions-correspond]], [[lem-a-handle-decomposition-gives-a-relative-cw-complex]], [[thm-one-critical-point-handle-attachment]], [[cor-unstable-disk-is-the-handle-core]]).

[F5] The cellular chains of a CW pair with the constant local system are the ordinary relative chains, and the cellular comparison theorem identifies the homology of the cellular complex with relative singular homology ([[thm-cellular-chains-compute-homology-with-local-coefficients]], [[def-homology-and-cohomology-with-local-coefficients]], [[def-relative-singular-homology]]).

[F6] In the interior the trajectory differentials of the two ends square to zero, so the relative Morse groups with those differentials are chain complexes; the only difference from the closed case is the restriction of the moduli spaces to trajectories between critical points, which is legitimate by [F2] ([[def-mod-two-morse-chain-group]], [[def-mod-two-morse-differential]], [[thm-mod-two-morse-differential-squares-to-zero]], [[def-signed-morse-differential-over-the-integers]], [[thm-integral-morse-differential-squares-to-zero]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the critical points are interior and finite, so the relative chain groups of part 2 are free modules of finite rank on the interior critical points. By [F2] every trajectory joining two critical points stays in the compact region between the endpoint values and avoids the boundary and the smaller collars of [F2]; hence the trajectory moduli spaces that define the differentials are exactly the interior moduli spaces, and the sums are finite by finiteness of the critical set and the compactness of the index-one moduli spaces. [F1, F2, given]

2.1 By [F6] the trajectory differentials restricted to the interior moduli spaces square to zero, so the relative Morse groups of part 2 form chain complexes over both coefficient rings; this proves part 2 and the convention for $HM_*(W,M_0;\Lambda)$. [F6, step 1.1]

3.1 By [F3] the compactified unstable manifolds of the interior critical points are the cells of a relative CW pair, and the coefficient comparison identifies its cellular boundary coefficients with the trajectory counts up to the index-dependent basis normalization; hence the relative Morse complex is chain isomorphic to the cellular complex of the relative handle decomposition, which is the first assertion of part 3. [F3, step 2.1]

4.1 By [F4] the handle decomposition attached at the critical points has cores the unstable disks and its filtration is the relative CW filtration; combining with step 3.1 gives the chain isomorphism between the relative Morse complex and the relative handle complex, in particular an isomorphism $HM_*(W,M_0;\Lambda)\cong H_*^{\mathrm{cell}}(W,M_0;\Lambda)$. [F3, F4, step 3.1]

5.1 By [F5] the cellular chains with the constant local system are the ordinary relative chains and the cellular comparison identifies $H_*^{\mathrm{cell}}(W,M_0;\Lambda)$ with the relative singular homology $H_*(W,M_0;\Lambda)$; composing with step 4.1 gives the displayed chain of isomorphisms $HM_*(W,M_0;\Lambda)\cong H_*^{\mathrm{cell}}(W,M_0;\Lambda)\cong H_*(W,M_0;\Lambda)$, which completes part 3. [F5, step 4.1] ∎
