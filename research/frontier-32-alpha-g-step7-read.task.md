# Step 7 whole-group reading — group **g**, run `frontier-32`

You are the group Alpha for batches **13**: 1 A/B pair(s), 2 page(s), 17 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-8 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
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
| 13 | `co-e-free-comb-structure` | A | combinatorics | 437 | `the-structural-criterion-for-property-star`, `quotient-blockades-and-mixing-relations` |
| 13 | `co-e-free-comb-structure-examples` | B | combinatorics | 438 | `co-e-free-comb-structure` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `co-e-free-comb-structure` — Comb Structure in co-E-Free Graphs (14 item(s))

- `lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property` · lemma — The family consisting of $H_5$ and co-$E$ has the Erdős–Hajnal property
- `thm-special-vertex-local-structural-partition-criterion-implies-property-star` · theorem — The special-vertex-local structural-partition criterion implies property (*)
- `lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours` · lemma — Relative to a complete nonedge pair in a co-$E$-free graph, a one-sided vertex mixed on an induced path avoids two consecutive nonneighbours and three consecutive neighbours
- `lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs` · lemma — Relative to a complete nonedge pair in a co-$E$-free graph, every one-sided vertex is pure to an induced $H_5$
- `def-h-five-overlap-chain-relation-in-a-comb-block` · definition — The $H_5$-overlap-chain relation in one comb block
- `lem-h-five-overlap-classes-are-connected` · lemma — Every $H_5$-overlap class is connected
- `lem-purity-on-every-h-five-propagates-along-an-overlap-class` · lemma — Purity on every induced $H_5$ propagates along an $H_5$-overlap class
- `def-h-five-overlap-blockade-and-iterated-mixed-quotients` · definition — The $H_5$-overlap blockade and its iterated mixed quotients
- `lem-h-five-overlap-quotient-iteration-terminates-at-a-pure-blockade` · lemma — Iterated mixed quotients of an $H_5$-overlap blockade terminate at a pure blockade
- `lem-a-vertex-mixed-on-a-connected-set-mixes-on-an-edge` · lemma — A vertex mixed on a connected set has opposite adjacency on some edge of that set
- `lem-co-e-free-external-purity-survives-h-five-overlap-quotients` · lemma — In a special-vertex comb of a co-$E$-free graph, vertices in other comb blocks remain pure to every $H_5$-overlap quotient block
- `lem-terminal-h-five-overlap-quotient-pattern-is-h-five-and-co-e-free` · lemma — The pattern of the terminal $H_5$-overlap quotient is $\{H_5,\mathrm{co}\text{-}E\}$-free
- `thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition` · theorem — A special-vertex comb in a co-$E$-free graph admits the $\{H_5,\mathrm{co}\text{-}E\}$ structural partition
- `cor-the-singleton-family-containing-e-has-property-star` · corollary — The singleton family $\{E\}$ has property (*)

### `co-e-free-comb-structure-examples` — Comb Structure in co-E-Free Graphs — Examples (3 item(s))

- `ex-induced-co-e-witnesses-for-both-forbidden-path-runs` · example — The two induced co-$E$ witnesses behind the forbidden path runs
- `ex-an-h-five-overlap-class-and-its-terminal-quotient` · example — An $H_5$-overlap class and its terminal quotient
- `ex-a-bipartite-four-tooth-comb-has-the-co-e-structural-partition` · example — A bipartite four-tooth comb has the co-$E$ structural partition

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 7 — group reading digest, `frontier-32`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
