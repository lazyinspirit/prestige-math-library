## Item to certify (1)

### `items/lem-successor-cardinal-exists.md`

**What was repaired, and by whom.** The last Remark ("The notation collides with
the ordinal successor, and this page keeps them apart") ended with the sentence
"the cardinal successor is always written $\aleph(\kappa)$ on this page".
Claude Sonnet 5, judging at A7, rejected the item because that is **false about
its own page**: the sibling `items/def-aleph-and-beth-hierarchies.md`, on the
same A page `library/foundations/cardinal-arithmetic-and-cofinality.md`, defines
$\kappa^{+} := \aleph(\kappa)$ and declares a notation rule in force on the page
reserving the superscript on a CARDINAL letter for the successor cardinal.

Alpha (`claude-opus-5`) adjudicated that `confirmed_fatal` at A8 and replaced the
final clause with a statement it believes true, **deliberately without a
wikilink**, because `def-aleph-and-beth-hierarchies` comes LATER in the page
reading order and a link would be an undeclared forward reference needing a
`forward_refs` entry.

**Check specifically:** that the new final Remark sentence is true of this page;
that the ordinal meaning it attributes to `def-ordinal` is what `def-ordinal`
actually says; that `lem-cardinality-of-a-well-orderable-set` really does write
$\alpha^{+}$ in the ordinal sense as the Remark asserts; and that the claim
"introduced later on this page" is true of the actual reading order in
`library/foundations/cardinal-arithmetic-and-cofinality.md`.
