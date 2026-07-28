# `frontier-1` — amendments to PUBLISHED items, staged not applied

`CLAUDE.md`, hard rule: amendments to published pages land **in the same commit
that publishes the level, never before**, with `verification.audited` cleared so
`depcheck`'s `published-unaudited` forces the owner's re-audit.

This build is **not publishing** — the owner audits first. So everything here is
staged. Nothing in this file has been applied to `items/`.

Each entry states what breaks if it is never applied, so the owner can decline
one without having to reconstruct the consequence.

---

## A1. `rem-rearrangement-in-higher-dimensions` gains forward references

**Item:** `items/rem-rearrangement-in-higher-dimensions.md` — published, homed on
`absolute-convergence-and-rearrangement` (order 129).
**Raised by:** Beta-F1-2, finding F-7. **Status: STAGED.**

**Why.** The published item says the ℝ^d rearrangement question "has a complete
classical answer" not reachable at that point in the reading order, and carries
the Levy and Steinitz papers in `sources.references`. `frontier-1` builds the
first part of that answer on `rn-as-a-normed-space` (order 167). The forward
declaration is what brings the ↗ tier and the forward-reference ledger entry into
existence; without it the reader meets the promise and is never shown where it is
kept.

**Edit.** Add to frontmatter:

```yaml
forward_refs: [thm-steinitz-polygonal-confinement, thm-rearrangement-sums-lie-in-an-affine-subspace]
```

and add a matching link in the body Remarks — `fwdcheck` raises `forward-unused`
for a declared reference that the text never uses.

**Two constraints on the wording, both load-bearing.**

1. The item's sentence *"What the literature answers is not stated here in any
   form"* **stays true and must not be weakened**. `frontier-1` proves the
   containment half only; the classical answer as a whole is still not stated
   anywhere. If the eventual wording says the answer is now given, that sentence
   becomes false and the amendment has manufactured the defect it was meant to
   close.
2. **Delete the item's `verification.judge` block in the same edit.** SCHEMA §3 is
   explicit that a correction inside a `rem-` is a material rewrite, so the
   existing verdict would claim a pass on text the judge never saw.

**If never applied.** Nothing breaks mechanically and no gate fires — this build
declares no forward reference onto the item, so there is no dangling half. The
cost is only that the ↗ marker and the ledger entry do not appear, and the
promise on page 129 stays unlinked.

---

## Not staged, and why

**`lem-finite-sum-laws` is NOT amended by this build.** Beta-F1-2 needed
permutation invariance of a finite sum, which that published item does not have,
and minted `lem-finite-sum-permutation-invariance` as a new item on page 20
instead. That is deliberate: the same published item is the target of level 9's
**amendment 3, which the owner has not approved**, and a second concurrent edit to
it would have entangled two independent decisions.
