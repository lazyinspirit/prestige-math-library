# Beta scaffolding and source repair

The task determines whether this dispatch scaffolds, repairs a scaffold, scouts
a source, or re-harvests evidence. It names the batch, writable artifacts, and
required validators. Work only in that batch's task-authorised files; do not
modify plan structure, another batch, workflow state, or published content.
Do not request permissions.

Read the assigned design and source material rather than treating either as a
summary to paraphrase. A scaffold is a dependency-closed, source-grounded plan
for the mathematics that will actually be authored. Use stable, unused item ids
with the schema's kind prefixes; do not silently duplicate an existing claim.
Preserve valid dependencies, include the intermediate results a proof genuinely
needs, and propose an honest page split rather than removing needed content to
meet a size limit.

For every assigned A page, maintain the required coverage harvest: independent
sources, including an eligible primary treatment; an HTTP(S) URL and exact
locator for each source read; the source's own relevant headings or results;
and a concrete disposition for every harvested result. An `included` or
`inline` result must name the scaffolded item that carries it. A deferred or
out-of-scope result needs the destination or reason required by the task. Do
not treat a source citation as evidence that its contents were read.

## URL discipline

Fetch-verify each recorded source. When a URL fails, first recover an alternate
live URL or complete archive copy of the same document. Re-source only when the
same text is unavailable; then re-read the replacement, rewrite its harvest and
locators faithfully, and preserve `original_url` provenance. Never retain a
harvest row attributed to text you did not verify. A source repair must not
remove a result merely to clear a source gate.

Use [SCHEMA.md](../SCHEMA.md) for the proposed item and page contracts. Record
source support, dependency rationale, conventions, proposed proof strategy, and
known limits in the task-named notes. The task's validators, not a prose claim,
decide whether the batch is ready.


---

# This dispatch

run: frontier-22
role: beta
label: batch-4
covers: 4

# Batch 4 of run `frontier-22` — Algebraic and Spectral Graph Theory · Bull-Free Graphs and the Erdős–Hajnal Property

2 A/B pairs, combinatorics. You own every page here and you author them all at step 5.

## `algebraic-and-spectral-graph-theory`

| | |
|---|---|
| A page | `algebraic-and-spectral-graph-theory` · order **227** · `combinatorics` |
| B page | `algebraic-and-spectral-graph-theory-examples` |
| title | Algebraic and Spectral Graph Theory |
| requires | `block-designs-and-finite-projective-planes`, `the-spectral-theorem-and-singular-value-decomposition`, `determinants-of-matrices-over-a-commutative-ring`, `trees-forests-and-spanning-trees` |
| design | `plan-combinatorics-and-categories.md` L2376 |

**Open the design section and hold yourself to what it states.** The traps, the decided conventions and the chosen route for this page are written there, by whoever designed it, with the sources to hand. They are not repeated here: this file is generated and has read no mathematics. A scaffold that contradicts a decision the design records is wrong however rich it looks.

Check the design's stated `order` and prerequisites against `research/plan-spec.json` above. **If they disagree, do not pick one** — record it in your notes and carry on with the spec. Stage 1's `drift` unit adjudicates design-vs-spec conflicts for the whole run, and settling one inside a batch is how two batches end up built against two different plans.

## `bull-free-graphs-and-the-erdos-hajnal-property`

| | |
|---|---|
| A page | `bull-free-graphs-and-the-erdos-hajnal-property` · order **411** · `combinatorics` |
| B page | `bull-free-graphs-and-the-erdos-hajnal-property-examples` |
| title | Bull-Free Graphs and the Erdős–Hajnal Property |
| requires | `modules-substitution-and-prime-graphs`, `pure-pairs-forests-and-path-antipath-classes` |
| design | `plan-combinatorics-and-categories.md` L3905 (id mention, not a heading — locate the section yourself) |

**Open the design section and hold yourself to what it states.** The traps, the decided conventions and the chosen route for this page are written there, by whoever designed it, with the sources to hand. They are not repeated here: this file is generated and has read no mathematics. A scaffold that contradicts a decision the design records is wrong however rich it looks.

Check the design's stated `order` and prerequisites against `research/plan-spec.json` above. **If they disagree, do not pick one** — record it in your notes and carry on with the spec. Stage 1's `drift` unit adjudicates design-vs-spec conflicts for the whole run, and settling one inside a batch is how two batches end up built against two different plans.

## Standing, for every pair here

- **Two independent treatments**, at least one a textbook, monograph or full lecture-note set with a harvestable table of contents. Wikipedia is a convention tiebreaker, never a pair's backing.
- **Enumerate each source's own section and named-result headings** over the exact range you read, and give every harvested heading a disposition: `included` (naming the item id), `inline`, `already-published`, `deferred` or `out-of-scope` — the last two with a written reason about that specific result.
- **Self-contained scope.** No item may rest on a result the library has not established. If a needed result is missing, build the prerequisite definitions and theorems; dropping it for want of a lemma you could have written is not a permitted disposition.
- **An A page over 60 items is SPLIT**, decided now. `validate-plan.mjs` enforces it, and after authoring a split is a rewrite.
- **Never pad.** Decompose long proofs into focused lemmas and make a pass for cheaply proved corollaries; never mint a statement to enrich a page.

**No permission prompts of any kind**, including inside an `&&` chain.
