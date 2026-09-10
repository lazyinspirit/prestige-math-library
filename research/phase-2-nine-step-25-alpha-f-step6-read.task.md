# Step 6 whole-group reading — group **f**, run `phase-2-nine-step-25`

You are the group Alpha for batches **12**, **13**: 2 A/B pair(s), 4 page(s), 21 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 12 | `one-tape-simulation-normal-forms` | A | computability-theory | 598.2 | `turing-machine-configuration-boundary-interface`, `turing-machines-configurations-and-computation` |
| 12 | `one-tape-simulation-normal-forms-examples` | B | computability-theory | 598.4 | `one-tape-simulation-normal-forms` |
| 13 | `boone-machine-simulation-and-fixed-presentation-undecidability` | A | group-theory | 610.1 | `diagonalization-and-the-halting-problem`, `turing-machines-configurations-and-computation`, `turing-machine-configuration-boundary-interface`, `decision-problems-for-finitely-presented-groups`, `free-groups-and-presentations`, `free-products-and-amalgamation`, `hnn-extensions-and-brittons-lemma`, `relations-functions-and-quotients` |
| 13 | `boone-machine-simulation-and-fixed-presentation-undecidability-examples` | B | group-theory | 610.2 | `boone-machine-simulation-and-fixed-presentation-undecidability` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `one-tape-simulation-normal-forms` — One-Tape Simulation Normal Forms (3 item(s))

- `def-stay-put-one-tape-machine-and-run-interface` · definition — Stay-put one-tape machines and their runs
- `lem-stay-put-right-left-macro-simulation` · lemma — The right-left macro simulates one stay-put step
- `thm-stay-put-elimination-with-explicit-simulation-interface` · theorem — Stay-put elimination with an explicit simulation interface

### `one-tape-simulation-normal-forms-examples` — One-Tape Simulation Normal Forms: Examples (2 item(s))

- `ex-eliminating-a-stay-put-transition` · example — Eliminating a stay-put transition at the left boundary
- `cex-deleting-stay-put-moves-does-not-preserve-computation` · counterexample — Deleting stay-put instructions need not preserve computation

### `boone-machine-simulation-and-fixed-presentation-undecidability` — Boone Machine Simulation and Fixed-Presentation Undecidability (13 item(s))

- `lem-normalized-fixed-halting-machine-for-boone-simulation` · lemma — Normalized fixed halting machine for boone simulation
- `def-boone-machine-semigroup-and-augmented-configurations` · definition — Boone machine semigroup and augmented configurations
- `lem-boone-semigroup-histories-detect-halting` · lemma — Boone semigroup histories detect halting
- `thm-fixed-finite-semigroup-has-undecidable-terminal-equality` · theorem — Fixed finite semigroup has undecidable terminal equality
- `def-boone-group-presentation-and-special-word` · definition — Boone group presentation and special word
- `lem-boone-base-groups-and-associated-free-bases` · lemma — Boone base groups and associated free bases
- `lem-boone-hnn-tower-and-auxiliary-subgroups` · lemma — Boone hnn tower and auxiliary subgroups
- `lem-boone-positive-history-pushing` · lemma — Boone positive history pushing
- `lem-boone-commutator-extracts-an-auxiliary-history` · lemma — Boone commutator extracts an auxiliary history
- `lem-boone-reduced-auxiliary-words-have-no-rule-pinches` · lemma — Boone reduced auxiliary words have no rule pinches
- `lem-boone-positive-history-reconstruction` · lemma — Boone positive history reconstruction
- `thm-boone-special-word-equivalence` · theorem — Boone special word equivalence
- `thm-novikov-boone-undecidability-of-the-word-problem` · theorem — Novikov boone undecidability of the word problem

### `boone-machine-simulation-and-fixed-presentation-undecidability-examples` — Boone Machine Simulation and Fixed-Presentation Undecidability — Examples (3 item(s))

- `ex-boone-sharp-is-not-word-inversion` · example — Boone sharp is not word inversion
- `ex-boone-halting-cleanup-through-an-empty-right-tape` · example — Boone halting cleanup through an empty right tape
- `ex-fixed-boone-undecidability-implies-uniform-undecidability` · example — Fixed boone undecidability implies uniform undecidability

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-nine-step-25`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
