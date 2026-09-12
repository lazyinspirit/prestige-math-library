# Step 6 whole-group reading — group **f**, run `phase-2-next-17`

You are the group Alpha for batches **10**: 2 A/B pair(s), 4 page(s), 21 item(s).

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
| 10 | `sat-tableaux-and-quantified-space-completeness` | A | computability-theory | 620.2 | `effective-numberings-reductions-resources-and-randomness`, `resource-bounds-and-machine-invariance`, `turing-machines-configurations-and-computation` |
| 10 | `sat-tableaux-and-quantified-space-completeness-examples` | B | computability-theory | 620.4 | `sat-tableaux-and-quantified-space-completeness` |
| 10 | `nondeterministic-recursive-padding-and-time-separation` | A | computability-theory | 626.2 | `effective-numberings-reductions-resources-and-randomness`, `resource-bounds-and-machine-invariance`, `robust-machine-models-and-universal-computation` |
| 10 | `nondeterministic-recursive-padding-and-time-separation-examples` | B | computability-theory | 626.4 | `nondeterministic-recursive-padding-and-time-separation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sat-tableaux-and-quantified-space-completeness` — SAT Tableaux and Quantified-Space Completeness (9 item(s))

- `def-boolean-formulas-cnf-and-satisfiability-interface` · definition — Boolean formulas, CNF, and satisfiability
- `def-bounded-turing-computation-tableau-interface` · definition — Bounded Turing-computation tableaux
- `lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations` · lemma — The tableau formula characterizes accepting computations
- `lem-tableau-to-cnf-map-has-polynomial-size-and-time` · lemma — Tableau formulas have polynomial-size polynomial-time CNF encodings
- `thm-cook-levin-sat-completeness-interface` · theorem — Cook-Levin: SAT is NP-complete
- `thm-three-sat-completeness-interface` · theorem — 3SAT is NP-complete
- `def-polynomial-space-and-nondeterministic-polynomial-space` · definition — Polynomial space and nondeterministic polynomial space
- `lem-space-bounded-machine-configuration-count` · lemma — A space-bounded machine has exponentially many configurations
- `thm-tqbf-pspace-completeness-interface` · theorem — TQBF is PSPACE-complete

### `sat-tableaux-and-quantified-space-completeness-examples` — SAT Tableaux and Quantified-Space Completeness: Examples (3 item(s))

- `ex-a-two-step-computation-tableau-and-its-local-clauses` · example — A two-step computation tableau and its local clauses
- `ex-tseitin-conversion-preserves-satisfiability` · example — A Tseitin conversion preserves satisfiability
- `ex-qbf-reachability-recursion-space-accounting` · example — Space accounting for the QBF reachability recursion

### `nondeterministic-recursive-padding-and-time-separation` — Nondeterministic Recursive Padding and Time Separation (7 item(s))

- `def-nondeterministic-acceptance-time-and-exact-clock` · definition — Nondeterministic acceptance time and exact clocks
- `lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time` · lemma — Linear acceptance-time simulation on two tapes
- `lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation` · lemma — Prefix program codes admit linear nondeterministic universal simulation
- `lem-time-controlled-self-reference-for-nondeterministic-machines` · lemma — Time-controlled self-reference for nondeterministic machines
- `lem-clock-cutoffs-and-unions-preserve-nondeterministic-time-bounds` · lemma — Clocks, cutoffs, and finite unions preserve nondeterministic time bounds
- `lem-no-recursive-bound-covers-all-recursive-unary-languages` · lemma — No recursive bound covers all recursive unary languages
- `thm-nondeterministic-recursive-padding-separation` · theorem — Nondeterministic recursive-padding separation

### `nondeterministic-recursive-padding-and-time-separation-examples` — Nondeterministic Recursive Padding and Time Separation: Examples (2 item(s))

- `ex-nondeterministic-polynomial-logarithmic-time-separation` · example — A nondeterministic polynomial/logarithmic time separation
- `ex-shortest-acceptance-and-clocked-all-branch-halting` · example — Shortest acceptance versus clocked all-branch halting

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-next-17`

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
