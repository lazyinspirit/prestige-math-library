---
id: thm-gts-categorical-mirror-equivalence-for-elliptic-curves
kind: theorem
title: Categorical mirror equivalence for elliptic curves
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-hms-landau-ginzburg-categories
dependency_level: 17
axiom_strength: "ZF + full AC; inherited from the actual elliptic analytic and categorical comparison suppliers."
deps:
- lem-eventual-global-generation-coherent-twists
- def-axiom-of-choice
- def-gts-specified-mathematical-mirror-datum
- def-gts-small-dg-categories-perfect-modules-and-morita-deformation
- def-derived-category-of-an-abelian-category
- lem-gts-fully-faithful-split-generator-implies-equivalence
- lem-gts-elliptic-theta-and-all-arity-transversal-comparison
- lem-gts-elliptic-hamiltonian-copy-derived-completion
dependency_roles:
  lem-eventual-global-generation-coherent-twists: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-gts-specified-mathematical-mirror-datum: mathematical-premise
  def-gts-small-dg-categories-perfect-modules-and-morita-deformation: mathematical-premise
  def-derived-category-of-an-abelian-category: mathematical-premise
  lem-gts-fully-faithful-split-generator-implies-equivalence: mathematical-premise
  lem-gts-elliptic-theta-and-all-arity-transversal-comparison: mathematical-premise
  lem-gts-elliptic-hamiltonian-copy-derived-completion: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: 'Alexander Polishchuk and Eric Zaslow, Categorical Mirror Symmetry: The
      Elliptic Curve'
    url: https://arxiv.org/pdf/math/9801119v3
    locator: "Main Theorem and complete §5 printed288–294, with mirror parameter rho=tau in §1/§4 and graded local-system conventions in §3. The source equivalence is Db(E_q) with F0 of its chosen Fukaya category; the declared local all-arity and Hamiltonian-copy suppliers establish the stated split/derived enhancement scope. Entire23-page v3 PDF read."
  - title: Denis Auroux, Mirror Symmetry, Lecture 1
    url: https://people.math.harvard.edu/~auroux/18.969-S09/mirrorsymm-lect1.pdf
    locator: complete lecture notes, elliptic-curve HMS example and mirror-parameter
      conventions; background only
  - title: Denis Auroux, Mirror Symmetry, Lecture 18
    url: https://ocw.mit.edu/courses/18-969-topics-in-geometry-mirror-symmetry-spring-2009/61111f696db97ee7a1bc449ae59529c4_MIT18_969s09_lec18.pdf
    locator: complete lecture notes, derived/split-closed Fukaya-category conventions;
      background only
  - title: Polishchuk, A-infinity structures on an elliptic curve
    url: "https://arxiv.org/pdf/math/0001048v2"
    locator: "Complete §§2–3 printed7–18: Definition2.1, Theorem2.2/Lemma2.3 arity-weight induction including the exceptional weight-two case, Theorem3.1 unipotent extension, §3.3 isogeny descent and §3.4 fundamental Massey products. This is transversal comparison; the separate local Hamiltonian-copy proof supplies nontransversal/derived completion. The source omits Theorem3.1 proof by analogy; the present matrix/Artin construction remains local. §1.5 also read."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Statement

Assume Full AC in the ambient set universe for the chosen category presentations. For the specified Polishchuk–Zaslow mirror pair, let $E_q$ be the complex elliptic curve with $q=e^{2\pi i\tau}$, $\operatorname{Im}\tau>0$, and let the mirror symplectic torus have the compatible complexified Kähler parameter $\rho=\tau$ in the source convention. With the source’s coefficient field, gradings, local systems, and split-closed category conventions, there is an equivalence between $D^b\operatorname{Coh}(E_q)$ and the corresponding derived Fukaya category; the object correspondence includes graded Lagrangian lines with local systems and the torsion-sheaf case. This is the one-dimensional source case, not a general HMS theorem.

## Facts & Assumptions

**Given:** Full AC and the exact Polishchuk–Zaslow mirror datum and source coefficient, grading, local-system and split-completion conventions in the Statement.

[F1] [[def-gts-specified-mathematical-mirror-datum]] and [[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]] fix the specified spaces, parameter and dg/perfect-module models; [[def-derived-category-of-an-abelian-category]] fixes the bounded-derived convention.

[F2] [[lem-gts-elliptic-theta-and-all-arity-transversal-comparison]] proves the coherent classification, theta and nilpotent Hom/product comparison, full transversal all-arity functor, isogeny descent and the vertical torsion-jet correspondence.

[F3] [[lem-gts-elliptic-hamiltonian-copy-derived-completion]] constructs actual complex-coefficient Hamiltonian-copy operations, generic evaluation units and directed-resolution localization, and extends that functor to full nontransversal, twisted, split and dg perfect-module models.

[F4] [[lem-gts-fully-faithful-split-generator-implies-equivalence]] gives the final fully faithful/thick-generation implication; its hypotheses are supplied here, not assumed under an unresolved source theorem.

[F5] [[lem-eventual-global-generation-coherent-twists]] applies to the smooth projective curve $E_q$ over the Noetherian field $\mathbb C$, an ample line bundle and any coherent sheaf. With full AC it makes a sufficiently positive twist globally generated; finite generation supplies the vector-bundle surjection used below.

[A1] [[def-axiom-of-choice]] is the full Axiom of Choice, assumed as in the actual suppliers [F2] and [F3]. It supplies their cohomological and analytic constructions, including the complements and auxiliary choices used in the comparison and completion applied in steps 1.1–3.1.

## Proof

**Proof technique:** direct.

1.1 Under Full AC [A1], use the exact datum [F1]. The explicit Fourier-kernel/classification and theta constructions [F2] identify all coherent generators, rational graded lines and source local systems, including every nilpotent Jordan block and torsion jet. The parameter remains $\rho=\tau$; all area sums used by this functor are literally convergent at $q=e^{2\pi i\tau}$. [A1, given, F1, F2, construct]

2.1 The all-arity transversal functor of [F2] is extended by the actual fixed-copy and generic-resolution construction [F3]. Its full Hom comparison follows from forward-copy localization and finite triangular filtrations; its cone/evaluation units are proved in the geometric model, including the vertical case by the object-only Fourier rotation. The explicit bar module construction extends it to twisted objects and homotopy-idempotent splittings and gives the specified dg perfect-module enhancement. Thus this is an exact fully faithful functor on the full split-complete categories, not an equivalence transported from a binary category. [A1, F2, F3, step 1.1, construct]

3.1 **The coherent derived/perfect bridge.** Here a perfect complex on the curve means a complex locally quasi-isomorphic to a bounded complex of finite-rank locally free sheaves. Let $F$ be any coherent sheaf. Choose an ample line bundle $L$ from a projective embedding of $E_q$. By [F5], $F\otimes L^m$ is globally generated for large $m$. Quasi-compactness selects finitely many generating global sections, giving a surjection $V=(L^{-m})^{\oplus r}\to F$. Its coherent kernel $K$ is locally free. Indeed each local ring of the smooth curve at a closed point is a one-dimensional regular local domain with maximal ideal generated by a local parameter $t$. A nonzero regular germ has finite order in the analytic coordinate at that point, so repeated division by $t$ in the maximal ideal stops at a unit; hence this ring is a discrete valuation ring. Every finitely generated submodule of a finite free module over it is free, as follows by selecting a component of least valuation, using it to eliminate that component, and inducting on the free rank. Applied to $K_x\subset V_x$ this proves freeness at each closed point, and a finite presentation extends a stalk basis to a neighborhood. At the generic point the local ring is a field. Thus $[K\to V]$, in degrees $-1,0$, is a finite vector-bundle resolution of $F$, including torsion sheaves. Every bounded coherent complex is built by its finite canonical truncation triangles from its cohomology sheaves $H^i[-i]$; those triangles follow from the kernels, images and quotients of the complex differential. Therefore every object of $D^b\operatorname{Coh}(E_q)$ is perfect. Conversely a perfect complex on this quasi-compact Noetherian curve has bounded coherent cohomology. The Hom comparison uses these vector-bundle resolutions and the same affine-Cech/Dolbeault computations of [F2], so it is the actual derived Hom, not merely an agreement of object classes. In particular the finite twisted Yoneda construction of [F3], applied to the full coherent sheaf models, realizes the bounded coherent category: the truncation triangles give essential surjectivity, and the matched derived Hom complexes give full faithfulness. Its split completion adds no unbounded objects, since a retract has direct-summand bounded coherent cohomology; the same local finite resolutions and finite truncations place it in the bounded coherent category. This proves the required identification with the coherent perfect-module target of [F3]. The classification in [F2] covers every coherent sheaf, and the source line/local-system and torsion objects cover its represented objects before formal twisted/split closure. Hence the functor's image thickly generates. No hereditary splitting assertion is needed. Use the small dg presentations specified in [F1] and the actual twisted/split extension of [F3]: their object lists, finite morphism matrices and idempotents form sets in the chosen ambient set universe. Transport along the supplied enhancement equivalences, rather than choosing representatives from a proper class. Apply [F4] to these set presentations with [A1], or use the explicitly constructed bar tensor/Hom inverse in [F3], to obtain the equivalence in the unchanged Statement. No general HMS, arbitrary dg-enhancement uniqueness, formal-series numerical specialization or unrelated unobstructed Fukaya construction is assumed. [A1, F2, F3, F4, F5, step 2.1] ∎
