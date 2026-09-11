---
id: "ex-lc-first-inaccessible-is-not-mahlo"
kind: "example"
title: "The least inaccessible is not Mahlo"
deps: ["thm-lc-weakly-compact-stationary-reflection-and-mahlo", "lem-lc-inaccessible-size-and-rank-bounds", "def-axiom-of-choice"]
sources:
  references:
    - title: Monk Theorem 17.27 p.363
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

In ZFC, if an inaccessible cardinal exists, the least inaccessible is not Mahlo and therefore is not weakly compact.

## Facts & Assumptions

**Given:** ZFC conditional on an inaccessible. The club of infinite strong limits below the least one avoids every uncountable regular, explicitly witnessing non-Mahloness.

[F1] [[thm-lc-weakly-compact-stationary-reflection-and-mahlo]]: Weak compactness implies Mahloness.

[F2] [[lem-lc-inaccessible-size-and-rank-bounds]]: An inaccessible has a club of infinite strong-limit cardinals below it.

[F3] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice function.

## Verification

1.1 Given an inaccessible, minimize the ordinals at or below it satisfying that property; Separation and ordinal well-ordering give a least one kappa. Let C be the club of infinite strong-limit cardinals below kappa from F2. No uncountable regular cardinal belongs to C, because such a member would be uncountable regular strong limit, an inaccessible below kappa. Thus the set of uncountable regular cardinals used in the page's definition of Mahloness misses the actual club C; omega is not in that set. AC is retained through F2's cardinal-size estimates; the least-ordinal selection itself uses only Separation and ordinal well-ordering. [F2, F3]

2.1 Missing C means that set is nonstationary, so kappa is not Mahlo. If kappa were weakly compact, F1 would make it Mahlo, contradicting step 1.1. Therefore it is not weakly compact. AC is also retained through F1's cardinal estimates and pressing-down argument. The argument is conditional on the initial existence hypothesis and does not prove that hypothesis consistent. [F1, F3, step 1.1] ∎
