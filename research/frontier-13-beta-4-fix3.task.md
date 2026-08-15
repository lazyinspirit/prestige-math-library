## Batch 4 third pass — two one-line edits

Alpha confirms F4.5 landed **completely** — all three new items plus the B-page
instance, which you found yourself when the task only said "and the fourth if".
Each quotes the lemma's exact Statement, both home pages are in closure, counts and
gates unmoved, citations 146 → 150 for exactly the four additions. Order 399/400 is
`ready-for-splice` and must not be touched.

Two things block order 395, both in artifacts step 4 splices into
`research/plan-spec.json`.

### F4.6 — `ex-bounded-order-graph-classes-are-erdos-hajnal` asserts the property of a class that need not be hereditary

The Erdős–Hajnal property is defined **only for hereditary classes**
(`def-erdos-hajnal-property-and-constant`). A bounded-order class need not be
hereditary: $\{K_2\}$ is a bounded-order class and is not hereditary, since
deleting a vertex leaves $K_1\notin\{K_2\}$.

**No citation can fix this one** — unlike F4.5, the hypothesis is missing from the
**title**, not merely uncited. Add it: restrict to *hereditary* classes of bounded
order (or state it for the hereditary closure, whichever matches your proof). One
word in the title, plus the matching hypothesis in the Statement and strategy.

This is the run's recurring fatal class — a title claiming more than the proof
gives — and the judges read Statements and cannot see a false title.

### F4.7 — the $\le 3$ vertices corollary is missing two definitional deps

`cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property` does not
cite `def-erdos-hajnal-property-and-constant` — **the definition of the phrase in
its own title** — nor `def-h-free-and-family-free-graph`.

Its two siblings, repaired in the same pass, carry all three. This is a routing
loss: my fix task named only the hereditary lemma. Add both, and cite each at the
step where it is used in the proof contract.

### Re-run and report

The three gates plus your closure audit; report the corrected title and the
corollary's new `deps`. Alpha re-checks only these two items on return.
