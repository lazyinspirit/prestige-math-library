---
id: thm-gts-logarithmic-bogomolovtiantodorov-theorem
kind: theorem
title: Logarithmic Bogomolov–Tian–Todorov theorem
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
deps:
- def-axiom-of-choice
- def-gts-fs-log-schemes-and-toric-monoids
- def-gts-log-cy-pair-toric-degeneration-and-scattering-data
- def-gts-log-smooth-saturated-morphism-and-log-canonical-line
- def-gts-log-deformation-functor-over-toric-artin-base
- lem-gts-curved-thom-whitney-control-of-log-deformations
- lem-gts-proper-log-hodge-and-pregluing-total-class-lifting
- lem-gts-curved-bv-all-class-artin-lifting
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-fs-log-schemes-and-toric-monoids: mathematical-premise
  def-gts-log-cy-pair-toric-degeneration-and-scattering-data: mathematical-premise
  def-gts-log-smooth-saturated-morphism-and-log-canonical-line: mathematical-premise
  def-gts-log-deformation-functor-over-toric-artin-base: mathematical-premise
  lem-gts-curved-thom-whitney-control-of-log-deformations: mathematical-premise
  lem-gts-proper-log-hodge-and-pregluing-total-class-lifting: mathematical-premise
  lem-gts-curved-bv-all-class-artin-lifting: mathematical-premise
axiom_use: "AC supplies the linear splittings and all-class Artin lifting used by the local geometric and algebraic suppliers; Step 3.1 uses the resulting theorem under that assumption."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Simon Felten and Andrea Petracci, The Logarithmic Bogomolov–Tian–Todorov
      Theorem
    url: https://arxiv.org/pdf/2010.13656v3
    locator: Theorem 1.1 and its source proof in §3.4
  - title: Simon Felten, Global logarithmic deformation theory
    url: https://arxiv.org/pdf/2310.07949v3
    locator: Sections 2.3–2.4, chapters 5, 9–10; the three attached lemmas reconstruct
      the required local arguments.
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
---

## Statement

Assume AC. Let $k$ be a characteristic-zero field, $Q$ a sharp toric monoid, and $S_0=\operatorname{Spec}(Q\to k)$ the log point. Let $f_0:X_0\to S_0$ be a proper log-smooth saturated morphism of relative dimension $d$ whose relative log-canonical line $\omega_{X_0/S_0}=\bigwedge^d\Omega^1_{X_0/S_0,\log}$ is trivial. Then the log-smooth deformation functor
$$\mathrm{LD}_{X_0/S_0}:\mathbf{Art}_{k\llbracket Q\rrbracket}\longrightarrow\mathbf{Set}$$
is smooth: every deformation over a local Artinian $k\llbracket Q\rrbracket$-algebra lifts across every surjective morphism in that category. In the SNC pair instance, $\omega_{X_0/S_0}=K_X(D)$; this does not assert $K_X\cong\mathcal O_X$.

## Facts & Assumptions

**Given:** The field, sharp toric monoid, proper saturated log-smooth morphism of pure log dimension, and trivial relative log-canonical line in the Statement.

[F1] [[def-gts-fs-log-schemes-and-toric-monoids]], [[def-gts-log-smooth-saturated-morphism-and-log-canonical-line]] and [[def-gts-log-deformation-functor-over-toric-artin-base]] fix the actual étale log structures, log differentials, saturated chart maps and all-Artin deformation functor.

[F2] [[lem-gts-curved-thom-whitney-control-of-log-deformations]] constructs the bounded flat curved BV calculus, its volume and fixed arbitrary base changes, and naturally identifies its classical MC classes with ALL marked log-smooth deformations. Its absolute extension is constructed before any global deformation exists.

[F3] [[lem-gts-proper-log-hodge-and-pregluing-total-class-lifting]] proves central log Hodge degeneration, finite-dimensional Hodge cohomology, and corrected-total cohomology surjectivity to the central fibre for EVERY Artin base of that very construction. Properness suffices; projectivity is not assumed.

[F4] [[lem-gts-curved-bv-all-class-artin-lifting]] lifts every GIVEN classical MC element across every Artin surjection from the precise bounded flat volume/Cartan/BV, central finite E1 and pregluing total-class hypotheses in F2–F3. In particular it proves smoothness on all classes, rather than existence of one compatible smoothing tower.

[F5] [[def-gts-log-cy-pair-toric-degeneration-and-scattering-data]] identifies the log-canonical line of an SNC pair with $K_X(D)$. AC is inherited through the explicit geometric and algebraic suppliers.

## Proof

**Given:** F1–F5, with the full arbitrary characteristic-zero field and sharp toric monoid of the Statement.

1.1 Treat log dimension zero separately. Locally the characteristic map of a saturated log-étale morphism is Kummer of equal rank. Saturation forces its index to be one: otherwise adjoining a missing lattice root in a saturated base pushout contradicts the defining saturation property. Thus its sharp characteristic map is an isomorphism and the morphism is strict étale. A strict étale morphism has a unique nilpotent lift locally by lifting an étale presentation and its invertible Jacobian; uniqueness on intersections glues these lifts and their central identifications. The log structure is the strict pullback of the given base log structure. Therefore every given deformation lifts across every Artin surjection in this dimension. This is the zero-dimensional clause of the chart calculation in F2 and does not use a positive-dimensional BV assertion. [given, F1, F2, construct]

1.2 Suppose $d\geq1$. Apply F2 with the specified central log volume. This produces $G_A^{p,q}$ and its form calculus for every $A$, uniformly bounded in both degrees, flat over $A$ and compatible with arbitrary Artin base maps. It has curvature $\ell$, predifferential $\bar\partial$, BV operator $\Delta$ and volume correction $y$, with exactly the identities in F4. The construction uses strict-étale chart descent inside affine opens and a finite Zariski affine TW cover, so it applies to the fs log structures in F1 without a global-chart assumption. Its central columns compute precisely the coherent log form cohomology. [given, F1, F2, construct]

2.1 The first conclusion of F3 supplies finite central Hodge groups and central E1 degeneration. Its second conclusion applies to the absolute extension, nilpotent contraction gauges and fixed base changes supplied by F2; hence the corrected form total complex surjects in cohomology onto its central fibre for every Artin $A$. The volume isomorphism $\kappa$ identifies that complex with $(G_A,\bar\partial+\Delta+(\ell+y)\wedge)$ up to the fixed degree shift $d$. Thus the corrected BV complex has the same cohomology-surjectivity property. This establishes every hypothesis of F4 BEFORE choosing any MC solution or global deformation. It uses neither an existing-family degeneration theorem as a replacement nor a central E1 assertion alone. [F2, F3, F4, step 1.2, algebra]

3.1 Let $B\to A$ be any surjection and let $X_A$ be ANY given deformation in the Statement. Under the natural bijection of F2 choose a classical MC representative $\phi_A\in\mathfrak m_A G_A^{-1,1}$ of its marked isomorphism class. F4, with the hypotheses verified above, supplies $\phi_B$ reducing to precisely $\phi_A$. Its geometric class under F2 is a log-smooth deformation $X_B$, and naturality of that bijection on the actual map $B\to A$ identifies its reduction with the original marked class of $X_A$. No preferred class, quotient of the base category, or projective subfamily has been substituted. [given, F1, F2, F4, step 2.1, construct]

4.1 The preceding argument applies to every surjection and every given class, so the functor is smooth in the exact sense of F1. For an SNC pair the log-volume hypothesis is $K_X(D)\cong\mathcal O_X$ by F5; none of the construction replaces it by $K_X\cong\mathcal O_X$. Both conclusions are precisely the original Statement. [F1, F5, step 1.1, step 3.1, algebra] ∎
