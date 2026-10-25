---
id: thm-critical-quiver-coha-associative-under-coherence-axioms
kind: theorem
title: "Critical quiver CoHA is associative and unital, including the standard realization"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-critical-quiver-coha-from-vanishing-cycle-data
  - def-untwisted-quiver-cohomological-hall-algebra
  - def-quiver-potential-and-monodromic-vanishing-cycle-data
  - lem-quiver-potential-trace-is-additive-on-extensions
  - lem-quiver-exact-sequence-correspondence-is-smooth-and-proper
  - def-equivariant-borel-moore-homology-and-correspondence-convolution
  - lem-standard-rational-quiver-vanishing-cycles-realize-critical-correspondences
  - thm-quiver-quotient-stack-borel-moore-operation-package
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

Assume AC. For every finite complex quiver $Q$, every finite potential $W$
and every coherent datum $\mathscr K$ of
[[def-quiver-potential-and-monodromic-vanishing-cycle-data]], the critical
CoHA of [[def-critical-quiver-coha-from-vanishing-cycle-data]] is associative
and unital. In particular its standard rational monodromic vanishing-cycle
instance exists and is associative and unital, for arbitrary critical values,
loops and multiple arrows. For $W=0$ it recovers the ordinary intrinsic
rational quiver CoHA with the same multiplication and grading.

## Facts & Assumptions

**Given:** $Q,W,\mathscr K$ and the critical algebraic direct sum with the subobject-first order.

[F1] [[def-quiver-potential-and-monodromic-vanishing-cycle-data]] specifies primary homological coefficients, the smooth identification $q^*(K_{\mathbf a}\boxtimes K_{\mathbf b})[2r]\simeq K_E$, the proper coefficient morphism $Rp_*K_E\to K_{\mathbf a+\mathbf b}$, their flag/external-product/base-change/monodromy coherence and the dimension-zero identity.

[F2] [[def-critical-quiver-coha-from-vanishing-cycle-data]] defines the product using that datum and the intrinsic index, with shift $-2\chi_Q(\mathbf b,\mathbf a)$ and value $z_1+z_2$.

[F3] [[lem-quiver-potential-trace-is-additive-on-extensions]], [[lem-quiver-exact-sequence-correspondence-is-smooth-and-proper]] and [[thm-quiver-quotient-stack-borel-moore-operation-package]] give trace additivity, smooth/proper block geometry and the two Cartesian three-step-flag comparisons with coherent positive orientations.

[F4] [[lem-standard-rational-quiver-vanishing-cycles-realize-critical-correspondences]] ACTUALLY realizes every clause of [F1] for normalized rational vanishing cycles, including proper coefficient morphisms, the intrinsic shifts, all critical values and the $W=0$ ordinary comparison. It does not presume an isomorphism for closed restriction.

[A1] [[def-axiom-of-choice]] is inherited through [F3]–[F4]; no additional choice is required by the finite flag arguments.

## Proof

**Proof technique:** direct.

1.1 For each pair of dimension/value summands, [F1] and [F3] define the external product, smooth inverse image with its shift, and the proper coefficient pushforward. By [F2] the result has value $z_1+z_2$ and dimension $\mathbf a+\mathbf b$. A finite sum of supported inputs therefore has a finite sum as output. This checks well-definedness on the stated algebraic direct sum. [F1, F2, F3, given, construct]

2.1 The two parenthesizations of a product of three inputs parametrize the same flag $0\subset M_{\mathbf a}\subset M_{\mathbf a+\mathbf b}\subset M_{\mathbf a+\mathbf b+\mathbf c}$. The proper/smooth Cartesian comparisons of [F3] express either iterated operation through this flag stack. Its trace function is $W_{\mathbf a}\boxplus W_{\mathbf b}\boxplus W_{\mathbf c}$ by repeated trace additivity. The two coefficient identifications agree by the associative external-product/flag requirement of [F1], and the two proper coefficient maps agree by composition and Cartesian pasting in [F1]. Thus both parenthesizations induce exactly the same coefficient pull-push map on the common flag, preserving the same monodromy and total value. [F1, F3, step 1.1]

2.2 The zero-subobject and whole-subobject correspondences are identity maps. Their dimension-zero coefficient is $\mathbb Q$, their coefficient morphisms are identities by [F1], and $\chi_Q(0,\mathbf d)=\chi_Q(\mathbf d,0)=0$. The specified class is therefore a two-sided degree-zero unit. [F1, F2, F3, step 1.1, algebra]

3.1 The two degrees agree, since bilinearity gives $\chi_Q(\mathbf b,\mathbf a)+\chi_Q(\mathbf c,\mathbf a+\mathbf b)=\chi_Q(\mathbf c,\mathbf b)+\chi_Q(\mathbf b+\mathbf c,\mathbf a)$. The proper comparisons have degree zero and the smooth orientations in [F3] concatenate with their even real ranks. Hence the equality of step 2.1 is an equality in the same intrinsic graded summand, proving associativity. [F2, F3, step 2.1, algebra]

4.1 Apply the preceding argument to the STANDARD datum supplied by the actual realization [F4]. This proves the asserted nonconditional rational critical CoHA for every stated quiver and potential, retaining all its critical-value and monodromy summands. The $W=0$ identification in [F4] identifies both its coefficient morphisms and smooth orientations with the ordinary intrinsic construction, so it identifies the algebras rather than merely their graded groups. AC is inherited exactly through [A1]. [A1, F4, step 1.1, step 2.1, step 3.1, step 2.2] ∎
