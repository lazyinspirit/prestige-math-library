---
id: thm-critical-quiver-coha-associative-under-coherence-axioms
kind: theorem
title: "Critical quiver CoHA multiplication is associative under its coherence axioms"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-critical-quiver-coha-from-vanishing-cycle-data
  - def-untwisted-quiver-cohomological-hall-algebra
  - def-quiver-potential-and-monodromic-vanishing-cycle-data
  - lem-quiver-potential-trace-is-additive-on-extensions
  - lem-quiver-exact-sequence-correspondence-is-smooth-and-proper
  - def-equivariant-borel-moore-homology-and-correspondence-convolution
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass

sources:
  references:
    - title: "Maxim Kontsevich and Yan Soibelman, Cohomological Hall algebra, exponential Hodge structures and motivic Donaldson-Thomas invariants, §§2.3 and 7.6"
      url: "https://arxiv.org/pdf/1006.2706v2"
    - title: "Ben Davison, The critical CoHA of a quiver with potential, §§2.5–2.7 and 3.2"
      url: "https://arxiv.org/pdf/1311.7172v5"
---

## Statement

Assume AC as inherited from the equivariant Borel–Moore and coefficient
categories. Let $Q,W$ be as above and let $\mathscr V$ be any on-shell monodromic
coefficient datum satisfying all clauses in
[[def-quiver-potential-and-monodromic-vanishing-cycle-data]]. Then the
multiplication of
[[def-critical-quiver-coha-from-vanishing-cycle-data]] is associative and
unital.

## Facts & Assumptions

**Given:** a finite quiver $Q$, a potential $W$, the datum $\mathscr V$, and the critical CoHA definition of [[def-critical-quiver-coha-from-vanishing-cycle-data]].

[F1] [[def-quiver-potential-and-monodromic-vanishing-cycle-data]]: the datum supplies proper pushforward, smooth pullback, external-product (Thom–Sebastiani) identifications, proper/smooth base-change coherence, and the dimension-zero unit coefficient.

[F2] [[lem-quiver-potential-trace-is-additive-on-extensions]]: on the exact-sequence correspondence, $W_{\mathbf a+\mathbf b}=W_{\mathbf a}\boxplus W_{\mathbf b}$, so critical values on the two factors add.

[F3] [[lem-quiver-exact-sequence-correspondence-is-smooth-and-proper]]: the maps $q$ and $p$ have the smooth-pullback and proper-pushforward geometries used in the product.

[A1] [[def-axiom-of-choice]]: AC is inherited through the equivariant Borel–Moore and coefficient-category suppliers; the flag bijections add no choice.

The coefficient datum [F1] supplies the needed coherence for its own operations. The standard critical vanishing-cycle realization is not an assumption of this theorem. The underlying quotient-stack Borel–Moore operations still require the unresolved interface recorded in [[def-untwisted-quiver-cohomological-hall-algebra]].



## Proof

**Proof technique:** direct.

1.1 For any split $\mathbf d=\mathbf a+\mathbf b$, [F2] identifies the potential on the extension correspondence with the sum of the two diagonal potentials. The Thom–Sebastiani map in [F1] therefore identifies the coefficient on that correspondence with the external product of the $\mathbf a$ and $\mathbf b$ coefficients at values $z_1,z_2$, in output value $z_1+z_2$. The proper push and smooth pull in [F1] and [F3] consequently define the product of every pair of homogeneous summands. [F1, F2, F3, given]

1.2 In dimension zero, the supplied coefficient is $\mathbb Q$ with its identity class; the zero-subobject and whole-subobject correspondences are identity maps. Hence this class is a two-sided unit. [F1, F3, given]

2.1 For three dimension vectors, an iterated product in either parenthesization is represented by the same flag of subrepresentations $0\subset M_{\mathbf a}\subset M_{\mathbf a+\mathbf b} \subset M_{\mathbf a+\mathbf b+\mathbf c}$. Additivity in [F2] identifies the potential there with $W_{\mathbf a}\boxplus W_{\mathbf b}\boxplus W_{\mathbf c}$, and the associative external-product identification in [F1] gives the same coefficient in either order. The Cartesian base-change and composition identities in [F1] therefore identify the two induced pull-push maps. [F1, F2, F3, step 1.1]

3.1 The shifts agree because $ -\chi_Q(\mathbf b,\mathbf a) -\chi_Q(\mathbf c,\mathbf a+\mathbf b) =-\chi_Q(\mathbf c,\mathbf b) -\chi_Q(\mathbf b+\mathbf c,\mathbf a), $ by bilinearity of $\chi_Q$. Thus the maps of step 2.1 land in the same graded component. [step 2.1, algebra]

4.1 Steps 2.1 and 3.1 prove associativity in the same graded component, and step 1.2 proves unitality for the conditional construction. No property of a canonical vanishing-cycle realization beyond the explicit hypotheses [F1] is used. AC is inherited through [A1]. [A1, F1, step 2.1, step 3.1, step 1.2] ∎
