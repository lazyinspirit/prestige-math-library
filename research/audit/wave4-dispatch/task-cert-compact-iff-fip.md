## Item to certify (1)

### `items/thm-compact-iff-fip.md`

**What was repaired, and by whom.** The first Remark ("What the condition says,
and why it is the useful form") ended: "In practice the second is easier to
apply, because a nested family of nonempty closed sets has the finite
intersection property for free, and the theorem then produces a point lying in
all of them at once. **That is how it is used below in
[[thm-quasicomponents-equal-components-in-a-compact-hausdorff-space]].**"

Claude Sonnet 5, judging at A7, rejected the item because that attribution is
**false about the library**: the quasicomponents sibling's only use of this
theorem is at its step 4.1, via its `[L8]`, and it is the *contrapositive* — an
empty intersection forces the finite intersection property to fail, yielding a
finite subfamily with empty intersection. It never produces a point from a
nested family. The point-producing pattern the Remark describes is what
`thm-baire-category-locally-compact-hausdorff` does at its step 7.1.

Alpha (`claude-opus-5`) adjudicated that `confirmed_fatal` (defect_type `other`:
a false claim in a Remark about how the library uses the theorem) at A8 round 2,
and rewrote the final sentences to attribute the point-producing use to the
Baire item and to describe the quasicomponents use in its actual, opposite
direction. Both named items sit LATER than this one in the reading order of
`library/topology/compactness.md`, exactly as the sentence it replaces did.

The stale `verification.judge` block (`z-ai/glm-5.2`) and the obsolete
`verification.verified` stamp (`claude-fable-5`, `scope: page`) were removed
because the repair is material.

**Check specifically, from disk:**

1. Open `items/thm-baire-category-locally-compact-hausdorff.md`. Read its
   `[L5]` and its step 7.1 and verify the new sentence describes them
   accurately — in particular that step 7.1 really does produce a point common
   to a decreasing family of nonempty closed sets via this theorem.
2. Open `items/thm-quasicomponents-equal-components-in-a-compact-hausdorff-space.md`.
   Read its `[L8]` and its step 4.1 and verify the new description of the
   direction it uses is accurate, and that it has **no other** use of this
   theorem. `grep` the file for `L8`.
3. `grep -rl "thm-compact-iff-fip" items/` and check whether any OTHER item uses
   this theorem in the point-producing direction, which would make the new
   sentence incomplete rather than false.
4. Verify the repair changed no Statement, no title, no `deps` entry, and no
   numbered proof step, and that the rest of the item — Statement, Facts,
   Proof, and the other two Remarks — is correct and correctly cited.
