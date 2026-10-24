---
id: thm-long-exact-tor-sequence-in-the-right-module-variable
title: "The long exact Tor sequence in the right-module variable"
kind: theorem
status: published
origin: pipeline
deps: ["def-balanced-tor-bifunctor", "prop-each-tor-construction-is-covariant-in-both-variables", "prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions", "lem-projective-modules-are-flat-over-an-arbitrary-ring", "thm-long-exact-sequence-in-homology", "thm-naturality-of-the-homology-connecting-morphism", "prop-tor-zero-is-the-tensor-product-in-either-construction", "def-dependent-choice"]
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
    scope: owner-authorized-local-choice-contract-repair
    delegated_by: owner
---

## Statement

Assume Dependent Choice (DC). For a short exact sequence
$0\to N'\to N\to N''\to0$ of right $R$-modules and a left module $M$
with a supplied projective resolution, there is a natural exact sequence
$$\cdots\to\operatorname{Tor}_i^R(N',M)\to\operatorname{Tor}_i^R(N,M)\to\operatorname{Tor}_i^R(N'',M)\xrightarrow{\partial_i}\operatorname{Tor}_{i-1}^R(N',M)\to\cdots.$$
Its degree-zero tail is
$$\operatorname{Tor}_1^R(N'',M)\xrightarrow{\partial_1}N'\otimes_R M\to N\otimes_R M\to N''\otimes_R M\to0.$$
The sequence is natural in morphisms of short exact sequences and in maps
of left modules equipped with projective resolutions. Tor can be computed
using that left resolution, or using the balanced identification whenever
resolutions on the other side are supplied.

## Proof

**Given:** the displayed short exact sequence, a projective resolution
$P_\bullet\to M$, and [[def-dependent-choice]] for resolution comparisons.

1.1 Each $P_j$ is flat by [[lem-projective-modules-are-flat-over-an-arbitrary-ring]], whose projective-to-flat implication is choice-free and valid over arbitrary rings. Therefore $0\to N'\otimes_RP_\bullet\to N\otimes_RP_\bullet\to N''\otimes_RP_\bullet\to0$ is a degreewise short exact sequence of complexes. No horseshoe resolution or commutative-ring tensor theorem is needed. [given, construct]

2.1 Apply [[thm-long-exact-sequence-in-homology]] to step 1.1. Its homology groups are the left-resolution Tor groups in [[def-balanced-tor-bifunctor]]. The degree-zero identifications of [[prop-tor-zero-is-the-tensor-product-in-either-construction]] give the displayed tensor tail; negative homology is zero because the complexes are nonnegative. [step 1.1, algebra]

3.1 A morphism of right-module short exact sequences gives a morphism of the complexes in step 1.1. Under DC, a map between left modules lifts to a comparison of their supplied resolutions as in [[prop-each-tor-construction-is-covariant-in-both-variables]]. Tensoring this comparison also gives a morphism of the three complexes. In both cases [[thm-naturality-of-the-homology-connecting-morphism]] proves the connecting squares commute. The covariance proposition makes the edge homology maps independent of comparison lifts, so replacing $P$ identifies the whole exact sequence canonically. [step 1.1, step 2.1, algebra]

4.1 The identifications in [[prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions]] transport these connecting maps to any supplied right-resolution presentations of the same Tor groups. Thus the sequence defines the stated balanced natural sequence, with the boundary defined by step 2.1 and transported coherently. [step 2.1, step 3.1, algebra] ∎

## Remarks

With $P_\bullet\to M$ fixed, steps 1.1–2.1 and naturality in the right-module
short exact sequence require no choice axiom. DC is used for comparison
with arbitrary other supplied resolutions and maps of left modules, not
for exactness of the fixed tensor-complex sequence itself.
