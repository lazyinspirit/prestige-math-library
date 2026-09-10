# Published Radon-regularity choice audit — 2026-09-11

This bounded audit follows the original-next-20 group-c handoff about the
second-countable LCH regularity corollary. It covers that complete corollary,
all three declared dependencies, and the exact clauses used in its general
regularity supplier. It does not certify all Radon-measure interfaces or the
three downstream published consumers. No published item was edited.

## Deduplication

The whole canonical index was searched by the two exact IDs, aliases, the
sigma-compact/open-regularity mechanism, countable compact exhaustions,
summable open approximations, and all declared supplier IDs. Neither target
had an existing classification row. This audit introduces two A-P rows.

## General sigma-compact-open regularity theorem

`thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact`,
SHA-256
`81352930245862d261bae6c7a437f2daf3bc11f15f6051bf1ba03f4beef4a5e6`,
states no choice hypothesis. Several individual existential choices in its
proof are harmless because the relevant open or Borel set is fixed. Two uses
are countable families and are not justified in ZF by its three declared
definitions:

1. Proof 2.1 obtains an increasing relatively compact open exhaustion from a
   compact exhaustion. For each compact stage it must choose a finite family of
   relatively compact neighborhoods. These choices are made for countably many
   stages. They can be made independently under `AC_omega`, after which finite
   unions make the sequence increasing.
2. Proof 3.1 claims outer regularity is preserved by countable unions "by
   summable open errors." Given regular `E_n` and an error budget, this chooses
   an open approximant `O_n` for every natural `n`. The arbitrary LCH space has
   no supplied canonical enumeration from which least approximants could be
   selected.

Proof 5.1 repeats the second mechanism explicitly when it chooses one relative
open approximant for every Borel slice `E_n`. Published
`def-countable-choice` is the exact adequate assumption. Add and declare
`AC_omega` and identify these uses, or replace both countable selections with a
fully supplied choice-free construction. The measure-theoretic inequalities
after the selections are sound; the theorem's mathematical conclusion is not
refuted.

## Second-countable LCH corollary

`cor-second-countable-lch-locally-finite-borel-measures-are-regular`, SHA-256
`0fe48cc6f0c6fc37eec61eaad3438bbeefb58dd470c067f8d3ce27173d1cae92`,
also states no choice hypothesis. Its proof 1.1 compresses construction of a
countable relatively compact basis. This particular step has a choice-free
expansion: from a fixed countable basis, retain every basis member whose
closure is compact. Given `x in U`, the LCH shrinking lemma gives an open `V`
with compact closure inside `U`; some member of the original basis contains
`x` and lies in `V`, and its closure is a closed subset of the compact closure
of `V`. Thus the retained subfamily is still a basis. For fixed `U`, retaining
the members whose closures lie in `U` expresses `U` as the union of those
compact closures.

That expansion does not repair proof 2.1, which directly applies the preceding
general theorem in its countable-choice-dependent form. Add `AC_omega` to the
corollary and declare `def-countable-choice`, or replace the general theorem
call with a complete choice-free second-countable regularity proof. Merely
expanding the basis sentence is insufficient. The group-c handoff's proposed
basis refinement is therefore valid but does not close the exact used supplier
contract.

## Impact and repair state

The general theorem has this corollary as its sole direct published consumer.
The corollary has three direct published consumers:

- `ex-locally-integrable-density-functional-is-represented-by-g-dlambda`
- `thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure`
- `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`

Those are impact candidates rather than automatically confirmed defects. The
active Fourier and original author paths that assume full AC can discharge the
countable-choice contract locally when they use this regularity route. No live
authoring blocker and no new Phase-2 pair is established.

Disposition: both targets are newly A-P. This adds two unique published IDs,
with no duplicate and no exhaustive downstream or transitive-closure claim.
