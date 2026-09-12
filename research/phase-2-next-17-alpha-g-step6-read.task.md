# Step 6 whole-group reading — group **g**, run `phase-2-next-17`

You are the group Alpha for batches **11**: 2 A/B pair(s), 4 page(s), 37 item(s).

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
| 11 | `condensation-gch-and-diamond-in-l` | A | foundations | 677 | `the-constructible-hierarchy-and-inner-models`, `set-theoretic-trees-delta-systems-and-diamond`, `arithmetization-incompleteness-and-relative-consistency` |
| 11 | `condensation-gch-and-diamond-in-l-examples` | B | foundations | 678 | `condensation-gch-and-diamond-in-l` |
| 11 | `the-forcing-theorem-and-formal-consistency-transfer` | A | foundations | 681 | `forcing-orders-names-and-generic-extensions`, `arithmetization-incompleteness-and-relative-consistency` |
| 11 | `the-forcing-theorem-and-formal-consistency-transfer-examples` | B | foundations | 682 | `the-forcing-theorem-and-formal-consistency-transfer`, `condensation-gch-and-diamond-in-l` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `condensation-gch-and-diamond-in-l` — Condensation, GCH, and Diamond in L (14 item(s))

- `def-skolem-hulls-in-constructible-levels` · definition — Canonical Skolem hulls in constructible levels
- `lem-canonical-small-skolem-hulls-in-l` · lemma — Canonical L-hulls are elementary and small
- `lem-finite-stage-l-history-and-limit-level-absoluteness` · lemma — Finite-stage L histories and weak limit-level absoluteness
- `lem-finite-support-constructibility-absoluteness` · lemma — Finite support for constructibility absoluteness
- `thm-condensation-for-constructible-levels` · theorem — Condensation for constructible levels
- `lem-cardinality-of-infinite-constructible-levels` · lemma — Cardinality of infinite constructible levels
- `lem-definable-subsets-of-constructible-levels-are-small` · lemma — Definable subsets of a constructible level are small
- `thm-constructible-subsets-appear-before-successor-cardinals` · theorem — Constructible subsets appear before successor cardinals
- `thm-generalized-continuum-hypothesis-in-l` · theorem — The generalized continuum hypothesis holds in L
- `thm-v-equals-l-implies-diamond` · theorem — V equals L implies diamond
- `cor-v-equals-l-gives-a-suslin-tree` · corollary — V equals L gives a Suslin tree
- `lem-finite-fragment-l-interpretation-with-gch` · lemma — Finite-fragment interpretation in L with GCH
- `thm-formal-consistency-of-zfc-plus-gch-from-zf` · theorem — Formal consistency of ZFC plus GCH relative to ZF
- `cor-positive-relative-consistency-of-ch-and-gch` · corollary — Positive relative consistency of CH and GCH

### `condensation-gch-and-diamond-in-l-examples` — Condensation, GCH, and Diamond in L: Examples and Counterexamples (2 item(s))

- `ex-condensation-bounds-a-constructible-real` · example — Condensation bounds a constructible real
- `ex-diamond-seals-a-maximal-antichain-in-l` · example — A diamond guess seals a maximal antichain

### `the-forcing-theorem-and-formal-consistency-transfer` — The Forcing Theorem and Formal Consistency Transfer (15 item(s))

- `def-forcing-relation-for-atomic-formulas` · definition — Atomic forcing relation
- `lem-atomic-forcing-relation-is-well-founded-and-definable` · lemma — Atomic forcing is well-founded and definable
- `def-forcing-relation-for-formulas` · definition — Forcing relation for all formulas
- `lem-forcing-monotonicity-density-and-decision` · lemma — Monotonicity, density, and decision for forcing
- `lem-forcing-truth-lemma` · lemma — Truth lemma
- `thm-forcing-theorem` · theorem — Forcing theorem
- `thm-generic-extensions-satisfy-zf-and-zfc` · theorem — Generic extensions satisfy ZF and preserve ground-model Choice
- `thm-forcing-preserves-ordinals` · theorem — Forcing preserves ordinals
- `lem-dense-forcing-name-translations-preserve-forcing` · lemma — Dense forcing name translations preserve forcing
- `thm-forcing-equivalence-and-boolean-completion` · theorem — Forcing equivalence and Boolean completion
- `rem-intermediate-models-and-complete-subalgebras` · remark — Orientation for intermediate models and complete subalgebras
- `thm-semantic-generic-extension-theorem-for-countable-transitive-models` · theorem — Semantic generic extensions of countable transitive models
- `lem-forcing-transfer-for-finite-zfc-fragments` · lemma — Forcing transfer for finite ZFC fragments
- `thm-formal-consistency-transfer-by-forcing` · theorem — Formal consistency transfer by forcing
- `cor-relative-consistency-from-a-forced-sentence` · corollary — Relative consistency from a forced sentence

### `the-forcing-theorem-and-formal-consistency-transfer-examples` — The Forcing Theorem and Formal Consistency Transfer: Examples and Counterexamples (6 item(s))

- `ex-atomic-forcing-of-check-names` · example — Atomic forcing of check names
- `ex-trivial-forcing-recovers-the-ground-model` · example — Trivial forcing recovers the ground model
- `cex-forcing-is-not-upward-monotone-to-weaker-conditions` · counterexample — Forcing is not monotone toward weaker conditions
- `ex-dense-equivalent-forcing-presentations` · example — Dense-equivalent forcing presentations
- `fs-the-ctm-presentation-proves-con-zfc` · false-statement — False statement: the CTM presentation proves Con(ZFC)
- `fs-l-equals-v-in-zf` · false-statement — False statement: ZF proves L equals V

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
