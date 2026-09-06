# Step 8 adjudication — group **g**, run `frontier-32`

You are the group Alpha for batches **13**: 1 A/B pair(s), 2 page(s), 17 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-32-alpha-g-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-32-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

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

## Step-7 reader warnings

1 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-ea439f3710a014c12c36a164 · `lem-co-e-free-external-purity-survives-h-five-overlap-quotients`** (from group g, gap-a-reader-closes) — Proof step 4.1 says that a vertex of $A_2$ is pure to every induced $H_5$ in $A_1$ by applying [F1] with $(x',y')$. That instantiation does not meet the cited lemma's hypothesis: vertices of $A_2$ are complete to both $x'$ and $y'$. The source proof instead applies the general purity lemma with the pair $(y',u')$: $y'$ and $u'$ are nonadjacent and complete to $A_1$, while the chosen vertex of $A_2$ lies in $N(y')\setminus N(u')$. The stated result is recoverable, but the written inference is not.

Append one owning-group disposition per warning to `research/frontier-32-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-32-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `frontier-32`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-32-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every entry under **Step-7 reader warnings** also requires an owning-group
decision in `research/frontier-32-step8-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-7 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-7 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/frontier-32-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-32-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-32-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
