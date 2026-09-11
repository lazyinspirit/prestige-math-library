# Step 6 whole-group reading — group **g**, run `phase-2-next-20`

You are the group Alpha for batches **12**: 1 A/B pair(s), 2 page(s), 22 item(s).

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
| 12 | `effective-numberings-reductions-resources-and-randomness` | A | computability-theory | 612.2 | `one-tape-simulation-normal-forms`, `robust-machine-models-and-universal-computation`, `diagonalization-and-the-halting-problem`, `finite-probability-spaces-and-random-variables`, `algebraic-extensions-degree-and-finite-fields`, `linear-algebra-methods-in-combinatorics` |
| 12 | `effective-numberings-reductions-resources-and-randomness-examples` | B | computability-theory | 612.4 | `effective-numberings-reductions-resources-and-randomness` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `effective-numberings-reductions-resources-and-randomness` — Effective Numberings, Reductions, Resources, and Randomness (19 item(s))

- `def-uniform-asymptotic-time-space-comparison` · definition — Uniform asymptotic time space comparison
- `def-machine-time-and-space-constructibility` · definition — Machine time and space constructibility
- `thm-clocked-universal-simulation-with-time-and-space-bounds` · theorem — Clocked universal simulation with time and space bounds
- `def-primitive-recursive-functions-by-initial-functions-and-schemes` · definition — Primitive recursive functions by initial functions and schemes
- `lem-fixed-coding-primitive-recursive-arithmetic-and-sequences` · lemma — Fixed coding primitive recursive arithmetic and sequences
- `def-kleene-computation-predicate-and-output-map` · definition — Kleene computation predicate and output map
- `lem-fixed-machine-history-predicate-is-primitive-recursive` · lemma — Fixed machine history predicate is primitive recursive
- `thm-kleene-normal-form-for-the-fixed-machine-coding` · theorem — Kleene normal form for the fixed machine coding
- `def-computable-many-one-reducibility-interface` · definition — Computable many one reducibility interface
- `def-oracle-turing-reducibility-interface` · definition — Oracle turing reducibility interface
- `def-acceptable-numbering-with-universal-evaluation` · definition — Acceptable numbering with universal evaluation
- `thm-smn-for-the-fixed-acceptable-numbering` · theorem — Smn for the fixed acceptable numbering
- `thm-kleene-fixed-point-theorem-for-program-indices` · theorem — Kleene fixed point theorem for program indices
- `def-polynomial-time-verifier-and-reduction-interface` · definition — Polynomial time verifier and reduction interface
- `def-probabilistic-polynomial-time-machine-interface` · definition — Probabilistic polynomial time machine interface
- `def-rp-corp-zpp-bpp-and-pp-classes` · definition — Rp corp zpp bpp and pp classes
- `def-pairwise-independent-hash-family-interface` · definition — Pairwise independent hash family interface
- `lem-chernoff-bound-for-independent-bernoulli-trials` · lemma — Chernoff bound for independent bernoulli trials
- `thm-schwartz-zippel-over-finite-fields` · theorem — Schwartz zippel over finite fields

### `effective-numberings-reductions-resources-and-randomness-examples` — Effective Numberings, Reductions, Resources, and Randomness: Examples (3 item(s))

- `ex-smn-specializes-a-two-argument-index` · example — Smn specializes a two argument index
- `ex-pairwise-independent-affine-hashing-over-a-prime-field` · example — Pairwise independent affine hashing over a prime field
- `ex-schwartz-zippel-for-a-bivariate-polynomial` · example — Schwartz zippel for a bivariate polynomial

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-next-20`

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
