# Step 8 adjudication — group **g**, run `frontier-30`

You are the group Alpha for batches **14**, **18**: 3 A/B pair(s), 6 page(s), 38 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-30-alpha-g-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-30-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 14 | `from-generalized-niceness-to-erdos-hajnal` | A | combinatorics | 429 | `generalized-niceness-and-reduction-outcomes` |
| 14 | `from-generalized-niceness-to-erdos-hajnal-examples` | B | combinatorics | 430 | `from-generalized-niceness-to-erdos-hajnal` |
| 14 | `property-star-and-comb-outcomes` | A | combinatorics | 431 | `generalized-niceness-and-reduction-outcomes` |
| 14 | `property-star-and-comb-outcomes-examples` | B | combinatorics | 432 | `property-star-and-comb-outcomes` |
| 18 | `morse-functions-critical-values-and-genericity` | A | differential-topology | 519 | `morse-critical-points-hessians-and-indices-examples` |
| 18 | `morse-functions-critical-values-and-genericity-examples` | B | differential-topology | 520 | `morse-functions-critical-values-and-genericity` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `from-generalized-niceness-to-erdos-hajnal` — From Generalized Niceness to Erdős–Hajnal (3 item(s))

- `lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set` · lemma — Rödl initialization upgrades generalized niceness to a restricted set, a complete or anticomplete blockade, or a polynomial clique or stable set
- `lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades` · lemma — Large induced subgraphs without a polynomial clique or stable set force complete or anticomplete blockades
- `thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property` · theorem — Leaf-reducible wonderful generalized nice finite families have the Erdős–Hajnal property

### `from-generalized-niceness-to-erdos-hajnal-examples` — From Generalized Niceness to Erdős–Hajnal — Examples (3 item(s))

- `ex-the-lemma-three-five-parameter-choice-on-a-large-graph` · example — The Lemma 3.5 parameter choice on a graph of order just above the source threshold
- `ex-a-complete-four-blockade-gives-a-four-vertex-clique` · example — A complete four-blockade gives a four-vertex clique
- `ex-a-large-epsilon-restricted-induced-subgraph-gives-a-polynomial-clique-or-stable-set` · example — A large epsilon-restricted induced subgraph gives a polynomial clique or stable set

### `property-star-and-comb-outcomes` — Property (*) and Comb Outcomes (8 item(s))

- `def-property-star-for-a-finite-family` · definition — Property (*) for a finite graph family
- `lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes` · lemma — Property (*) and leaf reducibility yield five comb outcomes in a restricted graph
- `lem-property-star-and-leaf-reducibility-yield-a-long-x-sparse-or-complete-blockade-or-a-better-outcome` · lemma — Property (*) and leaf reducibility yield a long x-sparse or complete blockade, or a better outcome
- `lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph` · lemma — Under failure of the global outcomes, a large y^(10/3)-restricted induced subgraph forces a y^(11/3)-restricted induced subgraph
- `lem-constant-scale-restricted-property-star-yields-a-restricted-subgraph-a-polynomial-clique-or-stable-set-or-two-blockade-alternatives` · lemma — Constant-scale restricted property (*) yields a restricted subgraph, a polynomial clique or stable set, or two blockade alternatives
- `lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem` · lemma — Rödl initialization removes the constant-scale restriction in the property (*) four-outcome theorem
- `lem-large-induced-subgraphs-in-the-property-star-four-outcome-theorem-contain-a-pure-or-x-sparse-polynomial-blockade` · lemma — Large induced subgraphs in the property (*) four-outcome theorem contain a pure or x-sparse polynomial blockade
- `thm-property-star-and-leaf-reducibility-imply-generalized-niceness` · theorem — Property (*) and leaf reducibility imply generalized niceness

### `property-star-and-comb-outcomes-examples` — Property (*) and Comb Outcomes — Examples (4 item(s))

- `ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star` · example — A four-tooth comb with a special vertex triggers property (*)
- `ex-the-third-outcome-of-property-star-gives-a-pure-four-blockade` · example — The third outcome of property (*) gives a pure four-blockade
- `ex-the-square-root-rescaling-in-lemma-four-four` · example — The square-root rescaling in Lemma 4.4
- `ex-the-epsilon-to-five-d-substitution-in-lemma-four-five-one` · example — The epsilon^(5d) substitution in Claim 4.5.1 and Lemma 4.5

### `morse-functions-critical-values-and-genericity` — Morse Functions Critical Values and Genericity (15 item(s))

- `lem-morse-functions-are-transverse-differentials` · lemma — A smooth function is Morse if and only if its differential section is transverse to the zero section
- `thm-morse-functions-are-dense-by-relative-jet-transversality` · theorem — Every smooth function admits arbitrarily fine strong-topology perturbations whose differential is transverse to zero, supported away from a closed set where transversality already holds
- `thm-morse-functions-form-a-residual-subset` · theorem — In the strong $C^\infty$ topology on $C^\infty(M,\mathbb R)$, the Morse functions form a residual subset
- `lem-compact-morse-critical-points-have-uniform-hessian-gaps` · lemma — On a compact manifold, a Morse function has finitely many critical points and a uniform Hessian gap on disjoint critical neighborhoods
- `lem-no-new-critical-points-under-a-compact-c1-small-perturbation` · lemma — Away from fixed critical neighborhoods, sufficiently small $C^1$ perturbations create no new critical points on a compact manifold
- `thm-morse-functions-are-open-dense-on-a-compact-manifold` · theorem — On a compact smooth manifold, the Morse functions form an open dense subset in the $C^2$ and hence $C^\infty$ topology
- `lem-finitely-many-critical-values-can-be-separated-locally` · lemma — For a compact Morse function, disjoint local bump perturbations can separate finitely many equal critical values without changing the Hessians
- `thm-excellent-morse-functions-are-open-dense-on-a-compact-manifold` · theorem — On a compact smooth manifold, the excellent Morse functions form an open dense subset of the $C^2$ and hence $C^\infty$ topology
- `thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse` · theorem — For a compact manifold embedded in Euclidean space, the restricted linear height is Morse for generic directions
- `thm-generic-squared-distance-functions-are-morse` · theorem — For a compact manifold embedded in Euclidean space, the squared-distance function from a generic center is Morse
- `cor-every-compact-smooth-manifold-admits-an-excellent-morse-function` · corollary — Every compact smooth manifold admits an excellent Morse function
- `lem-properness-survives-a-controlled-locally-finite-perturbation` · lemma — A locally finite shellwise perturbation with rapidly decaying size preserves properness of a smooth exhaustion
- `prop-proper-morse-exhaustions-exist-on-smooth-manifolds` · proposition — Every smooth manifold admits a proper Morse function
- `rem-noncompact-morse-genericity-is-not-an-open-dense-claim` · remark — On a noncompact manifold, this page states Morse genericity as a strong-topology residual theorem
- `rem-morse-does-not-mean-distinct-critical-values` · remark — Being Morse does not by itself force distinct critical values; excellence is a separate generic condition

### `morse-functions-critical-values-and-genericity-examples` — Morse Functions Critical Values and Genericity — Examples (5 item(s))

- `ex-generic-and-exceptional-height-directions-on-a-torus` · example — A standard embedded torus has generic height directions with four Morse critical points, but symmetry directions create degenerate or nongeneric behavior
- `ex-squared-distance-to-a-circle-and-its-medial-axis` · example — Squared distance to a circle is Morse for centers off the medial axis and degenerate at the center
- `ex-separating-equal-critical-values-by-bump-functions` · example — Two equal critical levels can be separated by adding disjoint bump perturbations near the corresponding critical points
- `cex-morse-functions-need-not-have-distinct-critical-values` · counterexample — A Morse function can have two different critical points with the same critical value
- `cex-noncompact-smallness-without-the-strong-topology-can-create-critical-points-at-infinity` · counterexample — Uniformly tiny perturbations on larger and larger shells of a noncompact manifold can create new critical points far out

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — exact closure recovery, `frontier-30`

Read `research/frontier-30-judge-closure.json`,
`research/frontier-30-judge.jsonl`,
`research/frontier-30-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-30-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-30-step8-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/frontier-30-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
