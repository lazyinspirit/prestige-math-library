# Step 8 — group **a**, run `frontier-19`

You are the group Alpha for batches **1**, **9**: 3 A/B pair(s), 6 page(s), 103 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-19-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-19-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `blocks-primitivity-and-multiple-transitivity` | A | group-theory | 71.005 | `extraspecial-p-groups-and-central-products-examples` |
| 1 | `blocks-primitivity-and-multiple-transitivity-examples` | B | group-theory | 71.006 | `blocks-primitivity-and-multiple-transitivity` |
| 1 | `geometric-actions-svarc-milnor-and-growth` | A | group-theory | 302.003 | `cayley-graphs-word-metrics-and-quasi-isometry-examples`, `modules-over-a-pid-and-canonical-forms` |
| 1 | `geometric-actions-svarc-milnor-and-growth-examples` | B | group-theory | 302.004 | `geometric-actions-svarc-milnor-and-growth` |
| 9 | `kan-extensions-density-and-the-free-cocompletion` | A | category-theory | 365.011 | `ends-coends-and-weighted-limits-examples` |
| 9 | `kan-extensions-density-and-the-free-cocompletion-examples` | B | category-theory | 365.012 | `kan-extensions-density-and-the-free-cocompletion` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `blocks-primitivity-and-multiple-transitivity` — Blocks Primitivity and Multiple Transitivity (23 item(s))

- `def-block-and-block-system-for-a-group-action` · definition — Blocks and block systems for a group action
- `lem-translates-of-a-block-form-a-g-invariant-partition-of-its-orbit` · lemma — The translates of a block partition its orbit
- `thm-block-systems-and-g-invariant-equivalence-relations-correspond` · theorem — Block systems are exactly the invariant equivalence relations
- `def-primitive-and-imprimitive-actions` · definition — Primitive and imprimitive transitive actions
- `prop-blocks-in-a-finite-transitive-action-have-equal-size` · proposition — Blocks in a finite transitive action have a common size
- `thm-subgroup-block-correspondence` · theorem — Blocks containing a point correspond to intermediate subgroups
- `cor-primitivity-is-equivalent-to-maximality-of-a-point-stabilizer` · corollary — A transitive action on more than one point is primitive exactly when a point stabilizer is maximal
- `cor-transitive-actions-of-prime-degree-are-primitive` · corollary — A transitive action of prime degree is primitive
- `thm-normal-subgroups-of-a-primitive-action-are-transitive-or-kernel-contained` · theorem — Normal subgroups of a primitive action are transitive or lie in the kernel
- `def-regular-actions` · definition — Regular actions
- `cor-abelian-normal-subgroups-of-faithful-primitive-actions-are-regular` · corollary — Abelian normal subgroups of faithful primitive actions are regular
- `def-k-transitive-and-k-homogeneous-actions` · definition — k-transitive and k-homogeneous actions
- `lem-k-transitive-actions-are-k-homogeneous-and-lower-transitive` · lemma — k-transitivity implies k-homogeneity and lower transitivity
- `prop-doubly-transitive-actions-are-primitive` · proposition — Every doubly transitive action is primitive
- `def-rank-suborbits-and-subdegrees-of-a-transitive-action` · definition — Rank, suborbits, and subdegrees of a transitive action
- `thm-orbits-on-ordered-pairs-correspond-to-suborbits` · theorem — Orbits on ordered pairs correspond to suborbits
- `cor-doubly-transitive-actions-are-exactly-the-rank-two-transitive-actions` · corollary — A transitive action on more than one point is doubly transitive exactly when it has rank two
- `def-sharply-k-transitive-actions` · definition — Sharply k-transitive actions
- `prop-finite-sharply-k-transitive-actions-have-order-falling-factorial` · proposition — A finite sharply k-transitive action has order n(n-1)...(n-k+1)
- `def-imprimitive-wreath-product-of-permutation-groups` · definition — The imprimitive wreath product of permutation groups
- `thm-transitive-imprimitive-groups-embed-in-an-imprimitive-wreath-product` · theorem — A transitive imprimitive action embeds modulo its kernel in an imprimitive wreath product
- `thm-iwasawa-simplicity-criterion-for-primitive-actions` · theorem — Iwasawa's simplicity criterion for primitive actions
- `cor-iwasawa-criterion-for-faithful-finite-actions` · corollary — The finite Iwasawa criterion

### `blocks-primitivity-and-multiple-transitivity-examples` — Blocks Primitivity and Multiple Transitivity — Examples (12 item(s))

- `ex-blocks-in-a-regular-cyclic-action` · example — Blocks in a regular cyclic action are cosets of subgroups
- `ex-natural-actions-of-symmetric-and-alternating-groups` · example — The natural actions of symmetric and alternating groups
- `ex-affine-general-linear-group-is-two-transitive` · example — Affine general linear groups are doubly transitive
- `ex-dihedral-actions-of-prime-and-composite-degree` · example — Dihedral actions of prime and composite degree
- `ex-projective-linear-action-and-iwasawas-hypotheses` · example — Projective linear actions and Iwasawa's hypotheses
- `ex-imprimitive-wreath-product-block-system` · example — The imprimitive wreath product preserves its fiber blocks
- `cex-two-homogeneous-need-not-be-two-transitive` · counterexample — The square-affine group of F_7 is 2-homogeneous but not 2-transitive
- `fs-every-transitive-action-is-primitive` · false-statement — FALSE: every transitive action is primitive
- `fs-a-block-is-an-invariant-subset` · false-statement — FALSE: every block is an invariant subset
- `fs-every-two-homogeneous-action-is-two-transitive` · false-statement — FALSE: every 2-homogeneous action is 2-transitive
- `fs-every-nontrivial-normal-subgroup-of-a-primitive-group-is-regular` · false-statement — FALSE: every nontrivial normal subgroup of a faithful primitive group is regular
- `fs-iwasawas-criterion-needs-only-transitivity` · false-statement — FALSE: Iwasawa's criterion needs only transitivity

### `geometric-actions-svarc-milnor-and-growth` — Geometric Actions Svarc Milnor and Growth (20 item(s))

- `def-isometric-proper-and-cobounded-actions-on-metric-spaces` · definition — Isometric, proper, and cobounded actions on metric spaces
- `lem-metric-properness-agrees-with-proper-discontinuity-on-proper-discrete-metric-spaces` · lemma — Metric properness agrees with proper discontinuity on proper discrete metric spaces
- `def-geometric-action-on-a-metric-space` · definition — Geometric actions on metric spaces
- `lem-bounded-local-displacement-on-a-geodesic-space-implies-coarse-lipschitz` · lemma — Bounded local displacement on a geodesic space implies coarse Lipschitz control
- `lem-orbit-maps-of-isometric-actions-are-coarse-lipschitz` · lemma — Orbit maps of isometric actions are coarse Lipschitz
- `lem-cobounded-proper-geodesic-actions-produce-finite-generating-sets` · lemma — Cobounded proper geodesic actions produce finite generating sets
- `thm-svarc-milnor-lemma` · theorem — The Svarc-Milnor lemma
- `cor-groups-acting-geometrically-on-the-same-space-are-quasi-isometric` · corollary — Groups acting geometrically on the same space are quasi-isometric
- `def-growth-function-of-a-finitely-generated-group` · definition — The growth function of a finitely generated group
- `def-growth-comparison-and-growth-type` · definition — Growth comparison and growth type
- `lem-growth-comparison-is-a-preorder` · lemma — Growth comparison is a preorder
- `thm-growth-type-is-independent-of-the-finite-generating-set` · theorem — Growth type is independent of the finite generating set
- `thm-growth-type-is-a-quasi-isometry-invariant-of-finitely-generated-groups` · theorem — Growth type is a quasi-isometry invariant of finitely generated groups
- `def-polynomial-subexponential-exponential-and-intermediate-growth` · definition — Polynomial, subexponential, exponential, and intermediate growth
- `thm-free-groups-of-rank-at-least-two-have-exponential-growth` · theorem — Free groups of rank at least two have exponential growth
- `def-homogeneous-dimension-of-a-finitely-generated-nilpotent-group` · definition — The homogeneous dimension of a finitely generated nilpotent group
- `rem-bass-guivarch-growth-degree-formula` · remark — Bass-Guivarch growth-degree formula
- `cor-finitely-generated-nilpotent-groups-have-polynomial-growth` · corollary — Finitely generated nilpotent groups have polynomial growth
- `rem-gromov-polynomial-growth-theorem` · remark — Gromov's polynomial-growth theorem
- `rem-grigorchuk-groups-of-intermediate-growth` · remark — Grigorchuk groups of intermediate growth

### `geometric-actions-svarc-milnor-and-growth-examples` — Geometric Actions Svarc Milnor and Growth — Examples (12 item(s))

- `ex-integers-acting-geometrically-on-the-line` · example — The integers act geometrically on the real line
- `ex-z-n-acting-geometrically-on-euclidean-n-space` · example — Z^n acts geometrically on Euclidean n-space
- `ex-free-groups-acting-geometrically-on-regular-trees` · example — Free groups act geometrically on regular trees
- `ex-a-proper-isometric-action-that-is-not-cobounded` · example — Horizontal translations of Z on the Euclidean plane are proper but not cobounded
- `ex-growth-of-free-abelian-groups` · example — Free abelian groups have polynomial growth of the expected degree
- `ex-growth-degree-of-the-discrete-heisenberg-group` · example — The discrete Heisenberg group has growth degree four
- `cex-quasi-isometric-spaces-without-bounded-geometry-need-not-have-comparable-ball-counts` · counterexample — Quasi-isometry without bounded geometry need not preserve local ball counts
- `fs-proper-action-means-every-orbit-is-bounded` · false-statement — FALSE: a proper isometric action has bounded orbits
- `fs-cobounded-and-cocompact-are-unconditionally-identical` · false-statement — FALSE: cobounded and cocompact are identical without extra hypotheses
- `fs-growth-function-is-independent-of-the-generating-set-pointwise` · false-statement — FALSE: the growth function is independent of the generating set pointwise
- `fs-every-subexponential-growth-group-has-polynomial-growth` · false-statement — FALSE: every subexponential growth group has polynomial growth
- `fs-gromovs-polynomial-growth-theorem-is-proved-on-this-page` · false-statement — FALSE: Gromov's polynomial-growth theorem is proved on this page

### `kan-extensions-density-and-the-free-cocompletion` — Kan Extensions Density and the Free Cocompletion (29 item(s))

- `def-left-and-right-kan-extension` · definition — Left and right Kan extensions
- `rem-the-left-right-naming-clash` · remark — Mac Lane's warning about left and right Kan extensions
- `thm-kan-extensions-are-unique-up-to-unique-isomorphism` · theorem — Kan extensions are unique up to unique isomorphism
- `def-global-kan-extension` · definition — Global Kan extensions as adjoints to restriction
- `thm-lan-is-left-adjoint-to-restriction-which-is-left-adjoint-to-ran` · theorem — Lan is left adjoint to restriction, and restriction is left adjoint to Ran
- `thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions` · theorem — Comma-category limit and colimit formulae compute Kan extensions
- `def-pointwise-kan-extension-by-the-comma-category-formula` · definition — Pointwise Kan extensions by the comma-category formula
- `thm-existence-of-pointwise-kan-extensions` · theorem — Pointwise Kan extensions exist under smallness and completeness hypotheses
- `def-pointwise-kan-extension-by-preservation-by-representables` · definition — Pointwise Kan extensions as those preserved by representables
- `thm-the-two-notions-of-pointwise-agree` · theorem — The comma-category and representable-preservation notions of pointwise Kan extension agree
- `def-absolute-kan-extension` · definition — Absolute Kan extension
- `thm-left-adjoints-preserve-left-kan-extensions` · theorem — Left adjoints preserve left Kan extensions
- `thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise` · theorem — A pointwise Kan extension along a fully faithful functor genuinely extends the original functor
- `thm-kan-extensions-as-coends` · theorem — Kan extensions as coends and ends
- `thm-limits-and-colimits-are-kan-extensions-along-the-functor-to-the-terminal-category` · theorem — Limits and colimits are Kan extensions along the functor to the terminal category
- `thm-an-adjunction-is-an-absolute-kan-extension` · theorem — Adjunctions as absolute Kan extensions, with the preserved converse
- `thm-evaluation-is-the-limit-over-the-coslice-category` · theorem — Evaluation is the limit over the coslice category
- `thm-evaluation-is-the-colimit-over-the-slice-category` · theorem — Evaluation is the colimit over the slice category
- `thm-density-for-a-small-category` · theorem — Density theorem for a small category
- `thm-density-as-a-self-kan-extension-for-a-small-category` · theorem — The Yoneda embedding is its own pointwise left Kan extension
- `def-dense-subcategory` · definition — Dense functor and dense subcategory
- `thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion` · theorem — The presheaf category on a small category is the free cocompletion
- `def-codensity-monad` · definition — Codensity monad
- `thm-the-codensity-construction-satisfies-the-monad-laws` · theorem — The codensity construction satisfies the monad axioms
- `thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad` · theorem — The codensity monad of the small skeleton of finite sets is the ultrafilter monad
- `fs-every-kan-extension-is-pointwise` · false-statement — Every Kan extension is pointwise
- `fs-lan-along-a-fully-faithful-functor-always-restricts-back-to-the-original-functor` · false-statement — Along a fully faithful functor every left Kan extension restricts back to the original functor
- `fs-the-free-cocompletion-theorem-holds-for-a-large-source-category` · false-statement — The free cocompletion theorem holds for a large source category
- `fs-the-yoneda-embedding-preserves-colimits` · false-statement — The Yoneda embedding preserves colimits

### `kan-extensions-density-and-the-free-cocompletion-examples` — Kan Extensions Density and the Free Cocompletion — Examples (7 item(s))

- `ex-left-kan-extension-along-a-full-subcategory-inclusion` · example — A left Kan extension along a full inclusion
- `ex-a-kan-extension-computing-a-free-functor` · example — The free group functor as a Kan extension
- `ex-induction-and-coinduction-of-group-representations` · example — Induction and coinduction as Kan extensions along a subgroup inclusion
- `ex-the-orbit-category-kan-extension` · example — The orbit-category right Kan extension is the fixed-point functor
- `ex-density-computed-for-a-presheaf-on-a-two-object-category` · example — A two-object presheaf rebuilt as a colimit of representables
- `cex-a-kan-extension-that-is-not-pointwise` · counterexample — A fully faithful left Kan extension that is not pointwise
- `ex-lan-along-the-inclusion-of-the-rationals-in-the-reals` · example — The real exponential is the Kan extension of the rational exponential

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: both
lanes may have passed every item you own. Verify it against
`research/frontier-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — fatal-only adjudication of configured-judge verdicts, run `frontier-19`

You are a **group Alpha**. Step 8 is partitioned: each group Alpha adjudicates
the rejections against items in its own batches, and no rejection belongs to
two adjudicators. `research/frontier-19-step8-scope.json` is the partition, and
`research/frontier-19-alpha-<label>-step8.task.md` is your own group's copy — if you
are reading this file standalone, open the scope file and find your label before
anything else.

Within your group you are the **sole adjudicator** of a judge rejection. No
other agent may close one of your rows.

## The rule that governs this stage

**Only a `confirmed_fatal` adjudication licenses an edit.** A
`confirmed_nonfatal` or `false_positive` closes the rejection on its ledger
row with **no content, page, frontmatter, contract, impact, or judge
mutation**.

The reason is mechanical, not stylistic: any edit is a material rewrite, so a
step-8 polish voids `verification.judge`, forces a rejudge, and resamples a
refuter — an unbounded loop converging on nothing. Cosmetic polish belonged at
step 6, where no verdict existed to void.

**Two adjudication/repair/rejudge cycles are the hard ceiling.** Within those
rounds, your repair licence is the full set: rewrite part of the proof, write
the whole proof, correct the Statement/Definition/title, or add intermediate
lemmas — and if none closes the defect honestly, narrow or withdraw the claim.
After the second cycle, any item still carrying a confirmed fatal defect is a
terminal blocker for the owner or supervising session. Do not request or
perform a third judge cycle. The owner/session must resolve the mathematics
directly and bind that decision to the exact current item and context hashes in
`research/frontier-19-step8-terminal-resolutions.jsonl`; this is neither a judge
verdict nor a pass stamp.

**Every rejection is adjudicated, not the interesting ones.** The closure gate
checks that direction; `step8-guard` checks only the other one, that edits
were licensed.

## Read scope, write scope

**Read the whole library.** Your sandbox is the repository root: `items/` holds
every published item and every item this run has built, and the batch manifests
`research/frontier-19-batch-*.pages.json` say what the run is building and who owns
it. Open every item a rejection touches, including one in another group or one
published years ago. A dependency objection adjudicated without opening the
cited item is the failure `briefs/alpha.md` forbids the refuters, and it is no
better coming from you.

**Write only inside your own batches** — with one exception, published content,
below.

### A defect in another group's item: alert that group, never repair it

Record it in `research/frontier-19-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`,
adjudicate your own rejection on what is true, and carry on. The source tuple is
provenance only; it is never a verdict against the target item. Get `owning_group` from
`by_item` in `research/frontier-19-step8-scope.json`.

That row **is** the alert. `tools/step8-scope.mjs check` fails the stage while it
is unanswered, and the engine re-dispatches the owning group's Alpha against it —
so the finding reaches a reader who holds that batch's conventions, which you do
not. Write the finding so that reader can act on it: name the item, quote the
text you believe is wrong, and say what makes you think so. "Looks suspect" wastes
a dispatch. The engine assigns a stable alert id. The owning group appends a
decision to `research/frontier-19-step8-alert-decisions.jsonl`:

```
{version:1, alert_id, item, from_group, owning_group,
 outcome:"not_defect"|"nonfatal"|"covered_by_rejection"|"confirmed_fatal_unlicensed",
 rationale, target_rejection?, at}
```

`covered_by_rejection` requires `target_rejection:{id,model,context_sha256}` to
name a real rejection of the target plus an exact `confirmed_fatal`
adjudication. `confirmed_fatal_unlicensed` blocks and causes the engine to seek
a targeted judge verdict; it never licenses an edit by itself.

### A defect in a PUBLISHED item: repair it, then send it to Terra

Published pages are live on the site. If a rejection you are adjudicating exposes
an unambiguous falsehood in a published item — a false Definition, Statement,
Fact or equally load-bearing prose, or an inaccurate citation of one — **repair
it**. Do not route it to another group: no group owns published content, and
leaving a known falsehood live because it was out of scope is not a disposition.

Write one row to a namespaced temporary JSON file:

```
{kind: "repaired", id, group, found_via, pre_sha256, defect, correction_basis}
```

Append it with
`node tools/published-repairs.mjs append --run frontier-19 --file <rows.json>`.
Never edit the shared JSONL directly; group Alphas run concurrently.

`found_via` is the run item whose rejection exposed it. `defect` says what was
false. `correction_basis` says what makes the replacement right — the exact
source-checked statement with its conventions and hypotheses, or the elementary
check anyone can repeat. `pre_sha256` is the **guard form** of the item text
before your edit (`tools/item-hash.mjs` `itemHashGuard`, whole `verification:`
block excluded); without it the row licenses nothing and `step8-guard` reads your
edit as an unlicensed one.

**Then it goes to Terra.** `8-rejudge` sweeps every id in that ledger,
and `tools/step8-scope.mjs published` fails the stage until Terra has
returned a verdict on the repaired text and any rejection has been adjudicated.
This is the certification: published content has no step-6 reader left to certify
it, and no author certifies its own repair.

**What you must NOT do here.** The replacement is the source-checked statement or
a directly checkable elementary correction — never an unsupported nontrivial
theorem, and never a choice between two defensible conventions. **Deletions, id
changes and reading-order changes to published pages are the owner's alone.** If
the correction needs one of those, or a debatable restatement, or a new theorem,
or it leaves an impact queue open, it is not yours to make: record

```
{kind: "escalated", id, group, found_via, why}
```

and stop. An escalation is a correct action by the Alpha but a hard workflow
blocker until the owner resolves it; known unresolved published falsehoods do
not advance. Improvising on published mathematics is not allowed.

## Read the verdict for what it is

Terra is the sole Step-7 judge and shares the OpenAI family with the Betas that
authored this text and with you. Its verdict is one fresh-process reading, not
cross-family corroboration. Adjudicate every rejection from disk on its evidence;
do not inflate or discount it as agreement between independent model families.

A capacity refusal is a **null verdict, not a verdict**. Never adjudicate one.

## Before you adjudicate

The `pre-step8` snapshot is taken by the engine at stage `8-baseline`, before
any group Alpha is dispatched. **Do not take one yourself** — a second snapshot
under the same label after your first edit would license it retroactively.

Every adjudication row records `item_sha256` — the sha256 of the normalized
item text with the verification block excluded, **at adjudication time**.
Without it the guard cannot tell a licensed edit from an unlicensed one.

## What to do

For every rejection against an item in your batches, in
`research/frontier-19-judge.jsonl`:

1. Read the frozen verdict and the current text on disk.
2. Record in `research/frontier-19-judge-adjudications.jsonl`:
   `{id, model, context_sha256, item_sha256, outcome, defect_type?}` —
   `outcome` is `confirmed_fatal` | `confirmed_nonfatal` | `false_positive`;
   fatal types are `logic`, `dependency_citation`, `other`.
3. Apply repairs for `confirmed_fatal` only, and write each one's
   `research/defect-ledger.jsonl` row in the same act
   (`node tools/defect-ledger.mjs append` — one row per confirmed_fatal).
4. Name the exact changed items for rejudge. **Only touched items rejudge** —
   an unedited page-mate is spared even though the pair's context hash moved.

The adjudication ledger is **append-only and shared by every group**. Append;
never rewrite it, and never remove a row another group wrote.

## The gates

```
node tools/step8-guard.mjs --touches research/frontier-19-touches.json \
  --baseline pre-step8 --adjudications research/frontier-19-judge-adjudications.jsonl
node tools/step8-scope.mjs check --run frontier-19
```

Every item changed since the baseline must be licensed by a `confirmed_fatal`
row against the pre-edit state, and every cross-group finding must be answered
by the group that owns the item.

## Output

`research/frontier-19-alpha-step8-<label>.md`, where `<label>` is your group: every
rejection you were given, its adjudication, the evidence, and for each repair
what changed and why it was fatal. Name any cross-group finding you raised and
any you answered.

**No permission prompts of any kind**, including inside an `&&` chain.
