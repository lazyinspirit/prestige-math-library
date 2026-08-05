## Item to certify (1)

### `items/ex-compactness-in-the-standard-topologies.md`

**What was repaired, and by whom.** The first Remark ("Compactness alone
separates nothing") ended with the universal claim "Every theorem on the
companion page that concludes something interesting from compactness carries a
Hausdorff hypothesis for exactly this reason."

Claude Sonnet 5, judging at A7, rejected the item because that is **false, and
the counterexamples are on the very page named**: on
`library/topology/compactness.md`, `thm-compactness-under-continuous-maps`
claims 1 and 2 carry no Hausdorff hypothesis, and neither do `thm-compact-iff-fip`,
`thm-closed-subspace-of-a-compact-space-is-compact`,
`thm-finite-products-of-compact-spaces`, `lem-tube-lemma-for-a-compact-factor`
or `thm-tychonoff`.

Alpha (`claude-opus-5`) adjudicated that `confirmed_fatal` at A8 and narrowed the
claim to *separation* conclusions, then named the covering conclusions that carry
no separation hypothesis.

**Check specifically:** that the narrowed universal claim is now TRUE of
`library/topology/compactness.md` — open that page, list every theorem on it that
concludes a separation property from compactness, and verify each really does
carry a Hausdorff hypothesis; and verify the three covering conclusions the new
text names ("continuous images of compact spaces are compact", "a continuous real
function on a nonempty compact space attains its bounds", "products of compact
spaces are compact") really are on that page and really carry no separation
hypothesis. Then re-read the six numbered claims and the Verification steps.
