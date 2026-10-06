---
page: bruhat-interval-labels-shellings-and-mobius-functions
title: "Bruhat Interval Labels, Shellings, and Möbius Functions"
status: draft
items: []
examples: []
---

A finite interval carries combinatorial topology through its chains. Here shellability is proved as a chain-label property, while Möbius values follow from an explicit recurrence; neither a sphere theorem nor Cohen–Macaulayness is silently imported.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-deletion-chain-labels-and-shelling.** Fix a reduced expression of v. Along each DESCENDING saturated chain from v, strong exchange uniquely deletes a position of the current retained reduced subword; label by that ORIGINAL position. Thus labels depend on the preceding root chain, not just an ambient edge. Define lexicographic shelling by the exact earlier-facet codimension-one intersection criterion and recall the published Möbius function/recurrence. Do not assert that two different retained expressions give the same labels.

Definition justification: `thm-cg-bruhat-deletion-label-shelling`.

**lem-cg-bruhat-increasing-chain-and-local-descent-replacement.** Prove BB2.7.2–4 for each retained top expression: increasing-chain uniqueness follows by comparing the largest deletion positions; unequal largest positions would shorten a claimed cover. Obtain the rank-two diamond by minimizing the later omitted position, with the dual maximizing construction for its decreasing chain. The lex-minimal chain is increasing by overlapping shorter-interval induction. At a descent replace the two-step segment by its rooted increasing chain. Restriction uses the uniquely retained expression from the common preceding chain; no unsupported independence of different retained subwords is required.

**thm-cg-bruhat-deletion-label-shelling.** Translate the local replacement into the facet-intersection shelling criterion for the open interval order complex. State the full earlier/later-chain comparison, not just shelling terminology. Empty, rank-one and rank-two intervals receive explicit conventions.

**thm-cg-bruhat-eulerian-intervals-and-mobius.** Prove μ(u,v)=(-1)^(ℓ(v)-ℓ(u)) for full Bruhat intervals by lifting-paired recurrence (or the unique falling-chain formula derived locally from shelling). Establish the cancellation formula before using it. Do not transfer this assertion to arbitrary parabolic quotient intervals.

## Prerequisites and reading

Required earlier pages: [[bruhat-subword-order-and-lifting]], [[finite-lattice-projections-and-coxeter-chain-labels]]. The companion [[bruhat-interval-labels-shellings-and-mobius-functions-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.
