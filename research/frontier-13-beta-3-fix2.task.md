## Batch 3 second pass — three findings my first fix brief omitted

Your first repair was executed faithfully and is accepted: the dead source is gone
(0 occurrences), both pages now carry two live treatments, harvest 126 → 201 rows,
gates green. **The omissions below are the orchestrator's error, not yours** — the
first brief was written from the Alpha's closing summary instead of its full
report, and three findings never reached you. Apply only these.

Source of record: `research/frontier-13-alpha-b-step3-scaffold-review.md`. Read
F3.4, F3.6 and F3.7 there in full before acting.

### F3.4 (page 88) — a harvest row claims an iff the item delivers in one direction

The Conrad row reads "Theorem 5.2, a finite family of diagonalizable operators is
simultaneously diagonalizable **if and only if** it commutes", disposed `included`
to `thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms` —
whose title states only the forward direction. Alpha verified against Conrad PDF
p. 9 that Thm 5.2 really is an iff. **The converse is nowhere in the scaffold.**

The converse is one line: operators diagonal in a common basis commute because
diagonal matrices commute. It is also the half a reader uses to *rule out*
simultaneous diagonalisability. **Add it to the same item and make the title an
iff** — do not mint a second id.

### F3.6 (page 88) — "splits" was an uncited technical term; the fix is now a spec edge

`def-polynomials-that-split-and-splitting-fields` is homed on `splitting-fields`
(order 56), which was **not** in order 88's closure — so the page used a technical
predicate it could not cite.

Alpha offered two remedies and preferred rephrasing to "product of linear factors".
**The orchestrator chose the other one, and applied it:** `splitting-fields` has
been added to order 88's `requires` (published, order 56 < 88, closure 37 → 38,
**0 seams** across all eleven in-run pairs, `validate-plan` exit 0).

Reason for overriding the preference: Alpha's premise was that "only the corollary
and prose drift". In fact the predicate appears in **four A-page titles** —
`cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial`,
`thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree`
(added by your own repair), `cor-distinct-characteristic-roots-imply-diagonalisability`
— plus the B-page `fs-a-split-minimal-polynomial-always-gives-diagonalisability`,
and "split" is baked into several ids, which become immutable at publication.
Paraphrasing four titles around a standard published definition is worse than
citing it.

**So: cite `def-polynomials-that-split-and-splitting-fields` wherever the page uses
"splits" as a technical predicate**, and add it to the relevant `deps` and contract
input maps. Do **not** mint a local `def-` for it. Do not edit `plan-spec.json` —
the edge is already there.

Note `thm-primary-decomposition-for-an-endomorphism` uses "split" in the ordinary
sense (the factors *split V* into kernels), not as the polynomial predicate. Leave
that one alone.

### F3.7 (both pages) — the third summary paragraph must go

Your notes §"Reader-facing page summaries" has, after page 94's two paragraphs, a
third 37-word paragraph beginning "The B pages supply concrete computations and
misconception checks…". An A-page summary is **exactly two paragraphs** and a B
page has **no authored summary body at all**, so that paragraph has no legal
destination. Delete it. Your four A-page summary paragraphs themselves are correct
(79/67 and 70/54 words).

### Re-run and report

The three gates in the brief plus your dependency-closure audit. Report the
converse's new title, the items whose `deps` gained the splitting-fields
definition, and confirmation the third paragraph is gone.
