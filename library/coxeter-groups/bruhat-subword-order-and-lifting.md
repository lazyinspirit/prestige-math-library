---
page: bruhat-subword-order-and-lifting
title: "Bruhat Subword Order and Lifting"
status: draft
items: []
examples: []
---

Bruhat order allows deletion inside a reduced expression rather than only extension at its end. Independence from the chosen expression is the essential construction issue; length alone does not characterize comparability.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-bruhat-order-by-reflection-chains.** Define u≤v by a finite sequence u=u0,...,uk=v with ui+1=ui ti, ti∈T and strictly increasing simple length. Reflexivity allows the empty chain. Define intervals and rank only after proving partial-order and saturated-chain results.

Definition justification: `thm-cg-bruhat-subword-characterization`.

**thm-cg-bruhat-subword-characterization.** Use strong exchange to prove u≤v iff u is the product of a subword of any fixed reduced expression for v, and that the chosen subword may be reduced. Prove both chain-to-subword and subword-to-chain directions by induction; Matsumoto only controls expression changes after this argument, not as a substitute for the increasing-chain direction.

**thm-cg-bruhat-lifting-and-cover-criterion.** If s is a descent of v and an ascent of u≤v, prove us≤v and u≤vs; state also the two same-descent variants with all inequalities. Derive covers iff the lengths differ by one and a reflection deletion gives the lower element, using the chain refinement lemma. Show all intervals finite and graded by simple length.

**thm-cg-bruhat-parabolic-projection-and-quotients.** Prove the minimal-coset projection W→W^I is order-preserving and the quotient inherits the subword criterion and length rank. Determine which conclusions hold for infinite W and which require W_I or W finite; no longest element is presumed for an infinite parabolic.

## Prerequisites and reading

Required earlier pages: [[canonical-roots-signs-and-faithful-reflections]], [[parabolic-subgroups-and-double-coset-geometry]]. The companion [[bruhat-subword-order-and-lifting-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.
