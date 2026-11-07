---
id: lem-smooth-finite-line-curves-over-finite-fields-have-smooth-completions
kind: lemma
title: Smooth finite-line curves over finite fields have smooth completions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- thm-integral-closure-finite-finite-type-domain-over-field
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Curves and function fields
    url: https://stacks.math.columbia.edu/tag/0BXX
    locator: Normal proper curve models; the finite-line construction is given below.
dependency_level: 0
proof_strategy: direct
axiom_use: AC is assumed by the normal curve model supplier.
---

## Statement

Assume AC. Let k be a finite field, let U be a nonempty open subscheme of the affine line over k, and let Y be a smooth k-scheme of pure dimension one with a finite morphism Y→U. Then Y is a dense open subscheme of a smooth projective k-curve X, and X\Y is a finite set of closed points. Disconnected and empty Y are included. This is a compactification over the single field k, not an integral compactification over a base of mixed characteristic.

## Facts & Assumptions

**Given:** AC, the finite field k, nonempty U⊂A¹_k, and the smooth pure-dimensional curve Y finite over U.

[F1] The integral closure of a finite-type domain over a field in its fraction field is finite. [[thm-integral-closure-finite-finite-type-domain-over-field]]

[F2] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** normalize the projective line in each function field.

1.1 A smooth one-dimensional k-scheme is regular. Its finitely many connected components are integral: regular local rings are domains, so distinct irreducible components cannot meet, and Noetherian components are open and closed. The finite image of each nonempty component has dimension one and is a closed subset of integral U, hence is all U. Its function field E is therefore a finite extension of k(t), where t is the coordinate of the affine line. [F2, given, algebra]

2.1 For a component with function field E, choose finitely many field generators of E/k(t) and multiply each by a nonzero polynomial so it becomes integral over k[t]. Their k[t]-algebra is finite, has fraction field E, and is of finite type over k. By [F1] its integral closure in E is finite over it, hence finite over k[t]. Repeat with k[t⁻¹] at infinity. Integral closure commutes with localization, so the two finite normal affine schemes glue over the overlap to a normal integral curve Xᵢ finite over `P¹_k` with function field E; it is proper because P¹ is proper. The component Yᵢ is finite over U and normal. On each affine open of U, its coordinate algebra is a finite normal domain in E, hence equals the integral closure of the base coordinate ring in E: it is integral over that ring and contains every element integral over it because it is integrally closed. Thus Yᵢ is exactly the inverse image of U in Xᵢ. The finite disjoint union of the Xᵢ is projective over k because each is finite over projective `P¹_k`. [F1, F2, step 1.1, given, construct, algebra]

3.1 A one-dimensional Noetherian normal local domain is a DVR, hence regular. All residue extensions of the finite perfect field k are separable, so a regular finite-type curve over k is smooth. The Xᵢ are therefore smooth projective k-curves. Their complement to Y is the inverse image of the finite set `P¹_k\U` under a finite morphism and is a finite set of closed points. Taking the disjoint union gives the asserted compactification. The empty case is the empty smooth projective curve. [F1, F2, step 2.1, given, algebra] ∎

## Source and authoring record

This construction supplies compactifications of individual smooth finite-line fibres. It does not construct a proper modular curve over Z[1/N] or compare cohomology across mixed characteristic.
