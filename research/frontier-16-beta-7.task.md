# Batch 7 of run `frontier-16` — Analyticity of Holomorphic Functions; Liouville and Morera

1 A/B pair, complex-analysis. You own every page here and you author them all at step 5.

## `analyticity-liouville-and-morera`

| | |
|---|---|
| A page | `analyticity-liouville-and-morera` · order **311** · `complex-analysis` |
| B page | `analyticity-liouville-and-morera-examples` |
| title | Analyticity of Holomorphic Functions; Liouville and Morera |
| requires | `goursat-and-cauchys-theorem-in-a-convex-domain`, `complex-power-series-and-analytic-functions` |
| design | `plan-complex-analysis-track.md` L1106 |

**Open the design section and hold yourself to what it states.** The traps, the decided conventions and the chosen route for this page are written there, by whoever designed it, with the sources to hand. They are not repeated here: this file is generated and has read no mathematics. A scaffold that contradicts a decision the design records is wrong however rich it looks.

Check the design's stated `order` and prerequisites against `research/plan-spec.json` above. **If they disagree, do not pick one** — record it in your notes and carry on with the spec. Stage 1's `drift` unit adjudicates design-vs-spec conflicts for the whole run, and settling one inside a batch is how two batches end up built against two different plans.

## Standing, for every pair here

- **Two independent treatments**, at least one a textbook, monograph or full lecture-note set with a harvestable table of contents. Wikipedia is a convention tiebreaker, never a pair's backing.
- **Enumerate each source's own section and named-result headings** over the exact range you read, and give every harvested heading a disposition: `included` (naming the item id), `inline`, `already-published`, `deferred` or `out-of-scope` — the last two with a written reason about that specific result.
- **Self-contained scope.** No item may rest on a result the library has not established. If a needed result is missing, build the prerequisite definitions and theorems; dropping it for want of a lemma you could have written is not a permitted disposition.
- **An A page over 60 items is SPLIT**, decided now. `validate-plan.mjs` enforces it, and after authoring a split is a rewrite.
- **Never pad.** Decompose long proofs into focused lemmas and make a pass for cheaply proved corollaries; never mint a statement to enrich a page.

**No permission prompts of any kind**, including inside an `&&` chain.

## One verified fact about this page, added during the run

`analyticity-liouville-and-morera`'s Liouville material reaches the fundamental
theorem of algebra, and the design says CA-5 "cites the canonical statement on
`the-fundamental-theorem-of-algebra` once that predecessor is authored". **Read
that carefully: two different objects share the name.**

- The **page** `the-fundamental-theorem-of-algebra` (order 139,
  `abstract-algebra`) is the planned *algebraic* proof — `items: []`, unbuilt,
  and its own `requires` names two unbuilt Galois pages. It is not available and
  will not be during this run.
- The **theorem is published**:
  `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`, `landmark: true`,
  `status: published`, on the A page `the-complex-exponential-and-eulers-formula`
  (order 189, real-analysis), by the d'Alembert minimum-modulus route over
  `lem-complex-polynomial-growth-and-minimum-modulus` and
  `lem-dalembert-minimum-modulus-descent`.

That page is already inside this page's transitive `requires` closure, so the
published statement is citable as it stands — no new edge and no `external_refs`
entry.

**And a second proof is wanted, not avoided** (owner, 2026-08-20: *"I do not
mind having duplicate theorems if they are proved in different ways, it's good
for mathematical richness"*). The Liouville route to the fundamental theorem of
algebra is genuinely different from the d'Alembert minimum-modulus route — it
goes through boundedness of an entire function, not through a descent on |p|.
So the fuller form is the preferred one here: **a theorem with its own Liouville
proof**, with a distinct id naming the route (matching the published item's own
convention of putting the route in the id), its own component provenance and
contract, and a cross-reference each way so a reader meets both proofs. A
`rem-` that only points at the published statement is thinner than this page can
honestly carry.

What is still forbidden: writing the *same* proof twice, and inventing a claim
to fill the page. The statement must remain the source-backed one.

Verified from disk on 2026-08-20 by the monitoring session, after the step-0
drift review applied an edge to the order-139 page and blocked the whole
complex-analysis track. See `research/frontier-16-alpha-step0-drift.md`.
