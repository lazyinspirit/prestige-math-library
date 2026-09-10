# Published set-theory and collar reconciliation — 2026-09-11

This is a bounded published-item audit prompted by the final original-next-20
group-h handoff and the boundary/interior topology handoff. It does not certify
the full pages, transitive dependency closures, or the remaining published
census. Published items were read without editing them.

## Boolean page/status discrepancy

The published page
`boolean-algebras-stone-duality-and-the-prime-ideal-theorem` currently names
the following five item files, each of which currently has `status: draft`:

- `def-boolean-algebra-for-stone-duality`
- `def-boolean-ideals-filters-and-primality`
- `def-boolean-homomorphism-and-quotient`
- `def-forcing-preorder-compatibility-and-filter`
- `def-complete-boolean-algebra-and-regular-open-sets`

This is a page-composition/status discrepancy for workflow reconciliation. It
is not evidence that any of the five draft mathematical statements is false,
and draft IDs do not receive rows in the canonical published-item index. No
classification row was added for them.

## Explicit-ZFC stationary-set choices — bounded clears

`thm-fodor-pressing-down`, SHA-256
`6ab5fefecce66bafabdb3dc254bbe9c72feb71fad921baf14180a322490c3611`,
states the theorem **in ZFC**. Proof 1.1 uses ambient AC to choose a club
avoiding each allegedly nonstationary fibre. Published
`def-axiom-of-choice` defines exactly the arbitrary-family selection principle
and explicitly records that ZFC means ZF plus AC. The selected family is then
an input to published `thm-diagonal-intersection-of-clubs`; its used diagonal
club clause is coherent. The absent direct AC dependency is optional metadata:
the theorem states the hypothesis and makes the use explicit. Under the
canonical correct-implicit-use rule, no repair debt is established.

`prop-basic-stationary-set-calculus`, SHA-256
`0a5bd6ed48fd3b97c22f4e8506f0095d9c417e4f3a2720e7b7ddf31432c342a7`,
also states all five clauses **in ZFC**. Its proof 2.1 selects one avoiding
club for each member of a family of size below the relevant cofinality.
Published `def-club-filter-and-nonstationary-ideal`, SHA-256
`69248340f268478d8f8216ecf56cc86077a55217b0b3b26fdb4a7acdf117c732`,
states the same ZFC hypothesis and proves the exact small-completeness clause
by that selection followed by the published small-intersection theorem. The
proposition may import that proved clause directly; its additional explicit
description is consistent. Again, adding a direct `def-axiom-of-choice` edge
would be optional interface cleanup rather than mathematical repair.

The definition and diagonal-intersection supplier were read to check these
used clauses, but this batch adds bounded-clear rows only for the two handoff
targets. It does not certify every clause or transitive supplier of those two
supporting items.

## Collar theorem — A-P proof gap

`thm-collar-neighborhood-theorem`, SHA-256
`d326890e4240554967fa1a09ea50ca58bc790756edc83f127e1c3512b5afa861`,
has no prior classification row or alias. Its five declared suppliers and the
collar definition were read in full. They supply an inward field, one-sided
local semiflows, local inverse-function collar charts, the collar definition,
and the stated countable-choice framework. None proves the following global
claim made in proof 2.1:

> the locally finite local collars admit a smooth positive width on which the
> flow map is globally injective and has open image.

That sentence is the entire transition from local embeddings to a global
collar. Local inverse-function charts alone do not exclude collisions between
different boundary points, and a locally finite refinement alone does not
construct the required smooth positive minorant. Thus the theorem remains
true, but the published proof omits a load-bearing argument.

A complete repair can adapt the earlier published
`thm-flowout-theorem`, especially its local defining functions, monotonicity
along trajectories, locally finite positive width, and collision argument, to
the one-sided boundary semiflow. The repair must show that equality of two
short forward trajectories forces equal times and initial boundary points,
then choose a smooth positive width whose variable strip lies in the
injective local-flow domain. Local-diffeomorphism openness then gives the open
image, and `(p,s) -> (p,s delta(p))` identifies the strip with
`boundary(M) x [0,1)`. An alternative is an explicit boundary-defining
function monotone along the field plus the same smooth-positive-minorant
construction. Existing published mathematics appears sufficient; no new
Phase-2 pair is identified.

As an external cross-check, the University of California Riverside notes
*Manifolds with Boundary*, pp. 4–5,
<https://math.ucr.edu/~res/math260s10/manwithbdy.pdf>, separate exactly these
steps: the flow is first locally a diffeomorphism, then must be restricted to
an injective neighbourhood of the zero section, and only then is that
neighbourhood trimmed to a product collar. The source corroborates that the
omitted global injectivity/trimming step is substantive; it is not used as a
replacement proof here.

The topology helper's finite inward-push proof explicitly does not use the
collar theorem. This finding therefore creates no blocker on that live proof.
Other published consumers of the collar theorem were not exhaustively audited
in this batch.

## Deduplication and disposition

Before classification, the whole canonical index was searched by each exact
ID, aliases, the locally-finite-shrinking/global-injectivity mechanism, the
stationary-set choice mechanism, and the named supplier IDs. None of the three
published targets had an index row. This batch introduces one A-P row for the
collar theorem and two bounded-clear rows for the explicit-ZFC set-theory
targets. It introduces no duplicate and no published edit.
