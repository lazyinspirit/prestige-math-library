## Item to certify (1)

### `items/thm-locally-compact-hausdorff-basics.md`

**What was repaired, and by whom.** The final Remark was headed "Claim 4 is what
the one-point compactification uses" and said that the claim-4 padding "is the
standard route to separating a point of $X$ from the added point $\infty$
([[thm-one-point-compactification-properties]])".

Claude Sonnet 5, judging at A7, rejected the item because the cited sibling does
not use claim 4 at all. Alpha (`claude-opus-5`) adjudicated that
`confirmed_fatal` at A8 and rewrote the Remark as "Claim 4 pads a compact set,
not a point", now asserting that `thm-one-point-compactification-properties`
separates a point from $\infty$ **at its step 1.4 from claim 1 alone**, taking a
compact neighbourhood of the point and using that it is closed.

**Check specifically:** open `items/thm-one-point-compactification-properties.md`
and verify from its actual text which claim of this theorem it cites and where;
verify the new Remark's description of its step 1.4 is accurate; and check
whether any OTHER item in the corpus uses claim 4, since the repair rests on the
measurement that claim 4 has no consumer. `grep` for
`thm-locally-compact-hausdorff-basics` across `items/` and read each hit's use.
Also re-read the other three Remarks and the four numbered claims of the
Statement against the proof.
