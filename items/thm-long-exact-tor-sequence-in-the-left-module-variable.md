---
id: thm-long-exact-tor-sequence-in-the-left-module-variable
title: "The long exact Tor sequence in the left-module variable"
kind: theorem
status: published
origin: pipeline
deps: ["def-balanced-tor-bifunctor", "thm-horseshoe-lemma-for-projective-resolutions", "thm-long-exact-sequence-in-homology", "def-dependent-choice", "lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts", "thm-naturality-of-the-homology-connecting-morphism", "prop-each-tor-construction-is-covariant-in-both-variables", "prop-tor-zero-is-the-tensor-product-in-either-construction"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-choice-contract-and-interface-repair
    delegated_by: owner
---

## Statement

Assume the Axiom of Dependent Choice, and supply projective resolutions of
the left modules under consideration.
For $0\to M^\prime\to M\to M^{\prime\prime}\to0$ of left $R$-modules and a right module $N$, there is the natural long exact sequence $\cdots\to\operatorname{Tor}_i(N,M^\prime)\to\operatorname{Tor}_i(N,M)\to\operatorname{Tor}_i(N,M^{\prime\prime})\to\operatorname{Tor}_{i-1}(N,M^\prime)\to\cdots$.
It ends in $N\otimes_RM'\to N\otimes_RM\to N\otimes_RM''\to0$ and
is natural for morphisms of the short exact sequence and of $N$.

## Proof

**Given:** the stated short exact sequence, a right module $N$, and supplied
projective resolutions of its three left modules, and
[[def-dependent-choice]].

1.1 By the DC-qualified [[thm-horseshoe-lemma-for-projective-resolutions]], choose a projective horseshoe resolution of the middle module that fits with resolutions of the outer modules into a degreewise split short exact sequence. DC supplies the compatible choices through its successive degrees. Tensoring with $N$ preserves each splitting: tensor the inclusion, projection and their two section/retraction maps, whose splitting identities persist by additivity and composition. Hence the tensored sequence of complexes is short exact over an arbitrary ring. [given]

2.1 Apply [[thm-long-exact-sequence-in-homology]] to the complexes in step 1.1. Their homology groups give the Tor presentations of [[def-balanced-tor-bifunctor]]. The canonical degree-zero identifications of [[prop-tor-zero-is-the-tensor-product-in-either-construction]] give the stated tensor tail. [step 1.1, algebra]

3.1 For a morphism of short exact sequences, choose comparison maps on the end resolutions under DC as in [[prop-each-tor-construction-is-covariant-in-both-variables]]. The compatible-middle-map clause of [[lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts]] extends them to a commuting horseshoe ladder; that clause uses projectivity and DC, not a property of a particular derived functor. Tensor the ladder with $N$ and apply [[thm-naturality-of-the-homology-connecting-morphism]]. Applying the same argument to identity module maps compares different horseshoes. The covariance proposition makes homology maps independent of comparison lifts, so the resulting Tor connecting maps are independent and natural. A map of right modules induces a tensor ladder directly and the same homology naturality applies. This proves the asserted natural exact sequence without assuming left exactness of tensoring. [step 1.1, step 2.1, algebra] ∎

## Remarks

For a supplied degreewise split horseshoe sequence and supplied compatible
comparison ladders, tensoring and the homology exact-sequence calculations
are choice-free. DC is used to construct the horseshoe and comparison data,
not claimed necessary for the exactness of an already supplied complex.
