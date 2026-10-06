---
page: parabolic-subgroups-and-double-coset-geometry
title: "Parabolic Subgroups and Double Coset Geometry"
status: draft
items: []
examples: []
---

Coset factorization is the algebraic form of moving to a face of a chamber. Unique minimum representatives, intersections and double cosets need separate arguments; an arbitrary subgroup is not automatically parabolic.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-parabolic-quotient-and-two-sided-minima.** Define W_I, W^I={w:ℓ(ws)>ℓ(w) for s∈I}, ^I W and ^I W^J using fixed left/right conventions. Define general parabolic as a conjugate of a standard one; distinguish reflection subgroups from parabolics.

Definition justification: `thm-cg-parabolic-intersections-and-coset-factorization`.

**thm-cg-parabolic-intersections-and-coset-factorization.** Reuse the HH-11 length-additive unique factorization. Prove W_I∩W_J=W_(I∩J) by deletion of a reduced word with forbidden letters, and Φ_I=Φ∩span{e_s:s∈I} using root signs and parabolic descent. Prove a coset minimum is a minimum below every member in length, not just a locally descent-free word.

**lem-cg-double-coset-intersection-parabolic.** For d∈^I W^J prove W_I∩dW_Jd^-1=W_K, K={s∈I:d^-1sd∈J}, by conjugated positive roots and minimality. Spell out why membership forces a simple root rather than an arbitrary positive linear combination at the required descent step.

**thm-cg-double-coset-unique-minimum-and-normal-form.** Prove each W_IwW_J has a unique d∈^I W^J by alternating length-decreasing descents and strong exchange. With K from the intersection lemma, prove unique w=udv with u∈W_I^K,v∈W_J and ℓ(w)=ℓ(u)+ℓ(d)+ℓ(v). Arbitrary u∈W_I would destroy uniqueness; record the restriction explicitly.

## Prerequisites and reading

Required earlier pages: [[coxeter-presentations-exchange-and-reduced-word-theorems]], [[canonical-roots-signs-and-faithful-reflections]]. The companion [[parabolic-subgroups-and-double-coset-geometry-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.
