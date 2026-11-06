---
id: thm-gts-homological-mirror-symmetry-for-a-quartic-k3
kind: theorem
title: Homological mirror symmetry for a quartic K3
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-hms-landau-ginzburg-categories
dependency_level: 13
deps:
  - def-gts-compact-calabiyau-manifold-conventions
  - def-gts-specified-mathematical-mirror-datum
  - def-gts-small-dg-categories-perfect-modules-and-morita-deformation
  - def-derived-category-of-an-abelian-category
  - lem-gts-fully-faithful-split-generator-implies-equivalence
  - lem-gts-named-fermat-compact-relative-mixed-category
  - lem-gts-named-fermat-graph-algebra-and-fermat-class
  - lem-gts-compact-rational-dehn-twist-evaluation-cone
  - lem-gts-exterior-smash-hochschild-and-equivariant-transfer
  - lem-gts-equivariant-q-adic-one-parameter-comparison
  - lem-gts-named-fermat-coherent-generator-deformation
  - lem-gts-named-fermat-graph-lifts-identify-vanishing-cycles
  - lem-gts-named-fermat-compact-monodromy-generation
  - def-axiom-of-choice
dependency_roles:
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-gts-specified-mathematical-mirror-datum: mathematical-premise
  def-gts-small-dg-categories-perfect-modules-and-morita-deformation: mathematical-premise
  def-derived-category-of-an-abelian-category: mathematical-premise
  lem-gts-fully-faithful-split-generator-implies-equivalence: mathematical-premise
  lem-gts-named-fermat-compact-relative-mixed-category: mathematical-premise
  lem-gts-named-fermat-graph-algebra-and-fermat-class: mathematical-premise
  lem-gts-compact-rational-dehn-twist-evaluation-cone: mathematical-premise
  lem-gts-exterior-smash-hochschild-and-equivariant-transfer: mathematical-premise
  lem-gts-equivariant-q-adic-one-parameter-comparison: mathematical-premise
  lem-gts-named-fermat-coherent-generator-deformation: mathematical-premise
  lem-gts-named-fermat-graph-lifts-identify-vanishing-cycles: mathematical-premise
  lem-gts-named-fermat-compact-monodromy-generation: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Paul Seidel, Homological Mirror Symmetry for the Quartic Surface
      url: https://arxiv.org/pdf/math/0310414v4
      locator: "Theorem 1.3 and its coefficient/mirror-family conventions, printed pp. 1–2 (PDF 5–6); complete §11, printed pp. 87–112 (PDF 91–116), including Propositions 11.1 and 11.6, Lemmas 11.2–11.5, Corollary 11.7, equations (11.19)–(11.27), Figures 6–19 and Tables 1–4; coherent-side comparison §10d, Lemmas 10.9–10.14 and Corollary 10.15. All this source text was read and Figures 6–19 were viewed. Source computer verification of the twisted-complex cohomology and fourth Massey product at printed p. 96 was read, not independently rerun; the polygon tables were read, not independently recounted. The formal parameter is not identified with the Picard–Fuchs mirror map."
    - title: Denis Auroux, Mirror Symmetry, Lecture 18
      url: https://ocw.mit.edu/courses/18-969-topics-in-geometry-mirror-symmetry-spring-2009/61111f696db97ee7a1bc449ae59529c4_MIT18_969s09_lec18.pdf
      locator: complete lecture notes, derived and split-closed Fukaya-category conventions; background only
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

Assume full AC in the ambient set universe for the chosen category presentations. Let $X_0\subset\mathbb{CP}^3$ be a smooth quartic K3 with Seidel’s standard symplectic form, and let $Z_q^*$ be the minimal resolution of the specified $\Gamma_{16}$ quotient mirror family over $\Lambda_{\mathbb Q}$. For Seidel’s continuous formal parameter automorphism $\psi$, there is an equivalence

$$D^\pi\mathcal F(X_0)\simeq \widehat\psi^{\,*}D^b\operatorname{Coh}(Z_q^*).$$

The source does not identify $\psi$ with the standard Picard–Fuchs mirror map. The statement is restricted to this quartic and mirror family.

## Statement references

[[def-gts-compact-calabiyau-manifold-conventions]]

[[def-gts-specified-mathematical-mirror-datum]]

[[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]]

[[def-derived-category-of-an-abelian-category]]

[[lem-gts-fully-faithful-split-generator-implies-equivalence]]

[[lem-gts-named-fermat-compact-relative-mixed-category]]

[[lem-gts-named-fermat-graph-algebra-and-fermat-class]]

[[lem-gts-compact-rational-dehn-twist-evaluation-cone]]

[[lem-gts-exterior-smash-hochschild-and-equivariant-transfer]]

[[lem-gts-equivariant-q-adic-one-parameter-comparison]]

[[lem-gts-named-fermat-coherent-generator-deformation]]

[[lem-gts-named-fermat-graph-lifts-identify-vanishing-cycles]]

[[lem-gts-named-fermat-compact-monodromy-generation]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** Put $N=4$ and $n=2$. The exact smooth hypersurface, source-scaled symplectic form, quotient/resolution mirror, rational-brane action-line convention and coefficient field in the Statement. Work in ZF+AC; the Axiom of Choice is used for the algebraic/module splittings and the declared category constructions, not as a substitute for any geometric argument.

[F1] The compact Calabi–Yau, specified mirror datum, actual dg/perfect-module and derived-category conventions are [[def-gts-compact-calabiyau-manifold-conventions]], [[def-gts-specified-mathematical-mirror-datum]], [[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]] and [[def-derived-category-of-an-abelian-category]]. The mirror datum by itself makes no equivalence claim.

[F2] [[lem-gts-named-fermat-compact-relative-mixed-category]] constructs the actual source-specific finite compact-relative category, its coherent virtual polygon and section data, strict finite lifted symmetry, units, divisor weights and finite coefficients. A bare general Fukaya data interface is not used to supply these constructions.

[F3] [[lem-gts-named-fermat-graph-algebra-and-fermat-class]] computes its actual graph-sphere exterior/smash algebra, central primary product and nonzero Fermat first-order class, including the mixed-category comparison, contact-power cobordism and actual compact Calabi–Yau grading. Its finite Hom groups are free over the formal coefficient ring, with no degree-one transferred differential.

[F4] [[lem-gts-named-fermat-graph-lifts-identify-vanishing-cycles]] proves the categorical identification of the graph lifts with the actual named vanishing cycles. It includes the complete finite compact-probe bar augmentation, true dual tests, chosen-character matching cone, Kronecker uniqueness, split-cover/slit comparison and q-adic lifting; it does not infer identification from their counts or characters.

[F5] [[lem-gts-compact-rational-dehn-twist-evaluation-cone]] gives the actual compact relative and absolute-rational evaluation-cone triangle, including positive-energy cap corrections and rational action-coset lines for probes meeting the divisor. [[lem-gts-named-fermat-compact-monodromy-generation]] constructs the specified global graded monodromy and its invariant exceptional neighborhoods, proves avoidance in the named dimensions, and applies that actual triangle to obtain full compact split-generation.

[F6] [[lem-gts-named-fermat-coherent-generator-deformation]] constructs the actual finite generating coherent collection, its dg/Čech model, free minimal algebra and nonzero Fermat deformation class. For the quartic it verifies the six algebraic A3 points and minimal crepant resolution and applies the actual characteristic-zero surface-derived-McKay supplier; for the quintic it retains the quotient stack in the Statement.

[F7] [[lem-gts-exterior-smash-hochschild-and-equivariant-transfer]] computes the actual even-coordinate invariant truncated Hochschild deformation line, proves the central all-arity identification rather than only binary/primary agreement, and constructs the strict finite-group minimal transfer. [[lem-gts-equivariant-q-adic-one-parameter-comparison]] then constructs the full q-adic gauge and invertible parameter automorphism from the two actual nonzero first-order classes, with its chosen Puiseux-field lift.

[F8] [[lem-gts-fully-faithful-split-generator-implies-equivalence]] supplies the final exact idempotent-complete generation criterion. [[def-axiom-of-choice]] supplies the declared ambient choice convention and the specific module/sheaf splittings used by the foregoing suppliers.

## Proof

**Given:** The complete source hypotheses in the Statement and [F1]–[F8]. No source-specific category, comparison, or generation claim is left as an additional assumption.

1.1 Use the Fermat relative pair with the source symplectic scaling. The finite category and all its actual higher operations exist by [F2]. By [F3] its finite graph collection has the computed exterior/smash cohomology, central primary product and nonzero Fermat first-order class. The compact grading is the actual branched/object phase grading; no fixed auxiliary integer-weight grading is carried upstairs unchanged. [F1, F2, F3, given, construct]

2.1 The full compact graph collection is split-generating: [F4] identifies it, in the actual q and coefficient categories, with the named vanishing collection, while [F5] constructs the global graded monodromy, uniformly negative iterates off invariant neighborhoods and the dimension-specific Hamiltonian avoidance. Its compact rational evaluation triangles and finite cone argument apply to all admissible source rational probes, including those meeting the divisor. Thus this is full compact generation, not only exact affine or central-fibre generation. [F4, F5, step 1.1, algebra]

2.2 Let $A_{q}$ be the total finite geometric endomorphism algebra over $R=C⟦q⟧$ and let $S_{q}$ be the actual coherent Čech endomorphism model of [F6]. The finite-free replacements and actual strict finite symmetry admit the equivariant contractions of [F7]. The central primitive-Hom computation of [F3], used in [F2], has no adjacent cohomological degrees in a fixed summand; since q has degree zero, its transferred differential is zero. On the coherent side [F6] proves that multiplication by the hypersurface equation induces the zero map on ambient cohomology, so its explicit Koszul contraction has literally zero differential. These are the actual minimality inputs of the transfer in [F7]; free underlying chain groups alone would not suffice. All higher operations and their comparison maps are retained by the explicit tree identities and q-adic completion. [F2, F3, F6, F7, step 1.1, construct]

3.1 Their common binary algebra and primary class identify the TWO full central A-infinity structures: the binary Koszul degree-two group has no arity above N, so the first remaining arity-d difference is $[\mu2,h_{d-1}]$ and is successively removed without changing smaller arities. This is the all-arity central normalization in [F7]. Both actual formal deformations have nonzero even-coordinate invariant Fermat class. Apply the constructive one-parameter comparison with the coherent deformation as reference to obtain a strictly unital object-preserving A-infinity quasi-isomorphism $A_{q}$ equivalent to $\psi^{*}S_{q}$, where $\psi(q)=c1$ q+... and c1 is nonzero. The recursive formal inverse makes psi an automorphism, not merely an endomorphism. [F3, F6, F7, step 2.2, algebra]

4.1 The category presentations are taken in a fixed ambient set universe with AC. The small dg models are those specified in [F1] and constructed for the coherent generator in [F6]; finite words of objects and shifts, finite matrices of morphisms, and their idempotents form sets, so their finite twisted and split completions are set presentations. We use the supplied enhancement equivalences when identifying these with the named geometric and coherent categories. This is an ambient presentation convention and retains every brane and coherent object covered by those supplied equivalences; it assumes no global class choice. Extend along the actual rational action lines to the source field $Lambda_{Q}$ and the chosen lift of psi. The finite morphism quasi-isomorphisms extend over the field; their tensor, bar and perfect-module constructions commute with this specified scalar extension by [F6, F7]. They give an exact fully faithful functor between the split-complete finite derived categories, carrying the geometric generator to the coherent one. This compares all higher products, rather than substituting a binary cohomology-algebra isomorphism. [F1, F6, F7, step 3.1, construct]

5.1 The coherent collection thickly generates the exact mirror category by [F6], and the geometric collection thickly generates the full source compact category by step 2.1. The generator criterion [F8] therefore gives the desired equivalence for the Fermat model after the specified formal pullback. The quartic uses the actual minimal-resolution McKay bridge, and the quintic uses the source quotient-stack category; neither is replaced by a different target. [F4, F5, F6, F8, step 2.1, step 4.1, algebra]

6.1 Finally connect the Fermat polynomial to the given smooth degree-N hypersurface in the complement of the discriminant. The smooth proper projective family has complete symplectic transport. Its residue-phase homotopy, prequantum connection and transported brane data retain the source symplectic scaling, gradings, spin and rational action-line convention, as constructed in [F2, F5]. Transport the resulting compact equivalence to the given X. The coefficient automorphism remains the constructed unknown psi; no Picard–Fuchs identification or broader Calabi–Yau assertion is used. This proves precisely the original Statement. [F1, F2, F5, step 5.1, algebra] ∎
