# Step 6 whole-group reading — group **b**, run `phase-2-nine-step-25`

You are the group Alpha for batches **2**: 1 A/B pair(s), 2 page(s), 4 item(s).

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
| 2 | `sequential-uniform-boundedness-with-countable-choice` | A | functional-analysis | 288.0601 | `dual-spaces-adjoint-operators-and-annihilators`, `norming-and-separation-under-hahn-banach` |
| 2 | `sequential-uniform-boundedness-with-countable-choice-examples` | B | functional-analysis | 288.0602 | `sequential-uniform-boundedness-with-countable-choice` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sequential-uniform-boundedness-with-countable-choice` — Sequential Uniform Boundedness with Countable Choice (2 item(s))

- `lem-two-signs-detect-an-operator-increment` · lemma — Two signs detect an operator increment
- `thm-sequential-uniform-boundedness-under-countable-choice` · theorem — Sequential uniform boundedness under countable choice

### `sequential-uniform-boundedness-with-countable-choice-examples` — Sequential Uniform Boundedness with Countable Choice: Examples (2 item(s))

- `ex-sequential-uniform-boundedness-for-coordinate-partial-sums` · example — Coordinate partial sums on c_0
- `cex-sequential-uniform-boundedness-needs-a-complete-domain` · counterexample — A complete domain is necessary for sequential uniform boundedness

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
