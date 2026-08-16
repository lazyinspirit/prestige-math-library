# Batch 5 of run `frontier-15` — the fundamental group of the circle

One A/B pair — HT-4, the first nontrivial π₁ computation in the library, and
the pair `the-seifert-van-kampen-theorem` and `classification-of-covering-
spaces` are blocked on.

| | |
|---|---|
| A page | `the-fundamental-group-of-the-circle` · order **295** · `topology` |
| B page | `the-fundamental-group-of-the-circle-examples` · order **296** |
| requires | `covering-spaces-and-lifting` (published, frontier-14), `fundamental-trigonometric-identities` (published; the step-0 drift review verified trap (i) on disk and re-pinned the trig edge here — the parametrization theorem is on this page, not on `sine-cosine-and-the-definition-of-pi`) |
| design | `research/plan-topology-set-theory-track.md` §HT-4, line ~931. Its quoted orders (235, 157, …) are the OLD numbering — stale by the file's own admission at L74–80; use the spec |

## The design's core discipline

**The theorem needs no trigonometry.** `S¹ := R/Z` with the quotient
topology, throughout — degree, the covering map `p: R → R/Z`, injectivity by
homotopy lifting, surjectivity by explicit loops. Trig enters in exactly one
place: the **dictionary item**, the homeomorphism `t ↦ (cos 2πt, sin 2πt)`
from `R/Z` to the unit circle (continuous bijection, compact to Hausdorff).

## Traps the design states

1. **Pin the trig `requires` from disk, not from the design.** If the
   surjectivity/periodicity facts for (cos, sin) live on a different
   published page than `sine-cosine-and-the-definition-of-pi` (the
   logarithm/trig pages around orders 177–189 are the candidates), you pin
   the edge to the page that actually carries them — verify by opening the
   pages, and route a spec `requires` amendment through your step-3 Alpha if
   the current edge is wrong.
2. **The (Z, +) trap**: the b-leaf rule blocks the obvious B-page citation
   for "(Z, +) is a group"; `thm-int-comm-ring` is the legal source.
3. **The published torus example already treats R/Z as a B item.** B items
   are leaves — REBUILD `R/Z` here on the A page from `def-quotient-topology`
   with an agreement remark. Silent re-definition is the known defect class.
4. **Openness of `p` via saturation is a numbered step**, not a "clearly".
   Same for the evenly-covered-neighbourhood verification: `p` restricted to
   intervals of length < 1 is a homeomorphism, with the proof steps written.
5. Well-definedness #17 (degree) comes BEFORE the homomorphism/isomorphism
   items that use it.

## Scope boundary

`π₁(Sⁿ) = 1` for n ≥ 2, van Kampen, and the classification of covering
spaces are later pages (297, 299) — decline by page id. The lifting theory
itself is published on `covering-spaces-and-lifting`; **open every lifting
item you cite and check its printed hypotheses** (local path-connectedness,
semilocal simple connectedness) against your use — that page's review flagged
hypothesis discipline as the recurring risk in this subject.

**No permission prompts of any kind**, including inside an `&&` chain.
